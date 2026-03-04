import React, { useState, useEffect, useCallback } from 'react';
import TitleSlide from './components/TitleSlide';
import ProblemSlide from './components/ProblemSlide';
import IntelSlide from './components/IntelSlide';
import MonitorSlide from './components/MonitorSlide';
import SynthesizeSlide from './components/SynthesizeSlide';
import StrategizeSlide from './components/StrategizeSlide';
import DeliverSlide from './components/DeliverSlide';
import CollectiveSlide from './components/CollectiveSlide';

const slides = [
  { id: 'title', component: TitleSlide },
  { id: 'problem', component: ProblemSlide },
  { id: 'intel', component: IntelSlide },
  { id: 'monitor', component: MonitorSlide },
  { id: 'synthesize', component: SynthesizeSlide },
  { id: 'strategize', component: StrategizeSlide },
  { id: 'deliver', component: DeliverSlide },
  { id: 'collective', component: CollectiveSlide },
];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = useCallback(() => setCurrentSlide(p => Math.min(p + 1, slides.length - 1)), []);
  const prev = useCallback(() => setCurrentSlide(p => Math.max(p - 1, 0)), []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [next, prev]);

  // Touch swipe support
  useEffect(() => {
    let startX = 0;
    const onStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
    };
    window.addEventListener('touchstart', onStart);
    window.addEventListener('touchend', onEnd);
    return () => { window.removeEventListener('touchstart', onStart); window.removeEventListener('touchend', onEnd); };
  }, [next, prev]);

  const Active = slides[currentSlide].component;

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#050A18] text-white font-sans relative select-none">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] flex gap-0.5 px-0.5 pt-0.5">
        {slides.map((_, i) => (
          <div key={i} className={`h-full flex-1 rounded-full transition-all duration-500 ${i <= currentSlide ? 'bg-[#FF4D2A]' : 'bg-white/10'}`} />
        ))}
      </div>

      {/* Slide content */}
      <main className="h-full w-full">
        <Active />
      </main>

      {/* Slide counter */}
      <div className="fixed bottom-8 right-10 z-50 text-white/30 text-sm font-medium tracking-wider">
        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>

      {/* Click navigation zones */}
      <div className="fixed inset-y-0 left-0 w-16 z-40 cursor-w-resize" onClick={prev} />
      <div className="fixed inset-y-0 right-0 w-24 z-40 cursor-e-resize" onClick={next} />
    </div>
  );
};

export default App;
