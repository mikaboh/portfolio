import HeadlineLeftAligned from "../../HeadlineLeftAligned";
import TechnologyTag from "./TechnologyTag";

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="px-96 py-14 bg-backgroundLight flex flex-row">
            {/* Info */}
            <div className="flex flex-col gap-12">
                <HeadlineLeftAligned category="project" title={project.title} theme="light" />

                {/* Details */}
                <div className="flex flex-col gap-5">
                    <span className="text-base font-medium">Technologies</span>

                    <div className="flex flex-row gap-4">
                        {project.technologies.map((technology, index) => {
                            return (
                                <TechnologyTag key={index} text={technology} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

interface ProjectCardProps {
    project: Project;
}

export default ProjectCard;