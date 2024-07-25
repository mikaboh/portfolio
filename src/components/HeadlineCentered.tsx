import { motion } from "framer-motion";

function HeadlineCentered({ category, title, titleColor }: HeadlineCenteredProps) {
    return (
        <div className="flex flex-col items-center gap-2 pb-16 bg-backgroundDark">
            <motion.span
                className="uppercase font-medium text-neutral-500 text-xs tracking-[6px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >{category}</motion.span>

            <motion.span
                className={`font-plus_jakarta_sans text-3xl font-bold ${titleColor}`}
            >
                {title}
            </motion.span>
        </div>
    );
}

interface HeadlineCenteredProps {
    category: string;
    title: string;
    titleColor?: string;
}

export default HeadlineCentered;