"use client";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1100px] px-6 py-24">
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-heading">Let&apos;s talk →</h2>
        <a
          href="mailto:bora@barkingcode.com"
          className="mt-2 text-lg text-accent hover:underline"
        >
          bora@barkingcode.com
        </a>

        <div className="mt-8 flex gap-6">
          {[
            { label: "LinkedIn", href: "https://linkedin.com/in/boraalap" },
            { label: "GitHub", href: "https://github.com/BoraALAP" },
            { label: "Twitter", href: "https://twitter.com/AlapBora" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>

        <p className="mt-16 text-xs text-muted">© 2026 Bora Alap</p>
      </motion.div>
    </section>
  );
}
