import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceTitle?: string;
}

export const ContactModal: React.FC<ModalProps> = ({ isOpen, onClose, initialServiceTitle }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('₹1 Cr – ₹3 Cr');
  const [subject, setSubject] = useState(initialServiceTitle || 'General Investors Clinic Consultation');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0a0801]/90 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }}
          animate={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          exit={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
          className="relative w-full max-w-xl bg-[#0a0801] border border-[#d9d7d4]/20 p-8 sm:p-12 shadow-2xl z-10 text-left"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 font-mono text-xs text-[#d9d7d4]/60 hover:text-[#d9d7d4]"
          >
            [CLOSE ✕]
          </button>

          {!submitted ? (
            <div className="space-y-6">
              <div>
                <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-[#d9d7d4]/50 mb-2">
                  PRIVATE INQUIRY DRAWER
                </span>
                <h3 className="font-serif-editorial text-3xl font-light text-[#d9d7d4]">
                  Book Private Advisory
                </h3>
                <p className="text-xs text-[#d9d7d4]/60 font-light mt-1">
                  K.B. ROYAL REAL ESTATE CLINIC • Kanakia Ostwal Point, Mira Road East, Mumbai.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#d9d7d4]/60 mb-1">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-[#120f08] border border-[#d9d7d4]/20 focus:border-[#d9d7d4] outline-none text-[#d9d7d4] text-xs font-mono"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[#d9d7d4]/60 mb-1">
                      PHONE / WHATSAPP *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98200 00000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-[#120f08] border border-[#d9d7d4]/20 focus:border-[#d9d7d4] outline-none text-[#d9d7d4] text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[#d9d7d4]/60 mb-1">
                      CAPITAL BUDGET
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-3 bg-[#120f08] border border-[#d9d7d4]/20 focus:border-[#d9d7d4] outline-none text-[#d9d7d4] text-xs font-mono"
                    >
                      <option>₹50 Lakhs – ₹1 Cr</option>
                      <option>₹1 Cr – ₹3 Cr</option>
                      <option>₹3 Cr – ₹5 Cr</option>
                      <option>₹5 Cr – ₹10 Cr+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#d9d7d4]/60 mb-1">
                    INQUIRY SUBJECT
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 bg-[#120f08] border border-[#d9d7d4]/20 focus:border-[#d9d7d4] outline-none text-[#d9d7d4] text-xs font-mono"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full border border-[#d9d7d4]/40 hover:bg-[#d9d7d4] hover:text-[#0a0801] transition-all text-xs font-mono uppercase tracking-widest"
                  >
                    CONFIRM APPOINTMENT REQUEST →
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-8 space-y-4">
              <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-[#d9d7d4]/50">
                CONFIRMATION
              </span>
              <h3 className="font-serif-editorial text-3xl font-light text-[#d9d7d4]">
                Advisory Reserved
              </h3>
              <p className="text-xs text-[#d9d7d4]/70 font-light leading-relaxed">
                Thank you, <strong className="text-[#d9d7d4]">{name}</strong>. A K.B. ROYAL Senior Wealth Director will contact you at <strong className="text-[#d9d7d4]">{phone}</strong> shortly.
              </p>

              <div className="pt-6 space-y-3">
                <a
                  href={`https://wa.me/919820088888?text=Hi%20KB%20Royal,%20I%20have%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(subject)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full py-3.5 text-center rounded-full border border-emerald-500/40 bg-emerald-950/20 text-emerald-300 text-xs font-mono uppercase tracking-widest hover:bg-emerald-900/40"
                >
                  CONNECT INSTANTLY ON WHATSAPP ↗
                </a>

                <button
                  onClick={handleReset}
                  className="w-full py-3 rounded-full border border-[#d9d7d4]/20 text-[#d9d7d4]/60 text-xs font-mono uppercase tracking-widest"
                >
                  CLOSE
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
