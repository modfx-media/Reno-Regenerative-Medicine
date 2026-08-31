import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { getMeta } from "../lib/pageMeta";
import AppointmentsBody from "./AppointmentsBody";

const meta = getMeta("/appointments/")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://www.renoregen.com/appointments/` },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "https://www.renoregen.com/appointments/",
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
          title="Appointments"
          image="/images/services/chiropractic-care.jpg"
          imageAlt="Request an appointment at Reno Regenerative Medicine"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Appointments" },
          ]}
          size="md"
          showCta={false}
        />
        <AppointmentsBody />
        <CTASection showPrimary={false} />
      </main>
      <Footer />
    </>
  );
}
