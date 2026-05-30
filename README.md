# Online Slide Deck Template

A standalone, browser-native presentation scaffold extracted from a production portfolio deck.

It includes:

- Declarative slide data in `slides.js`
- Multiple custom layouts for intro, timelines, media grids, rich splits, comparisons, architecture diagrams, process flows, and closing/Q&A
- Keyboard, button, click, and touch navigation
- Fullscreen mode
- Image click-to-zoom
- Per-image pan/zoom with local persistence
- Typewriter text reveal
- Nearby media preloading without eager-loading the whole deck
- Static hosting support on Netlify, GitHub Pages, or any file server

## Use

```bash
npm install
npm run start
```

Then open the local URL printed by Vite.

For a static production build:

```bash
npm run build
```

The build output is written to `dist/`.

## Customize

Edit the `slides` array at the top of `slides.js`.

Each slide object can choose a `layout`, optional `media`, `bullets`, `htmlContent`, or layout-specific fields such as `items` for timelines and `compareItems` for comparison slides.

The sample deck uses inline SVG data URIs, so the template has no required media assets and is safe to publish as a public repository.

## Notes

This template intentionally contains no private portfolio content, external media, credentials, or analytics.
