"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FadeIn from "./FadeIn";
import { BOOKING_URL } from "../lib/constants";

type Region = {
  label: string;
  sub: string;
  href: string;
  // pin coordinates as % of the image container
  x: number;
  y: number;
};

const REGIONS: Region[] = [
  {
    label: "Head & Neck",
    sub: "Cervical · Tension",
    href: "/conditions/neck-pain/",
    x: 52,
    y: 11,
  },
  {
    label: "Upper Back",
    sub: "Thoracic · Postural",
    href: "/conditions/back-pain/",
    x: 50,
    y: 26,
  },
  {
    label: "Shoulder & Clavicle",
    sub: "Rotator · Impingement",
    href: "/conditions/shoulder-pain/",
    x: 36,
    y: 23,
  },
  {
    label: "Mid-Back",
    sub: "Thoracic · Rib",
    href: "/conditions/back-pain/",
    x: 52,
    y: 44,
  },
  {
    label: "Lower Back",
    sub: "Lumbar · Sacral",
    href: "/conditions/back-pain/",
    x: 52,
    y: 60,
  },
  {
    label: "Elbow, Hand & Wrist",
    sub: "Carpal · Tennis · Nerve",
    href: "/conditions/joint-pain/",
    x: 22,
    y: 54,
  },
  {
    label: "Knee & Joint",
    sub: "Meniscus · Cartilage",
    href: "/conditions/knee-pain/",
    x: 46,
    y: 88,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function Sparkle({ angle, delay }: { angle: number; delay: number }) {
  const rad = (angle * Math.PI) / 180;
  const r = 24;
  const dx = Math.cos(rad) * r;
  const dy = Math.sin(rad) * r;
  return (
    <motion.span
      aria-hidden
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: [0, dx, dx * 1.4],
        y: [0, dy, dy * 1.4],
      }}
      transition={{
        duration: 1.4,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
      className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f3d99a] shadow-[0_0_8px_2px_rgba(243,217,154,0.9)]"
    />
  );
}

function Pin({ region, active }: { region: Region; active: boolean }) {
  return (
    <div
      className="absolute"
      style={{
        left: `${region.x}%`,
        top: `${region.y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Outer glow halo */}
      <motion.span
        aria-hidden
        animate={
          active
            ? { scale: [1, 1.6, 1], opacity: [0.55, 0.9, 0.55] }
            : { scale: 1, opacity: 0.25 }
        }
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -inset-5 rounded-full blur-md ${
          active ? "bg-[#f3d99a]" : "bg-[#c6b180]/40"
        }`}
      />

      {/* Inner glow ring */}
      <motion.span
        aria-hidden
        animate={
          active
            ? { scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }
            : { scale: 1, opacity: 0.5 }
        }
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -inset-2 rounded-full ${
          active
            ? "bg-[#f3d99a]/40 ring-1 ring-[#f3d99a]/60"
            : "bg-[#c6b180]/15"
        }`}
      />

      {/* Core dot */}
      <span
        className={`relative block rounded-full transition-all duration-300 ${
          active
            ? "h-3 w-3 bg-[#fde8b0] shadow-[0_0_18px_4px_rgba(243,217,154,0.85)] ring-2 ring-[#f3d99a]/80"
            : "h-2 w-2 bg-[#c6b180] shadow-[0_0_8px_1px_rgba(198,177,128,0.5)]"
        }`}
      />

      {/* Sparkles when active */}
      <AnimatePresence>
        {active && (
          <motion.span
            key="sparks"
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[0, 60, 120, 180, 240, 300].map((a, i) => (
              <Sparkle key={a} angle={a} delay={i * 0.12} />
            ))}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Leader line going left toward the list */}
      <AnimatePresence>
        {active && (
          <motion.span
            key="leader"
            aria-hidden
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.45, ease }}
            style={{ transformOrigin: "right center" }}
            className="absolute right-full top-1/2 -translate-y-1/2 mr-1 h-px w-[140px] sm:w-[200px] bg-gradient-to-l from-[#f3d99a] to-transparent"
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BodyMapSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      className="relative overflow-hidden bg-[#0f1a14] text-white py-24 lg:py-32"
      aria-labelledby="bodymap-heading"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 75% 50%, rgba(198,177,128,0.10) 0%, transparent 70%), radial-gradient(40% 40% at 20% 30%, rgba(74,124,89,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <FadeIn className="text-center">
          <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[#c6b180]">
            <span className="h-px w-6 bg-[#c6b180]/60" />
            Conditions Treated
            <span className="h-px w-6 bg-[#c6b180]/60" />
          </span>
          <h2
            id="bodymap-heading"
            className="mt-5 font-serif-display text-5xl sm:text-6xl tracking-[-0.02em]"
          >
            Where Is Your{" "}
            <em className="italic font-medium text-[#f3d99a]">Pain?</em>
          </h2>
          <p className="mt-4 text-white/65">
            Learn how we can help with your pain
          </p>
        </FadeIn>

        <div className="relative mt-16 grid gap-10 lg:grid-cols-12 items-center">
          {/* Left list */}
          <ul
            className="lg:col-span-5 space-y-3 max-w-md mx-auto lg:mx-0 w-full"
            onMouseLeave={() => setActive(null)}
          >
            {REGIONS.map((r, i) => (
              <motion.li
                key={r.label}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
              >
                <Link
                  href={r.href}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`group block rounded-2xl border px-5 py-3.5 transition-all duration-300 ${
                    active === i
                      ? "border-[#f3d99a]/60 bg-white/[0.06] shadow-[0_0_25px_-5px_rgba(243,217,154,0.35)]"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-white/20"
                  }`}
                >
                  <div
                    className={`text-[11px] uppercase tracking-[0.22em] font-semibold transition-colors ${
                      active === i ? "text-[#f3d99a]" : "text-white/95"
                    }`}
                  >
                    {r.label}
                  </div>
                  <div className="text-[11px] tracking-wider text-white/45 mt-1">
                    {r.sub}
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Right image with pins */}
          <FadeIn
            delay={0.15}
            y={30}
            className="lg:col-span-7 relative aspect-[4/5] w-full max-w-xl mx-auto"
          >
            {/* Soft pedestal glow behind figure */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  "radial-gradient(50% 60% at 50% 55%, rgba(243,217,154,0.10) 0%, transparent 70%)",
              }}
            />
            <Image
              src="/Images/Where-Is-Your-Pain.png"
              alt="Human anatomy illustration showing common pain regions treated at Reno Regenerative Medicine"
              fill
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-contain select-none pointer-events-none"
            />

            {/* Pins layer */}
            <div className="absolute inset-0">
              {REGIONS.map((r, i) => (
                <Pin key={r.label} region={r} active={active === i} />
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn
          delay={0.2}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[#f5efe0] px-7 py-3.5 text-sm font-medium text-[#0f1a14] hover:bg-[#f3d99a] transition-colors"
          >
            Book a Consultation
          </a>
          <span className="text-sm text-white/55">
            Free consultation available
          </span>
        </FadeIn>
      </div>
    </section>
  );
}
