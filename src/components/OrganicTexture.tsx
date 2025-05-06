
import { cn } from "@/lib/utils";

interface OrganicTextureProps {
  variant?: "roots" | "branches" | "glow" | "soil";
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
  position?: "tl" | "tr" | "bl" | "br" | "center";
}

const OrganicTexture = ({
  variant = "roots",
  className = "",
  intensity = "subtle",
  position = "center",
}: OrganicTextureProps) => {
  const getOpacity = () => {
    switch (intensity) {
      case "subtle": return "opacity-[0.035]";
      case "medium": return "opacity-[0.07]";
      case "strong": return "opacity-[0.12]";
      default: return "opacity-[0.035]";
    }
  };

  const getPosition = () => {
    switch (position) {
      case "tl": return "top-0 left-0";
      case "tr": return "top-0 right-0";
      case "bl": return "bottom-0 left-0";
      case "br": return "bottom-0 right-0";
      case "center": return "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
      default: return "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
    }
  };

  const renderTexture = () => {
    switch (variant) {
      case "roots":
        return (
          <div className={cn(
            "absolute w-full h-full max-w-[800px] max-h-[800px] pointer-events-none", 
            getOpacity(), 
            getPosition(),
            className
          )}>
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-px opacity-60 origin-top"
                style={{
                  height: `${40 + Math.random() * 30}%`,
                  background: `linear-gradient(to bottom, transparent, ${i % 3 === 0 ? '#F6C90E' : i % 3 === 1 ? '#FF4E50' : '#3A4750'})`,
                  top: '0',
                  left: '50%',
                  transform: `rotate(${i * 45 + Math.random() * 10}deg)`,
                  filter: 'blur(0.5px)',
                }}
              >
                {[...Array(3)].map((_, j) => (
                  <div 
                    key={j} 
                    className="absolute w-px"
                    style={{ 
                      height: `${15 + Math.random() * 20}%`,
                      background: `linear-gradient(to bottom, transparent, ${i % 3 === 0 ? '#F6C90E80' : i % 3 === 1 ? '#FF4E5080' : '#3A475080'})`,
                      top: `${30 + Math.random() * 40}%`, 
                      left: '0',
                      transform: `rotate(${(j % 2 === 0 ? -1 : 1) * (20 + Math.random() * 30)}deg)`,
                      transformOrigin: 'top',
                      filter: 'blur(0.5px)',
                    }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        );
      case "branches":
        return (
          <div className={cn(
            "absolute w-full h-full max-w-[800px] max-h-[800px] pointer-events-none", 
            getOpacity(), 
            getPosition(),
            className
          )}>
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="absolute"
                style={{
                  width: `${1 + Math.random() * 1.5}px`,
                  height: `${20 + Math.random() * 30}%`,
                  background: `linear-gradient(to top, transparent, ${i % 3 === 0 ? '#F6C90E' : i % 3 === 1 ? '#FF4E50' : '#3A4750'})`,
                  bottom: '0',
                  left: `${(i * 8) + 2 + Math.random() * 5}%`,
                  transform: `rotate(${-10 + Math.random() * 20}deg)`,
                  transformOrigin: 'bottom',
                  filter: 'blur(0.5px)',
                }}
              >
                {[...Array(2)].map((_, j) => (
                  <div 
                    key={j} 
                    className="absolute"
                    style={{ 
                      width: '1px',
                      height: `${10 + Math.random() * 15}%`,
                      background: `linear-gradient(to top, transparent, ${i % 3 === 0 ? '#F6C90E80' : i % 3 === 1 ? '#FF4E5080' : '#3A475080'})`,
                      top: `${20 + Math.random() * 50}%`, 
                      left: `${j % 2 === 0 ? -2 : 2}px`,
                      transform: `rotate(${(j % 2 === 0 ? -1 : 1) * (30 + Math.random() * 20)}deg)`,
                      transformOrigin: 'bottom',
                      filter: 'blur(0.5px)',
                    }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        );
      case "glow":
        return (
          <div className={cn(
            "absolute w-full h-full max-w-[800px] max-h-[800px] pointer-events-none",
            getPosition(),
            className
          )}>
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="absolute rounded-full animate-pulse-slow"
                style={{ 
                  width: `${3 + Math.random() * 8}px`,
                  height: `${3 + Math.random() * 8}px`,
                  backgroundColor: i % 3 === 0 ? '#F6C90E' : i % 3 === 1 ? '#FF4E50' : '#3A4750',
                  top: `${10 + Math.random() * 80}%`, 
                  left: `${10 + Math.random() * 80}%`,
                  boxShadow: `0 0 ${8 + Math.random() * 12}px ${i % 3 === 0 ? '#F6C90E40' : i % 3 === 1 ? '#FF4E5040' : '#3A475040'}`,
                  opacity: 0.4 * (intensity === "subtle" ? 0.5 : intensity === "medium" ? 1 : 1.5),
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                }}
              ></div>
            ))}
          </div>
        );
      case "soil":
        return (
          <div className={cn(
            "absolute w-full h-full pointer-events-none overflow-hidden",
            getOpacity(),
            className
          )}>
            <div className="absolute inset-0 bg-pattern-soil opacity-[0.03]"></div>
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="absolute bg-[#3A4750] rounded-full"
                style={{ 
                  width: `${1 + Math.random() * 3}px`,
                  height: `${1 + Math.random() * 3}px`,
                  top: `${Math.random() * 100}%`, 
                  left: `${Math.random() * 100}%`,
                  opacity: 0.05,
                }}
              ></div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return renderTexture();
};

export default OrganicTexture;
