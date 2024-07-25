import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer({ className }: FooterProps) {
    return (
        <div className={`flex flex-col gap-8 items-center text-xs text-opacity-70 text-textOnDark ${className}`}>
            {/* Header */}
            <div className="flex flex-col gap-5 items-center">
                {/* Socials */}
                <div className="flex flex-row gap-8 text-xl">
                    <a href="https://github.com/mikaboh" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>

                    <a href="https://www.linkedin.com/in/mika-boehm/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </div>

                {/* Contact */}
                <div className="flex flex-row gap-8 items-center">
                    {/* Phone */}
                    <div className="flex flex-row gap-2 items-center">
                        <FontAwesomeIcon icon={faPhone} />

                        <span>+49 151 68109959</span>
                    </div>

                    {/* E-Mail */}
                    <div className="flex flex-row gap-2 items-center">
                        <FontAwesomeIcon icon={faAt} />

                        <span>mika.boehm.dev@gmail.com</span>
                    </div>
                </div>
            </div>

            <span>Designed by Mika Böhm</span>
        </div>
    );
}

interface FooterProps {
    className?: string;
}

export default Footer;