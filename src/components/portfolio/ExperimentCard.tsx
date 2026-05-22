"use client";

/**
 * ExperimentCard shows current learning/building threads with a small status cue.
 * These notes make the portfolio feel alive without becoming a side-project gallery.
 */
import { motion, useReducedMotion } from "motion/react";
import type { experiments } from "./portfolioData";

type Experiment = (typeof experiments)[number];

export function ExperimentCard({ experiment }: { experiment: Experiment }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2 }}
      className="border-t border-neutral-200 pt-5"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c54f1d]">
        {experiment.status}
      </p>
      <h3 className="mt-4 text-base font-semibold text-neutral-950">{experiment.title}</h3>
      <p className="mt-3 text-sm leading-6 text-neutral-600">{experiment.description}</p>
    </motion.article>
  );
}
