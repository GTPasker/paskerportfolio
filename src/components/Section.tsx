
import { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  titlePosition?: 'left' | 'center' | 'right';
  subtitle?: string;
  accentColor?: string;
  compact?: boolean;
  decorative?: boolean;
}

const Section = ({ 
  id, 
  title, 
  children, 
  className, 
  titleClassName,
  titlePosition = 'center',
  subtitle,
  accentColor = '#F6C90E',
  compact = false,
  decorative = true
}: SectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "transition-all duration-700 ease-out opacity-0 translate-y-8 relative content-section",
        compact ? "py-12 md:py-16" : "py-20 md:py-24",
        className
      )}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className={cn(
          compact ? "mb-8" : "mb-12",
          titlePosition === 'center' ? "text-center" : 
          titlePosition === 'right' ? "text-right" : "text-left"
        )}>
          <h2 className={cn(
            "font-merriweather text-3xl md:text-4xl relative pb-4 inline-block",
            titleClassName
          )}>
            {title}
            {decorative && (
              <span 
                className="absolute bottom-0 left-0 w-24 h-1 glow-accent-1" 
                style={{ backgroundColor: accentColor }}
              ></span>
            )}
          </h2>
          
          {subtitle && (
            <p className="text-lg mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
