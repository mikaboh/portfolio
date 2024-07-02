import { motion } from "framer-motion";

function Skill({ name, icon }: SkillProps) {
    return (
        <div className="flex flex-col w-10 items-center whitespace-nowrap gap-y-4 lg:w-14">
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