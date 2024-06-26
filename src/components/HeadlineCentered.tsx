function HeadlineCentered({ category, title }: HeadlineCenteredProps) {
    return (
        <div className="flex flex-col">
            <span className="uppercase">{category}</span>

            <span>{title}</span>
        </div>
    );
}

interface HeadlineCenteredProps {
    category: string;
    title: string;
}

export default HeadlineCentered;