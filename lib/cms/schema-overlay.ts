import { headers } from "next/headers";

import { loadCmsDoc } from "./live-doc";
import { cmsSchemaJsonLd } from "./mergeDesigned";

/** JSON-LD for schema fields that are set. Null leaves the page HTML unchanged. */
export async function cmsSchemaForRequest(): Promise<Record<string, unknown> | null> {
  if (process.env.NEXT_PHASE === "phase-production-build") return null;
  let pathname = "/";
  try {
    pathname = (await headers()).get("x-pathname") || "/";
  } catch {
    return null;
  }
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/_next") ||
    pathname.includes("__hidden")
  ) {
    return null;
  }
  const doc = await loadCmsDoc(pathname);
  if (!doc) return null;
  return cmsSchemaJsonLd(pathname, doc as unknown as Record<string, unknown>);
}
