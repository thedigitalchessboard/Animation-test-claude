// Master GSAP timeline. Every scene adds its tweens at absolute times; a single
// clock tween drives the per-frame scene updates. The film can never exceed
// HARD_MAX_DURATION: if it would, it is time-scaled down to the target.

import { TARGET_DURATION, HARD_MAX_DURATION } from '../config.js';

export class TimelineManager {
  constructor(gsap, { onComplete } = {}) {
    this.gsap = gsap;
    this.clock = { t: 0 };
    this.tl = gsap.timeline({ paused: true, onComplete });
    this.tl.fromTo(this.clock, { t: 0 }, { t: TARGET_DURATION, duration: TARGET_DURATION, ease: 'none' }, 0);
  }

  /** Call after all scenes have added their tweens. */
  finalize() {
    const d = this.tl.duration();
    if (d > HARD_MAX_DURATION) {
      const scale = d / TARGET_DURATION;
      this.tl.timeScale(scale);
      console.warn(`[tdc-cinematic] timeline was ${d.toFixed(2)}s — time-scaled ×${scale.toFixed(3)} to stay under ${HARD_MAX_DURATION}s`);
    }
    this.duration = this.tl.duration() / this.tl.timeScale();
    return this.duration;
  }

  get time() { return this.clock.t; }
  get playing() { return !this.tl.paused() && this.tl.progress() < 1; }
  get ended() { return this.tl.progress() >= 1; }

  play() { this.tl.play(); }
  pause() { this.tl.pause(); }
  restart() { this.tl.restart(); }
  seek(t) { this.tl.seek(Math.max(0, Math.min(t, this.tl.duration()))); }

  dispose() { this.tl.kill(); }
}
