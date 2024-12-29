import { motion } from "motion/react";
import Image from "next/image";
import { useRef, useEffect } from "react";
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
}: {
  title: string;
  description?: string;
  href?: string;
  image?: string;
  index: number;
  ComingSoon?: boolean;
  onWidthChange: (width: number) => void;
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      const width = cardRef.current.getBoundingClientRect().width;
      
      onWidthChange(width);
    }
  }, [onWidthChange]);


  return (
    <motion.div
      ref={cardRef}
      className="relative select-none rounded-md overflow-hidden max-w-[400px] w-[80vw] md:max-w-[640px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div className="absolute bottom-0 left-0 w-2/3 h-fit px-8 py-6 pr-12 bg-light-base dark:bg-dark-base rounded-tr-full drop-shadow-2xl flex items-center justify-between gap-2"
      >
        <div className="flex flex-col items-start justify-start gap-2">
          <H3 className="text-light-body dark:text-dark-body">{title}</H3>
          {ComingSoon ? <h3 className="text-light-body dark:text-dark-body">Coming Soon</h3> : 
          description && <P className="text-light-softBody dark:text-dark-softBody">
            {description}
          </P>}
        </div>
        {href && <Link href={href} className="">
          <div className="flex items-center justify-center text-light-accent dark:text-dark-accent p-4 rounded-full bg-light-bg dark:bg-dark-bg">
            <IoArrowForward className="text-light-accent dark:text-dark-accent" size={24} />
          </div>
        </Link>}
      </motion.div>
      <div className=" inset-0  w-full h-full  overflow-hidden ">
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
      </div>
    </motion.div>
  );
};

