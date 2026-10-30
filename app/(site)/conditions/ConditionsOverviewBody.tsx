"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const CONDITIONS: { name: string; href: string; blurb: string }[] = [
  { name: "Back Pain", href: "/conditions/back-pain/", blurb: "Non-surgical relief for chronic and acute back pain." },
  { name: "Hormonal Imbalance", href: "/conditions/hormonal-imbalance/", blurb: "Bioidentical hormone therapy for men and women." },
  { name: "Joint Pain", href: "/conditions/joint-pain/", blurb: "Targeted therapies for shoulders, hips, knees, and more." },
  { name: "Knee Pain", href: "/conditions/knee-pain/", blurb: "Care for arthritis, ligament damage, and joint stiffness." },
  { name: "Neuropathy", href: "/conditions/neuropathy/", blurb: "Help for tingling, burning, and nerve-related weakness." },
  { name: "Pain Relief", href: "/conditions/pain-relief/", blurb: "A holistic, naturopathic approach to chronic and acute pain." },
  { name: "Sexual Dysfunction", href: "/conditions/sexual-dysfunction/", blurb: "Restorative care for men and women." },
  { name: "Shoulder Pain", href: "/conditions/shoulder-pain/", blurb: "Recover mobility from rotator cuff, impingement, and more." },
  { name: "Whiplash", href: "/conditions/whiplash/", blurb: "Recovery care after auto accidents and neck trauma." },
];

const STEPS: { step: string; title: string; copy: string }[] = [
  {
    step: "01",
    title: "Diagnose",
    copy: "We start with a thorough exam, your history, and any imaging or labs needed to find the root cause — not just the symptoms.",
  },
  {
    step: "02",
    title: "Plan",
    copy: "You receive a personalized care plan that combines the right regenerative, manual, and integrative therapies for your condition.",
  },
  {
    step: "03",
    title: "Heal",
    copy: "We guide you through treatment with regular check-ins, adjusting the plan as your body recovers and rebuilds.",
  },
];

export default function ConditionsOverviewBody() {
  return (
    <>
      {/* Conditions card grid */}
      <section className="bg-[#f6f3ea] py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1280px] px-6 xl:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d7a52]">
              <span aria-hidden className="h-px w-6 bg-[#3d7a52]/70" />
              What We Treat
            </span>
            <h2 className="mt-4 font-serif-display text-[34px] leading-[1.1] text-[#13231a] md:text-[42px]">
              Conditions We Treat
            </h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-[#1a2332]/75">
              Choose a condition below to learn how our team approaches it with non-surgical, regenerative, and integrative care.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CONDITIONS.map((c, idx) => (
              <motion.div
                key={c.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease, delay: idx * 0.04 }}
              >
                <Link
                  href={c.href}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-[#e8e4d9] bg-white p-7 shadow-[0_20px_40px_-30px_rgba(10,18,13,0.25)] transition-all hover:-translate-y-1 hover:border-[#c6b180] hover:shadow-[0_30px_60px_-30px_rgba(10,18,13,0.35)]"
                >
                  <div>
                    <h3 className="font-serif-display text-[22px] leading-tight text-[#13231a] transition-colors group-hover:text-[#1f3a28]">
                      {c.name}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-[1.6] text-[#1a2332]/70">
                      {c.blurb}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#3d7a52] transition-colors group-hover:text-[#1f3a28]">
                    Learn More
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease }}
            className="mt-14 flex justify-center"
          >
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full bg-[#c6b180] px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0a120d] transition-colors hover:bg-[#f3d99a]"
            >
              Request an Appointment
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Approach to Treatment */}
      <section className="bg-gradient-to-br from-[#0a120d] via-[#13231a] to-[#1f3a28] py-20 text-white md:py-28">
        <div className="mx-auto w-full max-w-[1280px] px-6 xl:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3d99a]">
              <span aria-hidden className="h-px w-6 bg-[#f3d99a]/70" />
              Our Process
            </span>
            <h2 className="mt-4 font-serif-display text-[34px] leading-[1.1] md:text-[42px]">
              Our Approach to Treatment
            </h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-white/75">
              Every patient journey at Reno Regenerative follows the same simple framework — personalized to your body, your goals, and your timeline.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease, delay: i * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#f3d99a] to-[#c6b180] font-serif-display text-[20px] text-[#0a120d]">
                  {s.step}
                </div>
                <h3 className="mt-6 font-serif-display text-[24px] leading-tight">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-white/75">{s.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
