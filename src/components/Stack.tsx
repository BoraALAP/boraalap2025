"use client";

import { motion } from "motion/react";
import {
  FigmaLogo,
  FramerLogo,
  Play2Logo,
  ReactLogo,
  NextjsLogo,
  ExpoLogo,
  TailwindLogo,
  SupabaseLogo,
  CursorLogo,
  ClaudeCodeLogo,
} from "@/assets/logos";

const designTools = [
  { name: "Figma", Icon: FigmaLogo },
  { name: "Framer", Icon: FramerLogo },
  { name: "Play 2", Icon: Play2Logo },
];

const devTools = [
  { name: "React", Icon: ReactLogo },
  { name: "Next.js", Icon: NextjsLogo },
  { name: "Expo", Icon: ExpoLogo },
  { name: "Tailwind", Icon: TailwindLogo },
  { name: "Supabase", Icon: SupabaseLogo },
];

const aiTools = [
  { name: "Cursor", Icon: CursorLogo },
  { name: "Claude Code", Icon: ClaudeCodeLogo },
];

function ToolItem({ name, Icon }: { name: string; Icon: React.ComponentType }) {
  return (
    <div className="flex flex-col items-center gap-2 transition-transform hover:scale-110">
      <div className="flex h-10 w-10 items-center justify-center [&_svg]:h-8 [&_svg]:w-8">
        <Icon />
      </div>
      <span className="text-[10px] text-muted">{name}</span>
    </div>
  );
}

export default function Stack() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-16">
      <motion.h2
        className="mb-10 text-sm font-medium uppercase tracking-widest text-muted"
        initial={{ opacity: 0, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Stack
      </motion.h2>

      <motion.div
        className="flex flex-wrap gap-8 md:gap-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {[...designTools, ...devTools, ...aiTools].map((t) => (
          <ToolItem key={t.name} name={t.name} Icon={t.Icon} />
        ))}
      </motion.div>
    </section>
  );
}
