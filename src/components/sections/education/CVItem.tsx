import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CVItem as CVItemInterface } from "../../../interfaces/CVItem";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function CVItem({ item, isSubitem = false, isFirst = false, isLast = false }: CVItemProps) {
    return (
        <div className={`flex flex-row gap-4 ${isSubitem ? "scale-[.8] origin-left" : ""}`}>
            <div className="flex flex-col">
                {isFirst ? (
                    <div className="h-[2px] bg-backgroundDark z-10" />
                ) : (
                    <div className="h-[2px] z-10" />
                )}

                {!isSubitem ? (
                    <div className="w-[21px] h-[21px] rounded-full bg-accent" />
                ) : (
                    <FontAwesomeIcon icon={faChevronRight} className="text-accent w-[21px] h-[21px]" />
                )}

                {/* Background */}
                {isLast && (
                    <div className="bg-backgroundDark z-10 flex-grow" />
                )}

            </div>

            {/* Info */}
            <motion.div
                className="flex flex-col gap-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 10 }}
            >
                {/* Header */}
                <div className="flex flex-col gap-2">
                    <span className="text-base font-plus_jakarta_sans">{item.title}</span>

                    <span className="text-xs text-opacity-70 text-textOnDark">{item.subtitle}</span>

                    {/* Notes */}
                    {item.notes && (
                        item.notes.map((note, index) => (
                            <span key={index} className="text-xs text-opacity-70 text-textOnDark">{note}</span>
                        ))
                    )}
                </div>

                {/* Date */}
                <span className="text-xs">{item.date}</span>

                {/* Subitems */}
                {item.subitems && (
                    <div className="flex flex-col gap-4 items-start">
                        {item.subitems.map((subitem, index) => (
                            <CVItem key={index} item={subitem} isSubitem={true} />
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    );
}

interface CVItemProps {
    item: CVItemInterface;
    isSubitem?: boolean;
    isFirst?: boolean;
    isLast?: boolean;
}

export default CVItem;