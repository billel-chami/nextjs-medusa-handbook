---
name: mentorship-report
description: >-
  Use this skill at the conclusion of every completed task, milestone, or feature.
  Generates an exhaustive, high-impact educational mentorship report breaking down every distinct concept
  across Three Pillars (Universal Principles, Next.js 16 Specifics, Medusa v2 Specifics),
  strictly applying the 4-part Mandatory Pedagogical Template to each concept,
  followed by a comprehensive line-by-line code breakdown.
---

# Deep-Dive Mentorship Report Generator (`mentorship-report`)

## 1. Purpose & Triggers
The goal of this mentorship is to build deep, transferable, first-principles intuition. By the conclusion of this project, you will be able to switch to any frontend or backend framework in the software industry and only need to glance at its syntax, because you will understand how modern full-stack, distributed, and secure systems operate under the hood.

### Triggers:
- **Mandatory Trigger:** At the conclusion of every feature implementation, module build, architectural scaffolding, or completed user request.
- After passing the `autonomous-code-review` self-correction loop.

---

## 2. Structural Requirements of the Report

Every mentorship report must be organized into clear sections:
1. **Executive Architectural Overview:** High-level summary of what was accomplished, why it was designed this way, and how components interact.
2. **Pillar Deep-Dives (Mandatory 4-Part Pedagogical Template applied to EVERY concept):**
   - **Pillar 1:** Universal Software Engineering, Security & Performance Principles.
   - **Pillar 2:** Next.js 16 & React 19+ Specifics.
   - **Pillar 3:** Medusa v2 Specifics.
3. **Comprehensive Line-by-Line Code Breakdown:** Detailed walkthrough of every generated or edited file.

---

## 3. The Mandatory Pedagogical Template
For **EVERY SINGLE** concept, architectural pattern, security control, performance optimization, Next.js feature, and Medusa feature introduced, you MUST apply this exact 4-part structure without skipping any sub-section:

```markdown
### Concept: [Concept Name] (e.g., Webhook Idempotency with Distributed Locks)

#### 1. Real-Life Analogy
A concrete, everyday physical analogy mapping 1:1 to how this concept works.
(Example: A hotel front desk keycard system, an airline boarding gate scanner, or a physical notary stamp).

#### 2. 3-Level Progressive Explanation
- **Level 1 — Kid (5–10 years old):**
  Pure intuition and simple mental model using relatable terms and zero technical jargon.
- **Level 2 — Teen (High School):**
  Practical mechanics, real-world inputs and outputs, and how the different pieces connect.
- **Level 3 — College Grad / Senior Engineer:**
  Under-the-hood computer science, memory layout, network transport, execution lifecycles, concurrency races, and threat modeling.

#### 3. Alternatives & Trade-offs
List 2–3 alternative ways or patterns to solve this problem, compare their pros and cons, and explain strictly why we chose our approach:
| Alternative Pattern | Pros | Cons | Why We Chose Our Approach |
| :--- | :--- | :--- | :--- |
| **Option A (Alternative 1)** | ... | ... | ... |
| **Option B (Alternative 2)** | ... | ... | ... |
| **Option C (Our Selected Approach)** | ... | ... | **Selected:** [Root justification] |

#### 4. Transferability Note (For Universal Principles)
Demonstrate how this exact pattern is implemented across other major industry frameworks:
- **Vue / Nuxt 3:** How this concept is written or handled.
- **Node / NestJS:** Equivalent guards, interceptors, or modules.
- **PHP / Laravel:** Equivalent middleware, jobs, or Eloquent patterns.
- **Java / Spring Boot:** Equivalent annotations, filters, or beans.
```

---

## 4. The Three Pillars Breakdown

### Pillar 1: Universal Software Engineering, Security & Performance Principles
Cover the framework-agnostic computer science foundation:
- **Architectural Patterns:** Clean Architecture, MVC, Repository Pattern, DTO Pattern, Anti-Corruption Layer (ACL), Adapter Pattern, State Machines, Distributed Sagas, Outbox Pattern, Event-Driven Architecture.
- **Enterprise Security (OWASP Top 10):**
  - Timing attack prevention (`crypto.timingSafeEqual`).
  - Cryptographic signatures (HMAC-SHA256).
  - Webhook Idempotency & Replay Attack Defense.
  - Zero-Trust Network Boundaries & Content Security Policies (CSP).
  - Sanitization, injection prevention, and Zod boundary validation.
- **Performance & Core Web Vitals:**
  - Largest Contentful Paint (LCP) engineering.
  - Cumulative Layout Shift (CLS = 0) layout stability.
  - Interaction to Next Paint (INP) and main-thread scheduling.
  - Browser rendering pipeline (Parse -> Style -> Layout -> Paint -> Composite).

### Pillar 2: Next.js 16 & React 19+ Specifics
Explain how modern React and Next.js implement these concepts:
- App Router file architecture & server/client component boundaries.
- Next.js 16 caching paradigm: `'use cache'`, `cacheTag`, `cacheLife`, `revalidateTag`.
- React Server Component (RSC) serialization protocol and flight payloads.
- Server Actions with React 19 hooks: `useActionState`, `useOptimistic`, `useFormStatus`, `useEffectEvent`.
- Network protection via `proxy.ts` / Route Handlers.

### Pillar 3: Medusa v2 Specifics
Explain the modular commerce engine mechanics:
- Medusa v2 Modular Architecture & Module Links (`defineLink`).
- Workflows, Steps, and Compensation/Rollback logic for distributed transactions.
- Auth Module, Actor Types (`customer`, `user`), and Session/JWT tokens.
- Remote Queries, Custom Store API routes, and Event Subscribers.
- Payment Module Providers and Carrier Fulfillment Adapters.

---

## 5. Final Section: Line-by-Line Code Breakdown

Walk through each generated or modified file systematically:
1. **File Path & Architectural Purpose:** Where this file sits in the Clean Architecture layers.
2. **Line-by-Line Technical Walkthrough:**
   - Explain critical functions, types, and logic blocks.
   - Highlight specific security measures (e.g., Zod parsing, timing-safe checks, sanitized outputs).
   - Highlight specific performance measures (e.g., hardware-accelerated transforms, memoization, cache tags).
   - Explain edge-case handling (e.g., network timeouts, malformed headers, concurrency races).

