import { motion, useReducedMotion } from 'framer-motion';

export function MagicCircle() {
  const prefersReduced = useReducedMotion();

  const r = 96;
  const cx = 120;
  const cy = 136;

  // Octagram vertices
  const starPoints: string[] = [];
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4 - Math.PI / 2;
    const outerR = i % 2 === 0 ? 32 : 18;
    starPoints.push(`${(cx + outerR * Math.cos(a)).toFixed(1)},${(cy + outerR * Math.sin(a)).toFixed(1)}`);
  }

  // Small orbiting dots
  const dots: { x: number; y: number; r: number }[] = [];
  for (let i = 0; i < 12; i++) {
    const a = (i * Math.PI * 2) / 12;
    const dist = 68;
    dots.push({ x: cx + dist * Math.cos(a), y: cy + dist * Math.sin(a), r: 1.6 });
  }

  // Rune-like marks around outer ring
  const runes: { x: number; y: number; rot: number }[] = [];
  for (let i = 0; i < 24; i++) {
    const a = (i * Math.PI * 2) / 24;
    const dist = 90;
    runes.push({ x: cx + dist * Math.cos(a), y: cy + dist * Math.sin(a), rot: (a * 180) / Math.PI + 90 });
  }

  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0"
      style={{ bottom: -20, width: 240, height: 240 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <svg viewBox="0 0 240 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Outer glow */}
          <filter id="magic-glow-outer">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Soft diffuse glow */}
          <filter id="magic-glow-soft">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Radial gradient */}
          <radialGradient id="magic-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.18)" />
            <stop offset="60%" stopColor="rgba(59,130,246,0.04)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.0)" />
          </radialGradient>
        </defs>

        {/* Ambient glow circle */}
        <circle cx={cx} cy={cy} r={100} fill="url(#magic-grad)" />

        <g
          filter="url(#magic-glow-outer)"
          style={
            prefersReduced
              ? undefined
              : { animation: 'spin 30s linear infinite', transformOrigin: `${cx}px ${cy}px` }
          }
        >
          {/* Outer ring — dashed */}
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="0.6"
            strokeDasharray="3 5" />

          {/* Outer ring — solid thin */}
          <circle cx={cx} cy={cy} r={r - 4} fill="none" stroke="rgba(59,130,246,0.06)" strokeWidth="1" />

          {/* Middle ring */}
          <circle cx={cx} cy={cy} r={72} fill="none" stroke="rgba(59,130,246,0.10)" strokeWidth="0.5"
            strokeDasharray="8 6 2 6" />

          {/* Inner ring */}
          <circle cx={cx} cy={cy} r={48} fill="none" stroke="rgba(59,130,246,0.12)" strokeWidth="0.7" />

          {/* Radial spokes */}
          {Array.from({ length: 16 }, (_, i) => {
            const a = (i * Math.PI * 2) / 16;
            const x1 = cx + 48 * Math.cos(a);
            const y1 = cy + 48 * Math.sin(a);
            const x2 = cx + r * Math.cos(a);
            const y2 = cy + r * Math.sin(a);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="rgba(59,130,246,0.04)" strokeWidth="0.4" />
            );
          })}

          {/* Secondary ring with dots */}
          <circle cx={cx} cy={cy} r={68} fill="none" stroke="rgba(59,130,246,0.08)" strokeWidth="0.5" />
          {dots.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="rgba(59,130,246,0.2)" />
          ))}

          {/* Rune marks */}
          {runes.map((rune, i) => (
            <line
              key={i}
              x1={rune.x - 3} y1={rune.y}
              x2={rune.x + 3} y2={rune.y}
              stroke="rgba(59,130,246,0.12)"
              strokeWidth="0.5"
              transform={`rotate(${rune.rot} ${rune.x} ${rune.y})`}
            />
          ))}
        </g>

        {/* Counter-rotating inner sigil */}
        <g
          filter="url(#magic-glow-soft)"
          style={
            prefersReduced
              ? undefined
              : { animation: 'spin-reverse 45s linear infinite', transformOrigin: `${cx}px ${cy}px` }
          }
        >
          {/* Octagram star */}
          <polygon
            points={starPoints.join(' ')}
            fill="none"
            stroke="rgba(59,130,246,0.25)"
            strokeWidth="0.8"
          />
          {/* Inner diamond */}
          <rect x={cx - 16} y={cy - 16} width={32} height={32}
            fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="0.6"
            transform={`rotate(45 ${cx} ${cy})`} />
          {/* Center dot */}
          <circle cx={cx} cy={cy} r="3" fill="rgba(59,130,246,0.3)" />
          <circle cx={cx} cy={cy} r="1.2" fill="rgba(59,130,246,0.6)" />
        </g>
      </svg>
    </motion.div>
  );
}
