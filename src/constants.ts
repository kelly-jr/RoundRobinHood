export const __prod__ = process.env.environment === "production";

export const DEFAULT_SESSION_EXPIRY = 1 * 60 * 60 * 1000; // 1 hr in milliseconds
