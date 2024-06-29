import { motion } from "framer-motion";

function HeadlineCentered({ category, title, titleColor }: HeadlineCenteredProps) {
    return (
        <motion.div
            className="flex flex-col items-center gap-2 pb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <span className="uppercase font-medium text-neutral-500 text-xs tracking-[6px]">{category}</span>

            <span className={`font-plus_jakarta_sans text-3xl font-bold ${titleColor}`}>{title}</span>
        </motion.div>
    );
}

interface HeadlineCenteredProps {
    category: string;
    title: string;
    titleColor?: string;
}

export default HeadlineCentered;