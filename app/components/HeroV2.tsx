"use client";

import ScrollLink from "./ScrollLink";
import { motion } from "framer-motion";
import MotionOrbs from "./MotionOrbs";

const ease = [0.22, 1, 0.36, 1] as const;

const STATS = [
  { value: "9", label: "Years of care" },
  { value: "4.8★", label: "200+ Google reviews" },
  { value: "On-site", label: "X-ray imaging" },
  { value: "Same-week", label: "New patient visits" },
];

const FLOATING_CHIPS = [
  { label: "Regenerative Medicine", x: "6%", y: "22%", delay: 0.6 },
  { label: "Spinal Decompression", x: "74%", y: "26%", delay: 0.9 },
  { label: "Joint Injections", x: "9%", y: "70%", delay: 1.1 },
  { label: "Bioidentical Hormones", x: "70%", y: "74%", delay: 1.3 },
];

/* Animated heartbeat / EKG line */
function PulseLine() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 120"
      className="w-full h-16 sm:h-20"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c6b180" stopOpacity="0" />
          <stop offset="20%" stopColor="#c6b180" stopOpacity="1" />
          <stop offset="80%" stopColor="#4a7c59" stopOpacity="1" />
          <stop offset="100%" stopColor="#4a7c59" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0 60 L120 60 L150 60 L170 30 L195 90 L215 20 L240 100 L265 60 L420 60 L445 40 L470 80 L500 60 L640 60 L665 30 L690 90 L715 60 L800 60"
        fill="none"
        stroke="url(#pulseGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease, delay: 0.4 }}
      />
    </svg>
  );
}

/* Soft animated rings, top-right */
function OrbitRings() {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 400 400"
      className="absolute -top-24 -right-24 w-[460px] h-[460px] opacity-40"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="200" cy="200" r="180" fill="none" stroke="#c6b180" strokeOpacity="0.25" strokeDasharray="2 8" />
      <circle cx="200" cy="200" r="140" fill="none" stroke="#4a7c59" strokeOpacity="0.35" strokeDasharray="1 10" />
      <circle cx="200" cy="200" r="100" fill="none" stroke="#c6b180" strokeOpacity="0.2" />
      <circle cx="200" cy="20" r="4" fill="#c6b180" />
      <circle cx="340" cy="200" r="3" fill="#4a7c59" />
    </motion.svg>
  );
}

export default function HeroV2() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0f1a14] text-white">
      {/* Background video */}
      <video
        aria-hidden
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/videos/hero-poster.jpg"
        className="absolute inset-0 -z-30 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark + gradient overlays for legibility */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-[#0a120d]/75" />
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(120% 80% at 80% 0%, rgba(31,58,40,0.6) 0%, transparent 60%), radial-gradient(80% 60% at 0% 100%, rgba(45,90,61,0.55) 0%, transparent 55%), linear-gradient(180deg, rgba(15,26,20,0.55) 0%, rgba(10,18,13,0.95) 100%)",
        }}
      />

      {/* Animated motion orbs + grain */}
      <MotionOrbs className="-z-10 opacity-50" tone="warm" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Decorative orbiting rings */}
      <OrbitRings />

      {/* Floating service chips (hidden on mobile so copy stays clean) */}
      <div aria-hidden className="hidden lg:block absolute inset-0 -z-[5] pointer-events-none">
        {FLOATING_CHIPS.map((chip) => (
          <motion.div
            key={chip.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.8, ease, delay: chip.delay },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: chip.delay },
            }}
            className="absolute rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/80"
            style={{ left: chip.x, top: chip.y }}
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#c6b180] align-middle" />
            {chip.label}
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 pt-24 pb-28 lg:pt-32 lg:pb-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[#c6b180]"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c6b180] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#c6b180]" />
          </span>
          Knee, Back &amp; Joint Pain Clinic &middot; Reno, Nevada
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          className="font-serif-display mt-7 text-[44px] sm:text-[64px] lg:text-[84px] leading-[0.98] tracking-[-0.02em] text-white"
        >
          Welcome to <span className="italic font-medium text-[#c6b180]">Reno Regenerative</span> Medicine.
        </motion.h1>

        {/* Animated pulse line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-3xl"
        >
          <PulseLine />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.25 }}
          className="mx-auto mt-2 max-w-2xl text-[17px] leading-[1.7] text-white/75"
        >
          A welcoming and relaxed environment for innovative and integrative
          medicine &mdash; helping patients with sciatica, neuropathy, arthritis,
          whiplash and musculoskeletal pain across Northern Nevada and surrounding
          California communities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.38 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <ScrollLink
            href="/contact/"
            className="group inline-flex items-center gap-2 rounded-md bg-[#4a7c59] hover:bg-[#3d7a52] px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_30px_-10px_rgba(74,124,89,0.7)] transition-colors"
          >
            Request Appointment
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </ScrollLink>
          <a
            href="tel:+17756839026"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 hover:border-white/40 hover:bg-white/5 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            (775) 683-9026
          </a>
        </motion.div>

        {/* Animated stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.55 }}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.6 + i * 0.08 }}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 text-left"
            >
              <div className="font-serif-display text-[22px] leading-none text-[#c6b180]">
                {s.value}
              </div>
              <div className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-white/60">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade-into-page */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#0a120d]"
      />
    </section>
  );
}
