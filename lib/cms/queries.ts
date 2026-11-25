import type { Payload } from "payload";

import {
  isFuturePublishDate,
  pathLookupValues,
  preferredByPath,
  preferredPost,
  publicPostSitemapPath,
  slugFromLookup,
  type BlogPostRecord,
} from "./blog-match";
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
  const paths = pathLookupValues(pathname);
  if (paths.length === 0) return null;

  for (const collection of COLLECTIONS) {
    const result = await payload.find({
      collection,
      depth: 1,
      draft: opts.draft,
      limit: 5,
      overrideAccess: opts.draft,
      pagination: false,
      where: {
        path: {
          in: paths,
        },
      },
    });
    const matches = (result.docs as { path?: string | null; publishedOn?: string | null }[]).filter((doc) => {
      if (!opts.draft && collection === "posts" && isFuturePublishDate(doc.publishedOn)) return false;
      return true;
    });
    const doc = preferredByPath(matches, pathname);
    if (!doc) continue;
    return { ...(doc as unknown as Omit<CmsDoc, "collection">), collection };
  }

  return null;
}

export async function listBlogPosts(payload: Payload, opts: { draft: boolean }): Promise<BlogPostRecord[]> {
  const result = await payload.find({
    collection: "posts",
    depth: 1,
    draft: opts.draft,
    limit: 1000,
    overrideAccess: opts.draft,
    pagination: false,
    ...(opts.draft
      ? {}
      : {
          where: {
            _status: {
              equals: "published",
            },
          },
        }),
  });

  return (result.docs as BlogPostRecord[]).filter(
    (doc) => opts.draft || !isFuturePublishDate(doc.publishedOn),
  );
}

/** Published post for a slug or path. A trailing slash on either field still matches. */
export async function findPostForSlug(
  payload: Payload,
  rawSlug: string,
  opts: { draft: boolean },
): Promise<BlogPostRecord | null> {
  const slug = slugFromLookup(rawSlug);
  if (!slug) return null;

  const result = await payload.find({
    collection: "posts",
    depth: 1,
    draft: opts.draft,
    limit: 10,
    overrideAccess: opts.draft,
    pagination: false,
    where: {
      or: [
        { slug: { equals: slug } },
        { slug: { equals: `${slug}/` } },
        { path: { equals: `/blog/${slug}/` } },
        { path: { equals: `/blog/${slug}` } },
        { path: { equals: `/${slug}/` } },
        { path: { equals: `/${slug}` } },
      ],
    },
  });

  const visible = (result.docs as BlogPostRecord[]).filter((doc) => {
    if (!opts.draft && doc._status && doc._status !== "published") return false;
    if (!opts.draft && isFuturePublishDate(doc.publishedOn)) return false;
    return true;
  });
  return preferredPost(visible, slug) ?? null;
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
      const record = doc as BlogPostRecord;
      if (collection === "posts") {
        const path = publicPostSitemapPath(record);
        if (!path) continue;
        urls.push({ path, updatedAt: record.updatedAt ?? undefined });
        continue;
      }
      if (!record.path) continue;
      if (record.meta?.noIndex || record.meta?.excludeFromSitemap) continue;
      const path = normalizePath(record.path);
      if (!path) continue;
      urls.push({ path, updatedAt: record.updatedAt ?? undefined });
    }
  }

  return urls;
}
