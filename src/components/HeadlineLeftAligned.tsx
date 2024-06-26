function HeadlineLeftAligned({ category, title }: HeadlineLeftAlignedProps) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-4 items-center">
                <div className="h-[1.7px] w-3.5 bg-textOnDark"></div>

                <span className="uppercase font-medium text-neutral-500 text-xs tracking-[6px]">{category}</span>
            </div>

            {title && (
                <span className="font-plus_jakarta_sans text-3xl font-bold">{title}</span>
            )}
        </div>
    );
}

interface HeadlineLeftAlignedProps {
    category: string;
    title?: string;
}

export default HeadlineLeftAligned;