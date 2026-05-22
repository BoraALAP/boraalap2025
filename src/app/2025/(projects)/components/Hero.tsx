import Image from "next/image";

import { H3, H2 } from "@/components/Reveal";
import { CircleCursor } from "@/utils/CustomCursor";

export const Hero = ({
  title,
  subtitle,
  src,
}: {
  title: string;
  subtitle: string;
  src: string;
}) => {
  return (
    <section className="group relative h-[80vh] w-full cursor-none overflow-hidden">
      <CircleCursor word="Scroll Down" />
      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={src}
          alt="Background"
          width={1000}
          height={1000}
          className="object-contain"
          priority
          placeholder="blur"
          blurDataURL={src}
        />
      </div>

      {/* Text Content */}
      <div className="relative flex h-full flex-col items-center justify-end bg-gradient-to-b from-transparent to-light-bg px-4 pb-[10vh] text-center">
        <H2>{title}</H2>
        <H3 className="text-2xl text-light-body dark:text-dark-body">
          {subtitle}
        </H3>
      </div>
    </section>
  );
};
