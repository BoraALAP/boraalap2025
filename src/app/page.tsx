"use client";

import { motion } from "motion/react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Now } from "@/components/Now";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Nav />
      <main className="max-w-[720px] mx-auto px-6 pt-32 pb-24">
        <Hero />
        <Now />
        <Work />
        <Experience />
        <Projects />
        <Stack />
        <Testimonials />
        <Contact />
      </main>
    </motion.div>
  );
}
