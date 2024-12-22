"use client";

import { motion } from "motion/react";
import { ExperienceCard } from "@/components/subelements/ExperienceCard";
import { SubInfo } from "@/components/subelements/SubInfo";


export const Experiences = () => {
  return (
    <section className="mx-auto max-w-6xl px-[5vw] py-14">
      <div className="grid gap-10 md:grid-cols-[max-content_5fr] md:gap-14 lg:gap-20">
        <div className="grid grid-cols-subgrid gap-5 md:col-span-2 md:gap-14 lg:gap-20">
          <h3>Who am I?</h3>
          <div className="grid gap-4 md:gap-6 lg:gap-8">
            <p>
            I’m a Product Design Lead and self-taught Front-end Developer with a passion for bridging the gap between design and technology. Over the years, I’ve combined my expertise in design with technical skills in React, React Native, Next.js, and TailwindCSS to create digital experiences that are as functional as they are beautiful.
            </p>
            <div className="grid gap-8 gap-y-4 md:grid-cols-[1fr_1fr] md:gap-y-6 lg:gap-y-8">
              <SubInfo
                title="UI Development"
                description="I focus on building interfaces that turn design concepts into reality, ensuring seamless implementation and usability."
              />
              <SubInfo
                title="Prototyping and Experimentation"
                description="I use development as a tool to prototype ideas and explore new ways to push the boundaries of what’s possible in digital experiences."
              />
            
            </div>
            <p>
            Now based in Amsterdam, I’m diving deeper into the intersection of design and code, building tools and experiments that inspire and innovate.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-subgrid gap-5 md:col-span-2 md:gap-14 lg:gap-20">
          <h3>Why Me?</h3>

          <div className="grid gap-8 gap-y-4 md:grid-cols-[1fr_1fr] md:gap-y-6 lg:gap-y-8">
            <SubInfo
              title="Problem-Solving Mindset"
              description="I thrive on turning ideas into reality, whether it’s debugging a tricky issue or implementing elegant solutions that enhance user experiences."
            />
            <SubInfo
              title="Code Meets Design"
              description="My unique combination of design expertise and technical skills allows me to create products that balance aesthetics with functionality."
            />
            <SubInfo
              title="Adaptable and Experiment-Driven"
              description="I’m constantly exploring new tools, frameworks, and methods, ensuring that my work is always evolving and staying ahead of the curve."
            />
          
          </div>
        </div>
        <div className="grid grid-cols-subgrid gap-5 md:col-span-2 md:gap-14 lg:gap-20">
          <h3>Experiences</h3>
          <div className="grid">
            <ExperienceCard company="Hiroo" title="Design and Webflow  / Freelance" />
            <ExperienceCard company="Profillet" title="Branding & Website Design and Webflow / Freelance"  />
            <ExperienceCard
              company="Frank Windows And Doors"
              title="NextJS & NodeJS Development"
            />
            
          </div>
        </div>

        <div className="grid grid-cols-subgrid gap-5 md:col-span-2 md:gap-14 lg:gap-20">
          <h3>Education</h3>

          <motion.div className="flex-col items-start justify-start gap-2" whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} initial={{ opacity: 0, y: 100 }} viewport={{ once: true }}>
            <h5 className="self-stretch font-semibold text-light-body dark:text-dark-body">
              Bachelor&apos;s degree - Creative Advertising
            </h5>
            <p className="self-stretch font-semibold text-light-softBody dark:text-dark-softBody">
              Humber College - Toronto / Canada
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


