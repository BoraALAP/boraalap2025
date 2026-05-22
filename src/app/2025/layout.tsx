/**
 * TwentyTwentyFiveLayout wraps the archived portfolio with the old rounded shell.
 * The root layout still provides providers, analytics, and the path-aware header/footer.
 */
import { FloatingHeader } from "@/components/FloatingHeader";

export default function TwentyTwentyFiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="rounded-b-2xl bg-light-bg shadow-2xl md:rounded-b-4xl md:shadow-2xl dark:bg-dark-bg">
        {children}
      </div>
      <FloatingHeader />
    </>
  );
}
