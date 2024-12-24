"use client"
import { AnimatePresence, motion } from 'motion/react'
import React, { useState } from 'react'

export const OpenForWork = () => {
  const [show, setShow] = useState(false)


  
  return (
    <motion.div className="flex items-center gap-4 overflow-hidden rounded-full bg-light-base dark:bg-dark-base p-4"
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    
    
    transition={{ when: "beforeChildren", delay: 0.5, duration: 6.5, delayChildren: 0.5 }}
    viewport={{ once: true }}
    >
      <motion.div className="h-4 w-4 rounded-full bg-[#00f508]" 
      variants={{
        initial: {  scale: 0 },
        animate: {  scale: [0, 1.5, 1] },
        
      }}
      transition={{ duration: 0.5, times: [0, 0.7, 1] }}
      initial="initial"
      animate="animate"
      
      viewport={{ once: true }}
      />
<AnimatePresence>
  {show && (
      <motion.small className=""
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.5, delay: 0.45 }}
      viewport={{ once: true }}
      >Open for Work and Collabration</motion.small>
      )}
      </AnimatePresence>
    </motion.div>
  )
}
