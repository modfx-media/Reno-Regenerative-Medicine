import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import ChiropracticCareBody from "./ChiropracticCareBody";
import { generateMetadata as buildMeta } from "../lib/seo";
import { SERVICES_BY_SLUG } from "../lib/services";
import JsonLd from "../components/JsonLd";
import {
  buildServiceSchema,
  buildServiceOfferingSchema,
  buildServiceBreadcrumbSchema,
} from "../lib/jsonLd";
import { withCmsMetadata } from "@/lib/cms/metadata";

const SLUG = "chiropractic-care" as const;
const service = SERVICES_BY_SLUG[SLUG];

export async function generateMetadata(): Promise<Metadata> {
  return withCmsMetadata('/chiropractic-care/', buildMeta({
  slug: `/${SLUG}/`,
  title: "Restore Proper Alignment With a Chiropractor in Reno, NV",
  description:
    "Ease your joint and back discomfort with skilled chiropractic care in Reno, NV. We listen to you and designs a custom plan based on your needs. Visit us!",
  image: service.image,
}));
}

export default function Page() {
  return (
    <>
      <JsonLd
        schema={[
          buildServiceSchema(SLUG),
          buildServiceOfferingSchema(SLUG),
          buildServiceBreadcrumbSchema(SLUG),
        ]}
      />
      <Header />
      <main>
        <PageHero
          eyebrow="Service"
          title="Chiropractic Care in Reno, NV"
          image={service.image}
          imageAlt={`${service.label} at Reno Regenerative Medicine`}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services/" },
            { label: service.name },
          ]}
          size="md"
        />
        <ChiropracticCareBody />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
