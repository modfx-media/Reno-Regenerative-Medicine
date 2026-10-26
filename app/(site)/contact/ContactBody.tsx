"use client";

import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/*  Verbatim from the live site footer/contact area:                  */
/*    Reno Regenerative Medicine                                      */
/*    Phone: (775) 683-9026                                           */
/*    Fax:   (775) 683-9017                                           */
/*    Address: 730 Sandhill Rd Suite 120, Reno, NV 89521              */
/*    Hours:  Mon-Thu 9:00 am - 6:00 pm, Fri/Sat/Sun Closed           */
/* ------------------------------------------------------------------ */

/* ================================================================== */
/*  Section 1 — Intro + Contact Cards                                 */
/* ================================================================== */
const CARDS = [
  {
    label: "Call",
    title: "(775) 683-9026",
    href: "tel:+17756839026",
    sub: "Mon \u2013 Thu \u00b7 9:00 am \u2013 6:00 pm",
    icon: (
      <>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.07 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </>
    ),
  },
  {
    label: "Text",
    title: "(775) 522-3807",
    href: "sms:+17755223807",
    sub: "Quick questions? Send a text.",
    icon: (
      <>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </>
    ),
  },
  {
    label: "Fax",
    title: "(775) 683-9017",
    href: null,
    sub: "Records & referrals",
    icon: (
      <>
        <path d="M6 9V2h12v7" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <path d="M6 14h12v8H6z" />
      </>
    ),
  },
  {
    label: "Visit",
    title: "730 Sandhill Rd, Ste 120",
    href: "https://www.google.com/maps/search/?api=1&query=730+Sandhill+Rd+Suite+120+Reno+NV+89521",
    sub: "Reno, NV 89521",
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

function IntroCardsSection() {
  return (
    <section className="relative bg-[#f6f3ea] py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-[#3d7a52]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-[#c6b180]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1180px] px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#3d7a52]">
            <span aria-hidden className="h-px w-8 bg-[#3d7a52]/70" />
            Get In Touch
          </span>
          <h2 className="mt-5 font-serif-display text-[40px] sm:text-[52px] leading-[1.04] tracking-tight text-[#0a120d]">
            Ready to start your <span className="italic text-[#3d7a52]">healing journey</span>?
          </h2>
          <p className="mt-6 text-[18px] leading-[1.8] text-[#1a2332]/80">
            Reach out to ask about our regenerative therapies in Sparks &amp; Reno, NV. We are here to answer your questions. Call us!
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c, i) => {
            const inner = (
              <>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#3d7a52] via-[#c6b180] to-[#3d7a52] opacity-0 transition-opacity group-hover:opacity-100"
                />
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#f6f3ea] text-[#3d7a52] ring-1 ring-[#e8e4d9] transition-transform group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {c.icon}
                  </svg>
                </div>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#3d7a52]">
                  {c.label}
                </p>
                <p className="mt-2 font-sans font-bold text-[20px] leading-snug text-[#0a120d]">
                  {c.title}
                </p>
                <p className="mt-1 text-[13.5px] leading-[1.6] text-[#1a2332]/65">
                  {c.sub}
                </p>
              </>
            );
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease, delay: i * 0.06 }}
              >
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group relative block h-full overflow-hidden rounded-2xl border border-[#e8e4d9] bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(15,26,20,0.25)]"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-[#e8e4d9] bg-white p-7">
                    {inner}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Section 2 — Form + Office Card                                    */
/* ================================================================== */
function ContactFormSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-6 xl:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#3d7a52]">
              <span aria-hidden className="h-px w-8 bg-[#3d7a52]/70" />
              Send a Message
            </span>
            <h2 className="mt-4 font-serif-display text-[34px] sm:text-[42px] leading-[1.08] tracking-tight text-[#0a120d]">
              Request An Appointment Today
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.7] text-[#1a2332]/70">
              Share a few details below and our team will follow up to confirm a convenient time for your visit.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-[0_8px_32px_-8px_rgba(10,18,13,0.12)] ring-1 ring-[#e8e4d9]">
              <div className="relative" style={{ minHeight: '986px' }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/flo7dcg5mTX6oZqddV3w"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px', minHeight: '986px' }}
                  id="inline-flo7dcg5mTX6oZqddV3w"
                  data-layout={'{"id":"INLINE"}'}
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Website NP Form"
                  data-height="986"
                  data-layout-iframe-id="inline-flo7dcg5mTX6oZqddV3w"
                  data-form-id="flo7dcg5mTX6oZqddV3w"
                  data-cookie-consent="true"
                  data-cookie-consent-provider="auto"
                  title="Website NP Form"
                />
              </div>
            </div>
          </motion.div>

          {/* Office card */}
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
                  Reno Office
                </span>
                <p className="mt-4 font-serif-display text-[26px] leading-snug">
                  Reno Regenerative Medicine
                </p>
                <p className="mt-3 text-[15px] leading-[1.7] text-white/80">
                  730 Sandhill Rd, Suite 120
                  <br />
                  Reno, NV 89521
                </p>

                <div className="mt-6 space-y-3 text-[15px] text-white/85">
                  <p>
                    <span className="text-white/60">Phone: </span>
                    <a href="tel:+17756839026" className="font-semibold hover:text-[#f3d99a]">
                      (775) 683-9026
                    </a>
                  </p>
                  <p>
                    <span className="text-white/60">Fax: </span>
                    <span className="font-semibold">(775) 683-9017</span>
                  </p>
                </div>

                <div className="mt-7 rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f3d99a]">
                    Business Hours
                  </p>
                  <ul className="mt-3 space-y-1.5 text-[14px] text-white/85">
                    <li className="flex justify-between"><span>Monday</span><span>9:00 am &ndash; 6:00 pm</span></li>
                    <li className="flex justify-between"><span>Tuesday</span><span>9:00 am &ndash; 6:00 pm</span></li>
                    <li className="flex justify-between"><span>Wednesday</span><span>9:00 am &ndash; 6:00 pm</span></li>
                    <li className="flex justify-between"><span>Thursday</span><span>9:00 am &ndash; 6:00 pm</span></li>
                    <li className="flex justify-between text-white/55"><span>Friday</span><span>Closed</span></li>
                    <li className="flex justify-between text-white/55"><span>Saturday</span><span>Closed</span></li>
                    <li className="flex justify-between text-white/55"><span>Sunday</span><span>Closed</span></li>
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/reno-office/"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
                  >
                    Visit Reno Office
                  </Link>
                </div>

                <div className="mt-8 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f3d99a]">
                    <span aria-hidden className="h-px w-6 bg-[#f3d99a]/70" />
                    Sister Office
                  </span>
                  <p className="mt-3 font-serif-display text-[20px] leading-snug">
                    Fernley Office &mdash; Ascension Health
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.7] text-white/75">
                    Serving patients in Fernley and Lyon County, NV.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="https://ascensionhealthnv.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://g.page/FernleyChiropractor?share"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
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
            730 Sandhill Rd, Suite 120 &middot; Reno, NV
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
export default function ContactBody() {
  return (
    <>
      <IntroCardsSection />
      <ContactFormSection />
      <MapSection />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}
