"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="mb-20"
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <h1
        className="text-heading font-semibold leading-none mb-4"
        style={{
          fontSize: "clamp(3.5rem, 8vw, 6rem)",
          letterSpacing: "-0.03em",
        }}
      >
        Bora Alap
      </h1>
      <div className="font-mono text-sm text-muted leading-relaxed mb-5">
        <p>{"// Product Design Lead & Design Engineer"}</p>
        <p>{"// Amsterdam — via Toronto"}</p>
      </div>
      <p className="text-muted leading-relaxed max-w-[560px]">
        Designing systems and building products. Over a decade bridging design
        and engineering across mobile, SaaS, and design systems.
      </p>
    </motion.section>
  );
};
