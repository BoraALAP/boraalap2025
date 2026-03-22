"use client";

import { motion } from "motion/react";
import Image from "next/image";

const testimonials = [
  {
    name: "Scott Dufour",
    title: "VP Product Design, FreshBooks",
    avatar: "/testimonials/scott.jpeg",
    quote:
      "Bora is the rare designer who can think in systems and ship in code. His work on FreshBricks set a new standard for how we build at FreshBooks.",
  },
  {
    name: "Vishal Sharma",
    title: "Engineering Manager, FreshBooks",
    avatar: "/testimonials/vishal.jpeg",
    quote:
      "Working with Bora felt like having a designer who spoke engineering fluently. He bridged our teams in ways I hadn't seen before.",
  },
  {
    name: "Kiley M.",
    title: "Product Manager, Ceridian",
    avatar: "/testimonials/kiley.jpeg",
    quote:
      "Bora's mobile designs were immediately intuitive. He has an instinct for simplifying complex workflows into something anyone can use.",
  },
  {
    name: "Yvonne Chen",
    title: "Sr. Designer, Rogers",
    avatar: "/testimonials/yvonne.jpeg",
    quote:
      "Bora elevated our entire design process. His attention to interaction details and systematic thinking influenced everyone on the team.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 md:px-10 py-32 max-w-[1200px] mx-auto border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl text-heading italic mb-3">
          Shoutouts.
        </h2>
        <p className="text-body text-lg">
          What stakeholders and teammates say.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative"
          >
            <p className="text-heading text-base leading-relaxed font-light mb-6">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="flex items-center gap-3">
              <Image
                src={t.avatar}
                alt={t.name}
                width={36}
                height={36}
                className="rounded-full object-cover opacity-80"
              />
              <div>
                <p className="text-heading text-sm">{t.name}</p>
                <p className="text-muted text-xs">{t.title}</p>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
