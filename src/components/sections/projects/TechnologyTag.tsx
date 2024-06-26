function TechnologyTag({ text }: TechnologyTagProps) {
    return (
        <div className="text-textOnLightLighter border-2 px-2 py-1 text-xs rounded">
            <span>{text}</span>
        </div>
    );
}

interface TechnologyTagProps {
    text: string;
}

export default TechnologyTag;