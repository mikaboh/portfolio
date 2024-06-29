import { motion } from "framer-motion";

function TechnologyBulletPoint({ text }: TechnologyBulletPointProps) {
    return (
        <motion.div
            className="flex flex-row gap-4"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ x: 10 }}
        >
            <div className="h-4 flex items-center">
                <div className={`h-[2px] w-2.5 bg-textOnLightLighter`}></div>
            </div>

            <span className="text-xs text-textOnLightLighter">{text}</span>
        </motion.div>
    );
}

interface TechnologyBulletPointProps {
    text: string;
}

export default TechnologyBulletPoint;