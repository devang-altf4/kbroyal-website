import React, { useState, useEffect } from 'react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const FixedHeroSection: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate text opacity fade based on scroll depth (1 -> 0 over first 400px scroll)
  const heroTextOpacity = Math.max(0, 1 - scrollY / 400);

  return (
    <section className="relative h-[120vh] w-full z-10">
      
      {/* Background Atmospheric Image */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/penthouse.png"
          alt="Penthouse Landscape"
          className="w-full h-full object-cover brightness-[0.3] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0801] via-[#0a0801]/30 to-[#0a0801]/70" />
      </div>

      {/* PERFECTLY FIXED CENTER TEXT OVERLAY (z-index: 20) */}
      <div
        style={{ opacity: heroTextOpacity }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-2xl px-6 text-center transition-opacity duration-300 pointer-events-none"
      >
        <p className="font-serif-editorial text-3xl sm:text-5xl text-[#d9d7d4] font-light leading-relaxed tracking-wider">
          Stillness in space. <br />
          Wealth in horizon.
        </p>

        <div className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#d9d7d4]/60 mt-4">
          K.B. ROYAL REAL ESTATE & INVESTORS CLINIC
        </div>

        <div className="pt-6 pointer-events-auto">
          <button
            onClick={onOpenConsultation}
            className="text-xs font-serif-editorial tracking-[0.25em] uppercase text-[#d9d7d4] border-b border-[#d9d7d4]/30 hover:border-[#d9d7d4] pb-1 transition-colors"
          >
            INQUIRE PRIVATE ADVISORY →
          </button>
        </div>
      </div>

    </section>
  );
};
