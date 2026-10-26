import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { generateMetadata as buildMeta } from "../lib/seo";
import AboutBody from "./AboutBody";
import { withCmsMetadata } from "@/lib/cms/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return withCmsMetadata('/about/', buildMeta({
  slug: "/about/",
  title: "About | Pain Management Experts in Reno, NV",
  description:
    "Chronic discomfort can feel isolating. Our dedicated staff is here to listen, support you, and help manage your pain without relying on surgery. Reach out!",
}));
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About"
          title="About Reno Regenerative Medicine"
          image="/images/services/chiropractic-care.jpg"
          imageAlt="Reno Regenerative Medicine team providing chiropractic care"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About" },
          ]}
          size="md"
        />
        <AboutBody />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
