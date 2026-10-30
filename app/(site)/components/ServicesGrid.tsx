"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const SERVICES = [
  { name: "Joint Injections", cat: "Regenerative", desc: "Targeted injections to relieve pain and support joint healing.", href: "/joint-injections/" },
  { name: "Trigger Point Injections", cat: "Pain Relief", desc: "Release knotted muscle tissue and ease chronic muscle tension.", href: "/trigger-point-injections/" },
  { name: "Therapeutic Exercise", cat: "Movement", desc: "Guided exercise programs to restore strength and mobility.", href: "/physical-therapy/" },
  { name: "Chiropractic Care", cat: "Hands-On", desc: "Adjustments that improve alignment and relieve nerve pressure.", href: "/chiropractic-care/" },
  { name: "Nutritional IV's", cat: "Wellness", desc: "Vitamin and nutrient infusions to support energy and recovery.", href: "/nutritional-ivs/" },
  { name: "Bioidentical Hormones", cat: "Hormone Health", desc: "Personalized hormone therapy to restore balance and vitality.", href: "/bioidentical-hormone-optimization-therapy/" },
  { name: "Spinal Decompression", cat: "Back", desc: "Non-surgical relief for disc-related back and neck pain.", href: "/spinal-decompression/" },
  { name: "ED Shockwave Therapy", cat: "Men's Health", desc: "Acoustic wave therapy supporting performance and circulation.", href: "/ed-shockwave-therapy/" },
  { name: "Back & Knee Decompression", cat: "Joint", desc: "Decompression therapies that ease knee and lower back pain.", href: "/services/knee-decompression/" },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24" aria-labelledby="services-heading" id="services">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-olive-deep">— Our Services —</span>
            <h2 id="services-heading" className="mt-3 font-serif-display text-4xl sm:text-5xl text-ink">
              Care that meets you <em className="italic text-olive-deep">where you are</em>
            </h2>
          </div>
          <Link
            href="/services/"
            className="text-sm uppercase tracking-widest text-ink/70 hover:text-olive-deep border-b border-ink/20 hover:border-olive-deep pb-1 self-start"
          >
            View All Services →
          </Link>
        </FadeIn>

        <ul className="grid gap-px bg-sand sm:grid-cols-2 lg:grid-cols-3 border border-sand">
          {SERVICES.map((s, idx) => (
            <motion.li
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (idx % 3) * 0.08 }}
              className="bg-white p-8 group"
            >
              <div className="text-[11px] uppercase tracking-[0.25em] text-olive-deep">{s.cat}</div>
              <h3 className="mt-4 font-serif-display text-2xl text-ink">{s.name}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{s.desc}</p>
              <Link
                href={s.href}
                className="mt-6 inline-block text-xs uppercase tracking-widest text-ink group-hover:text-olive-deep transition-colors"
              >
                Learn More →
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
