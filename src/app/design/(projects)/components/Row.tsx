import React from "react";
import { motion } from "motion/react";
import { H3 } from "@/components/Reveal";

export const Row = ({
  title,
  children,
  onSectionEnter,
  onSectionLeave,
}: {
  title: string;
  children: React.ReactNode;
  onSectionEnter: (section: string) => void;
  onSectionLeave: (section: string) => void;
}) => {
  return (
    <motion.div
      className="mx-auto flex flex-col items-baseline justify-start gap-6 py-6 sm:flex-row"
      id={title}
      data-section
      onViewportEnter={() => onSectionEnter(title)}
      onViewportLeave={() => onSectionLeave(title)}
    >
      <div className="flex gap-2 sm:w-60 sm:justify-end">
        <H3 className="text-lg font-medium leading-normal sm:text-right">
          {title}
        </H3>
      </div>
      <div className="flex min-w-[320px] shrink grow basis-0 flex-col items-start justify-start gap-6">
        {children}
      </div>
    </motion.div>
  );
};
