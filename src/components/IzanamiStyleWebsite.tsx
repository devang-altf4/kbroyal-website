import React, { useState } from 'react';
import { Crown, ArrowRight, ShieldCheck, MapPin, Building2, TrendingUp, Globe2, Award, ArrowUpRight, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';
import { InvestmentCalculator } from './InvestmentCalculator';

interface IzanamiWebsiteProps {
  onOpenConsultation: (propertyTitle?: string) => void;
}

export const IzanamiStyleWebsite: React.FC<IzanamiWebsiteProps> = ({ onOpenConsultation }) => {
  const [propertyFilter, setPropertyFilter] = useState<'all' | 'residential' | 'commercial' | 'villas' | 'resale'>('all');

  const properties = [
    {
      id: 'p1',
      title: 'Royal Sea-Facing Duplex Penthouse',
      category: 'residential',
      location: 'Kanakia Road, Mira Road East, Mumbai',
      price: '₹3.45 Cr',
      roi: '14.5% Est. YoY ROI',
      bhk: '4 BHK Duplex',
      sqft: '2,450 Sq.Ft.',
      image: '/images/penthouse.png',
      tag: 'Luxury Duplex',
    },
    {
      id: 'p2',
      title: 'BKC Corporate High-Yield Hub',
      category: 'commercial',
      location: 'Bandra Kurla Complex (BKC), Mumbai',
      price: '₹8.75 Cr',
      roi: '8.5% Pre-leased Yield',
      sqft: '3,800 Sq.Ft.',
      image: '/images/commercial.png',
      tag: 'Pre-Leased Commercial',
    },
    {
      id: 'p3',
      title: 'The Sovereign Estate Luxury Villa',
      category: 'villas',
      location: 'Western Express Highway Corridor',
      price: '₹6.20 Cr',
      roi: '18.0% Capital Growth',
      bhk: '5 BHK Villa',
      sqft: '4,200 Sq.Ft.',
      image: '/images/villa.png',
      tag: 'Gated Estate',
    },
    {
      id: 'p4',
      title: 'Kanakia Ostwal Point Showroom',
      category: 'commercial',
      location: 'Kanakia Ostwal Point Commercial Plaza',
      price: '₹2.10 Cr',
      roi: '9.2% Pre-leased Yield',
      sqft: '1,250 Sq.Ft.',
      image: '/images/investors_clinic.png',
      tag: 'Retail Hub',
    },
    {
      id: 'p5',
      title: 'Beverly Park Luxury Sea View Apartment',
      category: 'resale',
      location: 'Beverly Park, Mira Road East',
      price: '₹1.85 Cr',
      roi: '12% Value Growth',
      bhk: '3 BHK Luxury',
      sqft: '1,650 Sq.Ft.',
      image: '/images/nri_lounge.png',
      tag: 'Exclusive Resale',
    },
    {
      id: 'p6',
      title: 'Ostwal Heights Sky Villa Penthouse',
      category: 'residential',
      location: 'Mira-Bhayandar Link Road, Mumbai',
      price: '₹4.10 Cr',
      roi: '15% Est. ROI',
      bhk: '4 BHK Sky Villa',
      sqft: '2,900 Sq.Ft.',
      image: '/images/penthouse.png',
      tag: 'Sky Duplex',
    },
  ];

  const filteredProps = propertyFilter === 'all'
    ? properties
    : properties.filter(p => p.category === propertyFilter);

  return (
    <div className="relative bg-[#08070b] text-[#d9d7d4] font-sans pt-24 pb-12 selection:bg-gold-500 selection:text-obsidian-950">
      
      {/* Container holding the Izanami Sticky Section Stack */}
      <div className="relative space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================
            CARD 01: HERO LANDING DECK (Sticky Top 80px)
           ========================================================= */}
        <div className="sticky top-20 z-10 bg-[#0c0a0f] border border-gold-500/20 rounded-3xl p-8 sm:p-14 shadow-2xl overflow-hidden min-h-[80vh] flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-[11px] font-bold uppercase tracking-widest text-gold-400">
              <Crown className="w-3.5 h-3.5" />
              <span>K.B. ROYAL REAL ESTATE & INVESTORS CLINIC</span>
            </div>
            <span className="font-mono text-xs font-bold text-gray-500">CARD 01 / 06</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-8 text-left">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-[0.05em] leading-tight">
                ELEVATING <br />
                <span className="gold-gradient-text font-bold">REAL ESTATE WEALTH</span> <br />
                IN MUMBAI
              </h1>
              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed max-w-xl">
                Bespoke real estate investment advisory, pre-leased commercial hubs, luxury duplex penthouses, and global NRI wealth management at <strong className="text-gold-300 font-medium">Kanakia Ostwal Point, Mira Road East, Mumbai</strong>.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenConsultation()}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-obsidian-950 font-bold text-xs uppercase tracking-widest flex items-center gap-3 shadow-xl shadow-gold-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Book Clinic Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl group">
              <img
                src="/images/penthouse.png"
                alt="Penthouse"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a0f] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-gold-300 font-mono font-bold flex items-center justify-between">
                <span>MIRA ROAD EAST, MUMBAI</span>
                <span>4 BHK DUPLEX</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-800/60 pt-4">
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Shop 9, Kanakia Ostwal Point, Kanakia Road, Mira Road East</span>
            </span>
            <span className="hidden sm:inline font-mono">SCROLL DOWN TO REVEAL DECK STACK ↓</span>
          </div>
        </div>

        {/* =========================================================
            CARD 02: AUTHORITY METRICS DECK (Sticky Top 110px)
           ========================================================= */}
        <div className="sticky top-28 z-20 bg-[#100d14] border border-gold-500/25 rounded-3xl p-8 sm:p-14 shadow-2xl min-h-[75vh] flex flex-col justify-between">
          <div className="flex justify-between items-start text-left">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-gold-400">Institutional Authority</span>
              <h2 className="font-cinzel text-3xl sm:text-5xl font-light text-white tracking-[0.05em] mt-1">
                Track Record of Excellence
              </h2>
            </div>
            <span className="font-mono text-xs font-bold text-gray-500">CARD 02 / 06</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
            {[
              { label: 'Portfolio Managed', val: '₹500Cr+', sub: 'High-Yield Assets', icon: Building2 },
              { label: 'Satisfied Investors', val: '1,200+', sub: 'HNIs & Global NRIs', icon: Award },
              { label: 'Prime Locations', val: 'Mira Rd / BKC / Thane', sub: 'Mumbai Corridors', icon: MapPin },
              { label: 'Track Record', val: '15+ Yrs', sub: 'Zero Legal Risk Guarantee', icon: ShieldCheck },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-[#14101a] p-8 rounded-2xl border border-gold-500/20 text-left flex flex-col justify-between shadow-xl"
                >
                  <div className="p-3 rounded-xl bg-gold-500/10 text-gold-400 w-fit mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-cinzel text-3xl sm:text-4xl font-bold gold-gradient-text">
                      {stat.val}
                    </div>
                    <div className="text-sm font-bold text-white mt-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      {stat.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-xs text-gray-500 text-left">
            Institutional property management backed by 15+ years of verified Mumbai market advisory.
          </div>
        </div>

        {/* =========================================================
            CARD 03: PRIME PROPERTY SHOWCASE DECK (Sticky Top 140px)
           ========================================================= */}
        <div className="sticky top-36 z-30 bg-[#0e0b12] border border-gold-500/30 rounded-3xl p-8 sm:p-14 shadow-2xl min-h-[85vh] flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between text-left gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-gold-400">Curated Real Estate</span>
              <h2 className="font-cinzel text-3xl sm:text-5xl font-light text-white tracking-[0.05em] mt-1">
                Prime Property Deck
              </h2>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-gray-500">CARD 03 / 06</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#14101a] rounded-2xl border border-gray-800 my-4">
              {[
                { id: 'all', label: 'All' },
                { id: 'residential', label: 'Penthouses' },
                { id: 'commercial', label: 'Commercial' },
                { id: 'villas', label: 'Villas' },
                { id: 'resale', label: 'Resale' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setPropertyFilter(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    propertyFilter === tab.id
                      ? 'bg-gold-500 text-obsidian-950 shadow-md font-bold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            {filteredProps.map((prop) => (
              <div
                key={prop.id}
                className="bg-[#14101a] rounded-2xl overflow-hidden border border-gold-500/20 text-left flex flex-col justify-between group shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 border border-gold-500/30 text-[9px] uppercase font-bold text-gold-300">
                    {prop.tag}
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-gold-500 text-obsidian-950 text-[9px] font-mono font-bold">
                    {prop.roi}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-cinzel text-base font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-1">
                      {prop.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span className="truncate">{prop.location}</span>
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-gray-500">Value</span>
                      <div className="font-mono text-base font-bold text-gold-300">{prop.price}</div>
                    </div>
                    <button
                      onClick={() => onOpenConsultation(prop.title)}
                      className="px-4 py-2 rounded-xl bg-gold-500/10 hover:bg-gold-500 text-gold-400 hover:text-obsidian-950 font-bold text-xs flex items-center gap-1 transition-all border border-gold-500/30"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-xs text-gray-500 text-left">
            Showing verified listings with clear RERA title verification.
          </div>
        </div>

        {/* =========================================================
            CARD 04: REAL ESTATE INVESTORS CLINIC ROI ENGINE (Sticky Top 170px)
           ========================================================= */}
        <div className="sticky top-44 z-40 bg-[#0c0910] border border-gold-500/30 rounded-3xl p-8 sm:p-14 shadow-2xl min-h-[85vh] flex flex-col justify-between">
          <div className="flex justify-between items-start text-left mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-gold-400">Wealth Engine</span>
              <h2 className="font-cinzel text-3xl sm:text-5xl font-light text-white tracking-[0.05em] mt-1">
                Investors Clinic Financial Yield
              </h2>
            </div>
            <span className="font-mono text-xs font-bold text-gray-500">CARD 04 / 06</span>
          </div>

          <InvestmentCalculator onOpenConsultation={() => onOpenConsultation('Real Estate Investors Clinic ROI Strategy')} />
        </div>

        {/* =========================================================
            CARD 05: ADVISORY SPECTRUM & GLOBAL NRI DESK (Sticky Top 200px)
           ========================================================= */}
        <div className="sticky top-52 z-50 bg-[#120d18] border border-gold-500/30 rounded-3xl p-8 sm:p-14 shadow-2xl min-h-[80vh] flex flex-col justify-between text-left">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-gold-400">Global Concierge</span>
              <h2 className="font-cinzel text-3xl sm:text-5xl font-light text-white tracking-[0.05em] mt-1">
                NRI & Advisory Spectrum
              </h2>
            </div>
            <span className="font-mono text-xs font-bold text-gray-500">CARD 05 / 06</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
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
                desc: 'Pre-leased corporate offices & retail spaces with 7% to 9% rental yields.',
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
                  className="bg-[#181220] p-8 rounded-2xl border border-gold-500/20 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-mono font-bold px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-300">
                      {serv.tag}
                    </span>
                    <h3 className="font-cinzel text-xl font-bold text-white mt-4 mb-2">
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

          <div className="text-xs text-gray-400 flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-gold-400" />
            <span>Serving high-net-worth investors in Dubai, London, New York, Singapore & GCC.</span>
          </div>
        </div>

        {/* =========================================================
            CARD 06: OFFICE LOCATION & LIVE FOOTER (Sticky Top 230px)
           ========================================================= */}
        <div className="sticky top-60 z-[60] bg-[#0c0910] border border-gold-500/40 rounded-3xl p-8 sm:p-14 shadow-2xl min-h-[75vh] flex flex-col justify-between text-center">
          <div className="flex justify-between items-start text-left">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-gold-400">Clinic Headquarters</span>
              <h2 className="font-cinzel text-3xl sm:text-5xl font-light text-white tracking-[0.05em] mt-1">
                K.B. ROYAL CLINIC OFFICE
              </h2>
            </div>
            <span className="font-mono text-xs font-bold text-gray-500">CARD 06 / 06</span>
          </div>

          <div className="my-8 max-w-2xl mx-auto space-y-6">
            <Crown className="w-12 h-12 text-gold-400 mx-auto animate-pulse" />
            <p className="text-base sm:text-lg text-gray-200 font-light leading-relaxed">
              Shop No. 9, Kanakia Ostwal Point, Kanakia Road, Mira Road East, Mumbai, Maharashtra 401107, India.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenConsultation('Priority Clinic Appointment')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-gold-500/25"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Priority Appointment</span>
              </button>

              <a
                href="https://wa.me/919820088888?text=Hi%20KB%20Royal,%20I%20would%20like%20to%20book%20a%20real%20estate%20consultation."
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-xl"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Chat</span>
              </a>

              <a
                href="https://share.google/QXNMZ1I6IQFyh061M"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full border border-gold-500/30 hover:bg-gold-500/10 text-gold-300 font-bold text-xs uppercase tracking-widest flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Google Maps Location</span>
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2">
            <span>© {new Date().getFullYear()} K.B. ROYAL REAL ESTATE AND INVESTORS CLINIC</span>
            <a href="https://www.instagram.com/kbroyal_mumbai" target="_blank" rel="noreferrer" className="text-gold-400 hover:underline flex items-center gap-1">
              <span>@kbroyal_mumbai</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
