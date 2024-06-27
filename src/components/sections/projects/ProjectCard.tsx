import HeadlineLeftAligned from "../../HeadlineLeftAligned";
import MockupScreenComponent from "./MockupScreenComponent";
import TechnologyBulletPoint from "./TechnologyBulletPoint";
import TechnologyTag from "./TechnologyTag";

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="px-96 py-14 bg-backgroundLight flex flex-row items-center justify-between">
            {/* Info */}
            <div className="flex flex-col gap-12">
                <HeadlineLeftAligned category="project" title={project.title} theme="light" />

                {/* Details */}
                <div className="flex flex-col gap-5">
                    <span className="text-base font-medium">Technologies</span>

                    <div className="flex flex-row gap-4 items-center">
                        {project.technologies.map((technology, index) => {
                            return (
                                <TechnologyTag key={index} text={technology} />
                            );
                        })}
                    </div>

                    <div className="bg-borderColorOnLight h-[1px] w-full" />

                    {/* Bullet Points */}
                    <div className="flex flex-col gap-4">
                        {project.description.map((bulletPoint, index) => {
                            return (
                                <TechnologyBulletPoint text={bulletPoint} />
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Mockup Screens */}
            {project.mockupScreens && project.mockupScreens.map((mockupScreen, index) => {
                return (
                    <MockupScreenComponent key={index} mockupScreen={mockupScreen} />
                )
            })}
        </div>
    );
}

interface ProjectCardProps {
    project: Project;
}

export default ProjectCard;