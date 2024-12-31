"use client"
import { motion, useMotionValue, useSpring } from 'motion/react';
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
      console.log("Cursor View Project Rendered");
      // Existing code...
    }, []);
  
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



export const CircleCursor = ({word = "Scroll Down"}: {word?: string}) => {
  // Create motion values for cursor
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Create smooth spring animation for cursor movement
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    console.log("Cursor Circle Rendered");
    // Existing code...
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  const radius = 80; // Radius of the circle
  const angleStep = 360 /`${word} `.length; // Angle between each letter

  return (
    <motion.div
      className={`pointer-events-none fixed left-0 top-0 z-50 hidden items-center justify-center group-hover:flex`}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <motion.div
        className="relative   rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {`${word} `.split("").map((letter, index) => {
          const angle = index * angleStep;
          return (
            <span
              key={index}
              className="absolute"
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(90deg)`,
                transformOrigin: '0 0',
              }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
