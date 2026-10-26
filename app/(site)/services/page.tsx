import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { generateMetadata as buildMeta } from "../lib/seo";
import ServicesGridSection from "./ServicesGridSection";
import { withCmsMetadata } from "@/lib/cms/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return withCmsMetadata('/services/', buildMeta({
  slug: "/services/",
  title: "Discover Regenerative and Integrative Medicine in Reno, NV",
  description:
    "Explore regenerative & integrative care in Reno, NV. We focus on finding the root cause of your pain to help you feel better naturally. Call us today!",
}));
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Services"
          title="Our Services"
          image="/images/services/spinal-decompression.jpg"
          imageAlt="Reno Regenerative Medicine services"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services" },
          ]}
          size="md"
        />
        <ServicesGridSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
