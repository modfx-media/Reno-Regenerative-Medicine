import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import NutritionalIVsBody from "./NutritionalIVsBody";
import { generateMetadata as buildMeta } from "../lib/seo";
import { SERVICES_BY_SLUG } from "../lib/services";
import JsonLd from "../components/JsonLd";
import {
  buildServiceSchema,
  buildServiceOfferingSchema,
  buildServiceBreadcrumbSchema,
} from "../lib/jsonLd";
import { withCmsMetadata } from "@/lib/cms/metadata";

const SLUG = "nutritional-ivs" as const;
const service = SERVICES_BY_SLUG[SLUG];

export async function generateMetadata(): Promise<Metadata> {
  return withCmsMetadata('/nutritional-ivs/', buildMeta({
  slug: `/${SLUG}/`,
  title: "Rehydrate and Rejuvenate With Restorative Nutritional IVs",
  description:
    "Boost your energy and wellness with a customized nutritional IV drip. Reno Regenerative makes the process simple and comfortable for you. Book now!",
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
          title="Nutritional IVs in Reno, NV"
          image={service.image}
          imageAlt={`${service.label} at Reno Regenerative Medicine`}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services/" },
            { label: service.name },
          ]}
          size="md"
        />
        <NutritionalIVsBody />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
