"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 backdrop-blur-md ${
        scrolled ? "border-b border-border-light" : ""
      }`}
      style={{ backgroundColor: "var(--color-bg)", opacity: 0.95 }}
    >
      <div className="max-w-[720px] mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-mono text-sm text-heading tracking-wider">
          BA
        </a>
        <div className="flex items-center gap-6 text-sm text-muted">
          {["Work", "Log", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-colors duration-150 hover:text-accent"
            >
              {item}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
