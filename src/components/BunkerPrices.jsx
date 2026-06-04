import { motion } from 'framer-motion';
import { Fuel, ExternalLink, TrendingUp, Droplets, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FUEL_TYPES = [
  // {
  //   icon: Fuel,
  //   code: 'VLSFO',
  //   name: 'Very Low Sulphur Fuel Oil',
  //   desc: 'IMO 2020 compliant fuel, max 0.5% sulphur. The global standard for open-sea vessel operations.',
  // },
  // {
  //   icon: Droplets,
  //   code: 'IFO 380',
  //   name: 'Intermediate Fuel Oil',
  //   desc: 'High-viscosity heavy fuel oil used in SECA-exempt waters. Most widely traded marine fuel globally.',
  // },
  // {
  //   icon: Zap,
  //   code: 'MGO',
  //   name: 'Marine Gas Oil',
  //   desc: 'Distillate fuel with very low sulphur content. Mandatory in Emission Control Areas (ECAs).',
  // },
];

export default function BunkerPrices() {
  const { lang } = useLanguage();
  const isRtl = lang === 'ar';

  return (
    <section id="bunker" className="py-20 bg-primary-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-[2px] w-10 bg-primary-300" />
            <Fuel className="w-7 h-7 text-primary-300" strokeWidth={2} />
            <div className="h-[2px] w-10 bg-primary-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            {isRtl ? 'أسعار الوقود البحري العالمية' : 'World Bunker Prices'}
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            {isRtl
              ? 'تابع أحدث أسعار وقود السفن في الأسواق العالمية الرئيسية بشكل فوري.'
              : 'Stay up to date with live marine fuel prices across the world\'s major bunkering hubs.'}
          </p>
        </motion.div>

        {/* Fuel type cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {FUEL_TYPES.map((fuel, i) => {
            const Icon = fuel.icon;
            return (
              <motion.div
                key={fuel.code}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-primary-300/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-300/10 flex items-center justify-center group-hover:bg-primary-300/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary-300" strokeWidth={2} />
                  </div>
                  <div>
                    <span className="block text-xl font-black text-white tracking-tight">
                      {fuel.code}
                    </span>
                  </div>
                </div>
                <p className="text-primary-300 text-xs font-bold uppercase tracking-widest mb-2">
                  {fuel.name}
                </p>
                <p className="text-white/40 text-sm leading-relaxed">
                  {fuel.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="https://shipandbunker.com/prices"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary-300 hover:bg-white text-white hover:text-primary-900 font-bold uppercase tracking-widest text-sm px-10 py-4 transition-all duration-300 shadow-lg hover:shadow-xl group"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)' }}
          >
            <TrendingUp className="w-4 h-4" strokeWidth={2.5} />
            {isRtl ? 'عرض الأسعار الحية' : 'View Live Prices'}
            <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={2.5} />
          </a>
          <p className="text-white/20 text-xs tracking-widest uppercase">
            {isRtl ? 'مدعوم من Ship & Bunker' : 'Powered by Ship & Bunker'}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
