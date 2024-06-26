import Hero from "./sections/hero/Hero";
import Skills from "./sections/skills/Skills";

export default function Portfolio() {
  return (
    <main
      className={`text-textOnDark font-inter bg-backgroundDark`}
    >
      <Hero />

      <Skills />
    </main>
  );
}
