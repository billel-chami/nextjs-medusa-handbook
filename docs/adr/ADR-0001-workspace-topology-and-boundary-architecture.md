# ADR-0001: Workspace Monorepo Topology, Boundary Architecture & Tech Stack Scaffolding

## Status
Accepted

## Context & Problem Statement
We are building an enterprise-grade, high-performance, secure headless e-commerce and logistics platform from the ground up.
The platform requires:
1. A modern, sub-second TTFB presentation tier using **Next.js 16** (App Router, React 19, `'use cache'`, Server Actions).
2. A resilient commerce and orchestration core using **Medusa.js v2** (Modular architecture, Workflows with compensation steps, event subscribers).
3. A centralized, tokenized design system using **Tailwind CSS v4** with mandatory CSS logical properties for bi-directional LTR/RTL support.
4. Cinematic 60/120 FPS animations via **GSAP** with zero memory leaks.

The primary architectural question is: **How should the repository and network boundaries be structured to maximize security (prevent secret leaks), maintain separation of concerns, optimize CI/CD caching, and enable end-to-end type safety?**

---

## Decision Drivers
1. **Zero-Trust Network & Secret Isolation:** Private secrets (Medusa Admin API keys, carrier credentials, webhook signing secrets) must never be accessible or accidentally bundled into client-facing JavaScript.
2. **Clean Architecture Separation:** Clear demarcations between Presentation (Next.js UI), Application (Server Actions / Controllers), Domain (DTOs, Workflows), and Infrastructure (Database, SDKs, Carriers).
3. **High Build & Cache Velocity:** Shared workspace dependencies, atomic builds, and unified linting/type-checking across packages.
4. **Independent Deployability:** The frontend storefront and commerce core must be deployable independently (e.g., edge-deployed Next.js on Vercel/Cloudflare and Medusa backend on containerized infrastructure like Railway, AWS ECS, or Kubernetes).

---

## Considered Alternatives

### Alternative 1: Polyrepo (Separate Git Repositories)
- **Summary:** Separate Git repository for the storefront and another for the Medusa backend.
- **Pros:**
  - Strict physical isolation between frontend and backend codebases.
  - Granular deployment permissions for separate teams.
- **Cons:**
  - High friction for synchronizing shared TypeScript contracts (DTOs) and carrier payload schemas.
  - Requires publishing private npm packages or manual copy-pasting of types, introducing drift.
  - Complex multi-repository CI/CD setup for local development.

### Alternative 2: Flat Monolithic Project
- **Summary:** A single Next.js project hosting both UI and backend endpoints directly in Route Handlers (`app/api/*`), calling databases or mini-services directly.
- **Pros:**
  - Simplest initial file tree.
- **Cons:**
  - Breaks modular commerce principles. Medusa v2 workflows, subscribers, and background worker queues cannot run safely inside transient serverless route functions.
  - Severe risk of leaking backend environment secrets into client components.
  - Incompatible with Medusa v2 modular plugin system.

### Alternative 3: pnpm Workspaces Monorepo with Explicit Boundary Separation (Chosen)
- **Summary:** A unified repository using pnpm workspaces:
  - `apps/storefront`: Next.js 16, React 19, Tailwind CSS v4, GSAP, `@medusajs/js-sdk`.
  - `apps/backend`: Medusa v2 commerce core, custom workflows, API routes, subscribers.
  - `packages/types`: Shared DTO schemas and domain contracts.
  - Isolated Docker environment for PostgreSQL & Redis.
- **Pros:**
  - Single source of truth for end-to-end TypeScript types and DTO contracts.
  - Complete process and network separation: Storefront runs on `:3000`, Backend runs on `:9000`.
  - Fast, deduplicated installs via pnpm's content-addressable storage.
  - Independent containerization and deployment pipelines for storefront and backend.
- **Cons:**
  - Requires configuring workspace symlinks and monorepo build scripts.

---

## Decision Outcome
**Chosen Approach:** Alternative 3 (pnpm Workspaces Monorepo).

### Architectural Boundary Model:
```
[ Client Browser ]
        │  (HTTP / RSC Flight Payloads)
        ▼
[ Next.js 16 Storefront (apps/storefront - :3000) ]
        │  ├── Presentation Layer: Pure UI & GSAP Leaf Components (CSS Logical Properties)
        │  ├── Application Layer: Server Actions (Zod Schema Sanitization)
        │  └── Infrastructure Layer: @medusajs/js-sdk Client Singleton
        │
        │  (Private Back-Channel HTTP via Server Actions)
        ▼
[ Medusa v2 Commerce Core (apps/backend - :9000) ]
        ├── Custom Workflows & Distributed Rollback Steps
        ├── Subscribers & Event Bus
        └── PostgreSQL (:5432) & Redis (:6379)
```

---

## Security Impact Assessment
- **OWASP A01 (Broken Access Control):** Next.js Server Actions authenticate user session tokens before forwarding commands to Medusa backend endpoints.
- **OWASP A02 (Cryptographic Failures):** Webhook secrets and admin API tokens reside solely in server environment files (`.env.local` / `.env`), never exposed with `NEXT_PUBLIC_`.
- **OWASP A03 (Injection):** Zod schemas validate and sanitize all inputs before passing data to the Medusa JS SDK.
- **Network Isolation:** Medusa admin endpoints are restricted from public ingress; the storefront acts as an Anti-Corruption Layer (ACL).

---

## Performance & Core Web Vitals Impact
- **LCP:** Next.js 16 Server Components fetch initial catalog data on the server during SSR, returning pre-rendered HTML immediately.
- **CLS:** Tailwind CSS v4 design tokens enforce fixed aspect ratios and reserved dimensions.
- **INP:** Client JavaScript bundle is kept ultra-lean; heavy state orchestration runs in Server Actions and React 19 transitions.
- **Caching:** Next.js 16 `'use cache'` directive with granular `cacheTag` allows instant edge invalidation when Medusa emits catalog updates.

---

## Validation Strategy
1. Initialize root pnpm workspace with `pnpm-workspace.yaml`.
2. Scaffold `apps/storefront` with Next.js 16, React 19, Tailwind CSS v4 (`@theme`), GSAP, and strict TypeScript.
3. Scaffold `apps/backend` with Medusa v2 configuration.
4. Verify TypeScript compilation and linting across the monorepo.

