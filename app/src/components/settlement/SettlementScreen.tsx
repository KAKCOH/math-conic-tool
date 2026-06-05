import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import type { QuestionResult, SettlementResult } from '../../types';

interface Props {
  result: SettlementResult;
  results: [QuestionResult, QuestionResult, QuestionResult];
  nodeName: string;
  onRetry: () => void;
  onBackToChapter: () => void;
  chapterId: string;
}

const configs = {
  perfect: {
    title: '完美通关',
    subtitle: '三题全对',
    emoji: '👑',
    bg: 'from-gold/5 via-transparent to-gold/5',
    border: 'border-gold/20',
    textColor: 'text-gold-light',
    particleColor: '#f59e0b',
    particleCount: 30,
    badge: '节点升级 ★',
  },
  cleared: {
    title: '通关',
    subtitle: '前两题正确',
    emoji: '🎉',
    bg: 'from-silver/5 via-transparent to-silver/5',
    border: 'border-silver/20',
    textColor: 'text-silver-light',
    particleColor: '#94a3b8',
    particleCount: 15,
    badge: '节点通关 ✓',
  },
  failed: {
    title: '继续加油',
    subtitle: '第 1 题未通过',
    emoji: '💪',
    bg: 'from-primary/5 via-transparent to-primary/5',
    border: 'border-primary/20',
    textColor: 'text-primary-light',
    particleColor: 'oklch(0.65 0.18 250)',
    particleCount: 0,
    badge: '重新挑战',
  },
};

function Particles({ color, count }: { color: string; count: number }) {
  const prefersReduced = useReducedMotion();

  const [particles] = useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      size: 2 + Math.random() * 6,
      duration: 1.5 + Math.random() * 2.5,
      drift: (Math.random() - 0.5) * 50,
    }))
  );

  if (prefersReduced || count === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            bottom: '-8px',
            width: p.size,
            height: count === 30 ? p.size * 1.6 : p.size,
            backgroundColor: color,
            borderRadius: count === 30 ? '2px' : '9999px',
            opacity: 0.7,
          }}
          animate={{
            y: [-20, -360],
            x: [0, p.drift],
            opacity: [0.8, 0],
            scale: [1, 0.2],
            rotate: count === 30 ? 360 : 0,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}

export function SettlementScreen({
  result,
  results,
  nodeName,
  onRetry,
  chapterId,
}: Props) {
  const config = configs[result];
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={`relative rounded-2xl border ${config.border} overflow-hidden`}>
      <Particles color={config.particleColor} count={config.particleCount} />

      <div className={`relative z-10 p-8 text-center bg-gradient-to-b ${config.bg}`}>
        {/* Emoji */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 250, damping: 18 }}
          className="text-5xl mb-4"
        >
          {config.emoji}
        </motion.div>

        {/* Title & subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className={`text-2xl font-bold ${config.textColor}`}
        >
          {config.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-text-muted text-sm mt-1"
        >
          {config.subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-text-muted/60 text-xs mt-1"
        >
          {nodeName}
        </motion.p>

        {/* Score dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4 mt-6"
        >
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, type: 'spring', stiffness: 350, damping: 18 }}
              className="flex flex-col items-center gap-1.5"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl border ${
                r.isCorrect
                  ? 'bg-success/10 border-success/25'
                  : 'bg-danger/10 border-danger/25'
              }`}>
                {r.isCorrect ? '✓' : '✗'}
              </div>
              <span className="text-xs text-text-muted">第{i + 1}题</span>
              <span className="text-xs text-text-muted/50">{'⭐'.repeat(i + 1)}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Badge */}
        {result !== 'failed' && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.0, type: 'spring', stiffness: 300, damping: 16 }}
            className={`inline-block mt-5 px-4 py-1.5 rounded-full border text-sm font-medium ${
              result === 'perfect'
                ? 'bg-gold/10 border-gold/25 text-gold-light'
                : 'bg-silver/5 border-silver/20 text-silver-light'
            }`}
          >
            {config.badge}
          </motion.div>
        )}
      </div>

      {/* Actions */}
      <div className="p-4 bg-surface-card space-y-2">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full py-2 text-sm text-text-muted hover:text-text transition-colors"
        >
          {showDetails ? '收起详情' : '答题详情'}
        </button>

        {showDetails && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="space-y-1.5 overflow-hidden"
          >
            {results.map((r, i) => (
              <div key={i} className="flex items-center justify-between px-3 py-2 rounded-lg bg-surface/50 text-sm">
                <span className="text-text-muted">
                  第{i + 1}题 <span className="text-text-muted/50">{'⭐'.repeat(i + 1)}</span>
                </span>
                <span className={`font-medium ${r.isCorrect ? 'text-success' : 'text-danger'}`}>
                  {r.isCorrect ? '正确' : '错误'}
                </span>
              </div>
            ))}
          </motion.div>
        )}

        <div className="flex gap-3 pt-1">
          <Link
            to={`/chapter/${chapterId}`}
            className="flex-1 py-2.5 rounded-xl bg-surface border border-white/10 text-text-muted text-sm text-center hover:text-text hover:border-white/20 transition-all"
          >
            返回章节
          </Link>
          <button
            onClick={onRetry}
            className={`flex-1 py-2.5 rounded-xl font-medium text-sm transition-all active:scale-[0.98] ${
              result === 'failed'
                ? 'bg-primary/70 hover:bg-primary text-white'
                : 'bg-surface-card border border-white/10 text-text hover:border-white/20'
            }`}
          >
            {result === 'failed' ? '重新挑战' : '再做一次'}
          </button>
        </div>
      </div>
    </div>
  );
}
