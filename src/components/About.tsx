"use client";

import { motion } from "motion/react";

const specialties = [
  "Design Systems",
  "Mobile Applications",
  "B2B SaaS",
  "Design Engineering",
];

export default function About() {
  return (
    <section className="px-6 py-24 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-heading text-lg md:text-xl leading-relaxed mb-2">
          A decade of designing digital products people actually use.
        </p>
        <p className="text-body text-lg md:text-xl leading-relaxed mb-8">
          Currently at GoodHabitz — building the design system of the future.
        </p>

        <div className="flex flex-wrap gap-3">
          {specialties.map((s) => (
            <span
              key={s}
              className="px-4 py-2 text-sm rounded-[6px] bg-white/5 border border-white/10 text-body hover:border-accent/40 hover:text-amber-200 transition-colors duration-200 cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
