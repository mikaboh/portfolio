'use client'

import Education from "./sections/education/Education";
import Footer from "./sections/footer/Footer";
import Hero from "./sections/hero/Hero";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";

export default function Portfolio() {
  const className = "py-16 px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-48 max-w-[1600px] m-auto md:py-24 2xl:py-32";

  return (
    <main
      className={`text-textOnDark font-inter bg-backgroundDark`}
    >
      <Hero className={`${className}`} />

      <Skills className={`${className}`} />

      <Education className={`${className}`} />

      <Projects />

      <Footer className={`${className}`} />
    </main>
  );
}
