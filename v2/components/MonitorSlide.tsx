import React from 'react';
import PillarLayout from './PillarLayout';

const features = [
  { icon: '📡', title: 'Regulatory Alerts', desc: 'Real-time tracking of FDA, CE-MDR, and global regulatory changes impacting your market.' },
  { icon: '👤', title: 'KOL Tracking', desc: 'Monitor key opinion leader publications, conference talks, advisory board moves.' },
  { icon: '⚡', title: 'Signal Detection', desc: 'AI-powered early warning for competitive threats, market shifts, and opportunities.' },
];

const axes = ['Technology/IP', 'Regulatory', 'Financial', 'Clinical'];
const signals = [
  { angle: 30, dist: 0.35, color: '#EF4444', label: 'CerebroFlow patent' },
  { angle: 95, dist: 0.6, color: '#F59E0B', label: 'CE-MDR update' },
  { angle: 140, dist: 0.45, color: '#EF4444', label: 'CerebroFlow Series C' },
  { angle: 210, dist: 0.7, color: '#22C55E', label: 'NeuralGuide trial' },
  { angle: 260, dist: 0.3, color: '#22C55E', label: 'Reimbursement win' },
  { angle: 320, dist: 0.55, color: '#F59E0B', label: 'VascuNet hire' },
  { angle: 50, dist: 0.72, color: '#22C55E', label: 'Patent granted' },
  { angle: 175, dist: 0.8, color: '#EF4444', label: 'New entrant' },
];

const RadarMockup: React.FC = () => {
  const cx = 200, cy = 165, R = 130;
  return (
    <div className="w-full h-full relative">
      <svg viewBox="0 0 400 340" className="w-full h-full">
        {/* Rings */}
        {[0.33, 0.66, 1].map(s => (
          <circle key={s} cx={cx} cy={cy} r={R * s} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={1} />
        ))}
        {/* Axes */}
        {axes.map((label, i) => {
          const angle = (i * 90 - 90) * Math.PI / 180;
          const x2 = cx + Math.cos(angle) * R;
          const y2 = cy + Math.sin(angle) * R;
          const lx = cx + Math.cos(angle) * (R + 18);
          const ly = cy + Math.sin(angle) * (R + 18);
          return (
            <g key={i}>
              <line x1={cx} y1={cy} x2={x2} y2={y2} stroke="rgba(255,255,255,0.08)" strokeWidth={1} />
              <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.3)" fontSize={8} fontFamily="DM Sans">{label}</text>
            </g>
          );
        })}
        {/* Signal dots */}
        {signals.map((s, i) => {
          const a = (s.angle - 90) * Math.PI / 180;
          const x = cx + Math.cos(a) * R * s.dist;
          const y = cy + Math.sin(a) * R * s.dist;
          return (
            <g key={i}>
              <circle cx={x} cy={y} r={5} fill={s.color} opacity={0.2} />
              <circle cx={x} cy={y} r={3} fill={s.color} opacity={0.8} />
            </g>
          );
        })}
        {/* Center dot */}
        <circle cx={cx} cy={cy} r={4} fill="#FF4D2A" opacity={0.8} />
      </svg>
      {/* Threat card */}
      <div className="absolute bottom-2 right-0 w-52 p-3 rounded-xl bg-white/[0.04] border border-red-500/20">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <span className="text-[10px] text-red-400 font-semibold">HIGH IMPACT THREAT</span>
        </div>
        <p className="text-xs font-semibold">CerebroFlow Series C</p>
        <p className="text-[10px] text-white/40 mt-1">Financial · $85M raised · This week</p>
      </div>
    </div>
  );
};

const MonitorSlide: React.FC = () => (
  <PillarLayout pillar="Monitor" tagline="Never miss a signal." features={features}>
    <RadarMockup />
  </PillarLayout>
);

export default MonitorSlide;
