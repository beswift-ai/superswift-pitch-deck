import React from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface Props {
  pillar: string;
  tagline: string;
  color: string;
  pillarIndex: number; // 0-4
  features: Feature[];
  children: React.ReactNode;
}

const pillars = [
  { label: 'INTEL', color: '#3B82F6' },
  { label: 'MONITOR', color: '#10B981' },
  { label: 'SYNTHESIZE', color: '#8B5CF6' },
  { label: 'STRATEGIZE', color: '#F59E0B' },
  { label: 'DELIVER', color: '#FF4D2A' },
];

const PillarLayout: React.FC<Props> = ({ pillar, tagline, color, pillarIndex, features, children }) => (
  <div className="h-full w-full flex relative justify-center">
    {/* Centering wrapper for large screens */}
    <div className="h-full w-full max-w-[1600px] flex relative">
    {/* Pillar side nav */}
    <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col items-center justify-center gap-1 z-20">
      {pillars.map((p, i) => (
        <div
          key={i}
          className="flex items-center justify-center transition-all duration-300"
          style={{
            width: i === pillarIndex ? 40 : 28,
            height: i === pillarIndex ? 40 : 28,
            borderRadius: 8,
            background: i === pillarIndex ? `${p.color}20` : 'transparent',
            border: i === pillarIndex ? `2px solid ${p.color}` : '2px solid rgba(255,255,255,0.06)',
            marginLeft: i === pillarIndex ? 8 : 0,
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: i === pillarIndex ? 10 : 6,
              height: i === pillarIndex ? 10 : 6,
              background: p.color,
              opacity: i === pillarIndex ? 1 : 0.3,
            }}
          />
        </div>
      ))}
    </div>

    {/* Color accent bar */}
    <div className="absolute left-12 top-[15%] bottom-[15%] w-1 rounded-r-full" style={{ background: color }} />

    {/* Left: text */}
    <div className="w-[42%] flex flex-col justify-center pl-20 pr-8">
      <p className="text-xs font-bold tracking-[0.4em] uppercase mb-3" style={{ color }}>{pillar}</p>
      <h2 className="text-5xl font-bold mb-10 leading-tight">{tagline}</h2>
      <div className="flex flex-col gap-6">
        {features.map((f, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${color}15`, border: `1px solid ${color}30` }}
            >
              {f.icon}
            </div>
            <div>
              <h3 className="font-bold text-base mb-1">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right: visualization */}
    <div className="w-[58%] flex items-center justify-center pr-12">
      <div className="w-full max-w-[700px] h-[520px] rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md overflow-hidden relative">
        <div className="h-8 border-b border-white/[0.06] flex items-center px-4 gap-2">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: `${color}60` }} />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="ml-3 text-[10px] text-white/20 tracking-wider">SuperSwift</span>
        </div>
        <div className="p-5 h-[calc(100%-2rem)] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
    </div>
  </div>
);

export default PillarLayout;
