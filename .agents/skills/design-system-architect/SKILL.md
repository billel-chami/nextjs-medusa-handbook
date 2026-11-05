---
name: design-system-architect
description: >-
  Use this skill when designing, styling, or creating UI components and layouts.
  Enforces a centralized, CSS-first design token system in Tailwind CSS v4 using the @theme directive,
  strict CSS logical properties for seamless bi-directional (LTR/RTL) internationalization,
  strict component composition patterns, WCAG AA/AAA accessibility, fluid typography,
  and a zero-magic-value policy.
---

# Design System Architect (`design-system-architect`)

## 1. Purpose & Triggers
A production-grade headless e-commerce platform requires an unyielding, predictable visual and interactive hierarchy. This skill ensures that every pixel, color, margin, and typography style derives from a formal design token system configured in Tailwind CSS v4.

### Triggers:
- When creating or modifying styles, CSS files, or Tailwind configurations.
- When scaffolding UI atoms, molecules, or composite layout components (buttons, badges, inputs, product cards, modals, drawers).
- When converting designs or screenshots into code.
- When auditing visual consistency, color contrast, or Core Web Vitals (specifically CLS).

---

## 2. Core Constraints & Industrial Rules

### Rule 1: Tailwind CSS v4 CSS-First Architecture
- **NEVER** create or use `tailwind.config.js` or `tailwind.config.ts`.
- Tailwind v4 uses CSS-first configuration via `@import "tailwindcss";` and `@theme`.
- All tokens are declared inside `@theme` in the global stylesheet (e.g., `src/app/globals.css`).

### Rule 2: Zero Magic Values Policy
- **Forbidden:** Arbitrary bracket utilities like `p-[17px]`, `w-[323px]`, `bg-[#1a1b1e]`, `text-[13px]`.
- **Enforced:** Every value must map to a semantic token defined in `@theme` (e.g., `p-4`, `w-full max-w-card`, `bg-surface-elevated`, `text-body-sm`).
- If an exact measurement is required across components, declare a named token in `@theme` first.

### Rule 3: 3-Tier Design Token Taxonomy
1. **Tier 1: Primitive Tokens (Raw Scales)**
   - Base color palettes (e.g., Slate, Zinc, Neutral, Amber).
   - Base units and raw scales.
2. **Tier 2: Semantic Tokens (Meaning & Intent)**
   - Surface: `bg-surface-canvas`, `bg-surface-panel`, `bg-surface-elevated`, `bg-surface-overlay`.
   - Content: `text-content-primary`, `text-content-secondary`, `text-content-muted`, `text-content-inverse`.
   - Interactive: `bg-brand-primary`, `bg-brand-hover`, `bg-brand-active`, `border-brand-focus`.
   - Feedback: `status-success`, `status-warning`, `status-error`, `status-info`.
3. **Tier 3: Component Tokens (Component-Specific Constraints)**
   - Header height: `--height-header: 4.5rem;`
   - Product card aspect ratio: `--aspect-product: 3 / 4;`
   - Bottom sheet drawer max-width: `--width-drawer: 28rem;`

### Rule 4: Mandatory CSS Logical Properties for Bi-Directional (LTR/RTL) Parity
Headless e-commerce serves global markets. To guarantee seamless Right-to-Left (RTL) support (e.g., Arabic, Hebrew, Urdu) without rewriting or duplicating styles:
- **Strictly Prohibited:** Physical direction utilities like `ml-*`, `mr-*`, `pl-*`, `pr-*`, `left-*`, `right-*`, `border-l-*`, `border-r-*`, `rounded-l-*`, `rounded-r-*`, `text-left`, `text-right`.
- **Enforced:** Use CSS Logical Properties:
  - Margins: `ms-*` (margin-inline-start), `me-*` (margin-inline-end).
  - Paddings: `ps-*` (padding-inline-start), `pe-*` (padding-inline-end).
  - Positioning: `start-*` (inset-inline-start), `end-*` (inset-inline-end).
  - Borders: `border-s-*`, `border-e-*`.
  - Border Radii: `rounded-s-*`, `rounded-e-*`, `rounded-ts-*`, `rounded-te-*`, `rounded-bs-*`, `rounded-be-*`.
  - Text Alignment: `text-start`, `text-end`.
  - Directional Icons: Add `rtl:rotate-180` to directional navigation arrows, chevrons, and pagination buttons so they automatically mirror in RTL reading contexts.

---

## 3. Tailwind CSS v4 `@theme` Specification Template

```css
@import "tailwindcss";

@theme {
  /* ==========================================================================
     COLOR TOKENS (HSL / OKLCH for perceptually uniform color spaces)
     ========================================================================== */
  --color-canvas: oklch(0.99 0.002 240);
  --color-surface-panel: oklch(0.97 0.005 240);
  --color-surface-elevated: oklch(1 0 0);
  --color-surface-sunken: oklch(0.94 0.01 240);

  --color-content-primary: oklch(0.15 0.02 240);
  --color-content-secondary: oklch(0.42 0.03 240);
  --color-content-muted: oklch(0.62 0.02 240);
  --color-content-inverse: oklch(0.99 0 0);

  --color-border-subtle: oklch(0.92 0.01 240);
  --color-border-strong: oklch(0.80 0.02 240);
  --color-border-interactive: oklch(0.20 0.03 240);

  --color-brand-primary: oklch(0.25 0.05 250);
  --color-brand-hover: oklch(0.20 0.05 250);
  --color-brand-accent: oklch(0.68 0.18 45);

  --color-state-error: oklch(0.62 0.22 25);
  --color-state-success: oklch(0.65 0.18 145);
  --color-state-warning: oklch(0.75 0.15 80);

  /* ==========================================================================
     TYPOGRAPHY TOKENS (Fluid scaling via clamp())
     ========================================================================== */
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  --text-display: clamp(2.5rem, 5vw + 1rem, 4.5rem);
  --text-h1: clamp(2rem, 3vw + 1rem, 3rem);
  --text-h2: clamp(1.5rem, 2vw + 0.8rem, 2.25rem);
  --text-h3: clamp(1.25rem, 1.5vw + 0.6rem, 1.75rem);
  --text-body-lg: 1.125rem;
  --text-body: 1rem;
  --text-body-sm: 0.875rem;
  --text-caption: 0.75rem;

  /* ==========================================================================
     SPACING & LAYOUT TOKENS
     ========================================================================== */
  --spacing-container-padding: clamp(1rem, 4vw, 3rem);
  --spacing-section-gap: clamp(3rem, 6vw, 6rem);
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-full: 9999px;

  /* ==========================================================================
     MOTION & EASING TOKENS
     ========================================================================== */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out-smooth: cubic-bezier(0.65, 0, 0.35, 1);
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
}
```

---

## 4. Component Composition & Accessibility Standards

### 1. Pure UI Separation (Presentation vs Logic)
- Presentation components MUST be pure, stateless or cleanly managed, and decoupled from direct network calls.
- Accept typed data props or use compound subcomponents (e.g., `ProductCard.Root`, `ProductCard.Image`, `ProductCard.Price`).
- Never perform direct Medusa SDK queries inside a presentation atom. Data is fetched in Server Components or passed from application controllers.

### 2. Accessibility (WCAG 2.2 AAA / AA Compliance)
- **Focus Rings:** Every interactive element must display an unambiguous visible focus indicator: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2`.
- **Keyboard Navigation:** Native `<button>`, `<input>`, `<a>` elements or Radix UI accessible primitives. Custom buttons with `div` or `span` are strictly prohibited.
- **Color Contrast:** Foreground to background contrast must achieve minimum 4.5:1 for standard text and 3:1 for large display text.
- **Screen Reader Support:** Accessible labels (`aria-label`, `aria-labelledby`, `aria-describedby`, `sr-only` context for visual badges).
- **Reduced Motion:** Wrap non-essential animations in `@media (prefers-reduced-motion: no-preference)` or use `motion-safe:` variants.

### 3. Core Web Vitals (CLS Prevention)
- Explicit layout reservations: Never render an image or dynamic box without defined aspect ratio or width/height dimensions.
- Use CSS `aspect-ratio: 1 / 1` or `aspect-[3/4]` to prevent layout shifting during image load.
- Skeleton loaders must strictly match the exact dimensions, line height, and border radius of the target hydrated component.

