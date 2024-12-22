"use client"

import { DevLogo } from "@/assets/DevLogo";
import { motion } from "motion/react";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export const Switch = () => {
  const [isDev, setIsDev] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if(pathname === "/developer") {
      setIsDev(true);
    } else {
      setIsDev(false);
    }
  }, [pathname]);

  const handleSwitch = () => {
    // Store current scroll position
    const scrollPosition = window.scrollY;
    
    if(pathname === "/developer") {
      router.push("/design");
    } else {
      router.push("/developer");
    }

    // Restore scroll position after route change
    window.requestAnimationFrame(() => {
      window.scrollTo(0, scrollPosition);
    });
  }

  return (
    <div 
      className={`relative rounded-full shadow-md border border-light-softLight dark:border-dark-softLight w-14 p-0.5 items-center gap-2 inline-flex overflow-hidden transition-colors duration-300 ${
        isDev 
          ? "justify-end bg-[#00f508]" 
          : "justify-start bg-light-bg dark:bg-dark-bg"
      }`} 
      onClick={handleSwitch}
    >
      <motion.div 
        layout 
        transition={{ ease: "easeInOut", duration: 0.3 }} 
        className="flex justify-center items-center w-7 h-7 relative bg-light-base dark:bg-dark-base rounded-full shadow-sm border border-light-softLight dark:border-dark-softLight overflow-hidden"
      >
        <DevLogo />
      </motion.div>
    </div>
  );
}