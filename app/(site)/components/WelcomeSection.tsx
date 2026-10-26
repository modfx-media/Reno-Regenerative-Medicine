"use client";

import FadeIn from "./FadeIn";

export default function WelcomeSection() {
  return (
    <section className="bg-cream py-28" aria-labelledby="welcome-heading">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-olive-deep">
            Reno, NV  ·  Northern Nevada
          </span>
          <h2 id="welcome-heading" className="mt-5 font-serif-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-ink">
            An <em className="italic text-olive-deep">Integrative</em> Care Team
            <br /> You Can Trust
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <FadeIn delay={0.1} className="lg:col-span-7 space-y-6 text-ink/80 leading-relaxed text-[17px]">
            <p>
              Reno Regenerative Medicine | Knee, Back &amp; Joint Pain Clinic in
              Reno, Nevada, offers a welcoming and relaxed environment for
              innovative and integrative medicine. The team offers innovative
              medicine and a variety of therapies, including chiropractic,
              therapeutic exercise and cold laser therapy, to help patients
              suffering from sciatica, symptoms associated with neuropathy,
              arthritis, whiplash, and musculoskeletal pain.
            </p>
            <p>
              The Reno Regenerative Medicine team uses the best products
              available. Our services are complemented by advanced technologies
              for efficient and effective treatments that can relieve pain and
              help speed up the healing process. Reno Regenerative Medicine also
              has state of the art X-ray equipment on-site for efficient
              diagnosis, so patients are fully informed about their condition
              before beginning treatment.
            </p>
            <p>
              The team appreciate that every patient has individualized needs and
              concerns and adapts all of their treatment plans to address the
              uniqueness of each patient. Their treatment approach focuses on
              relieving pain and improving physical function for better overall
              health and well-being.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-ink/10">
            <ul className="grid grid-cols-2 gap-y-10 gap-x-6 text-ink">
              <li>
                <div className="font-serif-display text-4xl text-olive-deep">4.8★</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-ink/60">201 Google Reviews</div>
              </li>
              <li>
                <div className="font-serif-display text-4xl text-olive-deep">9+</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-ink/60">Core Services</div>
              </li>
              <li>
                <div className="font-serif-display text-4xl text-olive-deep">N. NV</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-ink/60">&amp; N. California</div>
              </li>
              <li>
                <div className="font-serif-display text-4xl text-olive-deep">∞</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-ink/60">Patients Served</div>
              </li>
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
