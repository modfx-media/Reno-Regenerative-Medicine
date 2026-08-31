"use client";

import ScrollLink from "./ScrollLink";
import { motion } from "framer-motion";

export type CTASectionProps = {
  /** Override the headline. */
  title?: string;
  /** Override the supporting line. */
  subtitle?: string;
  /** Override the primary CTA href. */
  primaryHref?: string;
  /** Override the primary CTA label. */
  primaryLabel?: string;
  /** Override the phone number string shown on the outlined button. */
  phone?: string;
  /** Override the tel: target (digits, no spaces). Defaults to +17756839026. */
  phoneHref?: string;
  /** Hide the primary CTA button (e.g. on the appointments page itself). */
  showPrimary?: boolean;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function CTASection({
  title = "Ready to Start Your Healing Journey?",
  subtitle = "Serving Northern Nevada and surrounding California communities",
  primaryHref = "/appointments",
  primaryLabel = "Request Appointment",
  phone = "(775) 683-9026",
  phoneHref = "+17756839026",
  showPrimary = true,
}: CTASectionProps) {
  return (
    <section
      aria-labelledby="cta-section-heading"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#0a120d] via-[#13231a] to-[#1f3a28] text-white"
    >
      {/* Soft radial accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-[#4a7c59]/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-20 h-[460px] w-[460px] rounded-full bg-[#c6b180]/15 blur-3xl"
      />

      {/* Gold hairlines */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#c6b180]/70 to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#c6b180]/70 to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease }}
        className="relative mx-auto w-full max-w-[1100px] px-6 xl:px-8 py-20 md:py-28 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease, delay: 0.05 }}
          className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c6b180]"
        >
          <span aria-hidden className="h-px w-6 bg-[#c6b180]/70" />
          Get Started
          <span aria-hidden className="h-px w-6 bg-[#c6b180]/70" />
        </motion.span>

        <motion.h2
          id="cta-section-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease, delay: 0.1 }}
          className="mt-5 font-serif-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease, delay: 0.18 }}
            className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.7] text-white/80"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease, delay: 0.26 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {showPrimary && (
          <ScrollLink
            href={primaryHref}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#4a7c59] to-[#3d7a52] hover:from-[#3d7a52] hover:to-[#2e5e3f] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_18px_40px_-18px_rgba(74,124,89,0.85)] transition-colors"
          >
            {primaryLabel}
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              aria-hidden
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ScrollLink>
          )}

          <a
            href={`tel:${phoneHref}`}
            aria-label={`Call ${phone}`}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#c6b180]/70 bg-transparent px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#f3d99a] hover:bg-[#c6b180]/15 hover:border-[#c6b180] transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Call {phone}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
