"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

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
        tabIndex={-1}
          className="floating-header fixed bottom-6 left-1/2 z-50 flex w-[90vw] max-w-96 items-center justify-between gap-6 overflow-hidden rounded-full border border-neutral-200 bg-white py-2 pl-6 pr-2 shadow-lg dark:border-neutral-800 dark:bg-black"
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

          <Link href="/" className="text-sm font-semibold text-neutral-950 dark:text-white">
            Bora Alap
          </Link>
          </motion.div>
          <Social />
        </motion.header>
      )}
    </AnimatePresence>
  );
};

