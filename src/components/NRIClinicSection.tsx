import React from 'react';
import { Globe, Video, FileCheck, ShieldCheck, ArrowRight } from 'lucide-react';

interface NRIProps {
  onOpenConsultation: () => void;
}

export const NRIClinicSection: React.FC<NRIProps> = ({ onOpenConsultation }) => {
  const nriFeatures = [
    {
      icon: Video,
      title: 'Live 4K Virtual Site Walkthroughs',
      desc: 'Experience real-time interactive drone walkthroughs & virtual property viewings from Dubai, London, New York, or Singapore.',
    },
    {
      icon: FileCheck,
      title: 'Power of Attorney & Legal Compliance',
      desc: 'Seamless assistance for POA creation, RBI FEMA guidelines compliance, tax optimization, and NRE/NRO bank routing.',
    },
    {
      icon: ShieldCheck,
      title: 'Guaranteed Tenant & Lease Management',
      desc: 'End-to-end property upkeep, tenant onboarding, rent collection direct to NRE accounts with zero physical presence required.',
    },
  ];

  return (
    <section id="nri" className="py-24 bg-[#050508] relative z-20 overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-gold-500/30 bg-gradient-to-r from-obsidian-950 via-[#101018] to-obsidian-950 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-bold uppercase tracking-widest text-gold-400">
                <Globe className="w-4 h-4 text-gold-400" />
                <span>Global Indian Wealth Concierge</span>
              </div>

              <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold gold-gradient-text leading-tight">
                NRI Real Estate Investment Desk
              </h2>

              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                Investing in Mumbai high-growth corridors from abroad? <strong className="text-gold-300 font-medium">K.B. ROYAL</strong> offers end-to-end remote acquisition, legal advisory, and high-yield asset management designed exclusively for Non-Resident Indians.
              </p>

              <div className="space-y-4 pt-2">
                {nriFeatures.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4 p-3 rounded-2xl bg-gold-500/5 border border-gold-500/10">
                      <div className="p-2.5 rounded-xl bg-gold-500/20 text-gold-400 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                        <p className="text-xs text-gray-300 mt-0.5">{feat.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenConsultation}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 font-bold text-sm tracking-wider uppercase flex items-center gap-3 shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40 transition-all"
                >
                  <Video className="w-4 h-4" />
                  <span>Schedule Virtual NRI Video Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Interactive Image Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl group">
                <img
                  src="/images/nri_lounge.png"
                  alt="KB Royal NRI Executive Suite"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />

                {/* Floating Overseas Hub Badges */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-obsidian-900/90 backdrop-blur-xl border border-gold-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                    <div>
                      <div className="text-xs font-bold text-white">Active NRI Investor Desk</div>
                      <div className="text-[10px] text-gold-400">Serving UAE, UK, US, SG & GCC Clients</div>
                    </div>
                  </div>
                  <div className="font-mono text-xs font-bold text-gold-300">
                    24/7 Support
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
