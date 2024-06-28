import { motion } from "framer-motion"

function Skill({ name, icon, constraintsRef }: SkillProps) {
    return (
        <div className="flex flex-col items-center w-20 relative hover:cursor-pointer">
            <motion.div
                drag
                whileHover={{ scale: 1.3 }}
                dragConstraints={constraintsRef}
                dragElastic={0.1}
            >
                {icon}
            </motion.div>

            <span className="text-sm text-opacity-70 text-textOnDark absolute top-[70px] whitespace-nowrap">
                {name}
            </span>
        </div>
    );
}

export interface SkillProps {
    name: string;
    icon: JSX.Element;
    constraintsRef: any;
}

export default Skill;