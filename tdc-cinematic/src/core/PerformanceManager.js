// Visibility-driven playback and adaptive quality.
//  • IntersectionObserver: pause when the section scrolls out of view.
//  • Page Visibility API: pause in background tabs.
//  • Frame-time watchdog: if the device struggles, drop pixel ratio and
//    secondary particles instead of dropping frames.

export class PerformanceManager {
  constructor(container, { onVisibleChange, threshold = 0.35 } = {}) {
    this.container = container;
    this.onVisibleChange = onVisibleChange;
    this.inView = false;
    this.pageVisible = !document.hidden;
    this.samples = [];
    this.level = 0; // 0 = full quality, 1 = reduced, 2 = minimal
    this.degradeListeners = new Set();

    this.io = new IntersectionObserver((entries) => {
      for (const e of entries) this.inView = e.isIntersecting && e.intersectionRatio >= threshold;
      this.emit();
    }, { threshold: [0, threshold, 0.6, 1] });
    this.io.observe(container);

    this.onDocVis = () => { this.pageVisible = !document.hidden; this.emit(); };
    document.addEventListener('visibilitychange', this.onDocVis);
  }

  get visible() { return this.inView && this.pageVisible; }

  emit() {
    const v = this.visible;
    if (v !== this.lastVisible) {
      this.lastVisible = v;
      this.onVisibleChange?.(v);
    }
  }

  static cappedDpr(cap) {
    return Math.min(window.devicePixelRatio || 1, cap);
  }

  /** Feed with frame delta (seconds) while the film is playing. */
  sample(dt) {
    if (dt <= 0 || dt > 0.5) return; // ignore tab switches / first frames
    this.samples.push(dt);
    if (this.samples.length < 45) return;
    const avg = this.samples.reduce((a, b) => a + b, 0) / this.samples.length;
    this.samples.length = 0;
    if (avg > 1 / 38 && this.level < 2) {
      this.level += 1;
      this.degradeListeners.forEach((fn) => fn(this.level));
    }
  }

  onDegrade(fn) { this.degradeListeners.add(fn); }

  dispose() {
    this.io.disconnect();
    document.removeEventListener('visibilitychange', this.onDocVis);
    this.degradeListeners.clear();
  }
}
