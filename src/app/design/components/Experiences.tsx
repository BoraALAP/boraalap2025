"use client";

import { motion } from "motion/react";
import { ExperienceCard } from "@/components/subelements/ExperienceCard";
import { SubInfo } from "@/components/subelements/SubInfo";
import { H3, P, Reveal } from "@/components/Reveal";


export const Experiences = () => {
  return (
    <section className="mx-auto max-w-6xl px-[5vw] py-14">
      <div className="grid gap-10 md:grid-cols-[max-content_5fr] md:gap-14 lg:gap-20">
        <div className="grid grid-cols-subgrid gap-5 md:col-span-2 md:gap-14 lg:gap-20">
          <H3  className="">Who am I?</H3>
          <Reveal className="grid gap-4 md:gap-6 lg:gap-8">
              <P >
                I’m a Product Design Lead with over a decade of experience
                crafting user-centered digital solutions across industries like
                telecom, e-commerce, accounting, and HRM. My journey started in
                the advertising world, where I developed a keen eye for detail and
                a passion for storytelling, before transitioning into product
              design and strategy.
            </P>
            <div className="grid gap-8 gap-y-4 md:grid-cols-[1fr_1fr] md:gap-y-6 lg:gap-y-8" >
              <SubInfo
                title="B2B SaaS"
                description="I simplify complexity with thoughtful design, creating tools that enhance productivity and solve real-world problems for businesses."
              />
              <SubInfo
                title="Mobile Applications"
                description="I design native mobile apps that deliver intuitive and engaging user experiences, ensuring usability and consistency across devices."
              />
              <SubInfo
                title="B2C Applications"
                description="I’ve developed intuitive experiences that meet the needs of diverse audiences, with a strong focus on usability and engagement."
              />
              <SubInfo
                title="Design Systems"
                description="I create scalable design systems that align teams, enhance collaboration, and maintain consistency across platforms."
              />
            </div>
            <P>
              My work blends creativity with strategy, turning challenges into
              opportunities to create meaningful digital experiences. Now based
              in Amsterdam, I’m exploring how design can continue to evolve in a
              global, fast-paced world.
            </P>
          </Reveal>
        </div>
        <div className="grid grid-cols-subgrid gap-5 md:col-span-2 md:gap-14 lg:gap-20">
        <H3  className="">Why Me?</H3>

          <Reveal className="grid gap-8 gap-y-4 md:grid-cols-[1fr_1fr] md:gap-y-6 lg:gap-y-8">
            <SubInfo
              title="Execution with Vision"
              description="I don’t just design; I craft solutions that are backed by strategy, executed with precision, and aligned with both user and business goals."
            />
            <SubInfo
              title="Systems Thinker"
              description="I take a holistic approach to design, ensuring that every detail contributes to the overall product story, creating cohesive and impactful user experiences."
            />
            <SubInfo
              title="Collaborative Leader"
              description="With experience mentoring designers and leading cross-functional teams, I foster an environment where collaboration leads to innovation."
            />
            <SubInfo
              title="Adaptable and Curious"
              description="I’m always learning, whether it’s mastering a new design tool, exploring emerging trends, or understanding evolving user needs. This curiosity drives my ability to create innovative solutions."
            />
          </Reveal>
        </div>
        <div className="grid grid-cols-subgrid gap-5 md:col-span-2 md:gap-14 lg:gap-20">
        <H3  className="">Experiences</H3>
          <div className="grid">
            <ExperienceCard company="Freshbooks" title="Product Design Lead" />
            <ExperienceCard company="Hiroo" title="Website Design" freelance />
            <ExperienceCard
              company="Ceridian"
              title="Sr. Mobile Product Designer"
            />
            <ExperienceCard company="Profillet" title="Branding" freelance />
            <ExperienceCard
              company="Rogers Communications"
              title="Sr. Mobile Product Designer"
            />
            <ExperienceCard
              company="Ekar"
              title="Website & Mobile App Design"
              freelance
            />
            <ExperienceCard
              company="Compass Digital Labs"
              title="Senior Product Designer"
            />
          </div>
        </div>

        <div className="grid grid-cols-subgrid gap-5 md:col-span-2 md:gap-14 lg:gap-20">
        <H3>Education</H3>

          <motion.div className="flex-col items-start justify-start gap-2" whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} initial={{ opacity: 0, y: 100 }} viewport={{ once: true }}>
            <h5 className="self-stretch font-semibold text-light-body dark:text-dark-body">
              Bachelor&apos;s degree - Creative Advertising
            </h5>
            <P className="self-stretch font-semibold text-light-softBody dark:text-dark-softBody">
              Humber College - Toronto / Canada
            </P>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


