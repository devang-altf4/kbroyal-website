import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenConsultation: () => void;
}

export const SiteHeader: React.FC<HeaderProps> = ({ onOpenMenu, onOpenConsultation }) => {
  const [mumbaiTime, setMumbaiTime] = useState('');

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const mOpts: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setMumbaiTime(now.toLocaleTimeString('en-GB', mOpts));
    };

    updateTimes();
    const timer = setInterval(updateTimes, 1000);
    return () => clearInterval(timer);
  }, []);

  const whatsappNumber = '919967136161';
  const getWhatsappUrl = () => {
    const text = encodeURIComponent('Hello K.B. Royal, I am inquiring from your website.');
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-12 bg-[#0D0B08]/85 backdrop-blur-lg border-b border-[#D4AF37]/20"
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#AA7C11] to-[#D4AF37] flex items-center justify-center shadow-lg">
            <span className="font-serif-editorial text-xs text-[#0D0B08] font-bold">KB</span>
          </div>
          <div>
            <span className="font-serif-editorial text-sm sm:text-base font-light text-[#FAF6EE] tracking-[0.15em] block">
              K.B. ROYAL
            </span>
            <span className="text-[9px] font-mono text-[#D4AF37] tracking-[0.2em] uppercase block">
              INVESTOR'S CLINIC
            </span>
          </div>
        </a>

        {/* Live Mumbai Time & Direct Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden md:flex items-center gap-2 font-mono text-[10px] text-[#D9D2C5]/60 border-r border-[#D4AF37]/20 pr-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>MUMBAI IST {mumbaiTime}</span>
          </div>

          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-block px-5 py-2 rounded-full bg-[#D4AF37] hover:bg-[#F5E6C8] text-[#0D0B08] font-mono text-[10px] uppercase font-bold tracking-widest transition-all"
          >
            WHATSAPP CHAT ↗
          </a>

          <button
            onClick={onOpenConsultation}
            className="px-4 py-2 rounded-full border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#F5E6C8] font-mono text-[10px] uppercase tracking-widest transition-all"
          >
            INQUIRE
          </button>

          <button
            onClick={onOpenMenu}
            className="px-3 py-2 rounded-full bg-[#16120D] border border-[#D4AF37]/30 text-[#D4AF37] font-mono text-[10px] uppercase font-bold tracking-widest hover:border-[#D4AF37]"
          >
            MENU
          </button>
        </div>

      </div>
    </motion.header>
  );
};
