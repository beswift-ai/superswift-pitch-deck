import React from 'react';
import PillarLayout from './PillarLayout';

const COLOR = '#8B5CF6';

const GraphIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.5" className="w-5 h-5">
    <circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="12" cy="18" r="3" />
    <line x1="8.5" y1="7.5" x2="10" y2="16" /><line x1="15.5" y1="7.5" x2="14" y2="16" /><line x1="9" y1="6" x2="15" y2="6" />
  </svg>
);
const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.5" className="w-5 h-5">
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
  </svg>
);
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.5" className="w-5 h-5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const features = [
  { icon: <GraphIcon />, title: 'Knowledge Graph', desc: 'Unified entity graph across everything.' },
  { icon: <LinkIcon />, title: 'Pattern Recognition', desc: 'Non-obvious connections surfaced by AI.' },
  { icon: <ShieldIcon />, title: 'Evidence Mapping', desc: 'Full provenance chain for trust.' },
];

const battlecardRows = [
  { dim: 'Technology', ns: 'AI-guided', cf: 'Manual' },
  { dim: 'Regulatory', ns: 'CE-MDR filed', cf: 'Approved' },
  { dim: 'Clinical', ns: '2 RCTs (n=340)', cf: '1 RCT (n=180)' },
  { dim: 'Funding', ns: '$42M Series B', cf: '$85M Series C' },
  { dim: 'Pricing', ns: '$12,800', cf: '$15,200' },
  { dim: 'Differentiator', ns: 'Real-time AI', cf: 'Brand trust' },
];

const thumbCanvases = [
  'Regulatory Timeline', 'Market Map', 'KOL Network',
  'SWOT Analysis', 'Patent Landscape', 'Pricing Matrix',
  'Stakeholder Map', 'Win/Loss Analysis',
];

const CanvasMockup: React.FC = () => (
  <div className="w-full h-full relative">
    {/* Background: grid of canvas thumbnails */}
    <div className="absolute inset-0 grid grid-cols-4 gap-2 opacity-30">
      {thumbCanvases.map((name, i) => (
        <div key={i} className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-2 flex flex-col">
          <div className="text-[7px] text-white/30 font-semibold mb-1 truncate">{name}</div>
          <div className="flex-1 flex flex-col gap-1">
            {[...Array(3)].map((_, j) => (
              <div key={j} className="h-1.5 rounded-full bg-white/[0.04]" style={{ width: `${60 + Math.random() * 35}%` }} />
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Foreground: battlecard */}
    <div className="absolute inset-x-6 top-4 bottom-4 rounded-xl bg-[#0a0f20]/95 border border-purple-500/20 backdrop-blur-xl p-4 flex flex-col shadow-2xl">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-bold tracking-wider uppercase" style={{ color: COLOR }}>Competitive Battlecard</span>
        <span className="text-[10px] text-white/30">NeuralStent vs CerebroFlow</span>
      </div>
      <div className="flex-1 overflow-hidden rounded-lg border border-white/[0.08]">
        <div className="grid grid-cols-3 text-[10px] font-bold tracking-wider uppercase border-b border-white/[0.08]">
          <div className="p-2.5 text-white/30">Dimension</div>
          <div className="p-2.5 text-[#FF4D2A]/80 border-l border-white/[0.06]">NeuralStent</div>
          <div className="p-2.5 text-blue-400/80 border-l border-white/[0.06]">CerebroFlow</div>
        </div>
        {battlecardRows.map((r, i) => (
          <div key={i} className={`grid grid-cols-3 text-[10px] ${i < battlecardRows.length - 1 ? 'border-b border-white/[0.04]' : ''}`}>
            <div className="p-2.5 text-white/40 font-medium">{r.dim}</div>
            <div className="p-2.5 text-white/60 border-l border-white/[0.06]">{r.ns}</div>
            <div className="p-2.5 text-white/60 border-l border-white/[0.06]">{r.cf}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SynthesizeSlide: React.FC = () => (
  <PillarLayout pillar="Synthesize" tagline="Connect the dots." color={COLOR} pillarIndex={2} features={features}>
    <CanvasMockup />
  </PillarLayout>
);

export default SynthesizeSlide;
