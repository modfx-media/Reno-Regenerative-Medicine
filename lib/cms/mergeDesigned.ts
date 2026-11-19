import type { Metadata } from "next";
import type { ReactNode } from "react";

import { normalizePath } from "./paths";
import { publicSiteOrigin, toLiveCanonical } from "./site-origin";

/**
 * Payload is the data plane. A designed route always renders its own
 * component. A CMS document may fill SEO and JSON-LD fields that are
 * actually set. It must not replace the page with the generic article.
 */

const TITLE_SUFFIX = " | Reno Regenerative Medicine";

export type RoutedBody = "designed" | "generic" | "none";

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export function nonEmpty(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (!trimmed || trimmed === "null" || trimmed === "undefined") return undefined;
  return trimmed;
}

/** Public HTML ignores drafts. Draft preview may read the draft document. */
export function cmsDocIsPublic(
  doc: { _status?: string | null } | null | undefined,
  draft: boolean,
): boolean {
  if (!doc) return false;
  if (draft) return true;
  return doc._status === "published";
}

function nodeHasText(node: unknown): boolean {
  if (typeof node === "string") return Boolean(nonEmpty(node));
  if (Array.isArray(node)) return node.some((child) => nodeHasText(child));
  if (!isRecord(node)) return false;
  if (typeof node.text === "string" && node.text.trim()) return true;
  if (Array.isArray(node.children) && node.children.some((child) => nodeHasText(child))) {
    return true;
  }
  if ("root" in node) return nodeHasText(node.root);
  return false;
}

/** Lexical `content` with real text. Title, excerpt, and a blank editor do not count. */
export function docHasRealContent(doc: Record<string, unknown> | null | undefined): boolean {
  if (!doc) return false;
  return nodeHasText(doc.content);
}

/**
 * Designed pages win even when the published document is empty or only an
 * excerpt. The generic article is reserved for paths with no designed page
 * and a document whose rich text actually has text.
 */
export function selectRoutedBody(input: {
  hasDesignedPage: boolean;
  doc: Record<string, unknown> | null | undefined;
}): RoutedBody {
  if (input.hasDesignedPage) return "designed";
  if (!input.doc || !docHasRealContent(input.doc)) return "none";
  return "generic";
}

export function pickRoutedNode(body: RoutedBody, designed: ReactNode, generic: ReactNode): ReactNode {
  if (body === "designed") return designed;
  if (body === "generic") return generic;
  return null;
}

type MetaShape = {
  title?: string | null;
  description?: string | null;
  image?: { url?: string | null; alt?: string | null } | string | number | null;
  canonicalUrl?: string | null;
  noIndex?: boolean | null;
  noFollow?: boolean | null;
  schemaType?: string | null;
  breadcrumbLabel?: string | null;
  jsonLd?: unknown;
  schema?: unknown;
};

function metaOf(doc: Record<string, unknown>): MetaShape {
  return isRecord(doc.meta) ? (doc.meta as MetaShape) : {};
}

function readJsonObject(value: unknown): Record<string, unknown> | undefined {
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return undefined;
    try {
      return readJsonObject(JSON.parse(trimmed) as unknown);
    } catch {
      return undefined;
    }
  }
  if (!isRecord(value) || Object.keys(value).length === 0) return undefined;
  return value;
}

function publicImage(value: MetaShape["image"]): { url: string; alt?: string } | undefined {
  if (typeof value === "number" || value == null) return undefined;
  const raw = typeof value === "string" ? value : value.url;
  const url = nonEmpty(raw);
  if (!url || url.startsWith("/api/") || url.startsWith("/media/")) return undefined;
  const alt = typeof value === "object" ? nonEmpty(value.alt) : undefined;
  return { url, alt };
}

function canonicalHref(value: string | undefined): string | undefined {
  if (!value) return undefined;
  if (value.startsWith("/")) {
    const path = normalizePath(value);
    return path ? `${publicSiteOrigin()}${path}` : undefined;
  }
  return toLiveCanonical(value);
}

function patchOpenGraph(
  current: Metadata["openGraph"],
  patch: Record<string, unknown>,
): Metadata["openGraph"] {
  if (current && typeof current === "object" && !Array.isArray(current)) {
    return { ...current, ...patch };
  }
  return { type: "website", ...patch };
}

function patchOgImage(current: Metadata["openGraph"], url: string, alt?: string): Metadata["openGraph"] {
  const base = current && typeof current === "object" && !Array.isArray(current) ? current : undefined;
  const images = base && Array.isArray(base.images) ? base.images : [];
  const first = images[0];
  const previous = first && typeof first === "object" && !(first instanceof URL) ? first : {};
  const nextImage = {
    width: 1200,
    height: 630,
    ...previous,
    url,
    ...(alt ? { alt } : {}),
  };
  return patchOpenGraph(current, { images: [nextImage] });
}

function patchRobots(current: Metadata["robots"], noIndex: boolean, noFollow: boolean): Metadata["robots"] {
  const base = current && typeof current === "object" ? { ...current } : { index: true, follow: true };
  if (noIndex) base.index = false;
  if (noFollow) base.follow = false;
  if (base.googleBot && typeof base.googleBot === "object") {
    base.googleBot = {
      ...base.googleBot,
      ...(noIndex ? { index: false as const } : {}),
      ...(noFollow ? { follow: false as const } : {}),
    };
  }
  return base;
}

/**
 * Keep the layout title template. A string title still receives
 * `%s | Reno Regenerative Medicine`. An absolute title keeps the same suffix
 * the page already opted into, without a second copy.
 */
function applyCmsTitle(
  cmsTitle: string,
  fallbackTitle: Metadata["title"],
): { title: Metadata["title"]; text: string } {
  const trimmed = cmsTitle.trim();
  if (
    fallbackTitle &&
    typeof fallbackTitle === "object" &&
    "absolute" in fallbackTitle &&
    typeof fallbackTitle.absolute === "string"
  ) {
    const hadSuffix = fallbackTitle.absolute.endsWith(TITLE_SUFFIX);
    const primary = trimmed.endsWith(TITLE_SUFFIX) ? trimmed.slice(0, -TITLE_SUFFIX.length).trim() : trimmed;
    const text = hadSuffix ? `${primary}${TITLE_SUFFIX}` : trimmed;
    return { title: { absolute: text }, text };
  }
  if (trimmed.endsWith(TITLE_SUFFIX)) {
    return { title: { absolute: trimmed }, text: trimmed };
  }
  return { title: trimmed, text: trimmed };
}

/**
 * Overlay only meta fields an editor actually set. The document title and
 * excerpt are not SEO fields. Unchecked robots flags leave googleBot and the
 * rest of the hardcoded robots object untouched.
 */
export function mergeCmsMetadata(
  fallback: Metadata,
  doc: Record<string, unknown> | null | undefined,
  path = "/",
): Metadata {
  if (!doc) return fallback;
  const meta = metaOf(doc);
  const title = nonEmpty(meta.title);
  const description = nonEmpty(meta.description);
  const canonical = canonicalHref(nonEmpty(meta.canonicalUrl));
  const image = publicImage(meta.image);
  const noIndex = meta.noIndex === true;
  const noFollow = meta.noFollow === true;
  if (!title && !description && !canonical && !image && !noIndex && !noFollow) {
    return fallback;
  }
  void path;

  let next: Metadata = { ...fallback };
  const hasOg = (value: Metadata["openGraph"]): value is Exclude<Metadata["openGraph"], null | undefined | unknown[]> =>
    Boolean(value) && typeof value === "object" && !Array.isArray(value);
  const hasTwitter = (value: Metadata["twitter"]): value is Exclude<Metadata["twitter"], null | undefined> =>
    Boolean(value) && typeof value === "object";

  if (title) {
    const applied = applyCmsTitle(title, fallback.title);
    next = { ...next, title: applied.title };
    if (hasOg(next.openGraph)) next = { ...next, openGraph: { ...next.openGraph, title: applied.text } };
    if (hasTwitter(next.twitter)) next = { ...next, twitter: { ...next.twitter, title: applied.text } };
  }
  if (description) {
    next = { ...next, description };
    if (hasOg(next.openGraph)) next = { ...next, openGraph: { ...next.openGraph, description } };
    if (hasTwitter(next.twitter)) next = { ...next, twitter: { ...next.twitter, description } };
  }
  if (canonical) {
    next = { ...next, alternates: { ...next.alternates, canonical } };
    if (hasOg(next.openGraph)) next = { ...next, openGraph: { ...next.openGraph, url: canonical } };
  }
  if (image) {
    next = {
      ...next,
      openGraph: patchOgImage(next.openGraph, image.url, image.alt),
      ...(hasTwitter(next.twitter) ? { twitter: { ...next.twitter, images: [image.url] } } : {}),
    };
  }
  if (noIndex || noFollow) {
    next = { ...next, robots: patchRobots(next.robots, noIndex, noFollow) };
  }
  return next;
}

/**
 * Extra JSON-LD only when a schema field is set. A description or title edit
 * does not invent a script tag.
 */
export function cmsSchemaJsonLd(
  path: string,
  doc: Record<string, unknown> | null | undefined,
): Record<string, unknown> | null {
  if (!doc) return null;
  const meta = metaOf(doc);
  const schemaType = nonEmpty(meta.schemaType);
  const breadcrumbLabel = nonEmpty(meta.breadcrumbLabel);
  const jsonLd =
    readJsonObject(meta.jsonLd) ??
    readJsonObject(meta.schema) ??
    readJsonObject(doc.jsonLd) ??
    readJsonObject(doc.schema);
  if (!schemaType && !breadcrumbLabel && !jsonLd) return null;

  const url = `${publicSiteOrigin()}${normalizePath(path) ?? "/"}`;
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#cms`,
    url,
  };
  const next: Record<string, unknown> = jsonLd ? { ...base, ...jsonLd } : { ...base };
  if (schemaType) next["@type"] = schemaType;
  const title = nonEmpty(meta.title);
  const description = nonEmpty(meta.description);
  if (title) next.name = title;
  if (description) next.description = description;
  if (breadcrumbLabel) next.alternateName = breadcrumbLabel;
  const canonical = canonicalHref(nonEmpty(meta.canonicalUrl));
  if (canonical) {
    next.url = canonical;
    if (typeof next["@id"] === "string" && next["@id"].endsWith("#cms")) {
      next["@id"] = `${canonical}#cms`;
    }
  }
  const image = publicImage(meta.image);
  if (image) next.image = image.url;
  return next;
}
