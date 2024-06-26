export default function ProjectSeparatorLine({
  className = "",
}: ProjectSeparatorLineProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 389.65 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0.529419" y1="1.03716" x2="390.176" y2="1.03716" stroke="#D9D9D9" stroke-width="0.837311"/>
      </svg>
      
    </div>
  );
}

interface ProjectSeparatorLineProps {
  className?: string;
}
