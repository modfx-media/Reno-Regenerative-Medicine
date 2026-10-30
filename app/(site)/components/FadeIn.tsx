"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  y?: number;
  /** Render as <section> instead of <div> for semantic landmarks. */
  as?: "div" | "section";
};

export default function FadeIn({
  children,
  delay = 0,
  y = 30,
  as = "div",
  ...rest
}: FadeInProps) {
  const MotionTag = as === "section" ? motion.section : motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
