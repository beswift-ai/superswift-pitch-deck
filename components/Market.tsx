
import React from 'react';

const Market: React.FC = () => {
  return (
    <div className="h-full w-full bg-white flex items-center p-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-[#FF4D2A] font-black uppercase tracking-[0.4em] text-sm mb-10 block">MARKET OPPORTUNITY</span>
          <h2 className="text-6xl lg:text-[100px] font-black text-[#0A1128] leading-[0.85] tracking-tighter mb-12">
            $600B Global TAM.<br />
            <span className="text-slate-200">Structural gap.</span>
          </h2>
          
          <div className="grid grid-cols-2 gap-16">
            <div>
              <div className="text-7xl font-black text-[#FF4D2A] mb-6 tracking-tighter">9k+</div>
              <p className="text-slate-600 font-bold text-lg leading-snug">Early-stage Medtech firms with validated assets but zero structural intelligence.</p>
            </div>
            <div>
              <div className="text-7xl font-black text-[#0A1128] mb-6 tracking-tighter">70%</div>
              <p className="text-slate-600 font-bold text-lg leading-snug">Commercial failure rate due to lack of market-adaptive strategy.</p>
            </div>
          </div>

          <div className="mt-16 p-10 bg-slate-100 border border-slate-200 rounded-[3.5rem]">
            <h4 className="text-2xl font-black mb-4 uppercase tracking-tight text-[#0A1128]">Purpose Built Architecture</h4>
            <p className="text-slate-800 text-lg lg:text-xl italic font-medium leading-relaxed">
              "Regulatory bars are rising. Generic LLMs fail at factual precision. SuperSwift is the only purpose-built engine for Medtech complexity."
            </p>
          </div>
        </div>

        <div className="relative scale-95">
           <div className="bg-[#0A1128] p-20 rounded-[5rem] text-white overflow-hidden relative group shadow-3xl">
             <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D2A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative z-10">
               <div className="w-24 h-2 bg-[#FF4D2A] mb-12"></div>
               <h3 className="text-5xl font-black mb-10 tracking-tight">Horizontal Scale</h3>
               <p className="text-white/40 text-2xl font-medium leading-relaxed mb-12 italic">Modular Knowledge Graph logic allows rapid deployment across therapeutic verticals.</p>
               <div className="space-y-6">
                 {['Cardiology', 'Orthopedics', 'Neurology', 'Diabetology'].map((field, i) => (
                   <div key={i} className="flex justify-between items-center py-6 border-b border-white/5 group/item cursor-pointer">
                     <span className="font-black text-2xl group-hover/item:text-[#FF4D2A] transition-colors tracking-tighter">{field}</span>
                     <span className="text-[#FF4D2A] text-xs font-black uppercase tracking-[0.4em] bg-[#FF4D2A]/10 px-6 py-1.5 rounded-full">Deployable</span>
                   </div>
                 ))}
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
