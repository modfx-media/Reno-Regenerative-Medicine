import type { Metadata } from "next";

import Link from "next/link";

import PageHero from "@/app/(site)/components/PageHero";
import CTASection from "@/app/(site)/components/CTASection";
import Header from "@/app/(site)/components/Header";
import Footer from "@/app/(site)/components/Footer";
import { generateMetadata as buildMetadata } from "@/app/(site)/lib/seo";
import locations from "@/app/(site)/lib/pseo/locations";
import services from "@/app/(site)/lib/pseo/services";

import AreasGrid from "./AreasGrid";
import { withCmsMetadata } from "@/lib/cms/metadata";

const SITE_URL = "https://www.renoregen.com";

export async function generateMetadata(): Promise<Metadata> {
  return withCmsMetadata('/areas-we-serve/', buildMetadata({ slug: "/areas-we-serve/" }));
}

export default function AreasWeServePage() {
  // Group locations by county for organized display.
  const byCounty = locations.reduce<Record<string, typeof locations>>(
    (acc, loc) => {
      const key = `${loc.county} County, ${loc.state}`;
      (acc[key] ??= []).push(loc);
      return acc;
    },
    {},
  );

  // Sort counties so Washoe (home county) sits first, then alphabetic.
  const counties = Object.keys(byCounty).sort((a, b) => {
    if (a.startsWith("Washoe")) return -1;
    if (b.startsWith("Washoe")) return 1;
    return a.localeCompare(b);
  });

  // ItemList JSON-LD covering all 525 combos for crawl efficiency.
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Areas We Serve — Reno Regenerative Medicine",
    numberOfItems: locations.length * services.length,
    itemListElement: locations.flatMap((loc, li) =>
      services.map((svc, si) => ({
        "@type": "ListItem",
        position: li * services.length + si + 1,
        url: `${SITE_URL}/${svc.slug}-${loc.slug}/`,
        name: `${svc.shortName} in ${loc.city}, ${loc.state}`,
      })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <Header />
      <main>
        <PageHero
          eyebrow="Service Area"
          title="Areas We Serve"
          subtitle={`Care for patients across ${locations.length}+ Northern Nevada and Eastern California communities.`}
          image="/images/services/spinal-decompression.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Areas We Serve" },
          ]}
          size="md"
        />

        <section className="bg-[#f6f3ea] pt-12">
          <div className="mx-auto w-full max-w-7xl px-6">
            <Link
              href="/auto-accident-injury-eugene-or/"
              className="group flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 hover:border-[#3d7a52]/60 hover:shadow-md transition-all"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#3d7a52]">
                  <span aria-hidden className="h-px w-6 bg-[#3d7a52]/70" />
                  Featured Area
                </span>
                <h2 className="mt-3 text-2xl font-semibold text-[#1a2332]">
                  Auto Accident Injury Care for Eugene, OR
                </h2>
                <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-stone-600">
                  Beyond Northern Nevada, we welcome auto accident and whiplash
                  patients from the Eugene, Oregon area — with chiropractic care,
                  spinal decompression, and joint injections built for collision
                  recovery.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#3d7a52] px-5 py-2.5 text-[13px] font-semibold text-white sm:self-auto">
                Explore Eugene, OR Care
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </section>

        <AreasGrid
          counties={counties}
          byCounty={byCounty}
          services={services}
          totalLocations={locations.length}
        />

        <CTASection
          title="Don't see your city?"
          subtitle="We welcome patients from across Northern Nevada and Eastern California — call to confirm we serve your area."
        />
      </main>
      <Footer />
    </>
  );
}
