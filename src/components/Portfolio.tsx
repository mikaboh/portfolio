import Education from "./sections/education/Education";
import Footer from "./sections/footer/Footer";
import Hero from "./sections/hero/Hero";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";

export default function Portfolio() {
  return (
    <main
      className={`text-textOnDark font-inter bg-backgroundDark`}
    >
      <Hero />

      <Skills />

      <Education />

      <Projects />

      <Footer />
    </main>
  );
}
