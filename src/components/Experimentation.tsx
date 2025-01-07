"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

import { divVariants, H2 } from "@/components/Reveal";
import { ProjectCard } from "@/components/subelements/ProjectCard";
import {
  SliderNextArrow,
  SliderPrevArrow,
} from "@/components/subelements/SliderArrows";
import { StaticImageData } from "next/image";

interface Project {
  title: string;
  description: string;
  href?: string;
  image?: StaticImageData;
  ComingSoon?: boolean;
  component?: React.ComponentType<unknown>;
}

interface ExperimentationProps {
  projects: Project[];
}

export const Experimentation = ({ projects }: ExperimentationProps) => {
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
    <motion.section
      className="relative flex flex-col items-start justify-start gap-6 overflow-x-hidden py-20"
      initial="hidden"
      whileInView="show"
      variants={divVariants}
      viewport={{ once: true }}
    >
      <div className="items-center justify-center gap-4 px-[5vw]">
        <H2>Side Projects / Experiments</H2>
      </div>
      <div className="relative w-screen px-[5vw]">
        <SliderPrevArrow disabled={currentIndex <= 0} handlePrev={handlePrev} />
        <SliderNextArrow
          disabled={currentIndex >= projects.length - visibleCards}
          handleNext={handleNext}
        />
        <div className="relative">
          <motion.div
            className="flex w-fit gap-8"
            animate={{ x: -currentIndex * (cardWidth + 32) }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                image={project.image?.src}
                index={index}
                onWidthChange={handleWidthChange}
                description={project.description}
                href={project.href}
                ComingSoon={project.ComingSoon}
                component={project.component}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
