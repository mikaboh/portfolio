import HeadlineCentered from "../../HeadlineCentered";
import ProjectCard from "./ProjectCard";
import projects from "../../../data/projects.json";

function Projects({ className }: ProjectsProps) {
    return (
        <section className={`text-textOnLight bg-backgroundLight ${className}`}>
            <HeadlineCentered category="my work" title="Featured Projects" titleColor="text-accent" />

            <div className="flex flex-col gap-8 bg-backgroundLight px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-48 max-w-[1600px] m-auto">
                {projects.map((project, index) => {
                    return (
                        <ProjectCard key={index} project={project} />
                    );
                })}
            </div>
        </section>
    );
}

interface ProjectsProps {
    className?: string;
}

export default Projects;