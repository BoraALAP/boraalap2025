"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { divVariants, H2 } from "@/components/Reveal";
import { ProjectCard } from "@/components/subelements/ProjectCard";
import { SliderNextArrow, SliderPrevArrow } from "@/components/subelements/SliderArrows";

const projects = [
  { title: "Experiment 1", image: "https://picsum.photos/700" },
  { title: "Experiment 2", image: "https://picsum.photos/700" },
  { title: "Experiment 3", image: "https://picsum.photos/700" },
  { title: "Experiment 4", image: "https://picsum.photos/700" },
  { title: "Experiment 5", image: "https://picsum.photos/700" },
  { title: "Experiment 6", image: "https://picsum.photos/700" },
  { title: "Experiment 7", image: "https://picsum.photos/700" },
  { title: "Experiment 8", image: "https://picsum.photos/700" },
  { title: "Experiment 9", image: "https://picsum.photos/700" },
  { title: "Experiment 10", image: "https://picsum.photos/700" },
  { title: "Experiment 11", image: "https://picsum.photos/700" },
  { title: "Experiment 12", image: "https://picsum.photos/700" },
  { title: "Experiment 13", image: "https://picsum.photos/700" },
  { title: "Experiment 14", image: "https://picsum.photos/700" },
  { title: "Experiment 15", image: "https://picsum.photos/700" },
  { title: "Experiment 16", image: "https://picsum.photos/700" },
  { title: "Experiment 17", image: "https://picsum.photos/700" },
];

export const Experimentation = () => {
  const [cardWidth, setCardWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (cardWidth > 0) {
        const viewportWidth = window.innerWidth;
        setVisibleCards(Math.floor(viewportWidth / cardWidth));
      }
    };

    window.addEventListener("resize", updateVisibleCards);
    updateVisibleCards();

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, [cardWidth]);

  const handleWidthChange = (width: number) => {
    setCardWidth(width);
  };

  const handleNext = () => {
    if (currentIndex < projects.length - visibleCards) {
      setCurrentIndex(currentIndex + visibleCards);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - visibleCards);
    }
  };

  return (
    <motion.section className="relative flex flex-col items-start justify-start gap-6 py-20"
    initial="hidden"
    whileInView="show"
    variants={divVariants}  
    viewport={{ once: true }} 
    >
      <div className="items-center justify-center gap-4 px-[5vw]">
        <H2>Projects</H2>
      </div>
      <div className="relative px-[5vw] w-screen">
        <div className="absolute z-10 inset-0 w-full h-full flex items-center justify-center"><h3 className="text-light-body dark:text-dark-body">Coming Soon</h3></div>  
        <SliderPrevArrow disabled={currentIndex <= 0 || true} handlePrev={handlePrev}/>
        <SliderNextArrow disabled={currentIndex >= projects.length - visibleCards || true} handleNext={handleNext}/>
        <div className="relative blur-lg opacity-50 overflow-x-hidden">
          <motion.div
            className="flex gap-4 w-fit"
            animate={{ x: -currentIndex * (cardWidth + 16) }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                image={project.image}
                index={index}
                onWidthChange={handleWidthChange}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};


