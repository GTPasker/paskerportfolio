
import { useEffect, useRef } from 'react';

interface StarFieldProps {
  starCount?: number;
  className?: string;
}

const StarField = ({ starCount = 100, className = "" }: StarFieldProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Clear any existing stars
    container.innerHTML = '';
    
    // Create new stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random position
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;
      
      // Random size
      const size = Math.random() * 2 + 1;
      
      // Random opacity
      const opacity = Math.random() * 0.8 + 0.2;
      
      // Random animation delay
      const delay = Math.random() * 4;
      
      // Apply styles
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.opacity = `${opacity}`;
      star.style.animationDelay = `${delay}s`;
      
      container.appendChild(star);
    }
  }, [starCount]);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 z-0 overflow-hidden ${className}`}
    />
  );
};

export default StarField;
