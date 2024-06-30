import { motion, motionValue } from "framer-motion";

function MockupScreenComponent({ mockupScreen }: MockupScreenComponentProps) {
    const { image, width, shadowX, shadowY, shadowBlur, angle, borderRadius } = mockupScreen;
    const imageVariants = {
        rest: {
            height: 'auto',
            rotate: angle,
            top: `${mockupScreen.posY}px`,
        },
        hover: {
            rotate: 0,
            height: '100%',
            top: '0',
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
            variants={imageVariants}
        />
    );
}

interface MockupScreenComponentProps {
    mockupScreen: MockupScreen;
}

export default MockupScreenComponent;