"use client";

import ScrollLink from "./ScrollLink";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=80')",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-forest-deep/85 via-forest-deep/65 to-forest-deep/95"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl w-full px-6 pt-40 pb-24">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-olive"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-olive" />
          Reno Regenerative Medicine · Reno, NV
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-6 font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl"
        >
          We Welcome <em className="italic text-olive">New Patients.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="mt-8 max-w-xl text-lg text-white/85"
        >
          Serving All Of Northern Nevada And Surrounding California Communities!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <ScrollLink
            href="/contact/"
            className="inline-flex items-center rounded-full bg-olive px-7 py-3.5 text-sm font-medium text-white hover:bg-cream hover:text-forest-deep transition-colors"
          >
            Request Appointment
          </ScrollLink>
          <a
            href="tel:+17756839026"
            className="text-sm uppercase tracking-widest text-white/90 hover:text-olive border-b border-white/30 hover:border-olive pb-1 transition-colors"
          >
            Call (775) 683-9026
          </a>
        </motion.div>
      </div>
    </section>
  );
}
