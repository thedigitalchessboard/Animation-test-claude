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
    Object.assign(this.space.state, pose('fly'), { x: -0.25, y: 0.62, rot: 70, scale: 0.7, capeStream: 1, trail: 1, opacity: 0 });

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
    // The magic "wake-up" sparkle he sends through the glass to her tablet.
    this.spark = el('g', { opacity: '0' }, slot);
    this.spark.innerHTML = '<circle r="3.2" fill="#F2D892" opacity=".35"/><path d="M0 -2.4 L.6 -.6 L2.4 0 L.6 .6 L0 2.4 L-.6 .6 L-2.4 0 L-.6 -.6 Z" fill="#FFF6D6"/>';
    this.sparkState = { x: 846, y: 470, o: 0, s: 1 };

    // --- finale (front pixel-space layer): wave + the knight challenge ---
    const front = ctx.layers.front;
    front.appendChild(group(`<defs>${pieceGradients(gid + 'f')}</defs>`));
    this.chaseKnight = new Prop(group(pieceMarkup('knight', `${gid}f-gold`)), { x: 1.1, y: 0.94, scale: 0, opacity: 0 });
    this.finale = createCoach();
    front.appendChild(this.finale.root);
    front.appendChild(this.chaseKnight.root); // hops past in FRONT of him
    if (ctx.responsive.profile.name !== 'mobile') {
      this.space.root.setAttribute('filter', `url(#${ctx.layers.glowId}-o)`);
      this.finale.root.setAttribute('filter', `url(#${ctx.layers.glowId}-f)`);
    }
    Object.assign(this.finale.state, pose('wave'), { x: 1.25, y: 1.03, rot: -14, scale: 1.45, opacity: 0, capeStream: 0.2 });
  }

  build(tl) {
    this.buildSpace(tl);
    this.buildWindow(tl);
    this.buildFinale(tl);
  }

  buildSpace(tl) {
    const c = this.space.state;
    const [c0, c1] = SCENES.coachFly;
    const [b0] = SCENES.bump;
    const [s0, s1] = SCENES.surprise;
    const [f0, f1] = SCENES.fix;
    const [so0, so1] = SCENES.sorry;
    const [fa0] = SCENES.farewell;
    const [d0] = SCENES.dive;

    // 03 — Coach Knight glides across the Earth: confident, friendly, a wink.
    tl.set(c, { opacity: 1 }, c0 - 0.05);
    tl.to(c, { x: 0.42, y: 0.5, duration: 0.9, ease: 'sine.out' }, c0);
    tl.to(c, { lookX: -0.5, lookY: -0.2, turn: -0.35, duration: 0.25, ease: 'sine.inOut' }, c0 + 0.35);
    tl.to(c, { glint: 1, duration: 0.25, yoyo: true, repeat: 1 }, c0 + 0.55);
    tl.to(c, { lid: 1, duration: 0.1, yoyo: true, repeat: 1, ease: 'sine.inOut' }, c0 + 0.62);   // wink
    tl.to(c, { lookX: 0.4, lookY: 0, turn: 0.2, duration: 0.3 }, c0 + 0.95);
    tl.to(c, { x: 1.45, y: 0.46, duration: c1 - c0 - 0.8, ease: 'power1.in' }, c0 + 0.9);          // out of frame
    tl.set(c, { opacity: 0 }, c1 + 0.2);

    // 04b — he zooms back in from the left, straight between the two players…
    tl.set(c, { x: 0.98, y: 0.44, rot: 80, lookX: 0.5, lookY: 0, turn: 0.2, trail: 1, capeStream: 1, opacity: 1 }, b0 - 0.32);
    tl.to(c, { x: 1.73, duration: 0.45, ease: 'none' }, b0 - 0.3);
    // …clips the hovering knight and brakes hard, momentum carrying him on.
    tl.to(c, { x: 1.76, y: 0.3, rot: 8, capeStream: 0.3, trail: 0, ...COACH_POSES.brake, duration: 0.35, ease: 'power3.out' }, b0 + 0.15);

    // 04c — "Uh-oh." Turns back, eyes wide, "o" mouth. HOLD.
    tl.to(c, { mSmile: 0, mO: 1, browY: -4.5, lookX: -0.8, lookY: -0.8, turn: -0.5, head: -8, duration: 0.2, ease: 'power2.out' }, s0);
    tl.to(c, { lid: 1, duration: 0.07, yoyo: true, repeat: 3 }, s0 + 0.35);   // disbelieving double-blink

    // 04d — darts up and catches the tumbling knight, flies it back and sets it
    // down very carefully on its square.
    tl.to(c, { x: 1.66, y: 0.29, rot: -10, ...COACH_POSES.catch, handOpenR: 1, mO: 0.6, lookX: 0.2, lookY: -0.6, turn: 0.1, duration: 0.25, ease: 'power2.out' }, f0);
    tl.to(c, { handOpenR: 0, mO: 0, mEek: 1, duration: 0.1 }, f0 + 0.3);
    tl.to(c, { x: 1.46, y: 0.325, rot: 4, ...COACH_POSES.place, lookX: 0.6, lookY: 0.8, turn: 0.3, duration: 0.55, ease: 'power2.inOut' }, f0 + 0.32);
    tl.to(c, { y: 0.345, head: 14, duration: 0.25, ease: 'sine.inOut' }, f1 - 0.28);

    // 04e — "I'm SO sorry!": hands pressed together, worried brows, a bow to each player.
    tl.to(c, { ...COACH_POSES.apology, x: 1.5, y: 0.255, rot: 0, handOpenL: 1, handOpenR: 1, mEek: 1, browY: -1.5, browTilt: 15, lid: 0.35, lookX: -0.8, lookY: 0.5, turn: -0.3, duration: 0.3, ease: 'power2.out' }, so0);
    tl.to(c, { rot: -14, duration: 0.28, yoyo: true, repeat: 1, ease: 'sine.inOut' }, so0 + 0.15);
    tl.to(c, { lookX: 0.8, turn: 0.3, duration: 0.2 }, so0 + 0.45);
    tl.to(c, { rot: 14, duration: 0.25, yoyo: true, repeat: 1, ease: 'sine.inOut' }, so0 + 0.5);
    // They laugh → relief: big warm smile.
    tl.to(c, { ...COACH_POSES.relieved, mEek: 0, mSmile: 1, browTilt: 0, browY: -1, lid: 0.3, handOpenL: 0, handOpenR: 0, lookX: 0, lookY: 0, turn: 0, duration: 0.3, ease: 'power2.out' }, so1 - 0.25);

    // 04f — a cheerful salute goodbye, then he turns toward Earth.
    tl.to(c, { ...COACH_POSES.salute, handOpenR: 1, lid: 0, duration: 0.25, ease: 'back.out(1.6)' }, fa0);
    tl.to(c, { foreR: 40, duration: 0.18, ease: 'sine.out' }, fa0 + 0.35);
    tl.to(c, { ...COACH_POSES.dive, rot: 228, handOpenR: 0, lookX: 0, lookY: 0, capeStream: 1, trail: 1, duration: 0.3, ease: 'power2.inOut' }, d0 - 0.15);

    // 05 — dives toward her home, shrinking into the distance.
    tl.to(c, { x: 0.7, y: 0.58, scale: 0.02, duration: 0.8, ease: 'power2.in' }, d0 + 0.1);
    tl.to(c, { opacity: 0, duration: 0.12 }, d0 + 0.75);
  }

  buildWindow(tl) {
    const c = this.window.state;
    const k = this.windowKnight.state;
    const sp = this.sparkState;
    const [d0] = SCENES.dive;
    const [a0, a1] = SCENES.arrive;
    const [o0, o1] = SCENES.outside;

    // 06 — he streaks down out of the sky and lands softly beside her window…
    tl.set(c, { ...COACH_POSES.dive, x: 930, y: 60, rot: 200, scale: 0.12, trail: 1, capeStream: 1, opacity: 0 }, 0);
    tl.set(c, { opacity: 1 }, a0 + 0.3);
    tl.to(c, { x: 876, y: 486, scale: 0.16, duration: 0.6, ease: 'power2.out' }, a0 + 0.35);
    tl.to(c, { ...COACH_POSES.stand, rot: 0, trail: 0, capeStream: 0.25, lookX: -0.4, duration: 0.3, ease: 'back.out(1.8)' }, a0 + 0.85);
    // …peeks in: she's still asleep. A soft, fond smile.
    tl.to(c, { ...COACH_POSES.peek, x: 866, rot: -8, handOpenL: 1, lookX: -1, lookY: 0.4, turn: -0.5, mSmile: 0, mProud: 1, lid: 0.25, duration: 0.45, ease: 'sine.inOut' }, a0 + 1.1);
    // "Shh…" — finger to his lips, a look to us.
    tl.to(c, { ...COACH_POSES.shh, x: 874, rot: 0, handOpenL: 0, handPointR: 1, lookX: 0, lookY: 0, turn: 0.1, lid: 0.1, duration: 0.35, ease: 'sine.inOut' }, a0 + 1.75);
    // A gentle tap on the glass sends a golden sparkle to her tablet.
    tl.to(c, { ...COACH_POSES.knock, x: 868, handPointR: 0, handPointL: 1, lookX: -1, lookY: 0.2, turn: -0.4, mProud: 0, mSmile: 1, duration: 0.3, ease: 'sine.inOut' }, a0 + 2.3);
    tl.to(c, { foreL: -8, duration: 0.1, yoyo: true, repeat: 1 }, a0 + 2.5);
    tl.fromTo(sp, { x: 846, y: 470, o: 0, s: 0.6 }, { o: 1, s: 1.3, duration: 0.12 }, a0 + 2.6);
    tl.to(sp, { x: 827, y: 478, duration: 0.35, ease: 'sine.inOut' }, a0 + 2.66);
    tl.to(sp, { o: 0, s: 0.4, duration: 0.14 }, a0 + 2.98);
    tl.to(c, { ...COACH_POSES.proud, handPointL: 0, lookX: -1, turn: -0.5, mSmile: 0, mProud: 1, duration: 0.4, ease: 'sine.inOut' }, a1 - 0.2);

    // 11 — back outside: he's been waiting. Watching her learn: hand on heart,
    // proud smile, a slow nod. HOLD.
    tl.to(c, { ...COACH_POSES.heart, handOpenR: 1, mProud: 1, mSmile: 0, lid: 0.35, head: 4, lookX: -1, turn: -0.5, duration: 0.4, ease: 'sine.inOut' }, o0 + 0.2);
    tl.to(c, { head: 10, duration: 0.3, yoyo: true, repeat: 1, ease: 'sine.inOut' }, o0 + 0.75);
    // A knight appears beside him; he notices and taps it.
    tl.to(k, { scale: 0.15, rot: 0, duration: 0.35, ease: 'back.out(2.2)' }, o0 + 1.2);
    tl.to(c, { lookX: 1, turn: 0.5, lid: 0, browY: -2.5, mProud: 0, mSmile: 1, handOpenR: 0, duration: 0.2 }, o0 + 1.4);
    tl.to(c, { ...COACH_POSES.poke, handPointR: 1, duration: 0.22, ease: 'power2.out' }, o0 + 1.55);
    tl.to(k, { y: 462, rot: 14, duration: 0.12, ease: 'power2.out' }, o0 + 1.75);             // lift
    tl.to(k, { x: 906, y: 468, rot: 0, duration: 0.14, ease: 'power2.in' }, o0 + 1.87);      // settle
    tl.fromTo(this.ringState, { r: 2, o: 0.9 }, { r: 70, o: 0, duration: 0.8, ease: 'power2.out' }, o0 + 1.85);
    tl.to(c, { ...COACH_POSES.proud, handPointR: 0, duration: 0.3 }, o1 + 0.05);
  }

  buildFinale(tl) {
    const c = this.finale.state;
    const kn = this.chaseKnight.state;
    const [w0] = SCENES.wave;
    const [ch0, ch1] = SCENES.chase;

    // 15 — pops in from the side, looks straight at you, two big friendly waves.
    tl.set(c, { opacity: 1, handOpenR: 1, mSmile: 1, browY: -3, lookX: 0, lookY: 0, turn: 0 }, w0);
    tl.fromTo(c, { x: 1.28, rot: -22 }, { x: 0.84, rot: -5, duration: 0.4, ease: 'back.out(1.4)' }, w0);
    tl.fromTo(c, { foreR: 38 }, { foreR: -16, duration: 0.2, yoyo: true, repeat: 3, ease: 'sine.inOut' }, w0 + 0.3);

    // 16 — a real chess knight hops along the bottom of the frame, in front of him.
    tl.set(kn, { opacity: 1, scale: 0.85, x: 1.12, y: 0.93 }, ch0);
    const hops = [0.95, 0.8, 0.65, 0.5, 0.35, 0.2, 0.05, -0.12, -0.3];
    hops.forEach((x, i) => {
      const at = ch0 + 0.05 + i * 0.19;
      tl.to(kn, { x, duration: 0.19, ease: 'sine.inOut' }, at);
      tl.to(kn, { y: 0.84, rot: -12, sy: 1.06, sx: 0.95, duration: 0.095, ease: 'power2.out' }, at);           // lift
      tl.to(kn, { y: 0.93, rot: 0, sy: 1, sx: 1, duration: 0.095, ease: 'power2.in' }, at + 0.095);            // settle
    });
    // Double-take: (at viewer) → knight → viewer → knight → CHASE!
    tl.to(c, { lookX: -1, lookY: 0.6, turn: -0.6, head: -9, foreR: 20, browY: -4, mSmile: 0, mO: 1, duration: 0.12 }, ch0 + 0.2);
    tl.to(c, { lookX: 0, lookY: 0, turn: 0.15, head: 3, browY: -5.5, duration: 0.12 }, ch0 + 0.55);
    tl.to(c, { lookX: -1, lookY: 0.4, turn: -0.7, head: -10, browY: 1, mO: 0, mSmile: 1, duration: 0.12 }, ch0 + 0.9);
    tl.set(c, { flipX: -1, handOpenR: 0 }, ch0 + 1.18);
    tl.to(c, { ...COACH_POSES.fly, rot: -72, lookX: 0, lookY: 0, turn: 0, capeStream: 1, trail: 1, duration: 0.15 }, ch0 + 1.18);
    tl.to(c, { x: -0.45, y: 0.95, duration: ch1 - ch0 - 1.25, ease: 'power2.in' }, ch0 + 1.22);
    tl.set(c, { opacity: 0 }, ch1 - 0.001);
  }

  update(t, time) {
    const { W, H, unit, profile } = this.ctx.responsive;
    const cs = profile.charScale;
    const px = (x, y, s) => ({ x: x * W, y: y * H, s: s * unit * cs });
    if (t < SCENES.dive[0] + 1.0) {
      const c = this.space.state;
      const by = c.y;
      c.y = by + Math.sin(time * 1.3) * 0.004;
      this.space.apply(this.ctx.spacePlace?.() || px, time);
      c.y = by;
    } else if (this.space.state.opacity !== 0) {
      this.space.state.opacity = 0;
      this.space.apply(px, time);
    }
    if (this.ctx.layers.world.style.visibility !== 'hidden') {
      const c = this.window.state;
      const by = c.y;
      c.y = by + Math.sin(time * 1.4) * 0.6;
      this.window.apply(null, time);
      const sp = this.sparkState;
      this.spark.setAttribute('transform', `translate(${sp.x.toFixed(2)} ${sp.y.toFixed(2)}) scale(${sp.s.toFixed(3)})`);
      this.spark.setAttribute('opacity', sp.o.toFixed(3));
      c.y = by;
      this.windowKnight.apply(null);
      this.ring.setAttribute('r', this.ringState.r.toFixed(2));
      this.ring.setAttribute('opacity', this.ringState.o.toFixed(3));
      this.ring.setAttribute('cx', this.windowKnight.state.x.toFixed(1));
      this.ring.setAttribute('cy', (this.windowKnight.state.y - 9).toFixed(1));
    }
    // Finale is anchored to the bottom-right corner on every screen shape.
    const pr = this.ctx.responsive.portrait;
    this.finale.apply((x, y, s) => ({ x: (x - (pr ? 0.08 : 0)) * W, y: (y + (pr ? 0.06 : 0)) * H, s: s * unit * cs * (pr ? 0.8 : 1) }), time);
    this.chaseKnight.apply(px);
  }
}
