import HeadlineLeftAligned from "../../HeadlineLeftAligned";
import CVItem from "./CVItem"
import { CVItem as CVItemInterface } from "../../../interfaces/CVItem";

const educationData: CVItemInterface[] = [
    {
        title: "Mercedes-Benz AG, Engine Plant Bad Cannstatt",
        subtitle: "Production DaimlerMove",
        date: "since 03/2024",
    },
    {
        title: "Hochschule Esslingen, Esslingen",
        subtitle: "Bachelor's degree - Software Engineering",
        notes: [
            "Thesis: “Instance Segmentation of Roads and Lanes in Drone-Based Aerial Images Using YOLOv8 and Segment Anything”",
            "Ø 2.1",
        ],
        date: "since 03/2024",
        subitems: [
            {
                title: "Hochschule Esslingen, Esslingen",
                subtitle: "Practical Semester Software Engineering",
                date: "03/2022 - 08/2022",
            },
        ]
    },
    {
        title: "Hochschule Reutlingen, Reutlingen",
        subtitle: "Bachelor's degree - Mechanical Engineering",
        date: "10/2018 - 07/2019",
    },
    {
        title: "Mercedes-Benz AG, Stuttgart-Untertürkheim/Wilhelm-Maybach-Schule, Stuttgart",
        subtitle: "Industrial Mechanic with Technical College Qualification/University of Applied Sciences Entrance Qualification",
        notes: [
            "Ø 2.3 with commendation",
        ],
        date: "2013 - 2015",
    },
    {
        title: "Zollberg-Realschule, Esslingen",
        subtitle: "General Certificate of Secondary Education",
        date: "09/2009 - 07/2015",
    }
]


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