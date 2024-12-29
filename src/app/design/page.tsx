import { Introduction } from "@/components/Introduction";
import { Work } from "./components/Work";
import { Experimentation } from "@/components/Experimentation";
import { MyStack } from "@/components/MyStack";
import { Experiences } from "@/app/design/components/Experiences";
import { Testimonials } from "@/app/design/components/Testimonials";

import EkarMobile from "../../../public/design/experiments/EkarMobile.jpg";
import EkarWeb from "../../../public/design/experiments/EkarWeb.jpg";
import Frank from "../../../public/design/experiments/Frank.jpg";
import Profillet from "../../../public/design/experiments/Profillet.jpg";
import ProfilletBranding from "../../../public/design/experiments/ProfilletBranding.jpg";


const projects = [
  { title: "Ekar Mobile", image: EkarMobile },
  { title: "Ekar Web", image: EkarWeb },
  { title: "Frank", image: Frank },
  { title: "Profillet", image: Profillet },
  { title: "Profillet Branding", image: ProfilletBranding },
];


export default function DesignPage() {
  return (
    <div className="">
      <Introduction title="Product Design Lead / Design Engineer" >
        <span className="line-through">Toronto</span>
        <span className="text-light-body dark:text-dark-body"> Amsterdam-based </span>
        <span className="text-light-accent dark:text-dark-accent">Product Design Lead </span>
        who spends the day crafting delightful digital experiences and the night honing my development skills by bringing designs to life. Whether it’s perfecting a user journey or coding an interactive prototype, I’m always exploring ways to bridge creativity and technology.
      </Introduction>
      <Work />
      <MyStack message="I’m dedicated to evolving my craft, embracing new tools and techniques to stay versatile and deliver meaningful, user-centered experiences." brand={{title: "Design", brands: ["Figma", "Jira", "Framer", "Play 2", "Spline"]}} />
      <Experiences /> 
      <Experimentation projects={projects} />
      <Testimonials />
    </div>
  );
}
