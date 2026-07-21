import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Crown, Sparkles, ArrowRight, ShieldCheck, MapPin, Building2, TrendingUp, Globe2, Award, ArrowUpRight, MessageSquare } from 'lucide-react';
import { InvestmentCalculator } from './InvestmentCalculator';

interface ScrollWorldProps {
  onOpenConsultation: (propertyTitle?: string) => void;
  onSceneChange: (sceneIndex: number) => void;
}

export const FullPageScrollWorld: React.FC<ScrollWorldProps> = ({
  onOpenConsultation,
  onSceneChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Track active scene index for HUD timeline indicator
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      let activeIndex = 1;
      if (v >= 0.12 && v < 0.28) activeIndex = 2;
      else if (v >= 0.28 && v < 0.48) activeIndex = 3;
      else if (v >= 0.48 && v < 0.65) activeIndex = 4;
      else if (v >= 0.65 && v < 0.80) activeIndex = 5;
      else if (v >= 0.80 && v < 0.92) activeIndex = 6;
      else if (v >= 0.92) activeIndex = 7;

      onSceneChange(activeIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress, onSceneChange]);

  // -------------------------------------------------------------
  // 3D Perspective Transforms for Scene 01 (Entrance)
  // -------------------------------------------------------------
  const scene1Scale = useTransform(scrollYProgress, [0, 0.12], [1, 1.4]);
  const scene1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.14], [1, 1, 0]);
  const scene1Z = useTransform(scrollYProgress, [0, 0.12], [0, 300]);

  // -------------------------------------------------------------
  // 3D Perspective Transforms for Scene 02 (Stats Authority)
  // -------------------------------------------------------------
  const scene2Opacity = useTransform(scrollYProgress, [0.11, 0.15, 0.25, 0.29], [0, 1, 1, 0]);
  const scene2Scale = useTransform(scrollYProgress, [0.11, 0.20, 0.29], [0.8, 1, 1.2]);
  const scene2RotateX = useTransform(scrollYProgress, [0.11, 0.29], [15, -15]);

  // -------------------------------------------------------------
  // 3D Perspective Transforms for Scene 03 (3D Property Cards)
  // -------------------------------------------------------------
  const scene3Opacity = useTransform(scrollYProgress, [0.27, 0.31, 0.45, 0.49], [0, 1, 1, 0]);

  // -------------------------------------------------------------
  // 3D Perspective Transforms for Scene 04 (Investors ROI Calculator)
  // -------------------------------------------------------------
  const scene4Opacity = useTransform(scrollYProgress, [0.47, 0.51, 0.62, 0.66], [0, 1, 1, 0]);
  const scene4Scale = useTransform(scrollYProgress, [0.47, 0.55, 0.66], [0.9, 1, 1.05]);

  // -------------------------------------------------------------
  // 3D Perspective Transforms for Scene 05 (Services Spectrum)
  // -------------------------------------------------------------
  const scene5Opacity = useTransform(scrollYProgress, [0.64, 0.68, 0.77, 0.81], [0, 1, 1, 0]);

  // -------------------------------------------------------------
  // 3D Perspective Transforms for Scene 06 (NRI Global Concierge)
  // -------------------------------------------------------------
  const scene6Opacity = useTransform(scrollYProgress, [0.79, 0.83, 0.89, 0.93], [0, 1, 1, 0]);

  // -------------------------------------------------------------
  // 3D Perspective Transforms for Scene 07 (Royal Consultation & Contact)
  // -------------------------------------------------------------
  const scene7Opacity = useTransform(scrollYProgress, [0.91, 0.95, 1], [0, 1, 1]);

  const properties = [
    {
      title: 'Royal Sea-Facing Duplex Penthouse',
      location: 'Kanakia Road, Mira Road East, Mumbai',
      price: '₹3.45 Cr',
      roi: '14.5% Est. YoY ROI',
      bhk: '4 BHK Duplex',
      sqft: '2,450 Sq.Ft.',
      image: '/images/penthouse.png',
      tag: 'Luxury Residential',
    },
    {
      title: 'BKC Corporate High-Yield Hub',
      location: 'Bandra Kurla Complex (BKC), Mumbai',
      price: '₹8.75 Cr',
      roi: '8.5% Pre-leased Yield',
      sqft: '3,800 Sq.Ft.',
      image: '/images/commercial.png',
      tag: 'Commercial Pre-leased',
    },
    {
      title: 'The Sovereign Estate Luxury Villa',
      location: 'Western Express Highway Corridor',
      price: '₹6.20 Cr',
      roi: '18.0% Capital Growth',
      bhk: '5 BHK Villa',
      sqft: '4,200 Sq.Ft.',
      image: '/images/villa.png',
      tag: 'Gated Villa Estate',
    },
    {
      title: 'Kanakia Ostwal Point Showroom',
      location: 'Kanakia Ostwal Point Commercial Plaza',
      price: '₹2.10 Cr',
      roi: '9.2% Pre-leased Yield',
      sqft: '1,250 Sq.Ft.',
      image: '/images/investors_clinic.png',
      tag: 'Retail Commercial',
    },
  ];

  return (
    <div ref={containerRef} className="relative h-[700vh] bg-obsidian-950 text-white z-10">
      
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-1000 transform-style-3d">
        
        {/* =========================================================
            SCENE 01: THE EMBLEM & HERO ENTRANCE (0% - 12%)
           ========================================================= */}
        <motion.div
          style={{
            scale: scene1Scale,
            opacity: scene1Opacity,
            z: scene1Z,
          }}
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto"
        >
          {/* Glowing Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 backdrop-blur-md mb-6">
            <Crown className="w-4 h-4 text-gold-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold-300">
              K.B. Royal Real Estate & Investors Clinic
            </span>
          </div>

          {/* Main Cinematic Title */}
          <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
            ELEVATING <br />
            <span className="gold-gradient-text drop-shadow-2xl">REAL ESTATE WEALTH</span> <br />
            IN MUMBAI
          </h1>

          <p className="text-gray-300 text-sm sm:text-lg max-w-2xl mt-6 font-light leading-relaxed">
            High-yield commercial assets, luxury penthouses, NRI wealth management, and developer-exclusive access at <strong className="text-gold-300 font-medium">Kanakia Ostwal Point, Mira Road East, Mumbai</strong>.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => onOpenConsultation()}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 text-obsidian-950 font-bold text-sm tracking-wider uppercase flex items-center gap-3 shadow-xl shadow-gold-500/30 hover:scale-105 transition-all"
            >
              <span>Book Clinic Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Scroll Down Hint */}
          <div className="absolute bottom-10 flex flex-col items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-gold-400 opacity-80 animate-bounce">
            <span>Scroll To Enter 3D World</span>
            <div className="w-4 h-7 rounded-full border border-gold-400/50 flex justify-center p-1">
              <div className="w-1 h-2 bg-gold-400 rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            SCENE 02: AUTHORITY METRICS & STATS (12% - 28%)
           ========================================================= */}
        <motion.div
          style={{
            opacity: scene2Opacity,
            scale: scene2Scale,
            rotateX: scene2RotateX,
          }}
          className="absolute inset-0 flex flex-col justify-center items-center px-4 max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-gold-400">
              02 / Institutional Track Record
            </span>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold gold-gradient-text mt-2">
              Unmatched Real Estate Authority
            </h2>
          </div>

          {/* Floating 3D Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              { label: 'Portfolio Managed', val: '₹500Cr+', sub: 'High-Yield Assets', icon: Building2 },
              { label: 'Satisfied Investors', val: '1,200+', sub: 'HNIs & Global NRIs', icon: Award },
              { label: 'Prime Locations', val: 'Mira Rd / BKC / Thane', sub: 'Mumbai Hubs', icon: MapPin },
              { label: 'Track Record', val: '15+ Yrs', sub: 'Zero Legal Risk Guarantee', icon: ShieldCheck },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="glass-panel p-8 rounded-3xl border border-gold-500/30 glass-panel-hover flex flex-col items-start text-left shadow-2xl relative overflow-hidden"
                >
                  <div className="p-3 rounded-2xl bg-gold-500/20 text-gold-400 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="font-cinzel text-3xl sm:text-4xl font-black gold-gradient-text">
                    {stat.val}
                  </div>
                  <div className="text-sm font-bold text-white mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    {stat.sub}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* =========================================================
            SCENE 03: 3D PROPERTY TUNNEL SHOWCASE (28% - 48%)
           ========================================================= */}
        <motion.div
          style={{ opacity: scene3Opacity }}
          className="absolute inset-0 flex flex-col justify-center items-center px-4 max-w-6xl mx-auto"
        >
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-gold-400">
              03 / 3D Spatial Property Tunnel
            </span>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold gold-gradient-text mt-1">
              Prime Mumbai Portfolio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {properties.map((prop, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-3xl overflow-hidden border border-gold-500/30 glass-panel-hover flex flex-col justify-between group text-left"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-90" />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/80 border border-gold-500/40 text-[9px] uppercase font-bold text-gold-300">
                    {prop.tag}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-cinzel text-sm font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-1">
                      {prop.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 mt-1 truncate">{prop.location}</p>

                    <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gold-500/10 text-[11px] font-mono font-bold text-gold-300">
                      <span>{prop.roi}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-white">{prop.price}</span>
                    <button
                      onClick={() => onOpenConsultation(prop.title)}
                      className="px-3 py-1.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs flex items-center gap-1 transition-all"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =========================================================
            SCENE 04: REAL ESTATE INVESTORS CLINIC ROI ENGINE (48% - 65%)
           ========================================================= */}
        <motion.div
          style={{ opacity: scene4Opacity, scale: scene4Scale }}
          className="absolute inset-0 flex flex-col justify-center items-center px-4 max-w-6xl mx-auto"
        >
          <InvestmentCalculator onOpenConsultation={() => onOpenConsultation('Real Estate Investors Clinic ROI Strategy')} />
        </motion.div>

        {/* =========================================================
            SCENE 05: ADVISORY SPECTRUM SERVICES (65% - 80%)
           ========================================================= */}
        <motion.div
          style={{ opacity: scene5Opacity }}
          className="absolute inset-0 flex flex-col justify-center items-center px-4 max-w-6xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-gold-400">
              05 / 360° Real Estate Solutions
            </span>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold gold-gradient-text mt-1">
              Comprehensive Real Estate Advisory
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              {
                icon: Building2,
                title: 'Luxury Residential Sales',
                desc: 'Penthouses, duplexes & sea-facing residences across Mira Road, Kanakia, Thane & Worli.',
                tag: 'Residential Spectrum',
              },
              {
                icon: TrendingUp,
                title: 'High-Yield Commercial Hubs',
                desc: 'Pre-leased corporate offices & retail spaces with 7% to 9% assured rental returns.',
                tag: 'Commercial Portfolio',
              },
              {
                icon: Globe2,
                title: 'NRI Wealth Advisory Desk',
                desc: 'Remote acquisition, POA compliance, RBI FEMA guidelines, and tenant management.',
                tag: 'Global Indian Desk',
              },
            ].map((serv, idx) => {
              const Icon = serv.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-8 rounded-3xl border border-gold-500/30 glass-panel-hover text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-mono font-bold px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-300">
                      {serv.tag}
                    </span>
                    <h3 className="font-cinzel text-xl font-bold text-white mt-3 mb-2">
                      {serv.title}
                    </h3>
                    <p className="text-xs text-gray-300 font-light leading-relaxed">
                      {serv.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenConsultation(serv.title)}
                    className="mt-6 w-full py-3 rounded-xl bg-gold-500/10 hover:bg-gold-500 text-gold-400 hover:text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-gold-500/30"
                  >
                    <span>Consult Specialists</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* =========================================================
            SCENE 06: GLOBAL NRI WEALTH CONCIERGE (80% - 92%)
           ========================================================= */}
        <motion.div
          style={{ opacity: scene6Opacity }}
          className="absolute inset-0 flex flex-col justify-center items-center px-4 max-w-5xl mx-auto"
        >
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-gold-500/30 bg-gradient-to-br from-[#101018] via-obsidian-950 to-[#12121e] shadow-2xl text-left w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold text-gold-400">
                  06 / NRI Investment Desk
                </span>
                <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold gold-gradient-text">
                  Global Indian Property Concierge
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Remote property acquisition with live 4K virtual tours, POA legal processing, and direct rent collection to NRE bank accounts.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenConsultation('NRI Virtual Video Tour')}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                  >
                    <span>Schedule 4K Virtual Walkthrough</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="md:col-span-5 relative h-64 rounded-2xl overflow-hidden border border-gold-500/30">
                <img
                  src="/images/nri_lounge.png"
                  alt="NRI Suite"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-bold text-gold-300">
                  24/7 Global NRI Concierge
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            SCENE 07: ROYAL CONSULTATION & CLINIC LOCATION (92% - 100%)
           ========================================================= */}
        <motion.div
          style={{ opacity: scene7Opacity }}
          className="absolute inset-0 flex flex-col justify-center items-center px-4 max-w-5xl mx-auto text-center"
        >
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-gold-500/40 bg-gradient-to-b from-[#12121a] to-[#0a0a0f] shadow-2xl w-full">
            <Crown className="w-12 h-12 text-gold-400 mx-auto mb-4 animate-pulse" />

            <span className="text-xs uppercase tracking-widest font-bold text-gold-400">
              07 / Visit Our Clinic Office
            </span>

            <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold gold-gradient-text mt-2">
              K.B. ROYAL REAL ESTATE CLINIC
            </h2>

            <p className="text-sm text-gray-300 max-w-xl mx-auto mt-4 leading-relaxed">
              Shop No. 9, Kanakia Ostwal Point, Kanakia Road, Mira Road East, Mumbai, Maharashtra 401107, India.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenConsultation('Direct Appointment Request')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 text-obsidian-950 font-bold text-sm tracking-wider uppercase flex items-center gap-2 shadow-xl shadow-gold-500/30"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Priority Appointment</span>
              </button>

              <a
                href="https://wa.me/919820088888?text=Hi%20KB%20Royal,%20I%20would%20like%20to%20book%20a%20real%20estate%20consultation."
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wider uppercase flex items-center gap-2 shadow-xl"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Chat</span>
              </a>

              <a
                href="https://share.google/QXNMZ1I6IQFyh061M"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full border border-gold-500/30 hover:bg-gold-500/10 text-gold-300 font-bold text-sm tracking-wider uppercase flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Google Maps Location</span>
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2">
              <span>© {new Date().getFullYear()} K.B. ROYAL REAL ESTATE AND INVESTORS CLINIC</span>
              <span>@kbroyal_mumbai</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
