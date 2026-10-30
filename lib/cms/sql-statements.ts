import { sql } from "@payloadcms/db-vercel-postgres";

// Two copies of drizzle-orm declare incompatible SQL wrappers. The migration
// runner only needs to call execute once per statement.
type StatementDb = {
  execute: (query: never) => Promise<unknown>;
};

/**
 * Neon’s HTTP driver rejects multiple commands in one prepared statement.
 * Each migration statement has to be its own execute.
 */
export async function runStatements(db: StatementDb, statements: readonly string[]): Promise<void> {
  for (const statement of statements) {
    const trimmed = statement.trim().replace(/;+\s*$/g, "");
    if (!trimmed) continue;
    if (trimmed.includes(";")) {
      throw new Error("Refusing to send multiple SQL statements in one call");
    }
    await db.execute(sql.raw(trimmed) as never);
  }
}

export function withDropIfExists(statement: string): string {
  return statement
    .trim()
    .replace(/^DROP\s+TABLE\s+(?!IF\s+EXISTS\b)/i, "DROP TABLE IF EXISTS ")
    .replace(/^DROP\s+TYPE\s+(?!IF\s+EXISTS\b)/i, "DROP TYPE IF EXISTS ")
    .replace(/^DROP\s+INDEX\s+(?!IF\s+EXISTS\b)/i, "DROP INDEX IF EXISTS ")
    .replace(/^DROP\s+SCHEMA\s+(?!IF\s+EXISTS\b)/i, "DROP SCHEMA IF EXISTS ")
    .replace(/;+\s*$/g, "");
}
