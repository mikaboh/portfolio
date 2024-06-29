function LinesOverHeroImage({ className }: LinesOverHeroImageProps) {
    return (
        <svg width="166" height="182" viewBox="0 0 166 182" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path opacity="0.7" d="M2.39599 38.9928L236.762 -129.388M0.925964 55.9311L250.084 -123.385M5.12701 68.6709L261.379 -115.873M12.4055 79.1496L274.403 -109.645M17.3304 91.3601L287.576 -103.528M23.715 102.495L301.76 -98.1555M30.0239 113.687L311.833 -89.7534M36.3452 124.865L324.91 -83.562M42.9739 135.822L334.918 -75.1071M48.4203 147.647L342.696 -64.9996M55.0615 158.588L351.895 -55.9476M62.3189 169.08L360.902 -46.7557M67.8952 180.796L355.905 -27.2176" stroke="white" stroke-width="1.80778" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0.27 0.27" />
        </svg>
    );
}

interface LinesOverHeroImageProps {
    className: string;
}

export default LinesOverHeroImage;