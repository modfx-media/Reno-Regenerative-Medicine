import type { Metadata } from "next";

import { getPost, type Post } from "@/app/(site)/lib/posts";
import { formatPublishDate } from "@/lib/ranked/display";

import { mergeCmsMetadata } from "./mergeDesigned";
import { normalizePath } from "./paths";
import { publicSiteOrigin, toLiveCanonical } from "./site-origin";

export type BlogPostRecord = {
  id?: number | string;
  title?: string | null;
  excerpt?: string | null;
  path?: string | null;
  slug?: string | null;
  _status?: "draft" | "published" | null;
  publishedOn?: string | null;
  updatedAt?: string | null;
  heroImagePath?: string | null;
  heroImage?: { url?: string | null; alt?: string | null } | number | null;
  category?: { slug?: string | null; title?: string | null } | number | null;
  content?: unknown;
  meta?: {
    title?: string | null;
    description?: string | null;
    canonicalUrl?: string | null;
    noIndex?: boolean | null;
    noFollow?: boolean | null;
    excludeFromSitemap?: boolean | null;
  } | null;
};

const DEFAULT_COVER = "/images/blog/default-cover.jpg";

/** Publish date is in the future when it is strictly after `now`. Missing dates are not future. */
export function isFuturePublishDate(value: string | null | undefined, now = Date.now()): boolean {
  if (!value) return false;
  const time = Date.parse(value);
  if (Number.isNaN(time)) return false;
  return time > now;
}

/**
 * Last non-empty segment, ignoring a trailing slash and a leading `/blog/`.
 * `sciatica/`, `/blog/sciatica/`, and `blog/sciatica` all resolve to `sciatica`.
 */
export function slugFromLookup(input: string | null | undefined): string {
  if (!input) return "";
  const noQuery = input.trim().split(/[?#]/)[0] ?? "";
  const parts = noQuery
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean);
  if (parts[0] === "blog" && parts.length > 1) parts.shift();
  return parts[parts.length - 1] ?? "";
}

/** Trailing-slash path plus the same path without the slash. `/` stays a single value. */
export function pathLookupValues(pathname: string | null | undefined): string[] {
  const exact = normalizePath(pathname);
  if (!exact) return [];
  if (exact === "/") return ["/"];
  return [exact, exact.slice(0, -1)];
}

export function preferredByPath<T extends { path?: string | null }>(
  docs: readonly T[],
  pathname: string,
): T | undefined {
  const exact = normalizePath(pathname);
  if (!exact) return undefined;
  return docs.find((doc) => doc.path === exact) ?? docs.find((doc) => normalizePath(doc.path) === exact);
}

export function preferredPost(docs: readonly BlogPostRecord[], rawSlug: string): BlogPostRecord | undefined {
  const slug = slugFromLookup(rawSlug);
  if (!slug) return undefined;
  const slugOf = (doc: BlogPostRecord) => slugFromLookup(doc.slug || "");
  const pathOf = (doc: BlogPostRecord) => slugFromLookup(doc.path || "");
  return (
    docs.find((doc) => slugOf(doc) === slug) ??
    docs.find((doc) => pathOf(doc) === slug) ??
    docs[0]
  );
}

function categoryOf(doc: BlogPostRecord): string | undefined {
  const category = doc.category;
  if (!category || typeof category !== "object") return undefined;
  const slug = category.slug?.trim();
  return slug ? slugFromLookup(slug) : undefined;
}

const MEDIA_FILE_PREFIX = "/api/media/file/";
const LIVE_MEDIA_HOSTS = new Set(["renoregen.com", "www.renoregen.com"]);

function mediaFilePath(pathname: string, search = ""): string | undefined {
  if (!pathname.startsWith(MEDIA_FILE_PREFIX)) return undefined;
  return `${pathname}${search}`;
}

function isBlobHost(hostname: string): boolean {
  const host = hostname.toLowerCase();
  return host === "blob.vercel-storage.com" || host.endsWith(".blob.vercel-storage.com");
}

function sameOriginMediaHost(hostname: string): boolean {
  const host = hostname.toLowerCase();
  if (LIVE_MEDIA_HOSTS.has(host)) return true;
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) return false;
  try {
    return new URL(configured).hostname.toLowerCase() === host;
  } catch {
    return false;
  }
}

/**
 * Payload covers live at `/api/media/file/...`. Relative paths stay.
 * Same-origin absolute URLs become that relative path. Blob URLs stay absolute.
 * Anything else is missing or foreign and falls through to the default cover.
 */
function coverFrom(value: string | null | undefined): string | undefined {
  const trimmed = value?.trim();
  if (!trimmed) return undefined;

  if (trimmed.startsWith("//")) return absoluteCover(`https:${trimmed}`);
  if (/^[a-z][a-z0-9+.-]*:/i.test(trimmed)) return absoluteCover(trimmed);

  const hashless = trimmed.split("#")[0] ?? trimmed;
  const pathname = hashless.split("?")[0] ?? hashless;
  const search = hashless.includes("?") ? `?${hashless.slice(hashless.indexOf("?") + 1)}` : "";
  const media = mediaFilePath(pathname, search);
  if (media) return media;
  if (trimmed.startsWith("/api/")) return undefined;
  return trimmed;
}

function absoluteCover(href: string): string | undefined {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return undefined;
  }
  if (isBlobHost(url.hostname)) return href;
  if (!sameOriginMediaHost(url.hostname)) return undefined;
  return mediaFilePath(url.pathname, url.search) ?? (url.pathname.startsWith("/api/") ? undefined : href);
}

function imageOf(doc: BlogPostRecord): string | undefined {
  const fromPath = coverFrom(doc.heroImagePath);
  if (fromPath) return fromPath;
  const hero = doc.heroImage;
  if (!hero || typeof hero !== "object") return undefined;
  return coverFrom(hero.url);
}

function formatCmsDate(value: string | null | undefined): string {
  if (!value) return "";
  const iso = value.slice(0, 10);
  if (/^\d{4}-\d{2}-\d{2}$/.test(iso)) return formatPublishDate(iso);
  const parsed = Date.parse(value);
  if (Number.isNaN(parsed)) return value;
  return formatPublishDate(new Date(parsed).toISOString().slice(0, 10));
}

export function postFromCms(doc: BlogPostRecord): Post | null {
  const slug = slugFromLookup(doc.slug || doc.path || "");
  const title = doc.title?.trim() ?? "";
  if (!slug || !title) return null;
  const local = getPost(slug);
  return {
    slug,
    title,
    date: formatCmsDate(doc.publishedOn || doc.updatedAt),
    image: imageOf(doc) || local?.image || DEFAULT_COVER,
    excerpt: (doc.excerpt || local?.excerpt || "").trim(),
    category: categoryOf(doc) || local?.category || "general",
    href: `/blog/${slug}/`,
  };
}

/** Hard-coded posts first, then Payload replaces the same slug. */
export function mergeBlogPosts(hardcoded: readonly Post[], payloadPosts: readonly Post[]): Post[] {
  const bySlug = new Map<string, Post>();
  for (const post of hardcoded) {
    const slug = slugFromLookup(post.slug);
    if (!slug) continue;
    bySlug.set(slug, { ...post, slug, href: post.href ?? `/${slug}/` });
  }
  for (const post of payloadPosts) {
    const slug = slugFromLookup(post.slug);
    if (!slug) continue;
    bySlug.set(slug, { ...post, slug, href: post.href ?? `/blog/${slug}/` });
  }
  return [...bySlug.values()].sort((a, b) => publishTime(b.date) - publishTime(a.date) || a.slug.localeCompare(b.slug));
}

function publishTime(value: string): number {
  const time = Date.parse(value);
  return Number.isNaN(time) ? 0 : time;
}

/**
 * Public sitemap path for a post. Future, noindex, and sitemap-excluded posts return null.
 * A missing path falls back to `/blog/{slug}/`.
 */
export function publicPostSitemapPath(
  record: Pick<BlogPostRecord, "path" | "slug" | "publishedOn" | "meta">,
  now = Date.now(),
): string | null {
  if (isFuturePublishDate(record.publishedOn, now)) return null;
  if (record.meta?.noIndex || record.meta?.excludeFromSitemap) return null;
  const fromPath = record.path ? normalizePath(record.path) : null;
  if (fromPath) return fromPath;
  const slug = slugFromLookup(record.slug);
  if (!slug) return null;
  return normalizePath(`/blog/${slug}/`);
}

/** Absolute canonical on the public origin, with the site's trailing slash. */
export function conventionCanonical(value: string | undefined, path: string): string {
  const origin = publicSiteOrigin();
  const fallbackPath = normalizePath(path) ?? "/";
  const fallback = `${origin}${fallbackPath}`;
  if (!value?.trim()) return fallback;

  const trimmed = value.trim();
  if (trimmed.startsWith("/")) {
    const relative = normalizePath(trimmed);
    return relative ? `${origin}${relative}` : fallback;
  }

  const live = toLiveCanonical(trimmed) ?? fallback;
  try {
    const url = new URL(live);
    const pathOut = normalizePath(url.pathname) ?? "/";
    const host = url.hostname.toLowerCase();
    const siteHost = new URL(origin).hostname.toLowerCase();
    const onSite =
      host === siteHost ||
      host === "renoregen.com" ||
      host === "www.renoregen.com" ||
      host === "localhost" ||
      host === "127.0.0.1" ||
      host.endsWith(".vercel.app");
    if (onSite) return `${origin}${pathOut}${url.search}`;
    url.pathname = pathOut;
    return url.toString();
  } catch {
    return fallback;
  }
}

function canonicalText(metadata: Metadata): string | undefined {
  const canonical = metadata.alternates?.canonical;
  if (typeof canonical === "string") return canonical;
  if (canonical instanceof URL) return canonical.toString();
  return undefined;
}

/** Keep SEO-field overlays, then force the canonical onto the live trailing-slash URL. */
export function blogDetailMetadata(post: Post, doc: BlogPostRecord | null): Metadata {
  const path = `/blog/${post.slug}/`;
  const canonical = conventionCanonical(undefined, path);
  const description = post.excerpt || undefined;
  const fallback: Metadata = {
    title: post.title,
    description,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description,
      url: canonical,
      type: "article",
      ...(doc?.publishedOn ? { publishedTime: doc.publishedOn } : {}),
      ...(post.image ? { images: [post.image] } : {}),
    },
  };
  const merged = doc ? mergeCmsMetadata(fallback, doc as unknown as Record<string, unknown>, path) : fallback;
  const nextCanonical = conventionCanonical(canonicalText(merged), path);
  const openGraph =
    merged.openGraph && typeof merged.openGraph === "object" && !Array.isArray(merged.openGraph)
      ? { ...merged.openGraph, url: nextCanonical }
      : merged.openGraph;
  return {
    ...merged,
    alternates: { ...merged.alternates, canonical: nextCanonical },
    openGraph,
  };
}
