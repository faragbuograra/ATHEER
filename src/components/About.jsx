import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const About = () => {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-50 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`order-2 ${language === 'ar' ? 'lg:order-1' : 'lg:order-1'}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-primary-300"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 uppercase tracking-wide">
                {t.about.title}
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t.about.description}
            </p>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a 
                href="#contact" 
                className="bg-primary-900 border border-primary-900 text-white hover:bg-white hover:text-primary-900 transition-colors duration-300 px-8 py-3 font-semibold uppercase tracking-wider text-sm inline-flex items-center gap-2"
              >
                {t.hero.contact}
              </a>
            </motion.div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`order-1 ${language === 'ar' ? 'lg:order-2' : 'lg:order-2'} relative`}
          >
            <div className="relative h-[400px] md:h-[500px] w-full border-4 border-white shadow-2xl overflow-hidden flex items-center justify-center">
                <img 
                  src="/aerial-view-container-cargo-ship-sea_335224-735.webp" 
                  alt="Atheer Shipping Operations" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />

                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-300 opacity-90 z-0" />
                <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-primary-300 z-0" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;