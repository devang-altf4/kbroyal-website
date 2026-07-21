import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenConsultation: () => void;
}

export const SiteHeader: React.FC<HeaderProps> = ({ onOpenMenu, onOpenConsultation }) => {
  const [mumbaiTime, setMumbaiTime] = useState('');
  const [dubaiTime, setDubaiTime] = useState('');

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

      const dOpts: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setDubaiTime(now.toLocaleTimeString('en-GB', dOpts));
    };

    updateTimes();
    const timer = setInterval(updateTimes, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Top Floating Izanami-Style Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 py-8 px-8 sm:px-16 pointer-events-none mix-blend-difference"
      >
        <div className="max-w-[1600px] mx-auto flex items-start justify-between pointer-events-auto">
          
          {/* Top-Left Minimalist Vertical Brand Emblem (Exact Izanami Style) */}
          <a href="#" className="flex flex-col items-start gap-1 group text-left">
            <svg className="w-8 h-10 text-[#d9d7d4]" viewBox="0 0 40 50" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="5" y="5" width="30" height="6" />
              <rect x="10" y="15" width="20" height="6" />
              <rect x="5" y="25" width="30" height="6" />
              <rect x="12" y="35" width="16" height="6" />
            </svg>
            <span className="font-serif-editorial text-xs tracking-[0.3em] uppercase text-[#d9d7d4] font-light">
              K.B. ROYAL
            </span>
          </a>

          {/* Top-Right Minimal Menu Controls with Izanami Dot Indicators */}
          <div className="flex items-center gap-10">
            {/* Language/Consultation Link with dot */}
            <div className="flex flex-col items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-[#d9d7d4]/80" />
              <button
                onClick={onOpenConsultation}
                className="text-xs font-serif-editorial tracking-[0.2em] uppercase text-[#d9d7d4] hover:text-white transition-colors"
              >
                EN &nbsp; INQUIRE
              </button>
            </div>

            {/* Menu Trigger with dot */}
            <div className="flex flex-col items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-[#d9d7d4]/80" />
              <button
                onClick={onOpenMenu}
                className="text-xs font-serif-editorial tracking-[0.25em] uppercase text-[#d9d7d4] hover:text-white transition-colors"
              >
                MENU
              </button>
            </div>
          </div>

        </div>
      </motion.header>

      {/* Bottom Fixed Metadata Bar (Exact Izanami Layout: © Year | Live Clocks | Scroll) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 py-6 px-8 sm:px-16 pointer-events-none mix-blend-difference flex items-center justify-between text-[11px] font-serif-editorial tracking-[0.2em] uppercase text-[#d9d7d4]/70">
        <div>©{new Date().getFullYear()}</div>

        <div className="hidden sm:flex items-center gap-8 font-mono text-[10px]">
          <span>{mumbaiTime || '22:24:40'} IST, MUMBAI IND</span>
          <span>{dubaiTime || '20:58:40'} GST, DUBAI UAE</span>
        </div>

        <div>SCROLL</div>
      </div>
    </>
  );
};
