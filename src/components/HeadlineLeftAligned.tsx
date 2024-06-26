function HeadlineLeftAligned({ text }: HeadlineLeftAlignedProps) {
    return (
        <div className="flex flex-row gap-4 items-center">
            <div className="h-[1.7px] w-3.5 bg-textOnDark"></div>

            <span className="uppercase font-medium text-neutral-500 text-xs tracking-[6px]">{text}</span>
        </div>
    );
}

interface HeadlineLeftAlignedProps {
    text: string;
}

export default HeadlineLeftAligned;