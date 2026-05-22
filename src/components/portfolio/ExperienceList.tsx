/**
 * ExperienceList keeps career history scan-friendly by pairing role with contribution.
 * It is useful for senior positioning because it shows what Bora did, not just where.
 */
import { experienceItems } from "./portfolioData";

export function ExperienceList() {
  return (
    <div className="space-y-7">
      {experienceItems.map((item) => (
        <article key={item.company} className="grid gap-2 border-t border-neutral-200 pt-5 sm:grid-cols-[0.35fr_0.35fr_1fr]">
          <h3 className="text-sm font-semibold text-neutral-950">{item.company}</h3>
          <p className="text-sm text-neutral-700">{item.role}</p>
          <p className="text-sm leading-6 text-neutral-500">{item.contribution}</p>
        </article>
      ))}
    </div>
  );
}
