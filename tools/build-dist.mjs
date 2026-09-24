// Dev-only: builds the production bundle into ../tdc-cinematic/dist/.
// Code-split ES modules: the tiny entry loads first; Three.js, GSAP and the
// scenes are separate chunks fetched only when the section nears the viewport.
import { build } from 'esbuild';
import { rmSync, readdirSync, statSync } from 'node:fs';

const pkg = new URL('../tdc-cinematic/', import.meta.url).pathname;
rmSync(pkg + 'dist', { recursive: true, force: true });
await build({
  entryPoints: [pkg + 'tdc-cinematic.js'],
  outdir: pkg + 'dist',
  bundle: true,
  splitting: true,
  format: 'esm',
  minify: true,
  target: 'es2020', // import.meta + dynamic import
  legalComments: 'inline',
  chunkNames: 'chunks/[name]-[hash]',
  define: { __TDC_ROOT__: '"../"' },
});
for (const f of readdirSync(pkg + 'dist', { recursive: true })) {
  const p = pkg + 'dist/' + f;
  if (statSync(p).isFile()) console.log(String(statSync(p).size).padStart(8), f);
}
