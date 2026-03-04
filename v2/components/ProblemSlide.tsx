import React from 'react';

/* Oversized SVG icons — semi-transparent, zoomed-in, part of card background */
const FragmentIcon = () => (
  <svg viewBox="0 0 64 64" className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 -ml-4 opacity-[0.06]">
    <rect x="4" y="4" width="24" height="24" rx="4" fill="currentColor" />
    <rect x="36" y="4" width="24" height="24" rx="4" fill="currentColor" />
    <rect x="4" y="36" width="24" height="24" rx="4" fill="currentColor" />
    <rect x="36" y="36" width="24" height="24" rx="4" fill="currentColor" />
    <line x1="28" y1="16" x2="36" y2="16" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
    <line x1="16" y1="28" x2="16" y2="36" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
  </svg>
);

const VisionIcon = () => (
  <svg viewBox="0 0 64 64" className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 -ml-4 opacity-[0.06]">
    <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="32" cy="32" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
    <line x1="32" y1="4" x2="32" y2="18" stroke="currentColor" strokeWidth="2" />
    <line x1="32" y1="46" x2="32" y2="60" stroke="currentColor" strokeWidth="2" />
    <line x1="4" y1="32" x2="18" y2="32" stroke="currentColor" strokeWidth="2" />
    <line x1="46" y1="32" x2="60" y2="32" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const SiloIcon = () => (
  <svg viewBox="0 0 64 64" className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 -ml-4 opacity-[0.06]">
    <rect x="6" y="20" width="16" height="36" rx="3" fill="currentColor" />
    <rect x="25" y="12" width="16" height="44" rx="3" fill="currentColor" />
    <rect x="44" y="24" width="16" height="32" rx="3" fill="currentColor" />
    <line x1="22" y1="32" x2="25" y2="32" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    <line x1="41" y1="36" x2="44" y2="36" stroke="currentColor" strokeWidth="2" opacity="0.3" />
  </svg>
);

const TribalIcon = () => (
  <svg viewBox="0 0 64 64" className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 -ml-4 opacity-[0.06]">
    <circle cx="20" cy="18" r="8" fill="currentColor" />
    <circle cx="44" cy="18" r="8" fill="currentColor" />
    <circle cx="32" cy="44" r="8" fill="currentColor" />
    <path d="M20 26 L20 36 Q20 40 24 42 L30 44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
    <path d="M44 26 L44 36 Q44 40 40 42 L34 44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
  </svg>
);

const painCards = [
  { Icon: FragmentIcon, title: 'Context is fragmented', desc: 'Intel scattered across tools, docs, and people.' },
  { Icon: VisionIcon, title: 'No shared vision', desc: 'Teams operate from different playbooks.' },
  { Icon: SiloIcon, title: "AI tools don't talk", desc: 'Point solutions create more silos.' },
  { Icon: TribalIcon, title: 'Strategy stays tribal', desc: 'Critical insights live in heads, not systems.' },
];

const ProblemSlide: React.FC = () => (
  <div className="h-full w-full flex flex-col items-center justify-center px-20">
    <div className="max-w-5xl w-full">
      <p className="text-[#FF4D2A] text-xs font-bold tracking-[0.4em] uppercase mb-4">The Problem</p>
      <h2 className="text-6xl font-bold mb-14 leading-tight">AI without context is just noise.</h2>
      <div className="grid grid-cols-2 gap-5">
        {painCards.map((c, i) => (
          <div key={i} className="relative p-7 pl-28 rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden hover:border-[#FF4D2A]/20 transition-all duration-300">
            <c.Icon />
            <h3 className="text-xl font-bold mb-2">{c.title}</h3>
            <p className="text-white/40 text-base leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProblemSlide;
