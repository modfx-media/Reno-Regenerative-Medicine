// Schema.org JSON-LD builders. Keep all schema construction in one place so
// page files can simply call a builder and render the result with <JsonLd/>.

import { SERVICES_BY_SLUG, type ServiceData, type ServiceSlug } from "./services";
import { isFiveStarReview, type GoogleReview, type GoogleReviewsMeta } from "@/lib/reviews";

export const SITE_URL = "https://www.renoregen.com";
export const BRAND = "Reno Regenerative Medicine";

const BUSINESS_ID = `${SITE_URL}/#business`;

/** MedicalBusiness / LocalBusiness — applies site-wide, injected from layout. */
export function buildMedicalBusinessSchema(reviewsPayload?: {
  reviews: GoogleReview[];
  meta: GoogleReviewsMeta;
}) {
  const visible = (reviewsPayload?.reviews ?? []).filter(isFiveStarReview);
  const meta = reviewsPayload?.meta;

  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name: BRAND,
    url: SITE_URL,
    telephone: "+17756839026",
    image: `${SITE_URL}/images/services/joint-injections.jpg`,
    logo: `${SITE_URL}/images/logo.png`,
    priceRange: "$$",
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
      latitude: 39.4486,
      longitude: -119.7392,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed:
      "Northern Nevada and Eastern California, including Reno, Sparks, Carson City, and surrounding communities",
    sameAs: [
      "https://www.facebook.com/renoregenerative",
      "https://www.youtube.com/channel/UCAoMwIvwTV-jKzS7MZttmVg",
    ],
    ...(meta
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: String(meta.rating),
            reviewCount: String(meta.reviewCount),
            bestRating: "5",
          },
        }
      : {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            reviewCount: "202",
            bestRating: "5",
          },
        }),
    ...(visible.length > 0
      ? {
          review: visible.map((review) => ({
            "@type": "Review",
            author: { "@type": "Person", name: review.name },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            reviewBody: review.quote,
          })),
        }
      : {}),
  };
}

/** MedicalProcedure schema for a service detail page. */
export function buildServiceSchema(slug: ServiceSlug) {
  const service: ServiceData = SERVICES_BY_SLUG[slug];
  const pageUrl = `${SITE_URL}${service.href}`;

  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${pageUrl}#procedure`,
    name: service.label,
    alternateName: service.name,
    description: service.description,
    url: pageUrl,
    image: `${SITE_URL}${service.image}`,
    procedureType: "https://schema.org/TherapeuticProcedure",
    bodyLocation: deriveBodyLocation(slug),
    howPerformed: service.sections
      .find((s) => /how\b/i.test(s.heading))
      ?.paragraphs.join(" "),
    indication: service.whoIsThisFor.map((item) => ({
      "@type": "MedicalIndication",
      name: item.title,
      description: item.body,
    })),
    provider: { "@id": BUSINESS_ID },
    availableService: {
      "@type": "MedicalTherapy",
      name: service.label,
      provider: { "@id": BUSINESS_ID },
    },
  };
}

/** Service offering wrapper — pairs with MedicalProcedure for richer coverage. */
export function buildServiceOfferingSchema(slug: ServiceSlug) {
  const service: ServiceData = SERVICES_BY_SLUG[slug];
  const pageUrl = `${SITE_URL}${service.href}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    serviceType: service.label,
    name: service.title,
    description: service.description,
    url: pageUrl,
    image: `${SITE_URL}${service.image}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Reno, NV and surrounding Northern Nevada",
    },
  };
}

/** BreadcrumbList for a typical service page (Home → Services → {service}). */
export function buildServiceBreadcrumbSchema(slug: ServiceSlug) {
  const service: ServiceData = SERVICES_BY_SLUG[slug];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${SITE_URL}${service.href}`,
      },
    ],
  };
}

function deriveBodyLocation(slug: ServiceSlug): string | undefined {
  switch (slug) {
    case "joint-injections":
      return "Knee, hip, shoulder, wrist";
    case "trigger-point-injections":
      return "Neck, shoulders, upper and lower back";
    case "chiropractic-care":
      return "Spine and musculoskeletal system";
    case "spinal-decompression":
      return "Lumbar and cervical spine";
    case "knee-decompression":
      return "Knee";
    case "physical-therapy":
      return "Musculoskeletal system";
    default:
      return undefined;
  }
}
