"use client"

import { motion } from "motion/react";
import Image from "next/image";

export const Introduction = ({title, children}: {title: string, children: React.ReactNode}) => {
  return (
    <section className="inline-flex flex-col items-start justify-end gap-10 px-[5vw] pb-24 pt-32" >
      <Image
        className="h-[120px] w-[120px] rounded-full"
        src="https://picsum.photos/200"
        alt="Profile"
        width={120}
        height={120}
      />
      <div className="flex flex-col items-start justify-start gap-6">
        <h2 className="self-stretch text-2xl font-semibold leading-10 text-light-body dark:text-dark-body">
          {title}
        </h2>
        <motion.p className="text-lg font-medium leading-normal text-light-softBody dark:text-dark-softBody" transition={{ duration: 0.5, ease: "easeInOut" }}>
        {children}
        </motion.p>
        <div className="flex items-center gap-4 overflow-hidden rounded-full bg-light-base dark:bg-dark-base p-4">
          <div className="h-4 w-4 rounded-full bg-[#00f508]" />
          <small className="">Open for Work and Collabration</small>
        </div>
      </div>
    </section>
  );
};
