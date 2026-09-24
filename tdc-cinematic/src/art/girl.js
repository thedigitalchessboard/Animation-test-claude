// The student: a girl of about ten with two curly hair puffs and gold hair
// ties, in navy-blue star pyjamas. Emotional range: sleepy → curious →
// excited → engaged → happy, driven purely by face channels.
//
// Local coordinates: seated, hips at (0,0); top of hair puffs at y≈-280.

import { group, parts, uid, setAttr, setOpacity, fmt } from './svg.js';
import { Rig } from './rig.js';
import { PIECE_PATHS } from './pieces.js';

const SKIN = '#E0A67E';
const SKIN_SHADE = '#C4865F';
const HAIR = '#2B1911';
const PJ = '#3C62B8';
const IVORY = '#F7F5F0';
const GOLD = '#D8B15E';
const MOUTH = '#5A2020';

function arm(S) {
  return `
    <path d="M-44 -136 Q-56 -118 -56 -96 L-54 -72 L-38 -72 L-36 -100 Q-34 -122 -28 -134 Z" fill="url(#PJ)"/>
    <g data-part="fore${S}">
      <path d="M-54 -77 L-38 -77 L-41 -26 L-53 -26 Z" fill="url(#PJ)"/>
      <path d="M-54.5 -31 L-39.5 -31 L-40 -22 L-54 -22 Z" fill="${IVORY}"/>
      <g data-part="hand${S}">
        <g data-part="relax${S}">
          <path d="M-54 -23 Q-56 -8 -50 -4 Q-44 -2 -41 -8 Q-39 -16 -40 -23 Z" fill="${SKIN}"/>
          <path d="M-41 -18 Q-35 -16 -36 -11 Q-38 -9 -41 -12 Z" fill="${SKIN_SHADE}"/>
        </g>
        <g data-part="point${S}" opacity="0">
          <path d="M-54 -23 Q-55 -11 -49 -9 Q-42 -9 -40 -23 Z" fill="${SKIN}"/>
          <path d="M-50 -11 L-49.5 3 Q-47.5 6 -45.5 3 L-45.5 -11 Z" fill="${SKIN}"/>
        </g>
      </g>
    </g>`;
}

const STAR = (x, y, s = 1) =>
  `<path d="M${x} ${y - 4 * s} L${x + 1.2 * s} ${y - 1.2 * s} L${x + 4 * s} ${y} L${x + 1.2 * s} ${y + 1.2 * s} L${x} ${y + 4 * s} L${x - 1.2 * s} ${y + 1.2 * s} L${x - 4 * s} ${y} L${x - 1.2 * s} ${y - 1.2 * s} Z"/>`;

const PUFF = 'M-19 4 a9 9 0 0 1 -2 -14 a10 10 0 0 1 12 -10 a10 10 0 0 1 16 2 a10 10 0 0 1 8 14 a10 10 0 0 1 -6 13 a10 10 0 0 1 -14 3 a10 10 0 0 1 -14 -8 Z';

export function createGirl() {
  const id = uid('girl');
  const markup = `
  <defs>
    <linearGradient id="${id}-pj" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#5379CC"/><stop offset=".6" stop-color="${PJ}"/><stop offset="1" stop-color="#27468F"/>
    </linearGradient>
    <radialGradient id="${id}-skin" cx=".4" cy=".35" r=".78">
      <stop offset="0" stop-color="#EDB891"/><stop offset=".72" stop-color="${SKIN}"/><stop offset="1" stop-color="${SKIN_SHADE}"/>
    </radialGradient>
    <radialGradient id="${id}-iris" cx=".45" cy=".35" r=".7">
      <stop offset="0" stop-color="#8A5530"/><stop offset="1" stop-color="#3A2112"/>
    </radialGradient>
    <radialGradient id="${id}-screen" cx=".5" cy="1.05" r=".95">
      <stop offset="0" stop-color="#FFF6E0" stop-opacity=".7"/><stop offset=".5" stop-color="#DCE9FF" stop-opacity=".28"/><stop offset="1" stop-color="#9DBCF5" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="${id}-spill" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#F4F9FF" stop-opacity=".95"/><stop offset="1" stop-color="#CFE2FF" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="${id}-beam" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#E6F0FF" stop-opacity=".5"/><stop offset="1" stop-color="#E6F0FF" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="${id}-eye"><ellipse cx="0" cy="0" rx="8.6" ry="10"/></clipPath>
    <clipPath id="${id}-face"><path d="M-41 -208 Q-42 -176 -24 -162 Q-12 -154 0 -154 Q12 -154 24 -162 Q42 -176 41 -208 Q40 -246 0 -248 Q-40 -246 -41 -208 Z"/></clipPath>
  </defs>
  <g data-part="body">
    <path d="M-38 0 Q-44 -64 -41 -116 Q-38 -136 -16 -142 L16 -142 Q38 -136 41 -116 Q44 -64 38 0 Z" fill="url(#${id}-pj)"/>
    <g fill="${IVORY}" opacity=".8">${STAR(-22, -100)}${STAR(18, -72)}${STAR(-12, -40, 0.8)}${STAR(24, -26, 0.9)}${STAR(-28, -14, 0.7)}${STAR(8, -118, 0.7)}</g>
    <circle cx="0" cy="-104" r="2.6" fill="${IVORY}"/><circle cx="0" cy="-80" r="2.6" fill="${IVORY}"/><circle cx="0" cy="-56" r="2.6" fill="${IVORY}"/>
    <path d="M-9 -157 L9 -157 L10 -138 Q0 -133 -10 -138 Z" fill="${SKIN_SHADE}"/>
    <path d="M-17 -142 Q-24 -124 -5 -123 Q1 -130 0 -139 Z M17 -142 Q24 -124 5 -123 Q-1 -130 0 -139 Z" fill="${IVORY}"/>
    <g data-part="held" opacity="0">
      <rect x="-60" y="-126" width="120" height="80" rx="9" fill="#13244A" stroke="#2C4A86" stroke-width="2.5"/>
      <circle cx="0" cy="-118" r="2.2" fill="#0A1430"/>
      <g transform="translate(0 -86)">
        <circle r="12" fill="none" stroke="#D8B15E" stroke-width="1.8" opacity=".85"/>
        <path d="${PIECE_PATHS.knight}" transform="scale(.15) translate(-50 -66)" fill="#D8B15E"/>
      </g>
    </g>
    <g data-part="armL">${arm('L')}</g>
    <g transform="scale(-1 1)"><g data-part="armR">${arm('R')}</g></g>
    <g data-part="head">
      <path d="M-50 -152 Q-62 -170 -56 -196 Q-64 -226 -44 -246 Q-36 -268 -8 -266 Q18 -274 36 -256 Q60 -246 58 -218 Q66 -194 56 -172 Q60 -156 48 -148 Q40 -140 30 -150 L-30 -150 Q-40 -140 -50 -152 Z" fill="${HAIR}"/>
      <g transform="translate(-44 -262) rotate(-18)"><path d="${PUFF}" fill="${HAIR}"/></g>
      <g transform="translate(44 -262) rotate(18) scale(-1 1)"><path d="${PUFF}" fill="${HAIR}"/></g>
      <ellipse cx="-33" cy="-246" rx="7" ry="4.5" transform="rotate(-38 -33 -246)" fill="${GOLD}"/>
      <ellipse cx="33" cy="-246" rx="7" ry="4.5" transform="rotate(38 33 -246)" fill="${GOLD}"/>
      <ellipse cx="-41" cy="-200" rx="6" ry="9" fill="${SKIN_SHADE}"/><ellipse cx="41" cy="-200" rx="6" ry="9" fill="${SKIN_SHADE}"/>
      <path d="M-41 -208 Q-42 -176 -24 -162 Q-12 -154 0 -154 Q12 -154 24 -162 Q42 -176 41 -208 Q40 -246 0 -248 Q-40 -246 -41 -208 Z" fill="url(#${id}-skin)"/>
      <g data-part="features">
        ${[-16, 16].map((x, i) => `
        <g transform="translate(${x} -200)">
          <g clip-path="url(#${id}-eye)">
            <ellipse rx="8.6" ry="10" fill="#FFFDF8"/>
            <g data-part="iris${i}">
              <circle r="6.8" fill="url(#${id}-iris)"/><circle data-part="pupil${i}" r="3.4" fill="#120906"/>
              <circle cx="2.3" cy="-3" r="2.5" fill="#fff"/><circle cx="-2.6" cy="2.6" r="1.1" fill="#fff"/>
              <rect data-part="reflect${i}" x="-4.6" y="1" width="3.6" height="2.4" rx=".6" fill="#E4F1FF" opacity="0"/>
            </g>
            <rect data-part="lid${i}" x="-10" y="-10" width="20" height="20" fill="${SKIN}"/>
          </g>
          <path data-part="lash${i}" d="M-9.4 0 Q0 -20 9.4 0 ${i ? 'M8.6 -2.4 L11.6 -5' : 'M-8.6 -2.4 L-11.6 -5'}" stroke="#1C120D" stroke-width="2.2" fill="none" stroke-linecap="round"/>
          <path data-part="sparkle${i}" transform="scale(0)" d="M0 -5 L1.1 -1.1 L5 0 L1.1 1.1 L0 5 L-1.1 1.1 L-5 0 L-1.1 -1.1 Z" fill="#FFF6D6"/>
        </g>`).join('')}
        <path data-part="browL" d="M-24 -217 Q-17 -222.5 -9 -219" stroke="${HAIR}" stroke-width="2.7" fill="none" stroke-linecap="round"/>
        <path data-part="browR" d="M9 -219 Q17 -222.5 24 -217" stroke="${HAIR}" stroke-width="2.7" fill="none" stroke-linecap="round"/>
        <path d="M-1 -192 Q-3.6 -184 0.6 -183" stroke="${SKIN_SHADE}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
        <circle cx="-26" cy="-183" r="7" fill="#EF8A86" opacity=".35"/><circle cx="26" cy="-183" r="7" fill="#EF8A86" opacity=".35"/>
        <path data-part="mSleepy" d="M-5 -172 Q0 -170.5 5 -172" stroke="${MOUTH}" stroke-width="1.9" fill="none" stroke-linecap="round"/>
        <g data-part="mYawn" opacity="0"><ellipse cx="0" cy="-171" rx="5.2" ry="7.2" fill="${MOUTH}"/><ellipse cx="0" cy="-167" rx="3.2" ry="2" fill="#D0676A"/></g>
        <ellipse data-part="mO" cx="0" cy="-172" rx="3.2" ry="3.8" fill="${MOUTH}" opacity="0"/>
        <path data-part="mSoft" d="M-8 -175 Q0 -167.5 8 -175" stroke="${MOUTH}" stroke-width="2.2" fill="none" stroke-linecap="round" opacity="0"/>
        <g data-part="mSmile" opacity="0">
          <path d="M-13 -176 Q0 -157 13 -176 Q0 -172 -13 -176 Z" fill="${MOUTH}"/>
          <path d="M-11.5 -175.4 Q0 -172.2 11.5 -175.4 Q10 -172.8 8.5 -172 Q0 -170.5 -8.5 -172 Q-10 -172.8 -11.5 -175.4 Z" fill="#fff"/>
          <path d="M-5 -164.5 Q0 -168 5 -164.5 Q0 -162.8 -5 -164.5 Z" fill="#D0676A"/>
        </g>
      </g>
      <path d="M-42 -206 Q-46 -244 -12 -252 Q24 -258 42 -232 Q46 -220 42 -206 Q38 -222 28 -228 Q22 -218 12 -226 Q4 -216 -6 -226 Q-14 -216 -24 -226 Q-32 -218 -42 -206 Z" fill="${HAIR}"/>
      <path d="M-20 -244 Q-4 -250 12 -246" stroke="#4E3428" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path data-part="faceLight" clip-path="url(#${id}-face)" d="M-60 -270 H60 V-140 H-60 Z" fill="url(#${id}-screen)" opacity="0" style="mix-blend-mode:screen"/>
    </g>
    <g data-part="spill" opacity="0" style="mix-blend-mode:screen">
      <ellipse cx="0" cy="-138" rx="96" ry="30" fill="url(#${id}-spill)"/>
      <path d="M-56 -128 L-70 -210 L70 -210 L56 -128 Z" fill="url(#${id}-beam)" opacity=".55"/>
    </g>
  </g>`.replace(/url\(#PJ\)/g, `url(#${id}-pj)`);

  const root = group(markup, { class: 'tdc-girl' });
  const p = parts(root);

  const rig = new Rig({
    root,
    parts: p,
    joints: {
      armL: [-38, -128], foreL: [-46, -74], handL: [-47, -23],
      armR: [-38, -128], foreR: [-46, -74], handR: [-47, -23],
      head: [0, -150],
      body: [0, 0],
    },
    face: {
      eyes: [0, 1].map((i) => ({ lid: p[`lid${i}`], lash: p[`lash${i}`], iris: p[`iris${i}`], ry: 10 })),
      brows: [{ node: p.browL, cx: -16, cy: -219 }, { node: p.browR, cx: 16, cy: -219 }],
      mouths: { mSleepy: p.mSleepy, mYawn: p.mYawn, mO: p.mO, mSoft: p.mSoft, mSmile: p.mSmile },
      features: p.features,
      turnShift: 7,
      maxLook: [2.4, 2],
    },
    state: {
      armL: 8, armR: 8, lid: 1, mSleepy: 1, mYawn: 0, mO: 0, mSoft: 0, mSmile: 0,
      handPointL: 0, handPointR: 0,
      sparkle: 0, faceLight: 0, reflect: 0, pupil: 1, breathe: 0,
      held: 0, heldX: 0, heldY: 0, heldRot: 0, spill: 0,
    },
  });

  rig.onApply((s, t) => {
    for (const S of ['L', 'R']) {
      setOpacity(p[`point${S}`], s[`handPoint${S}`]);
      setOpacity(p[`relax${S}`], 1 - s[`handPoint${S}`]);
    }
    setOpacity(p.faceLight, s.faceLight);
    setOpacity(p.held, s.held);
    setAttr(p.held, 'transform', `translate(${fmt(s.heldX)} ${fmt(s.heldY)}) rotate(${fmt(s.heldRot)} 0 -86)`);
    setOpacity(p.spill, s.spill);
    const tw = s.sparkle * (0.85 + 0.15 * Math.sin(t * 22));
    // Tiny twinkles sit on the big catchlight (upper-right of each iris).
    const ox = s.lookX * 2.4, oy = s.lookY * 2;
    setAttr(p.sparkle0, 'transform', `translate(${fmt(2.3 + ox)} ${fmt(-3 + oy)}) rotate(${fmt(t * 90)}) scale(${fmt(tw)})`);
    setAttr(p.sparkle1, 'transform', `translate(${fmt(2.3 + ox)} ${fmt(-3 + oy)}) rotate(${fmt(-t * 90)}) scale(${fmt(tw)})`);
    setOpacity(p.reflect0, s.reflect); setOpacity(p.reflect1, s.reflect);
    setAttr(p.pupil0, 'r', fmt(3.4 * s.pupil)); setAttr(p.pupil1, 'r', fmt(3.4 * s.pupil));
    if (s.breathe) setAttr(p.body, 'transform', `rotate(${fmt(s.body)} 0 0) scale(1 ${fmt(1 + Math.sin(t * 3.2) * 0.012 * s.breathe)})`);
  });
  return rig;
}
