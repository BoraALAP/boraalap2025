"use client";

import { motion, useMotionValue } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Scott Dufour",
    title: "VP Product Design, FreshBooks",
    avatar: "/testimonials/scott.jpeg",
    quote:
      "Bora is the rare designer who can think in systems and ship in code. His work on FreshBricks set a new standard for how we build at FreshBooks.",
  },
  {
    name: "Vishal Sharma",
    title: "Engineering Manager, FreshBooks",
    avatar: "/testimonials/vishal.jpeg",
    quote:
      "Working with Bora felt like having a designer who spoke engineering fluently. He bridged our teams in ways I hadn't seen before.",
  },
  {
    name: "Kiley M.",
    title: "Product Manager, Ceridian",
    avatar: "/testimonials/kiley.jpeg",
    quote:
      "Bora's mobile designs were immediately intuitive. He has an instinct for simplifying complex workflows into something anyone can use.",
  },
  {
    name: "Yvonne Chen",
    title: "Sr. Designer, Rogers",
    avatar: "/testimonials/yvonne.jpeg",
    quote:
      "Bora elevated our entire design process. His attention to interaction details and systematic thinking influenced everyone on the team.",
  },
];

export default function Testimonials() {
  const constraintRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 356; // 340 + 16 gap

  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      const idx = Math.round(Math.abs(latest) / cardWidth);
      setActiveIndex(Math.min(idx, testimonials.length - 1));
    });
    return unsubscribe;
  }, [x]);

  return (
    <section className="py-24 overflow-hidden">
      <div className="px-6 max-w-4xl mx-auto mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-heading font-semibold text-2xl"
        >
          Testimonials
        </motion.h2>
      </div>

      <div ref={constraintRef} className="px-6 max-w-4xl mx-auto overflow-hidden">
        <motion.div
          drag="x"
          style={{ x }}
          dragConstraints={{
            left: -(cardWidth * (testimonials.length - 1)),
            right: 0,
          }}
          dragElastic={0.1}
          className="flex gap-4 cursor-grab active:cursor-grabbing"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              className="flex-shrink-0 w-[340px] p-5 bg-surface border border-border rounded-[12px]"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-heading text-sm font-medium">{t.name}</p>
                  <p className="text-muted text-xs">{t.title}</p>
                </div>
              </div>
              <p className="text-body text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full transition-colors duration-200"
              style={{
                backgroundColor: i === activeIndex ? "oklch(75% 0.18 55)" : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
