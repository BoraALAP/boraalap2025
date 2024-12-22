"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export const Testimonials = () => {
  return (
    <section className="mx-auto max-w-6xl px-[5vw] py-14">
      <div className="flex flex-col gap-4">
        <h2 >
          Some nice words from people worked with me
        </h2>
        <div className="flex flex-col gap-6 py-6">
          <Testimonial
            image="https://picsum.photos/100"
            name="Scott Williams"
            title="Director of Design"
            quote={[
              "I had the pleasure of working with Bora Alap as a product designer on our mobile apps and design system at Freshbooks for the last couple of years. Bora was an outstanding contributor who played a pivotal role in shaping our design strategy and elevating the user experience across our products.",
              "Bora was instrumental in re-booting our design system work helping to solidify our grounding principles and approach to working cross-functionally with all our stakeholders. He was a key contributor and led the effort to establish a cohesive visual language, define reusable UI components, and document comprehensive design guidelines. Bora's keen eye for detail, combined with his deep understanding of design principles, enabled him to start building a scalable, high-quality design system that allows teams across the organization to contribute and collaborate effectively to the overall project",
              "In addition to his design system work, Bora was the lead designer on our mobile app. He consistently delivered user-centric designs that solved complex business challenges. Bora&apos;s design process was methodical and iterative. He worked closely with engineering and product leaders while always keeping the user at the forefront. His attention to interaction details and accessibility best practices resulted in intuitive, high-performing mobile experiences.",
              "In summary, Bora is an exceptional design professional who combines strong technical skills, a deep understanding of engineering practices, and a keen user-centred mindset. He would be a tremendous asset to any organization looking to build world-class digital products and design systems.",
            ]}
          />

          <Testimonial
            image="https://picsum.photos/100"
            name="Kiley Meehan"
            title="Head of Design"
            quote={[
              "Bora was a member of my team for around three years and made a significant impact in accelerating our mobile strategy and leading the establishment of a robust design system. An intriguing mix of technical and craft talent, Bora brought a systems-thinking approach to all aspects of his work, whether it was expanding the possibilities and scope of what a design system could achieve, working with developers to bring that consistency into the customer experience, or pushing our mobile experiences into new, modern directions. For teams looking for someone who can mature their systems, elevate their craft, highlight compelling mobile opportunities and contribute a wonderfully dry sense of humour and strong camaraderie - I highly suggest you consider Bora!",
            ]}
          />

          <Testimonial
            image="https://picsum.photos/100"
            name="Vishal Assija"
            title="Senior Engineer Mobile"
            quote={[
              "I had the opportunity at FreshBooks to work with Bora, who excels at mobile app design and creative thinking. Every engineer dreams of working with Designers who understand the feasibility and complexity of the technology and devise a design strategy to support the engineering team. Bora was one of the finest Product Designers I&apos;ve ever worked with. He is not only good with design but also understands product requirements and technical challenges to come up with intuitive designs. During my time at FreshBooks, he was my go-to person to discuss complex problems and get insights about creative design thinking. Bora can understand any tech stack and technical challenges very well to come up with tech stack and technical challenges very well to come up with design patterns that are feasible and at par with product expectations. Which, in turn, helps the engineering team implement ideal designs for the product. It was my pleasure to work with Bora, and I highly recommend him. He will be an asset to any engineering team that wants to work with a designer who is well-versed in most modern technological stacks and intuitive design thinking.",
            ]}
          />

          <Testimonial
            image="https://picsum.photos/100"
            name="Yvonne Shek"
            title="VP of Design"
            quote={[
              "I had the great pleasure of working with Bora. He expertly led the design of a key product. Bora is strong in understanding intricate (and often vague) requirements and translating them into various design options. He works incredibly well under pressure and tight timelines, while delivering quality design concepts. Bora is a skilled presenter and communicator. He would be an excellent asset to any product or service design team. Our team already misses him.",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const Testimonial = ({
  image,
  name,
  title,
  quote,
}: {
  image: string;
  name: string;
  title: string;
  quote?: string[];
}) => {
  return (
    <div className="flex flex-col gap-6 overflow-hidden rounded-2xl bg-light-base dark:bg-dark-base p-8">
      <div className="flex flex-col gap-2">
        <div className="inline-flex justify-between">
          <Image
            className="h-20 w-20 rounded-[64px]"
            src={image}
            alt={name}
            width={80}
            height={80}
          />

          <ReadButton />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-medium text-light-body dark:text-dark-body">{name}</h3>
          <h4 className="text-base font-semibold text-light-softBody dark:text-dark-softBody">
            {title}
          </h4>
        </div>
      </div>
      <div className=" ">
        <p className="line-clamp-4 max-w-none flex-col gap-2 overflow-hidden">
          {quote && quote.map((q, index) => <span key={index}>{q}</span>)}
        </p>
      </div>
    </div>
  );
};

const ReadButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className="inline-flex h-fit min-h-6 min-w-6 cursor-pointer items-center overflow-hidden rounded-md  px-4 py-2"
      layout
      initial="initial"
      animate="initial"
      whileHover="hover"
      transition={{ duration: 0.5 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Icon Container */}
      <div className="h-6 w-6 ">
        <motion.svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <motion.path
            variants={{
              initial: {
                d: "M19 3H10.6C9.11479 3 7.69041 3.42143 6.6402 4.17157C5.59 4.92172 5 5.93913 5 7V21C5 20.2044 5.4425 19.4413 6.23015 18.8787C7.0178 18.3161 8.08609 18 9.2 18H19V3Z",
              },
              hover: {
                d: "M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z",
              },
            }}
            transition={{ duration: 0.5 }}
            stroke="#115572"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.path
            variants={{
              initial: {
                d: "M18.9998 3H10.5999C9.11473 3 7.69037 3.42143 6.64018 4.17157C5.58999 4.92172 5 5.93913 5 7V21C6.64018 21 13.3999 21 16.8998 21C19.0644 21 18.9998 18 18.9998 18V3Z",
              },
              hover: {
                d: "M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 10.5161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z",
              },
            }}
            transition={{ duration: 0.5 }}
            stroke="#115572"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>

      {/* Text */}
      <AnimatePresence mode="popLayout">
        {isHovered && (
          <motion.span
            className="text-nowrap pl-2 text-lg font-medium text-[#115471]"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 30, opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
          >
            Read More
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
