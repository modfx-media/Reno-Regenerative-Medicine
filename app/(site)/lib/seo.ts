import type { Metadata } from "next";
import { PAGES, type PageMeta } from "./pageMeta";

const SITE_URL = "https://www.renoregen.com";
const BRAND = "Reno Regenerative Medicine";

export type GenerateMetadataInput = {
  /** Page slug, e.g. "/about/" — used to look up PAGES and build canonical URL. */
  slug: string;
  /** Override the title (otherwise pulled from PAGES, otherwise falls back to brand). */
  title?: string;
  /** Override the description. */
  description?: string;
  /**
   * Optional OG image path (relative to /public or absolute URL). When omitted,
   * Next.js falls back to the route's `opengraph-image` file convention
   * (see `app/opengraph-image.tsx`).
   */
  image?: string;
  /** Mark page noindex (e.g. thank-you, internal). */
  noIndex?: boolean;
  /** Extra keywords (joined into Metadata.keywords). */
  keywords?: string[];
};

const pageMap: Record<string, PageMeta> = PAGES.reduce(
  (acc, p) => {
    acc[p.slug] = p;
    return acc;
  },
  {} as Record<string, PageMeta>
);

function normalizeSlug(slug: string): string {
  if (!slug) return "/";
  let s = slug.startsWith("/") ? slug : `/${slug}`;
  if (s !== "/" && !s.endsWith("/")) s = `${s}/`;
  return s;
}

/**
 * Build a Next.js `Metadata` object for a page.
 *
 * Looks up canonical title/description from `pageMeta.PAGES` by slug and
 * merges in any overrides. Always emits canonical URL, OpenGraph, Twitter
 * card, and a robots directive.
 */
export function generateMetadata(input: GenerateMetadataInput): Metadata {
  const slug = normalizeSlug(input.slug);
  const meta = pageMap[slug];

  const title = input.title ?? meta?.title ?? BRAND;
  const description =
    input.description ??
    meta?.description ??
    "Integrative & regenerative medicine in Reno, NV — natural relief for chronic pain.";

  const canonical = `${SITE_URL}${slug}`;
  const hasImage = Boolean(input.image);
  const ogImage = hasImage
    ? input.image!.startsWith("http")
      ? input.image!
      : `${SITE_URL}${input.image!}`
    : undefined;

  // OG/Twitter titles do not get the layout template applied automatically,
  // so include the brand suffix here (avoiding doubling for absolute titles).
  const ogTitle = title.endsWith(`| ${BRAND}`) ? title : `${title} | ${BRAND}`;

  return {
    title,
    description,
    alternates: { canonical },
    keywords: input.keywords,
    robots: input.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      siteName: BRAND,
      type: "website",
      locale: "en_US",
      // When no explicit image is supplied, omit `images` so Next.js inherits
      // the route's opengraph-image.tsx (1200×630 PNG generated at build time).
      ...(ogImage
        ? { images: [{ url: ogImage, width: 1200, height: 630, alt: ogTitle }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

export default generateMetadata;
