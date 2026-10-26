import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";
import ServicePageBody from "../../components/ServicePageBody";
import KneeDecompressionExtras from "./KneeDecompressionExtras";
import { generateMetadata as buildMeta } from "../../lib/seo";
import { SERVICES_BY_SLUG, getRelatedServices } from "../../lib/services";
import JsonLd from "../../components/JsonLd";
import {
  buildServiceSchema,
  buildServiceOfferingSchema,
  SITE_URL,
} from "../../lib/jsonLd";
import { withCmsMetadata } from "@/lib/cms/metadata";

const SLUG = "knee-decompression" as const;
const service = SERVICES_BY_SLUG[SLUG];
const related = getRelatedServices(SLUG, 3);

export async function generateMetadata(): Promise<Metadata> {
  return withCmsMetadata('/services/knee-decompression/', buildMeta({
  slug: `/services/${SLUG}/`,
  title: "Knee Decompression Therapy in Reno, NV",
  description:
    "Non-surgical knee decompression therapy at Reno Regenerative Medicine reduces joint pressure, relieves pain, and restores mobility without cortisone or surgery. Call (775) 683-9026.",
  image: service.image,
}));
}

const breadcrumbSchema = {
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
      item: `${SITE_URL}/services/${SLUG}/`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd
        schema={[
          buildServiceSchema(SLUG),
          buildServiceOfferingSchema(SLUG),
          breadcrumbSchema,
        ]}
      />
      <Header />
      <main>
        <PageHero
          eyebrow="Service"
          title={service.label}
          subtitle={service.short}
          image={service.image}
          imageAlt={`${service.label} at Reno Regenerative Medicine`}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services/" },
            { label: service.name },
          ]}
          size="md"
        />
        <ServicePageBody service={service} related={related} />
        <KneeDecompressionExtras />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
