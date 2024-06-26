function Skill({ name, icon }: SkillProps) {
    return (
        <div className="flex flex-col items-center w-20 relative">
            <span>{icon}</span>

            <span className="text-sm text-opacity-70 text-textOnDark absolute top-[70px] whitespace-nowrap">{name}</span>
        </div>
    );
}

export interface SkillProps {
    name: string;
    icon: JSX.Element;
}

export default Skill;