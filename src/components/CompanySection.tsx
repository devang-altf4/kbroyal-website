import React from 'react';
import { motion } from 'framer-motion';

interface CompanyProps {
  onOpenConsultation: () => void;
}

export const CompanySection: React.FC<CompanyProps> = ({ onOpenConsultation }) => {
  return (
    <section id="company" className="relative min-h-[90vh] py-32 px-8 sm:px-16 flex flex-col justify-center text-left overflow-hidden z-10 bg-[#0a0801]">
      
      <div className="relative z-10 max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Storefront Premises Photo Frame */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="relative bg-[#16120b] p-4 border border-[#d9d7d4]/20 shadow-2xl"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/images/office_storefront.png"
                alt="K.B. Royal Investors Clinic Premises"
                className="w-full h-full object-cover brightness-[0.85] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0801]/90 via-transparent to-transparent opacity-80" />
            </div>

            <div className="pt-4 flex justify-between items-end">
              <div>
                <h4 className="font-serif-editorial text-xl text-[#d9d7d4] font-light">
                  Shop No. 9 Storefront Premises
                </h4>
                <p className="text-[10px] font-mono tracking-widest text-[#d9d7d4]/60 uppercase mt-0.5">
                  KANAKIA OSTWAL POINT • MIRA ROAD EAST
                </p>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">
                MUMBAI
              </span>
            </div>
          </motion.div>
        </div>

        {/* Brand Narrative */}
        <div className="lg:col-span-7 space-y-8 text-sm sm:text-base text-[#d9d7d4]/70 font-light leading-relaxed">
          <div>
            <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-emerald-400 font-bold mb-2">
              06 / COMPANY & HERITAGE
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#d9d7d4] leading-tight">
              Guided by Institutional Integrity
            </h2>
          </div>

          <p className="italic font-serif-editorial text-lg text-[#d9d7d4]/90 border-l border-[#d9d7d4]/30 pl-6 py-1">
            "Real estate in Mumbai is not merely about square footage. It is about locking in generational capital security and structured yields for families and global investors."
          </p>

          <p>
            Operating out of our flagship commercial premises at Shop No. 9, Kanakia Ostwal Point, Kanakia Road, Mira Road East, Mumbai, K.B. ROYAL REAL ESTATE AND INVESTORS CLINIC handles end-to-end title verification, pre-leased corporate portfolio structuring, and NRI wealth advisory with complete transparency.
          </p>

          <div className="pt-6 border-t border-[#d9d7d4]/10 flex flex-wrap items-center gap-6">
            <button
              onClick={onOpenConsultation}
              className="text-xs font-serif-editorial tracking-[0.25em] uppercase text-[#d9d7d4] border-b border-[#d9d7d4]/30 hover:border-[#d9d7d4] pb-1 transition-colors"
            >
              SCHEDULE PRIVATE CONSULTATION →
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
