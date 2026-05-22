/**
 * SectionHeader gives each portfolio section a consistent editorial label and title.
 * It keeps hierarchy clear without forcing every section into a boxed card layout.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}
