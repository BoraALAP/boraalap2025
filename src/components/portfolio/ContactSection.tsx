/**
 * ContactSection closes the portfolio with direct, low-friction contact paths.
 * It keeps the tone personal and specific to product, systems, AI, and mobile work.
 */
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-28 text-neutral-950 sm:px-8 lg:py-36">
      <div className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
          Contact
        </p>
        <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight text-neutral-950 sm:text-6xl">
          Have a complex product problem that needs clearer shape?
        </h2>
        <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-600">
          I&apos;m always interested in thoughtful conversations around product design, design systems, AI workflows, mobile UX, and teams trying to ship better software.
        </p>
        <div className="mt-9 flex flex-wrap gap-5">
          <ContactLink href="https://www.linkedin.com/in/boraalap/">Connect on LinkedIn</ContactLink>
          <ContactLink href="https://github.com/BoraALAP">View GitHub</ContactLink>
          <ContactLink href="mailto:hello@boraalap.com">Email me</ContactLink>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      className="text-sm font-semibold text-neutral-800 underline decoration-neutral-300 underline-offset-4 transition hover:text-[#c54f1d] focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950/20"
    >
      {children}
    </Link>
  );
}
