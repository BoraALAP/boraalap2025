"use client";
import React, { useCallback, useState } from "react";
import { useLenis } from "lenis/react";
import Lenis from "lenis";
import { Row } from "../components/projects/Row";
import { SideNav } from "../components/projects/SideNav";
import { motion, useScroll } from "framer-motion";

const sections = [
  {
    title: "Project Overview",
    navTitle: "Project Overview",
  },
  {
    title: "Identifying the Need",
    navTitle: "Identifying the Need",
  },
  {
    title: "Research and Planning",
    navTitle: "Research and Planning",
  },
  {
    title: "Design Principles and Foundations",
    navTitle: "Design Principles and Foundations",
  },
  {
    title: "Challenges and Problem-Solving",
    navTitle: "Challenges and Problem-Solving",
  },
  {
    title: "Impact and Outcomes",
    navTitle: "Impact and Outcomes",
  },
  {
    title: "Component Library Development",
    navTitle: "Component Library Development",
  },
  {
    title: "Implementation and Adoption",
    navTitle: "Implementation and Adoption",
  },
  {
    title: "Documentation and Tools",
    navTitle: "Documentation and Tools",
  },
  {
    title: "Collaboration and Governance",
    navTitle: "Collaboration and Governance",
  },
  {
    title: "Future Developments",
    navTitle: "Future Developments",
  },
  {
    title: "Personal Contributions and Leadership",
    navTitle: "Personal Contributions and Leadership",
  },
  {
    title: "Reflection and Learnings",
    navTitle: "Reflection and Learnings",
  },
];

export default function BrickPage() {
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
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative flex w-full flex-col overflow-hidden">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 right-0 top-0 h-1 origin-left bg-light-accentSoft"
      />
      <div className="flex flex-col">
        <div className="flex h-[800px] flex-col justify-end gap-10 bg-black bg-gradient-to-b from-transparent to-light-bg px-[5vw] py-32">
          <div className="flex flex-col items-center justify-start gap-6">
            <h2 className="text-center text-[40px] font-medium leading-10 text-light-body">
              Freshbooks Design System
            </h2>
            <h3 className="text-center text-lg font-medium leading-normal">
              Product Cross Platform Design System
            </h3>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-[5vw] py-14">
          <Row title="Project Overview">
            <p>
              <b>Freshbricks </b>
              is FreshBooks&apos; comprehensive design system developed to unify
              design and development practices across the organization. Now in
              its third iteration, Freshbricks addresses previous challenges in
              adoption and scalability by fostering cross-functional
              collaboration. Unlike earlier attempts that were design-centric
              and lacked broader team involvement, this iteration was led by a
              dedicated team comprising designers, engineers, and a product
              manager. Our primary objective was to create a system that is
              consistent, cohesive, scalable, and easy to use for all team
              members.
            </p>
            <p>
              The design system primarily serves our web applications but is
              also built with future mobile integration in mind, aligning with
              ongoing projects like the FreshBooks Connect mobile app.
            </p>
          </Row>
          <div className="inline-flex items-center justify-center gap-2">
            <blockquote className="shrink grow basis-0 text-center text-base font-semibold leading-normal">
              Implementing Freshbricks significantly streamlined our workflow,
              enhancing consistency and collaboration across teams while
              reducing development time and ensuring an accessible user
              experience across all products.
            </blockquote>
          </div>
          <Row title="Identifying the Need">
            <p>
              We observed significant challenges in our existing design and
              development processes:
            </p>
            <ul>
              <li>
                <b>Inconsistency Across Teams: </b>
                Different product teams often created components that were not
                consistent with each other.
              </li>
              <li>
                <b>Duplication of Efforts: </b>
                Absence of a centralized component repository led to multiple
                versions of the same component being developed independently.
              </li>
              <li>
                <b>Customization Issues: </b>
                Engineers using Tailwind CSS could unintentionally alter
                components&apos; colors or spacing, resulting in design
                inconsistencies and potential production issues.
              </li>
            </ul>
            <p>
              These challenges impacted teams by increasing the time spent
              recreating or adjusting components, leading to inefficiencies and
              delayed project timelines. For end-users, inconsistent user
              interfaces resulted in a fragmented experience, affecting overall
              satisfaction and usability.
            </p>
          </Row>
          <Row title="Research and Planning">
            <p>
              To address these issues, we conducted a comprehensive audit of our
              entire product suite to identify necessary components, patterns,
              and guidelines. We discovered inconsistencies in color palettes,
              spacing, and typography, which led us to develop standardized
              design tokens.
            </p>
            <p>
              We held workshops to collect product needs from stakeholders and
              finalize approaches to solve identified problems. User testing was
              performed on general patterns and components to ensure usability
              and effectiveness. We also researched industry best practices to
              inform our decisions.
            </p>
            <p>Our goals and success metrics were defined collaboratively:</p>

            <ul>
              <li>
                <b>Establish a Solid Foundation: </b>
                Prioritize foundational elements before iterating on additional
                features.
              </li>
              <li>
                <b>Adoption Rate:</b>
                Measure success by the percentage of teams adopting the design
                system in new projects.
              </li>
              <li>
                <b>Support Technology Transition: </b>
                Facilitate the engineering team&apos;s shift from Ember to React
                for better integration with the design system.
              </li>
            </ul>
          </Row>
          <div className="inline-flex items-center justify-center gap-2">
            <blockquote className="shrink grow basis-0 text-center text-base font-semibold leading-normal">
              &quot;Freshbricks empowered designers and developers to focus on
              innovation by providing reusable components, reducing redundancy,
              and accelerating project timelines.&quot;
            </blockquote>
          </div>
          <Row title="Design Principles and Foundations">
            <p>Our design system is guided by four core principles:</p>
            <ul>
              <li>
                <b>Consistency:</b>
                Maintain uniformity across all components and products.
              </li>
              <li>
                <b>Accessibility:</b>
                Embed accessibility standards into all components and patterns.
              </li>
              <li>
                <b>Clarity:</b>
                Promote clear and straightforward design for better user
                comprehension.
              </li>
              <li>
                <b>Innovation:</b>
                Encourage creativity within the framework of the design system.
              </li>
            </ul>
            <p>
              We established foundational elements including color palettes,
              spacing, typography, and grid systems. Assets such as standardized
              icons and illustrations were developed, along with a comprehensive
              library of UI components for designers and engineers. Reusable
              patterns and detailed guidelines were created to ensure effective
              utilization of the design system.
            </p>
            <p>
              Accessibility was a critical focus. We employed automated testing
              tools like linters and scripts to ensure components comply with
              WCAG guidelines. By integrating accessibility considerations from
              the outset, we reduced the need for retroactive fixes and ensured
              our products are usable by all.
            </p>
          </Row>
          <Row title="Challenges and Problem-Solving">
            <p>
              We faced significant challenges, such as balancing the development
              of the design system while projects were rapidly evolving.
              Immediate business needs required us to address urgent
              requirements like updating complex components such as tables.
            </p>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>Overcoming Obstacles:</h4>
              <ul>
                <li>
                  <b>Strategic Scheduling:</b>
                  Set clear timelines for beta and GA releases, keeping
                  stakeholders informed to manage expectations.
                </li>

                <li>
                  <b>Team Allocation:</b>
                  Divided the team to focus on both foundational components and
                  complex elements simultaneously.
                </li>
                <li>
                  <b>Incremental Integration:</b>
                  Leveraged the transition to React to gradually introduce
                  design system components into existing products.
                </li>
              </ul>
            </div>
          </Row>
          <Row title="Impact and Outcomes">
            <p>
              The design system has brought measurable benefits to the
              organization:
            </p>
            <ul>
              <li>
                <b>Design Efficiency:</b>
                Reduced the time for designers to start projects by threefold
                using page templates.
              </li>

              <li>
                <b>High Adoption Rate:</b>
                Achieved a 93% adoption rate in products developed with React.
              </li>

              <li>
                <b>Design Consistency:</b>
                Maintained a Figma detach rate of less than 2%, indicating
                strong adherence to the design system.
              </li>
            </ul>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>Improved Collaboration and Workflow:</h4>
              <ul>
                <li>
                  Designers can create prototypes much faster for user research
                  and testing.
                </li>
                <li>
                  Engineers build features more rapidly with consistent,
                  pre-built components.
                </li>
                <li>
                  Product teams have confidence that they are using standardized
                  components and following best practices.
                </li>
              </ul>
            </div>
          </Row>
          <Row title="Component Library Development">
            <p>
              We developed key components ranging from atomic elements like
              buttons and dropdowns to complex components like data tables and
              modals.
            </p>

            <div className="flex flex-col items-start justify-start gap-3">
              <h4>Design and Development Process:</h4>
              <ul>
                <li>
                  <b>Assessment:</b>
                  Evaluated requests from product teams to understand their
                  needs.
                </li>
                <li>
                  <b>Planning:</b>
                  Created strategic plans and defined solutions to address these
                  needs.
                </li>
                <li>
                  <b>Design Iteration:</b>
                  Developed components, gathered feedback, and refined designs.
                </li>
                <li>
                  <b>Collaboration with Engineers:</b>
                  Partnered with engineers to ensure feasibility and robustness.
                </li>

                <li>
                  <b>Implementation:</b>
                  Built and integrated components into the design system.
                </li>
              </ul>
            </div>
            <p>
              To ensure consistency and flexibility, we defined solid presets
              for components while allowing flexibility where necessary. Design
              tokens were recreated in collaboration with the brand team,
              aligning names and usage between Figma and engineering use cases.
            </p>
          </Row>
          <Row title="Implementation and Adoption">
            <p>The design system was rolled out strategically:</p>

            <ul>
              <li>
                <b>Beta Release:</b>
                Introduced to a select group for initial use and feedback.
              </li>
              <li>
                <b>General Availability (GA):</b>
                Launched organization-wide after achieving an 85% success rate
                during the beta phase.
              </li>
            </ul>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>Adoption Initiatives:</h4>
              <ul>
                <li>
                  Conducted roadshows to raise awareness and encourage adoption.
                </li>
                <li>
                  Created educational materials like how-to videos for
                  self-paced learning.
                </li>
                <li>
                  Established support channels and office hours for questions
                  and discussions.
                </li>
              </ul>
            </div>

            <p>
              We initially encountered resistance from engineers accustomed to
              Ember&apos;s flexibility. Through collaborative workshops and
              demonstrating the efficiency gains with React components, we were
              able to overcome this challenge and encourage adoption.
            </p>
          </Row>
          <Row title="Documentation and Tools">
            <p>
              We centralized all documentation, guidelines, and best practices
              in Confluence, providing comprehensive guides that include style
              guides, component usage instructions, and code snippets.
            </p>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>Tools Utilized:</h4>
              <ul>
                <li>
                  <b>Design:</b>
                  Figma for creating and maintaining design components.
                </li>
                <li>
                  <b>Development:</b>
                  GitHub for version control, Storybook for component
                  visualization.
                </li>
                <li>
                  <b>Task Management:</b>
                  Jira for tracking tasks and progress.
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>Version Control and Updates:</h4>
              <p>
                We managed version control through a branching strategy,
                ensuring the main branch remains production-ready. Controlled
                access prevented incomplete components from being prematurely
                accessed by product teams.
              </p>
              <p>
                Changes and updates were proposed through Jira forms, allowing
                designers and engineers to submit requests for new components or
                modifications. We adopted Brad Frost’s atomic design
                methodology, with regular reviews and iterations based on
                feedback.
              </p>
            </div>
          </Row>
          <Row title="Collaboration and Governance">
            <p>
              Our core team consisted of two designers, five engineers, and one
              product manager. Stakeholders included the leadership team and
              team leads, with representatives from requesting teams involved as
              stakeholders in the development process of components they needed.
            </p>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>Fostering Collaboration:</h4>
              <ul>
                <li>
                  Conducted educational workshops to align understanding and
                  expectations between designers and engineers.
                </li>
                <li>
                  Established shared naming conventions and terminologies to
                  enhance communication.
                </li>
                <li>
                  Involved requesting teams as stakeholders, ensuring they felt
                  ownership in the components developed.
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>Governance Model:</h4>

              <p>
                We established a steering committee comprising leadership and We
                established a steering committee comprising leadership and
                design system team leads to oversee and make decisions.
                Currently, the design system team manages contributions and
                merges to maintain quality. We plan to transition to a more
                collaborative model, allowing other teams to contribute
                components under core team review.
              </p>
            </div>
          </Row>
          <Row title="Future Developments">
            <p>
              We are committed to continuously evolving Freshbricks to adapt to
              new needs and technologies.
            </p>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>Ongoing Plans:</h4>
              <ul>
                <li>
                  <b>Refine Communication Channels:</b>
                  Improve leadership visibility into progress and ensure
                  alignment with product needs.
                </li>
                <li>
                  <b>Mobile Integration:</b>
                  Fully incorporate mobile platforms into the design system.
                </li>
                <li>
                  <b>Enhanced Efficiency:</b>
                  Develop pre-made templates and default states to streamline
                  Fully incorporate mobile platforms into the design system.
                </li>
                <li>
                  <b>Accessibility Focus:</b>
                  Embed accessibility into every aspect of the design system,
                  reducing the burden on individual team members.
                </li>
              </ul>
            </div>
          </Row>
          <Row title="Personal Contributions and Leadership">
            <p>
              As the 
              <b>Design Lead</b>
               for the team, I played a pivotal role in advocating for the
              design system&apos;s importance to leadership. My key
              responsibilities included:
            </p>
            <ul>
              <li>
                <b>Initiating the Project:</b>
                Educated leadership on the need for a dedicated team and
                cross-functional collaboration.
              </li>
              <li>
                <b>Designing Components:</b>
                Actively involved in building design components and setting up
                guidelines within Figma.
              </li>
              <li>
                <b>Establishing Guidelines:</b>
                Created foundational guidelines and best practices for the
                design system.
              </li>
              <li>
                <b>Mentoring Team Members:</b>
                Guided an intermediate designer, recognizing her strengths in
                documentation and supporting her growth in component development
                and cross-team collaboration.
              </li>
            </ul>
            <p>
              I leveraged my prior experience from leading the Ceridian Design
              System to inform strategies and avoid past mistakes.
            </p>
          </Row>
          <Row title="Reflection and Learnings">
            <p>Key lessons learned include:</p>
            <ul>
              <li>
                <b>Team and Leadership Support is Crucial:</b>
                Success depends on backing from both the team and leadership.
              </li>
              <li>
                <b>Team and Leadership Support is Crucial:</b>
                Success depends on backing from both the team and leadership.
              </li>
              <li>
                <b>Clear Communication:</b>
                Defining goals upfront and maintaining transparency throughout
                the project is essential.
              </li>
              <li>
                <b>User Involvement:</b>
                Involving end-users and team members ensures the system meets
                actual needs.
              </li>
              <li>
                <b>Celebrate Wins:</b>
                Acknowledging milestones and achievements boosts team morale.
              </li>
              <li>
                <b>Long-Term Perspective:</b>
                Developing a design system is an ongoing process requiring
                patience and dedication.
              </li>
            </ul>
            <p>
              This project influenced my approach by emphasizing the need for
              enhanced documentation and early cross-team engagement. If
              starting the project today, I would prioritize involving
              engineering teams from the outset to ensure cohesive development.
            </p>
          </Row>
          <div className="inline-flex items-center justify-center gap-2">
            <blockquote className="shrink grow basis-0 text-center text-base font-semibold leading-normal">
              Freshbricks represents a significant advancement in unifying
              FreshBooks&apos; design and development efforts. By learning from
              past attempts and emphasizing cross-functional collaboration, we
              have established a design system that enhances efficiency,
              consistency, and fosters innovation. As Freshbricks continues to
              evolve, it remains a foundational element in delivering
              high-quality, user-centered products that align with our core
              values and business objectives.
            </blockquote>
          </div>
        </div>
      </div>
      {/* Side Nav */}
      <SideNav sections={sections} activeSection={activeSection} />
    </div>
  );
}
