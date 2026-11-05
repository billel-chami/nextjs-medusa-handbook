---
name: autonomous-code-review
description: >-
  Use this skill automatically immediately after writing or modifying any code, BEFORE presenting the final output to the user.
  Audits the code against SOLID principles, Clean Architecture boundaries, Next.js 16 Server/Client rules,
  OWASP Top 10 enterprise security vulnerabilities, and Core Web Vitals / memory-leak performance standards.
  Executes an iterative self-correction loop until all standards pass.
---

# Autonomous Code Review & Self-Correction Loop (`autonomous-code-review`)

## 1. Purpose & Triggers
A Principal Software Architect does not wait for a pull request review or production incident to discover flaws. This skill serves as an autonomous, rigorous pre-delivery gate. Before any code is presented to the user, this review loop executes silently to inspect, criticize, and refactor any generated code.

### Triggers:
- **Mandatory Trigger:** Immediately after generating or modifying any code file (components, Server Actions, Route Handlers, Medusa workflows, DTOs, styles, or configuration).
- Before providing the final response to the user.

---

## 2. The 4-Dimension Audit Matrix

```
┌─────────────────────────────────────────────────────────────┐
│               AUTONOMOUS CODE REVIEW GATE                   │
├──────────────────────────────┬──────────────────────────────┤
│ 1. Clean Architecture & Code │ 2. Next.js 16 & React 19     │
│    - SOLID, DRY, KISS        │    - Server / Client Boundary│
│    - DTO & Boundary Leakage  │    - 'use cache' Directives  │
│    - Interface Segregation   │    - Action State & Typing   │
├──────────────────────────────┼──────────────────────────────┤
│ 3. Enterprise Security       │ 4. Performance & CWV         │
│    - OWASP Top 10            │    - LCP, INP, CLS           │
│    - Timing-safe HMAC        │    - Scoped GSAP Cleanup     │
│    - Zod Boundary Validation │    - Memory Leak Prevention  │
└──────────────────────────────┴──────────────────────────────┘
```

---

### Dimension 1: Clean Architecture, SOLID & Design System Compliance
- [ ] **Single Responsibility Principle (SRP):** Does each component, function, or workflow do exactly one thing?
- [ ] **Data Boundary Isolation (DTO Pattern):** Does external API or database schema (e.g. Medusa raw models, carrier raw payloads) leak directly into presentation UI? If yes, map to a clean Presentation DTO.
- [ ] **Dependency Inversion Principle (DIP):** Are external dependencies (carriers, payment gateways, cache stores) decoupled behind clean interfaces/adapters rather than tightly bound?
- [ ] **CSS Logical Properties & RTL Parity:** Are all horizontal margins, paddings, borders, radiuses, and text alignments strictly using Tailwind logical properties (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`, `border-s-*`, `border-e-*`, `rounded-s-*`, `rounded-e-*`, `text-start`, `text-end`)? Flag and replace any forbidden physical utilities (`ml-*`, `mr-*`, `pl-*`, `pr-*`, `left-*`, `right-*`, `text-left`, `text-right`).
- [ ] **KISS & YAGNI:** Are there unnecessary generic layers, premature abstractions, or dead code?

---

### Dimension 2: Next.js 16 & React 19 Boundary Rules
- [ ] **Server vs Client Separation:** Is `'use client'` strictly reserved for interactive leaf nodes? Are data fetches performed on the server?
- [ ] **Zero Secret Leakage:** Are private environment variables (e.g., `MEDUSA_API_KEY`, `STRIPE_SECRET_KEY`) strictly isolated from client-accessible code? Ensure no `NEXT_PUBLIC_` prefix on secrets.
- [ ] **Explicit Caching Topology:** Are cache directives (`'use cache'`, `cacheTag`, `cacheLife`) used intentionally rather than relying on implicit defaults?
- [ ] **React 19 Hooks:** Are actions leveraging `useActionState`, `useOptimistic`, and `useFormStatus` rather than legacy boilerplate (`useState` with manual loading/error states)?

---

### Dimension 3: Enterprise Security & OWASP Top 10 Mitigations
- [ ] **A01: Broken Access Control & Boundaries:** Are protected routes secured via `proxy.ts` / middleware? Are customer session tokens validated before mutations execute?
- [ ] **A02: Cryptographic Failures & Webhook Tampering:**
  - Are carrier/payment webhooks validated using HMAC-SHA256 signatures?
  - Is signature verification performed using **timing-safe comparisons** (`crypto.timingSafeEqual`) on the raw unparsed request body buffer to prevent timing attacks?
- [ ] **A03: Injection & Input Sanitization:** Is EVERY Server Action, Route Handler, and Webhook input strictly validated via a Zod schema before processing? No raw unvalidated strings.
- [ ] **A04: Insecure Design & Replay Attacks:**
  - Are webhook events and payment intents locked via **Idempotency Keys** (in Redis or DB) to prevent double fulfillment or duplicate charges?
- [ ] **A05: Security Misconfiguration:** Are security headers (Strict-Transport-Security, X-Frame-Options: DENY, Content-Security-Policy) properly configured?

---

### Dimension 4: Extreme Performance & Core Web Vitals (CWV)
- [ ] **Largest Contentful Paint (LCP):** Are above-the-fold hero images configured with `priority={true}` and optimal `sizes` in Next.js `<Image>`?
- [ ] **Cumulative Layout Shift (CLS = 0):** Do all media elements, banners, and dynamic slots have explicit `aspect-ratio` or reserved height? Do skeleton loaders match target layout geometry?
- [ ] **Interaction to Next Paint (INP):** Are complex mutations wrapped in React `startTransition`? Is client-side bundle size minimal?
- [ ] **Memory Leak Prevention:** Are GSAP timelines and ScrollTriggers scoped inside `useGSAP` with container refs so all listeners and animations are killed on component unmount?

---

## 3. The Self-Correction Execution Loop

```
  [ Inspect Generated Code ]
              │
              ▼
    [ Run 4-Dimension Audit ]
              │
      ┌───────┴───────┐
      │ Any Failure?  │
      └───┬───────┬───┘
          │       │
       YES│       │NO
          ▼       ▼
    [ Refactor ] [ Pass Gate ]
          │       │
          └───────┼──────► [ Proceed to Delivery / Report ]
```

1. **Self-Audit:** Run through the 4-Dimension checklist on all newly generated or modified files.
2. **Detect Violations:** If any item fails (e.g., missing Zod validation, missing timing-safe comparison, unoptimized image, memory leak risk, missing TypeScript types):
   - **Immediately execute a refactoring edit.**
   - Do NOT present the flawed code to the user with a disclaimer. Fix it first.
3. **Pass Gate:** Once 100% of checklist items pass, conclude the review and proceed to handoff or mentorship report generation.

