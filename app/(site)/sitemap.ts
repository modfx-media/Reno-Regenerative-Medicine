import type { MetadataRoute } from "next";
import { ALL_PAGES } from "./lib/pageMeta";
import { isHiddenBlogPath } from "./lib/posts";
import { getAllSlugs } from "./lib/pseo/combinations";
import { getRankedOnlyBlogSlugs } from "@/lib/ranked/posts";
import { listPublishedForSitemap } from "@/lib/cms/queries";
import { withCMS } from "@/lib/cms/safe";
import { publicSiteOrigin } from "@/lib/cms/site-origin";

const SITE = publicSiteOrigin();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = ALL_PAGES.filter((p) => !isHiddenBlogPath(p.slug)).map((p) => ({
    url: `${SITE}${p.slug}`,
    lastModified: now,
    changeFrequency: p.changefreq ?? "monthly",
    priority: p.priority ?? 0.5,
  }));

  // Programmatic SEO combos (service × location), e.g. /spinal-decompression-sparks-nv/
  const pseoPages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${SITE}/${slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  let rankedPages: MetadataRoute.Sitemap = [];
  try {
    const slugs = await getRankedOnlyBlogSlugs();
    rankedPages = slugs.map((slug) => ({
      url: `${SITE}/blog/${slug}/`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch (err) {
    console.error("[ranked] sitemap slugs failed", err);
  }

  const published = await withCMS((payload) => listPublishedForSitemap(payload), []);
  const seen = new Set<string>([
    ...corePages.map((page) => page.url),
    ...pseoPages.map((page) => page.url),
    ...rankedPages.map((page) => page.url),
  ]);
  const cmsPages: MetadataRoute.Sitemap = [];
  for (const doc of published) {
    if (isHiddenBlogPath(doc.path)) continue;
    const url = `${SITE}${doc.path}`;
    if (seen.has(url)) continue;
    seen.add(url);
    cmsPages.push({
      url,
      lastModified: doc.updatedAt ? new Date(doc.updatedAt) : now,
      changeFrequency: "weekly",
      priority: 0.6,
    });
  }

  return [...corePages, ...pseoPages, ...rankedPages, ...cmsPages];
}
