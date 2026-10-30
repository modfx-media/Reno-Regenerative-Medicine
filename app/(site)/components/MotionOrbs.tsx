"use client";

import { motion } from "framer-motion";

/**
 * Decorative animated gradient orbs for hero/section backgrounds.
 * Pure CSS + framer-motion. No images, accessibility-safe (aria-hidden).
 */
export default function MotionOrbs({
  className = "",
  tone = "warm",
}: {
  className?: string;
  tone?: "warm" | "cool";
}) {
  const palette =
    tone === "warm"
      ? ["#c6b180", "#4a7c59", "#7ea27a"]
      : ["#4a7c59", "#7ea27a", "#1f3a28"];

  const orbs = [
    {
      size: 520,
      color: palette[0],
      top: "-12%",
      left: "-8%",
      duration: 22,
      delay: 0,
    },
    {
      size: 420,
      color: palette[1],
      top: "30%",
      left: "55%",
      duration: 26,
      delay: 2,
    },
    {
      size: 360,
      color: palette[2],
      top: "65%",
      left: "10%",
      duration: 30,
      delay: 4,
    },
  ];

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {orbs.map((o, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: [0.25, 0.45, 0.25],
            scale: [0.95, 1.08, 0.95],
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: o.duration,
            delay: o.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: o.size,
            height: o.size,
            top: o.top,
            left: o.left,
            background: `radial-gradient(circle at 30% 30%, ${o.color}, transparent 65%)`,
            filter: "blur(60px)",
          }}
          className="absolute rounded-full mix-blend-screen"
        />
      ))}
    </div>
  );
}
