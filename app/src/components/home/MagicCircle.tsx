import { useId } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface Props {
  mouseX: number;
  mouseY: number;
}

export function MagicCircle({ mouseX, mouseY }: Props) {
  const prefersReduced = useReducedMotion();
  const id = useId();
  const gid = (s: string) => `${id}-${s}`;

  const cx = 140;
  const cy = 160;
  const r = 120;

  // Octagram star
  const starPts: string[] = [];
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4 - Math.PI / 2;
    const d = i % 2 === 0 ? 44 : 24;
    starPts.push(`${(cx + d * Math.cos(a)).toFixed(1)},${(cy + d * Math.sin(a)).toFixed(1)}`);
  }

  // 12 orbiting dots on a ring
  const dots: { x: number; y: number }[] = [];
  for (let i = 0; i < 12; i++) {
    const a = (i * Math.PI * 2) / 12;
    dots.push({ x: cx + 90 * Math.cos(a), y: cy + 90 * Math.sin(a) });
  }

  // Outer rune marks
  const runes: { x: number; y: number; rot: number }[] = [];
  for (let i = 0; i < 36; i++) {
    const a = (i * Math.PI * 2) / 36;
    runes.push({ x: cx + 114 * Math.cos(a), y: cy + 114 * Math.sin(a), rot: (a * 180) / Math.PI + 90 });
  }

  return (
    <motion.div
      className="fixed pointer-events-none z-30"
      style={{ width: 320, height: 320, left: mouseX - 160, top: mouseY - 160 }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <svg viewBox="0 0 280 280" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={gid('glow-outer')}>
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id={gid('glow-inner')}>
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id={gid('grad')} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.35)" />
            <stop offset="40%" stopColor="rgba(59,130,246,0.12)" />
            <stop offset="75%" stopColor="rgba(59,130,246,0.03)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0)" />
          </radialGradient>
        </defs>

        {/* Ambient glow */}
        <circle cx={cx} cy={cy} r={130} fill={`url(#${gid('grad')})`} />

        {/* Outer rotating group */}
        <g
          filter={`url(#${gid('glow-outer')})`}
          style={
            prefersReduced
              ? undefined
              : { animation: 'spin 25s linear infinite', transformOrigin: `${cx}px ${cy}px` }
          }
        >
          {/* Outermost ring */}
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(59,130,246,0.5)" strokeWidth="1.2"
            strokeDasharray="2 6" />
          <circle cx={cx} cy={cy} r={r - 2} fill="none" stroke="rgba(59,130,246,0.25)" strokeWidth="0.5" />

          {/* Main geometric ring */}
          <circle cx={cx} cy={cy} r={110} fill="none" stroke="rgba(59,130,246,0.35)" strokeWidth="0.8"
            strokeDasharray="10 4 3 4" />

          {/* Middle ring */}
          <circle cx={cx} cy={cy} r={78} fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="0.6" />

          {/* Braided ring */}
          <circle cx={cx} cy={cy} r={82} fill="none" stroke="rgba(59,130,246,0.18)" strokeWidth="3"
            strokeDasharray="1 4" />

          {/* Inner ring */}
          <circle cx={cx} cy={cy} r={54} fill="none" stroke="rgba(59,130,246,0.35)" strokeWidth="0.8" />

          {/* Radial spokes */}
          {Array.from({ length: 24 }, (_, i) => {
            const a = (i * Math.PI * 2) / 24;
            const x1 = cx + 54 * Math.cos(a);
            const y1 = cy + 54 * Math.sin(a);
            const x2 = cx + r * Math.cos(a);
            const y2 = cy + r * Math.sin(a);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="rgba(59,130,246,0.12)" strokeWidth="0.5" />
            );
          })}

          {/* Darker offset spokes */}
          {Array.from({ length: 8 }, (_, i) => {
            const a = (i * Math.PI * 2) / 8 + Math.PI / 16;
            const x1 = cx + 54 * Math.cos(a);
            const y1 = cy + 54 * Math.sin(a);
            const x2 = cx + r * Math.cos(a);
            const y2 = cy + r * Math.sin(a);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="rgba(59,130,246,0.25)" strokeWidth="0.8" />
            );
          })}

          {/* Orbiting dots ring */}
          <circle cx={cx} cy={cy} r={90} fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="0.5" />
          {dots.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r={2.2} fill="rgba(59,130,246,0.6)" />
          ))}

          {/* Rune marks */}
          {runes.map((rune, i) => (
            i % 3 === 0 ? (
              <line key={i} x1={rune.x - 4} y1={rune.y} x2={rune.x + 4} y2={rune.y}
                stroke="rgba(59,130,246,0.4)" strokeWidth="0.8"
                transform={`rotate(${rune.rot} ${rune.x} ${rune.y})`} />
            ) : null
          ))}
        </g>

        {/* Inner counter-rotating sigil */}
        <g
          filter={`url(#${gid('glow-inner')})`}
          style={
            prefersReduced
              ? undefined
              : { animation: 'spin-reverse 35s linear infinite', transformOrigin: `${cx}px ${cy}px` }
          }
        >
          {/* Octagram */}
          <polygon points={starPts.join(' ')} fill="none"
            stroke="rgba(59,130,246,0.55)" strokeWidth="1.2" />
          {/* Outer diamond */}
          <rect x={cx - 28} y={cy - 28} width={56} height={56}
            fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="0.8"
            transform={`rotate(45 ${cx} ${cy})`} />
          {/* Inner diamond */}
          <rect x={cx - 14} y={cy - 14} width={28} height={28}
            fill="none" stroke="rgba(59,130,246,0.4)" strokeWidth="0.7"
            transform={`rotate(22.5 ${cx} ${cy})`} />
          {/* Center glow */}
          <circle cx={cx} cy={cy} r="14" fill="rgba(59,130,246,0.08)" />
          <circle cx={cx} cy={cy} r="4" fill="rgba(59,130,246,0.5)" />
          <circle cx={cx} cy={cy} r="2" fill="rgba(147,197,253,0.8)" />
        </g>
      </svg>
    </motion.div>
  );
}
