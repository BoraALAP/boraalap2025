"use client";

import { useLenis } from "lenis/react";

export const useScrollToSection = () => {
  const lenis = useLenis();

  return (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element && lenis) {
      lenis.scrollTo(element, {
        offset: -100,
        duration: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };
};
