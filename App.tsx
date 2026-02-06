
import React, { useState, useEffect, useCallback } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import ValueProp from './components/ValueProp';
import Market from './components/Market';
import Team from './components/Team';

const LogoBolt = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.1,12.7c-0.2-0.5-0.7-0.7-1.3-0.7h-3.4l1.6-7.8c0.1-0.6-0.2-1.2-0.8-1.5c-0.6-0.3-1.3-0.1-1.7,0.4l-6.8,9.2 c-0.3,0.4-0.4,0.9-0.2,1.4c0.2,0.5,0.7,0.7,1.3,0.7h3.4l-1.6,7.8c-0.1,0.6,0.2,1.2,0.8,1.5c0.2,0.1,0.4,0.1,0.6,0.1 c0.4,0,0.8-0.2,1.1-0.5l6.8-9.2C18.4,13.7,18.4,13.2,18.1,12.7z" />
  </svg>
);

const slides = [
  { id: 'Vision', component: Hero },
  { id: 'Problem', component: Problem },
  { id: 'Platform', component: Solution },
  { id: 'Evolution', component: ValueProp },
  { id: 'Market', component: Market },
  { id: 'Team', component: Team },
];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const isHero = currentSlide === 0;
  const isLightBg = currentSlide === 1 || currentSlide === 3 || currentSlide === 4;
  const ActiveComponent = slides[currentSlide].component;

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#050A18] text-white flex flex-col relative selection:bg-[#FF4D2A] selection:text-white font-sans">
      {/* Persistent Branding */}
      {!isHero && (
        <div className="fixed top-8 left-12 z-[100] flex items-center gap-4 animate-in fade-in duration-500">
           <div className="w-10 h-10 flex items-center justify-center bg-[#050A18] rounded-xl shadow-xl border border-white/5">
             <LogoBolt className="w-6 h-6 text-[#FF4D2A]" />
           </div>
           <span className={`font-black text-[12px] tracking-[0.4em] uppercase ${isLightBg ? 'text-[#0A1128]/40' : 'text-white/40'}`}>
             SuperSwift
           </span>
        </div>
      )}

      {/* Progress Bar Top */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] flex gap-1 px-1 pt-1">
        {slides.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-full flex-1 transition-all duration-700 rounded-full ${
              idx <= currentSlide ? 'bg-[#FF4D2A]' : 'bg-white/10'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <main className="flex-1 relative overflow-hidden">
        <ActiveComponent />
      </main>

      {/* Navigation Controls */}
      <div className="fixed bottom-10 right-12 z-50 flex gap-4">
        <button 
          onClick={prevSlide}
          className={`w-14 h-14 rounded-full border flex items-center justify-center hover:bg-white/5 transition-all backdrop-blur-md ${isLightBg ? 'border-black/10 text-black/40 hover:text-black' : 'border-white/10 text-white/40 hover:text-white'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button 
          onClick={nextSlide}
          className="w-14 h-14 rounded-full bg-[#FF4D2A] flex items-center justify-center hover:scale-110 transition-all shadow-2xl shadow-orange-500/20"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-in { animation: fade-in 0.8s ease-out; }
      `}</style>
    </div>
  );
};

export default App;
