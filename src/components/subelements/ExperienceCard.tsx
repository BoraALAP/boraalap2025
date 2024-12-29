"use client"

import { motion } from "framer-motion";
import { P } from "../Reveal";


export const ExperienceCard = ({
  company,
  title,
  freelance,
}: {
  company: string;
  title: string;
  freelance?: boolean;
}) => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  // useEffect(() => {
  //   if (isInView) {
  //     animate(ref.current, { opacity: 1, y: 0 }, { duration: 0.5, delay: 0.25 });
  //   }
  // }, [isInView]);

  return (
    <motion.div
      // ref={ref}
      initial={{ opacity: 0,  y: 100 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={
        "inline-flex items-start justify-start gap-2 self-stretch border-b border-light-bodyLight py-4"
      }
      
    >
      <h5 className={"shrink grow basis-0 text-base font-semibold text-light-body dark:text-dark-body " + (freelance ? "opacity-50" : "opacity-100")}>
        {company}
      </h5>
      <P className={"shrink grow basis-0 text-base font-semibold text-light-accent dark:text-dark-accent " + (freelance ? "opacity-50" : "opacity-100")}>
        {title}
      </P>
    </motion.div>
  );
};

