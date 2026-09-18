"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BOOKING_URL } from "../lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/*  Verbatim header copy from https://renoregen.com/reviews/          */
/*    EXCELLENT                                                       */
/*    Based on 115 reviews                                            */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  Verbatim Google reviews from the live page (in source order)      */
/*  Each review attribution: "Trustindex verifies that the original   */
/*  source of the review is Google."                                  */
/* ------------------------------------------------------------------ */
type Review = { author: string; body: string };

const REVIEWS: Review[] = [
  {
    author: "Nancy Johns",
    body:
      "Four months ago I came in after having neuropathy issues on my feet & ankles from previous Achilles Tendon Surgery. I have seen a huge improvement after receiving stem cell therapy. The staff here has been amazing to work with. Overall I am very impressed and happy with the results so far.",
  },
  {
    author: "William Evans",
    body:
      "Everyone is very Professional, Courteous and Personable. The procedure seems to be helping my feet feel somewhat normal again. I would not hesitate recommending RRM to anyone with Neuropathy issues..",
  },
  {
    author: "John Thom",
    body:
      "Reno regenerative has been great, making me feel welcome at every visit. The staff are very kind and polite. I\u2019m extremely happy with the results I\u2019ve gotten with the shockwave treatment.",
  },
  {
    author: "Lg",
    body:
      "What a great staff! I am so glad I found RRM! I have neuropathy from my chemotherapy treatments. The treatments have helped decrease the inflammation in my feet so I am walking better and have more feeling in them as well. Thank you!",
  },
  {
    author: "Daniel Rohrback",
    body:
      "I started coming here due to feeling constantly tired and sluggish and after a blood test, they found out I have low testosterone. They started me on treatment immediately and WOW! What a difference it makes. I\u2019m so impressed by how much better I feel. I now tell every guy who tells me they feel tired to get checked for low T-levels. Thank you Kellie, Khara, and Karli so much for helping me. HIGHLY RECOMMEND!",
  },
  {
    author: "Sylvia Martin",
    body:
      "After my first visit l did not have the swelling on my right ankle as l usually had every evening\ud83c\udf39",
  },
  {
    author: "Maria Moreno",
    body:
      "I wasn\u2019t holding big expectations when I had the initial interview for treatment. However that was the last resource I had after having lumbar and cervical pain for two years.\n\nAll I want to say is that the treatment was explained with pros and cons from the beginning and I decided to take the risk on spending money towards my well being.\n\nI do not regret the investment on me! the treatment has been the best I have taken! lumbar or cervical surgery is not on the future as all pain from herniated disks are not bothering anymore, I feel rejuvenated and energetic as I was on my 30\u2019s, all I can say is WOW!\n\nI thank all the staff at Reno Regenerative Medicine for the support, the laughs and their support on my recovery!",
  },
  {
    author: "Jim Quackenbush",
    body: "Excellent staff , treat you like a person and not a number",
  },
  {
    author: "Gen Gayo",
    body:
      "I have suffered for years with pain in my hands. I have consulted with several doctors and the last recommendation is to have surgery on both my hands. Because of my decision not to have surgery I continued having pains and not have good use of both my hands until I attended a seminar offered by the Reno Regenerative Medicine. Although the treatment was not covered by my insurance i decided to take the chance and get treated. I would have to say it was the best decision I ever made. With six weeks of treatment, I can feel significant changes in both my hands. Most of the pain the burning, tingling, tightness and numbness have been greatly reduced. Together with the treatment comes a diet that I have followed strictly and I have also noticed that I feel healthier. My total experience is life changing and I feel great not having to bear the pains in my hands everyday. I\u2019m so glad to have found this place to take care of my issues and avoid surgery. I would like to thank all the staff & nurses who are all exceptionally caring. I highly highly recommend Reno Regenerative Medicine.",
  },
  {
    author: "William Curtis",
    body:
      "All of the staff was amazing always made me feel so welcome still does make me feel very welcome come to me during some tough times and overall the whole experience was life-changing I treat myself better I put better things in my body I\u2019m just really glad that I went to these folks very grateful for my experience",
  },
];

/* ================================================================== */
/*  Section 1 — Rating Banner (verbatim)                              */
/* ================================================================== */
function RatingBanner() {
  return (
    <section className="relative bg-[#f6f3ea] py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-[#3d7a52]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-[#c6b180]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1180px] px-6 xl:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#3d7a52]">
              <span aria-hidden className="h-px w-8 bg-[#3d7a52]/70" />
              Patient Reviews
            </span>
            <h2 className="mt-5 font-serif-display text-[40px] sm:text-[52px] leading-[1.04] tracking-tight text-[#0a120d]">
              Real stories. <span className="italic text-[#3d7a52]">Real relief.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[18px] leading-[1.8] text-[#1a2332]/80">
              Wondering if our treatments really work? Read honest reviews from our patients who have found natural relief from daily aches.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#c6b180] px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0a120d] transition-colors hover:bg-[#f3d99a]"
              >
                Book Your Visit Today
              </a>
              <Link
                href="/video-testimonials/"
                className="inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.22em] text-[#13231a] underline decoration-[#c6b180] decoration-2 underline-offset-[6px] hover:text-[#3d7a52]"
              >
                Watch Video Testimonials
              </Link>
            </div>
          </motion.div>

          {/* Right: rating card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a120d] via-[#13231a] to-[#1f3a28] p-10 text-white shadow-[0_40px_80px_-40px_rgba(10,18,13,0.5)]">
              <div aria-hidden className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-[#3d7a52]/20 blur-3xl" />
              <div className="relative text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#f3d99a]">
                  EXCELLENT
                </p>
                <div className="mt-4 flex items-center justify-center gap-1.5 text-[#f3d99a]">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden>
                      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-5 font-serif-display text-[20px] leading-snug text-white/90">
                  Based on 115 reviews
                </p>
                <p className="mt-2 text-[12px] uppercase tracking-[0.24em] text-white/55">
                  Verified by Google &middot; via Trustindex
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
/*  Section 2 — Reviews Wall                                          */
/* ================================================================== */
function ReviewCard({ r, i }: { r: Review; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease, delay: (i % 3) * 0.05 }}
      className="group relative flex h-full break-inside-avoid flex-col overflow-hidden rounded-2xl border border-[#e8e4d9] bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_28px_56px_-28px_rgba(15,26,20,0.25)]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#3d7a52] via-[#c6b180] to-[#3d7a52] opacity-0 transition-opacity group-hover:opacity-100"
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-[#3d7a52]/10 font-serif-display text-[16px] text-[#3d7a52]">
            {r.author
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </div>
          <div>
            <p className="font-serif-display text-[17px] leading-tight text-[#0a120d]">
              {r.author}
            </p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#1a2332]/55">
              Posted on Google
            </p>
          </div>
        </div>
        <div className="flex items-center gap-0.5 text-[#c6b180]">
          {[0, 1, 2, 3, 4].map((s) => (
            <svg key={s} viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
              <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      </div>

      <p className="mt-5 whitespace-pre-line text-[14.5px] leading-[1.75] text-[#1a2332]/80">
        {r.body}
      </p>

      <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-[#1a2332]/45">
        Trustindex verifies that the original source of the review is Google.
      </p>
    </motion.article>
  );
}

function ReviewsWall() {
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
              From Our Patients
            </span>
            <h2 className="mt-4 font-serif-display text-[34px] sm:text-[42px] leading-[1.08] tracking-tight text-[#0a120d]">
              What people are saying.
            </h2>
          </div>
          <p className="max-w-md text-[15.5px] leading-[1.7] text-[#1a2332]/70">
            A selection of recent Google reviews from patients of Reno Regenerative Medicine. Each review is shown verbatim.
          </p>
        </motion.div>

        <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {REVIEWS.map((r, i) => (
            <div key={r.author} className="mb-6 break-inside-avoid">
              <ReviewCard r={r} i={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
export default function ReviewsBody() {
  return (
    <>
      <RatingBanner />
      <ReviewsWall />
    </>
  );
}
