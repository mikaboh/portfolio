import HeadlineLeftAligned from "../../HeadlineLeftAligned";
import MockupScreenComponent from "./MockupScreenComponent";
import TechnologyBulletPoint from "./TechnologyBulletPoint";
import TechnologyTag from "./TechnologyTag";

function ProjectCard({ project }: ProjectCardProps) {
    const mockupScreensWidth = project.mockupScreens!.reduce((acc, mockupScreen) => acc + mockupScreen.width, 0);

    return (
        <div className="py-14 bg-backgroundLight flex flex-col items-center justify-between gap-20 xl:flex-row">
            {/* Info */}
            <div
                className="flex flex-col gap-12 xl:w-3/5 2xl:w-2/5"
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
                    className={`justify-center xl:w-[${mockupScreensWidth}px]`}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${project.mockupScreens!.length}, 1fr)`,
                        gridTemplateRows: '1fr',
                    }}
                >
                    {project.mockupScreens!.map((mockupScreen, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    zIndex: project.mockupScreens!.length - index,
                                }}
                            >
                                <MockupScreenComponent
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