/** Payload can boot only when both the secret and the database URL are set. */
export function cmsIsConfigured(): boolean {
  return Boolean(process.env.PAYLOAD_SECRET?.trim() && process.env.DATABASE_URL?.trim());
}
