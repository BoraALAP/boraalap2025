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
    // const scrollPosition = window.scrollY;
    
    if(pathname === "/developer") {
      router.push("/design");
    } else {
      router.push("/developer");
    }

    // // Restore scroll position after route change
    // window.requestAnimationFrame(() => {
    //   window.scrollTo(0, scrollPosition);
    // });
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Prevent default scroll behavior for Space key
      handleSwitch();
    }
  };

  const variants = {
    initial: { scale :1, opacity: 0, y: -50 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 1, opacity: 0, y: 50 },
   
    
  }
  const pinVariants = {
    initial: { scale: 1 },
    whileTap: { scale: 0.5 },
    whileHover: { scale: 1.5 },
  }

  return (
    <motion.div 
    initial="initial"
    animate="animate"
    exit="exit"
  
    transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
    variants={variants}
    
    tabIndex={0}
      className={`relative group rounded-full shadow-md border border-light-softLight dark:border-dark-softLight w-14 p-0.5 items-center gap-2 inline-flex  transition-colors duration-300 ${
        isDev 
          ? "justify-end bg-[#00f508]" 
          : "justify-start bg-light-bg dark:bg-dark-bg"
      }`} 
      onClick={handleSwitch}
      onKeyDown={handleKeyDown}
      
      
      
      
    >
      <motion.div 
        layout 
        transition={{ ease: "easeInOut", duration: 0.3 }} 
        variants={pinVariants}
        whileTap="whileTap"
    whileHover="whileHover"
     
        className="flex justify-center items-center w-7 h-7 relative bg-light-base dark:bg-dark-base rounded-full shadow-sm border border-light-softLight dark:border-dark-softLight overflow-hidden"
      >
        <DevLogo />
      </motion.div>
    </motion.div>
  );
}