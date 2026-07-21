import React, { useState, useEffect } from 'react';
import { Crown, Sparkles, MessageSquare, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface IzanamiHeaderProps {
  onOpenConsultation: () => void;
}

export const IzanamiHeader: React.FC<IzanamiHeaderProps> = ({ onOpenConsultation }) => {
  const [time, setTime] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(now.toLocaleTimeString('en-GB', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5 px-6 sm:px-12 bg-[#08070b]/80 backdrop-blur-xl border-b border-gold-500/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Emblem */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 p-[1px]">
            <div className="w-full h-full bg-[#08070b] rounded-[11px] flex items-center justify-center">
              <Crown className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-cinzel font-bold text-lg tracking-[0.15em] text-white">
              K.B. ROYAL
            </span>
            <span className="text-[9px] tracking-[0.25em] uppercase text-gold-400 font-semibold -mt-1">
              REAL ESTATE & INVESTORS CLINIC
            </span>
          </div>
        </a>

        {/* Center Live Mumbai IST Clock (Izanami Feature!) */}
        <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/5 border border-gold-500/20 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-gray-400 uppercase text-[10px] tracking-wider">MUMBAI IST</span>
          <span className="text-gold-300 font-bold">{time || '22:45:00'}</span>
        </div>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://wa.me/919820088888?text=Hi%20KB%20Royal,%20I%20am%20interested%20in%20a%20real%20estate%20consultation."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-gold-400 transition-colors px-3 py-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden p-2 text-gold-400"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden pt-4 pb-6 bg-[#08070b] border-t border-gold-500/10 text-left space-y-4"
          >
            <div className="flex items-center justify-between text-xs font-mono text-gray-300 px-2">
              <span>MUMBAI LOCAL TIME</span>
              <span className="text-gold-400 font-bold">{time}</span>
            </div>
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-xl bg-gold-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider"
            >
              Book Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};
