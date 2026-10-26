import type { Metadata } from "next";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import JsonLd from "../components/JsonLd";
import { generateMetadata as buildMeta } from "../lib/seo";

import AutoAccidentEugeneBody from "./AutoAccidentEugeneBody";
import { withCmsMetadata } from "@/lib/cms/metadata";

const SLUG = "auto-accident-injury-eugene-or" as const;

export async function generateMetadata(): Promise<Metadata> {
  return withCmsMetadata('/auto-accident-injury-eugene-or/', buildMeta({
  slug: `/${SLUG}/`,
  title: "Auto Accident Injury Clinic Eugene, OR",
  description:
    "Whiplash & car accident injury care for Eugene, OR patients — chiropractic, spinal decompression & joint injections at Reno Regenerative Medicine.",
  image: "/images/services/chiropractic-care.jpg",
  keywords: [
    "auto accident injury Eugene OR",
    "car accident chiropractor Eugene Oregon",
    "whiplash treatment Eugene OR",
    "accident injury clinic Eugene Oregon",
    "personal injury chiropractic Eugene OR",
    "auto injury pain relief Eugene Oregon",
    "car crash neck pain Eugene OR",
    "motor vehicle accident recovery Eugene OR",
  ],
}));
}

export default function Page() {
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Reno Regenerative Medicine",
    url: "https://www.renoregen.com",
    telephone: "+17756839026",
    address: {
      "@type": "PostalAddress",
      streetAddress: "730 Sandhill Road #120",
      addressLocality: "Reno",
      addressRegion: "NV",
      postalCode: "89521",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Reno", containedInPlace: "Nevada" },
      { "@type": "City", name: "Eugene", containedInPlace: "Oregon" },
    ],
    medicalSpecialty:
      "Chiropractic, Regenerative Medicine, Auto Injury Rehabilitation",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Auto Accident Injury Treatment",
    provider: {
      "@type": "MedicalBusiness",
      name: "Reno Regenerative Medicine",
    },
    serviceType: "Auto Injury Rehabilitation",
    areaServed: { "@type": "City", name: "Eugene", containedInPlace: "Oregon" },
    description:
      "Chiropractic care, spinal decompression, and joint injections for car accident and whiplash injury patients in Eugene, OR.",
  };

  return (
    <>
      <JsonLd schema={[medicalBusinessSchema, serviceSchema]} />
      <Header />
      <main>
        <PageHero
          eyebrow="Auto Accident Injury"
          title="Auto Accident Injury Clinic Serving Eugene, OR"
          subtitle="Whiplash, neck pain, and motor vehicle accident recovery for patients in the Eugene, OR area."
          image="/images/services/chiropractic-care.jpg"
          imageAlt="Auto accident injury care at Reno Regenerative Medicine"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Areas We Serve", href: "/areas-we-serve/" },
            { label: "Auto Accident Injury — Eugene, OR" },
          ]}
          size="md"
        />
        <AutoAccidentEugeneBody />
        <CTASection
          title="Injured in a Car Accident?"
          subtitle="Serving Eugene, OR accident injury patients — call (775) 683-9026 or book online"
        />
      </main>
      <Footer />
    </>
  );
}
