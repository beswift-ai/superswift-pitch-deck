import React from 'react';

const BoltLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-[#FF4D2A]">
    <path d="M18.1,12.7c-0.2-0.5-0.7-0.7-1.3-0.7h-3.4l1.6-7.8c0.1-0.6-0.2-1.2-0.8-1.5c-0.6-0.3-1.3-0.1-1.7,0.4l-6.8,9.2c-0.3,0.4-0.4,0.9-0.2,1.4c0.2,0.5,0.7,0.7,1.3,0.7h3.4l-1.6,7.8c-0.1,0.6,0.2,1.2,0.8,1.5c0.2,0.1,0.4,0.1,0.6,0.1c0.4,0,0.8-0.2,1.1-0.5l6.8-9.2C18.4,13.7,18.4,13.2,18.1,12.7z" />
  </svg>
);

const TitleSlide: React.FC = () => (
  <div className="h-full w-full flex flex-col items-center justify-center relative">
    {/* Subtle radial glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,77,42,0.08)_0%,_transparent_70%)]" />
    
    <div className="relative z-10 flex flex-col items-center gap-8">
      <BoltLogo />
      <h1 className="text-7xl font-bold tracking-tight">
        Outthink the market.
      </h1>
      <div className="flex items-center gap-3 text-white/40 text-lg tracking-widest uppercase">
        <span>ECR 2026</span>
        <span className="w-1 h-1 rounded-full bg-[#FF4D2A]" />
        <span>Vienna</span>
        <span className="w-1 h-1 rounded-full bg-[#FF4D2A]" />
        <span>March 2026</span>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#FF4D2A]/10 border border-[#FF4D2A]/20 flex items-center justify-center">
          <BoltLogoSmall />
        </div>
        <span className="text-white/50 text-sm font-semibold tracking-[0.3em] uppercase">SuperSwift</span>
      </div>
    </div>
  </div>
);

const BoltLogoSmall = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#FF4D2A]">
    <path d="M18.1,12.7c-0.2-0.5-0.7-0.7-1.3-0.7h-3.4l1.6-7.8c0.1-0.6-0.2-1.2-0.8-1.5c-0.6-0.3-1.3-0.1-1.7,0.4l-6.8,9.2c-0.3,0.4-0.4,0.9-0.2,1.4c0.2,0.5,0.7,0.7,1.3,0.7h3.4l-1.6,7.8c-0.1,0.6,0.2,1.2,0.8,1.5c0.2,0.1,0.4,0.1,0.6,0.1c0.4,0,0.8-0.2,1.1-0.5l6.8-9.2C18.4,13.7,18.4,13.2,18.1,12.7z" />
  </svg>
);

export default TitleSlide;
