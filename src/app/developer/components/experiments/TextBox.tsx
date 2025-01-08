"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef, useState } from "react";

export const TextBox = () => {
  const [sentence, setSentence] = useState("Change the text and Scroll");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 20%", "end end"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-100%", "50%"]);
  const x2 = useTransform(scrollYProgress, [1, 0], ["-100%", "50%"]);
  return (
    <div
      className="relative flex h-full w-full flex-col justify-center"
      ref={ref}
    >
      <motion.span
        style={{ x: x1 }}
        className="w-fit text-nowrap text-left text-4xl font-bold uppercase text-light-baseInverted md:text-8xl dark:text-dark-baseInverted"
      >
        {sentence}
      </motion.span>
      <motion.span
        style={{ x: x2 }}
        className="w-fit text-nowrap text-right text-4xl font-bold uppercase text-light-baseInverted md:text-8xl dark:text-dark-baseInverted"
      >
        {sentence}
      </motion.span>
      <div className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 bg-light-baseInverted mix-blend-exclusion dark:bg-dark-baseInverted" />
      <div className="absolute bottom-4 left-1/2 h-fit w-1/2 -translate-x-1/2">
        <input
          type="text"
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          className="w-full rounded-md border border-light-baseInverted bg-light-base p-2 text-center text-light-body dark:border-dark-baseInverted dark:bg-dark-base dark:text-dark-body"
        />
      </div>
    </div>
  );
};
