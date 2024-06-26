import Education from "./sections/education/Education";
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
    </main>
  );
}
