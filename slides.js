const demoSvg = (label, bg = "f5f5f5", fg = "111111") =>
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"><rect width="1600" height="900" fill="#${bg}"/><path d="M0 720 C320 620 520 820 820 700 S1260 560 1600 680 V900 H0 Z" fill="#${fg}" opacity="0.08"/><circle cx="1240" cy="250" r="190" fill="#${fg}" opacity="0.08"/><text x="800" y="455" text-anchor="middle" dominant-baseline="middle" font-family="Inter, Arial, sans-serif" font-size="86" font-weight="700" fill="#${fg}">${label}</text></svg>`)}`;

const slides = [
  {
    kicker: "Online Deck Template",
    title: "Browser-Native Slides",
    subtitle: "A portable presentation scaffold with animated layouts, media frames, and keyboard navigation.",
    layout: "intro",
    bullets: [],
    media: [demoSvg("Opening Slide", "f7f7f2", "1b1b1b")]
  },
  {
    kicker: "About",
    title: "Narrative Slide",
    layout: "about-me",
    bullets: [
      "Introduce the presenter, topic, or project context.",
      "Swap from still images to motion or media on the next step.",
      "Use arrow keys, click, touch, or the buttons to move through the story.",
      "Pan and zoom image cards when a slide needs inspection."
    ],
    personalPhotos: [
      [demoSvg("Photo A", "ecf3ff", "1f4b6e"), demoSvg("Photo B", "eef8ef", "1f6b42")],
      [demoSvg("Photo C", "fff3e8", "7b4a1d")],
      [demoSvg("Photo D", "f5eefd", "52306e")]
    ],
    media: [demoSvg("Motion Slot A", "111827", "ffffff"), demoSvg("Motion Slot B", "172554", "ffffff"), demoSvg("Motion Slot C", "1f2937", "ffffff")],
    mediaFill: true
  },
  {
    kicker: "Timeline",
    title: "Milestone Timeline",
    layout: "timeline",
    items: [
      { company: "Discovery", role: "Research", start: 2023.0, end: 2023.5, range: "Q1-Q2", logo: demoSvg("D", "e0f2fe", "075985"), clip: demoSvg("Discovery Clip", "082f49", "ffffff") },
      { company: "Prototype", role: "Build", start: 2023.5, end: 2024.0, range: "Q3-Q4", logo: demoSvg("P", "dcfce7", "166534"), clip: demoSvg("Prototype Clip", "14532d", "ffffff") },
      { company: "Pilot", role: "Validate", start: 2024.0, end: 2024.7, range: "Pilot", logo: demoSvg("P", "fef3c7", "92400e"), clip: demoSvg("Pilot Clip", "713f12", "ffffff") },
      { company: "Launch", role: "Scale", start: 2024.7, end: 2025.3, range: "Launch", logo: demoSvg("L", "fae8ff", "86198f"), clip: demoSvg("Launch Clip", "581c87", "ffffff") }
    ]
  },
  {
    kicker: "Media",
    title: "Media Only",
    layout: "media-only",
    bullets: [],
    media: [demoSvg("Full Frame Media", "e5e7eb", "111827")]
  },
  {
    kicker: "Flow",
    title: "Pilot Flow",
    layout: "pilot-flow",
    mediaFit: "contain",
    bullets: [
      "Describe the starting condition.",
      "Name the bottleneck or challenge.",
      "Show the new flow and proof points.",
      "Connect the work to a measurable outcome."
    ],
    media: [demoSvg("Process Flow", "f8fafc", "0f172a")]
  },
  {
    kicker: "Contribution",
    title: "Rich Split",
    layout: "rich-split",
    htmlContent: `<div class="rich-slide-content"><ul><li><strong>Lead Workstream</strong><ul><li>Architecture, standards, and system integration</li><li>Reusable components and operator experience</li></ul></li><li><strong>Implementation</strong><ul><li>Controls, data, UI, media, and deployment patterns</li></ul></li></ul></div>`,
    media: [demoSvg("Rich Media", "f1f5f9", "334155")]
  },
  {
    kicker: "Architecture",
    title: "Architecture Split",
    layout: "architecture-split",
    htmlContent: `<div class="rich-slide-content"><p><strong>Reusable Blocks:</strong></p><ul><li>Separate the story data from the rendering engine.</li><li>Keep layouts declarative and composable.</li><li>Support images, videos, embeds, and diagrams.</li></ul></div>`,
    media: [demoSvg("Layer 1", "e0f2fe", "075985"), demoSvg("Layer 2", "dcfce7", "166534"), demoSvg("Layer 3", "fef9c3", "854d0e")],
    mediaFit: "contain"
  },
  {
    kicker: "Integration",
    title: "System Split",
    layout: "robot-system-split",
    htmlContent: `<div class="rich-slide-content robot-slide-content"><ol><li><strong>Choose the right building blocks</strong><ol type="a"><li>Reliable</li><li>Reusable</li><li>Easy to explain</li></ol></li><li><strong>Coordinate between systems</strong><ol type="a"><li>Events</li><li>State</li><li>Feedback</li></ol></li></ol></div>`,
    media: [demoSvg("System A", "fef2f2", "991b1b"), demoSvg("System B", "eff6ff", "1d4ed8"), demoSvg("System C", "f0fdf4", "15803d")],
    mediaFit: "contain"
  },
  { kicker: "Gallery", title: "Composed Image Grid", layout: "fold-seal-composition", media: [demoSvg("A", "fee2e2", "7f1d1d"), demoSvg("B", "dbeafe", "1e3a8a"), demoSvg("C", "dcfce7", "14532d"), demoSvg("D", "fef3c7", "78350f")], mediaFit: "contain" },
  { kicker: "Compare", title: "Before and After", layout: "fold-seal-compare", compareItems: [{ image: demoSvg("Before", "f3f4f6", "374151"), caption: "Before" }, { image: demoSvg("After", "ecfdf5", "065f46"), caption: "After" }], mediaFit: "contain" },
  { kicker: "Sequence", title: "Animated Step Flow", layout: "balloon-final-flow", media: [] },
  { kicker: "Details", title: "Part Selection", layout: "part-selection-split", htmlContent: `<div class="rich-slide-content part-selection-content"><p><strong>Inputs</strong></p><ul><li>Hardware</li><li>Software</li><li>Constraints</li></ul><p><strong>Outputs</strong></p><ul><li>Interface</li><li>Validation</li><li>Documentation</li></ul></div>`, media: [demoSvg("Input", "eff6ff", "1d4ed8"), demoSvg("Logic", "fef9c3", "854d0e"), demoSvg("Output", "f0fdf4", "15803d"), demoSvg("Docs", "faf5ff", "7e22ce")], mediaFit: "contain" },
  { kicker: "Software", title: "Code Architecture", layout: "code-architecture", htmlContent: `<div class="rich-slide-content code-structure-content"><ul><li>A single orchestrator coordinates the top-level story.</li><li>Parallel modules own their own state and rendering.</li><li>Reusable helpers keep the deck portable.</li></ul></div>`, media: [] },
  { kicker: "Program", title: "Program Split", layout: "robot-program-split", htmlContent: `<div class="rich-slide-content robot-program-content"><p><strong>Module 1</strong></p><ul><li>Input handling</li><li>State tracking</li></ul><p><strong>Module 2</strong></p><ul><li>Rendering</li><li>Animation</li></ul></div>`, media: [demoSvg("Module A", "f1f5f9", "0f172a"), demoSvg("Module B", "fef2f2", "7f1d1d"), demoSvg("Module C", "ecfdf5", "065f46")], mediaFit: "contain" },
  { kicker: "Control", title: "Step Logic", layout: "vent-hole-clocking", htmlContent: `<div class="rich-slide-content vhc-content"><ol><li>Measure the current state.</li><li>Calculate the difference.</li><li>Apply the shortest safe move.</li><li>Verify the final state.</li></ol></div>`, media: [demoSvg("Measure", "e0f2fe", "0369a1"), demoSvg("Plan", "fef9c3", "a16207"), demoSvg("Verify", "dcfce7", "166534")], mediaFit: "contain" },
  { kicker: "Process", title: "PID Control", layout: "pid-control-split", htmlContent: `<div class="rich-slide-content pid-control-content"><ul><li>Track a setpoint.</li><li>React to feedback.</li><li>Protect against runaway conditions.</li></ul></div>`, media: [demoSvg("Trend", "f8fafc", "334155"), demoSvg("Loop", "eef2ff", "3730a3")], mediaFit: "contain" },
  { kicker: "Impact", title: "Results and Impact", layout: "results-impact-split", htmlContent: `<div class="rich-slide-content results-impact-content"><p><strong>Result:</strong></p><ul><li>Clearer story flow.</li><li>Reusable layout system.</li><li>Portable static hosting.</li></ul></div>`, media: [demoSvg("Outcome", "f0fdf4", "14532d")], mediaFit: "contain" },
  { kicker: "Closing", title: "Thank you", layout: "closing-qna", subtitle: "Q&A", media: [] }
];
function isVideo(path) {
  const lower = path.toLowerCase();
  return lower.endsWith(".mp4") || lower.endsWith(".webm") || lower.endsWith(".ogg");
}

function isGif(path) {
  return path.toLowerCase().endsWith(".gif");
}

const mediaFallbacks = {};

const preloadedMedia = new Set();
const retainedMedia = new Map();
let hasStartedBackgroundPreload = false;

// ── PAN / ZOOM ────────────────────────────────────────────────────────────────
// Per-image pan/zoom state. Key = img src attribute (root-relative path).
// Persisted to localStorage so state survives tab close / browser restart.
const pzState = new Map();     // srcKey -> {s, tx, ty}
const pzBound = new WeakSet(); // frame elements that already have listeners
let pzDrag = null; // active drag: {frame,srcKey,startX,startY,startTx,startTy,ratio}

// URL share state includes slide index + all non-default pan/zoom states.
// If URL has no pz payload, we apply this deck default for everyone.
const DEFAULT_SHARED_SLIDE = 0;
const DEFAULT_SHARED_PZ_B64 =
  "eyIvc2xpZGVzL2Fzc2V0cy9yYW5pL3NsaWRlLTEzX2ltYWdlXzIucG5nIjp7InMiOjEuNzQ5MDA2MjQ5OTk5OTk5NCwidHgiOi0xOTMuNzg0ODExNzA2ODc1OSwidHkiOi0xNDAuMDA3ODY0OTI1NDAwNzJ9LCIvc2xpZGVzL2Fzc2V0cy9yYW5pL3NsaWRlLTEzX2ltYWdlXzEucG5nIjp7InMiOjEuMzIyNDk5OTk5OTk5OTk5OCwidHgiOi0xNS4xMzMyNzUzNzM5ODk1OSwidHkiOi00Mi4wNDIyOTM5ODgxOTg2fSwiL3NsaWRlcy9hc3NldHMvcmFuaS9zbGlkZS0xM19pbWFnZV8zLnBuZyI6eyJzIjoxLjUyMDg3NDk5OTk5OTk5OTUsInR4IjotMTIwLjE5NTIxNTg4NTY1Mjk0LCJ0eSI6LTgxLjIzMjY0ODgwNjMwMDk5fSwiL3NsaWRlcy9hc3NldHMvcmFuaS9zbGlkZS05X2ltYWdlXzEucG5nIjp7InMiOjEuNzQ5MDA2MjQ5OTk5OTk5NCwidHgiOi02OS41NTQzNjUwMTMwNTE1LCJ0eSI6LTg2Ljg1NzI4MjIwOTM1MzQ2fSwiL3NsaWRlcy9hc3NldHMvcmFuaS9zbGlkZS05X2ltYWdlXzIucG5nIjp7InMiOjEuMTUsInR4IjotNDguNTc0NTYyODUwOTcxOTE1LCJ0eSI6LTQwLjEwMjAxMTQ0NzA4NDE4fSwiL3NsaWRlcy9hc3NldHMvcmFuaS9zbGlkZS05X2ltYWdlXzMucG5nIjp7InMiOjEuMzIyNDk5OTk5OTk5OTk5OCwidHgiOi00My45NDU2Njc0NTE0NjMyMSwidHkiOi02Ni44ODM3ODk3ODA2MjA1NX0sIi9zbGlkZXMvYXNzZXRzL3Jhbmkvc2xpZGUtOV9pbWFnZV80LnBuZyI6eyJzIjoxLjc0OTAwNjI0OTk5OTk5OTQsInR4IjotNDguMTI4OTkyNTgzNzg2NTM0LCJ0eSI6LTE4OC41MTkwNDIzOTU5NjExNX0sIi4uL2ltYWdlcy9tb3dlcl8wMy5qcGciOnsicyI6MS41MjA4NzQ5OTk5OTk5OTk1LCJ0eCI6LTEzOS41MDg5NzE5NzAxNzEyNywidHkiOi0xMTMuNzUzODg3ODE3MTcxMn0sIi4uL2ltYWdlcy93b3JraW5nX3JvYm90cy5qcGciOnsicyI6MS43NDkwMDYyNDk5OTk5OTk0LCJ0eCI6LTIwNy4yNTUyNjg5MTA0NjA5MywidHkiOi0yNzYuMzA5NzczNjk1Mjk2NjZ9LCIvc2xpZGVzL2Fzc2V0cy9yYW5pL3NsaWRlLTE1X2ltYWdlXzEucG5nIjp7InMiOjEuNTIwODc0OTk5OTk5OTk5OCwidHgiOi0xNTkuNDA5Mzc2ODI1Njc1MzQsInR5IjotODkuMzE2MTkwODE3MjUyNDl9LCIvc2xpZGVzL2Fzc2V0cy9yYW5pL3NsaWRlLTE1X2ltYWdlXzMucG5nIjp7InMiOjEuNTIwODc0OTk5OTk5OTk5NSwidHgiOi0xMjguMDM3NjI2ODg1MTc3MDgsInR5IjotNzAuMjk2OTg4Njg5NDA0NzR9fQ==";

// Keep URLs short by default. pz hash is only read (for backward compatibility),
// not continuously re-written during normal browsing.
let persistPzInUrl = false;

function encodeShareState(stateObj) {
  try {
    return btoa(JSON.stringify(stateObj));
  } catch (e) {
    return "";
  }
}

function decodeShareState(encoded) {
  if (!encoded) {
    return null;
  }
  try {
    return JSON.parse(atob(encoded));
  } catch (e) {
    return null;
  }
}

function collectNonDefaultPzState() {
  const payload = {};
  pzState.forEach((state, key) => {
    if (!state || !Number.isFinite(state.s) || !Number.isFinite(state.tx) || !Number.isFinite(state.ty)) {
      return;
    }
    if (state.s === 1 && state.tx === 0 && state.ty === 0) {
      return;
    }
    payload[key] = {
      s: Number(state.s),
      tx: Number(state.tx),
      ty: Number(state.ty),
    };
  });
  return payload;
}

function updateShareUrl(indexOverride = null) {
  const params = new URLSearchParams(window.location.hash.startsWith("#") ? window.location.hash.slice(1) : "");
  const nextIndex = Number.isInteger(indexOverride) ? indexOverride : currentIndex;
  params.set("slide", String(nextIndex));

  if (persistPzInUrl) {
    const serializedPz = encodeShareState(collectNonDefaultPzState());
    if (serializedPz) {
      params.set("pz", serializedPz);
    } else {
      params.delete("pz");
    }
  } else {
    params.delete("pz");
  }

  const nextHash = params.toString();
  const nextUrl = `${window.location.pathname}${window.location.search}${nextHash ? `#${nextHash}` : ""}`;
  window.history.replaceState(null, "", nextUrl);
}

function loadShareStateFromUrl() {
  const params = new URLSearchParams(window.location.hash.startsWith("#") ? window.location.hash.slice(1) : "");
  const slideRaw = params.get("slide");
  const parsedSlide = slideRaw !== null ? parseInt(slideRaw, 10) : NaN;

  const pzParam = params.get("pz");
  if (pzParam) {
    persistPzInUrl = true;
  }
  let decodedPz = decodeShareState(pzParam);
  if (!decodedPz) {
    decodedPz = decodeShareState(DEFAULT_SHARED_PZ_B64);
  }
  if (decodedPz && typeof decodedPz === "object") {
    Object.entries(decodedPz).forEach(([srcKey, state]) => {
      if (!state || typeof state !== "object") {
        return;
      }
      const s = Number(state.s);
      const tx = Number(state.tx);
      const ty = Number(state.ty);
      if (!Number.isFinite(s) || !Number.isFinite(tx) || !Number.isFinite(ty)) {
        return;
      }
      pzState.set(srcKey, { s, tx, ty });
    });
  }

  return Number.isFinite(parsedSlide) ? parsedSlide : DEFAULT_SHARED_SLIDE;
}

function resolveMediaPath(path) {
  if (path.startsWith("/")) {
    return path;
  }

  if (path.startsWith("assets/")) {
    return `./${path}`;
  }

  return path;
}

function getFallbackPath(path) {
  const fallback = mediaFallbacks[path];
  return fallback ? resolveMediaPath(fallback) : "";
}

function preloadMedia(path) {
  const resolvedPath = resolveMediaPath(path);

  if (preloadedMedia.has(resolvedPath)) {
    return;
  }

  preloadedMedia.add(resolvedPath);

  if (isVideo(resolvedPath)) {
    return;
  }

  const image = new Image();
  image.src = resolvedPath;
  retainedMedia.set(resolvedPath, image);
}

function collectSlideMediaPaths(index) {
  const slide = slides[index];

  if (!slide || !slide.media) {
    return [];
  }

  const paths = [...slide.media];

  slide.media.forEach((path) => {
    const fallbackPath = mediaFallbacks[path];
    if (fallbackPath) {
      paths.push(fallbackPath);
    }
  });

  return paths;
}

function preloadNearbySlides(index) {
  for (let offset = 0; offset <= 1; offset += 1) {
    const targetIndex = index + offset;

    if (targetIndex < 0 || targetIndex >= slides.length) {
      continue;
    }

    collectSlideMediaPaths(targetIndex).forEach((path) => {
      preloadMedia(path);
    });
  }
}

function preloadAllSlidesInBackground() {
  if (hasStartedBackgroundPreload) {
    return;
  }

  hasStartedBackgroundPreload = true;

  const queue = slides.flatMap((_, index) => collectSlideMediaPaths(index));
  let queueIndex = 0;

  const runChunk = () => {
    const chunkSize = 3;
    const end = Math.min(queueIndex + chunkSize, queue.length);

    for (let current = queueIndex; current < end; current += 1) {
      preloadMedia(queue[current]);
    }

    queueIndex = end;

    if (queueIndex >= queue.length) {
      return;
    }

    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(runChunk, { timeout: 800 });
      return;
    }

    window.setTimeout(runChunk, 120);
  };

  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(runChunk, { timeout: 600 });
    return;
  }

  window.setTimeout(runChunk, 180);
}

function markMediaReady(frame) {
  frame.classList.add("is-ready");
}

const gifReplayMsByPath = {};

function ensureGifLoopsForever(asset) {
  if (asset.dataset.loopReplayBound === "true") {
    return;
  }

  // Use getAttribute("src") (raw attribute, stays root-relative) instead of
  // asset.src (IDL property) which the browser resolves to an absolute URL
  // embedding the current dev-server port. Storing an absolute URL breaks
  // replay if the server port changes between sessions.
  const src = asset.getAttribute("src") || asset.currentSrc || asset.src;
  if (!src || !src.toLowerCase().includes(".gif")) {
    return;
  }

  asset.dataset.loopReplayBound = "true";
  const replayMs = gifReplayMsByPath[src] || 18000;

  const replay = () => {
    if (!asset.isConnected) {
      return;
    }

    // Normalize any previously-stored absolute URL to a root-relative path so
    // replay keeps working if the dev server port has changed.
    let original = asset.dataset.gifOriginalSrc || src;
    if (/^https?:\/\//.test(original)) {
      original = new URL(original).pathname;
    }
    asset.dataset.gifOriginalSrc = original;

    // Build a fully-decoded replacement off-screen, then swap it into
    // the DOM atomically so the old frame stays visible the entire time.
    const freshUrl = original + (original.includes("?") ? "&" : "?") + "_r=" + Date.now();
    const next = new Image();
    next.src = freshUrl;
    next.onload = () => {
      next.decode().then(() => {
        if (!asset.isConnected) return;
        // Copy over all relevant attributes / state from the old element.
        next.className = asset.className;
        next.style.cssText = asset.style.cssText;
        next.dataset.loopReplayBound = "true";
        next.dataset.gifOriginalSrc = original;
        asset.replaceWith(next);
        // Re-bind pan/zoom on the new element.
        const frame = next.closest(".media-frame");
        if (frame) {
          pzBound.delete(frame);
          initPanZoom(frame, next, original);
        }
        // Continue the cycle with the new element.
        asset = next;
      }).catch(() => {});
    };
    next.onerror = () => {};

    window.setTimeout(replay, replayMs);
  };

  window.setTimeout(replay, replayMs);
}

// ── Pan/zoom helpers ──────────────────────────────────────────────────────────

function loadPzState(srcKey) {
  if (pzState.has(srcKey)) return pzState.get(srcKey);
  try {
    const raw = localStorage.getItem("pz:" + srcKey);
    if (raw) {
      const parsed = JSON.parse(raw);
      pzState.set(srcKey, parsed);
      return parsed;
    }
  } catch (e) {}
  const def = { s: 1, tx: 0, ty: 0 };
  pzState.set(srcKey, def);
  return def;
}

function applyPzTransform(img, state) {
  img.style.transformOrigin = "0 0";
  if (state.s === 1 && state.tx === 0 && state.ty === 0) {
    img.style.transform = "";
  } else {
    img.style.transform = `translate(${state.tx}px, ${state.ty}px) scale(${state.s})`;
  }
}

function initPanZoom(frame, img, srcKey) {
  // Restore saved state onto whichever element is now in the frame.
  const state = loadPzState(srcKey);
  applyPzTransform(img, state);

  // Listeners are bound to the frame element once. Frames are recreated on each
  // renderSlide, so pzBound being a WeakSet is just a small guard against the
  // (unlikely) case where hydrateRenderedMedia is called twice on the same frame.
  if (pzBound.has(frame)) return;
  pzBound.add(frame);
  frame.style.cursor = "grab";

  // Scroll to zoom toward the cursor.
  frame.addEventListener("wheel", (e) => {
    e.preventDefault();
    const currentImg = frame.querySelector("img.media-asset");
    if (!currentImg) return;
    const key = currentImg.getAttribute("src") || srcKey;
    const st = loadPzState(key);

    // Convert screen pixels → frame-local CSS pixels (slide has its own scale).
    const rect = frame.getBoundingClientRect();
    const ratio = rect.width / frame.offsetWidth;
    const mxL = (e.clientX - rect.left) / ratio;
    const myL = (e.clientY - rect.top) / ratio;

    const factor = e.deltaY < 0 ? 1.15 : 1 / 1.15;
    const newS = Math.max(0.5, Math.min(12, st.s * factor));
    // Keep the point under the cursor fixed in frame-local space.
    const newTx = mxL - (mxL - st.tx) * newS / st.s;
    const newTy = myL - (myL - st.ty) * newS / st.s;

    const ns = { s: newS, tx: newTx, ty: newTy };
    pzState.set(key, ns);
    applyPzTransform(currentImg, ns);
    localStorage.setItem("pz:" + key, JSON.stringify(ns));
    updateShareUrl();
  }, { passive: false });

  // Drag to pan — uses shared global pzDrag so we only need one window listener.
  frame.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    const currentImg = frame.querySelector("img.media-asset");
    if (!currentImg) return;
    const key = currentImg.getAttribute("src") || srcKey;
    const st = loadPzState(key);
    const rect = frame.getBoundingClientRect();
    pzDrag = {
      frame,
      srcKey: key,
      startX: e.clientX,
      startY: e.clientY,
      startTx: st.tx,
      startTy: st.ty,
      ratio: rect.width / frame.offsetWidth,
      didDrag: false,
    };
    frame.style.cursor = "grabbing";
    e.preventDefault();
  });

  // Double-click to reset pan/zoom.
  frame.addEventListener("dblclick", () => {
    const currentImg = frame.querySelector("img.media-asset");
    if (!currentImg) return;
    const key = currentImg.getAttribute("src") || srcKey;
    const reset = { s: 1, tx: 0, ty: 0 };
    pzState.set(key, reset);
    applyPzTransform(currentImg, reset);
    localStorage.removeItem("pz:" + key);
    frame.style.cursor = "grab";
    updateShareUrl();
  });
}
// as the frame background. This reliably finds the image's background color
// whether it's white (diagrams), dark (HMI screenshots), or any other tone.
function sampleFrameBgFromImage(img, frame) {
  // Skip GIFs — animated frames give unreliable corner samples and the
  // dark sampled colour ends up bleeding through when the GIF is reloading.
  const imgSrc = (img.getAttribute("src") || img.src || "").split("?")[0];
  if (imgSrc.toLowerCase().endsWith(".gif")) return;

  try {
    const SIZE = 16;
    const canvas = document.createElement("canvas");
    canvas.width = SIZE;
    canvas.height = SIZE;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    // Fill with the card colour first so transparent areas don't go black.
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, SIZE, SIZE);
    ctx.drawImage(img, 0, 0, SIZE, SIZE);

    const S = SIZE - 3; // offset from far edges
    const clusters = [
      ctx.getImageData(0, 0, 2, 2).data,   // top-left
      ctx.getImageData(S, 0, 2, 2).data,   // top-right
      ctx.getImageData(0, S, 2, 2).data,   // bottom-left
      ctx.getImageData(S, S, 2, 2).data,   // bottom-right
    ];

    // Average the 4 pixels inside each 2x2 cluster
    const avgCluster = (d) => [
      Math.round((d[0] + d[4] + d[8] + d[12]) / 4),
      Math.round((d[1] + d[5] + d[9] + d[13]) / 4),
      Math.round((d[2] + d[6] + d[10] + d[14]) / 4),
    ];
    const colors = clusters.map(avgCluster);

    // Sort by perceived luma — background is almost always the lightest region
    const luma = ([r, g, b]) => 0.299 * r + 0.587 * g + 0.114 * b;
    colors.sort((a, b) => luma(b) - luma(a));

    // Average the two lightest corners to get a stable background colour
    const r = Math.round((colors[0][0] + colors[1][0]) / 2);
    const g = Math.round((colors[0][1] + colors[1][1]) / 2);
    const b = Math.round((colors[0][2] + colors[1][2]) / 2);
    frame.style.background = `rgb(${r}, ${g}, ${b})`;
    // Also clear the img's own background so the frame colour shows in letterbox/pillarbox areas.
    img.style.background = "transparent";
  } catch (e) {
    // CORS or security error — leave the CSS default
  }
}

function hydrateRenderedMedia(container) {
  const frames = container.querySelectorAll(".media-frame");

  frames.forEach((frame) => {
    const asset = frame.querySelector(".media-asset");

    if (!asset) {
      return;
    }

    // Try to swap in the pre-loaded retained element so media appears instantly.
    // asset.getAttribute("src") is the raw path that matches retainedMedia keys.
    const srcKey = asset.getAttribute("src");
    const retained = retainedMedia.get(srcKey);

    if (retained && retained !== asset) {
      // Transfer the CSS class so layout / styling stays correct.
      retained.className = asset.className;

      if (retained.tagName === "VIDEO") {
        // Copy playback attributes the retained clone wasn't created with.
        retained.autoplay = true;
        retained.loop = true;
        retained.muted = true;
        retained.playsInline = true;
        asset.replaceWith(retained);

        if (retained.readyState >= 2) {
          retained.play().catch(() => {});
          markMediaReady(frame);
          return;
        }

        retained.addEventListener("loadeddata", () => {
          retained.play().catch(() => {});
          markMediaReady(frame);
        }, { once: true });
        return;
      }

      if (retained.tagName === "IMG") {
        asset.replaceWith(retained);
        initPanZoom(frame, retained, srcKey);

        const onDecoded = () => {
          markMediaReady(frame);
          sampleFrameBgFromImage(retained, frame);
          ensureGifLoopsForever(retained);
        };

        if (retained.complete && retained.naturalWidth > 0) {
          // Data downloaded — wait for pixel decode before revealing.
          retained.decode().then(onDecoded).catch(onDecoded);
          return;
        }

        retained.addEventListener("load", () => {
          retained.decode().then(onDecoded).catch(onDecoded);
        }, { once: true });
        return;
      }
    }

    // Fallback: no retained element yet — use the rendered element directly.
    if (asset.tagName === "IFRAME") {
      markMediaReady(frame);
      return;
    }

    if (asset.tagName === "VIDEO") {
      if (asset.readyState >= 2) {
        markMediaReady(frame);
        return;
      }

      asset.addEventListener("loadeddata", () => markMediaReady(frame), { once: true });
      return;
    }

    initPanZoom(frame, asset, srcKey);

    const onFallbackDecoded = () => {
      markMediaReady(frame);
      sampleFrameBgFromImage(asset, frame);
      ensureGifLoopsForever(asset);
    };

    if (asset.complete && asset.naturalWidth > 0) {
      asset.decode().then(onFallbackDecoded).catch(onFallbackDecoded);
      return;
    }

    asset.addEventListener("load", () => {
      asset.decode().then(onFallbackDecoded).catch(onFallbackDecoded);
    }, { once: true });
  });
}

function renderMedia(paths, options = {}) {
  if (!paths || paths.length === 0) {
    return "";
  }

  const mediaFitClass = options.mediaFit === "contain" ? " media-fit-contain" : "";
  const mediaFillClass = options.mediaFill ? " media-fill" : "";

  const mediaNodes = paths
    .map((path) => {
      const resolvedPath = resolveMediaPath(path);
      const fallbackPath = getFallbackPath(path);
      if (isVideo(resolvedPath)) {
        return `
          <div class="media-frame is-loading">
            <div class="media-placeholder">Loading media...</div>
            <video class="media-asset" src="${resolvedPath}" autoplay loop muted playsinline preload="metadata"${fallbackPath ? ` poster="${fallbackPath}"` : ""}></video>
          </div>
        `;
      }

      if (isGif(resolvedPath) && fallbackPath) {
        return `
          <div class="media-frame is-loading">
            <img class="media-poster" src="${fallbackPath}" alt="Slide preview">
            <div class="media-placeholder">Loading media...</div>
            <img class="media-asset" src="${resolvedPath}" alt="Slide media">
          </div>
        `;
      }

      return `
        <div class="media-frame is-loading">
          <div class="media-placeholder">Loading media...</div>
          <img class="media-asset" src="${resolvedPath}" alt="Slide media">
        </div>
      `;
    })
    .join("");

  return `<aside class="media-grid${mediaFitClass}${mediaFillClass}">${mediaNodes}</aside>`;
}

function renderBullets(items) {
  if (!items || items.length === 0) {
    return "";
  }

  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderTimelineSlide(slide) {
  const timelineItems = slide.items || [];
  const lastIndex = timelineItems.length - 1;

  const items = timelineItems
    .map((item, idx) => {
      const isLast = idx === lastIndex;
      const clipSrc = item.clip ? resolveMediaPath(item.clip) : "";
      return `
        <div class="tl-col" style="--tl-i:${idx}" data-clip="${clipSrc}">
          <div class="tl-rail-segment">
            <div class="tl-dot"></div>
            ${!isLast ? '<div class="tl-line"></div>' : ""}
          </div>
          <div class="tl-card">
            <div class="tl-logo-wrap">
              <img class="tl-logo" src="${resolveMediaPath(item.logo)}" alt="${item.company} logo">
            </div>
            <h3 class="tl-company">${item.company}</h3>
            <p class="tl-role">${item.role}</p>
            <span class="tl-dates">${item.range || ""}</span>
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <section class="timeline-slide-layout">
      <header class="timeline-slide-header">
        <p class="kicker">${slide.kicker}</p>
        <h2>${slide.title}</h2>
      </header>
      <div class="tl-memory-viewport">
        <svg width="0" height="0" aria-hidden="true" style="position:fixed">
          <filter id="tl-dither-fade">
            <feMorphology radius="42" />
            <feGaussianBlur stdDeviation="16" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="2.8" />
            <feDisplacementMap in="blur" scale="22" />
            <feComposite in="SourceGraphic" operator="in" />
          </filter>
        </svg>
        <div class="tl-memory-overlay">
          <video class="tl-memory-video" muted loop playsinline preload="metadata"></video><div class="tl-memory-label"></div>
        </div>
        <div class="tl-track">
          ${items}
        </div>
      </div>
    </section>
  `;
}

function renderIntroSlide(slide) {
  const primaryImage = slide.media && slide.media.length > 0 ? resolveMediaPath(slide.media[0]) : "";

  return `
    <section class="intro-slide-layout">
      <article class="intro-slide-copy">
        <p class="kicker">${slide.kicker}</p>
        <h1>${slide.title}</h1>
        <p class="intro-slide-subtitle">${slide.subtitle || ""}</p>
      </article>
      <aside class="intro-slide-media">
        <div class="media-frame is-loading intro-media-frame">
          <div class="media-placeholder">Loading media...</div>
          <img class="media-asset" src="${primaryImage}" alt="Slide media">
        </div>
      </aside>
    </section>
  `;
}

function renderMediaOnlySlide(slide) {
  const primaryMedia = slide.media && slide.media.length > 0 ? slide.media[0] : "";

  return `
    <section class="media-only-slide-layout">
      <div class="media-only-shell">
        ${renderMedia([primaryMedia], slide)}
      </div>
    </section>
  `;
}

function renderPilotFlowSlide(slide) {
  return `
    <section class="pilot-flow-layout">
      <article class="card pilot-flow-copy">
        <p class="kicker">${slide.kicker}</p>
        <h2>${slide.title}</h2>
        ${renderBullets(slide.bullets)}
      </article>

      <div class="pilot-flow-diagram" aria-label="Pilot automation line flow">
        <div class="pf-surface">
          <svg class="pf-svg" viewBox="0 0 1040 820" role="img" aria-label="Pilot automation line flow chart">
            <defs>
              <marker id="pf-arrow-blue" markerWidth="6" markerHeight="6" refX="5.2" refY="3" orient="auto">
                <path d="M0.5,0.5 L5.5,3 L0.5,5.5" fill="none" stroke="rgba(99,102,241,0.8)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
              </marker>
              <marker id="pf-arrow-rose" markerWidth="6" markerHeight="6" refX="5.2" refY="3" orient="auto">
                <path d="M0.5,0.5 L5.5,3 L0.5,5.5" fill="none" stroke="rgba(244,63,94,0.7)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
              </marker>
              <marker id="pf-arrow-green" markerWidth="6" markerHeight="6" refX="5.2" refY="3" orient="auto">
                <path d="M0.5,0.5 L5.5,3 L0.5,5.5" fill="none" stroke="rgba(16,185,129,0.7)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
              </marker>
              <marker id="pf-arrow-bridge" markerWidth="6" markerHeight="6" refX="5.2" refY="3" orient="auto">
                <path d="M0.5,0.5 L5.5,3 L0.5,5.5" fill="none" stroke="rgba(100,116,139,0.55)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
              </marker>
              <filter id="pf-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"></feGaussianBlur>
                <feMerge><feMergeNode in="blur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge>
              </filter>
              <linearGradient id="pf-node-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="rgba(255,255,255,0.95)"></stop>
                <stop offset="100%" stop-color="rgba(248,250,252,0.9)"></stop>
              </linearGradient>
            </defs>

            <!-- Legend (inside SVG) -->
            <g class="pf-legend-g" style="animation-delay:0s">
              <rect x="20" y="774" width="320" height="30" rx="15" fill="rgba(248,250,252,0.92)" stroke="rgba(226,232,240,0.6)" stroke-width="0.8"></rect>
              <circle cx="38" cy="789" r="5" fill="rgba(99,102,241,0.12)" stroke="rgba(99,102,241,0.45)" stroke-width="0.8"></circle>
              <text class="pf-legend-label" x="50" y="790">Component Build</text>
              <circle cx="158" cy="789" r="5" fill="rgba(244,63,94,0.1)" stroke="rgba(244,63,94,0.45)" stroke-width="0.8"></circle>
              <text class="pf-legend-label" x="170" y="790">Drug + Device</text>
              <circle cx="262" cy="789" r="5" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.45)" stroke-width="0.8"></circle>
              <text class="pf-legend-label" x="274" y="790">Finish + Release</text>
            </g>

            <!-- Left column nodes -->
            <g class="pf-node-item" style="animation-delay:0.06s">
              <rect class="pf-node-box pf-node-blue" x="30" y="30" width="380" height="108" rx="18"></rect>
              <rect class="pf-badge-bg pf-badge-blue" x="42" y="42" width="36" height="22" rx="11"></rect>
              <text class="pf-step-text pf-step-blue" x="60" y="54">01</text>
              <text class="pf-label-text" x="230" y="90" text-anchor="middle">Microsyringe Assembly</text>
            </g>

            <g class="pf-node-item" style="animation-delay:0.22s">
              <rect class="pf-node-box pf-node-blue" x="30" y="178" width="380" height="108" rx="18"></rect>
              <rect class="pf-badge-bg pf-badge-blue" x="42" y="190" width="36" height="22" rx="11"></rect>
              <text class="pf-step-text pf-step-blue" x="60" y="202">02</text>
              <text class="pf-label-text" x="230" y="238" text-anchor="middle">SD Valve Assembly</text>
            </g>

            <g class="pf-node-item" style="animation-delay:0.38s">
              <rect class="pf-node-box pf-node-blue" x="30" y="326" width="380" height="108" rx="18"></rect>
              <rect class="pf-badge-bg pf-badge-blue" x="42" y="338" width="36" height="22" rx="11"></rect>
              <text class="pf-step-text pf-step-blue" x="60" y="350">03</text>
              <text class="pf-label-text" x="230" y="386" text-anchor="middle">Reaction System</text>
            </g>

            <g class="pf-node-item" style="animation-delay:0.54s">
              <rect class="pf-node-box pf-node-blue" x="30" y="474" width="380" height="108" rx="18"></rect>
              <rect class="pf-badge-bg pf-badge-blue" x="42" y="486" width="36" height="22" rx="11"></rect>
              <text class="pf-step-text pf-step-blue" x="60" y="498">04</text>
              <text class="pf-label-text" x="230" y="534" text-anchor="middle">Balloon Assembly</text>
            </g>

            <!-- Right column nodes -->
            <g class="pf-node-item" style="animation-delay:0.86s">
              <rect class="pf-node-box pf-node-rose" x="630" y="30" width="380" height="108" rx="18"></rect>
              <rect class="pf-badge-bg pf-badge-rose" x="642" y="42" width="36" height="22" rx="11"></rect>
              <text class="pf-step-text pf-step-rose" x="660" y="54">05</text>
              <text class="pf-label-text" x="850" y="78" text-anchor="middle">Chamber + Needle</text>
              <text class="pf-label-text pf-label-sub" x="850" y="100" text-anchor="middle">with Drug</text>
            </g>

            <g class="pf-node-item" style="animation-delay:1.02s">
              <rect class="pf-node-box pf-node-rose" x="630" y="178" width="380" height="108" rx="18"></rect>
              <rect class="pf-badge-bg pf-badge-rose" x="642" y="190" width="36" height="22" rx="11"></rect>
              <text class="pf-step-text pf-step-rose" x="660" y="202">06</text>
              <text class="pf-label-text" x="850" y="226" text-anchor="middle">Device Folding into</text>
              <text class="pf-label-text pf-label-sub" x="850" y="248" text-anchor="middle">Capsule</text>
            </g>

            <g class="pf-node-item" style="animation-delay:1.18s">
              <rect class="pf-node-box pf-node-green" x="630" y="326" width="380" height="108" rx="18"></rect>
              <rect class="pf-badge-bg pf-badge-green" x="642" y="338" width="36" height="22" rx="11"></rect>
              <text class="pf-step-text pf-step-green" x="660" y="350">07</text>
              <text class="pf-label-text" x="850" y="386" text-anchor="middle">Capsule Banding</text>
            </g>

            <g class="pf-node-item" style="animation-delay:1.34s">
              <rect class="pf-node-box pf-node-green" x="630" y="474" width="380" height="108" rx="18"></rect>
              <rect class="pf-badge-bg pf-badge-green" x="642" y="486" width="36" height="22" rx="11"></rect>
              <text class="pf-step-text pf-step-green" x="660" y="498">08</text>
              <text class="pf-label-text" x="850" y="534" text-anchor="middle">Enteric Coating</text>
            </g>

            <g class="pf-node-item" style="animation-delay:1.50s">
              <rect class="pf-node-box pf-node-green" x="630" y="622" width="380" height="108" rx="18"></rect>
              <rect class="pf-badge-bg pf-badge-green" x="642" y="634" width="36" height="22" rx="11"></rect>
              <text class="pf-step-text pf-step-green" x="660" y="646">09</text>
              <text class="pf-label-text" x="850" y="682" text-anchor="middle">Packaging / Labeling</text>
            </g>

            <!-- Connectors -->
            <g class="pf-conn-group">
              <path class="pf-conn pf-conn-blue" style="animation-delay:0.14s" d="M220 138 V178" marker-end="url(#pf-arrow-blue)"></path>
              <path class="pf-conn pf-conn-blue" style="animation-delay:0.30s" d="M220 286 V326" marker-end="url(#pf-arrow-blue)"></path>
              <path class="pf-conn pf-conn-blue" style="animation-delay:0.46s" d="M220 434 V474" marker-end="url(#pf-arrow-blue)"></path>

              <path class="pf-conn pf-conn-bridge" style="animation-delay:0.70s" d="M220 582 V670 L590 670 V84 H630" marker-end="url(#pf-arrow-bridge)"></path>

              <path class="pf-conn pf-conn-rose" style="animation-delay:0.94s" d="M820 138 V178" marker-end="url(#pf-arrow-rose)"></path>
              <path class="pf-conn pf-conn-green" style="animation-delay:1.10s" d="M820 286 V326" marker-end="url(#pf-arrow-green)"></path>
              <path class="pf-conn pf-conn-green" style="animation-delay:1.26s" d="M820 434 V474" marker-end="url(#pf-arrow-green)"></path>
              <path class="pf-conn pf-conn-green" style="animation-delay:1.42s" d="M820 582 V622" marker-end="url(#pf-arrow-green)"></path>
            </g>

            <!-- Animated carrier pulse -->
            <g class="pf-carrier-layer" aria-hidden="true">
              <path id="pf-carrier-s1" class="pf-carrier-route" d="M220 138 V178"></path>
              <path id="pf-carrier-s2" class="pf-carrier-route" d="M220 286 V326"></path>
              <path id="pf-carrier-s3" class="pf-carrier-route" d="M220 434 V474"></path>
              <path id="pf-carrier-s4" class="pf-carrier-route" d="M220 582 V670 L590 670 V84 H630"></path>
              <path id="pf-carrier-s5" class="pf-carrier-route" d="M820 138 V178"></path>
              <path id="pf-carrier-s6" class="pf-carrier-route" d="M820 286 V326"></path>
              <path id="pf-carrier-s7" class="pf-carrier-route" d="M820 434 V474"></path>
              <path id="pf-carrier-s8" class="pf-carrier-route" d="M820 582 V622"></path>

              <circle class="pf-carrier-core" r="4">
                <animateMotion id="pfCarrierS1" dur="0.5s" begin="1.8s;pfCarrierS8.end+0.8s" fill="freeze" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                  <mpath href="#pf-carrier-s1"></mpath>
                </animateMotion>
                <animateMotion id="pfCarrierS2" dur="0.5s" begin="pfCarrierS1.end+0.08s" fill="freeze" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                  <mpath href="#pf-carrier-s2"></mpath>
                </animateMotion>
                <animateMotion id="pfCarrierS3" dur="0.5s" begin="pfCarrierS2.end+0.08s" fill="freeze" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                  <mpath href="#pf-carrier-s3"></mpath>
                </animateMotion>
                <animateMotion id="pfCarrierS4" dur="1.6s" begin="pfCarrierS3.end+0.08s" fill="freeze" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                  <mpath href="#pf-carrier-s4"></mpath>
                </animateMotion>
                <animateMotion id="pfCarrierS5" dur="0.5s" begin="pfCarrierS4.end+0.08s" fill="freeze" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                  <mpath href="#pf-carrier-s5"></mpath>
                </animateMotion>
                <animateMotion id="pfCarrierS6" dur="0.5s" begin="pfCarrierS5.end+0.08s" fill="freeze" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                  <mpath href="#pf-carrier-s6"></mpath>
                </animateMotion>
                <animateMotion id="pfCarrierS7" dur="0.5s" begin="pfCarrierS6.end+0.08s" fill="freeze" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                  <mpath href="#pf-carrier-s7"></mpath>
                </animateMotion>
                <animateMotion id="pfCarrierS8" dur="0.5s" begin="pfCarrierS7.end+0.08s" fill="freeze" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                  <mpath href="#pf-carrier-s8"></mpath>
                </animateMotion>
                <animate attributeName="opacity" dur="0.5s" begin="1.8s;pfCarrierS8.end+0.8s" values="0;1;1;0.2" keyTimes="0;0.1;0.85;1"></animate>
                <animate attributeName="opacity" dur="0.5s" begin="pfCarrierS1.end+0.08s" values="0;1;1;0.2" keyTimes="0;0.1;0.85;1"></animate>
                <animate attributeName="opacity" dur="0.5s" begin="pfCarrierS2.end+0.08s" values="0;1;1;0.2" keyTimes="0;0.1;0.85;1"></animate>
                <animate attributeName="opacity" dur="1.6s" begin="pfCarrierS3.end+0.08s" values="0;1;1;0.2" keyTimes="0;0.04;0.96;1"></animate>
                <animate attributeName="opacity" dur="0.5s" begin="pfCarrierS4.end+0.08s" values="0;1;1;0.2" keyTimes="0;0.1;0.85;1"></animate>
                <animate attributeName="opacity" dur="0.5s" begin="pfCarrierS5.end+0.08s" values="0;1;1;0.2" keyTimes="0;0.1;0.85;1"></animate>
                <animate attributeName="opacity" dur="0.5s" begin="pfCarrierS6.end+0.08s" values="0;1;1;0.2" keyTimes="0;0.1;0.85;1"></animate>
                <animate attributeName="opacity" dur="0.5s" begin="pfCarrierS7.end+0.08s" values="0;1;1;0.2" keyTimes="0;0.1;0.85;1"></animate>
              </circle>
            </g>
          </svg>
        </div>
      </div>
    </section>
  `;
}

function renderCodeArchitectureSlide(slide) {
  return `
    <section class="code-architecture-layout">
      <article class="card code-architecture-copy">
        <p class="kicker">${slide.kicker}</p>
        <h2>${slide.title}</h2>
        ${slide.htmlContent}
      </article>
      <aside class="code-architecture-diagram" aria-label="Code architecture layered diagram">
        <div class="cad-shell">
          <svg class="cad-svg" viewBox="0 0 1000 920" role="img" aria-label="Top-down code architecture: orchestrator, state machines, function blocks, and hardware interfaces">
            <defs>
              <marker id="cad-arrow" markerWidth="6" markerHeight="6" refX="5.2" refY="3" orient="auto">
                <path d="M0.5,0.5 L5.5,3 L0.5,5.5" fill="none" stroke="rgba(99,102,241,0.65)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
              </marker>
              <marker id="cad-arrow-gray" markerWidth="5" markerHeight="5" refX="4.2" refY="2.5" orient="auto">
                <path d="M0.5,0.5 L4.5,2.5 L0.5,4.5" fill="none" stroke="rgba(148,163,184,0.55)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
              </marker>
              <filter id="cad-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"></feGaussianBlur>
                <feMerge><feMergeNode in="blur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge>
              </filter>
              <linearGradient id="cad-node-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="rgba(255,255,255,0.96)"></stop>
                <stop offset="100%" stop-color="rgba(248,250,252,0.92)"></stop>
              </linearGradient>
            </defs>

            <!-- Layer guides -->
            <g class="cad-layer-guides">
              <line class="cad-layer-line" x1="120" y1="28" x2="970" y2="28"></line>
              <rect class="cad-layer-tag-box" x="16" y="14" width="88" height="26" rx="13"></rect>
              <text class="cad-layer-tag-text" x="60" y="28" text-anchor="middle">L1</text>

              <line class="cad-layer-line" x1="120" y1="190" x2="970" y2="190"></line>
              <rect class="cad-layer-tag-box" x="16" y="176" width="88" height="26" rx="13"></rect>
              <text class="cad-layer-tag-text" x="60" y="190" text-anchor="middle">L2</text>

              <line class="cad-layer-line" x1="120" y1="350" x2="970" y2="350"></line>
              <rect class="cad-layer-tag-box" x="8" y="336" width="48" height="26" rx="13"></rect>
              <text class="cad-layer-tag-text" x="32" y="350" text-anchor="middle">L3</text>

              <line class="cad-layer-line" x1="120" y1="618" x2="970" y2="618"></line>
              <rect class="cad-layer-tag-box" x="8" y="604" width="48" height="26" rx="13"></rect>
              <text class="cad-layer-tag-text" x="32" y="618" text-anchor="middle">L4</text>
            </g>

            <!-- L1: Orchestrator -->
            <g class="cad-stage cad-stage-1 cad-order-1">
              <rect class="cad-block cad-block-orchestrator" x="180" y="40" width="640" height="106" rx="20"></rect>
              <rect class="cad-badge-bg cad-badge-orch" x="192" y="52" width="90" height="22" rx="11"></rect>
              <text class="cad-badge-text cad-badge-text-orch" x="237" y="64" text-anchor="middle">Orchestrator</text>
              <text class="cad-block-title" x="500" y="84" text-anchor="middle">Main State Machine</text>
              <text class="cad-block-subtitle" x="500" y="108" text-anchor="middle">Start / stop / sync coordinator</text>
            </g>

            <!-- L1→L2 connectors -->
            <path class="cad-link cad-link-draw cad-stage-2 cad-order-1" d="M500 146 V176 H200 V210" marker-end="url(#cad-arrow)"></path>
            <path class="cad-link cad-link-draw cad-stage-2 cad-order-2" d="M500 146 V176 H350 V210" marker-end="url(#cad-arrow)"></path>
            <path class="cad-link cad-link-draw cad-stage-2 cad-order-3" d="M500 146 V210" marker-end="url(#cad-arrow)"></path>
            <path class="cad-link cad-link-draw cad-stage-2 cad-order-4" d="M500 146 V176 H650 V210" marker-end="url(#cad-arrow)"></path>
            <path class="cad-link cad-link-draw cad-stage-2 cad-order-5" d="M500 146 V176 H800 V210" marker-end="url(#cad-arrow)"></path>

            <!-- L2: 5 slave state machines (stations + robot) -->
            <g class="cad-stage cad-stage-3 cad-order-1">
              <rect class="cad-block cad-block-slave" x="131" y="210" width="138" height="110" rx="16"></rect>
              <rect class="cad-badge-bg cad-badge-indigo" x="144" y="220" width="112" height="20" rx="10"></rect>
              <text class="cad-badge-text cad-badge-text-indigo" x="200" y="231" text-anchor="middle">State Machine 1</text>
              <text class="cad-sm-station" x="200" y="260" text-anchor="middle">Station 1</text>
              <text class="cad-sm-label" x="200" y="280" text-anchor="middle">Film / Spacer</text>
              <text class="cad-sm-label" x="200" y="296" text-anchor="middle">MicroSyringe</text>
            </g>
            <g class="cad-stage cad-stage-3 cad-order-2">
              <rect class="cad-block cad-block-slave" x="281" y="210" width="138" height="110" rx="16"></rect>
              <rect class="cad-badge-bg cad-badge-indigo" x="294" y="220" width="112" height="20" rx="10"></rect>
              <text class="cad-badge-text cad-badge-text-indigo" x="350" y="231" text-anchor="middle">State Machine 2</text>
              <text class="cad-sm-station" x="350" y="260" text-anchor="middle">Station 2</text>
              <text class="cad-sm-label" x="350" y="280" text-anchor="middle">Heat Stake</text>
              <text class="cad-sm-label" x="350" y="296" text-anchor="middle">Balloon Pattern</text>
            </g>
            <g class="cad-stage cad-stage-3 cad-order-3">
              <rect class="cad-block cad-block-slave" x="431" y="210" width="138" height="110" rx="16"></rect>
              <rect class="cad-badge-bg cad-badge-indigo" x="444" y="220" width="112" height="20" rx="10"></rect>
              <text class="cad-badge-text cad-badge-text-indigo" x="500" y="231" text-anchor="middle">State Machine 3</text>
              <text class="cad-sm-station" x="500" y="260" text-anchor="middle">Station 3</text>
              <text class="cad-sm-label" x="500" y="280" text-anchor="middle">Heat Stake</text>
              <text class="cad-sm-label" x="500" y="296" text-anchor="middle">Button Seal</text>
            </g>
            <g class="cad-stage cad-stage-3 cad-order-4">
              <rect class="cad-block cad-block-slave" x="581" y="210" width="138" height="110" rx="16"></rect>
              <rect class="cad-badge-bg cad-badge-indigo" x="594" y="220" width="112" height="20" rx="10"></rect>
              <text class="cad-badge-text cad-badge-text-indigo" x="650" y="231" text-anchor="middle">State Machine 4</text>
              <text class="cad-sm-station" x="650" y="260" text-anchor="middle">Station 4</text>
              <text class="cad-sm-label" x="650" y="280" text-anchor="middle">Laser Cut</text>
              <text class="cad-sm-label" x="650" y="296" text-anchor="middle">Clip Hole</text>
            </g>
            <g class="cad-stage cad-stage-3 cad-order-5">
              <rect class="cad-block cad-block-slave cad-block-robot" x="731" y="210" width="138" height="110" rx="16"></rect>
              <rect class="cad-badge-bg cad-badge-violet" x="744" y="220" width="112" height="20" rx="10"></rect>
              <text class="cad-badge-text cad-badge-text-violet" x="800" y="231" text-anchor="middle">State Machine 5</text>
              <text class="cad-sm-station" x="800" y="260" text-anchor="middle">Robot</text>
              <text class="cad-sm-label" x="800" y="280" text-anchor="middle">Motion Program</text>
              <text class="cad-sm-label" x="800" y="296" text-anchor="middle">Pick &amp; Place</text>
            </g>

            <!-- L2: Sequential step indicators on left edge of each state machine -->
            <g class="cad-stage cad-stage-3 cad-seq-indicators" aria-hidden="true">
              <!-- SM1 left edge x=131, block y=210 h=110 rx=16 → rail from y=226 to y=304 -->
              <line class="cad-seq-rail" x1="131" y1="226" x2="131" y2="304"></line>
              <circle class="cad-seq-stop" cx="131" cy="226" r="3"></circle>
              <circle class="cad-seq-stop" cx="131" cy="252" r="3"></circle>
              <circle class="cad-seq-stop" cx="131" cy="278" r="3"></circle>
              <circle class="cad-seq-stop" cx="131" cy="304" r="3"></circle>
              <circle class="cad-seq-active" cx="131" r="4.5">
                <animate id="seq1" attributeName="cy" dur="2s" begin="cadPulseArrive.end" fill="freeze" values="226;226;252;252;278;278;304;304" keyTimes="0;0.05;0.15;0.3;0.4;0.55;0.65;1" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"></animate>
                <animate attributeName="opacity" dur="2s" begin="cadPulseArrive.end" fill="freeze" values="0;1;1;1;1;1;1;0.3" keyTimes="0;0.05;0.15;0.4;0.55;0.65;0.92;1"></animate>
              </circle>

              <!-- SM2 left edge x=281 -->
              <line class="cad-seq-rail" x1="281" y1="226" x2="281" y2="304"></line>
              <circle class="cad-seq-stop" cx="281" cy="226" r="3"></circle>
              <circle class="cad-seq-stop" cx="281" cy="252" r="3"></circle>
              <circle class="cad-seq-stop" cx="281" cy="278" r="3"></circle>
              <circle class="cad-seq-stop" cx="281" cy="304" r="3"></circle>
              <circle class="cad-seq-active" cx="281" r="4.5">
                <animate attributeName="cy" dur="2s" begin="seq1.begin+0.15s" fill="freeze" values="226;226;252;252;278;278;304;304" keyTimes="0;0.05;0.15;0.3;0.4;0.55;0.65;1" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"></animate>
                <animate attributeName="opacity" dur="2s" begin="seq1.begin+0.15s" fill="freeze" values="0;1;1;1;1;1;1;0.3" keyTimes="0;0.05;0.15;0.4;0.55;0.65;0.92;1"></animate>
              </circle>

              <!-- SM3 left edge x=431 -->
              <line class="cad-seq-rail" x1="431" y1="226" x2="431" y2="304"></line>
              <circle class="cad-seq-stop" cx="431" cy="226" r="3"></circle>
              <circle class="cad-seq-stop" cx="431" cy="252" r="3"></circle>
              <circle class="cad-seq-stop" cx="431" cy="278" r="3"></circle>
              <circle class="cad-seq-stop" cx="431" cy="304" r="3"></circle>
              <circle class="cad-seq-active" cx="431" r="4.5">
                <animate attributeName="cy" dur="2s" begin="seq1.begin+0.30s" fill="freeze" values="226;226;252;252;278;278;304;304" keyTimes="0;0.05;0.15;0.3;0.4;0.55;0.65;1" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"></animate>
                <animate attributeName="opacity" dur="2s" begin="seq1.begin+0.30s" fill="freeze" values="0;1;1;1;1;1;1;0.3" keyTimes="0;0.05;0.15;0.4;0.55;0.65;0.92;1"></animate>
              </circle>

              <!-- SM4 left edge x=581 -->
              <line class="cad-seq-rail" x1="581" y1="226" x2="581" y2="304"></line>
              <circle class="cad-seq-stop" cx="581" cy="226" r="3"></circle>
              <circle class="cad-seq-stop" cx="581" cy="252" r="3"></circle>
              <circle class="cad-seq-stop" cx="581" cy="278" r="3"></circle>
              <circle class="cad-seq-stop" cx="581" cy="304" r="3"></circle>
              <circle class="cad-seq-active" cx="581" r="4.5">
                <animate attributeName="cy" dur="2s" begin="seq1.begin+0.45s" fill="freeze" values="226;226;252;252;278;278;304;304" keyTimes="0;0.05;0.15;0.3;0.4;0.55;0.65;1" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"></animate>
                <animate attributeName="opacity" dur="2s" begin="seq1.begin+0.45s" fill="freeze" values="0;1;1;1;1;1;1;0.3" keyTimes="0;0.05;0.15;0.4;0.55;0.65;0.92;1"></animate>
              </circle>

              <!-- SM5 left edge x=731 -->
              <line class="cad-seq-rail" x1="731" y1="226" x2="731" y2="304"></line>
              <circle class="cad-seq-stop" cx="731" cy="226" r="3"></circle>
              <circle class="cad-seq-stop" cx="731" cy="252" r="3"></circle>
              <circle class="cad-seq-stop" cx="731" cy="278" r="3"></circle>
              <circle class="cad-seq-stop" cx="731" cy="304" r="3"></circle>
              <circle class="cad-seq-active" cx="731" r="4.5">
                <animate id="seq5done" attributeName="cy" dur="2s" begin="seq1.begin+0.60s" fill="freeze" values="226;226;252;252;278;278;304;304" keyTimes="0;0.05;0.15;0.3;0.4;0.55;0.65;1" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"></animate>
                <animate attributeName="opacity" dur="2s" begin="seq1.begin+0.60s" fill="freeze" values="0;1;1;1;1;1;1;0.3" keyTimes="0;0.05;0.15;0.4;0.55;0.65;0.92;1"></animate>
              </circle>
            </g>

            <!-- L2→L3 dashed connectors (state machines feed into function blocks) -->
            <path class="cad-link-light cad-link-draw cad-stage-3b cad-order-1" d="M200 320 V358" marker-end="url(#cad-arrow-gray)"></path>
            <path class="cad-link-light cad-link-draw cad-stage-3b cad-order-2" d="M350 320 V358" marker-end="url(#cad-arrow-gray)"></path>
            <path class="cad-link-light cad-link-draw cad-stage-3b cad-order-3" d="M500 320 V358" marker-end="url(#cad-arrow-gray)"></path>
            <path class="cad-link-light cad-link-draw cad-stage-3b cad-order-4" d="M650 320 V358" marker-end="url(#cad-arrow-gray)"></path>
            <path class="cad-link-light cad-link-draw cad-stage-3b cad-order-5" d="M800 320 V358" marker-end="url(#cad-arrow-gray)"></path>

            <!-- L3: Continuous execution ring (function blocks) -->
            <g class="cad-stage cad-stage-4 cad-l3-runtime">
              <rect class="cad-l3-runtime-ring" x="60" y="358" width="880" height="230" rx="24"></rect>
              <rect class="cad-l3-runtime-chip" x="78" y="366" width="162" height="22" rx="11"></rect>
              <text class="cad-l3-runtime-chip-text" x="159" y="378" text-anchor="middle">Continuous Execution</text>
            </g>

            <!-- L3: 5 function blocks -->
            <g class="cad-stage cad-stage-4 cad-order-1">
              <rect class="cad-band cad-band-robot" x="75" y="396" width="160" height="180" rx="16"></rect>
              <rect class="cad-band-badge" x="87" y="406" width="88" height="20" rx="10" fill="rgba(139,92,246,0.07)" stroke="rgba(139,92,246,0.2)" stroke-width="0.8"></rect>
              <text class="cad-band-badge-text" x="131" y="417" text-anchor="middle" fill="rgba(139,92,246,0.82)">Function Block</text>
              <text class="cad-fb-title" x="155" y="448" text-anchor="middle">Robot Control</text>
              <text class="cad-panel-subtitle" x="155" y="470" text-anchor="middle">Controller ↔ Device</text>
              <text class="cad-panel-subtitle" x="155" y="488" text-anchor="middle">handshake protocol</text>
              <text class="cad-panel-subtitle" x="155" y="506" text-anchor="middle">motion commands</text>
            </g>

            <g class="cad-stage cad-stage-4 cad-order-2">
              <rect class="cad-band cad-band-cognex" x="251" y="396" width="160" height="180" rx="16"></rect>
              <rect class="cad-band-badge" x="263" y="406" width="88" height="20" rx="10" fill="rgba(217,119,6,0.06)" stroke="rgba(217,119,6,0.16)" stroke-width="0.8"></rect>
              <text class="cad-band-badge-text" x="307" y="417" text-anchor="middle" fill="rgba(217,119,6,0.78)">Function Block</text>
              <text class="cad-fb-title" x="331" y="448" text-anchor="middle">Vision Control</text>
              <text class="cad-panel-subtitle" x="331" y="470" text-anchor="middle">Vision trigger</text>
              <text class="cad-panel-subtitle" x="331" y="488" text-anchor="middle">result parsing</text>
              <text class="cad-panel-subtitle" x="331" y="506" text-anchor="middle">angle / pass-fail</text>
            </g>

            <g class="cad-stage cad-stage-4 cad-order-3">
              <rect class="cad-band cad-band-actuator" x="427" y="396" width="160" height="180" rx="16"></rect>
              <rect class="cad-band-badge" x="439" y="406" width="88" height="20" rx="10" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.16)" stroke-width="0.8"></rect>
              <text class="cad-band-badge-text" x="483" y="417" text-anchor="middle" fill="rgba(16,185,129,0.78)">Function Block</text>
              <text class="cad-fb-title" x="507" y="448" text-anchor="middle">Actuator Control</text>
              <text class="cad-panel-subtitle" x="507" y="470" text-anchor="middle">Valve / cylinder</text>
              <text class="cad-panel-subtitle" x="507" y="488" text-anchor="middle">extend / retract</text>
              <text class="cad-panel-subtitle" x="507" y="506" text-anchor="middle">sensor feedback</text>
            </g>

            <g class="cad-stage cad-stage-4 cad-order-4">
              <rect class="cad-band cad-band-pid" x="603" y="396" width="160" height="180" rx="16"></rect>
              <rect class="cad-band-badge" x="615" y="406" width="88" height="20" rx="10" fill="rgba(225,29,72,0.06)" stroke="rgba(225,29,72,0.16)" stroke-width="0.8"></rect>
              <text class="cad-band-badge-text" x="659" y="417" text-anchor="middle" fill="rgba(225,29,72,0.78)">Function Block</text>
              <text class="cad-fb-title" x="683" y="448" text-anchor="middle">PID Control</text>
              <text class="cad-panel-subtitle" x="683" y="470" text-anchor="middle">Temperature loops</text>
              <text class="cad-panel-subtitle" x="683" y="488" text-anchor="middle">thermal runaway</text>
              <text class="cad-panel-subtitle" x="683" y="506" text-anchor="middle">setpoint tracking</text>
            </g>

            <g class="cad-stage cad-stage-4 cad-order-5">
              <rect class="cad-band cad-band-servo" x="779" y="396" width="160" height="180" rx="16"></rect>
              <rect class="cad-band-badge" x="791" y="406" width="88" height="20" rx="10" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.16)" stroke-width="0.8"></rect>
              <text class="cad-band-badge-text" x="835" y="417" text-anchor="middle" fill="rgba(59,130,246,0.78)">Function Block</text>
              <text class="cad-fb-title" x="859" y="448" text-anchor="middle">Servo Control</text>
              <text class="cad-panel-subtitle" x="859" y="470" text-anchor="middle">Index / home</text>
              <text class="cad-panel-subtitle" x="859" y="488" text-anchor="middle">position command</text>
              <text class="cad-panel-subtitle" x="859" y="506" text-anchor="middle">motion profile</text>
            </g>

            <!-- L3→L4 connectors -->
            <path class="cad-link-light cad-link-draw cad-stage-5 cad-order-1" d="M155 576 V630" marker-end="url(#cad-arrow-gray)"></path>
            <path class="cad-link-light cad-link-draw cad-stage-5 cad-order-2" d="M331 576 V630" marker-end="url(#cad-arrow-gray)"></path>
            <path class="cad-link-light cad-link-draw cad-stage-5 cad-order-3" d="M507 576 V630" marker-end="url(#cad-arrow-gray)"></path>
            <path class="cad-link-light cad-link-draw cad-stage-5 cad-order-4" d="M683 576 V630" marker-end="url(#cad-arrow-gray)"></path>
            <path class="cad-link-light cad-link-draw cad-stage-5 cad-order-5" d="M859 576 V630" marker-end="url(#cad-arrow-gray)"></path>

            <!-- L4: Hardware devices -->
            <g class="cad-stage cad-stage-5 cad-order-1">
              <rect class="cad-device cad-device-robot" x="75" y="630" width="160" height="120" rx="16"></rect>
              <rect class="cad-device-badge" x="89" y="642" width="70" height="20" rx="10"></rect>
              <text class="cad-device-badge-text" x="124" y="653" text-anchor="middle">Hardware</text>
              <text class="cad-device-title" x="155" y="686" text-anchor="middle">Motion Device</text>
              <text class="cad-device-subtitle" x="155" y="706" text-anchor="middle">RC+ controller</text>
              <text class="cad-device-subtitle" x="155" y="722" text-anchor="middle">EtherNet/IP</text>
            </g>

            <g class="cad-stage cad-stage-5 cad-order-2">
              <rect class="cad-device cad-device-camera" x="251" y="630" width="160" height="120" rx="16"></rect>
              <rect class="cad-device-badge" x="265" y="642" width="70" height="20" rx="10"></rect>
              <text class="cad-device-badge-text" x="300" y="653" text-anchor="middle">Hardware</text>
              <text class="cad-device-title" x="331" y="686" text-anchor="middle">Vision Camera</text>
              <text class="cad-device-subtitle" x="331" y="706" text-anchor="middle">In-Sight vision</text>
              <text class="cad-device-subtitle" x="331" y="722" text-anchor="middle">EtherNet/IP</text>
            </g>

            <g class="cad-stage cad-stage-5 cad-order-3">
              <rect class="cad-device cad-device-pneumatic" x="427" y="630" width="160" height="120" rx="16"></rect>
              <rect class="cad-device-badge" x="441" y="642" width="70" height="20" rx="10"></rect>
              <text class="cad-device-badge-text" x="476" y="653" text-anchor="middle">Hardware</text>
              <text class="cad-device-title" x="507" y="686" text-anchor="middle">Pneumatics</text>
              <text class="cad-device-subtitle" x="507" y="706" text-anchor="middle">Valve manifold</text>
              <text class="cad-device-subtitle" x="507" y="722" text-anchor="middle">Cylinders / grippers</text>
            </g>

            <g class="cad-stage cad-stage-5 cad-order-4">
              <rect class="cad-device cad-device-process" x="603" y="630" width="160" height="120" rx="16"></rect>
              <rect class="cad-device-badge" x="617" y="642" width="70" height="20" rx="10"></rect>
              <text class="cad-device-badge-text" x="652" y="653" text-anchor="middle">Hardware</text>
              <text class="cad-device-title" x="683" y="686" text-anchor="middle">Heat / Laser</text>
              <text class="cad-device-subtitle" x="683" y="706" text-anchor="middle">Cartridge heaters</text>
              <text class="cad-device-subtitle" x="683" y="722" text-anchor="middle">CO₂ laser cutter</text>
            </g>

            <g class="cad-stage cad-stage-5 cad-order-5">
              <rect class="cad-device cad-device-servo" x="779" y="630" width="160" height="120" rx="16"></rect>
              <rect class="cad-device-badge" x="793" y="642" width="70" height="20" rx="10"></rect>
              <text class="cad-device-badge-text" x="828" y="653" text-anchor="middle">Hardware</text>
              <text class="cad-device-title" x="859" y="686" text-anchor="middle">Rotary Table</text>
              <text class="cad-device-subtitle" x="859" y="706" text-anchor="middle">Servo drive</text>
              <text class="cad-device-subtitle" x="859" y="722" text-anchor="middle">EtherNet/IP</text>
            </g>

            <!-- Animated pulse on main connectors -->
            <g class="cad-pulse-layer" aria-hidden="true">
              <path id="cad-l3-runtime-route" d="M84 358 H916 A24 24 0 0 1 940 382 V564 A24 24 0 0 1 916 588 H84 A24 24 0 0 1 60 564 V382 A24 24 0 0 1 84 358 Z" fill="none" stroke="none"></path>
              <path id="cad-route-1" d="M500 146 V176 H200 V210" fill="none" stroke="none"></path>
              <path id="cad-route-2" d="M500 146 V176 H350 V210" fill="none" stroke="none"></path>
              <path id="cad-route-3" d="M500 146 V210" fill="none" stroke="none"></path>
              <path id="cad-route-4" d="M500 146 V176 H650 V210" fill="none" stroke="none"></path>
              <path id="cad-route-5" d="M500 146 V176 H800 V210" fill="none" stroke="none"></path>

              <circle class="cad-runtime-dot cad-runtime-dot-a" r="4">
                <animateMotion dur="4.8s" begin="1.9s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#cad-l3-runtime-route"></mpath>
                </animateMotion>
                <animate attributeName="opacity" dur="4.8s" begin="1.9s" repeatCount="indefinite" values="0;1;1;0.2;0" keyTimes="0;0.06;0.82;0.94;1"></animate>
              </circle>
              <circle class="cad-runtime-dot cad-runtime-dot-b" r="4">
                <animateMotion dur="4.8s" begin="4.3s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#cad-l3-runtime-route"></mpath>
                </animateMotion>
                <animate attributeName="opacity" dur="4.8s" begin="4.3s" repeatCount="indefinite" values="0;1;1;0.2;0" keyTimes="0;0.06;0.82;0.94;1"></animate>
              </circle>

              <!-- Orchestrator → SM pulse dots (synced with sequence cycle) -->
              <!-- All 5 fire together, staggered slightly. Last one to arrive triggers sequences. -->
              <!-- Cycle: orch dots (0.7s) → seq animations (2.6s) → pause (0.6s) → repeat -->
              <circle class="cad-pulse-dot" r="3.5">
                <animateMotion dur="0.7s" begin="1.4s;seq5done.end+0.6s" fill="freeze" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                  <mpath href="#cad-route-1"></mpath>
                </animateMotion>
                <animate attributeName="opacity" dur="0.7s" begin="1.4s;seq5done.end+0.6s" fill="freeze" values="0;1;1;0" keyTimes="0;0.1;0.7;1"></animate>
              </circle>
              <circle class="cad-pulse-dot" r="3.5">
                <animateMotion dur="0.65s" begin="1.45s;seq5done.end+0.65s" fill="freeze" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                  <mpath href="#cad-route-2"></mpath>
                </animateMotion>
                <animate attributeName="opacity" dur="0.65s" begin="1.45s;seq5done.end+0.65s" fill="freeze" values="0;1;1;0" keyTimes="0;0.1;0.7;1"></animate>
              </circle>
              <circle class="cad-pulse-dot" r="3.5">
                <animateMotion dur="0.5s" begin="1.5s;seq5done.end+0.7s" fill="freeze" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                  <mpath href="#cad-route-3"></mpath>
                </animateMotion>
                <animate attributeName="opacity" dur="0.5s" begin="1.5s;seq5done.end+0.7s" fill="freeze" values="0;1;1;0" keyTimes="0;0.1;0.7;1"></animate>
              </circle>
              <circle class="cad-pulse-dot" r="3.5">
                <animateMotion dur="0.65s" begin="1.45s;seq5done.end+0.65s" fill="freeze" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                  <mpath href="#cad-route-4"></mpath>
                </animateMotion>
                <animate attributeName="opacity" dur="0.65s" begin="1.45s;seq5done.end+0.65s" fill="freeze" values="0;1;1;0" keyTimes="0;0.1;0.7;1"></animate>
              </circle>
              <circle class="cad-pulse-dot" r="3.5">
                <animateMotion id="cadPulseArrive" dur="0.7s" begin="1.4s;seq5done.end+0.6s" fill="freeze" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                  <mpath href="#cad-route-5"></mpath>
                </animateMotion>
                <animate attributeName="opacity" dur="0.7s" begin="1.4s;seq5done.end+0.6s" fill="freeze" values="0;1;1;0" keyTimes="0;0.1;0.7;1"></animate>
              </circle>
            </g>

            <!-- Legend -->
            <g class="cad-legend-g">
              <rect x="75" y="870" width="850" height="34" rx="17" fill="rgba(248,250,252,0.92)" stroke="rgba(226,232,240,0.6)" stroke-width="0.8"></rect>
              <circle cx="95" cy="887" r="6" fill="rgba(59,130,246,0.18)" stroke="rgba(59,130,246,0.6)" stroke-width="1"></circle>
              <text class="cad-legend-label" x="109" y="888">Orchestrator</text>
              <circle cx="210" cy="887" r="6" fill="rgba(99,102,241,0.18)" stroke="rgba(99,102,241,0.6)" stroke-width="1"></circle>
              <text class="cad-legend-label" x="224" y="888">State Machine</text>
              <circle cx="350" cy="887" r="6" fill="rgba(139,92,246,0.22)" stroke="rgba(139,92,246,0.65)" stroke-width="1"></circle>
              <text class="cad-legend-label" x="364" y="888">Robot SM</text>
              <rect x="432" y="881" width="18" height="12" rx="3" fill="none" stroke="rgba(148,163,184,0.5)" stroke-width="1" stroke-dasharray="2 2"></rect>
              <text class="cad-legend-label" x="456" y="888">Function Block Layer</text>
              <rect x="600" y="881" width="18" height="12" rx="6" fill="rgba(255,255,255,0.92)" stroke="rgba(148,163,184,0.42)" stroke-width="1"></rect>
              <text class="cad-legend-label" x="624" y="888">Hardware</text>
              <line x1="690" y1="881" x2="690" y2="893" stroke="rgba(99,102,241,0.22)" stroke-width="1.5"></line>
              <circle cx="690" cy="883" r="2.5" fill="rgba(99,102,241,0.22)"></circle>
              <circle cx="690" cy="891" r="2.5" fill="rgba(99,102,241,0.22)"></circle>
              <circle cx="690" cy="887" r="3.5" fill="rgba(99,102,241,0.85)"></circle>
              <text class="cad-legend-label" x="702" y="888">Sequential Steps</text>
            </g>
          </svg>
        </div>
      </aside>
    </section>
  `;
}

function renderArchitectureSlide(slide) {
  const topLeftImage = slide.media && slide.media[0] ? resolveMediaPath(slide.media[0]) : "";
  const topRightImage = slide.media && slide.media[1] ? resolveMediaPath(slide.media[1]) : "";
  const bottomImage = slide.media && slide.media[2] ? resolveMediaPath(slide.media[2]) : "";

  return `
    <section class="section-grid architecture-layout">
      <article class="card">
        <p class="kicker">${slide.kicker}</p>
        <h2>${slide.title}</h2>
        ${slide.htmlContent}
      </article>
      <aside class="architecture-media-grid">
        <div class="media-frame architecture-top-left-frame is-loading is-ready">
          <img class="media-asset" src="${topLeftImage}" alt="Control architecture image 1">
        </div>
        <div class="media-frame architecture-top-frame is-loading is-ready">
          <img class="media-asset" src="${topRightImage}" alt="Control architecture image 2">
        </div>
        <div class="media-frame architecture-bottom-frame is-loading is-ready">
          <img class="media-asset" src="${bottomImage}" alt="Control architecture image 3">
        </div>
      </aside>
    </section>
  `;
}

function renderRobotSystemSlide(slide) {
  const topRightImage = slide.media && slide.media[1] ? resolveMediaPath(slide.media[1]) : "";
  const bottomRightImage = slide.media && slide.media[2] ? resolveMediaPath(slide.media[2]) : "";

  return `
    <section class="robot-system-layout">
      <article class="card robot-system-text-card">
        <p class="kicker">${slide.kicker}</p>
        <h2>${slide.title}</h2>
        ${slide.htmlContent}
      </article>
      <aside class="robot-system-side-media">
        <div class="media-frame robot-system-top-frame is-loading is-ready">
          <img class="media-asset" src="${topRightImage}" alt="Robot system image 2">
        </div>
        <div class="media-frame robot-system-bottom-side-frame is-loading is-ready">
          <img class="media-asset" src="${bottomRightImage}" alt="Robot system image 3">
        </div>
      </aside>
      <div class="media-frame robot-system-bottom-frame robot-handshake-frame is-ready">
        <div class="robot-handshake-shell" aria-label="Controller handshake protocol">
          <div class="robot-handshake-surface">
            <div class="robot-handshake-node robot-node-plc">
              <span class="robot-handshake-node-kicker">Controller</span>
              <strong>Controller</strong>
            </div>

            <div class="robot-handshake-link robot-handshake-link-top" aria-hidden="true">
              <span class="robot-handshake-code">312</span>
              <span class="robot-handshake-rail rail-forward">
                <span class="robot-handshake-pulse pulse-forward pulse-a"></span>
                <span class="robot-handshake-pulse pulse-forward pulse-b"></span>
              </span>
            </div>

            <div class="robot-handshake-link robot-handshake-link-bottom" aria-hidden="true">
              <span class="robot-handshake-code">313</span>
              <span class="robot-handshake-rail rail-return">
                <span class="robot-handshake-pulse pulse-return pulse-a"></span>
                <span class="robot-handshake-pulse pulse-return pulse-b"></span>
              </span>
            </div>

            <div class="robot-handshake-node robot-node-epson">
              <span class="robot-handshake-node-kicker">Robot</span>
              <strong>Device</strong>
            </div>

            <div class="robot-handshake-status">
              <span class="robot-handshake-badge">Sequence 3</span>
              <span class="robot-handshake-badge subtle">Step 12</span>
              <p>Command out from the controller, acknowledgement returned by the device when the action completes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFoldSealSlide(slide) {
  const imageA = slide.media && slide.media[0] ? resolveMediaPath(slide.media[0]) : "";
  const imageB = slide.media && slide.media[1] ? resolveMediaPath(slide.media[1]) : "";
  const imageC = slide.media && slide.media[2] ? resolveMediaPath(slide.media[2]) : "";
  const imageD = slide.media && slide.media[3] ? resolveMediaPath(slide.media[3]) : "";

  return `
    <section class="fold-seal-layout">
      <header class="fold-seal-header">
        <p class="kicker">${slide.kicker}</p>
        <h2>${slide.title}</h2>
      </header>
      <div class="fold-seal-row">
        <div class="media-frame fold-seal-frame fold-seal-a is-loading is-ready">
          <img class="media-asset" src="${imageA}" alt="Fold and seal asset 1">
        </div>
        <div class="fold-seal-op" aria-hidden="true">+</div>
        <div class="media-frame fold-seal-frame fold-seal-b is-loading is-ready">
          <img class="media-asset" src="${imageB}" alt="Fold and seal asset 2">
        </div>
        <div class="fold-seal-op" aria-hidden="true">=</div>
        <div class="media-frame fold-seal-frame fold-seal-c is-loading is-ready">
          <img class="media-asset" src="${imageC}" alt="Fold and seal asset 3">
        </div>
        <div class="media-frame fold-seal-frame fold-seal-d is-loading is-ready">
          <img class="media-asset" src="${imageD}" alt="Fold and seal asset 4">
        </div>
      </div>
    </section>
  `;
}

function renderFoldSealCompareSlide(slide) {
  const items = (slide.compareItems || [])
    .map((entry) => {
      const imagePath = resolveMediaPath(entry.image);

      return `
        <article class="fold-seal-compare-item">
          <div class="media-frame fold-seal-compare-frame is-loading is-ready">
            <img class="media-asset" src="${imagePath}" alt="${entry.caption}">
          </div>
          <p class="fold-seal-compare-caption">${entry.caption}</p>
        </article>
      `;
    })
    .join("");

  return `
    <section class="fold-seal-compare-layout">
      <header class="fold-seal-header">
        <p class="kicker">${slide.kicker}</p>
        <h2>${slide.title}</h2>
      </header>
      <div class="fold-seal-compare-grid">
        ${items}
      </div>
    </section>
  `;
}

function renderBalloonFinalFlowSlide(slide) {
  return `
    <section class="balloon-final-flow-layout">
      <header class="balloon-final-flow-header">
        <p class="kicker">${slide.kicker}</p>
        <h2>${slide.title}</h2>
        <p class="balloon-final-flow-note">Station 1 internal sequence feeds Stations 2, 3 and 4, then returns to Station 1 for final out-bin transfer.</p>
      </header>
      <div class="balloon-final-flow-diagram" aria-label="Balloon final assembly station sequence">
        <div class="bfa-shell">
          <svg class="bfa-svg" viewBox="0 0 1200 620" role="img" aria-label="Balloon final assembly station sequence and operation order">
            <defs>
              <marker id="bfa-arrow" markerWidth="6" markerHeight="6" refX="5.2" refY="3" orient="auto">
                <path d="M0.5,0.5 L5.5,3 L0.5,5.5" fill="none" stroke="rgba(99,102,241,0.9)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
              </marker>
              <marker id="bfa-arrow-gray" markerWidth="5" markerHeight="5" refX="4.2" refY="2.5" orient="auto">
                <path d="M0.5,0.5 L4.5,2.5 L0.5,4.5" fill="none" stroke="rgba(148,163,184,0.7)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
              </marker>
              <filter id="bfa-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"></feGaussianBlur>
                <feMerge><feMergeNode in="blur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge>
              </filter>
              <!-- Use userSpaceOnUse so vertical links still render their stroke.
                   objectBoundingBox gradients can collapse on zero-width paths. -->
              <linearGradient id="bfa-main-grad" gradientUnits="userSpaceOnUse" x1="550" y1="148" x2="930" y2="464">
                <stop offset="0%" stop-color="rgba(99,102,241,0.85)"></stop>
                <stop offset="100%" stop-color="rgba(59,130,246,0.85)"></stop>
              </linearGradient>
              <linearGradient id="bfa-station-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="rgba(255,255,255,0.92)"></stop>
                <stop offset="100%" stop-color="rgba(248,250,252,0.88)"></stop>
              </linearGradient>
            </defs>

            <!-- Station 1 -->
            <g class="bfa-stage" style="--bfa-order:0">
              <rect class="bfa-stage-frame" x="40" y="60" width="510" height="490" rx="20"></rect>
              <rect class="bfa-badge-bg" x="48" y="68" width="82" height="24" rx="12" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.18)" stroke-width="0.8"></rect>
              <text class="bfa-badge-text" x="89" y="81" text-anchor="middle">Station 1</text>

              <text class="bfa-sub-title" x="170" y="108" text-anchor="middle">Film / Spacer</text>
              <text class="bfa-sub-title" x="410" y="108" text-anchor="middle">MicroSyringe</text>

              <rect class="bfa-sub-frame" x="70" y="120" width="200" height="310" rx="14"></rect>
              <rect class="bfa-sub-frame" x="310" y="120" width="200" height="386" rx="14"></rect>

              <g class="bfa-op" style="--bfa-op-order:0">
                <rect class="bfa-op-box" x="86" y="138" width="168" height="48" rx="10"></rect>
                <text class="bfa-op-text" x="170" y="166" text-anchor="middle">Pick</text>
              </g>
              <g class="bfa-op" style="--bfa-op-order:1">
                <rect class="bfa-op-box" x="86" y="206" width="168" height="48" rx="10"></rect>
                <text class="bfa-op-text" x="170" y="234" text-anchor="middle">Place</text>
              </g>
              <g class="bfa-op" style="--bfa-op-order:2">
                <rect class="bfa-op-box" x="86" y="274" width="168" height="48" rx="10"></rect>
                <text class="bfa-op-text" x="170" y="302" text-anchor="middle">Separate Spacer</text>
              </g>
              <g class="bfa-op" style="--bfa-op-order:3">
                <rect class="bfa-op-box" x="86" y="342" width="168" height="48" rx="10"></rect>
                <text class="bfa-op-text bfa-op-text-small" x="170" y="363" text-anchor="middle">Place Spacer in</text>
                <text class="bfa-op-text bfa-op-text-small" x="170" y="378" text-anchor="middle">Out Stack</text>
              </g>

              <g class="bfa-op" style="--bfa-op-order:0.5">
                <rect class="bfa-op-box" x="326" y="138" width="168" height="48" rx="10"></rect>
                <text class="bfa-op-text" x="410" y="166" text-anchor="middle">Pick</text>
              </g>
              <g class="bfa-op" style="--bfa-op-order:1.5">
                <rect class="bfa-op-box" x="326" y="206" width="168" height="48" rx="10"></rect>
                <text class="bfa-op-text" x="410" y="234" text-anchor="middle">Clock</text>
              </g>
              <g class="bfa-op" style="--bfa-op-order:2.5">
                <rect class="bfa-op-box" x="326" y="274" width="168" height="48" rx="10"></rect>
                <text class="bfa-op-text" x="410" y="302" text-anchor="middle">Place</text>
              </g>
              <g class="bfa-op" style="--bfa-op-order:3.5">
                <rect class="bfa-op-box" x="326" y="342" width="168" height="48" rx="10"></rect>
                <text class="bfa-op-text bfa-op-text-small" x="410" y="363" text-anchor="middle">Heat Stake</text>
                <text class="bfa-op-text bfa-op-text-small" x="410" y="378" text-anchor="middle">to Film</text>
              </g>
              <g class="bfa-op" style="--bfa-op-order:4.5">
                <rect class="bfa-op-box" x="326" y="422" width="168" height="48" rx="10"></rect>
                <text class="bfa-op-text" x="410" y="450" text-anchor="middle">Fold Film</text>
              </g>
            </g>

            <!-- Station 2 -->
            <g class="bfa-stage" style="--bfa-order:1">
              <rect class="bfa-stage-frame" x="600" y="88" width="270" height="120" rx="18"></rect>
              <rect class="bfa-badge-bg" x="608" y="96" width="82" height="24" rx="12" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.18)" stroke-width="0.8"></rect>
              <text class="bfa-badge-text" x="649" y="109" text-anchor="middle">Station 2</text>
              <g class="bfa-op" style="--bfa-op-order:0">
                <rect class="bfa-op-box" x="618" y="128" width="234" height="58" rx="10"></rect>
                <text class="bfa-op-text" x="735" y="155" text-anchor="middle">Heat Stake Balloon</text>
                <text class="bfa-op-text bfa-op-text-small" x="735" y="173" text-anchor="middle">Pattern</text>
              </g>
            </g>

            <!-- Station 3 -->
            <g class="bfa-stage" style="--bfa-order:2">
              <rect class="bfa-stage-frame" x="600" y="246" width="270" height="120" rx="18"></rect>
              <rect class="bfa-badge-bg" x="608" y="254" width="82" height="24" rx="12" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.18)" stroke-width="0.8"></rect>
              <text class="bfa-badge-text" x="649" y="267" text-anchor="middle">Station 3</text>
              <g class="bfa-op" style="--bfa-op-order:0">
                <rect class="bfa-op-box" x="618" y="286" width="234" height="58" rx="10"></rect>
                <text class="bfa-op-text" x="735" y="313" text-anchor="middle">Heat Stake Button</text>
                <text class="bfa-op-text bfa-op-text-small" x="735" y="331" text-anchor="middle">Seal</text>
              </g>
            </g>

            <!-- Station 4 -->
            <g class="bfa-stage" style="--bfa-order:3">
              <rect class="bfa-stage-frame" x="600" y="404" width="270" height="120" rx="18"></rect>
              <rect class="bfa-badge-bg" x="608" y="412" width="82" height="24" rx="12" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.18)" stroke-width="0.8"></rect>
              <text class="bfa-badge-text" x="649" y="425" text-anchor="middle">Station 4</text>
              <g class="bfa-op" style="--bfa-op-order:0">
                <rect class="bfa-op-box" x="618" y="444" width="234" height="58" rx="10"></rect>
                <text class="bfa-op-text" x="735" y="477" text-anchor="middle">Laser Cut Clip Hole</text>
              </g>
            </g>

            <!-- Return to Station 1 -->
            <g class="bfa-stage" style="--bfa-order:4">
              <rect class="bfa-stage-frame" x="930" y="198" width="230" height="248" rx="20"></rect>
              <rect class="bfa-badge-bg" x="938" y="206" width="82" height="24" rx="12" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.18)" stroke-width="0.8"></rect>
              <text class="bfa-badge-text" x="979" y="219" text-anchor="middle">Station 1</text>
              <rect class="bfa-sub-frame" x="950" y="238" width="192" height="186" rx="14"></rect>
              <g class="bfa-op" style="--bfa-op-order:0">
                <rect class="bfa-op-box" x="964" y="252" width="164" height="58" rx="10"></rect>
                <text class="bfa-op-text" x="1046" y="279" text-anchor="middle">Pick Finished</text>
                <text class="bfa-op-text bfa-op-text-small" x="1046" y="297" text-anchor="middle">Balloon</text>
              </g>
              <g class="bfa-op" style="--bfa-op-order:1">
                <rect class="bfa-op-box" x="964" y="336" width="164" height="58" rx="10"></rect>
                <text class="bfa-op-text" x="1046" y="363" text-anchor="middle">Place in</text>
                <text class="bfa-op-text bfa-op-text-small" x="1046" y="381" text-anchor="middle">Out Bin</text>
              </g>
            </g>

            <!-- Internal connectors (Film/Spacer) -->
            <path class="bfa-link" style="--bfa-order:0.1" d="M170 186 V206" marker-end="url(#bfa-arrow-gray)"></path>
            <path class="bfa-link" style="--bfa-order:0.2" d="M170 254 V274" marker-end="url(#bfa-arrow-gray)"></path>
            <path class="bfa-link" style="--bfa-order:0.3" d="M170 322 V342" marker-end="url(#bfa-arrow-gray)"></path>

            <!-- Internal connectors (MicroSyringe) -->
            <path class="bfa-link" style="--bfa-order:0.15" d="M410 186 V206" marker-end="url(#bfa-arrow-gray)"></path>
            <path class="bfa-link" style="--bfa-order:0.25" d="M410 254 V274" marker-end="url(#bfa-arrow-gray)"></path>
            <path class="bfa-link" style="--bfa-order:0.35" d="M410 322 V342" marker-end="url(#bfa-arrow-gray)"></path>
            <path class="bfa-link" style="--bfa-order:0.45" d="M410 390 V422" marker-end="url(#bfa-arrow-gray)"></path>

            <!-- Cross-link between sub-frames -->
            <path class="bfa-link" style="--bfa-order:0.4" d="M270 298 H310" marker-end="url(#bfa-arrow-gray)"></path>

            <!-- Main flow: Station 1 → 2 -->
            <path class="bfa-link bfa-link-main" style="--bfa-order:1" d="M550 305 H575 V148 H600" marker-end="url(#bfa-arrow)"></path>

            <!-- Station 2 → 3 -->
            <path class="bfa-link bfa-link-main" style="--bfa-order:2" d="M735 208 V246" marker-end="url(#bfa-arrow)"></path>

            <!-- Station 3 → 4 -->
            <path class="bfa-link bfa-link-main" style="--bfa-order:3" d="M735 366 V404" marker-end="url(#bfa-arrow)"></path>

            <!-- Station 4 → return Station 1 -->
            <path class="bfa-link bfa-link-main" style="--bfa-order:4" d="M870 464 H900 V322 H930" marker-end="url(#bfa-arrow)"></path>

            <!-- Return Station 1 internal -->
            <path class="bfa-link" style="--bfa-order:4.2" d="M1046 310 V336" marker-end="url(#bfa-arrow-gray)"></path>

            <!-- Animated flow pulse on main connectors -->
            <g class="bfa-pulse-layer" aria-hidden="true">
              <circle class="bfa-pulse-dot" r="3.5">
                <animateMotion dur="0.8s" begin="1.2s;bfaPulse4.end+0.6s" fill="freeze" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                  <mpath href="#bfa-route-1"></mpath>
                </animateMotion>
                <animate attributeName="opacity" dur="0.8s" begin="1.2s;bfaPulse4.end+0.6s" values="0;1;1;0.3" keyTimes="0;0.1;0.85;1"></animate>
              </circle>
              <circle class="bfa-pulse-dot" r="3.5">
                <animateMotion id="bfaPulse2" dur="0.5s" begin="2.0s;bfaPulse4.end+1.4s" fill="freeze" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                  <mpath href="#bfa-route-2"></mpath>
                </animateMotion>
                <animate attributeName="opacity" dur="0.5s" begin="2.0s;bfaPulse4.end+1.4s" values="0;1;1;0.3" keyTimes="0;0.1;0.85;1"></animate>
              </circle>
              <circle class="bfa-pulse-dot" r="3.5">
                <animateMotion id="bfaPulse3" dur="0.5s" begin="2.5s;bfaPulse4.end+1.9s" fill="freeze" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                  <mpath href="#bfa-route-3"></mpath>
                </animateMotion>
                <animate attributeName="opacity" dur="0.5s" begin="2.5s;bfaPulse4.end+1.9s" values="0;1;1;0.3" keyTimes="0;0.1;0.85;1"></animate>
              </circle>
              <circle class="bfa-pulse-dot" r="3.5">
                <animateMotion id="bfaPulse4" dur="0.7s" begin="3.0s;bfaPulse4.end+2.4s" fill="freeze" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                  <mpath href="#bfa-route-4"></mpath>
                </animateMotion>
                <animate attributeName="opacity" dur="0.7s" begin="3.0s;bfaPulse4.end+2.4s" values="0;1;1;0.3" keyTimes="0;0.1;0.85;1"></animate>
              </circle>
            </g>

            <!-- Hidden motion paths for pulse animation -->
            <path id="bfa-route-1" d="M550 305 H575 V148 H600" fill="none" stroke="none"></path>
            <path id="bfa-route-2" d="M735 208 V246" fill="none" stroke="none"></path>
            <path id="bfa-route-3" d="M735 366 V404" fill="none" stroke="none"></path>
            <path id="bfa-route-4" d="M870 464 H900 V322 H930" fill="none" stroke="none"></path>

            <!-- Legend -->
            <g class="bfa-legend" style="--bfa-order:4.4">
              <rect x="40" y="560" width="200" height="32" rx="16" fill="rgba(248,250,252,0.9)" stroke="rgba(226,232,240,0.6)" stroke-width="0.8"></rect>
              <circle cx="58" cy="576" r="5" fill="rgba(99,102,241,0.18)" stroke="rgba(99,102,241,0.5)" stroke-width="0.8"></circle>
              <text class="bfa-legend-text" x="70" y="577">Station</text>
              <circle cx="128" cy="576" r="5" fill="rgba(16,185,129,0.14)" stroke="rgba(16,185,129,0.5)" stroke-width="0.8"></circle>
              <text class="bfa-legend-text" x="140" y="577">Robot Action</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  `;
}

function renderPartSelectionSlide(slide) {
  const mainImage = slide.media && slide.media[0] ? resolveMediaPath(slide.media[0]) : "";
  const topRightImage = slide.media && slide.media[1] ? resolveMediaPath(slide.media[1]) : "";
  const bottomLeftImage = slide.media && slide.media[2] ? resolveMediaPath(slide.media[2]) : "";
  const bottomRightImage = slide.media && slide.media[3] ? resolveMediaPath(slide.media[3]) : "";

  return `
    <section class="part-selection-layout">
      <article class="card part-selection-text-card">
        <p class="kicker">${slide.kicker}</p>
        <h2>${slide.title}</h2>
        ${slide.htmlContent}
      </article>
      <aside class="part-selection-media-grid">
        <div class="media-frame part-selection-main-frame is-loading is-ready">
          <img class="media-asset" src="${mainImage}" alt="Part selection image 1">
        </div>
        <div class="media-frame part-selection-top-right-frame is-loading is-ready">
          <img class="media-asset" src="${topRightImage}" alt="Part selection image 2">
        </div>
        <div class="media-frame part-selection-bottom-left-frame is-loading is-ready">
          <img class="media-asset" src="${bottomLeftImage}" alt="Part selection image 3">
        </div>
        <div class="media-frame part-selection-bottom-right-frame is-loading is-ready">
          <img class="media-asset" src="${bottomRightImage}" alt="Part selection image 4">
        </div>
      </aside>
    </section>
  `;
}

function renderRobotProgramSlide(slide) {
  const topLeftImage = slide.media && slide.media[0] ? resolveMediaPath(slide.media[0]) : "";
  const topRightImage = slide.media && slide.media[1] ? resolveMediaPath(slide.media[1]) : "";
  const bottomMedia = slide.media && slide.media[2] ? slide.media[2] : "";
  const bottomResolved = bottomMedia ? resolveMediaPath(bottomMedia) : "";
  const bottomFallback = bottomMedia ? getFallbackPath(bottomMedia) : "";

  return `
    <section class="robot-program-layout">
      <article class="card robot-program-text-card">
        <p class="kicker">${slide.kicker}</p>
        <h2>${slide.title}</h2>
        ${slide.htmlContent}
      </article>
      <aside class="robot-program-media-grid">
        <div class="media-frame robot-program-top-left-frame is-loading is-ready">
          <img class="media-asset" src="${topLeftImage}" alt="Robot program image 1">
        </div>
        <div class="media-frame robot-program-top-right-frame is-loading is-ready">
          <img class="media-asset" src="${topRightImage}" alt="Robot program image 2">
        </div>
        <div class="media-frame robot-program-bottom-frame is-loading">
          ${bottomFallback ? `<img class="media-poster" src="${bottomFallback}" alt="Robot program preview">` : ""}
          <div class="media-placeholder">Loading media...</div>
          <img class="media-asset" src="${bottomResolved}" alt="Robot simulation GIF">
        </div>
      </aside>
    </section>
  `;
}

function renderVentHoleClockingSlide(slide) {
  const image1 = slide.media && slide.media[0] ? resolveMediaPath(slide.media[0]) : "";
  const image2 = slide.media && slide.media[1] ? resolveMediaPath(slide.media[1]) : "";
  const image3 = slide.media && slide.media[2] ? resolveMediaPath(slide.media[2]) : "";

  return `
    <section class="vhc-layout">
      <article class="card vhc-text-card">
        <p class="kicker">${slide.kicker}</p>
        <h2>${slide.title}</h2>
        ${slide.htmlContent}
      </article>
      <aside class="vhc-media-grid">
        <div class="media-frame vhc-top-frame is-loading is-ready">
          <img class="media-asset" src="${image3}" alt="Vent hole clocking overview">
        </div>
        <div class="media-frame vhc-bottom-left-frame is-loading is-ready">
          <img class="media-asset" src="${image1}" alt="Vent hole detail 1">
        </div>
        <div class="media-frame vhc-bottom-right-frame is-loading is-ready">
          <img class="media-asset" src="${image2}" alt="Vent hole detail 2">
        </div>
      </aside>
    </section>
  `;
}

function renderPidControlSlide(slide) {
  const topImage = slide.media && slide.media[0] ? resolveMediaPath(slide.media[0]) : "";
  const bottomImage = slide.media && slide.media[1] ? resolveMediaPath(slide.media[1]) : "";

  return `
    <section class="pid-control-layout">
      <article class="card pid-control-text-card">
        <p class="kicker">${slide.kicker}</p>
        <h2>${slide.title}</h2>
        ${slide.htmlContent}
      </article>
      <aside class="pid-control-media-grid">
        <div class="media-frame pid-control-top-frame is-loading is-ready">
          <img class="media-asset" src="${topImage}" alt="PID control ladder logic">
        </div>
        <div class="media-frame pid-control-bottom-frame is-loading is-ready">
          <img class="media-asset" src="${bottomImage}" alt="PID response chart">
        </div>
      </aside>
    </section>
  `;
}

function renderResultsImpactSlide(slide) {
  return `
    <section class="results-impact-layout">
      <article class="card">
        <p class="kicker">${slide.kicker}</p>
        <h2>${slide.title}</h2>
        ${slide.htmlContent}
      </article>
      <div class="results-impact-media">
        ${renderMedia(slide.media, slide)}
      </div>
    </section>
  `;
}

function renderClosingSlide(slide) {
  return `
    <section class="closing-layout">
      <div class="closing-copy">
        <h2>${slide.title}</h2>
      </div>
      <div class="closing-qna">${slide.subtitle || ""}</div>
    </section>
  `;
}

function renderAboutMeSlide(slide) {
  const photoRows = (slide.personalPhotos || []).map((row) => {
    const cols = row.map((src) => {
      const resolved = resolveMediaPath(src);
      return `<div class="media-frame aboutme-photo-cell is-loading"><div class="media-placeholder">Loading media...</div><img class="media-asset" src="${resolved}" alt="Personal photo"></div>`;
    }).join("");
    return `<div class="aboutme-photo-row">${cols}</div>`;
  }).join("");

  const videoNodes = (slide.media || []).map((path) => {
    const resolved = resolveMediaPath(path);
    const fallback = getFallbackPath(path);
    return `
      <div class="media-frame aboutme-video-frame is-loading">
        <div class="media-placeholder">Loading media...</div>
        <video class="media-asset" src="${resolved}" autoplay loop muted playsinline preload="metadata"${fallback ? ` poster="${fallback}"` : ""}></video>
      </div>
    `;
  }).join("");

  return `
    <section class="section-grid">
      <article class="card">
        <p class="kicker">${slide.kicker}</p>
        <h2>${slide.title}</h2>
        ${renderBullets(slide.bullets)}
      </article>
      <aside class="aboutme-media-stack">
        <div class="aboutme-photos-layer">${photoRows}</div>
        <div class="aboutme-videos-layer media-grid media-fill">${videoNodes}</div>
      </aside>
    </section>
  `;
}

function initAboutMeSwap(container) {
  const photosLayer = container.querySelector(".aboutme-photos-layer");
  const videosLayer = container.querySelector(".aboutme-videos-layer");
  if (!photosLayer || !videosLayer) return;

  let swapped = false;

  activeSubStepHandler = (direction) => {
    if (direction > 0 && !swapped) {
      swapped = true;
      photosLayer.classList.add("aboutme-layer-out");
      videosLayer.classList.add("aboutme-layer-in");
      return true;
    }
    if (direction < 0 && swapped) {
      swapped = false;
      photosLayer.classList.remove("aboutme-layer-out");
      videosLayer.classList.remove("aboutme-layer-in");
      return true;
    }
    return false;
  };
}

function buildSlideMarkup(slide) {
  if (slide.layout === "intro") {
    return renderIntroSlide(slide);
  }

  if (slide.layout === "about-me") {
    return renderAboutMeSlide(slide);
  }

  if (slide.layout === "timeline") {
    return renderTimelineSlide(slide);
  }

  if (slide.layout === "media-only") {
    return renderMediaOnlySlide(slide);
  }

  if (slide.layout === "pilot-flow") {
    return renderPilotFlowSlide(slide);
  }

  if (slide.layout === "code-architecture") {
    return renderCodeArchitectureSlide(slide);
  }

  if (slide.layout === "architecture-split") {
    return renderArchitectureSlide(slide);
  }

  if (slide.layout === "robot-system-split") {
    return renderRobotSystemSlide(slide);
  }

  if (slide.layout === "fold-seal-composition") {
    return renderFoldSealSlide(slide);
  }

  if (slide.layout === "fold-seal-compare") {
    return renderFoldSealCompareSlide(slide);
  }

  if (slide.layout === "balloon-final-flow") {
    return renderBalloonFinalFlowSlide(slide);
  }

  if (slide.layout === "part-selection-split") {
    return renderPartSelectionSlide(slide);
  }

  if (slide.layout === "robot-program-split") {
    return renderRobotProgramSlide(slide);
  }

  if (slide.layout === "vent-hole-clocking") {
    return renderVentHoleClockingSlide(slide);
  }

  if (slide.layout === "pid-control-split") {
    return renderPidControlSlide(slide);
  }

  if (slide.layout === "results-impact-split") {
    return renderResultsImpactSlide(slide);
  }

  if (slide.layout === "closing-qna") {
    return renderClosingSlide(slide);
  }

  if (slide.layout === "rich-split") {
    return `
      <section class="section-grid">
        <article class="card">
          <p class="kicker">${slide.kicker}</p>
          <h2>${slide.title}</h2>
          ${slide.htmlContent}
        </article>
        ${renderMedia(slide.media, slide)}
      </section>
    `;
  }

  if (slide.htmlContent) {
    return `
      <section class="section-grid single-column-layout">
        <article class="card card-wide">
          <p class="kicker">${slide.kicker}</p>
          <h2>${slide.title}</h2>
          ${slide.htmlContent}
        </article>
      </section>
    `;
  }

  return `
    <section class="section-grid">
      <article class="card">
        <p class="kicker">${slide.kicker}</p>
        <h2>${slide.title}</h2>
        ${renderBullets(slide.bullets)}
      </article>
      ${renderMedia(slide.media, slide)}
    </section>
  `;
}

const slideElement = document.getElementById("slide");
const counterElement = document.getElementById("slide-counter");
const progressElement = document.getElementById("progress-bar");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const deckStage = document.querySelector(".deck-stage");

let currentIndex = 0;

function fitCardText(card) {
  // h2/kicker use rem so they stay fixed; only body text (em) scales with card base
  const lo = 9;
  const hi = 30;

  card.style.fontSize = hi + "px";
  if (card.scrollHeight <= card.clientHeight) {
    return;
  }

  let low = lo;
  let high = hi;

  while (high - low > 0.4) {
    const mid = (low + high) / 2;
    card.style.fontSize = mid + "px";
    if (card.scrollHeight <= card.clientHeight) {
      low = mid;
    } else {
      high = mid;
    }
  }

  card.style.fontSize = Math.floor(low) + "px";
}

function fitAllCards() {
  slideElement.querySelectorAll(".card").forEach(fitCardText);
}

function applySlideObjectReveal(container) {
  const revealTargets = container.querySelectorAll(".media-frame");
  revealTargets.forEach((target, index) => {
    target.classList.add("is-revealed");
    target.style.setProperty("--media-reveal-delay", `${0.03 + index * 0.05}s`);
  });
}

let typewriterRunId = 0;
let activeTypewriterContainer = null;
let activeHandshakeCleanup = null;

function stopRobotHandshakeAnimation() {
  if (typeof activeHandshakeCleanup === "function") {
    activeHandshakeCleanup();
  }
  activeHandshakeCleanup = null;
}

function pulseValueUpdate(element, className) {
  if (!element || !className) {
    return;
  }
  element.classList.remove(className);
  // Force reflow so the same animation class can retrigger reliably.
  void element.offsetWidth;
  element.classList.add(className);
}

function initRobotHandshakeAnimation(container) {
  const handshakeRoot = container.querySelector(".robot-handshake-frame");
  if (!handshakeRoot) {
    stopRobotHandshakeAnimation();
    return;
  }

  const surface = handshakeRoot.querySelector(".robot-handshake-surface");
  const plcNode = handshakeRoot.querySelector(".robot-node-plc");
  const epsonNode = handshakeRoot.querySelector(".robot-node-epson");
  const linkTop = handshakeRoot.querySelector(".robot-handshake-link-top");
  const linkBottom = handshakeRoot.querySelector(".robot-handshake-link-bottom");
  const topCode = handshakeRoot.querySelector(".robot-handshake-link-top .robot-handshake-code");
  const bottomCode = handshakeRoot.querySelector(".robot-handshake-link-bottom .robot-handshake-code");
  const forwardDot = handshakeRoot.querySelector(".robot-handshake-link-top .robot-handshake-pulse.pulse-a");
  const returnDot = handshakeRoot.querySelector(".robot-handshake-link-bottom .robot-handshake-pulse.pulse-a");
  const statusArea = handshakeRoot.querySelector(".robot-handshake-status");
  const sequenceBadge = handshakeRoot.querySelector(".robot-handshake-badge:not(.subtle)");
  const stepBadge = handshakeRoot.querySelector(".robot-handshake-badge.subtle");

  if (!topCode || !bottomCode || !forwardDot || !returnDot || !sequenceBadge || !stepBadge) {
    stopRobotHandshakeAnimation();
    return;
  }

  const handshakeSteps = [
    { step: 12, plcOut: 312, robotIn: 313 },
    { step: 13, plcOut: 314, robotIn: 315 },
    { step: 14, plcOut: 316, robotIn: 317 },
    { step: 15, plcOut: 318, robotIn: 319 },
    { step: 16, plcOut: 320, robotIn: 321 },
  ];

  const dotTravelMs = 760;
  const edgePauseMs = 130;
  const turnGapMs = 180;
  const stepGapMs = 240;
  const sequenceId = 3;
  let stepIndex = 0;
  let active = true;
  const timerIds = [];

  const schedule = (fn, delayMs) => {
    const id = window.setTimeout(() => {
      if (!active) {
        return;
      }
      fn();
    }, delayMs);
    timerIds.push(id);
  };

  const setCodeVisible = (element, visible) => {
    element.classList.toggle("is-code-visible", !!visible);
  };

  const resetDot = (dot) => {
    dot.style.transition = "none";
    dot.classList.remove("is-dot-visible", "is-dot-travel");
    void dot.offsetWidth;
    dot.style.transition = "";
  };

  const shootDot = (dot) => {
    resetDot(dot);
    dot.classList.add("is-dot-visible");
    requestAnimationFrame(() => {
      if (!active) {
        return;
      }
      dot.classList.add("is-dot-travel");
    });
  };

  const applyStep = () => {
    const entry = handshakeSteps[stepIndex];
    topCode.textContent = String(entry.plcOut);
    bottomCode.textContent = String(entry.robotIn);
    sequenceBadge.textContent = `Sequence ${sequenceId}`;
    stepBadge.textContent = `Step ${entry.step}`;
    pulseValueUpdate(stepBadge, "is-sync-update");
  };

  const runCycle = () => {
    applyStep();

    setCodeVisible(topCode, true);
    setCodeVisible(bottomCode, false);
    pulseValueUpdate(topCode, "is-sync-update");

    shootDot(forwardDot);
    schedule(() => {
      resetDot(forwardDot);
      setCodeVisible(topCode, false);

      setCodeVisible(bottomCode, true);
      pulseValueUpdate(bottomCode, "is-sync-update");

      schedule(() => {
        shootDot(returnDot);
        schedule(() => {
          resetDot(returnDot);
          setCodeVisible(bottomCode, false);
          stepIndex = (stepIndex + 1) % handshakeSteps.length;
          schedule(runCycle, stepGapMs);
        }, dotTravelMs + edgePauseMs);
      }, turnGapMs);
    }, dotTravelMs + edgePauseMs);
  };

  setCodeVisible(topCode, false);
  setCodeVisible(bottomCode, false);
  resetDot(forwardDot);
  resetDot(returnDot);

  // Phase 1: Surface background fades in
  schedule(() => {
    if (surface) surface.classList.add("hs-visible");
  }, 60);

  // Phase 2: Nodes scale in (controller first, then device)
  schedule(() => {
    if (plcNode) plcNode.classList.add("hs-visible");
  }, 200);
  schedule(() => {
    if (epsonNode) epsonNode.classList.add("hs-visible");
  }, 340);

  // Phase 3: Rails draw between nodes (top from controller side, bottom from device side)
  schedule(() => {
    if (linkTop) linkTop.classList.add("hs-visible");
  }, 560);
  schedule(() => {
    if (linkBottom) linkBottom.classList.add("hs-visible");
  }, 680);

  // Phase 4: Status area and badges appear
  schedule(() => {
    if (statusArea) statusArea.classList.add("hs-visible");
    if (sequenceBadge) sequenceBadge.classList.add("hs-visible");
  }, 860);
  schedule(() => {
    if (stepBadge) stepBadge.classList.add("hs-visible");
  }, 960);

  // Phase 5: Handshake cycle begins
  schedule(runCycle, 1300);

  activeHandshakeCleanup = () => {
    active = false;
    timerIds.forEach((id) => window.clearTimeout(id));
    [topCode, bottomCode, stepBadge, forwardDot, returnDot].forEach((el) => {
      if (el && el.classList) {
        el.classList.remove("is-sync-update");
      }
    });
    const hsElements = [surface, plcNode, epsonNode, linkTop, linkBottom, statusArea, sequenceBadge, stepBadge];
    hsElements.forEach((el) => {
      if (el) el.classList.remove("hs-visible");
    });
    setCodeVisible(topCode, false);
    setCodeVisible(bottomCode, false);
    resetDot(forwardDot);
    resetDot(returnDot);
  };
}

let activeMemoryCleanup = null;

function stopTimelineMemory() {
  if (typeof activeMemoryCleanup === "function") {
    activeMemoryCleanup();
  }
  activeMemoryCleanup = null;
  activeSubStepHandler = null;
}

function initTimelineMemory(container) {
  const track = container.querySelector(".tl-track");
  const overlay = container.querySelector(".tl-memory-overlay");
  const video = container.querySelector(".tl-memory-video");
  const label = container.querySelector(".tl-memory-label");
  const viewport = container.querySelector(".tl-memory-viewport");
  if (!track || !overlay || !video) {
    stopTimelineMemory();
    return;
  }

  const cols = Array.from(track.querySelectorAll(".tl-col"));
  if (cols.length === 0) {
    stopTimelineMemory();
    return;
  }

  // Sub-steps: 0..(cols.length-1) = reveal card + clip
  //            cols.length         = dismiss last clip
  //            cols.length + 1     = rise to center
  const totalSteps = cols.length + 2;
  let step = -1;

  const showClipForCol = (colIdx) => {
    const col = cols[colIdx];
    const clipSrc = col.dataset.clip;if (clipSrc) {video.src = clipSrc;
      video.currentTime = 0;
      video.play().catch(() => {});
      overlay.classList.add("is-active");
      if (label) {
        const companyEl = col.querySelector(".tl-company");
        label.textContent = companyEl ? companyEl.textContent : "";
      }
    }
  };

  const hideClip = () => {
    overlay.classList.remove("is-active");
    video.pause();
  };

  const clearRise = () => {
    track.classList.remove("tl-rising");
    cols.forEach((c) => {
      c.style.transitionDelay = "";
      c.style.transform = "";
    });
  };

  const applyStep = (s) => {
    if (s < cols.length) {
      clearRise();
      cols.forEach((c) => c.classList.remove("tl-col-active"));
      for (let i = 0; i <= s; i++) {
        cols[i].classList.add("tl-col-visible");
      }
      for (let i = s + 1; i < cols.length; i++) {
        cols[i].classList.remove("tl-col-visible");
      }
      cols[s].classList.add("tl-col-active");
      showClipForCol(s);
    } else if (s === cols.length) {
      clearRise();
      cols.forEach((c) => {
        c.classList.add("tl-col-visible");
        c.classList.remove("tl-col-active");
      });
      hideClip();
    } else if (s === cols.length + 1) {
      cols.forEach((c) => {
        c.classList.add("tl-col-visible");
        c.classList.remove("tl-col-active");
      });
      hideClip();
      triggerRise();
    }
  };

  const triggerRise = () => {
    if (!viewport || !track) return;
    const vpH = viewport.offsetHeight;
    const trackH = track.offsetHeight;
    const offset = -((vpH - trackH) / 2);

    const mid = (cols.length - 1) / 2;
    const maxDist = Math.ceil(mid);

    requestAnimationFrame(() => {
      track.classList.add("tl-rising");
      cols.forEach((col, i) => {
        const fromCenter = Math.abs(i - mid);
        const delay = (maxDist - fromCenter) * 0.12;
        col.style.transitionDelay = delay.toFixed(2) + "s";
        col.style.transform = "translateY(" + offset + "px) scale(1)";
      });
    });
  };

  activeSubStepHandler = (direction) => {
    const nextStep = step + direction;

    if (nextStep < 0) {
      return false;
    }
    if (nextStep >= totalSteps) {
      return false;
    }

    step = nextStep;
    applyStep(step);
    return true;
  };

  activeMemoryCleanup = () => {
    activeSubStepHandler = null;
    overlay.classList.remove("is-active");
    track.classList.remove("tl-rising");
    cols.forEach((c) => {
      c.classList.remove("tl-col-active");
      c.classList.add("tl-col-visible");
      c.style.transitionDelay = "";
      c.style.transform = "";
    });
    video.pause();
    video.removeAttribute("src");
  };
}

function collectTypewriterTextNodes(container) {
  const nodes = [];
  const walker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        if (!node || !node.nodeValue || !node.nodeValue.trim()) {
          return NodeFilter.FILTER_REJECT;
        }

        const parent = node.parentElement;
        if (!parent) {
          return NodeFilter.FILTER_REJECT;
        }

        if (parent.closest(".media-placeholder") || parent.closest("svg") || parent.closest(".tl-track")) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      },
    }
  );

  let currentNode = walker.nextNode();
  while (currentNode) {
    nodes.push({
      node: currentNode,
      fullText: currentNode.nodeValue,
    });
    currentNode = walker.nextNode();
  }

  return nodes;
}

function animateSlideTypewriter(container) {
  if (!container) {
    return;
  }

  if (activeTypewriterContainer && activeTypewriterContainer !== container) {
    cleanupTypewriter(activeTypewriterContainer);
  }

  activeTypewriterContainer = container;

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const runId = ++typewriterRunId;
  const textNodes = collectTypewriterTextNodes(container);

  if (textNodes.length === 0) {
    return;
  }

  const allSpans = [];

  textNodes.forEach((entry) => {
    const parent = entry.node.parentNode;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < entry.fullText.length; i++) {
      const span = document.createElement("span");
      span.textContent = entry.fullText[i];
      span.className = "tw-char";
      allSpans.push(span);
      frag.appendChild(span);
    }
    parent.replaceChild(frag, entry.node);
  });

  const hiddenLis = container.querySelectorAll("li");
  hiddenLis.forEach((li) => {
    if (li.querySelector(".tw-char")) {
      li.classList.add("tw-li-hidden");
    }
  });

  let idx = 0;
  const charsPerFrame = 3;

  const step = () => {
    if (runId !== typewriterRunId) {
      return;
    }

    for (let i = 0; i < charsPerFrame; i++) {
      if (idx >= allSpans.length) {
        cleanupTypewriter(container);
        return;
      }
      const span = allSpans[idx];
      span.classList.add("tw-visible");
      const li = span.closest("li");
      if (li && li.classList.contains("tw-li-hidden")) {
        li.classList.remove("tw-li-hidden");
      }
      idx++;
    }

    requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

function cleanupTypewriter(container) {
  if (!container) return;
  container.querySelectorAll(".tw-li-hidden").forEach((li) => li.classList.remove("tw-li-hidden"));
  const spans = container.querySelectorAll(".tw-char");
  if (spans.length === 0) return;
  let currentParent = null;
  let textAcc = "";
  const groups = [];
  spans.forEach((span) => {
    if (span.parentNode !== currentParent) {
      if (currentParent && textAcc) {
        groups.push({ parent: currentParent, text: textAcc, firstSpan: null });
      }
      currentParent = span.parentNode;
      textAcc = "";
    }
    if (!groups.length || groups[groups.length - 1].parent !== currentParent) {
      groups.push({ parent: currentParent, text: "", firstSpan: span });
    }
    groups[groups.length - 1].text += span.textContent;
  });
  groups.forEach((g) => {
    const textNode = document.createTextNode(g.text);
    const parent = g.parent;
    const children = Array.from(parent.childNodes);
    const first = children.find((c) => c.classList && c.classList.contains("tw-char"));
    if (first) {
      parent.insertBefore(textNode, first);
    }
    children.forEach((c) => {
      if (c.classList && c.classList.contains("tw-char")) {
        parent.removeChild(c);
      }
    });
  });
}

function padNumber(value) {
  return String(value).padStart(2, "0");
}

function renderSlide(index) {
  const safeIndex = Math.max(0, Math.min(index, slides.length - 1));
  const current = slides[safeIndex];
  stopRobotHandshakeAnimation();
  stopTimelineMemory();

  // Move any retained video/image elements that are currently inside the slide
  // back to the preload bin before innerHTML is wiped, so they stay in the DOM
  // and the browser keeps their data buffered.
  const bin = document.getElementById("media-preload-bin");
  if (bin) {
    retainedMedia.forEach((el) => {
      if (slideElement.contains(el)) {
        bin.appendChild(el);
        if (el.tagName === "VIDEO") {
          el.pause();
        }
      }
    });
  }

  slideElement.innerHTML = buildSlideMarkup(current);
  hydrateRenderedMedia(slideElement);
  applySlideObjectReveal(slideElement);
  initRobotHandshakeAnimation(slideElement);
  initTimelineMemory(slideElement);
  if (current.layout === "about-me") initAboutMeSwap(slideElement);
  preloadNearbySlides(safeIndex);
  counterElement.textContent = `${padNumber(safeIndex + 1)} / ${padNumber(slides.length)}`;
  progressElement.style.width = `${((safeIndex + 1) / slides.length) * 100}%`;

  prevButton.disabled = safeIndex === 0;
  nextButton.disabled = safeIndex === slides.length - 1;

  currentIndex = safeIndex;
  localStorage.setItem("panelDeckSlide", safeIndex);
  updateShareUrl(safeIndex);
  requestAnimationFrame(() => {
    fitAllCards();
    animateSlideTypewriter(slideElement);
  });
}

let activeSubStepHandler = null;

function goNext() {
  if (activeSubStepHandler) {
    const consumed = activeSubStepHandler(1);
    if (consumed) return;
  }
  if (currentIndex < slides.length - 1) {
    renderSlide(currentIndex + 1);
  }
}

function goPrev() {
  if (activeSubStepHandler) {
    const consumed = activeSubStepHandler(-1);
    if (consumed) return;
  }
  if (currentIndex > 0) {
    renderSlide(currentIndex - 1);
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
    return;
  }

  document.exitFullscreen().catch(() => {});
}

document.addEventListener("fullscreenchange", () => {
  const shell = document.querySelector(".deck-shell");
  if (shell) {
    shell.classList.toggle("is-fullscreen", !!document.fullscreenElement);
  }
  // Wait two animation frames so the browser has finished reflowing the
  // fullscreen layout before we measure clientWidth/clientHeight in fitSlide.
  requestAnimationFrame(() => requestAnimationFrame(fitSlide));
});

prevButton.addEventListener("click", goPrev);
nextButton.addEventListener("click", goNext);
document.getElementById("fullscreen-btn").addEventListener("click", toggleFullscreen);

document.addEventListener("keydown", (event) => {
  const target = event.target;
  if (
    target instanceof HTMLElement &&
    (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT" || target.isContentEditable)
  ) {
    return;
  }

  if (event.key === "Escape") {
    const overlay = document.getElementById("img-zoom-overlay");
    if (overlay && !overlay.hidden) {
      overlay.hidden = true;
      document.getElementById("img-zoom-img").src = "";
      return;
    }
  }

  if (event.key === "ArrowRight") {
    goNext();
  }

  if (event.key === "ArrowLeft") {
    goPrev();
  }

  if (event.key.toLowerCase() === "f") {
    toggleFullscreen();
  }

  if (event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    goNext();
  }

  if (event.key === "PageUp") {
    event.preventDefault();
    goPrev();
  }

  if (event.key === "Home") {
    event.preventDefault();
    renderSlide(0);
  }

  if (event.key === "End") {
    event.preventDefault();
    renderSlide(slides.length - 1);
  }
});

let touchStartX = 0;
let touchStartY = 0;

deckStage.addEventListener("touchstart", (event) => {
  const touch = event.changedTouches && event.changedTouches[0];
  if (!touch) {
    return;
  }
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
}, { passive: true });

deckStage.addEventListener("touchend", (event) => {
  const touch = event.changedTouches && event.changedTouches[0];
  if (!touch) {
    return;
  }

  const dx = touch.clientX - touchStartX;
  const dy = touch.clientY - touchStartY;
  if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.2) {
    return;
  }

  if (dx < 0) {
    goNext();
    return;
  }

  goPrev();
}, { passive: true });

// Global handlers for pan/zoom drag (one shared handler avoids per-frame leaks).
// Track whether the last mousedown was a drag so click-to-zoom can skip it.
let lastPzDragDidDrag = false;

window.addEventListener("mousemove", (e) => {
  if (!pzDrag) return;
  if (!pzDrag.frame.isConnected) { pzDrag = null; return; }
  pzDrag.didDrag = true;
  const st = pzState.get(pzDrag.srcKey);
  if (!st) return;
  const newTx = pzDrag.startTx + (e.clientX - pzDrag.startX) / pzDrag.ratio;
  const newTy = pzDrag.startTy + (e.clientY - pzDrag.startY) / pzDrag.ratio;
  const ns = { s: st.s, tx: newTx, ty: newTy };
  pzState.set(pzDrag.srcKey, ns);
  const img = pzDrag.frame.querySelector("img.media-asset");
  if (img) applyPzTransform(img, ns);
});

window.addEventListener("mouseup", () => {
  if (!pzDrag) return;
  const { srcKey, frame, didDrag } = pzDrag;
  lastPzDragDidDrag = didDrag;
  frame.style.cursor = "grab";
  const st = pzState.get(srcKey);
  if (st) localStorage.setItem("pz:" + srcKey, JSON.stringify(st));
  updateShareUrl();
  pzDrag = null;
});

// Fit slide to stage like PowerPoint (fixed 1600x900 canvas, scaled to fit)
const SLIDE_W = 1600;
const SLIDE_H = 900;

function fitSlide() {
  const stageW = deckStage.clientWidth;
  const stageH = deckStage.clientHeight;
  const scale = Math.min(stageW / SLIDE_W, stageH / SLIDE_H);
  const scaledW = SLIDE_W * scale;
  const scaledH = SLIDE_H * scale;
  slideElement.style.transform = `scale(${scale})`;
  slideElement.style.left = `${Math.round((stageW - scaledW) / 2)}px`;
  slideElement.style.top = `${Math.round((stageH - scaledH) / 2)}px`;
}

const stageObserver = new ResizeObserver(fitSlide);
stageObserver.observe(deckStage);

const sharedIndex = loadShareStateFromUrl();
const savedIndex = parseInt(localStorage.getItem("panelDeckSlide") || "0", 10);
const initialIndex = Number.isInteger(sharedIndex) ? sharedIndex : (isNaN(savedIndex) ? 0 : savedIndex);
renderSlide(initialIndex);

// Video hover controls
deckStage.addEventListener("mouseover", (event) => {
  if (event.target.matches("video.media-asset")) {
    event.target.controls = true;
  }
});

deckStage.addEventListener("mouseout", (event) => {
  if (event.target.matches("video.media-asset")) {
    event.target.controls = false;
  }
});

// Image click-to-zoom
const zoomOverlay = document.getElementById("img-zoom-overlay");
const zoomImgEl = document.getElementById("img-zoom-img");

function showStageClickRipple(event) {
  if (!event || !Number.isFinite(event.clientX) || !Number.isFinite(event.clientY)) {
    return;
  }

  const rect = deckStage.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "stage-click-ripple";
  ripple.style.left = `${event.clientX - rect.left}px`;
  ripple.style.top = `${event.clientY - rect.top}px`;
  deckStage.appendChild(ripple);
  window.setTimeout(() => {
    if (ripple.isConnected) {
      ripple.remove();
    }
  }, 450);
}

deckStage.addEventListener("click", (event) => {
  if (event instanceof MouseEvent && event.button !== 0) {
    return;
  }

  const targetEl = event.target instanceof Element ? event.target : null;
  const img = targetEl ? targetEl.closest("img.media-asset") : null;
  if (img) {
    // Skip if the click was actually the end of a pan-drag.
    if (lastPzDragDidDrag) {
      lastPzDragDidDrag = false;
      return;
    }
    zoomImgEl.src = img.src;
    zoomImgEl.alt = img.alt;
    zoomOverlay.hidden = false;
    return;
  }

  // Keep native interactions intact (media, controls, links, form elements).
  if (
    targetEl &&
    targetEl.closest("video, .media-frame, button, a, input, textarea, select, label, [role='button']")
  ) {
    return;
  }

  if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return;
  }

  showStageClickRipple(event);
  goNext();
});

zoomOverlay.addEventListener("click", (event) => {
  if (event.target !== zoomImgEl) {
    zoomOverlay.hidden = true;
    zoomImgEl.src = "";
  }
});



