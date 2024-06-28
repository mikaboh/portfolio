function MockupScreenComponent({ mockupScreen, zindex }: MockupScreenComponentProps) {
    const { image, width, shadowX, shadowY, shadowBlur, angle, borderRadius } = mockupScreen;

    const style: React.CSSProperties = {
        width: `${width}px`,
        height: 'auto',
        transform: `rotate(${angle}deg)`,
        borderRadius: `${borderRadius}px`,
        boxShadow: `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(9, 20, 50, 0.15)`,
        zIndex: zindex,
        top: `${mockupScreen.posY}px`,
    };

    return (
        <img src={image} style={style} className="relative" />
    );
}

interface MockupScreenComponentProps {
    mockupScreen: MockupScreen;
    zindex: number;
}

export default MockupScreenComponent;