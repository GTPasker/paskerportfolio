
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#3A4750] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="font-merriweather text-xl font-bold">
              Gabriel Thomas Gomes-Pasker
            </Link>
            <p className="text-sm text-white/70 mt-2">
              AI Verification Specialist
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {/* Social media links placeholders */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                [TODO: LinkedIn Icon]
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                [TODO: Twitter Icon]
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                [TODO: Email Icon]
              </a>
            </div>
            
            <p className="text-sm text-white/50">
              &copy; {currentYear} Gabriel Thomas Gomes-Pasker. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
