
import { useState, useEffect } from 'react';

const PreLoader = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 5;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 bg-[#3A4750] flex flex-col items-center justify-center z-50">
      <div className="relative w-64 h-64 mb-8">
        {/* Garden growth animation */}
        <div className="absolute inset-0">
          {/* Soil */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#5D4037] rounded-b-lg"></div>
          
          {/* Stem */}
          <div 
            className="absolute bottom-16 left-1/2 w-2 bg-[#4CAF50] transform -translate-x-1/2 transition-all duration-1000"
            style={{ height: `${progress * 0.3}%` }}
          ></div>
          
          {/* Leaves */}
          {progress > 30 && (
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
              <div className="relative w-20 h-10">
                <div className="absolute left-0 w-10 h-6 bg-[#4CAF50] rounded-tl-full rounded-bl-full transform -translate-y-1/2 rotate-[-20deg] origin-right animate-pulse-slow"></div>
                <div className="absolute right-0 w-10 h-6 bg-[#4CAF50] rounded-tr-full rounded-br-full transform -translate-y-1/2 rotate-[20deg] origin-left animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          )}
          
          {/* Flower */}
          {progress > 60 && (
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000"
              style={{ bottom: `${36 + progress * 0.3}%` }}
            >
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#F6C90E]"></div>
                </div>
                
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-6 h-6 bg-[#FF4E50] rounded-full animate-pulse-slow"
                    style={{ 
                      top: `${50 + 32 * Math.sin(i * Math.PI / 4)}%`, 
                      left: `${50 + 32 * Math.cos(i * Math.PI / 4)}%`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <h2 className="font-merriweather text-2xl text-white mb-6">Preparing the Garden</h2>
      
      <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#F6C90E] transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default PreLoader;
