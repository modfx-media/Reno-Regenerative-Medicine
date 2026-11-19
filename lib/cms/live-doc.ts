import { draftMode } from "next/headers";

import { cmsDocIsPublic, docHasRealContent } from "./mergeDesigned";
import { findDocumentForPath, type CmsDoc } from "./queries";
import { withCMS } from "./safe";

export async function draftModeEnabled(): Promise<boolean> {
  try {
    return (await draftMode()).isEnabled;
  } catch {
    return false;
  }
}

export async function loadCmsDoc(pathname: string): Promise<CmsDoc | null> {
  if (process.env.NEXT_PHASE === "phase-production-build") return null;
  const draft = await draftModeEnabled();
  const doc = await withCMS((payload) => findDocumentForPath(payload, pathname, { draft }), null);
  if (!cmsDocIsPublic(doc, draft)) return null;
  return doc;
}

export function cmsOnlyDocIsRenderable(doc: CmsDoc | null): doc is CmsDoc {
  return Boolean(doc) && docHasRealContent(doc as unknown as Record<string, unknown>);
}
