function TechnologyTag({ text }: TechnologyTagProps) {
    return (
        <span className="text-xs whitespace-nowrap text-textOnLightLighter border-2 px-2 py-1 rounded-md border-borderColorOnLight h-7">{text}</span>
    );
}

interface TechnologyTagProps {
    text: string;
}

export default TechnologyTag;