"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section className="px-6 md:px-10 py-32 max-w-[1200px] mx-auto border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20"
      >
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-heading italic">
            About.
          </h2>
        </div>
        <div>
          <p className="text-heading text-xl md:text-2xl leading-relaxed mb-6 font-light">
            I design systems, build in code, and ship products
            that bridge the gap between design and engineering.
          </p>
          <p className="text-body text-base leading-relaxed">
            With 10+ years across enterprise, fintech, and edtech — from
            FreshBooks to Ceridian to Rogers — I&apos;ve led design systems
            adopted by entire organizations, shipped mobile apps used by
            millions, and prototyped 0→1 products that went to market. Today
            I&apos;m building the design system at GoodHabitz while running
            Barking Studio, where I build AI-powered products.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
