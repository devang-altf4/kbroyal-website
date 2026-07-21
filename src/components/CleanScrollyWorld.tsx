import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, ArrowRight, ShieldCheck, MapPin, Building2, TrendingUp, Globe2, Award, ArrowUpRight, MessageSquare, BedDouble, Maximize2 } from 'lucide-react';
import { InvestmentCalculator } from './InvestmentCalculator';

interface CleanScrollyProps {
  onOpenConsultation: (propertyTitle?: string) => void;
}

export const CleanScrollyWorld: React.FC<CleanScrollyProps> = ({ onOpenConsultation }) => {
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
    <div className="relative z-10 space-y-24 sm:space-y-32 pt-28 pb-20">
      
      {/* =========================================================
          SECTION 1: HERO ENTRANCE (Clean & Spaced)
         ========================================================= */}
      <section id="hero" className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 backdrop-blur-md mb-6"
        >
          <Crown className="w-4 h-4 text-gold-400 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-gold-300">
            K.B. Royal Real Estate & Investors Clinic
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
        >
          ELEVATING <br />
          <span className="gold-gradient-text drop-shadow-2xl">REAL ESTATE WEALTH</span> <br />
          IN MUMBAI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 text-sm sm:text-lg max-w-2xl mt-6 font-light leading-relaxed"
        >
          Bespoke investment advisory, high-yield commercial assets, luxury duplex penthouses, and global NRI wealth management at <strong className="text-gold-300 font-medium">Kanakia Ostwal Point, Mira Road East, Mumbai</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => onOpenConsultation()}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 text-obsidian-950 font-bold text-sm tracking-wider uppercase flex items-center gap-3 shadow-xl shadow-gold-500/30 hover:scale-105 transition-all"
          >
            <span>Book Clinic Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/919820088888?text=Hi%20KB%20Royal,%20I%20would%20like%20to%20inquire%20about%20real%20estate%20investment."
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wider uppercase flex items-center gap-2 shadow-xl"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Instant WhatsApp Chat</span>
          </a>
        </motion.div>

        {/* Location Tag */}
        <div className="mt-8 flex items-center gap-2 text-xs text-gray-400">
          <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
          <span>Shop 9, Kanakia Ostwal Point, Kanakia Road, Mira Road East, Mumbai - 401107</span>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: INSTITUTIONAL TRACK RECORD & STATS
         ========================================================= */}
      <section className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-widest font-bold text-gold-400">
            Institutional Authority
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold gold-gradient-text mt-2">
            Track Record of Excellence
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Portfolio Managed', val: '₹500Cr+', sub: 'High-Yield Assets', icon: Building2 },
            { label: 'Satisfied Investors', val: '1,200+', sub: 'HNIs & Global NRIs', icon: Award },
            { label: 'Prime Locations', val: 'Mira Rd / BKC / Thane', sub: 'Mumbai Corridors', icon: MapPin },
            { label: 'Years Experience', val: '15+ Yrs', sub: 'Zero Legal Risk Guarantee', icon: ShieldCheck },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel p-8 rounded-3xl border border-gold-500/20 glass-panel-hover flex flex-col items-start text-left shadow-2xl"
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
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          SECTION 3: PRIME PROPERTY SHOWCASE
         ========================================================= */}
      <section id="properties" className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div className="text-left">
            <span className="text-xs uppercase tracking-widest font-bold text-gold-400">
              Curated Portfolio
            </span>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold gold-gradient-text mt-1">
              Prime Property Showcase
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-obsidian-950 rounded-2xl border border-gray-800">
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
                    ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProps.map((prop, idx) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-3xl overflow-hidden border border-gold-500/20 glass-panel-hover flex flex-col justify-between group text-left"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 border border-gold-500/40 text-[10px] uppercase font-bold text-gold-300">
                  {prop.tag}
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold-500 text-obsidian-950 text-[10px] font-mono font-bold">
                  {prop.roi}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-base font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-2">
                    {prop.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span className="truncate">{prop.location}</span>
                  </p>

                  <div className="flex items-center gap-4 mt-4 text-xs text-gray-300 border-y border-gray-800/80 py-3">
                    {prop.bhk && (
                      <div className="flex items-center gap-1.5">
                        <BedDouble className="w-4 h-4 text-gold-400" />
                        <span>{prop.bhk}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-4 h-4 text-gold-400" />
                      <span>{prop.sqft}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between pt-2">
                  <div>
                    <span className="text-[10px] uppercase text-gray-400 font-semibold">Listing Value</span>
                    <div className="font-mono text-lg font-bold text-gold-300">{prop.price}</div>
                  </div>
                  <button
                    onClick={() => onOpenConsultation(prop.title)}
                    className="px-4 py-2.5 rounded-xl bg-gold-500/10 hover:bg-gold-500 text-gold-400 hover:text-obsidian-950 font-bold text-xs flex items-center gap-1.5 transition-all border border-gold-500/30"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SECTION 4: REAL ESTATE INVESTORS CLINIC ROI ENGINE
         ========================================================= */}
      <section id="calculator" className="max-w-6xl mx-auto px-4">
        <InvestmentCalculator onOpenConsultation={() => onOpenConsultation('Real Estate Investors Clinic Strategy')} />
      </section>

      {/* =========================================================
          SECTION 5: ADVISORY SERVICES SPECTRUM
         ========================================================= */}
      <section id="services" className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-widest font-bold text-gold-400">
            360° Real Estate Spectrum
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold gold-gradient-text mt-2">
            Bespoke Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Building2,
              title: 'Luxury Residential Sales',
              desc: 'Exclusive 1, 2, 3 & 4 BHK luxury penthouses and duplexes in Mira Road East, Kanakia, Thane & Worli.',
              tag: 'Residential Spectrum',
            },
            {
              icon: TrendingUp,
              title: 'Commercial Real Estate Hubs',
              desc: 'High-yield office spaces, retail showrooms, pre-leased bank branches with 7% to 9% rental yields.',
              tag: 'Commercial Portfolio',
            },
            {
              icon: Globe2,
              title: 'NRI Wealth Advisory Desk',
              desc: 'End-to-end remote concierge for overseas Indian investors — virtual site walkthroughs, POA legal compliance.',
              tag: 'Global Indian Desk',
            },
          ].map((serv, idx) => {
            const Icon = serv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-3xl border border-gold-500/20 glass-panel-hover text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] uppercase font-mono font-bold px-3 py-1 rounded-full bg-gold-500/10 text-gold-300">
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
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          SECTION 6: GLOBAL NRI WEALTH CONCIERGE
         ========================================================= */}
      <section id="nri" className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="glass-panel rounded-3xl p-8 sm:p-12 border border-gold-500/30 bg-gradient-to-br from-[#101018] via-obsidian-950 to-[#12121e] shadow-2xl text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-gold-400">
                NRI Investment Desk
              </span>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold gold-gradient-text">
                Global Indian Property Concierge
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Remote property acquisition with live 4K virtual tours, Power of Attorney legal guidance, RBI FEMA compliance, and guaranteed tenant management.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultation('NRI Virtual Video Tour')}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-gold-500/20"
                >
                  <span>Schedule 4K Virtual Walkthrough</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="md:col-span-5 relative h-64 rounded-2xl overflow-hidden border border-gold-500/30">
              <img
                src="/images/nri_lounge.png"
                alt="NRI Executive Lounge"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-bold text-gold-300">
                24/7 Global NRI Concierge Desk
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          SECTION 7: CLINIC OFFICE LOCATION & CONTACT
         ========================================================= */}
      <section id="contact" className="max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-gold-500/40 bg-gradient-to-b from-[#12121a] to-[#0a0a0f] shadow-2xl"
        >
          <Crown className="w-12 h-12 text-gold-400 mx-auto mb-4 animate-pulse" />

          <span className="text-xs uppercase tracking-widest font-bold text-gold-400">
            Visit Our Clinic Office
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
            <a href="https://www.instagram.com/kbroyal_mumbai" target="_blank" rel="noreferrer" className="text-gold-400 hover:underline">
              @kbroyal_mumbai
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
};
