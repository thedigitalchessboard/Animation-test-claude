// SCENES 01–04 backdrop: deep space (WebGL stars + drifting dust) and the
// illustrated space overlay with the astronaut learner and floating pieces.

import { SCENES } from '../config.js';
import { createAstronaut } from '../art/astronaut.js';
import { Prop } from '../art/rig.js';
import { group, uid, el } from '../art/svg.js';
import { Track } from '../core/Track.js';
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

    // --- illustrated overlay: two astronauts playing on a hovering holo-board ---
    const gid = uid('space');
    this.gid = gid;
    this.overlayGroup = group(`<defs>${pieceGradients(gid)}
      <linearGradient id="${gid}-beam" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stop-color="#BFD8FF" stop-opacity=".55"/><stop offset="1" stop-color="#BFD8FF" stop-opacity="0"/>
      </linearGradient>
      <radialGradient id="${gid}-under" cx=".5" cy=".5" r=".5">
        <stop offset="0" stop-color="#6FA0FF" stop-opacity=".45"/><stop offset="1" stop-color="#6FA0FF" stop-opacity="0"/>
      </radialGradient></defs>`, { class: 'tdc-space' });
    ctx.layers.overlay.appendChild(this.overlayGroup);

    // Player A holds the TDC tablet that projects the board; player B plays by hand.
    this.playerA = createAstronaut({ logoUrl: ctx.assets.logoHorizontalUrl });
    this.playerB = createAstronaut({ tablet: false, skin: '#EBC3A4', hair: '#C58A45' });
    this.beam = el('path', { fill: `url(#${gid}-beam)`, opacity: '0.8' }, this.overlayGroup);
    this.overlayGroup.appendChild(this.playerA.root);
    this.overlayGroup.appendChild(this.playerB.root);
    // The players live further along the stage: the camera pans to reveal them.
    Object.assign(this.playerA.state, { x: 1.35, y: 0.66, scale: 1.05, lookX: 0.6, lookY: 0.5 });
    Object.assign(this.playerB.state, { x: 1.655, y: 0.66, scale: 1.05, flipX: -1, lookX: 0.7, lookY: 0.5, lid: 0.15 });

    this.board = { x: 1.502, y: 0.53, s: 1.05 };
    this.boardEl = group(boardMarkup(gid), { class: 'tdc-holo-board' });
    this.overlayGroup.appendChild(this.boardEl);
    this.pieceLayer = el('g', {}, this.overlayGroup);
    // A calm mid-game: gold pieces (A) vs ivory pieces (B).
    const setup = [
      ['rook', 'ivory', 0, 7], ['king', 'ivory', 6, 7], ['pawn', 'ivory', 5, 6], ['pawn', 'ivory', 1, 6],
      ['bishop', 'ivory', 3, 5], ['queen', 'ivory', 4, 7],
      ['pawn', 'gold', 2, 1], ['pawn', 'gold', 6, 1], ['rook', 'gold', 7, 0], ['king', 'gold', 4, 0], ['queen', 'gold', 3, 0],
    ].sort((a, b) => (a[2] + a[3]) - (b[2] + b[3]));
    this.pieces = setup.map(([type, tone, i, j]) => {
      const g = group(pieceMarkup(type, `${gid}-${tone}`, { tone }));
      this.pieceLayer.appendChild(g);
      return { prop: new Prop(g, { scale: 0.24 }), i, j };
    });
    // The gold knight in play — the one Coach Knight knocks away.
    this.knight = new Prop(group(pieceMarkup('knight', `${gid}-gold`)), { scale: 0.27 });
    this.overlayGroup.appendChild(this.knight.root);
    this.knightFrom = [1, 2];
    this.knightTo = [2, 4];
    Object.assign(this.knight.state, this.sq(...this.knightFrom));
    this.selectRing = el('ellipse', { rx: '18', ry: '9.5', fill: 'none', stroke: '#F2D892', 'stroke-width': '2', opacity: '0' }, this.pieceLayer);
    this.fx = { select: 0, beam: 0.8, fade: 1 };

    // Overlay "stage camera": the coach, astronauts and board share it; the
    // Earth's WebGL camera pans with it so the whole shot moves as one.
    this.buildCamera();
    this.camNow = { fx: 0.5, fy: 0.5, z: 1 };
    ctx.spaceCam = this.camNow;
    ctx.spacePlace = () => this.makePlace();
  }

  /** Stage position of the centre of board square (file i, rank j). */
  sq(i, j) {
    const b = this.board;
    return { x: b.x + ((i - j) * 17 * b.s) / 1600, y: b.y + (((i + j) * 9 - 63) * b.s) / 900 };
  }

  buildCamera() {
    const pe = this.ctx.gsap.parseEase;
    const [c0, c1] = SCENES.coachFly;
    const [p0, p1] = SCENES.players;
    const [, s1] = SCENES.surprise;
    const [f0, f1] = SCENES.fix;
    const [, so1] = SCENES.sorry;
    const [fa0, fa1] = SCENES.farewell;
    const [d0] = SCENES.dive;
    this.camTrack = new Track([
      { t: 0, fx: 0.5, fy: 0.5, z: 1 },
      { t: c0, fx: 0.5, fy: 0.5, z: 1 },
      { t: c1 - 0.1, fx: 0.75, fy: 0.5, z: 1.02 },          // follow the coach…
      { t: p0 + 0.95, fx: 1.502, fy: 0.5, z: 1.14 },        // …onto the two players (settle)
      { t: p1, fx: 1.502, fy: 0.49, z: 1.18 },               // slow creep in: anticipation
      { t: s1, fx: 1.53, fy: 0.4, z: 1.24 },                 // the mishap
      { t: f1, fx: 1.51, fy: 0.4, z: 1.3 },
      { t: so1, fx: 1.505, fy: 0.4, z: 1.3 },                // the apology (held)
      { t: fa1, fx: 1.4, fy: 0.46, z: 1.12 },
      { t: d0 + 0.6, fx: 0.62, fy: 0.52, z: 1.0 },           // swing back toward Earth for the dive
      { t: d0 + 1.2, fx: 0.5, fy: 0.5, z: 1.0 },
    ], { parseEase: pe, logKeys: ['z'] });
    this.times = { c0, c1, p0, p1, f0, fa0 };
  }

  build(tl) {
    const [p0] = SCENES.players;
    const [b0] = SCENES.bump;
    const [s0] = SCENES.surprise;
    const [f0, f1] = SCENES.fix;
    const [so0] = SCENES.sorry;
    const [fa0, fa1] = SCENES.farewell;
    const [d0] = SCENES.dive;
    const A = this.playerA.state;
    const B = this.playerB.state;
    const kn = this.knight.state;
    const from = this.sq(...this.knightFrom);
    const to = this.sq(...this.knightTo);

    // 04a — a peaceful game. B strokes his chin, thinking; A taps the tablet:
    // the knight is selected and lifts off the board, hovering (anticipation).
    const tap = (at) => tl.to(A, { tap: 1, duration: 0.16, yoyo: true, repeat: 1, ease: 'sine.inOut' }, at);
    tl.to(B, { head: -5, duration: 0.6, yoyo: true, repeat: 1, ease: 'sine.inOut' }, p0 + 0.2);
    tap(p0 + 0.55);
    tl.to(this.fx, { select: 1, duration: 0.25 }, p0 + 0.75);
    tl.to(kn, { y: from.y - 0.05, rot: -6, duration: 0.45, ease: 'sine.out' }, p0 + 0.8);
    tl.to(A, { lookX: 0.8, lookY: -0.2, duration: 0.3, ease: 'sine.inOut' }, p0 + 0.8);
    tl.to(B, { lookX: 0.7, lookY: -0.3, lid: 0, browY: -1, duration: 0.3, ease: 'sine.inOut' }, p0 + 0.9);

    // 04b — WHOOSH: the knight is knocked away, tumbling slowly in zero-g.
    tl.to(this.fx, { select: 0, duration: 0.1 }, b0 + 0.02);
    tl.to(kn, { x: 1.69, y: 0.17, rot: 300, scale: 0.34, duration: 1.0, ease: 'power2.out' }, b0 + 0.02);

    // 04c — both astronauts are stunned (heads snap to follow it).
    tl.to([A, B], { mSoft: 0, mGrin: 0, mO: 1, browY: -2.5, lid: 0, duration: 0.14 }, b0 + 0.08);
    tl.to(A, { lookX: 1, lookY: -1, head: 6, duration: 0.25, ease: 'power2.out' }, b0 + 0.08);
    tl.to(B, { lookX: -0.6, lookY: -1, head: -6, armR: 10, duration: 0.25, ease: 'power2.out' }, b0 + 0.1);

    // 04d — the coach retrieves it (the knight rides in his hand) and sets it back.
    tl.to(kn, { x: 1.695, y: 0.175, rot: 340, duration: 0.3, ease: 'sine.out' }, f0);
    tl.to(kn, { x: from.x + 0.004, y: from.y - 0.085, rot: 360, scale: 0.27, duration: 0.55, ease: 'power2.inOut' }, f0 + 0.32);
    tl.to(kn, { y: from.y, rot: 360, duration: 0.25, ease: 'power2.in' }, f1 - 0.28);        // settle
    tl.set(kn, { rot: 0 }, f1 - 0.02);
    tl.to([A, B], { lookX: 0, lookY: -0.5, head: 0, duration: 0.25, ease: 'sine.inOut' }, f0 + 0.35);
    tl.to([A, B], { lookX: 0.2, lookY: 0.3, duration: 0.25 }, f1 - 0.3);

    // 04e — he apologises; they look up at him… and laugh it off.
    tl.to(A, { lookX: 0.9, lookY: -1, duration: 0.25 }, so0 + 0.05);
    tl.to(B, { lookX: -0.9, lookY: -1, duration: 0.25 }, so0 + 0.1);
    tl.to([A, B], { mO: 0, mGrin: 1, browY: 0, lid: 0.3, duration: 0.2 }, so0 + 0.55);
    tl.to(A, { head: 7, duration: 0.3, yoyo: true, repeat: 1, ease: 'sine.inOut' }, so0 + 0.6);
    tl.to(B, { armR: -40, foreR: 70, thumb: 1, head: -4, duration: 0.3, ease: 'back.out(1.6)' }, so0 + 0.7);

    // 04f — back to the game: A makes the move (lift → move → settle).
    tl.to(B, { armR: 0, foreR: 0, thumb: 0, lookX: 0.7, lookY: 0.5, head: 0, mGrin: 0.4, mSoft: 0.6, duration: 0.35, ease: 'sine.inOut' }, fa0 + 0.2);
    tl.to(A, { lookX: 0.6, lookY: 0.5, head: 0, mGrin: 0.5, mSoft: 0.5, duration: 0.3 }, fa0 + 0.15);
    tap(fa0 + 0.3);
    tl.to(kn, { y: from.y - 0.04, duration: 0.2, ease: 'sine.out' }, fa0 + 0.45);
    tl.to(kn, { x: to.x, duration: 0.4, ease: 'sine.inOut' }, fa0 + 0.62);
    tl.to(kn, { y: to.y - 0.05, duration: 0.2, ease: 'sine.out' }, fa0 + 0.62);
    tl.to(kn, { y: to.y, duration: 0.2, ease: 'power2.in' }, fa0 + 0.82);
    tl.to(this.fx, { fade: 0, duration: 0.45, ease: 'power1.in' }, d0 + 0.2);
    this.bumpTime = b0;
    this.d0 = d0;
  }

  /** Pixel placement through the stage camera. */
  makePlace() {
    const { W, H, unit, profile, portrait } = this.ctx.responsive;
    const c = this.camNow;
    const k = unit * c.z * (portrait ? 0.92 : 1);
    const cs = profile.charScale * (portrait ? 0.85 : 1);
    return (x, y, s) => ({ x: W / 2 + (x - c.fx) * 1600 * k, y: H / 2 + (y - c.fy) * 900 * k, s: s * k * cs });
  }

  update(t, time) {
    this.starUniforms.uTime.value = time;
    this.dustUniforms.uTime.value = time;
    const px = this.ctx.three.renderer.getPixelRatio();
    this.starUniforms.uPixel.value = px;
    this.dustUniforms.uPixel.value = px;
    this.dustUniforms.uAlpha.value = t < SCENES.dive[0] + 0.1 ? 0.8 : 0.35;
    Object.assign(this.camNow, this.camTrack.at(t));

    if (t > SCENES.dive[0] + 0.8 && t < SCENES.reveal[0]) return; // overlay hidden
    const place = this.makePlace();
    this.overlayGroup.setAttribute('opacity', this.fx.fade.toFixed(3));

    // Gentle zero-g float (slow, small: no jitter).
    const float = (rig, phase, amp = 0.004) => {
      const s = rig.state; const y = s.y; const r = s.rot;
      s.y = y + Math.sin(time * 1.1 + phase) * amp;
      s.rot = r + Math.sin(time * 0.7 + phase) * 1.5;
      rig.apply(place, time);
      s.y = y; s.rot = r;
    };
    float(this.playerA, 0);
    float(this.playerB, 2);

    const bob = Math.sin(time * 1.2) * 0.003;
    const b = place(this.board.x, this.board.y + bob, this.board.s);
    this.boardEl.setAttribute('transform', `translate(${b.x.toFixed(1)} ${b.y.toFixed(1)}) scale(${b.s.toFixed(4)})`);
    for (const pc of this.pieces) {
      const q = this.sq(pc.i, pc.j);
      pc.prop.state.x = q.x; pc.prop.state.y = q.y + bob;
      pc.prop.apply(place);
    }
    const kn = this.knight.state;
    const ky = kn.y;
    kn.y = ky + (t < this.bumpTime ? bob : 0);
    this.knight.apply(place);
    kn.y = ky;
    const ring = place(this.sq(...this.knightFrom).x, this.sq(...this.knightFrom).y + bob, 1);
    this.selectRing.setAttribute('transform', `translate(${ring.x.toFixed(1)} ${ring.y.toFixed(1)}) scale(${ring.s.toFixed(3)})`);
    this.selectRing.setAttribute('opacity', (this.fx.select * (0.7 + 0.3 * Math.sin(time * 5))).toFixed(3));

    // Light beam from A's tablet up to the board's near corner.
    const tabl = place(this.playerA.state.x + 0.02, this.playerA.state.y - 0.05, 1);
    const cL = place(this.board.x - (8 * 17) / 1600, this.board.y + bob, 1);
    const cB = place(this.board.x, this.board.y + bob + 72 / 900, 1);
    this.beam.setAttribute('d', `M${tabl.x.toFixed(1)} ${tabl.y.toFixed(1)} L${cL.x.toFixed(1)} ${cL.y.toFixed(1)} L${cB.x.toFixed(1)} ${cB.y.toFixed(1)} Z`);
  }

  dispose() {
    this.overlayGroup.remove();
  }
}

/** An isometric holographic chessboard (local px units, centred at 0,0). */
function boardMarkup(gid) {
  const a = 17, b = 9;
  let tiles = '';
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const cx = (i - j) * a, cy = (i + j) * b - 7 * b;
      tiles += `<path d="M${cx} ${cy - b} L${cx + a} ${cy} L${cx} ${cy + b} L${cx - a} ${cy} Z" fill="${(i + j) % 2 ? '#2C5BC4' : '#EDE7DA'}" fill-opacity="${(i + j) % 2 ? 0.78 : 0.86}"/>`;
    }
  }
  return `
    <ellipse cx="0" cy="${8 * b + 30}" rx="${8 * a + 30}" ry="${4 * b + 14}" fill="url(#${gid}-under)"/>
    <path d="M${-8 * a} 0 L0 ${8 * b} L0 ${8 * b + 10} L${-8 * a} 10 Z" fill="#132B57"/>
    <path d="M0 ${8 * b} L${8 * a} 0 L${8 * a} 10 L0 ${8 * b + 10} Z" fill="#0B1E3D"/>
    ${tiles}
    <path d="M0 ${-8 * b} L${8 * a} 0 L0 ${8 * b} L${-8 * a} 0 Z" fill="none" stroke="#F2D892" stroke-width="1.6" stroke-opacity=".9"/>
    <path d="M${-8 * a} 0 L0 ${8 * b} L${8 * a} 0" fill="none" stroke="#BFD8FF" stroke-width="1" stroke-opacity=".5" transform="translate(0 10)"/>`;
}
