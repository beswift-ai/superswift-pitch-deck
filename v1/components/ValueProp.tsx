
import React from 'react';

const ValueProp: React.FC = () => {
  const steps = [
    { name: 'Intel', benefit: 'Foundation', desc: 'DATA INGESTION', h: 120, hoverBg: '#FFF5F2' },
    { name: 'Monitor', benefit: 'Awareness', desc: 'SURVEILLANCE', h: 200, hoverBg: '#FFEDE9' },
    { name: 'Synthesize', benefit: 'Clarity', desc: 'INSIGHTS', h: 280, hoverBg: '#FFD6CF' },
    { name: 'Strategize', benefit: 'Optimization', desc: 'PLANNING', h: 360, hoverBg: '#FF8A75' },
    { name: 'Deliver', benefit: 'Dominance', desc: 'EXECUTION', h: 440, hoverBg: '#FF4D2A' },
  ];

  const maxH = Math.max(...steps.map(s => s.h));

  return (
    <div className="h-full w-full bg-white flex flex-col items-center justify-center p-8 lg:p-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">

        <div className="text-center mb-20 lg:mb-28 shrink-0">
          <span className="text-[#FF4D2A] font-black uppercase tracking-[0.4em] text-[12px] mb-4 block">PLATFORM EVOLUTION</span>
          <h2 className="text-5xl lg:text-9xl font-black text-[#0A1128] tracking-tighter mb-4 leading-tight">
            Compounding Advantage.
          </h2>
          <p className="text-xl lg:text-3xl text-slate-500 max-w-3xl mx-auto font-serif italic leading-relaxed opacity-80">
            "Structural intelligence creates an unstoppable feedback loop."
          </p>
        </div>

        <div className="flex items-end justify-center gap-4 lg:gap-10 relative" style={{ height: `${maxH + 80}px` }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="w-28 lg:w-52 flex flex-col items-center group relative"
              style={{ height: `${maxH + 80}px`, justifyContent: 'flex-end' }}
            >
              {/* Outcome label - always floating above pillar */}
              <div className="text-center mb-3 transition-all duration-500">
                 <div className="text-[8px] lg:text-[9px] font-black text-[#FF4D2A] uppercase tracking-[0.3em] mb-0.5">OUTCOME</div>
                 <div className="text-[10px] lg:text-[12px] font-black text-[#0A1128] uppercase tracking-tight whitespace-nowrap">{step.benefit}</div>
              </div>

              {/* Pillar */}
              <div
                className="w-full transition-all duration-700 ease-in-out relative overflow-hidden border-2 border-slate-200 bg-slate-50 rounded-[2rem] lg:rounded-[3.5rem] shadow-sm group-hover:shadow-2xl group-hover:-translate-y-4 group-hover:border-transparent cursor-pointer flex items-center justify-center shrink-0"
                style={{ height: `${step.h}px` }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: step.hoverBg }}
                ></div>

                <div className="relative z-10 px-2 lg:px-4 text-center">
                   <div className={`text-sm lg:text-2xl font-black tracking-tighter transition-colors duration-300 ${i === steps.length - 1 ? 'text-[#0A1128] group-hover:text-white' : 'text-[#0A1128]'}`}>
                      {step.name}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Labels row - all at same height below pillars */}
        <div className="flex items-start justify-center gap-4 lg:gap-10 mt-8 lg:mt-12">
          {steps.map((step, i) => (
            <div key={i} className="w-28 lg:w-52 text-center">
              <p className="text-[9px] lg:text-[11px] font-black leading-tight uppercase tracking-[0.3em] text-slate-400">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueProp;
