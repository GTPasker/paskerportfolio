
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
}: ContentCardProps) => {
  const elevationClasses = {
    none: '',
    low: 'shadow-sm',
    medium: 'shadow',
    high: 'shadow-lg'
  };
  
  const accentPositionClasses = {
    top: `border-t-2 border-t-[${accentColor}]`,
    left: `border-l-2 border-l-[${accentColor}]`,
    right: `border-r-2 border-r-[${accentColor}]`,
    bottom: `border-b-2 border-b-[${accentColor}]`
  };
  
  const interactiveClass = interactive 
    ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer' 
    : '';

  return (
    <div
      className={cn(
        'rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 overflow-hidden',
        elevationClasses[elevation],
        accent ? accentPositionClasses[accentPosition] : '',
        interactiveClass,
        className
      )}
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
