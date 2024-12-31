"use client"
import { AnimatePresence, motion } from 'motion/react'
import React from 'react'
import Link from 'next/link'
import { IoChatbubble } from 'react-icons/io5'
// import { External } from '@/assets/External'

export const OpenForWork = () => {
  
  const containerVariants = {
    initial: { opacity: 0, x: 30 },
    view: { opacity: 1, x: 0 },
    hover: { opacity: 1, x: 0 },
  }
  
  const dotVariants = {
    initial: { scale: 0 },
    animate: { scale: [0, 1.5, 1], transition: { delay: 0.3, duration: 0.3, times: [0, 0.7, 1] } },
    hover: { scale: 100, x: 100, y:-50, transition: { scale: { duration: 0.6,  ease: "easeInOut" }, x: { duration: 0.2,  ease: "easeInOut" }, y: { duration: 0.2,  ease: "easeInOut" } } }
  }
  
  const iconVariants = {
    initial: { opacity: 0, scale: 0 },
    hover: { opacity: 1, scale: 1 },
  }
  
  const textVariants = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0, transition:{ duration: 0.5, delay: 0.45 } },
    exit: { opacity: 0, x: 30 },
  }


  
  return (
    <Link href="https://linkedin.com/in/boraalap" target="_blank">
    <motion.div className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-light-base dark:bg-dark-base transition-colors duration-500 ease-in-out p-4"
   variants={containerVariants}
   initial="initial"
   animate="animate"
   whileInView="view"
   whileHover="hover"
   transition={{  delay: 0.5, duration: 0.5}}
   viewport={{ once: true }}
   >
      <motion.div className="h-4 w-4 rounded-full  bg-[#00f508]" 
      variants={dotVariants}
      viewport={{ once: true }}
      >
        
      </motion.div>
        <motion.div variants={iconVariants} className="absolute  flex items-center justify-center left-4 top-4.5">
          <IoChatbubble className="text-light-body dark:text-dark-body group-hover:text-light-base dark:group-hover:text-dark-base transition-colors duration-300 ease-in-out" size={16}  />
        </motion.div>
      <AnimatePresence>
      {/* {show && ( */}
        <motion.small className="z-10 group-hover:text-light-base dark:group-hover:text-dark-base transition-colors duration-300 ease-in-out"
        variants={textVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        
        viewport={{ once: true }}
        >Open for Work and Collabration</motion.small>
        {/* <div className="relative h-6 w-6 overflow-hidden">
          <External />
        </div> */}
      {/* )} */}
      </AnimatePresence>
    </motion.div>
    </Link>
  )




}