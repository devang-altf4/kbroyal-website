import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Rajesh & Sunita Sharma',
      role: 'HNI Investor, Dubai',
      text: 'K.B. ROYAL managed our ₹4.5 Cr portfolio acquisition in Mira Road Kanakia belt completely remotely. Their Investors Clinic strategy yielded 14.8% appreciation in just 18 months!',
      stars: 5,
      verified: 'Verified NRI Buyer',
    },
    {
      name: 'Vikramaditya Mehta',
      role: 'Commercial Portfolio Owner',
      text: 'The pre-leased commercial office space recommended by K.B. ROYAL gives us consistent 8.5% annual rental income directly into our accounts. Absolute peace of mind.',
      stars: 5,
      verified: 'Verified Commercial Owner',
    },
    {
      name: 'Dr. Ananya Iyer',
      role: 'Duplex Penthouse Owner',
      text: 'From legal title verification to final key handover at Kanakia Ostwal Point, their team displayed unmatched transparency and royal hospitality.',
      stars: 5,
      verified: 'Verified Homeowner',
    },
  ];

  return (
    <section className="py-24 bg-[#08080d] relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-bold uppercase tracking-widest text-gold-400 mb-3">
            <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
            <span>Verified Investor Testimonials</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold gold-gradient-text">
            Trusted by High Net Worth Investors
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-3">
            Read real experiences from investors who built their real estate wealth with K.B. ROYAL.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-3xl border border-gold-500/20 glass-panel-hover flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-gold-500/20 absolute top-6 right-6" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                <p className="text-sm text-gray-200 italic leading-relaxed font-light mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                <div>
                  <h4 className="font-cinzel font-bold text-white text-base">{rev.name}</h4>
                  <p className="text-xs text-gold-400">{rev.role}</p>
                </div>
                <span className="text-[10px] uppercase font-bold text-emerald-400 flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <ShieldCheck className="w-3 h-3" />
                  {rev.verified}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
