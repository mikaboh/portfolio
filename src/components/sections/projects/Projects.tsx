import HeadlineCentered from "../../HeadlineCentered";
import ProjectCard from "./ProjectCard";

const projects: Project[] = [
    {
        title: "Vaccination Card",
        technologies: [
            "Flutter",
            "Hyperledger Fabric Blockchain",
            "Dart",
            "Figma",
            "Node.js",
            "Express",
        ],
        description: [
            "Secure storage of vaccine details and vaccination records.",
            "Real-time updates of each patient's vaccination status on a decentralized ledger.",
            "Mobile application developed in Flutter and Dart for easy access to vaccination history and schedules.",
            "Node.js and Express server layer for efficient communication between the mobile app and the blockchain.",
        ]
    },
    {
        title: "Glucos",
        technologies: [
            "Flutter",
            "Dart",
            "Figma",
        ],
        description: [
            "Smartphone-Anwendung entwickelt mit Flutter und Dart.",
            "Insulindosierungsrechner, der es Diabetikern ermöglicht, ihre aktuellen Blutzuckerwerte und die Menge an Kohlenhydraten einzugeben.",
            "Die App berechnet die notwendige Insulindosis basierend auf den Eingaben des Nutzers zur Unterstützung der Diabetesverwaltung.",
            "Ein Tagebuch-Feature zur Speicherung und Überprüfung vorheriger Berechnungen und Insulindosen.",
            "Optionen zum Wechseln zwischen verschiedenen Einheiten für die Messung von Kohlenhydraten und Blutzucker.",
            "Verfügt über einen Dunkelmodus.",
        ]
    },
    {
        title: "LexiLens",
        technologies: [
            "React",
            "Plasmo",
            "Microsoft Azure Translate",
            "TypeScript",
            "Figma",
            "Google Firebase",
            "Google Cloud NLP",
        ],
        description: [
            "Browser-Erweiterung, die sich an Englischsprachige richtet, die Deutsch lernen.",
            "Entwickelt mit dem Plasmo-Framework und React in TypeScript.",
            "Google Firebase als Backend zur Datenspeicherung und -verarbeitung.",
            "Hebt jedes Wort auf einer Webseite in einer von drei Farben hervor: Rot für unbekanntes Vokabular, Gelb für bereits bekanntes Vokabular und Grün für Vokabular, das der Benutzer bereits kennt.",
            "Hilft Nutzern, neue deutsche Wörter und deren Verwendung im Kontext zu lernen.",
            "Integriert Google Cloud NLP für die syntaktische Analyse, Microsoft Azure Translate für Übersetzungen und eine Wörterbuch-API für Definitionen.",
        ]
    },
];

function Projects() {
    return (
        <section className="text-textOnLight">
            <HeadlineCentered category="my work" title="Featured Projects" titleColor="text-accent" />

            <div className="bg-backgroundLight">
                {projects.map((project, index) => {
                    return (
                        <ProjectCard key={index} project={project} />
                    );
                })}
            </div>
        </section>
    );
}

export default Projects;