"use client"
import Link from "next/link";
import { Switch } from "./subelements/Switch";
import { Social } from "./subelements/Social";
import { motion } from "motion/react";

export const Header = () => {
  return (
    <header tabIndex={-1} className="h-20 flex px-10 py-6 bg-white dark:bg-black dark:text-white justify-between items-center transition-colors duration-200">
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
    </header>
  );
};
