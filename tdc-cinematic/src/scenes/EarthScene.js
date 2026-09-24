// SCENES 01, 05, 11–13: the stylised "digital" Earth (dotted continents,
// dawn terminator, gold night lights), atmosphere, cloud layer, the WebGL
// camera path, and the DOM fly-through clouds that stitch space ↔ city.

import { SCENES, HOME, NODES, TARGET_DURATION } from '../config.js';
import { Track } from '../core/Track.js';

const EARTH_VERT = `
varying vec2 vUv; varying vec3 vN; varying vec3 vPos;
void main(){
  vUv = uv;
  vN = normalize(normalMatrix * normal);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vPos = mv.xyz;
  gl_Position = projectionMatrix * mv;
}`;
const EARTH_FRAG = `
uniform sampler2D uMap; uniform vec3 uSun; uniform float uDim; uniform float uDots;
varying vec2 vUv; varying vec3 vN; varying vec3 vPos;
void main(){
  vec4 tex = texture2D(uMap, vUv);
  float land = smoothstep(0.3, 0.7, tex.r);
  vec3 N = normalize(vN); vec3 V = normalize(-vPos);
  float ndl = dot(N, uSun);
  float day = smoothstep(-0.18, 0.4, ndl);
  vec3 ocean = mix(vec3(0.028, 0.075, 0.18), vec3(0.07, 0.19, 0.42), clamp(ndl, 0.0, 1.0));
  vec3 landC = mix(vec3(0.10, 0.2, 0.42), vec3(0.2, 0.36, 0.68), clamp(ndl, 0.0, 1.0));
  vec3 col = mix(ocean, landC, land);
  col += tex.g * uDots * vec3(0.97, 0.94, 0.86) * (0.1 + 0.26 * day);
  col *= 0.32 + 0.85 * day;
  float term = exp(-pow((ndl - 0.12) / 0.09, 2.0));
  col += vec3(1.0, 0.82, 0.5) * term * 0.09;
  col += vec3(1.0, 0.8, 0.42) * tex.b * (1.0 - day) * 1.4;
  vec3 H = normalize(uSun + V);
  col += vec3(1.0, 0.9, 0.72) * pow(max(dot(N, H), 0.0), 70.0) * (1.0 - land) * 0.55 * day;
  float fres = pow(1.0 - max(dot(N, V), 0.0), 2.6);
  col += vec3(0.28, 0.5, 1.0) * fres * (0.25 + 0.75 * day);
  gl_FragColor = vec4(col * uDim, 1.0);
}`;
const CLOUD_FRAG = `
uniform sampler2D uMap; uniform vec3 uSun; uniform float uAlpha;
varying vec2 vUv; varying vec3 vN; varying vec3 vPos;
void main(){
  float c = texture2D(uMap, vUv).r;
  vec3 N = normalize(vN);
  float ndl = dot(N, uSun);
  float day = smoothstep(-0.2, 0.45, ndl);
  vec3 col = mix(vec3(0.22, 0.3, 0.5), vec3(1.0, 0.97, 0.92), day);
  col += vec3(1.0, 0.7, 0.4) * exp(-pow(ndl / 0.16, 2.0)) * 0.25;
  float a = c * uAlpha * (0.35 + 0.65 * day);
  gl_FragColor = vec4(col, a);
}`;
const NODE_VERT = `
attribute float aDelay; attribute float aHome; attribute float aPhase;
uniform float uReveal; uniform float uTime; uniform float uPixel; uniform float uBoost;
varying float vA; varying float vHome; varying float vRing;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float on = smoothstep(aDelay, aDelay + 0.08, uReveal);
  vRing = fract(uTime * 0.7 + aPhase);
  vHome = aHome;
  vA = on;
  gl_PointSize = min((18.0 + 14.0 * aHome + 8.0 * uBoost) * (5.0 / -mv.z), 34.0) * on * uPixel;
}`;
const NODE_FRAG = `
varying float vA; varying float vHome; varying float vRing;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c) * 2.0;
  float core = smoothstep(0.32, 0.0, d);
  float halo = smoothstep(1.0, 0.0, d) * 0.35;
  float ring = smoothstep(0.08, 0.0, abs(d - vRing)) * (1.0 - vRing) * 0.8;
  vec3 col = mix(vec3(0.95, 0.8, 0.45), vec3(1.0, 0.97, 0.85), core);
  float a = (core + halo + ring) * vA;
  if (a < 0.01) discard;
  gl_FragColor = vec4(col, a);
}`;

/** Same parametrisation as THREE.SphereGeometry, so texture and points line up. */
export function latLonToVec3(THREE, lat, lon, r = 1) {
  const phi = ((lon + 180) / 360) * Math.PI * 2;
  const theta = ((90 - lat) / 180) * Math.PI;
  return new THREE.Vector3(-r * Math.cos(phi) * Math.sin(theta), r * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta));
}

function hash3(x, y, z) {
  let h = x * 374761393 + y * 668265263 + z * 2147483647;
  h = (h ^ (h >>> 13)) * 1274126177;
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}
function valueNoise(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  const xf = x - xi, yf = y - yi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), w = zf * zf * (3 - 2 * zf);
  const l = (a, b, t) => a + (b - a) * t;
  const c = (dx, dy, dz) => hash3(xi + dx, yi + dy, zi + dz);
  return l(
    l(l(c(0, 0, 0), c(1, 0, 0), u), l(c(0, 1, 0), c(1, 1, 0), u), v),
    l(l(c(0, 0, 1), c(1, 0, 1), u), l(c(0, 1, 1), c(1, 1, 1), u), v), w);
}

export class EarthScene {
  constructor(ctx) {
    this.ctx = ctx;
    const { THREE } = ctx;
    const profile = ctx.responsive.profile;
    this.sun = new THREE.Vector3(0.82, 0.32, 0.48).normalize();

    this.group = new THREE.Group();          // position (final framing)
    this.spin = new THREE.Group();           // orientation (facing lat/lon)
    this.group.add(this.spin);
    ctx.three.scene.add(this.group);

    // Halo behind the planet.
    this.halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.haloTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.85,
    }));
    this.halo.scale.set(3.3, 3.3, 1);
    this.halo.renderOrder = -1;
    this.group.add(this.halo);

    const tex = new THREE.CanvasTexture(this.earthCanvas(ctx.assets.images.landMask, profile.earthTex));
    tex.anisotropy = 4;
    tex.wrapS = THREE.RepeatWrapping;
    this.earthUniforms = { uMap: { value: tex }, uSun: { value: this.sun.clone() }, uDim: { value: 1 }, uDots: { value: 1 } };
    this.earth = new THREE.Mesh(
      new THREE.SphereGeometry(1, profile.name === 'mobile' ? 64 : 96, profile.name === 'mobile' ? 48 : 72),
      new THREE.ShaderMaterial({ vertexShader: EARTH_VERT, fragmentShader: EARTH_FRAG, uniforms: this.earthUniforms }),
    );
    this.spin.add(this.earth);

    const ctex = new THREE.CanvasTexture(this.cloudCanvas(profile.cloudTex));
    ctex.wrapS = THREE.RepeatWrapping;
    this.cloudUniforms = { uMap: { value: ctex }, uSun: { value: this.sun.clone() }, uAlpha: { value: 0.55 } };
    this.clouds = new THREE.Mesh(
      new THREE.SphereGeometry(1.014, 64, 48),
      new THREE.ShaderMaterial({ vertexShader: EARTH_VERT, fragmentShader: CLOUD_FRAG, uniforms: this.cloudUniforms, transparent: true, depthWrite: false }),
    );
    this.spin.add(this.clouds);

    // Student points.
    const n = NODES.length;
    const pos = new Float32Array(n * 3), delay = new Float32Array(n), home = new Float32Array(n), phase = new Float32Array(n);
    NODES.forEach((node, i) => {
      latLonToVec3(THREE, node.lat, node.lon, 1.012).toArray(pos, i * 3);
      delay[i] = node.home ? 0.02 : 0.05 + ((i * 37) % 23) / 23 * 0.8;
      home[i] = node.home ? 1 : 0;
      phase[i] = (i * 0.137) % 1;
    });
    const ng = new THREE.BufferGeometry();
    ng.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    ng.setAttribute('aDelay', new THREE.BufferAttribute(delay, 1));
    ng.setAttribute('aHome', new THREE.BufferAttribute(home, 1));
    ng.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
    this.nodeUniforms = { uReveal: { value: 0 }, uTime: { value: 0 }, uPixel: { value: 1 }, uBoost: { value: 0 } };
    this.nodes = new THREE.Points(ng, new THREE.ShaderMaterial({
      vertexShader: NODE_VERT, fragmentShader: NODE_FRAG, uniforms: this.nodeUniforms,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    }));
    this.spin.add(this.nodes);

    this.buildCameraTrack();
    this.buildCloudLayer();
  }

  haloTexture() {
    const s = 256, c = document.createElement('canvas');
    c.width = c.height = s;
    const g = c.getContext('2d');
    const grd = g.createRadialGradient(s / 2, s / 2, s * 0.29, s / 2, s / 2, s / 2);
    grd.addColorStop(0, 'rgba(120,170,255,0.55)');
    grd.addColorStop(0.18, 'rgba(70,120,230,0.28)');
    grd.addColorStop(0.5, 'rgba(40,80,190,0.08)');
    grd.addColorStop(1, 'rgba(20,40,120,0)');
    g.fillStyle = grd; g.fillRect(0, 0, s, s);
    const t = new this.ctx.THREE.CanvasTexture(c);
    return t;
  }

  /** R = land, G = dot matrix on land (equal-area spacing), B = city lights. */
  earthCanvas(maskImg, W) {
    const H = W / 2;
    const c = document.createElement('canvas');
    c.width = W; c.height = H;
    const g = c.getContext('2d', { willReadFrequently: true });
    g.drawImage(maskImg, 0, 0, W, H);
    const mask = g.getImageData(0, 0, W, H);
    const m = mask.data;
    const out = g.createImageData(W, H);
    const o = out.data;
    const landAt = (x, y) => m[(((y | 0) * W + (((x | 0) % W + W) % W)) * 4)] / 255;
    const s = W / 256; // dot pitch
    const r0 = s * 0.3;
    let seed = 3;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
    for (let y = 0; y < H; y++) {
      const lat = (0.5 - (y + 0.5) / H) * Math.PI;
      const cl = Math.max(Math.cos(lat), 0.12);
      const sx = s / cl;
      const row = Math.floor(y / s);
      const cy = (row + 0.5) * s;
      const dy = y - cy;
      const off = (row % 2) * sx * 0.5;
      for (let x = 0; x < W; x++) {
        const i = (y * W + x) * 4;
        const land = m[i] / 255;
        const col = Math.floor((x - off) / sx);
        const cx = (col + 0.5) * sx + off;
        const dx = (x - cx) * cl;
        const d = Math.sqrt(dx * dx + dy * dy);
        let dot = 0;
        if (d < r0 + 1 && landAt(cx, cy) > 0.5) dot = Math.max(0, Math.min(1, r0 + 0.6 - d));
        o[i] = land * 255;
        o[i + 1] = dot * 255;
        o[i + 2] = 0;
        o[i + 3] = 255;
      }
    }
    // City lights: soft specks on land, brighter around student nodes.
    const lights = (x, y, rad, amp) => {
      for (let yy = Math.max(0, y - rad); yy < Math.min(H, y + rad); yy++) {
        for (let xx = x - rad; xx < x + rad; xx++) {
          const X = ((xx % W) + W) % W;
          const d = Math.hypot(xx - x, yy - y) / rad;
          if (d > 1) continue;
          const i = (yy * W + X) * 4;
          o[i + 2] = Math.min(255, o[i + 2] + amp * (1 - d) * (1 - d) * (m[i] > 100 ? 1 : 0.15));
        }
      }
    };
    for (let k = 0; k < W * 1.2; k++) {
      const x = rnd() * W, y = H * (0.18 + rnd() * 0.6);
      if (landAt(x, y) > 0.5) lights(x | 0, y | 0, Math.max(1, W / 1024), 110 + rnd() * 120);
    }
    NODES.forEach((nd) => {
      lights(Math.round(((nd.lon + 180) / 360) * W), Math.round(((90 - nd.lat) / 180) * H), Math.round(W / 220), 220);
    });
    g.putImageData(out, 0, 0);
    return c;
  }

  cloudCanvas(W) {
    const H = W / 2;
    const c = document.createElement('canvas');
    c.width = W; c.height = H;
    const g = c.getContext('2d');
    const img = g.createImageData(W, H);
    const d = img.data;
    for (let y = 0; y < H; y++) {
      const v = y / H;
      const lat = (0.5 - v) * Math.PI;
      const band = 0.55 + 0.45 * Math.abs(Math.sin(lat * 3));
      for (let x = 0; x < W; x++) {
        const a = (x / W) * Math.PI * 2;
        const px = Math.cos(a) * 2.2, pz = Math.sin(a) * 2.2, py = v * 4.4;
        let f = 0, amp = 0.55, fr = 1;
        for (let o = 0; o < 4; o++) { f += valueNoise(px * fr + 11, py * fr, pz * fr) * amp; amp *= 0.5; fr *= 2.1; }
        const val = Math.max(0, Math.min(1, (f - 0.5) * 2.6)) * band;
        const i = (y * W + x) * 4;
        d[i] = d[i + 1] = d[i + 2] = val * 255; d[i + 3] = 255;
      }
    }
    g.putImageData(img, 0, 0);
    return c;
  }

  buildCameraTrack() {
    const pe = this.ctx.gsap.parseEase;
    const [s0] = SCENES.space;
    const [n0] = SCENES.network;
    const [f0, f1] = SCENES.coachFly;
    const [, k1] = SCENES.comedy;
    const [d0] = SCENES.dive;
    const [r0, r1] = SCENES.reveal;
    const [b0, b1] = SCENES.brand;
    // dist: camera distance to Earth; camX/camY: parallel camera offset;
    // lat/lon: point of the globe facing the camera; earthY: planet offset.
    this.track = new Track([
      // 01 — slow, majestic approach out of deep space…
      { t: s0, dist: 22, camX: 0, camY: 0.12, lat: 12, lon: -34, earthY: 0 },
      { t: n0 + 0.1, dist: 8.2, camX: 0, camY: 0, lat: 15, lon: -8, earthY: 0, ease: 'power3.out' },
      // 02 — …then the camera breathes while the constellation connects.
      { t: f0, dist: 7.3, camX: 0.05, camY: 0, lat: 16, lon: 4, earthY: 0, ease: 'sine.inOut' },
      // 03 — pans with the coach as he flies across.
      { t: f1, dist: 6.7, camX: 1.9, camY: -0.1, lat: 17, lon: 16, earthY: 0, ease: 'sine.inOut' },
      // 04 — near-still drift during the comedy.
      { t: k1 - 0.1, dist: 6.4, camX: 2.2, camY: -0.14, lat: 16, lon: 26, earthY: 0, ease: 'sine.inOut' },
      // 05 — the dive: accelerate onto her home and into the atmosphere.
      { t: d0 + 0.55, dist: 1.7, camX: 0, camY: 0, lat: HOME.lat, lon: HOME.lon, earthY: 0, ease: 'power3.in' },
      { t: d0 + 0.9, dist: 1.1, camX: 0, camY: 0, lat: HOME.lat, lon: HOME.lon, earthY: 0, ease: 'power1.in' },
      // 11 — pull back from her home to the whole connected world, then settle.
      { t: r0 + 0.3, dist: 1.1, camX: 0, camY: 0, lat: HOME.lat, lon: HOME.lon, earthY: 0 },
      { t: r0 + 0.85, dist: 2.7, camX: 0, camY: 0, lat: HOME.lat, lon: HOME.lon - 5, earthY: 0, ease: 'power2.out' },
      { t: r1 - 0.2, dist: 4.9, camX: 0, camY: 0, lat: 26, lon: 42, earthY: 0, ease: 'power2.inOut' },
      { t: r1 + 0.05, dist: 4.85, camX: 0, camY: 0, lat: 25, lon: 45, earthY: 0, ease: 'sine.inOut' },
      // 12–15 — final horizon: the planet sinks low; its upper cap (Europe →
      // Asia, with the chess pieces standing on it) stays beneath the logo.
      { t: b1 - 0.15, dist: 4.9, camX: 0, camY: 0, lat: -8, lon: 42, earthY: -1.78, ease: 'power2.inOut' },
      { t: TARGET_DURATION, dist: 4.8, camX: 0, camY: 0, lat: -9, lon: 47, earthY: -1.8, ease: 'sine.out' },
    ], { parseEase: pe, logKeys: ['dist'] });
    this.b0 = b0;
  }

  buildCloudLayer() {
    const layer = this.ctx.layers.clouds;
    const count = this.ctx.responsive.profile.name === 'mobile' ? 10 : 18;
    let seed = 5;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
    this.puffs = [];
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'tdc-cloud';
      const ang = rnd() * Math.PI * 2;
      const rad = 0.08 + rnd() * 0.55;
      this.puffs.push({
        el, x: Math.cos(ang) * rad, y: Math.sin(ang) * rad * 0.7, depth: 0.12 + (i / count) * 1.0,
        w: 0.5 + rnd() * 0.6, tint: rnd(),
      });
      el.style.setProperty('--tint', rnd() < 0.5 ? '0' : '1');
      layer.appendChild(el);
    }
    this.haze = document.createElement('div');
    this.haze.className = 'tdc-haze';
    layer.appendChild(this.haze);
    this.cloud = { c: 0 };
  }

  build(tl) {
    const [d0, d1] = SCENES.dive;
    const [r0] = SCENES.reveal;
    const [n0, n1] = SCENES.network;
    const [b0] = SCENES.brand;
    // Student points appear across the globe during scenes 01–02.
    tl.fromTo(this.nodeUniforms.uReveal, { value: 0 }, { value: 1, duration: n1 - 0.6, ease: 'sine.inOut' }, 0.45);
    tl.to(this.nodeUniforms.uBoost, { value: 1, duration: 0.3 }, n0);
    // Fly-through clouds (dive) and back out (pull-back).
    tl.fromTo(this.cloud, { c: 0 }, { c: 1.25, duration: 0.62, ease: 'none' }, d0 + 0.42);
    tl.to(this.cloud, { c: 0, duration: 0.5, ease: 'none' }, r0 + 0.18);
    // Dim the globe as the network gathers into the logo.
    tl.to(this.earthUniforms.uDim, { value: 0.55, duration: 0.8, ease: 'power2.inOut' }, b0);
    tl.to(this.halo.material, { opacity: 0.45, duration: 0.8 }, b0);
    this.diveEnd = d1;
  }

  /** Applies the camera track (also used by the network scene). */
  update(t, time) {
    const { camera } = this.ctx.three;
    const { aspect, portrait } = this.ctx.responsive;
    const k = this.track.at(t);
    const distScale = aspect >= 1.3 ? 1 : 1 + (1.3 - aspect) * 0.8;
    const panScale = Math.min(1, aspect / 1.78);
    // Final horizon framing: on portrait screens keep the planet a little higher.
    const earthY = k.earthY * (portrait ? 1.22 : 1);
    camera.position.set(k.camX * panScale, k.camY, k.dist * (k.dist > 2.2 ? distScale : 1));
    camera.lookAt(k.camX * panScale, k.camY, 0);
    this.group.position.y = earthY;
    // The dot matrix is a far-away detail: fade it as the camera dives in.
    this.earthUniforms.uDots.value = Math.min(1, Math.max(0, (k.dist - 1.4) / 1.4));

    const lat = (k.lat * Math.PI) / 180;
    const lon = k.lon; // orientation is fully keyframed (deterministic)
    const phi = ((lon + 180) / 360) * Math.PI * 2;
    const az = Math.atan2(-Math.cos(phi), Math.sin(phi));
    this.spin.rotation.set(lat, -az, 0, 'XYZ');
    this.clouds.rotation.y = t * 0.012;

    this.nodeUniforms.uTime.value = time;
    this.nodeUniforms.uPixel.value = this.ctx.three.renderer.getPixelRatio() * (this.ctx.three.H / 900);

    // Sun direction in view space (fixed relative to the camera for a
    // consistent dawn-lit look across every shot).
    this.earthUniforms.uSun.value.copy(this.sun);
    this.cloudUniforms.uSun.value.copy(this.sun);

    this.updateClouds();
  }

  updateClouds() {
    const c = this.cloud.c;
    const layer = this.ctx.layers.clouds;
    const on = c > 0.001 && c < 1.249;
    layer.style.visibility = on ? 'visible' : 'hidden';
    if (!on) return;
    const { W, H } = this.ctx.responsive;
    const S = Math.max(W, H);
    for (const p of this.puffs) {
      const z = p.depth - c + 0.25;
      if (z <= 0.03) { p.el.style.opacity = '0'; continue; }
      const scale = 0.22 / z;
      const x = W / 2 + p.x * scale * S;
      const y = H / 2 + p.y * scale * S;
      const size = p.w * scale * S;
      const fadeNear = Math.min(1, (z - 0.03) / 0.12);
      const fadeFar = Math.min(1, Math.max(0, (1.1 - z) / 0.4));
      p.el.style.opacity = (fadeNear * fadeFar).toFixed(3);
      p.el.style.transform = `translate3d(${(x - size / 2).toFixed(1)}px, ${(y - size * 0.3).toFixed(1)}px, 0) scale(${(size / 100).toFixed(3)}, ${(size * 0.6 / 100).toFixed(3)})`;
    }
    // Full-screen white-out haze at the middle of the pass.
    const h = Math.max(0, 1 - Math.abs(c - 0.62) / 0.3);
    this.haze.style.opacity = (h * 0.9).toFixed(3);
  }

  dispose() {
    this.puffs.forEach((p) => p.el.remove());
    this.haze.remove();
  }
}
