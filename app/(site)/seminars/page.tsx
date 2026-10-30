import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import SeminarsBody from "./SeminarsBody";
import { withCmsMetadata } from "@/lib/cms/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return withCmsMetadata('/seminars/', {
  title: "Join Our Health Seminars",
  description:
    "Navigating health choices is easier when you have the right facts. Attend our upcoming seminars to learn about your healing options. Reserve your seat!",
  alternates: { canonical: "https://www.renoregen.com/seminars/" },
  openGraph: {
    title: "Join Our Health Seminars",
    description:
      "Navigating health choices is easier when you have the right facts. Attend our upcoming seminars to learn about your healing options. Reserve your seat!",
    url: "https://www.renoregen.com/seminars/",
    type: "website",
  },
});
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Reno Regenerative Medicine"
          title="Seminars"
          image="/images/services/spinal-decompression.jpg"
          imageAlt="Reno Regenerative Medicine community health seminars"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Seminars" },
          ]}
          size="md"
        />
        <SeminarsBody />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
