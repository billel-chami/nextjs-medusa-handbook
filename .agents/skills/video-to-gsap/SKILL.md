---
name: video-to-gsap
description: >-
  Use this skill when provided with a video recording, GIF, or prototype animation (e.g. Figma prototype).
  Deconstructs motion choreography into timing, easing curves, spatial trajectories, and staggers,
  and implements hardware-accelerated, leak-free GSAP animations in Next.js 16 using @gsap/react and useGSAP.
---

# Video & Prototype Motion Extraction (`video-to-gsap`)

## 1. Purpose & Triggers
Fluid micro-interactions and cinematic motion differentiate high-end commerce experiences. However, poorly implemented web animations cause thread blocking, dropped frames (jank), memory leaks, and poor Interaction to Next Paint (INP). This skill governs the extraction and implementation of butter-smooth 60/120 FPS animations.

### Triggers:
- When the user provides a video clip, GIF, or Figma motion prototype.
- When animating cart slide-overs, page transitions, accordion expands, product card hovers, or checkout completion celebrations.
- When creating scroll-driven animations with ScrollTrigger.

---

## 2. Motion Deconstruction Protocol

When analyzing a motion clip, systematically identify:
1. **The Choreography Sequence:**
   - **Staging / Trigger:** What action starts the motion (hover, scroll, route change, click)?
   - **Anticipation:** Is there a subtle counter-movement before the primary motion?
   - **Action & Travel:** Which elements move, in what directions, over what distance (px, rem, or %)?
   - **Settling & Follow-Through:** Does it overshoot (spring/elastic) or decelerate smoothly (`power3.out`, `expo.out`)?
2. **Timing Breakdown:**
   - Duration of each element (e.g., drawer entry: `450ms`, backdrop fade: `300ms`).
   - Stagger offset between staggered children (e.g., product grid cards: `0.06s` stagger).
3. **Easing Signature:**
   - Linear: strictly for continuous loops (e.g. marquee).
   - Ease-out (`power2.out`, `expo.out`): for UI entrances (fast entry, gentle settle).
   - Ease-in (`power2.in`): for UI exits (accelerates away offscreen).
   - Ease-in-out (`power3.inOut`): for state transformations staying in view.

---

## 3. Performance & Hardware Acceleration Standards

### Rule 1: Animate Composite Properties Only
- **Permitted:** `transform` (`x`, `y`, `xPercent`, `yPercent`, `scale`, `rotation`, `skew`) and `opacity` (or GSAP `autoAlpha`).
- **Strictly Prohibited:** Animating layout or paint properties (`width`, `height`, `top`, `left`, `right`, `bottom`, `margin`, `padding`, `border-width`). These force the browser CPU to recalculate layout geometry and repaint pixels every frame, causing INP degradation and frame drops.

### Rule 2: Zero Memory Leaks with Scoped `useGSAP`
- Always use the official `@gsap/react` package and `useGSAP` hook.
- Provide a `scope` container ref. Every selector inside will be automatically scoped, and all timelines, tweens, and ScrollTrigger instances will be cleanly reverted and killed when the component unmounts.
- This prevents zombie event listeners and memory retention in Single Page Apps and React 19 fast-refresh cycles.

### Rule 3: Eliminate FOUC (Flash of Unstyled Content)
- Use `autoAlpha` instead of `opacity`. `autoAlpha` sets `visibility: hidden` when opacity hits 0, preventing ghost clicks and rendering flashes before hydration.
- Alternatively, declare CSS default hidden states and reveal them with `gsap.fromTo`.

---

## 4. Production Implementation Blueprint

```tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure plugins are registered safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

interface ProductShowcaseProps {
  readonly items: Array<{ id: string; title: string; price: string }>;
}

export function ProductShowcase({ items }: ProductShowcaseProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // Hardware-accelerated entrance timeline
      const tl = gsap.timeline({
        defaults: {
          ease: "expo.out",
          duration: 0.8,
        },
      });

      tl.from(".showcase-header", {
        autoAlpha: 0,
        y: 30,
        clearProps: "all", // Clean up inline styles post-animation
      }).from(
        ".product-card",
        {
          autoAlpha: 0,
          y: 40,
          scale: 0.96,
          stagger: 0.08,
          duration: 0.7,
          clearProps: "transform,opacity",
        },
        "-=0.4" // Seamless overlap
      );
    },
    { scope: containerRef } // Scoped cleanup boundary
  );

  return (
    <section ref={containerRef} className="w-full py-16 px-6">
      <div className="showcase-header max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-h1 font-bold text-content-primary">Featured Collection</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {items.map((item) => (
          <article
            key={item.id}
            className="product-card will-change-transform bg-surface-elevated rounded-lg p-6 border border-border-subtle"
          >
            <h3 className="text-h3 font-semibold text-content-primary">{item.title}</h3>
            <p className="text-content-secondary mt-2">{item.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
```

---

## 5. Reduced Motion Compliance
Always respect users who prefer reduced motion:
```tsx
const { contextSafe } = useGSAP({ scope: containerRef });

// Check accessibility preference
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  // Instantly render in final resting state without animation
  gsap.set([".showcase-header", ".product-card"], { autoAlpha: 1, y: 0, scale: 1 });
  return;
}
```

