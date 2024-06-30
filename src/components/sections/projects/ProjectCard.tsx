import HeadlineLeftAligned from "../../HeadlineLeftAligned";
import MockupScreenComponent from "./MockupScreenComponent";
import TechnologyBulletPoint from "./TechnologyBulletPoint";
import TechnologyTag from "./TechnologyTag";

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="px-96 py-14 bg-backgroundLight flex flex-row items-center justify-between gap-40">
            {/* Info */}
            <div
                className="flex flex-col gap-12 w-2/5"
            >
                <HeadlineLeftAligned category="project" title={project.title} theme="light" />

                {/* Details */}
                <div className="flex flex-col gap-5">
                    <span className="text-base font-medium">Technologies</span>

                    <div className="flex flex-row gap-x-4 gap-y-2 items-center flex-wrap">
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
                                <TechnologyBulletPoint key={index} text={bulletPoint} />
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Mockup Screens */}
            {project.mockupScreens && (
                <div
                    className="justify-center w-3/5"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${project.mockupScreens!.length}, 1fr`,
                        gridTemplateRows: '1fr',
                    }}
                >
                    {project.mockupScreens!.map((mockupScreen, index) => {
                        return (
                            <div
                                style={{
                                    zIndex: project.mockupScreens!.length - index
                                }}
                            >
                                <MockupScreenComponent
                                    key={index}
                                    mockupScreen={mockupScreen}
                                />
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    );
}

interface ProjectCardProps {
    project: Project;
}

export default ProjectCard;