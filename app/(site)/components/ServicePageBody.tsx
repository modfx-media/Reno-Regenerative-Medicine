"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ServiceData } from "../lib/services";

const ease = [0.22, 1, 0.36, 1] as const;

export type ServicePageBodyProps = {
  service: ServiceData;
  related: ServiceData[];
};

/* -------------------------------------------------------------------------- */
/*  Sticky sidebar                                                            */
/* -------------------------------------------------------------------------- */

const HOURS: { day: string; time: string }[] = [
  { day: "Mon", time: "9:00 – 6:00" },
  { day: "Tue", time: "9:00 – 6:00" },
  { day: "Wed", time: "9:00 – 6:00" },
  { day: "Thu", time: "9:00 – 6:00" },
  { day: "Fri", time: "Closed" },
  { day: "Sat", time: "Closed" },
  { day: "Sun", time: "Closed" },
];

function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-28 self-start">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a120d] via-[#13231a] to-[#1f3a28] p-7 text-white shadow-[0_30px_60px_-30px_rgba(15,26,20,0.45)]">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#c6b180]/70 to-transparent"
        />
        <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c6b180]">
          Get Started
        </span>
        <h3 className="mt-3 font-serif-display text-2xl leading-snug">
          Request an appointment
        </h3>
        <p className="mt-3 text-[14.5px] leading-[1.65] text-white/75">
          Speak with our team about whether this service is right for you. We&rsquo;ll answer your questions before you commit to anything.
        </p>
        <Link
          href="/contact/"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#4a7c59] to-[#3d7a52] hover:from-[#3d7a52] hover:to-[#2e5e3f] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_12px_28px_-14px_rgba(74,124,89,0.85)] transition-colors"
        >
          Request Appointment
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <a
          href="tel:+17756839026"
          className="mt-3 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#c6b180]/70 bg-transparent px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#f3d99a] hover:bg-[#c6b180]/15 transition-colors"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          (775) 683-9026
        </a>

        <div className="mt-7 border-t border-white/10 pt-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c6b180]">
            Office Hours
          </span>
          <ul className="mt-3 space-y-1.5 text-[14px] text-white/80">
            {HOURS.map((h) => (
              <li key={h.day} className="flex items-center justify-between">
                <span>{h.day}</span>
                <span className={h.time === "Closed" ? "text-white/50" : ""}>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

/* -------------------------------------------------------------------------- */
/*  Body sections                                                             */
/* -------------------------------------------------------------------------- */

function ContentColumn({ service }: { service: ServiceData }) {
  return (
    <div className="space-y-12">
      {service.sections.map((sec, i) => (
        <motion.div
          key={sec.heading}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease, delay: i * 0.05 }}
        >
          <h2 className="font-serif-display text-3xl sm:text-[34px] leading-[1.15] tracking-tight text-[#0a120d]">
            {sec.heading}
          </h2>
          <div className="mt-4 space-y-4 text-[17px] leading-[1.75] text-[#1a2332]/85">
            {sec.paragraphs.map((p, j) => (
              <p key={j} className="whitespace-pre-line">
                {p}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function HowItWorksSection({ service }: { service: ServiceData }) {
  return (
    <section className="bg-[#f6f3ea] py-24 md:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#4a7c59]">
            <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
            How It Works
            <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
          </span>
          <h2 className="mt-4 font-serif-display text-4xl sm:text-5xl leading-[1.08] tracking-tight text-[#0a120d]">
            Your path to relief
          </h2>
        </motion.div>

        <ol className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <span aria-hidden className="pointer-events-none absolute left-0 right-0 top-7 hidden md:block">
            <span className="mx-auto block h-px w-[80%] bg-gradient-to-r from-transparent via-[#4a7c59]/30 to-transparent" />
          </span>
          {service.howItWorks.map((step, i) => (
            <motion.li
              key={step.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#4a7c59] to-[#3d7a52] font-serif-display text-lg font-semibold text-white shadow-[0_18px_36px_-18px_rgba(74,124,89,0.85)] ring-4 ring-[#f6f3ea]">
                {step.n}
              </div>
              <h3 className="mt-5 font-serif-display text-2xl leading-snug text-[#0a120d]">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[30ch] text-[15.5px] leading-[1.65] text-[#1a2332]/75">
                {step.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function WhoIsThisForSection({ service }: { service: ServiceData }) {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="mx-auto w-full max-w-[1100px] px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#4a7c59]">
            <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
            Who Is This For?
          </span>
          <h2 className="mt-4 font-serif-display text-4xl sm:text-5xl leading-[1.08] tracking-tight text-[#0a120d]">
            Is {service.label} right for you?
          </h2>
        </motion.div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {service.whoIsThisFor.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease, delay: i * 0.06 }}
              className="flex gap-4 rounded-2xl border border-[#e8e4d9] bg-[#f6f3ea]/40 p-5 transition-colors hover:border-[#4a7c59]/60 hover:bg-white"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#4a7c59]/10 text-[#4a7c59]">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <div>
                <h3 className="font-serif-display text-xl leading-snug text-[#0a120d]">{item.title}</h3>
                <p className="mt-1 text-[15px] leading-[1.65] text-[#1a2332]/75">{item.body}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function RelatedServicesSection({ related }: { related: ServiceData[] }) {
  return (
    <section className="bg-[#f6f3ea] py-24 md:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#4a7c59]">
              <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
              Related Services
            </span>
            <h2 className="mt-3 font-serif-display text-3xl sm:text-4xl leading-[1.1] tracking-tight text-[#0a120d]">
              Explore what else can help
            </h2>
          </div>
          <Link
            href="/services/"
            className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#4a7c59] hover:text-[#3d7a52]"
          >
            All Services →
          </Link>
        </motion.div>

        <div className="mt-10 -mx-6 overflow-x-auto pb-4 px-6 xl:mx-0 xl:px-0 xl:overflow-visible">
          <ul className="flex gap-6 xl:grid xl:grid-cols-3">
            {related.map((r, i) => (
              <motion.li
                key={r.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                className="w-[300px] shrink-0 xl:w-auto"
              >
                <Link
                  href={r.href}
                  className="group block h-full rounded-2xl bg-white p-6 ring-1 ring-[#e8e4d9] transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(15,26,20,0.25)] hover:ring-[#4a7c59]/40"
                >
                  <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c6b180]">
                    Service
                  </span>
                  <h3 className="mt-2 font-serif-display text-2xl leading-snug text-[#0a120d] group-hover:text-[#4a7c59] transition-colors">
                    {r.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-[#1a2332]/75">
                    {r.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#4a7c59]">
                    Learn more
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

export default function ServicePageBody({ service, related }: ServicePageBodyProps) {
  return (
    <>
      {/* Two-column intro block: content + sticky sidebar */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-12 px-6 xl:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <ContentColumn service={service} />
          </div>
          <div className="lg:col-span-4">
            <Sidebar />
          </div>
        </div>
      </section>

      <HowItWorksSection service={service} />
      <WhoIsThisForSection service={service} />
      <RelatedServicesSection related={related} />
    </>
  );
}
