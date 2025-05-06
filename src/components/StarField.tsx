
import { useEffect, useRef } from 'react';

interface StarFieldProps {
  starCount?: number;
  className?: string;
  withRoots?: boolean;
}

const StarField = ({ starCount = 100, className = "", withRoots = false }: StarFieldProps) => {
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
    
    // Add root-like structures at the bottom if requested
    if (withRoots) {
      const rootCount = Math.floor(containerWidth / 100); // Adjust based on width
      
      for (let i = 0; i < rootCount; i++) {
        const root = document.createElement('div');
        const x = (containerWidth / (rootCount + 1)) * (i + 1);
        const height = 50 + Math.random() * 150; // Random height for roots
        
        root.style.position = 'absolute';
        root.style.width = '1px';
        root.style.height = `${height}px`;
        root.style.bottom = '0';
        root.style.left = `${x}px`;
        root.style.background = `linear-gradient(to top, #F6C90E, transparent)`;
        root.style.opacity = '0.3';
        root.style.transform = `rotate(${-10 + Math.random() * 20}deg)`;
        root.style.transformOrigin = 'bottom center';
        root.style.filter = 'blur(0.5px)';
        
        // Add some branches to each root
        const branchCount = Math.floor(2 + Math.random() * 3);
        for (let j = 0; j < branchCount; j++) {
          const branch = document.createElement('div');
          const branchHeight = 15 + Math.random() * 30;
          const branchPosition = 20 + Math.random() * 60; // % from bottom
          
          branch.style.position = 'absolute';
          branch.style.width = '1px';
          branch.style.height = `${branchHeight}px`;
          branch.style.bottom = `${branchPosition}%`;
          branch.style.left = '0';
          branch.style.background = `linear-gradient(to top, transparent, #F6C90E80)`;
          branch.style.opacity = '0.4';
          branch.style.transform = `rotate(${(j % 2 === 0 ? -1 : 1) * (30 + Math.random() * 30)}deg)`;
          branch.style.transformOrigin = 'bottom left';
          branch.style.filter = 'blur(0.5px)';
          
          root.appendChild(branch);
        }
        
        container.appendChild(root);
      }
      
      // Add a few glowing points
      for (let i = 0; i < 15; i++) {
        const glowPoint = document.createElement('div');
        const x = Math.random() * containerWidth;
        const y = containerHeight - (Math.random() * containerHeight * 0.4); // Bottom 40%
        const size = 2 + Math.random() * 4;
        
        glowPoint.style.position = 'absolute';
        glowPoint.style.width = `${size}px`;
        glowPoint.style.height = `${size}px`;
        glowPoint.style.borderRadius = '50%';
        glowPoint.style.backgroundColor = i % 2 === 0 ? '#F6C90E' : '#FF4E50';
        glowPoint.style.left = `${x}px`;
        glowPoint.style.top = `${y}px`;
        glowPoint.style.boxShadow = `0 0 ${5 + Math.random() * 5}px ${i % 2 === 0 ? '#F6C90E' : '#FF4E50'}`;
        glowPoint.style.opacity = '0.5';
        glowPoint.style.animation = `pulse ${3 + Math.random() * 2}s infinite ease-in-out ${Math.random() * 3}s`;
        
        container.appendChild(glowPoint);
      }
    }
  }, [starCount, withRoots]);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 z-0 overflow-hidden ${className}`}
    />
  );
};

export default StarField;
