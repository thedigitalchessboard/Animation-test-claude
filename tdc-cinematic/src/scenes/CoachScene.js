// Coach Knight's choreography across the film. The SAME rig design is used for
// every appearance (space, outside the window, finale) so he always looks like
// the same human coach. The chess knight is always a separate physical piece.

import { SCENES } from '../config.js';
import { createCoach, COACH_POSES } from '../art/coach.js';
import { Prop } from '../art/rig.js';
import { group, uid, el } from '../art/svg.js';
import { pieceMarkup, pieceGradients } from '../art/pieces.js';

const pose = (name, extra = {}) => ({ ...COACH_POSES[name], ...extra });

export class CoachScene {
  constructor(ctx) {
    this.ctx = ctx;
    const gid = uid('coachfx');
    const defs = group(`<defs>${pieceGradients(gid)}</defs>`);

    // --- space coach (pixel-space overlay, above the astronaut) ---
    this.space = createCoach();
    ctx.layers.overlay.appendChild(this.space.root);
    Object.assign(this.space.state, pose('fly'), { x: -0.25, y: 0.62, rot: 70, scale: 0.62, capeStream: 1, trail: 1, opacity: 0 });

    // --- exterior coach beside the window (city space) ---
    const slot = ctx.bedroom.p.exteriorSlot;
    slot.appendChild(defs);
    this.window = createCoach();
    slot.appendChild(this.window.root);
    Object.assign(this.window.state, pose('proud'), {
      x: 872, y: 486, scale: 0.16, mSmile: 0, mProud: 1, lookX: -1, turn: -0.5, capeStream: 0.25,
    });
    this.windowKnight = new Prop(group(pieceMarkup('knight', `${gid}-gold`, { shadow: false })), { x: 900, y: 470, scale: 0, rot: -6 });
    slot.appendChild(this.windowKnight.root);
    this.ring = el('circle', { r: '10', fill: 'none', stroke: '#F2D892', 'stroke-width': '1.2', opacity: '0' }, slot);
    this.ringState = { r: 2, o: 0 };

    // --- finale (front pixel-space layer): wave + the knight challenge ---
    const front = ctx.layers.front;
    front.appendChild(group(`<defs>${pieceGradients(gid + 'f')}</defs>`));
    this.chaseKnight = new Prop(group(pieceMarkup('knight', `${gid}f-gold`)), { x: 1.1, y: 0.94, scale: 0, opacity: 0 });
    front.appendChild(this.chaseKnight.root);
    this.finale = createCoach();
    front.appendChild(this.finale.root);
    Object.assign(this.finale.state, pose('wave'), { x: 1.25, y: 1.03, rot: -14, scale: 1.45, opacity: 0, capeStream: 0.2 });
  }

  build(tl) {
    this.buildSpace(tl);
    this.buildWindow(tl);
    this.buildFinale(tl);
  }

  buildSpace(tl) {
    const c = this.space.state;
    const [f0] = SCENES.coachFly;
    const [k0] = SCENES.comedy;
    const [d0] = SCENES.dive;
    const bump = k0 + 0.07;

    // 03 — flies in: friendly, confident, playful.
    tl.set(c, { opacity: 1 }, f0 - 0.02);
    tl.to(c, { x: 0.3, y: 0.5, duration: 0.55, ease: 'power2.out' }, f0);
    tl.to(c, { x: 0.52, y: 0.47, rot: 74, duration: bump - f0 - 0.55, ease: 'none' }, f0 + 0.55);
    tl.to(c, { glint: 1, lookX: -0.3, duration: 0.15, yoyo: true, repeat: 1 }, f0 + 0.3); // cheeky wink-glint at camera
    tl.to(c, { lid: 0.9, duration: 0.07, yoyo: true, repeat: 1 }, f0 + 0.38);

    // 04 — bumps the floating knight, brakes, surprised, sheepish apology.
    tl.to(c, { x: 0.63, y: 0.49, rot: 12, capeStream: 0.35, trail: 0, ...COACH_POSES.brake, duration: 0.2, ease: 'power3.out' }, bump);
    tl.to(c, { mSmile: 0, mO: 1, browY: -4, lookX: 1, lookY: -1, turn: 0.5, head: -10, duration: 0.08 }, bump + 0.02);
    tl.to(c, { head: 8, duration: 0.05, yoyo: true, repeat: 3 }, bump + 0.12); // comic double-shake
    tl.to(c, { ...COACH_POSES.sorry, rot: -4, mO: 0, mEek: 1, browY: -2, browTilt: 14, lookX: 0.9, lookY: 0.2, turn: 0.4, handOpenL: 1, duration: 0.14, ease: 'power2.out' }, bump + 0.3);
    tl.to(c, { rot: -10, duration: 0.1, yoyo: true, repeat: 1, ease: 'sine.inOut' }, bump + 0.44); // small bow
    tl.to(c, { mEek: 0, mSmile: 1, browTilt: 0, browY: 0, handOpenL: 0, duration: 0.1 }, bump + 0.62);

    // 05 — dives toward Earth, shrinking into the distance.
    tl.to(c, { ...COACH_POSES.dive, rot: 232, lookX: 0, lookY: 0, turn: 0, capeStream: 1, trail: 1, duration: 0.2, ease: 'power2.inOut' }, d0 - 0.04);
    tl.to(c, { x: 0.36, y: 0.56, scale: 0.02, duration: 0.55, ease: 'power2.in' }, d0 + 0.08);
    tl.to(c, { opacity: 0, duration: 0.1 }, d0 + 0.55);
  }

  buildWindow(tl) {
    const c = this.window.state;
    const k = this.windowKnight.state;
    const [o0, o1] = SCENES.outside;
    const [d0] = SCENES.dive;
    // End of the dive: he streaks down out of the sky and lands beside her
    // window (seen as the camera flies in), then waits there, out of shot.
    tl.set(c, { ...COACH_POSES.dive, x: 930, y: 150, rot: 200, scale: 0.12, trail: 1, capeStream: 1, opacity: 1 }, 0);
    tl.to(c, { x: 872, y: 486, scale: 0.16, duration: 0.3, ease: 'power2.out' }, d0 + 0.68);
    tl.to(c, { ...COACH_POSES.proud, rot: 0, trail: 0, capeStream: 0.25, duration: 0.16, ease: 'back.out(2)' }, d0 + 0.86);
    // Watching her learn: proud smile and a nod.
    tl.to(c, { head: 8, duration: 0.12, yoyo: true, repeat: 1, ease: 'sine.inOut' }, o0 + 0.42);
    tl.to(c, { lid: 0.35, duration: 0.1 }, o0 + 0.4);
    // A knight appears beside him; he notices and taps it.
    tl.to(k, { scale: 0.15, rot: 0, duration: 0.2, ease: 'back.out(3)' }, o0 + 0.46);
    tl.to(c, { lookX: 1, turn: 0.5, lid: 0, browY: -2, duration: 0.08 }, o0 + 0.56);
    tl.to(c, { ...COACH_POSES.poke, handPointR: 1, duration: 0.12, ease: 'power2.out' }, o0 + 0.62);
    tl.to(k, { y: 462, rot: 14, duration: 0.08, ease: 'power2.out' }, o0 + 0.72);              // lift
    tl.to(k, { x: 906, y: 468, rot: 0, duration: 0.1, ease: 'power2.in' }, o0 + 0.8);           // settle
    tl.fromTo(this.ringState, { r: 2, o: 0.9 }, { r: 60, o: 0, duration: 0.5, ease: 'power2.out' }, o0 + 0.74);
    tl.to(c, { ...COACH_POSES.proud, handPointR: 0, mProud: 0, mSmile: 1, duration: 0.14 }, o1 - 0.12);
  }

  buildFinale(tl) {
    const c = this.finale.state;
    const kn = this.chaseKnight.state;
    const [w0] = SCENES.wave;
    const [ch0, ch1] = SCENES.chase;

    // 14 — pops in from the side, looks at the viewer, waves "Hi!".
    tl.set(c, { opacity: 1 }, w0);
    tl.fromTo(c, { x: 1.25, rot: -24 }, { x: 0.84, rot: -6, duration: 0.2, ease: 'back.out(1.6)' }, w0);
    tl.set(c, { handOpenR: 1, mSmile: 1, browY: -3, lookX: 0, lookY: 0 }, w0);
    tl.fromTo(c, { foreR: 36 }, { foreR: -14, duration: 0.075, yoyo: true, repeat: 3, ease: 'sine.inOut' }, w0 + 0.12);

    // 15 — a real chess knight hops across; double-take; chase!
    tl.set(kn, { opacity: 1, scale: 0.85, x: 1.08, y: 0.93 }, ch0);
    const hops = [0.94, 0.8, 0.66, 0.52, 0.38, 0.22, 0.06, -0.12];
    hops.forEach((x, i) => {
      const at = ch0 + 0.02 + i * 0.066;
      tl.to(kn, { x, duration: 0.066, ease: 'none' }, at);
      tl.to(kn, { y: 0.86, rot: -12, sy: 1.06, sx: 0.95, duration: 0.033, ease: 'power2.out' }, at);          // lift
      tl.to(kn, { y: 0.93, rot: 0, sy: 1, sx: 1, duration: 0.033, ease: 'power2.in' }, at + 0.033);           // settle
    });
    tl.to(c, { lookX: -1, turn: -0.6, head: -8, foreR: 30, duration: 0.05 }, ch0 + 0.04);                     // at knight
    tl.to(c, { lookX: 0, turn: 0.1, head: 2, browY: -5, mSmile: 0, mO: 1, duration: 0.05 }, ch0 + 0.13);    // at viewer
    tl.to(c, { lookX: -1, turn: -0.7, head: -10, duration: 0.05 }, ch0 + 0.21);                              // at knight
    tl.to(c, { lookX: 0, turn: 0, head: 0, mO: 0, mSmile: 1, browY: -2, duration: 0.05 }, ch0 + 0.28);      // grin at viewer
    tl.set(c, { flipX: -1, handOpenR: 0 }, ch0 + 0.34);
    tl.to(c, { ...COACH_POSES.fly, rot: -72, lookX: 0, capeStream: 1, trail: 1, duration: 0.08 }, ch0 + 0.34);
    tl.to(c, { x: -0.45, y: 0.95, duration: ch1 - ch0 - 0.38, ease: 'power2.in' }, ch0 + 0.37);
    tl.set(c, { opacity: 0 }, ch1 - 0.001);
  }

  update(t, time) {
    const { W, H, unit, profile } = this.ctx.responsive;
    const cs = profile.charScale;
    const px = (x, y, s) => ({ x: x * W, y: y * H, s: s * unit * cs });
    if (t < 4.5) {
      const c = this.space.state;
      const by = c.y;
      c.y = by + Math.sin(time * 3) * 0.004;
      this.space.apply(this.ctx.spacePlace?.() || px, time);
      c.y = by;
    } else if (this.space.state.opacity !== 0) {
      this.space.state.opacity = 0;
      this.space.apply(px, time);
    }
    if (this.ctx.layers.world.style.visibility !== 'hidden') {
      const c = this.window.state;
      const by = c.y;
      c.y = by + Math.sin(time * 2.4) * 1.2;
      this.window.apply(null, time);
      c.y = by;
      this.windowKnight.apply(null);
      this.ring.setAttribute('r', this.ringState.r.toFixed(2));
      this.ring.setAttribute('opacity', this.ringState.o.toFixed(3));
      this.ring.setAttribute('cx', this.windowKnight.state.x.toFixed(1));
      this.ring.setAttribute('cy', (this.windowKnight.state.y - 9).toFixed(1));
    }
    // Finale is anchored to the bottom-right corner on every screen shape.
    const pr = this.ctx.responsive.portrait;
    this.finale.apply((x, y, s) => ({ x: x * W, y: (y + (pr ? 0.09 : 0)) * H, s: s * unit * cs * (pr ? 0.8 : 1) }), time);
    this.chaseKnight.apply(px);
  }
}
