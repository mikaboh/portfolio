import { motion, motionValue, useAnimationControls } from "framer-motion";

function MockupScreenComponent({ mockupScreen }: MockupScreenComponentProps) {
    const { image, width, shadowX, shadowY, shadowBlur, angle, borderRadius } = mockupScreen;
    const imageVariants = {
        rest: {
            rotate: angle,
            top: `${mockupScreen.posY}px`,
        },
        hover: {
            top: `${mockupScreen.posY - 20}px`,
            scale: 1.1,
        },
    };

    const style = {
        borderRadius: `${borderRadius}px`,
        boxShadow: `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(9, 20, 50, 0.15)`,
    };

    return (
        <motion.img
            src={image}
            style={style}
            className="relative"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={imageVariants}
        />
    );
}

interface MockupScreenComponentProps {
    mockupScreen: MockupScreen;
}

export default MockupScreenComponent;