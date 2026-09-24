// SCENES 05–11 (illustrated world): city at dawn → house → through the window
// into the bedroom → the girl wakes, grabs her tablet, lights up → camera pulls
// back out through the window to the city.

import { SCENES } from '../config.js';
import { Track } from '../core/Track.js';
import { createWorld, bedroomToCity, BEDROOM_K, WINDOW, BLANKET_LYING, BLANKET_SITTING } from '../art/world.js';
import { createGirl } from '../art/girl.js';
import { pathNumbers, pathTemplate, fillTemplate } from '../art/rig.js';
import { setAttr, setOpacity, fmt, el } from '../art/svg.js';

// Bedroom-space shot → city-space camera key.
const B = (t, bx, by, bz, _unused, px = 0) => {
  const c = bedroomToCity(bx, by);
  return { t, x: c.x, y: c.y, z: bz / BEDROOM_K, px: px * BEDROOM_K };
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
    this.fx = { blanket: 0, nsGlow: 0, nsTablet: 1, roomGlow: 0, glass: 1, sparkles: 0, dim: 0 };

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
    const [a0] = SCENES.arrive;
    const [w0, w1] = SCENES.bedroom;
    const [t0] = SCENES.tablet;
    const [b0] = SCENES.board;
    const [e0, e1] = SCENES.eyes;
    const [o0, o1] = SCENES.outside;
    const [r0] = SCENES.reveal;
    // x/y in city units, z = zoom (1 → 1600 city units across). `px` nudges the
    // framing on portrait screens so the subject stays in shot. The Track is a
    // smooth spline, so the camera glides through every key like a crane shot.
    const keys = [
      { t: d0 + 0.8, x: 808, y: 470, z: 0.62, px: 0 },
      { t: a0, x: 808, y: 490, z: 0.95, px: 0 },                 // city at dawn (breathe)
      { t: a0 + 0.6, x: 822, y: 480, z: 1.6, px: 20 },           // he comes down…
      { t: a0 + 1.2, x: 840, y: 477, z: 5.8, px: 22 },           // …and lands beside her window
      { t: a0 + 2.35, x: 840, y: 477, z: 6.6, px: 20 },          // peek, "shh" (held, slow push)
      { t: a0 + 2.95, x: 828, y: 476, z: 8.5, px: 0 },           // follow the sparkle in…
      B(w0 + 0.45, 800, 500, 1.0, 0, 150),                       // …through the window
      B(w0 + 1.3, 830, 515, 1.08, 0, 165),                       // quiet room
      B(w0 + 2.4, 880, 530, 1.3, 0, 120),                        // she wakes and stretches
      B(w1 - 0.05, 975, 548, 1.95, 0, 30),                       // push in: she notices
      B(t0 + 0.6, 985, 505, 1.45, 0, 60),                        // follows her reach
      B(t0 + 1.2, 965, 480, 1.75, 0, 20),                        // tablet in her lap
      B(b0 - 0.12, 960, 470, 2.3, 0, 0),                         // push in as it lights up
      B(b0 + 0.05, 960, 526, 4.6, 0, 0),                         // into the screen
      B(e0, 962, 392, 3.25, 0, 0),                               // her face, lit by the screen
      B(e0 + 0.8, 964, 408, 2.6, 0, 0),                          // ease back for the "yes!"
      B(e1 - 0.05, 962, 400, 2.9, 0, 0),
      { t: o0 + 0.75, x: 834, y: 476, z: 5.7, px: 8 },           // back out through the window
      { t: o1, x: 838, y: 476, z: 5.3, px: 8 },                  // the proud coach (held)
      { t: r0 + 0.55, x: 808, y: 520, z: 0.62, px: 0 },          // and away to the whole world
    ];
    this.track = new Track(keys, { parseEase: pe, logKeys: ['z'] });
  }

  build(tl) {
    const g = this.girl.state;
    const fx = this.fx;
    const [d0] = SCENES.dive;
    const [a0] = SCENES.arrive;
    const [w0, w1] = SCENES.bedroom;
    const [t0] = SCENES.tablet;
    const [b0] = SCENES.board;
    const [e0, e1] = SCENES.eyes;
    const [o0] = SCENES.outside;
    const [r0] = SCENES.reveal;

    // Layer visibility: the world appears under the dive clouds and leaves under the pull-back clouds.
    const layer = this.ctx.layers.world;
    tl.set(layer, { autoAlpha: 0 }, 0);
    tl.to(layer, { autoAlpha: 1, duration: 0.15 }, d0 + 0.75);
    tl.to(layer, { autoAlpha: 0, duration: 0.18 }, r0 + 0.45);
    // Window glass reflection fades as we pass through it.
    tl.to(fx, { glass: 0, duration: 0.2 }, w0 + 0.15);
    tl.to(fx, { glass: 1, duration: 0.3 }, o0 + 0.45);

    // The coach's sparkle reaches her tablet: it starts to glow softly.
    tl.to(fx, { nsGlow: 1, duration: 0.3 }, a0 + 3.0);
    tl.to(fx, { nsGlow: 0.45, duration: 0.55, yoyo: true, repeat: 5, ease: 'sine.inOut' }, a0 + 3.35);

    // 07 — a quiet, sleeping room (held)… eyelids flutter…
    tl.to(g, { lid: 0.75, duration: 0.18, yoyo: true, repeat: 1, ease: 'sine.inOut' }, w0 + 1.1);
    tl.to(g, { lid: 0.6, duration: 0.3, ease: 'sine.out' }, w0 + 1.45);
    // …a big, slow stretch and a yawn…
    tl.to(g, { armL: 165, armR: 160, foreL: 8, foreR: 10, rot: 76, head: -20, lid: 0.95, mSleepy: 0, mYawn: 1, browY: 3, duration: 0.5, ease: 'sine.inOut' }, w0 + 1.6);
    tl.to(g, { armL: -2, armR: 16, foreL: -6, foreR: -10, rot: 80, head: -12, lid: 0.6, mYawn: 0, mSleepy: 1, browY: 1.5, duration: 0.45, ease: 'sine.inOut' }, w0 + 2.3);
    // …rubs a sleepy eye…
    tl.to(g, { armR: 4, foreR: -166, duration: 0.3, ease: 'sine.inOut' }, w0 + 2.6);
    tl.to(g, { foreR: -158, duration: 0.12, yoyo: true, repeat: 3, ease: 'sine.inOut' }, w0 + 2.85);
    tl.to(g, { armR: -2, foreR: -6, duration: 0.3, ease: 'sine.inOut' }, w0 + 3.3);
    tl.to(g, { lid: 1, duration: 0.09, yoyo: true, repeat: 1 }, w0 + 3.2);
    // …glances at the glow… and notices: eyes open wide, curious "o". HOLD.
    tl.to(g, { lookY: -1, lookX: 0.3, duration: 0.3, ease: 'sine.inOut' }, w0 + 3.35);
    tl.to(g, { lid: 0.02, browY: -4, mSleepy: 0, mO: 1, head: -4, duration: 0.35, ease: 'sine.out' }, w1 - 0.45);

    // 08 — sits up, scoots over, picks up the tablet, taps it: the screen wakes.
    tl.to(g, { rot: 0, x: 960, y: 612, head: 8, breathe: 0, duration: 0.5, ease: 'back.out(1.1)' }, t0);
    tl.to(fx, { blanket: 1, duration: 0.5, ease: 'power2.out' }, t0);
    tl.to(g, { lookX: 1, lookY: 0.2, duration: 0.2 }, t0 + 0.2);
    tl.to(g, { body: 26, armR: 76, foreR: 22, armL: 20, duration: 0.3, ease: 'power2.out' }, t0 + 0.55);
    tl.set(fx, { nsTablet: 0 }, t0 + 0.85);
    tl.set(g, { held: 1, heldX: 180, heldY: -60, heldRot: 12 }, t0 + 0.85);
    // Settles back with the tablet in her lap, hands on its lower corners.
    tl.to(g, { body: 0, heldX: 0, heldY: 30, heldRot: 0, armL: 5, foreL: -16, armR: 5, foreR: -16, head: 2, lookX: 0, lookY: 0.9, duration: 0.4, ease: 'power2.inOut' }, t0 + 0.85);
    tl.to(g, { mO: 0, mSoft: 1, duration: 0.2 }, t0 + 1.0);
    // Tap!
    tl.to(g, { handPointR: 1, armR: 14, foreR: -150, duration: 0.15 }, t0 + 1.35);
    tl.to(g, { foreR: -138, duration: 0.07, yoyo: true, repeat: 1 }, t0 + 1.5);
    tl.to(g, { spill: 0.75, faceLight: 0.5, duration: 0.2, ease: 'power2.out' }, t0 + 1.55);
    tl.to(fx, { roomGlow: 0.7, dim: 0.35, duration: 0.35 }, t0 + 1.55);
    tl.to(g, { handPointR: 0, armR: 5, foreR: -16, browY: -4.5, lid: 0, mSoft: 0, mO: 0.8, duration: 0.2 }, t0 + 1.62);

    // 10 — the close-up: she loves it. Eyes light up, big smile, "Yes!"
    tl.set(g, { mO: 0, mSoft: 0.8, mSmile: 0, reflect: 1, faceLight: 0.7, lookY: 0.75, browY: -3 }, b0);
    tl.set(fx, { roomGlow: 0.25, dim: 0.55 }, b0);
    tl.to(g, { sparkle: 0.85, pupil: 1.2, browY: -5, duration: 0.45, ease: 'back.out(2)' }, e0 + 0.2);
    tl.to(fx, { sparkles: 0.6, duration: 0.4 }, e0 + 0.25);
    tl.to(g, { mSmile: 1, mSoft: 0, duration: 0.35, ease: 'sine.out' }, e0 + 0.4);
    tl.to(g, { armR: 128, foreR: 52, y: 604, lookY: 0.2, lookX: 0, duration: 0.3, ease: 'back.out(1.6)' }, e0 + 0.8);
    tl.to(g, { foreR: 40, duration: 0.14, yoyo: true, repeat: 1, ease: 'sine.inOut' }, e0 + 1.1);
    tl.to(g, { armR: 5, foreR: -16, y: 612, lookY: 0.75, duration: 0.35, ease: 'sine.inOut' }, e0 + 1.45);
    tl.to(g, { lid: 1, duration: 0.08, yoyo: true, repeat: 1 }, e0 + 1.6); // happy blink
    tl.to(g, { head: -5, duration: 0.3, ease: 'sine.inOut' }, e0 + 1.7);
    tl.to(fx, { sparkles: 0, dim: 0.2, duration: 0.4 }, e1 + 0.1);
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
    // Once the camera is inside the room, stop drawing the (now enormous) city
    // around it: keeps every painted layer a sane size, so browsers never
    // partially repaint at extreme zoom.
    const L = W / 2 + (WINDOW.x - x) * s, T = H / 2 + (WINDOW.y - k.y) * s;
    const inside = L <= -1 && T <= -1 && L + WINDOW.w * s >= W + 1 && T + WINDOW.h * s >= H + 1;
    if (inside !== this.inside) {
      this.inside = inside;
      const d = inside ? 'none' : '';
      for (const n of ['far', 'mid', 'nearBack', 'exterior']) this.p[n].style.display = d;
    }

    const fx = this.fx;
    const nums = this.blanketNums;
    for (let i = 0; i < nums.length; i++) nums[i] = this.blanketA[i] + (this.blanketB[i] - this.blanketA[i]) * fx.blanket;
    setAttr(this.p.blanket, 'd', fillTemplate(this.blanketTpl, nums));
    setOpacity(this.p.nsGlow, fx.nsGlow * fx.nsTablet);
    setOpacity(this.p.nsIcon, Math.min(1, fx.nsGlow * 2));
    setOpacity(this.p.tabletNS, fx.nsTablet);
    setOpacity(this.p.roomGlow, fx.roomGlow);
    setOpacity(this.p.glass, fx.glass);
    setOpacity(this.p.dim, fx.dim);
    // 2.5D parallax inside the bedroom: the wall sits deeper (moves less), the
    // out-of-focus foreground plant sits closer (moves more).
    const bx = (x - 770) / BEDROOM_K - 900;
    const by = (k.y - 452) / BEDROOM_K - 500;
    setAttr(this.p.wallDecor, 'transform', `translate(${fmt(bx * 0.07)} ${fmt(by * 0.05)})`);
    setAttr(this.p.fg, 'transform', `translate(${fmt(-bx * 0.16)} ${fmt(-by * 0.1)})`);

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
