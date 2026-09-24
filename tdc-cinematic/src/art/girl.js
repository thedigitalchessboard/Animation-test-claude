// The student: a girl of about ten with two curly hair puffs and gold hair
// ties, in navy-blue star pyjamas. Emotional range: sleepy → curious →
// excited → engaged → happy, driven purely by face channels.
//
// The same rig, with options, draws the other students around the world
// (different skin tones, hairstyles incl. a hijab, and clothes) — see KIDS.
//
// Local coordinates: seated, hips at (0,0); top of hair puffs at y≈-280.

import { group, parts, uid, setAttr, setOpacity, fmt } from './svg.js';
import { Rig } from './rig.js';
import { PIECE_PATHS } from './pieces.js';

const IVORY = '#F7F5F0';
const GOLD = '#D8B15E';
const MOUTH = '#5A2020';

function arm(S, SKIN, SKIN_SHADE) {
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

const HAIRSTYLES = {
  // back layer, front layer (drawn over the forehead)
  puffs: (H, G) => ({
    back: `<path d="M-50 -152 Q-62 -170 -56 -196 Q-64 -226 -44 -246 Q-36 -268 -8 -266 Q18 -274 36 -256 Q60 -246 58 -218 Q66 -194 56 -172 Q60 -156 48 -148 Q40 -140 30 -150 L-30 -150 Q-40 -140 -50 -152 Z" fill="${H}"/>
      <g transform="translate(-44 -262) rotate(-18)"><path d="${PUFF}" fill="${H}"/></g>
      <g transform="translate(44 -262) rotate(18) scale(-1 1)"><path d="${PUFF}" fill="${H}"/></g>
      <ellipse cx="-33" cy="-246" rx="7" ry="4.5" transform="rotate(-38 -33 -246)" fill="${G}"/>
      <ellipse cx="33" cy="-246" rx="7" ry="4.5" transform="rotate(38 33 -246)" fill="${G}"/>`,
    front: `<path d="M-42 -206 Q-46 -244 -12 -252 Q24 -258 42 -232 Q46 -220 42 -206 Q38 -222 28 -228 Q22 -218 12 -226 Q4 -216 -6 -226 Q-14 -216 -24 -226 Q-32 -218 -42 -206 Z" fill="${H}"/>
      <path d="M-20 -244 Q-4 -250 12 -246" stroke="#4E3428" stroke-width="1.6" fill="none" stroke-linecap="round"/>`,
  }),
  bob: (H) => ({
    back: `<path d="M-52 -160 Q-60 -214 -44 -246 Q-24 -272 0 -270 Q24 -272 44 -246 Q60 -214 52 -160 Q40 -150 26 -156 L-26 -156 Q-40 -150 -52 -160 Z" fill="${H}"/>`,
    front: `<path d="M-43 -206 Q-46 -254 0 -258 Q46 -254 43 -206 Q40 -222 32 -226 L-32 -226 Q-40 -222 -43 -206 Z" fill="${H}"/>
      <path d="M-24 -250 Q0 -256 22 -250" stroke="#fff" stroke-opacity=".18" stroke-width="3" fill="none" stroke-linecap="round"/>`,
  }),
  ponytail: (H, G) => ({
    back: `<path d="M26 -250 Q70 -262 74 -214 Q76 -176 58 -150 Q62 -186 52 -214 Q46 -236 26 -236 Z" fill="${H}"/>
      <ellipse cx="34" cy="-248" rx="7" ry="5" fill="${G}"/>
      <path d="M-46 -196 Q-52 -250 0 -262 Q48 -258 46 -196 Z" fill="${H}"/>`,
    front: `<path d="M-43 -204 Q-44 -250 -4 -258 Q40 -258 44 -214 Q30 -236 4 -230 Q-24 -226 -43 -204 Z" fill="${H}"/>`,
  }),
  short: (H) => ({
    back: `<path d="M-45 -196 Q-50 -254 -6 -262 Q40 -264 46 -220 Q48 -206 45 -194 Z" fill="${H}"/>`,
    front: `<path d="M-43 -208 Q-46 -250 -8 -258 Q34 -262 45 -228 Q46 -216 43 -206 Q38 -228 22 -232 Q2 -240 -18 -232 Q-34 -226 -43 -208 Z" fill="${H}"/>
      <path d="M-18 -250 Q6 -258 28 -248" stroke="#fff" stroke-opacity=".15" stroke-width="3" fill="none" stroke-linecap="round"/>`,
  }),
  coily: (H) => ({
    back: `<path d="M-48 -200 a12 12 0 0 1 2 -22 a13 13 0 0 1 12 -22 a13 13 0 0 1 20 -12 a13 13 0 0 1 22 0 a13 13 0 0 1 20 12 a13 13 0 0 1 12 22 a12 12 0 0 1 2 22 Z" fill="${H}"/>`,
    front: `<path d="M-43 -206 Q-44 -236 -30 -240 a8 8 0 0 1 14 -6 a8 8 0 0 1 16 -2 a8 8 0 0 1 16 2 a8 8 0 0 1 14 6 Q44 -236 43 -206 Q36 -226 0 -228 Q-36 -226 -43 -206 Z" fill="${H}"/>`,
  }),
  hijab: (H, G, cloth) => ({
    back: `<path d="M-56 -150 Q-62 -206 -48 -244 Q-26 -276 0 -276 Q26 -276 48 -244 Q62 -206 56 -150 Q40 -128 0 -126 Q-40 -128 -56 -150 Z" fill="${cloth}"/>`,
    front: `<path d="M-44 -196 Q-44 -250 0 -258 Q44 -250 44 -196 Q44 -176 36 -162 Q46 -186 40 -214 Q30 -240 0 -242 Q-30 -240 -40 -214 Q-46 -186 -36 -162 Q-44 -176 -44 -196 Z" fill="${cloth}"/>
      <path d="M-38 -214 Q0 -236 38 -214" stroke="${G}" stroke-width="2.4" fill="none" opacity=".8"/>
      <path d="M-40 -164 Q-30 -148 0 -146 Q30 -148 40 -164 Q44 -138 30 -128 L-30 -128 Q-44 -138 -40 -164 Z" fill="${cloth}"/>`,
  }),
};

// Students around the world (used in the live class and on the globe).
export const KIDS = {
  aiko:   { skin: '#F2CFB0', skinShade: '#D9AE8C', hair: '#16110F', hairStyle: 'bob', top: '#C9474F', topDark: '#9E2F37', pattern: 'none', collar: false },
  mateo:  { skin: '#C98D62', skinShade: '#A56D45', hair: '#3A2418', hairStyle: 'short', top: '#E0B24E', topDark: '#B98A2E', pattern: 'none', collar: false },
  amani:  { skin: '#6E4129', skinShade: '#56301D', hair: '#120B08', hairStyle: 'coily', top: '#F7F5F0', topDark: '#C9CED9', pattern: 'knight', collar: false },
  emma:   { skin: '#F7D6BD', skinShade: '#E0B597', hair: '#D9A955', hairStyle: 'ponytail', top: '#3C62B8', topDark: '#27468F', pattern: 'none', collar: false },
  layla:  { skin: '#D7A07B', skinShade: '#B9805C', hair: '#1B120E', hairStyle: 'hijab', cloth: '#1D3F84', top: '#2C5BC4', topDark: '#1A3A78', pattern: 'none', collar: false },
  liam:   { skin: '#F4D3BB', skinShade: '#DDB399', hair: '#B5562B', hairStyle: 'short', top: '#2E8B6E', topDark: '#1F6450', pattern: 'none', collar: false },
};

const PUFF = 'M-19 4 a9 9 0 0 1 -2 -14 a10 10 0 0 1 12 -10 a10 10 0 0 1 16 2 a10 10 0 0 1 8 14 a10 10 0 0 1 -6 13 a10 10 0 0 1 -14 3 a10 10 0 0 1 -14 -8 Z';

export function createGirl(options = {}) {
  const o = {
    skin: '#E0A67E', skinShade: '#C4865F', hair: '#2B1911', hairStyle: 'puffs',
    top: '#3C62B8', topDark: '#27468F', topLight: null, pattern: 'stars', collar: true, cloth: '#1D3F84',
    ...options,
  };
  const SKIN = o.skin;
  const SKIN_SHADE = o.skinShade;
  const HAIR = o.hair;
  const hair = HAIRSTYLES[o.hairStyle](HAIR, GOLD, o.cloth);
  const id = uid('girl');
  const markup = `
  <defs>
    <linearGradient id="${id}-pj" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${o.topLight || o.top}" stop-opacity="1"/><stop offset=".6" stop-color="${o.top}"/><stop offset="1" stop-color="${o.topDark}"/>
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
    ${o.pattern === 'stars' ? `<g fill="${IVORY}" opacity=".8">${STAR(-22, -100)}${STAR(18, -72)}${STAR(-12, -40, 0.8)}${STAR(24, -26, 0.9)}${STAR(-28, -14, 0.7)}${STAR(8, -118, 0.7)}</g>
    <circle cx="0" cy="-104" r="2.6" fill="${IVORY}"/><circle cx="0" cy="-80" r="2.6" fill="${IVORY}"/><circle cx="0" cy="-56" r="2.6" fill="${IVORY}"/>` : ''}
    ${o.pattern === 'knight' ? `<path d="${PIECE_PATHS.knight}" transform="translate(-13 -104) scale(.26)" fill="#1D3F84"/>` : ''}
    <path d="M-9 -157 L9 -157 L10 -138 Q0 -133 -10 -138 Z" fill="${SKIN_SHADE}"/>
    <path d="M-9.5 -156 Q0 -148 9.5 -156 L9.5 -149 Q0 -143 -9.5 -149 Z" fill="#A86B48" opacity=".5"/>
    ${o.collar ? `<path d="M-17 -142 Q-24 -124 -5 -123 Q1 -130 0 -139 Z M17 -142 Q24 -124 5 -123 Q-1 -130 0 -139 Z" fill="${IVORY}"/>` : `<path d="M-15 -142 Q0 -128 15 -142" stroke="${o.topDark}" stroke-width="4" fill="none"/>`}
    <g data-part="held" opacity="0">
      <rect x="-60" y="-126" width="120" height="80" rx="9" fill="#13244A" stroke="#2C4A86" stroke-width="2.5"/>
      <circle cx="0" cy="-118" r="2.2" fill="#0A1430"/>
      <g transform="translate(0 -86)">
        <circle r="12" fill="none" stroke="#D8B15E" stroke-width="1.8" opacity=".85"/>
        <path d="${PIECE_PATHS.knight}" transform="scale(.15) translate(-50 -66)" fill="#D8B15E"/>
      </g>
    </g>
    <g data-part="armL">${arm('L', SKIN, SKIN_SHADE)}</g>
    <g transform="scale(-1 1)"><g data-part="armR">${arm('R', SKIN, SKIN_SHADE)}</g></g>
    <g data-part="head">
      ${hair.back}
      ${o.hairStyle === 'hijab' ? '' : `<ellipse cx="-41" cy="-200" rx="6" ry="9" fill="${SKIN_SHADE}"/><ellipse cx="41" cy="-200" rx="6" ry="9" fill="${SKIN_SHADE}"/>`}
      <path d="M-41 -208 Q-42 -176 -24 -162 Q-12 -154 0 -154 Q12 -154 24 -162 Q42 -176 41 -208 Q40 -246 0 -248 Q-40 -246 -41 -208 Z" fill="url(#${id}-skin)"/>
      <path d="M24 -206 Q40 -186 22 -162 Q36 -178 37 -200 Z" fill="${SKIN_SHADE}" opacity=".35"/>
      <ellipse cx="-22" cy="-192" rx="6" ry="3.4" fill="#FFF1E4" opacity=".25"/>
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
      ${hair.front}
      <path data-part="faceLight" clip-path="url(#${id}-face)" d="M-60 -270 H60 V-140 H-60 Z" fill="url(#${id}-screen)" opacity="0" style="mix-blend-mode:screen"/>
    </g>
    <g data-part="spill" opacity="0" style="mix-blend-mode:screen">
      <ellipse cx="0" cy="-138" rx="96" ry="30" fill="url(#${id}-spill)"/>
      <path d="M-56 -128 L-70 -210 L70 -210 L56 -128 Z" fill="url(#${id}-beam)" opacity=".55"/>
    </g>
  </g>`.replace(/url\(#PJ\)/g, `url(#${id}-pj)`);

  const root = group(markup, { class: 'tdc-girl' });
  // (hairstyles/clothes come from `options`; the face rig is identical for every kid)
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
    // Eye twinkles hide behind the lids when she blinks.
    const tw = s.sparkle * (0.88 + 0.12 * Math.sin(t * 5)) * Math.max(0, 1 - s.lid * 1.6);
    // Tiny twinkles sit on the big catchlight (upper-right of each iris).
    const ox = s.lookX * 2.4, oy = s.lookY * 2;
    setAttr(p.sparkle0, 'transform', `translate(${fmt(2.3 + ox)} ${fmt(-3 + oy)}) rotate(${fmt(t * 25)}) scale(${fmt(tw)})`);
    setAttr(p.sparkle1, 'transform', `translate(${fmt(2.3 + ox)} ${fmt(-3 + oy)}) rotate(${fmt(-t * 25)}) scale(${fmt(tw)})`);
    setOpacity(p.reflect0, s.reflect); setOpacity(p.reflect1, s.reflect);
    setAttr(p.pupil0, 'r', fmt(3.4 * s.pupil)); setAttr(p.pupil1, 'r', fmt(3.4 * s.pupil));
    if (s.breathe) setAttr(p.body, 'transform', `rotate(${fmt(s.body)} 0 0) scale(1 ${fmt(1 + Math.sin(t * 2.2) * 0.01 * s.breathe)})`);
  });
  return rig;
}
