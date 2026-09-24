// The 2.5D illustrated world used from the dive (scene 05) to the pull-back
// (scene 11): a city at dawn → the girl's house → her bedroom.
//
// The bedroom is drawn in its own 1600 × 1000 space and nested *inside the
// upper window* of the house (scale BEDROOM_K), so one camera can travel
// city → house → through the window → bedroom → her face and back out again
// as a single continuous move.

import { group, parts, uid } from './svg.js';
import { pieceMarkup, pieceGradients, PIECE_PATHS } from './pieces.js';

// Window aperture in city coordinates (1.6 : 1, matches the bedroom 1600 × 1000).
export const WINDOW = { x: 770, y: 452, w: 76, h: 47.5 };
export const BEDROOM_K = WINDOW.w / 1600;

/** Bedroom coordinates → city coordinates. */
export function bedroomToCity(bx, by) {
  return { x: WINDOW.x + bx * BEDROOM_K, y: WINDOW.y + by * BEDROOM_K };
}

// Deterministic pseudo-random so the skyline is identical on every mount.
function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

function windowsGrid(r, x0, y0, cols, rows, w, h, gapX, gapY, litChance, color = '#F2D892') {
  let out = '';
  for (let c = 0; c < cols; c++) {
    for (let j = 0; j < rows; j++) {
      if (r() < litChance) {
        const o = (0.45 + r() * 0.5).toFixed(2);
        out += `<rect x="${(x0 + c * gapX).toFixed(1)}" y="${(y0 + j * gapY).toFixed(1)}" width="${w}" height="${h}" fill="${color}" opacity="${o}"/>`;
      }
    }
  }
  return out;
}

function skyline(r, { y, minH, maxH, color, count, x0 = -300, x1 = 1900, lit = 0.25 }) {
  let out = '';
  let x = x0;
  for (let i = 0; i < count && x < x1; i++) {
    const w = 40 + r() * 90;
    const h = minH + r() * (maxH - minH);
    out += `<rect x="${x.toFixed(1)}" y="${(y - h).toFixed(1)}" width="${w.toFixed(1)}" height="${(h + 400).toFixed(1)}" fill="${color}"/>`;
    if (r() < 0.25) out += `<rect x="${(x + w * 0.4).toFixed(1)}" y="${(y - h - 18).toFixed(1)}" width="3" height="18" fill="${color}"/>`;
    out += windowsGrid(r, x + 6, y - h + 10, Math.floor((w - 8) / 12), Math.floor(h / 16), 5, 7, 12, 16, lit);
    x += w + r() * 14;
  }
  return out;
}

function house(x, y, w, h, wall, roof, r) {
  return `
    <path d="M${x - 12} ${y} L${x + w / 2} ${y - h * 0.38} L${x + w + 12} ${y} Z" fill="${roof}"/>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${wall}"/>
    ${windowsGrid(r, x + 14, y + 18, Math.floor((w - 20) / 34), Math.floor((h - 30) / 50), 20, 26, 34, 50, 0.55)}`;
}

function tree(x, y, s, c = '#10345A') {
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <rect x="-4" y="-10" width="8" height="40" fill="#0A1C38"/>
    <circle cx="0" cy="-40" r="34" fill="${c}"/><circle cx="-22" cy="-22" r="24" fill="${c}"/><circle cx="22" cy="-24" r="26" fill="${c}"/>
    <circle cx="-8" cy="-52" r="16" fill="#1B4C7A" opacity=".55"/></g>`;
}

function bedroomMarkup(id, detail) {
  const board = (() => {
    // A chessboard on the desk, seen at a shallow angle.
    let s = '';
    const x0 = 150, y0 = 598, w = 200, h = 36, n = 8;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const t0 = j / n, t1 = (j + 1) / n;
        const skew = (t) => (1 - t) * 18;
        const xa = x0 + skew(t0) + (w - 2 * skew(t0)) * (i / n);
        const xb = x0 + skew(t0) + (w - 2 * skew(t0)) * ((i + 1) / n);
        const xc = x0 + skew(t1) + (w - 2 * skew(t1)) * ((i + 1) / n);
        const xd = x0 + skew(t1) + (w - 2 * skew(t1)) * (i / n);
        const ya = y0 + h * t0, yb = y0 + h * t1;
        s += `<path d="M${xa.toFixed(1)} ${ya.toFixed(1)} L${xb.toFixed(1)} ${ya.toFixed(1)} L${xc.toFixed(1)} ${yb.toFixed(1)} L${xd.toFixed(1)} ${yb.toFixed(1)} Z" fill="${(i + j) % 2 ? '#1D3F84' : '#EDE7DA'}"/>`;
      }
    }
    return s;
  })();

  const bulbs = Array.from({ length: 17 }, (_, i) => {
    const t = i / 16;
    const x = 90 + t * 1420;
    const y = 110 + Math.sin(t * Math.PI) * 70 + Math.sin(t * Math.PI * 4) * 6;
    return `<circle cx="${x.toFixed(1)}" cy="${(y + 8).toFixed(1)}" r="16" fill="#F2D892" opacity=".16"/><circle cx="${x.toFixed(1)}" cy="${(y + 8).toFixed(1)}" r="5.5" fill="#F7E2A6"/>`;
  }).join('');

  const hem = Array.from({ length: 34 }, (_, i) =>
    `<rect x="${404 + i * 20.3}" y="${i % 2 ? 699 : 707}" width="20.3" height="8" fill="${i % 2 ? '#F7F5F0' : '#0B1E3D'}"/>`).join('');

  return `
  <g data-part="bedroom" transform="translate(${WINDOW.x} ${WINDOW.y}) scale(${BEDROOM_K})">
    <rect x="-40" y="-40" width="1680" height="1080" fill="url(#${id}-wall)"/>
    <path d="M300 170 L760 150 L840 620 L240 640 Z" fill="#F2D892" opacity=".07"/>
    <path d="M40 520 H1560" stroke="#0E2552" stroke-width="6" opacity=".6"/>
    <path d="M90 110 Q800 250 1510 110" stroke="#0A1A38" stroke-width="2.5" fill="none"/>
    ${bulbs}
    <!-- poster -->
    <g transform="translate(640 160)">
      <rect width="220" height="170" rx="4" fill="#F7F5F0"/>
      <rect x="10" y="10" width="200" height="150" fill="#0B1E3D"/>
      ${Array.from({ length: 16 }, (_, i) => `<rect x="${30 + (i % 4) * 22}" y="${36 + Math.floor(i / 4) * 22}" width="22" height="22" fill="${(i + Math.floor(i / 4)) % 2 ? '#2C5BC4' : '#EDE7DA'}" opacity=".85"/>`).join('')}
      <g transform="translate(160 128) scale(.72)">${pieceMarkup('knight', `${id}-gold`, { shadow: false })}</g>
    </g>
    <!-- shelf with trophy and books -->
    <rect x="140" y="330" width="340" height="14" rx="3" fill="#0A1A38"/>
    <g transform="translate(212 330)">
      <path d="M-30 -86 H30 Q30 -46 8 -38 L6 -22 H16 V0 H-16 V-22 H-6 L-8 -38 Q-30 -46 -30 -86 Z" fill="url(#${id}-gold)" stroke="#7a5a22" stroke-width="2"/>
      <path d="M-30 -80 Q-48 -80 -44 -62 Q-40 -52 -26 -52 M30 -80 Q48 -80 44 -62 Q40 -52 26 -52" stroke="#C9A24B" stroke-width="5" fill="none"/>
      <path d="${PIECE_PATHS.knight}" transform="translate(-9 -110) scale(.18)" fill="#E6C475"/>
    </g>
    <rect x="290" y="252" width="22" height="78" fill="#F7F5F0"/><rect x="314" y="262" width="18" height="68" fill="#2C5BC4"/>
    <rect x="334" y="248" width="24" height="82" fill="#D8B15E"/><rect x="360" y="266" width="20" height="64" fill="#13306A" transform="rotate(12 370 330)"/>
    <g transform="translate(430 330)"><rect x="-26" y="-34" width="52" height="34" rx="6" fill="#13306A"/><circle cx="-11" cy="-17" r="9" fill="#F7F5F0"/><circle cx="11" cy="-17" r="9" fill="#F7F5F0"/><rect x="-14" y="-42" width="6" height="8" fill="#D8B15E"/><rect x="8" y="-42" width="6" height="8" fill="#D8B15E"/></g>
    <!-- desk with chessboard and notebook -->
    <rect x="80" y="636" width="330" height="22" rx="4" fill="#0E2148"/>
    <rect x="96" y="658" width="16" height="200" fill="#0A1936"/><rect x="378" y="658" width="16" height="200" fill="#0A1936"/>
    <path d="M150 634 L350 634 L350 640 L150 640 Z" fill="#0A1936"/>
    ${board}
    <g transform="translate(206 616) scale(.2)">${pieceMarkup('king', `${id}-ivory`)}</g>
    <g transform="translate(236 626) scale(.17)">${pieceMarkup('pawn', `${id}-ivory`)}</g>
    <g transform="translate(290 612) scale(.19)">${pieceMarkup('queen', `${id}-navy`, { tone: 'navy' })}</g>
    <g transform="translate(318 626) scale(.18)">${pieceMarkup('knight', `${id}-navy`, { tone: 'navy' })}</g>
    <g transform="translate(262 606) scale(.17)">${pieceMarkup('rook', `${id}-navy`, { tone: 'navy' })}</g>
    <g transform="translate(96 606) rotate(-6)"><rect width="46" height="30" rx="2" fill="#F7F5F0"/><rect width="7" height="30" fill="#2C5BC4"/><path d="M14 10 H40 M14 17 H36 M14 24 H38" stroke="#9AA6BB" stroke-width="2"/></g>
    <!-- rug + floor -->
    <rect x="-40" y="840" width="1680" height="200" fill="#0A1834"/>
    <path d="M-40 900 H1640 M-40 960 H1640" stroke="#0F2146" stroke-width="3"/>
    <ellipse cx="760" cy="905" rx="430" ry="58" fill="#1F4390"/><ellipse cx="760" cy="905" rx="400" ry="46" fill="none" stroke="#F7F5F0" stroke-width="4" stroke-dasharray="14 10" opacity=".7"/>
    <!-- bed -->
    <path d="M1086 760 V470 Q1086 430 1116 430 Q1146 430 1146 470 V760 Z" fill="#0E2148"/>
    <path d="M1096 480 Q1096 446 1116 446 Q1136 446 1136 480" stroke="#D8B15E" stroke-width="3" fill="none"/>
    <path d="M360 760 V580 Q360 560 380 560 Q400 560 400 580 V760 Z" fill="#0E2148"/>
    <rect x="392" y="648" width="702" height="92" fill="#112655"/>
    <rect x="400" y="598" width="690" height="56" rx="14" fill="#EDE7DA"/>
    <ellipse cx="1004" cy="585" rx="80" ry="31" fill="#F7F5F0"/><path d="M936 598 Q1004 614 1072 596" stroke="#C9CBD4" stroke-width="3" fill="none"/>
    <g data-part="girlSlot"></g>
    <path data-part="blanket" d="" fill="url(#${id}-blanket)"/>
    ${hem}
    <!-- nightstand with tablet, headphones and books -->
    <rect x="1150" y="624" width="170" height="216" rx="8" fill="#0E2148"/>
    <rect x="1142" y="612" width="186" height="18" rx="5" fill="#15306A"/>
    <path d="M1162 700 H1308 M1162 770 H1308" stroke="#0A1834" stroke-width="3"/>
    <circle cx="1235" cy="736" r="5" fill="#D8B15E"/><circle cx="1235" cy="806" r="5" fill="#D8B15E"/>
    <rect x="1256" y="590" width="62" height="11" rx="2" fill="#2C5BC4"/><rect x="1260" y="601" width="56" height="11" rx="2" fill="#F7F5F0"/>
    ${detail ? '<path d="M1270 588 Q1290 556 1310 588" stroke="#13306A" stroke-width="6" fill="none"/><ellipse cx="1270" cy="588" rx="8" ry="5" fill="#2C5BC4"/><ellipse cx="1310" cy="588" rx="8" ry="5" fill="#2C5BC4"/>' : ''}
    <g data-part="tabletNS" transform="translate(1196 612)">
      <ellipse data-part="nsGlow" cx="-4" cy="-44" rx="70" ry="60" fill="url(#${id}-notif)" opacity=".6"/>
      <path d="M-34 -2 L-40 -82 L22 -92 L28 -6 Z" fill="#0B1E3D"/>
      <path d="M-30 -7 L-35.5 -78 L18 -87 L23.5 -10 Z" fill="#132B57"/>
      <g data-part="nsIcon" transform="translate(-6 -46) skewY(-8)">
        <circle r="16" fill="#0B1E3D" stroke="#D8B15E" stroke-width="2.5"/>
        <path d="${PIECE_PATHS.knight}" transform="scale(.2) translate(-50 -66)" fill="#F2D892"/>
      </g>
      <path d="M-20 0 L20 -4 L8 -18 Z" fill="#0A1834"/>
    </g>
    <path data-part="roomGlow" d="M500 1000 C500 600 700 300 960 300 C1220 300 1420 600 1420 1000 Z" fill="url(#${id}-roomGlow)" opacity="0"/>
  </g>`;
}

export function createWorld({ detail = true } = {}) {
  const id = uid('world');
  const r = rng(7);
  const markup = `
  <defs>
    ${pieceGradients(id)}
    <linearGradient id="${id}-sky" gradientUnits="userSpaceOnUse" x1="0" y1="-500" x2="0" y2="760">
      <stop offset="0" stop-color="#040B1D"/><stop offset=".38" stop-color="#0B1E3D"/><stop offset=".68" stop-color="#1A3A78"/>
      <stop offset=".86" stop-color="#6E7DB2"/><stop offset=".96" stop-color="#E9B777"/><stop offset="1" stop-color="#F4CE8C"/>
    </linearGradient>
    <radialGradient id="${id}-sun" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1180 740) scale(520 260)">
      <stop offset="0" stop-color="#FFE7B0" stop-opacity=".95"/><stop offset=".35" stop-color="#F2C67E" stop-opacity=".45"/><stop offset="1" stop-color="#F2C67E" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="${id}-wall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1D3B74"/><stop offset=".85" stop-color="#132C5B"/><stop offset="1" stop-color="#0E2249"/>
    </linearGradient>
    <linearGradient id="${id}-blanket" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#3D6BD0"/><stop offset=".6" stop-color="#2C5BC4"/><stop offset="1" stop-color="#1D3F8A"/>
    </linearGradient>
    <linearGradient id="${id}-facade" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#EDE7DA"/><stop offset=".7" stop-color="#C9CAD4"/><stop offset="1" stop-color="#9FA8BE"/>
    </linearGradient>
    <linearGradient id="${id}-glass" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity=".35"/><stop offset=".4" stop-color="#BFD4FF" stop-opacity=".08"/><stop offset=".55" stop-color="#FFFFFF" stop-opacity=".22"/><stop offset="1" stop-color="#BFD4FF" stop-opacity=".05"/>
    </linearGradient>
    <radialGradient id="${id}-notif" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#F2D892" stop-opacity=".85"/><stop offset="1" stop-color="#F2D892" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="${id}-roomGlow" cx=".5" cy=".62" r=".6">
      <stop offset="0" stop-color="#DDEBFF" stop-opacity=".22"/><stop offset="1" stop-color="#DDEBFF" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="${id}-lamp" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#F7E2A6" stop-opacity=".7"/><stop offset="1" stop-color="#F7E2A6" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <g data-part="far">
    <rect x="-2000" y="-1200" width="5600" height="2400" fill="url(#${id}-sky)"/>
    <g fill="#fff">${Array.from({ length: 60 }, () => `<circle cx="${(r() * 2400 - 400).toFixed(0)}" cy="${(r() * 700 - 500).toFixed(0)}" r="${(0.6 + r() * 1.4).toFixed(1)}" opacity="${(0.3 + r() * 0.6).toFixed(2)}"/>`).join('')}</g>
    <rect x="-2000" y="300" width="5600" height="800" fill="url(#${id}-sun)"/>
    <g opacity=".9">${skyline(r, { y: 720, minH: 60, maxH: 210, color: '#34508C', count: 40, lit: 0.12 })}</g>
  </g>
  <g data-part="mid">
    ${skyline(r, { y: 740, minH: 90, maxH: 300, color: '#1C3466', count: 36, lit: 0.22 })}
  </g>
  <g data-part="near">
    <rect x="-2000" y="752" width="5600" height="600" fill="#0A1934"/>
    ${house(330, 520, 170, 240, '#1A2F5E', '#0F2146', r)}
    ${house(520, 560, 150, 200, '#22396E', '#132B57', r)}
    ${house(960, 540, 160, 220, '#1C3366', '#0F2146', r)}
    ${house(1140, 500, 190, 260, '#172C5A', '#0C1D40', r)}
    ${detail ? house(110, 560, 180, 200, '#20386B', '#11264F', r) + house(1360, 550, 170, 210, '#1E3569', '#10244C', r) : ''}
    ${bedroomMarkup(id, detail)}
    <!-- the girl's house: facade with a real hole where the window is -->
    <path d="M700 420 H916 V760 H700 Z M${WINDOW.x} ${WINDOW.y} V${WINDOW.y + WINDOW.h} H${WINDOW.x + WINDOW.w} V${WINDOW.y} Z" fill="url(#${id}-facade)" fill-rule="evenodd"/>
    <g opacity=".18" stroke="#8C98B4" stroke-width="1">${Array.from({ length: 16 }, (_, i) => `<path d="M700 ${440 + i * 20} H916"/>`).join('')}</g>
    <!-- warm glow around (never over) the window, so the interior stays clean -->
    <path d="M${WINDOW.x - WINDOW.w * 0.9} ${WINDOW.y - WINDOW.h} h${WINDOW.w * 2.8} v${WINDOW.h * 3} h${-WINDOW.w * 2.8} Z M${WINDOW.x} ${WINDOW.y} v${WINDOW.h} h${WINDOW.w} v${-WINDOW.h} Z" fill-rule="evenodd" fill="url(#${id}-lamp)" opacity=".55"/>
    <rect x="${WINDOW.x - 2}" y="${WINDOW.y + WINDOW.h + 7}" width="${WINDOW.w + 4}" height="7" rx="2" fill="#13306A"/>
    <g fill="#D8B15E">${Array.from({ length: 7 }, (_, i) => `<circle cx="${WINDOW.x + 6 + i * 10.5}" cy="${WINDOW.y + WINDOW.h + 6}" r="2.6"/>`).join('')}</g>
    <path d="M684 426 L808 326 L932 426 Z" fill="#13306A"/>
    <path d="M684 426 L808 326 L932 426" stroke="#D8B15E" stroke-width="2.5" fill="none"/>
    <rect x="860" y="346" width="22" height="52" fill="#13306A"/>
    <rect data-part="glass" x="${WINDOW.x}" y="${WINDOW.y}" width="${WINDOW.w}" height="${WINDOW.h}" fill="url(#${id}-glass)"/>
    <rect x="${WINDOW.x - 3}" y="${WINDOW.y - 3}" width="${WINDOW.w + 6}" height="${WINDOW.h + 6}" fill="none" stroke="#F7F5F0" stroke-width="4"/>
    <rect x="${WINDOW.x - 7}" y="${WINDOW.y + WINDOW.h + 2}" width="${WINDOW.w + 14}" height="5" rx="1.5" fill="#F7F5F0"/>
    <rect x="720" y="600" width="46" height="52" fill="#F2D892" opacity=".85"/><rect x="850" y="600" width="46" height="52" fill="#F2D892" opacity=".7"/>
    <path d="M743 600 V652 M720 626 H766 M873 600 V652 M850 626 H896" stroke="#EDE7DA" stroke-width="3"/>
    <rect x="792" y="690" width="34" height="70" rx="3" fill="#13306A"/><circle cx="819" cy="727" r="2.5" fill="#D8B15E"/>
    <rect x="770" y="757" width="80" height="6" fill="#9FA8BE"/>
    <g data-part="exteriorSlot"></g>
    ${tree(660, 740, 1.05)}${tree(960, 748, 0.9, '#0E2E52')}${tree(250, 752, 1.2)}${tree(1330, 752, 1.1, '#0E2E52')}
    <g transform="translate(1040 752)"><rect x="-3" y="-120" width="6" height="120" fill="#0A1834"/><circle cx="0" cy="-124" r="36" fill="url(#${id}-lamp)"/><circle cx="0" cy="-124" r="7" fill="#F7E2A6"/></g>
  </g>`;
  const root = group(markup, { class: 'tdc-world' });
  return { root, parts: parts(root), id };
}

// Blanket shapes (identical command structure so they can be morphed).
export const BLANKET_LYING = 'M404 612 C500 552 760 536 950 566 C1010 576 1060 594 1090 606 L1090 712 C900 724 600 724 404 712 Z';
export const BLANKET_SITTING = 'M404 640 C560 632 780 600 905 588 C985 582 1050 606 1090 624 L1090 712 C900 724 600 724 404 712 Z';
