# `ease.js` – Classic Easing Functions for Smooth Animations

A **zero-dependency**, pure JavaScript collection of **Robert Penner’s easing equations**, ported faithfully for use in custom animations, scroll effects, canvas, or any time-based interpolation.

> 📦 **< 1.5KB** minified  
> 🧪 **No side effects** — just pure math  
> 🌲 **Tree-shakable** — import only what you need  
> ✨ **Drop-in replacement** for any animation loop

---

## 📦 Installation

Copy `ease.js` into your project and import the entire set or individual functions:

```js
// Import all
import ease from './ease.js';

// Or import just what you need (tree-shaking friendly)
import { easeOutExpo, easeInOutQuad } from './ease.js';
```

> ✅ Works in browsers, bundlers (Vite, Rollup, etc.), and modern runtimes  
> ❌ ES modules only (no CommonJS)

---

## 🧠 How to Use

All functions follow the **standard Penner signature**:

```js
easingFunction(time, startValue, changeInValue, duration)
```

| Parameter | Meaning |
|---------|--------|
| `t` (time) | Current time (e.g., `elapsedMs`) |
| `b` (begin) | Starting value (e.g., `0`) |
| `c` (change) | Total change in value (e.g., `100 - 0 = 100`) |
| `d` (duration) | Total animation duration (e.g., `500` ms) |

### Example: Animate a progress bar
```js
import { easeOutQuad } from './ease.js';

let start = null;
const duration = 800;
const from = 0;
const to = 300;

function animate(timestamp) {
  if (!start) start = timestamp;
  const elapsed = timestamp - start;
  const progress = Math.min(elapsed, duration);

  const value = easeOutQuad(progress, from, to - from, duration);
  progressBar.style.width = value + 'px';

  if (elapsed < duration) {
    requestAnimationFrame(animate);
  }
}

requestAnimationFrame(animate);
```

---

## 📚 Available Easing Functions

All standard Penner equations are included:

### Linear
- `linearTween`

### Quadratic
- `easeInQuad`
- `easeOutQuad`
- `easeInOutQuad`

### Cubic
- `easeInCubic`
- `easeOutCubic`
- `easeInOutCubic`

### Quartic
- `easeInQuart`
- `easeOutQuart`
- `easeInOutQuart`

### Quintic
- `easeInQuint`
- `easeOutQuint`
- `easeInOutQuint`

### Sinusoidal
- `easeInSine`
- `easeOutSine`
- `easeInOutSine`

### Exponential
- `easeInExpo`
- `easeOutExpo`
- `easeInOutExpo`

### Circular
- `easeInCirc`
- `easeOutCirc`
- `easeInOutCirc`

> 💡 **Tip**: For most UI animations, `easeOutQuad` or `easeOutCubic` feel the most natural.

---

## 🧭 Why This Exists

- **No framework lock-in**: Use with `requestAnimationFrame`, GSAP, Canvas, or your own ticker
- **Tiny & fast**: No classes, no state — just math
- **Faithful implementation**: Matches original Penner equations used in Flash, jQuery UI, and beyond
- **Predictable**: Always returns a number — no surprises

---

## 📄 License

See [LICENSE](./LICENSE)
