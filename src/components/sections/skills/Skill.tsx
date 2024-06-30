import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

function Skill({ name, icon }: SkillProps) {
    return (
        <div className="flex flex-col items-center w-20 flex-shrink-0 flex-grow-0 whitespace-nowrap gap-y-4">
            <motion.div
                id={name}
                whileHover={{ scale: 1.3 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                {icon}
            </motion.div>

            <span className="text-sm text-opacity-70 text-textOnDark">
                {name}
            </span>
        </div>
    );
}

export interface SkillProps {
    name: string;
    icon: JSX.Element;
}

export default Skill;