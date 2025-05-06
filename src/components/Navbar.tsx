
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  
  const navItems = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Philosophy', href: '#philosophy', id: 'philosophy' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Showcase', href: '/showcase', id: '' },
    { name: 'Vision', href: '#vision', id: 'vision' },
    { name: 'Connect', href: '#connect', id: 'connect' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      if (isHomePage) {
        const sections = navItems
          .filter(item => item.href.startsWith('#'))
          .map(item => item.href.substring(1));
          
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // If the section is in view (with some buffer for better UX)
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial call to set proper state when component mounts
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, navItems]);

  const handleNavigation = (href: string) => {
    setMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      // Handle navigation to section on the same page
      if (isHomePage) {
        // If already on home page, scroll to the section
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      } else {
        // If on another page, navigate to home page with the section hash
        navigate('/' + href);
      }
    } else {
      // For regular page navigation (like /showcase)
      navigate(href);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-[#3A4750]/95 text-white shadow-md py-2 backdrop-blur-sm dark:bg-[#1a2026]/95" 
          : "bg-[#3A4750]/85 text-white py-4 backdrop-blur-sm dark:bg-[#1a2026]/85"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="font-merriweather text-xl font-bold mx-[17px] relative overflow-hidden group"
            aria-label="Home page"
          >
            <span className="relative z-10">Gabriel Pasker</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F6C90E] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1 lg:space-x-2">
          {navItems.map(item => {
            const isActive = 
              (item.href.startsWith('#') && activeSection === item.href.substring(1)) ||
              (!item.href.startsWith('#') && location.pathname === item.href);
              
            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={cn(
                  "text-sm font-medium px-3 py-2 rounded-md transition-all duration-200 relative",
                  "hover:text-[#F6C90E] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#F6C90E]/50 focus:ring-offset-1 focus:ring-offset-[#3A4750]/50",
                  isActive ? "text-[#F6C90E] bg-white/5" : "text-white"
                )}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F6C90E] rounded-full"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white hover:bg-white/10 transition-all focus:ring-2 focus:ring-[#F6C90E]/50" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#3A4750]/95 text-white dark:bg-[#1a2026]/95 backdrop-blur-sm animate-slide-in-bottom">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map(item => {
              const isActive = 
                (item.href.startsWith('#') && activeSection === item.href.substring(1)) ||
                (!item.href.startsWith('#') && location.pathname === item.href);
                
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={cn(
                    "text-lg font-medium py-3 px-4 transition-colors rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-[#F6C90E]/50",
                    isActive 
                      ? "bg-white/10 text-[#F6C90E] border-l-2 border-[#F6C90E]" 
                      : "hover:bg-white/5 hover:text-[#F6C90E]"
                  )}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
