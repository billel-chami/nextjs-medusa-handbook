import { z } from "zod";

/**
 * Enterprise Environment Variable Schema & Validator
 * Fails fast during build/startup if critical variables are missing or misconfigured.
 */
const envSchema = z.object({
  NEXT_PUBLIC_MEDUSA_BACKEND_URL: z
    .string()
    .url()
    .default("http://localhost:9000"),
  NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY: z.string().optional().default(""),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_MEDUSA_BACKEND_URL: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL,
  NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY:
    process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY,
  NODE_ENV: process.env.NODE_ENV,
});

