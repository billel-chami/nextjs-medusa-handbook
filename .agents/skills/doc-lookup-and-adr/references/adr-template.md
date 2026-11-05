# ADR-0000: Architecture Decision Record Template

## Status
[Proposed | Accepted | Superseded | Deprecated]

## Context & Problem Statement
- **Business Requirement:** What capability or business outcome is required?
- **Technical Context:** What are the system constraints, latency limits, scalability thresholds, and security boundaries?

## Decision Drivers
1. [Driver 1 - e.g., Low-latency server-side rendering with sub-50ms TTFB]
2. [Driver 2 - e.g., Zero secret leakage across network boundaries]
3. [Driver 3 - e.g., Resilient distributed checkout saga with atomic rollback]

## Considered Alternatives

### Alternative 1: [Name]
- **Overview:** Brief description of this approach.
- **Pros:**
  - Positive attribute A
  - Positive attribute B
- **Cons:**
  - Negative attribute A
  - Negative attribute B

### Alternative 2: [Name]
- **Overview:** Brief description of this approach.
- **Pros:**
  - Positive attribute A
- **Cons:**
  - Negative attribute A

### Alternative 3: [Name]
- **Overview:** Brief description of this approach.
- **Pros:**
  - Positive attribute A
- **Cons:**
  - Negative attribute A

## Decision Outcome
**Chosen Approach:** [Alternative X]

### Justification & Trade-off Resolution
Why does this choice best satisfy the decision drivers while accepting manageable trade-offs?

### Architectural Diagram (Data Flow / State Transitions)
```
[ Client ] ──( 1. Action )──> [ Next.js Server Action ] ──( 2. RPC / SDK )──> [ Medusa v2 Workflow ]
                                       │                                               │
                                  ( Zod Parse )                                   ( Saga Step )
```

## Security & Compliance Impact
- **OWASP Top 10 Considerations:**
- **Boundary Validation (Zod):**
- **Authentication / Authorization Enforcement:**
- **Cryptographic Guarantees (HMAC / Timing-safe):**

## Performance & Core Web Vitals Impact
- **LCP (Largest Contentful Paint):**
- **CLS (Cumulative Layout Shift):**
- **INP (Interaction to Next Paint):**
- **Caching Topology (`'use cache'`, `cacheTag`, `cacheLife`):**

## Failure Modes & Rollback Procedure
- What happens if a step in this workflow fails mid-execution?
- How is state compensated or rolled back?

