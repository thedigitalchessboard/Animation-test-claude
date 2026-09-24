// Accessibility: reduced-motion handling, a screen-reader description of the
// silent story (never shown on screen), and icon-only pause / replay controls
// (WCAG 2.2.2 — moving content longer than 5 s must be pausable).

import { A11Y_DESCRIPTION } from '../config.js';

const ICONS = {
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.2-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>',
  replay: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5V2L7 6l5 4V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z"/></svg>',
};

export class AccessibilityManager {
  constructor(container, { label, controls = true, forceReducedMotion } = {}) {
    this.container = container;
    this.mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.forced = forceReducedMotion;
    this.listeners = new Set();

    container.setAttribute('role', 'region');
    container.setAttribute('aria-roledescription', 'animation');
    container.setAttribute('aria-label', label || 'The Digital Chessboard — Making Champions Worldwide');

    this.desc = document.createElement('p');
    this.desc.className = 'tdc-sr-only';
    this.desc.id = `tdc-desc-${Math.random().toString(36).slice(2, 8)}`;
    this.desc.textContent = A11Y_DESCRIPTION;
    container.appendChild(this.desc);
    container.setAttribute('aria-describedby', this.desc.id);

    this.onMq = () => this.listeners.forEach((fn) => fn(this.reducedMotion));
    this.mq.addEventListener?.('change', this.onMq);

    if (controls) this.buildControls();
  }

  get reducedMotion() {
    if (typeof this.forced === 'boolean') return this.forced;
    return this.mq.matches;
  }

  onReducedMotionChange(fn) { this.listeners.add(fn); }

  buildControls() {
    const wrap = document.createElement('div');
    wrap.className = 'tdc-controls';
    this.toggleBtn = document.createElement('button');
    this.toggleBtn.type = 'button';
    this.toggleBtn.className = 'tdc-btn';
    this.replayBtn = document.createElement('button');
    this.replayBtn.type = 'button';
    this.replayBtn.className = 'tdc-btn';
    this.replayBtn.setAttribute('aria-label', 'Replay animation');
    this.replayBtn.innerHTML = ICONS.replay;
    wrap.append(this.toggleBtn, this.replayBtn);
    this.container.appendChild(wrap);
    this.controls = wrap;
    this.setPlaying(false);
  }

  bind({ onToggle, onReplay }) {
    this.toggleBtn?.addEventListener('click', onToggle);
    this.replayBtn?.addEventListener('click', onReplay);
  }

  setPlaying(playing) {
    if (!this.toggleBtn) return;
    this.toggleBtn.innerHTML = playing ? ICONS.pause : ICONS.play;
    this.toggleBtn.setAttribute('aria-label', playing ? 'Pause animation' : 'Play animation');
  }

  setEnded(ended) {
    this.container.classList.toggle('tdc-is-ended', ended);
    if (this.toggleBtn) this.toggleBtn.hidden = ended;
  }

  dispose() {
    this.mq.removeEventListener?.('change', this.onMq);
    this.controls?.remove();
    this.desc.remove();
    this.listeners.clear();
  }
}
