import React, { useEffect, useRef } from 'react';
import PillarLayout from './PillarLayout';

const COLOR = '#3B82F6';

const CompanyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.5" className="w-5 h-5">
    <rect x="3" y="8" width="18" height="13" rx="2" />
    <path d="M7 8V5a2 2 0 012-2h6a2 2 0 012 2v3" />
    <line x1="12" y1="12" x2="12" y2="16" />
  </svg>
);
const RadarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.5" className="w-5 h-5">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill={COLOR} />
    <line x1="12" y1="3" x2="12" y2="7" />
  </svg>
);
const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.5" className="w-5 h-5">
    <path d="M3 20h18" />
    <rect x="5" y="12" width="3" height="8" rx="1" />
    <rect x="10.5" y="6" width="3" height="14" rx="1" />
    <rect x="16" y="9" width="3" height="11" rx="1" />
  </svg>
);

const features = [
  { icon: <CompanyIcon />, title: 'Company Intel', desc: 'Deep profiles: funding, team, products, regulatory.' },
  { icon: <RadarIcon />, title: 'Competitor Radar', desc: 'Track every move in real-time.' },
  { icon: <ChartIcon />, title: 'Market Sizing', desc: 'AI-generated TAM/SAM/SOM with sources.' },
];

// Animated Knowledge Graph
const nodes = [
  { id: 'ns', label: 'NeuralStent', x: 270, y: 200, color: '#FF4D2A', r: 32 },
  { id: 'cf', label: 'CerebroFlow', x: 460, y: 80, color: '#3B82F6', r: 22 },
  { id: 'vn', label: 'VascuNet', x: 470, y: 310, color: '#3B82F6', r: 22 },
  { id: 'np', label: 'NeuroPath', x: 90, y: 90, color: '#3B82F6', r: 22 },
  { id: 'sc', label: 'Dr. S. Chen', x: 70, y: 290, color: '#A855F7', r: 18 },
  { id: 'ng', label: 'NeuralGuide Pro', x: 130, y: 200, color: '#22C55E', r: 18 },
  { id: 'ce', label: 'CE-MDR', x: 410, y: 210, color: '#F59E0B', r: 18 },
  { id: 'fd', label: 'FDA 510(k)', x: 350, y: 340, color: '#F59E0B', r: 18 },
  { id: 'k2', label: 'Prof. J. Walsh', x: 510, y: 190, color: '#A855F7', r: 16 },
  { id: 'p2', label: 'CerebroStent X', x: 530, y: 120, color: '#22C55E', r: 16 },
];

const edges = [
  ['ns', 'cf'], ['ns', 'vn'], ['ns', 'np'], ['ns', 'sc'], ['ns', 'ng'], ['ns', 'ce'], ['ns', 'fd'],
  ['cf', 'ce'], ['cf', 'k2'], ['cf', 'p2'], ['vn', 'fd'], ['np', 'sc'], ['ng', 'ce'],
];

const nodeMap = Object.fromEntries(nodes.map(n => [n.id, n]));

const KGMockup: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let raf: number;
    let t = 0;
    const animate = () => {
      t += 0.008;
      if (!svgRef.current) { raf = requestAnimationFrame(animate); return; }
      const gs = svgRef.current.querySelectorAll<SVGGElement>('.kg-node');
      gs.forEach((g, i) => {
        const dx = Math.sin(t + i * 1.3) * 4;
        const dy = Math.cos(t * 0.7 + i * 0.9) * 4;
        g.setAttribute('transform', `translate(${dx},${dy})`);
      });
      // Update edges
      const lines = svgRef.current.querySelectorAll<SVGLineElement>('.kg-edge');
      lines.forEach((line, i) => {
        const [aId, bId] = edges[i];
        const ga = gs[nodes.findIndex(n => n.id === aId)];
        const gb = gs[nodes.findIndex(n => n.id === bId)];
        if (!ga || !gb) return;
        const na = nodes[nodes.findIndex(n => n.id === aId)];
        const nb = nodes[nodes.findIndex(n => n.id === bId)];
        const ta = ga.getAttribute('transform')!;
        const tb = gb.getAttribute('transform')!;
        const pa = ta.match(/translate\(([^,]+),([^)]+)\)/)!;
        const pb = tb.match(/translate\(([^,]+),([^)]+)\)/)!;
        line.setAttribute('x1', String(na.x + parseFloat(pa[1])));
        line.setAttribute('y1', String(na.y + parseFloat(pa[2])));
        line.setAttribute('x2', String(nb.x + parseFloat(pb[1])));
        line.setAttribute('y2', String(nb.y + parseFloat(pb[2])));
      });
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full h-full relative">
      <div className="absolute top-0 left-0 text-[10px] text-white/30 font-semibold tracking-wider uppercase">Knowledge Graph</div>
      <svg ref={svgRef} viewBox="0 0 580 400" className="w-full h-full">
        {edges.map(([a, b], i) => {
          const na = nodeMap[a], nb = nodeMap[b];
          return <line key={i} className="kg-edge" x1={na.x} y1={na.y} x2={nb.x} y2={nb.y} stroke="rgba(255,255,255,0.07)" strokeWidth={1.2} />;
        })}
        {nodes.map((n, i) => (
          <g key={n.id} className="kg-node">
            <circle cx={n.x} cy={n.y} r={n.r} fill={n.color} opacity={0.12} />
            <circle cx={n.x} cy={n.y} r={n.r * 0.55} fill={n.color} opacity={0.7} />
            <text x={n.x} y={n.y + n.r + 14} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize={10} fontFamily="DM Sans">{n.label}</text>
          </g>
        ))}
      </svg>
      <div className="absolute bottom-0 left-0 flex gap-4">
        {[['Company', '#FF4D2A'], ['Competitor', '#3B82F6'], ['KOL', '#A855F7'], ['Product', '#22C55E'], ['Regulatory', '#F59E0B']].map(([l, c]) => (
          <div key={l} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: c as string }} />
            <span className="text-[10px] text-white/30">{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const IntelSlide: React.FC = () => (
  <PillarLayout pillar="Intel" tagline="Know your battlefield." color={COLOR} pillarIndex={0} features={features}>
    <KGMockup />
  </PillarLayout>
);

export default IntelSlide;
