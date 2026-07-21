import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Building2, Compass, ArrowRight, Sparkles, MapPin, Award } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const stats = [
    { label: 'Portfolio Managed', value: '₹500Cr+', sub: 'High-Yield Assets' },
    { label: 'Satisfied Investors', value: '1,200+', sub: 'HNIs & Global NRIs' },
    { label: 'Prime Locations', value: 'Mira Rd / BKC / Thane', sub: 'Mumbai Hubs' },
    { label: 'Track Record', value: '15+ Yrs', sub: 'Unmatched Excellence' },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden z-10">
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-gold-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-gold-300">
                K.B. Royal Real Estate & Investors Clinic
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
            >
              Redefining <br />
              <span className="gold-gradient-text drop-shadow-lg">Luxury & High ROI</span> <br />
              Real Estate in Mumbai
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed font-light"
            >
              From prime residential penthouses to high-yielding commercial assets and dedicated NRI wealth advisory — <strong className="text-gold-300 font-medium">K.B. ROYAL</strong> provides bespoke investment consultation and developer-exclusive access at Kanakia Ostwal Point, Mira Road East, Mumbai.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenConsultation}
                className="group relative px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase text-obsidian-950 overflow-hidden bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-3"
              >
                <span>Book Clinic Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#showcase"
                className="px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase text-gray-200 border border-gold-500/30 hover:border-gold-400 bg-obsidian-900/60 backdrop-blur-md hover:bg-gold-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-gold-400" />
                <span>Explore 3D Showcase</span>
              </a>
            </motion.div>

            {/* Location Tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-2 text-xs text-gray-400 pt-2"
            >
              <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Shop 9, Kanakia Ostwal Point, Kanakia Road, Mira Road East, Mumbai - 401107</span>
            </motion.div>
          </div>

          {/* Right Floating 3D Showcase Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Main Featured Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full max-w-md rounded-3xl overflow-hidden glass-panel p-4 border border-gold-500/30 shadow-2xl shadow-black group"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <img
                  src="/images/penthouse.png"
                  alt="K.B. Royal Penthouse Showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-gold-500/40 text-[10px] uppercase font-bold text-gold-300 flex items-center gap-1.5">
                  <Award className="w-3 h-3 text-gold-400" />
                  <span>Exclusive Listing</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-xs text-gold-400 font-semibold uppercase tracking-wider">
                    Mira Road East, Mumbai
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-white">
                    Royal Sea-Facing Penthouse
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 flex items-center justify-between">
                    <span>4 BHK Duplex | Sky Deck</span>
                    <strong className="text-gold-400 font-mono text-sm">₹3.85 Cr Onwards</strong>
                  </p>
                </div>
              </div>

              {/* Floating Mini Badge Card 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-obsidian-900/90 border border-gold-500/40 p-4 rounded-2xl backdrop-blur-xl shadow-xl hidden sm:flex items-center gap-3"
              >
                <div className="p-2.5 rounded-xl bg-gold-500/20 text-gold-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">High ROI Returns</div>
                  <div className="text-[10px] text-gold-400 font-semibold">12-16% Projected YoY</div>
                </div>
              </motion.div>

              {/* Floating Mini Badge Card 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 bg-obsidian-900/90 border border-gold-500/40 p-4 rounded-2xl backdrop-blur-xl shadow-xl hidden sm:flex items-center gap-3"
              >
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Verified Commercials</div>
                  <div className="text-[10px] text-emerald-400 font-semibold">Pre-leased ROI Deals</div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Live Statistics Ticker */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-16 border-y border-gold-500/20 bg-[#0a0a0f]/80 backdrop-blur-lg py-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center border-r last:border-r-0 border-gold-500/10 px-2">
              <span className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold gold-gradient-text">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-gray-200 uppercase tracking-wider mt-1">
                {stat.label}
              </span>
              <span className="text-[11px] text-gray-400 font-medium">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};
