import { External } from "@/assets/External";

export const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between px-[5vw] py-12 pb-28 lg:pb-12">
      <div className="flex items-center justify-start gap-2">
        <p>
          <span className="text-lg font-medium text-light-body dark:text-dark-body">
            Let’s chat on{" "}
          </span>
          <span className="text-lg font-medium text-[#0a66c2]">LinkedIn</span>
        </p>
        <div className="relative h-6 w-6 overflow-hidden">
          <External />
        </div>
      </div>
      <small className="text-light-softBody">
        © 2016 — 2024 Bora Alap. All rights reserved
      </small>
    </footer>
  );
};
