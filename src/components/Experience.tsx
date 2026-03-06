"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";

const experiences = [
  { period: "2024–Present", company: "GoodHabitz", role: "UX Manager", location: "Amsterdam", detail: "Experts product (0→1). Design, prototyping, frontend." },
  { period: "2021–2024", company: "FreshBooks", role: "Product Design Lead", location: "Toronto", detail: undefined },
  { period: "2019–2021", company: "Ceridian", role: "Sr. Mobile Designer", location: "Toronto", detail: undefined },
  { period: "2017–2019", company: "Rogers Communications", role: "Sr. Mobile Designer", location: "Toronto", detail: undefined },
  { period: "2015–2017", company: "Compass Digital Labs", role: "Sr. Product Designer", location: "Toronto", detail: undefined },
];

const education = [
  { period: "2010–2014", company: "Humber College", role: "Creative Advertising", location: "Toronto", detail: undefined },
];

const Row = ({ item }: { item: (typeof experiences)[0] }) => (
  <div className="group -mx-3 px-3 py-2 rounded transition-colors duration-150 hover:bg-hover-bg">
    <div className="flex gap-4">
      <span className="font-mono text-xs text-accent shrink-0 w-[110px] pt-0.5">
        {item.period}
      </span>
      <div className="flex flex-col">
        <span className="text-heading text-sm">{item.company}</span>
        <span className="text-muted text-xs">
          {item.role} · {item.location}
        </span>
        {item.detail && (
          <p className="text-muted text-xs mt-0.5">{item.detail}</p>
        )}
      </div>
    </div>
  </div>
);

export const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={ref}
      id="log"
      className="mb-20"
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
    >
      <SectionHeading>Experience</SectionHeading>
      <div className="mb-6">
        {experiences.map((item) => (
          <Row key={item.company} item={item} />
        ))}
      </div>
      <h3 className="font-mono text-xs text-muted uppercase tracking-widest mb-2">
        Education
      </h3>
      {education.map((item) => (
        <Row key={item.company} item={item} />
      ))}
    </motion.section>
  );
};
