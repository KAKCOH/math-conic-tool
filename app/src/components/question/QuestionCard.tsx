import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Question, ChoiceQuestion } from '../../types';
import katex from 'katex';

interface Props {
  question: Question;
  questionNumber: number;
  onSubmit: (answer: string) => void;
}

const diffConfig = [
  { label: '', className: '' },
  { label: '基础巩固', className: 'diff-badge-easy' },
  { label: '综合', className: 'diff-badge-mid' },
  { label: '压轴', className: 'diff-badge-hard' },
];

function renderContent(text: string): string {
  let html = text.replace(/!\[(.*?)\]\((.+?)\)/g, (_, alt, src) => {
    const resolvedSrc = src.startsWith('/') ? import.meta.env.BASE_URL.replace(/\/$/, '') + src : src;
    return `<figure class="my-3 text-center"><img src="${resolvedSrc}" alt="${alt}" loading="lazy" class="max-w-full h-auto rounded-xl border border-white/10 hover:border-primary/30 transition-colors" /><figcaption class="text-text-dim text-xs mt-1.5">${alt}</figcaption></figure>`;
  });
  html = html.replace(/\$\$([\s\S]*?)\$\$/g, (_, formula) => {
    try {
      return katex.renderToString(formula.trim(), { displayMode: true, throwOnError: false });
    } catch { return formula; }
  }).replace(/\$(.*?)\$/g, (_, formula) => {
    try {
      return katex.renderToString(formula.trim(), { displayMode: false, throwOnError: false });
    } catch { return formula; }
  });
  return html;
}

function ProgressSteps({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-0">
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className="flex items-center">
          {i > 0 && (
            <div className={`h-0.5 w-6 rounded-full transition-colors duration-300 ${i <= current - 1 ? 'bg-primary/50' : 'bg-white/8'}`} />
          )}
          <motion.span
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold border-2 transition-colors ${
              i < current - 1
                ? 'bg-primary/25 border-primary/30 text-primary-light'
                : i === current - 1
                  ? 'bg-primary/10 border-primary/50 text-primary-light'
                  : 'bg-transparent border-white/10 text-text-dim'
            }`}
            animate={i === current - 1 ? { boxShadow: ['0 0 0 0px oklch(0.62 0.20 250 / 0.3)', '0 0 0 6px oklch(0.62 0.20 250 / 0)', '0 0 0 0px oklch(0.62 0.20 250 / 0)'] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {i < current - 1 ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            ) : i + 1}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

export function QuestionCard({ question, questionNumber, onSubmit }: Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [shaking, setShaking] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<string | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => { selectedRef.current = selectedOption; }, [selectedOption]);

  useEffect(() => {
    setSelectedOption(null);
    setShowAnswer(false);
    setShaking(false);
    if (contentRef.current) {
      contentRef.current.innerHTML = renderContent(question.content);
    }
  }, [question.id]);

  useEffect(() => {
    if (showAnswer && answerRef.current) {
      answerRef.current.innerHTML = renderContent(question.answer);
    }
    if (showAnswer && solutionRef.current) {
      solutionRef.current.innerHTML = renderContent(question.solution);
    }
  }, [showAnswer, question.id]);

  const handleChoiceSubmit = useCallback(() => {
    if (selectedRef.current) onSubmit(selectedRef.current);
  }, [onSubmit]);

  const selfJudge = (result: 'correct' | 'incorrect') => {
    if (result === 'incorrect' && !prefersReduced) {
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
    }
    onSubmit(result);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (question.type === 'choice' && 'options' in question) {
        const idx = parseInt(e.key) - 1;
        if (idx >= 0 && idx < (question as ChoiceQuestion).options.length) {
          setSelectedOption(String.fromCharCode(65 + idx));
        }
        if (e.key === 'Enter' && selectedRef.current) {
          handleChoiceSubmit();
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [question, handleChoiceSubmit]);

  const diff = diffConfig[question.difficulty] || diffConfig[1];

  // ---- Choice ----
  if (question.type === 'choice' && 'options' in question) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <ProgressSteps current={questionNumber} total={3} />
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${diff.className}`}
          >
            {diff.label}
          </motion.span>
        </div>

        <div
          ref={contentRef}
          className="p-5 rounded-xl bg-surface-card border border-white/10 text-text leading-relaxed prose-readable"
        />

        <div className="space-y-2">
          {(question as ChoiceQuestion).options.map((opt, i) => {
            const label = String.fromCharCode(65 + i);
            const isSelected = selectedOption === label;
            return (
              <motion.button
                key={i}
                onClick={() => setSelectedOption(label)}
                whileTap={{ scale: 0.97 }}
                className={`w-full p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'border-primary bg-primary/15 text-text shadow-[0_0_20px_rgba(59,130,246,0.08)]'
                    : 'border-white/10 bg-surface-card hover:border-white/20 text-text-muted'
                }`}
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-white/5 text-xs font-mono font-bold mr-2.5">
                  {label}
                </span>
                <span dangerouslySetInnerHTML={{ __html: renderContent(opt) }} />
              </motion.button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            onClick={handleChoiceSubmit}
            disabled={!selectedOption}
            whileTap={selectedOption ? { scale: 0.97 } : {}}
            className={`flex-1 py-3 rounded-xl font-medium transition-all ${
              selectedOption
                ? 'bg-primary/80 hover:bg-primary text-white hover:shadow-lg hover:shadow-primary/10'
                : 'bg-white/5 text-text-muted/40 cursor-not-allowed'
            }`}
          >
            提交答案 <span className="text-xs opacity-50 ml-1">Enter</span>
          </motion.button>
        </div>

        <p className="text-text-dim text-[10px] text-center -mt-2">
          键盘快捷键：数字键 1-4 选择 · Enter 提交
        </p>
      </div>
    );
  }

  // ---- Fill / Calculation / Proof: all self-judge ----
  const typeHint =
    question.type === 'proof' ? '本题为证明题，请自行完成证明。' :
    '请自行作答，然后点击下方按钮查看答案并判断对错。';

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <ProgressSteps current={questionNumber} total={3} />
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${diff.className}`}
        >
          {diff.label}
        </motion.span>
      </div>

      <div
        ref={contentRef}
        className="p-5 rounded-xl bg-surface-card border border-white/10 text-text leading-relaxed prose-readable"
      />

      <div className="p-5 rounded-xl bg-surface-card border border-white/10">
        <p className="text-text-muted text-sm mb-3">{typeHint}</p>

        {!showAnswer ? (
          <button
            onClick={() => setShowAnswer(true)}
            className="w-full py-3 rounded-xl bg-primary/15 border border-primary/25 text-primary-light font-medium hover:bg-primary/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            查看答案
          </button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={shaking ? { opacity: 1, y: 0, x: [0, -6, 6, -6, 6, -4, 4, -2, 2, 0] } : { opacity: 1, y: 0 }}
            transition={shaking ? { duration: 0.5 } : { duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs text-text-muted bg-white/5 px-2 py-0.5 rounded">标准答案</span>
            </div>
            <div
              ref={answerRef}
              className="p-4 rounded-lg bg-white/5 border border-white/10 text-text font-medium text-center mb-3 leading-relaxed"
            />

            {/* Solution */}
            {question.solution && (
              <details className="mb-4 group/solution">
                <summary className="text-xs text-text-muted cursor-pointer hover:text-text transition-colors py-1 select-none">
                  查看解析
                </summary>
                <div
                  ref={solutionRef}
                  className="mt-2 p-4 rounded-lg bg-primary/[0.03] border border-primary/10 text-text/80 text-sm leading-relaxed"
                />
              </details>
            )}

            <p className="text-text-muted text-xs text-center mb-3">请如实判断，这会影响后续选题</p>
            <div className="flex gap-3">
              <button
                onClick={() => selfJudge('correct')}
                className="flex-1 py-3 rounded-xl bg-success/15 border border-success/25 text-success font-medium hover:bg-success/25 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
              >
                <span className="text-lg">✓</span> 我做对了
              </button>
              <button
                onClick={() => selfJudge('incorrect')}
                className="flex-1 py-3 rounded-xl bg-danger/15 border border-danger/25 text-danger font-medium hover:bg-danger/25 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
              >
                <span className="text-lg">✗</span> 我做错了
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
