"use client";

/**
 * PrincipleCard makes Bora's operating principles memorable without making the page loud.
 * The staggered reveal and hover state add enough motion to feel considered.
 */
import { motion, useReducedMotion } from "motion/react";

export function PrincipleCard({ principle, index }: { principle: string; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.li
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-36 border-t border-neutral-200 pt-5 transition-colors duration-300 hover:border-neutral-500"
    >
      <span className="font-mono text-xs text-[#c54f1d]">{String(index + 1).padStart(2, "0")}</span>
      <p className="mt-8 text-xl font-medium leading-snug text-neutral-950">{principle}</p>
    </motion.li>
  );
}
