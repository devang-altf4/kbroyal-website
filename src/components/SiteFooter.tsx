import React, { useState, useEffect } from 'react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const SiteFooter: React.FC<FooterProps> = ({ onOpenConsultation }) => {
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
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-24 px-8 sm:px-16 border-t border-[#d9d7d4]/10 bg-[#0a0801] text-[#d9d7d4] text-left relative z-10">
      
      <div className="max-w-[1600px] mx-auto space-y-20">
        
        {/* Oversized Brand Wordmark */}
        <div>
          <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-[#d9d7d4]/50 mb-2">
            07 / HEADQUARTERS & CONTACT
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-7xl lg:text-8xl font-light tracking-wide text-[#d9d7d4] leading-none">
            K.B. ROYAL CLINIC
          </h2>
        </div>

        {/* 4-Column Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-xs font-mono tracking-widest text-[#d9d7d4]/70">
          
          {/* Col 1: Address */}
          <div className="md:col-span-4 space-y-3">
            <span className="block text-[10px] uppercase text-[#d9d7d4]/40">CLINIC OFFICE ADDRESS</span>
            <p className="leading-relaxed text-[#d9d7d4]">
              K.B. ROYAL REAL ESTATE AND INVESTORS CLINIC<br />
              Shop No. 9, Kanakia Ostwal Point, Kanakia Road,<br />
              Mira Road East, Mumbai, Maharashtra 401107, India.
            </p>
            <a
              href="https://share.google/QXNMZ1I6IQFyh061M"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-[#d9d7d4] hover:underline pt-1"
            >
              GOOGLE MAPS DIRECTIONS ↗
            </a>
          </div>

          {/* Col 2: Live Clocks & Phone */}
          <div className="md:col-span-3 space-y-4">
            <div>
              <span className="block text-[10px] uppercase text-[#d9d7d4]/40 mb-1">MUMBAI IST</span>
              <span className="text-[#d9d7d4] font-bold text-sm">{mumbaiTime || '22:58'}</span>
            </div>

            <div>
              <span className="block text-[10px] uppercase text-[#d9d7d4]/40 mb-1">DUBAI GST</span>
              <span className="text-[#d9d7d4] font-bold text-sm">{dubaiTime || '21:28'}</span>
            </div>

            <div>
              <span className="block text-[10px] uppercase text-[#d9d7d4]/40 mb-1">PHONE</span>
              <p className="text-[#d9d7d4]">+91 98200 88888</p>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="md:col-span-3 space-y-2">
            <span className="block text-[10px] uppercase text-[#d9d7d4]/40 mb-3">NAVIGATION</span>
            <ul className="space-y-2 text-[#d9d7d4]">
              <li><a href="#hero" className="hover:underline">01 / HOME</a></li>
              <li><a href="#philosophy" className="hover:underline">02 / PHILOSOPHY</a></li>
              <li><a href="#portfolio" className="hover:underline">03 / PORTFOLIO</a></li>
              <li><a href="#services" className="hover:underline">04 / SERVICES</a></li>
              <li><a href="#company" className="hover:underline">05 / COMPANY</a></li>
            </ul>
          </div>

          {/* Col 4: Action */}
          <div className="md:col-span-2 space-y-4">
            <span className="block text-[10px] uppercase text-[#d9d7d4]/40 mb-3">CONSULTATION</span>
            <button
              onClick={onOpenConsultation}
              className="w-full py-3 px-4 rounded-full border border-[#d9d7d4]/30 hover:bg-[#d9d7d4] hover:text-[#0a0801] transition-all text-[11px] font-mono uppercase tracking-widest"
            >
              BOOK CALL
            </button>
            <button
              onClick={scrollToTop}
              className="block text-right w-full text-[10px] uppercase text-[#d9d7d4]/50 hover:text-[#d9d7d4] pt-4"
            >
              TOP ↑
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono tracking-widest text-[#d9d7d4]/40 border-t border-[#d9d7d4]/10 pt-6 gap-4">
          <span>© {new Date().getFullYear()} K.B. ROYAL REAL ESTATE AND INVESTORS CLINIC. ALL RIGHTS RESERVED.</span>
          <a href="https://www.instagram.com/kbroyal_mumbai" target="_blank" rel="noreferrer" className="hover:underline text-[#d9d7d4]/70">
            INSTAGRAM: @KBROYAL_MUMBAI ↗
          </a>
        </div>

      </div>

    </footer>
  );
};
