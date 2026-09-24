# TDC Cinematic — drop-in website animation

A silent, 14-second, real-time (Three.js + GSAP + SVG) animated story for **The Digital Chessboard** homepage.
Everything the animation needs lives in this one folder, so it can be copied into any existing website.

- **Duration:** 14.7 s. The timeline is capped: it can never run past 14.9 s. Timing follows the wall clock, so a slow device drops frames instead of stretching the film.
- **No audio, no subtitles, no dialogue.** The only text is the brand lockup: the official logo plus *Making ◆ Champions ◆ Worldwide*.
- **No build step, no CDN.** Three.js and GSAP are vendored in `vendor/` as small ES modules.
- **Lazy:** until the section comes near the viewport, only a 3 KB script loads.
- **Responsive:** desktop, tablet, and mobile each get their own framing and quality level (the mobile tablet screen uses a portrait layout, for example).
- **Accessible:** `prefers-reduced-motion` shows a still brand frame, pause/play and replay buttons are keyboard-accessible, and screen readers get a text description of the story.

---

## 1. Quick start (any website)

1. Copy this whole `tdc-cinematic/` folder into your site's public/static files, for example `/public/tdc-cinematic/` or `/wp-content/themes/<theme>/tdc-cinematic/`.
2. Put this where the animation should appear, **directly below the hero section and above "Trusted by Parents. Loved by Students."**:

```html
<section class="tdc-cinematic-section">
  <div data-tdc-cinematic></div>
</section>
<script type="module" src="/tdc-cinematic/dist/tdc-cinematic.js"></script>
```

That's it. The script adds its own stylesheet, finds `[data-tdc-cinematic]`, and plays once when the section scrolls into view. It pauses when the section scrolls out of view and resumes when it comes back.

> `dist/` is the minified production build. `tdc-cinematic.js` in the folder root is the readable source, and it works identically (`<script type="module" src="/tdc-cinematic/tdc-cinematic.js">`).

If the folder is served from a different URL than the script, for example a CDN, add `data-base-url="https://cdn.example.com/tdc-cinematic/"` to the div.

---

## 2. Programmatic API

```js
import { mount } from '/tdc-cinematic/dist/tdc-cinematic.js';

const film = mount(document.querySelector('#tdc-film'), {
  autoplay: true,        // play when scrolled into view (default true)
  loop: false,           // replay automatically after 2.5 s (default false)
  controls: true,        // icon-only pause/play + replay buttons (default true)
  lazy: true,            // defer loading until near the viewport (default true)
  assets: {              // optional overrides (paths relative to this folder or absolute URLs)
    logoTransparent: '/brand/tdc-logo-white.svg', // official transparent logo, if you have one
  },
  onReady: () => {},
  onComplete: () => {},
});

await film.ready;
film.play(); film.pause(); film.restart(); film.seek(8.5); film.destroy();
```

To stop auto-mounting (for example, when you mount manually inside a framework), add `data-tdc-manual` to `<html>`.

### Data attributes

| Attribute | Example | Effect |
|---|---|---|
| `data-autoplay` | `"false"` | Don't autoplay; the viewer presses play |
| `data-loop` | `"true"` | Loop |
| `data-controls` | `"false"` | Hide the pause/replay buttons |
| `data-base-url` | `"/static/tdc-cinematic/"` | Where this folder is served from |
| `data-logo-transparent` | `"/img/logo.svg"` | Use an official transparent logo |
| `data-profile` | `"mobile"` | Force a quality/layout profile |

### Styling hooks (CSS custom properties on `.tdc-cinematic`)

```css
.tdc-cinematic {
  --tdc-aspect: 16 / 9;       /* 4/3 under 1024px, 4/5 under 640px by default */
  --tdc-max-height: 88vh;
  --tdc-radius: 0px;          /* e.g. 24px for a rounded card look */
  --tdc-font: "Montserrat", system-ui, sans-serif; /* tagline font */
}
```

---

## 3. Framework recipes

### React / Next.js (App Router)

Put the folder in `public/tdc-cinematic/`, then:

```jsx
'use client';
import { useEffect, useRef } from 'react';

export default function TdcCinematic() {
  const ref = useRef(null);
  useEffect(() => {
    let film;
    document.documentElement.setAttribute('data-tdc-manual', '');
    import(/* webpackIgnore: true */ '/tdc-cinematic/dist/tdc-cinematic.js').then(({ mount }) => {
      film = mount(ref.current);
    });
    return () => film?.destroy();
  }, []);
  return <div ref={ref} />;
}
```

Render `<TdcCinematic />` between your hero and testimonials components. (`webpackIgnore` makes Next.js load the file from `public/` instead of bundling it. With Vite, use `/* @vite-ignore */`.)

### Vue / Nuxt

```vue
<template><div ref="el" /></template>
<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
const el = ref(null); let film;
onMounted(async () => {
  document.documentElement.setAttribute('data-tdc-manual', '');
  const { mount } = await import(/* @vite-ignore */ '/tdc-cinematic/dist/tdc-cinematic.js');
  film = mount(el.value);
});
onBeforeUnmount(() => film?.destroy());
</script>
```

### WordPress (Elementor / Gutenberg)

1. Upload the `tdc-cinematic` folder to `wp-content/uploads/tdc-cinematic/` (SFTP or a file-manager plugin).
2. Under the hero, add a **Custom HTML** block (Gutenberg) or an **HTML** widget (Elementor):

```html
<div data-tdc-cinematic data-base-url="/wp-content/uploads/tdc-cinematic/"></div>
<script type="module" src="/wp-content/uploads/tdc-cinematic/dist/tdc-cinematic.js"></script>
```

### Webflow / Wix / Squarespace

Host the folder on your CDN or hosting, then add the same two lines as an Embed / Custom Code block, with absolute URLs in `data-base-url` and `src`.

---

## 4. Handing this to Claude Code in your website repo

Copy the `tdc-cinematic/` folder into your website repository, then give Claude Code this prompt:

> Integrate the drop-in animation in `tdc-cinematic/` (read `tdc-cinematic/README.md` first) into our homepage.
> Serve the folder as static files unchanged. Place the animation directly **below the hero section** and **above the
> "Trusted by Parents. Loved by Students." section**, full-width, flowing out of the hero (same navy background).
> Use the framework recipe from the README that matches this codebase, mount it once, and destroy it on unmount.
> Don't modify the files inside `tdc-cinematic/`, and don't add any text, captions, or audio around the animation.

---

## 5. Brand assets

| File | Used for |
|---|---|
| `assets/brand/tdc-logo-mark-dark.webp` | Final brand reveal (official square logo, supplied) |
| `assets/brand/tdc-logo-horizontal-light.webp` | Tablet screens: the astronaut's tablet, the girl's splash screen, and the class header (official horizontal logo, supplied) |
| `assets/earth/land-mask.webp` | Continents for the stylised Earth (Natural Earth, public domain) |

The official logos are shown as supplied. They are never redrawn, recoloured, stretched, or distorted. For the reveal over the night sky, the flat dark background of the square logo is removed at runtime: the artwork's own pixels are un-premultiplied and the empty margins trimmed. If you have an official **transparent** PNG or SVG, pass it as `assets.logoTransparent` (or `data-logo-transparent`) and it is used directly.

To swap a logo, replace the file under the same name, or pass new paths in `assets`.

---

## 6. Story & timing (edit in `src/config.js`)

| # | Time (s) | Beat |
|---|---|---|
| 01 | 0.0–1.5 | Slow approach out of deep space; glowing student points light up the Earth |
| 02 | 1.2–2.0 | Points connect like a constellation while the camera breathes |
| 03 | 2.0–2.8 | Coach Knight (a human coach with a cape and a chest emblem) flies across, with a wink at the camera |
| 04 | 2.8–4.35 | He clips the astronaut's floating knight → brakes → **surprised (held)** → **apologetic grimace, raised palm, little bow (held)** → the astronaut grins and nods → relief → back to his tablet game |
| 05 | 4.35–5.45 | Dive: space → atmosphere → clouds → city → he lands beside her window → through the window |
| 06 | 5.45–6.85 | **Quiet sleeping room (held)** → she stirs, yawns → camera pushes in → **notices the tablet: eyes wide, curious (held)** |
| 07 | 6.85–7.95 | Sits up, scoots over, grabs the tablet, taps it; the screen lights her face and the room dims around her |
| 08 | 7.95–8.95 | An iris opens through the screen: **official logo (held)** → live class; the coach waves, points, a knight lifts, moves, and settles |
| 09 | 8.95–9.85 | **Held close-up:** catchlights, screen reflection, tiny sparkle, big smile, a happy blink |
| 10 | 9.85–10.9 | Camera pulls back out through the window; **the coach smiles proudly and nods (held)**, a knight appears, he taps it |
| 11 | 10.9–12.3 | Pull back to Earth; the network spreads from her home; six chess pieces rise from connection points with bursts of light |
| 12 | 12.3–13.0 | The network converges into light → official logo reveal |
| 13 | 13.0–13.4 | *Making ◆ Champions ◆ Worldwide*, then **the lockup rests on its own (held)** |
| 14 | 13.6–14.0 | The coach pops in from the side, looks at you, and waves "Hi!" (no text) |
| 15 | 13.95–14.7 | A knight hops past **in front** of him → looks at the viewer → the knight → the viewer → the knight → chase → exit. End. |

The transitions are quick and continuous, and the emotional beats (marked **held**) get time to land. If a timing edit ever pushes the film past `HARD_MAX_DURATION` (14.9 s), `TimelineManager` time-scales it back down and logs a warning.

---

## 7. Architecture

```
tdc-cinematic/
├── tdc-cinematic.js        public entry: mount(), autoMount(), lazy loading, fallback
├── tdc-cinematic.css       all styles, prefixed .tdc-
├── dist/                   minified, code-split production build
├── src/
│   ├── config.js           timings, colours, nodes, device profiles
│   ├── core/
│   │   ├── SceneManager.js        layers, render loop, play/pause/visibility
│   │   ├── TimelineManager.js     master GSAP timeline + 14.9 s hard cap
│   │   ├── AssetManager.js        libraries, images, logo background removal
│   │   ├── ResponsiveManager.js   size, profile (desktop/tablet/mobile), portrait
│   │   ├── PerformanceManager.js  IntersectionObserver, page visibility, adaptive quality
│   │   ├── AccessibilityManager.js reduced motion, description, controls
│   │   ├── ThreeStage.js          renderer / camera / disposal
│   │   └── Track.js               deterministic camera keyframes
│   ├── scenes/
│   │   ├── SpaceScene.js          stars, dust, astronaut, floating pieces
│   │   ├── EarthScene.js          globe, clouds, WebGL camera path, fly-through clouds
│   │   ├── GlobalNetworkScene.js  arcs, chess pieces on the globe, light convergence
│   │   ├── CoachScene.js          every Coach Knight appearance + the final chase
│   │   ├── BedroomScene.js        city → house → bedroom world, the girl, the 2D camera
│   │   ├── TabletScene.js         logo splash + live class UI (landscape & portrait)
│   │   └── FinalBrandScene.js     logo reveal + tagline
│   └── art/                       SVG characters and illustrations (coach, girl, astronaut, world, pieces)
├── vendor/                 three.js (MIT) and GSAP (standard no-charge licence), tree-shaken ES modules
└── assets/                 official logos + land mask
```

Rebuilding (only needed if you edit the source): `cd tools && npm install && npm run build`. This regenerates `vendor/` and `dist/`.

## 8. Performance notes

- The device pixel ratio is capped per profile (2 / 1.75 / 1.5). Particle counts scale per profile.
- Rendering stops when the section is off-screen or the tab is hidden, and after the film ends.
- A frame-time watchdog lowers the resolution and drops secondary particles on struggling devices.
- The WebGL canvas only renders during the space/Earth parts. The illustrated middle section is plain SVG.
- `film.destroy()` disposes GPU resources, observers, and DOM.
- If WebGL is unavailable, a static brand frame (official logo + tagline) is shown instead.

## 9. Licences

- three.js: MIT
- GSAP: GreenSock standard "no charge" licence (https://gsap.com/standard-license)
- Land outlines: Natural Earth (public domain), via `world-atlas` (ISC)
- Illustrations and code in this folder were made for The Digital Chessboard
