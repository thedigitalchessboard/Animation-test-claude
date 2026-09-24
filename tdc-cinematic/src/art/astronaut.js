// Floating astronaut chess learner, calmly playing on a tablet that shows the
// official TDC logo (supplied asset, displayed as-is).
// Local coords: torso centre around (0,-50); helmet centre (0,-150).

import { group, parts, uid, setAttr, setOpacity, fmt } from './svg.js';
import { Rig } from './rig.js';
import { PIECE_PATHS } from './pieces.js';

const SKIN = '#8C5A3C';
const MOUTH = '#3E1512';

export function createAstronaut({ logoUrl }) {
  const id = uid('astro');
  const markup = `
  <defs>
    <linearGradient id="${id}-suit" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FFFFFF"/><stop offset=".6" stop-color="#E4E8F0"/><stop offset="1" stop-color="#A9B3C6"/>
    </linearGradient>
    <radialGradient id="${id}-visor" cx=".35" cy=".3" r=".9">
      <stop offset="0" stop-color="#2A4F9E"/><stop offset=".6" stop-color="#10275A"/><stop offset="1" stop-color="#060F26"/>
    </radialGradient>
    <radialGradient id="${id}-glow" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#EAF3FF" stop-opacity=".9"/><stop offset="1" stop-color="#EAF3FF" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="${id}-visorClip"><ellipse cx="0" cy="-148" rx="35" ry="31"/></clipPath>
    <clipPath id="${id}-eye"><ellipse rx="3.4" ry="4"/></clipPath>
    <clipPath id="${id}-screen"><rect x="-36" y="-66" width="72" height="44" rx="3"/></clipPath>
  </defs>
  <g data-part="body">
    <rect x="-50" y="-118" width="100" height="112" rx="22" fill="#B9C2D2"/>
    <path d="M-44 -10 Q-78 6 -66 34 Q-30 48 6 36 Q14 22 2 8 Z" fill="url(#${id}-suit)" stroke="#9AA6BB" stroke-width="1.5"/>
    <path d="M44 -10 Q78 6 66 34 Q30 48 -6 36 Q-14 22 -2 8 Z" fill="url(#${id}-suit)" stroke="#9AA6BB" stroke-width="1.5"/>
    <ellipse cx="-68" cy="28" rx="13" ry="10" fill="#9AA6BB"/><ellipse cx="68" cy="28" rx="13" ry="10" fill="#9AA6BB"/>
    <path d="M-40 10 Q-47 -50 -40 -96 Q-30 -113 0 -115 Q30 -113 40 -96 Q47 -50 40 10 Z" fill="url(#${id}-suit)" stroke="#9AA6BB" stroke-width="1.5"/>
    <g transform="translate(-29 -86)">
      <circle r="8" fill="#0B1E3D" stroke="#D8B15E" stroke-width="1.5"/>
      <path d="${PIECE_PATHS.knight}" transform="scale(.11) translate(-50 -66)" fill="#D8B15E"/>
    </g>
    <path d="M-46 -92 Q-64 -60 -44 -40 L-14 -40 L-16 -52 L-34 -54 Q-36 -72 -30 -86 Z" fill="url(#${id}-suit)" stroke="#9AA6BB" stroke-width="1.5"/>
    <path d="M46 -92 Q64 -60 44 -40 L14 -40 L16 -52 L34 -54 Q36 -72 30 -86 Z" fill="url(#${id}-suit)" stroke="#9AA6BB" stroke-width="1.5"/>
    <g data-part="tablet">
      <ellipse cx="0" cy="-44" rx="70" ry="44" fill="url(#${id}-glow)" opacity=".35"/>
      <rect x="-40" y="-70" width="80" height="52" rx="6" fill="#0B1E3D"/>
      <rect x="-36" y="-66" width="72" height="44" rx="3" fill="#FFFFFF"/>
      <g clip-path="url(#${id}-screen)">
        <image href="${logoUrl}" x="-33" y="-63" width="66" height="38" preserveAspectRatio="xMidYMid meet"/>
      </g>
      <circle cx="-15" cy="-20" r="9" fill="#F4F6FA" stroke="#9AA6BB" stroke-width="1.4"/>
      <circle data-part="tapGlow" cx="14" cy="-40" r="7" fill="#DDEBFF" opacity="0"/>
      <g data-part="gloveR"><circle cx="15" cy="-20" r="9" fill="#F4F6FA" stroke="#9AA6BB" stroke-width="1.4"/>
        <path d="M15 -27 L15 -33" stroke="#F4F6FA" stroke-width="5" stroke-linecap="round"/></g>
    </g>
    <g data-part="head">
      <rect x="-24" y="-112" width="48" height="12" rx="4" fill="#C7CEDA"/>
      <circle cx="0" cy="-150" r="47" fill="url(#${id}-suit)" stroke="#9AA6BB" stroke-width="2"/>
      <ellipse cx="0" cy="-148" rx="37" ry="33" fill="#C7CEDA"/>
      <ellipse cx="0" cy="-148" rx="35" ry="31" fill="url(#${id}-visor)"/>
      <g clip-path="url(#${id}-visorClip)">
        <path d="M-21 -150 Q-22 -126 0 -122 Q22 -126 21 -150 Q20 -172 0 -173 Q-20 -172 -21 -150 Z" fill="${SKIN}"/>
        <path d="M-22 -150 Q-24 -176 0 -178 Q24 -176 22 -150 Q16 -166 0 -166 Q-16 -166 -22 -150 Z" fill="#2A1C16"/>
        <g data-part="features">
          ${[-8, 8].map((x, i) => `
          <g transform="translate(${x} -150)">
            <g clip-path="url(#${id}-eye)">
              <ellipse rx="3.4" ry="4" fill="#FFFDF8"/>
              <g data-part="iris${i}"><circle r="2.4" fill="#2A170E"/><circle cx=".8" cy="-1" r=".8" fill="#fff"/></g>
              <rect data-part="lid${i}" x="-4" y="-4" width="8" height="8" fill="${SKIN}"/>
            </g>
            <path data-part="lash${i}" d="M-3.6 0 Q0 -8 3.6 0" stroke="#1A0E0A" stroke-width="1.3" fill="none"/>
          </g>`).join('')}
          <path data-part="browL" d="M-12 -157 Q-8 -160 -4 -158" stroke="#2A1C16" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <path data-part="browR" d="M4 -158 Q8 -160 12 -157" stroke="#2A1C16" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <path data-part="mSoft" d="M-5 -134 Q0 -130 5 -134" stroke="${MOUTH}" stroke-width="1.7" fill="none" stroke-linecap="round"/>
          <path data-part="mGrin" d="M-7 -135 Q0 -126 7 -135 Z" fill="${MOUTH}" opacity="0"/>
        </g>
        <ellipse cx="0" cy="-118" rx="40" ry="16" fill="#D8E8FF" opacity=".16"/>
      </g>
      <path d="M-26 -166 Q-12 -178 8 -176" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".45" fill="none"/>
      <path d="M18 -126 Q28 -134 31 -146" stroke="#D8B15E" stroke-width="2" stroke-linecap="round" opacity=".5" fill="none"/>
    </g>
  </g>`;
  const root = group(markup, { class: 'tdc-astronaut' });
  const p = parts(root);
  const rig = new Rig({
    root,
    parts: p,
    joints: { head: [0, -108], body: [0, -40], tablet: [0, -44] },
    face: {
      eyes: [0, 1].map((i) => ({ lid: p[`lid${i}`], lash: p[`lash${i}`], iris: p[`iris${i}`], ry: 4 })),
      brows: [{ node: p.browL, cx: -8, cy: -158 }, { node: p.browR, cx: 8, cy: -158 }],
      mouths: { mSoft: p.mSoft, mGrin: p.mGrin },
      features: p.features,
      turnShift: 3,
      maxLook: [1, 1.2],
    },
    state: { lookY: 0.8, lid: 0.25, mSoft: 1, mGrin: 0, tap: 0 },
  });
  // Tapping the tablet: the glove's index finger dips onto the screen.
  rig.onApply((s) => {
    setAttr(p.gloveR, 'transform', `translate(${fmt(-2 * s.tap)} ${fmt(-14 * s.tap)})`);
    setOpacity(p.tapGlow, s.tap * 0.8);
  });
  return rig;
}
