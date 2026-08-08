# `ease.js` – Classic Easing Functions for Smooth Animations

A **zero-dependency**, pure JavaScript collection of **Robert Penner’s easing equations**, ported faithfully for use in custom animations, scroll effects, canvas, or time-based interpolation.

> 📦 **Zero runtime dependencies** • 🧪 **No side effects** • 🌲 **Tree-shakable** • ✨ **Pure functions**

---

## 📦 Installation

Place `src/ease.js` in your project and import the default object or individual named functions:

```js
// Import default collection object
import ease from './ease.js';

// Or import named easing functions (tree-shaking friendly)
import { easeOutExpo, easeInOutQuad } from './ease.js';
```

---

## 🧠 How to Use

All functions follow the **standard Penner signature**:

```js
easingFunction(time, begin, change, duration)
```

| Parameter | Type | Meaning |
|-----------|------|---------|
| `time` | `number` | Elapsed time (e.g., `elapsedMs`) |
| `begin` | `number` | Starting value (e.g., `0`) |
| `change` | `number` | Total change in value (e.g., `100 - 0 = 100`) |
| `duration` | `number` | Total animation duration (e.g., `500` ms) |

### Example: Animate a progress bar
```js
import { easeOutQuad } from './ease.js';

let start = null;
const duration = 800;
const from = 0;
const to = 300;

function animate(timestamp) {
    if (start === null) {
        start = timestamp;
    }
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed, duration);

    const value = easeOutQuad(progress, from, to - from, duration);
    progressBar.style.width = String(value) + "px";

    if (elapsed < duration) {
        requestAnimationFrame(animate);
    }
}

requestAnimationFrame(animate);
```

---

## 📚 Available Easing Functions

All standard Penner equations are included and exported in **alphabetical order**:

- `easeInCirc`, `easeInCubic`, `easeInExpo`, `easeInQuad`, `easeInQuart`, `easeInQuint`, `easeInSine`
- `easeInOutCirc`, `easeInOutCubic`, `easeInOutExpo`, `easeInOutQuad`, `easeInOutQuart`, `easeInOutQuint`, `easeInOutSine`
- `easeOutCirc`, `easeOutCubic`, `easeOutExpo`, `easeOutQuad`, `easeOutQuart`, `easeOutQuint`, `easeOutSine`
- `linearTween`

---

## 🧪 Testing

This library includes a zero-dependency, comprehensive browser-based verification suite (50+ assertions covering boundary points, interpolation curves, and type guards).

To run the test suite:

1. Serve the repository using any static web server (e.g., Nginx, Caddy, or Python's `http.server`).
2. Open `tests/index.html` in your browser (e.g., `http://localhost/tests/index.html`).
3. View results visually on the page or open Developer Tools (`F12` -> **Console**) to inspect grouped log outputs and execution metrics.

---

## 📄 License

See [LICENSE](./LICENSE)
