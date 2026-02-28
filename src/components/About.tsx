"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section className="mx-auto max-w-[720px] px-6 py-16">
      <motion.h2
        className="mb-6 text-sm font-medium uppercase tracking-widest text-muted"
        initial={{ opacity: 0, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        About
      </motion.h2>
      <motion.p
        className="text-lg leading-relaxed text-body"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Product Design Lead at GoodHabitz. Over a decade crafting design
        systems, mobile apps, and user-centered digital experiences across B2B
        SaaS, telecom, and fintech. At night: building AI-powered products.
      </motion.p>
    </section>
  );
}
