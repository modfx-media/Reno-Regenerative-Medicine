"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES_BY_SLUG, type ServiceSlug } from "../lib/services";

const ease = [0.22, 1, 0.36, 1] as const;

/* -------------------------------------------------------------------------- */
/*  ExactContent — verbatim live-site content + REQUEST AN APPOINTMENT btn    */
/* -------------------------------------------------------------------------- */

export type ExactContentProps = {
  eyebrow?: string;
  heading: string;
  /** Each entry is rendered as a <p>. Pass either strings or React nodes. */
  paragraphs: React.ReactNode[];
  /** Optional bullet list rendered between two specific paragraphs. */
  inlineList?: { afterParagraphIndex: number; items: string[] }[];
  /** Whether to render the REQUEST AN APPOINTMENT CTA (default true). */
  showCta?: boolean;
};

export function ExactContent({
  eyebrow = "Overview",
  heading,
  paragraphs,
  inlineList,
  showCta = true,
}: ExactContentProps) {
  const listsByIndex = new Map<number, string[]>(
    (inlineList ?? []).map((l) => [l.afterParagraphIndex, l.items]),
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease }}
      className="rounded-3xl bg-white p-8 sm:p-10 ring-1 ring-[#e8e4d9] shadow-[0_24px_56px_-32px_rgba(10,18,13,0.18)]"
    >
      <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#4a7c59]">
        <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-serif-display text-3xl sm:text-4xl leading-[1.12] tracking-tight text-[#0a120d]">
        {heading}
      </h2>

      <div className="mt-6 space-y-5 text-[17px] leading-[1.75] text-[#1a2332]/85">
        {paragraphs.map((p, i) => (
          <div key={i}>
            <p className={i === 0 ? "text-[18px] font-medium text-[#0a120d]" : ""}>{p}</p>
            {listsByIndex.has(i) && (
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {listsByIndex.get(i)!.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-[#f6f3ea] px-4 py-3 text-[15.5px] text-[#0a120d] ring-1 ring-[#e8e4d9]"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" className="mt-1 shrink-0 text-[#4a7c59]" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                      <path d="M5 12l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {showCta && (
        <Link
          href="/contact/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4a7c59] to-[#3d7a52] hover:from-[#3d7a52] hover:to-[#2e5e3f] px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_36px_-18px_rgba(74,124,89,0.85)] transition-colors"
        >
          Request an Appointment
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      )}
    </motion.section>
  );
}

/* -------------------------------------------------------------------------- */
/*  IconBulletList — for "Who Is a Good Candidate" / "Conditions Treated"     */
/* -------------------------------------------------------------------------- */

export type IconBulletListProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: { title: string; body?: string }[];
  columns?: 2 | 3;
};

export function IconBulletList({
  eyebrow = "Who It Helps",
  heading,
  intro,
  items,
  columns = 2,
}: IconBulletListProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease }}
      className="rounded-3xl bg-white p-8 sm:p-10 ring-1 ring-[#e8e4d9]"
    >
      <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#4a7c59]">
        <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-serif-display text-3xl sm:text-[34px] leading-[1.15] tracking-tight text-[#0a120d]">
        {heading}
      </h2>
      {intro && (
        <p className="mt-4 text-[16.5px] leading-[1.7] text-[#1a2332]/80">{intro}</p>
      )}

      <ul className={`mt-7 grid gap-4 ${columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
        {items.map((it) => (
          <li
            key={it.title}
            className="group flex gap-4 rounded-2xl bg-[#f6f3ea] p-5 ring-1 ring-[#e8e4d9] transition-colors hover:bg-white hover:ring-[#4a7c59]/40"
          >
            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-[#4a7c59] ring-1 ring-[#e8e4d9] transition-transform group-hover:rotate-6">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M5 12l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <h3 className="font-serif-display text-[19px] leading-tight text-[#0a120d]">
                {it.title}
              </h3>
              {it.body && (
                <p className="mt-1.5 text-[14.5px] leading-[1.6] text-[#1a2332]/70">
                  {it.body}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

/* -------------------------------------------------------------------------- */
/*  ProcessSteps — 3-step visual                                              */
/* -------------------------------------------------------------------------- */

export type ProcessStepsProps = {
  eyebrow?: string;
  heading: string;
  steps: { n: string; title: string; body: string }[];
};

export function ProcessSteps({
  eyebrow = "How It Works",
  heading,
  steps,
}: ProcessStepsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease }}
      className="rounded-3xl bg-gradient-to-br from-[#0a120d] via-[#13231a] to-[#1f3a28] p-8 sm:p-10 text-white"
    >
      <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#f3d99a]">
        <span aria-hidden className="h-px w-6 bg-[#f3d99a]/70" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-serif-display text-3xl sm:text-[34px] leading-[1.15] tracking-tight">
        {heading}
      </h2>

      <ol className="mt-8 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.li
            key={s.n}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease, delay: i * 0.1 }}
            className="relative rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#c6b180] to-[#f3d99a] text-[14px] font-semibold tracking-wider text-[#0a120d]">
              {s.n}
            </span>
            <h3 className="mt-4 font-serif-display text-xl leading-snug">
              {s.title}
            </h3>
            <p className="mt-2.5 text-[14.5px] leading-[1.65] text-white/70">{s.body}</p>
          </motion.li>
        ))}
      </ol>
    </motion.section>
  );
}

/* -------------------------------------------------------------------------- */
/*  ChecklistSection — "Is This Right for You?"                               */
/* -------------------------------------------------------------------------- */

export type ChecklistSectionProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: string[];
};

export function ChecklistSection({
  eyebrow = "Is This Right for You?",
  heading,
  intro,
  items,
}: ChecklistSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease }}
      className="rounded-3xl bg-white p-8 sm:p-10 ring-1 ring-[#e8e4d9]"
    >
      <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#4a7c59]">
        <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-serif-display text-3xl sm:text-[34px] leading-[1.15] tracking-tight text-[#0a120d]">
        {heading}
      </h2>
      {intro && (
        <p className="mt-4 text-[16.5px] leading-[1.7] text-[#1a2332]/80">{intro}</p>
      )}

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((it) => (
          <li
            key={it}
            className="flex items-start gap-3 rounded-xl border border-[#e8e4d9] bg-[#f6f3ea]/60 px-4 py-3.5 text-[15.5px] text-[#0a120d]"
          >
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-[#4a7c59] text-white">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
                <path d="M5 12l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {it}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

/* -------------------------------------------------------------------------- */
/*  RelatedServices — 3 cards                                                 */
/* -------------------------------------------------------------------------- */

export type RelatedServicesProps = {
  heading?: string;
  slugs: ServiceSlug[];
};

export function RelatedServices({
  heading = "Related Services",
  slugs,
}: RelatedServicesProps) {
  const items = slugs.map((slug) => SERVICES_BY_SLUG[slug]).filter(Boolean);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease }}
    >
      <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#4a7c59]">
        <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
        Explore More
      </span>
      <h2 className="mt-4 font-serif-display text-3xl sm:text-[34px] leading-[1.15] tracking-tight text-[#0a120d]">
        {heading}
      </h2>

      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <Link
            key={s.slug}
            href={s.href}
            className="group relative block overflow-hidden rounded-2xl bg-white ring-1 ring-[#e8e4d9] transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(15,26,20,0.25)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={s.image}
                alt={s.label}
                fill
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a120d]/40 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="font-serif-display text-xl leading-snug text-[#0a120d] group-hover:text-[#4a7c59] transition-colors">
                {s.name}
              </h3>
              <span className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#4a7c59]">
                Learn More
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}

/* -------------------------------------------------------------------------- */
/*  IconCardGrid — for "Conditions We Treat" / "Benefits"                     */
/* -------------------------------------------------------------------------- */

export type IconCardGridProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  cards: { title: string; body?: string; icon: React.ReactNode }[];
  columns?: 2 | 3 | 4;
};

export function IconCardGrid({
  eyebrow = "What We Treat",
  heading,
  intro,
  cards,
  columns = 3,
}: IconCardGridProps) {
  const colClass =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2";

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease }}
      className="rounded-3xl bg-[#f6f3ea] p-8 sm:p-10 ring-1 ring-[#e8e4d9]"
    >
      <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#4a7c59]">
        <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-serif-display text-3xl sm:text-[34px] leading-[1.15] tracking-tight text-[#0a120d]">
        {heading}
      </h2>
      {intro && (
        <p className="mt-4 text-[16.5px] leading-[1.7] text-[#1a2332]/80">{intro}</p>
      )}

      <div className={`mt-7 grid gap-4 ${colClass}`}>
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease, delay: i * 0.05 }}
            className="group rounded-2xl bg-white p-5 ring-1 ring-[#e8e4d9] transition-all hover:-translate-y-1 hover:ring-[#4a7c59]/40 hover:shadow-[0_18px_36px_-20px_rgba(15,26,20,0.25)]"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#f6f3ea] text-[#4a7c59] ring-1 ring-[#e8e4d9] transition-transform group-hover:rotate-6">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {c.icon}
              </svg>
            </div>
            <h3 className="mt-4 font-serif-display text-[19px] leading-tight text-[#0a120d]">
              {c.title}
            </h3>
            {c.body && (
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[#1a2332]/70">
                {c.body}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
