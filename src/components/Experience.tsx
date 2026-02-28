"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const experiences = [
  {
    company: "GoodHabitz",
    role: "Product Design Lead",
    location: "Amsterdam",
    period: "2024 – Present",
    description: "Building the design system from scratch for a B2B learning platform.",
  },
  {
    company: "FreshBooks",
    role: "Product Design Lead",
    location: "Toronto",
    period: "2021 – 2024",
    description: "Led mobile design and built FreshBricks, the unified design system.",
  },
  {
    company: "Ceridian",
    role: "Sr. Mobile Designer",
    location: "Toronto",
    period: "2019 – 2021",
    description: "Designed mobile workforce management experiences at enterprise scale.",
  },
  {
    company: "Rogers",
    role: "Sr. Mobile Designer",
    location: "Toronto",
    period: "2017 – 2019",
    description: "Redesigned the flagship MyRogers app for millions of users.",
  },
  {
    company: "Compass Digital",
    role: "Sr. Product Designer",
    location: "Toronto",
    period: "2015 – 2017",
    description: "Designed digital products for enterprise food service operations.",
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="experience" className="px-6 py-24 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-heading font-semibold text-2xl mb-10"
      >
        Experience
      </motion.h2>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group cursor-pointer border-l-2 border-transparent hover:border-accent pl-5 py-4 transition-colors duration-300"
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <span className="text-heading font-semibold">{exp.company}</span>
                <span className="text-body ml-3">{exp.role}</span>
              </div>
              <div className="text-muted text-sm">
                {exp.location} · {exp.period}
              </div>
            </div>
            <AnimatePresence>
              {expanded === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-body text-sm mt-2 overflow-hidden"
                >
                  {exp.description}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 pl-5 text-muted text-sm">
        🎓 Humber College — Creative Advertising, Toronto
      </div>
    </section>
  );
}
