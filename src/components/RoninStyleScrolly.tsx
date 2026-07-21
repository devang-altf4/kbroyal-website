import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface RoninProps {
  onOpenConsultation: (title?: string) => void;
}

export const RoninStyleScrolly: React.FC<RoninProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'commercial' | 'plots'>('all');

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Hero Animations (0% -> 25% Scroll)
  const heroVideoScale = useTransform(smoothProgress, [0, 0.25], [1.0, 1.25]);
  const heroVideoOpacity = useTransform(smoothProgress, [0, 0.2], [0.45, 0.15]);
  const heroTextY = useTransform(smoothProgress, [0, 0.25], [0, -150]);
  const heroTextScale = useTransform(smoothProgress, [0, 0.25], [1, 0.9]);
  const marqueeX = useTransform(smoothProgress, [0, 1], ['0%', '-50%']);

  // Section 2 Parallax
  const manifestoY = useTransform(smoothProgress, [0.15, 0.4], [100, 0]);
  const manifestoOpacity = useTransform(smoothProgress, [0.15, 0.3], [0, 1]);

  const whatsappNumber = '919967136161';
  const getWhatsappUrl = (msg?: string) => {
    const text = encodeURIComponent(msg || 'Hello K.B. Royal Team, I would like to inquire about real estate opportunities in Mumbai.');
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  const properties = [
    {
      id: 'p1',
      category: 'residential',
      type: '1 RK / Studio Apartment',
      price: '₹35 Lakhs – ₹45 Lakhs',
      yield: 'High Demand Rental',
      tag: 'Starter Asset',
      location: 'Kanakia Corridor, Mira Road East',
      desc: 'Compact ultra-modern living spaces designed for smart rental yields and high liquidity.',
      image: '/images/penthouse.png',
      specs: ['350 - 420 Sq.Ft.', 'High-Rise Tower', 'MahaRERA Registered'],
    },
    {
      id: 'p2',
      category: 'residential',
      type: '1 BHK Premium Residence',
      price: '₹60 Lakhs – ₹75 Lakhs',
      yield: '6.2% Rental Yield',
      tag: 'Family Choice',
      location: 'Ostwal Point & Kanakia Road',
      desc: 'Thoughtfully planned 1 BHK homes with premium club amenities & rapid connectivity.',
      image: '/images/villa.png',
      specs: ['550 - 680 Sq.Ft.', 'Podium Parking', 'Sky Lounge Access'],
    },
    {
      id: 'p3',
      category: 'residential',
      type: '2 BHK Apartments & Duplex',
      price: '₹75 Lakhs – ₹1.30 Cr',
      yield: '8.4% Appreciation',
      tag: 'Prime Value',
      desc: 'Expansive 2 BHK layouts & duplex sanctuaries featuring panoramic Mumbai skyline views.',
      image: '/images/penthouse.png',
      specs: ['850 - 1150 Sq.Ft.', 'Duplex Balcony', 'Smart Home Fitted'],
    },
    {
      id: 'p4',
      category: 'residential',
      type: '3 BHK Sea-Facing Penthouse',
      price: '₹1 Cr – ₹1.85 Cr',
      yield: 'Crown Jewel Asset',
      tag: 'Ultra-Luxury',
      desc: 'Exclusive high-floor penthouse suites with private decks, jacuzzis & bespoke interior finishes.',
      image: '/images/penthouse.png',
      specs: ['1400 - 1950 Sq.Ft.', 'Private Deck', 'VIP Parking Bay'],
    },
    {
      id: 'p5',
      category: 'commercial',
      type: 'Pre-Leased Shops & Showrooms',
      price: '₹75 Lakhs – ₹2 Cr',
      yield: '9.5% Commercial Yield',
      tag: 'High Cashflow',
      desc: 'Ground level prime retail shops situated inside high-footfall commercial plazas.',
      image: '/images/commercial.png',
      specs: ['High Footfall Plaza', 'Immediate Rental Income', 'Long-term Lease'],
    },
    {
      id: 'p6',
      category: 'plots',
      type: 'Freehold Plots & Bunglow Estates',
      price: 'Bespoke Valuation',
      yield: '14.2% Land Growth',
      tag: 'Land Sovereignty',
      desc: 'Clear legal title freehold land parcels and standalone luxury bungalow properties.',
      image: '/images/villa.png',
      specs: ['100% Clear Title', 'Independent Gated', 'High Capital Growth'],
    },
  ];

  const filteredProperties = activeTab === 'all'
    ? properties
    : properties.filter(p => p.category === activeTab);

  return (
    <div ref={containerRef} className="relative bg-[#0D0B08] text-[#F5E6C8] font-sans selection:bg-[#D4AF37] selection:text-[#0D0B08] overflow-hidden">
      
      {/* FIXED TOP SCROLL PROGRESS BAR (TVS RONIN STYLE) */}
      <motion.div
        style={{ scaleX: smoothProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#F5E6C8] origin-left z-50 shadow-[0_0_15px_rgba(212,175,55,0.8)]"
      />

      {/* FIXED FULL-BLEED ANIMATED BACKGROUND VIDEO ENGINE */}
      <motion.div style={{ scale: heroVideoScale }} className="fixed inset-0 z-0 pointer-events-none">
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          style={{ opacity: heroVideoOpacity }}
          className="w-full h-full object-cover contrast-[1.25]"
        >
          <source src="/videos/hero_loop.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B08] via-[#0D0B08]/70 to-[#0D0B08]/90" />
      </motion.div>

      {/* GIANT SCROLLING MARQUEE TYPOGRAPHY (TVS RONIN AD STYLE) */}
      <div className="fixed top-1/3 left-0 w-[200vw] pointer-events-none z-0 opacity-[0.06] select-none whitespace-nowrap overflow-hidden">
        <motion.h1 style={{ x: marqueeX }} className="font-serif-editorial text-[18vw] font-black uppercase text-[#D4AF37]">
          K.B. ROYAL • INVESTOR'S CLINIC • MAHARERA A51700016531 • REAL ESTATE MUMBAI •
        </motion.h1>
      </div>

      {/* SECTION 1: HERO SCROLL PINNED SCREEN */}
      <section className="relative min-h-[100svh] w-full flex flex-col justify-center items-center px-4 sm:px-12 text-center z-10">
        <motion.div style={{ y: heroTextY, scale: heroTextScale }} className="max-w-4xl mx-auto space-y-6 pt-16 my-auto">
          
          {/* RERA BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#16120D]/90 border border-[#D4AF37]/40 shadow-2xl backdrop-blur-xl"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
              MAHARERA REG: A51700016531
            </span>
          </motion.div>

          {/* MAIN UNSTOPPABLE HERO TYPOGRAPHY */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif-editorial text-4xl sm:text-7xl lg:text-8xl font-light text-[#FAF6EE] leading-none tracking-tight"
          >
            K.B. ROYAL <br />
            <span className="gold-text-gradient font-normal italic drop-shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
              REAL ESTATE & INVESTOR'S CLINIC
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xs sm:text-base text-[#D9D2C5]/85 font-light leading-relaxed max-w-2xl mx-auto px-4"
          >
            Flats, Bunglows, Shops, Plots, L.L. Basis, Rent & Selling across Kanakia Road, Ostwal Point, Mira Road East & Mumbai.
          </motion.p>

          {/* ACTION BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 px-4"
          >
            <a
              href={getWhatsappUrl('Hello K.B. Royal, I want to book a private consultation.')}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#AA7C11] text-[#0D0B08] font-mono text-xs uppercase font-extrabold tracking-[0.2em] shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:scale-105 transition-all text-center"
            >
              ⚡ WHATSAPP DIRECT CONSULTATION
            </a>

            <button
              onClick={() => onOpenConsultation('General Property Inquiry')}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#D4AF37]/50 bg-[#16120D]/90 hover:border-[#D4AF37] text-[#F5E6C8] font-mono text-xs uppercase tracking-[0.2em] backdrop-blur-xl transition-all"
            >
              EXPLORE PRICING SPECTRUM ↓
            </button>
          </motion.div>

        </motion.div>

        {/* SCROLL DOWN INDICATOR */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#D4AF37]/70 font-mono text-[10px] tracking-widest uppercase"
        >
          <span>SCROLL TO UNLOCK EXPERIENCE</span>
          <div className="w-5 h-8 rounded-full border border-[#D4AF37]/40 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-[#D4AF37] animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: TVS RONIN MANIFESTO & NUMERICAL COUNTER (STICKY PINNED FEEL) */}
      <motion.section style={{ y: manifestoY, opacity: manifestoOpacity }} className="relative z-10 py-32 px-4 sm:px-12 max-w-[1440px] mx-auto">
        <div className="glass-gold-card p-8 sm:p-16 rounded-3xl space-y-10 border border-[#D4AF37]/35 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
          
          <div className="flex justify-between items-center border-b border-[#D4AF37]/20 pb-6">
            <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#D4AF37] font-bold">
              SECTION 01 // MANIFESTO & TRUST
            </span>
            <span className="text-[10px] font-mono text-[#D9D2C5]/50 tracking-widest uppercase hidden sm:inline">
              MUMBAI REAL ESTATE CLINIC
            </span>
          </div>

          <h2 className="font-serif-editorial text-3xl sm:text-6xl text-[#FAF6EE] font-light leading-snug">
            "Engineering Real Estate Wealth <br />
            <span className="gold-text-gradient font-normal italic">With 100% Title Transparency."</span>
          </h2>

          <p className="text-xs sm:text-base text-[#D9D2C5]/80 font-light leading-relaxed max-w-3xl">
            Operating out of Ostwal Point B-Wing Office No- 105, Kanakia Road, Mira Road (East), K.B. ROYAL REAL ESTATE AND INVESTOR'S CLINIC provides structured financial advisory, pre-leased commercial yields, and residential property acquisitions tailored for Indian HNIs and global NRIs.
          </p>

          {/* NUMERICAL METRIC COUNTERS (TVS RONIN SPEC STYLE) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4">
            <div className="bg-[#0D0B08]/90 p-5 sm:p-6 rounded-2xl border border-[#D4AF37]/20">
              <span className="text-[9px] font-mono text-[#D9D2C5]/60 uppercase tracking-widest block mb-1">TRACK RECORD</span>
              <div className="font-serif-editorial text-2xl sm:text-4xl text-[#D4AF37] font-bold">15+ Yrs</div>
              <span className="text-[10px] text-[#D9D2C5]/60 mt-1 block">Market Leadership</span>
            </div>

            <div className="bg-[#0D0B08]/90 p-5 sm:p-6 rounded-2xl border border-[#D4AF37]/20">
              <span className="text-[9px] font-mono text-[#D9D2C5]/60 uppercase tracking-widest block mb-1">RERA STATUS</span>
              <div className="font-serif-editorial text-2xl sm:text-4xl text-[#FAF6EE] font-bold">100%</div>
              <span className="text-[10px] text-[#D4AF37] mt-1 block font-mono">Reg: A51700016531</span>
            </div>

            <div className="bg-[#0D0B08]/90 p-5 sm:p-6 rounded-2xl border border-[#D4AF37]/20">
              <span className="text-[9px] font-mono text-[#D9D2C5]/60 uppercase tracking-widest block mb-1">ESTIMATED YIELD</span>
              <div className="font-serif-editorial text-2xl sm:text-4xl text-[#D4AF37] font-bold">14.2%</div>
              <span className="text-[10px] text-[#D9D2C5]/60 mt-1 block">Pre-Leased Commercial</span>
            </div>

            <div className="bg-[#0D0B08]/90 p-5 sm:p-6 rounded-2xl border border-[#D4AF37]/20">
              <span className="text-[9px] font-mono text-[#D9D2C5]/60 uppercase tracking-widest block mb-1">ENTRY PRICE</span>
              <div className="font-serif-editorial text-2xl sm:text-4xl text-[#FAF6EE] font-bold">₹35L+</div>
              <span className="text-[10px] text-[#D9D2C5]/60 mt-1 block">1 RK to 3 BHK Penthouses</span>
            </div>
          </div>

        </div>
      </motion.section>

      {/* SECTION 3: PRICING SPECTRUM & FEATURE CARDS (TVS RONIN SPECification GRID) */}
      <section className="relative z-10 py-24 px-4 sm:px-12 max-w-[1440px] mx-auto text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D4AF37]/20 pb-6 mb-12">
          <div>
            <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-[#D4AF37] font-bold">
              SECTION 02 // PORTFOLIO SPECTRUM
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-light text-[#FAF6EE] mt-1">
              Curated Pricing & Properties
            </h2>
          </div>

          {/* FILTER TABS */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#16120D] rounded-full border border-[#D4AF37]/25">
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
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0B08] shadow-xl scale-105'
                    : 'text-[#D9D2C5]/60 hover:text-[#F5E6C8]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* INTERACTIVE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop, idx) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="glass-gold-card p-6 rounded-3xl space-y-5 border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#D4AF37]/20">
                  <img
                    src={prop.image}
                    alt={prop.type}
                    className="w-full h-full object-cover brightness-[0.8] group-hover:scale-110 transition-transform duration-1000"
                  />
                  <span className="absolute top-3 left-3 text-[9px] font-mono bg-[#0D0B08]/90 text-[#D4AF37] px-3 py-1 rounded-full border border-[#D4AF37]/30 uppercase font-bold">
                    {prop.tag}
                  </span>
                  <span className="absolute bottom-3 right-3 text-[9px] font-mono bg-[#D4AF37] text-[#0D0B08] px-3 py-1 rounded-full font-bold uppercase">
                    {prop.yield}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif-editorial text-2xl text-[#FAF6EE] font-light">
                    {prop.type}
                  </h3>
                  <div className="font-mono text-xl font-bold text-[#D4AF37] mt-1">
                    {prop.price}
                  </div>
                  <span className="text-[10px] font-mono text-[#D9D2C5]/60 uppercase tracking-wider block mt-1">
                    📍 {prop.location}
                  </span>
                  <p className="text-xs text-[#D9D2C5]/75 font-light mt-3 leading-relaxed">
                    {prop.desc}
                  </p>
                </div>

                {/* SPEC BULLETS */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {prop.specs.map((spec, i) => (
                    <span key={i} className="text-[9px] font-mono bg-[#0D0B08]/80 text-[#D9D2C5]/70 px-2.5 py-1 rounded-md border border-[#D4AF37]/15">
                      ✓ {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#D4AF37]/15">
                <a
                  href={getWhatsappUrl(`Hi K.B. Royal, I am inquiring about ${prop.type} priced at ${prop.price}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center py-3.5 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0B08] font-mono text-[10px] font-extrabold uppercase tracking-widest shadow-lg hover:scale-[1.02] transition-all"
                >
                  INQUIRE ON WHATSAPP →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: LOCATION & CONTACT HQ (TVS RONIN CONTACT CARD) */}
      <footer id="contact" className="relative z-10 py-28 px-4 sm:px-12 max-w-[1440px] mx-auto text-center border-t border-[#D4AF37]/25">
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#D4AF37] font-bold">
            SECTION 03 // CLINIC HEADQUARTERS & DIRECT ACCESS
          </span>

          <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#FAF6EE]">
            K.B. ROYAL INVESTOR'S CLINIC
          </h2>

          <div className="glass-gold-card p-8 sm:p-10 rounded-3xl text-left space-y-6 border border-[#D4AF37]/35 shadow-2xl">
            <div>
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block mb-1">HEADQUARTERS ADDRESS</span>
              <p className="text-sm sm:text-base text-[#FAF6EE] font-light leading-relaxed">
                Ostwal Point B-Wing Office No- 105, Kanakia Road, Mira Road (East), Mumbai, Maharashtra 401107, India.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#D4AF37]/20 font-mono text-xs">
              <div>
                <span className="text-[9px] text-[#D9D2C5]/50 block uppercase">PRINCIPAL ADVISOR</span>
                <span className="text-[#D4AF37] font-bold">Mohd. Khan</span>
                <div className="text-[#FAF6EE] mt-0.5">+91 8779535993</div>
              </div>

              <div>
                <span className="text-[9px] text-[#D9D2C5]/50 block uppercase">SENIOR ASSOCIATE</span>
                <span className="text-[#D4AF37] font-bold">A.M. Khan</span>
                <div className="text-[#FAF6EE] mt-0.5">+91 9987415038</div>
              </div>

              <div>
                <span className="text-[9px] text-[#D9D2C5]/50 block uppercase">WHATSAPP CLINIC</span>
                <span className="text-[#D4AF37] font-bold">Direct Desk</span>
                <div className="text-[#FAF6EE] mt-0.5">+91 9967136161</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-9 py-4.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#AA7C11] text-[#0D0B08] font-mono text-xs uppercase font-extrabold tracking-[0.2em] shadow-2xl hover:scale-105 transition-all"
            >
              CHAT ON WHATSAPP (+91 9967136161)
            </a>

            <a
              href="https://share.google/QXNMZ1I6IQFyh061M"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-9 py-4.5 rounded-full border border-[#D4AF37]/50 bg-[#16120D]/90 text-[#F5E6C8] font-mono text-xs uppercase tracking-[0.2em] hover:border-[#D4AF37] transition-all"
            >
              GOOGLE MAPS LOCATION ↗
            </a>
          </div>
        </div>

        {/* FOOTER BOTTOM METADATA */}
        <div className="pt-20 border-t border-[#D4AF37]/15 mt-20 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-[#D9D2C5]/50 gap-4">
          <span>© {new Date().getFullYear()} K.B. ROYAL REAL ESTATE AND INVESTOR'S CLINIC • MAHARERA: A51700016531</span>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/k.b_realestate_" target="_blank" rel="noreferrer" className="text-[#D4AF37] hover:underline">
              INSTAGRAM: @K.B_REALESTATE_ ↗
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
