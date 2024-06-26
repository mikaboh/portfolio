export default function TimelineCircle({
  className = "",
}: TimelineCircleProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7.57742" cy="7.59216" r="6.27983" fill="#7E74F1" stroke="#7E74F1" stroke-width="0.837311"/>
      </svg>
      
    </div>
  );
}

interface TimelineCircleProps {
  className?: string;
}
