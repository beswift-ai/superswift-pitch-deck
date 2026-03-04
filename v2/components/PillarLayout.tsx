import React from 'react';

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface Props {
  pillar: string;
  tagline: string;
  features: Feature[];
  children: React.ReactNode; // mockup
}

const PillarLayout: React.FC<Props> = ({ pillar, tagline, features, children }) => (
  <div className="h-full w-full flex relative">
    {/* Orange left accent bar */}
    <div className="absolute left-0 top-[15%] bottom-[15%] w-1 bg-[#FF4D2A] rounded-r-full" />
    
    {/* Left: text */}
    <div className="w-[42%] flex flex-col justify-center pl-16 pr-8">
      <p className="text-[#FF4D2A] text-xs font-bold tracking-[0.4em] uppercase mb-3">{pillar}</p>
      <h2 className="text-4xl font-bold mb-8 leading-tight">{tagline}</h2>
      <div className="flex flex-col gap-5">
        {features.map((f, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-[#FF4D2A]/10 border border-[#FF4D2A]/20 flex items-center justify-center text-lg flex-shrink-0">
              {f.icon}
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right: mockup */}
    <div className="w-[58%] flex items-center justify-center pr-12">
      <div className="w-full max-w-[560px] h-[420px] rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md overflow-hidden relative">
        {/* Window chrome */}
        <div className="h-8 border-b border-white/[0.06] flex items-center px-4 gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="ml-3 text-[10px] text-white/20 tracking-wider">SuperSwift</span>
        </div>
        <div className="p-4 h-[calc(100%-2rem)] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default PillarLayout;
