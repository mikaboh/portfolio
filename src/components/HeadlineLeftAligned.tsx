import { motion } from "framer-motion";

function HeadlineLeftAligned({ category, title, theme }: HeadlineLeftAlignedProps) {
    let bgColor: string;

    switch (theme) {
        case "light":
            bgColor = "bg-textOnLightLighter";
            break;
        case "dark":
            bgColor = "bg-textOnDark";
            break;
        default:
            bgColor = "bg-textOnDark";
    }

    return (
        <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <div className="flex flex-row gap-4 items-center">
                <div className={`h-[2px] w-3.5 ${bgColor}`}></div>

                <span className="uppercase font-medium text-neutral-500 text-xs tracking-[6px]">{category}</span>
            </div>

            {title && (
                <span className="font-plus_jakarta_sans text-3xl font-bold">{title}</span>
            )}
        </motion.div>
    );
}

interface HeadlineLeftAlignedProps {
    category: string;
    title?: string;
    theme?: string;
}

export default HeadlineLeftAligned;