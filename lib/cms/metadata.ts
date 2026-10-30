import type { Metadata } from "next";
import { draftMode } from "next/headers";

import { normalizePath } from "./paths";
import { findDocumentForPath, type CmsDoc } from "./queries";
import { withCMS } from "./safe";
import { toLiveCanonical } from "./site-origin";

function stringTitle(title: Metadata["title"]): string | undefined {
  if (typeof title === "string") return title;
  if (title && typeof title === "object" && "absolute" in title && typeof title.absolute === "string") {
    return title.absolute;
  }
  return undefined;
}

function cmsMetadata(doc: CmsDoc, fallback: Metadata): Metadata {
  const meta = doc.meta ?? {};
  const title = meta.title || doc.title || stringTitle(fallback.title);
  const description =
    meta.description ||
    doc.excerpt ||
    (typeof fallback.description === "string" ? fallback.description : undefined);
  const canonical = toLiveCanonical(meta.canonicalUrl);
  const robots = {
    index: !meta.noIndex,
    follow: !meta.noFollow,
  };
  const openGraph =
    fallback.openGraph && typeof fallback.openGraph === "object" ? { ...fallback.openGraph } : {};

  return {
    ...fallback,
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    ...(canonical
      ? {
          alternates: {
            ...(fallback.alternates ?? {}),
            canonical,
          },
        }
      : {}),
    robots,
    openGraph: {
      ...openGraph,
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      ...(canonical ? { url: canonical } : {}),
    },
  };
}

/**
 * Published Payload SEO wins. With no published doc, the hardcoded metadata
 * object is returned unchanged.
 */
export async function withCmsMetadata(path: string, fallback: Metadata): Promise<Metadata> {
  const normalized = normalizePath(path);
  if (!normalized) return fallback;
  if (process.env.NEXT_PHASE === "phase-production-build") return fallback;

  let draft = false;
  try {
    draft = (await draftMode()).isEnabled;
  } catch {
    draft = false;
  }

  const doc = await withCMS((payload) => findDocumentForPath(payload, normalized, { draft }), null);
  if (!doc) return fallback;
  if (!draft && doc._status !== "published") return fallback;
  return cmsMetadata(doc, fallback);
}
