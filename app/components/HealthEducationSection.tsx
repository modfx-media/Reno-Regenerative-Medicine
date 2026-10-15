"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { CLIENT_BLOGS_HIDDEN } from "../lib/posts";

const CARDS: { eyebrow: string; title: string; desc: string; cta: string; href: string }[] = [
  { eyebrow: "Upcoming Seminars", title: "Free Educational Seminars", desc: "Join Reno Regenerative Medicine for our regular free seminars on regenerative joint injections, neuropathy relief, hormone optimization and more. Learn what's possible — without surgery or prescription pain medication.", cta: "See Seminar Schedule →", href: "/seminars/" },
  { eyebrow: "Patient Stories", title: "Video Testimonials", desc: "Watch real Reno Regenerative patients share how integrative care helped them get back to golf, hiking, working and living without chronic knee, back and joint pain.", cta: "Watch on YouTube →", href: "/video-testimonials/" },
  { eyebrow: "From The Blog", title: "Health Education Articles", desc: "Practical, doctor-written articles on regenerative medicine, neuropathy, sciatica, whiplash, hormone health and physical therapy — written for patients in Reno and Northern Nevada.", cta: "Read the Blog →", href: "/blog/" },
];

export default function HealthEducationSection() {
  return (
    <section className="bg-cream py-28" aria-labelledby="health-education-heading">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-olive-deep">— Health Education —</span>
          <h2 id="health-education-heading" className="mt-4 font-serif-display text-4xl sm:text-5xl text-ink">
            Learn With <em className="italic text-olive-deep">Reno Regenerative</em>
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed">
            Seminars, video testimonials and articles to help you take an
            informed role in your healing journey.
          </p>
        </FadeIn>

        <ul className={`mt-14 grid gap-px bg-sand border border-sand ${CLIENT_BLOGS_HIDDEN ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {(CLIENT_BLOGS_HIDDEN ? CARDS.filter((c) => c.href !== "/blog/") : CARDS).map((c, i) => (
            <motion.li
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="bg-cream p-8 flex flex-col"
            >
              <div className="text-[11px] uppercase tracking-[0.3em] text-olive-deep">{c.eyebrow}</div>
              <h3 className="mt-4 font-serif-display text-2xl text-ink">{c.title}</h3>
              <p className="mt-4 text-sm text-ink/70 leading-relaxed flex-1">{c.desc}</p>
              <Link href={c.href} className="mt-8 inline-block text-xs uppercase tracking-widest text-ink hover:text-olive-deep transition-colors">
                {c.cta}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
