import React from 'react';
import { motion } from 'framer-motion';

interface FounderProps {
  onOpenConsultation: () => void;
}

export const FounderSpotlight: React.FC<FounderProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-24 px-6 sm:px-16 max-w-[1440px] mx-auto text-left relative z-10">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#14100b] border border-[#d9d7d4]/20 p-8 sm:p-14 rounded-3xl shadow-2xl">
        
        {/* Founder Portrait Frame */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="relative bg-[#1a150e] p-3 rounded-2xl border border-[#d9d7d4]/20 shadow-2xl overflow-hidden group"
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src="/images/mohammed_khan.png"
                alt="Mohammed Khan Founder & CEO"
                className="w-full h-full object-cover brightness-[0.9] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0801]/90 via-transparent to-transparent opacity-80" />
            </div>

            <div className="pt-3 flex justify-between items-end">
              <div>
                <h3 className="font-serif-editorial text-2xl text-white font-light">
                  Mohammed Khan
                </h3>
                <p className="text-[10px] font-mono tracking-widest text-[#d9d7d4]/60 uppercase mt-0.5">
                  FOUNDER & CEO • K.B. ROYAL
                </p>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-1 rounded">
                MUMBAI
              </span>
            </div>
          </motion.div>
        </div>

        {/* Founder Story & Leadership Statement */}
        <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#d9d7d4]/80 font-light leading-relaxed">
          <div>
            <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-emerald-400 font-bold mb-1">
              FOUNDER SPOTLIGHT
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl text-white font-light leading-tight">
              15+ Years of Real Estate Authority
            </h2>
          </div>

          <p className="italic font-serif-editorial text-base sm:text-lg text-[#d9d7d4] border-l-2 border-[#d9d7d4]/40 pl-4 py-1">
            "We treat every asset acquisition as a wealth management discipline — clear title verification, blue-chip commercial yields, and bespoke penthouses."
          </p>

          <p className="text-xs sm:text-sm text-[#d9d7d4]/70">
            Founded by <strong>Mohammed Khan</strong>, K.B. ROYAL REAL ESTATE AND INVESTORS CLINIC operates out of Shop No. 9, Kanakia Ostwal Point, Mira Road East, Mumbai, guiding high-net-worth families and overseas NRIs across India, Dubai, and Singapore.
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-[#1c1710] p-4 rounded-xl border border-[#d9d7d4]/15">
              <div className="font-serif-editorial text-2xl sm:text-3xl font-bold text-white">₹500Cr+</div>
              <div className="text-[10px] font-mono text-[#d9d7d4]/60 mt-0.5">Managed Assets</div>
            </div>

            <div className="bg-[#1c1710] p-4 rounded-xl border border-[#d9d7d4]/15">
              <div className="font-serif-editorial text-2xl sm:text-3xl font-bold text-white">1,200+</div>
              <div className="text-[10px] font-mono text-[#d9d7d4]/60 mt-0.5">HNIs & NRIs</div>
            </div>

            <div className="bg-[#1c1710] p-4 rounded-xl border border-[#d9d7d4]/15 col-span-2 sm:col-span-1">
              <div className="font-serif-editorial text-2xl sm:text-3xl font-bold text-white">15+ Yrs</div>
              <div className="text-[10px] font-mono text-[#d9d7d4]/60 mt-0.5">Track Record</div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#d9d7d4] text-[#0a0801] font-mono text-xs uppercase font-bold tracking-widest transition-all"
            >
              CONSULT WITH MOHAMMED KHAN →
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
