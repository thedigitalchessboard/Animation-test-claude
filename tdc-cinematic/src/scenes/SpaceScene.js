// SCENES 01–04 backdrop: deep space (WebGL stars + drifting dust) and the
// illustrated space overlay with the astronaut learner and floating pieces.

import { SCENES } from '../config.js';
import { createAstronaut } from '../art/astronaut.js';
import { Prop } from '../art/rig.js';
import { group, uid } from '../art/svg.js';
import { pieceMarkup, pieceGradients } from '../art/pieces.js';

const STAR_VERT = `
attribute float aSize; attribute float aPhase; attribute vec3 aColor;
uniform float uTime; uniform float uPixel; uniform float uAlpha;
varying vec3 vColor; varying float vAlpha;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float tw = 0.65 + 0.35 * sin(uTime * (1.3 + aPhase) + aPhase * 17.0);
  vAlpha = tw * uAlpha;
  vColor = aColor;
  gl_PointSize = aSize * uPixel;
}`;
const STAR_FRAG = `
varying vec3 vColor; varying float vAlpha;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float core = smoothstep(0.5, 0.0, d);
  float a = pow(core, 2.2) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vColor, a);
}`;
const DUST_VERT = `
attribute float aSize; attribute float aPhase;
uniform float uTime; uniform float uPixel; uniform float uAlpha;
varying float vAlpha;
void main(){
  vec3 p = position;
  p.x += sin(uTime * 0.3 + aPhase * 6.0) * 0.25;
  p.y += cos(uTime * 0.25 + aPhase * 4.0) * 0.2;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uPixel * (6.0 / -mv.z);
  vAlpha = uAlpha * (0.35 + 0.65 * fract(aPhase * 7.0)) * smoothstep(0.4, 2.5, -mv.z);
}`;
const DUST_FRAG = `
varying float vAlpha;
void main(){
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.0, d) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(0.95, 0.85, 0.6, a);
}`;

function seeded(seed) {
  let s = seed;
  return () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
}

export class SpaceScene {
  constructor(ctx) {
    this.ctx = ctx;
    const { THREE } = ctx;
    const rnd = seeded(11);
    const profile = ctx.responsive.profile;

    // --- starfield ---
    const n = profile.stars;
    const pos = new Float32Array(n * 3);
    const size = new Float32Array(n);
    const phase = new Float32Array(n);
    const color = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const u = rnd() * 2 - 1, th = rnd() * Math.PI * 2, r = 60 + rnd() * 60;
      const s = Math.sqrt(1 - u * u);
      pos.set([r * s * Math.cos(th), r * u, r * s * Math.sin(th) - 20], i * 3);
      const big = rnd() < 0.06;
      size[i] = big ? 2.6 + rnd() * 2.2 : 0.8 + rnd() * 1.4;
      phase[i] = rnd();
      const k = rnd();
      const c = k < 0.08 ? [0.95, 0.85, 0.57] : k < 0.3 ? [0.72, 0.8, 1] : [1, 0.98, 0.94];
      color.set(c, i * 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    g.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
    g.setAttribute('aColor', new THREE.BufferAttribute(color, 3));
    this.starUniforms = { uTime: { value: 0 }, uPixel: { value: 1 }, uAlpha: { value: 1 } };
    this.stars = new THREE.Points(g, new THREE.ShaderMaterial({
      vertexShader: STAR_VERT, fragmentShader: STAR_FRAG, uniforms: this.starUniforms,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    }));
    this.stars.frustumCulled = false;
    ctx.three.scene.add(this.stars);

    // --- dust near the camera path ---
    const m = profile.dust;
    const dpos = new Float32Array(m * 3);
    const dsize = new Float32Array(m);
    const dphase = new Float32Array(m);
    for (let i = 0; i < m; i++) {
      dpos.set([(rnd() - 0.5) * 16, (rnd() - 0.5) * 9, 2 + rnd() * 14], i * 3);
      dsize[i] = 0.6 + rnd() * 1.6;
      dphase[i] = rnd();
    }
    const dg = new THREE.BufferGeometry();
    dg.setAttribute('position', new THREE.BufferAttribute(dpos, 3));
    dg.setAttribute('aSize', new THREE.BufferAttribute(dsize, 1));
    dg.setAttribute('aPhase', new THREE.BufferAttribute(dphase, 1));
    this.dustUniforms = { uTime: { value: 0 }, uPixel: { value: 1 }, uAlpha: { value: 0.8 } };
    this.dust = new THREE.Points(dg, new THREE.ShaderMaterial({
      vertexShader: DUST_VERT, fragmentShader: DUST_FRAG, uniforms: this.dustUniforms,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    }));
    this.dust.frustumCulled = false;
    ctx.three.scene.add(this.dust);

    // --- illustrated overlay: astronaut + floating pieces ---
    const gid = uid('space');
    this.overlayGroup = group(`<defs>${pieceGradients(gid)}</defs>`, { class: 'tdc-space' });
    ctx.layers.overlay.appendChild(this.overlayGroup);
    this.astronaut = createAstronaut({ logoUrl: ctx.assets.logoHorizontalUrl });
    this.overlayGroup.appendChild(this.astronaut.root);
    const mk = (type, tone) => {
      const gEl = group(pieceMarkup(type, `${gid}-${tone}`, { shadow: false, tone }));
      this.overlayGroup.appendChild(gEl);
      return new Prop(gEl);
    };
    this.pawn = mk('pawn', 'ivory');
    this.rook = mk('rook', 'gold');
    this.knight = mk('knight', 'gold'); // the one Coach Knight bumps
    this.pan = { x: 0.6, fade: 1 };
    this.zoom = { z: 1, fx: 0.7, fy: 0.46 };
    // Coach Knight shares the overlay camera zoom (but not the background pan).
    // On portrait screens the pair is spread apart a little so they never overlap.
    ctx.spacePlace = () => this.makePlace(ctx.responsive.portrait ? -0.07 : 0);
    Object.assign(this.astronaut.state, { x: 0.8, y: 0.56, scale: 1.32 });
  }

  build(tl) {
    const [c0, c1] = SCENES.coachFly;
    const [k0, k1] = SCENES.comedy;
    const [d0] = SCENES.dive;
    const a = this.astronaut.state;
    const bump = k0 + 0.05;
    this.bumpTime = bump;

    // The camera follows the coach, so the astronaut drifts into frame.
    tl.fromTo(this.pan, { x: 0.62 }, { x: 0, duration: c1 - c0 + 0.1, ease: 'power2.out' }, c0 + 0.02);
    tl.to(this.pan, { x: -0.05, duration: k1 - k0, ease: 'sine.inOut' }, k0 + 0.1);
    tl.to(this.pan, { fade: 0, duration: 0.35, ease: 'power1.in' }, d0 + 0.08);

    // Peacefully playing: little taps on the tablet (it shows the TDC logo).
    const tap = (at) => tl.to(a, { tap: 1, duration: 0.07, yoyo: true, repeat: 1, ease: 'power1.inOut' }, at);
    [c0 + 0.35, c0 + 0.62].forEach(tap);

    // The commotion: startled look → watches his knight float away →
    // looks at the coach → warm grin and a "no worries" nod → back to his game.
    tl.to(a, { lookX: -1, lookY: -0.4, lid: 0, browY: -2, head: -6, duration: 0.1, ease: 'power2.out' }, bump + 0.05);
    tl.to(a, { lookX: 0.8, lookY: -1, head: 5, duration: 0.18, ease: 'sine.inOut' }, bump + 0.28);
    tl.to(a, { lookX: -1, lookY: -0.2, head: -4, browY: -1, duration: 0.16, ease: 'sine.inOut' }, bump + 0.62);
    tl.to(a, { mSoft: 0, mGrin: 1, lid: 0.2, browY: 0, duration: 0.14 }, bump + 0.9);
    tl.to(a, { head: 7, duration: 0.13, yoyo: true, repeat: 3, ease: 'sine.inOut' }, bump + 0.95);
    tl.to(a, { lookX: 0, lookY: 0.8, lid: 0.25, head: 0, duration: 0.22, ease: 'sine.inOut' }, bump + 1.28);
    tl.to(a, { mGrin: 0.35, mSoft: 0.65, duration: 0.2 }, bump + 1.3);
    tap(bump + 1.42);

    // His floating chess set; the knight gets bumped and tumbles away.
    const kn = this.knight.state;
    tl.set(kn, { x: 0.63, y: 0.43, rot: -10, scale: 0.52, opacity: 1 }, 0);
    tl.to(kn, { x: 0.9, y: 0.16, rot: 420, scale: 0.44, duration: 1.1, ease: 'power2.out' }, bump);
    tl.to(kn, { x: 1.12, y: -0.08, rot: 640, duration: 0.8, ease: 'power1.in' }, bump + 1.1);
    tl.set(this.pawn.state, { x: 0.9, y: 0.3, rot: 14, scale: 0.4 }, 0);
    tl.set(this.rook.state, { x: 0.93, y: 0.78, rot: -22, scale: 0.36 }, 0);

    // The camera leans in gently for the comedy, then settles back for the dive.
    tl.fromTo(this.zoom, { z: 1 }, { z: 1.5, duration: 0.5, ease: 'sine.inOut' }, bump);
    tl.to(this.zoom, { z: 1, duration: 0.4, ease: 'sine.inOut' }, k1 - 0.3);
  }

  update(t, time) {
    this.starUniforms.uTime.value = time;
    this.dustUniforms.uTime.value = time;
    const px = this.ctx.three.renderer.getPixelRatio();
    this.starUniforms.uPixel.value = px;
    this.dustUniforms.uPixel.value = px;
    this.dustUniforms.uAlpha.value = t < SCENES.dive[0] + 0.1 ? 0.8 : 0.35;

    if (t > SCENES.dive[0] + 0.5 && t < SCENES.reveal[0]) return; // overlay hidden, nothing to place
    const pan = this.pan.x * (this.ctx.responsive.portrait ? 1.4 : 1);
    const place = this.place = this.makePlace(pan + (this.ctx.responsive.portrait ? 0.06 : 0));
    const bob = Math.sin(time * 1.6) * 0.008;
    this.overlayGroup.setAttribute('opacity', this.pan.fade.toFixed(3));
    const a = this.astronaut.state;
    const baseY = a.y;
    a.y = baseY + bob;
    a.rot = Math.sin(time * 0.9) * 3;
    this.astronaut.apply(place, time);
    a.y = baseY;
    const float = (prop, amp, sp) => {
      const s = prop.state; const y = s.y; const r = s.rot;
      if (t < this.bumpTime || prop !== this.knight) { s.y = y + Math.sin(time * sp) * amp; s.rot = r + Math.sin(time * sp * 0.7) * 6; }
      prop.apply(place);
      s.y = y; s.rot = r;
    };
    float(this.pawn, 0.01, 1.3);
    float(this.rook, 0.012, 1.1);
    float(this.knight, 0.008, 1.7);
  }

  /** Pixel placement with the overlay camera (pan + comedy zoom). */
  makePlace(pan = 0) {
    const { W, H, unit, profile } = this.ctx.responsive;
    const { fx, fy } = this.zoom;
    const portrait = this.ctx.responsive.portrait;
    const z = portrait ? 1 + (this.zoom.z - 1) * 0.35 : this.zoom.z;
    const cs = profile.charScale * (portrait ? 0.85 : 1);
    return (x, y, s) => ({
      x: ((x + pan - fx) * z + fx) * W,
      y: ((y - fy) * z + fy) * H,
      s: s * unit * cs * z,
    });
  }

  dispose() {
    this.overlayGroup.remove();
  }
}
