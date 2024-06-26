export default function TimelineCircle1({
  className = "",
}: TimelineCircle1Props) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7.57748" cy="6.86353" r="6.27983" fill="#7E74F1" stroke="#7E74F1" stroke-width="0.837311"/>
      </svg>
      
    </div>
  );
}

interface TimelineCircle1Props {
  className?: string;
}
