"use client";

import { motion } from "motion/react";
import Image from "next/image";

const projects = [
  {
    label: "Design Engineering · 0→1",
    title: "GoodHabitz — Experts",
    description:
      "Greenfield product built from scratch. Led design, prototyping, and frontend implementation as design engineer — writing production code alongside designing the experience.",
    metrics: ["0 → 1 Product", "Design + Code", "2024–Present"],
    image: null,
    gradient: "from-amber-500/8 via-amber-500/3 to-transparent",
  },
  {
    label: "Mobile Design · iOS & Android",
    title: "FreshBooks Connect",
    description:
      "Streamlined time, expense, and mileage tracking for trades teams. Designed the complete mobile experience end-to-end.",
    metrics: ["40% ↑ Retention", "25% ↑ Data Accuracy"],
    image: "/projects/connect/thumbnail.png",
    gradient: null,
  },
  {
    label: "Design System · Web",
    title: "FreshBricks Design System",
    description:
      "Unified design language across FreshBooks web — components, tokens, guidelines. Built to scale across multiple product teams.",
    metrics: ["93% Adoption", "30% ↓ Dev Time"],
    image: "/projects/bricks/thumbnail.png",
    gradient: null,
  },
];

export default function Work() {
  return (
    <section id="work" className="px-6 md:px-10 py-32 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl text-heading italic mb-3">
          Recent work.
        </h2>
        <p className="text-body text-lg">From pixels to products.</p>
      </motion.div>

      <div className="flex flex-col gap-20">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group"
          >
            {/* Image / Visual */}
            <div className="relative aspect-[16/9] md:aspect-[2.2/1] mb-8 overflow-hidden rounded-sm bg-surface">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
              ) : (
                <div
                  className={`h-full w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <span className="text-xs tracking-[0.3em] uppercase text-accent/60">
                    Current Project
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-16">
              <div>
                <span className="text-xs tracking-[0.15em] uppercase text-muted">
                  {project.label}
                </span>
              </div>
              <div>
                <h3 className="text-heading text-2xl md:text-3xl font-light mb-4 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-body text-base leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {project.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-xs tracking-[0.1em] text-accent/80"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <p className="text-muted text-sm text-center mt-20 tracking-[0.1em]">
        More work available on request
      </p>
    </section>
  );
}
