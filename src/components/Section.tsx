
import { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, title, children, className }: SectionProps) => {
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
        "py-20 transition-all duration-500 ease-out opacity-0 translate-y-8 relative",
        className
      )}
    >
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-merriweather text-3xl md:text-4xl text-center mb-12 relative pb-4 inline-block mx-auto">
          {title}
          <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-[#F6C90E] transform -translate-x-1/2 glow-accent-1"></span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
