/* TODO: fix image streched */

function HeroImage() {
    return (
        <div className="relative z-0 flex items-center justify-center px-7 py-5" >
            <div className="absolute inset-0 z-0 h-96 w-80 flex-shrink-0 rounded-xl" >
                <div className="absolute top-12 h-[333px] w-[286px] origin-top-left rounded-xl bg-indigo-500 [transform:rotate(-9.55deg)]" />
            </div>
            <div className="z-[1] h-80 w-72 flex-shrink-0 rounded-xl">
                <svg width="100%" height="100%" style={{ "overflow": "visible" }} preserveAspectRatio="none" viewBox="0 0 281.34 334.92" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g clip-path="url(#clip0_42_18)">
                        <rect x="0.79425" y="0.157227" width="281.336" height="334.924" rx="13.397" fill="#EAE6FE" />
                        <path opacity="0.7" d="M118.867 38.9592L353.232 -129.422M117.397 55.8974L366.555 -123.418M121.598 68.6372L377.85 -115.907M128.876 79.116L390.873 -109.679M133.801 91.3264L404.046 -103.562M140.186 102.461L418.231 -98.1892M146.494 113.654L428.304 -89.787M152.816 124.832L441.38 -83.5956M159.445 135.788L451.388 -75.1408M164.891 147.614L459.167 -65.0332M171.532 158.554L468.366 -55.9812M178.789 169.046L477.372 -46.7893M184.366 180.762L472.375 -27.2512" stroke="white" stroke-width="1.80778" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0.27 0.27" />
                        <rect x="-0.352905" y="-1.31091" width="283.16" height="411.429" fill="url(#pattern-I4:791;4:783-0_42_18)" />
                    </g>
                    <defs>
                        <pattern id="pattern-I4:791;4:783-0_42_18" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_42_18" transform="matrix(0.00042337 0 0 0.000291378 0 -0.0161765)" />
                        </pattern>
                        <clipPath id="clip0_42_18">
                            <rect x="0.79425" y="0.157227" width="281.336" height="334.924" rx="13.397" fill="white" />
                        </clipPath>
                        <image id="image0_42_18" width="2362" height="3543" xlinkHref="/assets/front.png" />
                    </defs>
                </svg>

            </div>
        </div>
    );
}

export default HeroImage;