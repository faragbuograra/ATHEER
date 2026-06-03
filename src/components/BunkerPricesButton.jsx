import React, { useState } from 'react';
import { Fuel, ExternalLink } from 'lucide-react';

export default function BunkerPricesButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://shipandbunker.com/prices"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-8 right-6 z-50 flex items-center gap-2 bg-primary-900 hover:bg-primary-300 text-white shadow-2xl transition-all duration-300 group"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)',
        padding: hovered ? '12px 20px 12px 16px' : '12px 16px',
      }}
      title="World Bunker Prices"
    >
      <Fuel className="w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
      <span
        className="text-xs font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 whitespace-nowrap"
        style={{ maxWidth: hovered ? '160px' : '0px', opacity: hovered ? 1 : 0 }}
      >
        World Bunker Prices
      </span>
      <ExternalLink
        className="w-3.5 h-3.5 flex-shrink-0 transition-all duration-300"
        style={{ opacity: hovered ? 1 : 0, maxWidth: hovered ? '20px' : '0px' }}
        strokeWidth={2.5}
      />
    </a>
  );
}
