import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-center items-center p-8 sm:p-16 overflow-hidden z-10 text-center"
    >
      {/* Atmospheric Full-Bleed Background Image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/penthouse.png"
          alt="Atmospheric Real Estate"
          className="w-full h-full object-cover brightness-[0.3] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0801] via-[#0a0801]/40 to-[#0a0801]/70" />
      </motion.div>

      {/* Center Poetic Statement (Exact Izanami Hero Typography & Placement) */}
      <div className="relative z-10 max-w-2xl mx-auto space-y-4 my-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-serif-editorial text-2xl sm:text-4xl text-[#d9d7d4] font-light leading-relaxed tracking-wider"
        >
          Stillness in space. <br />
          Wealth in horizon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.8 }}
          className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#d9d7d4]"
        >
          K.B. ROYAL REAL ESTATE & INVESTORS CLINIC
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="pt-6"
        >
          <button
            onClick={onOpenConsultation}
            className="text-xs font-serif-editorial tracking-[0.25em] uppercase text-[#d9d7d4] border-b border-[#d9d7d4]/30 hover:border-[#d9d7d4] pb-1 transition-colors"
          >
            INQUIRE PRIVATE ADVISORY →
          </button>
        </motion.div>
      </div>

    </section>
  );
};
