import { motion } from "motion/react";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { H3, P } from "../Reveal";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

export const ProjectCard = ({
  title,
  description,
  href,
  image,
  index,
  ComingSoon,
  onWidthChange,
  component
}: {
  title: string;
  description?: string;
  href?: string;
  image?: string;
  index: number;
  ComingSoon?: boolean;
  onWidthChange: (width: number) => void;
  component?: React.ComponentType<unknown>;
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      const width = cardRef.current.getBoundingClientRect().width;
      
      onWidthChange(width);
    }
  }, [onWidthChange]);


  const cardContent = (
    
      <motion.div
        ref={cardRef}
        className="relative group select-none rounded-md overflow-hidden bg-light-base dark:bg-dark-base"
        variants={containerVariants}
        initial= "hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
      >
           <div className="   overflow-hidden max-w-[400px] w-[80vw] md:max-w-[640px]  ">
          {image && <Image
            className="pointer-events-none object-cover select-none [-webkit-user-drag:none] [-webkit-touch-callout:none]"
            src={image}
            alt={title}
            width={1000}
            height={1000}
            priority={index < 3}
            draggable={false}
            unoptimized
          />}
          {component && (
            <motion.div className="w-full h-full aspect-square  ">
              {React.createElement(component)}
            </motion.div>
          )}
        </div>
        <motion.div className={"h-fit px-8 py-6 pr-12 drop-shadow-2xl flex items-center justify-between gap-2 duration-300 ease-in-out" + (href !== undefined ? " group-hover:bg-light-body dark:group-hover:bg-dark-body" : "")}
        >
          <div className="flex flex-col items-start justify-start gap-1">
            <H3 className={"text-light-body dark:text-dark-body " + (href !== undefined ? "group-hover:text-light-base dark:group-hover:text-dark-base" : "")}>{title}</H3>
            {ComingSoon ? <h3 className={"text-light-body dark:text-dark-body " + (href !== undefined ? "group-hover:text-light-base dark:group-hover:text-dark-base" : "")}>Coming Soon</h3> : 
            description && <P className={"text-light-softBody dark:text-dark-softBody " + (href !== undefined ? "group-hover:text-light-base dark:group-hover:text-dark-base" : "")}>
              {description}
            </P>}
          </div>
          {href && 
            <motion.div className="flex items-center justify-center text-light-accent dark:text-dark-accent p-4 rounded-full bg-light-bg dark:bg-dark-bg" variants={buttonVariants} >
              <IoArrowForward className="text-light-accent dark:text-dark-accent" size={24} />
            </motion.div>
          }
        </motion.div>
     
      </motion.div>
    
  );


  return href ? <Link href={href} target="_blank" rel="noopener noreferrer">{cardContent}</Link> : cardContent;
};





const buttonVariants = {
  hidden: { opacity: 0, scale:0 },
  visible: { opacity: 0, scale: 0 },
  hover: { opacity: 1, scale: 1},
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  hover: { opacity: 1 },
};