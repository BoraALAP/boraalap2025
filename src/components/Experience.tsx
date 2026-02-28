"use client";

import { motion } from "motion/react";

const experiences = [
  { company: "GoodHabitz", title: "Product Design Lead & Design Engineer", location: "Amsterdam", period: "2024 – Present", note: "Experts (0→1) · Design, prototyping, frontend" },
  { company: "FreshBooks", title: "Product Design Lead", location: "Toronto", period: "2021 – 2024" },
  { company: "Ceridian", title: "Sr. Mobile Designer", location: "Toronto", period: "2019 – 2021" },
  { company: "Rogers", title: "Sr. Mobile Designer", location: "Toronto", period: "2017 – 2019" },
  { company: "Compass Digital", title: "Senior Product Designer", location: "Toronto", period: "2015 – 2017" },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1100px] px-6 py-16">
      <motion.h2
        className="mb-10 text-sm font-medium uppercase tracking-widest text-muted"
        initial={{ opacity: 0, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div>
        {experiences.map((e, i) => (
          <motion.div
            key={e.company}
            className="flex flex-col justify-between border-b border-border px-2 py-4 transition-colors hover:bg-hover-bg md:flex-row md:items-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-0.5 md:flex-row md:items-center md:gap-4">
              <span className="min-w-[160px] font-semibold text-heading">{e.company}</span>
              <div className="flex flex-col gap-0">
                <span className="text-sm text-muted">{e.title}</span>
                {"note" in e && e.note && <span className="text-xs text-accent/70">{e.note as string}</span>}
              </div>
            </div>
            <span className="mt-1 text-xs text-muted md:mt-0">
              {e.location} · {e.period}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
