// Deterministic keyframe tracks for cameras. A track is a pure function of time,
// so seeking / replaying / reduced-motion stills always produce the same frame.

/**
 * @param {Array<object>} keys  [{ t, ease?, ...numericValues }] sorted by t.
 *   `ease` on a key describes the segment arriving at that key.
 * @param {object} opts
 * @param {Function} opts.parseEase   gsap.parseEase
 * @param {string[]} [opts.logKeys]   keys interpolated in log space (zoom, distance)
 * @param {boolean} [opts.zoomPath]   x/y/z describe a 2D camera; keep the zoom
 *                                    anchor moving smoothly on screen (no drift)
 */
export class Track {
  constructor(keys, { parseEase, logKeys = [], zoomPath = false } = {}) {
    this.keys = keys;
    this.logKeys = new Set(logKeys);
    this.zoomPath = zoomPath;
    this.eases = keys.map((k) => parseEase(k.ease || 'power2.inOut'));
    this.out = { ...keys[0] };
  }

  at(t) {
    const k = this.keys;
    const out = this.out;
    if (t <= k[0].t) return Object.assign(out, k[0]);
    if (t >= k[k.length - 1].t) return Object.assign(out, k[k.length - 1]);
    let i = 0;
    while (i < k.length - 2 && t > k[i + 1].t) i++;
    const a = k[i];
    const b = k[i + 1];
    const p = this.eases[i + 1]((t - a.t) / (b.t - a.t || 1));
    for (const key in a) {
      if (key === 't' || key === 'ease' || typeof a[key] !== 'number') continue;
      const bv = b[key] ?? a[key];
      out[key] = this.logKeys.has(key)
        ? Math.exp(Math.log(a[key]) + (Math.log(bv) - Math.log(a[key])) * p)
        : a[key] + (bv - a[key]) * p;
    }
    if (this.zoomPath && a.z !== b.z) {
      // Keep the zoom anchor gliding linearly in screen space (van Wijk-style lite).
      const zoomIn = b.z > a.z;
      const ax = zoomIn ? b.x : a.x;
      const ay = zoomIn ? b.y : a.y;
      const z = out.z;
      const d0x = (ax - a.x) * a.z, d0y = (ay - a.y) * a.z;
      const d1x = (ax - b.x) * b.z, d1y = (ay - b.y) * b.z;
      out.x = ax - (d0x + (d1x - d0x) * p) / z;
      out.y = ay - (d0y + (d1y - d0y) * p) / z;
    }
    return out;
  }
}
