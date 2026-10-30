"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Step = {
  n: string;
  t: string;
  d: string;
  /* Two stops used for the card glow + number gradient */
  glowFrom: string;
  glowTo: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    n: "01",
    t: "Print &amp; complete forms at home",
    d: "We include the option of printing and completing your new patient forms at home so your first visit is unhurried.",
    glowFrom: "#c6b180",
    glowTo: "#7d6c46",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8M8 17h5" />
      </svg>
    ),
  },
  {
    n: "02",
    t: "Confident on-site diagnosis",
    d: "State of the art X-ray imaging on-site means you&rsquo;re fully informed about your condition before treatment begins.",
    glowFrom: "#4a7c59",
    glowTo: "#1f3a28",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    ),
  },
  {
    n: "03",
    t: "A plan adapted to you",
    d: "Every patient has individualized needs &mdash; treatment plans are adapted to address the uniqueness of each patient.",
    glowFrom: "#8aa67c",
    glowTo: "#2d5a3d",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    n: "04",
    t: "Relief without medication or surgery",
    d: "Effective hands-on care and innovative medicine for patients who want to avoid taking medications or having surgery.",
    glowFrom: "#d4c08a",
    glowTo: "#4a7c59",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative bg-[#0a120d] text-white overflow-hidden">
      {/* Ambient gradients */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 45% at 100% 0%, rgba(31,58,40,0.7) 0%, transparent 60%), radial-gradient(50% 40% at 0% 100%, rgba(198,177,128,0.12) 0%, transparent 60%), linear-gradient(180deg, #0f1a14 0%, #0a120d 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-[#c6b180]">
            <span className="h-px w-6 bg-[#c6b180]/50" />
            New Patients
            <span className="h-px w-6 bg-[#c6b180]/50" />
          </span>
          <h2 className="font-serif-display mt-3 text-[40px] lg:text-[54px] leading-[1.02] tracking-[-0.02em]">
            We <span className="italic text-[#c6b180]">welcome</span> new patients.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-white/75 max-w-xl mx-auto">
            We acknowledge that going to a new place for the first time can be
            nerve racking. We want to do everything we can to eliminate any
            unnecessary stressors. We think of our patients as part of our
            extended family, and we are excited to meet you!
          </p>
        </motion.div>

        {/* Cards */}
        <ol className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease, delay: i * 0.08 }}
              className="group relative h-full flex"
            >
              {/* Outer glow (color-tinted, pulses + intensifies on hover) */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-2 rounded-[28px] blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(60% 60% at 50% 30%, ${s.glowFrom}55 0%, transparent 70%)`,
                }}
                animate={{ opacity: [0.35, 0.55, 0.35] }}
                transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Gradient border ring */}
              <div
                className="relative w-full flex rounded-3xl p-[1px] transition-shadow duration-500 group-hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]"
                style={{
                  background: `linear-gradient(140deg, ${s.glowFrom}80, rgba(255,255,255,0.05) 40%, ${s.glowTo}55)`,
                }}
              >
                {/* Card body */}
                <div className="relative w-full flex flex-col rounded-[calc(1.5rem-1px)] bg-[#0c1612]/90 backdrop-blur-md p-6 overflow-hidden">
                  {/* Inner sheen */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-60"
                    style={{
                      background: `radial-gradient(120% 70% at 0% 0%, ${s.glowFrom}1f 0%, transparent 55%)`,
                    }}
                  />

                  {/* Header row: number + icon chip */}
                  <div className="relative flex items-start justify-between">
                    <div
                      className="font-serif-display text-[44px] leading-none"
                      style={{
                        backgroundImage: `linear-gradient(180deg, ${s.glowFrom}, ${s.glowTo})`,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {s.n}
                    </div>
                    <div
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-white/85 transition-transform duration-500 group-hover:rotate-6"
                      style={{ color: s.glowFrom }}
                      aria-hidden
                    >
                      {s.icon}
                    </div>
                  </div>

                  {/* Thin gradient rule */}
                  <div
                    aria-hidden
                    className="relative mt-5 h-px w-10 transition-all duration-500 group-hover:w-16"
                    style={{
                      background: `linear-gradient(90deg, ${s.glowFrom}, transparent)`,
                    }}
                  />

                  <div
                    className="relative mt-4 font-semibold text-[17px] leading-snug text-white"
                    dangerouslySetInnerHTML={{ __html: s.t }}
                  />
                  <p
                    className="relative mt-2 text-[14px] leading-[1.65] text-white/65"
                    dangerouslySetInnerHTML={{ __html: s.d }}
                  />

                  {/* Connector arrow between cards (desktop) */}
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden
                      className="hidden lg:block absolute top-10 -right-5 text-white/25 group-hover:text-[#c6b180]/70 transition-colors"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
