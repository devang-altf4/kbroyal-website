import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, MapPin, Maximize2, BedDouble, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface Property {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'villas' | 'resale';
  location: string;
  price: string;
  roi: string;
  bhk?: string;
  sqft: string;
  image: string;
  verified: boolean;
}

interface GalleryProps {
  onSelectProperty: (propertyTitle: string) => void;
}

export const PropertyGallery: React.FC<GalleryProps> = ({ onSelectProperty }) => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'villas' | 'resale'>('all');

  const properties: Property[] = [
    {
      id: 'p1',
      title: 'Kanakia Ostwal Point Royal Sky Duplex',
      category: 'residential',
      location: 'Kanakia Road, Mira Road East, Mumbai',
      price: '₹3.45 Cr',
      roi: '14.5% Est. ROI',
      bhk: '4 BHK Duplex',
      sqft: '2,450 Sq.Ft.',
      image: '/images/penthouse.png',
      verified: true,
    },
    {
      id: 'p2',
      title: 'BKC Prime Corporate Office Suite',
      category: 'commercial',
      location: 'Bandra Kurla Complex (BKC), Mumbai',
      price: '₹8.75 Cr',
      roi: '8.5% Rental Yield',
      sqft: '3,800 Sq.Ft.',
      image: '/images/commercial.png',
      verified: true,
    },
    {
      id: 'p3',
      title: 'The Royal Sovereign Estate Villa',
      category: 'villas',
      location: 'Western Express Highway Corridor',
      price: '₹6.20 Cr',
      roi: '18% Capital Appreciation',
      bhk: '5 BHK Villa',
      sqft: '4,200 Sq.Ft.',
      image: '/images/villa.png',
      verified: true,
    },
    {
      id: 'p4',
      title: 'Mira Road High Street Commercial Showroom',
      category: 'commercial',
      location: 'Kanakia Ostwal Point Commercial Plaza',
      price: '₹2.10 Cr',
      roi: '9.2% Pre-leased Yield',
      sqft: '1,250 Sq.Ft.',
      image: '/images/investors_clinic.png',
      verified: true,
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
      verified: true,
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
      verified: true,
    },
  ];

  const filteredProperties = filter === 'all'
    ? properties
    : properties.filter(p => p.category === filter);

  return (
    <section id="properties" className="py-24 bg-[#08080d] relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-bold uppercase tracking-widest text-gold-400 mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>K.B. Royal Portfolio Portfolio</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold gold-gradient-text">
              Prime Property Showcase
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0 p-1.5 bg-obsidian-950 rounded-2xl border border-gray-800">
            {[
              { id: 'all', label: 'All Properties' },
              { id: 'residential', label: 'Penthouses' },
              { id: 'commercial', label: 'Commercial' },
              { id: 'villas', label: 'Villas' },
              { id: 'resale', label: 'Resale & Pre-Launch' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === tab.id
                    ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Property Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProperties.map((prop) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={prop.id}
                className="glass-panel rounded-3xl overflow-hidden border border-gold-500/20 glass-panel-hover flex flex-col justify-between group"
              >
                {/* Image & Badge */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80" />

                  {/* Verification Tag */}
                  {prop.verified && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-gold-500/40 text-[10px] uppercase font-bold text-gold-300 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>RERA Verified</span>
                    </div>
                  )}

                  {/* ROI Tag */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold-500 text-obsidian-950 text-[10px] font-mono font-bold">
                    {prop.roi}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-1.5 text-xs text-gray-300">
                    <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span className="truncate">{prop.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-2">
                      {prop.title}
                    </h3>

                    {/* Specs */}
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

                  {/* Price & Action */}
                  <div className="mt-6 flex items-center justify-between pt-2">
                    <div>
                      <span className="text-[10px] uppercase text-gray-400 font-semibold">Listing Value</span>
                      <div className="font-mono text-lg font-bold text-gold-300">{prop.price}</div>
                    </div>

                    <button
                      onClick={() => onSelectProperty(prop.title)}
                      className="px-4 py-2.5 rounded-xl bg-gold-500/10 hover:bg-gold-500 text-gold-400 hover:text-obsidian-950 font-bold text-xs flex items-center gap-1.5 transition-all border border-gold-500/30"
                    >
                      <span>Inquire Property</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
