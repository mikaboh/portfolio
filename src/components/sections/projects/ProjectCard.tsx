import { motion, useAnimationControls } from "framer-motion";
import HeadlineLeftAligned from "../../HeadlineLeftAligned";
import MockupScreenComponent from "./MockupScreenComponent";
import TechnologyBulletPoint from "./TechnologyBulletPoint";
import TechnologyTag from "./TechnologyTag";

function ProjectCard({ project }: ProjectCardProps) {
    const mockupAnimationControls = useAnimationControls();
    const infoAnimationControls = useAnimationControls();
    const mockupScreenVariants = {
        rest: {
            width: '60%',
        },
        hover: {
            width: '100%',
        },
    };

    const infoVariants = {
        rest: {
            opacity: 1,
            display: 'flex'
        },
        hover: {
            opacity: 0,
            display: 'none'
        },
    };

    function onMockupHover() {
        mockupAnimationControls.start('hover');
        infoAnimationControls.start('hover');
    }

    function onMockupLeave() {
        mockupAnimationControls.start('rest');
        infoAnimationControls.start('rest');
    }

    return (
        <div className="px-96 py-14 bg-backgroundLight flex flex-row items-center justify-between">
            {/* Info */}
            <motion.div
                className="flex flex-col gap-12 w-2/5"
                initial="rest"
                animate={infoAnimationControls}
                variants={infoVariants}
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
            </motion.div>

            {/* Mockup Screens */}
            {project.mockupScreens && (
                <motion.div
                    className={`justify-center`}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${project.mockupScreens!.length}, 1fr`,
                        gridTemplateRows: '1fr',
                    }}
                    initial="rest"
                    onHoverStart={onMockupHover}
                    onHoverEnd={onMockupLeave}
                    animate={mockupAnimationControls}
                    variants={mockupScreenVariants}
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
                </motion.div>
            )}
        </div>
    );
}

interface ProjectCardProps {
    project: Project;
}

export default ProjectCard;