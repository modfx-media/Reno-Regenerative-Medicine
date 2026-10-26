"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BOOKING_URL } from "../lib/constants";
import type { GoogleReview, GoogleReviewsMeta } from "@/lib/reviews";

const ease = [0.22, 1, 0.36, 1] as const;

type Review = { author: string; body: string; when?: string };

type ReviewsBodyProps = {
  reviews: GoogleReview[];
  meta: GoogleReviewsMeta;
};

/* ================================================================== */
/*  Section 1 — Rating Banner (verbatim)                              */
/* ================================================================== */
function RatingBanner({
  rating,
  reviewCount,
  reviewsUrl,
}: {
  rating: number;
  reviewCount: number;
  reviewsUrl: string;
}) {
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
                  {rating.toFixed(1)} on Google
                </p>
                <a
                  href={reviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-[12px] uppercase tracking-[0.24em] text-white/55 hover:text-[#f3d99a] transition-colors"
                >
                  Based on {reviewCount} reviews
                </a>
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
              {r.when ?? "Posted on Google"}
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
        Verified 5-star review from Google
      </p>
    </motion.article>
  );
}

function ReviewsWall({
  reviews,
  reviewsUrl,
}: {
  reviews: Review[];
  reviewsUrl: string;
}) {
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
          <div className="max-w-md">
            <p className="text-[15.5px] leading-[1.7] text-[#1a2332]/70">
              5-star Google reviews from patients of Reno Regenerative Medicine. Each review is shown verbatim.
            </p>
            <a
              href={reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3d7a52] hover:text-[#0a120d]"
            >
              View all Google reviews
              <span aria-hidden>→</span>
            </a>
          </div>
        </motion.div>

        <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {reviews.map((r, i) => (
            <div key={`${r.author}-${i}`} className="mb-6 break-inside-avoid">
              <ReviewCard r={r} i={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
export default function ReviewsBody({ reviews, meta }: ReviewsBodyProps) {
  if (reviews.length === 0) return null;

  const cards: Review[] = reviews.map((review) => ({
    author: review.name,
    body: review.quote,
    when: review.relativeTime ?? "Posted on Google",
  }));

  return (
    <>
      <RatingBanner
        rating={meta.rating}
        reviewCount={meta.reviewCount}
        reviewsUrl={meta.reviewsUrl}
      />
      <ReviewsWall reviews={cards} reviewsUrl={meta.reviewsUrl} />
    </>
  );
}
