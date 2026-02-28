"use client";

import { SectionHeading } from "./SectionHeading";
import { CursorLogo, ClaudeCodeLogo } from "@/assets/logos";

const categories = [
  { label: "Design", items: ["Figma", "Framer", "Play 2", "Spline"], ai: false },
  { label: "Code", items: ["React", "Next.js", "Expo", "Tailwind", "Supabase", "TypeScript"], ai: false },
];

const aiItems = [
  { name: "Cursor", Icon: CursorLogo },
  { name: "Claude Code", Icon: ClaudeCodeLogo },
];

export const Stack = () => (
  <section className="mb-20">
    <SectionHeading>Stack</SectionHeading>
    <div className="space-y-2">
      {categories.map((cat) => (
        <div key={cat.label} className="flex gap-4 items-baseline">
          <span className="font-mono text-xs text-muted w-16 shrink-0">
            {cat.label}
          </span>
          <span className="text-text text-sm">
            {cat.items.map((item, i) => (
              <span key={item}>
                <span className="transition-colors duration-150 hover:text-accent cursor-default">
                  {item}
                </span>
                {i < cat.items.length - 1 && (
                  <span className="text-muted"> · </span>
                )}
              </span>
            ))}
          </span>
        </div>
      ))}

      {/* AI Tools row with logos */}
      <div className="flex gap-4 items-center">
        <span className="font-mono text-xs text-muted w-16 shrink-0">
          AI
        </span>
        <div className="flex items-center gap-4">
          {aiItems.map((item, i) => (
            <span key={item.name} className="flex items-center gap-1.5">
              <span className="[&_svg]:h-4 [&_svg]:w-4 opacity-80">
                <item.Icon />
              </span>
              <span className="text-text text-sm transition-colors duration-150 hover:text-accent cursor-default">
                {item.name}
              </span>
              {i < aiItems.length - 1 && (
                <span className="text-muted ml-2"> · </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
