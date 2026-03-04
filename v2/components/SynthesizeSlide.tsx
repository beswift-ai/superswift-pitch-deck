import React from 'react';
import PillarLayout from './PillarLayout';

const features = [
  { icon: '🧠', title: 'Knowledge Graph', desc: 'Unified entity graph connecting companies, people, products, regulations, and market events.' },
  { icon: '🔗', title: 'Pattern Recognition', desc: 'AI identifies non-obvious connections between market signals and competitive moves.' },
  { icon: '📎', title: 'Evidence Mapping', desc: 'Every insight traced back to its source. Full provenance chain for audit and trust.' },
];

const canvases = [
  { name: 'Competitive Battlecard', status: 'done' },
  { name: 'Market Map', status: 'done' },
  { name: 'Regulatory Timeline', status: 'done' },
  { name: 'KOL Network', status: 'done' },
  { name: 'SWOT Analysis', status: 'done' },
  { name: 'Patent Landscape', status: 'generating' },
  { name: 'Pricing Matrix', status: 'done' },
  { name: 'Channel Strategy', status: 'done' },
  { name: 'Clinical Evidence', status: 'done' },
  { name: 'Reimbursement Map', status: 'generating' },
  { name: 'Value Proposition', status: 'done' },
  { name: 'Stakeholder Map', status: 'done' },
  { name: 'Risk Register', status: 'done' },
  { name: 'Objection Handler', status: 'done' },
  { name: 'Win/Loss Analysis', status: 'empty' },
  { name: 'Market Sizing', status: 'done' },
  { name: 'Launch Playbook', status: 'empty' },
];

const CanvasMockup: React.FC = () => (
  <div className="w-full h-full">
    <div className="flex items-center justify-between mb-3">
      <span className="text-[10px] text-white/30 font-semibold tracking-wider uppercase">Canvases — NeuralStent</span>
      <span className="text-[10px] text-white/20">{canvases.filter(c => c.status === 'done').length}/{canvases.length} ready</span>
    </div>
    <div className="grid grid-cols-4 gap-1.5">
      {canvases.map((c, i) => (
        <div key={i} className={`p-2 rounded-lg border text-[9px] leading-tight ${
          c.status === 'done' ? 'bg-white/[0.03] border-white/[0.08] text-white/60' :
          c.status === 'generating' ? 'bg-[#FF4D2A]/5 border-[#FF4D2A]/20 text-[#FF4D2A]/70' :
          'bg-white/[0.01] border-white/[0.04] text-white/20'
        }`}>
          <div className="flex items-center gap-1 mb-0.5">
            {c.status === 'done' && <span className="text-green-500 text-[8px]">●</span>}
            {c.status === 'generating' && <span className="text-[#FF4D2A] text-[8px] animate-pulse">◌</span>}
            {c.status === 'empty' && <span className="text-white/20 text-[8px]">○</span>}
          </div>
          {c.name}
        </div>
      ))}
    </div>
  </div>
);

const SynthesizeSlide: React.FC = () => (
  <PillarLayout pillar="Synthesize" tagline="Connect the dots." features={features}>
    <CanvasMockup />
  </PillarLayout>
);

export default SynthesizeSlide;
