"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/*  Verbatim from https://renoregen.com/seminars/                     */
/* ------------------------------------------------------------------ */
const EXACT_BODY_BEFORE = "We do Pain and Nerve Damage Talks throughout the month, Greater Washoe County please call the office ";
const EXACT_BODY_AFTER = " for more information.";

/* ================================================================== */
/*  Section 1 — Verbatim Statement                                    */
/* ================================================================== */
function StatementSection() {
  return (
    <section className="relative bg-[#f6f3ea] py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-[#3d7a52]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-[#c6b180]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[920px] px-6 xl:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#3d7a52]">
            <span aria-hidden className="h-px w-8 bg-[#3d7a52]/70" />
            Community Education
            <span aria-hidden className="h-px w-8 bg-[#3d7a52]/70" />
          </span>
          <h2 className="mt-5 font-serif-display text-[36px] sm:text-[46px] leading-[1.08] tracking-tight text-[#0a120d]">
            Pain &amp; Nerve Damage Talks{" "}
            <span className="italic text-[#3d7a52]">throughout the month</span>.
          </h2>
          <p className="mt-7 text-[18px] leading-[1.85] text-[#1a2332]/80">
            {EXACT_BODY_BEFORE}
            <a
              href="tel:+17756839026"
              className="font-semibold text-[#13231a] underline decoration-[#c6b180] decoration-2 underline-offset-[4px] hover:text-[#3d7a52]"
            >
              (775) 683-9026
            </a>
            {EXACT_BODY_AFTER}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+17756839026"
              className="inline-flex items-center gap-2 rounded-full bg-[#c6b180] px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0a120d] transition-colors hover:bg-[#f3d99a]"
            >
              Call to Reserve a Seat
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.22em] text-[#13231a] underline decoration-[#c6b180] decoration-2 underline-offset-[6px] hover:text-[#3d7a52]"
            >
              Contact the Office
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Section 2 — Topics Covered                                        */
/* ================================================================== */
const TOPICS = [
  {
    title: "Pain Talks",
    body: "Learn how chronic back, neck, joint, and shoulder pain develops — and the non-surgical, regenerative options that actually address the source instead of masking it.",
    icon: (
      <>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M5 19l2.5-2.5M16.5 7.5L19 5" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    title: "Nerve Damage Talks",
    body: "Understand peripheral neuropathy — the burning, numbness, tingling, and loss of balance — and how a combined therapy approach can restore feeling and function.",
    icon: (
      <>
        <path d="M3 12c2 0 2-3 4-3s2 6 4 6 2-9 4-9 2 9 4 9 2-3 2-3" />
      </>
    ),
  },
];

function TopicsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#3d7a52]">
            <span aria-hidden className="h-px w-8 bg-[#3d7a52]/70" />
            What We Cover
          </span>
          <h2 className="mt-4 font-serif-display text-[34px] sm:text-[42px] leading-[1.08] tracking-tight text-[#0a120d]">
            Two talks. One mission — help you make informed health decisions.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.75] text-[#1a2332]/75">
            Each session is led by our clinical team and built for patients in Greater Washoe County who want a clear, honest look at their healing options before they commit to surgery or long-term medication.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TOPICS.map((t, i) => (
            <motion.article
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="group relative h-full overflow-hidden rounded-3xl border border-[#e8e4d9] bg-[#f6f3ea]/40 p-9 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_56px_-28px_rgba(15,26,20,0.25)]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#3d7a52] via-[#c6b180] to-[#3d7a52] opacity-0 transition-opacity group-hover:opacity-100"
              />
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#3d7a52] ring-1 ring-[#e8e4d9] transition-transform group-hover:rotate-6">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {t.icon}
                </svg>
              </div>
              <h3 className="mt-6 font-serif-display text-[26px] leading-snug text-[#0a120d]">
                {t.title}
              </h3>
              <p className="mt-3 text-[15.5px] leading-[1.7] text-[#1a2332]/75">
                {t.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Section 3 — What to Expect                                        */
/* ================================================================== */
const STEPS = [
  {
    n: "01",
    title: "Reserve your seat",
    body: "Call our Reno office to confirm the next session date and reserve a place for you (and a guest).",
  },
  {
    n: "02",
    title: "Attend the talk",
    body: "A relaxed, no-pressure presentation with time for questions about pain, neuropathy, and your specific situation.",
  },
  {
    n: "03",
    title: "Decide what's next",
    body: "If our approach feels like the right fit, we'll help you book a one-on-one consultation. If not, you'll still leave with answers.",
  },
];

function ExpectSection() {
  return (
    <section className="bg-[#f6f3ea] py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#3d7a52]">
            <span aria-hidden className="h-px w-8 bg-[#3d7a52]/70" />
            What to Expect
            <span aria-hidden className="h-px w-8 bg-[#3d7a52]/70" />
          </span>
          <h2 className="mt-4 font-serif-display text-[32px] sm:text-[40px] leading-[1.1] tracking-tight text-[#0a120d]">
            Three simple steps from sign-up to next steps.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease, delay: i * 0.08 }}
              className="relative rounded-2xl bg-white p-8 ring-1 ring-[#e8e4d9]"
            >
              <span className="font-serif-display text-[32px] leading-none text-[#3d7a52]/70">
                {s.n}
              </span>
              <h3 className="mt-4 font-serif-display text-[22px] leading-snug text-[#0a120d]">
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-[#1a2332]/75">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Section 4 — Reserve Your Seat (dark CTA card)                     */
/* ================================================================== */
function ReserveSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0a120d] via-[#13231a] to-[#1f3a28] p-10 text-white shadow-[0_40px_80px_-40px_rgba(10,18,13,0.5)] md:p-14"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -right-24 h-[400px] w-[400px] rounded-full bg-[#3d7a52]/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-24 h-[400px] w-[400px] rounded-full bg-[#c6b180]/10 blur-3xl" />
          </div>

          <div className="relative grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#f3d99a]">
                <span aria-hidden className="h-px w-8 bg-[#f3d99a]/70" />
                Reserve Your Seat
              </span>
              <h2 className="mt-4 font-serif-display text-[32px] sm:text-[42px] leading-[1.08] tracking-tight">
                Seats fill quickly — call the office to confirm the next date.
              </h2>
              <p className="mt-5 max-w-xl text-[16px] leading-[1.75] text-white/75">
                Pain &amp; Nerve Damage Talks are held throughout the month for Greater Washoe County. Bring a spouse, a friend, or a family member.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl bg-white/10 p-7 ring-1 ring-white/15 backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f3d99a]">
                  Phone
                </p>
                <a
                  href="tel:+17756839026"
                  className="mt-2 block font-serif-display text-[30px] leading-tight text-white hover:text-[#f3d99a]"
                >
                  (775) 683-9026
                </a>
                <p className="mt-2 text-[13.5px] text-white/70">
                  Mon &ndash; Thu &middot; 9:00 am &ndash; 6:00 pm
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="tel:+17756839026"
                    className="inline-flex items-center gap-2 rounded-full bg-[#c6b180] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0a120d] transition-colors hover:bg-[#f3d99a]"
                  >
                    Call Now
                  </a>
                  <Link
                    href="/contact/"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
                  >
                    Request Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================== */
export default function SeminarsBody() {
  return (
    <>
      <StatementSection />
      <TopicsSection />
      <ExpectSection />
      <ReserveSection />
    </>
  );
}
