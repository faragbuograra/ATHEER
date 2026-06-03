import { useEffect, useState, useRef } from 'react';
import { Anchor } from 'lucide-react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const countRef = useRef(0);
  const doneRef = useRef(false);
  const startRef = useRef(Date.now());

  const TOTAL = 2;

  function onAssetLoaded() {
    countRef.current += 1;
    setProgress(Math.round((countRef.current / TOTAL) * 100));
    if (countRef.current >= TOTAL && !doneRef.current) {
      doneRef.current = true;
      const wait = Math.max(0, 500 - (Date.now() - startRef.current));
      setTimeout(triggerExit, wait);
    }
  }

  function triggerExit() {
    setProgress(100);
    setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 700);
    }, 300);
  }

  useEffect(() => {
    const img = new Image();
    img.onload = img.onerror = onAssetLoaded;
    img.src = '/logo.png';

    const vid = document.createElement('video');
    vid.preload = 'metadata';
    vid.oncanplay = vid.onerror = onAssetLoaded;
    vid.src = '/WhatsApp Video 2026-05-31 at 7.45.02 PM.mp4';
    vid.load();

    const fallback = setTimeout(() => {
      if (!doneRef.current) {
        doneRef.current = true;
        triggerExit();
      }
    }, 1000);

    return () => clearTimeout(fallback);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundColor: '#002654',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
        opacity: exiting ? 0 : 1,
        transform: exiting ? 'translateY(-28px)' : 'translateY(0)',
        pointerEvents: exiting ? 'none' : 'auto',
      }}
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,173,239,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,173,239,0.08) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Top glow bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00adef] to-transparent opacity-70" />

      {/* Animated ocean waves */}
     

      {/* Main content */}
      <div
        className="relative z-10 flex flex-col items-center"
        style={{
          transition: 'opacity 0.6s ease, transform 0.6s ease',
          opacity: exiting ? 0 : 1,
          transform: exiting ? 'scale(0.96)' : 'scale(1)',
        }}
      >
        {/* Logo with ambient glow */}
        <div className="relative mb-6">
          <div className="loading-logo-glow absolute inset-0 rounded-full blur-3xl bg-[#00adef]" />
          <img
            src="/logo.png"
            alt="ATHEER"
            className="relative w-44 md:w-56"
            style={{
              filter: 'brightness(0) invert(1) drop-shadow(0 0 24px rgba(0,173,239,0.6))',
            }}
          />
        </div>

        {/* Brand name */}
        <h1 className="text-white text-3xl md:text-4xl font-black tracking-[0.3em] uppercase">
          ATHEER
        </h1>
        <p
          className="mt-1 text-[10px] md:text-xs tracking-[0.25em] uppercase font-semibold"
          style={{ color: '#00adef', opacity: 0.75 }}
        >
          Shipping &amp; Logistic Services
        </p>

        {/* Anchor */}
        {/* <div
          className="mt-7 loading-anchor-bob"
          style={{ color: '#00adef', opacity: 0.5 }}
        >
          <Anchor size={22} strokeWidth={1.5} />
        </div> */}

        {/* Progress bar */}
        {/* <div className="mt-7 w-52 md:w-72">
          <div className="relative h-[1px] rounded-full overflow-visible" style={{ background: 'rgba(255,255,255,0.08)' }}>
            {/* Filled track 
            <div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: `${progress}%`,
                background: '#00adef',
                transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)',
                boxShadow: '0 0 8px 2px rgba(0,173,239,0.5)',
              }}
            />
            {/* Shimmer on fill 
            {progress > 0 && progress < 100 && (
              <div
                className="loading-shimmer absolute top-0 bottom-0 rounded-full"
                style={{ left: `calc(${progress}% - 24px)`, width: 48 }}
              />
            )}
          </div>
          <div className="flex justify-between mt-2">
            <span
              className="text-[9px] tracking-[0.2em] uppercase font-medium"
              style={{ color: 'rgba(255,255,255,0.2)' }}
            >
              Loading
            </span>
            <span
              className="text-[9px] font-mono"
              style={{ color: 'rgba(0,173,239,0.6)' }}
            >
              {progress}%
            </span>
          </div>
        </div> */}

        {/* Pulsing dots */}
        <div className="mt-5 flex items-center gap-[6px]">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-[5px] h-[5px] rounded-full loading-dot"
              style={{
                backgroundColor: '#00adef',
                animationDelay: `${i * 0.22}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
