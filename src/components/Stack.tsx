"use client";

import { motion } from "motion/react";
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

function ToolItem({
  name,
  Icon,
}: {
  name: string;
  Icon: React.ComponentType;
}) {
  return (
    <div className="group flex items-center gap-3 py-2 cursor-default">
      <div className="w-6 h-6 flex items-center justify-center [&_svg]:w-5 [&_svg]:h-5 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
        <Icon />
      </div>
      <span className="text-sm text-body group-hover:text-heading transition-colors duration-300">
        {name}
      </span>
    </div>
  );
}

export default function Stack() {
  return (
    <section className="px-6 md:px-10 py-32 max-w-[1200px] mx-auto border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20"
      >
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-heading italic">
            Stack.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
              Design
            </p>
            {designStack.map((item) => (
              <ToolItem key={item.name} {...item} />
            ))}
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
              Engineering
            </p>
            {engStack.map((item) => (
              <ToolItem key={item.name} {...item} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
