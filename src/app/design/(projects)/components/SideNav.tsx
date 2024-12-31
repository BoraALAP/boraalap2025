"use client";
import React, { useState } from "react";
import { SideNavItem } from "./SideNavItem";
import { motion } from "motion/react";
export const SideNav = ({
  sections,
  activeSection,
}: {
  sections: { navTitle: string; title: string }[];
  activeSection: string[];
}) => {
  const [showTitle, setShowTitle] = useState(false);

  const ContainerVariants = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: {  staggerChildren: 0.5, delayChildren: 0.5 } },
  }

  return (
    <motion.div  className="fixed w-fit right-4 -translate-y-1/2 top-1/2  hidden md:block"
      
    >
        <motion.div  
          className=" right-4  flex flex-col items-end justify-center gap-2 overflow-hidden bg-light-base dark:bg-dark-base rounded-md  p-8 "
        onMouseEnter={() => setShowTitle(true)}
        onMouseLeave={() => setShowTitle(false)}
        variants={ContainerVariants}
        initial="hidden"
        animate="show"
      
      
      >
    {/* <AnimatePresence mode="popLayout"> */}
      {sections.map((section) => (
        <SideNavItem
          title={section.navTitle}
          id={section.title}
          active={activeSection.includes(section.title)}
          key={section.title}
          showTitle={showTitle}
        />
      ))}
      {/* </AnimatePresence> */}
    </motion.div>
    </motion.div>
  );
};
