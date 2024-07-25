import { motion } from "framer-motion";

function HeroImage() {
    const imageBackgroundVariants = {
        hover: {
            y: -5,
            rotate: 5,
        },
    };

    const tiltedBackgroundVariants = {
        rest: {
            rotate: -12,
        },
        hover: {
            x: -5,
            rotate: -15,
        },
    };

    return (
        <motion.div
            className="relative overflow-visible aspect-3/4 max-h-[300px] lg:max-h-[350px]"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            {/* 1. Layer - Image */}
            <motion.div
                className="z-30 relative overflow-hidden h-full rounded-3xl"
                variants={imageBackgroundVariants}
            >
                <img className="z-30 relative" src="/cv-photo.png" alt="CV Photo" />
            </motion.div>

            {/* 2. Layer - Image Background */}
            <motion.div
                className="z-20 h-full w-full absolute top-0 bg-[#EAE6FE] rounded-3xl overflow-hidden"
                variants={imageBackgroundVariants}
            />

            {/* 3. Layer - Tilted Background */}
            <motion.div
                className="bg-accent z-0 absolute inset-0 rounded-3xl"
                variants={tiltedBackgroundVariants}
            />
        </motion.div>
    );
}

export default HeroImage;