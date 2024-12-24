"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { H2 } from "@/components/Reveal";

const projects = [
  {
    title: "Experiment 1",
    image: "https://picsum.photos/400",
  },
  {
    title: "Experiment 2",
    image: "https://picsum.photos/400",
  },
  {
    title: "Experiment 3",
    image: "https://picsum.photos/400",
  },
  {
    title: "Experiment 4",
    image: "https://picsum.photos/400",
  },
  {
    title: "Experiment 5",
    image: "https://picsum.photos/400",
  },
];

export const Experimentation = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  const x = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 400 };
  const springX = useSpring(x, springConfig);

  // Update dimensions when content changes or window resizes
  useEffect(() => {
    const updateDimensions = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const newContainerWidth = container.clientWidth;
        const newScrollWidth = container.scrollWidth;

        setContainerWidth(newContainerWidth);
        setScrollWidth(newScrollWidth);

        // Update scroll buttons on dimension change
        const currentX = x.get();
        const maxScroll = -(newScrollWidth - newContainerWidth);
        setCanScrollLeft(currentX < -1);
        setCanScrollRight(currentX > maxScroll + 1);
      }
    };

    // Initial update
    updateDimensions();

    // Update on window resize
    window.addEventListener("resize", updateDimensions);

    // Create ResizeObserver to watch for content changes
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (scrollContainerRef.current) {
      resizeObserver.observe(scrollContainerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateDimensions);
      resizeObserver.disconnect();
    };
  }, [x]);

  // Track motion value changes
  useEffect(() => {
    const unsubscribe = springX.on("change", (latest) => {
      const maxScroll = -(scrollWidth - containerWidth);
      setCanScrollLeft(latest < -1);
      setCanScrollRight(latest > maxScroll + 1);
    });

    return () => unsubscribe();
  }, [springX, scrollWidth, containerWidth]);

  const scrollLeft = () => {
    if (scrollContainerRef.current && canScrollLeft) {
      const cardWidth =
        scrollContainerRef.current.children[0]?.clientWidth ?? 0;
      const newX = x.get() + cardWidth + 16;
      springX.set(Math.min(newX, 0));
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current && canScrollRight) {
      const cardWidth =
        scrollContainerRef.current.children[0]?.clientWidth ?? 0;
      const newX = x.get() - (cardWidth + 16);
      const maxScroll = -(scrollWidth - containerWidth);
      springX.set(Math.max(newX, maxScroll));
    }
  };

  return (
    <section className="inline-flex w-full flex-col items-start justify-start gap-6 overflow-hidden px-[5vw] py-20">
      <div className="inline-flex items-center justify-center gap-4">
        <H2
        >
          Experimentation
        </H2>
        <div className="flex gap-2">
          <motion.button
            onClick={scrollLeft}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
              canScrollLeft
                ? "text-[#388FB4] hover:bg-gray-100"
                : "cursor-not-allowed text-gray-400 opacity-50"
            }`}
            whileHover={canScrollLeft ? { scale: 1.05 } : {}}
            whileTap={canScrollLeft ? { scale: 0.95 } : {}}
          >
            <svg
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
            >
              <path
                d="M9 5.8L5.8 9M5.8 9L9 12.2M5.8 9H12.2M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
          <motion.button
            onClick={scrollRight}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
              canScrollRight
                ? "text-[#388FB4] hover:bg-gray-100"
                : "cursor-not-allowed text-gray-400 opacity-50"
            }`}
            whileHover={canScrollRight ? { scale: 1.05 } : {}}
            whileTap={canScrollRight ? { scale: 0.95 } : {}}
          >
            <svg
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
            >
              <path
                d="M9 12.2L12.2 9M12.2 9L9 5.8M12.2 9H5.8M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="scrollbar-hide w-full cursor-grab active:cursor-grabbing"
      >
        <motion.div
          className="flex gap-8"
          drag="x"
          dragConstraints={{
            left: -((projects.length - 2.4) * (400 + 32)),
            right: 0,
          }}
          style={{ x: springX }}
          dragElastic={0}
          dragMomentum={false}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  image,
  index,
}: {
  title: string;
  image: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="relative h-[400px] min-w-[400px] select-none overflow-hidden rounded-3xl"
      onDragStart={(e) => e.preventDefault()}
    >
      <div className="relative h-full w-full">
        <Image
          className="pointer-events-none object-cover transition-transform duration-700 hover:scale-105"
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 3}
          draggable={false}
        />
      </div>
    </motion.div>
  );
};
