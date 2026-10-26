"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const HOURS: { day: string; hours: string }[] = [
  { day: "Monday", hours: "9:00 am – 6:00 pm" },
  { day: "Tuesday", hours: "9:00 am – 6:00 pm" },
  { day: "Wednesday", hours: "9:00 am – 6:00 pm" },
  { day: "Thursday", hours: "9:00 am – 6:00 pm" },
  { day: "Friday", hours: "Closed" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
];

export default function ServiceSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease }}
      className="lg:sticky lg:top-28 lg:self-start"
    >
      {/* Request appointment card */}
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a120d] via-[#13231a] to-[#1f3a28] p-7 text-white shadow-[0_30px_60px_-30px_rgba(10,18,13,0.5)]">
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3d99a]">
          <span aria-hidden className="h-px w-5 bg-[#f3d99a]/70" />
          Get Started
        </span>
        <h3 className="mt-3 font-serif-display text-[26px] leading-tight">
          Request an Appointment
        </h3>
        <p className="mt-3 text-[14.5px] leading-[1.6] text-white/75">
          Talk with our team about whether this treatment is right for you.
        </p>

        <Link
          href="/contact/"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c6b180] px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0a120d] transition-colors hover:bg-[#f3d99a]"
        >
          Request Appointment
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        <a
          href="tel:+17756839026"
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3.5 text-[13px] font-semibold tracking-wide text-white transition-colors hover:border-[#f3d99a] hover:text-[#f3d99a]"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.79a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.29-1.29a2 2 0 0 1 2.11-.45c.89.35 1.83.59 2.79.72A2 2 0 0 1 22 16.92Z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          (775) 683-9026
        </a>
      </div>

      {/* Hours card */}
      <div className="mt-6 rounded-3xl bg-white p-7 ring-1 ring-[#e8e4d9]">
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#4a7c59]">
          <span aria-hidden className="h-px w-5 bg-[#4a7c59]/70" />
          Office Hours
        </span>
        <h3 className="mt-3 font-serif-display text-[22px] leading-tight text-[#0a120d]">
          When we&rsquo;re open
        </h3>
        <ul className="mt-4 divide-y divide-[#e8e4d9]/80">
          {HOURS.map((h) => (
            <li key={h.day} className="flex items-center justify-between py-2.5 text-[14px]">
              <span className="font-medium text-[#0a120d]">{h.day}</span>
              <span
                className={
                  h.hours === "Closed"
                    ? "text-[#1a2332]/45"
                    : "text-[#1a2332]/80"
                }
              >
                {h.hours}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Forms card */}
      <div className="mt-6 rounded-3xl bg-[#f6f3ea] p-7 ring-1 ring-[#e8e4d9]">
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#4a7c59]">
          <span aria-hidden className="h-px w-5 bg-[#4a7c59]/70" />
          New Patients
        </span>
        <h3 className="mt-3 font-serif-display text-[22px] leading-tight text-[#0a120d]">
          Save time at your visit
        </h3>
        <p className="mt-3 text-[14px] leading-[1.6] text-[#1a2332]/75">
          Download and complete your patient paperwork before you arrive.
        </p>
        <Link
          href="/new-patients/"
          className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#4a7c59] hover:text-[#2e5e3f]"
        >
          New Patient Info
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </motion.aside>
  );
}
