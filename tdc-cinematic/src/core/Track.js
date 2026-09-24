// Deterministic keyframe tracks for cameras. A track is a pure function of time,
// so seeking / replaying / reduced-motion stills always produce the same frame.
//
// Two interpolation modes:
//  • smooth (default): a monotone cubic spline (Fritsch–Carlson) through every
//    key on every channel. Velocity is continuous through the keys, so camera
//    moves glide like a real dolly/crane with no jerks, and it never overshoots.
//    Repeat a value on two consecutive keys to get a held (still) shot.
//  • eased: each segment uses its own GSAP ease (`ease` on the arriving key).

/**
 * @param {Array<object>} keys  [{ t, ease?, ...numericValues }] sorted by t.
 * @param {object} opts
 * @param {Function} opts.parseEase   gsap.parseEase
 * @param {string[]} [opts.logKeys]   keys interpolated in log space (zoom, distance)
 * @param {boolean} [opts.smooth]     spline mode (default true)
 */
export class Track {
  constructor(keys, { parseEase, logKeys = [], smooth = true } = {}) {
    this.keys = keys;
    this.logKeys = new Set(logKeys);
    this.smooth = smooth;
    this.eases = keys.map((k) => parseEase(k.ease || 'power2.inOut'));
    this.out = { ...keys[0] };
    this.channels = Object.keys(keys[0]).filter((k) => k !== 't' && k !== 'ease' && typeof keys[0][k] === 'number');
    if (smooth) this.buildSplines();
  }

  buildSplines() {
    const ts = this.keys.map((k) => k.t);
    this.splines = {};
    for (const ch of this.channels) {
      const ys = this.keys.map((k) => {
        const v = k[ch] ?? this.keys[0][ch];
        return this.logKeys.has(ch) ? Math.log(v) : v;
      });
      const n = ts.length;
      const d = [];
      for (let i = 0; i < n - 1; i++) d.push((ys[i + 1] - ys[i]) / (ts[i + 1] - ts[i] || 1e-6));
      const m = new Array(n);
      m[0] = 0;               // ease in from rest
      m[n - 1] = 0;           // ease out to rest
      for (let i = 1; i < n - 1; i++) {
        if (d[i - 1] * d[i] <= 0) m[i] = 0;
        else {
          // Weighted harmonic mean (Fritsch–Butland) keeps it monotone.
          const h0 = ts[i] - ts[i - 1], h1 = ts[i + 1] - ts[i];
          const w1 = 2 * h1 + h0, w2 = h1 + 2 * h0;
          m[i] = (w1 + w2) / (w1 / d[i - 1] + w2 / d[i]);
        }
      }
      this.splines[ch] = { ys, m };
    }
    this.ts = ts;
  }

  at(t) {
    const k = this.keys;
    const out = this.out;
    const last = k.length - 1;
    if (t <= k[0].t) t = k[0].t;
    if (t >= k[last].t) t = k[last].t;
    let i = 0;
    while (i < last - 1 && t > k[i + 1].t) i++;
    const a = k[i];
    const b = k[i + 1];
    const h = b.t - a.t || 1e-6;
    const u = Math.min(1, Math.max(0, (t - a.t) / h));

    if (this.smooth) {
      const u2 = u * u, u3 = u2 * u;
      const h00 = 2 * u3 - 3 * u2 + 1, h10 = u3 - 2 * u2 + u, h01 = -2 * u3 + 3 * u2, h11 = u3 - u2;
      for (const ch of this.channels) {
        const { ys, m } = this.splines[ch];
        const v = h00 * ys[i] + h10 * h * m[i] + h01 * ys[i + 1] + h11 * h * m[i + 1];
        out[ch] = this.logKeys.has(ch) ? Math.exp(v) : v;
      }
      return out;
    }

    const p = this.eases[i + 1](u);
    for (const ch of this.channels) {
      const av = a[ch], bv = b[ch] ?? av;
      out[ch] = this.logKeys.has(ch)
        ? Math.exp(Math.log(av) + (Math.log(bv) - Math.log(av)) * p)
        : av + (bv - av) * p;
    }
    return out;
  }
}
