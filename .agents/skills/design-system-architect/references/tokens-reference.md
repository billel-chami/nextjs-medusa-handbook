# Design Tokens & Theme Specification Reference (Tailwind CSS v4)

## Overview
Tailwind CSS v4 replaces JavaScript configuration files (`tailwind.config.js`) with CSS-native `@theme` declarations. This reference provides the foundational tokens and calculations for our headless e-commerce store.

---

## 1. Perceptually Uniform Color System (OKLCH)
Using OKLCH ensures predictable lightness, chroma, and hue across display screens:

```css
@theme {
  /* Surfaces */
  --color-surface-canvas: oklch(0.99 0.002 240);    /* Main page background */
  --color-surface-panel: oklch(0.97 0.005 240);     /* Cards, sidebars */
  --color-surface-elevated: oklch(1 0 0);           /* Dropdowns, modals */
  --color-surface-sunken: oklch(0.94 0.01 240);     /* Wells, inputs */

  /* Text & Foreground Content */
  --color-content-primary: oklch(0.15 0.02 240);    /* Headings, body */
  --color-content-secondary: oklch(0.42 0.03 240);  /* Subtitles, labels */
  --color-content-muted: oklch(0.62 0.02 240);      /* Placeholders, disabled */
  --color-content-inverse: oklch(0.99 0 0);         /* Text on dark buttons */

  /* Borders */
  --color-border-subtle: oklch(0.92 0.01 240);
  --color-border-strong: oklch(0.80 0.02 240);
  --color-border-interactive: oklch(0.20 0.03 240);

  /* Brand Accents */
  --color-brand-primary: oklch(0.25 0.05 250);
  --color-brand-hover: oklch(0.20 0.05 250);
  --color-brand-accent: oklch(0.68 0.18 45);

  /* Semantic Status States */
  --color-state-error: oklch(0.62 0.22 25);
  --color-state-success: oklch(0.65 0.18 145);
  --color-state-warning: oklch(0.75 0.15 80);
}
```

---

## 2. Fluid Typography Math (`clamp`)
Fluid scaling smoothly interpolates between minimum viewport width (375px) and maximum viewport width (1440px):

```css
@theme {
  /* Display: min 40px at 375px, max 72px at 1440px */
  --text-display: clamp(2.5rem, 5vw + 1rem, 4.5rem);

  /* H1: min 32px at 375px, max 48px at 1440px */
  --text-h1: clamp(2rem, 3vw + 1rem, 3rem);

  /* H2: min 24px at 375px, max 36px at 1440px */
  --text-h2: clamp(1.5rem, 2vw + 0.8rem, 2.25rem);

  /* H3: min 20px at 375px, max 28px at 1440px */
  --text-h3: clamp(1.25rem, 1.5vw + 0.6rem, 1.75rem);

  /* Body Scales */
  --text-body-lg: 1.125rem;  /* 18px */
  --text-body: 1rem;         /* 16px */
  --text-body-sm: 0.875rem;  /* 14px */
  --text-caption: 0.75rem;   /* 12px */
}
```

---

## 3. Layout & Geometry Constraints
```css
@theme {
  --radius-xs: 0.125rem;
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-full: 9999px;

  /* Touch Targets for Mobile Accessibility (Minimum 44x44px or 48x48px) */
  --size-touch-target: 2.75rem; /* 44px */
  --size-header-height: 4.5rem;  /* 72px */
}
```

---

## 4. Bi-Directional & RTL Architecture (CSS Logical Properties)

To make Right-to-Left (RTL) locales (Arabic, Hebrew, Persian, Urdu) seamless, physical directional utilities are strictly prohibited. Always use CSS logical properties:

### Directional Utility Mapping:

| Property Category | Forbidden Physical Utility | Enforced CSS Logical Utility | Underlying CSS Property |
| :--- | :--- | :--- | :--- |
| **Margin Left** | `ml-4` | `ms-4` | `margin-inline-start: 1rem;` |
| **Margin Right** | `mr-4` | `me-4` | `margin-inline-end: 1rem;` |
| **Padding Left** | `pl-6` | `ps-6` | `padding-inline-start: 1.5rem;` |
| **Padding Right** | `pr-6` | `pe-6` | `padding-inline-end: 1.5rem;` |
| **Left Position** | `left-0` | `start-0` | `inset-inline-start: 0;` |
| **Right Position** | `right-0` | `end-0` | `inset-inline-end: 0;` |
| **Border Left** | `border-l` | `border-s` | `border-inline-start-width: 1px;` |
| **Border Right** | `border-r` | `border-e` | `border-inline-end-width: 1px;` |
| **Border Radius Left** | `rounded-l-lg` | `rounded-s-lg` | `border-start-start-radius`, `border-end-start-radius` |
| **Border Radius Right** | `rounded-r-lg` | `rounded-e-lg` | `border-start-end-radius`, `border-end-end-radius` |
| **Text Alignment** | `text-left` | `text-start` | `text-align: start;` |
| **Text Alignment** | `text-right` | `text-end` | `text-align: end;` |

### Bi-Directional Component Rules:
1. **Directional Glyphs & Chevrons:** Navigation chevrons (e.g. forward arrow `→`, back arrow `←`, breadcrumb separators `/`) must apply `rtl:rotate-180` so they flip automatically when reading direction is reversed.
2. **Horizontal Flexbox & Grid:** Flex containers (`flex flex-row`) automatically order items from start to end based on document `dir="rtl"` or `dir="ltr"` attribute without class changes.
3. **Cartesian Overrides:** Only use explicit `left-` or `right-` if coordinates are absolute Cartesian metrics (such as canvas graphs, video scrubbing timeline, or geographic map overlays).


