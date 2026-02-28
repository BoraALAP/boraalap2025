"use client";

import { motion } from "motion/react";
import Image from "next/image";

const projects = [
  {
    title: "GoodHabitz — Experts",
    description: "0→1 product design and frontend engineering. Led from concept to launch — prototyping, design system foundations, and writing code as design engineer.",
    metrics: ["0 → 1 Product", "Design + Engineering", "Current"],
    image: null,
    current: true,
  },
  {
    title: "FreshBooks Connect",
    description: "Mobile app for the trades industry.",
    metrics: ["40% ↑ User Retention", "25% ↑ Data Accuracy"],
    image: "/projects/connect/thumbnail.png",
    current: false,
  },
  {
    title: "FreshBricks",
    description: "Design system unifying design and dev at FreshBooks.",
    metrics: ["93% Adoption Rate", "30% ↓ Dev Time"],
    image: "/projects/bricks/thumbnail.png",
    current: false,
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1100px] px-6 py-16">
      <motion.h2
        className="mb-10 text-sm font-medium uppercase tracking-widest text-muted"
        initial={{ opacity: 0, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Work
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            className={`group overflow-hidden rounded-xl border bg-bg ${p.current ? "border-accent/40 md:col-span-2 lg:col-span-1" : "border-border"}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-accent/10 via-accent/5 to-transparent flex items-center justify-center">
                  <span className="text-xs font-mono text-accent/60 tracking-widest uppercase">Current Work</span>
                </div>
              )}
            </div>
            <div className="p-6">
              {p.current && (
                <span className="mb-3 inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-mono text-accent">Now</span>
              )}
              <h3 className="text-lg font-semibold text-heading">{p.title}</h3>
              <p className="mt-1 text-sm text-muted">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {p.metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-border px-3 py-1 text-xs text-accent"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
