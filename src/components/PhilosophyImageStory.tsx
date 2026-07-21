import React from 'react';
import { motion } from 'framer-motion';

export const PhilosophyImageStory: React.FC = () => {
  return (
    <section id="philosophy" className="py-36 px-6 sm:px-16 max-w-[1600px] mx-auto text-left relative z-10 min-h-screen flex items-center">
      
      {/* Rotated Vertical Side Label (Exact Izanami Philosophy Layout) */}
      <div className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 hidden md:block">
        <span className="font-serif-editorial text-[10px] tracking-[0.35em] uppercase text-[#d9d7d4]/40 rotate-180 [writing-mode:vertical-rl]">
          PHILOSOPHY
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full pl-0 md:pl-12">
        
        {/* Left Editorial Philosophy Text */}
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
            Harmony is not something to be created. It is something to be remembered. At K.B. ROYAL, we guide high-net-worth families and overseas investors through patient, structured real estate allocations across prime Mumbai corridors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-4 border-t border-[#d9d7d4]/10 flex items-center gap-6 text-xs font-mono text-[#d9d7d4]/50 tracking-widest uppercase"
          >
            <span>ESTABLISHED MIRA ROAD EAST</span>
            <span>•</span>
            <span>KANAKIA OSTWAL POINT</span>
          </motion.div>
        </div>

        {/* Right Asymmetrical Layered Portrait Frames (Exact Izanami Composition) */}
        <div className="lg:col-span-6 relative flex justify-end">
          
          {/* Top Left Floating Secondary Detail Frame */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute -top-12 -left-4 sm:left-4 z-20 w-48 sm:w-60 h-64 sm:h-80 bg-[#120e08] p-2 shadow-2xl border border-[#d9d7d4]/15"
          >
            <img
              src="/images/investors_clinic.png"
              alt="Advisory Detail"
              className="w-full h-full object-cover brightness-[0.7] contrast-[1.1]"
            />
          </motion.div>

          {/* Main Primary Asymmetrical Portrait Frame with Parchment Border */}
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
                alt="Penthouse Sanctuary"
                className="w-full h-full object-cover brightness-[0.75] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0801]/90 via-transparent to-transparent opacity-80" />
            </div>

            <div className="pt-3 flex justify-between items-center font-mono text-[10px] tracking-widest text-[#d9d7d4]/60 uppercase">
              <span>DUPIEX SANCTUARY</span>
              <span>KANAKIA CORRIDOR</span>
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
};
