"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const name = "Bora Alap";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Ghost profile photo */}
      <motion.div
        style={{ y, opacity }}
        className="absolute right-[5%] md:right-[15%] top-1/2 -translate-y-1/2 w-[300px] h-[400px] md:w-[400px] md:h-[520px] pointer-events-none"
      >
        <div className="relative w-full h-full">
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full bg-accent/5 blur-3xl scale-110" />
          <Image
            src="/profile.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.12] blur-[2px]"
            style={{
              maskImage: "radial-gradient(ellipse 70% 70% at center, black 30%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 70% at center, black 30%, transparent 70%)",
            }}
            priority
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full">
        {/* Animated name */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-heading mb-6">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.03,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="inline-block"
              style={{ display: char === " " ? "inline" : "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-2xl font-light mb-4"
        >
          <span className="text-heading">Product Design Lead</span>
          <span className="text-accent"> & Design Engineer</span>
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-muted text-sm"
        >
          📍 Amsterdam, Netherlands
        </motion.p>
      </div>
    </section>
  );
}
