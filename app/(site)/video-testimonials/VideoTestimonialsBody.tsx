"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/*  YouTube embeds from https://renoregen.com/video-testimonials/     */
/*  Only currently-available (public) videos are listed.              */
/*  Titles fetched verbatim from YouTube's oEmbed API.                */
/* ------------------------------------------------------------------ */
type Video = { id: string; title: string };

const VIDEOS: Video[] = [
  { id: "Oh-9-Izr-mQ", title: "\u201cI\u2019ve Improved 110%\u201d Get Back To Walking Around With Ease" },
  { id: "wfVCHxGjE5k", title: "Getting Back to Living Life at 100 MPH!" },
  { id: "QLFEixyhqNU", title: "Feeling 10 Years Younger" },
  { id: "AANROX9g21A", title: "Regaining Feeling in Their Feet" },
  { id: "WFIrNsIPOS0", title: "Regaining Mobility in Their Shoulder" },
  { id: "dDSyKoRFwLo", title: "Knee Pain Getting Better and Better Each Day" },
  { id: "NLCHOkcmIPw", title: "Getting Back to MMA Fighting Thanks to Regenerative Medicine" },
  { id: "ZeSj7KxPomU", title: "Severe Arthritis Relief, Thanks to Regenerative Medicine" },
  { id: "wvH_24MCw_8", title: "Relief of Tingling and Numbness after 3 visits!" },
  { id: "Jfp8wKbsRMw", title: "I Can Sleep Through the Night Now!" },
  { id: "kb--frkvwrU", title: "Relief of Tingling and Numbness Symptoms with Regenerative Medicine" },
];

/* ================================================================== */
/*  Section 1 — Intro                                                 */
/* ================================================================== */
function IntroSection() {
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
            Video Testimonials
            <span aria-hidden className="h-px w-8 bg-[#3d7a52]/70" />
          </span>
          <h2 className="mt-5 font-serif-display text-[40px] sm:text-[52px] leading-[1.04] tracking-tight text-[#0a120d]">
            Hear it from our <span className="italic text-[#3d7a52]">patients</span>.
          </h2>
          <p className="mt-7 text-[18px] leading-[1.85] text-[#1a2332]/80">
            Seeing others heal can inspire your own recovery. Watch video testimonials from real people who found relief at Reno Regenerative.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full bg-[#c6b180] px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0a120d] transition-colors hover:bg-[#f3d99a]"
            >
              Contact Us Today
            </Link>
            <Link
              href="/reviews/"
              className="inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.22em] text-[#13231a] underline decoration-[#c6b180] decoration-2 underline-offset-[6px] hover:text-[#3d7a52]"
            >
              Read Written Reviews
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Section 2 — Video Grid                                            */
/* ================================================================== */
function VideoGrid() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-6 xl:px-8">
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
              Patient Stories
            </span>
            <h2 className="mt-4 font-serif-display text-[34px] sm:text-[42px] leading-[1.08] tracking-tight text-[#0a120d]">
              {VIDEOS.length} stories from people just like you.
            </h2>
          </div>
          <p className="max-w-md text-[15.5px] leading-[1.7] text-[#1a2332]/70">
            Watch real patients describe how regenerative care helped them get back to the activities and people they love.
          </p>
        </motion.div>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((v, i) => (
            <motion.li
              key={v.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease, delay: (i % 3) * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-[#e8e4d9] bg-white shadow-[0_24px_48px_-32px_rgba(15,26,20,0.25)] transition-all hover:-translate-y-1 hover:shadow-[0_32px_60px_-32px_rgba(15,26,20,0.35)]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[2px] bg-gradient-to-r from-[#3d7a52] via-[#c6b180] to-[#3d7a52] opacity-0 transition-opacity group-hover:opacity-100"
              />
              <div className="relative aspect-video w-full bg-[#0a120d]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col gap-3 px-5 py-5">
                <p className="font-serif-display text-[17px] leading-snug text-[#0a120d]">
                  {v.title}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d7a52]">
                    Patient Story
                  </p>
                  <a
                    href={`https://www.youtube.com/watch?v=${v.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1a2332]/60 hover:text-[#0a120d]"
                  >
                    Open on YouTube &nbsp;&rarr;
                  </a>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Section 3 — Closing CTA                                           */
/* ================================================================== */
function ClosingCTA() {
  return (
    <section className="bg-[#f6f3ea] py-20 md:py-28">
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
            <div className="md:col-span-8">
              <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#f3d99a]">
                <span aria-hidden className="h-px w-8 bg-[#f3d99a]/70" />
                Ready When You Are
              </span>
              <h2 className="mt-4 font-serif-display text-[32px] sm:text-[42px] leading-[1.08] tracking-tight">
                Imagine your story on this page.
              </h2>
              <p className="mt-5 max-w-xl text-[16px] leading-[1.75] text-white/75">
                The first step is a conversation. Call the office or request an appointment online.
              </p>
            </div>

            <div className="md:col-span-4">
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c6b180] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0a120d] transition-colors hover:bg-[#f3d99a]"
                >
                  Request Appointment
                </Link>
                <a
                  href="tel:+17756839026"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
                >
                  (775) 683-9026
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================== */
export default function VideoTestimonialsBody() {
  return (
    <>
      <IntroSection />
      <VideoGrid />
      <ClosingCTA />
    </>
  );
}
