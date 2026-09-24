// SCENES 05–11 (illustrated world): city at dawn → house → through the window
// into the bedroom → the girl wakes, grabs her tablet, lights up → camera pulls
// back out through the window to the city.

import { SCENES } from '../config.js';
import { Track } from '../core/Track.js';
import { createWorld, bedroomToCity, BEDROOM_K, BLANKET_LYING, BLANKET_SITTING } from '../art/world.js';
import { createGirl } from '../art/girl.js';
import { pathNumbers, pathTemplate, fillTemplate } from '../art/rig.js';
import { setAttr, setOpacity, fmt, el } from '../art/svg.js';

// Bedroom-space shot → city-space camera key.
const B = (t, bx, by, bz, ease, px = 0) => {
  const c = bedroomToCity(bx, by);
  return { t, x: c.x, y: c.y, z: bz / BEDROOM_K, ease, px: px * BEDROOM_K };
};

export class BedroomScene {
  constructor(ctx) {
    this.ctx = ctx;
    const detail = ctx.responsive.profile.extraDetail;
    this.world = createWorld({ detail });
    this.cam = el('g', { class: 'tdc-world-cam' });
    this.cam.appendChild(this.world.root);
    ctx.layers.world.appendChild(this.cam);
    const p = this.world.parts;
    this.p = p;

    this.girl = createGirl();
    p.girlSlot.appendChild(this.girl.root);
    Object.assign(this.girl.state, {
      x: 742, y: 598, rot: 80, head: -12, armL: -2, armR: -2, foreL: -6, foreR: -6,
      lid: 1, mSleepy: 1, breathe: 1,
    });

    this.blanketTpl = pathTemplate(BLANKET_LYING);
    this.blanketA = pathNumbers(BLANKET_LYING);
    this.blanketB = pathNumbers(BLANKET_SITTING);
    this.blanketNums = this.blanketA.slice();
    this.fx = { blanket: 0, nsGlow: 0.35, nsTablet: 1, roomGlow: 0, glass: 1, sparkles: 0 };

    // Rising gold sparkles in front of her face when the class starts.
    this.sparkleGroup = el('g', { opacity: '0' }, p.bedroom);
    this.sparkles = Array.from({ length: 9 }, (_, i) => {
      const s = el('path', { d: 'M0 -6 L1.4 -1.4 L6 0 L1.4 1.4 L0 6 L-1.4 1.4 L-6 0 L-1.4 -1.4 Z', fill: i % 3 ? '#F2D892' : '#FFFFFF' }, this.sparkleGroup);
      return { el: s, x: 900 + ((i * 37) % 120), phase: i * 0.37, speed: 0.6 + (i % 4) * 0.15 };
    });

    this.buildCamera();
  }

  buildCamera() {
    const pe = this.ctx.gsap.parseEase;
    const [d0] = SCENES.dive;
    const [w0] = SCENES.bedroom;
    const [t0] = SCENES.tablet;
    const [b0] = SCENES.board;
    const [e0, e1] = SCENES.eyes;
    const [o0, o1] = SCENES.outside;
    const [r0] = SCENES.reveal;
    // x/y in city units, z = zoom (1 → 1600 city units across). `px` nudges the
    // framing on portrait screens so the subject stays in shot.
    const keys = [
      { t: d0 + 0.7, x: 808, y: 470, z: 0.62, ease: 'none', px: 0 },
      B(w0 - 0.04, 800, 500, 1.0, 'power2.in', 150),
      B(w0 + 0.5, 830, 515, 1.1, 'power2.out', 170),
      B(t0 - 0.05, 905, 530, 1.28, 'sine.inOut', 120),
      B(t0 + 0.6, 990, 500, 1.45, 'power2.inOut', 60),
      B(b0 - 0.3, 960, 470, 2.05, 'power2.inOut', 0),
      B(b0 - 0.02, 960, 526, 4.6, 'power2.in', 0),
      B(e0 - 0.02, 962, 392, 3.3, 'none', 0),
      B(e1 - 0.02, 962, 398, 3.9, 'sine.inOut', 0),
      { t: o0 + 0.55, x: 834, y: 476, z: 5.7, ease: 'power2.inOut', px: 8 },
      { t: o1 - 0.05, x: 838, y: 476, z: 5.2, ease: 'sine.inOut', px: 8 },
      { t: r0 + 0.42, x: 808, y: 520, z: 0.62, ease: 'power2.in', px: 0 },
    ];
    this.track = new Track(keys, { parseEase: pe, logKeys: ['z'], zoomPath: true });
  }

  build(tl) {
    const g = this.girl.state;
    const fx = this.fx;
    const [d0] = SCENES.dive;
    const [w0, w1] = SCENES.bedroom;
    const [t0, t1] = SCENES.tablet;
    const [b0] = SCENES.board;
    const [e0, e1] = SCENES.eyes;
    const [o0] = SCENES.outside;
    const [r0] = SCENES.reveal;

    // Layer visibility: the world appears under the dive clouds and leaves under the pull-back clouds.
    const layer = this.ctx.layers.world;
    tl.set(layer, { autoAlpha: 0 }, 0);
    tl.to(layer, { autoAlpha: 1, duration: 0.14 }, d0 + 0.62);
    tl.to(layer, { autoAlpha: 0, duration: 0.16 }, r0 + 0.4);
    // Window glass reflection fades as we pass through it.
    tl.to(fx, { glass: 0, duration: 0.14 }, w0 - 0.16);
    tl.to(fx, { glass: 1, duration: 0.2 }, o0 + 0.25);

    // 06 — asleep → stirs → sleepy yawn → notices the glowing tablet.
    tl.to(fx, { nsGlow: 1, duration: 0.18, yoyo: true, repeat: 5, ease: 'sine.inOut' }, w0 + 0.1);
    tl.to(g, { rot: 76, head: -18, duration: 0.14, yoyo: true, repeat: 1, ease: 'sine.inOut' }, w0 + 0.42);
    tl.to(g, { lid: 0.55, duration: 0.16 }, w0 + 0.55);
    tl.to(g, { lid: 1, duration: 0.07, yoyo: true, repeat: 1 }, w0 + 0.74);
    tl.to(g, { mSleepy: 0, mYawn: 1, browY: 2.5, duration: 0.14 }, w0 + 0.62);
    tl.to(g, { mYawn: 0, mSleepy: 1, duration: 0.12 }, w0 + 0.92);
    tl.to(g, { lookY: -1, lookX: 0.3, duration: 0.12 }, w0 + 1.0);
    tl.to(g, { lid: 0.05, browY: -3.5, mSleepy: 0, mO: 1, head: -4, duration: 0.14, ease: 'back.out(3)' }, w1 - 0.26);

    // 07 — sits up fast, scoots over, grabs the tablet, taps it: the screen wakes.
    tl.to(g, { rot: 0, x: 960, y: 612, head: 8, breathe: 0, duration: 0.3, ease: 'back.out(1.3)' }, t0);
    tl.to(g, { lookX: 1, lookY: 0.2, duration: 0.1 }, t0 + 0.12);
    tl.to(fx, { blanket: 1, duration: 0.3, ease: 'power2.out' }, t0);
    tl.to(g, { body: 26, armR: 76, foreR: 22, armL: 20, duration: 0.22, ease: 'power2.out' }, t0 + 0.28);
    tl.set(fx, { nsTablet: 0 }, t0 + 0.5);
    tl.set(g, { held: 1, heldX: 180, heldY: -60, heldRot: 12 }, t0 + 0.5);
    // Settles back with the tablet resting in her lap, hands on its lower corners.
    tl.to(g, { body: 0, heldX: 0, heldY: 30, heldRot: 0, armL: 5, foreL: -16, armR: 5, foreR: -16, head: 2, lookX: 0, lookY: 0.9, duration: 0.28, ease: 'power2.inOut' }, t0 + 0.5);
    tl.to(g, { mO: 0, mSoft: 1, duration: 0.1 }, t0 + 0.62);
    // Tap!
    tl.to(g, { handPointR: 1, armR: 14, foreR: -150, duration: 0.1 }, t0 + 0.8);
    tl.to(g, { foreR: -138, duration: 0.06, yoyo: true, repeat: 1 }, t0 + 0.9);
    tl.to(g, { spill: 0.75, faceLight: 0.5, duration: 0.12, ease: 'power2.out' }, t0 + 0.96);
    tl.to(fx, { roomGlow: 0.7, duration: 0.2 }, t0 + 0.96);
    tl.to(g, { handPointR: 0, armR: 5, foreR: -16, browY: -4, lid: 0, duration: 0.12 }, t0 + 1.04);

    // 09 — close-up: her eyes light up.
    tl.set(g, { mSoft: 0, mSmile: 0.0, reflect: 1, faceLight: 0.7, lookY: 0.75 }, b0);
    tl.to(g, { mSmile: 1, mSoft: 0, duration: 0.12 }, e0 + 0.12);
    tl.to(g, { sparkle: 1, pupil: 1.22, duration: 0.3, ease: 'back.out(3)' }, e0 + 0.2);
    tl.to(g, { browY: -5, duration: 0.2 }, e0 + 0.18);
    tl.to(g, { head: -4, duration: 0.16, yoyo: true, repeat: 1, ease: 'sine.inOut' }, e0 + 0.34);
    tl.to(fx, { sparkles: 1, duration: 0.25 }, e0 + 0.15);
    tl.set(fx, { roomGlow: 0.25 }, b0);
    tl.to(fx, { sparkles: 0, duration: 0.3 }, e1 + 0.1);
    tl.to(g, { sparkle: 0.6, duration: 0.3 }, e1);
    this.e0 = e0;
  }

  update(t, time) {
    const layer = this.ctx.layers.world;
    if (layer.style.visibility === 'hidden') return;
    const { W, H, portrait } = this.ctx.responsive;
    const k = this.track.at(t);
    const base = Math.max(W / 1600, H / 900);
    const s = base * k.z;
    const x = k.x + (portrait ? k.px : 0);
    setAttr(this.cam, 'transform', `translate(${fmt(W / 2 - x * s)} ${fmt(H / 2 - k.y * s)}) scale(${fmt(s)})`);

    const fx = this.fx;
    const nums = this.blanketNums;
    for (let i = 0; i < nums.length; i++) nums[i] = this.blanketA[i] + (this.blanketB[i] - this.blanketA[i]) * fx.blanket;
    setAttr(this.p.blanket, 'd', fillTemplate(this.blanketTpl, nums));
    setOpacity(this.p.nsGlow, fx.nsGlow * fx.nsTablet);
    setOpacity(this.p.tabletNS, fx.nsTablet);
    setOpacity(this.p.roomGlow, fx.roomGlow);
    setOpacity(this.p.glass, fx.glass);

    this.girl.apply(null, time);

    setOpacity(this.sparkleGroup, fx.sparkles);
    if (fx.sparkles > 0) {
      for (const sp of this.sparkles) {
        const q = ((t - this.e0) * sp.speed + sp.phase) % 1;
        const y = 540 - q * 260;
        const x = sp.x + Math.sin((t + sp.phase) * 5) * 12;
        setAttr(sp.el, 'transform', `translate(${fmt(x)} ${fmt(y)}) scale(${fmt(Math.sin(q * Math.PI) * 1.2)})`);
      }
    }
  }

  dispose() { this.cam.remove(); }
}
