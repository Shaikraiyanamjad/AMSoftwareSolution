import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  topbarVisible: boolean;
}

const Header = ({ topbarVisible }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Contact', href: '/contact-us' },
  ];

  return (
    <header 
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        topbarVisible ? 'top-[44px] sm:top-[40px]' : 'top-0'
      } ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg shadow-lg shadow-background/20' 
          : 'bg-background/95'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between pb-5 h-20 md:h-25 mt-6">
          {/* Logo */}
          <a href="/home" className="flex items-center gap-2 group">
            <div className="w-12 h-12 md:w-12 md:h-12 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg md:text-xl"><img src="logo.png" alt="" /></span>
            </div>
            <div className="block sm:block">
              <span className="font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                Software
              </span>
              <span className="block text-xs text-muted-foreground -mt-1">Solution</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground animated-underline transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/contact-us" className="btn-primary relative z-10">
              <span className="relative z-10">Get Quote</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-foreground"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span 
                className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'
                }`}
              />
              <span 
                className={`absolute left-0 top-2 w-full h-0.5 bg-current transition-opacity duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 border-t border-border/30">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded-lg transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
