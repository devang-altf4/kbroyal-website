import React from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Globe2, ShieldCheck, Briefcase, FileCheck, ArrowUpRight, Award } from 'lucide-react';

interface ServicesProps {
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const services = [
    {
      icon: Building2,
      title: 'Luxury Residential Sales & Resale',
      description: 'Exclusive 1, 2, 3 & 4 BHK luxury penthouses, duplexes, and sea-facing apartments across Mira Road East, Kanakia, Thane, and Mumbai prime hubs.',
      tag: 'Residential Portfolio',
      highlight: 'Direct Developer Allotments',
    },
    {
      icon: Briefcase,
      title: 'Commercial Real Estate Hubs',
      description: 'High-yield commercial spaces, retail showrooms, pre-leased corporate offices with blue-chip tenants and 7% to 9% assured rental returns.',
      tag: 'Commercial Portfolio',
      highlight: 'Pre-Leased ROI Assets',
    },
    {
      icon: TrendingUp,
      title: 'Real Estate Investors Clinic',
      description: 'Dedicated financial advisory helping High-Net-Worth Individuals compound wealth through strategic real estate portfolio allocation and timing.',
      tag: 'Wealth Advisory',
      highlight: 'Structured Portfolio Growth',
    },
    {
      icon: Globe2,
      title: 'NRI Investment Suite',
      description: 'End-to-end remote concierge for non-resident Indian investors — virtual site walkthroughs, legal compliance, POA, and hassle-free tenant management.',
      tag: 'Global Indian Desk',
      highlight: 'Remote Site Walkthroughs',
    },
    {
      icon: Award,
      title: 'Developer Pre-Launch Access',
      description: 'First-right access to upcoming pre-launch real estate developments at institutional prices before public market release.',
      tag: 'Institutional Pricing',
      highlight: 'Early Investor Gains',
    },
    {
      icon: FileCheck,
      title: 'Legal Title & Loan Assistance',
      description: '100% verified clear title deeds, RERA documentation, tenant verification, and fast-track home loan tie-ups with leading national banks.',
      tag: 'Legal & Finance',
      highlight: 'Zero Legal Risk Guarantee',
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#050508] relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-bold uppercase tracking-widest text-gold-400 mb-3">
            <Award className="w-4 h-4" />
            <span>K.B. Royal Core Advisory Spectrum</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold gold-gradient-text">
            Bespoke Real Estate Services
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-3">
            360-degree property solutions curated for homeowners, commercial investors, and global NRIs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-3xl border border-gold-500/20 glass-panel-hover flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 pointer-events-none">
                  <IconComponent className="w-32 h-32 text-gold-400" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-600/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-obsidian-950 transition-colors duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] uppercase font-mono font-bold px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-xl font-bold text-white mb-3 group-hover:text-gold-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {service.highlight}
                  </span>
                  <button
                    onClick={onOpenConsultation}
                    className="p-2 rounded-full bg-gold-500/10 hover:bg-gold-500 text-gold-400 hover:text-obsidian-950 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
