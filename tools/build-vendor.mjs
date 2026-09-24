// Dev-only: produces small, tree-shaken ES module builds of Three.js and GSAP in
// ../tdc-cinematic/vendor so the package runs with zero build step and no CDN.
// Re-run after changing THREE_EXPORTS (keep it in sync with what src/ imports).
import { build } from 'esbuild';
import { writeFileSync, mkdirSync, rmSync } from 'node:fs';

export const THREE_EXPORTS = [
  'WebGLRenderer', 'Scene', 'PerspectiveCamera', 'Group', 'Mesh', 'Points', 'Sprite',
  'SphereGeometry', 'BufferGeometry', 'BufferAttribute', 'Float32BufferAttribute', 'TubeGeometry',
  'ShaderMaterial', 'SpriteMaterial', 'CanvasTexture',
  'QuadraticBezierCurve3', 'Vector3', 'Vector2', 'Color', 'Matrix4',
  'AdditiveBlending', 'NormalBlending', 'BackSide', 'SRGBColorSpace', 'LinearFilter',
  'RepeatWrapping', 'ClampToEdgeWrapping', 'MathUtils',
];

const tmp = new URL('./.vendor-tmp/', import.meta.url);
mkdirSync(tmp, { recursive: true });
writeFileSync(new URL('three-entry.js', tmp), `export { ${THREE_EXPORTS.join(', ')} } from 'three';\n`);
writeFileSync(new URL('gsap-entry.js', tmp), `export { gsap } from 'gsap';\n`);

const common = { bundle: true, format: 'esm', minify: true, target: 'es2019', legalComments: 'inline', nodePaths: [new URL('./node_modules', import.meta.url).pathname] };
await build({ ...common, entryPoints: [new URL('three-entry.js', tmp).pathname], outfile: new URL('../tdc-cinematic/vendor/three.js', import.meta.url).pathname, banner: { js: '/* three.js r186 (MIT) — tree-shaken subset. https://threejs.org */' } });
await build({ ...common, entryPoints: [new URL('gsap-entry.js', tmp).pathname], outfile: new URL('../tdc-cinematic/vendor/gsap.js', import.meta.url).pathname, banner: { js: '/* GSAP 3.15 core — Standard "no charge" license. https://gsap.com/standard-license */' } });
rmSync(tmp, { recursive: true, force: true });
console.log('vendor bundles written');
