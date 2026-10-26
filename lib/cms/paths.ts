/** Normalize a public path to the site's trailing-slash form. */
export function normalizePath(input: string | null | undefined): string | null {
  if (input == null) return null;
  const trimmed = input.trim();
  if (!trimmed) return null;
  if (trimmed === "/") return "/";
  const withLead = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  const noQuery = withLead.split(/[?#]/)[0] ?? withLead;
  if (noQuery === "/") return "/";
  return noQuery.endsWith("/") ? noQuery : `${noQuery}/`;
}

/**
 * Preview destinations must be a real path.
 * Null, undefined, and any empty segment (including "//") return null.
 */
export function previewFromPath(input: string | null | undefined): string | null {
  if (input == null) return null;
  if (typeof input !== "string") return null;
  const trimmed = input.trim();
  if (!trimmed) return null;

  const withoutQuery = trimmed.split(/[?#]/)[0] ?? "";
  const rawParts = withoutQuery.split("/");
  const parts = [...rawParts];
  if (parts[0] === "") parts.shift();
  if (parts.length > 0 && parts[parts.length - 1] === "") parts.pop();
  if (parts.length === 0) return null;
  if (parts.some((segment) => segment.trim() === "")) return null;
  return `/${parts.join("/")}/`;
}
