
import { cn } from '@/lib/utils';
import { 
  Text, 
  TextCursor, 
  CircleArrowUp,
  CircleArrowDown,
  Contrast, 
  Accessibility,
  Eye,
  EyeOff,
  TextCursorInput,
  Font
} from 'lucide-react';

interface SkillCardProps {
  title: string;
  description: string;
  iconName: string;
}

const SkillCard = ({
  title,
  description,
  iconName
}: SkillCardProps) => {
  // Get the appropriate icon based on iconName
  const getIcon = (name: string) => {
    const iconProps = { className: "h-8 w-8 text-[#F6C90E] flex-shrink-0", "aria-hidden": true };
    
    switch (name.toLowerCase()) {
      case 'accessibility':
        return <Accessibility {...iconProps} />;
      case 'text':
        return <Text {...iconProps} />;
      case 'flourishing':
        return <CircleArrowUp {...iconProps} />;
      case 'solution':
        return <TextCursor {...iconProps} />;
      case 'connection':
        return <Eye {...iconProps} />;
      case 'system':
        return <TextCursorInput {...iconProps} />;
      case 'trust':
        return <Contrast {...iconProps} />;
      case 'code':
        return <TextCursor {...iconProps} />;
      case 'verify':
        return <EyeOff {...iconProps} />;
      case 'tools':
        return <CircleArrowDown {...iconProps} />;
      case 'ethics':
        return <Accessibility {...iconProps} />;
      case 'growth':
        return <Font {...iconProps} />;
      default:
        return <Font {...iconProps} />;
    }
  };

  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#F6C90E]"
      role="article"
    >
      <div className="flex items-start gap-4">
        {getIcon(iconName)}
        <div>
          <h4 className="font-merriweather text-lg font-semibold mb-2">{title}</h4>
          <p className="text-[#3A4750]/80">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
