export default function AngularIcon({ className = "" }: AngularIconProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 72.61 72.61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2_517)">
      <path d="M9.62946 18.1839L36.0268 8.78918L63.119 18.0385L58.7407 52.9478L36.0268 65.5119L13.6816 53.1109L9.62946 18.1839Z" fill="#E23237"/>
      <path d="M63.1189 18.0385L36.0267 8.78918V65.5119L58.7406 52.9478L63.1189 18.0385Z" fill="#B52E31"/>
      <path d="M36.0675 15.4187L19.6179 52.0048L25.7564 51.8808L29.0711 43.6134H43.7836L47.3854 51.9446L53.2385 52.0686L36.0675 15.4187ZM36.1083 27.1638L41.6742 38.7867H31.2549L36.1242 27.1638H36.1083Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_2_517">
      <rect width="56.7227" height="56.7227" fill="white" transform="translate(8.21014 8.50439)"/>
      </clipPath>
      </defs>
      </svg>
      
    </div>
  );
}

interface AngularIconProps {
  className?: string;
}
