import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RollingTextLink } from './RollingTextLink';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const FullscreenMenu: React.FC<MenuProps> = ({ isOpen, onClose, onOpenConsultation }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'home', href: '#hero' },
    { label: 'philosophy', href: '#philosophy' },
    { label: 'portfolio', href: '#portfolio' },
    { label: 'services', href: '#services' },
    { label: 'company', href: '#company' },
    { label: 'contact', href: '#contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="fullscreen-menu"
          initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }}
          animate={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          exit={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9000] bg-[#0a0801] text-[#d9d7d4] flex flex-col justify-between p-8 sm:p-16 select-none overflow-y-auto"
        >
          {/* Top Close Header */}
          <div className="flex items-center justify-between border-b border-[#d9d7d4]/10 pb-6">
            <span className="font-serif-editorial text-xl tracking-[0.2em] uppercase text-[#d9d7d4]">
              K.B. ROYAL
            </span>
            
            <button
              onClick={onClose}
              className="group flex items-center gap-2 py-1 px-4 rounded-full border border-[#d9d7d4]/20 hover:border-[#d9d7d4]/60 transition-colors"
            >
              <span className="text-xs font-mono lowercase tracking-widest text-[#d9d7d4]">
                close
              </span>
              <span className="text-sm font-mono text-[#d9d7d4]">✕</span>
            </button>
          </div>

          {/* Staggered Navigation Links */}
          <div className="max-w-4xl mx-auto w-full my-auto py-12 grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
            <div className="md:col-span-8 space-y-4">
              {navLinks.map((link, idx) => (
                <div key={link.label} className="overflow-hidden">
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + idx * 0.08, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="font-serif-editorial text-4xl sm:text-6xl text-[#d9d7d4] hover:text-[#ffffff] transition-colors font-light tracking-wide block py-1"
                    >
                      <RollingTextLink text={link.label} className="text-4xl sm:text-6xl" />
                    </a>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Sidebar Details */}
            <div className="md:col-span-4 flex flex-col justify-between space-y-8 text-xs font-mono tracking-widest text-[#d9d7d4]/60">
              <div>
                <span className="block text-[10px] uppercase text-[#d9d7d4]/40 mb-2">Location</span>
                <p className="leading-relaxed text-[#d9d7d4]">
                  Shop No. 9, Kanakia Ostwal Point, Kanakia Road, Mira Road East, Mumbai - 401107.
                </p>
              </div>

              <div>
                <span className="block text-[10px] uppercase text-[#d9d7d4]/40 mb-2">Contact</span>
                <p className="text-[#d9d7d4]">+91 98200 88888</p>
                <p className="text-[#d9d7d4] mt-1">contact@kbroyal.com</p>
              </div>

              <div>
                <span className="block text-[10px] uppercase text-[#d9d7d4]/40 mb-2">Social</span>
                <a
                  href="https://www.instagram.com/kbroyal_mumbai"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#d9d7d4] hover:underline"
                >
                  @kbroyal_mumbai ↗
                </a>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    onClose();
                    onOpenConsultation();
                  }}
                  className="w-full py-4 rounded-full border border-[#d9d7d4]/30 hover:bg-[#d9d7d4] hover:text-[#0a0801] text-[#d9d7d4] text-xs font-mono uppercase tracking-widest transition-all"
                >
                  Start A Project / Book Call
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer Details */}
          <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-[#d9d7d4]/40 border-t border-[#d9d7d4]/10 pt-6">
            <span>© {new Date().getFullYear()} K.B. ROYAL REAL ESTATE CLINIC</span>
            <span>MUMBAI • DUBAI</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
