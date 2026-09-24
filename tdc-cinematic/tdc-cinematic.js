/**
 * The Digital Chessboard — cinematic website animation (silent, < 15 s).
 *
 * Drop-in usage (no build step):
 *
 *   <div data-tdc-cinematic></div>
 *   <script type="module" src="/tdc-cinematic/tdc-cinematic.js"></script>
 *
 * Programmatic usage:
 *
 *   import { mount } from '/tdc-cinematic/tdc-cinematic.js';
 *   const film = mount(document.querySelector('#film'), { autoplay: true });
 *   // film.play() · film.pause() · film.restart() · film.seek(8.5) · film.destroy()
 *
 * The heavy parts (Three.js, GSAP, scenes) are only downloaded when the
 * section approaches the viewport.
 */

// Package root (where assets/ and tdc-cinematic.css live). The production
// bundle in dist/ is built with __TDC_ROOT__ = "../" so it resolves the same.
/* global __TDC_ROOT__ */
const PKG_ROOT = new URL(typeof __TDC_ROOT__ !== 'undefined' ? __TDC_ROOT__ : './', import.meta.url).href;

const DEFAULTS = {
  autoplay: true,          // play when scrolled into view (pauses when out of view)
  loop: false,
  controls: true,          // icon-only pause/play + replay buttons
  injectCss: true,         // adds tdc-cinematic.css automatically
  lazy: true,              // defer loading until near the viewport
  lazyMargin: '400px 0px',
  baseUrl: PKG_ROOT,       // where this folder is served from (assets resolve against it)
  assets: {},              // { logoMark, logoHorizontal, logoTransparent, landMask } overrides
  label: 'The Digital Chessboard — Making Champions Worldwide',
  reducedMotion: undefined, // force true/false (defaults to the user's OS setting)
  profile: undefined,       // force 'desktop' | 'tablet' | 'mobile'
  startAt: undefined,       // debug: seek to a time (s) and hold
  THREE: undefined,         // optionally inject your own three.js module
  gsap: undefined,          // optionally inject your own gsap instance
  onReady: undefined,
  onComplete: undefined,
};

function injectStylesheet(baseUrl) {
  const href = new URL('tdc-cinematic.css', baseUrl).href;
  if ([...document.styleSheets].some((s) => s.href === href) || document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

function readDataOptions(el) {
  const d = el.dataset;
  const o = {};
  if (d.autoplay) o.autoplay = d.autoplay !== 'false';
  if (d.loop) o.loop = d.loop === 'true';
  if (d.controls) o.controls = d.controls !== 'false';
  if (d.baseUrl) o.baseUrl = new URL(d.baseUrl, document.baseURI).href;
  if (d.logoTransparent) o.assets = { ...(o.assets || {}), logoTransparent: d.logoTransparent };
  if (d.profile) o.profile = d.profile;
  // Debug helper: ?tdc-t=8.5 seeks and holds.
  const q = new URLSearchParams(location.search);
  if (q.has('tdc-t')) o.startAt = parseFloat(q.get('tdc-t'));
  if (q.has('tdc-profile')) o.profile = q.get('tdc-profile');
  if (q.has('tdc-reduced')) o.reducedMotion = q.get('tdc-reduced') !== '0';
  return o;
}

/**
 * Mounts the film into `target` (element or selector).
 * @returns {{ ready: Promise, play(), pause(), restart(), seek(t:number), destroy(), duration: number }}
 */
export function mount(target, options = {}) {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) throw new Error('[tdc-cinematic] mount target not found');
  if (el.__tdcFilm) return el.__tdcFilm;
  const o = { ...DEFAULTS, ...readDataOptions(el), ...options };
  o.baseUrl = new URL(o.baseUrl, document.baseURI).href;
  if (o.injectCss) injectStylesheet(o.baseUrl);

  el.classList.add('tdc-cinematic');
  const stage = document.createElement('div');
  stage.className = 'tdc-stage';
  el.appendChild(stage);

  let manager = null;
  let a11y = null;
  let destroyed = false;
  let io = null;
  let resolveReady;
  const ready = new Promise((r) => { resolveReady = r; });

  const start = async () => {
    io?.disconnect();
    if (destroyed || manager) return;
    try {
      const [{ SceneManager }, { AccessibilityManager }] = await Promise.all([
        import('./src/core/SceneManager.js'),
        import('./src/core/AccessibilityManager.js'),
      ]);
      if (destroyed) return;
      a11y = new AccessibilityManager(el, { label: o.label, controls: o.controls, forceReducedMotion: o.reducedMotion });
      manager = new SceneManager(el, o, a11y);
      await manager.init();
      resolveReady(film);
    } catch (err) {
      console.error('[tdc-cinematic] falling back to a static brand frame:', err);
      el.classList.add('tdc-is-fallback');
      const fallback = document.createElement('div');
      fallback.className = 'tdc-fallback';
      const img = new Image();
      img.alt = 'The Digital Chessboard';
      img.src = new URL(o.assets.logoMark || 'assets/brand/tdc-logo-mark-dark.webp', o.baseUrl).href;
      const tag = document.createElement('p');
      tag.className = 'tdc-brand__tagline';
      tag.innerHTML = '<span class="tdc-w">Making</span><span class="tdc-d" aria-hidden="true">◆</span><span class="tdc-w">Champions</span><span class="tdc-d" aria-hidden="true">◆</span><span class="tdc-w">Worldwide</span>';
      fallback.append(img, tag);
      stage.appendChild(fallback);
      resolveReady(film);
    }
  };

  const film = {
    ready,
    get duration() { return manager?.duration ?? 14; },
    get manager() { return manager; },
    play() { manager ? manager.play() : start().then(() => manager?.play()); },
    pause() { manager?.pause(true); },
    restart() { manager?.restart(); },
    seek(t) { manager?.seek(t); },
    destroy() {
      destroyed = true;
      io?.disconnect();
      manager?.destroy();
      a11y?.dispose();
      stage.remove();
      el.classList.remove('tdc-cinematic', 'tdc-is-ready', 'tdc-is-ended', 'tdc-is-still', 'tdc-is-fallback');
      delete el.__tdcFilm;
    },
  };
  el.__tdcFilm = film;

  if (o.lazy && 'IntersectionObserver' in window && typeof o.startAt !== 'number') {
    io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) start();
    }, { rootMargin: o.lazyMargin });
    io.observe(el);
  } else {
    start();
  }
  return film;
}

/** Mounts every `[data-tdc-cinematic]` element on the page. */
export function autoMount(root = document) {
  return [...root.querySelectorAll('[data-tdc-cinematic]')].map((el) => mount(el));
}

// Auto-mount unless the page opts out with <html data-tdc-manual>.
if (typeof document !== 'undefined' && !document.documentElement.hasAttribute('data-tdc-manual')) {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => autoMount());
  else autoMount();
}
