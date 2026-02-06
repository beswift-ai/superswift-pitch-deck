
import React from 'react';

const CloudIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.4-1.9-4.3-4.3-4.5C17.2 6.8 14.1 4 10.5 4 7.3 4 4.5 6.2 3.8 9.3 1.6 10.1 0 12.1 0 14.5 0 17 2 19 4.5 19h13z" />
  </svg>
);

const LoptopIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="1" y1="20" x2="23" y2="20" />
  </svg>
);

const BrainIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9.5 2a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.5c-2.485 0-4.5 2.015-4.5 4.5 0 1.25.5 2.5 1.5 3.5m0 0a5 5 0 0 1 1.5 3.5c0 2.485-2.015 4.5-4.5 4.5a.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5c1.933 0 3.5-1.567 3.5-3.5 0-.966-.387-1.933-1.161-2.707a4.996 4.996 0 0 1-1.339-3.293c0-1.933 1.567-3.5 3.5-3.5zM14.5 2a.5.5 0 0 0-.5.5.5.5 0 0 0 .5.5c2.485 0 4.5 2.015 4.5 4.5 0 1.25-.5 2.5-1.5 3.5m0 0a5 5 0 0 0-1.5 3.5c0 2.485-2.015 4.5 4.5 4.5a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5c-1.933 0-3.5-1.567-3.5-3.5 0-.966.387-1.933 1.161-2.707a4.996 4.996 0 0 0 1.339-3.293c0-1.933-1.567-3.5-3.5-3.5z" />
  </svg>
);

const SocialIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const LoopIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8z" />
    <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.657-5.657l1.414-1.414M4.929 19.071l1.414-1.414m0-11.314L4.929 4.929m14.142 14.142l-1.414-1.414" />
    <path d="M12 12l3 3m-3-3l-3 3m3-3V8" strokeLinecap="round" />
  </svg>
);

const ScatteredContext: React.FC = () => {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      {/* Central Fragmented Process (The Strategy Void) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-24 h-24 bg-slate-100 rounded-[2.5rem] flex items-center justify-center shadow-2xl border-4 border-slate-200 animate-[spin_10s_linear_infinite] group cursor-help">
          <LoopIcon className="w-10 h-10 text-slate-400 group-hover:text-red-400 transition-colors" />
        </div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-center w-max">
           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block mb-1">STRATEGY BOTTLENECK</span>
           <span className="text-[8px] font-bold text-slate-300 uppercase italic">(Manual & Fragmented)</span>
        </div>
      </div>

      {/* Scattered Sources */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center group">
        <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 shadow-lg group-hover:border-red-200 transition-all duration-500">
          <CloudIcon className="w-8 h-8" />
        </div>
        <span className="text-[9px] font-black uppercase tracking-widest mt-2 text-slate-300">Cloud Data</span>
        <div className="h-20 w-px bg-gradient-to-t from-slate-200 to-transparent mt-2"></div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col-reverse items-center group">
        <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 shadow-lg group-hover:border-red-200 transition-all duration-500">
          <SocialIcon className="w-8 h-8" />
        </div>
        <span className="text-[9px] font-black uppercase tracking-widest mb-2 text-slate-300">Social Signals</span>
        <div className="h-20 w-px bg-gradient-to-b from-slate-200 to-transparent mb-2"></div>
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center group">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 shadow-lg group-hover:border-red-200 transition-all duration-500">
            <LoptopIcon className="w-8 h-8" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest mt-2 text-slate-300">PPT & Files</span>
        </div>
        <div className="w-20 h-px bg-gradient-to-l from-slate-200 to-transparent ml-2"></div>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-row-reverse items-center group">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 shadow-lg group-hover:border-red-200 transition-all duration-500">
            <BrainIcon className="w-8 h-8 opacity-50" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest mt-2 text-slate-300">Human Intuition</span>
        </div>
        <div className="w-20 h-px bg-gradient-to-r from-slate-200 to-transparent mr-2"></div>
      </div>

      {/* Floating Particles (Representing "Leaking" or Lost Information) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-slate-300 rounded-full animate-leak"
            style={{
              animationDelay: `${i * 0.7}s`,
              left: '50%',
              top: '50%'
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes leak {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          100% { 
            transform: translate(${Math.random() > 0.5 ? '200px' : '-200px'}, ${Math.random() > 0.5 ? '200px' : '-200px'}) scale(0); 
            opacity: 0; 
          }
        }
        .animate-leak {
          animation: leak 4s ease-out infinite;
        }
      `}</style>
    </div>
  );
};

const Problem: React.FC = () => {
  const options = [
    { label: 'Top-tier Consulting', cost: '$500K', result: 'Static PDF, stale in 6 months.', type: 'status' },
    { label: 'Specialized GTM Teams', cost: '$1M+/yr', result: 'Infinite ramp-up time.', type: 'status' },
    { label: 'Generic AI Tools', cost: '$50K/yr', result: 'Dangerous hallucinations.', type: 'status' },
    { label: 'Status Quo', cost: 'Equity', result: '70% Medtech Failure Rate.', type: 'danger' },
  ];

  return (
    <div className="h-full w-full flex flex-col justify-center bg-white text-[#0A1128] px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-[-15deg] translate-x-32 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 py-12 flex flex-col h-full max-h-screen">
        <div className="mb-12 shrink-0 mt-8">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-8 h-0.5 bg-[#FF4D2A]"></div>
             <span className="text-[#FF4D2A] font-black uppercase tracking-[0.4em] text-[10px]">THE COMMERCIAL GAP</span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-black leading-[1.0] tracking-tighter max-w-4xl">
            Commercial intelligence remains dangerously static.
          </h2>
          <p className="text-xl lg:text-2xl text-slate-400 font-serif italic mt-6 max-w-3xl leading-relaxed opacity-80">
            "High-fidelity clinical assets are being brought to market using low-fidelity commercial snapshots scattered across silos."
          </p>
        </div>

        <div className="flex-1 min-h-0 grid lg:grid-cols-5 gap-16 items-center">
          {/* Left Column: Scattered Illustration */}
          <div className="lg:col-span-2 hidden lg:flex flex-col items-center">
            <ScatteredContext />
          </div>

          {/* Right Column: Comparison Table */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[2.5rem] shadow-[0_30px_100px_-20px_rgba(10,17,40,0.15)] border border-slate-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="px-8 py-6 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">Strategic Option</th>
                    <th className="px-8 py-6 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">Typical Burn</th>
                    <th className="px-8 py-6 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {options.map((opt, i) => (
                    <tr 
                      key={i} 
                      className={`transition-all duration-300 ${opt.type === 'danger' ? 'bg-red-50/50' : 'hover:bg-slate-50/30'}`}
                    >
                      <td className={`px-8 py-6 lg:py-8 text-lg font-bold ${opt.type === 'danger' ? 'text-red-700' : 'text-slate-800'}`}>{opt.label}</td>
                      <td className={`px-8 py-6 lg:py-8 text-lg font-bold ${opt.type === 'danger' ? 'text-red-500' : 'text-slate-500'}`}>{opt.cost}</td>
                      <td className={`px-8 py-6 lg:py-8 text-lg italic ${opt.type === 'danger' ? 'text-red-700 font-black not-italic' : 'text-slate-400'}`}>{opt.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-12 shrink-0 border-t border-slate-100 pt-8 flex items-center justify-between opacity-50">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 italic">MEDTECH MARKET INSIGHT REPORT</span>
          <div className="flex gap-4">
             <div className="w-2 h-2 rounded-full bg-red-400"></div>
             <div className="w-2 h-2 rounded-full bg-slate-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
