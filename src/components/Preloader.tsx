import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 2200; // 2.2 seconds loader
    const interval = 25;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 900); // 900ms wipe transition
          }, 200);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] bg-[#0a0801] text-[#d9d7d4] flex flex-col justify-between p-8 sm:p-16 select-none"
        >
          {/* Top Brand Name */}
          <div className="flex items-center justify-between">
            <span className="font-serif-editorial text-sm tracking-[0.25em] uppercase text-[#d9d7d4]/70">
              K.B. ROYAL
            </span>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#d9d7d4]/40">
              MUMBAI
            </span>
          </div>

          {/* Center Poetic Statement */}
          <div className="max-w-xl text-left my-auto space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif-editorial text-2xl sm:text-4xl text-[#d9d7d4] font-light leading-relaxed tracking-wide"
            >
              Stillness in space. <br />
              Compounded wealth in horizon.
            </motion.p>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.6 }}
              className="block text-xs font-mono tracking-[0.25em] uppercase text-[#d9d7d4]"
            >
              Real Estate & Investors Clinic
            </motion.span>
          </div>

          {/* Bottom Left Numerical Counter */}
          <div className="flex items-end justify-between border-t border-[#d9d7d4]/10 pt-6">
            <div className="flex items-baseline gap-2">
              <span className="font-serif-editorial text-6xl sm:text-8xl text-[#d9d7d4] font-light font-mono">
                {Math.round(progress)}
              </span>
              <span className="font-mono text-sm text-[#d9d7d4]/50">%</span>
            </div>

            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#d9d7d4]/40 hidden sm:inline">
              INITIALIZING EXPERIENTIAL SCENE
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
