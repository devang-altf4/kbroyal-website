import React from 'react';
import { motion } from 'framer-motion';

export const ProjectsIntro: React.FC = () => {
  return (
    <section className="py-24 relative z-10 overflow-hidden text-left bg-[#0a0801]">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-16 mb-8 flex justify-between items-end">
        <div>
          <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-[#d9d7d4]/60">
            04 / CLINIC HEADQUARTERS
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-light text-[#d9d7d4] mt-2">
            Kanakia Ostwal Point Premises
          </h2>
        </div>

        <span className="font-mono text-xs text-[#d9d7d4]/40 uppercase tracking-widest hidden sm:inline">
          KANAKIA ROAD • MIRA ROAD EAST • MUMBAI
        </span>
      </div>

      {/* Real Storefront Photo Frame */}
      <motion.div
        initial={{ width: '90%', opacity: 0.7 }}
        whileInView={{ width: '100%', opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
        className="relative h-[60vh] sm:h-[75vh] mx-auto overflow-hidden border-y border-[#d9d7d4]/20"
      >
        <img
          src="/images/office_storefront.png"
          alt="K.B. Royal Investors Clinic Storefront at Kanakia Ostwal Point"
          className="w-full h-full object-cover brightness-[0.85] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0801] via-transparent to-[#0a0801]/60" />

        <div className="absolute bottom-12 left-8 sm:left-16 max-w-xl text-left">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-emerald-400 font-bold">
            PHYSICAL CLINIC LOCATION
          </span>
          <h3 className="font-serif-editorial text-2xl sm:text-4xl text-[#d9d7d4] font-light mt-1">
            Shop No. 9, Kanakia Ostwal Point Commercial Plaza.
          </h3>
        </div>
      </motion.div>
    </section>
  );
};
