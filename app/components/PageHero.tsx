"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export type Crumb = {
  label: string;
  href?: string; // omit href on the current page
};

export type PageHeroProps = {
  /** Main headline (h1). */
  title: string;
  /** Optional supporting line under the title. */
  subtitle?: string;
  /** Tiny eyebrow above the headline (e.g. "Service", "Condition"). */
  eyebrow?: string;
  /** Background image path (under /public) or absolute URL. */
  image: string;
  /** Alt text for the background image (decorative defaults are fine). */
  imageAlt?: string;
  /** Breadcrumb trail from Home → current page. */
  breadcrumbs?: Crumb[];
  /** Override CTA href (defaults to /appointments). */
  ctaHref?: string;
  /** Override CTA label. */
  ctaLabel?: string;
  /** Hide the CTA button (e.g. on the appointments page itself). */
  showCta?: boolean;
  /** Vertical density. */
  size?: "sm" | "md" | "lg";
};

const ease = [0.22, 1, 0.36, 1] as const;

const sizes: Record<NonNullable<PageHeroProps["size"]>, string> = {
  sm: "min-h-[320px] py-16 md:py-20",
  md: "min-h-[420px] py-20 md:py-28",
  lg: "min-h-[520px] py-24 md:py-36",
};

export default function PageHero({
  title,
  subtitle,
  eyebrow,
  image,
  imageAlt = "",
  breadcrumbs,
  ctaHref = "/appointments",
  ctaLabel = "Request Appointment",
  showCta = true,
  size = "md",
}: PageHeroProps) {
  const breadcrumbJsonLd =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            ...(c.href
              ? {
                  item: c.href.startsWith("http")
                    ? c.href
                    : `https://www.renoregen.com${c.href === "/" ? "/" : c.href.endsWith("/") ? c.href : `${c.href}/`}`,
                }
              : {}),
          })),
        }
      : null;

  return (
    <section
      className={`relative isolate w-full overflow-hidden bg-[#0a120d] text-white ${sizes[size]}`}
    >
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      {/* Background image */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center -z-20"
      />

      {/* Dark overlays for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a120d]/85 via-[#0a120d]/70 to-[#0a120d]/85"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a120d]/70 via-transparent to-[#0a120d]/40"
      />

      {/* Gold hairline at the bottom */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#c6b180]/70 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 xl:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-6"
          >
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] uppercase tracking-[0.18em] text-white/70">
              {breadcrumbs.map((c, i) => {
                const isLast = i === breadcrumbs.length - 1;
                return (
                  <li key={`${c.label}-${i}`} className="flex items-center gap-2">
                    {c.href && !isLast ? (
                      <Link
                        href={c.href}
                        className="hover:text-[#c6b180] transition-colors"
                      >
                        {c.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-[#c6b180]">
                        {c.label}
                      </span>
                    )}
                    {!isLast && <span className="text-white/40">/</span>}
                  </li>
                );
              })}
            </ol>
          </motion.nav>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.05 }}
            className="mb-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c6b180]"
          >
            <span aria-hidden className="h-px w-6 bg-[#c6b180]/70" />
            {eyebrow}
          </motion.p>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: 0.1 }}
          className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="mt-5 max-w-2xl text-[17px] leading-[1.7] text-white/85"
          >
            {subtitle}
          </motion.p>
        )}

        {/* CTA */}
        {showCta && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="mt-8"
        >
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#4a7c59] to-[#3d7a52] hover:from-[#3d7a52] hover:to-[#2e5e3f] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_18px_40px_-18px_rgba(74,124,89,0.85)] transition-colors"
          >
            {ctaLabel}
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
          </Link>
        </motion.div>
        )}
      </div>
    </section>
  );
}
