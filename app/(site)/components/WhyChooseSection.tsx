"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const POINTS: { title: string; desc: string }[] = [
  { title: "Root-Cause Focus", desc: "We look beyond symptoms to identify and treat the underlying source of your pain or imbalance." },
  { title: "Integrative Medicine", desc: "Chiropractic, therapeutic exercise, cold laser, IV nutrition and regenerative therapies — all under one roof." },
  { title: "Advanced Diagnostics", desc: "On-site X-ray imaging means a clear, informed picture of your condition before treatment begins." },
  { title: "Personalized Plans", desc: "Every patient is unique. Treatment plans are tailored to your body, history and goals." },
  { title: "Trusted in Northern Nevada", desc: "201 Google reviews, a 4.8★ average and patients across Northern NV and surrounding California communities." },
  { title: "Welcoming Environment", desc: "A relaxed, compassionate clinic where new patients are treated like family from day one." },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-cream py-24" aria-labelledby="why-choose-heading">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-olive-deep">— Why Reno Regenerative —</span>
          <h2 id="why-choose-heading" className="mt-4 font-serif-display text-4xl sm:text-5xl text-ink">
            The Reno Regenerative <em className="italic text-olive-deep">Difference</em>
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed">
            Coordinated, integrative care that treats you as a whole person — not
            just a set of symptoms.
          </p>
        </FadeIn>

        <ol className="mt-16 grid gap-px bg-sand md:grid-cols-2 lg:grid-cols-3 border border-sand">
          {POINTS.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.08 }}
              className="bg-cream p-8"
            >
              <div className="font-serif-display text-3xl text-olive">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-4 font-serif-display text-2xl text-ink">{p.title}</h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">{p.desc}</p>
            </motion.li>
          ))}
        </ol>

        <FadeIn delay={0.15} className="mt-14 flex flex-wrap items-center gap-6">
          <p className="font-serif-display italic text-xl text-ink/80">
            Ready to experience the difference?
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center rounded-full bg-olive px-7 py-3.5 text-sm font-medium text-white hover:bg-olive-deep transition-colors"
          >
            Request Appointment
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
