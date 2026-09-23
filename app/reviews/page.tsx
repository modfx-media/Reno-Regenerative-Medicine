import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import ReviewsBody from "./ReviewsBody";
import { getDisplayedGoogleReviews } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: "Patient Reviews and Stories",
  description:
    "Wondering if our treatments really work? Read honest reviews from our patients who have found natural relief from daily aches. Book your visit today!",
  alternates: { canonical: "https://www.renoregen.com/reviews/" },
  openGraph: {
    title: "Patient Reviews and Stories",
    description:
      "Wondering if our treatments really work? Read honest reviews from our patients who have found natural relief from daily aches. Book your visit today!",
    url: "https://www.renoregen.com/reviews/",
    type: "website",
  },
};

export default async function Page() {
  const { reviews, meta } = await getDisplayedGoogleReviews();

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Reno Regenerative Medicine"
          title="Reviews"
          image="/images/services/chiropractic-care.jpg"
          imageAlt="Patient reviews for Reno Regenerative Medicine"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Reviews" },
          ]}
          size="md"
        />
        <ReviewsBody reviews={reviews} meta={meta} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
