
import { useState } from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Accessibility } from 'lucide-react';

interface AccessibilitySettingsProps {
  settings: {
    fontSize: number;
    highContrast: boolean;
    enhancedFocus: boolean;
    lineSpacing: number;
    readingGuide: boolean;
    dyslexicFont: boolean;
  };
  onChange: (key: string, value: number | boolean) => void;
}

const AccessibilityPanel = () => {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState({
    fontSize: 100, // percentage
    highContrast: false,
    enhancedFocus: false,
    lineSpacing: 100, // percentage
    readingGuide: false,
    dyslexicFont: false
  });

  const handleChange = (key: string, value: number | boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));

    // Apply settings to the document
    if (key === 'fontSize') {
      document.documentElement.style.fontSize = `${value}%`;
    } else if (key === 'highContrast') {
      document.documentElement.classList.toggle('high-contrast', value);
    } else if (key === 'enhancedFocus') {
      document.documentElement.classList.toggle('enhanced-focus', value);
    } else if (key === 'lineSpacing') {
      document.documentElement.style.setProperty('--line-spacing', `${value}%`);
    } else if (key === 'dyslexicFont') {
      document.documentElement.classList.toggle('dyslexic-font', value);
    } else if (key === 'readingGuide') {
      // Toggle reading guide visibility
      if (value) {
        createReadingGuide();
      } else {
        removeReadingGuide();
      }
    }
  };

  // Create reading guide element
  const createReadingGuide = () => {
    const existingGuide = document.getElementById('reading-guide');
    if (!existingGuide) {
      const guide = document.createElement('div');
      guide.id = 'reading-guide';
      guide.className = 'fixed w-full h-10 bg-[#F6C90E]/20 pointer-events-none z-[9999] hidden';
      guide.setAttribute('aria-hidden', 'true');
      document.body.appendChild(guide);
      
      // Add mouse move event listener
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      existingGuide.classList.remove('hidden');
      document.addEventListener('mousemove', handleMouseMove);
    }
  };

  // Remove reading guide element
  const removeReadingGuide = () => {
    const guide = document.getElementById('reading-guide');
    if (guide) {
      guide.classList.add('hidden');
      document.removeEventListener('mousemove', handleMouseMove);
    }
  };

  // Handle mouse movement for reading guide
  const handleMouseMove = (e: MouseEvent) => {
    const guide = document.getElementById('reading-guide');
    if (guide) {
      guide.style.top = `${e.clientY - 20}px`;
    }
  };

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="bg-[#F6C90E] text-[#3A4750] hover:bg-[#F6C90E]/90 h-12 w-12 rounded-l-md rounded-r-none shadow-md"
            aria-label="Open accessibility options"
          >
            <Accessibility className="h-6 w-6" aria-hidden="true" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80 sm:w-96" role="dialog" aria-label="Accessibility options">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Accessibility className="h-5 w-5" aria-hidden="true" />
              <span>Accessibility Options</span>
            </SheetTitle>
          </SheetHeader>

          <div className="py-6 space-y-6">
            {/* Font Size */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="font-size" className="text-base">Font Size</Label>
                <span className="text-sm">{settings.fontSize}%</span>
              </div>
              <Slider
                id="font-size"
                min={80}
                max={200}
                step={10}
                value={[settings.fontSize]}
                onValueChange={([value]) => handleChange('fontSize', value)}
                aria-label="Adjust font size"
              />
              <div className="flex justify-between text-xs">
                <span>Smaller</span>
                <span>Larger</span>
              </div>
            </div>

            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <Label htmlFor="high-contrast" className="text-base">High Contrast</Label>
              <Switch
                id="high-contrast"
                checked={settings.highContrast}
                onCheckedChange={(checked) => handleChange('highContrast', checked)}
                aria-label="Toggle high contrast mode"
              />
            </div>

            {/* Enhanced Focus */}
            <div className="flex items-center justify-between">
              <Label htmlFor="enhanced-focus" className="text-base">Enhanced Focus</Label>
              <Switch
                id="enhanced-focus"
                checked={settings.enhancedFocus}
                onCheckedChange={(checked) => handleChange('enhancedFocus', checked)}
                aria-label="Toggle enhanced focus indicators"
              />
            </div>

            {/* Line Spacing */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="line-spacing" className="text-base">Line Spacing</Label>
                <span className="text-sm">{settings.lineSpacing}%</span>
              </div>
              <Slider
                id="line-spacing"
                min={100}
                max={200}
                step={10}
                value={[settings.lineSpacing]}
                onValueChange={([value]) => handleChange('lineSpacing', value)}
                aria-label="Adjust line spacing"
              />
              <div className="flex justify-between text-xs">
                <span>Normal</span>
                <span>Wide</span>
              </div>
            </div>

            {/* Reading Guide */}
            <div className="flex items-center justify-between">
              <Label htmlFor="reading-guide" className="text-base">Reading Guide</Label>
              <Switch
                id="reading-guide"
                checked={settings.readingGuide}
                onCheckedChange={(checked) => handleChange('readingGuide', checked)}
                aria-label="Toggle reading guide"
              />
            </div>

            {/* Dyslexic Font */}
            <div className="flex items-center justify-between">
              <Label htmlFor="dyslexic-font" className="text-base">Dyslexia-Friendly Font</Label>
              <Switch
                id="dyslexic-font"
                checked={settings.dyslexicFont}
                onCheckedChange={(checked) => handleChange('dyslexicFont', checked)}
                aria-label="Toggle dyslexic-friendly font"
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AccessibilityPanel;
