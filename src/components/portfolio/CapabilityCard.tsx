"use client";

/**
 * CapabilityCard explains one practical strength in Bora's product/design-engineering range.
 * Cards are intentionally quiet: one divider, one hover lift, and no decorative clutter.
 */
import { motion, useReducedMotion } from "motion/react";
import type { capabilities } from "./portfolioData";

type Capability = (typeof capabilities)[number];

export function CapabilityCard({ capability }: { capability: Capability }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2 }}
      className="border-t border-neutral-200 pt-5"
    >
      <h3 className="text-base font-semibold text-neutral-950">{capability.title}</h3>
      <p className="mt-3 text-sm leading-6 text-neutral-600">{capability.description}</p>
    </motion.article>
  );
}
