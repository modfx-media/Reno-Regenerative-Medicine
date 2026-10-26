import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageHero from "@/app/(site)/components/PageHero";
import Header from "@/app/(site)/components/Header";
import Footer from "@/app/(site)/components/Footer";
import {
  getAllSlugs,
  getCombinationBySlug,
} from "@/app/(site)/lib/pseo/combinations";

import PseoBody from "./PseoBody";
import { withCmsMetadata } from "@/lib/cms/metadata";

const SITE_URL = "https://www.renoregen.com";
const BRAND = "Reno Regenerative Medicine";
const DEFAULT_HERO = "/images/services/spinal-decompression.jpg";

// Only pre-rendered combos resolve. Anything else 404s without invoking
// generateMetadata / the page component.
export const dynamicParams = false;

type RouteParams = { pseo: string };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ pseo: slug }));
}

function fillTemplate(
  str: string,
  vars: { city: string; state: string; county: string },
) {
  return str
    .replace(/\{city\}/g, vars.city)
    .replace(/\{state\}/g, vars.state)
    .replace(/\{county\}/g, vars.county);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { pseo } = await params;
  const combo = getCombinationBySlug(pseo);
  if (!combo) return {};

  const { service, location } = combo;
  const vars = {
    city: location.city,
    state: location.state,
    county: location.county,
  };
  const title = fillTemplate(service.metaTitle, vars);
  const description = fillTemplate(service.metaDesc, vars);
  const canonical = `${SITE_URL}/${pseo}/`;

  return withCmsMetadata(`/${pseo}/`, {
    // The metaTitle template already includes "| Reno Regenerative Medicine".
    // Use absolute to bypass the root layout's title.template and avoid doubling.
    title: { absolute: title },
    description,
    keywords: service.gscKeywords,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: BRAND,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `${SITE_URL}${DEFAULT_HERO}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${DEFAULT_HERO}`],
    },
  });
}

export default async function PseoPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { pseo } = await params;
  const combo = getCombinationBySlug(pseo);
  if (!combo) return notFound();

  const { service, location } = combo;
  const vars = {
    city: location.city,
    state: location.state,
    county: location.county,
  };
  const h1 = fillTemplate(service.h1Template, vars);
  const intro = fillTemplate(service.intro, vars);
  const canonical = `${SITE_URL}/${pseo}/`;

  // FAQ entries — built from the combo so every page gets unique content.
  const faqs = [
    {
      q: `Do you treat patients from ${location.city}, ${location.state}?`,
      a: `Yes. Reno Regenerative Medicine welcomes patients from ${location.city} and throughout ${location.county} County. Our clinic is just ${location.distanceFromReno} away at 730 Sandhill Road, Suite 120 in Reno, NV.`,
    },
    {
      q: `What ${service.shortName.toLowerCase()} options do you offer?`,
      a: `Our ${service.shortName.toLowerCase()} program combines ${service.treatments
        .slice(0, 3)
        .join(", ")
        .replace(/, ([^,]*)$/, ", and $1")}. Each plan is tailored to the patient after a comprehensive evaluation.`,
    },
    {
      q: `Is ${service.shortName.toLowerCase()} covered by insurance?`,
      a: `Coverage varies by plan. Many of our services qualify for HSA/FSA and certain insurance benefits. Call (775) 683-9026 and our team will verify your benefits before your visit.`,
    },
    {
      q: `How soon can I be seen?`,
      a: `New patients from ${location.city}, ${location.state} are typically scheduled within a few business days. Request an appointment online or call (775) 683-9026.`,
    },
    {
      q: `Do I need a referral?`,
      a: `No referral is required. You can book directly with Reno Regenerative Medicine.`,
    },
  ];

  // ── Schema.org JSON-LD ──
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: BRAND,
    url: SITE_URL,
    telephone: "+17756839026",
    image: `${SITE_URL}${DEFAULT_HERO}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "730 Sandhill Road, Suite 120",
      addressLocality: "Reno",
      addressRegion: "NV",
      postalCode: "89521",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.5296,
      longitude: -119.8138,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 39.5296,
        longitude: -119.8138,
      },
      geoRadius: "300000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: service.treatments.map((t, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "MedicalProcedure", name: t },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: service.shortName,
        item: `${SITE_URL}${service.internalPageUrl}`,
      },
      { "@type": "ListItem", position: 3, name: h1, item: canonical },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />
      <main>
        <PageHero
          title={h1}
          subtitle={`Serving patients from ${location.city}, ${location.state} and ${location.county} County`}
          eyebrow={service.shortName}
          image={DEFAULT_HERO}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: service.shortName, href: service.internalPageUrl },
            { label: `${location.city}, ${location.state}` },
          ]}
          size="md"
        />

        <PseoBody
          h1={h1}
          intro={intro}
          service={service}
          location={location}
          faqs={faqs}
        />
      </main>
      <Footer />
    </>
  );
}
