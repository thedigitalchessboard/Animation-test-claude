// SCENES 12–13: the official logo is revealed by the gathered light (radial
// light-reveal + de-blur + a light sweep masked to the logo artwork), then the
// official tagline: Making ◆ Champions ◆ Worldwide.
// The logo file itself is never altered — only revealed.

import { SCENES } from '../config.js';

export class FinalBrandScene {
  constructor(ctx) {
    this.ctx = ctx;
    const logo = ctx.assets.brandLogo;
    const root = ctx.layers.brand;
    root.innerHTML = `
      <div class="tdc-brand__scrim"></div>
      <div class="tdc-brand__stack">
        <div class="tdc-brand__logo" style="aspect-ratio:${logo.width} / ${logo.height}">
          <div class="tdc-brand__halo"></div>
          <img class="tdc-brand__img" alt="The Digital Chessboard" draggable="false" />
          <div class="tdc-brand__shine"></div>
        </div>
        <p class="tdc-brand__tagline">
          <span class="tdc-w">Making</span><span class="tdc-d" aria-hidden="true">◆</span><span class="tdc-w">Champions</span><span class="tdc-d" aria-hidden="true">◆</span><span class="tdc-w">Worldwide</span>
        </p>
      </div>`;
    const img = root.querySelector('.tdc-brand__img');
    img.src = logo.url;
    const shine = root.querySelector('.tdc-brand__shine');
    shine.style.webkitMaskImage = shine.style.maskImage = `url("${logo.url}")`;
    this.el = {
      root,
      logo: root.querySelector('.tdc-brand__logo'),
      img,
      shine,
      halo: root.querySelector('.tdc-brand__halo'),
      scrim: root.querySelector('.tdc-brand__scrim'),
      words: [...root.querySelectorAll('.tdc-w')],
      diamonds: [...root.querySelectorAll('.tdc-d')],
    };
    this.s = { reveal: 0, blur: 12, bright: 2.8, scale: 0.9, opacity: 0, shine: -0.6, halo: 0, scrim: 0 };
    this.words = this.el.words.map(() => ({ y: 16, o: 0 }));
    this.diamonds = this.el.diamonds.map(() => ({ s: 0, o: 0 }));
  }

  build(tl) {
    const [b0, b1] = SCENES.brand;
    const [g0, g1] = SCENES.tagline;
    const s = this.s;
    tl.set(this.ctx.layers.brand, { autoAlpha: 0 }, 0);
    tl.set(this.ctx.layers.brand, { autoAlpha: 1 }, b0);
    tl.to(s, { scrim: 1, duration: 0.6, ease: 'power1.inOut' }, b0);
    tl.to(s, { halo: 1, duration: 0.3, ease: 'power2.in' }, b0 + 0.2);
    tl.to(s, { opacity: 1, duration: 0.12 }, b0 + 0.22);
    tl.to(s, { reveal: 1, duration: 0.5, ease: 'power2.out' }, b0 + 0.24);
    tl.to(s, { blur: 0, bright: 1, scale: 1, duration: 0.55, ease: 'power3.out' }, b0 + 0.24);
    tl.to(s, { halo: 0.45, duration: 0.5, ease: 'power2.out' }, b0 + 0.55);
    tl.to(s, { shine: 1.6, duration: 0.55, ease: 'power2.inOut' }, b1 - 0.2);

    this.words.forEach((w, i) => tl.to(w, { y: 0, o: 1, duration: 0.28, ease: 'power3.out' }, g0 + i * 0.1));
    this.diamonds.forEach((d, i) => tl.to(d, { s: 1, o: 1, duration: 0.24, ease: 'back.out(3)' }, g0 + 0.08 + i * 0.1));
    this.g1 = g1;
  }

  /** NDC y of the logo centre, used by the network to aim its light. */
  measure() {
    const r = this.el.logo.getBoundingClientRect();
    const c = this.ctx.container.getBoundingClientRect();
    if (!r.height || !c.height) return;
    const cy = r.top + r.height / 2 - c.top;
    this.ctx.logoNdcY = 1 - (2 * cy) / c.height;
  }

  update() {
    const layer = this.ctx.layers.brand;
    if (layer.style.visibility === 'hidden') return;
    const s = this.s;
    const e = this.el;
    e.img.style.opacity = s.opacity.toFixed(3);
    e.img.style.filter = `blur(${s.blur.toFixed(2)}px) brightness(${s.bright.toFixed(3)})`;
    const r = s.reveal * 130;
    const mask = `radial-gradient(circle at 50% 45%, #000 ${Math.max(0, r - 18).toFixed(1)}%, transparent ${r.toFixed(1)}%)`;
    e.img.style.webkitMaskImage = e.img.style.maskImage = mask;
    e.logo.style.transform = `scale(${s.scale.toFixed(4)})`;
    e.shine.style.setProperty('--shine', `${(s.shine * 100).toFixed(1)}%`);
    e.halo.style.opacity = s.halo.toFixed(3);
    e.scrim.style.opacity = s.scrim.toFixed(3);
    this.words.forEach((w, i) => {
      e.words[i].style.opacity = w.o.toFixed(3);
      e.words[i].style.transform = `translateY(${w.y.toFixed(2)}px)`;
    });
    this.diamonds.forEach((d, i) => {
      e.diamonds[i].style.opacity = d.o.toFixed(3);
      e.diamonds[i].style.transform = `scale(${d.s.toFixed(3)})`;
    });
  }
}
