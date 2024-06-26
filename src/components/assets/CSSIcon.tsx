export default function CSSIcon({ className = "" }: CSSIconProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 72.61 72.61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2_431)">
      <path d="M61.7016 8.22205L57.1451 59.2665L36.6634 64.9447L16.2381 59.2745L11.6864 8.22205H61.7016Z" fill="#264DE4"/>
      <path d="M36.694 60.6045L53.2442 56.0161L57.138 12.3962H36.694V60.6045Z" fill="#2965F1"/>
      <path d="M36.694 31.3309H22.121L22.6822 37.5922H36.694V31.3309Z" fill="#EBEBEB"/>
      <path d="M36.694 18.6578H36.6723H20.9934L21.5626 24.9193H36.694V18.6578Z" fill="#EBEBEB"/>
      <path d="M22.9619 40.723L23.8392 50.5543L36.6651 54.1149L36.694 54.1069V47.5924L36.6665 47.5997L29.6932 45.7168L29.2474 40.723H25.8589H22.9619Z" fill="#EBEBEB"/>
      <path d="M44.3825 37.5923L43.6557 45.7129L36.6723 47.5977V54.1119L49.5085 50.5544L49.6027 49.4965L51.074 33.0124L51.2268 31.331L52.3572 18.6578H36.6723V24.9193H45.4953L44.9255 31.331H36.6723V37.5923H44.3825Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_2_431">
      <rect width="56.7227" height="56.7227" fill="white" transform="translate(8.35297 8.50439)"/>
      </clipPath>
      </defs>
      </svg>
      
    </div>
  );
}

interface CSSIconProps {
  className?: string;
}
