"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

import { divVariants, H2 } from "@/components/Reveal";
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

  const handleWidthChange = useCallback((width: number) => {
    setCardWidth(width);
  }, []);

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
              <ExperimentCard
                key={index}
                title={project.title}
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

const ExperimentCard = ({
  title,
  description,
  href,
  ComingSoon,
  component: Component,
  onWidthChange,
}: Project & {
  index: number;
  onWidthChange: (width: number) => void;
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // The legacy image card was removed; this text card keeps the carousel measurable.
    if (cardRef.current) {
      onWidthChange(cardRef.current.offsetWidth);
    }
  }, [onWidthChange]);

  const content = (
    <div
      ref={cardRef}
      className="flex min-h-80 w-[min(78vw,360px)] shrink-0 flex-col justify-between rounded-md border border-light-softLight bg-light-base p-6 dark:border-dark-softLight dark:bg-dark-base"
    >
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-light-softBody dark:text-dark-softBody">
          {ComingSoon ? "Coming Soon" : "Experiment"}
        </p>
        <h3 className="text-2xl font-semibold text-light-body dark:text-dark-body">{title}</h3>
        <p className="mt-4 text-sm leading-6 text-light-softBody dark:text-dark-softBody">{description}</p>
      </div>
      {Component ? (
        <div className="mt-8 overflow-hidden rounded-md border border-light-softLight dark:border-dark-softLight">
          <Component />
        </div>
      ) : null}
    </div>
  );

  if (!href || ComingSoon) {
    return content;
  }

  return (
    <Link href={href} target="_blank" rel="noreferrer">
      {content}
    </Link>
  );
};
