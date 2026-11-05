import Medusa from "@medusajs/js-sdk";

/**
 * Infrastructure Layer: Medusa v2 JS SDK Client Singleton.
 * Enforces Zero-Trust network boundaries:
 * - Public requests use NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY.
 * - Server Actions connect to backend host over private network.
 */

const MEDUSA_BACKEND_URL =
  process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000";

const MEDUSA_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "";

let clientInstance: Medusa | null = null;

export function getMedusaClient(): Medusa {
  if (!clientInstance) {
    clientInstance = new Medusa({
      baseUrl: MEDUSA_BACKEND_URL,
      publishableKey: MEDUSA_PUBLISHABLE_KEY,
      debug: process.env.NODE_ENV === "development",
    });
  }
  return clientInstance;
}

export const medusa = getMedusaClient();

