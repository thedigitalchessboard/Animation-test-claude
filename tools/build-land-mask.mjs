// Dev-only: rasterises Natural Earth land polygons (world-atlas, public domain data)
// into an equirectangular greyscale mask used to paint the stylised Earth texture.
// Output: ../tdc-cinematic/assets/earth/land-mask.webp  (white = land, lossy webp is fine: it is blurred at runtime)
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { feature } from 'topojson-client';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_PATH || '/opt/node22/lib/node_modules/playwright');

const topo = JSON.parse(readFileSync(new URL('./node_modules/world-atlas/land-50m.json', import.meta.url)));
const geo = feature(topo, topo.objects.land);
const W = 2048, H = 1024;

// Unwrap longitudes so rings crossing the antimeridian stay continuous; the page
// then draws every ring at -W/0/+W offsets. Rings that wrap the whole globe
// (Antarctica) are closed through the south pole.
const polys = [];
for (const f of geo.features) {
  const g = f.geometry;
  const list = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
  for (const poly of list) {
    polys.push(poly.map(ring => {
      let prev = null, offset = 0;
      const pts = ring.map(([lon, lat]) => {
        if (prev !== null) {
          const d = lon - prev;
          if (d > 180) offset -= 360; else if (d < -180) offset += 360;
        }
        prev = lon;
        return [((lon + offset + 180) / 360) * W, ((90 - lat) / 180) * H];
      });
      const span = pts[pts.length - 1][0] - pts[0][0];
      if (Math.abs(span) > W * 0.9) {
        pts.push([pts[pts.length - 1][0], H], [pts[0][0], H]);
      }
      return pts.map(([x, y]) => [+x.toFixed(2), +y.toFixed(2)]);
    }));
  }
}

const browser = await chromium.launch();
const page = await browser.newPage();
const dataUrl = await page.evaluate(({ polys, W, H }) => {
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#fff';
  for (const shift of [-W, 0, W]) {
    for (const poly of polys) {
      ctx.beginPath();
      for (const ring of poly) {
        ring.forEach(([x, y], i) => (i ? ctx.lineTo(x + shift, y) : ctx.moveTo(x + shift, y)));
        ctx.closePath();
      }
      ctx.fill('evenodd');
    }
  }
  return c.toDataURL('image/webp', 0.6);
}, { polys, W, H });
await browser.close();

const out = new URL('../tdc-cinematic/assets/earth/land-mask.webp', import.meta.url);
writeFileSync(out, Buffer.from(dataUrl.split(',')[1], 'base64'));
console.log('wrote', out.pathname);
