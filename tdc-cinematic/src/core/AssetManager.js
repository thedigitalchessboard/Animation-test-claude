// Loads libraries + images and prepares the official logo for compositing.
//
// Official-logo policy: the supplied files are used as-is. For the final
// reveal over the night sky we need the mark on a transparent background, so
// if no transparent file is supplied we *remove only the flat dark
// background* at runtime (exact un-premultiply, then trim empty margins).
// The artwork itself is never redrawn, recoloured, stretched or distorted.
// Supply `assets.logoTransparent` (PNG/SVG) to skip this step entirely.

const DEFAULT_ASSETS = {
  logoMark: 'assets/brand/tdc-logo-mark-dark.webp',            // white mark on dark (final reveal)
  logoHorizontal: 'assets/brand/tdc-logo-horizontal-light.webp', // black on white (tablet screens)
  logoTransparent: null,                                         // optional official transparent logo
  landMask: 'assets/earth/land-mask.webp',
};

export class AssetManager {
  constructor({ baseUrl, assets = {}, THREE = null, gsap = null } = {}) {
    this.baseUrl = baseUrl;
    this.paths = { ...DEFAULT_ASSETS, ...assets };
    this.injected = { THREE, gsap };
    this.images = {};
    this.textures = new Set();
  }

  url(path) {
    if (!path) return null;
    try { return new URL(path, this.baseUrl).href; } catch { return path; }
  }

  async loadLibraries() {
    const [THREE, gsap] = await Promise.all([
      this.injected.THREE || import('../../vendor/three.js'),
      this.injected.gsap || (window.gsap ?? import('../../vendor/gsap.js').then((m) => m.gsap)),
    ]);
    this.THREE = THREE;
    this.gsap = gsap;
    return { THREE, gsap };
  }

  loadImage(key, src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.decoding = 'async';
      img.crossOrigin = 'anonymous';
      img.onload = () => { this.images[key] = img; resolve(img); };
      img.onerror = () => reject(new Error(`[tdc-cinematic] could not load ${key}: ${src}`));
      img.src = src;
    });
  }

  async loadImages() {
    const p = this.paths;
    const jobs = [
      this.loadImage('logoHorizontal', this.url(p.logoHorizontal)),
      this.loadImage('landMask', this.url(p.landMask)),
    ];
    if (p.logoTransparent) jobs.push(this.loadImage('logoTransparent', this.url(p.logoTransparent)));
    else jobs.push(this.loadImage('logoMark', this.url(p.logoMark)));
    await Promise.all(jobs);

    this.logoHorizontalUrl = this.url(p.logoHorizontal);
    if (p.logoTransparent) {
      const img = this.images.logoTransparent;
      this.brandLogo = { url: this.url(p.logoTransparent), width: img.naturalWidth || 1000, height: img.naturalHeight || 1000 };
    } else {
      this.brandLogo = AssetManager.removeFlatBackground(this.images.logoMark);
    }
    return this;
  }

  /**
   * Removes a flat, dark background from a light-on-dark logo:
   * alpha from luminance distance to the sampled background, colour
   * recovered by un-premultiplying over that background, then margins trimmed.
   */
  static removeFlatBackground(img) {
    const w = img.naturalWidth, h = img.naturalHeight;
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const ctx = c.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(img, 0, 0);
    const data = ctx.getImageData(0, 0, w, h);
    const d = data.data;
    // Background = the outer 4% frame of the image (logo artwork never touches
    // it). Its median gives the colour; a high percentile gives the noise floor
    // so the background's grain/vignette becomes fully transparent.
    const band = Math.max(4, Math.round(Math.min(w, h) * 0.04));
    const rs = [], gs = [], bs = [], ls = [];
    for (let y = 0; y < h; y += 2) {
      for (let x = 0; x < w; x += 2) {
        if (x >= band && x < w - band && y >= band && y < h - band) continue;
        const i = (y * w + x) * 4;
        rs.push(d[i]); gs.push(d[i + 1]); bs.push(d[i + 2]);
        ls.push(0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2]);
      }
    }
    const pct = (arr, q) => arr.slice().sort((a, b) => a - b)[Math.min(arr.length - 1, Math.floor(arr.length * q))];
    const bg = [pct(rs, 0.5), pct(gs, 0.5), pct(bs, 0.5)];
    const floor = pct(ls, 0.995) + 4;
    const range = Math.max(1, 255 - floor);
    let minX = w, minY = h, maxX = 0, maxY = 0;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        const L = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
        let a = (L - floor) / range;
        a = a <= 0 ? 0 : a >= 1 ? 1 : a;
        if (a > 0) {
          for (let k = 0; k < 3; k++) d[i + k] = Math.min(255, Math.max(0, (d[i + k] - bg[k] * (1 - a)) / a));
          if (a > 0.2) {
            if (x < minX) minX = x; if (x > maxX) maxX = x;
            if (y < minY) minY = y; if (y > maxY) maxY = y;
          }
        }
        d[i + 3] = Math.round(a * 255);
      }
    }
    ctx.putImageData(data, 0, 0);
    const pad = Math.round(Math.max(w, h) * 0.015);
    minX = Math.max(0, minX - pad); minY = Math.max(0, minY - pad);
    maxX = Math.min(w - 1, maxX + pad); maxY = Math.min(h - 1, maxY + pad);
    const cw = maxX - minX + 1, ch = maxY - minY + 1;
    const out = document.createElement('canvas');
    out.width = cw; out.height = ch;
    out.getContext('2d').drawImage(c, minX, minY, cw, ch, 0, 0, cw, ch);
    return { url: out.toDataURL('image/png'), width: cw, height: ch };
  }

  dispose() {
    this.textures.forEach((t) => t.dispose?.());
    this.textures.clear();
    this.images = {};
  }
}
