import React, { useState } from 'react';
import { SmoothScrollProvider } from './components/SmoothScrollProvider';
import { Preloader } from './components/Preloader';
import { FogCanvas } from './components/FogCanvas';
import { SiteHeader } from './components/SiteHeader';
import { MobileBottomBar } from './components/MobileBottomBar';
import { FullscreenMenu } from './components/FullscreenMenu';
import { RoninStyleScrolly } from './components/RoninStyleScrolly';
import { ContactModal } from './components/ContactModal';

export const App: React.FC = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (serviceTitle?: string) => {
    setSelectedServiceTitle(serviceTitle);
    setConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationOpen(false);
    setSelectedServiceTitle(undefined);
  };

  return (
    <SmoothScrollProvider>
      <div className="relative bg-[#0D0B08] text-[#F5E6C8] min-h-screen selection:bg-[#D4AF37] selection:text-[#0D0B08] overflow-x-hidden font-sans">
        
        {/* Subtle Film Grain Noise Overlay */}
        <div className="noise-overlay" />

        {/* Ambient Drifting Mist Canvas */}
        <FogCanvas />

        {/* 0-100% Preloader */}
        {!preloaderDone && (
          <Preloader onComplete={() => setPreloaderDone(true)} />
        )}

        {/* Gold & Ivory Header */}
        <SiteHeader
          onOpenMenu={() => setMenuOpen(true)}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Full-Screen Fluid Menu Overlay */}
        <FullscreenMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Master TVS Ronin-Style Animated Scrollytelling Experience */}
        <main>
          <RoninStyleScrolly onOpenConsultation={handleOpenConsultation} />
        </main>

        {/* Fixed Mobile Bottom 1-Thumb Action Bar */}
        <MobileBottomBar onOpenConsultation={() => handleOpenConsultation()} />

        {/* Minimalist Contact Modal Drawer */}
        <ContactModal
          isOpen={consultationOpen}
          onClose={handleCloseConsultation}
          initialServiceTitle={selectedServiceTitle}
        />

      </div>
    </SmoothScrollProvider>
  );
};

export default App;
