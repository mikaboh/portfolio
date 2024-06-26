function HeadlineCentered({ category, title, titleColor }: HeadlineCenteredProps) {
    return (
        <div className="flex flex-col items-center gap-2 pb-16">
            <span className="uppercase font-medium text-neutral-500 text-xs tracking-[6px]">{category}</span>

            <span className={`font-plus_jakarta_sans text-3xl font-bold ${titleColor}`}>{title}</span>
        </div>
    );
}

interface HeadlineCenteredProps {
    category: string;
    title: string;
    titleColor?: string;
}

export default HeadlineCentered;