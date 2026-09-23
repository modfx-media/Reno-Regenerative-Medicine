import type { Metadata } from "next";
import Header from "./components/Header";
import HeroV2 from "./components/HeroV2";
import TrustBar from "./components/TrustBar";
import ApproachSection from "./components/ApproachSection";
import ServicesBento from "./components/ServicesBento";
import BodyMapSection from "./components/WhereIsYourPain";
import ProcessSteps from "./components/ProcessSteps";
import DoctorSpotlight from "./components/DoctorSpotlight";
import Testimonials from "./components/Testimonials";
import ContactCTASection from "./components/ContactCTASection";
import Footer from "./components/Footer";
import { GoogleReviews } from "./components/GoogleReviews";
import { getDisplayedGoogleReviews } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: {
    absolute: "Integrative Medicine Clinic in Reno, NV | Reno Regenerative Medicine",
  },
  description:
    "Looking for an integrative medicine center? Reno Regenerative Medicine helps with knee, back, and joint pain, helping your body heal naturally. Call today!",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Integrative Medicine Clinic in Reno, NV | Reno Regenerative Medicine",
    description:
      "Looking for an integrative medicine center? Reno Regenerative Medicine helps with knee, back, and joint pain, helping your body heal naturally. Call today!",
    url: "https://www.renoregen.com/",
    siteName: "Reno Regenerative Medicine",
    type: "website",
    locale: "en_US",
  },
};

export default async function Home() {
  const { meta } = await getDisplayedGoogleReviews();

  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroV2
          rating={meta.rating}
          reviewCount={meta.reviewCount}
          reviewsUrl={meta.reviewsUrl}
        />
        <TrustBar reviewCount={meta.reviewCount} reviewsUrl={meta.reviewsUrl} />
        <ApproachSection />
        <ServicesBento />
        <BodyMapSection />
        <ProcessSteps />
        <DoctorSpotlight />
        <GoogleReviews>
          {({ reviews, meta: reviewMeta }) => (
            <Testimonials
              items={reviews.map((review) => ({
                name: review.name,
                quote: review.quote,
                when: review.relativeTime ?? "Posted on Google",
              }))}
              rating={reviewMeta.rating}
              reviewCount={reviewMeta.reviewCount}
              reviewsUrl={reviewMeta.reviewsUrl}
            />
          )}
        </GoogleReviews>
        <ContactCTASection
          rating={meta.rating}
          reviewCount={meta.reviewCount}
          reviewsUrl={meta.reviewsUrl}
        />
      </main>
      <Footer />
    </>
  );
}
