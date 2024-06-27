import HeadlineCentered from "../../HeadlineCentered";
import ProjectCard from "./ProjectCard";
import projects from "../../../data/projects.json";

function Projects() {
    return (
        <section className="text-textOnLight">
            <HeadlineCentered category="my work" title="Featured Projects" titleColor="text-accent" />

            <div className="bg-backgroundLight">
                {projects.map((project, index) => {
                    return (
                        <ProjectCard key={index} project={project} />
                    );
                })}
            </div>
        </section>
    );
}

export default Projects;