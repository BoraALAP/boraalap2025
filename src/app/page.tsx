import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Experiments from "@/components/Experiments";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Experiments />
        <Experience />
        <Stack />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
