import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { getMeta } from "../lib/pageMeta";
import { withCmsMetadata } from "@/lib/cms/metadata";

const meta = getMeta("/accessibility/")!;

export async function generateMetadata(): Promise<Metadata> {
  return withCmsMetadata('/accessibility/', {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "https://www.renoregen.com/accessibility/" },
});
}

const SSA_TIPS = [
  {
    label: "Use your computer to read web pages out loud",
    href: "https://www.ssa.gov/accessibility/browseAloud.html",
    icon: "speaker",
  },
  {
    label: "Use the keyboard to navigate screens",
    href: "https://www.ssa.gov/accessibility/keyboard_nav.html",
    icon: "keyboard",
  },
  {
    label: "Increase text size",
    href: "https://www.ssa.gov/accessibility/textsize.html",
    icon: "text",
  },
  {
    label: "Magnify your screen",
    href: "https://www.ssa.gov/accessibility/magnifyscreen.html",
    icon: "zoom",
  },
  {
    label: "Change background and text colors",
    href: "https://www.ssa.gov/accessibility/changecolors.html",
    icon: "palette",
  },
  {
    label: "Make your mouse pointer more visible (Windows only)",
    href: "https://www.ssa.gov/accessibility/mousepointer.html",
    icon: "cursor",
  },
] as const;

function TipIcon({ name }: { name: (typeof SSA_TIPS)[number]["icon"] }) {
  const stroke = "currentColor";
  switch (name) {
    case "speaker":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5 6 9H3v6h3l5 4V5Z" />
          <path d="M16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12" />
        </svg>
      );
    case "keyboard":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M7 10h.01M11 10h.01M15 10h.01M7 14h10" />
        </svg>
      );
    case "text":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7V5h12v2M10 5v14M7 19h6M16 13h6M19 10v6" />
        </svg>
      );
    case "zoom":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="M11 8v6M8 11h6M20 20l-3.5-3.5" />
        </svg>
      );
    case "palette":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2a2 2 0 0 1 2-2h2a3 3 0 0 0 3-3 9 9 0 0 0-9-9Z" />
          <circle cx="7.5" cy="11" r="1" />
          <circle cx="10" cy="7" r="1" />
          <circle cx="15" cy="7.5" r="1" />
          <circle cx="17.5" cy="11.5" r="1" />
        </svg>
      );
    case "cursor":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="m4 3 6 17 2-7 7-2L4 3Z" />
        </svg>
      );
  }
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Reno Regenerative Medicine"
          title="Accessibility"
          subtitle="Helping every visitor browse comfortably."
          image="/images/services/chiropractic-care.jpg"
          imageAlt="Reno Regenerative Medicine Accessibility"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Accessibility" },
          ]}
          size="md"
        />

        <section className="bg-cream">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="rounded-2xl border border-[#e8e4d9] bg-white p-8 sm:p-10">
              <span className="text-xs uppercase tracking-[0.3em] text-[#3d7a52]">
                Our commitment
              </span>
              <h2 className="mt-3 font-serif-display text-3xl text-ink sm:text-4xl">
                We are continuously working to improve the accessibility of
                content on our website.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-ink/75">
                Below, you’ll find a few recommendations to help make your
                browsing experience more accessible. If you have trouble seeing
                web pages, the U.S. Social Security Administration offers these
                tips for optimizing your computer and browser to improve your
                online experience.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="font-serif-display text-2xl text-ink">
                Helpful resources from SSA.gov
              </h3>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {SSA_TIPS.map((tip) => (
                  <li key={tip.href}>
                    <a
                      href={tip.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 rounded-2xl border border-[#e8e4d9] bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[#c6b180] hover:shadow-[0_18px_40px_-24px_rgba(10,18,13,0.25)]"
                    >
                      <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#f3d99a]/30 text-[#3d7a52]">
                        <TipIcon name={tip.icon} />
                      </span>
                      <span className="flex-1 pt-1.5">
                        <span className="block font-medium text-ink group-hover:text-[#3d7a52]">
                          {tip.label}
                        </span>
                        <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-ink/50">
                          ssa.gov ↗
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-[#e8e4d9] bg-white p-8">
              <h3 className="font-serif-display text-2xl text-ink">
                Mouse and keyboard alternatives
              </h3>
              <p className="mt-3 text-[16px] leading-relaxed text-ink/75">
                If you are looking for mouse and keyboard alternatives, speech
                recognition software such as{" "}
                <em>Dragon Naturally Speaking</em> may help you navigate web
                pages and online services. This software allows the user to
                move focus around a web page or application screen through
                voice controls.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-[#e8e4d9] bg-[#13231a] p-8 text-cream">
              <span className="text-xs uppercase tracking-[0.3em] text-[#f3d99a]">
                Need a hand?
              </span>
              <h3 className="mt-2 font-serif-display text-2xl">
                If the recommendations above do not meet your needs, we invite
                you to contact us for assistance.
              </h3>
              <p className="mt-4 text-cream/80">
                Call us at{" "}
                <a
                  href="tel:+17756839026"
                  className="font-medium text-[#f3d99a] underline-offset-4 hover:underline"
                >
                  (775) 683-9026
                </a>{" "}
                or text{" "}
                <a
                  href="sms:+17755223807"
                  className="font-medium text-[#f3d99a] underline-offset-4 hover:underline"
                >
                  (775) 522-3807
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
