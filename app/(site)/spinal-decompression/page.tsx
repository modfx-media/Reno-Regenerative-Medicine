import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import SpinalDecompressionBody from "./SpinalDecompressionBody";
import { generateMetadata as buildMeta } from "../lib/seo";
import { SERVICES_BY_SLUG } from "../lib/services";
import JsonLd from "../components/JsonLd";
import {
  buildServiceSchema,
  buildServiceOfferingSchema,
  buildServiceBreadcrumbSchema,
} from "../lib/jsonLd";
import { withCmsMetadata } from "@/lib/cms/metadata";

const SLUG = "spinal-decompression" as const;
const service = SERVICES_BY_SLUG[SLUG];

export async function generateMetadata(): Promise<Metadata> {
  return withCmsMetadata('/spinal-decompression/', buildMeta({
  slug: `/${SLUG}/`,
  title: "Relief for Back Pain: Spinal Decompression in Reno, NV",
  description:
    "Try non-surgical spinal decompression therapy in Reno, NV. Our approach relieves pressure on your spine so you can feel better. Call us to learn more.",
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
          title="Spinal Decompression in Reno, NV"
          image={service.image}
          imageAlt={`${service.label} at Reno Regenerative Medicine`}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services/" },
            { label: service.name },
          ]}
          size="md"
        />
        <SpinalDecompressionBody />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
