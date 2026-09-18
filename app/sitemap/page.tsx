import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import SitemapBody from "./SitemapBody";
import {
  ALL_PAGES,
  CATEGORIES,
  PAGES,
  POSTS,
  getMeta,
  type PageMeta,
} from "../lib/pageMeta";

const meta = getMeta("/sitemap/")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "https://www.renoregen.com/sitemap/" },
};

/* ------------------------------------------------------------------ */
/*  Group definitions — every PageMeta entry ends up linked.          */
/* ------------------------------------------------------------------ */
const MAIN_SLUGS = [
  "/",
  "/about/",
  "/new-patients/",
  "/contact/",
  "/reno-office/",
  "/seminars/",
  "/blog/",
  "/reviews/",
  "/rate-us/",
  "/video-testimonials/",
];

const SITE_SLUGS = [
  "/careers/",
  "/privacy-policy/",
  "/accessibility/",
  "/sitemap/",
  "/thank-you/",
  "/what-can-we-improve/",
];

const PAGES_BY_SLUG = new Map(PAGES.map((p) => [p.slug, p]));
function pickPages(slugs: string[]): PageMeta[] {
  return slugs
    .map((s) => PAGES_BY_SLUG.get(s))
    .filter((p): p is PageMeta => Boolean(p));
}

const SERVICE_SLUGS = [
  "/services/",
  "/joint-injections/",
  "/trigger-point-injections/",
  "/physical-therapy/",
  "/chiropractic-care/",
  "/spinal-decompression/",
  "/nutritional-ivs/",
  "/bioidentical-hormone-optimization-therapy/",
  "/ed-shockwave-therapy/",
  "/services/knee-decompression/",
  "/auto-accident-injury-eugene-or/",
];

const SERVICE_PAGES = pickPages(SERVICE_SLUGS);
const CONDITION_PAGES = PAGES.filter((p) => p.slug.startsWith("/conditions/"));

export type SitemapGroup = {
  heading: string;
  description: string;
  icon: "compass" | "spark" | "heart" | "tag" | "shield" | "more";
  pages: PageMeta[];
};

const GROUPS: SitemapGroup[] = [
  {
    heading: "Main Pages",
    description: "Find your way to the most-visited corners of our site.",
    icon: "compass",
    pages: pickPages(MAIN_SLUGS),
  },
  {
    heading: "Services",
    description: "Therapies and treatments offered at our Reno clinic.",
    icon: "spark",
    pages: SERVICE_PAGES,
  },
  {
    heading: "Conditions We Treat",
    description: "Pain points and conditions we help patients resolve.",
    icon: "heart",
    pages: CONDITION_PAGES,
  },
  {
    heading: "Categories",
    description: "Browse the journal by topic.",
    icon: "tag",
    pages: [...CATEGORIES],
  },
  {
    heading: "Site & Legal",
    description: "Policies, careers, and supporting pages.",
    icon: "shield",
    pages: pickPages(SITE_SLUGS),
  },
];

const grouped = new Set(GROUPS.flatMap((g) => g.pages.map((p) => p.slug)));
const orphans = PAGES.filter((p) => !grouped.has(p.slug));
if (orphans.length > 0) {
  GROUPS.push({
    heading: "Other",
    description: "Additional pages on the site.",
    icon: "more",
    pages: orphans,
  });
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Reno Regenerative Medicine"
          title="Sitemap"
          image="/images/services/chiropractic-care.jpg"
          imageAlt="Reno Regenerative Medicine Sitemap"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Sitemap" },
          ]}
          size="md"
        />
        <SitemapBody
          groups={GROUPS}
          posts={[...POSTS]}
          totalLinks={ALL_PAGES.length}
        />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
