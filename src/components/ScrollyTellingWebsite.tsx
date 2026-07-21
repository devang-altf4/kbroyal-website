import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VeoLoopBackground } from './VeoLoopBackground';
import { FounderSpotlight } from './FounderSpotlight';
import { InvestmentCalculator } from './InvestmentCalculator';

interface ScrollyProps {
  onOpenConsultation: (title?: string) => void;
}

export const ScrollyTellingWebsite: React.FC<ScrollyProps> = ({ onOpenConsultation }) => {
  const [propertyFilter, setPropertyFilter] = useState<'all' | 'residential' | 'commercial' | 'villas'>('all');

  const properties = [
    {
      id: 'p1',
      title: 'Royal Sea-Facing Duplex Penthouse',
      category: 'residential',
      location: 'Kanakia Road, Mira Road East, Mumbai',
      price: '₹3.45 Cr',
      roi: '14.5% Est. ROI',
      image: '/images/penthouse.png',
      tag: 'Luxury Duplex',
    },
    {
      id: 'p2',
      title: 'BKC Corporate High-Yield Hub',
      category: 'commercial',
      location: 'Bandra Kurla Complex (BKC), Mumbai',
      price: '₹8.75 Cr',
      roi: '8.5% Pre-Leased Yield',
      image: '/images/commercial.png',
      tag: 'Pre-Leased Hub',
    },
    {
      id: 'p3',
      title: 'The Sovereign Estate Luxury Villa',
      category: 'villas',
      location: 'Western Express Highway Corridor',
      price: '₹6.20 Cr',
      roi: '18.0% Capital Growth',
      image: '/images/villa.png',
      tag: 'Gated Villa',
    },
    {
      id: 'p4',
      title: 'Kanakia Ostwal Point Showroom',
      category: 'commercial',
      location: 'Kanakia Ostwal Point Commercial Plaza',
      price: '₹2.10 Cr',
      roi: '9.2% Pre-Leased Yield',
      image: '/images/office_storefront.png',
      tag: 'Retail Plaza',
    },
  ];

  const filteredProps = propertyFilter === 'all'
    ? properties
    : properties.filter(p => p.category === propertyFilter);

  return (
    <div className="relative bg-[#0a0801] text-[#d9d7d4] font-sans pt-20 pb-24 selection:bg-[#d9d7d4] selection:text-[#0a0801]">
      
      {/* Background Looping Veo Video Engine */}
      <VeoLoopBackground fallbackImage="/images/penthouse.png" />

      {/* SCENE 01: HERO LANDING */}
      <section className="relative min-h-[90svh] w-full flex flex-col justify-center items-center p-6 sm:p-16 text-center overflow-hidden z-10">
        <div className="relative z-10 max-w-3xl mx-auto space-y-6 my-auto">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] font-mono tracking-[0.3em] uppercase text-emerald-400 font-bold bg-black/60 px-4 py-1.5 rounded-full border border-emerald-500/30"
          >
            K.B. ROYAL REAL ESTATE & INVESTORS CLINIC
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif-editorial text-4xl sm:text-7xl text-white font-light leading-tight tracking-wide"
          >
            Elevating Real Estate Wealth <br />
            <span className="italic text-[#d9d7d4]/80">under Founder Mohammed Khan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xs sm:text-sm text-[#d9d7d4]/70 font-light leading-relaxed max-w-xl mx-auto"
          >
            Bespoke real estate portfolio advisory, pre-leased commercial hubs, and luxury penthouses at <strong className="text-white">Shop No. 9, Kanakia Ostwal Point, Mira Road East, Mumbai</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-4"
          >
            <button
              onClick={() => onOpenConsultation()}
              className="px-8 py-4 rounded-full bg-[#d9d7d4] text-[#0a0801] font-mono text-xs uppercase font-bold tracking-widest transition-all shadow-2xl"
            >
              BOOK PRIVATE CLINIC CONSULTATION →
            </button>
          </motion.div>
        </div>
      </section>

      {/* SCENE 02: FOUNDER MOHAMMED KHAN SPOTLIGHT */}
      <FounderSpotlight onOpenConsultation={() => onOpenConsultation('Founder Mohammed Khan Advisory')} />

      {/* SCENE 03: PHYSICAL CLINIC PREMISES */}
      <section className="py-24 px-6 sm:px-16 max-w-[1440px] mx-auto text-left relative z-10">
        <div className="border-b border-[#d9d7d4]/10 pb-6 mb-12 flex justify-between items-end">
          <div>
            <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-emerald-400 font-bold">
              SCENE 03 / CLINIC PREMISES
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl text-white font-light mt-1">
              Kanakia Ostwal Point Headquarters
            </h2>
          </div>

          <span className="font-mono text-xs text-[#d9d7d4]/40 uppercase tracking-widest hidden sm:inline">
            MIRA ROAD EAST • MUMBAI
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#14100b] p-4 rounded-2xl border border-[#d9d7d4]/20 space-y-3"
          >
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
              <img src="/images/office_storefront.png" alt="Storefront Premises" className="w-full h-full object-cover brightness-[0.85]" />
            </div>
            <div className="font-serif-editorial text-xl text-white font-light">
              Shop No. 9 Storefront Premises
            </div>
            <p className="text-xs text-[#d9d7d4]/60">
              Commercial Plaza, Kanakia Road, Mira Road East, Mumbai - 401107.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#14100b] p-4 rounded-2xl border border-[#d9d7d4]/20 space-y-3"
          >
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
              <img src="/images/office_interior.png" alt="Consultation Suite" className="w-full h-full object-cover brightness-[0.85]" />
            </div>
            <div className="font-serif-editorial text-xl text-white font-light">
              Private Consultation Lounge
            </div>
            <p className="text-xs text-[#d9d7d4]/60">
              High-net-worth investor advisory & legal title verification suites.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SCENE 04: PROPERTY PORTFOLIO SHOWCASE */}
      <section className="py-24 px-6 sm:px-16 max-w-[1440px] mx-auto text-left relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#d9d7d4]/10 pb-6 mb-12">
          <div>
            <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-emerald-400 font-bold">
              SCENE 04 / CURATED PORTFOLIO
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl text-white font-light mt-1">
              Prime Property Deck
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2 p-1 bg-[#16120b] rounded-xl border border-[#d9d7d4]/15">
            {[
              { id: 'all', label: 'All' },
              { id: 'residential', label: 'Penthouses' },
              { id: 'commercial', label: 'Commercial' },
              { id: 'villas', label: 'Villas' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setPropertyFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase font-bold transition-all ${
                  propertyFilter === tab.id
                    ? 'bg-[#d9d7d4] text-[#0a0801]'
                    : 'text-[#d9d7d4]/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProps.map((prop) => (
            <div key={prop.id} className="bg-[#14100b] p-4 rounded-2xl border border-[#d9d7d4]/15 space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <img src={prop.image} alt={prop.title} className="w-full h-full object-cover brightness-[0.8]" />
                <span className="absolute top-2 left-2 text-[9px] font-mono bg-black/80 px-2 py-0.5 text-[#d9d7d4] rounded">
                  {prop.tag}
                </span>
                <span className="absolute top-2 right-2 text-[9px] font-mono bg-[#d9d7d4] text-[#0a0801] px-2 py-0.5 rounded font-bold">
                  {prop.roi}
                </span>
              </div>

              <div>
                <h3 className="font-serif-editorial text-base text-white font-light truncate">
                  {prop.title}
                </h3>
                <div className="font-mono text-sm text-[#d9d7d4] font-bold mt-1">{prop.price}</div>
              </div>

              <button
                onClick={() => onOpenConsultation(prop.title)}
                className="w-full py-2.5 rounded-xl bg-[#d9d7d4]/10 hover:bg-[#d9d7d4] hover:text-[#0a0801] text-[#d9d7d4] text-[10px] font-mono font-bold uppercase transition-all"
              >
                INQUIRE PROPERTY →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SCENE 05: INVESTORS YIELD CALCULATOR */}
      <section className="py-24 px-6 sm:px-16 max-w-[1440px] mx-auto text-left relative z-10">
        <div className="border-b border-[#d9d7d4]/10 pb-6 mb-8">
          <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-emerald-400 font-bold">
            SCENE 05 / FINANCIAL YIELD
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-white font-light mt-1">
            Investors Clinic ROI Engine
          </h2>
        </div>

        <InvestmentCalculator onOpenConsultation={() => onOpenConsultation('ROI Strategy')} />
      </section>

      {/* SCENE 06: OFFICE LOCATION & FOOTER */}
      <footer id="contact" className="py-24 px-6 sm:px-16 max-w-[1440px] mx-auto text-center relative z-10 border-t border-[#d9d7d4]/10">
        <div className="max-w-xl mx-auto space-y-6">
          <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-emerald-400 font-bold">
            HEADQUARTERS LOCATION
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl text-white font-light">
            K.B. ROYAL CLINIC
          </h2>
          <p className="text-sm text-[#d9d7d4]/70 leading-relaxed font-light">
            Shop No. 9, Kanakia Ostwal Point, Kanakia Road, Mira Road East, Mumbai, Maharashtra 401107, India.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenConsultation('Priority Appointment')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#d9d7d4] text-[#0a0801] font-mono text-xs uppercase font-bold tracking-widest"
            >
              BOOK CLINIC APPOINTMENT →
            </button>

            <a
              href="https://share.google/QXNMZ1I6IQFyh061M"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#d9d7d4]/30 text-[#d9d7d4] font-mono text-xs uppercase tracking-widest"
            >
              GOOGLE MAPS DIRECTIONS ↗
            </a>
          </div>
        </div>

        <div className="pt-16 border-t border-[#d9d7d4]/10 mt-16 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-[#d9d7d4]/50 gap-2">
          <span>© {new Date().getFullYear()} K.B. ROYAL REAL ESTATE AND INVESTORS CLINIC</span>
          <a href="https://www.instagram.com/kbroyal_mumbai" target="_blank" rel="noreferrer" className="text-[#d9d7d4] hover:underline">
            INSTAGRAM: @KBROYAL_MUMBAI ↗
          </a>
        </div>
      </footer>

    </div>
  );
};
