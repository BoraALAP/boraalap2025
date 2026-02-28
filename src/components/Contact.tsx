"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="text-center py-16"
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
    >
      <p className="text-muted text-sm mb-2">Say hello →</p>
      <a
        href="mailto:bora@barkingcode.com"
        className="text-heading text-2xl font-medium hover:text-accent transition-colors duration-150"
      >
        bora@barkingcode.com
      </a>
      <div className="flex justify-center gap-6 mt-6 text-sm text-muted">
        {[
          { label: "LinkedIn", href: "https://linkedin.com/in/boraalap" },
          { label: "GitHub", href: "https://github.com/BoraALAP" },
          { label: "Twitter/X", href: "https://twitter.com/AlapBora" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150 hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </div>
      <footer className="mt-16 text-xs text-muted">
        Bora Alap · 2025 · Amsterdam
      </footer>
    </motion.section>
  );
};
