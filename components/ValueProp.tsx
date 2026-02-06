
import React from 'react';

const ValueProp: React.FC = () => {
  const steps = [
    { name: 'Intel', benefit: 'Foundation', desc: 'DATA INGESTION', height: '20%', hoverBg: '#FFF5F2' },
    { name: 'Monitor', benefit: 'Awareness', desc: 'SURVEILLANCE', height: '35%', hoverBg: '#FFEDE9' },
    { name: 'Synthesize', benefit: 'Clarity', desc: 'INSIGHTS', height: '55%', hoverBg: '#FFD6CF' },
    { name: 'Strategize', benefit: 'Optimization', desc: 'PLANNING', height: '75%', hoverBg: '#FF8A75' },
    { name: 'Deliver', benefit: 'Dominance', desc: 'EXECUTION', height: '100%', hoverBg: '#FF4D2A' },
  ];

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

        <div className="flex-1 min-h-0 flex items-end justify-center gap-4 lg:gap-12 border-b-2 border-slate-50 pb-20 relative">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="w-24 lg:w-48 flex flex-col group h-full justify-end relative"
            >
              {/* Outcome Labels positioned above pillars */}
              <div 
                className={`absolute left-0 right-0 text-center transition-all duration-500 pointer-events-none ${
                  step.name === 'Deliver' 
                    ? 'opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0' 
                    : 'opacity-100'
                }`} 
                style={{ bottom: `calc(${step.height} + 16px)` }}
              >
                 <div className="text-[9px] lg:text-[10px] font-black text-[#FF4D2A] uppercase tracking-[0.3em] mb-1">OUTCOME</div>
                 <div className="text-[12px] lg:text-[14px] font-black text-[#0A1128] uppercase tracking-tighter whitespace-nowrap">{step.benefit}</div>
              </div>
              
              <div 
                className="w-full transition-all duration-700 ease-in-out relative group overflow-hidden border-2 border-slate-200 bg-slate-50 rounded-[2rem] lg:rounded-[3.5rem] shadow-sm group-hover:shadow-2xl group-hover:-translate-y-4 group-hover:border-transparent cursor-pointer flex items-start justify-center pt-8 lg:pt-12"
                style={{ height: step.height }}
              >
                {/* Specific Shade Hover Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: step.hoverBg }}
                ></div>

                <div className="relative z-10 px-2 lg:px-4 text-center">
                   <div className={`text-lg lg:text-4xl font-black tracking-tighter transition-colors duration-300 ${i === steps.length - 1 ? 'text-[#0A1128] group-hover:text-white' : 'text-[#0A1128]'}`}>
                      {step.name}
                   </div>
                </div>
              </div>
              
              <div className="mt-8 lg:mt-12 text-center h-16 flex flex-col items-center justify-start">
                <p className="text-[10px] lg:text-[13px] font-black leading-tight uppercase tracking-[0.4em] text-slate-400 group-hover:text-[#FF4D2A] transition-colors duration-300">
                  {step.desc}
                </p>
                <div className="w-8 lg:w-10 h-1 bg-current mt-4 opacity-10 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueProp;
