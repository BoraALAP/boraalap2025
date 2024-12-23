import { Introduction } from "@/components/Introduction";
import { MyStack } from "@/components/MyStack";
import { Experiences } from "./components/Experiences";

const DeveloperPage = () => {
  return (
    <div className="mx-auto ">
      <Introduction title="Design Engineer / Product Designer" >
        <span className="line-through">Toronto</span>
        <span className="text-light-body dark:text-dark-body"> Amsterdam-based </span>
        <span className="text-light-softBody dark:text-dark-softBody">aspiring </span>
        <span className="text-light-accentSoft dark:text-dark-accentSoft">self-taught developer </span>
        who spends the day building thoughtful designs and the night experimenting with code to refine my craft. Whether debugging components or implementing animations, I’m constantly pushing to turn creative ideas into functional, seamless experiences.
      </Introduction>
      <MyStack message="I strive to be versatile in my approach, continuously learning and adapting to new technologies to refine my skills and create robust, scalable solutions." brand={{ title: "Development", brands: ["React", "ReactNative", "Nextjs", "Expo", "Supabase", "Tailwind", "Cursor", "Framer", "Webflow"] }} />
      <Experiences />
    </div>
  );
}

DeveloperPage.theme = "light";

export default DeveloperPage;