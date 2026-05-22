"use client";

/**
 * HeroSection creates the premium first impression for the homepage portfolio.
 * It owns the calm glare, faint grid, status pill, CTAs, and optional cursor spotlight.
 */
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

export function HeroSection() {
  const lightRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    // CSS variables avoid React state churn while still allowing a cursor-follow light.
    if (shouldReduceMotion || !lightRef.current) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    lightRef.current.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    lightRef.current.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
  };

  return (
    <section
      className="relative isolate overflow-hidden px-5 pb-28 pt-24 text-neutral-950 sm:px-8 sm:pb-36 sm:pt-32"
      onPointerMove={handlePointerMove}
    >
      <div
        ref={lightRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-100"
        style={{
          background:
            "radial-gradient(34rem circle at var(--spotlight-x, 54%) var(--spotlight-y, 28%), rgba(120, 154, 210, 0.16), transparent 58%), radial-gradient(48rem circle at 50% 20%, rgba(255, 255, 255, 0.78), transparent 62%), radial-gradient(28rem circle at 68% 10%, rgba(255, 122, 61, 0.06), transparent 62%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.2]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, .07) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, .07) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(circle at 50% 28%, black, transparent 72%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 20% 30%, rgba(15, 23, 42, .55) 0 1px, transparent 1px 3px)",
        }}
      />

      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col justify-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Product Design Lead · Design Engineering
          </p>
          <h1 className="mt-9 max-w-5xl text-balance text-5xl font-semibold leading-[0.98] tracking-normal text-neutral-950 sm:text-7xl lg:text-[5.9rem]">
            I design product systems that make complex software easier to use, build, and scale.
          </h1>
          <p className="mt-8 max-w-3xl text-balance text-lg leading-8 text-neutral-600 sm:text-xl">
            I&apos;m Bora, an Amsterdam-based product designer and design engineer with 10+ years across B2B SaaS, mobile apps, design systems, AI workflows, and product teams that need clarity fast.
          </p>
          <div className="mt-9 flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="https://www.linkedin.com/in/boraalap/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-neutral-200 bg-white/40 px-5 text-sm font-semibold text-neutral-800 transition duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:bg-white/80 hover:text-neutral-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950/20"
            >
              Connect on LinkedIn
            </Link>
          </div>
          <p className="mt-8 inline-flex w-fit rounded-full border border-neutral-200 bg-white/55 px-4 py-2 text-sm text-neutral-600 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            Open to virtual coffee about product, AI, and design systems
          </p>
        </motion.div>
      </div>
    </section>
  );
}
