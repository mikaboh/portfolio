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
import { useRef, useState } from "react";
import { motion, useDragControls } from "framer-motion";

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
    const skillDragConstraintsRef = useRef(null);
    const skillDragControls = useDragControls();
    const [activeDrag, setActiveDrag] = useState<string | null>(null);

    function startDrag(event: any, skillName: string) {
        skillDragControls.start(event);
        setActiveDrag(skillName);
    }

    function onDragEnd() {
        setActiveDrag(null);
    }

    return (
        <section className="px-96 py-36">
            <HeadlineCentered category="skills" title="Specialized in" />

            <motion.div
                className="py-10 flex rounded-3xl flex-row gap-x-20 gap-y-24 justify-center flex-wrap" ref={skillDragConstraintsRef}
                animate={{ backgroundColor: activeDrag ? "#333333" : "inherit" }}
            >
                {skills.map((skill) => (
                    <Skill
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                        activeDrag={activeDrag}
                        constraintsRef={skillDragConstraintsRef}
                        startDrag={() => startDrag(event, skill.name)}
                        endDrag={onDragEnd}
                        dragControls={skillDragControls}
                    />
                ))}
            </motion.div>
        </section>
    );
}

export default Skills;