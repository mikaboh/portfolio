function Skill({ name, icon }: SkillProps) {
    return (
        <div className="flex flex-col items-center">
            <span>{icon}</span>

            <span>{name}</span>
        </div>
    );
}

export interface SkillProps {
    name: string;
    icon: string;
}

export default Skill;