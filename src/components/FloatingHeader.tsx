"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

import { Switch } from "./subelements/Switch";
import { useEffect, useState } from "react";
import { Social } from "./subelements/Social";

export const FloatingHeader = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const header = document.querySelector('header:not(.floating-header)');
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (header) {
      observer.observe(header);
    }

    return () => {
      if (header) {
        observer.unobserve(header);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {!isHeaderVisible && (
        <motion.header
          className="floating-header fixed bottom-6 left-1/2 justify-between z-50 pl-8 pr-2 py-2 bg-light-base dark:bg-dark-base overflow-hidden rounded-full flex items-center gap-6 w-[90vw] shadow-lg  max-w-96"
          initial={{ y: 100, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1  }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          
        >
          <motion.div initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1  }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
          >

          <Link href="/">
            <h1>Bora Alap</h1>
          </Link>
          </motion.div>
          <Switch />
          <Social />
        </motion.header>
      )}
    </AnimatePresence>
  );
};


