import React from 'react';
import PillarLayout from './PillarLayout';

const features = [
  { icon: '📋', title: 'GTM Playbooks', desc: 'Auto-generated go-to-market playbooks tailored to your competitive position and market entry.' },
  { icon: '🔮', title: 'Scenario Modelling', desc: 'What-if analysis across pricing, timing, and competitive response scenarios.' },
  { icon: '📊', title: 'Insight Reports', desc: 'Board-ready strategy reports with evidence chains and confidence scoring.' },
];

const rows = [
  { dim: 'Technology', ns: 'AI-guided placement', cf: 'Manual placement' },
  { dim: 'Regulatory', ns: 'CE-MDR filed', cf: 'CE-MDR approved' },
  { dim: 'Clinical Evidence', ns: '2 RCTs (n=340)', cf: '1 RCT (n=180)' },
  { dim: 'Funding', ns: 'Series B — $42M', cf: 'Series C — $85M' },
  { dim: 'Market Position', ns: 'Challenger', cf: 'Leader' },
  { dim: 'Key Differentiator', ns: 'Real-time AI guidance', cf: 'Established brand' },
  { dim: 'Pricing', ns: '$12,800/unit', cf: '$15,200/unit' },
  { dim: 'US Strategy', ns: '510(k) pending', cf: '510(k) cleared' },
];

const BattlecardMockup: React.FC = () => (
  <div className="w-full h-full flex flex-col">
    <div className="flex items-center justify-between mb-3">
      <span className="text-[10px] text-white/30 font-semibold tracking-wider uppercase">Competitive Battlecard</span>
    </div>
    <div className="flex-1 overflow-hidden rounded-lg border border-white/[0.08]">
      {/* Header */}
      <div className="grid grid-cols-3 text-[9px] font-bold tracking-wider uppercase border-b border-white/[0.08]">
        <div className="p-2 text-white/30">Dimension</div>
        <div className="p-2 text-[#FF4D2A]/80 border-l border-white/[0.06]">NeuralStent</div>
        <div className="p-2 text-blue-400/80 border-l border-white/[0.06]">CerebroFlow</div>
      </div>
      {/* Rows */}
      {rows.map((r, i) => (
        <div key={i} className={`grid grid-cols-3 text-[9px] ${i < rows.length - 1 ? 'border-b border-white/[0.04]' : ''}`}>
          <div className="p-2 text-white/40 font-medium">{r.dim}</div>
          <div className="p-2 text-white/60 border-l border-white/[0.06]">{r.ns}</div>
          <div className="p-2 text-white/60 border-l border-white/[0.06]">{r.cf}</div>
        </div>
      ))}
    </div>
  </div>
);

const StrategizeSlide: React.FC = () => (
  <PillarLayout pillar="Strategize" tagline="Plan with precision." features={features}>
    <BattlecardMockup />
  </PillarLayout>
);

export default StrategizeSlide;
