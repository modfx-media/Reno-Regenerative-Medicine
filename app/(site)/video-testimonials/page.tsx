import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import VideoTestimonialsBody from "./VideoTestimonialsBody";
import { withCmsMetadata } from "@/lib/cms/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return withCmsMetadata('/video-testimonials/', {
  title: "Watch Inspiring Video Testimonials From Our Patients",
  description:
    "Seeing others heal can inspire your own recovery. Watch video testimonials from real people who found relief at Reno Regenerative. Contact us today!",
  alternates: { canonical: "https://www.renoregen.com/video-testimonials/" },
  openGraph: {
    title: "Watch Inspiring Video Testimonials From Our Patients",
    description:
      "Seeing others heal can inspire your own recovery. Watch video testimonials from real people who found relief at Reno Regenerative. Contact us today!",
    url: "https://www.renoregen.com/video-testimonials/",
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
          title="Video Testimonials"
          image="/images/services/chiropractic-care.jpg"
          imageAlt="Patient video testimonials for Reno Regenerative Medicine"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Patient Reviews", href: "/reviews/" },
            { label: "Video Testimonials" },
          ]}
          size="md"
        />
        <VideoTestimonialsBody />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
