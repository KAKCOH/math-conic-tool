import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { allChapters } from '../../data/chapters';
import { useProgressStore } from '../../store/useProgress';
import type { ChapterDef, NodeDef } from '../../types';

const SUBJECT_INFO: Record<string, { name: string; icon: string }> = {
  conic: { name: '圆锥曲线', icon: 'A' },
  derivative: { name: '导数', icon: 'B' },
};

const CH_ORDER = ['一', '二', '三', '四', '五', '六'] as const;

function nodeStatusIcon(status: string | undefined) {
  switch (status) {
    case 'upgraded': return (
      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-gold shrink-0">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
    case 'cleared': return (
      <span className="w-2.5 h-2.5 rounded-full bg-silver shrink-0" />
    );
    case 'available': return (
      <span className="w-2.5 h-2.5 rounded-full bg-primary/50 shrink-0" />
    );
    default: return (
      <span className="w-2.5 h-2.5 rounded-full bg-white/[0.06] shrink-0" />
    );
  }
}

interface SidebarNodeItemProps {
  node: NodeDef;
  status: string | undefined;
  isActive: boolean;
  isLocked: boolean;
}

function SidebarNodeItem({ node, status, isActive, isLocked }: SidebarNodeItemProps) {
  if (isLocked) {
    return (
      <span className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[12px] text-text-dim/25 cursor-not-allowed select-none">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 opacity-25">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <span className="truncate">{node.name}</span>
      </span>
    );
  }

  const isUpgraded = status === 'upgraded';

  return (
    <Link
      to={`/node/${node.id}`}
      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[12px] transition-all duration-150 ${
        isActive
          ? 'bg-primary/12 text-primary-light font-medium'
          : isUpgraded
            ? 'text-gold-light hover:bg-gold/[0.04]'
            : status === 'cleared'
              ? 'text-text/70 hover:bg-white/[0.03]'
              : 'text-text-muted hover:bg-white/[0.03] hover:text-text/80'
      }`}
    >
      {nodeStatusIcon(status)}
      <span className="truncate">{node.name}</span>
    </Link>
  );
}

interface SidebarChapterGroupProps {
  chapter: ChapterDef;
  idx: number;
  activeChapterId?: string;
  activeNodeId?: string;
}

function SidebarChapterGroup({ chapter, idx, activeChapterId, activeNodeId }: SidebarChapterGroupProps) {
  const [expanded, setExpanded] = useState(true);
  const nodeStates = useProgressStore(s => s.nodeStates);
  const isActiveChapter = chapter.id === activeChapterId;

  const chapterIdx = allChapters.findIndex(c => c.id === chapter.id);
  const prevChapter = allChapters[chapterIdx - 1];
  const isFirstInSubject = chapterIdx === 0 || chapter.subjectId !== prevChapter?.subjectId;
  const chapterUnlocked = isFirstInSubject || (prevChapter.nodes.every(n => {
    const s = nodeStates[n.id]?.status;
    return s === 'cleared' || s === 'upgraded';
  }));

  return (
    <>
      <div
        className={`relative flex items-center gap-2 px-3 py-2 rounded-lg ${
          isActiveChapter
            ? 'bg-primary/[0.06] text-primary-light'
            : 'text-text-dim'
        }`}
      >
        {isActiveChapter && (
          <span className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full bg-primary/60" />
        )}
        <button
          onClick={() => setExpanded(!expanded)}
          className="shrink-0 hover:text-text-muted transition-colors"
          aria-label={expanded ? '折叠' : '展开'}
        >
          <motion.svg
            width="10" height="10" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            animate={{ rotate: expanded ? 90 : 0 }}
            transition={{ duration: 0.15 }}
            className="opacity-50"
          >
            <polyline points="9 18 15 12 9 6" />
          </motion.svg>
        </button>
        <span className="text-[11px] font-medium tracking-wider uppercase shrink-0">
          第{CH_ORDER[idx] || idx + 1}章
        </span>
        <Link
          to={`/chapter/${chapter.id}`}
          className="text-[13px] font-medium truncate hover:underline underline-offset-2 hover:text-text-muted transition-colors"
        >
          {chapter.name}
        </Link>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden ml-4 mt-0.5 space-y-0.5"
          >
            {chapter.nodes.map(node => {
              const s = nodeStates[node.id]?.status;
              const isLocked = !chapterUnlocked || (!isActiveChapter && s === 'locked' && !isFirstInSubject);
              const isActive = node.id === activeNodeId;
              return (
                <SidebarNodeItem
                  key={node.id}
                  node={node}
                  status={s}
                  isActive={isActive}
                  isLocked={isLocked}
                />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface SubjectSidebarProps {
  subjectId: string;
  activeChapterId?: string;
  activeNodeId?: string;
}

export function SubjectSidebar({ subjectId, activeChapterId, activeNodeId }: SubjectSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const subject = SUBJECT_INFO[subjectId] || { name: subjectId, icon: '?' };
  const chapters = allChapters.filter(c => c.subjectId === subjectId);
  const nodeStates = useProgressStore(s => s.nodeStates);

  let totalCleared = 0;
  let totalNodes = 0;
  chapters.forEach(ch => {
    ch.nodes.forEach(n => {
      totalNodes++;
      const s = nodeStates[n.id]?.status;
      if (s === 'cleared' || s === 'upgraded') totalCleared++;
    });
  });

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Subject header */}
      <Link
        to="/"
        className="flex items-center gap-3 px-3 py-4 border-b border-white/[0.04] hover:bg-white/[0.01] transition-colors"
      >
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center font-mono text-sm font-medium text-primary-light shrink-0">
          {subject.icon}
        </div>
        <div className="min-w-0">
          <div className="text-[13px] font-semibold text-text">{subject.name}</div>
          <div className="text-[11px] text-text-dim font-mono tabular-nums">
            {totalCleared}/{totalNodes}
          </div>
        </div>
      </Link>

      {/* Chapter list */}
      <div className="flex-1 overflow-y-auto py-3 px-2 space-y-1">
        {chapters.map((chapter, i) => (
          <SidebarChapterGroup
            key={chapter.id}
            chapter={chapter}
            idx={i}
            activeChapterId={activeChapterId}
            activeNodeId={activeNodeId}
          />
        ))}
      </div>

      {/* Bottom: 3Problem shortcut */}
      <div className="border-t border-white/[0.04] p-2">
        <Link
          to="/weekly"
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] text-text-dim hover:text-text-muted hover:bg-white/[0.02] transition-colors"
        >
          <span className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center font-mono text-[10px] font-medium text-primary-light shrink-0">3</span>
          每周三题
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle — left-edge handle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="xl:hidden fixed left-0 top-1/2 -translate-y-1/2 z-50 flex items-center gap-1.5 pl-2.5 pr-3 py-3 rounded-r-lg bg-surface-card border border-white/15 border-l-0 text-text-muted hover:text-text hover:border-white/25 transition-colors shadow-lg shadow-black/30"
        aria-label="章节导航"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {mobileOpen
            ? <polyline points="15 18 9 12 15 6" />
            : <polyline points="9 18 15 12 9 6" />
          }
        </svg>
        <span className="text-[12px] font-medium tracking-wide">{mobileOpen ? '收起' : '目录'}</span>
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="xl:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="xl:hidden fixed left-0 top-0 bottom-0 z-50 w-72 bg-surface border-r border-white/[0.06] shadow-2xl"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <aside className="hidden xl:block w-60 shrink-0 border-r border-white/[0.04] bg-surface min-h-screen sticky top-0">
        {sidebarContent}
      </aside>
    </>
  );
}
