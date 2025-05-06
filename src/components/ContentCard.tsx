
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
  onClick?: () => void;
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
  onClick,
}: ContentCardProps) => {
  const elevationClasses = {
    none: '',
    low: 'shadow-sm',
    medium: 'shadow',
    high: 'shadow-lg'
  };
  
  const getBorderClass = () => {
    switch (accentPosition) {
      case 'top':
        return `border-t-2 border-t-[${accentColor}]`;
      case 'left':
        return `border-l-2 border-l-[${accentColor}]`;
      case 'right':
        return `border-r-2 border-r-[${accentColor}]`;
      case 'bottom':
        return `border-b-2 border-b-[${accentColor}]`;
      default:
        return `border-t-2 border-t-[${accentColor}]`;
    }
  };
  
  const interactiveClass = interactive 
    ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F6C90E]/50' 
    : '';

  const groupedClass = grouped
    ? 'mb-4 last:mb-0'
    : '';

  return (
    <div
      className={cn(
        'rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 overflow-hidden',
        elevationClasses[elevation],
        accent ? getBorderClass() : '',
        interactiveClass,
        groupedClass,
        className
      )}
      onClick={interactive && onClick ? onClick : undefined}
      role={interactive && onClick ? 'button' : undefined}
      tabIndex={interactive && onClick ? 0 : undefined}
      onKeyDown={interactive && onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      {title && (
        <div className={cn('p-4 border-b border-gray-100 dark:border-gray-700', headerClassName)}>
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
