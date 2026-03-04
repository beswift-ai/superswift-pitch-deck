import React from 'react';
import PillarLayout from './PillarLayout';

const COLOR = '#10B981';

const AlertIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.5" className="w-5 h-5">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 01-3.46 0" />
  </svg>
);
const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.5" className="w-5 h-5">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.5" className="w-5 h-5">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const features = [
  { icon: <AlertIcon />, title: 'Regulatory Alerts', desc: 'FDA, CE-MDR, and global changes in real-time.' },
  { icon: <EyeIcon />, title: 'KOL Tracking', desc: 'Publications, talks, advisory moves.' },
  { icon: <ZapIcon />, title: 'Signal Detection', desc: 'AI early warning for threats and opportunities.' },
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
  const cx = 260, cy = 200, R = 170;
  return (
    <div className="w-full h-full relative">
      <svg viewBox="0 0 520 420" className="w-full h-full">
        {/* Rings */}
        {[0.33, 0.66, 1].map(s => (
          <circle key={s} cx={cx} cy={cy} r={R * s} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={1} />
        ))}
        {/* Sweep animation */}
        <defs>
          <linearGradient id="sweep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={COLOR} stopOpacity="0" />
            <stop offset="1" stopColor={COLOR} stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <g>
          <path d={`M${cx},${cy} L${cx},${cy - R} A${R},${R} 0 0,1 ${cx + R * Math.sin(Math.PI / 4)},${cy - R * Math.cos(Math.PI / 4)} Z`} fill="url(#sweep)">
            <animateTransform attributeName="transform" type="rotate" from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`} dur="6s" repeatCount="indefinite" />
          </path>
        </g>
        {/* Axes */}
        {axes.map((label, i) => {
          const angle = (i * 90 - 90) * Math.PI / 180;
          const x2 = cx + Math.cos(angle) * R;
          const y2 = cy + Math.sin(angle) * R;
          const lx = cx + Math.cos(angle) * (R + 24);
          const ly = cy + Math.sin(angle) * (R + 24);
          return (
            <g key={i}>
              <line x1={cx} y1={cy} x2={x2} y2={y2} stroke="rgba(255,255,255,0.08)" strokeWidth={1} />
              <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.4)" fontSize={11} fontWeight="500" fontFamily="DM Sans">{label}</text>
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
              <circle cx={x} cy={y} r={7} fill={s.color} opacity={0.15} />
              <circle cx={x} cy={y} r={4} fill={s.color} opacity={0.8} />
              <text x={x + 10} y={y + 3} fill="rgba(255,255,255,0.3)" fontSize={9} fontFamily="DM Sans">{s.label}</text>
            </g>
          );
        })}
        <circle cx={cx} cy={cy} r={5} fill={COLOR} opacity={0.9} />
      </svg>
      {/* Threat card */}
      <div className="absolute bottom-3 right-2 w-56 p-4 rounded-xl bg-white/[0.04] border border-red-500/20 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[11px] text-red-400 font-bold tracking-wider uppercase">High Impact</span>
        </div>
        <p className="text-sm font-bold">CerebroFlow Series C</p>
        <p className="text-[11px] text-white/40 mt-1">Financial — $85M raised — This week</p>
      </div>
    </div>
  );
};

const MonitorSlide: React.FC = () => (
  <PillarLayout pillar="Monitor" tagline="Never miss a signal." color={COLOR} pillarIndex={1} features={features}>
    <RadarMockup />
  </PillarLayout>
);

export default MonitorSlide;
