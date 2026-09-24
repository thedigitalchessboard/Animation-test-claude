// Staunton-style chess piece silhouettes, drawn in a 100 × 124 box
// (base centre at 50,120). Used as SVG (bedroom, tablet, final chase) and
// rasterised to canvas for the WebGL sprites on the globe.

const BASE = 'M22 121 H78 V114 Q78 106 69 104 H31 Q22 106 22 114 Z';

export const PIECE_PATHS = {
  pawn: BASE + ' M36 104 Q40 90 43 74 L37 72 Q33 68 38 65 L44 63 Q32 56 32 43 Q32 26 50 26 Q68 26 68 43 Q68 56 56 63 L62 65 Q67 68 63 72 L57 74 Q60 90 64 104 Z',
  rook: BASE + ' M33 104 L37 62 L31 57 L31 34 L40 34 L40 42 L46 42 L46 34 L54 34 L54 42 L60 42 L60 34 L69 34 L69 57 L63 62 L67 104 Z',
  knight: BASE + ' M31 104 Q30 88 40 77 Q48 68 47 60 Q41 62 35 66 Q28 69 24 63 Q20 57 26 50 Q34 40 38 33 Q42 25 49 21 L47 12 Q53 14 57 19 Q71 22 77 38 Q83 57 77 81 Q75 93 73 104 Z',
  bishop: BASE + ' M36 104 Q40 86 44 73 L38 71 Q34 67 40 64 L44 62 Q31 52 34 38 Q38 26 50 17 Q62 26 66 38 Q69 52 56 62 L60 64 Q66 67 62 71 L56 73 Q60 86 64 104 Z M50 3 A6 6 0 1 1 49.9 3 Z',
  queen: BASE + ' M34 104 Q40 84 42 68 L36 66 Q32 62 38 59 L41 57 L28 30 L40 44 L42 22 L50 40 L58 22 L60 44 L72 30 L59 57 L62 59 Q68 62 64 66 L58 68 Q60 84 66 104 Z',
  king: BASE + ' M34 104 Q40 84 42 68 L36 66 Q32 62 38 59 L42 57 Q29 47 31 37 Q34 28 50 31 Q66 28 69 37 Q71 47 58 57 L62 59 Q68 62 64 66 L58 68 Q60 84 66 104 Z M47 6 H53 V13 H60 V19 H53 V29 H47 V19 H40 V13 H47 Z',
};

// Small decorative details drawn on top of the silhouette (eye, crown balls, mitre slit).
export const PIECE_DETAILS = {
  knight: '<circle cx="44" cy="35" r="2.6" fill="#0B1E3D"/><path d="M58 24 Q66 34 66 52" stroke="#0B1E3D" stroke-opacity=".35" stroke-width="2" fill="none"/>',
  bishop: '<path d="M55 34 L45 46" stroke="#0B1E3D" stroke-opacity=".55" stroke-width="2.4" stroke-linecap="round"/>',
  queen: '<circle cx="28" cy="29" r="4"/><circle cx="42" cy="21" r="4"/><circle cx="58" cy="21" r="4"/><circle cx="72" cy="29" r="4"/>',
  pawn: '', rook: '', king: '',
};

export const PIECE_TYPES = ['pawn', 'knight', 'bishop', 'rook', 'queen', 'king'];

/**
 * Markup for a physical-looking gold (or ivory/navy) piece in local coords.
 * Origin is the base centre (50,120) so pieces can be placed by their foot.
 */
export function pieceMarkup(type, gradId, { shadow = true, tone = 'gold' } = {}) {
  const fill = `url(#${gradId})`;
  const stroke = tone === 'navy' ? '#050d1f' : tone === 'ivory' ? '#9aa6bb' : '#7a5a22';
  const detail = PIECE_DETAILS[type].replace(/<circle /g, `<circle fill="${fill}" stroke="${stroke}" stroke-width="1.4" `);
  return `
    <g transform="translate(-50 -120)">
      ${shadow ? '<ellipse data-part="shadow" cx="50" cy="121" rx="30" ry="5" fill="#000" opacity=".28"/>' : ''}
      <path d="${PIECE_PATHS[type]}" fill="${fill}" stroke="${stroke}" stroke-width="1.6" stroke-linejoin="round" fill-rule="nonzero"/>
      ${detail}
      <path d="${PIECE_PATHS[type]}" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="1" transform="translate(-1.2 -1)"/>
    </g>`;
}

/** Linear gradient definitions for the three piece tones. */
export function pieceGradients(prefix) {
  return `
    <linearGradient id="${prefix}-gold" x1="0" y1="0" x2="1" y2="0.25">
      <stop offset="0" stop-color="#F6E3A8"/><stop offset=".38" stop-color="#E0BC69"/>
      <stop offset=".7" stop-color="#B98D3C"/><stop offset="1" stop-color="#8A6424"/>
    </linearGradient>
    <linearGradient id="${prefix}-ivory" x1="0" y1="0" x2="1" y2="0.2">
      <stop offset="0" stop-color="#FFFFFF"/><stop offset=".55" stop-color="#EDE9E0"/><stop offset="1" stop-color="#BFC5D2"/>
    </linearGradient>
    <linearGradient id="${prefix}-navy" x1="0" y1="0" x2="1" y2="0.2">
      <stop offset="0" stop-color="#3F5F9E"/><stop offset=".5" stop-color="#1A2F5C"/><stop offset="1" stop-color="#0A1631"/>
    </linearGradient>`;
}

/** Rasterises a gold piece (with soft glow) to a canvas for WebGL sprites. */
export function pieceCanvas(type, size = 256) {
  const c = document.createElement('canvas');
  c.width = size; c.height = size;
  const ctx = c.getContext('2d');
  const s = size / 150;
  ctx.translate(size / 2 - 50 * s, size * 0.06);
  ctx.scale(s, s);
  const path = new Path2D(PIECE_PATHS[type]);
  // glow
  ctx.save();
  ctx.shadowColor = 'rgba(242, 216, 146, 0.85)';
  ctx.shadowBlur = 18 * s;
  ctx.fillStyle = '#E0BC69';
  ctx.fill(path);
  ctx.restore();
  const g = ctx.createLinearGradient(20, 0, 80, 20);
  g.addColorStop(0, '#FFF1C6'); g.addColorStop(0.4, '#E6C475'); g.addColorStop(0.75, '#B98D3C'); g.addColorStop(1, '#8A6424');
  ctx.fillStyle = g;
  ctx.fill(path);
  ctx.lineWidth = 1.6; ctx.strokeStyle = '#7a5a22'; ctx.stroke(path);
  if (type === 'knight') { ctx.fillStyle = '#0B1E3D'; ctx.beginPath(); ctx.arc(44, 35, 2.6, 0, Math.PI * 2); ctx.fill(); }
  if (type === 'queen') {
    ctx.fillStyle = g;
    [[28, 29], [42, 21], [58, 21], [72, 29]].forEach(([x, y]) => { ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); });
  }
  return c;
}
