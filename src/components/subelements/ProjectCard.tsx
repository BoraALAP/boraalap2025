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

  return (
    <div
      ref={cardRef}
      className="relative w-full h-[80vh]  max-h-[80vh] aspect-[3/6] overflow-hidden rounded-3xl select-none"
    
    >
      <div className="absolute inset-0">
        <Image
          className="pointer-events-none object-cover select-none [-webkit-user-drag:none] [-webkit-touch-callout:none]"
          src={image}
          alt={title}
          fill
          priority={index < 3}
          draggable={false}
          unoptimized
        />
      </div>
    </div>
  );
};

