import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <div className="relative h-screen w-full bg-transparent flex items-center justify-center overflow-hidden" id="home">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/WhatsApp Video 2026-05-31 at 7.45.02 PM.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
   
      
      <div className="relative z-10 w-full px-4 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left text-white mt-16 md:mt-0">
           <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0 opacity-90 drop-shadow-2xl">
          <img src="/logo.png" alt="Atheer Shipping Logo" className="w-[280px] md:w-[400px] lg:w-[450px] object-contain brightness-0 invert drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]" />
        </div>
        </div>

       
        
      </div>
    </div>
  );
};

export default Hero;
