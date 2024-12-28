"use client";
import React, { useEffect, useRef } from "react";
import { animate, motion, useInView } from "motion/react";
import { P } from "../Reveal";
import {
  FigmaLogo,
  JiraLogo,
  FramerLogo,
  Play2Logo,
  SplineLogo,
  SpotifyLogo,
  ChatGPTLogo,
  PerplexityLogo,
  LoomLogo,
  CursorLogo,
  WebflowLogo,
  TailwindLogo,
  NextjsLogo,
  SupabaseLogo,
  ExpoLogo,
  ReactLogo
} from "@/assets/logos";

export type BrandName =
  | "Figma"
  | "Jira"
  | "Framer"
  | "Play 2"
  | "Spline"
  | "Spotify"
  | "ChatGPT"
  | "Perplexity"
  | "Loom"
  | "Cursor"
  | "Webflow"
  | "Tailwind"
  | "Nextjs"
  | "Supabase"
  | "Expo"
  | "React" | "ReactNative";

interface BrandCardProps {
  brandName: BrandName;
  
  index: number;
}

const BrandCard: React.FC<BrandCardProps> = ({ brandName,  index }) => {
  const getLogo = (name: BrandName) => {
    switch (name) {
      case "Figma":
        return <FigmaLogo />;
      case "Jira":
        return <JiraLogo />;
      case "Framer":
        return <FramerLogo />;
      case "Play 2":
        return <Play2Logo />;
      case "Spline":
        return <SplineLogo />;
      case "Spotify":
        return <SpotifyLogo />;
      case "ChatGPT":
        return <ChatGPTLogo />;
      case "Perplexity":
        return <PerplexityLogo />;
      case "Loom":
        return <LoomLogo />;
      case "Cursor":
        return <CursorLogo />;
      case "Webflow":
        return <WebflowLogo />;
      case "Tailwind":
        return <TailwindLogo />;
      case "Nextjs":
        return <NextjsLogo />;
      case "Supabase":
        return <SupabaseLogo />;
      case "Expo":
        return <ExpoLogo />;
      case "React":
      case "ReactNative":
        return <ReactLogo />;
      default:
        return null;
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(
        ref.current, 
        { opacity: 1, x: 0 }, 
        { duration: 0.5, delay: 0.1 * index }
      );
    }
  }, [isInView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 10 }}
      className={`h-14 shrink grow basis-0 p-3 
        bg-light-base text-light-body dark:bg-dark-base dark:text-dark-softBody
       flex items-center justify-start gap-2 rounded-md `}
    >
      <div className="relative h-8 w-8">{getLogo(brandName)}</div>
      <P className="">{brandName}</P> 
    </motion.div>
  );
};

export default BrandCard;
