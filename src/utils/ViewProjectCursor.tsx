"use client"
import { motion, useMotionValue } from 'motion/react';
import { useSpring } from 'motion/react';
import React, { useEffect } from 'react'

export const ViewProjectCursor = () => {
    // Create motion values for cursor
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
  
    // Create smooth spring animation for cursor movement
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);
  
    useEffect(() => {
      const moveCursor = (e: MouseEvent) => {
        cursorX.set(e.clientX - 16);
        cursorY.set(e.clientY - 16);
      };
  
      window.addEventListener("mousemove", moveCursor);
  
      return () => {
        window.removeEventListener("mousemove", moveCursor);
      };
    }, [cursorX, cursorY]);
    
  return (
    <motion.div
    className="pointer-events-none fixed left-0 top-0 z-50 hidden rounded-full bg-light-accent px-4 py-2 group-hover:block"
    style={{
      x: cursorXSpring,
      y: cursorYSpring,
    }}
    >
      <span className="text-light-base dark:text-dark-base text-md font-semibold">View Project</span>
    </motion.div>
  )
}
