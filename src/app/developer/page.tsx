import { Introduction } from "@/components/Introduction";
import { MyStack } from "@/components/MyStack";
import { Experiences } from "./components/Experiences";
import { Experimentation } from "@/components/Experimentation";

import Hiroo from "../../../public/experiments/Hiroo.jpg";
import Profillet from "../../../public/experiments/Profillet.jpg";
import Frank from "../../../public/experiments/Frank.jpg";
import CollectorsHub from "../../../public/experiments/CollectorsHubBranding.jpg";
import DIYGuide from "../../../public/experiments/DIYGuide.jpg";
import { DarkCircles } from "./components/experiments/DarkCircles";
import { TextBox } from "./components/experiments/TextBox";

const projects = [
  {
    title: "Text Box Slider",
    description: "Experimentation",
    component: TextBox,
  },
  {
    title: "Dark Circles",
    description: "Experimentation",
    component: DarkCircles,
  },
  {
    title: "Collectors Hub",
    description: "Side Project",
    image: CollectorsHub,
    ComingSoon: true,
  },
  {
    title: "DIY Guide",
    description: "Side Project",
    image: DIYGuide,
    ComingSoon: true,
  },
  {
    title: "Hiroo",
    description: "Webflow / Freelance",
    href: "https://hiroo.co",
    image: Hiroo,
  },
  {
    title: "Frank",
    description: "NextJS - Strapi/ Freelance",
    href: "https://frankwd.com",
    image: Frank,
  },
  {
    title: "Profillet",
    description: "Webflow / Freelance",
    href: "https://profillet.ca",
    image: Profillet,
  },
];

const DeveloperPage = () => {
  return (
    <div className="mx-auto">
      <Introduction title="Design Engineer / Product Designer">
        <span className="line-through">Toronto</span>
        <span className="text-light-body dark:text-dark-body">
          {" "}
          Amsterdam-based{" "}
        </span>
        <span className="text-light-softBody dark:text-dark-softBody">
          aspiring{" "}
        </span>
        <span className="text-light-accent dark:text-dark-accent">
          self-taught developer{" "}
        </span>
        who spends the day building thoughtful designs and the night
        experimenting with code to refine my craft. Whether debugging components
        or implementing animations, I’m constantly pushing to turn creative
        ideas into functional, seamless experiences.
      </Introduction>
      <MyStack
        message="I strive to be versatile in my approach, continuously learning and adapting to new technologies to refine my skills and create robust, scalable solutions."
        brand={{
          title: "Development",
          brands: [
            "React",
            "ReactNative",
            "Nextjs",
            "Expo",
            "Supabase",
            "Tailwind",
            "Cursor",
            "Framer",
            "Webflow",
          ],
        }}
      />
      <Experiences />
      <Experimentation projects={projects} />
    </div>
  );
};

DeveloperPage.theme = "light";

export default DeveloperPage;
