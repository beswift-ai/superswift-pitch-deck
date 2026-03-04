import React from 'react';
import PillarLayout from './PillarLayout';

const COLOR = '#FF4D2A';

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.5" className="w-5 h-5">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11.95A22 22 0 0112 15z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);
const DocIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.5" className="w-5 h-5">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);
const LoopIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.5" className="w-5 h-5">
    <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
  </svg>
);

const features = [
  { icon: <RocketIcon />, title: 'Growth Sprints', desc: 'Humans + AI agents, executing together.' },
  { icon: <DocIcon />, title: 'Stakeholder Briefs', desc: 'Auto-generated for every audience.' },
  { icon: <LoopIcon />, title: 'Feedback Loops', desc: 'Continuous signal updates your strategy.' },
];

const PersonIcon = ({ x, y }: { x: number; y: number }) => (
  <svg x={x} y={y} width="20" height="20" viewBox="0 0 20 20">
    <circle cx="10" cy="7" r="4" fill="rgba(255,255,255,0.5)" />
    <path d="M2 18c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="rgba(255,255,255,0.3)" />
  </svg>
);

const AgentIcon = ({ x, y }: { x: number; y: number }) => (
  <svg x={x} y={y} width="20" height="20" viewBox="0 0 20 20">
    <rect x="3" y="4" width="14" height="10" rx="3" fill="rgba(255,77,42,0.5)" />
    <circle cx="7.5" cy="9" r="1.5" fill="rgba(255,255,255,0.7)" />
    <circle cx="12.5" cy="9" r="1.5" fill="rgba(255,255,255,0.7)" />
    <rect x="6" y="15" width="8" height="2" rx="1" fill="rgba(255,77,42,0.3)" />
  </svg>
);

const sprintTasks = [
  { name: 'Market research', lane: 'agent', status: 'done' },
  { name: 'KOL outreach list', lane: 'agent', status: 'done' },
  { name: 'Advisory board invite', lane: 'human', status: 'done' },
  { name: 'Competitive battlecard', lane: 'agent', status: 'active' },
  { name: 'Pricing strategy', lane: 'human', status: 'active' },
  { name: 'Distribution brief', lane: 'agent', status: 'active' },
  { name: 'Partner negotiations', lane: 'human', status: 'todo' },
  { name: 'Launch playbook', lane: 'agent', status: 'todo' },
  { name: 'Sales enablement', lane: 'human', status: 'todo' },
];

const SprintMockup: React.FC = () => (
  <div className="w-full h-full flex flex-col">
    <div className="flex items-center justify-between mb-3">
      <span className="text-[11px] font-bold tracking-wider uppercase" style={{ color: COLOR }}>Sprint 1: Market Entry</span>
      <span className="text-[10px] text-white/30">3 of 9 complete</span>
    </div>

    {/* Kanban columns */}
    <div className="flex-1 grid grid-cols-3 gap-2">
      {[
        { label: 'Done', tasks: sprintTasks.filter(t => t.status === 'done') },
        { label: 'In Progress', tasks: sprintTasks.filter(t => t.status === 'active') },
        { label: 'Up Next', tasks: sprintTasks.filter(t => t.status === 'todo') },
      ].map((col, ci) => (
        <div key={ci} className="flex flex-col">
          <div className="text-[10px] text-white/30 font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
            {col.label}
            <span className="text-[9px] bg-white/[0.06] px-1.5 py-0.5 rounded-full">{col.tasks.length}</span>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            {col.tasks.map((task, ti) => (
              <div key={ti} className={`p-3 rounded-lg border ${
                ci === 0 ? 'bg-white/[0.02] border-white/[0.04]' :
                ci === 1 ? 'bg-white/[0.03] border-orange-500/15' :
                'bg-white/[0.015] border-white/[0.04]'
              }`}>
                <div className="text-[11px] font-semibold mb-2">{task.name}</div>
                <div className="flex items-center gap-1.5">
                  {task.lane === 'human' ? (
                    <>
                      <svg viewBox="0 0 16 16" className="w-3.5 h-3.5"><circle cx="8" cy="5.5" r="3" fill="rgba(255,255,255,0.4)" /><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="rgba(255,255,255,0.2)" /></svg>
                      <span className="text-[9px] text-white/30">Human</span>
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 16 16" className="w-3.5 h-3.5"><rect x="2.5" y="3" width="11" height="8" rx="2.5" fill="rgba(255,77,42,0.4)" /><circle cx="6" cy="7" r="1" fill="rgba(255,255,255,0.6)" /><circle cx="10" cy="7" r="1" fill="rgba(255,255,255,0.6)" /><rect x="5" y="12" width="6" height="1.5" rx="0.75" fill="rgba(255,77,42,0.25)" /></svg>
                      <span className="text-[9px] text-orange-400/50">AI Agent</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Legend */}
    <div className="flex items-center gap-4 mt-3 pt-2 border-t border-white/[0.04]">
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 12 12" className="w-3 h-3"><circle cx="6" cy="4" r="2.5" fill="rgba(255,255,255,0.4)" /><path d="M1.5 11c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" fill="rgba(255,255,255,0.2)" /></svg>
        <span className="text-[9px] text-white/30">Human tasks</span>
      </div>
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 12 12" className="w-3 h-3"><rect x="1.5" y="2" width="9" height="6" rx="2" fill="rgba(255,77,42,0.4)" /><circle cx="4.5" cy="5" r="0.8" fill="rgba(255,255,255,0.6)" /><circle cx="7.5" cy="5" r="0.8" fill="rgba(255,255,255,0.6)" /></svg>
        <span className="text-[9px] text-white/30">AI Agent tasks</span>
      </div>
    </div>
  </div>
);

const DeliverSlide: React.FC = () => (
  <PillarLayout pillar="Deliver" tagline="Execute with confidence." color={COLOR} pillarIndex={4} features={features}>
    <SprintMockup />
  </PillarLayout>
);

export default DeliverSlide;
