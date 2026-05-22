/**
 * PortfolioPage composes the premium homepage portfolio from reusable sections.
 * The page stays typography-led while using subtle motion, dividers, and light effects.
 */
import { CapabilityCard } from "./CapabilityCard";
import { ContactSection } from "./ContactSection";
import { ExperienceList } from "./ExperienceList";
import { ExperimentCard } from "./ExperimentCard";
import { HeroSection } from "./HeroSection";
import { PrincipleCard } from "./PrincipleCard";
import { SectionHeader } from "./SectionHeader";
import { TestimonialCard } from "./TestimonialCard";
import { WorkCard } from "./WorkCard";
import {
  capabilities,
  experiments,
  principles,
  testimonials,
  workItems,
} from "./portfolioData";

export function PortfolioPage() {
  return (
    <article className="min-h-screen bg-[#faf9f6] text-neutral-950">
      <HeroSection />
      <div className="relative">
        <SectionBlock id="work">
          <SectionHeader
            eyebrow="Selected work"
            title="Work that moved products, teams, and systems forward."
            description="A few examples where the work had to be useful in the product, understandable to teams, and practical to build."
          />
          <div className="mt-16">
            {workItems.map((item, index) => (
              <WorkCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock id="capabilities">
          <SectionHeader
            eyebrow="What I'm good at"
            title="I work where product direction, interface craft, and design engineering meet."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <CapabilityCard key={capability.title} capability={capability} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock id="principles">
          <SectionHeader
            eyebrow="Operating principles"
            title="The product should feel simpler than the system behind it."
          />
          <ol className="mt-14 grid list-none gap-8 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <PrincipleCard key={principle} principle={principle} index={index} />
            ))}
          </ol>
        </SectionBlock>

        <SectionBlock id="experience">
          <SectionHeader
            eyebrow="Experience"
            title="A decade of product work across EdTech, mobile, systems, SaaS, and service businesses."
          />
          <div className="mt-14">
            <ExperienceList />
          </div>
        </SectionBlock>

        <SectionBlock id="testimonials">
          <SectionHeader
            eyebrow="Testimonials"
            title="People I worked with noticed the bridge between design craft and engineering."
          />
          <div className="mt-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock id="experiments">
          <SectionHeader
            eyebrow="Build notes"
            title="Experiments, prototypes, and things I'm learning."
            description="Small threads from the builder side of my work: AI workflows, voice UX, systems, mobile patterns, and implementation details."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {experiments.map((experiment) => (
              <ExperimentCard key={experiment.title} experiment={experiment} />
            ))}
          </div>
        </SectionBlock>

        <ContactSection />
      </div>
    </article>
  );
}

function SectionBlock({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
      {children}
    </section>
  );
}
