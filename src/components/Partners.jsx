import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const PARTNERS = [
  {
    name: 'Midline Investment',
    logo: '/PARTNERS/midline.png',
    url: 'https://midline-investment.com/',
  },
  {
    name: 'Agencies Shipping Line & Broker',
    logo: '/PARTNERS/agencies.png',
    url: 'https://agencies.it/en/',
  },
  {
    name: 'Asian Logistics',
    logo: '/PARTNERS/ala.png',
    url: 'https://asianlogistics.net/en/',
  },
  {
    name: 'High Trend Trading & Engineering Services',
    logo: '/PARTNERS/HighTrend.png',
    url: 'https://hightrendte.com',
  },
];

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="h-[2px] w-12 bg-primary-300" />
            <h2 className="text-4xl md:text-5xl font-black text-primary-900 uppercase tracking-tight">
              {t.partners.title}
            </h2>
            <div className="h-[2px] w-12 bg-primary-300" />
          </div>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            {t.partners.subtitle}
          </p>
        </motion.div>

        {/* Partner cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNERS.map((partner, i) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center justify-between bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary-300 transition-all duration-300"
            >
              {/* Logo */}
              <div className="flex items-center justify-center w-full h-24 mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Divider */}
              <div className="w-8 h-[2px] bg-primary-300 mb-3 transition-all duration-300 group-hover:w-14" />

              {/* Name */}
              <p className="text-center text-sm font-semibold text-primary-900 leading-snug uppercase tracking-wide">
                {partner.name}
              </p>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
