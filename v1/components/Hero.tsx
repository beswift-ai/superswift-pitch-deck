
import React, { useState, useEffect, useMemo } from 'react';

const LogoBolt = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.1,12.7c-0.2-0.5-0.7-0.7-1.3-0.7h-3.4l1.6-7.8c0.1-0.6-0.2-1.2-0.8-1.5c-0.6-0.3-1.3-0.1-1.7,0.4l-6.8,9.2 c-0.3,0.4-0.4,0.9-0.2,1.4c0.2,0.5,0.7,0.7,1.3,0.7h3.4l-1.6,7.8c-0.1,0.6,0.2,1.2,0.8,1.5c0.2,0.1,0.4,0.1,0.6,0.1 c0.4,0,0.8-0.2,1.1-0.5l6.8-9.2C18.4,13.7,18.4,13.2,18.1,12.7z" />
  </svg>
);

export const KnowledgeGraph: React.FC<{ active?: boolean }> = ({ active = true }) => {
  const [offset, setOffset] = useState(0);
  const nodes = useMemo(() => [
    { id: 'root', label: 'MedTechCo', x: 100, y: 100, size: 12, color: '#FF4D2A', fixed: true },
    { id: 'n1', label: 'MedDev Product', x: 60, y: 60, size: 8, color: '#FFF' },
    { id: 'n2', label: 'KOL SMITH', x: 140, y: 70, size: 4, color: '#FFF' },
    { id: 'n3', label: 'COMPETITOR A', x: 130, y: 140, size: 4, color: '#FFF' },
    { id: 'n4', label: 'FDA 510K', x: 70, y: 150, size: 4, color: '#FFF' },
    { id: 'n5', label: 'MAYO CLINIC', x: 160, y: 110, size: 3, color: '#FFF' },
  ], []);

  useEffect(() => {
    if (!active) return;
    const frame = requestAnimationFrame(function anim() {
      setOffset(o => o + 0.007);
      requestAnimationFrame(anim);
    });
    return () => cancelAnimationFrame(frame);
  }, [active]);

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full opacity-90 transition-opacity duration-1000">
      {nodes.map((n, i) => {
        const x = n.fixed ? n.x : n.x + Math.sin(offset + i * 1.5) * 15;
        const y = n.fixed ? n.y : n.y + Math.cos(offset + i * 1.5) * 15;
        
        return (
          <React.Fragment key={n.id}>
            {!n.fixed && (
              <line 
                x1="100" 
                y1="100" 
                x2={x} 
                y2={y} 
                stroke="white" 
                strokeWidth="0.4" 
                strokeOpacity="0.15" 
              />
            )}
            <circle 
              cx={x} 
              cy={y} 
              r={n.size / 2} 
              fill={n.color} 
              fillOpacity={n.fixed ? 1 : 0.4} 
              className={n.fixed ? 'animate-pulse' : ''}
            />
            <text 
              x={x} 
              y={y - 8} 
              fontSize="5" 
              fill="white" 
              fillOpacity={n.fixed ? 1 : 0.4} 
              textAnchor="middle" 
              className="font-black tracking-tighter uppercase select-none pointer-events-none"
            >
              {n.label}
            </text>
          </React.Fragment>
        );
      })}
    </svg>
  );
};

const Hero: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center justify-center relative bg-[#050A18] overflow-hidden">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#FF4D2A]/10 to-transparent skew-x-[-15deg] translate-x-32 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-12 lg:px-24 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10 animate-in fade-in duration-1000">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-8">
            <div className="w-28 h-28 bg-[#FF4D2A] rounded-[2rem] flex items-center justify-center shadow-[0_25px_60px_-10px_rgba(255,77,42,0.6)]">
              <LogoBolt className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-7xl font-black tracking-tighter text-white">SuperSwift</h2>
          </div>
          
          <h1 className="text-8xl lg:text-[150px] font-black text-white leading-[0.85] tracking-tighter">
            Outthink the<br />
            Market.
          </h1>
          
          <div className="flex flex-col gap-6">
            <p className="text-4xl lg:text-5xl font-serif italic text-white/30 leading-tight max-w-xl">
              The GTM Intelligence Platform purpose-built for Medtech.
            </p>
            <div className="w-40 h-2 bg-[#FF4D2A] rounded-full"></div>
          </div>
        </div>

        <div className="relative scale-125 lg:translate-x-20">
          <div className="aspect-square relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#FF4D2A] rounded-full blur-[180px] opacity-10 animate-pulse"></div>
            <KnowledgeGraph active={true} />
            <div className="absolute bottom-4 right-4 p-8 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl">
              <div className="text-[#FF4D2A] text-[10px] font-black tracking-[0.4em] uppercase mb-1">PROPRIETARY ENGINE</div>
              <div className="text-2xl font-black tracking-tight">Structural Intelligence</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
