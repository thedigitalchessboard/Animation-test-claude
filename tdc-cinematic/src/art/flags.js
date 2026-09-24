// Tiny, simplified flag badges (22 × 15) — a no-text signal of "kids from
// different countries". Each returns SVG markup at (x, y).
export const FLAGS = {
  jp: (x, y) => `<rect x="${x}" y="${y}" width="22" height="15" rx="2" fill="#fff"/><circle cx="${x + 11}" cy="${y + 7.5}" r="4.4" fill="#BC002D"/>`,
  ke: (x, y) => `<rect x="${x}" y="${y}" width="22" height="15" rx="2" fill="#006600"/><rect x="${x}" y="${y}" width="22" height="5" fill="#111"/><rect x="${x}" y="${y + 5}" width="22" height="5" fill="#fff"/><rect x="${x}" y="${y + 6}" width="22" height="3" fill="#BB0000"/>`,
  ae: (x, y) => `<rect x="${x}" y="${y}" width="22" height="15" rx="2" fill="#fff"/><rect x="${x}" y="${y}" width="22" height="5" fill="#00732F"/><rect x="${x}" y="${y + 10}" width="22" height="5" fill="#111"/><rect x="${x}" y="${y}" width="6" height="15" fill="#FF0000"/>`,
  de: (x, y) => `<rect x="${x}" y="${y}" width="22" height="5" fill="#111"/><rect x="${x}" y="${y + 5}" width="22" height="5" fill="#DD0000"/><rect x="${x}" y="${y + 10}" width="22" height="5" fill="#FFCE00"/>`,
  gb: (x, y) => `<rect x="${x}" y="${y}" width="22" height="15" rx="2" fill="#012169"/><path d="M${x} ${y} L${x + 22} ${y + 15} M${x + 22} ${y} L${x} ${y + 15}" stroke="#fff" stroke-width="3"/><path d="M${x + 11} ${y} V${y + 15} M${x} ${y + 7.5} H${x + 22}" stroke="#fff" stroke-width="4.5"/><path d="M${x + 11} ${y} V${y + 15} M${x} ${y + 7.5} H${x + 22}" stroke="#C8102E" stroke-width="2.4"/>`,
  br: (x, y) => `<rect x="${x}" y="${y}" width="22" height="15" rx="2" fill="#009C3B"/><path d="M${x + 11} ${y + 2} L${x + 20} ${y + 7.5} L${x + 11} ${y + 13} L${x + 2} ${y + 7.5} Z" fill="#FFDF00"/><circle cx="${x + 11}" cy="${y + 7.5}" r="3.3" fill="#002776"/>`,
};
