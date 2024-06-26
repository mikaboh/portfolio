import HeadlineLeftAligned from "../../HeadlineLeftAligned";
import HeroImage from "./HeroImage";

function Hero() {
    return (
        <section className="px-96 py-36 flex flex-row items-center justify-between">
            {/* HeroInfo */}
            <div className="flex flex-col gap-5 max-w-2xl">
                {/* HeroHeader */}
                <div className="flex flex-col gap-3">
                    <HeadlineLeftAligned category="my name is" />

                    {/* Name/DateOfBirth */}
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row font-plus_jakarta_sans text-4xl font-bold gap-2">
                            <span>Mika</span>

                            <span className="text-accent">Böhm</span>
                        </div>

                        <span className="text-opacity-70 text-textOnDark text-sm">07/18/1998</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-opacity-70 text-textOnDark leading-7 text-sm">
                    I am a software engineer based in Esslingen and have recently graduated from Hochschule Esslingen with a Bachelor’s in Software Engineering. In my free time, I dive into personal projects ranging from browser extensions to a diabetes management app, always aiming to bridge the gap between complex data and user-friendly interfaces. I thrive on challenges and am eager to bring my adaptability and problem-solving skills to a team that values innovative solutions and a forward-thinking approach to technology.
                </p>

                {/* Socials */}

            </div>

            {/* HeroImage */}
            <HeroImage />
        </section>
    );
}

export default Hero;