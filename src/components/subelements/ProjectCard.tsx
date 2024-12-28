import { motion } from "motion/react";
import Image from "next/image";
import { useRef, useEffect } from "react";

export const ProjectCard = ({
  title,
  image,
  index,
  onWidthChange,
}: {
  title: string;
  image: string;
  index: number;
  onWidthChange: (width: number) => void;
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      const width = cardRef.current.getBoundingClientRect().width;
      
      onWidthChange(width);
    }
  }, [onWidthChange]);
console.log(image);

  return (
    <motion.div
      ref={cardRef}
      className="relative     select-none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className=" inset-0 rounded-md w-[400px] overflow-hidden ">
        <Image
          className="pointer-events-none object-cover select-none [-webkit-user-drag:none] [-webkit-touch-callout:none]"
          src={image}
          alt={title}
          width={1000}
          height={1000}
          priority={index < 3}
          draggable={false}
          unoptimized
        />
      </div>
    </motion.div>
  );
};

