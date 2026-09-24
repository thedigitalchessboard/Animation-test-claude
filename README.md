# The Digital Chessboard — Cinematic Website Animation

A silent, ~36-second animated short film that runs in real time (Three.js + GSAP + SVG) on the TDC homepage, between the hero section and *"Trusted by Parents. Loved by Students."*. It also works as a 30–40 s ad.

- **`tdc-cinematic/`**: the self-contained, drop-in package. Copy this folder into your existing website. Integration guide: [`tdc-cinematic/README.md`](tdc-cinematic/README.md), which covers plain HTML, React/Next.js, Vue, WordPress, and Webflow, plus a ready-made prompt for Claude Code.
- **`index.html`**: a demo homepage showing the placement: hero → animation → "Trusted by Parents" → rest.
- **`tools/`**: dev-only scripts (vendor bundles, land mask, production build) and preview pages. The website doesn't need this folder.

## Preview locally

ES modules need an HTTP server, so opening the file directly won't work:

```bash
npx serve .            # or: python3 -m http.server
# open http://localhost:3000/            demo homepage
# open http://localhost:3000/tools/dev/stage.html?tdc-t=8.5   jump to any moment (seconds)
# add &tdc-profile=mobile to force the mobile layout, &tdc-reduced=1 for the reduced-motion still
```

## Rebuild after editing source

```bash
cd tools && npm install && npm run build   # regenerates tdc-cinematic/vendor and tdc-cinematic/dist
```
