"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export const SectionHeading = ({ children, id }: { children: string; id?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
    >
      <h2 className="font-mono text-xs uppercase tracking-widest text-accent mb-1">
        {children}
      </h2>
      <div className="w-full h-px bg-border mb-6" />
    </motion.div>
  );
};
