import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { allChapters } from '../data/chapters';
import { useProgressStore } from '../store/useProgress';
import { CornerFold } from '../components/home/CornerFold';
import { MagicCircle } from '../components/home/MagicCircle';


function statusDotClass(status: string | undefined) {
  switch (status) {
    case 'upgraded': return 'bg-gold shadow-[0_0_8px_rgba(245,158,11,0.3)]';
    case 'cleared': return 'bg-silver';
    case 'locked': return 'bg-white/[0.06]';
    default: return 'bg-primary/50';
  }
}

/* ── Möbius Strip Background (dense wireframe) ── */
function ConicGeometryBackground() {
  const prefersReduced = useReducedMotion();

  const R = 200;
  const halfW = 55;
  const tilt = 0.55;
  const cx = 500, cy = 380;
  const sc = 0.95;
  const n = 300;

  function project(u: number, v: number): [number, number] {
    const cosU = Math.cos(u);
    const sinU = Math.sin(u);
    const x3 = (R + v * Math.cos(u / 2)) * cosU;
    const y3 = (R + v * Math.cos(u / 2)) * sinU;
    const z3 = v * Math.sin(u / 2);
    const y2 = y3 * Math.cos(tilt) - z3 * Math.sin(tilt);
    return [cx + x3 * sc, cy + y2 * sc];
  }

  function curvePath(v: number): string {
    let d = '';
    for (let i = 0; i <= n; i++) {
      const u = (i / n) * 4 * Math.PI;
      const [x, y] = project(u, v);
      d += `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
    }
    return d;
  }

  // Longitudinal rib curves — dense wireframe reads as a solid surface
  const numRibs = 16;
  const ribPaths: { d: string; v: number }[] = [];
  for (let j = 0; j < numRibs; j++) {
    const v = -halfW + (j / (numRibs - 1)) * 2 * halfW;
    ribPaths.push({ d: curvePath(v), v });
  }

  // Cross-section lines with depth cue
  const numCross = 18;
  const crossLines: { d: string; opacity: number }[] = [];
  for (let i = 0; i < numCross; i++) {
    const u = (i / numCross) * 4 * Math.PI;
    const [x1, y1] = project(u, -halfW);
    const [x2, y2] = project(u, halfW);
    const depth = Math.abs(Math.sin(u / 2));
    crossLines.push({
      d: `M${x1.toFixed(1)},${y1.toFixed(1)}L${x2.toFixed(1)},${y2.toFixed(1)}`,
      opacity: 0.05 + depth * 0.13,
    });
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.65 }}
        transition={{ duration: 2.5, ease: 'easeOut' as const }}
      >
        <svg viewBox="0 0 1000 1000" className="w-[150%] h-[150%] max-w-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="mobius-glow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g
            filter="url(#mobius-glow)"
            style={
              prefersReduced
                ? undefined
                : { animation: 'spin 80s linear infinite', transformOrigin: '500px 500px' }
            }
          >
            {/* Longitudinal rib curves */}
            {ribPaths.map((rib, i) => {
              const isEdge = i === 0 || i === numRibs - 1;
              const distFromEdge = Math.min(i, numRibs - 1 - i) / ((numRibs - 1) / 2);
              const alpha = isEdge ? 0.24 : 0.06 + (1 - distFromEdge) * 0.08;
              return (
                <path
                  key={i}
                  d={rib.d}
                  fill="none"
                  stroke="rgba(59,130,246,0.24)"
                  strokeWidth={isEdge ? 1 : 0.4}
                  opacity={alpha / 0.24}
                />
              );
            })}

            {/* Cross-section lines */}
            {crossLines.map((line, i) => (
              <path
                key={i}
                d={line.d}
                fill="none"
                stroke="rgba(59,130,246,0.24)"
                strokeWidth="0.5"
                opacity={line.opacity}
              />
            ))}
          </g>
        </svg>
      </motion.div>

      {/* Grid overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2, delay: 0.1 }}
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
    </div>
  );
}

const CHINESE_NUMBERS = ['一', '二', '三', '四', '五', '六'] as const;

/* ── SVG bezier connector ── */
function ConnectorLines() {
  const prefersReduced = useReducedMotion();
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1, delay, ease: 'easeOut' as const },
    }),
  };

  return (
    <div className="w-full h-16 overflow-visible">
      <svg viewBox="0 0 720 64" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <motion.path
          d="M 360 0 L 360 16"
          fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="1.5"
          variants={pathVariants} custom={0.1} initial="hidden" animate="visible"
          style={prefersReduced ? { pathLength: 1, opacity: 1 } : undefined}
        />
        <motion.path
          d="M 360 16 Q 360 48 120 48 L 120 64"
          fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="1.5"
          variants={pathVariants} custom={0.3} initial="hidden" animate="visible"
          style={prefersReduced ? { pathLength: 1, opacity: 1 } : undefined}
        />
        <motion.path
          d="M 360 16 L 360 64"
          fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="1.5"
          variants={pathVariants} custom={0.25} initial="hidden" animate="visible"
          style={prefersReduced ? { pathLength: 1, opacity: 1 } : undefined}
        />
        <motion.path
          d="M 360 16 Q 360 48 600 48 L 600 64"
          fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="1.5"
          variants={pathVariants} custom={0.35} initial="hidden" animate="visible"
          style={prefersReduced ? { pathLength: 1, opacity: 1 } : undefined}
        />
        <motion.circle cx="360" cy="16" r="2.5" fill="#3B82F6" opacity="0.4"
          initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 1.0, duration: 0.5 }} />
        <motion.circle cx="120" cy="48" r="2" fill="#3B82F6" opacity="0.3"
          initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 1.1, duration: 0.5 }} />
        <motion.circle cx="360" cy="48" r="2" fill="#3B82F6" opacity="0.3"
          initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 1.1, duration: 0.5 }} />
        <motion.circle cx="600" cy="48" r="2" fill="#3B82F6" opacity="0.3"
          initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 1.1, duration: 0.5 }} />
      </svg>
    </div>
  );
}

type ChapterStat = ReturnType<typeof computeChapterStats>[number];

function ChapterGrid({ chapters, startIndex }: { chapters: ChapterStat[]; startIndex: number }) {
  const nodeStates = useProgressStore(s => s.nodeStates);
  const prefersReduced = useReducedMotion();

  return (
    <div className="grid grid-cols-3 gap-5">
      {chapters.map((ch, ci) => {
        const realIndex = startIndex + ci;
        return (
          <motion.div
            key={ch.id}
            className="flex flex-col gap-3"
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 + realIndex * 0.1 }}
          >
            <Link
              to={`/chapter/${ch.id}`}
              className="group/card relative block text-center px-3 py-4 rounded-2xl bg-surface-card border border-white/5 hover:border-primary/20 hover:bg-surface-card-hover transition-all duration-200 hover:-translate-y-0.5 overflow-hidden"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.06) 0%, transparent 70%)' }}
              />
              <div className="relative">
                <div className="text-[11px] text-text-dim uppercase tracking-wider mb-1">
                  第{CHINESE_NUMBERS[ci] || ci + 1}章
                </div>
                <div className="text-[15px] font-semibold text-text leading-snug">{ch.name}</div>
                <div className="text-xs text-text-muted mt-1.5 font-mono tabular-nums">{ch.cleared}/{ch.total}</div>
              </div>
            </Link>

            <div className="flex flex-col gap-px">
              {ch.nodes.map((node) => {
                const s = nodeStates[node.id]?.status;
                const nameClass = s === 'locked' ? 'text-text-muted/25' :
                  s === 'upgraded' ? 'text-gold-light' :
                  s === 'cleared' ? 'text-text/90' : 'text-text-muted';
                const itemClass = s === 'upgraded'
                  ? 'hover:bg-gold/[0.04]'
                  : s === 'cleared'
                    ? 'hover:bg-white/[0.04]'
                    : '';
                return (
                  <Link
                    key={node.id}
                    to={`/node/${node.id}`}
                    className={`group/item flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-white/[0.03] transition-colors ${itemClass}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${statusDotClass(s)}`} />
                    <span className="text-[11px] text-text-dim font-mono tabular-nums w-7 shrink-0">
                      {node.id}
                    </span>
                    <span className={`text-[13px] truncate transition-colors ${nameClass}`}>
                      {node.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function computeChapterStats() {
  const nodeStates = useProgressStore.getState().nodeStates;
  return allChapters.map(ch => {
    let cleared = 0;
    let upgraded = 0;
    ch.nodes.forEach(n => {
      const s = nodeStates[n.id]?.status;
      if (s === 'cleared' || s === 'upgraded') cleared++;
      if (s === 'upgraded') upgraded++;
    });
    return { ...ch, cleared, upgraded, total: ch.nodes.length };
  });
}

/* ── Subject Tree ── */
function SubjectTree({ icon, title, en, chapters, startIndex }: {
  icon: string;
  title: string;
  en: string;
  chapters: ChapterStat[];
  startIndex: number;
}) {
  const prefersReduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  let totalCleared = 0;
  let totalUpgraded = 0;
  chapters.forEach(ch => {
    totalCleared += ch.cleared;
    totalUpgraded += ch.upgraded;
  });
  const totalNodes = chapters.reduce((s, c) => s + c.total, 0);

  return (
    <div className="space-y-0">
      {/* Root node + magic circle container */}
      <motion.div
        className="relative w-full flex flex-col items-center mb-0"
        initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div
          className="group relative inline-flex items-center gap-3.5 px-6 py-4 rounded-2xl bg-surface-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.08)] z-10"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="absolute inset-[-2px] rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(59,130,246,0.3), transparent, rgba(59,130,246,0.1), transparent)',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMaskComposite: 'xor',
              padding: '2px',
            }}
          />
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center font-mono text-xl font-medium text-primary-light">
            {icon}
          </div>
          <div>
            <div className="text-base font-semibold text-text">{title}</div>
            <div className="text-[11px] text-text-dim tracking-[0.06em] uppercase mt-0.5 font-medium">{en}</div>
            <div className="text-sm text-text-muted mt-0.5">
              {totalCleared} / {totalNodes} 通关
              {totalUpgraded > 0 && (
                <span className="text-gold ml-2 font-medium">★ {totalUpgraded}</span>
              )}
            </div>
          </div>
        </div>

        {/* Magic Circle */}
        <AnimatePresence>
          {hovered && <MagicCircle />}
        </AnimatePresence>
      </motion.div>

      <ConnectorLines />

      <ChapterGrid chapters={chapters} startIndex={startIndex} />
    </div>
  );
}

const SUBJECTS = [
  { id: 'conic', icon: 'A', title: '圆锥曲线', en: 'Conic Sections' },
  { id: 'derivative', icon: 'B', title: '导数', en: 'Derivatives' },
] as const;

/* ── Tree view (both subjects) ── */
function TreeView() {
  const chapterStats = computeChapterStats();

  return (
    <div className="space-y-16">
      {SUBJECTS.map(subject => {
        const chapters = chapterStats.filter(c => c.subjectId === subject.id);
        if (chapters.length === 0) return null;
        const startIndex = allChapters.findIndex(c => c.id === chapters[0].id);
        return (
          <SubjectTree
            key={subject.id}
            icon={subject.icon}
            title={subject.title}
            en={subject.en}
            chapters={chapters}
            startIndex={startIndex}
          />
        );
      })}
    </div>
  );
}

/* ── Home Page ── */
export function HomePage() {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay: number) => prefersReduced
    ? {}
    : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } };

  return (
    <>
      <ConicGeometryBackground />

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-12 pb-24">
        {/* Header */}
        <motion.header className="text-center mb-16" {...fadeUp(0.2)}>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-normal not-italic leading-tight tracking-[-0.01em] text-text">
            <em className="italic text-primary">Art</em> of Math
          </h1>
          <p className="inline-block text-[15px] text-text-muted tracking-[0.03em] mt-2.5 font-body px-4 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
            致力消除高中数学学习的信息差
          </p>
          <p className="mt-3 text-[18px] text-text-muted tracking-[0.06em] font-display">
            https://artofmath.cn
          </p>
        </motion.header>

        {/* Mind map section */}
        <section className="mb-20">
          <p className="text-center text-xs uppercase tracking-[0.15em] text-text-dim font-medium mb-12">
            知识板块
          </p>
          <TreeView />
        </section>

        {/* Divider */}
        <motion.hr
          className="border-none h-px my-16"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }}
          {...fadeUp(1.4)}
        />

        {/* Weekly problems */}
        <motion.section {...fadeUp(1.5)}>
          <h2 className="text-[13px] font-medium text-text-muted tracking-[0.04em] mb-5">
            更多板块
          </h2>
          <Link
            to="/weekly"
            className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-surface-card border border-white/[0.03] hover:border-primary/20 hover:bg-surface-card-hover transition-all duration-300 group"
          >
            <div className="w-[42px] h-[42px] rounded-xl bg-primary/10 flex items-center justify-center font-mono text-[15px] font-medium text-primary-light group-hover:bg-primary/15 transition-colors shrink-0">
              3
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[15px] font-medium text-text group-hover:text-text transition-colors">3 Problems per Week</h3>
              <p className="text-[13px] text-text-dim mt-0.5">每周精选三道新颖且有相当难度的高中数学题</p>
            </div>
            <span className="text-[11px] text-text-dim group-hover:text-primary/70 transition-colors px-3 py-1.5 rounded-full border border-white/[0.06] tracking-[0.04em] shrink-0">
              进入
            </span>
          </Link>
        </motion.section>

        {/* Footer */}
        <motion.footer className="text-center pt-16" {...fadeUp(1.7)}>
          <div className="font-display italic text-primary text-base">Art of Math</div>
          <div className="text-xs text-text-dim/50 mt-1.5">design by 和枼</div>
        </motion.footer>
      </div>

      <CornerFold />
    </>
  );
}
