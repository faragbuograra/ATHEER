import React, { useState, useEffect } from 'react';
import { Search, Settings, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
        { label: t.nav.about, href: '#about' },
            { label: t.nav.services, href: '#services' },
    { label: t.nav.ports, href: '#ports' },


    { label: t.nav.contact, href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary-900 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img src="/logo.png" alt="Atheer Shipping Logo" className="w-16 h-16 object-contain mb-1 brightness-0 invert drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]" />
          <div className="text-white font-black text-3xl italic tracking-tighter flex flex-col">
            <span>ATHEER</span>
            <span className="text-xl font-normal tracking-wider -mt-1 opacity-80">ATHEER SHIPPING & LOGISTIC SERVICES COMPANY</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 text-white text-sm font-semibold p-8">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="hover:text-blue-300 transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="hidden lg:flex items-center space-x-4 text-white">
          <div className="flex items-center cursor-pointer hover:text-blue-300" onClick={toggleLang}>
            {lang === 'ar' ? 'EN' : 'AR'} <ChevronDown size={16} className="ml-1" />
          </div>
         </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden text-white cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-primary-900 border-t border-primary-700">
          <div className="flex flex-col text-white text-sm font-semibold">
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="p-4 border-b border-primary-700 hover:bg-primary-800" onClick={() => setMobileMenuOpen(false)}>
                {link.label}
              </a>
            ))}
             <div className="p-4 border-b border-primary-700 hover:bg-primary-800 cursor-pointer" onClick={toggleLang}>
              {lang === 'ar' ? 'English' : 'عربي'}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
