import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { weeklyIssues, type WeeklyIssue, type WeeklyProblem } from '../data/weekly';
import { WeeklySidebar } from '../components/layout/WeeklySidebar';
import katex from 'katex';

function renderMarkdown(text: string): string {
  let html = text.replace(/!\[.*?\]\((.+?)\)/g, (_, src) => {
    const resolvedSrc = src.startsWith('/') ? import.meta.env.BASE_URL.replace(/\/$/, '') + src : src;
    return `<div class="my-4 text-center"><img src="${resolvedSrc}" alt="" loading="lazy" class="max-w-full h-auto rounded-xl border border-white/10" /></div>`;
  });
  html = html.replace(/\$\$([\s\S]*?)\$\$/g, (_, f) => {
    try { return katex.renderToString(f.trim(), { displayMode: true, throwOnError: false }); }
    catch { return f; }
  }).replace(/\$(.*?)\$/g, (_, f) => {
    try { return katex.renderToString(f.trim(), { displayMode: false, throwOnError: false }); }
    catch { return f; }
  });
  // Bold: **text**
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="text-text font-semibold">$1</strong>');
  // Simple newline to <br>
  html = html.replace(/\n\n/g, '<br/><br/>');
  return html;
}

function ProblemCard({ problem, index }: { problem: WeeklyProblem; index: number }) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <motion.div
      className="bg-surface-card border border-white/[0.04] rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      {/* Problem header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-7 h-7 rounded-full bg-primary/15 text-primary-light text-xs font-mono font-bold flex items-center justify-center shrink-0">
            {index + 1}
          </span>
          <span className="text-xs text-text-dim tracking-wider">Problem {index + 1}</span>
        </div>
        <div
          className="text-sm text-text/90 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(problem.content) }}
        />
      </div>

      {/* Solution toggle */}
      <div className="border-t border-white/[0.04]">
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="w-full px-6 py-3 text-left text-xs text-text-muted hover:text-text transition-colors flex items-center justify-between select-none"
        >
          <span>{showSolution ? '收起解答' : '查看解答'}</span>
          <motion.span
            animate={{ rotate: showSolution ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-[10px]"
          >
            ▼
          </motion.span>
        </button>
        {showSolution && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div
              className="px-6 pb-6 text-sm text-text/80 leading-relaxed border-t border-white/[0.03] pt-4"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(problem.solution) }}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function IssueSection({ issue }: { issue: WeeklyIssue }) {
  return (
    <section className="mb-16">
      {/* Issue header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/[0.06] border border-primary/10 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          <span className="text-xs text-primary/70 font-mono tracking-wider">Week {issue.weekNumber}</span>
          <span className="text-xs text-text-dim">{issue.date}</span>
        </div>
        {issue.intro && (
          <p className="text-sm text-text-dim max-w-lg mx-auto leading-relaxed">{issue.intro}</p>
        )}
      </div>

      {/* Problems */}
      <div className="flex flex-col gap-5 max-w-2xl mx-auto">
        {issue.problems.map((p, i) => (
          <ProblemCard key={p.id} problem={p} index={i} />
        ))}
      </div>
    </section>
  );
}

export function WeeklyPage() {
  const [searchParams] = useSearchParams();
  const weekFilter = searchParams.get('week');
  const issues = weekFilter
    ? weeklyIssues.filter(i => i.id === weekFilter)
    : weeklyIssues;

  return (
    <div className="flex min-h-screen">
      <WeeklySidebar activeWeekId={weekFilter || undefined} />

      <div className="flex-1 min-w-0">
        <div className="max-w-2xl mx-auto px-6 py-8 pb-20 relative">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-text-dim hover:text-text-muted transition-colors mb-8 group"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            首页
          </Link>

          {/* Page title */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal not-italic leading-tight tracking-[-0.01em] text-text">
              3 Problems per Week
            </h1>
            <p className="text-[13px] text-text-dim mt-2">
              每周精选三道新颖且有相当难度的高中数学题
            </p>
          </motion.div>

          {/* Issues */}
          {issues.length === 0 ? (
            <p className="text-center text-text-dim text-sm py-16">暂无内容，敬请期待</p>
          ) : (
            issues.map((issue) => <IssueSection key={issue.id} issue={issue} />)
          )}

          {/* Footer */}
          <footer className="text-center pt-12">
            <div className="text-xs text-text-dim/50">design by 和枼</div>
          </footer>
        </div>
      </div>
    </div>
  );
}
