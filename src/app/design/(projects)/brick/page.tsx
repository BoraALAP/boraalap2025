"use client";
import React, {  useState } from "react";


import { Row } from "../components/Row";
import { SideNav } from "../components/SideNav";



import { NextProject } from "../components/NextProject";
import {  H4,  P, UL, Blockquote } from "@/components/Reveal";
import { Hero } from "../components/Hero";

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
  const [activeSection, setActiveSection] = useState<string[]>([]);

  const handleSectionEnter = (section: string) => {
    setActiveSection((prev) => [...prev, section]);
  };

  const handleSectionLeave = (section: string) => {
    setActiveSection((prev) => prev.filter((s) => s !== section));
  }
  

  return (
    <div className="relative flex w-full flex-col overflow-hidden">
     
      <div className="flex flex-col">
        <Hero title="Freshbooks Design System" subtitle="Product Cross Platform Design System" />
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-[5vw] py-14 md:pr-24 xl:pr-[5vw]">
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="Project Overview">
            <P>
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
            </P >
            <P>
              The design system primarily serves our web applications but is
              also built with future mobile integration in mind, aligning with
              ongoing projects like the FreshBooks Connect mobile app.
            </P>
          </Row>
          
            <Blockquote>
              Implementing Freshbricks significantly streamlined our workflow,
              enhancing consistency and collaboration across teams while
              reducing development time and ensuring an accessible user
              experience across all products.
            </Blockquote>
          
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="Identifying the Need">
            <P>
              We observed significant challenges in our existing design and
              development processes:
            </P>
            <UL items={[
              {title: `Inconsistency Across Teams:`, description: `Different product teams often created components that were not consistent with each other.`},
              {title: `Duplication of Efforts:`, description: `Absence of a centralized component repository led to multiple versions of the same component being developed independently.`},
              {title: `Customization Issues:`, description: `Engineers using Tailwind CSS could unintentionally alter components' colors or spacing, resulting in design inconsistencies.`},
            ]} />
            
            <P>
              These challenges impacted teams by increasing the time spent
              recreating or adjusting components, leading to inefficiencies and
              delayed project timelines. For end-users, inconsistent user
              interfaces resulted in a fragmented experience, affecting overall
              satisfaction and usability.
            </P>
          </Row>
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="Research and Planning">
            <P>
              To address these issues, we conducted a comprehensive audit of our
              entire product suite to identify necessary components, patterns,
              and guidelines. We discovered inconsistencies in color palettes,
              spacing, and typography, which led us to develop standardized
              design tokens.
            </P>
            <P>
              We held workshops to collect product needs from stakeholders and
              finalize approaches to solve identified problems. User testing was
              performed on general patterns and components to ensure usability
              and effectiveness. We also researched industry best practices to
              inform our decisions.
            </P>
            <P>Our goals and success metrics were defined collaboratively:</P>
            <UL items={[
              {title: `Establish a Solid Foundation:`, description: `Prioritize foundational elements before iterating on additional features.`},
              {title: `Adoption Rate:`, description: `Measure success by the percentage of teams adopting the design system in new projects.`},
              {title: `Support Technology Transition:`, description: `Facilitate the engineering team's shift from Ember to React for better integration with the design system.`},
            ]} />
            
          </Row>
          
            <Blockquote>
              &quot;Freshbricks empowered designers and developers to focus on
              innovation by providing reusable components, reducing redundancy,
              and accelerating project timelines.&quot;
            </Blockquote>
          
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="Design Principles and Foundations">
            <P>Our design system is guided by four core principles:</P>
            <UL items={[
              {title: `Consistency:`, description: `Maintain uniformity across all components and products.`},
              {title: `Accessibility:`, description: `Embed accessibility standards into all components and patterns.`},
              {title: `Clarity:`, description: `Promote clear and straightforward design for better user comprehension.`},
              {title: `Innovation:`, description: `Encourage creativity within the framework of the design system.`},
            ]} />
            
            <P>
              We established foundational elements including color palettes,
              spacing, typography, and grid systems. Assets such as standardized
              icons and illustrations were developed, along with a comprehensive
              library of UI components for designers and engineers. Reusable
              patterns and detailed guidelines were created to ensure effective
              utilization of the design system.
            </P>
            <P>
              Accessibility was a critical focus. We employed automated testing
              tools like linters and scripts to ensure components comply with
              WCAG guidelines. By integrating accessibility considerations from
              the outset, we reduced the need for retroactive fixes and ensured
              our products are usable by all.
            </P>
          </Row>
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="Challenges and Problem-Solving">
            <P>
              We faced significant challenges, such as balancing the development
              of the design system while projects were rapidly evolving.
              Immediate business needs required us to address urgent
              requirements like updating complex components such as tables.
            </P>
            <div className="flex flex-col items-start justify-start gap-3">
              <H4>Overcoming Obstacles:</H4>
              <UL items={[
                {title: `Strategic Scheduling:`, description: `Set clear timelines for beta and GA releases, keeping stakeholders informed to manage expectations.`},
                {title: `Team Allocation:`, description: `Divided the team to focus on both foundational components and complex elements simultaneously.`},
                {title: `Incremental Integration:`, description: `Leveraged the transition to React to gradually introduce components into existing products.`},
              ]} />
              
            </div>
          </Row>
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="Impact and Outcomes">
            <P>
              The design system has brought measurable benefits to the
              organization:
            </P>
            <UL items={[
              {title: `Design Efficiency:`, description: `Reduced the time for designers to start projects by threefold using page templates.`},
              {title: `High Adoption Rate:`, description: `Achieved a 93% adoption rate in products developed with React.`},
              {title: `Design Consistency:`, description: `Maintained a Figma detach rate of less than 2%, indicating strong adherence to the design system.`},
            ]} />
            
          
            <div className="flex flex-col items-start justify-start gap-3">
              <H4>Improved Collaboration and Workflow:</H4>
              <UL items={[
                {description: `Designers can create prototypes much faster for user research and testing.`},
                {description: `Engineers build features more rapidly with consistent, pre-built components.`},
                {description: `Product teams have confidence that they are using standardized components and following best practices.`},
              ]} />
              
            </div>
          </Row>
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="Component Library Development">
            <P>
              We developed key components ranging from atomic elements like
              buttons and dropdowns to complex components like data tables and
              modals.
            </P>

            <div className="flex flex-col items-start justify-start gap-3">

              <H4>Design and Development Process:</H4>
              <UL items={[
                {title: `Assessment:`, description: `Evaluated requests from product teams to understand their needs.`},
                {title: `Planning:`, description: `Created strategic plans and defined solutions to address these needs.`},
                {title: `Design Iteration:`, description: `Developed components, gathered feedback, and refined designs.`},
                {title: `Collaboration with Engineers:`, description: `Partnered with engineers to ensure feasibility and robustness.`},
                {title: `Implementation:`, description: `Built and integrated components into the design system.`},
              ]} />
              
            
            </div>
            <P>
              To ensure consistency and flexibility, we defined solid presets
              for components while allowing flexibility where necessary. Design
              tokens were recreated in collaboration with the brand team,
              aligning names and usage between Figma and engineering use cases.
            </P>
          </Row>
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="Implementation and Adoption">
            <P>The design system was rolled out strategically:</P>
            <UL items={[
              {title: `Beta Release:`, description: `Introduced to a select group for initial use and feedback.`},
              {title: `General Availability (GA):`, description: `Launched organization-wide after achieving an 85% success rate during the beta phase.`},
            ]} />
            <div className="flex flex-col items-start justify-start gap-3">
              <H4>Adoption Initiatives:</H4>
              <UL items={[
                {description: `Conducted roadshows to raise awareness and encourage adoption.`},
                {description: `Created educational materials like how-to videos for self-paced learning.`},
                {description: `Established support channels and office hours for questions and discussions.`},
              ]} />
              
               
            </div>

            <P>
              We initially encountered resistance from engineers accustomed to
              Ember&apos;s flexibility. Through collaborative workshops and
              demonstrating the efficiency gains with React components, we were
              able to overcome this challenge and encourage adoption.
            </P>
          </Row>
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="Documentation and Tools">
            <P>
              We centralized all documentation, guidelines, and best practices
              in Confluence, providing comprehensive guides that include style
              guides, component usage instructions, and code snippets.
            </P>
            <div className="flex flex-col items-start justify-start gap-3">
              <H4>Tools Utilized:</H4>
              <UL items={[
                {title: `Design:`, description: `Figma for creating and maintaining design components.`},
                {title: `Development:`, description: `GitHub for version control, Storybook for component visualization.`},
                {title: `Task Management:`, description: `Jira for tracking tasks and progress.`},
              ]} />
              
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <h4>Version Control and Updates:</h4>
              <P>
                We managed version control through a branching strategy,
                ensuring the main branch remains production-ready. Controlled
                access prevented incomplete components from being prematurely
                accessed by product teams.
              </P>
              <P>
                Changes and updates were proposed through Jira forms, allowing
                designers and engineers to submit requests for new components or
                modifications. We adopted Brad Frost’s atomic design
                methodology, with regular reviews and iterations based on
                feedback.
              </P>
            </div>
          </Row>
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="Collaboration and Governance">
            <P>
              Our core team consisted of two designers, five engineers, and one
              product manager. Stakeholders included the leadership team and
              team leads, with representatives from requesting teams involved as
              stakeholders in the development process of components they needed.
            </P>
            <div className="flex flex-col items-start justify-start gap-3">
              <H4>Fostering Collaboration:</H4>
              <UL items={[
                { description: `Conducted educational workshops to align understanding and expectations between designers and engineers.`},
                { description: `Established shared naming conventions and terminologies to enhance communication.`},
                { description: `Involved requesting teams as stakeholders, ensuring they felt ownership in the components developed.`},
              ]} />
              
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <H4>Governance Model:</H4>

              <P>
                We
                established a steering committee comprising leadership and
                design system team leads to oversee and make decisions.
                Currently, the design system team manages contributions and
                merges to maintain quality. We plan to transition to a more
                collaborative model, allowing other teams to contribute
                components under core team review.
              </P>
            </div>
          </Row>
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="Future Developments">
            <P>
              We are committed to continuously evolving Freshbricks to adapt to
              new needs and technologies.
            </P>
            <div className="flex flex-col items-start justify-start gap-3">
              <H4>Ongoing Plans:</H4>
              <UL items={[
                {title: `Refine Communication Channels:`, description: `Improve leadership visibility into progress and ensure alignment with product needs.`},
                {title: `Mobile Integration:`, description: `Fully incorporate mobile platforms into the design system.`},
                {title: `Enhanced Efficiency:`, description: `Develop pre-made templates and default states to streamline Fully incorporate mobile platforms into the design system.`},
                {title: `Accessibility Focus:`, description: `Embed accessibility into every aspect of the design system, reducing the burden on individual team members.`},
              ]} />
                
            </div>
          </Row>
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="Personal Contributions and Leadership">
            <P>
              As the 
              <b>Design Lead</b>
               for the team, I played a pivotal role in advocating for the
              design system&apos;s importance to leadership. My key
              responsibilities included:
            </P>
            <UL items={[
              {title: `Initiating the Project:`, description: `Educated leadership on the need for a dedicated team and cross-functional collaboration.`},
              {title: `Designing Components:`, description: `Actively involved in building design components and setting up guidelines within Figma.`},
              {title: `Establishing Guidelines:`, description: `Created foundational guidelines and best practices for the design system.`},
              {title: `Mentoring Team Members:`, description: `Guided an intermediate designer, recognizing her strengths in documentation and supporting her growth in component development and cross-team collaboration.`},
            ]} />
            
            <P>
              I leveraged my prior experience from leading the Ceridian Design
              System to inform strategies and avoid past mistakes.
            </P>
          </Row>
          <Row onSectionEnter={handleSectionEnter} onSectionLeave={handleSectionLeave} title="Reflection and Learnings">
            <P>Key lessons learned include:</P>
            <UL items={[
                {title: `Team and Leadership Support is Crucial:`,
                description: `Success depends on backing from both the team and leadership.`},
                {title: `Clear Communication:`,
                description: `Defining goals upfront and maintaining transparency throughout
                the project is essential.`},
                {title: `User Involvement:`,
                description: `Involving end-users and team members ensures the system meets
                actual needs.`},
                {title: `Celebrate Wins:`,
                description: `Acknowledging milestones and achievements boosts team morale.`},
                {title: `Long-Term Perspective:`,
                description: `Developing a design system is an ongoing process requiring
                patience and dedication.`},
              ]}
              />
            <P>
              This project influenced my approach by emphasizing the need for
              enhanced documentation and early cross-team engagement. If
              starting the project today, I would prioritize involving
              engineering teams from the outset to ensure cohesive development.
            </P>
          </Row>
          
            <Blockquote>
              Freshbricks represents a significant advancement in unifying
              FreshBooks&apos; design and development efforts. By learning from
              past attempts and emphasizing cross-functional collaboration, we
              have established a design system that enhances efficiency,
              consistency, and fosters innovation. As Freshbricks continues to
              evolve, it remains a foundational element in delivering
              high-quality, user-centered products that align with our core
              values and business objectives.
            </Blockquote>
          
        </div>
      </div>
      {/* Side Nav */}
      <SideNav sections={sections} activeSection={activeSection} />
      {/* Other projects */}
      <NextProject href="/design/connect" title="Freshbooks Connect" />
    </div>
  );
}
