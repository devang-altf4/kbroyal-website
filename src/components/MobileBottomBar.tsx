import React from 'react';

interface BottomBarProps {
  onOpenConsultation: () => void;
}

export const MobileBottomBar: React.FC<BottomBarProps> = ({ onOpenConsultation }) => {
  const whatsappNumber = '919967136161';
  const getWhatsappUrl = () => {
    const text = encodeURIComponent('Hello K.B. Royal Team, I am interested in real estate opportunities in Mumbai.');
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#0D0B08]/95 backdrop-blur-xl border-t border-[#D4AF37]/30 sm:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={getWhatsappUrl()}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0B08] font-mono text-[10px] font-bold uppercase tracking-widest shadow-lg"
        >
          💬 WHATSAPP
        </a>

        <button
          onClick={onOpenConsultation}
          className="flex items-center justify-center py-3 rounded-full bg-[#16120D] border border-[#D4AF37]/40 text-[#F5E6C8] font-mono text-[10px] font-bold uppercase tracking-widest"
        >
          📋 INQUIRE NOW
        </button>
      </div>
    </div>
  );
};
