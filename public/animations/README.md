# Presentation Animations

Store generated Lottie JSON animation files in this folder.

Recommended workflow:

```bash
npm run lottie:setup
```

Then ask the agent to create or modify an animation using Diffusion Studio Text-to-Lottie and commit the generated `.json` file here.

Use animations in `slides.js` like this:

```js
media: ["/animations/example.json"]
```

The showcase animations in this folder are generated from:

```bash
npm run lottie:showcase
```
