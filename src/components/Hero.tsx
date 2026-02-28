"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/profile.jpg"
          alt="Bora Alap"
          width={120}
          height={120}
          className="mb-8 rounded-full"
          priority
        />
      </motion.div>

      <motion.h1
        className="text-heading font-bold leading-[1.05] tracking-tight"
        style={{ fontSize: "clamp(48px, 8vw, 80px)" }}
        initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Bora Alap
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-muted md:text-xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Product Design Lead &amp; Design Engineer
      </motion.p>

      <motion.p
        className="mt-1 text-sm text-muted"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        Amsterdam — formerly Toronto
      </motion.p>

      <motion.p
        className="mt-8 max-w-[720px] text-base leading-relaxed text-body"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Designing systems. Shipping products. Bridging design and engineering.
      </motion.p>
    </section>
  );
}
