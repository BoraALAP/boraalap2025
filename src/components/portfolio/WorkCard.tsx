"use client";

/**
 * WorkCard presents selected work as an editorial case-study row.
 * It avoids fake dashboards and keeps emphasis on role, product context, and real proof.
 */
import { motion, useReducedMotion } from "motion/react";
import type { workItems } from "./portfolioData";

type WorkItem = (typeof workItems)[number];

export function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group grid gap-7 border-t border-neutral-200 py-9 transition duration-300 hover:border-neutral-400 lg:grid-cols-[0.52fr_1fr]"
    >
      <div>
        <p className="font-mono text-xs text-neutral-400">{String(index + 1).padStart(2, "0")}</p>
        <h3 className="mt-4 text-2xl font-semibold leading-tight text-neutral-950">{item.title}</h3>
      </div>
      <div className="max-w-2xl">
        <p className="text-lg leading-8 text-neutral-700">{item.description}</p>
        <p className="mt-5 text-sm font-medium text-neutral-950">{item.proof}</p>
        <p className="mt-2 text-sm leading-6 text-neutral-500">{item.role}</p>
      </div>
    </motion.article>
  );
}
