import React from 'react';
import { motion } from 'framer-motion';

export const CurtainPhilosophySection: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="relative z-30 bg-[#0a0801] text-[#d9d7d4] py-36 px-6 sm:px-16 max-w-[1600px] mx-auto text-left shadow-[0_-30px_100px_rgba(0,0,0,0.95)] rounded-t-[40px] border-t border-[#d9d7d4]/15"
    >
      {/* Rotated Vertical Margin Label */}
      <div className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 hidden md:block">
        <span className="font-serif-editorial text-[10px] tracking-[0.35em] uppercase text-[#d9d7d4]/40 rotate-180 [writing-mode:vertical-rl]">
          PHILOSOPHY
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full pl-0 md:pl-12">
        
        {/* Editorial Text */}
        <div className="lg:col-span-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <h2 className="font-serif-editorial text-4xl sm:text-6xl text-[#d9d7d4] font-light leading-[1.15] tracking-wide">
              Sharing the Spirit <br />
              of Compounded Wealth & Stillness
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs sm:text-sm text-[#d9d7d4]/65 font-light leading-relaxed max-w-lg"
          >
            Harmony is not something to be created. It is something to be remembered. Guided by 15+ years of market mastery, K.B. ROYAL REAL ESTATE AND INVESTORS CLINIC provides a quiet path toward patient, structured real estate allocations across prime Mumbai corridors.
          </motion.p>

          <div className="pt-4 border-t border-[#d9d7d4]/10 flex items-center gap-6 text-xs font-mono text-[#d9d7d4]/50 tracking-widest uppercase">
            <span>ESTABLISHED MIRA ROAD EAST</span>
            <span>•</span>
            <span>KANAKIA OSTWAL POINT</span>
          </div>
        </div>

        {/* Real Office Interior & Penthouse Layered Frames */}
        <div className="lg:col-span-6 relative flex justify-end">
          
          {/* Real Office Interior Secondary Detail Frame */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute -top-12 -left-4 sm:left-4 z-20 w-48 sm:w-60 h-64 sm:h-80 bg-[#120e08] p-2 shadow-2xl border border-[#d9d7d4]/15"
          >
            <img
              src="/images/office_interior.png"
              alt="K.B. Royal Investors Clinic Interior Premises"
              className="w-full h-full object-cover brightness-[0.85] contrast-[1.05]"
            />
            <div className="absolute bottom-3 left-3 right-3 text-[9px] font-mono tracking-widest text-[#d9d7d4] uppercase bg-[#0a0801]/80 px-2 py-0.5">
              INVESTORS CLINIC PREMISES
            </div>
          </motion.div>

          {/* Primary Duplex Penthouse Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
            className="relative z-10 w-full max-w-md bg-[#16120b] p-4 border border-[#d9d7d4]/20 shadow-2xl"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/images/penthouse.png"
                alt="Duplex Sanctuary"
                className="w-full h-full object-cover brightness-[0.75] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0801]/90 via-transparent to-transparent opacity-80" />
            </div>

            <div className="pt-3 flex justify-between items-center font-mono text-[10px] tracking-widest text-[#d9d7d4]/60 uppercase">
              <span>DUPLEX SANCTUARY</span>
              <span>KANAKIA CORRIDOR</span>
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
};
