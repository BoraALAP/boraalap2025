"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end px-6 md:px-10 pb-20 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="font-display text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[7rem] leading-[0.95] tracking-[-0.02em] text-heading mb-8">
          Product Design
          <br />
          <span className="italic text-accent">& Engineering</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
      >
        <p className="text-body text-base md:text-lg max-w-md leading-relaxed">
          A decade of shaping digital products people actually use.
          Currently a Design Engineer at GoodHabitz — designing systems
          and prototyping in code.
        </p>
        <p className="text-muted text-sm tracking-[0.1em]">
          Amsterdam, NL
        </p>
      </motion.div>
    </section>
  );
}
