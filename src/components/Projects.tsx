"use client";

import { motion } from "motion/react";

export default function Projects() {
  return (
    <motion.div
      className="mx-auto max-w-[1100px] px-6 py-10"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <p className="text-sm leading-relaxed text-muted">
        Building things on the side →{" "}
        <a
          href="https://fablebook.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-body hover:text-accent transition-colors"
        >
          Fablebook
        </a>{" "}
        — AI children&apos;s storybook app (iOS).{" "}
        <br className="hidden md:inline" />A few other experiments at{" "}
        <a
          href="https://github.com/BoraALAP"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          github.com/BoraALAP
        </a>
      </p>
    </motion.div>
  );
}
