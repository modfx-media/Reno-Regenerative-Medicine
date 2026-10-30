"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { PageMeta } from "../lib/pageMeta";
import type { SitemapGroup } from "./page";

const ease = [0.22, 1, 0.36, 1] as const;

function labelFor(p: PageMeta): string {
  return (
    p.title.replace(/\s*\|\s*Reno Regenerative Medicine.*$/i, "").trim() ||
    p.title
  );
}

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

type Props = {
  groups: SitemapGroup[];
  posts: PageMeta[];
  totalLinks: number;
};

export default function SitemapBody({ groups, posts, totalLinks }: Props) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const filteredGroups = useMemo(() => {
    if (!q) return groups;
    return groups
      .map((g) => ({
        ...g,
        pages: g.pages.filter(
          (p) =>
            labelFor(p).toLowerCase().includes(q) ||
            p.slug.toLowerCase().includes(q),
        ),
      }))
      .filter((g) => g.pages.length > 0);
  }, [groups, q]);

  const sortedPosts = useMemo(
    () => [...posts].sort((a, b) => labelFor(a).localeCompare(labelFor(b))),
    [posts],
  );

  const filteredPosts = useMemo(() => {
    if (!q) return sortedPosts;
    return sortedPosts.filter(
      (p) =>
        labelFor(p).toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q),
    );
  }, [sortedPosts, q]);

  // Group posts by first letter for an A–Z index
  const postsByLetter = useMemo(() => {
    const map = new Map<string, PageMeta[]>();
    for (const p of filteredPosts) {
      const letter = labelFor(p).charAt(0).toUpperCase();
      const key = /[A-Z]/.test(letter) ? letter : "#";
      const bucket = map.get(key) ?? [];
      bucket.push(p);
      map.set(key, bucket);
    }
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [filteredPosts]);

  const visibleCount =
    filteredGroups.reduce((n, g) => n + g.pages.length, 0) +
    filteredPosts.length;

  const navItems = [
    ...filteredGroups.map((g) => ({
      id: slugify(g.heading),
      label: g.heading,
      count: g.pages.length,
    })),
    ...(filteredPosts.length > 0
      ? [{ id: "journal", label: "Journal", count: filteredPosts.length }]
      : []),
  ];

  return (
    <section className="bg-white">
      {/* ── Intro / search ────────────────────────────────────────────── */}
      <div className="border-b border-[#e8e4d9]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#3d7a52]">
                Site Directory
              </span>
              <h2 className="mt-4 font-serif-display text-[2.25rem] leading-[1.1] text-ink sm:text-5xl">
                Every page on
                <br />
                <span className="italic text-[#3d7a52]">renoregen.com</span>.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/65">
                A complete, human-readable index of the site — services we
                offer, conditions we treat, articles we&apos;ve written, and
                everything in between.
              </p>
            </div>

            <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-[#e8e4d9] bg-[#e8e4d9] text-center">
              <Metric label="Total pages" value={totalLinks} />
              <Metric label="Articles" value={posts.length} />
              <Metric label="Sections" value={groups.length} />
            </dl>
          </div>

          {/* Search */}
          <div className="mt-12 border-t border-[#e8e4d9] pt-8">
            <label className="group relative block">
              <span className="sr-only">Search the sitemap</span>
              <span className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-ink/35 transition-colors group-focus-within:text-[#3d7a52]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the directory…"
                className="w-full border-0 border-b border-transparent bg-transparent pb-3 pl-8 pr-4 font-serif-display text-2xl text-ink placeholder:text-ink/30 outline-none transition-colors focus:border-[#3d7a52] sm:text-3xl"
              />
            </label>
            {q && (
              <p className="mt-3 pl-8 text-sm text-ink/55">
                {visibleCount === 0
                  ? "No matches — try a different term."
                  : `${visibleCount} result${visibleCount === 1 ? "" : "s"}.`}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ── Directory body: sticky nav + long-form lists ──────────────── */}
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[200px_1fr] lg:gap-16">
          {/* Sticky section nav */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.32em] text-ink/45">
                On this page
              </p>
              <ul className="space-y-2.5 border-l border-[#e8e4d9]">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="group flex items-baseline justify-between gap-3 border-l-2 border-transparent pl-4 text-sm text-ink/70 transition-all hover:border-[#3d7a52] hover:pl-5 hover:text-ink"
                    >
                      <span className="truncate">{item.label}</span>
                      <span className="text-[11px] tabular-nums text-ink/35">
                        {item.count}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Content column */}
          <div className="min-w-0 space-y-20">
            {filteredGroups.map((group, gi) => (
              <motion.section
                key={group.heading}
                id={slugify(group.heading)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease, delay: gi * 0.03 }}
                className="scroll-mt-28"
              >
                <header className="flex items-end justify-between gap-6 border-b border-[#0a120d]/15 pb-5">
                  <div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#3d7a52]">
                      §{String(gi + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-serif-display text-3xl text-ink sm:text-[2rem]">
                      {group.heading}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/60">
                      {group.description}
                    </p>
                  </div>
                  <span className="hidden shrink-0 font-serif-display text-3xl tabular-nums text-ink/20 sm:block">
                    {String(group.pages.length).padStart(2, "0")}
                  </span>
                </header>

                <ul className="mt-2 divide-y divide-[#e8e4d9]">
                  {group.pages.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={p.slug}
                        className="group/row flex items-center gap-6 py-4 transition-colors hover:bg-[#f6f3ea]/60"
                      >
                        <span className="flex-1 text-[17px] text-ink/85 transition-colors group-hover/row:text-[#0a120d]">
                          {labelFor(p)}
                        </span>
                        <span className="hidden font-mono text-[12px] tracking-tight text-ink/35 sm:block">
                          {p.slug}
                        </span>
                        <span
                          aria-hidden
                          className="text-ink/30 transition-all group-hover/row:translate-x-1 group-hover/row:text-[#3d7a52]"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.section>
            ))}

            {/* Journal — A–Z index */}
            {filteredPosts.length > 0 && (
              <motion.section
                id="journal"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease }}
                className="scroll-mt-28"
              >
                <header className="flex items-end justify-between gap-6 border-b border-[#0a120d]/15 pb-5">
                  <div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#3d7a52]">
                      Index
                    </span>
                    <h3 className="mt-2 font-serif-display text-3xl text-ink sm:text-[2rem]">
                      Journal
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/60">
                      Every article we&apos;ve published — sorted alphabetically.
                    </p>
                  </div>
                  <span className="hidden shrink-0 font-serif-display text-3xl tabular-nums text-ink/20 sm:block">
                    {String(filteredPosts.length).padStart(2, "0")}
                  </span>
                </header>

                <div className="mt-10 space-y-12">
                  {postsByLetter.map(([letter, items]) => (
                    <div
                      key={letter}
                      className="grid gap-4 sm:grid-cols-[60px_1fr] sm:gap-8"
                    >
                      <div className="font-serif-display text-5xl leading-none text-[#c6b180] sm:text-6xl">
                        {letter}
                      </div>
                      <ul className="divide-y divide-[#e8e4d9] border-t border-[#e8e4d9]">
                        {items.map((post) => (
                          <li key={post.slug}>
                            <Link
                              href={post.slug}
                              className="group/row flex items-center gap-4 py-3 text-[15px] leading-snug text-ink/80 transition-colors hover:text-[#3d7a52]"
                            >
                              <span className="flex-1">{labelFor(post)}</span>
                              <span
                                aria-hidden
                                className="text-ink/25 opacity-0 transition-all group-hover/row:translate-x-0.5 group-hover/row:opacity-100"
                              >
                                →
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Empty state */}
            {filteredGroups.length === 0 && filteredPosts.length === 0 && (
              <div className="rounded-sm border border-dashed border-[#e8e4d9] p-12 text-center">
                <p className="font-serif-display text-2xl text-ink">
                  Nothing found.
                </p>
                <p className="mt-2 text-sm text-ink/55">
                  Try a different keyword, or clear the search.
                </p>
                <button
                  onClick={() => setQuery("")}
                  className="mt-5 text-sm font-medium text-[#3d7a52] underline-offset-4 hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white px-4 py-5">
      <dt className="text-[10px] font-medium uppercase tracking-[0.24em] text-ink/55">
        {label}
      </dt>
      <dd className="mt-1 font-serif-display text-3xl tabular-nums text-ink">
        {value}
      </dd>
    </div>
  );
}
