import type { Payload } from "payload";

import { normalizePath } from "./paths";

export type CmsMeta = {
  title?: string | null;
  description?: string | null;
  canonicalUrl?: string | null;
  noIndex?: boolean | null;
  noFollow?: boolean | null;
  excludeFromSitemap?: boolean | null;
};

export type CmsDoc = {
  id: number | string;
  title?: string | null;
  excerpt?: string | null;
  path?: string | null;
  slug?: string | null;
  _status?: "draft" | "published" | null;
  heroImagePath?: string | null;
  content?: unknown;
  meta?: CmsMeta | null;
  updatedAt?: string;
  collection: "pages" | "posts";
};

const COLLECTIONS = ["pages", "posts"] as const;

export async function findDocumentForPath(
  payload: Payload,
  pathname: string,
  opts: { draft: boolean },
): Promise<CmsDoc | null> {
  const path = normalizePath(pathname);
  if (!path) return null;

  for (const collection of COLLECTIONS) {
    const result = await payload.find({
      collection,
      depth: 0,
      draft: opts.draft,
      limit: 1,
      overrideAccess: opts.draft,
      pagination: false,
      where: {
        path: {
          equals: path,
        },
      },
    });
    const doc = result.docs[0];
    if (!doc) continue;
    return { ...(doc as unknown as Omit<CmsDoc, "collection">), collection };
  }

  return null;
}

export async function listPublishedForSitemap(
  payload: Payload,
): Promise<{ path: string; updatedAt?: string }[]> {
  const urls: { path: string; updatedAt?: string }[] = [];

  for (const collection of COLLECTIONS) {
    const result = await payload.find({
      collection,
      depth: 0,
      draft: false,
      limit: 1000,
      overrideAccess: false,
      pagination: false,
      where: {
        _status: {
          equals: "published",
        },
      },
    });

    for (const doc of result.docs) {
      const record = doc as {
        path?: string | null;
        updatedAt?: string;
        meta?: CmsMeta | null;
      };
      if (!record.path) continue;
      if (record.meta?.noIndex || record.meta?.excludeFromSitemap) continue;
      const path = normalizePath(record.path);
      if (!path) continue;
      urls.push({ path, updatedAt: record.updatedAt });
    }
  }

  return urls;
}
