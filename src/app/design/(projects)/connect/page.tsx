"use client";
import React, { useState } from "react";

import { Row } from "../components/Row";
import { SideNav } from "../components/SideNav";
import { NextProject } from "../components/NextProject";
import {  P, Blockquote, H4, UL } from "@/components/Reveal";
import { Hero } from "../components/Hero";

const sections = [
  {
    title: "Project Overview",
    navTitle: "Project Overview",
  },
  {
    title: "Research & Discovery",
    navTitle: "Research & Discovery",
  },
  {
    title: "The Challenge",
    navTitle: "The Challenge",
  },
  {
    title: "Impact Outcomes",
    navTitle: "Impact Outcomes",
  },
  {
    title: "Design & Development",
    navTitle: "Design & Development",
  },
  {
    title: "Future Improvement",
    navTitle: "Future Improvement",
  },
  {
    title: "My Role & Contributions",
    navTitle: "My Role & Contributions",
  },
  {
    title: "Reflection & Learnings",
    navTitle: "Reflection & Learnings",
  },
  {
    title: "Influences on My Approach",
    navTitle: "Influences on My Approach",
  },
];


export default function ConnectPage() {
  const [activeSection, setActiveSection] = useState<string[]>([]);

  const handleSectionEnter = (section: string) => {
    setActiveSection((prev) => [...prev, section]);
  };

  const handleSectionLeave = (section: string) => {
    setActiveSection((prev) => prev.filter((s) => s !== section));
  };

  return (
    <div className="relative flex w-full flex-col overflow-hidden">
      <div className="flex flex-col">
        
          
          <Hero title="Freshbooks Connect" subtitle="New Mobile App for Team Members" />
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-[5vw] py-14 md:pr-24 xl:pr-[5vw]">
          
          <Row title="Project Overview" onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave}>
            <P>
              <b>FreshBooks Connect</b>
               is a mobile application designed to streamline key workflows for
              team members and business owners in the trades industry. The app
              provides a simple and fluid platform built for teams, enabling
              team members to effortlessly log time, expenses, and mileage. For
              business owners and administrators, it delivers proactive and
              timely access to accurate, real-time data on project statuses and
              team performance, enhancing decision-making and operational
              efficiency.
            </P>
          </Row>
          
          <Blockquote>
              By focusing on a simple and fluid user experience, we bridged the
              gap between on-site team members and business owners, enhancing
              real-time collaboration and operational efficiency
            </Blockquote>
          
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="Research & Discovery">
            <P>
              To validate our assumptions and uncover real user needs, we
              conducted over 
              <b>20 in-depth customer interviews</b>
               using platforms like Great Question and User Interviews. Each
              session lasted about 45 minutes and provided valuable insights:
            </P>
            <div className="flex flex-col items-start justify-start gap-3">
              <H4>Key Findings:</H4>
              <UL items={[
                {description: `Business owners needed team members to quickly and accurately add their time and expenses to maintain clean and up-to-date books.`},
                {description: `Team members required easy access to necessary information while on job sites, emphasizing the need for a simple and intuitive interface.`},
                {description: `Owners expressed a desire for an all-in-one app to streamline operations, reducing the need to juggle multiple platforms.`},
                {description: `Different business segments had varying needs regarding expense tracking and client billing.`},
              ]} />
              
            </div>
            <P className="">
              We also facilitated over 
              <b>six internal workshops</b>
               involving stakeholders and subject matter experts:
            </P>
            <div className="flex flex-col items-start justify-start gap-3">
              <H4>Workshop Activities:</H4>
              <UL items={[
                {title: `Rose, Bud, Thorn Exercise:`, description: `Assessed the strengths and weaknesses of the current app.`},
                {title: `Lean Canvas Sessions:`, description: `Identified opportunities and essential features for the new app.`},
                {title: `User Journey Mapping:`, description: `Explored daily routines of users to integrate the app seamlessly into their workflows.`},
                {title: `Jobs-to-Be-Done Framework:`, description: `Clarified the tasks users aim to accomplish with the app.`},
              ]} />
              
                
            </div>
            <P className="text-base font-normal leading-tight tracking-tight">
              These workshops fostered collaboration and ensured alignment with
              business objectives, incorporating valuable insights from
              long-standing team members about customer experiences.
            </P>
          </Row>
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="The Challenge">
            <P className="text-base font-normal leading-tight tracking-tight">
              Initially, our objective was to bring more users into the
              FreshBooks ecosystem by offering value that aids in daily tasks
              and promotes increased usage through team collaboration and client
              communication. We assumed that team members primarily needed a
              platform for messaging each other and keeping track of tasks.
              However, through extensive research, we discovered that business
              owners prioritized receiving accurate data from team members over
              communication features.
            </P>
          </Row>
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="Impact Outcomes">
            <div className="flex flex-col items-start justify-start gap-3">
              <H4>For Business Owners:</H4>
              <UL items={[
                {description: `Enhanced visibility into team activities and project statuses.`},
                {description: `Improved accuracy in project estimations and understanding of task durations.`},
                {description: `Simplified expense recording, leading to cleaner books and financial clarity.`},
                {description: `Future capabilities to share notes, tasks, and documents within the app, reducing reliance on external messaging platforms.`},
              ]} />
                
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <H4>For Team Members in the Trades Vertical:</H4>
              <UL items={[
                {description: `Simplified input of time and expense data without administrative hassle.`},
                {description: `Access to necessary project information directly on job sites.`},
                {description: `Reduction in the need to use multiple apps, streamlining their workflow.`},
              ]} />
              
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <H4>Early Feedback:</H4>
              <P className="">
                Received 
                <b>
                  18 sign-ups for early beta testing
                </b>
                , indicating strong interest and validation of the app’s value proposition.
              </P>
            </div>
          </Row>
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="Design & Development">
            <P className="">
              
                After the discovery phase, we initiated the design process by
                creating 
              
              <b>
                user flows
              </b>
              
                 to illustrate optimal paths within the app. We focused on
                setting organizational principles to present possibilities to
                the leadership team, highlighting the pros and cons of each
                approach.
              
            </P>
            <div className="flex flex-col items-start justify-start gap-3">
              <H4>Wireframing Process:</H4>
              <UL items={[
                {description: `Developed lightweight wireframes after approval of user flows.`},
                {description: `Used wireframes in user research to validate hypotheses.`},
                {description: `Underwent two iterations based on feedback from leadership, aiming to reduce development time and functionality for the General Availability (GA) release.`},
              ]} />

            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <H4>User Feedback and Iterations:</H4>
              <UL items={[
                {description: `Initial wireframes received positive feedback with minor suggestions.`},
                {description: `Adjusted the placement of the time tracker from a sticky bottom position to integration within the home page, based on user preferences and iOS conventions.`},
                {description: `Ensured the design did not hinder users seeking other information while on the job.`},
              ]} />
                
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <H4>Key Features Decided Upon:</H4>
              <UL items={[
                {title: `Time Tracking: `, description: `Prioritized due to its significance for both team members and business owners.`},
                {title: `Expenses: `, description: `Enabled easy recording of expenses to prevent data loss.`},
                {title: `Projects (Read-Only): `, description: `Provided business owners with a quick overview of project statuses without the need to navigate through multiple screens.`},
              ]} />
              
            </div>
          </Row>
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="Future Improvement">
            <UL items={[
              {title:"Beta Release and Iteration: ", description: `The app is currently under development for a beta release. We plan to conduct interviews with beta users to gather feedback and iterate on the design.`},
              {title:"Expanded Features:", description: `Future updates will focus on incorporating notes, tasks, and document sharing to further streamline communication and collaboration within teams.`},
              {title:"Continuous Engagement:", description: `Establishing a feedback loop with users to continually enhance the app based on their evolving needs.`},
            ]} />
              

          </Row>
          <Blockquote>
              Our internal workshops fostered cross-functional collaboration,
              allowing us to align on business objectives and integrate diverse
              perspectives into a cohesive product strategy.
            </Blockquote>
          
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="My Role & Contributions">
            <P>
              As the 
              <b>Product Design Lead</b>, my responsibilities encompassed:
            </P>
            <div className="flex flex-col items-start justify-start gap-3">
              <H4>Strategy and Leadership:</H4>
              <UL items={[
                {description: `Setting the design strategy and guiding the overall vision of the app.`},
                {description: `Leading the design efforts and ensuring alignment with business objectives.`},
                {description: `Collaborating closely with stakeholders, including the leadership team and subject matter experts (SMEs).`},
              ]} />
                
                
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <H4>Research and Collaboration:</H4>
              <UL items={[
                {description: `Played a pivotal role in conducting user research and`},
                {description: `Fostered an environment of open communication to gather diverse insights.`},
              ]} />
                
                

            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <H4>Design and Problem-Solving:</H4>
              <UL items={[
                {description: `Developed user flows and wireframes based on validated research.`},
                {description: `Made critical decisions on organizational principles, advocating for a user-centric approach.`},
                {description: `Demonstrated how integrating projects could simplify the user experience and improve feature utilization.`},
              ]} />
                
                
                    
           
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <H4>Challenges Overcome:</H4>
              <UL items={[
                {description: `Navigated shifting business priorities, which changed three times during the project.`},
                {description: `Facilitated stakeholder feedback sessions, ensuring everyone's perspectives were considered.`},
                {description: `Presented user-centric design processes to leadership, influencing key decisions.`},
              ]} />
                
                
           
            </div>
          </Row>
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="Reflection & Learnings">
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-6">
              <P className="text-base font-normal leading-tight tracking-tight">
                Key Lessons Learned:
              </P>
              <P className="">
                <b>Documentation is Crucial: </b>
                 Keeping a detailed record of decisions creates a valuable paper
                trail for transparency and future reference.
              </P>
              <P>
                <b>Early Leadership Involvement: </b>
                 Engaging leadership from the outset helps align expectations
                and fosters support, even if it means agreeing to disagree at
                times.
              </P>
              <P>
                <b>Continuous Research is Vital: </b>
                 User needs are diverse; ongoing research ensures the product
                remains relevant and user-focused.
              </P>
              <P>
                <b>Prototyping Enhances Feedback: </b>
                 Users provide more actionable feedback when they can interact
                with tangible prototypes rather than abstract discussions.
              </P>
            </div>
          </Row>
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="Influences on My Approach">
            <P className="text-base font-normal leading-tight tracking-tight">
              This project reinforced the importance of a user-centered design
              approach and the value of iterative development based on real user
              feedback. It highlighted the necessity of balancing business
              objectives with user needs to create a product that delivers
              genuine value.
            </P>
          </Row>
          <Blockquote>
              By focusing on real user needs and fostering collaboration across
              teams, FreshBooks Connect is poised to make a significant impact
              on how trades businesses operate. The app enhances efficiency and
              accuracy for both team members and business owners, embodying
              simplicity and fluidity in its design. It stands as a testament to
              the power of user-centered design and strategic leadership in
              creating solutions that meet the demands of modern business.
            </Blockquote>
        </div>
      </div>
      {/* Side Nav */}
      <SideNav sections={sections} activeSection={activeSection} />
      {/* Next Project */}
      <NextProject href="/design/brick" title="Freshbricks" />
    </div>
  );
}
