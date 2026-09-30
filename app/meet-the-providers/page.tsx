import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { generateMetadata as buildMeta } from "../lib/seo";
import ProvidersBody from "./ProvidersBody";

export const metadata: Metadata = buildMeta({
  slug: "/meet-the-providers/",
  title: "Meet the Providers | Reno Regenerative Medicine",
  description:
    "Get to know the experienced providers at Reno Regenerative Medicine, dedicated to personalized, evidence-based care for lasting pain relief. Learn more!",
});

export default function MeetTheProvidersPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About"
          title="Meet the Providers"
          image="/images/services/chiropractic-care.jpg"
          imageAlt="Providers at Reno Regenerative Medicine"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Meet the Providers" },
          ]}
          size="md"
        />
        <ProvidersBody />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
