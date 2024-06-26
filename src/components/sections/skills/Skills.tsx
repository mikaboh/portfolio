import HeadlineCentered from "../../HeadlineCentered";
import Skill from "./Skill";

const skills = [
    {
        name: "TypeScript",
        icon: "TS",
    }
];

function Skills() {
    return (
        <section>
            <HeadlineCentered category="skills" title="Specialized in" />

            <div className="flex flex-row gap-10">
                {skills.map((skill) => (
                    <Skill key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
            </div>
        </section>
    );
}

export default Skills;