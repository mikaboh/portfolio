import LinesOverHeroImage from "../../assets/LinesOverHeroImage";
import { motion } from "framer-motion";

function HeroImage() {
    return (
        <motion.div
            className="relative overflow-visible aspect-3/4 max-h-[400px]"
        >
            {/* 1. Layer - Image */}
            <div className="z-40 relative overflow-hidden h-full rounded-3xl">
                <img className="z-40 relative" src="/cv-photo.png" alt="CV Photo" />
            </div>

            {/* 2. Layer - Lines */}
            <LinesOverHeroImage className="absolute top-0 right-0 z-30 overflow-hidden rounded-tr-3xl" />

            {/* 3. Layer - Image Background */}
            <div className="z-20 h-full w-full absolute top-0 bg-[#EAE6FE] rounded-3xl overflow-hidden" />

            {/* 4. Layer - Tilted Background */}
            <div className="bg-accent -rotate-12 z-0 absolute inset-0 rounded-3xl"></div>
        </motion.div>
    );
}

export default HeroImage;