"use client";
import { useScrollToSection } from "@/utils/scroll";

export const SideNavItem = ({
  title,
  active,
  id,
}: {
  title: string;
  active: boolean;
  id: string;
}) => {
  const scrollToSection = useScrollToSection();

  return (
    <button
      onClick={() => scrollToSection(id)}
      className={
        "text-right text-sm leading-normal tracking-tight transition-all duration-300 " +
        (active
          ? "font-bold text-light-body"
          : "font-normal text-light-softBody")
      }
    >
      {title}
    </button>
  );
};
