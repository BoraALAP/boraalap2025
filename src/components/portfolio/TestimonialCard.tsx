"use client";

/**
 * TestimonialCard starts compact and expands the full recommendation inline.
 * This avoids overwhelming the page while keeping the complete live-site quotes accessible.
 */
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { testimonials } from "./portfolioData";

type Testimonial = (typeof testimonials)[number];

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      layout={!shouldReduceMotion}
      className="border-t border-neutral-200 py-6"
    >
      <div className="grid gap-5 lg:grid-cols-[0.34fr_1fr]">
        <div>
          <h3 className="text-sm font-semibold text-neutral-950">{testimonial.name}</h3>
          <p className="mt-1 text-sm text-neutral-500">{testimonial.title}</p>
        </div>
        <div>
          <p className="text-balance text-lg font-medium leading-8 text-neutral-800">
            “{testimonial.quote}”
          </p>
          {isOpen ? (
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1 }}
              className="mt-5 max-w-3xl text-sm leading-7 text-neutral-600"
            >
              {testimonial.fullQuote}
            </motion.p>
          ) : null}
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="mt-5 text-sm font-semibold text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition hover:text-neutral-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950/20"
          >
            {isOpen ? "Show less" : "Read more"}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
