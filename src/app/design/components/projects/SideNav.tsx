import React from "react";
import { SideNavItem } from "./SideNavItem";

export const SideNav = ({
  sections,
  activeSection,
}: {
  sections: { navTitle: string; title: string }[];
  activeSection: string;
}) => {
  return (
    <div className="fixed right-4 top-[453px] flex flex-col items-end justify-center gap-2 overflow-hidden pr-10">
      {sections.map((section) => (
        <SideNavItem
          title={section.navTitle}
          id={section.title}
          active={activeSection === section.title}
          key={section.title}
        />
      ))}
    </div>
  );
};
