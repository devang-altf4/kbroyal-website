import React, { useState } from 'react';
import { SmoothScrollProvider } from './components/SmoothScrollProvider';
import { SplitPreloader } from './components/SplitPreloader';
import { FogCanvas } from './components/FogCanvas';
import { SiteHeader } from './components/SiteHeader';
import { FullscreenMenu } from './components/FullscreenMenu';
import { MaskedHeroParallax } from './components/MaskedHeroParallax';
import { CurtainPhilosophySection } from './components/CurtainPhilosophySection';
import { StaggeredGridShowcase } from './components/StaggeredGridShowcase';
import { CompanySection } from './components/CompanySection';
import { SiteFooter } from './components/SiteFooter';
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
      <div className="relative bg-[#0a0801] text-[#d9d7d4] min-h-screen selection:bg-[#d9d7d4] selection:text-[#0a0801] overflow-x-hidden font-sans">
        
        {/* Subtle Film Grain Noise Overlay */}
        <div className="noise-overlay" />

        {/* Ambient Drifting Mist Canvas */}
        <FogCanvas />

        {/* 1. Split Horizontal Panel Preloader (Joseph Berry Goonies Style) */}
        {!preloaderDone && (
          <SplitPreloader onComplete={() => setPreloaderDone(true)} />
        )}

        {/* Fixed Minimal Site Header */}
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

        {/* 2. Joseph Berry 3D Masked Hero Parallax with Looping Video & Staggered Grid */}
        <main>
          <MaskedHeroParallax onOpenConsultation={() => handleOpenConsultation()} />
          <CurtainPhilosophySection />
          <StaggeredGridShowcase onOpenConsultation={handleOpenConsultation} />
          <CompanySection onOpenConsultation={() => handleOpenConsultation()} />
        </main>

        {/* Oversized Editorial Footer */}
        <SiteFooter onOpenConsultation={() => handleOpenConsultation()} />

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
