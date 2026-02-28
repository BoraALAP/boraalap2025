"use client";

import { motion } from "motion/react";
import Image from "next/image";

const projects = [
  {
    title: "FreshBooks Connect",
    description: "Mobile app for the trades industry.",
    metrics: ["40% ↑ User Retention", "25% ↑ Data Accuracy"],
    image: "/projects/connect/thumbnail.png",
  },
  {
    title: "FreshBricks",
    description: "Design system unifying design and dev at FreshBooks.",
    metrics: ["93% Adoption Rate", "30% ↓ Dev Time"],
    image: "/projects/bricks/thumbnail.png",
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

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            className="group overflow-hidden rounded-xl border border-border bg-bg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-6">
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
