// COACH KNIGHT (development name) — a normal human chess coach with superhero
// flair: navy coaching jacket, short cape, gold chess emblem on the chest.
// The chess symbol is ONLY an emblem on his clothing, never part of his body.
//
// Local coordinates: hips at (0,0), feet at y≈185, top of hair at y≈-250.
// Every instance (space, window, tablet video, finale) is built from this one
// function so he looks like exactly the same person throughout.

import { group, parts, uid, setAttr, setOpacity } from './svg.js';
import { Rig, pathNumbers, pathTemplate, fillTemplate } from './rig.js';
import { PIECE_PATHS } from './pieces.js';

const SKIN = '#B87752';
const SKIN_SHADE = '#955A3B';
const HAIR = '#1A1311';
const JACKET_DARK = '#0B1E3D';
const TROUSER = '#0F2550';
const IVORY = '#F7F5F0';
const GOLD = '#D8B15E';
const MOUTH = '#4A1A18';

const CAPE_REST = 'M-40 -132 C-58 -90 -66 -20 -70 34 C-40 44 -20 40 0 42 C20 40 40 44 70 34 C66 -20 58 -90 40 -132 Z';
const CAPE_STREAM = 'M-40 -132 C-66 -80 -84 0 -64 96 C-40 84 -24 116 0 104 C24 118 44 88 70 110 C78 10 62 -80 40 -132 Z';

function leg() {
  return `
    <path d="M-31 -6 L-3 -6 L-7 88 Q-16 92 -27 88 Z" fill="${TROUSER}"/>
    <path d="M-29 -2 L-26 86" stroke="#2C5BC4" stroke-width="2" opacity=".55"/>
    <g data-part="SHIN">
      <path d="M-27 84 L-7 84 L-9 166 L-25 166 Z" fill="${TROUSER}"/>
      <path d="M-25.5 90 L-24 163" stroke="#2C5BC4" stroke-width="2" opacity=".55"/>
      <path d="M-31 164 Q-33 185 -18 186 L0 186 Q7 185 5 175 Q1 163 -10 162 Z" fill="${IVORY}"/>
      <path d="M-32 181 L5.5 181" stroke="#B8C1D1" stroke-width="2.4"/>
      <path d="M-25 172 Q-15 177 -4 170" stroke="${GOLD}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    </g>`;
}

function arm(side) {
  const S = side;
  return `
    <path d="M-46 -134 Q-58 -118 -60 -94 L-58 -66 L-42 -64 L-38 -96 Q-36 -118 -30 -128 Z" fill="url(#JACKET)"/>
    <path d="M-46 -134 Q-58 -118 -58 -101 Q-47 -106 -37 -104 Q-36 -120 -30 -128 Z" fill="#24479A"/>
    <path d="M-58 -101 Q-47 -106 -37 -104" stroke="${GOLD}" stroke-width="1.6" fill="none"/>
    <g data-part="fore${S}">
      <path d="M-58 -70 L-42 -68 L-45 -14 L-59 -14 Z" fill="url(#JACKET)"/>
      <path d="M-60.5 -19 L-43.5 -19 L-44 -8 L-60 -8 Z" fill="${IVORY}"/>
      <g data-part="hand${S}">
        <g data-part="relax${S}">
          <path d="M-59 -9 Q-61 7 -56 13 Q-52 16 -48 13 Q-43 7 -45 -9 Z" fill="${SKIN}"/>
          <path d="M-46 -4 Q-40 -2 -40.5 4 Q-42.5 7 -46 4 Z" fill="${SKIN_SHADE}"/>
        </g>
        <g data-part="open${S}" opacity="0">
          <path d="M-60 -8 Q-61.5 5 -52.5 7.5 Q-44 6 -45 -8 Z" fill="${SKIN}"/>
          <g stroke="${SKIN}" stroke-width="3.6" stroke-linecap="round">
            <path d="M-58.6 4 L-61 13.5"/><path d="M-55.2 6 L-55.8 17"/><path d="M-51.6 6.2 L-51.2 17"/><path d="M-48.2 5 L-46.2 13.5"/><path d="M-45.3 -2 L-40 3.5"/>
          </g>
        </g>
        <g data-part="point${S}" opacity="0">
          <path d="M-59 -9 Q-60 4 -54 6 Q-46 6 -45 -9 Z" fill="${SKIN}"/>
          <path d="M-55.5 3 L-54.5 20 Q-52.5 23 -50.5 20 L-50.5 3 Z" fill="${SKIN}"/>
        </g>
      </g>
    </g>`;
}

export function createCoach({ gold = GOLD } = {}) {
  const id = uid('coach');
  const markup = `
  <defs>
    <linearGradient id="${id}-jacket" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#23478F"/><stop offset=".55" stop-color="#132D5E"/><stop offset="1" stop-color="${JACKET_DARK}"/>
    </linearGradient>
    <linearGradient id="${id}-cape" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1B3A78"/><stop offset="1" stop-color="#0A1A38"/>
    </linearGradient>
    <radialGradient id="${id}-skin" cx=".38" cy=".35" r=".75">
      <stop offset="0" stop-color="#CB8C66"/><stop offset=".7" stop-color="${SKIN}"/><stop offset="1" stop-color="${SKIN_SHADE}"/>
    </radialGradient>
    <linearGradient id="${id}-trail" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#F2D892" stop-opacity=".9"/><stop offset=".25" stop-color="#F7F5F0" stop-opacity=".45"/><stop offset="1" stop-color="#F7F5F0" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="${id}-eyeL"><ellipse cx="0" cy="0" rx="4.9" ry="5.7"/></clipPath>
  </defs>
  <g data-part="body">
    <g data-part="trail" opacity="0">
      <path d="M-24 150 Q-14 170 -17 820 L-13 820 Q-8 170 -12 150 Z" fill="url(#${id}-trail)"/>
      <path d="M2 120 Q9 170 8 1000 L13 1000 Q16 170 16 120 Z" fill="url(#${id}-trail)" opacity=".75"/>
      <path d="M28 150 Q36 170 35 700 L38 700 Q41 170 38 150 Z" fill="url(#${id}-trail)" opacity=".55"/>
    </g>
    <g data-part="cape">
      <path data-part="capePath" d="${CAPE_REST}" fill="url(#${id}-cape)" stroke="${gold}" stroke-width="2.2" stroke-linejoin="round"/>
    </g>
    <g data-part="legL">${leg().replace('SHIN', 'shinL')}</g>
    <g transform="scale(-1 1)"><g data-part="legR">${leg().replace('SHIN', 'shinR')}</g></g>
    <path d="M-32 -14 H32 V4 Q0 10 -32 4 Z" fill="#081733"/>
    <rect x="-5.5" y="-11" width="11" height="9" rx="1.5" fill="none" stroke="${gold}" stroke-width="2"/>
    <path d="M-31 -4 Q-35 -62 -44 -118 Q-42 -134 -22 -140 L22 -140 Q42 -134 44 -118 Q35 -62 31 -4 Z" fill="url(#${id}-jacket)"/>
    <path d="M-44 -118 Q-38 -70 -31 -4 L-25 -4 Q-31 -66 -37 -117 Z" fill="#2C5BC4" opacity=".55"/>
    <path d="M44 -118 Q38 -70 31 -4 L25 -4 Q31 -66 37 -117 Z" fill="#2C5BC4" opacity=".35"/>
    <path d="M-41 -113 L0 -90 L41 -113" stroke="${IVORY}" stroke-width="3.2" fill="none" stroke-linejoin="round"/>
    <path d="M0 -72 L0 -8" stroke="${IVORY}" stroke-width="1.4" opacity=".35"/>
    <g data-part="emblem" transform="translate(0 -84)">
      <circle r="13.5" fill="${JACKET_DARK}" stroke="${gold}" stroke-width="2.2"/>
      <path d="${PIECE_PATHS.knight}" transform="scale(.19) translate(-50 -66)" fill="${gold}"/>
    </g>
    <path d="M-9 -157 L9 -157 L10 -138 Q0 -132 -10 -138 Z" fill="${SKIN_SHADE}"/>
    <path d="M-9.5 -154 Q0 -146 9.5 -154 L9.5 -147 Q0 -141 -9.5 -147 Z" fill="#6E3F29" opacity=".55"/>
    <path d="M-20 -141 Q0 -127 20 -141 L16 -151 Q0 -139 -16 -151 Z" fill="${IVORY}"/>
    <g data-part="armL">${arm('L')}</g>
    <g transform="scale(-1 1)"><g data-part="armR">${arm('R')}</g></g>
    <g data-part="head">
      <ellipse cx="-24" cy="-186" rx="5" ry="8" fill="${SKIN}"/><ellipse cx="24" cy="-186" rx="5" ry="8" fill="${SKIN}"/>
      <path d="M-24 -196 Q-25 -170 -16 -158 Q-8 -148 0 -148 Q8 -148 16 -158 Q25 -170 24 -196 Q23 -222 0 -224 Q-23 -222 -24 -196 Z" fill="url(#${id}-skin)"/>
      <ellipse cx="0" cy="-208" rx="22" ry="6.5" fill="${SKIN_SHADE}" opacity=".4"/>
      <path d="M13 -196 Q22 -178 12 -158 Q20 -170 21 -190 Z" fill="${SKIN_SHADE}" opacity=".35"/>
      <ellipse cx="-13" cy="-178" rx="4.5" ry="2.6" fill="#FFE9D6" opacity=".22"/>
      <path d="M-25 -190 Q-28 -222 -6 -230 Q18 -236 27 -212 Q29 -200 25 -188 Q23 -204 16 -210 Q2 -214 -10 -210 Q-20 -204 -25 -190 Z" fill="${HAIR}"/>
      <path d="M-24.5 -196 L-22.5 -181 L-20.5 -196 Z M24.5 -196 L22.5 -181 L20.5 -196 Z" fill="${HAIR}"/>
      <g data-part="features">
        ${[-9, 9].map((x, i) => `
        <g transform="translate(${x} -187)">
          <g clip-path="url(#${id}-eyeL)">
            <ellipse rx="4.9" ry="5.7" fill="#FFFDF8"/>
            <g data-part="iris${i}">
              <circle r="3.6" fill="#3A2415"/><circle r="1.8" fill="#0A0706"/>
              <circle cx="1.1" cy="-1.4" r="1.15" fill="#fff"/>
              <circle data-part="glint${i}" cx="-1.2" cy="1.3" r=".7" fill="${gold}" opacity="0"/>
            </g>
            <rect data-part="lid${i}" x="-6" y="-5.7" width="12" height="11.4" fill="${SKIN}"/>
          </g>
          <path data-part="lash${i}" d="M-5.4 0 Q0 -11.6 5.4 0" stroke="#170F0C" stroke-width="1.7" fill="none" stroke-linecap="round"/>
        </g>`).join('')}
        <path data-part="browL" d="M-14.5 -196 Q-9 -200.5 -3.5 -197.5" stroke="${HAIR}" stroke-width="3.1" fill="none" stroke-linecap="round"/>
        <path data-part="browR" d="M3.5 -197.5 Q9 -200.5 14.5 -196" stroke="${HAIR}" stroke-width="3.1" fill="none" stroke-linecap="round"/>
        <path d="M-1 -188 Q-3.6 -177 -0.6 -175.6 Q2.4 -175 4 -176.6" stroke="#80472D" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        <circle cx="-14.5" cy="-172" r="4" fill="#D9775A" opacity=".22"/><circle cx="14.5" cy="-172" r="4" fill="#D9775A" opacity=".22"/>
        <g data-part="mSmile">
          <path d="M-10.5 -168.5 Q0 -154 10.5 -168.5 Q0 -165.5 -10.5 -168.5 Z" fill="${MOUTH}"/>
          <path d="M-9 -168 Q0 -165.6 9 -168 Q8.4 -165.6 7.2 -164.8 Q0 -163.2 -7.2 -164.8 Q-8.4 -165.6 -9 -168 Z" fill="#fff"/>
          <path d="M-4.2 -159.4 Q0 -162.2 4.2 -159.4 Q0 -157.6 -4.2 -159.4 Z" fill="#C9605A"/>
        </g>
        <ellipse data-part="mO" cx="0" cy="-164" rx="3.7" ry="4.8" fill="${MOUTH}" opacity="0"/>
        <g data-part="mEek" opacity="0">
          <path d="M-10.5 -167.5 Q0 -169.5 10.5 -167.5 Q9.5 -160 0 -160.5 Q-9.5 -160 -10.5 -167.5 Z" fill="#fff" stroke="${MOUTH}" stroke-width="1.4"/>
          <path d="M-9.4 -164 Q0 -165.2 9.4 -164" stroke="#C9C2B8" stroke-width="1"/>
        </g>
        <path data-part="mProud" d="M-8.5 -168.5 Q0 -161.5 8.5 -168.5" stroke="${MOUTH}" stroke-width="2.3" fill="none" stroke-linecap="round" opacity="0"/>
      </g>
      <path d="M-10 -226 Q2 -251 29 -236 Q22 -232 18 -222 Q8 -231 -10 -226 Z" fill="${HAIR}"/>
      <path d="M-1 -235 Q9 -243 21 -237" stroke="#4A3A33" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M-3 -212 q-7 6 -2 12 q4 3 5 -2" stroke="${HAIR}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    </g>
  </g>`.replace(/url\(#JACKET\)/g, `url(#${id}-jacket)`);

  const root = group(markup, { class: 'tdc-coach' });
  const p = parts(root);

  const rig = new Rig({
    root,
    parts: p,
    joints: {
      armL: [-40, -126], foreL: [-50, -66], handL: [-52, -9],
      armR: [-40, -126], foreR: [-50, -66], handR: [-52, -9],
      legL: [-17, 0], shinL: [-17, 86],
      legR: [-17, 0], shinR: [-17, 86],
      head: [0, -150],
      body: [0, 0],
    },
    face: {
      eyes: [0, 1].map((i) => ({ lid: p[`lid${i}`], lash: p[`lash${i}`], iris: p[`iris${i}`], ry: 5.7 })),
      brows: [{ node: p.browL, cx: -9, cy: -198 }, { node: p.browR, cx: 9, cy: -198 }],
      mouths: { mSmile: p.mSmile, mO: p.mO, mEek: p.mEek, mProud: p.mProud },
      features: p.features,
      turnShift: 5,
      maxLook: [1.6, 1.4],
    },
    state: {
      armL: 12, armR: 12, foreL: 0, foreR: 0, legL: 3, legR: 3,
      mSmile: 1, mO: 0, mEek: 0, mProud: 0,
      handOpenL: 0, handOpenR: 0, handPointL: 0, handPointR: 0,
      capeStream: 0, capeFlutter: 1, bob: 0, glint: 0, trail: 0,
    },
  });

  const capeTpl = pathTemplate(CAPE_REST);
  const capeA = pathNumbers(CAPE_REST);
  const capeB = pathNumbers(CAPE_STREAM);
  const capeNums = capeA.slice();
  rig.onApply((s, t) => {
    // Cape: blend rest ↔ streaming and add a travelling ripple on the hem.
    const k = s.capeStream;
    for (let i = 0; i < capeA.length; i++) {
      const wobble = i > 2 && i < capeA.length - 4 ? Math.sin(t * 13 + i * 0.9) * (1.5 + 4 * k) * s.capeFlutter : 0;
      capeNums[i] = capeA[i] + (capeB[i] - capeA[i]) * k + wobble;
    }
    setAttr(p.capePath, 'd', fillTemplate(capeTpl, capeNums));
    for (const S of ['L', 'R']) {
      const open = s[`handOpen${S}`];
      const point = s[`handPoint${S}`];
      setOpacity(p[`open${S}`], open);
      setOpacity(p[`point${S}`], point);
      setOpacity(p[`relax${S}`], 1 - Math.max(open, point));
    }
    setOpacity(p.glint0, s.glint); setOpacity(p.glint1, s.glint);
    setOpacity(p.trail, s.trail);
  });
  return rig;
}

/** Named poses (joint angles only) used by the choreography. */
export const COACH_POSES = {
  stand: { armL: 12, armR: 12, foreL: 0, foreR: 0, legL: 3, legR: 3, shinL: 0, shinR: 0, head: 0, body: 0 },
  // Superhero flight: body is rotated by the caller; here the leading arm
  // reaches past the head, the other tucks back, knees slightly bent.
  fly: { armL: 170, foreL: 5, armR: 25, foreR: -20, legL: 4, shinL: 8, legR: -2, shinR: 18, head: -62, body: 0 },
  // Screeching halt: knees up, arms back for balance (momentum, not panic).
  brake: { armL: 38, foreL: 38, armR: 42, foreR: 30, legL: 24, shinL: -50, legR: 16, shinR: -40, head: 0, body: 0 },
  relieved: { armL: 14, foreL: -6, armR: 14, foreR: -6, legL: 4, shinL: -4, legR: 3, shinR: -3, head: 4, body: 0 },
  // Sheepish apology: one open palm raised, other hand scratching the back of his head.
  sorry: { armL: 55, foreL: 95, armR: 140, foreR: 115, legL: 6, shinL: -10, legR: 2, shinR: -6, head: -6, body: 0 },
  dive: { armL: 176, foreL: 0, armR: 176, foreR: 0, legL: 2, shinL: 6, legR: 2, shinR: 6, head: 0, body: 0 },
  // Hands on hips, chest out: proud coach.
  proud: { armL: 34, foreL: -78, armR: 34, foreR: -78, legL: 5, shinL: 0, legR: 5, shinR: 0, head: 4, body: 0 },
  poke: { armL: 34, foreL: -78, armR: 88, foreR: 18, legL: 5, shinL: 0, legR: 5, shinR: 0, head: 8, body: 0 },
  wave: { armL: 14, foreL: -8, armR: 150, foreR: 30, legL: 3, shinL: 0, legR: 3, shinR: 0, head: -4, body: 0 },
  run: { armL: 120, foreL: 10, armR: 40, foreR: -70, legL: 40, shinL: -70, legR: -20, shinR: 30, head: -50, body: 0 },
};
