import React from 'react';
import { motion } from 'framer-motion';
import { RollingTextLink } from './RollingTextLink';

interface ChapterProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const ServiceChapter: React.FC<ChapterProps> = ({ onOpenConsultation }) => {
  const chapters = [
    {
      num: '01',
      title: 'Luxury Duplexes & Penthouses',
      poetic: 'Elevated sanctuaries overlooking ocean horizons.',
      copy: 'Exclusive 1, 2, 3 & 4 BHK sky penthouses and duplexes in Mira Road East, Kanakia, Thane, and Worli with private terrace pools and custom architectural layouts.',
      image: '/images/penthouse.png',
      tag: 'RESIDENTIAL SPECTRUM',
    },
    {
      num: '02',
      title: 'High-Yield Commercial Hubs',
      poetic: 'Institutional cash-flow assets with long-term lock-in.',
      copy: 'Pre-leased blue-chip corporate office suites and retail showrooms across BKC and Mumbai commercial belts generating 7% to 9% annual rental returns.',
      image: '/images/commercial.png',
      tag: 'COMMERCIAL PORTFOLIO',
    },
    {
      num: '03',
      title: 'Global Indian NRI Wealth Desk',
      poetic: 'Seamless remote acquisition & 4K virtual concierge.',
      copy: 'Dedicated wealth advisory for Non-Resident Indians — 4K live drone walkthroughs, Power of Attorney compliance, RBI FEMA regulations, and tenant management.',
      image: '/images/nri_lounge.png',
      tag: 'GLOBAL CONCIERGE',
    },
  ];

  return (
    <section id="services" className="py-32 px-8 sm:px-16 max-w-[1600px] mx-auto text-left relative z-10 space-y-32">
      
      <div className="border-b border-[#d9d7d4]/10 pb-8 flex justify-between items-end">
        <div>
          <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-[#d9d7d4]/60">
            05 / SERVICE CHAPTERS
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-light text-[#d9d7d4] mt-2">
            The Three Chapters of Advisory
          </h2>
        </div>
      </div>

      <div className="space-y-36">
        {chapters.map((chap) => (
          <motion.div
            key={chap.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Image Column */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-sm overflow-hidden group">
              <img
                src={chap.image}
                alt={chap.title}
                className="w-full h-full object-cover brightness-[0.7] contrast-[1.05] group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0801]/80 via-transparent to-transparent" />
              <span className="absolute top-6 left-6 font-mono text-[10px] tracking-[0.3em] uppercase text-[#d9d7d4]/70">
                {chap.tag}
              </span>
            </div>

            {/* Chapter Details Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="font-serif-editorial text-5xl sm:text-7xl font-light text-[#d9d7d4]/30 font-mono">
                  {chap.num}
                </span>
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#d9d7d4]/50">
                  CHAPTER {chap.num}
                </span>
              </div>

              <h3 className="font-serif-editorial text-3xl sm:text-5xl font-light text-[#d9d7d4] leading-tight">
                {chap.title}
              </h3>

              <p className="font-serif-editorial text-lg text-[#d9d7d4]/80 italic">
                "{chap.poetic}"
              </p>

              <p className="text-sm text-[#d9d7d4]/65 font-light leading-relaxed max-w-lg">
                {chap.copy}
              </p>

              <div className="pt-4">
                <RollingTextLink
                  text={`explore chapter ${chap.num} advisory`}
                  onClick={() => onOpenConsultation(chap.title)}
                  className="text-xs uppercase tracking-[0.25em]"
                  showArrow
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};
