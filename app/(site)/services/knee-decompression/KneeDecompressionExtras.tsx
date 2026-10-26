"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/*  Conditions We Commonly Treat — 6-card grid                        */
/* ------------------------------------------------------------------ */

type Condition = {
  title: string;
  blurb: string;
  icon: React.ReactNode;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const CONDITIONS: Condition[] = [
  {
    title: "Knee Osteoarthritis",
    blurb:
      "Degenerative joint disease causing pain, stiffness, and reduced mobility.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" {...stroke} aria-hidden>
        <circle cx="12" cy="12" r="8" />
        <path d="M9 9l6 6M15 9l-6 6" />
      </svg>
    ),
  },
  {
    title: "Meniscus Irritation",
    blurb:
      "Inflammation or mild tears causing locking, swelling, and discomfort.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" {...stroke} aria-hidden>
        <path d="M4 12c2-4 6-4 8-4s6 0 8 4" />
        <path d="M4 12c2 4 6 4 8 4s6 0 8-4" />
      </svg>
    ),
  },
  {
    title: "Post-Injury Knee Pain",
    blurb:
      "Lingering pain after sprains, ACL strain, or overuse injuries.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" {...stroke} aria-hidden>
        <path d="M5 4l3 6-3 4 4 6M19 4l-3 6 3 4-4 6" />
      </svg>
    ),
  },
  {
    title: "Chronic Knee Inflammation",
    blurb:
      "Persistent swelling and aching that won't respond to rest alone.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" {...stroke} aria-hidden>
        <path d="M12 3c4 6 6 9 6 12a6 6 0 1 1-12 0c0-3 2-6 6-12z" />
      </svg>
    ),
  },
  {
    title: "Pre-Surgical Patients",
    blurb:
      "Explore non-surgical options before committing to the operating room.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" {...stroke} aria-hidden>
        <path d="M3 12h6l2-3 2 6 2-3h6" />
      </svg>
    ),
  },
  {
    title: "Failed Cortisone Patients",
    blurb:
      "When injections provide only temporary relief, decompression goes deeper.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" {...stroke} aria-hidden>
        <path d="M14 4l-2 2 6 6 2-2-6-6zM12 6l-8 8v4h4l8-8" />
      </svg>
    ),
  },
];

function ConditionsTreated() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#3d7a52]">
            <span aria-hidden className="h-px w-8 bg-[#3d7a52]/70" />
            Conditions We Commonly Treat
          </span>
          <h2 className="mt-4 font-serif-display text-[34px] sm:text-[42px] leading-[1.08] tracking-tight text-[#0a120d]">
            Knee decompression helps with{" "}
            <span className="italic text-[#3d7a52]">a wide range of knee issues</span>.
          </h2>
        </motion.div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CONDITIONS.map((c, i) => (
            <motion.li
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease, delay: (i % 3) * 0.06 }}
              className="group relative rounded-2xl border border-[#e8e4d9] bg-white p-7 shadow-[0_20px_40px_-30px_rgba(10,18,13,0.25)] transition-all hover:-translate-y-1 hover:border-[#c6b180] hover:shadow-[0_30px_60px_-30px_rgba(10,18,13,0.35)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f6f3ea] text-[#3d7a52] transition-colors group-hover:bg-[#3d7a52] group-hover:text-white">
                {c.icon}
              </div>
              <h3 className="mt-5 font-serif-display text-[22px] leading-tight text-[#0a120d]">
                {c.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.65] text-[#1a2332]/75">
                {c.blurb}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ — animated accordion                                          */
/* ------------------------------------------------------------------ */

const FAQS: { q: string; a: string }[] = [
  {
    q: "How many sessions will I need?",
    a: "Most patients begin a series of 6–12 sessions. Your provider will recommend a plan based on your exam findings and imaging.",
  },
  {
    q: "Is knee decompression painful?",
    a: "No. The traction is gentle and comfortable. Most patients feel relief during the session itself.",
  },
  {
    q: "How is this different from a cortisone shot?",
    a: "Cortisone reduces inflammation temporarily but does not change the mechanical pressure inside the joint. Knee decompression physically unloads the joint, creating space for healing.",
  },
  {
    q: "Can I still have surgery later if decompression doesn't work?",
    a: "Yes. Knee decompression is non-invasive and preserves all your future options, including surgery.",
  },
  {
    q: "Is it covered by insurance?",
    a: "Coverage varies. Call our office at (775) 683-9026 and our team will help verify your benefits.",
  },
];

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#e8e4d9]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-serif-display text-[19px] leading-snug text-[#0a120d] sm:text-[22px]">
          {q}
        </span>
        <motion.span
          aria-hidden
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease }}
          className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-[#e8e4d9] text-[#3d7a52] group-hover:border-[#3d7a52]"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" {...stroke}>
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden"
          >
            <p className="pb-7 pr-12 text-[16px] leading-[1.75] text-[#1a2332]/80">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#3d7a52]">
            <span aria-hidden className="h-px w-8 bg-[#3d7a52]/70" />
            FAQ
          </span>
          <h2 className="mt-4 font-serif-display text-[34px] sm:text-[42px] leading-[1.08] tracking-tight text-[#0a120d]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-[1.7] text-[#1a2332]/70">
            Quick answers about how knee decompression works at our Reno clinic.
          </p>
        </motion.div>

        <div className="mt-10 border-t border-[#e8e4d9]">
          {FAQS.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Export                                                            */
/* ------------------------------------------------------------------ */

export default function KneeDecompressionExtras() {
  return (
    <>
      <ConditionsTreated />
      <Faq />
    </>
  );
}
