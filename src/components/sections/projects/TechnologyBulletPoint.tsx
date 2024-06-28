function TechnologyBulletPoint({ text }: TechnologyBulletPointProps) {
    return (
        <div className="flex flex-row gap-4">
            <div className="h-4 flex items-center">
                <div className={`h-[2px] w-2.5 bg-textOnLightLighter`}></div>
            </div>

            <span className="text-xs text-textOnLightLighter">{text}</span>
        </div>
    );
}

interface TechnologyBulletPointProps {
    text: string;
}

export default TechnologyBulletPoint;