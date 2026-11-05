---
name: screenshot-to-code
description: >-
  Use this skill when provided with an image, screenshot, or UI mockup.
  Analyzes layout hierarchy, visual flow, spacing rhythm, typography, and responsive breakpoints,
  and converts the visual into pixel-accurate, semantic, accessible Next.js 16 + Tailwind CSS v4 components
  strictly mapped to design system tokens.
---

# Screenshot to Production Code (`screenshot-to-code`)

## 1. Purpose & Triggers
Translating visual designs into production software is not just an aesthetic task—it is a structural and architectural translation. This skill governs the extraction of UI mockups into clean, accessible, high-performance React components.

### Triggers:
- When the user provides a screenshot, UI mockup, or wireframe.
- When recreating a reference e-commerce experience (e.g., luxury product grid, multi-step checkout wizard, responsive cart drawer, mobile navigation sheet).

---

## 2. The 5-Phase Vision-to-Code Pipeline

```
[ Visual Screenshot ]
        │
        ▼
[ Phase 1: Visual Deconstruction & Box Model Audit ]
        │
        ▼
[ Phase 2: Design Token & Theme Mapping ]
        │
        ▼
[ Phase 3: Next.js 16 Component Boundary Architecture ]
        │
        ▼
[ Phase 4: Semantic HTML & Accessibility (A11y) Implementation ]
        │
        ▼
[ Phase 5: Core Web Vitals & Image Optimization ]
```

---

### Phase 1: Visual Deconstruction & Box Model Audit
Analyze the image methodically before writing code:
1. **Layout Paradigm:** Determine whether sections use CSS Flexbox (1D alignment) or CSS Grid (2D multi-axis layout).
2. **Spacing Rhythm:** Measure paddings, gutters, and margins. Snap them to our 4px/8px design system scale (e.g., `gap-2`, `gap-4`, `gap-6`, `p-6`).
3. **Typography Hierarchy:** Identify heading levels, body text, and metadata. Extract relative font weights, letter spacing, and line heights.
4. **Responsive Strategy:** Deduce how the layout transforms across breakpoints:
   - Mobile: `< 640px` (Single column, stacked layout, bottom sheets)
   - Tablet: `640px - 1024px` (2-column grids, collapsible panels)
   - Desktop: `> 1024px` (Multi-column grids, fixed sidebars, sticky summaries)

---

### Phase 2: Design Token & Theme Mapping
Never use raw hex colors or arbitrary dimensions extracted from visual inspecting tools. Map them strictly to Tailwind v4 tokens:
- Backgrounds: Map to `bg-surface-canvas`, `bg-surface-panel`, `bg-surface-elevated`.
- Text: Map to `text-content-primary`, `text-content-secondary`, `text-content-muted`.
- Borders: Map to `border-border-subtle`, `border-border-strong`.
- Radii: Map to `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-full`.
- Shadows: Map to semantic elevation tokens (`shadow-sm`, `shadow-md`, `shadow-lg`).
- **Logical Direction Enforcement (RTL Readiness):** Never emit physical directions. Map horizontal spacing and positioning to logical utilities:
  - Margins: `ms-*` and `me-*` (never `ml-*` or `mr-*`).
  - Paddings: `ps-*` and `pe-*` (never `pl-*` or `pr-*`).
  - Positioning: `start-*` and `end-*` (never `left-*` or `right-*`).
  - Alignment: `text-start` and `text-end` (never `text-left` or `text-right`).
  - Directional icons: Add `rtl:rotate-180` to navigation chevrons or arrows.

---

### Phase 3: Next.js 16 Component Boundary Architecture
Partition the visual UI into distinct architectural layers:
1. **Server Component by Default (RSC):**
   - The shell, layout, static text, product description, and server-rendered price tags remain Server Components.
   - Zero JavaScript bundle overhead for static markup.
2. **Client Component Micro-Islands (`'use client'`):**
   - Isolate interactivity into leaf components only:
     - Quantity stepper (`<QuantityPicker />`)
     - Variant selector (`<VariantSelector />`)
     - Add to cart button with optimistic feedback (`<AddToCartButton />`)
     - Image gallery thumbnail switcher (`<GalleryViewer />`)
3. **Type Safety & Data Contracts:**
   - Define strict TypeScript interfaces for all component props.
   - Separate UI Presentation Models (DTOs) from raw backend or database models.

---

### Phase 4: Semantic HTML & Accessibility (A11y)
1. **Semantic Elements:**
   - Use `<article>` for product cards, blog cards, or order items.
   - Use `<nav>` for breadcrumbs and pagination.
   - Use `<header>` and `<footer>` for structural sections.
   - Use `<aside>` for filter sidebars or cart drawers.
2. **Interactive Elements:**
   - Use native `<button type="button">` for actions, not clickable `<div>`s.
   - Use `<dialog>` or accessible modal primitives with focus trapping and ESC key handling.
3. **Screen Reader Context:**
   - Add visually hidden text (`sr-only`) for icon-only buttons (e.g., `<span className="sr-only">Close cart</span>`).
   - Use `aria-current="page"` for active navigation links.
   - Ensure color contrast satisfies minimum 4.5:1 ratio.

---

### Phase 5: Core Web Vitals & Image Optimization
1. **Cumulative Layout Shift (CLS = 0):**
   - Enforce explicit aspect ratios on all image containers (e.g., `aspect-[3/4]`, `aspect-square`).
   - Use skeleton placeholders that mirror exact dimensions of the image.
2. **Largest Contentful Paint (LCP):**
   - For above-the-fold hero images or primary product images:
     ```tsx
     <Image
       src={product.thumbnail}
       alt={product.title}
       priority={true}
       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
       fill
       className="object-cover"
     />
     ```
   - For below-the-fold items, utilize native lazy loading (`loading="lazy"`).

