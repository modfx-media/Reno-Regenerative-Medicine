import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";
import ConditionShell from "../../components/ConditionShell";

export const metadata: Metadata = {
  title: "Explore Holistic Pain Management in Sparks, NV",
  description:
    "Living with daily aches drains your energy. Our pain care clinic in Sparks, NV focuses on natural healing to help you find true comfort. Call us today!",
  alternates: { canonical: "https://www.renoregen.com/conditions/pain-relief/" },
};

const PROSE =
  "rounded-3xl bg-white p-8 md:p-12 shadow-[0_30px_60px_-40px_rgba(10,18,13,0.25)] " +
  "[&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:font-serif-display [&_h2]:text-[28px] [&_h2]:leading-tight [&_h2]:text-[#13231a] " +
  "[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-serif-display [&_h3]:text-[20px] [&_h3]:text-[#13231a] " +
  "[&_p]:my-5 [&_p]:text-[16px] [&_p]:leading-[1.8] [&_p]:text-[#1a2332]/85 " +
  "[&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:marker:text-[#3d7a52] " +
  "[&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:marker:text-[#3d7a52] " +
  "[&_li]:my-2 [&_li]:text-[16px] [&_li]:leading-[1.7] [&_li]:text-[#1a2332]/85 " +
  "[&_a]:font-medium [&_a]:text-[#1f3a28] [&_a]:underline [&_a]:decoration-[#c6b180] [&_a:hover]:text-[#0a120d] " +
  "[&>*:first-child]:mt-0";

const RELATED: { name: string; href: string }[] = [
  { name: "Back Pain", href: "/conditions/back-pain/" },
  { name: "Knee Pain", href: "/conditions/knee-pain/" },
  { name: "Joint Pain", href: "/conditions/joint-pain/" },
  { name: "Neuropathy", href: "/conditions/neuropathy/" },
  { name: "Shoulder Pain", href: "/conditions/shoulder-pain/" },
  { name: "Whiplash", href: "/conditions/whiplash/" },
  { name: "Hormonal Imbalance", href: "/conditions/hormonal-imbalance/" },
  { name: "Sexual Dysfunction", href: "/conditions/sexual-dysfunction/" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Condition"
          title="Holistic Pain Relief in Reno, NV"
          image="/images/services/joint-injections.jpg"
          imageAlt="Holistic pain relief care at Reno Regenerative Medicine"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Conditions", href: "/conditions/" },
            { label: "Pain Relief" },
          ]}
          size="md"
        />
        <ConditionShell>
          <article className={PROSE}>
            <p>Pain relief is one of the top reasons that people seek medical attention. Chronic pain is defined as pain lasting longer than 12 weeks and though conventional treatment options such as medication and surgery can treat pain, they may come with unwanted side effects and lengthy recovery periods. Fortunately, both chronic and acute pain can be effectively treated with naturopathic medicine.</p>
            <p>At Reno Regenerative Medicine, we believe in treating pain by identifying and effectively treating your underlying condition, not simply suppressing the symptoms. Our treatment focuses not only on addressing your physical pain, but your total health including your physical, psychological, and emotional wellbeing.</p>
            <p>Naturopathic treatments have been used for centuries in pain management and have proven effective in restoring balance to your central nervous system and reducing inflammation throughout the body. Common naturopathic treatments include acupuncture, hydrotherapy, massage therapy, meditation training, lifestyle counseling, and chiropractic care.</p>
            <p>We will work with you to create a customized treatment plan that takes into account your individual needs. Our care is comprehensive and patient-centered. We are always happy to work alongside your other healthcare team professionals to ensure you are receiving the best treatment possible.</p>
            <p>For more information on pain management and our services or to schedule a consultation, contact our office today at <a href="tel:+17756839026">(775) 683-9026</a>.</p>

            <p className="!mt-10">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full bg-[#c6b180] px-7 py-3.5 text-[12px] font-semibold !text-[#0a120d] uppercase tracking-[0.22em] !no-underline transition-colors hover:bg-[#f3d99a]"
              >
                request an appointment
              </Link>
            </p>
          </article>
        </ConditionShell>

        {/* Conditions We Treat for Pain Relief */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1280px] px-6 xl:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d7a52]">
                <span aria-hidden className="h-px w-6 bg-[#3d7a52]/70" />
                Pain Relief Care
              </span>
              <h2 className="mt-4 font-serif-display text-[32px] leading-[1.15] text-[#13231a] md:text-[40px]">
                Conditions We Treat for Pain Relief
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {RELATED.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="group flex items-center justify-between rounded-2xl border border-[#e8e4d9] bg-[#f6f3ea] px-6 py-5 transition-all hover:-translate-y-0.5 hover:border-[#c6b180] hover:bg-white"
                >
                  <span className="font-serif-display text-[18px] text-[#13231a]">{c.name}</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" className="text-[#3d7a52] transition-transform group-hover:translate-x-0.5" aria-hidden>
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
