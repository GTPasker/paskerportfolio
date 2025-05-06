
import { cn } from '@/lib/utils';

interface SkillCardProps {
  title: string;
  description: string;
  iconName: string;
}

const SkillCard = ({ title, description, iconName }: SkillCardProps) => {
  // This is a simplified placeholder for icons
  // In a real implementation, you would import actual icons
  const getIconPlaceholder = (name: string) => {
    return (
      <div className="w-12 h-12 rounded-full bg-[#3A4750] text-white flex items-center justify-center">
        <span className="text-xl">{name.charAt(0).toUpperCase()}</span>
      </div>
    );
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#F6C90E]">
      <div className="flex items-start gap-4">
        {getIconPlaceholder(iconName)}
        <div>
          <h4 className="font-merriweather text-lg font-semibold mb-2">{title}</h4>
          <p className="text-[#3A4750]/80">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
