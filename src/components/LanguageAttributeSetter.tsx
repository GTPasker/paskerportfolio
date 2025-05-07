
import { useEffect } from 'react';

export function LanguageAttributeSetter() {
  useEffect(() => {
    // Set the language attribute on the HTML tag
    document.documentElement.setAttribute('lang', 'en');
  }, []);

  return null; // This component doesn't render anything
}

export default LanguageAttributeSetter;
