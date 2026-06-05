import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { NodeDef } from '../../types';
import { useProgressStore } from '../../store/useProgress';
import { allChapters } from '../../data/chapters';

interface Props {
  node: NodeDef;
  chapterId: string;
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function NodeCard({ node, chapterId }: Props) {
  const nodeStates = useProgressStore(s => s.nodeStates);
  const nodeState = nodeStates[node.id];

  const chapterIdx = allChapters.findIndex(c => c.id === chapterId);
  let chapterUnlocked = true;
  if (chapterIdx > 0) {
    const prevChapter = allChapters[chapterIdx - 1];
    chapterUnlocked = prevChapter.nodes.every(n => {
      const s = nodeStates[n.id]?.status;
      return s === 'cleared' || s === 'upgraded';
    });
  }

  const persistedStatus = nodeState?.status;
  const isFirstChapter = chapterIdx === 0;

  const status: 'locked' | 'available' | 'cleared' | 'upgraded' =
    !chapterUnlocked ? 'locked' :
    isFirstChapter && (!persistedStatus || persistedStatus === 'locked') ? 'available' :
    (persistedStatus as 'available' | 'cleared' | 'upgraded') || 'available';

  const isLocked = status === 'locked';
  const attemptCount = nodeState?.attempts?.length || 0;

  return (
    <Link
      to={!isLocked ? `/node/${node.id}` : '#'}
      onClick={e => { if (isLocked) e.preventDefault(); }}
      className={`group flex items-center gap-3 px-4 py-3.5 rounded-2xl border transition-all duration-200 relative overflow-hidden ${
        isLocked
          ? 'bg-surface-card/30 border-white/[0.03] cursor-not-allowed'
          : status === 'upgraded'
            ? 'bg-surface-card border-gold/20 hover:border-gold/40 cursor-pointer'
            : status === 'cleared'
              ? 'bg-surface-card border-white/[0.06] hover:border-silver/30 cursor-pointer'
              : 'bg-surface-card border-white/[0.06] hover:border-primary/25 hover:bg-surface-card-hover cursor-pointer'
      }`}
    >
      {/* Shimmer overlay for upgraded */}
      {status === 'upgraded' && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background: 'linear-gradient(90deg, transparent, oklch(0.78 0.16 85 / 0.06), transparent)',
          }}
        />
      )}

      {/* Node number badge */}
      <span className={`relative w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 font-mono ${
        isLocked ? 'bg-white/[0.03] text-text-dim/30' :
        status === 'upgraded' ? 'bg-gold/15 text-gold-light' :
        status === 'cleared' ? 'bg-silver/10 text-silver-light' :
        'bg-primary/10 text-primary-light'
      }`}>
        {isLocked ? <LockIcon /> : status === 'upgraded' ? <StarIcon /> : status === 'cleared' ? <CheckIcon /> : node.id}
      </span>

      {/* Name + mini progress */}
      <div className="flex-1 min-w-0">
        <span className={`text-sm leading-snug block ${isLocked ? 'text-text-muted/25' : 'text-text/90'}`}>
          {node.name}
        </span>
        {/* Mini progress bar */}
        {!isLocked && attemptCount > 0 && status !== 'upgraded' && (
          <div className="flex items-center gap-1 mt-1">
            <div className="flex-1 h-0.5 rounded-full bg-white/[0.06] overflow-hidden max-w-[60px]">
              <div
                className="h-full rounded-full bg-primary/40 transition-all"
                style={{ width: `${Math.min(100, attemptCount * 33)}%` }}
              />
            </div>
            <span className="text-[10px] text-text-dim">{attemptCount}次</span>
          </div>
        )}
      </div>

      {/* Status badge + action */}
      {status === 'upgraded' && (
        <motion.span
          className="text-xs px-2.5 py-1 rounded-full bg-gold/10 text-gold-light border border-gold/20 font-medium shrink-0"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          已升级
        </motion.span>
      )}
      {status === 'cleared' && (
        <span className="text-xs px-2.5 py-1 rounded-full bg-silver/5 text-silver-light border border-silver/15 shrink-0">
          已通关
        </span>
      )}
      {status === 'available' && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          className="text-text-dim/30 shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      )}
    </Link>
  );
}
