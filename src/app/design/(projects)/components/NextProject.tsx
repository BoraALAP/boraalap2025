"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import {motion} from 'framer-motion'
import { useAnimate } from 'motion/react'

export const NextProject = ({href, title}: {href: string, title: string}) => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(scope.current, { opacity: 1, y: 0 }, { duration: 0.5, delay: 0.2 })
  }, [scope, animate])
  return (
    <Link href={href}>
      <div className="flex w-fit self-center mx-auto  px-[5vw] py-14 items-center justify-center border-t border-light-accentSoft dark:border-dark-accentSoft">
        <motion.div className={`flex  items-center justify-center gap-4 transition-all duration-600 px-6 py-2 rounded-md 
        bg-light-base dark:bg-dark-base hover:bg-light-softLight dark:hover:bg-dark-softLight
        `}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        >
        <h2 className="text-center text-xl font-medium leading-10 text-light-accent dark:text-dark-accent">
          Look at {title}
        </h2>
        <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        ref={scope}
        
        transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FaChevronRight size={24} className="text-light-accent dark:text-dark-accent"  />
        </motion.div>
        </motion.div>
      </div>
      </Link>
  )
}
