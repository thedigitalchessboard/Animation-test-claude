// Tiny SVG helpers shared by all illustrated layers.

export const SVG_NS = 'http://www.w3.org/2000/svg';

let counter = 0;
/** Unique id prefix so several mounts / rig instances never share gradient or clip ids. */
export function uid(prefix = 'tdc') {
  counter += 1;
  return `${prefix}-${counter.toString(36)}`;
}

export function el(tag, attrs = {}, parent = null) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const k in attrs) node.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(node);
  return node;
}

/** Creates an <svg> root that fills its positioned parent. */
export function createSvgRoot(className, viewBox) {
  const svg = el('svg', {
    class: className,
    'aria-hidden': 'true',
    focusable: 'false',
    preserveAspectRatio: 'xMidYMid slice',
  });
  if (viewBox) svg.setAttribute('viewBox', viewBox);
  return svg;
}

/** Parses SVG markup into a <g> (keeps the SVG namespace). */
export function group(markup, attrs = {}) {
  const g = el('g', attrs);
  g.innerHTML = markup;
  return g;
}

/** Collects every [data-part] under root into a map. */
export function parts(root) {
  const map = {};
  root.querySelectorAll('[data-part]').forEach((n) => { map[n.getAttribute('data-part')] = n; });
  return map;
}

export const fmt = (n) => (Math.round(n * 100) / 100).toString();

/** Sets an attribute only if it changed (avoids needless style recalcs). */
export function setAttr(node, name, value) {
  if (!node) return;
  const key = `__${name}`;
  if (node[key] === value) return;
  node[key] = value;
  node.setAttribute(name, value);
}

export function setOpacity(node, value) {
  setAttr(node, 'opacity', fmt(Math.max(0, Math.min(1, value))));
}
