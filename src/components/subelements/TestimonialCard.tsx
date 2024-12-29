"use client"

import { useState } from "react";
import { motion, useTransform, AnimatePresence, MotionValue } from "framer-motion";
import { H3, H4, P } from "@/components/Reveal";
import Image, { StaticImageData } from 'next/image'
import { TestimonialsModal } from "../TestimonialsModal";

export const TestimonialCard = ({
  image,
  name,
  title,
  quote,
  index,
  progress,
  range,
  targetScale,
}: {
  image: StaticImageData;
  name: string;
  title: string;
  quote?: string[];
  index: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const scale = useTransform(progress, range, [1, targetScale]); 
  return (
    <>
    <motion.div className={`  flex flex-col gap-6 sticky   rounded-2xl  bg-light-base dark:bg-dark-base p-8`} 
      style={{top: `calc(10px + ${index * 100}px)`, scale: scale}}

    >
      <div className="flex flex-col gap-2">
        <div className="inline-flex justify-between">
          <div className="flex flex-row gap-4 items-center">

            <Image
              className="h-14 w-14 rounded-full"
              src={image}
              alt={name}
              width={54}
              height={54}
            />
            <div className="flex flex-col gap-1">
              <H3 className="text-lg font-medium text-light-body dark:text-dark-body">{name}</H3>
              <H4 className="text-base font-semibold text-light-softBody dark:text-dark-softBody">
                {title}
              </H4>
            </div>
          </div>

          <ReadButton setIsOpen={setIsOpen} />
        </div>
      </div>
      <div className=" ">
        <P className="line-clamp-4 max-w-none flex-col gap-2 ">
          {quote && quote.map((q, index) => <span key={index}>{q}</span>)}
        </P>
      </div>
    </motion.div>
    <AnimatePresence mode="popLayout">

    {isOpen && <TestimonialsModal quote={quote} name={name} title={title} image={image} setIsOpen={setIsOpen} />}
    </AnimatePresence>
    </>
  );
};

const ReadButton = ({setIsOpen}: {setIsOpen: (isOpen: boolean) => void}) => {


  return (
    <AnimatePresence mode="popLayout">
    <motion.div
      className="inline-flex group h-fit w-fit min-h-6 min-w-6 cursor-pointer items-center overflow-hidden rounded-md  px-4 py-2"
      layout
      initial="initial"
      whileHover="hover"
      exit="initial"
      onClick={() => setIsOpen(true)}
    >
      {/* Icon Container */}
      <div className="h-6 w-6 ">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <motion.path
            className="stroke-light-accent dark:stroke-dark-accent"
            variants={{
              initial: {
                d: "M19 3H10.6C9.11479 3 7.69041 3.42143 6.6402 4.17157C5.59 4.92172 5 5.93913 5 7V21C5 20.2044 5.4425 19.4413 6.23015 18.8787C7.0178 18.3161 8.08609 18 9.2 18H19V3Z",
              },
              hover: {
                d: "M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z",
              },
            }}
            
            transition={{ duration: 0.5 }}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.path
            className="stroke-light-accent dark:stroke-dark-accent"
            variants={{
              initial: {
                d: "M18.9998 3H10.5999C9.11473 3 7.69037 3.42143 6.64018 4.17157C5.58999 4.92172 5 5.93913 5 7V21C6.64018 21 13.3999 21 16.8998 21C19.0644 21 18.9998 18 18.9998 18V3Z",
              },
              hover: {
                d: "M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 10.5161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z",
              },
            }}
            transition={{ duration: 0.5 }}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Text */}  
      <motion.span
        className="text-nowrap  text-lg font-medium text-light-accent dark:text-dark-accent"
        variants={{
          initial: { x: 30, opacity: 0, width: 0, paddingLeft: 0 },
          hover: { x: 0, opacity: 1, width: "auto", paddingLeft: 8 },
        }}
        transition={{ duration: 0.5 }}
      >
        Read More
      </motion.span>
        
    </motion.div>
      </AnimatePresence>
  );
};