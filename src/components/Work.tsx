"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "GoodHabitz — Experts",
    tags: ["0→1 Product", "Design Engineering"],
    description: "Greenfield product built from scratch. Led design, prototyping, and frontend implementation as design engineer — writing code alongside designing it.",
    metrics: ["0 → 1 Product", "Design + Code", "Current"],
    image: null,
    current: true,
  },
  {
    title: "FreshBooks Connect",
    tags: ["Mobile Design", "iOS & Android"],
    description: "Streamlined time, expense, and mileage tracking for trades teams.",
    metrics: ["40% ↑ Retention", "25% ↑ Data Accuracy"],
    image: "/projects/connect/thumbnail.png",
    current: false,
  },
  {
    title: "FreshBricks Design System",
    tags: ["Design System", "Web"],
    description: "Unified design language across FreshBooks web — components, tokens, guidelines.",
    metrics: ["93% Adoption", "30% ↓ Dev Time"],
    image: "/projects/bricks/thumbnail.png",
    current: false,
  },
];

function WorkCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-surface rounded-[12px] border border-border overflow-hidden transition-colors duration-300"
      style={{
        borderColor: hovered ? "oklch(75% 0.18 55 / 0.4)" : undefined,
        boxShadow: hovered ? "0 8px 32px oklch(75% 0.18 55 / 0.06)" : "none",
      }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-amber-400/10 via-amber-400/5 to-transparent flex items-end p-4">
            <span className="text-xs font-mono text-amber-400/70 tracking-widest uppercase">Current · 2024–Now</span>
          </div>
        )}
      </div>
      <div className="p-5">
        {"current" in project && project.current && (
          <span className="inline-block mb-3 text-xs font-mono px-2.5 py-0.5 rounded-full" style={{ background: "oklch(75% 0.18 55 / 0.12)", color: "oklch(75% 0.18 55)" }}>Now</span>
        )}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-muted px-2 py-1 rounded-[6px] bg-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3
          className="text-heading font-semibold text-lg mb-2 transition-colors duration-200"
          style={{
            textDecorationColor: hovered ? "oklch(75% 0.18 55)" : "transparent",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            textDecorationThickness: "2px",
          }}
        >
          {project.title}
        </h3>
        <p className="text-body text-sm mb-3">{project.description}</p>
        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
          transition={{ duration: 0.2 }}
          className="flex gap-3 text-xs text-accent font-medium"
        >
          {project.metrics.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  return (
    <section id="work" className="px-6 py-24 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-heading font-semibold text-2xl mb-10"
      >
        Selected Work
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <WorkCard key={p.title} project={p} />
        ))}
      </div>

      <p className="text-muted text-sm text-center mt-10 italic">
        More work available on request
      </p>
    </section>
  );
}
