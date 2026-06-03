import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Anchor, MapPin, CheckCircle, Ship } from 'lucide-react';

const Routes = () => {
  const { t } = useLanguage();

  return (
    <div id="ports" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary-900 tracking-tight uppercase flex items-center justify-center gap-4">
            <Anchor className="w-10 h-10 text-primary-300" />
            {t.ports.title}
          </h2>
          <div className="w-24 h-1 bg-primary-300 mx-auto mt-6"></div>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            Discover our strategic network of Libyan ports designed to optimize your maritime logistics and supply chain efficiency.
          </p>
        </div>
        
        {/* Map Images — hero layout */}
        <div className="w-full mb-24 relative">
          {/* Background accent */}
          <div className="absolute inset-0 bg-primary-900 rounded-3xl -z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-2xl">

            {/* Left — port photo, taller */}
            <div className="lg:col-span-2 relative overflow-hidden min-h-[320px] lg:min-h-[480px]">
              <img
                src="/0000.png"
                alt="Libyan Port"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              {/* gradient fade into right panel */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary-900/60 hidden lg:block" />
              {/* label badge */}
              <div className="absolute bottom-5 left-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg">
                Libyan Ports
              </div>
            </div>

            {/* Right — map on dark bg */}
            <div className="lg:col-span-3 bg-primary-900 flex flex-col items-center justify-center p-8 lg:p-12 gap-6">
              <div className="w-full max-w-xl">
                <p className="text-primary-300 text-xs font-bold uppercase tracking-widest mb-3">Port Network</p>
                <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-6 leading-tight">
                  {t.ports.title}
                </h3>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10">
                  <img
                    src="/ports.png"
                    alt="Libyan Ports Map"
                    className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Standard Ports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {t?.ports?.list?.map((port, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-primary-300 flex flex-col h-full transform hover:-translate-y-2">
              <div className="bg-primary-900 p-6 text-white relative overflow-hidden">
                {/* Background decorative pattern */}
                <div className="absolute top-0 right-0 opacity-10">
                  <Anchor className="w-32 h-32 transform translate-x-8 -translate-y-8" />
                </div>
                <h3 className="text-2xl font-black tracking-tight uppercase relative z-10">{port.name}</h3>
                {port.loc && <div className="flex items-center gap-2 mt-2 text-primary-300 text-sm font-medium"><MapPin size={16}/> {port.loc}</div>}
              </div>
              
              <div className="p-6 flex-grow text-gray-700 text-sm leading-relaxed space-y-4">
                {port.overview && (
                  <p className="text-gray-500 italic mb-4 pb-4 border-b border-gray-100">{port.overview}</p>
                )}
                
                <ul className="space-y-3">
                  {port.coords && <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-300 mt-1 flex-shrink-0" /> <span><strong>{t.ports.details.coords}:</strong> <br/>{port.coords}</span></li>}
                  {port.code && <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary-300 flex-shrink-0" /> <span><strong>{t.ports.details.code}:</strong> {port.code}</span></li>}
                  {port.draft && <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary-300 flex-shrink-0" /> <span><strong>{t.ports.details.draft}:</strong> {port.draft}</span></li>}
                  {port.length && <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary-300 flex-shrink-0" /> <span><strong>{t.ports.details.length}:</strong> {port.length}</span></li>}
                  {port.quays && <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary-300 flex-shrink-0" /> <span><strong>{t.ports.details.quays}:</strong> {port.quays}</span></li>}
                  {port.area && <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary-300 flex-shrink-0" /> <span><strong>{t.ports.details.area}:</strong> {port.area}</span></li>}
                  {port.traffic && <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary-300 flex-shrink-0" /> <span><strong>Traffic:</strong> {port.traffic}</span></li>}
                  {port.loadLine && <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary-300 flex-shrink-0" /> <span><strong>Load Line:</strong> {port.loadLine}</span></li>}
                </ul>
              </div>
              
              {port.activities && (
                <div className="bg-gray-50 p-4 border-t border-gray-100 text-xs font-semibold text-primary-900 uppercase">
                  <span className="text-gray-500 block mb-1">{t.ports.details.activities}</span>
                  {port.activities}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Oil Terminals Header */}
        <div className="text-center mb-16 pt-12 border-t-2 border-gray-200">
          <h2 className="text-4xl md:text-5xl font-black text-orange-600 tracking-tight uppercase flex items-center justify-center gap-4">
            <Ship className="w-10 h-10 text-orange-400" />
            {t.ports.oilTitle}
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mt-6"></div>
        </div>

        {/* Oil Terminals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t?.ports?.terminals?.map((port, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-orange-500 flex flex-col h-full transform hover:-translate-y-2">
              <div className="bg-orange-50 p-6 relative overflow-hidden text-orange-900">
                <div className="absolute top-0 right-0 opacity-10">
                  <Ship className="w-32 h-32 transform translate-x-8 -translate-y-8 text-orange-900" />
                </div>
                <h3 className="text-2xl font-black tracking-tight uppercase relative z-10">{port.name}</h3>
              </div>
              
              <div className="p-6 flex-grow text-gray-700 text-sm leading-relaxed space-y-4">
                <ul className="space-y-3">
                  {port.coords && <li className="flex items-start gap-2"><CheckCircle size={16} className="text-orange-500 mt-1 flex-shrink-0" /> <span><strong>{t.ports.details.coords}:</strong> <br/>{port.coords}</span></li>}
                  {port.code && <li className="flex items-center gap-2"><CheckCircle size={16} className="text-orange-500 flex-shrink-0" /> <span><strong>{t.ports.details.code}:</strong> {port.code}</span></li>}
                  {port.draft && <li className="flex items-center gap-2"><CheckCircle size={16} className="text-orange-500 flex-shrink-0" /> <span><strong>{t.ports.details.draft}:</strong> {port.draft}</span></li>}
                  {port.berths && <li className="flex items-center gap-2"><CheckCircle size={16} className="text-orange-500 flex-shrink-0" /> <span><strong>Number of Berths:</strong> {port.berths}</span></li>}
                </ul>
              </div>

               {port.activities && (
                <div className="bg-orange-50/50 p-4 border-t border-orange-100 text-xs font-semibold text-orange-900 uppercase">
                  <span className="text-orange-500/70 block mb-1">{t.ports.details.activities}</span>
                  {port.activities}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Routes;
