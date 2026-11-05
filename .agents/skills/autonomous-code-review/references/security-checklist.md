# Enterprise Security & OWASP Top 10 Verification Reference

## 1. Webhook Signature Verification (HMAC-SHA256)
Carrier webhooks (DHL, FedEx, UPS) and Payment webhooks (Stripe) require strict cryptographic integrity checks:

### Vulnerability:
- Replay attacks: An attacker resends a captured legitimate webhook.
- Man-in-the-Middle tampering: Modifying the payload in transit.
- Timing Attacks: `strA === strB` terminates comparison early upon the first mismatched byte, allowing statistical measurement of comparison times to guess signatures.

### Defense Pattern:
```ts
import crypto from "node:crypto";

export function verifyWebhookSignature({
  rawPayloadBuffer,
  signatureHeader,
  secretKey,
}: {
  rawPayloadBuffer: Buffer;
  signatureHeader: string;
  secretKey: string;
}): boolean {
  const computedHmac = crypto
    .createHmac("sha256", secretKey)
    .update(rawPayloadBuffer)
    .digest("hex");

  const computedBuffer = Buffer.from(computedHmac, "utf8");
  const headerBuffer = Buffer.from(signatureHeader, "utf8");

  if (computedBuffer.length !== headerBuffer.length) {
    return false;
  }

  // Mandatory: Timing-safe comparison to prevent byte-by-byte timing attacks
  return crypto.timingSafeEqual(computedBuffer, headerBuffer);
}
```

---

## 2. Webhook & Transaction Idempotency Lock
Prevent double fulfillment or duplicate charges caused by network retries:

### Pattern:
```ts
// 1. Extract or compute unique idempotency key (e.g. event_id or carrier_tracking_no + status)
const idempotencyKey = `webhook:event:${event.id}`;

// 2. Atomic SETNX in Redis (or DB unique constraint) with a TTL
const acquired = await redis.set(idempotencyKey, "PROCESSING", "EX", 300, "NX");
if (!acquired) {
  // Already processed or currently processing -> return 200 OK immediately
  return new Response(JSON.stringify({ status: "duplicate_ignored" }), { status: 200 });
}

try {
  // 3. Process business logic (Medusa workflow execution)
  await processWorkflow(event);
  await redis.set(idempotencyKey, "COMPLETED", "EX", 86400); // 24h retention
} catch (error) {
  // 4. Release lock on failure to allow retry if transient
  await redis.del(idempotencyKey);
  throw error;
}
```

---

## 3. Strict Input Validation (Zod on All Boundaries)
Every Server Action and Route Handler must define and parse a Zod schema before accessing arguments:

```ts
import { z } from "zod";

export const AddToCartSchema = z.object({
  variantId: z.string().min(1, "Variant ID is required"),
  quantity: z.number().int().positive().max(99, "Quantity cannot exceed 99"),
  cartId: z.string().min(1, "Cart ID is required"),
});

export type AddToCartInput = z.infer<typeof AddToCartSchema>;
```

