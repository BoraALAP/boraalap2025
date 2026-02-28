"use client";

import { motion } from "motion/react";

const projects = [
  {
    name: "Fablebook",
    subtitle: "AI children's storybook generator (iOS)",
    link: "https://apps.apple.com/app/fablebook",
    linkLabel: "→ App Store",
  },
  {
    name: "More on GitHub",
    subtitle: "Exploring more at github.com/BoraALAP",
    link: "https://github.com/BoraALAP",
    linkLabel: "→",
  },
];

export default function Projects() {
  return (
    <section className="px-6 py-24 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-heading font-semibold text-2xl mb-10"
      >
        Side Projects
      </motion.h2>

      <div className="flex flex-col sm:flex-row gap-4">
        {projects.map((p) => (
          <motion.a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="block w-full sm:w-[280px] p-5 bg-surface rounded-[12px] border border-border hover:border-accent/30 transition-colors duration-200"
          >
            <h3 className="text-heading font-semibold mb-1">{p.name}</h3>
            <p className="text-muted text-sm mb-2">{p.subtitle}</p>
            <span className="text-accent text-sm">{p.linkLabel}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
