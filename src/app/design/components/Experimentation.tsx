"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { ProjectCard } from "@/components/subelements/ProjectCard";

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
    <section className="relative flex flex-col items-start justify-start gap-6 px-[5vw] py-20">
      <div className="items-center justify-center gap-4">
        <h2>Experimentation</h2>
      </div>
      <button
          onClick={handlePrev}
          className={`absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-md transition-all ${
            currentIndex > 0 ? "opacity-100 hover:scale-110" : "cursor-not-allowed opacity-40"
          }`}
          disabled={currentIndex <= 0}
        >
          <IoChevronBack size={24} />
        </button>

        <button
          onClick={handleNext}
          className={`absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-md transition-all ${
            currentIndex < projects.length - visibleCards ? "opacity-100 hover:scale-110" : "cursor-not-allowed opacity-40"
          }`}
          disabled={currentIndex >= projects.length - visibleCards}
        >
          <IoChevronForward size={24} />
        </button>
      <div className="relative">
        

        <motion.div
          className="flex gap-4"
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
    </section>
  );
};


