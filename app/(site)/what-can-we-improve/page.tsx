import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import WebsiteForm from "../components/WebsiteForm";
import { getMeta } from "../lib/pageMeta";
import { withCmsMetadata } from "@/lib/cms/metadata";

const meta = getMeta("/what-can-we-improve/")!;

export async function generateMetadata(): Promise<Metadata> {
  return withCmsMetadata('/what-can-we-improve/', {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "https://www.renoregen.com/what-can-we-improve/" },
});
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Reno Regenerative Medicine"
          title="What Can We Improve?"
          subtitle="We love to hear from our clients."
          image="/images/services/chiropractic-care.jpg"
          imageAlt="Reno Regenerative Medicine feedback"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "What Can We Improve" },
          ]}
          size="md"
        />

        <section className="bg-cream">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-[#3d7a52]">
                Your feedback matters
              </span>
              <h2 className="mt-3 font-serif-display text-3xl text-ink sm:text-4xl">
                Help us get better, every visit.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-ink/75">
                We love to hear from our clients. Please let us know if there
                are any areas that you think we could improve upon.
              </p>
            </div>

            <div className="mt-8 flex gap-4 rounded-2xl border border-[#c6b180]/60 bg-[#f3d99a]/15 p-5">
              <span className="mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#f3d99a]/50 text-[#7a5b1f]">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8v5M12 16h.01" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </span>
              <p className="text-sm leading-relaxed text-ink/80">
                Please use this form for general information purposes only.{" "}
                <strong>
                  Do not send personal health information through this form.
                </strong>{" "}
                Specific patient care must be addressed during an appointment.
              </p>
            </div>

            <div className="mt-10">
              <WebsiteForm />
            </div>

            <p className="mt-8 text-center text-sm text-ink/60">
              Prefer to call?{" "}
              <a
                href="tel:+17756839026"
                className="font-medium text-[#3d7a52] underline-offset-4 hover:underline"
              >
                (775) 683-9026
              </a>{" "}
              · or text{" "}
              <a
                href="sms:+17755223807"
                className="font-medium text-[#3d7a52] underline-offset-4 hover:underline"
              >
                (775) 522-3807
              </a>
            </p>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
