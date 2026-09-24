// SCENE 09: the tablet screen, seen from her point of view.
// Official TDC logo (held) → a live online class: a TDC mentor on video,
// classmates from Japan, Brazil, Kenya and the UAE, and a chessboard. The
// mentor demonstrates a knight move; then it's HER turn — her finger lifts the
// bishop and drops it on the right square → success, confetti, cheering kids.
// Landscape and portrait (stacked) layouts are both built.

import { SCENES } from '../config.js';
import { createCoach, COACH_POSES } from '../art/coach.js';
import { createGirl, KIDS } from '../art/girl.js';
import { Prop } from '../art/rig.js';
import { group, uid, createSvgRoot, parts } from '../art/svg.js';
import { pieceMarkup, pieceGradients } from '../art/pieces.js';

// Position after 1.e4 e5 — the mentor plays Ng1-f3, then she plays Bf1-c4.
const POSITION = [
  'rnbqkbnr',
  'pppp.ppp',
  '........',
  '....p...',
  '....P...',
  '........',
  'PPPP.PPP',
  'RNBQKBNR',
];
const NAMES = { p: 'pawn', n: 'knight', b: 'bishop', r: 'rook', q: 'queen', k: 'king' };

// Classmates in the video tiles, with simple flag badges (no text).
const CLASSMATES = [
  { kid: 'aiko', flag: (x, y) => `<rect x="${x}" y="${y}" width="22" height="15" rx="2" fill="#fff"/><circle cx="${x + 11}" cy="${y + 7.5}" r="4.4" fill="#BC002D"/>` },
  { kid: 'mateo', flag: (x, y) => `<rect x="${x}" y="${y}" width="22" height="15" rx="2" fill="#009C3B"/><path d="M${x + 11} ${y + 2} L${x + 20} ${y + 7.5} L${x + 11} ${y + 13} L${x + 2} ${y + 7.5} Z" fill="#FFDF00"/><circle cx="${x + 11}" cy="${y + 7.5}" r="3.3" fill="#002776"/>` },
  { kid: 'amani', flag: (x, y) => `<rect x="${x}" y="${y}" width="22" height="15" rx="2" fill="#006600"/><rect x="${x}" y="${y}" width="22" height="5" fill="#111"/><rect x="${x}" y="${y + 5}" width="22" height="5" fill="#fff"/><rect x="${x}" y="${y + 6}" width="22" height="3" fill="#BB0000"/>` },
  { kid: 'layla', flag: (x, y) => `<rect x="${x}" y="${y}" width="22" height="15" rx="2" fill="#fff"/><rect x="${x}" y="${y}" width="22" height="5" fill="#00732F"/><rect x="${x}" y="${y + 10}" width="22" height="5" fill="#111"/><rect x="${x}" y="${y}" width="6" height="15" fill="#FF0000"/>` },
];

function buildLayout(id, portrait, logoUrl) {
  const DW = portrait ? 660 : 1000;
  const DH = portrait ? 1000 : 660;
  const S = { x: 40, y: 40, w: DW - 80, h: DH - 80 };
  const video = portrait ? { x: 60, y: 114, w: 540, h: 250 } : { x: 60, y: 114, w: 404, h: 318 };
  const tiles = portrait ? { x: 60, y: 374, w: 540, h: 112 } : { x: 60, y: 444, w: 404, h: 132 };
  const sq = portrait ? 55 : 56;
  const board = portrait ? { x: 110, y: 498 } : { x: 484, y: 122 };
  const at = (f, r) => ({ x: board.x + f * sq, y: board.y + r * sq });

  let squares = '';
  let pieces = '';
  for (let r = 0; r < 8; r++) {
    for (let f = 0; f < 8; f++) {
      const { x, y } = at(f, r);
      squares += `<rect x="${x}" y="${y}" width="${sq}" height="${sq}" fill="${(r + f) % 2 ? '#2C5BC4' : '#EDE7DA'}"/>`;
      const ch = POSITION[r][f];
      if (ch !== '.') {
        const white = ch === ch.toUpperCase();
        const type = NAMES[ch.toLowerCase()];
        const part = r === 7 && f === 6 ? 'data-part="knightMv"' : r === 7 && f === 5 ? 'data-part="bishopMv"' : '';
        pieces += `<g ${part} transform="translate(${x + sq / 2} ${y + sq - 5}) scale(${(sq / 132).toFixed(3)})">${pieceMarkup(type, `${id}-${white ? 'ivory' : 'navy'}`, { tone: white ? 'ivory' : 'navy' })}</g>`;
      }
    }
  }
  const tileW = (tiles.w - 3 * 8) / 4;
  const tileMarkup = CLASSMATES.map((c, i) => {
    const x = tiles.x + i * (tileW + 8);
    return `<g data-part="tile${i}">
      <clipPath id="${id}-tile${i}"><rect x="${x}" y="${tiles.y}" width="${tileW}" height="${tiles.h}" rx="10"/></clipPath>
      <rect x="${x}" y="${tiles.y}" width="${tileW}" height="${tiles.h}" rx="10" fill="${['#FBE3D9', '#E3F1E6', '#FDF1D6', '#E2EAFB'][i]}"/>
      <g clip-path="url(#${id}-tile${i})"><g data-part="kidSlot${i}"></g></g>
      <rect x="${x}" y="${tiles.y}" width="${tileW}" height="${tiles.h}" rx="10" fill="none" stroke="#fff" stroke-width="3"/>
      ${c.flag(x + 8, tiles.y + 8)}
    </g>`;
  }).join('');

  const confetti = Array.from({ length: 26 }, (_, i) =>
    `<rect data-part="cf${i}" width="${6 + (i % 3) * 2}" height="${4 + (i % 2) * 3}" rx="1" fill="${['#D8B15E', '#2C5BC4', '#F2D892', '#E5484D', '#F7F5F0'][i % 5]}" opacity="0"/>`).join('');

  const markup = `
    <defs>
      ${pieceGradients(id)}
      <linearGradient id="${id}-vid" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1D3B74"/><stop offset="1" stop-color="#0B1E3D"/></linearGradient>
      <clipPath id="${id}-vclip"><rect x="${video.x}" y="${video.y}" width="${video.w}" height="${video.h}" rx="14"/></clipPath>
      <clipPath id="${id}-screen"><rect x="${S.x}" y="${S.y}" width="${S.w}" height="${S.h}" rx="16"/></clipPath>
      <radialGradient id="${id}-burst" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFF3C8"/><stop offset=".5" stop-color="#F2D892" stop-opacity=".6"/><stop offset="1" stop-color="#F2D892" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="${DW}" height="${DH}" rx="46" fill="#0A142E"/>
    <rect x="6" y="6" width="${DW - 12}" height="${DH - 12}" rx="41" fill="none" stroke="#2A3F72" stroke-width="3"/>
    <circle cx="${portrait ? DW / 2 : 20}" cy="${portrait ? 20 : DH / 2}" r="4" fill="#1C2C55"/>
    <g clip-path="url(#${id}-screen)">
      <rect x="${S.x}" y="${S.y}" width="${S.w}" height="${S.h}" fill="#F7F5F0"/>
      <g data-part="ui" opacity="0">
        <rect x="${S.x}" y="${S.y}" width="${S.w}" height="62" fill="#FFFFFF"/>
        <path d="M${S.x} ${S.y + 62} H${S.x + S.w}" stroke="#DCD8CE" stroke-width="2"/>
        <image href="${logoUrl}" x="${S.x + 16}" y="${S.y + 9}" width="${portrait ? 150 : 170}" height="44" preserveAspectRatio="xMinYMid meet"/>
        <circle data-part="live" cx="${S.x + S.w - 30}" cy="${S.y + 31}" r="8" fill="#E5484D"/>
        <rect x="${video.x}" y="${video.y}" width="${video.w}" height="${video.h}" rx="14" fill="url(#${id}-vid)"/>
        <g clip-path="url(#${id}-vclip)">
          <path d="M${video.x} ${video.y + video.h * 0.36} H${video.x + video.w} M${video.x} ${video.y + video.h * 0.66} H${video.x + video.w}" stroke="#2A4A8A" stroke-width="6"/>
          ${Array.from({ length: 12 }, (_, i) => `<rect x="${video.x + 18 + i * 24}" y="${video.y + video.h * 0.36 - 32 - (i % 3) * 6}" width="17" height="${32 + (i % 3) * 6}" fill="${['#D8B15E', '#F7F5F0', '#4A76D6'][i % 3]}" opacity=".5"/>`).join('')}
          <g data-part="coachSlot"></g>
        </g>
        ${tileMarkup}
        <rect x="${board.x - 6}" y="${board.y - 6}" width="${sq * 8 + 12}" height="${sq * 8 + 12}" rx="8" fill="#0B1E3D"/>
        ${squares}
        <rect data-part="hlA" x="${at(6, 7).x}" y="${at(6, 7).y}" width="${sq}" height="${sq}" fill="#D8B15E" opacity="0"/>
        <rect data-part="hlB" x="${at(5, 5).x}" y="${at(5, 5).y}" width="${sq}" height="${sq}" fill="#D8B15E" opacity="0"/>
        <rect data-part="hlC" x="${at(5, 7).x}" y="${at(5, 7).y}" width="${sq}" height="${sq}" fill="#D8B15E" opacity="0"/>
        <circle data-part="hint" cx="${at(2, 4).x + sq / 2}" cy="${at(2, 4).y + sq / 2}" r="${sq * 0.18}" fill="#D8B15E" opacity="0"/>
        ${pieces}
        <circle data-part="burst" cx="${at(2, 4).x + sq / 2}" cy="${at(2, 4).y + sq / 2}" r="${sq}" fill="url(#${id}-burst)" opacity="0"/>
        <g data-part="check" transform="scale(0)">
          <circle r="16" fill="#2E9E5B" stroke="#fff" stroke-width="3"/><path d="M-7 0 L-2 5 L8 -6" stroke="#fff" stroke-width="3.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        ${confetti}
      </g>
      <g data-part="splash">
        <rect x="${S.x}" y="${S.y}" width="${S.w}" height="${S.h}" fill="#FFFFFF"/>
        <g data-part="splashLogo">
          <image href="${logoUrl}" x="${DW / 2 - (portrait ? 250 : 330)}" y="${DH / 2 - 150}" width="${portrait ? 500 : 660}" height="300" preserveAspectRatio="xMidYMid meet"/>
        </g>
      </g>
      <rect data-part="flash" x="${S.x}" y="${S.y}" width="${S.w}" height="${S.h}" fill="#FFFFFF" opacity="0"/>
    </g>
    <!-- her hand (point of view), reaching up onto the screen -->
    <g data-part="finger" opacity="0">
      <path d="M-11 0 Q-12 -58 -9 -86 Q-6 -98 0 -98 Q6 -98 9 -86 Q12 -58 11 0 Z" fill="#E0A67E"/>
      <path d="M-4 -92 Q0 -95 4 -92" stroke="#F3D2BA" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M-40 60 Q-46 10 -24 -6 Q-12 -14 12 -12 Q34 -6 40 22 L44 90 L-40 90 Z" fill="#D69B73"/>
    </g>
    <ellipse cx="${portrait ? 12 : 16}" cy="${DH * 0.62}" rx="30" ry="46" fill="#E0A67E"/>
    <ellipse cx="${DW - (portrait ? 12 : 16)}" cy="${DH * 0.6}" rx="30" ry="46" fill="#E0A67E"/>`;

  const svg = createSvgRoot(`tdc-tablet-device ${portrait ? 'is-portrait' : 'is-landscape'}`, `0 0 ${DW} ${DH}`);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  svg.appendChild(group(markup));
  const p = parts(svg);
  return { svg, p, video, tiles, tileW, sq, at, portrait, DW, DH, S };
}

export class TabletScene {
  constructor(ctx) {
    this.ctx = ctx;
    const logoUrl = ctx.assets.logoHorizontalUrl;
    this.layouts = [false, true].map((portrait) => {
      const L = buildLayout(uid('tab'), portrait, logoUrl);
      ctx.layers.tablet.appendChild(L.svg);
      // The TDC mentor teaching live (webcam framing: head and shoulders).
      const mentor = createCoach({ variant: 'mentor' });
      L.p.coachSlot.appendChild(mentor.root);
      const cs = portrait ? 0.95 : 1.28;
      Object.assign(mentor.state, COACH_POSES.stand, {
        x: L.video.x + L.video.w * (portrait ? 0.5 : 0.52),
        y: L.video.y + (portrait ? 30 : 46) + 250 * cs,
        scale: cs,
        mSmile: 1,
      });
      // Classmates from around the world.
      const kids = CLASSMATES.map((c, i) => {
        const k = createGirl(KIDS[c.kid]);
        L.p[`kidSlot${i}`].appendChild(k.root);
        const s = portrait ? 0.36 : 0.4;
        Object.assign(k.state, {
          x: L.tiles.x + i * (L.tileW + 8) + L.tileW / 2, y: L.tiles.y + L.tiles.h + 40 * s / 0.4,
          scale: s, lid: 0, mSleepy: 0, mSmile: 0.2, mSoft: 0.8, lookY: 0.2, armL: 8, armR: 8,
        });
        return k;
      });
      const mv = (part, f, r) => new Prop(L.p[part], { x: L.at(f, r).x + L.sq / 2, y: L.at(f, r).y + L.sq - 5, scale: L.sq / 132 });
      const knight = mv('knightMv', 6, 7);
      const bishop = mv('bishopMv', 5, 7);
      const finger = new Prop(L.p.finger, { x: L.DW * 0.55, y: L.DH + 140, scale: portrait ? 1.1 : 1, opacity: 0 });
      const confetti = Array.from({ length: 26 }, (_, i) => ({
        node: L.p[`cf${i}`], x: L.S.x + (((i * 37) % 100) / 100) * L.S.w, phase: (i * 0.137) % 1, spin: (i % 2 ? 1 : -1) * (120 + (i % 5) * 40),
      }));
      return { ...L, mentor, kids, knight, bishop, finger, confetti, fx: { ui: 0, flash: 0, splash: 1, hlA: 0, hlB: 0, hlC: 0, hint: 0, burst: 0, check: 0, confetti: 0 } };
    });
    this.view = { s: 0.62, o: 0, iris: 0 };
  }

  build(tl) {
    const [b0, b1] = SCENES.board;
    const layer = this.ctx.layers.tablet;
    tl.set(layer, { autoAlpha: 0 }, 0);
    // Enter "through the screen": an iris opens from the glowing tablet.
    tl.fromTo(this.view, { s: 0.9, o: 1, iris: 0 }, { s: 1, iris: 1, duration: 0.32, ease: 'power2.in' }, b0 - 0.06);
    tl.set(layer, { autoAlpha: 1 }, b0 - 0.06);
    tl.to(this.view, { s: 1.16, o: 0, duration: 0.3, ease: 'power2.in' }, b1 - 0.1);
    tl.set(layer, { autoAlpha: 0 }, b1 + 0.21);

    for (const L of this.layouts) {
      const fx = L.fx;
      const m = L.mentor.state;
      const kn = L.knight.state;
      const bi = L.bishop.state;
      const fg = L.finger.state;
      const k0 = { x: kn.x, y: kn.y, s: kn.scale };
      const bs = { x: bi.x, y: bi.y, s: bi.scale };
      const kTo = L.at(5, 5);
      const bTo = L.at(2, 4);
      const half = L.sq / 2;

      // The official logo greets her (held), then the live class opens.
      tl.fromTo(fx, { flash: 0.9 }, { flash: 0, duration: 0.35 }, b0);
      tl.to(fx, { splash: 0, ui: 1, duration: 0.3, ease: 'sine.inOut' }, b0 + 0.8);
      // Everyone says hi: the mentor waves, the classmates wave one after another.
      tl.to(m, { ...COACH_POSES.wave, handOpenR: 1, duration: 0.25, ease: 'sine.out' }, b0 + 1.0);
      tl.fromTo(m, { foreR: 30 }, { foreR: -10, duration: 0.2, yoyo: true, repeat: 3, ease: 'sine.inOut' }, b0 + 1.1);
      L.kids.forEach((k, i) => {
        const at = b0 + 1.05 + i * 0.12;
        tl.to(k.state, { armR: 140, foreR: 30, mSmile: 1, mSoft: 0, duration: 0.2, ease: 'sine.out' }, at);
        tl.to(k.state, { foreR: 0, duration: 0.18, yoyo: true, repeat: 1, ease: 'sine.inOut' }, at + 0.2);
        tl.to(k.state, { armR: 8, foreR: 0, mSmile: 0.3, mSoft: 0.7, duration: 0.25 }, at + 0.62);
      });
      // The mentor demonstrates: knight g1 → f3 (lift → move → settle).
      tl.to(m, { ...COACH_POSES.poke, handOpenR: 0, handPointR: 1, lookX: 1, turn: 0.4, duration: 0.25, ease: 'sine.inOut' }, b0 + 1.7);
      tl.to(m, { mSmile: 0, mO: 1, duration: 0.1, yoyo: true, repeat: 3 }, b0 + 1.75);
      tl.to(fx, { hlA: 0.45, duration: 0.15 }, b0 + 1.85);
      tl.to(kn, { y: k0.y - 16, scale: k0.s * 1.12, rot: -8, duration: 0.15, ease: 'power2.out' }, b0 + 1.9);
      tl.to(kn, { x: kTo.x + half, duration: 0.35, ease: 'sine.inOut' }, b0 + 2.05);
      tl.to(kn, { y: kTo.y + L.sq - 5 - 26, duration: 0.35, ease: 'sine.out' }, b0 + 2.05);
      tl.to(kn, { y: kTo.y + L.sq - 5, scale: k0.s, rot: 0, duration: 0.12, ease: 'power2.in' }, b0 + 2.4);
      tl.to(fx, { hlA: 0.15, hlB: 0.4, duration: 0.15 }, b0 + 2.4);
      // "Your turn!" — the bishop is hinted, the mentor gestures to her.
      tl.to(m, { ...COACH_POSES.wave, handPointR: 0, handOpenR: 1, lookX: 0, turn: 0, mSmile: 1, mO: 0, foreR: 60, duration: 0.25, ease: 'sine.inOut' }, b0 + 2.55);
      tl.to(fx, { hlA: 0, hlB: 0, hlC: 0.45, hint: 1, duration: 0.2 }, b0 + 2.6);
      // Her finger reaches up, lifts the bishop and places it on c4.
      tl.fromTo(fg, { x: bs.x + 30, y: L.DH + 140, opacity: 1 }, { x: bs.x + 4, y: bs.y + 64, duration: 0.35, ease: 'sine.out' }, b0 + 2.7);
      tl.to(fg, { sy: 0.94, sx: 0.94, duration: 0.08, yoyo: true, repeat: 1 }, b0 + 3.05);
      tl.to(bi, { y: bs.y - 16, scale: bs.s * 1.14, rot: -8, duration: 0.14, ease: 'power2.out' }, b0 + 3.1);
      tl.to(bi, { x: bTo.x + half, duration: 0.35, ease: 'sine.inOut' }, b0 + 3.22);
      tl.to(bi, { y: bTo.y + L.sq - 5 - 24, duration: 0.35, ease: 'sine.out' }, b0 + 3.22);
      tl.to(fg, { x: bTo.x + half + 4, y: bTo.y + L.sq + 60, duration: 0.35, ease: 'sine.inOut' }, b0 + 3.22);
      tl.to(bi, { y: bTo.y + L.sq - 5, scale: bs.s, rot: 0, duration: 0.12, ease: 'power2.in' }, b0 + 3.57);
      tl.to(fx, { hlC: 0, hint: 0, duration: 0.1 }, b0 + 3.57);
      // Success! A golden burst, a check badge, confetti — the class cheers.
      tl.fromTo(fx, { burst: 0 }, { burst: 1, duration: 0.15, yoyo: true, repeat: 1 }, b0 + 3.62);
      tl.to(fx, { check: 1, duration: 0.3, ease: 'back.out(2.5)' }, b0 + 3.65);
      tl.to(fg, { y: L.DH + 160, duration: 0.3, ease: 'sine.in' }, b0 + 3.7);
      tl.fromTo(fx, { confetti: 0 }, { confetti: 0.999, duration: 0.8, ease: 'none' }, b0 + 3.62);
      L.kids.forEach((k, i) => {
        tl.to(k.state, { armL: 150, armR: 150, foreL: 10, foreR: 10, mSmile: 1, mSoft: 0, lid: 0.3, duration: 0.2, ease: 'back.out(2)' }, b0 + 3.68 + i * 0.05);
      });
      // The mentor claps happily.
      tl.to(m, { ...COACH_POSES.apology, handOpenL: 1, handOpenR: 1, handPointR: 0, head: 0, lid: 0.3, duration: 0.2, ease: 'sine.out' }, b0 + 3.7);
      tl.to(m, { foreL: -128, foreR: -128, duration: 0.1, yoyo: true, repeat: 3 }, b0 + 3.8);
    }
    this.b0 = b0;
  }

  update(t, time) {
    const layer = this.ctx.layers.tablet;
    if (layer.style.visibility === 'hidden') return;
    const portrait = this.ctx.responsive.portrait;
    layer.style.opacity = this.view.o.toFixed(3);
    const r = this.view.iris * 90;
    layer.style.clipPath = r >= 89.9 ? 'none' : `circle(${r.toFixed(2)}% at 50% 56%)`;
    for (const L of this.layouts) {
      const on = L.portrait === portrait;
      L.svg.style.display = on ? '' : 'none';
      if (!on) continue;
      L.svg.style.transform = `scale(${this.view.s.toFixed(4)})`;
      const fx = L.fx;
      const set = (part, v) => L.p[part].setAttribute('opacity', Math.max(0, Math.min(1, v)).toFixed(3));
      set('ui', fx.ui); set('splash', fx.splash); set('flash', fx.flash);
      set('hlA', fx.hlA); set('hlB', fx.hlB); set('hlC', fx.hlC);
      set('hint', fx.hint * (0.55 + 0.45 * Math.sin(time * 6)));
      set('burst', fx.burst);
      set('live', 0.6 + 0.4 * Math.sin(time * 4));
      L.p.check.setAttribute('transform', `translate(${L.at(2, 4).x + L.sq} ${L.at(2, 4).y}) scale(${fx.check.toFixed(3)})`);
      const k = 0.94 + (Math.min(1, Math.max(0, t - this.b0 + 0.1)) / 0.9) * 0.08;
      L.p.splashLogo.setAttribute('transform', `translate(${L.DW / 2} ${L.DH / 2}) scale(${k.toFixed(4)}) translate(${-L.DW / 2} ${-L.DH / 2})`);
      // Confetti falls through the screen during the celebration.
      for (const c of L.confetti) {
        if (fx.confetti <= 0) { c.node.setAttribute('opacity', '0'); continue; }
        const q = fx.confetti + c.phase * 0.35;
        const y = L.S.y + 40 + q * (L.S.h + 40) * 0.9;
        const x = c.x + Math.sin((q + c.phase) * 9) * 14;
        c.node.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${(q * c.spin).toFixed(1)})`);
        c.node.setAttribute('opacity', Math.min(1, (1 - fx.confetti) * 3).toFixed(3));
      }
      L.mentor.apply(null, time);
      L.kids.forEach((kd) => kd.apply(null, time));
      L.knight.apply(null);
      L.bishop.apply(null);
      L.finger.apply(null);
    }
  }
}
