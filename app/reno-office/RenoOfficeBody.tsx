"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BOOKING_URL } from "../lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/*  VERBATIM from https://renoregen.com/reno-office/                  */
/*                                                                    */
/*    RENO OFFICE                                                     */
/*    730 Sandhill Rd Suite 120 Reno, NV 89521                        */
/*    Phone: (775) 683-9026                                           */
/*                                                                    */
/*    Business Hours                                                  */
/*    Monday:    9:00 am – 6:00 pm                                    */
/*    Tuesday:   9:00am – 6:00 pm                                     */
/*    Wednesday: 9:00 am – 6:00 pm                                    */
/*    Thursday:  9:00am – 6:00 pm                                     */
/*    Friday:    Closed                                               */
/*    Saturday:  Closed                                               */
/*    Sunday:    Closed                                               */
/* ------------------------------------------------------------------ */

/* ================================================================== */
/*  Section 1 — Address + Hours (verbatim)                            */
/* ================================================================== */
function AddressSection() {
  return (
    <section className="relative bg-[#f6f3ea] py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-[#3d7a52]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-[#c6b180]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1180px] px-6 xl:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#3d7a52]">
              <span aria-hidden className="h-px w-8 bg-[#3d7a52]/70" />
              Reno Office
            </span>
            <h2 className="mt-5 font-serif-display text-[40px] sm:text-[52px] leading-[1.04] tracking-tight text-[#0a120d]">
              Visit our Reno clinic for{" "}
              <span className="italic text-[#3d7a52]">natural, lasting</span> relief.
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 ring-1 ring-[#e8e4d9]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#3d7a52]">
                  Address
                </p>
                <p className="mt-3 font-serif-display text-[20px] leading-snug text-[#0a120d]">
                  730 Sandhill Rd
                  <br />
                  Suite 120
                  <br />
                  Reno, NV 89521
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=730+Sandhill+Rd+Suite+120+Reno+NV+89521"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#3d7a52] hover:text-[#0a120d]"
                >
                  Get Directions
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              <div className="rounded-2xl bg-white p-6 ring-1 ring-[#e8e4d9]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#3d7a52]">
                  Phone
                </p>
                <a
                  href="tel:+17756839026"
                  className="mt-3 block font-serif-display text-[26px] leading-tight text-[#0a120d] hover:text-[#3d7a52]"
                >
                  (775) 683-9026
                </a>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-[#1a2332]/65">
                  Speak with our team to book or reschedule.
                </p>
                <a
                  href="sms:+17755223807"
                  className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#3d7a52] hover:text-[#0a120d]"
                >
                  Or text (775) 522-3807
                </a>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#c6b180] px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0a120d] transition-colors hover:bg-[#f3d99a]"
              >
                Book an Appointment
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full border border-[#0a120d]/15 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0a120d] transition-colors hover:bg-white"
              >
                Send a Message
              </Link>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a120d] via-[#13231a] to-[#1f3a28] p-8 text-white shadow-[0_40px_80px_-40px_rgba(10,18,13,0.5)]">
              <div aria-hidden className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-[#3d7a52]/20 blur-3xl" />

              <div className="relative">
                <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#f3d99a]">
                  <span aria-hidden className="h-px w-8 bg-[#f3d99a]/70" />
                  Business Hours
                </span>
                <p className="mt-4 font-serif-display text-[24px] leading-snug">
                  We&apos;re open four days a week.
                </p>

                <ul className="mt-6 divide-y divide-white/10 text-[15px]">
                  <li className="flex justify-between py-3"><span>Monday</span><span className="text-white/85">9:00 am &ndash; 6:00 pm</span></li>
                  <li className="flex justify-between py-3"><span>Tuesday</span><span className="text-white/85">9:00 am &ndash; 6:00 pm</span></li>
                  <li className="flex justify-between py-3"><span>Wednesday</span><span className="text-white/85">9:00 am &ndash; 6:00 pm</span></li>
                  <li className="flex justify-between py-3"><span>Thursday</span><span className="text-white/85">9:00 am &ndash; 6:00 pm</span></li>
                  <li className="flex justify-between py-3 text-white/55"><span>Friday</span><span>Closed</span></li>
                  <li className="flex justify-between py-3 text-white/55"><span>Saturday</span><span>Closed</span></li>
                  <li className="flex justify-between py-3 text-white/55"><span>Sunday</span><span>Closed</span></li>
                </ul>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Section 2 — Why Visit (relief-themed)                             */
/* ================================================================== */
const REASONS = [
  {
    title: "Doctor for back & knee pain",
    body: "From chronic low back pain to knees that lock up, our Reno team builds a plan around your specific diagnosis.",
    icon: (
      <>
        <path d="M9 2v6c0 2 1 3 3 3s3-1 3-3V2" />
        <path d="M8 11h8" />
        <path d="M9 13v9M15 13v9" />
      </>
    ),
  },
  {
    title: "Natural, non-surgical therapies",
    body: "Joint injections, decompression, chiropractic care, IVs, and therapeutic exercise &mdash; all under one roof.",
    icon: (
      <>
        <path d="M3 12s4-8 9-8 9 8 9 8-4 8-9 8-9-8-9-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    title: "Built for lasting relief",
    body: "We don&apos;t just chase symptoms. We diagnose the source and pair therapies so results actually hold.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
];

function WhyVisitSection() {
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
            Why Visit Our Reno Office
          </span>
          <h2 className="mt-4 font-serif-display text-[34px] sm:text-[42px] leading-[1.08] tracking-tight text-[#0a120d]">
            Stop letting joint aches dictate your daily routine.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.75] text-[#1a2332]/75">
            Our Reno doctor for back and knee pain provides natural therapies for lasting relief. Book an appointment and take the first step toward feeling like yourself again.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REASONS.map((r, i) => (
            <motion.article
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="group relative h-full overflow-hidden rounded-3xl border border-[#e8e4d9] bg-[#f6f3ea]/40 p-8 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_56px_-28px_rgba(15,26,20,0.25)]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#3d7a52] via-[#c6b180] to-[#3d7a52] opacity-0 transition-opacity group-hover:opacity-100"
              />
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#3d7a52] ring-1 ring-[#e8e4d9] transition-transform group-hover:rotate-6">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {r.icon}
                </svg>
              </div>
              <h3 className="mt-6 font-serif-display text-[22px] leading-snug text-[#0a120d]">
                {r.title}
              </h3>
              <p
                className="mt-3 text-[15.5px] leading-[1.7] text-[#1a2332]/75"
                dangerouslySetInnerHTML={{ __html: r.body }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Section 3 — Map                                                   */
/* ================================================================== */
function MapSection() {
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
            Find Us
            <span aria-hidden className="h-px w-8 bg-[#3d7a52]/70" />
          </span>
          <h2 className="mt-4 font-serif-display text-[32px] sm:text-[40px] leading-[1.08] tracking-tight text-[#0a120d]">
            730 Sandhill Rd, Suite 120 &middot; Reno, NV 89521
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="mt-12 overflow-hidden rounded-3xl ring-1 ring-[#e8e4d9] shadow-[0_30px_60px_-40px_rgba(10,18,13,0.35)]"
        >
          <iframe
            title="Reno Regenerative Medicine office location"
            src="https://www.google.com/maps?q=730+Sandhill+Rd+Suite+120+Reno+NV+89521&output=embed"
            width="100%"
            height="460"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full border-0"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================== */
export default function RenoOfficeBody() {
  return (
    <>
      <AddressSection />
      <WhyVisitSection />
      <MapSection />
    </>
  );
}
