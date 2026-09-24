// Tracks the component's own size (not the window's), picks a quality/layout
// profile and notifies listeners. Works inside any layout the host site uses.

import { PROFILES } from '../config.js';

export class ResponsiveManager {
  constructor(container, { forceProfile } = {}) {
    this.container = container;
    this.forceProfile = forceProfile;
    this.listeners = new Set();
    this.W = 1; this.H = 1;
    this.measure();
    this.ro = new ResizeObserver(() => {
      const prev = this.profile.name;
      const { W, H } = this;
      this.measure();
      if (W !== this.W || H !== this.H) this.listeners.forEach((fn) => fn(this, prev !== this.profile.name));
    });
    this.ro.observe(container);
  }

  measure() {
    const r = this.container.getBoundingClientRect();
    this.W = Math.max(1, Math.round(r.width));
    this.H = Math.max(1, Math.round(r.height));
    this.aspect = this.W / this.H;
    this.profile = PROFILES[this.forceProfile] || PROFILES[ResponsiveManager.pick(this.W)];
    this.portrait = this.aspect < 1.05;
    // Unit for pixel-space character layers: a 900-unit tall stage on
    // landscape, narrower screens scale by width so characters stay in frame.
    this.unit = Math.min(this.H, this.W * 1.05) / 900;
  }

  static pick(width) {
    if (width < 640) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  }

  onChange(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); }

  dispose() { this.ro.disconnect(); this.listeners.clear(); }
}
