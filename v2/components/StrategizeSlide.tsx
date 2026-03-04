import React from 'react';
import PillarLayout from './PillarLayout';

const COLOR = '#F59E0B';

const MapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.5" className="w-5 h-5">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
    <line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" />
  </svg>
);
const BranchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.5" className="w-5 h-5">
    <circle cx="6" cy="6" r="2" /><circle cx="18" cy="10" r="2" /><circle cx="18" cy="18" r="2" />
    <path d="M6 8v4a4 4 0 004 4h4" /><path d="M6 8v0a4 4 0 004 4h4" />
  </svg>
);
const TrendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.5" className="w-5 h-5">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const features = [
  { icon: <MapIcon />, title: 'GTM Playbooks', desc: 'Auto-generated, tailored to your position.' },
  { icon: <BranchIcon />, title: 'Scenario Modelling', desc: 'What-if across pricing, timing, response.' },
  { icon: <TrendIcon />, title: 'Insight Reports', desc: 'Board-ready with evidence chains.' },
];

/* OKR / Strategy Tree visualization */
const OKRMockup: React.FC = () => (
  <div className="w-full h-full flex flex-col">
    <div className="text-[10px] text-white/30 font-semibold tracking-wider uppercase mb-4">Strategy Map — NeuralStent 2026</div>

    {/* Objective */}
    <div className="flex justify-center mb-6">
      <div className="px-5 py-3 rounded-xl border-2 border-amber-500/40 bg-amber-500/10 text-center">
        <div className="text-[9px] text-amber-400 font-bold tracking-wider uppercase mb-1">Objective</div>
        <div className="text-sm font-bold">Become #1 in AI-guided neurovascular</div>
      </div>
    </div>

    {/* Connecting lines */}
    <svg className="w-full h-6" viewBox="0 0 500 24">
      <line x1="250" y1="0" x2="85" y2="24" stroke="rgba(245,158,11,0.2)" strokeWidth="1" />
      <line x1="250" y1="0" x2="250" y2="24" stroke="rgba(245,158,11,0.2)" strokeWidth="1" />
      <line x1="250" y1="0" x2="415" y2="24" stroke="rgba(245,158,11,0.2)" strokeWidth="1" />
    </svg>

    {/* Key Results */}
    <div className="grid grid-cols-3 gap-3 flex-1">
      {[
        { kr: 'EU Market Entry', progress: 72, tasks: ['CE-MDR submission', 'KOL advisory formed', 'Distribution signed'] },
        { kr: 'Clinical Evidence', progress: 45, tasks: ['RCT enrollment 80%', 'Registry launched', 'Publication pipeline'] },
        { kr: 'US Regulatory', progress: 28, tasks: ['510(k) pre-sub done', 'Clinical data compiled', 'FDA meeting Q3'] },
      ].map((item, i) => (
        <div key={i} className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 flex flex-col">
          <div className="text-[9px] text-amber-400/70 font-bold tracking-wider uppercase mb-1">Key Result {i + 1}</div>
          <div className="text-[12px] font-bold mb-2">{item.kr}</div>
          {/* Progress bar */}
          <div className="h-1.5 bg-white/[0.06] rounded-full mb-3 overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400" style={{ width: `${item.progress}%` }} />
          </div>
          <div className="text-[10px] text-white/30 mb-1">{item.progress}% complete</div>
          <div className="flex flex-col gap-1.5 mt-auto">
            {item.tasks.map((t, j) => (
              <div key={j} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded border flex items-center justify-center ${j === 0 ? 'border-amber-500/40 bg-amber-500/20' : 'border-white/10'}`}>
                  {j === 0 && <svg viewBox="0 0 12 12" className="w-2 h-2"><polyline points="2 6 5 9 10 3" fill="none" stroke="#F59E0B" strokeWidth="2" /></svg>}
                </div>
                <span className={`text-[10px] ${j === 0 ? 'text-white/50 line-through' : 'text-white/50'}`}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const StrategizeSlide: React.FC = () => (
  <PillarLayout pillar="Strategize" tagline="Plan with precision." color={COLOR} pillarIndex={3} features={features}>
    <OKRMockup />
  </PillarLayout>
);

export default StrategizeSlide;
