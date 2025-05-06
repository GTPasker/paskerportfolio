
import React from 'react';
import { cn } from '@/lib/utils';

interface ContentCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  headerClassName?: string;
  elevation?: 'none' | 'low' | 'medium' | 'high';
  interactive?: boolean;
  accent?: boolean;
  accentColor?: string;
  accentPosition?: 'top' | 'left' | 'right' | 'bottom';
  grouped?: boolean;
  highlighted?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

const ContentCard = ({
  title,
  children,
  className,
  contentClassName,
  headerClassName,
  elevation = 'medium',
  interactive = false,
  accent = false,
  accentColor = '#F6C90E',
  accentPosition = 'top',
  grouped = false,
  highlighted = false,
  onClick,
  ariaLabel,
}: ContentCardProps) => {
  const elevationClasses = {
    none: '',
    low: 'shadow-sm',
    medium: 'shadow',
    high: 'shadow-lg'
  };
  
  const getBorderClass = () => {
    if (!accent) return '';
    
    switch (accentPosition) {
      case 'top':
        return `border-t-2`;
      case 'left':
        return `border-l-2`;
      case 'right':
        return `border-r-2`;
      case 'bottom':
        return `border-b-2`;
      default:
        return `border-t-2`;
    }
  };
  
  const interactiveClass = interactive 
    ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800' 
    : '';

  const groupedClass = grouped
    ? 'mb-4 last:mb-0'
    : '';
    
  const highlightedClass = highlighted
    ? 'ring-2 ring-offset-2 dark:ring-offset-gray-800'
    : '';

  return (
    <div
      className={cn(
        'rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 overflow-hidden',
        'transition-all duration-300',
        'animate-fade-in',
        elevationClasses[elevation],
        getBorderClass(),
        interactiveClass,
        groupedClass,
        highlightedClass,
        className
      )}
      style={accent ? { 
        [`border-${accentPosition}-color`]: accentColor 
      } as React.CSSProperties : undefined}
      onClick={interactive && onClick ? onClick : undefined}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label={ariaLabel || title}
      onKeyDown={interactive && onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {title && (
        <div 
          className={cn(
            'p-4 border-b border-gray-100 dark:border-gray-700',
            'flex items-center',
            headerClassName
          )}
        >
          <h3 className="font-merriweather text-lg font-medium">{title}</h3>
        </div>
      )}
      <div className={cn('p-4', contentClassName)}>
        {children}
      </div>
    </div>
  );
};

export default ContentCard;
