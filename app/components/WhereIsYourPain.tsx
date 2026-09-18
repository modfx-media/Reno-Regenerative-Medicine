// app/components/WhereIsYourPain.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { BOOKING_URL } from "../lib/constants";

type Region = {
  label: string;
  sub: string;
  href: string;
  /** Pin position as % of the rendered image box */
  x: number;
  y: number;
};

// Image is a 1080x1350 (4:5 portrait) transparent PNG of a back-view torso.
// Pin coords are % of the image (which fills the image wrapper).
const REGIONS: Region[] = [
  { label: "Head & Neck",         sub: "Cervical · Tension",        href: "/conditions/neck-pain/",     x: 50, y: 24 },
  { label: "Shoulder & Clavicle", sub: "Rotator · Impingement",     href: "/conditions/shoulder-pain/", x: 30, y: 36 },
  { label: "Upper Back",          sub: "Thoracic · Postural",       href: "/conditions/back-pain/",     x: 50, y: 41 },
  { label: "Mid-Back",            sub: "Thoracic · Rib",            href: "/conditions/back-pain/",     x: 50, y: 57 },
  { label: "Lower Back",          sub: "Lumbar · Sacral",           href: "/conditions/back-pain/",     x: 52, y: 82 },
  { label: "Elbow, Hand & Wrist", sub: "Carpal · Tennis · Nerve",   href: "/conditions/joint-pain/",    x: 78, y: 72 },
];

const ease = [0.22, 1, 0.36, 1] as const;

/* ---------------- Sparkles + Pin ---------------- */

function Sparkle({ angle, delay }: { angle: number; delay: number }) {
  const rad = (angle * Math.PI) / 180;
  const r = 22;
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

function Pin({
  region,
  active,
  pinRef,
}: {
  region: Region;
  active: boolean;
  pinRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={pinRef}
      className="absolute"
      style={{
        left: `${region.x}%`,
        top: `${region.y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
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
      <motion.span
        aria-hidden
        animate={
          active
            ? { scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }
            : { scale: 1, opacity: 0.5 }
        }
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -inset-2 rounded-full ${
          active ? "bg-[#f3d99a]/40 ring-1 ring-[#f3d99a]/60" : "bg-[#c6b180]/15"
        }`}
      />
      <span
        className={`relative block rounded-full transition-all duration-300 ${
          active
            ? "h-3 w-3 bg-[#fde8b0] shadow-[0_0_18px_4px_rgba(243,217,154,0.85)] ring-2 ring-[#f3d99a]/80"
            : "h-2 w-2 bg-[#c6b180] shadow-[0_0_8px_1px_rgba(198,177,128,0.5)]"
        }`}
      />
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
    </div>
  );
}

/* ---------------- Component ---------------- */

type Conn = { d: string; active: boolean };

export default function WhereIsYourPain() {
  const [active, setActive] = useState<number | null>(null);
  const [conns, setConns] = useState<Conn[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const pinRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Recompute SVG paths whenever layout changes
  const recompute = () => {
    const container = containerRef.current;
    if (!container) return;
    const cBox = container.getBoundingClientRect();
    setSize({ w: cBox.width, h: cBox.height });

    const next: Conn[] = REGIONS.map((_, i) => {
      const card = cardRefs.current[i];
      const pin = pinRefs.current[i];
      if (!card || !pin) return { d: "", active: false };

      const cardBox = card.getBoundingClientRect();
      const pinBox = pin.getBoundingClientRect();

      const sx = cardBox.right - cBox.left;
      const sy = cardBox.top + cardBox.height / 2 - cBox.top;
      const ex = pinBox.left + pinBox.width / 2 - cBox.left;
      const ey = pinBox.top + pinBox.height / 2 - cBox.top;

      // Smooth horizontal-leading bezier
      const dx = Math.max(60, (ex - sx) * 0.5);
      const c1x = sx + dx;
      const c1y = sy;
      const c2x = ex - dx;
      const c2y = ey;

      const d = `M ${sx} ${sy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${ex} ${ey}`;
      return { d, active: false };
    });
    setConns(next);
  };

  useLayoutEffect(() => {
    recompute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onResize = () => recompute();
    window.addEventListener("resize", onResize);
    // small delayed recompute in case fonts/images shift layout after mount
    const t = setTimeout(recompute, 250);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-[#0f1a14] text-white py-24 lg:py-32"
      aria-labelledby="bodymap-heading"
    >
      {/* Ambient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 75% 50%, rgba(198,177,128,0.10) 0%, transparent 70%), radial-gradient(40% 40% at 20% 30%, rgba(74,124,89,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[#c6b180]">
            <span className="h-px w-6 bg-[#c6b180]/60" />
            Conditions Treated
            <span className="h-px w-6 bg-[#c6b180]/60" />
          </span>
          <h2
            id="bodymap-heading"
            className="mt-5 font-serif-display text-5xl sm:text-6xl tracking-[-0.02em]"
          >
            Where Is Your <em className="italic font-medium text-[#f3d99a]">Pain?</em>
          </h2>
          <p className="mt-4 text-white/65">
            Learn how we can help with your pain
          </p>
        </motion.div>

        {/* Flex row: cards on left, image on right (rosswell-style) */}
        <div
          ref={containerRef}
          className="relative mt-14 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20"
          onMouseLeave={() => setActive(null)}
        >
          {/* SVG connector overlay */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden lg:block"
            width={size.w}
            height={size.h}
            viewBox={`0 0 ${size.w || 1} ${size.h || 1}`}
            style={{ zIndex: 5 }}
          >
            {conns.map((c, i) => {
              if (!c.d) return null;
              const isOn = active === i;
              return (
                <path
                  key={i}
                  d={c.d}
                  fill="none"
                  stroke={isOn ? "#f3d99a" : "rgba(245,239,224,0.18)"}
                  strokeWidth={isOn ? 1.4 : 1}
                  strokeDasharray={isOn ? "0" : "4 5"}
                  style={{
                    filter: isOn
                      ? "drop-shadow(0 0 6px rgba(243,217,154,0.6))"
                      : "none",
                    transition: "stroke 240ms ease, stroke-width 240ms ease",
                  }}
                />
              );
            })}
          </svg>

          {/* Cards column — wider, roomier */}
          <ul className="flex flex-col gap-3.5 shrink-0 z-10 w-full max-w-[360px] lg:w-[340px] self-center">
            {REGIONS.map((r, i) => (
              <motion.li
                key={r.label}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="relative"
              >
                {/* Continuous outer glow */}
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute -inset-1.5 rounded-2xl blur-xl"
                  style={{
                    background:
                      "radial-gradient(60% 70% at 50% 50%, rgba(243,217,154,0.28) 0%, rgba(74,124,89,0.18) 55%, transparent 75%)",
                  }}
                  animate={{ opacity: [0.45, 0.85, 0.45] }}
                  transition={{
                    duration: 4 + (i % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.25,
                  }}
                />

                <Link
                  href={r.href}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`group relative z-10 block overflow-hidden rounded-xl border px-5 py-4 transition-all duration-300 ${
                    active === i
                      ? "border-[#f3d99a]/70 bg-white/[0.07] shadow-[0_0_28px_-4px_rgba(243,217,154,0.6)]"
                      : "border-white/10 bg-white/[0.04] hover:bg-white/[0.06] hover:border-white/25 shadow-[0_0_18px_-6px_rgba(243,217,154,0.35)]"
                  }`}
                >
                  {/* Animated inner sheen */}
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(243,217,154,0.10) 50%, transparent 100%)",
                    }}
                    animate={{ x: ["0%", "260%"] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.6,
                    }}
                  />
                  {/* Left accent bar */}
                  <span
                    aria-hidden
                    className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full transition-colors duration-300 ${
                      active === i ? "bg-[#f3d99a]" : "bg-[#f3d99a]/40"
                    }`}
                  />

                  <div
                    className={`relative text-[15px] uppercase tracking-[0.22em] font-semibold transition-colors ${
                      active === i ? "text-[#f3d99a]" : "text-white"
                    }`}
                  >
                    {r.label}
                  </div>
                  <div className="relative text-[14px] tracking-wide text-white/65 mt-1.5">
                    {r.sub}
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Image — sized to fit */}
          <div className="relative shrink-0 w-[min(480px,90vw)] lg:w-[580px] xl:w-[620px]">
            <div className="relative w-full" style={{ aspectRatio: "1080 / 1350" }}>
              {/* Pedestal glow */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(45% 55% at 50% 55%, rgba(243,217,154,0.18) 0%, transparent 70%)",
                }}
              />
              <Image
                src="/images/Where-Is-Your-Pain.png"
                alt="Human anatomy illustration showing common pain regions treated at Reno Regenerative Medicine"
                fill
                sizes="(min-width: 1280px) 620px, (min-width: 1024px) 580px, 90vw"
                className="object-contain select-none pointer-events-none"
                style={{
                  filter: "drop-shadow(0 0 36px rgba(74,158,255,0.25))",
                }}
                onLoadingComplete={recompute}
                priority
              />
              {/* Pins */}
              <div className="absolute inset-0">
                {REGIONS.map((r, i) => (
                  <Pin
                    key={r.label}
                    region={r}
                    active={active === i}
                    pinRef={(el) => {
                      pinRefs.current[i] = el;
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease, delay: 0.15 }}
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
        </motion.div>
      </div>
    </section>
  );
}
