import AngularIcon from "../../assets/AngularIcon";
import CssIcon from "../../assets/CssIcon";
import DartIcon from "../../assets/DartIcon";
import DockerIcon from "../../assets/DockerIcon";
import FigmaIcon from "../../assets/FigmaIcon";
import FirebaseIcon from "../../assets/FirebaseIcon";
import FlutterIcon from "../../assets/FlutterIcon";
import GitIcon from "../../assets/GitIcon";
import GoogleCloudIcon from "../../assets/GoogleCloudIcon";
import HtmlIcon from "../../assets/HtmlIcon";
import JavaIcon from "../../assets/JavaIcon";
import JavaScriptIcon from "../../assets/JavaScriptIcon";
import MongoDBIcon from "../../assets/MongoDBIcon";
import MySqlIcon from "../../assets/MySqlIcon";
import NodeJsIcon from "../../assets/NodeJsIcon";
import PythonIcon from "../../assets/PythonIcon";
import ReactIcon from "../../assets/ReactIcon";
import SvelteIcon from "../../assets/SvelteIcon";
import TypeScriptIcon from "../../assets/TypeScriptIcon";
import HeadlineCentered from "../../HeadlineCentered";
import Skill from "./Skill";

const skills = [
    {
        name: "TypeScript",
        icon: <TypeScriptIcon />,
    },
    {
        name: "JavaScript",
        icon: <JavaScriptIcon />,
    },
    {
        name: "React",
        icon: <ReactIcon />,
    },
    {
        name: "Flutter",
        icon: <FlutterIcon />,
    },
    {
        name: "Dart",
        icon: <DartIcon />,
    },
    {
        name: "Figma",
        icon: <FigmaIcon />,
    },
    {
        name: "Git",
        icon: <GitIcon />,
    },
    {
        name: "MongoDB",
        icon: <MongoDBIcon />,
    },
    {
        name: "Node.js",
        icon: <NodeJsIcon />,
    },
    {
        name: "Python",
        icon: <PythonIcon />,
    },
    {
        name: "Java",
        icon: <JavaIcon />,
    },
    {
        name: "HTML",
        icon: <HtmlIcon />,
    },
    {
        name: "CSS",
        icon: <CssIcon />,
    },
    {
        name: "Docker",
        icon: <DockerIcon />,
    },
    {
        name: "Angular",
        icon: <AngularIcon />,
    },
    {
        name: "Svelte",
        icon: <SvelteIcon />,
    },
    {
        name: "Firebase",
        icon: <FirebaseIcon />,
    },
    {
        name: "GCP",
        icon: <GoogleCloudIcon />,
    },
    {
        name: "MySQL",
        icon: <MySqlIcon />,
    },
];

function Skills({ className }: SkillsProps) {
    return (
        <section className={`${className}`}>
            <HeadlineCentered category="skills" title="Specialized in" />

            <div className="py-10 flex rounded-3xl gap-x-20 gap-y-24 justify-center flex-wrap">
                {skills.map((skill) => (
                    <Skill
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                    />
                ))}
            </div>
        </section>
    );
}

interface SkillsProps {
    className?: string;
}

export default Skills;