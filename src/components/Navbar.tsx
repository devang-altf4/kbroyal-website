import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Phone, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Overview', href: '#hero' },
    { name: '3D World Showcase', href: '#showcase' },
    { name: 'Investors Clinic', href: '#calculator' },
    { name: 'Services Spectrum', href: '#services' },
    { name: 'Prime Properties', href: '#properties' },
    { name: 'NRI Investment Suite', href: '#nri' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050508]/85 backdrop-blur-xl border-b border-gold-500/20 py-3 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 p-[1px] shadow-lg shadow-gold-500/20 group-hover:shadow-gold-500/40 transition-all duration-300">
            <div className="w-full h-full bg-[#0a0a0f] rounded-[11px] flex items-center justify-center">
              <Crown className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel font-extrabold text-lg tracking-wider gold-gradient-text">
              K.B. ROYAL
            </span>
            <span className="text-[10px] tracking-widest uppercase text-gray-400 font-semibold -mt-1">
              Real Estate & Investors Clinic
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-8 bg-[#121218]/60 backdrop-blur-md px-6 py-2 rounded-full border border-gold-500/10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-medium uppercase tracking-wider text-gray-300 hover:text-gold-400 transition-colors duration-300 relative group py-1"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+919820000000"
            className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-gold-400 transition-colors duration-300 px-3 py-2"
          >
            <Phone className="w-4 h-4 text-gold-500 animate-pulse" />
            <span>+91 98200 88888</span>
          </a>
          <button
            onClick={onOpenConsultation}
            className="relative group overflow-hidden rounded-full p-[1px] font-medium text-xs tracking-wider"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-700 animate-glow-pulse" />
            <span className="relative block px-5 py-2.5 rounded-full bg-[#0a0a0f] text-gold-300 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300 font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Book Clinic Consultation
            </span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gold-400 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a0a0f]/95 backdrop-blur-2xl border-b border-gold-500/20 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold uppercase tracking-wider text-gray-200 hover:text-gold-400 transition-colors py-2 flex items-center justify-between border-b border-gray-800/50"
                >
                  {item.name}
                  <ArrowUpRight className="w-4 h-4 text-gold-500" />
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 font-bold text-sm tracking-wide text-center"
                >
                  Book Clinic Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
