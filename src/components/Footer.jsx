import React from 'react';
import { Linkedin, Mail, MapPin, Phone, Anchor } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const quickLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.ports, href: '#ports' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="relative bg-primary-900 text-white">
      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,115.75,193.36,97.87,242.06,84.14,284.16,73.1,321.39,56.44Z" className="fill-primary-900" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-7xl pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Anchor className="w-8 h-8 text-primary-300" />
              <div className="flex flex-col leading-none">
                <span className="font-black text-2xl tracking-tight">ATHEER</span>
                <span className="text-[10px] font-medium tracking-widest text-primary-300 uppercase mt-0.5">Shipping & Logistics</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {t.isRtl
                ? 'شركة شحن رائدة في ليبيا متخصصة في الخدمات البحرية والحلول اللوجستية المتكاملة.'
                : 'A premier shipping firm in Libya specializing in comprehensive maritime services and integrated logistics solutions.'}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary-300 flex items-center justify-center transition-colors duration-300">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 pb-2 border-b border-white/10">
              {t.nav.home === 'Home' ? 'Quick Links' : 'روابط سريعة'}
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-300 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 pb-2 border-b border-white/10">
              {t.contact.departments}
            </h4>
            <ul className="flex flex-col gap-3">
              {t.contact.deptList.slice(0, 5).map((dept, i) => (
                <li key={i}>
                  <a
                    href={`mailto:${dept.email}`}
                    className="text-gray-400 hover:text-primary-300 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {dept.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 pb-2 border-b border-white/10">
              {t.contact.title}
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-primary-300 mt-0.5 flex-shrink-0" />
                <span>{t.contact.info.address}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-primary-300 mt-0.5 flex-shrink-0" />
                <span>{t.contact.info.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail size={16} className="text-primary-300 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${t.contact.info.email}`} className="text-gray-400 hover:text-primary-300 transition-colors duration-200">
                  {t.contact.info.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-xs text-gray-500">
          <p>{t.footer.rights}</p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
