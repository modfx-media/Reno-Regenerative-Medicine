"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES } from "../lib/services";

const ease = [0.22, 1, 0.36, 1] as const;

/* -------------------------------------------------------------------------- */
/*  Exact live-site content                                                   */
/* -------------------------------------------------------------------------- */

const SUBHEADING =
  "To help patients suffering from the symptoms of neuropathy, knee pain, back pain, neck pain, and more!";

const EXACT_PARAGRAPHS = [
  "Reno Regenerative Medicine in Reno, Nevada, offers a welcoming and relaxed environment for an innovative and multidisciplinary approach. The team offers innovative medicine and a variety of therapies, including chiropractic, therapeutic exercise and cold laser therapy, to help patients suffering from sciatica, symptoms associated with neuropathy, arthritis, whiplash, and musculoskeletal pain.",
  "The Reno Regenerative Medicine team uses the best products available. Our services are complemented by advanced technologies for efficient and effective treatments that can relieve pain and help speed up the healing process. Reno Regenerative Medicine also has state of the art X-ray equipment on-site for efficient diagnosis, so patients are fully informed about their condition before beginning treatment.",
  "The team appreciate that every patient has individualized needs and concerns and adapts all of their treatment plans to address the uniqueness of each patient. Their treatment approach focuses on relieving pain and improving physical function for better overall health and well-being. The team provides effective hands-on care and innovative medicine services that can help patients who want to avoid taking medications or having surgery.",
  "To learn more about care at Reno Regenerative Medicine, call or request an appointment now.",
];

function MainContentSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f3ea] py-24 md:py-32">
      {/* decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-[#4a7c59]/8 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-[#c6b180]/15 blur-3xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="about-grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M56 0H0V56" fill="none" stroke="#0a120d" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1240px] px-6 xl:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT — sticky heading + image card + CTA */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#4a7c59]">
                <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
                About Our Practice
              </span>
              <h2 className="mt-5 font-serif-display text-[34px] sm:text-[40px] lg:text-[46px] leading-[1.08] tracking-tight text-[#0a120d]">
                {SUBHEADING}
              </h2>

              {/* image card with floating stat */}
              <div className="relative mt-10 hidden lg:block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_40px_80px_-40px_rgba(10,18,13,0.45)] ring-1 ring-[#e8e4d9]">
                  <Image
                    src="/images/services/chiropractic-care.jpg"
                    alt="Reno Regenerative Medicine practice"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a120d]/70 via-[#0a120d]/10 to-transparent" />
                  <div className="absolute left-6 right-6 bottom-6 text-white">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f3d99a]">
                      Reno, Nevada
                    </p>
                    <p className="mt-2 font-serif-display text-2xl leading-tight">
                      Welcoming, relaxed, and built around you.
                    </p>
                  </div>
                </div>
                {/* floating accent card */}
                <div className="absolute -right-4 -top-6 hidden xl:flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-white shadow-[0_20px_40px_-20px_rgba(10,18,13,0.4)] ring-1 ring-[#e8e4d9]">
                  <span className="font-serif-display text-3xl text-[#0a120d] leading-none">
                    1<span className="text-[#4a7c59]">+</span>
                  </span>
                  <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#4a7c59] text-center px-1">
                    Roof, Many<br />Therapies
                  </span>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/contact/"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#4a7c59] to-[#3d7a52] hover:from-[#3d7a52] hover:to-[#2e5e3f] px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_36px_-18px_rgba(74,124,89,0.85)] transition-colors"
                >
                  Request an Appointment
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.aside>

          {/* RIGHT — paragraphs as a vertical timeline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative">
              {/* vertical guide line */}
              <span
                aria-hidden
                className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-[#4a7c59]/40 via-[#c6b180]/40 to-transparent hidden sm:block"
              />

              <div className="space-y-7">
                {/* Featured first paragraph */}
                <div className="relative sm:pl-12">
                  <span
                    aria-hidden
                    className="absolute left-0 top-3 hidden sm:flex h-6 w-6 items-center justify-center rounded-full bg-[#4a7c59] ring-4 ring-[#f6f3ea]"
                  >
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </span>
                  <div className="rounded-2xl bg-white p-7 sm:p-8 shadow-[0_24px_56px_-32px_rgba(10,18,13,0.25)] ring-1 ring-[#e8e4d9]">
                    <p className="text-[19px] leading-[1.7] font-medium text-[#0a120d]">
                      {EXACT_PARAGRAPHS[0]}
                    </p>
                  </div>
                </div>

                {/* Subsequent paragraphs */}
                {EXACT_PARAGRAPHS.slice(1).map((p, i) => {
                  const isLast = i === EXACT_PARAGRAPHS.length - 2;
                  return (
                    <div key={i} className="relative sm:pl-12">
                      <span
                        aria-hidden
                        className="absolute left-0 top-3 hidden sm:flex h-6 w-6 items-center justify-center rounded-full bg-white ring-4 ring-[#f6f3ea] border border-[#c6b180]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#c6b180]" />
                      </span>
                      <p
                        className={`text-[17px] leading-[1.8] ${
                          isLast
                            ? "font-serif-display text-[22px] sm:text-[24px] leading-[1.4] text-[#0a120d] italic"
                            : "text-[#1a2332]/85"
                        }`}
                      >
                        {p}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Why Choose Us — 4 cards                                                   */
/* -------------------------------------------------------------------------- */

const REASONS = [
  {
    title: "State-of-the-Art Imaging",
    body: "On-site X-ray for accurate diagnosis.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18M8 5v14" />
      </>
    ),
  },
  {
    title: "Multidisciplinary Approach",
    body: "Chiropractic, IV therapy, cold laser, therapeutic exercise and more.",
    icon: (
      <>
        <circle cx="9" cy="9" r="3" />
        <circle cx="17" cy="9" r="3" />
        <path d="M3 20c0-3 3-5 6-5s6 2 6 5M14 20c0-2 2-4 4.5-4S23 18 23 20" />
      </>
    ),
  },
  {
    title: "Personalized Care Plans",
    body: "Every patient receives a treatment plan adapted to their unique needs.",
    icon: (
      <path d="M12 2l2.39 4.84 5.34.78-3.86 3.77.91 5.31L12 14.77l-4.78 2.5.91-5.31L4.27 7.62l5.34-.78L12 2z" />
    ),
  },
  {
    title: "Non-Surgical Solutions",
    body: "We help patients avoid medications and surgery whenever possible.",
    icon: <path d="M4 12h12M14 6l6 6-6 6M20 12h0" />,
  },
];

function WhyChooseSection() {
  return (
    <section className="bg-white py-24 md:py-32">
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
            Why Patients Choose Us
            <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
          </span>
          <h2 className="mt-4 font-serif-display text-4xl sm:text-5xl leading-[1.08] tracking-tight text-[#0a120d]">
            Why Choose Reno Regenerative Medicine?
          </h2>
        </motion.div>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <motion.li
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-[#e8e4d9] bg-[#f6f3ea]/40 p-7 transition-colors hover:border-[#4a7c59]/60 hover:bg-white"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-[#4a7c59] via-[#c6b180] to-[#4a7c59] opacity-0 transition-opacity group-hover:opacity-100"
              />
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-white text-[#4a7c59] ring-1 ring-[#e8e4d9] transition-transform group-hover:rotate-6">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {r.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-serif-display text-xl leading-snug text-[#0a120d]">
                {r.title}
              </h3>
              <p className="mt-2 text-[15.5px] leading-[1.65] text-[#1a2332]/75">
                {r.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Services Overview — horizontal scroll cards                               */
/* -------------------------------------------------------------------------- */

function ServicesOverviewSection() {
  const SHOW: string[] = [
    "joint-injections",
    "chiropractic-care",
    "spinal-decompression",
    "nutritional-ivs",
    "bioidentical-hormone-optimization-therapy",
    "ed-shockwave-therapy",
    "trigger-point-injections",
    "physical-therapy",
  ];
  const items = SHOW.map((s) => SERVICES.find((x) => x.slug === s)!).filter(Boolean);

  return (
    <section className="bg-[#f6f3ea] py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#4a7c59]">
              <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
              Our Services Overview
            </span>
            <h2 className="mt-4 font-serif-display text-4xl sm:text-5xl leading-[1.08] tracking-tight text-[#0a120d]">
              Care designed around your body
            </h2>
          </div>
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#4a7c59] hover:text-[#2e5e3f]"
          >
            View All Services
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

        <div className="mt-12 -mx-6 px-6 xl:-mx-8 xl:px-8">
          <ul className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible">
            {items.map((svc, i) => (
              <motion.li
                key={svc.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease, delay: i * 0.05 }}
                className="snap-start shrink-0 basis-[260px] sm:basis-[300px] lg:basis-auto"
              >
                <Link
                  href={svc.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-[#e8e4d9] shadow-[0_18px_42px_-28px_rgba(15,26,20,0.35)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,26,20,0.45)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={svc.label}
                      fill
                      sizes="(max-width:640px) 80vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-serif-display text-xl leading-snug text-[#0a120d]">
                      {svc.label}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-[1.6] text-[#1a2332]/75">
                      {svc.short}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#4a7c59] group-hover:text-[#2e5e3f]">
                      Learn More
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
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

export default function AboutBody() {
  return (
    <>
      <MainContentSection />
      <WhyChooseSection />
      <ServicesOverviewSection />
    </>
  );
}
