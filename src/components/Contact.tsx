"use client";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-32 max-w-[1200px] mx-auto border-t border-border"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20"
      >
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-heading italic">
            Say hello.
          </h2>
        </div>

        <div>
          <a
            href="mailto:alapbora@gmail.com"
            className="text-heading text-2xl md:text-3xl font-light hover:text-accent transition-colors duration-300"
          >
            alapbora@gmail.com
          </a>

          <div className="flex items-center gap-6 mt-10">
            <a
              href="https://linkedin.com/in/boraalap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] uppercase text-muted hover:text-heading transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/BoraALAP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] uppercase text-muted hover:text-heading transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://x.com/AlapBora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] uppercase text-muted hover:text-heading transition-colors duration-300"
            >
              X / Twitter
            </a>
          </div>
        </div>
      </motion.div>

      <div className="mt-32 pt-8 border-t border-border flex flex-col sm:flex-row sm:justify-between gap-4">
        <p className="text-muted text-xs tracking-[0.1em]">
          © {new Date().getFullYear()} Bora Alap
        </p>
        <p className="text-muted text-xs tracking-[0.1em]">
          Amsterdam, Netherlands
        </p>
      </div>
    </section>
  );
}
