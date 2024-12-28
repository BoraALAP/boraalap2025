"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { H2,H3, P } from "@/components/Reveal";
import connect from "../../../../public/projects/connect/thumbnail.png"
import brick from "../../../../public/projects/bricks/thumbnail.png"

export const Work = () => {
  return (
    <section className="px-[5vw] py-20">
      <div className="flex flex-col gap-6">
        <H2 className="">Work</H2>
        <div className="grid grid-cols-1 items-center justify-center gap-8 self-stretch lg:grid-cols-2">
          <WorkCard
            title="Freshbooks Connect"
            description="Designed a mobile application to streamline workflows for team
            members and business owners in the trades industry, facilitating
            time, expense, and mileage tracking."
            metrics={[
              { metrics: "User Retention Rate", value: "40%" },
              { metrics: "Data Accuracy Improvement", value: "25%" },
            ]}
            link="/design/connect"
            src={connect.src}
          />
          <WorkCard
            title="FreshBricks"
            description="Developed a comprehensive design system to unify design and development practices across FreshBooks’ web applications, with future integration plans for mobile platforms."
            metrics={[
              { metrics: "Adoption Rate", value: "93%" },
              { metrics: "Development Time Reduction", value: "30%" },
            ]}
            link="/design/brick"
            src={brick.src}
          />
        </div>
      </div>
    </section>
  );
};

const WorkCard = ({
  title,
  description,
  metrics,
  link,
  src,
}: {
  title: string;
  description: string;
  metrics: {
    metrics: string;
    value: string;
  }[];
  link: string;
  src: string;
}) => {
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
   
    <Link
      href={link}
      
    >
       <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="group w-full relative inline-flex cursor-none flex-col items-start overflow-hidden justify-start rounded-md  lg:pb-28"
    >
      {/* Custom Cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 hidden rounded-full bg-light-accent px-4 py-2 group-hover:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <span className="text-light-base dark:text-dark-base text-md font-semibold">View Project</span>
      </motion.div>
      <div className="relative aspect-square h-full w-full md:mb-10">
        <Image
          className="object-contain object-center bg-light-base dark:bg-dark-base"
          src={src}
          alt="Freshbooks Connect"
          fill
          placeholder="blur"
          blurDataURL={src}
        />
      </div>
      {/* content */}
      <div className="bottom-0 left-0 right-0 flex flex-col items-start justify-start gap-4 self-stretch overflow-hidden bg-light-base dark:bg-dark-base p-8  md:absolute md:inline-flex md:flex-row">
        {/* description */}
        <div className="flex flex-col items-start justify-start gap-4">
          <H3 className="text-4xl font-medium text-light-body">{title}</H3>
          <P className="text-light-softBody">{description}</P>
        </div>

        {/* bottom metrics */}
        <div className="flex w-full flex-row gap-4 gap-y-4 border-t border-light-bodyLight pt-4 transition-all duration-[650ms] ease-in-out md:w-max md:flex-col md:border-l md:border-t-0 md:pl-6 md:pt-0 lg:max-h-0 lg:w-0 lg:max-w-64 lg:translate-x-60 lg:scale-95 lg:overflow-hidden lg:opacity-0 lg:group-hover:max-h-[500px] lg:group-hover:w-full lg:group-hover:translate-x-0 lg:group-hover:scale-100 lg:group-hover:opacity-100">
          {metrics.map((metric: { metrics: string; value: string }) => (
            <div className="flex flex-grow flex-col gap-1" key={metric.metrics}>
              <h6 className="text-4xl font-medium leading-10 text-light-body">
                {metric.value}
              </h6>
              <h5 className="text-wrap text-base font-semibold leading-normal text-light-softBody">
                {metric.metrics}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
    </Link>
  );
};
