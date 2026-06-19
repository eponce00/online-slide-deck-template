# Claude Instructions

This repo is a browser-native web presentation template. The main deck content lives in `slides.js`, styles live in `slides.css`, and generated/static media assets should live under `public/`.

## Animation Workflow

Use Lottie for custom production animations in presentations:

- Use Diffusion Studio Text-to-Lottie when creating custom motion graphics, animated illustrations, loaders, reveal sequences, or slide-specific vector animation.
- If the Text-to-Lottie skill is missing, install it with `npm run lottie:setup` or `npx skills add diffusionstudio/lottie`.
- Store generated Lottie JSON files in `public/animations/`.
- Reference animations from slide data with root-relative paths such as `/animations/intro-reveal.json`.
- Use CSS transitions only for simple UI state changes, hover states, slide fades, and small layout motion.

The deck already includes `lottie-web` for browser playback. Any `.json` path passed through a slide `media` array is rendered as a Lottie animation.

Example:

```js
{
  kicker: "Motion",
  title: "Animated Reveal",
  layout: "media-only",
  mediaFit: "contain",
  media: ["/animations/intro-reveal.json"]
}
```

## Quality Rules

- Keep generated animation files portable and committed with the presentation.
- Prefer transparent or clean-background Lottie scenes that can sit inside existing media frames.
- Verify `npm run build` before handing off changes.
- Do not vendor the Diffusion Studio repository into this project unless the user explicitly asks for an offline pinned copy.
