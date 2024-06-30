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
        <div className="flex flex-col gap-3">
            <motion.div
                className="flex flex-row gap-4 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <div className={`h-[2px] w-3.5 ${bgColor}`}></div>

                <span className="uppercase font-medium text-neutral-500 text-xs tracking-[6px]">{category}</span>
            </motion.div>

            {title && (
                <motion.span
                    className="font-plus_jakarta_sans text-3xl font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    {title}
                </motion.span>
            )}
        </div>
    );
}

interface HeadlineLeftAlignedProps {
    category: string;
    title?: string;
    theme?: string;
}

export default HeadlineLeftAligned;