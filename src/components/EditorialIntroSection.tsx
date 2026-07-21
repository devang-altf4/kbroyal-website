import React from 'react';
import { motion } from 'framer-motion';
import { RollingTextLink } from './RollingTextLink';

interface IntroProps {
  onOpenConsultation: () => void;
}

export const EditorialIntroSection: React.FC<IntroProps> = ({ onOpenConsultation }) => {
  return (
    <section id="philosophy" className="py-32 px-8 sm:px-16 max-w-[1600px] mx-auto text-left relative z-10">
      
      {/* Asymmetrical 12-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Section Label */}
        <div className="lg:col-span-3">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="block text-[10px] font-mono tracking-[0.3em] uppercase text-[#d9d7d4]"
          >
            02 / PHILOSOPHY & DISCIPLINE
          </motion.span>
        </div>

        {/* Right Large Editorial Heading */}
        <div className="lg:col-span-9 space-y-12">
          
          <div className="space-y-2">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl font-light text-[#d9d7d4] leading-tight"
              >
                True real estate wealth is built not through noise,
              </motion.h2>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
                className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl font-light text-[#d9d7d4]/60 leading-tight"
              >
                but through patient, structured acquisition in high-growth corridors.
              </motion.h2>
            </div>
          </div>

          {/* Asymmetrical Supporting Paragraph & Link */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-8 border-t border-[#d9d7d4]/10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:col-span-8 text-sm sm:text-base text-[#d9d7d4]/70 font-light leading-relaxed"
            >
              At K.B. ROYAL, we treat every asset acquisition as a wealth management discipline. From clear title verification and pre-leased commercial yields to institutional developer allocations in Mumbai, our clinic guides high-net-worth families and global NRIs with absolute clarity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="md:col-span-4 flex justify-start md:justify-end"
            >
              <RollingTextLink
                text="our institutional approach"
                onClick={onOpenConsultation}
                className="text-xs uppercase tracking-[0.25em]"
                showArrow
              />
            </motion.div>
          </div>

        </div>

      </div>

    </section>
  );
};
