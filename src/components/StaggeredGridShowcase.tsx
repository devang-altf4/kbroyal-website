import React from 'react';
import { motion } from 'framer-motion';

interface ShowcaseProps {
  onOpenConsultation: (title?: string) => void;
}

export const StaggeredGridShowcase: React.FC<ShowcaseProps> = ({ onOpenConsultation }) => {
  const cards = [
    {
      id: 'c1',
      num: '01',
      title: 'Ostwal Point Headquarters',
      tag: 'CLINIC LOCATION',
      desc: 'Shop No. 9 commercial plaza premises in Mira Road East, Mumbai.',
      image: '/images/office_storefront.png',
      aspect: 'aspect-[3/4]',
      colSpan: 'lg:col-span-5',
    },
    {
      id: 'c2',
      num: '02',
      title: 'Duplex Penthouse Sanctuaries',
      tag: 'RESIDENTIAL SPECTRUM',
      desc: 'Sea-facing 4 BHK duplex penthouses with private pool decks.',
      image: '/images/penthouse.png',
      aspect: 'aspect-[4/3]',
      colSpan: 'lg:col-span-7',
    },
    {
      id: 'c3',
      num: '03',
      title: 'Pre-Leased Commercial Hubs',
      tag: 'COMMERCIAL YIELD',
      desc: 'BKC & Mumbai corporate office suites with 8.5% annual returns.',
      image: '/images/commercial.png',
      aspect: 'aspect-[4/3]',
      colSpan: 'lg:col-span-7',
    },
    {
      id: 'c4',
      num: '04',
      title: 'Investors Clinic Interior Lounge',
      tag: 'PREMISES SUITE',
      desc: 'Private high-net-worth consultation and title verification suites.',
      image: '/images/office_interior.png',
      aspect: 'aspect-[3/4]',
      colSpan: 'lg:col-span-5',
    },
  ];

  return (
    <section className="relative z-30 bg-[#0a0801] text-[#d9d7d4] py-36 px-6 sm:px-16 max-w-[1600px] mx-auto text-left rounded-t-[40px] border-t border-[#d9d7d4]/15 shadow-[0_-30px_100px_rgba(0,0,0,0.95)]">
      
      {/* Rotated Vertical Side Label */}
      <div className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 hidden md:block">
        <span className="font-serif-editorial text-[10px] tracking-[0.35em] uppercase text-[#d9d7d4]/40 rotate-180 [writing-mode:vertical-rl]">
          GRID SHOWCASE
        </span>
      </div>

      <div className="w-full pl-0 md:pl-12 space-y-16">
        
        {/* Section Header */}
        <div className="border-b border-[#d9d7d4]/10 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-emerald-400 font-bold">
              03 / ASYMMETRIC GRID SHOWCASE
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#d9d7d4] mt-2">
              K.B. Royal Portfolio & Premises
            </h2>
          </div>

          <span className="font-mono text-xs text-[#d9d7d4]/40 uppercase tracking-widest">
            THE GOONIES TRIBUTE ARCHITECTURE
          </span>
        </div>

        {/* Multi-Column Staggered Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, clipPath: 'inset(15% 0% 15% 0%)', y: 50 }}
              whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.2, delay: idx * 0.15, ease: [0.76, 0, 0.24, 1] }}
              className={`${card.colSpan} bg-[#14100b] border border-[#d9d7d4]/15 p-4 rounded-xl shadow-2xl group cursor-pointer`}
              onClick={() => onOpenConsultation(card.title)}
            >
              <div className={`relative ${card.aspect} overflow-hidden rounded-lg`}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover brightness-[0.8] contrast-[1.05] group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0801]/90 via-transparent to-transparent opacity-80" />

                <span className="absolute top-4 left-4 font-mono text-[9px] tracking-[0.3em] uppercase text-[#d9d7d4] bg-[#0a0801]/80 px-2.5 py-1 rounded-full border border-[#d9d7d4]/20">
                  {card.tag}
                </span>

                <span className="absolute top-4 right-4 font-serif-editorial text-2xl font-light text-[#d9d7d4]/40">
                  {card.num}
                </span>
              </div>

              <div className="pt-4 space-y-2">
                <h3 className="font-serif-editorial text-2xl text-[#d9d7d4] font-light group-hover:text-white transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-[#d9d7d4]/60 font-light leading-relaxed">
                  {card.desc}
                </p>

                <div className="pt-2 text-[10px] font-mono tracking-widest text-[#d9d7d4]/80 uppercase group-hover:underline">
                  INQUIRE CARD →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
};
