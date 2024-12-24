"use client";
import { useScrollToSection } from "@/utils/scroll";
import { AnimatePresence, motion } from "framer-motion";
export const SideNavItem = ({
  title,
  active,
  id,
  showTitle,
}: {
  title: string;
  active: boolean;
  id: string;
  showTitle?: boolean;
}) => {
  const scrollToSection = useScrollToSection();

  const ContainerVariants = {
    hidden: { opacity: 0, x: 10 },
    show: { opacity: 1, x: 0, transition: {
      duration: 2,
      type: "spring",
      
    } }
  }

  return (
    <motion.button
      onClick={() => scrollToSection(id)}
      className={
        "text-right text-sm leading-normal tracking-tight  " +
        (active
          ? "font-bold text-light-body"
          : "font-normal text-light-softBody")
      }
      variants={ContainerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="flex items-center justify-end gap-4 h-4">
        <AnimatePresence  >
          {showTitle && (
            <motion.p
              className={`text-right text-sm leading-normal tracking-tight transition-colors duration-1000 ${
                active
                  ? "font-bold text-light-body"
                  : "font-normal text-light-softBody"
              }`}
              
              initial={{  x: 10, opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {title}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.div
          className={`w-2 h-2  rounded-full transition-all duration-1000 ${
            active
              ? "bg-light-body dark:bg-dark-body"
              : "bg-light-softLight dark:bg-dark-softLight"
          }`}
          variants={{
            active: { scale: 1.4 },
            inactive: { scale: 1 },

          }}
          
          transition={{ duration: 0.5 }}
          initial="inactive"
          animate={active ? "active" : "inactive"}
          // exit="inactive"
        ></motion.div>
        
      </div>
    </motion.button>
  );
};
