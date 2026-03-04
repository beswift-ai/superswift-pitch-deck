import React, { useEffect, useRef } from 'react';
import logoBolt from '../assets/logo-bolt.png';

const TitleSlide: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let frame = 0;
    let raf: number;

    const draw = () => {
      const w = canvas.width = canvas.offsetWidth * 2;
      const h = canvas.height = canvas.offsetHeight * 2;
      ctx.clearRect(0, 0, w, h);
      const gap = 96; // 48px * 2 for retina
      const cols = Math.ceil(w / gap) + 1;
      const rows = Math.ceil(h / gap) + 1;
      frame += 0.003;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * gap;
          const y = r * gap;
          // Gentle wave opacity
          const wave = Math.sin(frame + c * 0.3 + r * 0.2) * 0.5 + 0.5;
          const opacity = 0.02 + wave * 0.04;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${opacity})`;
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated grid canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }} />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,77,42,0.06)_0%,_transparent_60%)]" />

      {/* SuperSwift name at top */}
      <div className="absolute top-10 left-0 w-full flex justify-center z-10">
        <span className="text-white/40 text-sm font-semibold tracking-[0.4em] uppercase">SuperSwift</span>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Big logo */}
        <img src={logoBolt} alt="SuperSwift" className="w-40 h-40 drop-shadow-2xl" />

        <h1 className="text-8xl font-bold tracking-tight leading-none">
          Outthink the market.
        </h1>

        <div className="flex items-center gap-4 text-white/35 text-lg tracking-[0.25em] uppercase mt-2">
          <span>ECR 2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D2A]" />
          <span>Vienna</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D2A]" />
          <span>March 2026</span>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;
