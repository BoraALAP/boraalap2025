"use client"
import { AnimatePresence, motion } from "motion/react";


const h2Variants = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.15, ease:"backInOut" } },
  exit: { opacity: 0, x: 60, transition: { duration: 0.5, delay: 0.15, ease:"backInOut" } },
}

const h3Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.25, ease:"backInOut" } },
  exit: { opacity: 0, x: 40, transition: { duration: 0.5, delay: 0.25, ease:"backInOut" } },
}

const h4Variants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.35, ease:"backInOut" } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.5, delay: 0.35, ease:"backInOut" } },
} 

const pVariants = {
  hidden: { opacity: 0, x: 10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.45, ease:"backInOut" } },
  exit: { opacity: 0, x: 10, transition: { duration: 0.5, delay: 0.45, ease:"backInOut" } },
} 

const ulVariants = {
  hidden: { opacity: 0  },
  show: { opacity: 1,  transition: { delay: 0.45, staggerChildren: 0.15, when: "beforeChildren" } },
  // exit: { opacity: 0, x: 10, transition: { duration: 0.5, delay: 0.25, ease:"backInOut" } },
} 

const liVariants = {
  hidden: { opacity: 0, x: 10 },
  show: { opacity: 1,  x: 0},
  // exit: { opacity: 0, x: 10, transition: { duration: 0.5, delay: 0.45, ease:"backInOut" } },
} 

const divVariants = {
  hidden: { opacity: 0, x:30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.35, ease:"backInOut" } },
  exit: { opacity: 0, x: 30, transition: { duration: 0.5, delay: 0.35, ease:"backInOut" } },
  }

export const Reveal = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <AnimatePresence>
    <motion.div variants={divVariants}
    initial="hidden"
    whileInView="show"
    exit="exit"
    viewport={{ once: true }} className={className}>
      {children}
    </motion.div>
    </AnimatePresence>
  )
}

export const H2 = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <AnimatePresence>
    <motion.h2 variants={h2Variants}
    initial="hidden"
    whileInView="show"
    exit="exit"
    viewport={{ once: true }} className={className}>
      {children}
    </motion.h2>
    </AnimatePresence>
  )
}

export const H3 = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <AnimatePresence>
    <motion.h3 variants={h3Variants}
    initial="hidden"
    whileInView="show"
    exit="exit"
    viewport={{ once: true }} className={className}>
      {children}
    </motion.h3>
    </AnimatePresence>
  )
}

export const H4 = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <AnimatePresence>
    <motion.h4 variants={h4Variants}
    initial="hidden"
    whileInView="show"
    exit="exit"
    viewport={{ once: true }} className={className}>
      {children}
    </motion.h4>
    </AnimatePresence>
  )
}


export const P = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <AnimatePresence>
    <motion.p variants={pVariants}
    initial="hidden"
    whileInView="show"
    exit="exit"
    viewport={{ once: true }} className={className}>
      {children}
    </motion.p>
    </AnimatePresence>
  )
}


export const UL = ({  items , className}: {items: {title?: string, description: string}[], className?: string}) => {
  return (
    <motion.ul variants={ulVariants}
    initial="hidden"
    whileInView="show"
    // exit="exit"
    viewport={{ once: true }} 
    className={className}>
      {items.map((item, index) => (
      <LI key={index}>
                {item.title && <b>{item.title} </b>}
                {item.description}
              </LI>
      ))}
    </motion.ul>
  )
}


export const LI = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <motion.li variants={liVariants}
    viewport={{ once: true }} 
    className={className}>
      {children}
    </motion.li>
    
  )
}

export const Blockquote = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="inline-flex items-center justify-center gap-2">

    <motion.blockquote
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.5}}
      viewport={{once: true}}
      className="shrink grow basis-0 text-center text-base font-semibold leading-normal">
      {children}
    </motion.blockquote>
    </div>
    
  )
}
