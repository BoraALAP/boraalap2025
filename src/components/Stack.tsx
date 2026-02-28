"use client";

import { SectionHeading } from "./SectionHeading";

const categories = [
  { label: "Design", items: ["Figma", "Framer", "Play 2", "Spline"] },
  { label: "Code", items: ["React", "Next.js", "Expo", "Tailwind", "Supabase", "TypeScript"] },
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
    </div>
  </section>
);
