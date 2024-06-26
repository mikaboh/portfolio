import TypeScriptIcon from "../../assets/TypeScriptIcon";
import HeadlineCentered from "../../HeadlineCentered";
import Skill from "./Skill";
import JavaScriptIcon from "../../assets/JavaScriptIcon";
import ReactIcon from "../../assets/ReactIcon";
import FlutterIcon from "../../assets/FlutterIcon";
import DartIcon from "../../assets/DartIcon";
import FigmaIcon from "../../assets/FigmaIcon";
import MongoDBIcon from "../../assets/MongoDBIcon";
import GitIcon from "../../assets/GitIcon";
import NodeJsIcon from "../../assets/NodeJsIcon";
import PythonIcon from "../../assets/PythonIcon";
import JavaIcon from "../../assets/JavaIcon";
import HtmlIcon from "../../assets/HtmlIcon";
import CssIcon from "../../assets/CssIcon";
import DockerIcon from "../../assets/DockerIcon";
import AngularIcon from "../../assets/AngularIcon";
import SvelteIcon from "../../assets/SvelteIcon";
import FirebaseIcon from "../../assets/FirebaseIcon";
import GoogleCloudIcon from "../../assets/GoogleCloudIcon";
import MySqlIcon from "../../assets/MySqlIcon";

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
        name: "Google Firebase",
        icon: <FirebaseIcon />,
    },
    {
        name: "Google Cloud Platform",
        icon: <GoogleCloudIcon />,
    },
    {
        name: "MySQL",
        icon: <MySqlIcon />,
    },
];

function Skills() {
    return (
        <section className="px-96 py-36">
            <HeadlineCentered category="skills" title="Specialized in" />

            <div className="flex flex-row gap-x-20 gap-y-24 justify-center flex-wrap">
                {skills.map((skill) => (
                    <Skill key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
            </div>
        </section>
    );
}

export default Skills;