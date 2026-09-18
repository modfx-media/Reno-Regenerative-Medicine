"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES } from "../lib/services";

const ease = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/*  Verbatim intro from https://renoregen.com/services/               */
/* ------------------------------------------------------------------ */
const EXACT_INTRO =
  "If you are experiencing pain, we want to help! We are dedicated to helping patients regain pain-free lives. Oftentimes, people do not seek help for pain until it worsens. We want to help at the onset of symptoms, so they do not progress.";

/* ------------------------------------------------------------------ */
/*  Service order from the live site                                  */
/* ------------------------------------------------------------------ */
const SERVICE_ORDER: { slug: string; label: string }[] = [
  { slug: "joint-injections", label: "Joint Injections" },
  { slug: "trigger-point-injections", label: "Trigger Point Injections" },
  { slug: "physical-therapy", label: "Therapeutic Exercise" },
  { slug: "chiropractic-care", label: "Chiropractic Care" },
  { slug: "nutritional-ivs", label: "Nutritional IV\u2019s" },
  { slug: "bioidentical-hormone-optimization-therapy", label: "Bioidentical Hormones" },
  { slug: "spinal-decompression", label: "Spinal Decompression" },
  { slug: "ed-shockwave-therapy", label: "ED Shockwave Therapy" },
  { slug: "knee-decompression", label: "Knee Decompression" },
];

const ORDERED_SERVICES = SERVICE_ORDER.map((entry) => {
  const data = SERVICES.find((s) => s.slug === entry.slug)!;
  return { ...data, name: entry.label };
});

/* ================================================================== */
/*  Section 1 — Editorial Intro Split                                 */
/* ================================================================== */
function IntroSplit() {
  return (
    <section className="relative bg-[#f6f3ea] py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-[#3d7a52]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-[#c6b180]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-6 xl:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#3d7a52]">
              <span aria-hidden className="h-px w-8 bg-[#3d7a52]/70" />
              Our Services
            </span>
            <h2 className="mt-5 font-serif-display text-[40px] sm:text-[52px] leading-[1.04] tracking-tight text-[#0a120d]">
              Care designed to help your body{" "}
              <span className="italic text-[#3d7a52]">heal naturally</span>.
            </h2>
            <p className="mt-7 max-w-2xl text-[18px] leading-[1.8] text-[#1a2332]/80">
              {EXACT_INTRO}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full bg-[#c6b180] px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0a120d] transition-colors hover:bg-[#f3d99a]"
              >
                Request an Appointment
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a
                href="tel:+17756839026"
                className="inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.22em] text-[#13231a] underline decoration-[#c6b180] decoration-2 underline-offset-[6px] hover:text-[#3d7a52]"
              >
                (775) 683-9026
              </a>
            </div>
          </motion.div>

          {/* Image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-[28px] shadow-[0_40px_80px_-40px_rgba(10,18,13,0.45)] ring-1 ring-[#e8e4d9]">
                <Image
                  src="/images/services/chiropractic-care.jpg"
                  alt="Reno Regenerative Medicine services"
                  width={780}
                  height={920}
                  className="h-[440px] w-full object-cover sm:h-[520px]"
                  priority
                />
                <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a120d]/65 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f3d99a]">
                    Reno, NV
                  </p>
                  <p className="mt-2 font-serif-display text-2xl leading-snug">
                    Integrative care, one team, under one roof.
                  </p>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-8 -left-6 hidden rounded-2xl bg-white p-5 shadow-[0_30px_60px_-30px_rgba(10,18,13,0.35)] ring-1 ring-[#e8e4d9] sm:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#3d7a52]">
                  Nine Services
                </p>
                <p className="mt-1 font-serif-display text-[22px] leading-tight text-[#0a120d]">
                  One personalized plan
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Section 2 — Numbered Service Directory                            */
/* ================================================================== */
function ServiceDirectory() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col items-start justify-between gap-6 border-b border-[#e8e4d9] pb-8 sm:flex-row sm:items-end"
        >
          <div>
            <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#3d7a52]">
              <span aria-hidden className="h-px w-8 bg-[#3d7a52]/70" />
              Service Directory
            </span>
            <h2 className="mt-4 font-serif-display text-[34px] sm:text-[42px] leading-[1.08] tracking-tight text-[#0a120d]">
              Explore every treatment we offer.
            </h2>
          </div>
          <p className="max-w-md text-[15.5px] leading-[1.7] text-[#1a2332]/70">
            From injections to decompression to hormone optimization — each service is built into a personalized plan, never used in isolation.
          </p>
        </motion.div>

        <ul className="mt-2 divide-y divide-[#e8e4d9]">
          {ORDERED_SERVICES.map((s, i) => (
            <motion.li
              key={s.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease, delay: (i % 4) * 0.05 }}
            >
              <Link
                href={s.href}
                className="group relative grid grid-cols-12 items-center gap-4 py-7 sm:gap-6 sm:py-9"
              >
                {/* Hover wash */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-[-24px] inset-y-0 -z-10 rounded-2xl bg-[#f6f3ea]/0 transition-colors duration-300 group-hover:bg-[#f6f3ea]"
                />

                {/* Number */}
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-serif-display text-[28px] leading-none text-[#3d7a52]/70 transition-colors group-hover:text-[#3d7a52] sm:text-[34px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title + short */}
                <div className="col-span-10 sm:col-span-8">
                  <h3 className="font-serif-display text-[22px] leading-tight text-[#0a120d] transition-colors group-hover:text-[#13231a] sm:text-[26px]">
                    {s.name}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[14.5px] leading-[1.65] text-[#1a2332]/70">
                    {s.short}
                  </p>
                </div>

                {/* Arrow */}
                <div className="col-span-12 flex justify-end sm:col-span-3">
                  <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#3d7a52]">
                    <span className="hidden sm:inline">Learn More</span>
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-[#3d7a52]/30 text-[#3d7a52] transition-all duration-300 group-hover:border-[#3d7a52] group-hover:bg-[#3d7a52] group-hover:text-white">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Section 3 — Why Non-Surgical (philosophy band, dark)              */
/* ================================================================== */
const PILLARS = [
  {
    title: "Treat the cause",
    body: "Every plan starts with a comprehensive exam — including imaging — so we can address the source of pain, not just the symptom.",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
  },
  {
    title: "Avoid drugs & surgery",
    body: "Our integrative approach helps patients sidestep long-term medications and unnecessary procedures whenever possible.",
    icon: (
      <>
        <path d="M9 4h6l3 4v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8l3-4z" />
        <path d="M9 14h6M12 11v6" />
      </>
    ),
  },
  {
    title: "Lasting recovery",
    body: "We pair therapies — injections, decompression, exercise, IVs — so healing speeds up and results actually hold.",
    icon: (
      <>
        <path d="M3 12s4-8 9-8 9 8 9 8-4 8-9 8-9-8-9-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
];

function WhyNonSurgical() {
  return (
    <section className="relative overflow-hidden bg-[#0a120d] py-24 md:py-32 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#3d7a52]/15 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-[#c6b180]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1180px] px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#f3d99a]">
            <span aria-hidden className="h-px w-8 bg-[#f3d99a]/70" />
            Our Philosophy
          </span>
          <h2 className="mt-4 font-serif-display text-[36px] sm:text-[48px] leading-[1.05] tracking-tight">
            Why non-surgical, integrative care?
          </h2>
          <p className="mt-5 text-[17px] leading-[1.75] text-white/75">
            Surgery and long-term medications carry real cost, risk, and recovery time. Our regenerative approach is built to help patients heal naturally — and stay that way.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/10 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="group relative bg-[#0a120d] p-9 transition-colors hover:bg-[#13231a]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-[#f3d99a] ring-1 ring-white/10 transition-transform group-hover:rotate-6">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {p.icon}
                </svg>
              </div>
              <h3 className="mt-6 font-serif-display text-[24px] leading-snug text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-white/70">
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
export default function ServicesGridSection() {
  return (
    <>
      <IntroSplit />
      <ServiceDirectory />
      <WhyNonSurgical />
    </>
  );
}
