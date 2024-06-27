function MockupScreenComponent({ mockupScreen }: MockupScreenComponentProps) {
    return (
        <img src={mockupScreen.image} className={`w-[${mockupScreen.width}px] rotate-[${mockupScreen.angle}deg]`} />
    );
}

interface MockupScreenComponentProps {
    mockupScreen: MockupScreen;
}

export default MockupScreenComponent;