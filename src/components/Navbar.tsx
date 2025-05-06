
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Journey', href: '#journey' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Skills', href: '#skills' },
    { name: 'Showcase', href: '/showcase' },
    { name: 'Vision', href: '#vision' },
    { name: 'Connect', href: '#connect' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial call to set proper state when component mounts
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-[#3A4750] text-white shadow-md py-2 dark:bg-[#1a2026]" 
          : "bg-[#3A4750] text-white py-4 dark:bg-[#1a2026]"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="font-merriweather text-xl font-bold mx-[17px]">
            Gabriel Pasker
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              onClick={e => {
                if (item.href.startsWith('#')) {
                  e.preventDefault();
                  scrollToSection(item.href);
                }
              }}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#F6C90E] relative",
                "after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[#F6C90E]",
                "after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white hover:bg-[#3A4750]/20 dark:hover:bg-[#1a2026]/20" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#3A4750] text-white dark:bg-[#1a2026]">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={e => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    scrollToSection(item.href);
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className="text-lg font-medium transition-colors py-2 hover:text-[#F6C90E]"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
