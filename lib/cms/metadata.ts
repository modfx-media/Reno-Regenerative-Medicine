import type { Metadata } from "next";

import { draftModeEnabled } from "./live-doc";
import { cmsDocIsPublic, mergeCmsMetadata } from "./mergeDesigned";
import { normalizePath } from "./paths";
import { findDocumentForPath } from "./queries";
import { withCMS } from "./safe";

export { mergeCmsMetadata } from "./mergeDesigned";

/**
 * Overlay SEO fields an editor actually set. With no published document
 * (and outside draft preview), the hardcoded metadata object is returned
 * unchanged. Document title and excerpt are never used as meta.
 */
export async function withCmsMetadata(path: string, fallback: Metadata): Promise<Metadata> {
  const normalized = normalizePath(path);
  if (!normalized) return fallback;
  if (process.env.NEXT_PHASE === "phase-production-build") return fallback;

  const draft = await draftModeEnabled();
  const doc = await withCMS((payload) => findDocumentForPath(payload, normalized, { draft }), null);
  if (!cmsDocIsPublic(doc, draft)) return fallback;
  return mergeCmsMetadata(fallback, doc as unknown as Record<string, unknown>, normalized);
}
