"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

const testimonials = [
  {
    name: "Scott Williams",
    title: "Director of Design",
    image: "/testimonials/scott.jpeg",
    quote:
      "Bora was an outstanding contributor who played a pivotal role in shaping our design strategy at FreshBooks. He was instrumental in re-booting our design system and led the effort to establish a cohesive visual language. His attention to interaction details and accessibility resulted in intuitive, high-performing experiences.",
  },
  {
    name: "Kiley Meehan",
    title: "Head of Design",
    image: "/testimonials/kiley.jpeg",
    quote:
      "Bora brought a systems-thinking approach to all aspects of his work — expanding the possibilities of what a design system could achieve, pushing mobile experiences into modern directions. For teams looking for someone who can mature their systems and elevate their craft, I highly recommend Bora.",
  },
  {
    name: "Vishal Assija",
    title: "Sr. Engineer",
    image: "/testimonials/vishal.jpeg",
    quote:
      "Every engineer dreams of working with designers who understand feasibility and complexity. Bora was one of the finest Product Designers I've ever worked with — he understands product requirements and technical challenges to come up with intuitive, feasible designs.",
  },
  {
    name: "Yvonne Shek",
    title: "VP of Design",
    image: "/testimonials/yvonne.jpeg",
    quote:
      "Bora expertly led the design of a key product. He excels at understanding intricate requirements and translating them into various design options. He works incredibly well under pressure while delivering quality design concepts.",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <section className="mx-auto max-w-[1100px] px-6 py-16">
      <motion.h2
        className="mb-10 text-sm font-medium uppercase tracking-widest text-muted"
        initial={{ opacity: 0, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Testimonials
      </motion.h2>

      <div ref={containerRef} className="relative flex flex-col items-center gap-6">
        {testimonials.map((t, i) => {
          const targetScale = 1 - (testimonials.length - i) * 0.03;
          return (
            <TestimonialCard
              key={t.name}
              testimonial={t}
              index={i}
              targetScale={targetScale}
              progress={scrollYProgress}
              total={testimonials.length}
            />
          );
        })}
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
  targetScale,
  progress,
  total,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
  targetScale: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  total: number;
}) {
  const rangeStart = index / total;
  const scale = useTransform(progress, [rangeStart, 1], [1, targetScale]);

  return (
    <motion.div
      className="sticky top-28 w-full max-w-[720px] origin-top rounded-xl border border-border bg-[#111] p-6 md:p-8"
      style={{ scale, zIndex: index }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <p className="text-base leading-relaxed text-body italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="text-sm font-medium text-heading">{testimonial.name}</p>
          <p className="text-xs text-muted">{testimonial.title}</p>
        </div>
      </div>
    </motion.div>
  );
}
