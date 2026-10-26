"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MotionOrbs from "./MotionOrbs";

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    n: "01",
    t: "Innovative Medicine",
    d: "The team uses the best products available, complemented by advanced technologies for efficient and effective treatments.",
  },
  {
    n: "02",
    t: "Integrative Therapies",
    d: "Chiropractic, therapeutic exercise and cold laser therapy working together as one plan.",
  },
  {
    n: "03",
    t: "On-site Imaging",
    d: "State of the art X-ray equipment on-site for efficient diagnosis.",
  },
];

export default function ApproachSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f3ea]">
      <MotionOrbs className="opacity-25" tone="cool" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#4a7c59]">
              Welcome
            </div>
            <h2 className="font-serif-display mt-4 text-[40px] lg:text-[56px] leading-[1.02] tracking-[-0.02em] text-[#1a2332]">
              Welcome to{" "}
              <span className="italic text-[#4a7c59]">Reno Regenerative</span>{" "}
              Medicine.
            </h2>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#1a2332] hover:text-[#4a7c59] transition-colors"
            >
              About the Clinic
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </motion.div>

          {/* Right */}
          <div className="lg:col-span-7 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease, delay: 0.05 }}
              className="text-[17px] leading-[1.7] text-[#1a2332]/85"
            >
              Reno Regenerative Medicine | Knee, Back &amp; Joint Pain Clinic
              in Reno, Nevada, offers a welcoming and relaxed environment for
              innovative and integrative medicine. The team offers innovative
              medicine and a variety of therapies, including chiropractic,
              therapeutic exercise and cold laser therapy, to help patients
              suffering from sciatica, symptoms associated with neuropathy,
              arthritis, whiplash, and musculoskeletal pain.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease, delay: 0.12 }}
              className="text-[17px] leading-[1.7] text-[#1a2332]/75"
            >
              The Reno Regenerative Medicine team uses the best products
              available. Our services are complemented by advanced technologies
              for efficient and effective treatments that can relieve pain and
              help speed up the healing process. Reno Regenerative Medicine
              also has state of the art X-ray equipment on-site for efficient
              diagnosis, so patients are fully informed about their condition
              before beginning treatment.
            </motion.p>

            <div className="grid sm:grid-cols-3 gap-5 pt-6">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease, delay: 0.1 + i * 0.08 }}
                  className="group relative rounded-2xl border border-[#e8e4d9] bg-white p-6 hover:border-[#4a7c59]/40 hover:shadow-lg transition-all"
                >
                  <div className="font-serif-display text-[18px] text-[#c6b180]">
                    {p.n}
                  </div>
                  <div className="mt-3 font-semibold text-[17px] text-[#1a2332]">
                    {p.t}
                  </div>
                  <div className="mt-2 text-[15px] leading-[1.65] text-[#1a2332]/75">
                    {p.d}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
