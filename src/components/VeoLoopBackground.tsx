import React, { useRef, useEffect } from 'react';

interface VeoLoopProps {
  videoSrc?: string;
  fallbackImage?: string;
  overlayOpacity?: number;
}

export const VeoLoopBackground: React.FC<VeoLoopProps> = ({
  videoSrc,
  fallbackImage = '/images/penthouse.png',
  overlayOpacity = 0.65,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle autoplay policy fallback
      });
    }
  }, [videoSrc]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {videoSrc ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-[0.4] contrast-[1.15] scale-105"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <img
          src={fallbackImage}
          alt="Atmospheric Loop Background"
          className="w-full h-full object-cover brightness-[0.35] contrast-[1.15] scale-105"
        />
      )}

      {/* Dark Ambient Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0a0801] via-[#0a0801]/60 to-[#0a0801]/80"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
};
