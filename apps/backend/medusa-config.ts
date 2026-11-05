import { loadEnv, defineConfig } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

export default defineConfig({
  projectConfig: {
    databaseUrl:
      process.env.DATABASE_URL ||
      "postgres://postgres:postgrespassword@localhost:5433/medusa_ecom",
    redisUrl: process.env.REDIS_URL || "redis://localhost:6380",
    http: {
      storeCors: process.env.STORE_CORS || "http://localhost:3000",
      adminCors:
        process.env.ADMIN_CORS ||
        "http://localhost:7001,http://localhost:9000",
      authCors: process.env.AUTH_CORS || "http://localhost:3000",
      jwtSecret:
        process.env.JWT_SECRET ||
        "supersecret_jwt_for_development_only_replace_in_prod",
      cookieSecret:
        process.env.COOKIE_SECRET ||
        "supersecret_cookie_for_development_only_replace_in_prod",
    },
  },
});

