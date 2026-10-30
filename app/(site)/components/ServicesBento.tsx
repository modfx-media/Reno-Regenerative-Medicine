"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Tile = {
  href: string;
  title: string;
  blurb: string;
  image: string;
  span?: string;
  badge?: string;
};

const tiles: Tile[] = [
  {
    href: "/joint-injections/",
    title: "Joint Injections",
    blurb:
      "Image-guided injections to calm inflammation and restore mobility in knees, shoulders, hips and more.",
    image: "/images/services/joint-injections.jpg",
    span: "lg:col-span-7 lg:row-span-2",
    badge: "Featured",
  },
  {
    href: "/spinal-decompression/",
    title: "Spinal Decompression",
    blurb: "Non-surgical relief for disc, sciatica & low-back pain.",
    image: "/images/services/spinal-decompression.jpg",
    span: "lg:col-span-5",
  },
  {
    href: "/chiropractic-care/",
    title: "Chiropractic Care",
    blurb: "Gentle adjustments that restore alignment and function.",
    image: "/images/services/chiropractic-care.jpg",
    span: "lg:col-span-3",
  },
  {
    href: "/physical-therapy/",
    title: "Therapeutic Exercise",
    blurb: "Movement programs that retrain stability and strength.",
    image: "/images/services/physical-therapy.jpg",
    span: "lg:col-span-2",
  },
  {
    href: "/nutritional-ivs/",
    title: "Nutritional IVs",
    blurb: "Targeted IV nutrient therapy for recovery & energy.",
    image: "/images/services/nutritional-ivs.jpg",
    span: "lg:col-span-3",
  },
  {
    href: "/bioidentical-hormone-optimization-therapy/",
    title: "Hormone Optimization",
    blurb: "Bioidentical hormone therapy for vitality and balance.",
    image: "/images/services/hormones.jpg",
    span: "lg:col-span-3",
  },
  {
    href: "/ed-shockwave-therapy/",
    title: "ED Shockwave Therapy",
    blurb: "Acoustic-wave therapy for sexual health & circulation.",
    image: "/images/services/gainswave.jpg",
    span: "lg:col-span-3",
  },
  {
    href: "/trigger-point-injections/",
    title: "Trigger Point Injections",
    blurb: "Deep-muscle relief for chronic knots and referred pain.",
    image: "/images/services/trigger-point.jpg",
    span: "lg:col-span-3",
  },
];

export default function ServicesBento() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#4a7c59]">
              What We Offer
            </div>
            <h2 className="font-serif-display mt-3 text-[40px] lg:text-[54px] leading-[1.02] tracking-[-0.02em] text-[#1a2332]">
              Our{" "}
              <span className="italic text-[#4a7c59]">Services.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="self-start lg:self-end inline-flex items-center gap-2 rounded-md border border-[#e8e4d9] hover:border-[#4a7c59]/40 hover:bg-[#f6f3ea] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#1a2332] transition-colors"
          >
            View All Services <span aria-hidden>&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 auto-rows-[220px] lg:auto-rows-[230px]">
          {tiles.map((t, i) => {
            const isFeatured = t.span?.includes("row-span-2");
            return (
              <motion.div
                key={t.href + i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease, delay: (i % 4) * 0.06 }}
                className={`group relative overflow-hidden rounded-2xl bg-[#0f1a14] text-white ${
                  t.span ?? ""
                }`}
              >
                <Link
                  href={t.href}
                  className="absolute inset-0 flex flex-col justify-between p-6 lg:p-7"
                >
                  {/* Background image */}
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority={isFeatured}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Gradient overlay for legibility */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-[#0a120d]/95 via-[#0a120d]/55 to-[#0a120d]/15 group-hover:from-[#0a120d]/90 group-hover:via-[#0a120d]/45 transition-colors"
                  />
                  {/* Brand tint wash */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[#4a7c59] mix-blend-multiply opacity-15 group-hover:opacity-10 transition-opacity"
                  />

                  <div className="relative flex items-center justify-between">
                    {t.badge ? (
                      <span className="inline-flex items-center rounded-full bg-[#c6b180] text-[#1a2332] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]">
                        {t.badge}
                      </span>
                    ) : (
                      <span />
                    )}
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white opacity-80 group-hover:opacity-100 group-hover:bg-[#4a7c59] transition-all">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>

                  <div className="relative">
                    <h3
                      className={`font-serif-display leading-tight tracking-[-0.01em] text-white ${
                        isFeatured
                          ? "text-[34px] lg:text-[44px]"
                          : "text-[22px] lg:text-[26px]"
                      }`}
                    >
                      {t.title}
                    </h3>
                    <p className="mt-2 text-[13px] lg:text-[14px] leading-relaxed text-white/85 max-w-md">
                      {t.blurb}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
