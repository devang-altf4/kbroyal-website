import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollyProps {
  onOpenConsultation: (title?: string) => void;
}

export const IzanamiGoldScrolly: React.FC<ScrollyProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'commercial' | 'plots'>('all');

  const { scrollY } = useScroll();

  // Izanami Scroll-Bound Parallax Transforms
  const videoScale = useTransform(scrollY, [0, 1500], [1.0, 1.22]);
  const videoBrightness = useTransform(scrollY, [0, 1000], [0.35, 0.15]);
  const heroTitleY = useTransform(scrollY, [0, 600], [0, -200]);
  const heroScale = useTransform(scrollY, [0, 600], [1.0, 1.15]);
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  const pricingSpectrum = [
    {
      id: 'p1',
      category: 'residential',
      type: '1 RK / Studio',
      price: '₹35 Lakhs – ₹45 Lakhs',
      yield: 'High Demand Rental',
      tag: 'Starter Asset',
      desc: 'Compact luxury living spaces across prime Mira Road East & Kanakia corridors.',
      image: '/images/penthouse.png',
    },
    {
      id: 'p2',
      category: 'residential',
      type: '1 BHK Residences',
      price: '₹60 Lakhs – ₹75 Lakhs',
      yield: '6.2% Annual Yield',
      tag: 'Family Favorite',
      desc: 'Modern 1 BHK apartments with MahaRERA approved high-rise amenities.',
      image: '/images/villa.png',
    },
    {
      id: 'p3',
      category: 'residential',
      type: '2 BHK Apartments & Duplex',
      price: '₹75 Lakhs – ₹1.30 Cr',
      yield: '8.4% Appreciation',
      tag: 'Prime Value',
      desc: 'Spacious 2 BHK homes & duplex layouts with panoramic skyline views.',
      image: '/images/penthouse.png',
    },
    {
      id: 'p4',
      category: 'residential',
      type: '3 BHK Luxury Penthouses',
      price: '₹1 Cr – ₹1.85 Cr',
      yield: 'Crown Jewel Asset',
      tag: 'Ultra-Luxury',
      desc: 'Exclusive sea-facing penthouses with private decks and bespoke finishes.',
      image: '/images/penthouse.png',
    },
    {
      id: 'p5',
      category: 'commercial',
      type: 'Shops & Showrooms',
      price: '₹75 Lakhs – ₹2 Cr',
      yield: '9.5% Pre-Leased Yield',
      tag: 'High Cashflow',
      desc: 'Ground level high-footfall retail shops at Ostwal Point & Kanakia Plaza.',
      image: '/images/commercial.png',
    },
    {
      id: 'p6',
      category: 'plots',
      type: 'Plots, Bunglows & Selling',
      price: 'Bespoke Valuation',
      yield: '14.2% Land Growth',
      tag: 'Land Ownership',
      desc: 'Clear legal title freehold plots and standalone bungalow estates.',
      image: '/images/villa.png',
    },
  ];

  const filteredItems = activeTab === 'all'
    ? pricingSpectrum
    : pricingSpectrum.filter(item => item.category === activeTab);

  const whatsappNumber = '919967136161';
  const getWhatsappUrl = (msg?: string) => {
    const text = encodeURIComponent(msg || 'Hello K.B. Royal Team, I would like to inquire about real estate opportunities in Mumbai.');
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  return (
    <div className="relative bg-[#0D0B08] text-[#F5E6C8] font-sans selection:bg-[#D4AF37] selection:text-[#0D0B08]">
      
      {/* 1. IZANAMI SCROLL-BOUND BACKGROUND VIDEO (PARALLAX SCALE & BRIGHTNESS) */}
      <motion.div
        style={{ scale: videoScale }}
        className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          style={{ opacity: videoBrightness }}
          className="w-full h-full object-cover contrast-[1.2]"
        >
          <source src="/videos/hero_loop.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B08] via-[#0D0B08]/50 to-[#0D0B08]/80" />
      </motion.div>

      {/* 2. CHAPTER 01: HERO PARALLAX (IZANAMI STYLE SCROLL SCALE & Y TRANSITION) */}
      <section className="relative min-h-[100svh] w-full flex flex-col justify-center items-center px-4 sm:px-12 text-center z-10">
        <motion.div
          style={{ y: heroTitleY, scale: heroScale, opacity: heroOpacity }}
          className="max-w-4xl mx-auto space-y-6 my-auto pt-20"
        >
          
          {/* MAHARERA BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16120D]/90 border border-[#D4AF37]/40 shadow-2xl backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
              MAHARERA NO: A51700016531
            </span>
          </motion.div>

          {/* MAIN HERO TITLE */}
          <h1 className="font-serif-editorial text-4xl sm:text-7xl lg:text-8xl font-light text-[#FAF6EE] leading-none tracking-wide">
            K.B. ROYAL <br />
            <span className="gold-text-gradient font-normal italic">REAL ESTATE & INVESTOR'S CLINIC</span>
          </h1>

          <p className="text-xs sm:text-base text-[#D9D2C5]/80 font-light leading-relaxed max-w-2xl mx-auto px-2">
            Flats, Bunglows, Shops, Plots, L.L. Basis, Rent & Selling across Kanakia Road, Ostwal Point, Mira Road East & Mumbai.
          </p>

          {/* QUICK HERO ACTIONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 px-4">
            <a
              href={getWhatsappUrl('Hello K.B. Royal, I want to book a private consultation.')}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0B08] font-mono text-xs uppercase font-bold tracking-[0.2em] shadow-2xl hover:scale-105 transition-all text-center"
            >
              WHATSAPP CONSULTATION →
            </a>

            <button
              onClick={() => onOpenConsultation('General Property Inquiry')}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#D4AF37]/40 bg-[#16120D]/80 hover:border-[#D4AF37] text-[#F5E6C8] font-mono text-xs uppercase tracking-[0.2em] backdrop-blur-md transition-all"
            >
              EXPLORE PRICING SPECTRUM
            </button>
          </div>

        </motion.div>
      </section>

      {/* 3. CHAPTER 02: STICKY PHILOSOPHY STORYTELLING (TEXT MASK & GOLD LINE ANIMATION) */}
      <section className="relative z-10 py-32 px-4 sm:px-12 max-w-[1440px] mx-auto text-left">
        <div className="glass-gold-card p-8 sm:p-16 rounded-3xl space-y-8 border border-[#D4AF37]/30 shadow-2xl">
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="w-24 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent origin-left"
          />

          <span className="block text-[10px] font-mono tracking-[0.35em] uppercase text-[#D4AF37] font-bold">
            CHAPTER 01 / PHILOSOPHY & TRUST
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="font-serif-editorial text-3xl sm:text-6xl text-[#FAF6EE] font-light leading-snug"
          >
            "Generational Capital Security <br />
            <span className="gold-text-gradient font-normal italic">Through Structured Real Estate Allocations."</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs sm:text-sm text-[#D9D2C5]/80 font-light leading-relaxed max-w-2xl"
          >
            With over 15 years of market mastery and MahaRERA registration (A51700016531), K.B. ROYAL REAL ESTATE AND INVESTOR'S CLINIC provides transparent title verification, pre-leased commercial portfolio advisory, and residential wealth guidance across Ostwal Point, Kanakia Road, and prime Mumbai corridors.
          </motion.p>

          <div className="pt-4 flex flex-wrap items-center gap-8 font-mono text-[10px] text-[#D9D2C5]/60 uppercase tracking-widest border-t border-[#D4AF37]/15">
            <span>KANAKIA OSTWAL POINT</span>
            <span>•</span>
            <span>MIRA ROAD EAST</span>
            <span>•</span>
            <span>MAHARERA: A51700016531</span>
          </div>

        </div>
      </section>

      {/* 4. CHAPTER 03: STAGGERED PRICING DECK (3D PARALLAX CARDS) */}
      <section className="relative z-10 py-24 px-4 sm:px-12 max-w-[1440px] mx-auto text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D4AF37]/20 pb-6 mb-12">
          <div>
            <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-[#D4AF37] font-bold">
              CHAPTER 02 / PORTFOLIO SPECTRUM
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-light text-[#FAF6EE] mt-1">
              Curated Pricing & Offerings
            </h2>
          </div>

          {/* CATEGORY TABS */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#16120D] rounded-full border border-[#D4AF37]/20">
            {[
              { id: 'all', label: 'All Spectrum' },
              { id: 'residential', label: 'Residences' },
              { id: 'commercial', label: 'Shops & Hubs' },
              { id: 'plots', label: 'Plots & Land' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-[10px] font-mono uppercase font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#D4AF37] text-[#0D0B08] shadow-lg'
                    : 'text-[#D9D2C5]/60 hover:text-[#F5E6C8]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* PRICING GRID WITH STAGGERED 3D PARALLAX ANIMATION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, rotateX: 12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: idx * 0.12, ease: [0.76, 0, 0.24, 1] }}
              className="glass-gold-card p-6 rounded-2xl space-y-4 hover:border-[#D4AF37]/60 transition-all group"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#D4AF37]/15">
                <img
                  src={item.image}
                  alt={item.type}
                  className="w-full h-full object-cover brightness-[0.75] group-hover:scale-110 transition-transform duration-1000"
                />
                <span className="absolute top-3 left-3 text-[9px] font-mono bg-[#0D0B08]/90 text-[#D4AF37] px-2.5 py-1 rounded-full border border-[#D4AF37]/30 uppercase font-bold">
                  {item.tag}
                </span>
                <span className="absolute bottom-3 right-3 text-[9px] font-mono bg-[#D4AF37] text-[#0D0B08] px-2.5 py-1 rounded-full font-bold uppercase">
                  {item.yield}
                </span>
              </div>

              <div>
                <h3 className="font-serif-editorial text-xl text-[#FAF6EE] font-light">
                  {item.type}
                </h3>
                <div className="font-mono text-lg font-bold text-[#D4AF37] mt-1">
                  {item.price}
                </div>
                <p className="text-xs text-[#D9D2C5]/70 font-light mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <a
                href={getWhatsappUrl(`Hi K.B. Royal, I am interested in ${item.type} priced at ${item.price}.`)}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center py-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-[#0D0B08] text-[#F5E6C8] font-mono text-[10px] font-bold uppercase tracking-widest transition-all"
              >
                INQUIRE ON WHATSAPP →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. CHAPTER 04: FINANCIAL YIELD & ROI ENGINE */}
      <section className="relative z-10 py-24 px-4 sm:px-12 max-w-[1440px] mx-auto text-left">
        <div className="border-b border-[#D4AF37]/20 pb-6 mb-8">
          <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-[#D4AF37] font-bold">
            CHAPTER 03 / FINANCIAL YIELD
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-light text-[#FAF6EE] mt-1">
            Investor Yield Engine
          </h2>
        </div>

        <div className="glass-gold-card p-6 sm:p-12 rounded-3xl space-y-8 border border-[#D4AF37]/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#0D0B08]/80 p-6 rounded-2xl border border-[#D4AF37]/20"
            >
              <span className="text-[10px] font-mono text-[#D9D2C5]/60 uppercase tracking-widest">ESTIMATED YIELD</span>
              <div className="font-serif-editorial text-3xl sm:text-4xl text-[#D4AF37] font-bold mt-1">8.5% – 14.2%</div>
              <p className="text-[10px] text-[#D9D2C5]/50 mt-1">Pre-Leased Commercial & Residential</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-[#0D0B08]/80 p-6 rounded-2xl border border-[#D4AF37]/20"
            >
              <span className="text-[10px] font-mono text-[#D9D2C5]/60 uppercase tracking-widest">MINIMUM ENTRY</span>
              <div className="font-serif-editorial text-3xl sm:text-4xl text-[#FAF6EE] font-bold mt-1">₹35 Lakhs</div>
              <p className="text-[10px] text-[#D9D2C5]/50 mt-1">Mira Road East & Kanakia Corridor</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#0D0B08]/80 p-6 rounded-2xl border border-[#D4AF37]/20"
            >
              <span className="text-[10px] font-mono text-[#D9D2C5]/60 uppercase tracking-widest">TRUST RECORD</span>
              <div className="font-serif-editorial text-3xl sm:text-4xl text-[#D4AF37] font-bold mt-1">15+ Years</div>
              <p className="text-[10px] text-[#D9D2C5]/50 mt-1">MahaRERA Reg: A51700016531</p>
            </motion.div>
          </div>

          <div className="text-center pt-4">
            <a
              href={getWhatsappUrl('I want a customized ROI calculation for real estate investment in Mumbai.')}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0B08] font-mono text-xs uppercase font-bold tracking-[0.2em] shadow-xl hover:scale-105 transition-all"
            >
              REQUEST CUSTOMIZED FINANCIAL SHEET →
            </a>
          </div>
        </div>
      </section>

      {/* 6. CHAPTER 05: LOCATION & CONTACT FOOTER */}
      <footer id="contact" className="relative z-10 py-24 px-4 sm:px-12 max-w-[1440px] mx-auto text-center border-t border-[#D4AF37]/20">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#D4AF37] font-bold">
            CHAPTER 04 / CLINIC LOCATION & CONTACT
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-light text-[#FAF6EE]">
            K.B. ROYAL INVESTOR'S CLINIC
          </h2>

          <div className="glass-gold-card p-6 sm:p-8 rounded-2xl text-left space-y-4 border border-[#D4AF37]/25">
            <div>
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest">HEADQUARTERS ADDRESS</span>
              <p className="text-xs sm:text-sm text-[#FAF6EE] mt-1 font-light leading-relaxed">
                Ostwal Point B-Wing Office No- 105, Kanakia Road, Mira Road (East), Mumbai, Maharashtra 401107, India.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#D4AF37]/15 text-xs font-mono">
              <div>
                <span className="text-[9px] text-[#D9D2C5]/50 block uppercase">PRINCIPAL ADVISOR</span>
                <span className="text-[#D4AF37] font-bold">Mohd. Khan:</span> +91 8779535993
              </div>

              <div>
                <span className="text-[9px] text-[#D9D2C5]/50 block uppercase">SENIOR ASSOCIATE</span>
                <span className="text-[#D4AF37] font-bold">A.M. Khan:</span> +91 9987415038
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0B08] font-mono text-xs uppercase font-bold tracking-[0.2em]"
            >
              CHAT ON WHATSAPP (+91 9967136161)
            </a>

            <a
              href="https://share.google/QXNMZ1I6IQFyh061M"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#D4AF37]/40 text-[#F5E6C8] font-mono text-xs uppercase tracking-[0.2em]"
            >
              GOOGLE MAPS LOCATION ↗
            </a>
          </div>
        </div>

        <div className="pt-16 border-t border-[#D4AF37]/15 mt-16 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-[#D9D2C5]/50 gap-4">
          <span>© {new Date().getFullYear()} K.B. ROYAL REAL ESTATE AND INVESTOR'S CLINIC</span>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/k.b_realestate_" target="_blank" rel="noreferrer" className="text-[#D4AF37] hover:underline">
              @K.B_REALESTATE_ ↗
            </a>
            <span>•</span>
            <a href="https://www.instagram.com/kbroyal_mumbai" target="_blank" rel="noreferrer" className="text-[#D4AF37] hover:underline">
              @KBROYAL_MUMBAI ↗
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};
