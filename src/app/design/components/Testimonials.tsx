"use client";

import { useRef } from "react";
import { useScroll } from "motion/react";
import { H2 } from "@/components/Reveal";
import { TestimonialCard } from "@/components/subelements/TestimonialCard";

import Scott from "../../../../public/testimonials/scott.jpeg";
import Kiley from "../../../../public/testimonials/kiley.jpeg";
import Vishal from "../../../../public/testimonials/vishal.jpeg";
import Yvonne from "../../../../public/testimonials/yvonne.jpeg";




export const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({target: containerRef, offset: 
    ["start start", "end start"]});
  
  return (
    <section className="mx-auto max-w-6xl px-[5vw] py-14 ">
      <div className="flex flex-col gap-4">
        <H2 >
          Some nice words from people worked with me
        </H2>
        <div className="relative flex flex-col gap-6 py-6  items-center justify-center " ref={containerRef}>
          {testimonials.map((item, index) =>{
            const targetScale = 1-((testimonials.length-(index)) * 0.05)
            const rangeStart =   ((index+1) * 0.05) 
            return (
              <TestimonialCard
                image={item.image}
                name={item.name}
                title={item.title}
                quote={item.quote}
                key={item.name}
                index={index}
                range={[rangeStart,1]}
                targetScale={targetScale}
                progress={scrollYProgress}
              />
          )})}
        </div>
      </div>
    </section>
  );
};




const testimonials = [

  {
    image: Scott, name: "Scott Williams", title: "Director of Design", quote: ["I had the pleasure of working with Bora Alap as a product designer on our mobile apps and design system at Freshbooks for the last couple of years. Bora was an outstanding contributor who played a pivotal role in shaping our design strategy and elevating the user experience across our products.",
      "Bora was instrumental in re-booting our design system work helping to solidify our grounding principles and approach to working cross-functionally with all our stakeholders. He was a key contributor and led the effort to establish a cohesive visual language, define reusable UI components, and document comprehensive design guidelines. Bora's keen eye for detail, combined with his deep understanding of design principles, enabled him to start building a scalable, high-quality design system that allows teams across the organization to contribute and collaborate effectively to the overall project",
      "In addition to his design system work, Bora was the lead designer on our mobile app. He consistently delivered user-centric designs that solved complex business challenges. Bora&apos;s design process was methodical and iterative. He worked closely with engineering and product leaders while always keeping the user at the forefront. His attention to interaction details and accessibility best practices resulted in intuitive, high-performing mobile experiences.",
      "In summary, Bora is an exceptional design professional who combines strong technical skills, a deep understanding of engineering practices, and a keen user-centred mindset. He would be a tremendous asset to any organization looking to build world-class digital products and design systems."]
  },
  {
    image: Kiley, name: "Kiley Meehan", title: "Head of Design", quote: ["Bora was a member of my team for around three years and made a significant impact in accelerating our mobile strategy and leading the establishment of a robust design system. An intriguing mix of technical and craft talent, Bora brought a systems-thinking approach to all aspects of his work, whether it was expanding the possibilities and scope of what a design system could achieve, working with developers to bring that consistency into the customer experience, or pushing our mobile experiences into new, modern directions. For teams looking for someone who can mature their systems, elevate their craft, highlight compelling mobile opportunities and contribute a wonderfully dry sense of humour and strong camaraderie - I highly suggest you consider Bora!"],
  },
  {
    image: Vishal, name: "Vishal Assija", title: "Senior Engineer Mobile", quote: ["I had the opportunity at FreshBooks to work with Bora, who excels at mobile app design and creative thinking. Every engineer dreams of working with Designers who understand the feasibility and complexity of the technology and devise a design strategy to support the engineering team. Bora was one of the finest Product Designers I&apos;ve ever worked with. He is not only good with design but also understands product requirements and technical challenges to come up with intuitive designs. During my time at FreshBooks, he was my go-to person to discuss complex problems and get insights about creative design thinking. Bora can understand any tech stack and technical challenges very well to come up with tech stack and technical challenges very well to come up with design patterns that are feasible and at par with product expectations. Which, in turn, helps the engineering team implement ideal designs for the product. It was my pleasure to work with Bora, and I highly recommend him. He will be an asset to any engineering team that wants to work with a designer who is well-versed in most modern technological stacks and intuitive design thinking."
    ]
  },
  {
    image: Yvonne, name: "Yvonne Shek", title: "VP of Design", quote: ["I had the great pleasure of working with Bora. He expertly led the design of a key product. Bora is strong in understanding intricate (and often vague) requirements and translating them into various design options. He works incredibly well under pressure and tight timelines, while delivering quality design concepts. Bora is a skilled presenter and communicator. He would be an excellent asset to any product or service design team. Our team already misses him."]
  }

]

