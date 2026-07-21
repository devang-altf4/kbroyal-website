import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplitPreloaderProps {
  onComplete: () => void;
}

export const SplitPreloader: React.FC<SplitPreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2.0s loader
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 1000); // 1.0s split curtain slide duration
          }, 150);
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
        <div className="fixed inset-0 z-[10000] pointer-events-none select-none overflow-hidden">
          
          {/* Top Panel (0vh to 50vh) - Slides UP on completion */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 right-0 h-[50vh] bg-[#0a0801] border-b border-[#d9d7d4]/10 flex flex-col justify-between p-8 sm:p-16 pointer-events-auto"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif-editorial text-sm tracking-[0.25em] uppercase text-[#d9d7d4]/70">
                K.B. ROYAL
              </span>
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#d9d7d4]/40">
                MUMBAI
              </span>
            </div>

            <div className="text-left max-w-xl">
              <p className="font-serif-editorial text-xl sm:text-3xl text-[#d9d7d4] font-light tracking-wide">
                Stillness in space. Compounded wealth in horizon.
              </p>
            </div>
          </motion.div>

          {/* Bottom Panel (50vh to 100vh) - Slides DOWN on completion */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 right-0 h-[50vh] bg-[#0a0801] border-t border-[#d9d7d4]/10 flex flex-col justify-end p-8 sm:p-16 pointer-events-auto"
          >
            <div className="flex items-end justify-between w-full">
              <div className="flex items-baseline gap-2">
                <span className="font-serif-editorial text-6xl sm:text-8xl text-[#d9d7d4] font-light font-mono">
                  {Math.round(progress)}
                </span>
                <span className="font-mono text-sm text-[#d9d7d4]/50">%</span>
              </div>

              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#d9d7d4]/40 hidden sm:inline">
                REAL ESTATE & INVESTORS CLINIC
              </span>
            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
};
