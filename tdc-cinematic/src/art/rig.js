// Cut-out character rig: every limb is an SVG group rotated around its joint,
// faces are driven by a handful of numeric expression channels. GSAP tweens the
// plain `state` object; `apply()` writes the attributes once per frame.

import { setAttr, setOpacity, fmt } from './svg.js';

export class Rig {
  /**
   * @param {object} o
   * @param {SVGGElement} o.root   outer group (placed by the owning layer)
   * @param {object} o.parts       data-part map
   * @param {object} o.joints      name → [pivotX, pivotY]
   * @param {object} o.face        { eyes:[{lid,lash,iris,ry}], brows:[...], mouths:{name:node}, features, maxLook:[x,y] }
   * @param {object} o.state       initial state
   */
  constructor({ root, parts, joints, face, state }) {
    this.root = root;
    this.parts = parts;
    this.joints = joints;
    this.face = face;
    this.state = {
      x: 0, y: 0, rot: 0, scale: 1, flipX: 1, opacity: 1,
      lookX: 0, lookY: 0, lid: 0, browY: 0, browTilt: 0, turn: 0,
      ...Object.fromEntries(Object.keys(joints).map((k) => [k, 0])),
      ...state,
    };
    this.hooks = [];
  }

  /** Extra per-frame logic (cape flutter, sparkles…). */
  onApply(fn) { this.hooks.push(fn); return this; }

  /**
   * @param {(x:number,y:number)=>{x:number,y:number,s:number}} place maps state x/y/scale to layer coords
   * @param {number} time seconds (for procedural secondary motion)
   */
  apply(place, time = 0) {
    const s = this.state;
    const p = place ? place(s.x, s.y, s.scale) : { x: s.x, y: s.y, s: s.scale };
    setAttr(this.root, 'transform',
      `translate(${fmt(p.x)} ${fmt(p.y)}) rotate(${fmt(s.rot)}) scale(${fmt(p.s * s.flipX)} ${fmt(p.s)})`);
    setOpacity(this.root, s.opacity);
    setAttr(this.root, 'visibility', s.opacity <= 0.001 ? 'hidden' : 'visible');
    if (s.opacity <= 0.001) return;

    for (const name in this.joints) {
      const node = this.parts[name];
      if (!node) continue;
      const [px, py] = this.joints[name];
      setAttr(node, 'transform', `rotate(${fmt(s[name])} ${px} ${py})`);
    }

    const f = this.face;
    if (f) {
      const [mx, my] = f.maxLook;
      for (const eye of f.eyes) {
        setAttr(eye.iris, 'transform', `translate(${fmt(s.lookX * mx)} ${fmt(s.lookY * my)})`);
        const lid = Math.max(0, Math.min(1, s.lid));
        setAttr(eye.lid, 'transform', `translate(0 ${fmt(-eye.ry)}) scale(1 ${fmt(lid + 0.0001)}) translate(0 ${fmt(eye.ry)})`);
        // The lash arc follows the lid down and flips into a "︶" when fully closed.
        setAttr(eye.lash, 'transform', `translate(0 ${fmt(lid * eye.ry * 0.35)}) scale(1 ${fmt(1 - 1.5 * lid)})`);
      }
      f.brows.forEach((b, i) => {
        const dir = i === 0 ? 1 : -1;
        setAttr(b.node, 'transform', `translate(0 ${fmt(s.browY)}) rotate(${fmt(s.browTilt * dir)} ${b.cx} ${b.cy})`);
      });
      for (const name in f.mouths) setOpacity(f.mouths[name], s[name] ?? 0);
      if (f.features) setAttr(f.features, 'transform', `translate(${fmt(s.turn * f.turnShift)} 0)`);
    }
    for (const h of this.hooks) h(s, time);
  }
}

/** Parses the numbers of a path string (all our morphable paths share structure). */
export function pathNumbers(d) {
  return d.match(/-?\d*\.?\d+/g).map(Number);
}

/** Rebuilds a path from a template (numbers replaced by #) and a number list. */
export function pathTemplate(d) {
  return d.replace(/-?\d*\.?\d+/g, '#');
}

export function fillTemplate(tpl, nums) {
  let i = 0;
  return tpl.replace(/#/g, () => fmt(nums[i++]));
}

/** A simple placed object (chess piece, tablet, sparkle…) with a tweenable state. */
export class Prop {
  constructor(root, state = {}) {
    this.root = root;
    this.state = { x: 0, y: 0, rot: 0, scale: 1, sx: 1, sy: 1, opacity: 1, ...state };
  }

  apply(place) {
    const s = this.state;
    const p = place ? place(s.x, s.y, s.scale) : { x: s.x, y: s.y, s: s.scale };
    setAttr(this.root, 'transform',
      `translate(${fmt(p.x)} ${fmt(p.y)}) rotate(${fmt(s.rot)}) scale(${fmt(p.s * s.sx)} ${fmt(p.s * s.sy)})`);
    setOpacity(this.root, s.opacity);
    setAttr(this.root, 'visibility', s.opacity <= 0.001 ? 'hidden' : 'visible');
  }
}
