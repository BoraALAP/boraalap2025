"use client"
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { H3,P } from "@/components/Reveal";
import { CircleCursor } from "@/utils/CustomCursor";


export const WorkCard = ({
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
      <CircleCursor word="View Project" />
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
          <H3 className=" font-medium text-light-body">{title}</H3>
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