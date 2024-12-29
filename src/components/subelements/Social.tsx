"use client"
import { Github } from '@/assets/Github';
import { Linkedin } from '@/assets/Linkedin';
import Link from 'next/link';
import { motion } from 'framer-motion';


export const Social = () => {
  return (
    <motion.div className="p-2 bg-light-bg dark:bg-dark-bg rounded-full flex items-center gap-2 overflow-hidden">
      <motion.div
      initial={{  x: 120, rotate: 360 }}
      animate={{  x: 0, rotate: 0 }}
      exit={{  x: 60, rotate: 360 }}
      transition={{ duration: 0.8 }}
      >
      <Link href="https://linkedin.com/in/boraalap" aria-label="Linkedin Logo">
        <Linkedin />
      </Link>
      </motion.div>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      >

      <Link href="https://github.com/BoraALAP" aria-label="Github Logo">
          <Github />
        </Link>
      </motion.div>
    </motion.div>
  );
};

