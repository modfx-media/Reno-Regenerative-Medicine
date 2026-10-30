"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "Joint Injections",
  "Trigger Point Injections",
  "Therapeutic Exercise",
  "Chiropractic Care",
  "Nutritional IV's",
  "Bioidentical Hormones",
  "Spinal Decompression",
  "ED Shockwave Therapy",
  "Knee Decompression",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="bg-forest text-white/90 border-y border-white/10 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap py-5 text-sm uppercase tracking-[0.25em] w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
      >
        {loop.map((it, i) => (
          <span key={i} className="flex items-center gap-12">
            {it}
            <span className="text-olive">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
