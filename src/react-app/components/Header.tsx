import { Hexagon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className={`mx-auto px-6 lg:px-0 transition-all duration-300 ${
        isScrolled ? 'max-w-[95%]' : 'max-w-7xl'
      }`}>
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}>
          {/* Left side: Logo and Navigation */}
          <div className="flex items-center gap-2">
            {/* Logo */}
            <button className="flex items-center justify-center rounded-lg border border-white/10" style={{ backgroundColor: '#0B0C0D', width: '38px', height: '38px' }}>
              <Hexagon className="w-5 h-5 text-white" strokeWidth={1.5} />
            </button>
            
            {/* Navigation Pills */}
            <nav className="hidden md:flex items-center gap-2">
              <a href="#product" className="text-sm text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg border border-white/10" style={{ backgroundColor: '#0B0C0D' }}>
                Product
              </a>
              <a href="#resources" className="text-sm text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg border border-white/10" style={{ backgroundColor: '#0B0C0D' }}>
                Resources
              </a>
              <a href="#enterprise" className="text-sm text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg border border-white/10" style={{ backgroundColor: '#0B0C0D' }}>
                Enterprise
              </a>
              <a href="#customers" className="text-sm text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg border border-white/10" style={{ backgroundColor: '#0B0C0D' }}>
                Customers
              </a>
              <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg border border-white/10" style={{ backgroundColor: '#0B0C0D' }}>
                Pricing
              </a>
            </nav>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button className="text-sm text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg border border-white/10" style={{ backgroundColor: '#0B0C0D' }}>
              Log in
            </button>
            <button className="text-sm text-black bg-white hover:bg-gray-200 transition-colors px-5 py-2 rounded-lg font-medium">
              Contact sales
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
