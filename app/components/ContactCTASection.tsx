"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const HOURS: { day: string; time: string }[] = [
  { day: "Monday", time: "9:00 am – 6:00 pm" },
  { day: "Tuesday", time: "9:00 am – 6:00 pm" },
  { day: "Wednesday", time: "9:00 am – 6:00 pm" },
  { day: "Thursday", time: "9:00 am – 6:00 pm" },
  { day: "Friday", time: "Closed" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

const ease = [0.22, 1, 0.36, 1] as const;

/* Decorative motion graphics ---------------------------------------------- */

function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`absolute inset-x-0 ${flip ? "bottom-0 rotate-180" : "top-0"} h-16 w-full text-[#0a120d]`}
    >
      <path
        d="M0,64 C240,120 480,0 720,48 C960,96 1200,32 1440,72 L1440,120 L0,120 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PulseRings() {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 400 400"
      className="absolute -bottom-32 -left-32 w-[460px] h-[460px] opacity-30"
      initial={{ rotate: 0 }}
      animate={{ rotate: -360 }}
      transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="200" cy="200" r="180" fill="none" stroke="#c6b180" strokeOpacity="0.3" strokeDasharray="2 10" />
      <circle cx="200" cy="200" r="140" fill="none" stroke="#4a7c59" strokeOpacity="0.4" strokeDasharray="1 8" />
      <circle cx="200" cy="200" r="90"  fill="none" stroke="#c6b180" strokeOpacity="0.25" />
      <circle cx="200" cy="20" r="4" fill="#c6b180" />
    </motion.svg>
  );
}

function FloatingDot({ x, y, delay = 0 }: { x: string; y: string; delay?: number }) {
  return (
    <motion.span
      aria-hidden
      className="absolute h-1.5 w-1.5 rounded-full bg-[#c6b180]/70"
      style={{ left: x, top: y }}
      animate={{ y: [0, -14, 0], opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

/* Section ----------------------------------------------------------------- */

type ContactCTASectionProps = {
  rating?: number;
  reviewCount?: number;
  reviewsUrl?: string;
};

export default function ContactCTASection({
  rating = 4.7,
  reviewCount = 202,
  reviewsUrl = "https://www.google.com/maps/place/?q=place_id:ChIJHQK0SgkVmYARwy42TO_LG-k",
}: ContactCTASectionProps) {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#0a120d] text-white py-32"
      aria-labelledby="contact-cta-heading"
    >
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Dark + green tint overlays */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-[#0a120d]/85" />
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(80% 60% at 0% 0%, rgba(74,124,89,0.35) 0%, transparent 60%), radial-gradient(70% 60% at 100% 100%, rgba(198,177,128,0.18) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Top + bottom wave dividers */}
      <WaveDivider />
      <WaveDivider flip />

      {/* Decorative motion graphics */}
      <PulseRings />
      <FloatingDot x="12%" y="30%" delay={0} />
      <FloatingDot x="86%" y="22%" delay={1.2} />
      <FloatingDot x="78%" y="78%" delay={2.4} />
      <FloatingDot x="22%" y="82%" delay={3.6} />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#c6b180]">
            <span className="h-px w-6 bg-[#c6b180]/50" />
            Get In Touch
            <span className="h-px w-6 bg-[#c6b180]/50" />
          </span>
          <h2
            id="contact-cta-heading"
            className="mt-5 font-serif-display text-5xl sm:text-6xl md:text-7xl leading-[1.05]"
          >
            Start Your Journey <em className="italic text-[#c6b180]">to Wellness.</em>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="mt-20 grid gap-6 lg:grid-cols-12">
          {/* Card 1 — Call & Address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="lg:col-span-5 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#c6b180]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c6b180] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#c6b180]" />
              </span>
              Call Us Today
            </div>
            <a
              href="tel:+17756839026"
              className="mt-4 block font-serif-display text-4xl sm:text-5xl text-white hover:text-[#c6b180] transition-colors"
            >
              (775) 683-9026
            </a>
            <p className="mt-3 text-white/60">Free consultation available</p>

            <div className="mt-10">
              <div className="text-xs uppercase tracking-[0.3em] text-[#c6b180]">Address</div>
              <address className="not-italic mt-3 text-white/85 leading-relaxed">
                730 Sandhill Road #120<br />Reno, NV 89521
              </address>
              <a
                href="https://www.google.com/maps?q=730+Sandhill+Road+%23120,+Reno,+NV+89521"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm text-white/70 hover:text-[#c6b180] border-b border-white/20 hover:border-[#c6b180] pb-0.5 transition-colors"
              >
                Get Directions
                <span aria-hidden>→</span>
              </a>
            </div>

            <div className="mt-10">
              <div className="text-xs uppercase tracking-[0.3em] text-[#c6b180]">Rating</div>
              <a
                href={reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-baseline gap-3 hover:opacity-90 transition-opacity"
              >
                <span className="font-serif-display text-4xl text-white">{rating.toFixed(1)}</span>
                <span className="flex text-[#c6b180]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.svg
                      key={i}
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="currentColor"
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, ease, delay: 0.4 + i * 0.08 }}
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
                    </motion.svg>
                  ))}
                </span>
                <span className="text-white/60 text-sm">{reviewCount} Google Reviews</span>
              </a>
            </div>
          </motion.div>

          {/* Card 2 — Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="lg:col-span-4 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-[#c6b180]">
              Hours of Operation
            </div>
            <ul className="mt-4 divide-y divide-white/10">
              {HOURS.map((h, i) => (
                <motion.li
                  key={h.day}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease, delay: 0.2 + i * 0.05 }}
                  className="flex justify-between py-3 text-sm text-white/85"
                >
                  <span>{h.day}</span>
                  <span className={h.time === "Closed" ? "text-white/40" : "text-[#c6b180]/90"}>
                    {h.time}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Card 3 — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="lg:col-span-3 relative overflow-hidden rounded-3xl border border-[#c6b180]/30 bg-gradient-to-br from-[#1f3a28] to-[#0f1a14] p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] flex flex-col justify-between"
          >
            {/* subtle moving glow inside the CTA card */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-1 opacity-50"
              style={{
                background:
                  "radial-gradient(60% 40% at 30% 20%, rgba(198,177,128,0.25) 0%, transparent 70%)",
              }}
              animate={{ opacity: [0.35, 0.6, 0.35] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.3em] text-[#c6b180]">
                New Patients Welcome
              </div>
              <p className="mt-4 font-serif-display text-3xl leading-tight">
                Ready to start your{" "}
                <em className="italic text-[#c6b180]">healing journey?</em>
              </p>
            </div>
            <div className="relative mt-8 space-y-3">
              <Link
                href="/contact/"
                className="group block text-center rounded-full bg-[#c6b180] px-6 py-3.5 text-sm font-medium text-[#1a2332] hover:bg-white transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  Request Appointment
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
              <a
                href="tel:+17756839026"
                className="block text-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white hover:border-[#c6b180] hover:text-[#c6b180] transition-colors"
              >
                Or call (775) 683-9026
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
