"use client"
import React, { useRef, useEffect, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export const DarkCircles = () => {
  const containerRef = useRef(null);
  const spring1Config = { damping:75, stiffness: 400 };
  const spring2Config = { damping:75, stiffness: 300 };
  const spring3Config = { damping:75, stiffness: 100 };
  
  const circle1X = useMotionValue(0);
  const circle1Y = useMotionValue(0);
  const circle1XSpring = useSpring(circle1X, spring1Config);
  const circle1YSpring = useSpring(circle1Y, spring1Config);
  const circle2X = useMotionValue(0);
  const circle2Y = useMotionValue(0);
  const circle2XSpring = useSpring(circle2X, spring2Config);
  const circle2YSpring = useSpring(circle2Y, spring2Config);
  const circle3X = useMotionValue(0);
  const circle3Y = useMotionValue(0);
  const circle3XSpring = useSpring(circle3X, spring3Config);
  const circle3YSpring = useSpring(circle3Y, spring3Config);

  

  

  const resetPositions = useCallback(() => {
    circle1X.set(0);
    circle1Y.set(0);
    circle2X.set(0);
    circle2Y.set(0);
    circle3X.set(0);
    circle3Y.set(0);

  }, [circle1X, circle1Y, circle2X, circle2Y, circle3X, circle3Y]);



  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = (container as HTMLElement).getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const distanceX = x - centerX;
      const distanceY = y - centerY;


      const circle2Element = document.querySelector('.circle2-class'); // Assuming Circle2 has a class 'circle2-class'
      const circle3Element = document.querySelector('.circle3-class'); // Assuming Circle3 has a class 'circle3-class'
      

      if (!circle2Element || !circle3Element ) return;

      const circle2Rect = circle2Element.getBoundingClientRect();
      const circle3Rect = circle3Element.getBoundingClientRect();

      const circle2CenterX = circle2Rect.width/2 ;
      const circle2CenterY = circle2Rect.height/2 ;
      const circle3CenterX = circle3Rect.width/2 ;
      const circle3CenterY = circle3Rect.height/2 ;

      // Circle 2
      circle2X.set(distanceX - circle2CenterX );
      circle2Y.set(distanceY + circle2CenterY );
      

      // Circle 1
      circle1X.set(distanceX * 0.1);
      circle1Y.set(distanceY * 0.1);
      



      // Circle 3
      circle3X.set(-(distanceX - circle3CenterX) * 0.6);
      circle3Y.set(-(distanceY + circle3CenterY) * 0.6);
      

      
      
    };

    const container = containerRef.current;
    if (container) {
      (container as HTMLElement).addEventListener('mousemove', handleMouseMove);
      (container as HTMLElement).addEventListener('mouseleave', resetPositions);
    }

    return () => {
      if (container) {
        (container as HTMLElement).removeEventListener('mousemove', handleMouseMove);
        (container as HTMLElement).removeEventListener('mouseleave', resetPositions);
      }
    }; 
  }, [circle1X, circle1Y, circle2X, circle2Y, circle3X, circle3Y, resetPositions]);

  return (
    <div ref={containerRef} className="relative w-full flex justify-center items-center aspect-square bg-black">
      <motion.div
        className="absolute w-3/5 h-3/5 z-20 "
        style={{ x: circle1XSpring, y: circle1YSpring }}
      >
        <Circle1 />
      </motion.div>
      <motion.div
        className="absolute w-2/5 h-2/5 left-2/4 bottom-2/4 z-10 circle2-class"
        style={{ x: circle2XSpring, y: circle2YSpring }}
      >
        <Circle2 />
      </motion.div>
       <motion.div
        className="absolute w-1/5 h-1/5 right-2/4 top-2/4 z-0 circle3-class"
        style={{ x: circle3XSpring, y: circle3YSpring }}
      >
        <Circle3 />
      </motion.div>
  
    </div>
  );
};


const Circle2 = () => {
  return (
<div className="w-full h-full rounded-full  border-2 border-white" 
    style={{
      boxShadow: `0px 0px 44px 32px rgba(255,255,255,0.25), 0px 0px 12px 12px rgba(255,255,255,0.25)`,
      background: `radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.6) 0%, rgba(29, 29, 29, 0.6) 28.5%, rgba(0, 0, 0, 0.6) 100%)`
    }}
/>
  )
}
const Circle1 = () => {
  return (
    <div className="w-full h-full bg-black rounded-full  border-8 border-white" 
      style={{
        boxShadow: `0px 0px 84px 40px rgba(255,255,255,0.45), 0px 0px 12px 12px rgba(255,255,255,0.25),
        -60px 60px 84px 5px rgba(255,255,255,0.25), -40px 40px 32px 0px rgba(255,255,255,0.25)
        `,
        background: `radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.6) 0%, rgba(29, 29, 29, 0.6) 28.5%, rgba(0, 0, 0, 0.6) 100%)`
      }}
    />
  )
}
const Circle3 = () => {
  return (
<div className="w-full h-full rounded-full  border border-white" 
    style={{
      boxShadow: `0px 0px 44px 32px rgba(255,255,255,0.25), 0px 0px 12px 12px rgba(255,255,255,0.25)`,
      background: `radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.6) 0%, rgba(29, 29, 29, 0.6) 28.5%, rgba(0, 0, 0, 0.6) 100%)`
    }}
/>

    
  )
}


