// Orchestrates layers, managers and scenes, and owns the render loop.

import { SCENES, TARGET_DURATION } from '../config.js';
import { AssetManager } from './AssetManager.js';
import { TimelineManager } from './TimelineManager.js';
import { ResponsiveManager } from './ResponsiveManager.js';
import { PerformanceManager } from './PerformanceManager.js';
import { ThreeStage } from './ThreeStage.js';
import { createSvgRoot } from '../art/svg.js';
import { SpaceScene } from '../scenes/SpaceScene.js';
import { EarthScene } from '../scenes/EarthScene.js';
import { GlobalNetworkScene } from '../scenes/GlobalNetworkScene.js';
import { BedroomScene } from '../scenes/BedroomScene.js';
import { CoachScene } from '../scenes/CoachScene.js';
import { TabletScene } from '../scenes/TabletScene.js';
import { FinalBrandScene } from '../scenes/FinalBrandScene.js';

// Frame shown for prefers-reduced-motion: Earth + network + pieces + logo +
// tagline + Coach Knight waving.
const STILL_TIME = 13.36;

export class SceneManager {
  constructor(container, options, a11y) {
    this.container = container;
    this.options = options;
    this.a11y = a11y;
    this.stage = container.querySelector('.tdc-stage');
    this.tick = this.tick.bind(this);
    this.lastT = -1;
    this.userPaused = false;
  }

  async init() {
    const o = this.options;
    this.assets = new AssetManager({ baseUrl: o.baseUrl, assets: o.assets, THREE: o.THREE, gsap: o.gsap });
    const [{ THREE, gsap }] = await Promise.all([this.assets.loadLibraries(), this.assets.loadImages()]);
    this.THREE = THREE;
    this.gsap = gsap;

    this.layers = this.createLayers();
    this.responsive = new ResponsiveManager(this.stage, { forceProfile: o.profile });
    const profile = this.responsive.profile;

    this.three = new ThreeStage(THREE, this.layers.canvas, profile);

    const ctx = {
      THREE, gsap, container: this.stage, layers: this.layers, assets: this.assets,
      responsive: this.responsive, three: this.three, logoNdcY: 0.18,
    };
    this.ctx = ctx;

    this.space = new SpaceScene(ctx);
    this.earth = new EarthScene(ctx);
    this.network = new GlobalNetworkScene(ctx, this.earth);
    this.bedroom = new BedroomScene(ctx);
    ctx.bedroom = this.bedroom;
    this.coach = new CoachScene(ctx);
    this.tablet = new TabletScene(ctx);
    this.brand = new FinalBrandScene(ctx);
    this.scenes = [this.space, this.earth, this.network, this.bedroom, this.coach, this.tablet, this.brand];

    this.timeline = new TimelineManager(gsap, { onComplete: () => this.onComplete() });
    const tl = this.timeline.tl;
    for (const s of this.scenes) s.build(tl);
    this.buildLayerCuts(tl);
    this.duration = this.timeline.finalize();

    this.onResize();
    this.responsive.onChange(() => this.onResize());

    this.perf = new PerformanceManager(this.container, { onVisibleChange: (v) => this.onVisible(v) });
    this.perf.onDegrade((level) => {
      this.three.degrade(level);
      if (level >= 2) this.space.dust.visible = false;
    });

    this.a11y.bind({
      onToggle: () => (this.timeline.playing ? this.pause(true) : this.play()),
      onReplay: () => this.restart(),
    });
    this.a11y.onReducedMotionChange((reduced) => { if (reduced) this.showStill(); });

    // Keep wall-clock timing exact (the film must never stretch past 15 s on a
    // slow device): drop frames instead of slowing time. Only touch the ticker
    // when we own this GSAP instance.
    if (!o.gsap && !window.gsap) gsap.ticker.lagSmoothing(0);
    gsap.ticker.add(this.tick);
    this.container.classList.add('tdc-is-ready');

    if (typeof o.startAt === 'number') {
      this.seek(o.startAt);
    } else if (this.a11y.reducedMotion) {
      this.showStill();
    } else {
      this.timeline.seek(0);
      this.renderFrame(true);
      if (o.autoplay !== false && this.perf.visible) this.play();
    }
    o.onReady?.(this);
    return this;
  }

  createLayers() {
    const stage = this.stage;
    const div = (cls) => {
      const d = document.createElement('div');
      d.className = `tdc-layer ${cls}`;
      stage.appendChild(d);
      return d;
    };
    const webgl = div('tdc-layer--webgl');
    const canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    webgl.appendChild(canvas);
    const world = createSvgRoot('tdc-layer tdc-layer--world');
    stage.appendChild(world);
    const clouds = div('tdc-layer--clouds');
    const overlay = createSvgRoot('tdc-layer tdc-layer--overlay');
    stage.appendChild(overlay);
    const tablet = div('tdc-layer--tablet');
    const brand = div('tdc-layer--brand');
    const front = createSvgRoot('tdc-layer tdc-layer--front');
    stage.appendChild(front);
    const fx = div('tdc-layer--fx');
    fx.innerHTML = '<div class="tdc-fx-flash"></div><div class="tdc-fx-vignette"></div><div class="tdc-fx-grain"></div>';
    return { webgl, canvas, world, clouds, overlay, tablet, brand, front, fx, flash: fx.firstChild };
  }

  /** Visibility of whole layers between the WebGL and illustrated parts. */
  buildLayerCuts(tl) {
    const L = this.layers;
    const [d0] = SCENES.dive;
    const [r0] = SCENES.reveal;
    const [t0] = SCENES.tablet;
    const [o0] = SCENES.outside;
    tl.set(L.webgl, { autoAlpha: 1 }, 0);
    tl.to(L.webgl, { autoAlpha: 0, duration: 0.1 }, d0 + 0.72);
    tl.to(L.webgl, { autoAlpha: 1, duration: 0.2 }, r0 + 0.3);
    tl.set(L.overlay, { autoAlpha: 1 }, 0);
    tl.set(L.overlay, { autoAlpha: 0 }, d0 + 0.75);
    tl.set(L.front, { autoAlpha: 0 }, 0);
    tl.set(L.front, { autoAlpha: 1 }, SCENES.wave[0] - 0.01);
    // Tablet wakes up → soft flash; the knight tap outside → gold flash.
    tl.fromTo(L.flash, { opacity: 0 }, { opacity: 0.16, duration: 0.06, yoyo: true, repeat: 1 }, t0 + 0.96);
    tl.fromTo(L.flash, { opacity: 0 }, { opacity: 0.18, duration: 0.08, yoyo: true, repeat: 1 }, o0 + 0.74);
  }

  onResize() {
    const { W, H, profile } = this.responsive;
    this.three.setSize(W, H, profile);
    for (const svg of [this.layers.overlay, this.layers.front]) svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    this.layers.world.removeAttribute('viewBox');
    this.stage.dataset.profile = profile.name;
    this.stage.classList.toggle('tdc-is-portrait', this.responsive.portrait);
    this.brand.measure();
    this.renderFrame(true);
  }

  tick(time, deltaTime) {
    const t = this.timeline.time;
    if (t === this.lastT && !this.dirty) return;
    if (this.timeline.playing) this.perf.sample(deltaTime / 1000);
    this.renderFrame(false);
  }

  renderFrame(force) {
    const t = this.timeline.time;
    this.lastT = t;
    this.dirty = false;
    // Deterministic "time" for secondary motion (cape flutter, twinkles…).
    const time = t;
    for (const s of this.scenes) s.update(t, time);
    const glVisible = this.layers.webgl.style.visibility !== 'hidden';
    if (glVisible || force) this.three.render();
  }

  play() {
    this.userPaused = false;
    if (this.timeline.ended) this.timeline.restart();
    else this.timeline.play();
    this.a11y.setPlaying(true);
    this.a11y.setEnded(false);
  }

  pause(byUser = false) {
    if (byUser) this.userPaused = true;
    this.timeline.pause();
    this.a11y.setPlaying(false);
  }

  restart() {
    this.userPaused = false;
    this.timeline.restart();
    this.a11y.setPlaying(true);
    this.a11y.setEnded(false);
  }

  seek(t) {
    this.userPaused = true; // an explicit seek holds the frame until play()
    this.timeline.pause();
    this.timeline.seek(t);
    this.renderFrame(true);
    this.a11y.setPlaying(false);
  }

  showStill() {
    this.timeline.pause();
    this.timeline.seek(STILL_TIME);
    this.renderFrame(true);
    this.a11y.setPlaying(false);
    this.container.classList.add('tdc-is-still');
  }

  onVisible(visible) {
    if (!this.timeline) return;
    if (visible) {
      if (this.userPaused || this.a11y.reducedMotion) return;
      if (this.options.autoplay === false && !this.started) return;
      if (!this.timeline.ended) { this.started = true; this.play(); }
    } else if (this.timeline.playing) {
      this.timeline.pause();
      this.a11y.setPlaying(false);
    }
  }

  onComplete() {
    this.a11y.setPlaying(false);
    this.a11y.setEnded(true);
    this.renderFrame(true);
    this.options.onComplete?.();
    if (this.options.loop) setTimeout(() => this.restart(), 2500);
  }

  destroy() {
    this.gsap?.ticker.remove(this.tick);
    this.timeline?.dispose();
    this.perf?.dispose();
    this.responsive?.dispose();
    this.scenes?.forEach((s) => s.dispose?.());
    this.three?.dispose();
    this.assets?.dispose();
    Object.values(this.layers || {}).forEach((l) => l?.remove?.());
  }
}

export { TARGET_DURATION };
