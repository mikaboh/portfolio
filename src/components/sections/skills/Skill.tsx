import { useState } from "react";

function Skill({ name, icon }: SkillProps) {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleAnimationStart = () => {
        setIsAnimating(true);
    };

    const handleAnimationEnd = () => {
        setIsAnimating(false);
    };

    const handleMouseEnter = () => {
        if (!isAnimating) {
            setIsAnimating(true);
        }
    };

    return (
        <>
            <style>
                {`
                @keyframes spin-and-scale {
                    0% {
                        transform: scale(1) rotate(0deg);
                    }
                    50% {
                        transform: scale(1.3);
                    }
                    100% {
                        transform: scale(1) rotate(360deg);
                    }
                }
                .spin-once {
                    animation: spin-and-scale 0.7s ease-in-out 1;
                }
                `}
            </style>
            <div
                className="flex flex-col items-center w-20 relative hover:cursor-pointer"
                onMouseEnter={handleMouseEnter}
            >
                <div className={`transition duration-300 ease-in-out ${isAnimating ? 'spin-once' : ''}`}
                    onAnimationStart={handleAnimationStart}
                    onAnimationEnd={handleAnimationEnd}>
                    {icon}
                </div>
                <span className="text-sm text-opacity-70 text-textOnDark absolute top-[70px] whitespace-nowrap">
                    {name}
                </span>
            </div>
        </>
    );
}

export interface SkillProps {
    name: string;
    icon: JSX.Element;
}

export default Skill;