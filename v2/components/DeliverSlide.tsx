import React from 'react';
import PillarLayout from './PillarLayout';

const features = [
  { icon: '🚀', title: 'Launch Roadmaps', desc: 'Visual timelines with dependencies, milestones, and team assignments for flawless execution.' },
  { icon: '📄', title: 'Stakeholder Briefs', desc: 'Auto-generated executive summaries tailored to each audience — board, sales, clinical.' },
  { icon: '🔄', title: 'Feedback Loops', desc: 'Continuous market signal ingestion updates your strategy in real-time.' },
];

const milestones = [
  { label: 'KOL Advisory Board', date: 'Q1 2026', status: 'done', x: 8 },
  { label: 'CE-MDR Submission', date: 'Q2 2026', status: 'done', x: 23 },
  { label: 'US 510(k) Filing', date: 'Q2 2026', status: 'active', x: 38 },
  { label: 'EU Commercial Launch', date: 'Q3 2026', status: 'upcoming', x: 55 },
  { label: 'US Launch Prep', date: 'Q4 2026', status: 'upcoming', x: 72 },
  { label: 'Global Expansion', date: 'Q1 2027', status: 'upcoming', x: 88 },
];

const TimelineMockup: React.FC = () => (
  <div className="w-full h-full flex flex-col">
    <div className="flex items-center justify-between mb-3">
      <span className="text-[10px] text-white/30 font-semibold tracking-wider uppercase">Launch Timeline — NeuralStent</span>
      <span className="text-[10px] text-white/20">2026–2027</span>
    </div>
    <div className="flex-1 flex flex-col justify-center relative">
      {/* Timeline bar */}
      <div className="relative h-1 bg-white/[0.06] rounded-full mx-4">
        <div className="absolute left-0 top-0 h-full w-[38%] bg-gradient-to-r from-[#FF4D2A] to-[#FF4D2A]/60 rounded-full" />
      </div>
      {/* Milestones */}
      <div className="relative mt-0 mx-4" style={{ height: 200 }}>
        {milestones.map((m, i) => {
          const top = i % 2 === 0;
          return (
            <div key={i} className="absolute flex flex-col items-center" style={{ left: `${m.x}%`, top: top ? 0 : 90, transform: 'translateX(-50%)' }}>
              {!top && <div className="w-px h-6 bg-white/10 mb-1" />}
              <div className={`w-3 h-3 rounded-full border-2 ${
                m.status === 'done' ? 'bg-[#FF4D2A] border-[#FF4D2A]' :
                m.status === 'active' ? 'bg-[#FF4D2A]/40 border-[#FF4D2A] animate-pulse' :
                'bg-transparent border-white/20'
              }`} />
              {top && <div className="w-px h-6 bg-white/10 mt-1" />}
              <div className={`mt-1 p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] max-w-[100px] text-center ${
                m.status === 'active' ? 'border-[#FF4D2A]/30' : ''
              }`}>
                <p className="text-[9px] font-semibold text-white/70 leading-tight">{m.label}</p>
                <p className="text-[8px] text-white/30 mt-0.5">{m.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

const DeliverSlide: React.FC = () => (
  <PillarLayout pillar="Deliver" tagline="Execute with confidence." features={features}>
    <TimelineMockup />
  </PillarLayout>
);

export default DeliverSlide;
