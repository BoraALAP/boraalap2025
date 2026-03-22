"use client";

import { motion } from "motion/react";

const experiences = [
  {
    company: "GoodHabitz",
    role: "Product Design Lead & Design Engineer",
    location: "Amsterdam",
    period: "2024 – Present",
    description:
      "Experts (0→1): design, prototyping, and frontend as design engineer. Building the design system from scratch.",
  },
  {
    company: "FreshBooks",
    role: "Product Design Lead",
    location: "Toronto",
    period: "2021 – 2024",
    description:
      "Led mobile design and built FreshBricks, the unified design system.",
  },
  {
    company: "Ceridian",
    role: "Sr. Mobile Designer",
    location: "Toronto",
    period: "2019 – 2021",
    description:
      "Designed mobile workforce management experiences at enterprise scale.",
  },
  {
    company: "Rogers",
    role: "Sr. Mobile Designer",
    location: "Toronto",
    period: "2017 – 2019",
    description:
      "Redesigned the flagship MyRogers app for millions of users.",
  },
  {
    company: "Compass Digital",
    role: "Sr. Product Designer",
    location: "Toronto",
    period: "2015 – 2017",
    description:
      "Designed digital products for enterprise food service operations.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-10 py-32 max-w-[1200px] mx-auto border-t border-border"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20"
      >
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-heading italic mb-3">
            Experience.
          </h2>
          <p className="text-muted text-sm mt-6">
            🎓 Humber College
            <br />
            Creative Advertising, Toronto
          </p>
        </div>

        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="py-6 border-b border-border last:border-b-0 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="text-heading text-lg font-light group-hover:text-accent transition-colors duration-300">
                  {exp.company}
                </h3>
                <span className="text-muted text-xs tracking-[0.1em]">
                  {exp.period}
                </span>
              </div>
              <p className="text-body text-sm mb-1">{exp.role}</p>
              <p className="text-muted text-sm">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
