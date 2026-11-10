# 🏛️ Octera E-Commerce Handbook — Enterprise Headless Commerce & Engineering Mentorship Platform

> **A self-governing, production-grade headless e-commerce and logistics monorepo powered by Next.js 16, Medusa.js v2, Tailwind CSS v4, GSAP, and embedded Agentic Mentorship Skills.**

[![Next.js 16](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)](https://nextjs.org)
[![Medusa v2](https://img.shields.io/badge/Medusa-v2.22-blueviolet?logo=medusa)](https://medusajs.com)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4.0-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![GSAP 3](https://img.shields.io/badge/GSAP-3.12-88CE02?logo=greensock)](https://greensock.com)
[![TypeScript 5.7](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Docker](https://img.shields.io/badge/Docker-Postgres_16_%26_Redis_7-2496ED?logo=docker)](https://www.docker.com)

---

## 📖 Live Interactive Documentation Portal

This repository includes a **built-in interactive internal documentation web portal** running directly inside the storefront at:

👉 **[http://localhost:3000/docs](http://localhost:3000/docs)**

Every engineer on your team can launch the app, click **"Handbook & Crash Course"** in the top navigation, and explore interactive guides for all 13 technologies organized in a gradual, logical progression from application frameworks down to infrastructure, with live trilingual support (English, Arabic, and French), instantaneous bidirectional LTR/RTL layout mirroring, e-commerce critical hooks and APIs breakdowns, real-world scenario challenges & solutions, architecture diagrams, code patterns, anti-pattern breakdowns, and official documentation deep-dive links!

---

## 🌟 Why This Repo Exists & How Your Team Benefits

This repository is **not just boilerplate code**; it is an **Autonomous Pair-Programming and Mentorship Platform**. 

When any engineer on your team clones this repository and prompts their AI assistant (using Antigravity or any agent that reads project guidelines), the embedded agent configurations in [`AGENTS.md`](./AGENTS.md) and [`.agents/skills/`](./.agents/skills/) immediately take effect.

The AI assistant stops behaving like a generic autocomplete tool and starts operating as a **Principal Full-Stack Software Architect (+15 years experience)** that:

1. **Authors Formal Architecture Decision Records ([`doc-lookup-and-adr`](./.agents/skills/doc-lookup-and-adr/SKILL.md)):** Compares 2–3 alternatives across performance, security, and maintainability before writing code.
2. **Enforces CSS Logical Properties for Seamless RTL ([`design-system-architect`](./.agents/skills/design-system-architect/SKILL.md)):** Prohibits physical directions (`ml-*`, `mr-*`, `left-*`, `right-*`) in favor of logical properties (`ms-*`, `me-*`, `start-*`, `end-*`), ensuring the platform is 100% bi-directionally internationalized (LTR & RTL) from Day 1.
3. **Executes an Autonomous 4-Dimension Pre-Delivery Code Audit ([`autonomous-code-review`](./.agents/skills/autonomous-code-review/SKILL.md)):** Audits and refactors its own code against SOLID principles, Next.js 16 Server/Client boundaries, OWASP Top 10 vulnerabilities (timing-safe HMAC, idempotency locks, Zod validation), and Core Web Vitals (CLS = 0, LCP, GSAP memory leaks) before showing it to the developer.
4. **Delivers Deep First-Principles Mentorship Reports ([`mentorship-report`](./.agents/skills/mentorship-report/SKILL.md)):** Concludes every feature with an educational masterclass breaking down every single concept across Three Pillars using a **4-part pedagogical template** (Real-life analogy, 3-level progressive explanation [Kid $\to$ Teen $\to$ Senior Engineer], Alternatives & Trade-offs, and Cross-framework transferability).

---

## 🚀 Quickstart Guide (3 Minutes to Run)

### 1. Prerequisites
- **Node.js:** `>= 20.x` (Tested on Node v24.x)
- **Package Manager:** `pnpm` (`npm install -g pnpm`)
- **Container Runtime:** `Docker` & `Docker Compose`

### 2. Installation
```bash
git clone https://github.com/billel-chami/nextjs-medusa-handbook.git .
pnpm install
```

### 3. Spin Up Isolated Databases
Start dedicated PostgreSQL 16 and Redis 7 containers configured on non-conflicting ports:
```bash
pnpm db:up
# PostgreSQL runs on 127.0.0.1:5433 (no clash with standard 5432 or 5444)
# Redis runs on 127.0.0.1:6380 (no clash with standard 6379)
```

### 4. Start Development Servers
In two terminal tabs, run the storefront and commerce backend:

```bash
# Terminal 1: Next.js 16 Storefront (Turbopack)
pnpm dev:storefront
# ➜ Available at http://localhost:3000

# Terminal 2: Medusa v2 Commerce Core
pnpm dev:backend
# ➜ Available at http://localhost:9000
```

Open [http://localhost:3000](http://localhost:3000) to view the live Starter Canvas. Hover over the **Language & Direction** switcher in the header to select **English (EN)**, **العربية (AR)**, or **Français (FR)** and observe full trilingual translation and CSS logical properties automatically mirroring layout geometry!

---

## 📚 INTERNAL CRASH COURSE: THE 13 ARCHITECTURAL PILLARS

The curriculum is structured in a **gradual, pedagogical progression**:
- **Part 1:** The Core Application Stack (Next.js 16 $\to$ Medusa v2 $\to$ TypeScript)
- **Part 2:** Design System & User Experience (Tailwind v4 $\to$ CSS Logical RTL $\to$ i18n & Multi-Region Localization $\to$ GSAP 3)
- **Part 3:** Enterprise Security & Boundary Defense (Zod $\to$ OWASP Top 10)
- **Part 4:** Data Layer & Persistence (PostgreSQL 16 $\to$ Redis 7)
- **Part 5:** Infrastructure & Workspace Engineering (Docker $\to$ pnpm Monorepo)

Every topic in the web handbook also features an **Official Documentation Deep-Dive CTA** linking directly to the authoritative reference documentation.

---

### PART 1: THE CORE APPLICATION STACK

#### 1. Next.js 16: Modern App Router, RSC & React 19 Paradigms
* **What it is:** The premier React meta-framework featuring Turbopack, React Server Components (RSC) by default, the explicit `'use cache'` directive, and React 19 hooks (`useActionState`, `useOptimistic`).
* **Real-Life Analogy:** A restaurant kitchen. The chefs cook and plate the food completely in the back (Server Components) before bringing it to the dining table. Only the salt shaker (Client Component leaf) is operated by the guest.
* **Why We Use It:** Eliminates multi-megabyte client JavaScript bundles. Static marketing content, catalog cards, and pricing details render as pure HTML on the server, drastically accelerating Largest Contentful Paint (LCP) and eliminating layout shifts (CLS = 0). Interactive leaves use `'use client'` strictly when event listeners are needed.
* **Official Docs:** [Next.js Documentation](https://nextjs.org/docs)
* **Web Deep-Dive:** [Read Next.js 16 Web Guide](http://localhost:3000/docs/nextjs-16)

---

#### 2. Medusa.js v2: Modular Commerce Engine & Sagas
* **What it is:** An open-source, modular headless commerce engine. Instead of a monolithic database, Medusa v2 organizes commerce into discrete modules (Product, Cart, Order, Inventory, Fulfillment, Auth) orchestrated by step-based Workflows.
* **Real-Life Analogy:** An aerospace launch checklist. Each step is tracked individually. If a thruster valve fails at step 4, the computer automatically triggers compensation steps to drain fuel and abort safely without crashing.
* **Why We Use It:** Multi-system commerce transactions (charging a card on Stripe, generating a DHL label, allocating inventory) cannot rely on a single SQL transaction. Medusa v2 Workflows implement the **Distributed Saga Pattern** with automated compensation (rollback) logic.
* **Official Docs:** [Medusa v2 Documentation](https://docs.medusajs.com)
* **Web Deep-Dive:** [Read Medusa v2 Web Guide](http://localhost:3000/docs/medusa-v2)

---

#### 3. TypeScript 5.7+: Clean Architecture DTOs & Result Monads
* **What it is:** Strict-mode TypeScript engineering enforcing domain boundaries, Data Transfer Objects (DTOs), and defensive error handling.
* **Real-Life Analogy:** A notarized international contract. Both parties sign explicit clauses. Neither side can introduce surprise verbal obligations or assume unvalidated fields.
* **Why We Use It:** 
  1. Monetary values are strictly stored as integer minor units (cents in `MoneyDTO`) to prevent IEEE 754 floating-point rounding errors (`0.1 + 0.2 != 0.3`).
  2. Actions return discriminated union `Result<T, E>` monads (`{ success: true, data } | { success: false, error }`), forcing the UI compiler to defensively handle failure branches.
  3. Raw database entities are never exposed to the frontend; DTOs act as an Anti-Corruption Layer.
* **Official Docs:** [TypeScript Documentation](https://www.typescriptlang.org/docs/)
* **Web Deep-Dive:** [Read TypeScript Web Guide](http://localhost:3000/docs/typescript)

---

### PART 2: DESIGN SYSTEM & USER EXPERIENCE

#### 4. Tailwind CSS v4: CSS-First Design Tokens & @theme
* **What it is:** The next generation of Tailwind CSS, replacing JavaScript configuration files (`tailwind.config.js`) with pure CSS `@theme` directives powered by the ultra-fast Rust LightningCSS engine.
* **Real-Life Analogy:** Standardized architectural blueprints. Instead of builders cutting random custom 17.3mm wood planks on site, every measurement and color snaps to an approved token on the blueprint.
* **Why We Use It:** Establishes a 3-tier token system in perceptually uniform OKLCH color space with fluid clamp typography (`clamp()`). Strictly forbids arbitrary bracket values (`p-[17px]`, `bg-[#1a1b1e]`), eliminating design drift and stylesheet bloat.
* **Official Docs:** [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
* **Web Deep-Dive:** [Read Tailwind v4 Web Guide](http://localhost:3000/docs/tailwind-v4)

---

#### 5. CSS Logical Properties & Bi-Directional RTL Internationalization
* **What it is:** CSS Writing Modes Level 3 specification that replaces physical coordinates (`left`, `right`, `margin-left`, `padding-right`) with reading-flow vectors (`inline-start`, `inline-end`).
* **Real-Life Analogy:** A train track labeled "Forward" and "Backward" relative to the train's motion, rather than fixed "North" and "South". No matter which way the train faces, "Forward" is where it travels.
* **Why We Use It:** In international commerce (serving MENA and Middle Eastern markets), switching to Arabic or Hebrew requires changing only `<html dir="rtl">`. By strictly using `ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`, `text-start`, and `rtl:rotate-180`, the UI mirrors automatically with zero CSS overrides.
* **Official Docs:** [MDN CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
* **Web Deep-Dive:** [Read CSS Logical RTL Web Guide](http://localhost:3000/docs/css-logical-rtl)

---

#### 6. i18n & Multi-Region Localization Architecture
* **What it is:** Enterprise multi-region and internationalization architecture synchronizing browser direction (`dir="ltr"|"rtl"`), document language (`lang="en"|"ar"`), currency formatting via `Intl.NumberFormat`, and region-specific commerce tax/shipping rules.
* **Real-Life Analogy:** An international passport and currency exchange kiosk at an airport. It doesn't merely translate the signs into your language; it adjusts currency exchange rates, customs regulations, and local postal formatting to match your jurisdiction.
* **Why We Use It:** Global headless commerce fails if localization is treated as an afterthought or raw string replacement. Combining `LocaleProvider` with Medusa's Region Engine decouples presentation strings, RTL geometry, and pricing models while guaranteeing zero client-side layout flashing.
* **Official Docs:** [MDN Intl Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
* **Web Deep-Dive:** [Read i18n & Multi-Region Web Guide](http://localhost:3000/docs/i18n-localization)

---

#### 7. GSAP 3: Hardware-Accelerated Motion & Scoped Lifecycle Cleanup
* **What it is:** The GreenSock Animation Platform combined with the official `@gsap/react` package and `useGSAP` hook for cinema-grade, 60/120 FPS web animation.
* **Real-Life Analogy:** A professional movie camera crane on hydraulic rails. Instead of moving heavy stage walls around during filming, the camera smoothly pans its lens on a designated track.
* **Why We Use It:** Animating layout properties (`width`, `height`, `top`, `margin`) triggers CPU layout reflows and repaints on every frame, causing catastrophic Interaction to Next Paint (INP) degradation. GSAP animates GPU-accelerated composite properties (`x`, `y`, `scale`, `rotation`, `autoAlpha`). Scoping animations inside `useGSAP({ scope: ref })` guarantees zero dangling listeners or memory leaks in React 19.
* **Official Docs:** [GSAP Documentation](https://gsap.com/docs/v3/)
* **Web Deep-Dive:** [Read GSAP Motion Web Guide](http://localhost:3000/docs/gsap-motion)

---

### PART 3: ENTERPRISE SECURITY & BOUNDARY DEFENSE

#### 8. Zod: Runtime Schema Validation & Boundary Defense
* **What it is:** TypeScript types only exist during compilation and are completely erased in production. Zod is a TypeScript-first schema declaration and validation library that validates untrusted runtime inputs at network boundaries.
* **Real-Life Analogy:** An airport biometric passport scanner. You cannot just hold up a self-drawn card claiming you are a pilot; the scanner cryptographically reads the physical chip before opening the gate.
* **Why We Use It:** Attackers can send arbitrary JSON to Next.js Server Actions or Route Handlers. Calling `AddToCartSchema.safeParse(input)` ensures parameters meet strict constraints (e.g. quantity is a positive integer $\le 99$) before touching commerce logic.
* **Non-Negotiable Rule:** Never use `schema.parse()` (which throws unhandled exceptions). Always use `schema.safeParse()` and return typed `Result<T, E>` monads.
* **Official Docs:** [Zod Documentation](https://zod.dev)
* **Web Deep-Dive:** [Read Zod Web Guide](http://localhost:3000/docs/zod)

---

#### 9. OWASP Top 10 Enterprise Security & Timing-Safe HMAC
* **What it is:** A defensive security posture addressing the Open Web Application Security Project's top vulnerability categories, specializing in webhook authenticity, secret isolation, and replay defense.
* **Real-Life Analogy:** A bank vault with timed dual-key locks and anti-replay counters. It refuses duplicate withdrawal slips even if the signature matches.
* **Why We Use It:** 
  1. Standard string equality (`signature === header`) terminates comparison on the first mismatched byte, allowing attackers to guess cryptographic signatures byte-by-byte via statistical timing analysis. We mandate constant-time comparison via `crypto.timingSafeEqual`.
  2. Carrier webhooks (DHL/FedEx/UPS) are locked in Redis using atomic `SETNX` for 24 hours to prevent duplicate fulfillment upon network retries.
  3. No private backend secrets (database credentials, Stripe secret keys) are ever prefixed with `NEXT_PUBLIC_`.
* **Official Docs:** [OWASP Top 10 Security Project](https://owasp.org/www-project-top-ten/)
* **Web Deep-Dive:** [Read OWASP Security Web Guide](http://localhost:3000/docs/owasp-security)

---

### PART 4: DATA LAYER & PERSISTENCE

#### 10. PostgreSQL 16: Relational ACID Persistence & Cascades
* **What it is:** The world's most advanced open-source object-relational database system, acting as our commerce engine's persistent system-of-record.
* **Real-Life Analogy:** A county deeds registry. Every property deed is recorded in permanent ink in an indexed ledger. Land cannot vanish, and two people cannot simultaneously buy the exact same title.
* **Why We Use It:** Guarantees strict ACID properties (Atomicity, Consistency, Isolation, Durability) across orders, payments, customers, and inventory allocations. Foreign key constraints and cascading rules prevent orphaned data.
* **Official Docs:** [PostgreSQL Documentation](https://www.postgresql.org/docs/16/)
* **Web Deep-Dive:** [Read PostgreSQL Web Guide](http://localhost:3000/docs/postgres)

---

#### 11. Redis 7: In-Memory Caching, Distributed Locks & Pub/Sub
* **What it is:** An ultra-low-latency in-memory data structure store operating in sub-millisecond read/write speeds.
* **Real-Life Analogy:** A chef's prep counter. The walk-in refrigerator (Postgres) holds 500 bulk items, but the salt, olive oil, and sliced garlic stay directly on the prep counter (Redis) for instant access in half a second.
* **Why We Use It:** Powers distributed idempotency locks (`SET key val EX 300 NX`) to eliminate webhook race conditions, manages rate limiting on checkout endpoints, and acts as the event bus for Medusa asynchronous subscribers.
* **Official Docs:** [Redis Documentation](https://redis.io/docs/)
* **Web Deep-Dive:** [Read Redis Web Guide](http://localhost:3000/docs/redis)

---

### PART 5: INFRASTRUCTURE & WORKSPACE ENGINEERING

#### 12. Docker Compose & Multi-Container Isolation
* **What it is:** Container virtualization engine that bundles PostgreSQL 16 and Redis 7 into reproducible, lightweight Alpine Linux images.
* **Real-Life Analogy:** An intermodal shipping container. It sits identically on a cargo ship, a flatbed train, or a semi-truck without opening or rearranging the cargo inside.
* **Why We Use It:** Completely eliminates "works on my machine" bugs. By mapping Postgres to host port `5433` and Redis to host port `6380`, developers can run this platform without colliding with any pre-existing PostgreSQL or Redis services installed on their host machine.
* **Official Docs:** [Docker Compose Documentation](https://docs.docker.com/compose/)
* **Web Deep-Dive:** [Read Docker Web Guide](http://localhost:3000/docs/docker)

---

#### 13. pnpm Workspaces & Monorepo Topology
* **What it is:** A fast, disk-efficient package manager leveraging content-addressable storage, symlinked `node_modules`, and workspace protocol linking (`workspace:*`).
* **Real-Life Analogy:** A university master reference library. Instead of 1,000 students buying and storing 50 identical heavy books in their dorms, the library stores one central copy, and students hold lightweight catalog cards linking to it.
* **Why We Use It:** Saves up to 80% disk space by storing identical packages once in a global content-addressable store. Strictly prohibits phantom dependencies (packages importing libraries not declared in their own `package.json`).
* **Official Docs:** [pnpm Documentation](https://pnpm.io/)
* **Web Deep-Dive:** [Read pnpm Monorepo Web Guide](http://localhost:3000/docs/pnpm-monorepo)

---

## 🎯 The Feature Implementation Curriculum

Colleagues can implement features by copying any of the following prompts into their AI assistant in Antigravity. The embedded skills will automatically trigger the full architectural workflow and generate an educational mentorship report:

### Sprint 1: Catalog & Discovery Engine
> *"Build Module 1: Catalog & Discovery Engine. Connect to the Medusa v2 JS SDK, configure Next.js 16 fine-grained caching with `'use cache'` and `cacheTag('products')`, and build an accessible, responsive product grid with category filters ensuring CLS = 0 and LCP image priority."*

### Sprint 2: Authentication & Accounts Boundary
> *"Build Module 2: Customer Authentication. Implement registration and login Server Actions with strict Zod validation, HttpOnly cookie session handling, and protect private customer routes (`/account/*`) using `proxy.ts`."*

### Sprint 3: Persistent Cart & Regional Currency Engine
> *"Build Module 3: Persistent Cart & Multi-Currency Engine. Implement optimistic cart additions using React 19 `useActionState` and `useOptimistic`, Medusa cart workflows, and multi-region currency switching with RTL support."*

### Sprint 4: Checkout Flow & Payment Sessions
> *"Build Module 4: Multi-Step Checkout Flow. Implement shipping address validation with Zod, shipping option selection, Stripe Payment Session initialization, and atomic order completion workflows."*

### Sprint 5: Carrier Logistics & Webhook Security
> *"Build Module 5: Carrier Logistics & Webhook Security. Create an Anti-Corruption Layer for carrier tracking (DHL/FedEx/UPS), secure incoming carrier webhooks using timing-safe HMAC verification (`crypto.timingSafeEqual`), and enforce distributed Redis idempotency locks against duplicate events."*

---

## 🛡️ Non-Negotiable Engineering Standards

Every developer and AI assistant contributing to this repository adheres to these rules:

1. **Clean Architecture Separation:** Presentation components never perform raw database queries. Data passes through strongly-typed DTOs (`packages/types`).
2. **CSS Logical Properties (RTL Parity):** Never use physical utilities (`ml-*`, `mr-*`, `pl-*`, `pr-*`, `left-*`, `right-*`, `text-left`, `text-right`). Always use logical utilities (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`, `text-start`, `text-end`, `rtl:rotate-180`).
3. **OWASP Top 10 Enterprise Security:**
   - Strict Zod parsing on **every** Server Action and Route Handler boundary.
   - Zero private environment variable leaks to client bundles.
   - Timing-safe comparisons (`crypto.timingSafeEqual`) for HMAC webhook verification.
   - Distributed idempotency locks against webhook replay attacks.
4. **Core Web Vitals & Animation Performance:**
   - **LCP:** Preload and priority flags on hero media.
   - **CLS = 0:** Strict aspect ratios and reserved layouts.
   - **INP:** Non-blocking transitions (`useTransition`) and minimal client bundles.
   - **Zero Memory Leaks:** Scoped `useGSAP` cleanup on all animations.

---

## 📜 Workspace Commands

```bash
# Typecheck all workspace packages simultaneously
pnpm typecheck

# Build storefront with Next.js Turbopack
pnpm build:storefront

# Build commerce backend
pnpm build:backend

# Start or stop isolated database containers
pnpm db:up
pnpm db:down
```

---

## 📄 License
MIT — Engineered with first principles for extreme performance, security, and developer mentorship.
