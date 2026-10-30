import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { generateMetadata as buildMeta } from "../lib/seo";
import ConditionsOverviewBody from "./ConditionsOverviewBody";
import { withCmsMetadata } from "@/lib/cms/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return withCmsMetadata('/conditions/', buildMeta({
  slug: "/conditions/",
  title: "Conditions We Treat | Book Now",
  description:
    "Are you struggling with ongoing pain? Explore the conditions we treat with our natural, holistic methods. Let us help you heal. Book a consultation today.",
}));
}

export default function ConditionsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Conditions"
          title="Conditions We Treat"
          image="/images/services/joint-injections.jpg"
          imageAlt="Conditions treated at Reno Regenerative Medicine"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Conditions" },
          ]}
          size="md"
        />
        <ConditionsOverviewBody />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
