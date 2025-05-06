
import React from 'react';
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  showArrow?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const EnhancedButton = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  showArrow = false,
  fullWidth = false,
  className,
  children,
  ...props
}: EnhancedButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-[#F6C90E] text-[#3A4750] hover:bg-[#F6C90E]/90 active:translate-y-[1px] focus:ring-[#F6C90E]/50",
    secondary: "bg-[#3A4750] text-white hover:bg-[#3A4750]/90 active:translate-y-[1px] focus:ring-[#3A4750]/50",
    outline: "border-2 border-[#3A4750] text-[#3A4750] bg-transparent hover:bg-[#3A4750]/5 active:translate-y-[1px] focus:ring-[#3A4750]/50 dark:border-white dark:text-white",
    text: "bg-transparent text-[#3A4750] hover:bg-[#3A4750]/5 active:translate-y-[1px] focus:ring-[#3A4750]/50 dark:text-white"
  };
  
  const sizeClasses = {
    sm: "text-sm py-1 px-3",
    md: "text-base py-2 px-4",
    lg: "text-lg py-3 px-6"
  };
  
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        widthClass,
        "group",
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      
      <span>{children}</span>
      
      {showArrow && (
        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
      
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
};

export default EnhancedButton;
