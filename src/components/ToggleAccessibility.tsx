
import React from 'react';
import { Toggle } from "@/components/ui/toggle";
import { Contrast } from 'lucide-react';

interface ToggleAccessibilityProps {
  isActive: boolean;
  onToggle: (active: boolean) => void;
}

const ToggleAccessibility = ({ isActive, onToggle }: ToggleAccessibilityProps) => {
  return (
    <Toggle 
      pressed={isActive}
      onPressedChange={onToggle}
      aria-label="Toggle high contrast mode"
      className="data-[state=on]:bg-[#F6C90E] data-[state=on]:text-black"
    >
      <Contrast className="h-4 w-4 mr-1" />
      High Contrast
    </Toggle>
  );
};

export default ToggleAccessibility;
