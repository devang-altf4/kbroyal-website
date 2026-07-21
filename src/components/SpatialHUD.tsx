import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Phone, Sparkles, Volume2, VolumeX, Menu, X, ArrowUpRight, MapPin } from 'lucide-react';

interface SpatialHUDProps {
  currentScene: number; // 1 to 7
  totalScenes: number; // 7
  onOpenConsultation: () => void;
  onNavigateToScene: (sceneIndex: number) => void;
}

export const SpatialHUD: React.FC<SpatialHUDProps> = ({
  currentScene,
  totalScenes,
  onOpenConsultation,
  onNavigateToScene,
}) => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sceneNames = [
    '01. The Royal Emblem',
    '02. Authority Metrics',
    '03. 3D Property Tunnel',
    '04. Investors ROI Clinic',
    '05. Advisory Spectrum',
    '06. Global NRI Desk',
    '07. Royal Consultation',
  ];

  return (
    <>
      {/* Top Floating Glass HUD Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-5 px-4 sm:px-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          
          {/* Brand Emblem */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 p-[1px] shadow-lg shadow-gold-500/20 group-hover:shadow-gold-500/50 transition-all duration-500">
              <div className="w-full h-full bg-[#0a0a0f] rounded-[15px] flex items-center justify-center">
                <Crown className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-cinzel font-black text-lg tracking-wider gold-gradient-text">
                K.B. ROYAL
              </span>
              <span className="text-[9px] tracking-widest uppercase text-gray-400 font-bold -mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Real Estate & Investors Clinic
              </span>
            </div>
          </a>

          {/* Right Action Controls */}
          <div className="flex items-center gap-4">
            
            {/* Audio Toggle Effect */}
            <button
              onClick={() => setAudioEnabled(!audioEnabled)}
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-[#121218]/80 border border-gold-500/20 text-gray-300 hover:text-gold-400 text-xs font-mono transition-all"
            >
              {audioEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-gold-400 animate-pulse" />
                  <span>ATMOSPHERE [ON]</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-gray-500" />
                  <span>ATMOSPHERE [OFF]</span>
                </>
              )}
            </button>

            {/* Quick Phone Call */}
            <a
              href="tel:+919820088888"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-[#121218]/80 border border-gold-500/20 text-xs font-bold text-gray-200 hover:text-gold-300 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>+91 98200 88888</span>
            </a>

            {/* Book Consultation Button */}
            <button
              onClick={onOpenConsultation}
              className="relative group overflow-hidden rounded-full p-[1px] font-bold text-xs tracking-wider"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-700 animate-glow-pulse" />
              <span className="relative block px-5 py-2.5 rounded-full bg-[#0a0a0f] text-gold-300 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-obsidian-900 border border-gold-500/30 text-gold-400"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </header>

      {/* Left Navigation Timeline Rail */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4">
        
        {/* Scene Number Tracker */}
        <div className="font-cinzel text-xs font-bold text-gold-400 tracking-widest flex flex-col items-center">
          <span className="text-lg font-black gold-gradient-text">{String(currentScene).padStart(2, '0')}</span>
          <span className="w-px h-8 bg-gradient-to-b from-gold-400 to-transparent my-1" />
          <span className="text-[10px] text-gray-500">{String(totalScenes).padStart(2, '0')}</span>
        </div>

        {/* Scene Indicator Dots */}
        <div className="flex flex-col gap-2.5">
          {Array.from({ length: totalScenes }).map((_, idx) => {
            const sceneNum = idx + 1;
            const isActive = currentScene === sceneNum;

            return (
              <button
                key={idx}
                onClick={() => onNavigateToScene(idx)}
                className="group relative flex items-center"
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-gold-400 ring-4 ring-gold-500/30 scale-125'
                      : 'bg-gray-700 hover:bg-gold-500/60'
                  }`}
                />
                
                {/* Tooltip Label */}
                <div className="absolute left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap px-3 py-1 rounded-lg bg-obsidian-900 border border-gold-500/30 text-[10px] font-bold uppercase tracking-wider text-gold-300 shadow-xl">
                  {sceneNames[idx]}
                </div>
              </button>
            );
          })}
        </div>

      </div>

      {/* Bottom Floating Status Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden sm:flex items-center gap-6 px-6 py-2.5 rounded-full bg-obsidian-900/90 border border-gold-500/30 backdrop-blur-xl text-[11px] font-medium text-gray-300 shadow-2xl">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-gold-400" />
          <span>Shop 9, Kanakia Ostwal Point, Mira Road East, Mumbai</span>
        </div>
        <span className="w-px h-3 bg-gray-800" />
        <div className="text-gold-400 font-mono font-bold">
          PROPERTIES: 1/2/3/4 BHK PENTHOUSES & COMMERCIAL
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-2xl px-6 pt-28 pb-10 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-4 text-left">
              {sceneNames.map((name, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateToScene(idx);
                  }}
                  className="text-left font-cinzel text-lg font-bold text-gray-200 hover:text-gold-400 py-2 border-b border-gray-800 flex items-center justify-between"
                >
                  <span>{name}</span>
                  <ArrowUpRight className="w-4 h-4 text-gold-400" />
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 font-bold text-sm tracking-wider uppercase text-center"
            >
              Book Clinic Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
