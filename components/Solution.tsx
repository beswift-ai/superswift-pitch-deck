
import React, { useState, useEffect } from 'react';
import { KnowledgeGraph } from './Hero';

const LogoBolt = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.1,12.7c-0.2-0.5-0.7-0.7-1.3-0.7h-3.4l1.6-7.8c0.1-0.6-0.2-1.2-0.8-1.5c-0.6-0.3-1.3-0.1-1.7,0.4l-6.8,9.2 c-0.3,0.4-0.4,0.9-0.2,1.4c0.2,0.5,0.7,0.7,1.3,0.7h3.4l-1.6,7.8c-0.1,0.6,0.2,1.2,0.8,1.5c0.2,0.1,0.4,0.1,0.6,0.1 c0.4,0,0.8-0.2,1.1-0.5l6.8-9.2C18.4,13.7,18.4,13.2,18.1,12.7z" />
  </svg>
);

const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const pillars = [
  { id: 'intel', name: 'Intel', action: 'Structural Ingestion', desc: 'Building the Knowledge Graph from raw clinical and market data.' },
  { id: 'monitor', name: 'Monitor', action: 'Dynamic Surveillance', desc: 'Radar monitoring of market shifts and competitive bidding.' },
  { id: 'synthesize', name: 'Synthesize', action: 'Strategic Clarity', desc: 'Automated Battle Cards, ICPs, and GTM Canvases.' },
  { id: 'strategize', name: 'Strategize', action: 'Value Mapping', desc: 'Pyramid reasoning of Objectives, KRs, and Initiatives.' },
  { id: 'deliver', name: 'Deliver', action: 'Execution Fleet', desc: 'Augmented human-agentic teams fulfilling initiatives at scale.' },
];

const RadarMonitor: React.FC = () => {
  const [dots, setDots] = useState<{ id: number, x: number, y: number, color: string, size: number, opacity: number }[]>([]);

  useEffect(() => {
    const colors = ['#FF4D2A', '#10B981', '#94A3B8'];
    const interval = setInterval(() => {
      setDots(prev => {
        const next = prev.map(d => ({ ...d, opacity: d.opacity - 0.05 })).filter(d => d.opacity > 0);
        if (Math.random() > 0.6) {
          next.push({
            id: Math.random(),
            x: 15 + Math.random() * 70,
            y: 15 + Math.random() * 70,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: 4 + Math.random() * 10,
            opacity: 1
          });
        }
        return next;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 lg:p-12 overflow-hidden">
      <div className="relative w-80 h-80 border border-white/10 rounded-full flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center animate-[spin_4s_linear_infinite]">
          <div className="w-[2px] h-1/2 bg-gradient-to-t from-transparent to-[#FF4D2A] origin-bottom shadow-[0_0_30px_#FF4D2A]"></div>
        </div>
        <div className="absolute w-64 h-64 border border-white/5 rounded-full"></div>
        <div className="absolute w-44 h-44 border border-white/5 rounded-full"></div>
        <div className="absolute w-24 h-24 border border-white/5 rounded-full"></div>
        {dots.map(dot => (
          <div 
            key={dot.id}
            className="absolute rounded-full transition-opacity duration-300"
            style={{ 
              left: `${dot.x}%`, 
              top: `${dot.y}%`, 
              width: dot.size, 
              height: dot.size, 
              backgroundColor: dot.color, 
              opacity: dot.opacity,
              boxShadow: dot.opacity > 0.5 ? `0 0 15px ${dot.color}` : 'none'
            }}
          ></div>
        ))}
      </div>
      <div className="mt-12 w-3/4 h-2 bg-white/5 rounded-full relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 bg-[#FF4D2A] w-[65%] animate-[pulse_2s_infinite]"></div>
      </div>
    </div>
  );
};

const CanvasSequencer: React.FC = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % 2), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="relative w-full max-w-lg aspect-[1.5/1] bg-white rounded-[3rem] shadow-2xl p-10 text-[#0A1128] animate-in fade-in zoom-in duration-700" key={index}>
        {index === 0 ? (
          <div className="h-full flex flex-col">
            <div className="text-[12px] font-black text-[#FF4D2A] tracking-[0.4em] mb-8 uppercase">COMPETITOR BATTLE CARD</div>
            <div className="flex-1">
              <div className="grid grid-cols-3 gap-2 border-b-2 border-slate-100 pb-4 mb-4">
                <div className="text-[10px] font-black text-slate-300 uppercase">Feature</div>
                <div className="text-[10px] font-black text-slate-800 uppercase text-center">MedDev Inc</div>
                <div className="text-[10px] font-black text-[#FF4D2A] uppercase text-center">MedTechCo</div>
              </div>
              <div className="space-y-6">
                {[
                  { label: 'Clinical Accuracy', val1: '72%', val2: '99.4%' },
                  { label: 'Data Refresh', val1: '6 Months', val2: 'Real-time' },
                  { label: 'GTM Strategy', val1: 'Static PDF', val2: 'Living Graph' },
                  { label: 'Market Velocity', val1: 'Reactive', val2: 'Predictive' }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 gap-2 items-center">
                    <div className="text-[11px] font-bold text-slate-500">{row.label}</div>
                    <div className="text-[12px] font-black text-slate-800 text-center">{row.val1}</div>
                    <div className="text-[12px] font-black text-[#FF4D2A] text-center">{row.val2}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col">
            <div className="text-[12px] font-black text-[#FF4D2A] tracking-[0.4em] mb-8 uppercase">CUSTOMER ADOPTION FUNNEL</div>
            <div className="flex-1 flex flex-col items-center justify-between">
              {[
                { label: 'Awareness', width: 'w-full', pct: '100%' },
                { label: 'Evaluation', width: 'w-4/5', pct: '68%' },
                { label: 'Adoption', width: 'w-3/5', pct: '24%' },
                { label: 'Retention', width: 'w-2/5', pct: '12%' }
              ].map((step, i) => (
                <div key={i} className={`h-12 ${step.width} bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-between px-8 shadow-sm transition-all hover:scale-105`}>
                   <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{step.label}</span>
                   <span className="text-[13px] font-black text-[#FF4D2A]">{step.pct}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Solution: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="h-full w-full bg-[#050A18] flex items-center justify-center p-12 lg:px-24 relative overflow-hidden text-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_#FF4D2A_0%,_transparent_70%)] opacity-[0.03] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center h-full max-h-[85vh]">
        <div className="flex flex-col h-full justify-center">
          <div className="mb-10">
            <span className="text-[#FF4D2A] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">THE PLATFORM</span>
            <h2 className="text-5xl lg:text-7xl font-black leading-tight tracking-tighter">
              A Living<br />OS for Medtech.
            </h2>
          </div>

          <div className="space-y-2">
            {pillars.map((p, i) => (
              <button 
                key={p.id}
                onClick={() => setActiveStep(i)}
                className={`flex items-center gap-6 p-4 rounded-[2.5rem] border transition-all duration-500 text-left w-full group ${
                  activeStep === i ? 'bg-white/5 border-white/10 shadow-2xl scale-[1.02]' : 'bg-transparent border-transparent opacity-30 hover:opacity-50'
                }`}
              >
                <div className={`w-14 h-14 rounded-3xl flex items-center justify-center font-black transition-colors ${activeStep === i ? 'bg-[#FF4D2A] text-white shadow-[0_0_20px_rgba(255,77,42,0.4)]' : 'bg-white/10 text-white/50'}`}>
                  0{i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h4 className={`text-2xl font-black tracking-tight ${activeStep === i ? 'text-white' : 'text-white/40'}`}>{p.name}</h4>
                    {activeStep === i && <span className="text-[8px] font-black bg-[#FF4D2A]/10 text-[#FF4D2A] px-2 py-0.5 rounded-full tracking-widest uppercase">{p.action}</span>}
                  </div>
                  {activeStep === i && <p className="text-sm text-white/30 mt-1 leading-snug animate-in fade-in duration-700">{p.desc}</p>}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="relative aspect-square flex items-center justify-center bg-white/[0.02] rounded-[5rem] border border-white/5 overflow-hidden shadow-2xl">
           <div className="absolute inset-0 flex items-center justify-center">
              {activeStep === 0 && <KnowledgeGraph active={true} />}
              {activeStep === 1 && <RadarMonitor />}
              {activeStep === 2 && <CanvasSequencer />}
              
              {/* Pillar 4: Strategize OKR Pyramid (Scaled Up) */}
              {activeStep === 3 && (
                <div className="flex flex-col items-center w-full max-w-xl p-10 animate-in fade-in translate-y-4 duration-500">
                   <div className="w-full bg-[#FF4D2A] p-10 rounded-[3rem] text-center mb-10 shadow-3xl relative">
                      <div className="text-[12px] font-black opacity-60 mb-3 tracking-[0.3em] uppercase">OBJECTIVE</div>
                      <div className="text-3xl font-black uppercase tracking-widest leading-none">Dominate Core Vertical</div>
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#FF4D2A] rotate-45"></div>
                   </div>
                   <div className="flex gap-8 w-full mb-10">
                      {[1, 2].map(i => (
                        <div key={i} className="flex-1 bg-white/5 border border-white/10 p-8 rounded-[2.5rem] text-center relative transition-transform hover:scale-105">
                           <div className="text-[10px] font-black text-[#FF4D2A] mb-2 tracking-widest uppercase">KEY RESULT</div>
                           <div className="text-base font-black">+45% Market Penetration</div>
                           <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-white/5 rotate-45 border-r border-b border-white/10"></div>
                        </div>
                      ))}
                   </div>
                   <div className="grid grid-cols-3 gap-6 w-full">
                      {[1, 2, 3].map(i => (
                        <div key={i} className={`p-6 rounded-[2rem] text-center border transition-all ${i === 2 ? 'bg-[#10B981] border-[#10B981] shadow-2xl shadow-emerald-500/20 text-white scale-110' : 'bg-white/5 border-white/10 opacity-30 text-white/40'}`}>
                           <div className="text-[9px] font-black mb-1 uppercase opacity-60">INITIATIVE</div>
                           <div className="text-[11px] font-black">Strategic Outreach</div>
                        </div>
                      ))}
                   </div>
                </div>
              )}

              {/* Pillar 5: Deliver Collaboration Animation (Updated) */}
              {activeStep === 4 && (
                <div className="relative w-full h-full flex flex-col items-center justify-center p-12">
                   <div className="flex items-center gap-16 lg:gap-24 mb-20 relative z-10">
                      <div className="flex flex-col items-center">
                        <div className="w-28 h-28 bg-white/5 border border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center text-center p-4 shadow-2xl">
                           <LogoBolt className="w-14 h-14 text-[#FF4D2A] mb-1" />
                           <div className="text-[#FF4D2A] font-black text-[10px] uppercase tracking-[0.4em]">AGENT</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center justify-center">
                         <div className="w-32 h-1.5 bg-gradient-to-r from-[#FF4D2A] to-[#10B981] rounded-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite]"></div>
                         </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-28 h-28 bg-white/5 border border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center text-center p-4 shadow-2xl">
                           <UserIcon className="w-12 h-12 text-[#10B981] mb-2" />
                           <div className="text-[#10B981] font-black text-[10px] uppercase tracking-[0.4em]">HUMAN</div>
                        </div>
                      </div>
                   </div>

                   <div className="w-full max-w-md p-10 bg-[#10B981]/5 border border-[#10B981]/30 rounded-[4rem] shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_linear_infinite]"></div>
                      <div className="relative z-10">
                        <div className="flex justify-between items-center mb-6">
                           <div className="flex items-center gap-3">
                              <div className="w-4 h-4 bg-[#10B981] rounded-full"></div>
                              <span className="text-[#10B981] font-black text-sm uppercase tracking-[0.5em]">FULFILLMENT</span>
                           </div>
                           <span className="text-white text-2xl font-black tracking-tighter">99.8%</span>
                        </div>
                        <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-white/5">
                           <div className="h-full bg-[#10B981] shadow-[0_0_30px_#10B981] animate-[fillUp_5s_ease-out_forwards]"></div>
                        </div>
                        <p className="mt-8 text-center text-white/30 text-[11px] font-black uppercase tracking-[0.6em]">ACTIVE CAMPAIGN PIPELINE</p>
                      </div>
                   </div>
                </div>
              )}
           </div>
        </div>
      </div>

      <style>{`
        @keyframes fillUp { from { width: 0%; } to { width: 99.8%; } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
      `}</style>
    </div>
  );
};

export default Solution;
