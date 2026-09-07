"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Post } from "../lib/posts";

const ease = [0.22, 1, 0.36, 1] as const;

const CATEGORY_LABELS: Record<string, string> = {
  all: "All Posts",
  "regenerative-medicine": "Regenerative Medicine",
  general: "General Wellness",
};

function categoryLabel(c: string): string {
  return CATEGORY_LABELS[c || "general"] ?? c;
}

/* ================================================================== */
/*  Section 1 — Featured / Latest                                     */
/* ================================================================== */
function FeaturedSection({ post }: { post: Post }) {
  return (
    <section className="relative bg-[#f6f3ea] py-20 md:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-[#3d7a52]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-[#c6b180]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#3d7a52]">
              <span aria-hidden className="h-px w-8 bg-[#3d7a52]/70" />
              Latest from the Journal
            </span>
            <h2 className="mt-4 font-serif-display text-[36px] sm:text-[44px] leading-[1.05] tracking-tight text-[#0a120d]">
              Wellness &amp; pain management <em className="italic text-[#3d7a52]">insights</em>.
            </h2>
          </div>
          <p className="max-w-md text-[15.5px] leading-[1.7] text-[#1a2332]/70">
            Navigating your health can feel overwhelming. We share pain relief and wellness insights to help you understand your body better.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="group relative grid overflow-hidden rounded-3xl bg-white shadow-[0_40px_80px_-50px_rgba(10,18,13,0.4)] ring-1 ring-[#e8e4d9] md:grid-cols-12"
        >
          <Link href={post.href ?? `/${post.slug}/`} className="relative md:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-auto md:h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                loading="eager"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0a120d]/60 via-[#0a120d]/0 to-transparent" />
              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0a120d]">
                Featured
              </span>
            </div>
          </Link>

          <div className="flex flex-col justify-center gap-6 p-8 md:col-span-5 md:p-12">
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d7a52]">
              <span>{categoryLabel(post.category)}</span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-[#1a2332]/30" />
              <span className="text-[#1a2332]/55">{post.date}</span>
            </div>

            <h3 className="font-serif-display text-[28px] sm:text-[32px] leading-[1.12] tracking-tight text-[#0a120d]">
              <Link href={post.href ?? `/${post.slug}/`} className="transition-colors hover:text-[#3d7a52]">
                {post.title}
              </Link>
            </h3>

            <p className="text-[16px] leading-[1.75] text-[#1a2332]/75">{post.excerpt}…</p>

            <div>
              <Link
                href={post.href ?? `/${post.slug}/`}
                className="inline-flex items-center gap-2 rounded-full bg-[#c6b180] px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0a120d] transition-colors hover:bg-[#f3d99a]"
              >
                Read Article &rarr;
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Section 2 — Filter + Grid                                         */
/* ================================================================== */
function PostCard({ post, index }: { post: Post; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease, delay: (index % 3) * 0.05 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8e4d9] bg-white transition-all hover:-translate-y-1 hover:shadow-[0_28px_56px_-28px_rgba(15,26,20,0.25)]"
    >
      <Link href={post.href ?? `/${post.slug}/`} className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a120d]/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.05]"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d7a52]">
          <span>{categoryLabel(post.category)}</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-[#1a2332]/30" />
          <span className="text-[#1a2332]/55">{post.date}</span>
        </div>

        <h3 className="font-sans text-[20px] sm:text-[21px] font-semibold leading-[1.35] tracking-[-0.01em] text-[#0a120d] line-clamp-3">
          <Link href={post.href ?? `/${post.slug}/`} className="transition-colors hover:text-[#3d7a52]">
            {post.title}
          </Link>
        </h3>

        <p className="text-[15px] leading-[1.7] text-[#1a2332]/75">
          {post.excerpt.length > 150 ? post.excerpt.slice(0, 150).trimEnd() + "…" : post.excerpt + "…"}
        </p>

        <div className="mt-auto pt-2">
          <Link
            href={post.href ?? `/${post.slug}/`}
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#13231a] underline decoration-[#c6b180] decoration-2 underline-offset-[6px] transition-colors hover:text-[#3d7a52]"
          >
            Read More &rarr;
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function GridSection({ posts }: { posts: Post[] }) {
  const categories = useMemo(() => {
    const set = new Set<string>(["all"]);
    posts.forEach((p) => set.add(p.category || "general"));
    return Array.from(set);
  }, [posts]);

  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    if (active === "all") return posts;
    return posts.filter((p) => (p.category || "general") === active);
  }, [posts, active]);

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
              Browse the Journal
            </span>
            <h2 className="mt-4 font-serif-display text-[34px] sm:text-[42px] leading-[1.08] tracking-tight text-[#0a120d]">
              All articles &amp; updates.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={`inline-flex items-center rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors ${
                    isActive
                      ? "bg-[#0a120d] text-white"
                      : "border border-[#e8e4d9] text-[#1a2332]/70 hover:border-[#0a120d]/30 hover:text-[#0a120d]"
                  }`}
                >
                  {categoryLabel(c)}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <PostCard key={p.slug} post={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
export default function BlogIndexBody({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return (
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1280px] px-6 xl:px-8">
          <p className="text-[16px] leading-[1.75] text-[#1a2332]/75">
            New articles will appear here as they are published.
          </p>
        </div>
      </section>
    );
  }

  const [featured, ...rest] = posts;
  return (
    <>
      <FeaturedSection post={featured} />
      <GridSection posts={rest} />
    </>
  );
}
