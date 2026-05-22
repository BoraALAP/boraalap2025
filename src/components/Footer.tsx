"use client";

/**
 * Footer keeps the current contact treatment, with legacy styling for the /2025 archive.
 * This lets the old site remain live without adding a second global layout.
 */
import { External } from "@/assets/External";
import { P, Reveal } from "./Reveal";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  const isLegacy2025 = pathname.startsWith("/2025");

  if (isLegacy2025) {
    return (
      <Reveal>
        <footer
          tabIndex={-1}
          className="flex flex-wrap items-center justify-between px-[5vw] py-12 pb-28 lg:pb-12"
        >
          <Link
            href="https://www.linkedin.com/in/boraalap/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-start gap-2"
          >
            <P>
              <span className="text-lg font-medium text-light-body dark:text-dark-body">
                Let’s chat on{" "}
              </span>
              <span className="text-lg font-medium text-[#0a66c2]">LinkedIn</span>
            </P>
            <div className="relative h-6 w-6 overflow-hidden">
              <External />
            </div>
          </Link>

          <small className="text-light-softBody">
            © 2016 — 2025 Bora Alap. All rights reserved
          </small>
        </footer>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <footer
        tabIndex={-1}
        className="flex flex-wrap items-center justify-between gap-6 bg-[#faf9f6] px-5 py-12 pb-28 text-neutral-950 sm:px-8 lg:px-10 lg:pb-12"
      >
        <Link
          href="https://www.linkedin.com/in/boraalap/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-start gap-2"
        >
          <P>
            <span className="text-lg font-medium text-neutral-600">
              Let’s chat on{" "}
            </span>
            <span className="text-lg font-medium text-[#c54f1d]">LinkedIn</span>
          </P>
          <div className="relative h-6 w-6 overflow-hidden">
            <External />
          </div>
        </Link>

        <small className="text-neutral-500">
          © 2016 — 2026 Bora Alap. All rights reserved
        </small>
      </footer>
    </Reveal>
  );
};
