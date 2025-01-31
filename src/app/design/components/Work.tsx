import { H2 } from "@/components/Reveal";
import { WorkCard } from "@/components/subelements/WorkCard";

import connect from "../../../../public/projects/connect/thumbnail.png";
import brick from "../../../../public/projects/bricks/thumbnail.png";

export const Work = () => {
  return (
    <section className="px-[5vw] py-20">
      <div className="flex flex-col gap-6">
        <H2 className="">Work</H2>
        <div className="grid grid-cols-1 items-center justify-center gap-8 self-stretch lg:grid-cols-2">
          <WorkCard
            title="Freshbooks Connect"
            description="Designed a mobile application to streamline workflows for team
            members and business owners in the trades industry, facilitating
            time, expense, and mileage tracking."
            metrics={[
              { metrics: "User Retention Rate Increased", value: "40%" },
              { metrics: "Data Accuracy Increased", value: "25%" },
            ]}
            link="/design/connect"
            src={connect.src}
          />
          <WorkCard
            title="FreshBricks"
            description="Developed a comprehensive design system to unify design and development practices across FreshBooks’ web applications, with future integration plans for mobile platforms."
            metrics={[
              { metrics: "Adoption Rate", value: "93%" },
              { metrics: "Development Time Reduction", value: "30%" },
            ]}
            link="/design/brick"
            src={brick.src}
          />
        </div>
      </div>
    </section>
  );
};
