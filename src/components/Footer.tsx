import { External } from "@/assets/External";
import { P, Reveal } from "./Reveal";
import Link from "next/link";

export const Footer = () => {
  return (
    <Reveal>
      <footer
        tabIndex={-1}
        className="flex flex-wrap items-center justify-between px-[5vw] py-12 pb-28 lg:pb-12"
      >
        <Link
          href="https://www.linkedin.com/in/boraalap/"
          target="_blank"
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
};
