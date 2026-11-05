---
name: doc-lookup-and-adr
description: >-
  Use this skill before implementing any new library, external API, core architecture pattern, or feature.
  Fetches and verifies the latest official documentation (Next.js 16, Medusa v2, Tailwind v4, GSAP, Carrier and Payment APIs),
  evaluates 2-3 architectural alternatives with rigorous trade-off matrices (performance, security, maintainability),
  and authors a formal Architecture Decision Record (ADR).
---

# Architecture Decision Record & Documentation Verification (`doc-lookup-and-adr`)

## 1. Purpose & Triggers
Every engineering decision in enterprise software carries compounding interest—positive or negative. This skill enforces rigorous architectural due diligence before any code is scaffolded or written.

### Triggers:
- Prior to integrating any third-party SDK or external API (e.g., Stripe, Medusa JS SDK, DHL, FedEx, UPS).
- Prior to choosing a caching strategy, state management approach, authentication boundary, or database module.
- Prior to introducing a new design pattern (e.g., Distributed Sagas, Outbox Pattern, Repository Pattern, CQRS, Webhook Idempotency).
- When a user asks: "How should we design X?", "What library should we use for Y?", or asks to start a new feature module.

---

## 2. Protocol & Execution Steps

### Step 1: Official Documentation Verification
Do not assume deprecated paradigms or legacy syntax. Verify current documentation:
1. **Next.js 16 & React 19+ Verification:**
   - App Router file conventions (`layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx`, `proxy.ts`, `route.ts`).
   - Caching model: Use explicit `'use cache'` directive, `cacheTag`, `cacheLife`, and `revalidateTag`. Avoid guessing legacy `revalidate` segments.
   - React 19 Hooks: `useActionState` (replacing `useFormState`), `useOptimistic`, `useFormStatus`, `useEffectEvent`.
   - Server Actions security: input sanitization via Zod, authentication verification inside the action, CSRF protection.
2. **Medusa.js v2 Verification:**
   - Architecture: Modular Commerce Architecture. Logic resides in Modules, Workflows, and Steps.
   - Workflows & Rollbacks: Use `createWorkflow` and `createStep` with explicit compensation steps (Rollbacks) for atomic distributed transactions.
   - Modules: Custom module definitions, Module Links (`defineLink`), and Remote Queries.
   - Auth & Access: Actor types (Customer, User), Session/JWT tokens, API routes under `/store/*` and `/admin/*`.
   - Official SDK: `@medusajs/js-sdk` configuration and typed requests.
3. **Tailwind CSS v4 Verification:**
   - CSS-first `@theme` configuration in primary CSS file.
   - **Never** generate `tailwind.config.js`. Use CSS variables and `@theme` directives directly.
4. **GSAP Verification:**
   - Use official `@gsap/react` package with `useGSAP` hook for scoped cleanup.
   - Prevent layout reflows by animating transforms (`x`, `y`, `scale`, `rotation`) and `opacity` only.
5. **Carrier & Payment Gateways Verification:**
   - Webhook security: HMAC-SHA256 signature verification with raw body buffers, constant-time comparison (`crypto.timingSafeEqual`).
   - Idempotency locks: Idempotency keys stored in Redis or database to prevent double-charging or duplicate fulfillment events.

---

### Step 2: Alternative Evaluation & Trade-off Matrix
Evaluate exactly 2 to 3 viable architectural alternatives. Compare each across five non-negotiable vectors:
1. **Performance:** Latency, Core Web Vitals (LCP, INP, CLS), memory allocation, network payload.
2. **Security & Threat Model:** Attack surface, secret exposure risk, injection vulnerability, compliance with OWASP Top 10.
3. **Maintainability & Coupling:** Clean Architecture boundaries, separation of concerns, testability in isolation.
4. **Developer Ergonomics & Typing:** End-to-end TypeScript safety, cognitive load, debugging ergonomics.
5. **Failure Recovery & Resilience:** Graceful degradation, rollback capabilities, distributed transaction safety.

---

### Step 3: Author the Formal ADR
Store all accepted ADRs under `docs/adr/ADR-[INDEX]-[SLUG].md` using the standardized schema below.

```markdown
# ADR-[NUMBER]: [TITLE]

## Status
[Proposed | Accepted | Superseded | Deprecated]

## Context & Problem Statement
What problem are we solving? What are the business and technical constraints?
Specify latency requirements, security boundaries, and infrastructure assumptions.

## Decision Drivers
- Driver 1 (e.g., Sub-50ms TTFB across global edges)
- Driver 2 (e.g., Zero secret leakage to client bundles)
- Driver 3 (e.g., Atomic rollback of multi-system checkout transactions)

## Considered Alternatives
### Option 1: [Name of Pattern/Library]
- **Summary:** Brief description.
- **Pros:**
  - Benefit A
  - Benefit B
- **Cons:**
  - Drawback A
  - Drawback B

### Option 2: [Name of Pattern/Library]
- **Summary:** Brief description.
- **Pros:**
  - Benefit A
- **Cons:**
  - Drawback A

### Option 3: [Name of Pattern/Library] (If applicable)
...

## Decision Outcome
**Chosen Option:** [Option X] because [Primary justification rooted in drivers].

### Detailed Architectural Design
Explain the data flow, component boundaries, interface definitions, and state transitions.
Include an ASCII or Mermaid sequence diagram if network or asynchronous boundaries are involved.

## Security Impact Assessment
- Attack surface changes:
- Secret management & boundary enforcement:
- Input validation (Zod schemas):
- OWASP Top 10 mitigations applied:

## Performance Impact Assessment
- Impact on Core Web Vitals (LCP, INP, CLS):
- Caching topology ('use cache', cacheTag, TTL):
- Bundle size impact:

## Rollback & Failure Recovery Plan
How does the system fail safely? If a step in this decision fails in production, what is the recovery or rollback procedure?
```

---

## 3. Review & Handoff
Once the ADR is formulated:
1. Commit or save the ADR file to `docs/adr/`.
2. Present a clear summary of the chosen path and key trade-offs to the user.
3. Feed the architectural requirements directly into the `design-system-architect` or implementation phase.

