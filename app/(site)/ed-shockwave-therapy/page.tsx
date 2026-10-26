import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import EdShockwaveTherapyBody from "./EdShockwaveTherapyBody";
import { generateMetadata as buildMeta } from "../lib/seo";
import { SERVICES_BY_SLUG } from "../lib/services";
import JsonLd from "../components/JsonLd";
import {
  buildServiceSchema,
  buildServiceOfferingSchema,
  buildServiceBreadcrumbSchema,
} from "../lib/jsonLd";
import { withCmsMetadata } from "@/lib/cms/metadata";

const SLUG = "ed-shockwave-therapy" as const;
const service = SERVICES_BY_SLUG[SLUG];

export async function generateMetadata(): Promise<Metadata> {
  return withCmsMetadata('/ed-shockwave-therapy/', buildMeta({
  slug: `/${SLUG}/`,
  title: "Erectile Dysfunction Shockwave Treatment in Reno, NV",
  description:
    "Non-invasive ED shockwave therapy at Reno Regenerative Medicine uses acoustic waves to improve blood flow and restore sexual function. Call today for a consultation!",
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
          title="ED Shockwave Therapy in Reno, NV"
          image={service.image}
          imageAlt={`${service.label} at Reno Regenerative Medicine`}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services/" },
            { label: service.name },
          ]}
          size="md"
        />
        <EdShockwaveTherapyBody />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
