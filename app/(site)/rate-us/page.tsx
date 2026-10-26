import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { generateMetadata as buildMeta } from "../lib/seo";
import { withCmsMetadata } from "@/lib/cms/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return withCmsMetadata('/rate-us/', buildMeta({
  slug: "/rate-us/",
  title: "Rate Us",
  description:
    "We'd love your feedback! Share your experience with Reno Regenerative Medicine on Google or Facebook to help others discover natural pain relief.",
}));
}

const Star = () => (
  <svg
    viewBox="0 0 24 24"
    width="40"
    height="40"
    fill="#c6b180"
    aria-hidden
    className="drop-shadow-sm"
  >
    <path d="M12 2.5l2.92 6.49 7.08.62-5.36 4.7 1.6 6.94L12 17.77 5.76 21.25l1.6-6.94L2 9.61l7.08-.62L12 2.5z" />
  </svg>
);

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-cream pt-40 pb-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-olive-deep">
            Reno Regenerative Medicine
          </span>
          <h1 className="mt-4 font-serif-display text-5xl sm:text-6xl text-ink">
            We&rsquo;d Love Your Feedback!
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Your story helps other patients in Reno discover natural relief.
            Take a moment to leave us a review on Google or Facebook &mdash;
            we appreciate every single one.
          </p>

          <div className="mt-10 flex items-center justify-center gap-2" aria-label="Five star rating">
            <Star /><Star /><Star /><Star /><Star />
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://g.page/r/CcG6IzhcRkQzEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c6b180] px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0a120d] transition-colors hover:bg-[#f3d99a]"
            >
              Review Us on Google
            </a>
            <a
              href="https://www.facebook.com/renoregenerative/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-forest-deep px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-forest-deep transition-colors hover:bg-forest-deep hover:text-white"
            >
              Review Us on Facebook
            </a>
          </div>

          <p className="mt-12 text-sm text-muted">
            Questions about an upcoming visit?{" "}
            <a href="tel:+17756839026" className="text-olive-deep underline underline-offset-4 hover:text-forest-deep">
              Call (775) 683-9026
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
