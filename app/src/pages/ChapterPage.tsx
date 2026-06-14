import { useParams, Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { allChapters } from '../data/chapters';
import { useProgressStore } from '../store/useProgress';
import { NodeCard } from '../components/chapter/NodeCard';
import { SubjectSidebar } from '../components/layout/SubjectSidebar';

function ProgressRing({ cleared, total }: { cleared: number; total: number }) {
  const r = 24;
  const circumference = 2 * Math.PI * r;

  return (
    <div className="relative w-[60px] h-[60px] shrink-0">
      <svg width="60" height="60" viewBox="0 0 60 60" className="-rotate-90">
        <circle
          cx="30" cy="30" r={r}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="3"
        />
        <motion.circle
          cx="30" cy="30" r={r}
          fill="none"
          stroke="oklch(0.62 0.20 250)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference * (1 - (total > 0 ? cleared / total : 0)) }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-text font-mono">{cleared}<span className="text-text-dim text-[10px]">/{total}</span></span>
      </div>
    </div>
  );
}

function ChapterBgShape({ order }: { order: number }) {
  const prefersReduced = useReducedMotion();
  const anim = prefersReduced ? {} : { animation: 'spin 120s linear infinite', transformOrigin: '200px 200px' };

  return (
    <div className="absolute pointer-events-none opacity-[0.025] -top-20 -right-16 w-[400px] h-[400px]" aria-hidden="true">
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={anim}>
        {order % 3 === 1 && (
          <>
            <ellipse cx="200" cy="200" rx="185" ry="125" stroke="oklch(0.62 0.20 250)" strokeWidth="1" />
            <ellipse cx="200" cy="200" rx="160" ry="95" stroke="oklch(0.62 0.20 250)" strokeWidth="0.5" strokeDasharray="8 6" />
            <ellipse cx="200" cy="200" rx="120" ry="55" stroke="oklch(0.62 0.20 250)" strokeWidth="0.4" opacity="0.6" />
            <circle cx="140" cy="200" r="4" fill="oklch(0.52 0.22 20)" opacity="0.5" />
            <circle cx="260" cy="200" r="4" fill="oklch(0.52 0.22 20)" opacity="0.5" />
            <line x1="140" y1="200" x2="260" y2="200" stroke="oklch(0.52 0.22 20)" strokeWidth="0.5" opacity="0.15" />
          </>
        )}
        {order % 3 === 2 && (
          <>
            <path d="M200 200 Q280 100 380 60" stroke="oklch(0.62 0.20 250)" strokeWidth="1" fill="none" />
            <path d="M200 200 Q280 300 380 340" stroke="oklch(0.62 0.20 250)" strokeWidth="1" fill="none" />
            <path d="M200 200 Q120 100 20 60" stroke="oklch(0.62 0.20 250)" strokeWidth="1" fill="none" />
            <path d="M200 200 Q120 300 20 340" stroke="oklch(0.62 0.20 250)" strokeWidth="1" fill="none" />
            <line x1="200" y1="0" x2="200" y2="400" stroke="oklch(0.62 0.20 250)" strokeWidth="0.3" strokeDasharray="4 6" opacity="0.4" />
            <line x1="0" y1="200" x2="400" y2="200" stroke="oklch(0.62 0.20 250)" strokeWidth="0.3" strokeDasharray="4 6" opacity="0.4" />
            <line x1="200" y1="200" x2="380" y2="60" stroke="oklch(0.52 0.22 20)" strokeWidth="0.5" opacity="0.25" />
            <line x1="200" y1="200" x2="380" y2="340" stroke="oklch(0.52 0.22 20)" strokeWidth="0.5" opacity="0.25" />
            <circle cx="140" cy="200" r="3.5" fill="oklch(0.52 0.22 20)" opacity="0.4" />
            <circle cx="260" cy="200" r="3.5" fill="oklch(0.52 0.22 20)" opacity="0.4" />
          </>
        )}
        {order % 3 === 0 && (
          <>
            <path d="M20 380 Q200 0 380 380" stroke="oklch(0.62 0.20 250)" strokeWidth="1.2" fill="none" />
            <line x1="0" y1="300" x2="400" y2="300" stroke="oklch(0.62 0.20 250)" strokeWidth="0.5" strokeDasharray="6 4" opacity="0.6" />
            <line x1="0" y1="200" x2="400" y2="200" stroke="oklch(0.62 0.20 250)" strokeWidth="0.3" strokeDasharray="3 5" opacity="0.3" />
            <circle cx="200" cy="152" r="3.5" fill="oklch(0.52 0.22 20)" opacity="0.45" />
            <line x1="200" y1="152" x2="200" y2="300" stroke="oklch(0.52 0.22 20)" strokeWidth="0.4" strokeDasharray="2 4" opacity="0.25" />
          </>
        )}
      </svg>
    </div>
  );
}

export function ChapterPage() {
  const { chapterId } = useParams<{ chapterId: string }>();
  const chapter = allChapters.find(c => c.id === chapterId);
  const nodeStates = useProgressStore(s => s.nodeStates);
  const prefersReduced = useReducedMotion();

  if (!chapter) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <p className="text-text-muted">章节不存在</p>
        <Link to="/" className="text-primary-light mt-4 inline-block text-sm">返回首页</Link>
      </div>
    );
  }

  let cleared = 0;
  let upgraded = 0;
  chapter.nodes.forEach(n => {
    const s = nodeStates[n.id]?.status;
    if (s === 'cleared' || s === 'upgraded') cleared++;
    if (s === 'upgraded') upgraded++;
  });

  const CH_NUM = ['一', '二', '三', '四', '五', '六'] as const;
  const subjectChapters = allChapters.filter(c => c.subjectId === chapter.subjectId);
  const relativeOrder = subjectChapters.findIndex(c => c.id === chapter.id) + 1;
  const orderLabel = CH_NUM[relativeOrder - 1] || String(relativeOrder);

  const fadeUp = (delay: number) => prefersReduced
    ? {}
    : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay } };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SubjectSidebar
        subjectId={chapter.subjectId}
        activeChapterId={chapter.id}
      />

      {/* Main content */}
      <div className="flex-1 min-w-0">
        <div className="max-w-2xl mx-auto px-6 py-8 pb-20 relative">
          <ChapterBgShape order={chapter.order} />

          {/* Breadcrumb */}
          <motion.div {...fadeUp(0)} className="mb-8 relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-text-dim hover:text-text-muted transition-colors text-sm mb-4 group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              首页
            </Link>

            <div className="flex items-start justify-between gap-6">
              <div>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 400 }}
                  className="inline-block text-xs font-medium text-primary-light bg-primary/10 px-2.5 py-1 rounded-full mb-2.5 tracking-wide"
                >
                  第{orderLabel}章
                </motion.span>
                <h1 className="text-2xl font-bold text-text tracking-[-0.01em]">
                  {chapter.name}
                </h1>
                <div className="h-0.5 w-16 bg-gradient-to-r from-primary/60 to-transparent rounded-full mt-2" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 20 }}
              >
                <ProgressRing cleared={cleared} total={chapter.nodes.length} />
              </motion.div>
            </div>
            {upgraded > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-1.5 mt-3 text-gold-light text-xs font-medium"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" opacity="0.8">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {upgraded} 个节点已升级
              </motion.div>
            )}
          </motion.div>

          {/* Node list with timeline */}
          <div className="relative">
            <div className="timeline-line" />
            <div className="space-y-1.5 relative">
              {chapter.nodes.map((node, i) => {
                const nodeState = nodeStates[node.id];
                const status = nodeState?.status || 'locked';
                return (
                  <motion.div
                    key={node.id}
                    {...fadeUp(0.1 + i * 0.05)}
                    className="relative pl-10"
                  >
                    <motion.div
                      className="timeline-dot"
                      style={{
                        borderColor:
                          status === 'upgraded' ? 'oklch(0.78 0.16 85 / 0.6)' :
                          status === 'cleared' ? 'oklch(0.68 0.02 260 / 0.4)' :
                          status === 'available' ? 'oklch(0.62 0.20 250 / 0.4)' :
                          'rgba(255,255,255,0.08)',
                        backgroundColor:
                          status === 'upgraded' ? 'oklch(0.78 0.16 85 / 0.15)' :
                          status === 'cleared' ? 'oklch(0.68 0.02 260 / 0.1)' :
                          status === 'available' ? 'oklch(0.62 0.20 250 / 0.1)' :
                          'transparent',
                      }}
                      animate={status === 'available' ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <NodeCard node={node} chapterId={chapter.id} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
