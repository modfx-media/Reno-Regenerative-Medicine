"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/* -------------------------------------------------------------------------- */
/*  Exact live-site welcome content                                           */
/* -------------------------------------------------------------------------- */

function WelcomeSection() {
  return (
    <section className="bg-[#f6f3ea] py-24 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease }}
        className="mx-auto w-full max-w-[860px] px-6 text-center"
      >
        <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#4a7c59]">
          <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
          A Warm Welcome
          <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
        </span>

        <p className="mt-8 text-[18px] leading-[1.8] text-[#1a2332]/85">
          Here at Reno Regenerative Medicine, we value our patients. We
          acknowledge that going to a new place for the first time can be nerve
          racking. We want to do everything we can to eliminate any unnecessary
          stressors, which is why we include the option of printing and
          completing your forms at home. We think of our patients as part of
          our extended family, and we are excited to meet you!
        </p>

        <p className="mt-6 text-[18px] leading-[1.8] text-[#1a2332]/85">
          If you have any questions regarding your first visit, please
          don&apos;t hesitate to call us at{" "}
          <a
            href="tel:+17756839026"
            className="font-semibold text-[#4a7c59] hover:text-[#2e5e3f] underline-offset-4 hover:underline"
          >
            (775) 683-9026
          </a>
          .
        </p>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Patient forms — exact wording                                             */
/* -------------------------------------------------------------------------- */

function PatientFormsSection() {
  return (
    <section className="bg-white py-24 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease }}
        className="mx-auto w-full max-w-[920px] px-6"
      >
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#4a7c59]">
            <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
            Patient Forms
            <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
          </span>
          <h2 className="mt-4 font-serif-display text-4xl sm:text-5xl leading-[1.08] tracking-tight text-[#0a120d]">
            Patient Forms
          </h2>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl bg-[#f6f3ea] p-8 sm:p-12 ring-1 ring-[#e8e4d9] shadow-[0_30px_60px_-30px_rgba(15,26,20,0.25)]">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#4a7c59] via-[#c6b180] to-[#4a7c59]"
          />
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-2 flex md:justify-center">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-[#4a7c59] ring-1 ring-[#e8e4d9]">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                  <path d="M14 3v6h6M9 13h6M9 17h6" />
                </svg>
              </div>
            </div>
            <div className="md:col-span-10">
              <a
                href="/forms/new-patient-paperwork.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif-display text-2xl sm:text-[26px] leading-snug text-[#0a120d] hover:text-[#4a7c59] underline-offset-4 hover:underline"
              >
                New Patient Paperwork – Download &amp; Print Form
              </a>
              <p className="mt-4 text-[14.5px] leading-[1.7] text-[#1a2332]/70">
                If you do not have AdobeReader<sup>®</sup> installed on your
                computer,{" "}
                <a
                  href="https://get.adobe.com/reader/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4a7c59] hover:text-[#2e5e3f] underline-offset-4 hover:underline"
                >
                  Click Here To Download
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  What to expect — 3-step timeline                                          */
/* -------------------------------------------------------------------------- */

const STEPS = [
  {
    n: "01",
    title: "Schedule",
    body: "Call (775) 683-9026 or request online.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 11h18" />
      </>
    ),
  },
  {
    n: "02",
    title: "Complete Your Forms",
    body: "Download, print, and fill out paperwork at home before your visit.",
    icon: (
      <>
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <path d="M14 3v6h6M9 14h6M9 18h6" />
      </>
    ),
  },
  {
    n: "03",
    title: "Begin Your Care",
    body: "Meet our team and start your personalized treatment plan.",
    icon: (
      <>
        <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" />
        <path d="M9 9l2 2 4-4" />
      </>
    ),
  },
];

function WhatToExpectSection() {
  return (
    <section className="bg-[#f6f3ea] py-24 md:py-32">
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
            What to Expect
            <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
          </span>
          <h2 className="mt-4 font-serif-display text-4xl sm:text-5xl leading-[1.08] tracking-tight text-[#0a120d]">
            What to Expect at Your First Visit
          </h2>
        </motion.div>

        <ol className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <span aria-hidden className="pointer-events-none absolute left-0 right-0 top-7 hidden md:block">
            <span className="mx-auto block h-px w-[80%] bg-gradient-to-r from-transparent via-[#4a7c59]/30 to-transparent" />
          </span>

          {STEPS.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#4a7c59] to-[#3d7a52] text-white shadow-[0_18px_36px_-18px_rgba(74,124,89,0.85)] ring-4 ring-white">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {s.icon}
                </svg>
              </div>
              <div className="mt-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c6b180]">
                Step {s.n}
              </div>
              <h3 className="mt-2 font-serif-display text-2xl leading-snug text-[#0a120d]">
                {s.title}
              </h3>
              <p className="mt-3 max-w-[28ch] text-[15.5px] leading-[1.65] text-[#1a2332]/75">
                {s.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                       */
/* -------------------------------------------------------------------------- */

const FAQ = [
  {
    q: "What should I bring to my first visit?",
    a: "Bring a photo ID, your insurance card (if applicable), a list of current medications and supplements, and any imaging or records related to your condition. Completing your new-patient paperwork at home ahead of time helps us get started faster.",
  },
  {
    q: "How long will my first appointment take?",
    a: "Your first visit includes a thorough consultation, exam, any needed on-site X-ray imaging, and time to discuss a personalized plan with our team. We never rush — we take whatever time is needed to fully understand your condition and answer your questions.",
  },
  {
    q: "What conditions do you treat?",
    a: "We help patients with sciatica, symptoms associated with neuropathy, arthritis, whiplash, musculoskeletal pain, chronic back and neck pain, knee and joint pain, hormonal imbalance, and more — using non-surgical, hands-on care.",
  },
  {
    q: "Do you offer same-day appointments?",
    a: "Same-day appointments are sometimes available depending on the schedule. Call (775) 683-9026 and our team will do their best to fit you in as soon as possible.",
  },
];

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <li className="overflow-hidden rounded-2xl border border-[#e8e4d9] bg-white transition-colors hover:border-[#4a7c59]/50">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-serif-display text-lg sm:text-xl text-[#0a120d]">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease }}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#e8e4d9] text-[#4a7c59]"
          aria-hidden
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-[15.5px] leading-[1.7] text-[#1a2332]/80">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto w-full max-w-[860px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#4a7c59]">
            <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
            Frequently Asked
            <span aria-hidden className="h-px w-6 bg-[#4a7c59]/70" />
          </span>
          <h2 className="mt-4 font-serif-display text-4xl sm:text-5xl leading-[1.08] tracking-tight text-[#0a120d]">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <ul className="mt-12 space-y-3">
          {FAQ.map((item, i) => (
            <FAQItem
              key={item.q}
              q={item.q}
              a={item.a}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

export default function NewPatientsBody() {
  return (
    <>
      <WelcomeSection />
      <PatientFormsSection />
      <WhatToExpectSection />
      <FAQSection />
    </>
  );
}
