import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(root, "public", "animations");

const W = 1600;
const H = 900;
const FPS = 30;
const DURATION = 150;

const c = (hex) => {
  const clean = hex.replace("#", "");
  const value = clean.length === 3
    ? clean.split("").map((part) => part + part).join("")
    : clean;

  return [
    parseInt(value.slice(0, 2), 16) / 255,
    parseInt(value.slice(2, 4), 16) / 255,
    parseInt(value.slice(4, 6), 16) / 255,
    1
  ];
};

const s = (value) => ({ a: 0, k: value });
const ease = {
  i: { x: [0.45], y: [1] },
  o: { x: [0.2], y: [0] }
};

function k(points) {
  return {
    a: 1,
    k: points.map((point, index) => ({
      t: point.t,
      s: point.s,
      ...(index < points.length - 1 ? { e: points[index + 1].s, ...ease } : {})
    }))
  };
}

function layer(name, shapes, transform = {}, timing = {}) {
  return {
    ddd: 0,
    ind: 0,
    ty: 4,
    nm: name,
    sr: 1,
    ks: {
      o: transform.o || s(100),
      r: transform.r || s(0),
      p: transform.p || s([0, 0, 0]),
      a: transform.a || s([0, 0, 0]),
      s: transform.s || s([100, 100, 100])
    },
    ao: 0,
    shapes,
    ip: timing.ip || 0,
    op: timing.op || DURATION,
    st: timing.st || 0,
    bm: 0
  };
}

function rect(name, width, height, fill, options = {}) {
  const items = [
    { ty: "rc", d: 1, s: s([width, height]), p: s([0, 0]), r: s(options.radius || 0), nm: `${name} Rect` }
  ];

  if (fill) {
    items.push({ ty: "fl", c: s(c(fill)), o: s(options.fillOpacity ?? 100), r: 1, nm: `${name} Fill` });
  }

  if (options.stroke) {
    items.push({
      ty: "st",
      c: s(c(options.stroke)),
      o: s(options.strokeOpacity ?? 100),
      w: s(options.strokeWidth || 4),
      lc: 2,
      lj: 2,
      nm: `${name} Stroke`
    });
  }

  items.push(transform(options));
  return { ty: "gr", it: items, nm: `${name} Group` };
}

function ellipse(name, width, height, fill, options = {}) {
  const items = [
    { ty: "el", p: s([0, 0]), s: options.size || s([width, height]), nm: `${name} Ellipse` }
  ];

  if (fill) {
    items.push({ ty: "fl", c: s(c(fill)), o: options.fillOpacityProp || s(options.fillOpacity ?? 100), r: 1, nm: `${name} Fill` });
  }

  if (options.stroke) {
    items.push({
      ty: "st",
      c: s(c(options.stroke)),
      o: options.strokeOpacityProp || s(options.strokeOpacity ?? 100),
      w: options.strokeWidthProp || s(options.strokeWidth || 4),
      lc: 2,
      lj: 2,
      nm: `${name} Stroke`
    });
  }

  items.push(transform(options));
  return { ty: "gr", it: items, nm: `${name} Group` };
}

function transform(options = {}) {
  return {
    ty: "tr",
    p: options.p || s([0, 0]),
    a: s([0, 0]),
    s: options.s || s([100, 100]),
    r: options.r || s(0),
    o: options.o || s(100),
    sk: s(0),
    sa: s(0),
    nm: "Transform"
  };
}

function line(name, width, color, options = {}) {
  return rect(name, width, options.height || 8, color, {
    radius: options.height || 8,
    fillOpacity: options.opacity ?? 100,
    p: options.p,
    s: options.s,
    r: options.r
  });
}

function doc(name, layers) {
  return {
    v: "5.13.0",
    fr: FPS,
    ip: 0,
    op: DURATION,
    w: W,
    h: H,
    nm: name,
    ddd: 0,
    assets: [],
    layers: [...layers].reverse().map((item, index) => ({ ...item, ind: index + 1 }))
  };
}

function movingDot(name, from, to, color, delay = 0, size = 22) {
  return layer(
    name,
    [ellipse(name, size, size, color, { fillOpacity: 100 })],
    {
      p: k([
        { t: 0, s: [from[0], from[1], 0] },
        { t: delay, s: [from[0], from[1], 0] },
        { t: delay + 42, s: [to[0], to[1], 0] },
        { t: DURATION, s: [to[0], to[1], 0] }
      ]),
      o: k([
        { t: 0, s: [0] },
        { t: delay + 2, s: [100] },
        { t: delay + 38, s: [100] },
        { t: delay + 48, s: [0] },
        { t: DURATION, s: [0] }
      ])
    }
  );
}

function bg(color) {
  return layer("Background", [rect("Background", W, H, color)], { p: s([W / 2, H / 2, 0]) });
}

function introOrbit() {
  const layers = [
    bg("#07111f"),
    layer("Soft Grid A", [line("Grid A", 1600, "#1f3b5f", { height: 2, opacity: 45 })], { p: s([800, 240, 0]) }),
    layer("Soft Grid B", [line("Grid B", 1600, "#1f3b5f", { height: 2, opacity: 35 })], { p: s([800, 660, 0]) }),
    layer("Orbit Ring Fast", [ellipse("Orbit Fast", 850, 340, null, { stroke: "#38bdf8", strokeOpacity: 70, strokeWidth: 7 })], { p: s([800, 450, 0]), r: k([{ t: 0, s: [0] }, { t: DURATION, s: [360] }]) }),
    layer("Orbit Ring Slow", [ellipse("Orbit Slow", 1040, 440, null, { stroke: "#facc15", strokeOpacity: 55, strokeWidth: 5 })], { p: s([800, 450, 0]), r: k([{ t: 0, s: [0] }, { t: DURATION, s: [-360] }]) }),
    layer("Deck Card Back", [rect("Card Back", 510, 295, "#13233a", { radius: 30, stroke: "#315f91", strokeWidth: 5, strokeOpacity: 90 })], { p: k([{ t: 0, s: [740, 480, 0] }, { t: 36, s: [720, 490, 0] }, { t: DURATION, s: [720, 490, 0] }]), r: s(-7), o: k([{ t: 0, s: [0] }, { t: 20, s: [100] }]) }),
    layer("Deck Card Mid", [rect("Card Mid", 540, 315, "#193454", { radius: 30, stroke: "#4f8cc9", strokeWidth: 5, strokeOpacity: 90 })], { p: k([{ t: 4, s: [860, 500, 0] }, { t: 42, s: [820, 470, 0] }, { t: DURATION, s: [820, 470, 0] }]), r: s(5), o: k([{ t: 0, s: [0] }, { t: 24, s: [100] }]) }),
    layer("Deck Card Front", [
      rect("Card Front", 575, 335, "#f8fafc", { radius: 32, stroke: "#d7e3ef", strokeWidth: 5 }),
      rect("Title Bar", 375, 26, "#0f172a", { radius: 13, p: s([-42, -72]) }),
      rect("Line One", 425, 14, "#38bdf8", { radius: 7, p: s([0, 0]), fillOpacity: 90 }),
      rect("Line Two", 300, 14, "#f59e0b", { radius: 7, p: s([-62, 48]), fillOpacity: 90 }),
      ellipse("Accent Dot", 58, 58, "#10b981", { p: s([205, -86]) })
    ], { p: k([{ t: 0, s: [800, 540, 0] }, { t: 48, s: [800, 450, 0] }, { t: DURATION, s: [800, 450, 0] }]), s: k([{ t: 0, s: [82, 82, 100] }, { t: 48, s: [100, 100, 100] }, { t: 110, s: [103, 103, 100] }, { t: DURATION, s: [100, 100, 100] }]), o: k([{ t: 0, s: [0] }, { t: 18, s: [100] }]) }),
    movingDot("Orbit Spark A", [390, 370], [1210, 530], "#38bdf8", 16, 28),
    movingDot("Orbit Spark B", [1190, 320], [410, 590], "#facc15", 52, 22),
    layer("Glow Pulse", [ellipse("Glow", 250, 250, "#38bdf8", { fillOpacityProp: k([{ t: 0, s: [12] }, { t: 60, s: [22] }, { t: DURATION, s: [12] }]) })], { p: s([800, 450, 0]), s: k([{ t: 0, s: [65, 65, 100] }, { t: 75, s: [115, 115, 100] }, { t: DURATION, s: [65, 65, 100] }]) })
  ];

  return doc("Showcase Intro Orbit", layers);
}

function processFlow() {
  const nodePositions = [[300, 450], [620, 450], [940, 450], [1260, 450]];
  const layers = [
    bg("#f8fafc"),
    layer("Route One", [line("Route One", 315, "#94a3b8", { height: 10, opacity: 70 })], { p: s([460, 450, 0]), s: k([{ t: 0, s: [0, 100, 100] }, { t: 30, s: [100, 100, 100] }]) }),
    layer("Route Two", [line("Route Two", 315, "#94a3b8", { height: 10, opacity: 70 })], { p: s([780, 450, 0]), s: k([{ t: 20, s: [0, 100, 100] }, { t: 54, s: [100, 100, 100] }]) }),
    layer("Route Three", [line("Route Three", 315, "#94a3b8", { height: 10, opacity: 70 })], { p: s([1100, 450, 0]), s: k([{ t: 44, s: [0, 100, 100] }, { t: 78, s: [100, 100, 100] }]) }),
    ...nodePositions.flatMap(([x, y], idx) => [
      layer(`Node ${idx + 1} Halo`, [ellipse(`Node ${idx + 1} Halo`, 190, 190, "#dbeafe", { fillOpacityProp: k([{ t: idx * 18, s: [0] }, { t: idx * 18 + 16, s: [75] }, { t: idx * 18 + 64, s: [25] }, { t: DURATION, s: [45] }]) })], { p: s([x, y, 0]), s: k([{ t: idx * 18, s: [70, 70, 100] }, { t: idx * 18 + 20, s: [100, 100, 100] }, { t: DURATION, s: [94, 94, 100] }]) }),
      layer(`Node ${idx + 1}`, [
        ellipse(`Node ${idx + 1}`, 116, 116, idx === 3 ? "#10b981" : "#2563eb", { stroke: "#ffffff", strokeWidth: 8 }),
        rect(`Node ${idx + 1} Slot A`, 54, 10, "#ffffff", { radius: 5, p: s([0, -12]), fillOpacity: 85 }),
        rect(`Node ${idx + 1} Slot B`, 72, 10, "#ffffff", { radius: 5, p: s([0, 16]), fillOpacity: 65 })
      ], { p: s([x, y, 0]), s: k([{ t: idx * 18, s: [55, 55, 100] }, { t: idx * 18 + 18, s: [108, 108, 100] }, { t: idx * 18 + 28, s: [100, 100, 100] }, { t: DURATION, s: [100, 100, 100] }]), o: k([{ t: 0, s: [idx === 0 ? 100 : 0] }, { t: idx * 18 + 4, s: [100] }]) })
    ]),
    movingDot("Packet A", nodePositions[0], nodePositions[1], "#f59e0b", 18, 30),
    movingDot("Packet B", nodePositions[1], nodePositions[2], "#f59e0b", 48, 30),
    movingDot("Packet C", nodePositions[2], nodePositions[3], "#f59e0b", 78, 30),
    layer("Resolution Burst", [ellipse("Resolution Burst", 230, 230, null, { stroke: "#10b981", strokeWidthProp: k([{ t: 92, s: [22] }, { t: 128, s: [4] }, { t: DURATION, s: [1] }]), strokeOpacityProp: k([{ t: 92, s: [95] }, { t: 128, s: [10] }, { t: DURATION, s: [0] }]) })], { p: s([1260, 450, 0]), s: k([{ t: 92, s: [45, 45, 100] }, { t: 128, s: [132, 132, 100] }, { t: DURATION, s: [145, 145, 100] }]) }),
    layer("Bottom Timeline", [
      rect("Timeline Track", 960, 18, "#e2e8f0", { radius: 9 }),
      rect("Timeline Fill", 960, 18, "#0ea5e9", { radius: 9, p: s([0, 0]), s: k([{ t: 8, s: [0, 100] }, { t: 128, s: [100, 100] }, { t: DURATION, s: [100, 100] }]) })
    ], { p: s([800, 700, 0]) })
  ];

  return doc("Showcase Process Flow", layers);
}

function architectureSignalMap() {
  const layers = [
    bg("#0f172a"),
    layer("Backplane Glow", [ellipse("Backplane Glow", 980, 430, "#1d4ed8", { fillOpacity: 22 })], { p: s([800, 450, 0]), s: k([{ t: 0, s: [92, 92, 100] }, { t: 74, s: [104, 104, 100] }, { t: DURATION, s: [92, 92, 100] }]) }),
    layer("Platform Layer", [rect("Platform", 850, 130, "#1e293b", { radius: 24, stroke: "#64748b", strokeWidth: 4, strokeOpacity: 80 })], { p: s([800, 620, 0]) }),
    layer("Service Layer", [rect("Service", 720, 130, "#164e63", { radius: 24, stroke: "#22d3ee", strokeWidth: 4, strokeOpacity: 75 })], { p: k([{ t: 0, s: [800, 620, 0] }, { t: 36, s: [800, 470, 0] }, { t: DURATION, s: [800, 470, 0] }]), o: k([{ t: 0, s: [0] }, { t: 28, s: [100] }]) }),
    layer("Experience Layer", [rect("Experience", 590, 130, "#312e81", { radius: 24, stroke: "#a78bfa", strokeWidth: 4, strokeOpacity: 75 })], { p: k([{ t: 8, s: [800, 470, 0] }, { t: 54, s: [800, 320, 0] }, { t: DURATION, s: [800, 320, 0] }]), o: k([{ t: 0, s: [0] }, { t: 38, s: [100] }]) }),
    ...[[535, 320], [800, 320], [1065, 320], [475, 470], [800, 470], [1125, 470], [390, 620], [640, 620], [960, 620], [1210, 620]].map(([x, y], idx) =>
      layer(`Module ${idx + 1}`, [
        rect(`Module ${idx + 1}`, 92, 58, idx < 3 ? "#c4b5fd" : idx < 6 ? "#67e8f9" : "#cbd5e1", { radius: 12, fillOpacity: 95 }),
        ellipse(`Module ${idx + 1} Dot`, 14, 14, "#ffffff", { p: s([30, -14]), fillOpacity: 80 })
      ], { p: s([x, y, 0]), o: k([{ t: 0, s: [0] }, { t: 20 + idx * 4, s: [100] }]), s: k([{ t: 8 + idx * 4, s: [70, 70, 100] }, { t: 22 + idx * 4, s: [100, 100, 100] }, { t: DURATION, s: [100, 100, 100] }]) })
    ),
    ...[[800, 392], [800, 545], [640, 545], [960, 545]].map(([x, y], idx) =>
      layer(`Signal Spine ${idx + 1}`, [line(`Signal Spine ${idx + 1}`, idx === 0 ? 150 : 115, "#38bdf8", { height: 8, opacity: 80, r: s(90) })], { p: s([x, y, 0]), s: k([{ t: 50 + idx * 8, s: [0, 100, 100] }, { t: 78 + idx * 8, s: [100, 100, 100] }, { t: DURATION, s: [100, 100, 100] }]) })
    ),
    movingDot("Signal Up A", [800, 620], [800, 320], "#facc15", 74, 24),
    movingDot("Signal Up B", [475, 470], [1065, 320], "#38bdf8", 92, 20),
    movingDot("Signal Down", [1065, 320], [1210, 620], "#f472b6", 112, 20)
  ];

  return doc("Showcase Architecture Signal Map", layers);
}

function resultsDashboard() {
  const bars = [
    [515, 620, 155, "#38bdf8", 30],
    [655, 620, 245, "#2563eb", 42],
    [795, 620, 315, "#10b981", 54],
    [935, 620, 385, "#f59e0b", 66],
    [1075, 620, 430, "#ef4444", 78]
  ];
  const layers = [
    bg("#fffaf0"),
    layer("Dashboard Shell", [rect("Dashboard", 1040, 600, "#ffffff", { radius: 34, stroke: "#e2e8f0", strokeWidth: 5, fillOpacity: 82 })], { p: s([800, 450, 0]) }),
    layer("Metric Card A", [rect("Metric A", 255, 130, "#eff6ff", { radius: 22 }), rect("Metric A Line", 155, 16, "#2563eb", { radius: 8, p: s([-28, 18]) }), ellipse("Metric A Dot", 54, 54, "#38bdf8", { p: s([-78, -24]) })], { p: k([{ t: 0, s: [590, 270, 0] }, { t: 28, s: [570, 250, 0] }, { t: DURATION, s: [570, 250, 0] }]), o: k([{ t: 0, s: [0] }, { t: 20, s: [100] }]) }),
    layer("Metric Card B", [rect("Metric B", 255, 130, "#ecfdf5", { radius: 22 }), rect("Metric B Line", 155, 16, "#059669", { radius: 8, p: s([-28, 18]) }), ellipse("Metric B Dot", 54, 54, "#10b981", { p: s([-78, -24]) })], { p: k([{ t: 0, s: [1010, 270, 0] }, { t: 34, s: [1030, 250, 0] }, { t: DURATION, s: [1030, 250, 0] }]), o: k([{ t: 0, s: [0] }, { t: 24, s: [100] }]) }),
    layer("Chart Axis", [line("Chart Axis X", 700, "#cbd5e1", { height: 8 }), line("Chart Axis Y", 310, "#cbd5e1", { height: 8, r: s(90), p: s([-350, -155]) })], { p: s([800, 690, 0]) }),
    ...bars.map(([x, y, height, color, delay], idx) =>
      layer(`Result Bar ${idx + 1}`, [rect(`Result Bar ${idx + 1}`, 78, height, color, { radius: 18, p: s([0, -height / 2]) })], { p: s([x, y, 0]), s: k([{ t: delay, s: [100, 0, 100] }, { t: delay + 28, s: [100, 100, 100] }, { t: DURATION, s: [100, 100, 100] }]) })
    ),
    layer("Trend Line A", [line("Trend A", 200, "#0f172a", { height: 10, r: s(-18) })], { p: s([650, 470, 0]), s: k([{ t: 72, s: [0, 100, 100] }, { t: 100, s: [100, 100, 100] }]) }),
    layer("Trend Line B", [line("Trend B", 230, "#0f172a", { height: 10, r: s(-28) })], { p: s([835, 405, 0]), s: k([{ t: 88, s: [0, 100, 100] }, { t: 116, s: [100, 100, 100] }]) }),
    layer("Success Ring", [ellipse("Success Ring", 260, 260, null, { stroke: "#10b981", strokeWidthProp: k([{ t: 98, s: [24] }, { t: 130, s: [8] }, { t: DURATION, s: [6] }]), strokeOpacityProp: k([{ t: 98, s: [100] }, { t: 136, s: [45] }, { t: DURATION, s: [22] }]) })], { p: s([1160, 315, 0]), s: k([{ t: 98, s: [45, 45, 100] }, { t: 136, s: [115, 115, 100] }, { t: DURATION, s: [105, 105, 100] }]) }),
    layer("Check Mark", [line("Check Short", 88, "#10b981", { height: 18, r: s(44), p: s([-28, 8]) }), line("Check Long", 154, "#10b981", { height: 18, r: s(-44), p: s([44, -20]) })], { p: s([1160, 315, 0]), s: k([{ t: 112, s: [0, 0, 100] }, { t: 132, s: [100, 100, 100] }, { t: DURATION, s: [100, 100, 100] }]) }),
    ...bars.map(([x, y, height, color, delay], idx) =>
      layer(`Result Bar Foreground ${idx + 1}`, [
        rect(`Result Bar Foreground ${idx + 1}`, 58, height, color, { radius: 16, p: s([0, -height / 2]), fillOpacity: 88 }),
        rect(`Result Bar Shine ${idx + 1}`, 18, Math.max(80, height - 42), "#ffffff", { radius: 9, p: s([-13, -height / 2]), fillOpacity: 22 })
      ], {
        p: s([x, y, 0]),
        o: k([{ t: Math.max(8, delay - 18), s: [0] }, { t: delay + 8, s: [100] }, { t: DURATION, s: [100] }])
      })
    )
  ];

  return doc("Showcase Results Dashboard", layers);
}

const outputs = {
  "intro-orbit.json": introOrbit(),
  "process-flow-showcase.json": processFlow(),
  "architecture-signal-map.json": architectureSignalMap(),
  "results-dashboard.json": resultsDashboard()
};

mkdirSync(outDir, { recursive: true });

for (const [name, body] of Object.entries(outputs)) {
  writeFileSync(join(outDir, name), `${JSON.stringify(body, null, 2)}\n`);
}
