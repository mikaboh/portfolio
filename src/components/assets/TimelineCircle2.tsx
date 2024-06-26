export default function TimelineCircle2({
  className = "",
}: TimelineCircle2Props) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7.57748" cy="7.13452" r="6.69849" fill="#7E74F1"/>
      </svg>
      
    </div>
  );
}

interface TimelineCircle2Props {
  className?: string;
}
