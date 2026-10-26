import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import RenoOfficeBody from "./RenoOfficeBody";
import { withCmsMetadata } from "@/lib/cms/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return withCmsMetadata('/reno-office/', {
  title: "Reno Office | Back and Knee Pain Doctor | Visit Us Now",
  description:
    "Stop letting joint aches dictate your daily routine. Our Reno doctor for back and knee pain provides natural therapies for lasting relief. Book an appointment!",
  alternates: { canonical: "https://www.renoregen.com/reno-office/" },
  openGraph: {
    title: "Reno Office | Back and Knee Pain Doctor | Visit Us Now",
    description:
      "Stop letting joint aches dictate your daily routine. Our Reno doctor for back and knee pain provides natural therapies for lasting relief. Book an appointment!",
    url: "https://www.renoregen.com/reno-office/",
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
          title="Reno Office"
          image="/images/services/spinal-decompression.jpg"
          imageAlt="Reno Regenerative Medicine office at 730 Sandhill Rd, Reno, NV"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Reno Office" },
          ]}
          size="md"
        />
        <RenoOfficeBody />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
