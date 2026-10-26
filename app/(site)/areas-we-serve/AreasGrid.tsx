"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import type { Location } from "@/app/(site)/lib/pseo/locations";
import type { PseoService } from "@/app/(site)/lib/pseo/services";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  counties: string[];
  byCounty: Record<string, Location[]>;
  services: PseoService[];
  totalLocations: number;
};

export default function AreasGrid({
  counties,
  byCounty,
  services,
  totalLocations,
}: Props) {
  const [activeService, setActiveService] = useState<string>("all");
  const [query, setQuery] = useState("");

  const visibleServices = useMemo(
    () =>
      activeService === "all"
        ? services
        : services.filter((s) => s.slug === activeService),
    [activeService, services],
  );

  const filteredCounties = useMemo(() => {
    if (!query.trim()) return counties;
    const q = query.trim().toLowerCase();
    return counties.filter((c) =>
      byCounty[c].some(
        (l) =>
          l.city.toLowerCase().includes(q) ||
          l.county.toLowerCase().includes(q) ||
          l.zip.includes(q),
      ),
    );
  }, [counties, byCounty, query]);

  const totalCombos = totalLocations * services.length;

  return (
    <>
      {/* ── STATS STRIP ── */}
      <section className="bg-[#f6f3ea]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {[
              { n: `${totalLocations}+`, l: "Cities Served" },
              { n: services.length.toString(), l: "Care Services" },
              { n: `${totalCombos}+`, l: "Local Care Pages" },
              { n: "300mi", l: "Service Radius" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-stone-200 bg-white p-5 text-center"
              >
                <div className="text-3xl font-semibold text-[#1a2332]">
                  {s.n}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-stone-500">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <section className="bg-[#f6f3ea]">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease, delay: 0.05 }}
            className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-sm"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <label
                  htmlFor="city-search"
                  className="block text-xs uppercase tracking-[0.18em] text-stone-500 mb-2"
                >
                  Find your city
                </label>
                <input
                  id="city-search"
                  type="search"
                  inputMode="search"
                  placeholder="Search by city, county, or ZIP…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full rounded-full border border-stone-300 bg-white px-5 py-3 text-sm text-stone-800 placeholder:text-stone-400 outline-none focus:border-[#3d7a52] focus:ring-2 focus:ring-[#3d7a52]/20"
                />
              </div>
            </div>

            <div className="mt-5">
              <div className="text-xs uppercase tracking-[0.18em] text-stone-500 mb-3">
                Filter by service
              </div>
              <div className="flex flex-wrap gap-2">
                <FilterChip
                  active={activeService === "all"}
                  onClick={() => setActiveService("all")}
                  label="All Services"
                />
                {services.map((s) => (
                  <FilterChip
                    key={s.slug}
                    active={activeService === s.slug}
                    onClick={() => setActiveService(s.slug)}
                    label={s.shortName}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── COUNTY GROUPS ── */}
      <section className="bg-[#f6f3ea]">
        <div className="mx-auto max-w-7xl px-6 py-16 space-y-14">
          {filteredCounties.length === 0 && (
            <p className="text-center text-stone-600">
              No cities matched &ldquo;{query}&rdquo;. Try another search.
            </p>
          )}

          {filteredCounties.map((county, idx) => {
            const cities = byCounty[county];
            return (
              <motion.div
                key={county}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease, delay: idx * 0.04 }}
              >
                <div className="flex items-end justify-between gap-4 mb-6">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a2332]">
                    {county}
                  </h2>
                  <span className="text-xs uppercase tracking-[0.18em] text-stone-500">
                    {cities.length}{" "}
                    {cities.length === 1 ? "city" : "cities"}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {cities
                    .filter((l) => {
                      if (!query.trim()) return true;
                      const q = query.trim().toLowerCase();
                      return (
                        l.city.toLowerCase().includes(q) ||
                        l.county.toLowerCase().includes(q) ||
                        l.zip.includes(q)
                      );
                    })
                    .map((loc) => (
                      <article
                        key={loc.slug}
                        className="group rounded-2xl border border-stone-200 bg-white p-6 hover:border-[#3d7a52]/60 hover:shadow-md transition-all"
                      >
                        <header className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-lg font-semibold text-[#1a2332]">
                              {loc.city}, {loc.state}
                            </h3>
                            <p className="text-xs text-stone-500 mt-1">
                              {loc.zip} · {loc.distanceFromReno} from Reno
                            </p>
                          </div>
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#3d7a52]/10 text-[#3d7a52] text-xs font-semibold">
                            {visibleServices.length}
                          </span>
                        </header>

                        <ul className="mt-4 flex flex-wrap gap-1.5">
                          {visibleServices.map((svc) => (
                            <li key={svc.slug}>
                              <Link
                                href={`/${svc.slug}-${loc.slug}/`}
                                className="inline-block rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-[12px] text-stone-700 hover:border-[#3d7a52] hover:bg-[#3d7a52]/5 hover:text-[#3d7a52] transition-colors"
                              >
                                {svc.shortName}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors border ${
        active
          ? "bg-[#3d7a52] text-white border-[#3d7a52]"
          : "bg-white text-stone-700 border-stone-300 hover:border-[#3d7a52] hover:text-[#3d7a52]"
      }`}
    >
      {label}
    </button>
  );
}
