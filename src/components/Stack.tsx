"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  FigmaLogo,
  FramerLogo,
  Play2Logo,
  SplineLogo,
  ReactLogo,
  NextjsLogo,
  ExpoLogo,
  TailwindLogo,
  SupabaseLogo,
  CursorLogo,
} from "@/assets/logos";

const designStack = [
  { name: "Figma", Icon: FigmaLogo },
  { name: "Framer", Icon: FramerLogo },
  { name: "Play 2", Icon: Play2Logo },
  { name: "Spline", Icon: SplineLogo },
];

const engStack = [
  { name: "React", Icon: ReactLogo },
  { name: "Next.js", Icon: NextjsLogo },
  { name: "Expo", Icon: ExpoLogo },
  { name: "Tailwind", Icon: TailwindLogo },
  { name: "Supabase", Icon: SupabaseLogo },
  { name: "Cursor", Icon: CursorLogo },
];

function StackIcon({ name, Icon }: { name: string; Icon: React.ComponentType }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex items-center justify-center w-[56px] h-[56px] cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <div className="w-10 h-10 flex items-center justify-center [&_svg]:w-10 [&_svg]:h-10">
        <Icon />
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-surface border border-border rounded-[6px] text-xs text-heading whitespace-nowrap z-10"
          >
            {name}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Stack() {
  return (
    <section className="px-6 py-24 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-heading font-semibold text-2xl mb-10"
      >
        Stack
      </motion.h2>

      <div className="mb-8">
        <p className="text-muted text-sm mb-4">Design</p>
        <div className="flex flex-wrap gap-4">
          {designStack.map((item) => (
            <StackIcon key={item.name} {...item} />
          ))}
        </div>
      </div>

      <div>
        <p className="text-muted text-sm mb-4">Engineering</p>
        <div className="flex flex-wrap gap-4">
          {engStack.map((item) => (
            <StackIcon key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
