import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

function Skill({ name, icon, activeDrag, startDrag, endDrag, dragControls, constraintsRef }: SkillProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (activeDrag !== name && activeDrag !== null) {
            setIsVisible(false)
        } else {
            setIsVisible(true)
        }
    }, [activeDrag])

    const show = {
        opacity: 1,
    }

    const hide = {
        opacity: 0,
    }

    function onDragTransitionEnd() {
        setTimeout(() => {
            endDrag();
            animate(`#${name}`, { x: 0, y: 0 })
        }, 500);
    }

    return (
        <motion.div
            className="flex flex-col items-center w-20 relative hover:cursor-pointer"
            animate={isVisible ? show : hide}
        >
            <motion.div
                id={name}
                drag
                whileHover={{ scale: 1.3 }}
                dragConstraints={constraintsRef}
                dragElastic={0.1}
                dragControls={dragControls}
                onPointerDown={startDrag}
                onDragTransitionEnd={onDragTransitionEnd}
            >
                {icon}
            </motion.div>

            <motion.div
                className="text-sm text-opacity-70 text-textOnDark absolute top-[70px] whitespace-nowrap"
                animate={activeDrag === name ? hide : show}
            >
                <span>
                    {name}
                </span>
            </motion.div>
        </motion.div>
    );
}

export interface SkillProps {
    name: string;
    icon: JSX.Element;
    activeDrag: string | null;
    startDrag: any;
    endDrag: any;
    dragControls: any;
    constraintsRef: any;
}

export default Skill;