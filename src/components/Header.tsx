import Link from "next/link";

export const Header = () => {
  return (
    <header
      tabIndex={-1}
      className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-neutral-200/70 bg-[#faf9f6]/82 px-5 py-5 text-neutral-950 backdrop-blur-xl transition-colors duration-200 sm:px-8 lg:px-10"
    >
      <Link href="/" className="text-sm font-semibold tracking-normal">
        Bora Alap
      </Link>
      <nav aria-label="Primary navigation" className="flex items-center gap-5 text-sm font-medium text-neutral-500">
        <Link href="/#work" className="transition-colors hover:text-neutral-950">
          Work
        </Link>
        <Link href="/#testimonials" className="hidden transition-colors hover:text-neutral-950 sm:inline">
          Words
        </Link>
        <Link href="/#experiments" className="hidden transition-colors hover:text-neutral-950 sm:inline">
          Notes
        </Link>
        <Link href="/#contact" className="transition-colors hover:text-neutral-950">
          Contact
        </Link>
      </nav>
    </header>
  );
};
