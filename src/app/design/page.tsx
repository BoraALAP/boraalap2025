import { Introduction } from "@/components/Introduction";
import { Work } from "./components/Work";
import { Experimentation } from "./components/Experimentation";
import { MyStack } from "@/components/MyStack";
import { Experiences } from "@/app/design/components/Experiences";
import { Testimonials } from "@/app/design/components/Testimonials";

export default function DesignPage() {
  return (
    <div className="mx-auto  ">
      <Introduction title="Product Design Lead / Design Engineer" >
        
          <span className="line-through">Toronto</span>
          <span className="text-light-body dark:text-dark-body"> Amsterdam-based </span>
          <span className="text-light-accentSoft dark:text-dark-accentSoft">Product Design Lead </span>
          who spends the day crafting delightful digital experiences and the night honing my development skills by bringing designs to life. Whether it’s perfecting a user journey or coding an interactive prototype, I’m always exploring ways to bridge creativity and technology.
        
      </Introduction>
      <Work />
      <MyStack message="I’m dedicated to evolving my craft, embracing new tools and techniques to stay versatile and deliver meaningful, user-centered experiences." brand={{title: "Design", brands: ["Figma", "Jira", "Framer", "Play 2", "Spline"]}} />
      <Experiences />
      <Experimentation />
      <Testimonials />
    </div>
  );
}
