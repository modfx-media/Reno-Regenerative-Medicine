import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import ContactBody from "./ContactBody";

export const metadata: Metadata = {
  title: "Contact Us | Pain Management Clinic in Reno, NV",
  description:
    "Find relief at Reno Regenerative. Explore our Contact Us page to learn how our Reno pain management clinic can help you. Call now!",
  alternates: { canonical: "https://www.renoregen.com/contact/" },
  openGraph: {
    title: "Contact Us | Pain Management Clinic in Reno, NV",
    description:
      "Find relief at Reno Regenerative. Explore our Contact Us page to learn how our Reno pain management clinic can help you. Call now!",
    url: "https://www.renoregen.com/contact/",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Reno Regenerative Medicine"
          title="Contact"
          image="/images/services/chiropractic-care.jpg"
          imageAlt="Reno Regenerative Medicine office in Reno, NV"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
          size="md"
          showCta={false}
        />
        <ContactBody />
        <CTASection showPrimary={false} />
      </main>
      <Footer />
    </>
  );
}
