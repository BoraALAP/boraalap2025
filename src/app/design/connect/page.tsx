"use client";
import React, { useCallback, useState } from "react";
import { useLenis } from "lenis/react";
import Lenis from "lenis";
import { Row } from "../components/projects/Row";
import { SideNav } from "../components/projects/SideNav";

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
  const [activeSection, setActiveSection] = useState<string>("");

  const onScroll = useCallback((lenis: Lenis) => {
    const scrollPos = lenis.scroll;

    // Find the section closest to the top of the viewport
    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const offset = rect.top + scrollPos;

      if (Math.abs(scrollPos - offset) < 200) {
        // Adjust threshold as needed
        setActiveSection(section.id);
      }
    });
  }, []);

  useLenis(onScroll);

  return (
    <div className="relative flex w-full flex-col overflow-hidden">
      <div className="flex flex-col">
        <div className="flex h-[800px] flex-col justify-end gap-10 bg-black bg-gradient-to-b from-transparent to-light-bg px-[5vw] py-32">
          <div className="flex flex-col items-center justify-start gap-6">
            <h2 className="text-center text-[40px] font-medium leading-10 text-light-body">
              Freshbooks Connect
            </h2>
            <h3 className="text-center text-lg font-medium leading-normal">
              New Mobile App for Team Members
            </h3>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-[5vw] py-14">
          <Row title="Project Overview">
            <p>
              <b>FreshBooks Connect</b>
               is a mobile application designed to streamline key workflows for
              team members and business owners in the trades industry. The app
              provides a simple and fluid platform built for teams, enabling
              team members to effortlessly log time, expenses, and mileage. For
              business owners and administrators, it delivers proactive and
              timely access to accurate, real-time data on project statuses and
              team performance, enhancing decision-making and operational
              efficiency.
            </p>
          </Row>
          <div className="inline-flex items-center justify-center gap-2">
            <blockquote className="shrink grow basis-0 text-center text-base font-semibold leading-normal">
              By focusing on a simple and fluid user experience, we bridged the
              gap between on-site team members and business owners, enhancing
              real-time collaboration and operational efficiency
            </blockquote>
          </div>
          <Row title="Research & Discovery">
            <p>
              To validate our assumptions and uncover real user needs, we
              conducted over 
              <b>20 in-depth customer interviews</b>
               using platforms like Great Question and User Interviews. Each
              session lasted about 45 minutes and provided valuable insights:
            </p>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>Key Findings:</h4>
              <p className="text-base font-normal leading-tight tracking-tight">
                Business owners needed team members to quickly and accurately
                add their time and expenses to maintain clean and up-to-date
                books.
              </p>
              <p className="text-base font-normal leading-tight tracking-tight">
                Team members required easy access to necessary information while
                on job sites, emphasizing the need for a simple and intuitive
                interface.
              </p>
              <p className="text-base font-normal leading-tight tracking-tight">
                Owners expressed a desire for an all-in-one app to streamline
                operations, reducing the need to juggle multiple platforms.
              </p>
              <p className="text-base font-normal leading-tight tracking-tight">
                Different business segments had varying needs regarding expense
                tracking and client billing.
              </p>
            </div>
            <p className="">
              We also facilitated over 
              <b>six internal workshops</b>
               involving stakeholders and subject matter experts:
            </p>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>Workshop Activities:</h4>
              <p className="">
                <span className="text-base font-bold leading-tight tracking-tight">
                  Rose, Bud, Thorn Exercise:
                </span>
                <span className="text-base font-normal leading-tight tracking-tight">
                   Assessed the strengths and weaknesses of the current app.
                </span>
              </p>
              <p className="">
                <span className="text-base font-bold leading-tight tracking-tight">
                  Lean Canvas Sessions:
                </span>
                <span className="text-base font-normal leading-tight tracking-tight">
                   Identified opportunities and essential features for the new
                  app.
                </span>
              </p>
              <p className="">
                <span className="text-base font-bold leading-tight tracking-tight">
                  User Journey Mapping:
                </span>
                <span className="text-base font-normal leading-tight tracking-tight">
                   Explored daily routines of users to integrate the app
                  seamlessly into their workflows.
                </span>
              </p>
              <p className="">
                <span className="text-base font-bold leading-tight tracking-tight">
                  Jobs-to-Be-Done Framework:
                </span>
                <span className="text-base font-normal leading-tight tracking-tight">
                   Clarified the tasks users aim to accomplish with the app.
                </span>
              </p>
            </div>
            <p className="text-base font-normal leading-tight tracking-tight">
              These workshops fostered collaboration and ensured alignment with
              business objectives, incorporating valuable insights from
              long-standing team members about customer experiences.
            </p>
          </Row>
          <Row title="The Challenge">
            <p className="text-base font-normal leading-tight tracking-tight">
              Initially, our objective was to bring more users into the
              FreshBooks ecosystem by offering value that aids in daily tasks
              and promotes increased usage through team collaboration and client
              communication. We assumed that team members primarily needed a
              platform for messaging each other and keeping track of tasks.
              However, through extensive research, we discovered that business
              owners prioritized receiving accurate data from team members over
              communication features.
            </p>
          </Row>
          <Row title="Impact Outcomes">
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>For Business Owners:</h4>
              <p className="text-base font-normal leading-tight tracking-tight">
                Enhanced visibility into team activities and project statuses.
                <br />
                Improved accuracy in project estimations and understanding of
                task durations.
                <br />
                Simplified expense recording, leading to cleaner books and
                financial clarity.
                <br />
                Future capabilities to share notes, tasks, and documents within
                the app, reducing reliance on external messaging platforms.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>For Team Members in the Trades Vertical:</h4>
              <p className="text-base font-normal leading-tight tracking-tight">
                Simplified input of time and expense data without administrative
                hassle.
                <br />
                Access to necessary project information directly on job sites.
                <br />
                Reduction in the need to use multiple apps, streamlining their
                workflow.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>Early Feedback:</h4>
              <p className="">
                <span className="text-base font-normal leading-tight tracking-tight">
                  Received 
                </span>
                <span className="text-base font-bold leading-tight tracking-tight">
                  18 sign-ups for early beta testing
                </span>
                <span className="text-base font-normal leading-tight tracking-tight">
                  , indicating strong interest and validation of the app’s value
                  proposition.
                </span>
              </p>
            </div>
          </Row>
          <Row title="Design & Development">
            <p className="">
              <span className="text-base font-normal leading-tight tracking-tight">
                After the discovery phase, we initiated the design process by
                creating 
              </span>
              <span className="text-base font-bold leading-tight tracking-tight">
                user flows
              </span>
              <span className="text-base font-normal leading-tight tracking-tight">
                 to illustrate optimal paths within the app. We focused on
                setting organizational principles to present possibilities to
                the leadership team, highlighting the pros and cons of each
                approach.
              </span>
            </p>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>Wireframing Process:</h4>
              <p className="text-base font-normal leading-tight tracking-tight">
                Developed lightweight wireframes after approval of user flows.
                <br />
                Used wireframes in user research to validate hypotheses.
                <br />
                Underwent two iterations based on feedback from leadership,
                aiming to reduce development time and functionality for the
                General Availability (GA) release.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>User Feedback and Iterations:</h4>
              <p className="text-base font-normal leading-tight tracking-tight">
                Initial wireframes received positive feedback with minor
                suggestions.
                <br />
                Adjusted the placement of the time tracker from a sticky bottom
                position to integration within the home page, based on user
                preferences and iOS conventions.
                <br />
                Ensured the design did not hinder users seeking other
                information while on the job.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>Key Features Decided Upon:</h4>
              <p>
                <b>Time Tracking:</b>
                 Prioritized due to its significance for both team members and
                business owners.
              </p>
              <p>
                <b>Expenses:</b>
                 Enabled easy recording of expenses to prevent data loss.
              </p>
              <p>
                <b>Projects (Read-Only):</b>
                 Included to provide context and improve organization, aligning
                with business goals.
              </p>
            </div>
          </Row>
          <Row title="Future Improvement">
            <p>
              <b>Beta Release and Iteration:</b>
               The app is currently under development for a beta release. We
              plan to conduct interviews with beta users to gather feedback and
              iterate on the design.
            </p>
            <p>
              <b>Expanded Features:</b>
              Future updates will focus on incorporating notes, tasks, and
               Future updates will focus on incorporating notes, tasks, and
              document sharing to further streamline communication and
              collaboration within teams.
            </p>
            <p>
              <b>Continuous Engagement:</b>
              Establishing a feedback loop with users to continually enhance the
              app based on their evolving needs.
            </p>
          </Row>
          <div className="inline-flex items-center justify-center gap-2">
            <blockquote className="shrink grow basis-0 text-center text-base font-semibold leading-normal">
              Our internal workshops fostered cross-functional collaboration,
              allowing us to align on business objectives and integrate diverse
              perspectives into a cohesive product strategy.
            </blockquote>
          </div>
          <Row title="My Role & Contributions">
            <p>
              As the 
              <b>Product Design Lead</b>, my responsibilities encompassed:
            </p>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>Strategy and Leadership:</h4>
              <ul>
                <li>
                  Setting the design strategy and guiding the overall vision of
                  the app.
                </li>
                <li>
                  Leading the design efforts and ensuring alignment with
                  business objectives.
                </li>
                <li>
                  Collaborating closely with stakeholders, including the
                  leadership team and subject matter experts (SMEs).
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>Research and Collaboration:</h4>
              <ul>
                <li>Played a pivotal role in conducting user research and</li>
                <li>
                  Fostered an environment of open communication to gather
                  diverse insights.
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>Design and Problem-Solving:</h4>
              <ul>
                <li>
                  Developed user flows and wireframes based on validated
                  research.
                </li>
                <li>
                  Made critical decisions on organizational principles,
                  advocating for a user-centric approach.
                </li>
                <li>
                  Demonstrated how integrating projects could simplify the user
                  experience and improve feature utilization.
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>Challenges Overcome:</h4>
              <ul>
                <li>
                  Navigated shifting business priorities, which changed three
                  times during the project.
                </li>
                <li>
                  Facilitated stakeholder feedback sessions, ensuring
                  everyone&apos;s perspectives were considered.
                </li>
                <li>
                  Presented user-centric design processes to leadership,
                  influencing key decisions.
                </li>
              </ul>
            </div>
          </Row>
          <Row title="Reflection & Learnings">
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-6">
              <p className="text-base font-normal leading-tight tracking-tight">
                Key Lessons Learned:
              </p>
              <p className="">
                <b>Documentation is Crucial:</b>
                 Keeping a detailed record of decisions creates a valuable paper
                trail for transparency and future reference.
              </p>
              <p>
                <b>Early Leadership Involvement:</b>
                 Engaging leadership from the outset helps align expectations
                and fosters support, even if it means agreeing to disagree at
                times.
              </p>
              <p>
                <b>Continuous Research is Vital:</b>
                 User needs are diverse; ongoing research ensures the product
                remains relevant and user-focused.
              </p>
              <p>
                <b>Prototyping Enhances Feedback:</b>
                 Users provide more actionable feedback when they can interact
                with tangible prototypes rather than abstract discussions.
              </p>
            </div>
          </Row>
          <Row title="Influences on My Approach">
            <p className="text-base font-normal leading-tight tracking-tight">
              This project reinforced the importance of a user-centered design
              approach and the value of iterative development based on real user
              feedback. It highlighted the necessity of balancing business
              objectives with user needs to create a product that delivers
              genuine value.
            </p>
          </Row>
          <div className="inline-flex items-center justify-center gap-2">
            <blockquote className="shrink grow basis-0 text-center text-base font-semibold leading-normal">
              By focusing on real user needs and fostering collaboration across
              teams, FreshBooks Connect is poised to make a significant impact
              on how trades businesses operate. The app enhances efficiency and
              accuracy for both team members and business owners, embodying
              simplicity and fluidity in its design. It stands as a testament to
              the power of user-centered design and strategic leadership in
              creating solutions that meet the demands of modern business.
            </blockquote>
          </div>
        </div>
      </div>
      {/* Side Nav */}
      <SideNav sections={sections} activeSection={activeSection} />
    </div>
  );
}
