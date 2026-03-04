import React from 'react';

const painCards = [
  { icon: '🔍', title: 'Context is fragmented', desc: 'Competitive intel scattered across PDFs, emails, CRMs, and tribal knowledge.' },
  { icon: '🎯', title: 'No shared vision', desc: 'Sales, marketing, and strategy teams operate from different playbooks.' },
  { icon: '🤖', title: "AI tools don't talk", desc: 'Point solutions create more silos, not less. No unified GTM context layer.' },
  { icon: '📊', title: 'Strategy stays tribal', desc: 'Critical market insights live in people\'s heads, not in systems.' },
];

const ProblemSlide: React.FC = () => (
  <div className="h-full w-full flex flex-col items-center justify-center px-20">
    <div className="max-w-5xl w-full">
      <p className="text-[#FF4D2A] text-sm font-semibold tracking-[0.3em] uppercase mb-4">The Problem</p>
      <h2 className="text-5xl font-bold mb-4">AI without context is just noise.</h2>
      <p className="text-white/40 text-lg mb-12 max-w-2xl">
        Every AI initiative underperforms because it lacks unified GTM context.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {painCards.map((c, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:border-[#FF4D2A]/30 transition-all duration-300">
            <div className="text-2xl mb-3">{c.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProblemSlide;
