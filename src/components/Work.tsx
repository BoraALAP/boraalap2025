"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    period: "2024–Present",
    title: "GoodHabitz — Experts (0→1 Product)",
    description:
      "Led product design and prototyping for Experts, a greenfield product built from scratch at GoodHabitz. Also handles frontend as design engineer — writing code, not just specs.",
    metrics: "0→1 Product · Design + Engineering · Amsterdam",
    images: [],
  },
  {
    period: "2021–2024",
    title: "FreshBooks Connect — Mobile App",
    description:
      "Designed iOS/Android app for the trades industry: time tracking, expense logging, mileage. Led from research to release.",
    metrics: "↑ 40% user retention · ↑ 25% data accuracy",
    images: ["/projects/connect/thumbnail.png"],
  },
  {
    period: "2021–2024",
    title: "FreshBricks — Design System",
    description:
      "Built FreshBooks' first cross-functional design system. Token architecture, component library, adoption playbook.",
    metrics: "93% adoption rate · −30% dev handoff time",
    images: ["/projects/bricks/thumbnail.png"],
  },
];

const WorkEntry = ({
  project,
}: {
  project: (typeof projects)[0];
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      className="group relative pl-4 py-6"
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
    >
      {/* Hover left border */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] overflow-hidden">
        <div className="h-full w-full bg-accent origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-200" />
      </div>

      <span className="font-mono text-xs text-accent">{project.period}</span>
      <h3 className="text-heading text-lg font-medium mt-1 mb-2">
        {project.title}
      </h3>
      <div className="w-12 h-px bg-border mb-3" />
      <p className="text-text leading-relaxed mb-2">{project.description}</p>
      <p className="font-mono text-xs text-accent">{project.metrics}</p>

      {project.images.map((src) => (
        <div
          key={src}
          className="mt-4 border border-border-light rounded-sm overflow-hidden"
        >
          <Image
            src={src}
            alt={project.title}
            width={680}
            height={400}
            className="w-full h-auto"
          />
        </div>
      ))}
    </motion.article>
  );
};

export const Work = () => (
  <section id="work" className="mb-20">
    <SectionHeading>Work</SectionHeading>
    <div className="space-y-2">
      {projects.map((p) => (
        <WorkEntry key={p.title} project={p} />
      ))}
    </div>
  </section>
);
