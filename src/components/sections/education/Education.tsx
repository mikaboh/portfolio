import HeadlineLeftAligned from "../../HeadlineLeftAligned";
import CVItem from "./CVItem"
import educationData from "../../../data/education.json";


function Education() {
    return (
        <section className="px-96 py-36 flex flex-col gap-10">
            <HeadlineLeftAligned category="learning path" title="Education & Work Experience" />

            <div className="flex flex-col gap-10 relative">
                <div className="w-[1px] left-[10px] bg-accent h-full absolute" />

                {educationData.map((item, index) => {
                    const isFirst = index === 0;
                    const isLast = index === educationData.length - 1;

                    return (
                        <CVItem key={index} item={item} isFirst={isFirst} isLast={isLast} />
                    );
                })}
            </div>
        </section>
    );
}

export default Education;