export default function GoogleFirebaseIcon({
  className = "",
}: GoogleFirebaseIconProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 72.61 72.61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2_595)">
      <path d="M43.195 28.2733L37.5193 33.5539L32.253 22.9308L34.9783 16.821C35.6871 15.5806 36.7928 15.5948 37.4839 16.821L43.195 28.2733Z" fill="#FFA000"/>
      <path d="M32.2529 22.9305L37.5193 33.5536L16.3086 53.2847L32.2529 22.9305Z" fill="#F57F17"/>
      <path d="M49.4023 20.2017C50.4158 19.2271 51.4648 19.5603 51.7324 20.9407L57.2539 53.0225L38.9528 64.0089C38.3149 64.3632 36.6138 64.5156 36.6138 64.5156C36.6138 64.5156 35.0651 64.3314 34.475 63.984L16.3086 53.2848L49.4023 20.2017Z" fill="#FFCA28"/>
      <path d="M32.2529 22.9308L16.3104 53.285L23.4107 8.92327C23.673 7.54112 24.4597 7.40822 25.1614 8.62735L32.2529 22.9308Z" fill="#FFA000"/>
      </g>
      <defs>
      <clipPath id="clip0_2_595">
      <rect width="56.7227" height="56.7227" fill="white" transform="translate(8.01263 7.93286)"/>
      </clipPath>
      </defs>
      </svg>
      
    </div>
  );
}

interface GoogleFirebaseIconProps {
  className?: string;
}
