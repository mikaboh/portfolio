export default function HTMLIcon({ className = "" }: HTMLIconProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 72.61 72.61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2_418)">
      <path d="M16.4552 59.2758L11.903 8.22205H61.9198L57.3641 59.2687L36.8795 64.9447L16.4552 59.2758Z" fill="#E44D26"/>
      <path d="M53.4625 56.0177L57.357 12.3966H36.9114V60.6071L53.4625 56.0177Z" fill="#F16529"/>
      <path d="M36.8901 18.6575H21.2093L22.8987 37.5928H36.9114V31.3318H28.6261L28.0535 24.9202H36.9114V18.6575H36.8901ZM36.9114 47.5728L36.8848 47.5799L29.9112 45.6973L29.4681 40.7038H23.1787L24.0562 50.5348L36.883 54.0801L36.9114 54.0713V47.5728Z" fill="#EBEBEB"/>
      <path d="M36.8901 37.5928H44.6011L43.8921 45.7115L36.9079 47.5958V54.1103L49.7453 50.5526L51.4648 31.3283H36.9114L36.8901 37.5928ZM52.4256 20.3379L52.5745 18.6575H36.8866V24.9184H52.0108L52.1348 23.511L52.4256 20.3379Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_2_418">
      <rect width="56.7227" height="56.7227" fill="white" transform="translate(8.92442 8.50439)"/>
      </clipPath>
      </defs>
      </svg>
      
    </div>
  );
}

interface HTMLIconProps {
  className?: string;
}
