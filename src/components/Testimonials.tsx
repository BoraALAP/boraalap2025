"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    image: "/testimonials/scott.jpeg",
    name: "Scott Williams",
    title: "Director of Design",
    quote:
      "Bora was instrumental in re-booting our design system work helping to solidify our grounding principles and approach to working cross-functionally. He was the lead designer on our mobile app, consistently delivering user-centric designs that solved complex business challenges. He would be a tremendous asset to any organization looking to build world-class digital products and design systems.",
  },
  {
    image: "/testimonials/kiley.jpeg",
    name: "Kiley Meehan",
    title: "Head of Design",
    quote:
      "Bora made a significant impact in accelerating our mobile strategy and leading the establishment of a robust design system. An intriguing mix of technical and craft talent, Bora brought a systems-thinking approach to all aspects of his work.",
  },
  {
    image: "/testimonials/vishal.jpeg",
    name: "Vishal Assija",
    title: "Senior Engineer Mobile",
    quote:
      "Every engineer dreams of working with Designers who understand the feasibility and complexity of the technology and devise a design strategy to support the engineering team. Bora was one of the finest Product Designers I've ever worked with.",
  },
  {
    image: "/testimonials/yvonne.jpeg",
    name: "Yvonne Shek",
    title: "VP of Design",
    quote:
      "I had the great pleasure of working with Bora. He expertly led the design of a key product. Bora is strong in understanding intricate (and often vague) requirements and translating them into various design options. He works incredibly well under pressure and tight timelines, while delivering quality design concepts.",
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={ref}
      className="mb-20"
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
    >
      <SectionHeading>Testimonials</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="border border-border rounded-md p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <Image
                src={t.image}
                alt={t.name}
                width={36}
                height={36}
                className="rounded-full object-cover w-9 h-9"
              />
              <div>
                <p className="text-heading text-sm">{t.name}</p>
                <p className="font-mono text-xs text-muted">{t.title}</p>
              </div>
            </div>
            <p className="text-text text-sm italic leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
