import { motion } from "motion/react";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { H3, P } from "../Reveal";
import Link from "next/link";

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
      className="relative select-none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="absolute bottom-0 left-0 w-2/3 h-fit">
        <H3 className="text-light-body dark:text-dark-body">{title}</H3>
        {description && <P className="text-light-softBody dark:text-dark-softBody">
          {description}
        </P>}
        {href && <Link href={href} className="text-light-accent dark:text-dark-accent">
          View Project
        </Link>}
        {ComingSoon && <h3 className="text-light-body dark:text-dark-body">Coming Soon</h3>}
      </div>
      <div className=" inset-0 rounded-md w-[400px] overflow-hidden ">
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

