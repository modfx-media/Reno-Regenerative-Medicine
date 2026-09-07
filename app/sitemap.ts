import type { MetadataRoute } from "next";
import { ALL_PAGES } from "./lib/pageMeta";
import { getAllSlugs } from "./lib/pseo/combinations";
import { getRankedOnlyBlogSlugs } from "@/lib/ranked/posts";

const SITE = "https://www.renoregen.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = ALL_PAGES.map((p) => ({
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

  return [...corePages, ...pseoPages, ...rankedPages];
}
