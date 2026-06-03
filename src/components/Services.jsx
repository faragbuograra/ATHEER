import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const INITIAL_COUNT = 6;

export default function Services() {
  const { lang: language, t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const isRtl = language === 'ar';
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  const items = [
    { id: 'shippingLinesAgent',      img: '/aerial-view-container-cargo-ship-sea_335224-735.webp', link: '#' },
    { id: 'oilGasTerminals',         img: '/tanker.jpg.jpeg',                                       link: '#' },
    { id: 'bestPDA',                 img: '/about_04.jpg.jpeg',                                     link: '#' },
    { id: 'oceanFreight',            img: '/blog-cargoships.jpg.jpeg',                              link: '#' },
    { id: 'landTransport',           img: '/Euro-lowloader-64.jpg.jpeg',                            link: '#' },
    { id: 'storageSolutions',        img: '/what-is-a-warehouse.webp',                              link: '#' },
    { id: 'importExportDoc',         img: '/import-clearance-SUWWV2cJ.jpg.jpeg',                   link: '#' },
    { id: 'customsBrokerage',        img: '/WhatsApp Image 2026-05-21 at 12.36.37 PM.jpeg ',                                            link: '#' },
    { id: 'projectCargoD2D',         img: '/1.jpg.jpeg',        link: '#' },
    { id: 'procurementLogistics',    img: '/WhatsApp Image 2026-05-21 at 12.36.54 PM.jpeg',        link: '#' },
    { id: 'refrigeratedLogistics',   img: '/WhatsApp Image 2026-05-21 at 12.37.09 PM.jpeg',        link: '#' },
    { id: 'hazardousMaterialHandling',img: '/WhatsApp Image 2026-05-21 at 12.37.27 PM.jpeg',       link: '#' },
    { id: 'heavyCargoTransportation',img: '/WSC_11.jpg.jpeg',                                      link: '#' },
    { id: 'lclConsolidation',        img: '/Best-Practices-in-Air-Freight-Logistic-3.jpg.jpeg',    link: '#' },
  ];

  const visible = showAll ? items : items.slice(0, INITIAL_COUNT);
  const remaining = items.length - INITIAL_COUNT;

  return (
    <section className="py-16 md:py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="h-1 w-12 bg-primary-300" />
            <h2 className="text-4xl md:text-5xl font-black text-primary-900 uppercase tracking-tight">
              {t.services.title}
            </h2>
            <div className="h-1 w-12 bg-primary-300" />
          </div>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            {isRtl
              ? 'نقدم مجموعة شاملة من الخدمات البحرية واللوجستية المتكاملة لتلبية جميع احتياجاتك.'
              : 'We offer a comprehensive range of maritime and logistics services to meet all your needs.'}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {visible.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (index % INITIAL_COUNT) * 0.08 }}
              className="flex flex-col group"
            >
              <a href={item.link} className="relative block overflow-hidden mb-10">
                <div
                  className="w-full aspect-[16/9] bg-gray-200 relative overflow-hidden"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 40px 100%, 0 calc(100% - 40px))' }}
                >
                  <img
                    src={item.img}
                    alt={t.featured[item.id].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </a>
              <div className="flex-1 flex flex-col items-center text-center px-4 max-w-lg mx-auto">
                <h3 className="text-[1.70rem] font-bold text-primary-900 uppercase tracking-wide mb-6">
                  {t.featured[item.id].title}
                </h3>
                <p className="text-gray-800 text-[15px] mb-8 line-clamp-4 leading-[1.9]">
                  {t.featured[item.id].desc}
                </p>
                <div className="mt-auto pb-4">
                  <a href={item.link} className="relative inline-flex group">
                    <div className="absolute inset-0 border border-primary-300 -skew-x-[18deg] group-hover:bg-primary-300 transition-colors duration-300" />
                    <span className="relative flex items-center justify-center gap-3 px-8 py-[10px] text-primary-300 font-bold uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                      {t.featured.readMore}
                      <ChevronIcon className="w-4 h-4" strokeWidth={3} />
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More / View Less Button */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-3 bg-primary-900 hover:bg-primary-300 text-white font-bold py-4 px-10 uppercase tracking-widest text-sm transition-colors duration-300 shadow-lg hover:shadow-xl"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)' }}
          >
            {showAll ? (
              <>
                {isRtl ? 'عرض أقل' : 'View Less'}
                <ChevronUp className="w-4 h-4" strokeWidth={3} />
              </>
            ) : (
              <>
                {isRtl ? `عرض المزيد (${remaining}+)` : `View More (${remaining}+)`}
                <ChevronDown className="w-4 h-4" strokeWidth={3} />
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
