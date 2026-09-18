"use client";

import Link from "next/link";
import { useCallback, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { getRelatedPosts, type Post } from "../lib/posts";
import { BOOKING_URL } from "../lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

const CATEGORY_LABELS: Record<string, string> = {
  "regenerative-medicine": "Regenerative Medicine",
  general: "General Wellness",
};

function categoryLabel(c: string): string {
  return CATEGORY_LABELS[c || "general"] ?? c;
}

export type BlogPostShellProps = {
  post: Post;
  /** Estimated read time, e.g. "6 min read". */
  readTime?: string;
  /** Optional short summary shown above the article body. */
  summary?: string;
  /** Override related cards (Ranked posts pass local related articles). */
  relatedPosts?: Post[];
  /** The article body — pass plain JSX (h2, h3, p, ul, etc.). */
  children: ReactNode;
};

/* ================================================================== */
/*  Hero                                                              */
/* ================================================================== */
function PostHero({ post, readTime }: { post: Post; readTime?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a120d] pt-40 pb-24 text-white md:pt-48 md:pb-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a120d]/90 via-[#0a120d]/85 to-[#0a120d]" />
        <div className="absolute -top-32 -right-24 h-[520px] w-[520px] rounded-full bg-[#3d7a52]/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-[520px] w-[520px] rounded-full bg-[#c6b180]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1180px] px-6 xl:px-8">
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/60"
        >
          <Link href="/" className="hover:text-white">Home</Link>
          <span aria-hidden>/</span>
          <Link href="/blog/" className="hover:text-white">Blog</Link>
          <span aria-hidden>/</span>
          <span className="text-white/85 normal-case tracking-normal text-[12px]">{post.title}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: 0.05 }}
          className="mt-8 max-w-3xl"
        >
          <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#f3d99a]">
            <span aria-hidden className="h-px w-8 bg-[#f3d99a]/70" />
            {categoryLabel(post.category)}
          </span>
          <h1 className="mt-5 font-serif-display text-[40px] sm:text-[52px] md:text-[60px] leading-[1.04] tracking-tight text-white">
            {post.title}
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] uppercase tracking-[0.22em] text-white/65">
            <span className="flex items-center gap-2">
              <span aria-hidden className="grid h-8 w-8 place-items-center rounded-full bg-white/10 font-serif-display text-[13px] text-[#f3d99a]">
                R
              </span>
              Reno Regenerative
            </span>
            <span aria-hidden className="hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block" />
            <time>{post.date}</time>
            {readTime ? (
              <>
                <span aria-hidden className="hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block" />
                <span>{readTime}</span>
              </>
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Featured image card (overlapping the hero)                        */
/* ================================================================== */
function FeaturedImage({ post }: { post: Post }) {
  return (
    <div className="relative -mt-16 md:-mt-24">
      <div className="mx-auto w-full max-w-[1080px] px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="overflow-hidden rounded-3xl bg-[#0a120d] shadow-[0_40px_80px_-40px_rgba(10,18,13,0.6)] ring-1 ring-white/10"
        >
          <div className="relative aspect-[16/9] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Body — typography wrapper + sticky share rail                     */
/* ================================================================== */
function BodySection({ post, summary, children }: { post: Post; summary?: string; children: ReactNode }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1080px] px-6 xl:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Sticky meta rail */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-32 space-y-6">
              <ShareRail post={post} />
              <div className="hidden lg:block border-t border-[#e8e4d9] pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3d7a52]">
                  Need Care?
                </p>
                <p className="mt-3 text-[14px] leading-[1.7] text-[#1a2332]/75">
                  Talk to our team about a personalized plan for your pain or recovery goals.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#13231a] underline decoration-[#c6b180] decoration-2 underline-offset-[6px] hover:text-[#3d7a52]"
                >
                  Book an Appointment &rarr;
                </a>
              </div>
            </div>
          </aside>

          {/* Article body */}
          <article className="lg:col-span-9">
            {summary ? (
              <div className="mb-10 rounded-2xl border-l-4 border-[#c6b180] bg-[#f6f3ea] px-7 py-6 font-serif-display text-[19px] leading-[1.6] text-[#13231a]/90">
                {summary}
              </div>
            ) : null}

            <div
              className={[
                "prose-blog max-w-none",
                "[&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:font-serif-display [&_h2]:text-[28px] sm:[&_h2]:text-[32px] [&_h2]:leading-[1.15] [&_h2]:tracking-tight [&_h2]:text-[#0a120d]",
                "[&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:font-serif-display [&_h3]:text-[22px] [&_h3]:leading-[1.2] [&_h3]:tracking-tight [&_h3]:text-[#13231a]",
                "[&_p]:mt-5 [&_p]:text-[17px] [&_p]:leading-[1.85] [&_p]:text-[#1a2332]/85",
                "[&_a]:text-[#3d7a52] [&_a]:underline [&_a]:decoration-[#c6b180] [&_a]:decoration-2 [&_a]:underline-offset-[5px] hover:[&_a]:text-[#0a120d]",
                "[&_strong]:font-semibold [&_strong]:text-[#0a120d]",
                "[&_ul]:mt-5 [&_ul]:space-y-3 [&_ul]:pl-0",
                "[&_ol]:mt-5 [&_ol]:space-y-3 [&_ol]:pl-6 [&_ol]:list-decimal",
                "[&_li]:relative [&_li]:pl-7 [&_li]:text-[16.5px] [&_li]:leading-[1.75] [&_li]:text-[#1a2332]/85",
                "[&_ul>li]:before:content-[''] [&_ul>li]:before:absolute [&_ul>li]:before:left-1 [&_ul>li]:before:top-[0.7em] [&_ul>li]:before:h-[6px] [&_ul>li]:before:w-[6px] [&_ul>li]:before:rounded-full [&_ul>li]:before:bg-[#3d7a52]",
                "[&_:first-child]:mt-0",
              ].join(" ")}
            >
              {children}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ShareRail({ post }: { post: Post }) {
  const [copied, setCopied] = useState(false);

  const getUrl = useCallback(() => {
    if (typeof window !== "undefined") return window.location.href;
    return `https://www.renoregen.com${post.href ?? `/${post.slug}/`}`;
  }, [post.href, post.slug]);

  const openPopup = useCallback((url: string) => {
    if (typeof window === "undefined") return;
    const w = 600;
    const h = 540;
    const left = window.screenX + Math.max(0, (window.outerWidth - w) / 2);
    const top = window.screenY + Math.max(0, (window.outerHeight - h) / 2);
    window.open(url, "share-popup", `width=${w},height=${h},left=${left},top=${top},noopener,noreferrer`);
  }, []);

  const onFacebook = useCallback(() => {
    openPopup(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getUrl())}`);
  }, [getUrl, openPopup]);

  const onX = useCallback(() => {
    const text = encodeURIComponent(post.title);
    openPopup(`https://twitter.com/intent/tweet?url=${encodeURIComponent(getUrl())}&text=${text}`);
  }, [getUrl, openPopup, post.title]);

  const onCopy = useCallback(async () => {
    const url = getUrl();
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const ta = document.createElement("textarea");
        ta.value = url;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* swallow */
    }
  }, [getUrl]);

  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3d7a52]">
        {copied ? "Link Copied" : "Share"}
      </p>
      <div className="mt-3 flex items-center gap-2">
        <ShareIconButton label="Share on Facebook" onClick={onFacebook}>
          <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor">
            <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.27-1.46 1.52-1.46H16.5V4.43A21 21 0 0 0 14.3 4.3c-2.18 0-3.67 1.33-3.67 3.77V10.5H8v3h2.63V21h2.87Z" />
          </svg>
        </ShareIconButton>
        <ShareIconButton label="Share on X" onClick={onX}>
          <svg viewBox="0 0 24 24" aria-hidden className="h-3.5 w-3.5" fill="currentColor">
            <path d="M18.244 2H21l-6.52 7.45L22 22h-6.84l-4.86-6.36L4.6 22H2l7.02-8.02L1.7 2h7.02l4.39 5.81L18.244 2Zm-1.2 18.2h1.5L7.04 3.7H5.46l11.58 16.5Z" />
          </svg>
        </ShareIconButton>
        <ShareIconButton
          label={copied ? "Link copied to clipboard" : "Copy link"}
          onClick={onCopy}
          highlight={copied}
        >
          {copied ? (
            <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.5 10 17.5 19 7.5" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.5 13.5a3.5 3.5 0 0 0 4.95 0l3-3a3.5 3.5 0 0 0-4.95-4.95l-1.2 1.2" />
              <path d="M13.5 10.5a3.5 3.5 0 0 0-4.95 0l-3 3a3.5 3.5 0 0 0 4.95 4.95l1.2-1.2" />
            </svg>
          )}
        </ShareIconButton>
      </div>
    </div>
  );
}

function ShareIconButton({
  label,
  onClick,
  highlight,
  children,
}: {
  label: string;
  onClick: () => void;
  highlight?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={[
        "grid h-9 w-9 place-items-center rounded-full border transition-colors",
        highlight
          ? "border-[#3d7a52] bg-[#3d7a52] text-white"
          : "border-[#e8e4d9] text-[#1a2332]/70 hover:border-[#3d7a52]/50 hover:bg-[#f6f3ea] hover:text-[#0a120d]",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

/* ================================================================== */
/*  Related posts                                                     */
/* ================================================================== */
function RelatedPosts({ post, relatedPosts }: { post: Post; relatedPosts?: Post[] }) {
  const related = relatedPosts ?? getRelatedPosts(post.slug, 3);
  if (related.length === 0) return null;

  return (
    <section className="bg-[#f6f3ea] py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col items-start justify-between gap-6 border-b border-[#0a120d]/10 pb-8 sm:flex-row sm:items-end"
        >
          <div>
            <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#3d7a52]">
              <span aria-hidden className="h-px w-8 bg-[#3d7a52]/70" />
              Keep Reading
            </span>
            <h2 className="mt-4 font-serif-display text-[32px] sm:text-[38px] leading-[1.08] tracking-tight text-[#0a120d]">
              You might also like.
            </h2>
          </div>
          <Link
            href="/blog/"
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#13231a] underline decoration-[#c6b180] decoration-2 underline-offset-[6px] hover:text-[#3d7a52]"
          >
            View All Articles &rarr;
          </Link>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease, delay: (i % 3) * 0.05 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-all hover:-translate-y-1 hover:shadow-[0_28px_56px_-28px_rgba(15,26,20,0.25)]"
            >
              <Link href={p.href ?? `/${p.slug}/`} className="block">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a120d]/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                </div>
              </Link>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d7a52]">
                  {p.date}
                </p>
                <h3 className="font-sans text-[19px] font-semibold leading-[1.35] tracking-[-0.01em] text-[#0a120d] line-clamp-3">
                  <Link href={p.href ?? `/${p.slug}/`} className="transition-colors hover:text-[#3d7a52]">
                    {p.title}
                  </Link>
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  CTA — Inline call-to-action band                                  */
/* ================================================================== */
function PostCTA() {
  return (
    <section className="bg-white pb-20 md:pb-28">
      <div className="mx-auto w-full max-w-[1080px] px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0a120d] via-[#13231a] to-[#1f3a28] p-10 text-white shadow-[0_40px_80px_-40px_rgba(10,18,13,0.5)] md:p-14"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -right-24 h-[400px] w-[400px] rounded-full bg-[#3d7a52]/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-24 h-[400px] w-[400px] rounded-full bg-[#c6b180]/10 blur-3xl" />
          </div>

          <div className="relative grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#f3d99a]">
                <span aria-hidden className="h-px w-8 bg-[#f3d99a]/70" />
                Ready When You Are
              </span>
              <h2 className="mt-4 font-serif-display text-[32px] sm:text-[40px] leading-[1.08] tracking-tight">
                Talk to a doctor about your symptoms.
              </h2>
              <p className="mt-5 max-w-xl text-[16px] leading-[1.75] text-white/75">
                The first step is a conversation. Call our office or request an appointment online.
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c6b180] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0a120d] transition-colors hover:bg-[#f3d99a]"
                >
                  Request Appointment
                </Link>
                <a
                  href="tel:+17756839026"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
                >
                  (775) 683-9026
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================== */
export default function BlogPostShell({ post, readTime, summary, relatedPosts, children }: BlogPostShellProps) {
  return (
    <>
      <Header />
      <main>
        <PostHero post={post} readTime={readTime} />
        <FeaturedImage post={post} />
        <BodySection post={post} summary={summary}>{children}</BodySection>
        <PostCTA />
        <RelatedPosts post={post} relatedPosts={relatedPosts} />
      </main>
      <Footer />
    </>
  );
}
