import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { weeklyIssues } from '../../data/weekly';

interface WeeklySidebarProps {
  activeWeekId?: string;
}

export function WeeklySidebar({ activeWeekId }: WeeklySidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const currentWeekId = activeWeekId || searchParams.get('week') || weeklyIssues[0]?.id;

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Header */}
      <Link
        to="/weekly"
        className="flex items-center gap-3 px-3 py-4 border-b border-white/[0.04] hover:bg-white/[0.01] transition-colors"
      >
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center font-mono text-sm font-medium text-primary-light shrink-0">
          3
        </div>
        <div className="min-w-0">
          <div className="text-[13px] font-semibold text-text">每周三题</div>
          <div className="text-[11px] text-text-dim font-mono tabular-nums">
            {weeklyIssues.length} 期
          </div>
        </div>
      </Link>

      {/* Week list */}
      <div className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
        {weeklyIssues.map((issue) => {
          const isActive = issue.id === currentWeekId;
          return (
            <Link
              key={issue.id}
              to={`/weekly?week=${issue.id}`}
              className={`relative flex items-center gap-2.5 px-3 py-2 rounded-lg text-[12px] transition-all duration-150 ${
                isActive
                  ? 'bg-primary/[0.06] text-primary-light'
                  : 'text-text-dim hover:text-text-muted hover:bg-white/[0.02]'
              }`}
            >
              {isActive && (
                <span className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full bg-primary/60" />
              )}
              <span className={`w-2 h-2 rounded-full shrink-0 ${
                isActive ? 'bg-primary/60' : 'bg-white/[0.06]'
              }`} />
              <span className="font-mono tracking-wider text-[11px]">Week {String(issue.weekNumber).padStart(2, '0')}</span>
              <span className="text-[10px] opacity-50 ml-auto">{issue.date}</span>
            </Link>
          );
        })}
      </div>

      {/* Bottom: back to home */}
      <div className="border-t border-white/[0.04] p-2">
        <Link
          to="/"
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] text-text-dim hover:text-text-muted hover:bg-white/[0.02] transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-50">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          返回首页
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
        aria-label="周次导航"
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
