import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface MaskedHeroProps {
  onOpenConsultation: () => void;
}

export const MaskedHeroParallax: React.FC<MaskedHeroProps> = ({ onOpenConsultation }) => {
  const { scrollY } = useScroll();

  // Scroll transforms for Joseph Berry Goonies 3D spatial depth mask effect
  const titleY = useTransform(scrollY, [0, 600], [0, -260]);
  const titleScale = useTransform(scrollY, [0, 600], [1, 1.3]);
  const maskScale = useTransform(scrollY, [0, 600], [1, 1.12]);
  const opacityFade = useTransform(scrollY, [0, 450], [1, 0]);

  return (
    <section className="relative h-[130vh] w-full z-10 overflow-hidden bg-[#0a0801]">
      
      {/* 1. Full-Bleed Looping Background Video Layer (z-index: 0) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-[0.35] contrast-[1.2] scale-105"
        >
          <source src="/videos/hero_loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0801] via-[#0a0801]/30 to-[#0a0801]/80" />
      </div>

      {/* 2. Layered Title Text BEHIND Foreground Cutout Mask (z-index: 10) */}
      <motion.div
        style={{ y: titleY, scale: titleScale, opacity: opacityFade }}
        className="fixed top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full text-center pointer-events-none"
      >
        <h1 className="font-serif-editorial text-6xl sm:text-9xl font-light text-[#d9d7d4] tracking-[0.1em] uppercase leading-none opacity-90">
          K.B. ROYAL
        </h1>
        <p className="font-serif-editorial text-lg sm:text-2xl text-[#d9d7d4]/70 tracking-widest mt-2">
          REAL ESTATE & INVESTORS CLINIC
        </p>
      </motion.div>

      {/* 3. Foreground Image Cutout Mask Frame Overlay (z-index: 20) */}
      <motion.div
        style={{ scale: maskScale }}
        className="fixed inset-0 z-20 pointer-events-none flex items-center justify-center p-6 sm:p-16"
      >
        <div className="relative w-full max-w-5xl aspect-[16/9] border border-[#d9d7d4]/20 rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.95)]">
          <img
            src="/images/office_storefront.png"
            alt="K.B. Royal Premises Storefront Cutout Frame"
            className="w-full h-full object-cover brightness-[0.75] contrast-[1.1] mix-blend-screen"
          />
          <div className="absolute inset-0 bg-[#0a0801]/40" />

          {/* Central Cutout Label */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-[10px] font-mono tracking-widest text-[#d9d7d4]/70 uppercase">
            <span>KANAKIA OSTWAL POINT • MIRA ROAD EAST</span>
            <span>MUMBAI</span>
          </div>
        </div>
      </motion.div>

      {/* 4. Foreground Interactive Action Button (z-index: 30) */}
      <motion.div
        style={{ opacity: opacityFade }}
        className="fixed bottom-16 left-1/2 -translate-x-1/2 z-30 pointer-events-auto"
      >
        <button
          onClick={onOpenConsultation}
          className="px-8 py-4 rounded-full border border-[#d9d7d4]/40 bg-[#0a0801]/85 hover:bg-[#d9d7d4] hover:text-[#0a0801] transition-all text-xs font-mono uppercase tracking-[0.25em] shadow-2xl backdrop-blur-md"
        >
          INQUIRE PRIVATE CLINIC ADVISORY →
        </button>
      </motion.div>

    </section>
  );
};
