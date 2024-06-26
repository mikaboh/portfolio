export default function TimelineLine({ className = "" }: TimelineLineProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 1 513.17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0.995956" y1="0.242975" x2="0.628736" y2="513.41" stroke="#7E74F1" stroke-width="0.837311"/>
      </svg>
      
    </div>
  );
}

interface TimelineLineProps {
  className?: string;
}
