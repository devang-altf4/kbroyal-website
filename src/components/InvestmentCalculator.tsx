import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface CalculatorProps {
  onOpenConsultation: () => void;
}

export const InvestmentCalculator: React.FC<CalculatorProps> = ({ onOpenConsultation }) => {
  const [budget, setBudget] = useState<number>(10000000); // 1 Cr default
  const [years, setYears] = useState<number>(5);
  const [assetType, setAssetType] = useState<'residential' | 'commercial' | 'prelaunch'>('residential');

  // ROI Rate presets based on asset class in Mumbai prime corridors
  const assetConfig = {
    residential: { name: 'Luxury Residential Duplex/Penthouse', appreciationRate: 0.12, rentalYield: 0.04 },
    commercial: { name: 'Pre-Leased Commercial Corporate Space', appreciationRate: 0.10, rentalYield: 0.08 },
    prelaunch: { name: 'Exclusive Developer Pre-Launch Allocation', appreciationRate: 0.16, rentalYield: 0.03 },
  };

  const currentConfig = assetConfig[assetType];

  // Compound appreciation calculation: A = P(1 + r)^t
  const projectedAppreciation = Math.round(budget * Math.pow(1 + currentConfig.appreciationRate, years));
  const cumulativeRentalIncome = Math.round(budget * currentConfig.rentalYield * years);
  const totalValue = projectedAppreciation + cumulativeRentalIncome;
  const netProfit = totalValue - budget;
  const roiPercentage = ((netProfit / budget) * 100).toFixed(1);

  const formatCrores = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(amount / 100000).toFixed(0)} Lakhs`;
  };

  return (
    <section id="calculator" className="py-24 bg-[#08080d] relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-bold uppercase tracking-widest text-gold-400 mb-3">
            <Calculator className="w-4 h-4" />
            <span>K.B. Royal Investors Clinic Financial Engine</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold gold-gradient-text">
            Calculate Your Real Estate ROI Yield
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-3">
            Simulate capital growth, rental income, and wealth compounding across prime Mumbai real estate portfolios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Panel */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-gold-500/20 shadow-2xl">
            
            {/* Asset Class Selector */}
            <div className="mb-8">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">
                1. Select Target Asset Class
              </label>
              <div className="grid grid-cols-3 gap-2 p-1 bg-obsidian-950 rounded-2xl border border-gray-800">
                {(['residential', 'commercial', 'prelaunch'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setAssetType(type)}
                    className={`py-3 px-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                      assetType === type
                        ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 shadow-md font-bold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {type === 'residential' && 'Residential'}
                    {type === 'commercial' && 'Commercial'}
                    {type === 'prelaunch' && 'Pre-Launch'}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-gold-400 mt-2 font-medium">
                Selected: {currentConfig.name}
              </p>
            </div>

            {/* Investment Amount Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  2. Investment Budget
                </label>
                <span className="font-mono text-lg font-bold text-gold-300">
                  {formatCrores(budget)}
                </span>
              </div>
              <input
                type="range"
                min={2500000} // 25 Lakhs
                max={100000000} // 10 Cr
                step={2500000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-gold-400"
              />
              <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                <span>₹25 Lakhs</span>
                <span>₹5 Crores</span>
                <span>₹10 Crores+</span>
              </div>
            </div>

            {/* Investment Horizon Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  3. Holding Period (Years)
                </label>
                <span className="font-mono text-lg font-bold text-gold-300">
                  {years} Years
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={15}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-gold-400"
              />
              <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                <span>1 Year</span>
                <span>5 Years</span>
                <span>15 Years</span>
              </div>
            </div>

            {/* Assumptions Note */}
            <div className="p-4 rounded-xl bg-gold-500/5 border border-gold-500/20 text-xs text-gray-300 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <span>Calculated using historical Mumbai western corridor appreciation rates ({(currentConfig.appreciationRate * 100).toFixed(0)}% YoY) + estimated rental yields ({(currentConfig.rentalYield * 100).toFixed(0)}% p.a.).</span>
            </div>

          </div>

          {/* Projected Results Card */}
          <div className="lg:col-span-6 relative">
            <motion.div
              key={`${budget}-${years}-${assetType}`}
              initial={{ scale: 0.96, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-gold-500/40 bg-gradient-to-br from-[#12121c] via-[#0a0a0f] to-[#14141e] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <TrendingUp className="w-48 h-48 text-gold-400" />
              </div>

              <div className="text-left space-y-6">
                
                <div>
                  <span className="text-xs uppercase font-bold text-gold-400 tracking-widest">
                    Projected Total Portfolio Value ({years} Yrs)
                  </span>
                  <div className="font-cinzel text-4xl sm:text-5xl font-black text-white mt-1 gold-gradient-text">
                    {formatCrores(totalValue)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800">
                  <div>
                    <div className="text-[11px] text-gray-400 uppercase font-semibold">Net Profit Capital Growth</div>
                    <div className="font-mono text-xl font-bold text-emerald-400 mt-0.5">
                      +{formatCrores(netProfit)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-400 uppercase font-semibold">Total Compound ROI</div>
                    <div className="font-mono text-xl font-bold text-gold-300 mt-0.5">
                      +{roiPercentage}%
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <div className="text-[11px] text-gray-400 uppercase font-semibold">Property Asset Appreciation</div>
                    <div className="font-mono text-base font-semibold text-gray-200">
                      {formatCrores(projectedAppreciation)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-400 uppercase font-semibold">Cumulative Rental Income</div>
                    <div className="font-mono text-base font-semibold text-gray-200">
                      {formatCrores(cumulativeRentalIncome)}
                    </div>
                  </div>
                </div>

                {/* Consultation CTA */}
                <div className="pt-6 border-t border-gold-500/20">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-obsidian-950 font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 transition-all duration-300"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Get Bespoke Investor Strategy File</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-gray-400 mt-2">
                    Free 1-on-1 consultation with K.B. Royal wealth directors at Mira Road Clinic.
                  </p>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
