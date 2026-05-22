"use client";

/**
 * Header renders the current minimal navigation, with a legacy variant for /2025.
 * The /2025 branch keeps the old website chrome alive without changing the new homepage.
 */
import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

import { Social } from "./subelements/Social";
import { Switch } from "./subelements/Switch";

export const Header = () => {
  const pathname = usePathname();
  const isLegacy2025 = pathname.startsWith("/2025");

  if (isLegacy2025) {
    return (
      <header
        tabIndex={-1}
        className="flex h-20 items-center justify-between bg-white px-10 py-6 transition-colors duration-200 dark:bg-black dark:text-white"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
        >
          <Link href="/2025">
            <h1>Bora Alap</h1>
          </Link>
        </motion.div>
        <Switch />
        <Social />
      </header>
    );
  }

  return (
    <header
      tabIndex={-1}
      className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-neutral-200/70 bg-[#faf9f6]/82 px-5 py-5 text-neutral-950 backdrop-blur-xl transition-colors duration-200 sm:px-8 lg:px-10"
    >
      <Link href="/" className="text-sm font-semibold tracking-normal">
        Bora Alap
      </Link>
      <nav aria-label="Primary navigation" className="flex items-center gap-5 text-sm font-medium text-neutral-500">
        <Link href="/#work" className="transition-colors hover:text-neutral-950">
          Work
        </Link>
        <Link href="/#testimonials" className="hidden transition-colors hover:text-neutral-950 sm:inline">
          Words
        </Link>
        <Link href="/#experiments" className="hidden transition-colors hover:text-neutral-950 sm:inline">
          Notes
        </Link>
        <Link href="/#contact" className="transition-colors hover:text-neutral-950">
          Contact
        </Link>
      </nav>
    </header>
  );
};
