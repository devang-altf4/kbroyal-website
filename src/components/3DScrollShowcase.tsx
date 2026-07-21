import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, ArrowUpRight, Sparkles, Coins } from 'lucide-react';

interface CardData {
  id: number;
  title: string;
  category: string;
  location: string;
  price: string;
  roi: string;
  image: string;
  features: string[];
}

interface ShowcaseProps {
  onOpenConsultation: () => void;
}

export const ScrollShowcase: React.FC<ShowcaseProps> = ({ onOpenConsultation }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const cards: CardData[] = [
    {
      id: 1,
      title: 'Royal Sea-Facing Duplex Penthouses',
      category: 'Residential Luxury',
      location: 'Kanakia Road, Mira Road East',
      price: '₹2.85 Cr – ₹4.50 Cr',
      roi: '14.2% Estimated ROI',
      image: '/images/penthouse.png',
      features: ['Private Terrace Pool', 'Sky Lounge Access', '3D VR Tour Ready'],
    },
    {
      id: 2,
      title: 'Grand Commercial Corporate Hub',
      category: 'High-Yield Commercial',
      location: 'BKC & Kanakia Commercial Belt',
      price: '₹1.50 Cr – ₹12.00 Cr',
      roi: '16.5% Annual Rental Yield',
      image: '/images/commercial.png',
      features: ['Pre-Leased Blue-Chip Tenants', 'Zero Vacancy Lock-in', 'Assured Buyback Options'],
    },
    {
      id: 3,
      title: 'The Sovereign Luxury Villas',
      category: 'Gated Estate',
      location: 'Western Express Corridor, Mumbai',
      price: '₹5.20 Cr Onwards',
      roi: '18.0% Capital Growth',
      image: '/images/villa.png',
      features: ['Private Landscaped Gardens', 'Smart Home Automation', '24/7 Royal Security'],
    },
    {
      id: 4,
      title: 'KB Investors Clinic Advisory Desk',
      category: 'Wealth Management',
      location: 'Shop 9, Kanakia Ostwal Point',
      price: 'Bespoke Investor Advisory',
      roi: '15%+ Portfolio Yield',
      image: '/images/investors_clinic.png',
      features: ['Legal Title Verification', 'Tax & NRI Compliance', 'Developer Pre-Launch Rates'],
    },
  ];

  return (
    <section
      id="showcase"
      ref={containerRef}
      className="relative h-[300vh] bg-obsidian-950 text-white z-20"
    >
      {/* Sticky Frame viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center items-center px-4">
        
        {/* Section Header */}
        <div className="absolute top-12 z-30 text-center max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-[11px] uppercase tracking-widest text-gold-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>3D Scroll Perspective World</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold gold-gradient-text">
            Scroll to Navigate Luxury Real Estate
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Experience our 3D property tunnel. Move through high-value investment assets.
          </p>
        </div>

        {/* 3D Stack Canvas Container */}
        <div className="relative w-full max-w-4xl h-[500px] flex items-center justify-center perspective-1000 transform-style-3d">
          {cards.map((card, index) => {
            // Normalize card ranges strictly within [0, 1] for Framer Motion WAAPI compatibility
            const step = 1 / cards.length;
            const startRange = Math.min(1, Math.max(0, index * step * 0.8));
            const endRange = Math.min(1, Math.max(0, startRange + 0.35));
            const midStart = Math.min(1, Math.max(0, startRange + 0.08));
            const midEnd = Math.min(1, Math.max(0, endRange - 0.08));

            // Scale and TranslateZ zoom towards camera as scroll progresses
            const scale = useTransform(
              scrollYProgress,
              [startRange, endRange],
              [0.7, 1.05]
            );
            const opacity = useTransform(
              scrollYProgress,
              [startRange, midStart, midEnd, endRange],
              [0.2, 1, 1, 0]
            );
            const rotateX = useTransform(
              scrollYProgress,
              [startRange, endRange],
              [25, 0]
            );
            const translateY = useTransform(
              scrollYProgress,
              [startRange, endRange],
              [120, -20]
            );

            return (
              <motion.div
                key={card.id}
                style={{
                  scale,
                  opacity,
                  rotateX,
                  y: translateY,
                }}
                className="absolute w-full max-w-2xl bg-obsidian-900/90 border border-gold-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl shadow-black/90 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                {/* Image Showcase */}
                <div className="md:col-span-6 h-56 sm:h-64 rounded-2xl overflow-hidden relative group">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-gold-500/40 text-[10px] uppercase font-bold text-gold-300">
                    {card.category}
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="md:col-span-6 flex flex-col justify-between h-full gap-4 text-left">
                  <div>
                    <span className="text-[11px] font-semibold text-gold-400 tracking-wider uppercase">
                      {card.location}
                    </span>
                    <h3 className="font-cinzel text-xl font-bold text-white mt-1 leading-snug">
                      {card.title}
                    </h3>
                    
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gold-500/10 border border-gold-500/20 text-xs font-mono font-bold text-gold-300">
                      <Coins className="w-3.5 h-3.5 text-gold-400" />
                      <span>{card.roi}</span>
                    </div>

                    <ul className="mt-4 space-y-1.5 text-xs text-gray-300">
                      {card.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-gray-400 uppercase font-semibold">Starting Price</div>
                      <div className="font-mono text-sm font-bold text-gold-300">{card.price}</div>
                    </div>
                    <button
                      onClick={onOpenConsultation}
                      className="px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-gold-500/20"
                    >
                      <span>Inquire Now</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll Progress Indicator Bar */}
        <div className="absolute bottom-8 w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-full bg-gradient-to-r from-gold-400 to-gold-600 origin-left"
          />
        </div>
      </div>
    </section>
  );
};
