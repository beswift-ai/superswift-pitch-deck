import React, { useEffect, useRef } from 'react';
import logoBolt from '../assets/logo-bolt.png';

/* Constellation of human + agent nodes radiating outward */
const CollectiveSlide: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let raf: number;
    let t = 0;

    interface Node {
      x: number; y: number; r: number; type: 'human' | 'agent' | 'core';
      angle: number; dist: number; speed: number; color: string;
    }

    const nodes: Node[] = [];
    // Core node
    nodes.push({ x: 0, y: 0, r: 18, type: 'core', angle: 0, dist: 0, speed: 0, color: '#FF4D2A' });
    // Inner ring — 6 nodes
    for (let i = 0; i < 6; i++) {
      nodes.push({
        x: 0, y: 0, r: 8, type: i % 2 === 0 ? 'human' : 'agent',
        angle: (i / 6) * Math.PI * 2, dist: 80, speed: 0.0003 + Math.random() * 0.0002,
        color: i % 2 === 0 ? 'rgba(255,255,255,0.6)' : '#FF4D2A',
      });
    }
    // Mid ring — 10 nodes
    for (let i = 0; i < 10; i++) {
      nodes.push({
        x: 0, y: 0, r: 6, type: i % 3 === 0 ? 'agent' : 'human',
        angle: (i / 10) * Math.PI * 2 + 0.3, dist: 160, speed: 0.0002 + Math.random() * 0.0002,
        color: i % 3 === 0 ? '#FF4D2A' : 'rgba(255,255,255,0.4)',
      });
    }
    // Outer ring — 14 nodes
    for (let i = 0; i < 14; i++) {
      nodes.push({
        x: 0, y: 0, r: 4, type: i % 2 === 0 ? 'human' : 'agent',
        angle: (i / 14) * Math.PI * 2 + 0.1, dist: 250, speed: 0.00015 + Math.random() * 0.0001,
        color: i % 2 === 0 ? 'rgba(255,255,255,0.25)' : 'rgba(255,77,42,0.5)',
      });
    }

    const draw = () => {
      const dpr = 2;
      const w = canvas.width = canvas.offsetWidth * dpr;
      const h = canvas.height = canvas.offsetHeight * dpr;
      const cx = w / 2, cy = h / 2;
      ctx.clearRect(0, 0, w, h);
      t += 1;

      // Update positions
      nodes.forEach(n => {
        if (n.type === 'core') { n.x = cx; n.y = cy; return; }
        n.angle += n.speed;
        n.x = cx + Math.cos(n.angle) * n.dist * dpr;
        n.y = cy + Math.sin(n.angle) * n.dist * dpr;
      });

      // Draw connections to core and between neighbors
      nodes.forEach((n, i) => {
        if (n.type === 'core') return;
        // Connect to core
        ctx.beginPath();
        ctx.moveTo(nodes[0].x, nodes[0].y);
        ctx.lineTo(n.x, n.y);
        ctx.strokeStyle = `rgba(255,77,42,${0.04 + (n.dist < 120 ? 0.04 : 0)})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Connect to 2 nearest neighbors
        let nearest: { idx: number; d: number }[] = [];
        nodes.forEach((m, j) => {
          if (j === i || j === 0) return;
          const d = Math.hypot(n.x - m.x, n.y - m.y);
          if (d < 180 * dpr) nearest.push({ idx: j, d });
        });
        nearest.sort((a, b) => a.d - b.d);
        nearest.slice(0, 2).forEach(nb => {
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(nodes[nb.idx].x, nodes[nb.idx].y);
          ctx.strokeStyle = 'rgba(255,255,255,0.025)';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        });
      });

      // Draw nodes
      nodes.forEach(n => {
        // Glow
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * dpr * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = n.type === 'core' ? 'rgba(255,77,42,0.08)' : n.type === 'agent' ? 'rgba(255,77,42,0.04)' : 'rgba(255,255,255,0.02)';
        ctx.fill();
        // Node
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * dpr * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="h-full w-full relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,77,42,0.06)_0%,_transparent_60%)]" />

      {/* Constellation canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }} />

      {/* Content overlay */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center max-w-3xl text-center">
          <img src={logoBolt} alt="" className="w-16 h-16 mb-6 opacity-80" />

          <h2 className="text-6xl font-bold mb-4 leading-tight">
            Collective context makes growth stronger.
          </h2>

          <p className="text-white/40 text-xl mb-10 max-w-xl leading-relaxed">
            An exoskeleton of agentic forces — humans and AI, pointed in the same direction, sharing one context.
          </p>

          {/* Swipe to Ship callout */}
          <div className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-[#FF4D2A]/10 border border-[#FF4D2A]/20 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="#FF4D2A" strokeWidth="1.5" className="w-6 h-6">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-base font-bold mb-0.5">Swipe to Ship</div>
              <div className="text-sm text-white/40">SuperSwift Claude Connector — plug your GTM tools into collective context</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectiveSlide;
