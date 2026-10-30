"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TestimonialItem = {
  name: string;
  quote: string;
  when?: string;
};

type TestimonialsProps = {
  items: TestimonialItem[];
  rating: number;
  reviewCount: number;
  reviewsUrl: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

function FloatingDot({ x, y, delay = 0 }: { x: string; y: string; delay?: number }) {
  return (
    <motion.span
      aria-hidden
      className="absolute h-1.5 w-1.5 rounded-full bg-[#c6b180]/70"
      style={{ left: x, top: y }}
      animate={{ y: [0, -14, 0], opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function OrbitRings() {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 400 400"
      className="absolute -top-32 -right-32 w-[460px] h-[460px] opacity-25"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="200" cy="200" r="180" fill="none" stroke="#c6b180" strokeOpacity="0.3" strokeDasharray="2 10" />
      <circle cx="200" cy="200" r="130" fill="none" stroke="#4a7c59" strokeOpacity="0.4" strokeDasharray="1 8" />
      <circle cx="200" cy="20"  r="3" fill="#c6b180" />
    </motion.svg>
  );
}

export default function Testimonials({
  items,
  rating,
  reviewCount,
  reviewsUrl,
}: TestimonialsProps) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reviews = items;
  const r = reviews[i];

  useEffect(() => {
    setI(0);
  }, [reviews.length]);

  // Auto-advance the carousel every 7s unless hovered
  useEffect(() => {
    if (paused || reviews.length === 0) return;
    const id = setInterval(() => setI((v) => (v + 1) % reviews.length), 7000);
    return () => clearInterval(id);
  }, [paused, reviews.length]);

  if (reviews.length === 0 || !r) return null;

  const next = () => setI((v) => (v + 1) % reviews.length);
  const prev = () => setI((v) => (v - 1 + reviews.length) % reviews.length);
  const ratingLabel = rating.toFixed(1);

  return (
    <section
      className="relative isolate overflow-hidden bg-[#0a120d] text-white py-28"
      aria-labelledby="testimonials-heading"
    >
      {/* Soft tinted gradients for depth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(70% 50% at 0% 0%, rgba(74,124,89,0.28) 0%, transparent 60%), radial-gradient(60% 50% at 100% 100%, rgba(198,177,128,0.18) 0%, transparent 65%), linear-gradient(180deg, #0a120d 0%, #0f1a14 100%)",
        }}
      />
      {/* Grain */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <OrbitRings />
      <FloatingDot x="10%" y="20%" delay={0} />
      <FloatingDot x="88%" y="60%" delay={1.4} />
      <FloatingDot x="20%" y="78%" delay={2.6} />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#c6b180]">
            <span className="h-px w-6 bg-[#c6b180]/50" />
            Patient Stories
            <span className="h-px w-6 bg-[#c6b180]/50" />
          </span>
          <h2
            id="testimonials-heading"
            className="mt-4 font-serif-display text-4xl sm:text-5xl"
          >
            What Our <em className="italic text-[#c6b180]">Patients</em> Say
          </h2>
          <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-white/50">
            Verified on Google
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="mt-10 grid grid-cols-2 gap-4 max-w-md mx-auto"
        >
          <a
            href={reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md px-5 py-4 text-center hover:border-[#c6b180]/40 transition-colors"
          >
            <div className="font-serif-display text-3xl text-[#c6b180]">{ratingLabel}★</div>
            <div className="mt-1.5 text-[10px] uppercase tracking-[0.25em] text-white/60">
              {reviewCount} Google Reviews
            </div>
          </a>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md px-5 py-4 text-center">
            <div className="font-serif-display text-3xl text-[#c6b180]">9+</div>
            <div className="mt-1.5 text-[10px] uppercase tracking-[0.25em] text-white/60">
              Years of Healing
            </div>
          </div>
        </motion.div>

        {/* Review card */}
        <div
          className="mt-14 relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md px-6 sm:px-12 py-10 sm:py-14 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]"
          >
            {/* Big animated quote mark */}
            <motion.span
              aria-hidden
              className="absolute -top-8 left-6 sm:left-10 font-serif-display text-[120px] leading-none text-[#c6b180]/30 select-none"
              animate={{ opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              &ldquo;
            </motion.span>

            <div className="min-h-[220px] sm:min-h-[200px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease }}
                  className="text-center"
                >
                  <p className="font-sans text-lg sm:text-xl leading-[1.7] text-white/90 max-w-3xl mx-auto">
                    {r.quote}
                  </p>
                  <footer className="mt-8 flex flex-col items-center gap-3">
                    <div
                      className="flex gap-0.5 text-[#c6b180]"
                      aria-label="5 star rating"
                    >
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <svg
                          key={idx}
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        aria-hidden
                        className="h-9 w-9 rounded-full bg-[#c6b180] text-[#1a2332] grid place-items-center font-semibold text-sm"
                      >
                        {r.name.charAt(0)}
                      </div>
                      <cite className="not-italic text-sm uppercase tracking-[0.25em] text-white/80">
                        {r.name}
                      </cite>
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                      {r.when ?? "Posted on Google"}
                    </p>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Arrow controls */}
            <div className="mt-8 flex items-center justify-between">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 hover:border-[#c6b180] hover:text-[#c6b180] transition-colors"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2.5">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setI(idx)}
                    aria-label={`View testimonial ${idx + 1}`}
                    aria-current={idx === i}
                    className={`relative h-2 rounded-full transition-all ${
                      idx === i
                        ? "w-8 bg-[#c6b180]"
                        : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 hover:border-[#c6b180] hover:text-[#c6b180] transition-colors"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          <Link
            href="/reviews/"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-white/85 hover:text-[#c6b180] border-b border-[#c6b180]/60 hover:border-[#c6b180] pb-1 transition-colors"
          >
            Read All Patient Reviews
            <span aria-hidden>→</span>
          </Link>
          <a
            href={reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-white/70 hover:text-[#c6b180] border-b border-white/20 hover:border-[#c6b180] pb-1 transition-colors"
          >
            View all Google reviews
            <span aria-hidden>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
