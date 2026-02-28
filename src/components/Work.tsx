'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const projects = [
  {
    title: 'GoodHabitz — Experts',
    type: '0→1 Product · Design Engineering',
    years: '2024–Now',
    detail: 'Greenfield B2B learning product. Led design and wrote production frontend code alongside the engineering team.',
    current: true,
    image: null,
  },
  {
    title: 'FreshBooks Connect',
    type: 'Mobile Design · iOS & Android',
    years: '2021–24',
    detail: 'Trades industry app covering time, expense, and mileage tracking. Shipped across iOS and Android.',
    current: false,
    image: null,
  },
  {
    title: 'FreshBricks Design System',
    type: 'Design System · Component Library',
    years: '2021–24',
    detail: 'Unified design language across FreshBooks web apps. 93% adoption rate, 30% reduction in dev time.',
    current: false,
    image: null,
  },
];

function WorkRow({ project, index }: { project: typeof projects[number]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <div
        className="group relative cursor-default border-t border-[#ffffff]/[0.06] py-5 transition-colors duration-200"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Hover background */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="hover-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="pointer-events-none absolute inset-0 -mx-6 bg-white/[0.03]"
            />
          )}
        </AnimatePresence>

        {/* Left accent bar */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="accent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.5 }}
              className="pointer-events-none absolute -left-6 inset-y-0 w-[2px] bg-[#a3e635]"
            />
          )}
        </AnimatePresence>

        <div className="relative flex items-start justify-between gap-6">
          {/* Left: title + description */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-[#f8f8ff] font-medium text-base leading-snug transition-colors group-hover:text-white">
                {project.title}
              </h3>
              {project.current && (
                <span className="shrink-0 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/25 px-2 py-0.5 text-[10px] font-medium text-[#a3e635] uppercase tracking-wide">
                  Current
                </span>
              )}
            </div>
            <p className="text-sm text-[#606070] leading-relaxed">
              {project.type}
            </p>
            {/* Detail always visible */}
            <p className="mt-2 text-sm text-[#a0a0b0] leading-relaxed">
              {project.detail}
            </p>
          </div>

          {/* Right: year */}
          <div className="flex items-center gap-2 pt-0.5 shrink-0">
            <span className="font-mono text-xs text-[#484858] tabular-nums">
              {project.years}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-3xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-sm font-mono uppercase tracking-widest text-[#484858]"
      >
        Selected Work
      </motion.h2>

      <div className="border-b border-[#ffffff]/[0.06]">
        {projects.map((project, i) => (
          <WorkRow key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
