import React from 'react';
import PillarLayout from './PillarLayout';

const features = [
  { icon: '🏢', title: 'Company Intel', desc: 'Deep profiles on any company — funding, team, products, regulatory status, and strategic moves.' },
  { icon: '🎯', title: 'Competitor Radar', desc: 'Track every competitor move in real-time. Pipeline changes, hires, partnerships, patent filings.' },
  { icon: '📐', title: 'Market Sizing', desc: 'AI-generated TAM/SAM/SOM with source citations and methodology transparency.' },
];

// KG nodes
const nodes = [
  { id: 'ns', label: 'NeuralStent', x: 250, y: 180, color: '#FF4D2A', r: 28, type: 'company' },
  { id: 'cf', label: 'CerebroFlow', x: 420, y: 80, color: '#3B82F6', r: 20, type: 'competitor' },
  { id: 'vn', label: 'VascuNet', x: 440, y: 280, color: '#3B82F6', r: 20, type: 'competitor' },
  { id: 'np', label: 'NeuroPath', x: 100, y: 80, color: '#3B82F6', r: 20, type: 'competitor' },
  { id: 'sc', label: 'Dr. S. Chen', x: 80, y: 260, color: '#A855F7', r: 16, type: 'kol' },
  { id: 'ng', label: 'NeuralGuide Pro', x: 140, y: 170, color: '#22C55E', r: 16, type: 'product' },
  { id: 'ce', label: 'CE-MDR', x: 380, y: 190, color: '#F59E0B', r: 16, type: 'regulatory' },
  { id: 'fd', label: 'FDA 510(k)', x: 340, y: 310, color: '#F59E0B', r: 16, type: 'regulatory' },
  { id: 'k2', label: 'Prof. J. Walsh', x: 460, y: 180, color: '#A855F7', r: 14, type: 'kol' },
  { id: 'p2', label: 'CerebroStent X', x: 500, y: 130, color: '#22C55E', r: 14, type: 'product' },
];

const edges = [
  ['ns', 'cf'], ['ns', 'vn'], ['ns', 'np'], ['ns', 'sc'], ['ns', 'ng'], ['ns', 'ce'], ['ns', 'fd'],
  ['cf', 'ce'], ['cf', 'k2'], ['cf', 'p2'], ['vn', 'fd'], ['np', 'sc'], ['ng', 'ce'],
];

const nodeMap = Object.fromEntries(nodes.map(n => [n.id, n]));

const KGMockup: React.FC = () => (
  <div className="w-full h-full relative">
    <div className="absolute top-0 left-0 text-[10px] text-white/30 font-semibold tracking-wider uppercase">Knowledge Graph — NeuralStent</div>
    <svg viewBox="0 0 530 360" className="w-full h-full">
      {/* Edges */}
      {edges.map(([a, b], i) => {
        const na = nodeMap[a], nb = nodeMap[b];
        return <line key={i} x1={na.x} y1={na.y} x2={nb.x} y2={nb.y} stroke="rgba(255,255,255,0.06)" strokeWidth={1} />;
      })}
      {/* Nodes */}
      {nodes.map(n => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={n.r} fill={n.color} opacity={0.15} />
          <circle cx={n.x} cy={n.y} r={n.r * 0.6} fill={n.color} opacity={0.6} />
          <text x={n.x} y={n.y + n.r + 12} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize={9} fontFamily="DM Sans">{n.label}</text>
        </g>
      ))}
    </svg>
    {/* Legend */}
    <div className="absolute bottom-0 left-0 flex gap-3">
      {[['Company', '#FF4D2A'], ['Competitor', '#3B82F6'], ['KOL', '#A855F7'], ['Product', '#22C55E'], ['Regulatory', '#F59E0B']].map(([l, c]) => (
        <div key={l} className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full" style={{ background: c as string }} />
          <span className="text-[9px] text-white/30">{l}</span>
        </div>
      ))}
    </div>
  </div>
);

const IntelSlide: React.FC = () => (
  <PillarLayout pillar="Intel" tagline="Know your battlefield." features={features}>
    <KGMockup />
  </PillarLayout>
);

export default IntelSlide;
