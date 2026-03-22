"use client";

import { motion } from "motion/react";
import Image from "next/image";

const experiments = [
  {
    title: "Fablebook",
    label: "iOS App",
    image: null,
    link: "https://fablebook.app",
    description: "AI children's storybook generator",
  },
  {
    title: "CollectorsHub Branding",
    label: "Branding",
    image: "/experiments/CollectorsHubBranding.jpg",
  },
  {
    title: "Frank Windows & Doors",
    label: "Web Design",
    image: "/experiments/Frank.jpg",
  },
  {
    title: "Hiroo",
    label: "Mobile App",
    image: "/experiments/Hiroo.jpg",
  },
  {
    title: "Ekar Mobile",
    label: "Mobile Design",
    image: "/experiments/EkarMobile.jpg",
  },
  {
    title: "Ekar Web",
    label: "Web Design",
    image: "/experiments/EkarWeb.jpg",
  },
  {
    title: "Profillet Branding",
    label: "Branding",
    image: "/experiments/ProfilletBranding.jpg",
  },
  {
    title: "DIY Guide",
    label: "Product Design",
    image: "/experiments/DIYGuide.jpg",
  },
];

export default function Experiments() {
  return (
    <section className="px-6 md:px-10 py-32 max-w-[1200px] mx-auto border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl text-heading italic mb-3">
          Design bits.
        </h2>
        <p className="text-body text-lg">Side projects & experiments.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {experiments.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group"
          >
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <ExperimentCard item={item} />
              </a>
            ) : (
              <ExperimentCard item={item} />
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://github.com/BoraALAP"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted hover:text-heading transition-colors duration-300 tracking-[0.1em]"
        >
          More on GitHub →
        </a>
      </div>
    </section>
  );
}

function ExperimentCard({
  item,
}: {
  item: (typeof experiments)[number];
}) {
  return (
    <>
      <div className="relative aspect-[4/3] mb-3 overflow-hidden rounded-sm bg-surface">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-accent/10 to-transparent flex items-center justify-center">
            <span className="text-accent/60 text-sm tracking-[0.2em] uppercase">
              {item.label}
            </span>
          </div>
        )}
      </div>
      <span className="text-[10px] tracking-[0.2em] uppercase text-muted block mb-1">
        {item.label}
      </span>
      <h3 className="text-heading text-sm font-light group-hover:text-accent transition-colors duration-300">
        {item.title}
      </h3>
      {item.description && (
        <p className="text-muted text-xs mt-1">{item.description}</p>
      )}
    </>
  );
}
