"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import type { Location } from "@/app/lib/pseo/locations";
import type { PseoService } from "@/app/lib/pseo/services";
import locations from "@/app/lib/pseo/locations";
import services from "@/app/lib/pseo/services";
import CTASection from "@/app/components/CTASection";

const ease = [0.22, 1, 0.36, 1] as const;

type Faq = { q: string; a: string };

type Props = {
  h1: string;
  intro: string;
  service: PseoService;
  location: Location;
  faqs: Faq[];
};

export default function PseoBody({
  h1,
  intro,
  service,
  location,
  faqs,
}: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Cross-link: same service in 5 nearest other locations + 4 other services.
  const nearbyLocations = locations
    .filter((l) => l.slug !== location.slug)
    .slice(0, 6);

  const otherServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 6);

  return (
    <>
      {/* ── INTRO + SIDEBAR ── */}
      <section className="bg-[#f6f3ea]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT: Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
              className="sr-only-h1-wrap"
            >
              {/* Visually-hidden h1 already present in hero; this is the
                  primary on-page H2 for the body content. */}
              <h2 className="text-3xl font-semibold text-stone-800 mb-4">
                Trusted {service.shortName} Serving {location.city},{" "}
                {location.state}
              </h2>
              <p className="text-stone-600 leading-relaxed">{intro}</p>
              <p className="text-stone-600 leading-relaxed mt-4">
                Our clinic is located at 730 Sandhill Road, Suite 120, Reno, NV
                89521 — just {location.distanceFromReno} from {location.city}.
                We welcome patients from across {location.county} County and all
                of Northern Nevada.
              </p>
              <Link
                href={service.internalPageUrl}
                className="inline-flex items-center mt-4 text-[#3d7a52] font-medium hover:underline"
              >
                Learn more about our {service.shortName} services →
              </Link>
            </motion.div>

            {/* Treatments we use */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">
                Treatments We Use
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.treatments.map((treatment) => (
                  <li
                    key={treatment}
                    className="flex items-center gap-3 bg-white border border-stone-200 rounded-lg px-4 py-3 text-stone-700"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#3d7a52] flex-shrink-0" />
                    {treatment}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Conditions we treat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: 0.15 }}
            >
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">
                Conditions We Treat
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.conditions.map((condition) => (
                  <li
                    key={condition}
                    className="flex items-center gap-3 bg-[#3d7a52]/10 rounded-lg px-4 py-3 text-stone-700"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#1f3a28] flex-shrink-0" />
                    {condition}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Why choose us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-stone-800 mb-6">
                Why {location.city} Patients Choose Reno Regenerative Medicine
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Root-Cause Care",
                    body: `We diagnose and treat the underlying source of your ${service.shortName.toLowerCase()} — not just the symptoms.`,
                  },
                  {
                    title: "Non-Surgical First",
                    body: "Regenerative and integrative therapies designed to help you avoid surgery and long-term medication.",
                  },
                  {
                    title: `Convenient for ${location.city}`,
                    body: `Just ${location.distanceFromReno} from ${location.city}, with easy parking and same-week appointments.`,
                  },
                  {
                    title: "Personalized Plans",
                    body: "Every treatment plan is built around your history, goals, and lifestyle — never one-size-fits-all.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-stone-200 bg-white p-5"
                  >
                    <h3 className="text-lg font-semibold text-stone-800">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 mt-2 text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: 0.25 }}
            >
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="divide-y divide-stone-200 rounded-xl border border-stone-200 bg-white">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={faq.q}>
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      >
                        <span className="font-medium text-stone-800">
                          {faq.q}
                        </span>
                        <span
                          aria-hidden
                          className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#3d7a52]/10 text-[#3d7a52] transition-transform ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-5 text-stone-600 leading-relaxed">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Cross-links: nearby locations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">
                {service.shortName} in Nearby Communities
              </h2>
              <ul className="flex flex-wrap gap-2">
                {nearbyLocations.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/${service.slug}-${l.slug}/`}
                      className="inline-block rounded-full border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700 hover:border-[#3d7a52] hover:text-[#3d7a52] transition-colors"
                    >
                      {service.shortName} in {l.city}, {l.state}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Cross-links: other services in same city */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: 0.35 }}
            >
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">
                Other Services for {location.city} Patients
              </h2>
              <ul className="flex flex-wrap gap-2">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}-${location.slug}/`}
                      className="inline-block rounded-full border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700 hover:border-[#3d7a52] hover:text-[#3d7a52] transition-colors"
                    >
                      {s.shortName} in {location.city}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* RIGHT: Sidebar */}
          <aside className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
              className="sticky top-28 space-y-6"
            >
              {/* Contact card */}
              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-[#3d7a52] font-semibold">
                  Schedule Your Visit
                </p>
                <h3 className="text-xl font-semibold text-stone-800 mt-2">
                  Book {service.shortName} in {location.city}
                </h3>
                <p className="text-sm text-stone-600 mt-2">
                  Most new patients are seen within a few business days.
                </p>
                <div className="mt-5 space-y-2">
                  <Link
                    href="/contact/"
                    className="block w-full text-center rounded-full bg-[#3d7a52] px-5 py-3 text-white font-medium hover:bg-[#1f3a28] transition-colors"
                  >
                    Request Appointment
                  </Link>
                  <a
                    href="tel:+17756839026"
                    className="block w-full text-center rounded-full border border-[#3d7a52] px-5 py-3 text-[#3d7a52] font-medium hover:bg-[#3d7a52]/5 transition-colors"
                  >
                    (775) 683-9026
                  </a>
                </div>
              </div>

              {/* Hours card */}
              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-stone-800">
                  Office Hours
                </h3>
                <dl className="mt-3 text-sm text-stone-600 space-y-1">
                  <div className="flex justify-between">
                    <dt>Mon – Thu</dt>
                    <dd>9:00am – 6:00pm</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Fri – Sun</dt>
                    <dd>Closed</dd>
                  </div>
                </dl>
              </div>

              {/* Service area card */}
              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-stone-800">
                  Serving {location.city}
                </h3>
                <p className="text-sm text-stone-600 mt-2">
                  {location.distanceFromReno} from our Reno clinic. Patients
                  travel from {location.county} County and across Northern
                  Nevada and Eastern California.
                </p>
              </div>
            </motion.div>
          </aside>
        </div>
      </section>

      <CTASection
        title={`${service.shortName} for ${location.city}, ${location.state}`}
        subtitle={`Talk with our team about your care plan — serving ${location.county} County and Northern Nevada.`}
      />
    </>
  );
}
