// SCENE 08: the tablet screen — the official TDC logo, then a live online class:
// Coach Knight on video, a chessboard, and one piece that lifts, moves, settles.
// Landscape and portrait layouts (portrait = stacked) are both built; the
// ResponsiveManager decides which one shows.

import { SCENES } from '../config.js';
import { createCoach, COACH_POSES } from '../art/coach.js';
import { createGirl } from '../art/girl.js';
import { Prop } from '../art/rig.js';
import { group, uid, el, createSvgRoot, parts } from '../art/svg.js';
import { pieceMarkup, pieceGradients } from '../art/pieces.js';

// Position after 1.e4 e5 — the white knight g1 → f3 is the move we play.
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

function buildLayout(id, portrait, logoUrl) {
  const DW = portrait ? 660 : 1000;
  const DH = portrait ? 1000 : 660;
  const S = { x: 40, y: 40, w: DW - 80, h: DH - 80 };
  const video = portrait ? { x: 60, y: 116, w: 540, h: 330 } : { x: 60, y: 116, w: 404, h: 474 };
  const sq = portrait ? 60 : 56;
  const board = portrait ? { x: 90, y: 466 } : { x: 484, y: 122 };

  let squares = '';
  let pieces = '';
  for (let r = 0; r < 8; r++) {
    for (let f = 0; f < 8; f++) {
      const x = board.x + f * sq, y = board.y + r * sq;
      squares += `<rect x="${x}" y="${y}" width="${sq}" height="${sq}" fill="${(r + f) % 2 ? '#2C5BC4' : '#EDE7DA'}"/>`;
      const ch = POSITION[r][f];
      if (ch !== '.') {
        const white = ch === ch.toUpperCase();
        const type = NAMES[ch.toLowerCase()];
        const isMover = r === 7 && f === 6;
        pieces += `<g ${isMover ? 'data-part="mover"' : ''} transform="translate(${x + sq / 2} ${y + sq - 5}) scale(${(sq / 132).toFixed(3)})">${pieceMarkup(type, `${id}-${white ? 'ivory' : 'navy'}`, { tone: white ? 'ivory' : 'navy' })}</g>`;
      }
    }
  }
  const from = { x: board.x + 6 * sq, y: board.y + 7 * sq };
  const to = { x: board.x + 5 * sq, y: board.y + 5 * sq };

  const markup = `
    <defs>
      ${pieceGradients(id)}
      <linearGradient id="${id}-vid" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1D3B74"/><stop offset="1" stop-color="#0B1E3D"/></linearGradient>
      <clipPath id="${id}-vclip"><rect x="${video.x}" y="${video.y}" width="${video.w}" height="${video.h}" rx="14"/></clipPath>
      <clipPath id="${id}-pip"><rect x="${video.x + 14}" y="${video.y + video.h - 104}" width="118" height="90" rx="10"/></clipPath>
      <clipPath id="${id}-screen"><rect x="${S.x}" y="${S.y}" width="${S.w}" height="${S.h}" rx="16"/></clipPath>
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
        <g opacity=".9">${[0, 1, 2].map((i) => `<circle cx="${S.x + S.w - 72 - i * 30}" cy="${S.y + 31}" r="11" fill="${['#2C5BC4', '#D8B15E', '#8FA6D8'][i]}" stroke="#fff" stroke-width="2.5"/>`).join('')}</g>
        <rect x="${video.x}" y="${video.y}" width="${video.w}" height="${video.h}" rx="14" fill="url(#${id}-vid)"/>
        <g clip-path="url(#${id}-vclip)">
          <path d="M${video.x} ${video.y + video.h * 0.34} H${video.x + video.w} M${video.x} ${video.y + video.h * 0.62} H${video.x + video.w}" stroke="#2A4A8A" stroke-width="6"/>
          ${Array.from({ length: 10 }, (_, i) => `<rect x="${video.x + 20 + i * 26}" y="${video.y + video.h * 0.34 - 34 - (i % 3) * 6}" width="18" height="${34 + (i % 3) * 6}" fill="${['#D8B15E', '#F7F5F0', '#4A76D6'][i % 3]}" opacity=".55"/>`).join('')}
          <g data-part="coachSlot"></g>
          <rect x="${video.x + 14}" y="${video.y + video.h - 104}" width="118" height="90" rx="10" fill="#EAF0FA" stroke="#fff" stroke-width="3"/>
          <g clip-path="url(#${id}-pip)"><g data-part="girlSlot"></g></g>
        </g>
        <rect x="${board.x - 6}" y="${board.y - 6}" width="${sq * 8 + 12}" height="${sq * 8 + 12}" rx="8" fill="#0B1E3D"/>
        ${squares}
        <rect data-part="fromSq" x="${from.x}" y="${from.y}" width="${sq}" height="${sq}" fill="#D8B15E" opacity="0"/>
        <rect data-part="toSq" x="${to.x}" y="${to.y}" width="${sq}" height="${sq}" fill="#D8B15E" opacity="0"/>
        <path data-part="arc" d="M${from.x + sq / 2} ${from.y + sq / 2} Q${from.x + sq / 2} ${to.y + sq / 2} ${to.x + sq / 2} ${to.y + sq / 2}" stroke="#D8B15E" stroke-width="4" stroke-dasharray="2 9" stroke-linecap="round" fill="none" opacity="0"/>
        ${pieces}
      </g>
      <g data-part="splash">
        <rect x="${S.x}" y="${S.y}" width="${S.w}" height="${S.h}" fill="#FFFFFF"/>
        <g data-part="splashLogo">
          <image href="${logoUrl}" x="${DW / 2 - (portrait ? 250 : 330)}" y="${DH / 2 - 150}" width="${portrait ? 500 : 660}" height="300" preserveAspectRatio="xMidYMid meet"/>
        </g>
      </g>
      <rect data-part="flash" x="${S.x}" y="${S.y}" width="${S.w}" height="${S.h}" fill="#FFFFFF" opacity="0"/>
    </g>
    <ellipse cx="${portrait ? 12 : 16}" cy="${DH * 0.62}" rx="30" ry="46" fill="#E0A67E"/>
    <ellipse cx="${DW - (portrait ? 12 : 16)}" cy="${DH * 0.6}" rx="30" ry="46" fill="#E0A67E"/>`;

  const svg = createSvgRoot(`tdc-tablet-device ${portrait ? 'is-portrait' : 'is-landscape'}`, `0 0 ${DW} ${DH}`);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  svg.appendChild(group(markup));
  const p = parts(svg);
  return { svg, p, video, sq, from, to, portrait };
}

export class TabletScene {
  constructor(ctx) {
    this.ctx = ctx;
    const logoUrl = ctx.assets.logoHorizontalUrl;
    this.layouts = [false, true].map((portrait) => {
      const L = buildLayout(uid('tab'), portrait, logoUrl);
      ctx.layers.tablet.appendChild(L.svg);
      const coach = createCoach();
      L.p.coachSlot.appendChild(coach.root);
      // Webcam framing: head and shoulders.
      const cs = portrait ? 1.0 : 1.5;
      Object.assign(coach.state, COACH_POSES.stand, {
        x: L.video.x + L.video.w * (portrait ? 0.5 : 0.52),
        y: L.video.y + (portrait ? 34 : 58) + 250 * cs,
        scale: cs,
        mSmile: 1,
      });
      const girl = createGirl();
      L.p.girlSlot.appendChild(girl.root);
      Object.assign(girl.state, {
        x: L.video.x + 73, y: L.video.y + L.video.h + 5, scale: 0.36, lid: 0, mSleepy: 0, mSmile: 1, lookY: -0.2,
      });
      const mover = new Prop(L.p.mover, { x: L.from.x + L.sq / 2, y: L.from.y + L.sq - 5, scale: L.sq / 132 });
      return { ...L, coach, girl, mover, fx: { ui: 0, flash: 0, splash: 1, fromSq: 0, toSq: 0, arc: 0 } };
    });
    this.view = { s: 0.62, o: 0 };
  }

  build(tl) {
    const [b0, b1] = SCENES.board;
    const layer = this.ctx.layers.tablet;
    tl.set(layer, { autoAlpha: 0 }, 0);
    tl.fromTo(this.view, { s: 0.5, o: 0 }, { s: 1, o: 1, duration: 0.2, ease: 'power2.out' }, b0 - 0.08);
    tl.set(layer, { autoAlpha: 1 }, b0 - 0.08);
    tl.to(this.view, { s: 1.18, o: 0, duration: 0.16, ease: 'power2.in' }, b1 - 0.1);
    tl.set(layer, { autoAlpha: 0 }, b1 + 0.07);

    for (const L of this.layouts) {
      const fx = L.fx;
      const m = L.mover.state;
      const c = L.coach.state;
      const baseX = m.x, baseY = m.y, baseS = m.scale;
      const dx = L.to.x - L.from.x, dy = L.to.y - L.from.y;
      tl.fromTo(fx, { flash: 0.9 }, { flash: 0, duration: 0.2 }, b0 - 0.04);
      tl.to(fx, { splash: 0, ui: 1, duration: 0.14, ease: 'power1.inOut' }, b0 + 0.3);
      // Coach explains and points at the board (silent, expressive).
      tl.to(c, { ...COACH_POSES.poke, handPointR: 1, duration: 0.14, ease: 'power2.out' }, b0 + 0.38);
      tl.to(c, { mSmile: 0, mO: 1, duration: 0.06, yoyo: true, repeat: 3 }, b0 + 0.4);
      tl.to(c, { lookX: 1, turn: 0.4, duration: 0.1 }, b0 + 0.42);
      // The knight: LIFT → MOVE → SETTLE.
      tl.to(fx, { fromSq: 0.45, duration: 0.08 }, b0 + 0.46);
      tl.to(m, { y: baseY - 16, scale: baseS * 1.14, rot: -8, duration: 0.1, ease: 'power2.out' }, b0 + 0.48);
      tl.to(fx, { arc: 1, toSq: 0.3, duration: 0.08 }, b0 + 0.54);
      tl.to(m, { x: baseX + dx, duration: 0.2, ease: 'power2.inOut' }, b0 + 0.58);
      tl.to(m, { y: baseY + dy - 24, duration: 0.2, ease: 'power1.out' }, b0 + 0.58);
      tl.to(m, { y: baseY + dy, scale: baseS, rot: 0, duration: 0.08, ease: 'power2.in' }, b0 + 0.78);
      tl.to(m, { sy: 0.92, sx: 1.06, duration: 0.04, yoyo: true, repeat: 1 }, b0 + 0.86);
      tl.to(fx, { arc: 0, fromSq: 0.2, toSq: 0.55, duration: 0.1 }, b0 + 0.84);
      tl.to(c, { lookX: 0, turn: 0, mSmile: 1, mO: 0, ...COACH_POSES.wave, handOpenR: 1, handPointR: 0, duration: 0.12 }, b0 + 0.84);
    }
  }

  update(t, time) {
    const layer = this.ctx.layers.tablet;
    if (layer.style.visibility === 'hidden') return;
    const portrait = this.ctx.responsive.portrait;
    layer.style.opacity = this.view.o.toFixed(3);
    for (const L of this.layouts) {
      const on = L.portrait === portrait;
      L.svg.style.display = on ? '' : 'none';
      if (!on) continue;
      L.svg.style.transform = `scale(${this.view.s.toFixed(4)})`;
      const fx = L.fx;
      L.p.ui.setAttribute('opacity', fx.ui.toFixed(3));
      L.p.splash.setAttribute('opacity', fx.splash.toFixed(3));
      L.p.flash.setAttribute('opacity', fx.flash.toFixed(3));
      L.p.fromSq.setAttribute('opacity', fx.fromSq.toFixed(3));
      L.p.toSq.setAttribute('opacity', fx.toSq.toFixed(3));
      L.p.arc.setAttribute('opacity', fx.arc.toFixed(3));
      L.p.live.setAttribute('opacity', (0.55 + 0.45 * Math.sin(time * 8)).toFixed(3));
      const k = 0.94 + Math.min(1, Math.max(0, t - SCENES.board[0] + 0.1)) * 0.1;
      L.p.splashLogo.setAttribute('transform', `translate(${L.svg.viewBox.baseVal.width / 2} ${L.svg.viewBox.baseVal.height / 2}) scale(${k.toFixed(4)}) translate(${-L.svg.viewBox.baseVal.width / 2} ${-L.svg.viewBox.baseVal.height / 2})`);
      L.coach.apply(null, time);
      L.girl.apply(null, time);
      L.mover.apply(null);
    }
  }
}
