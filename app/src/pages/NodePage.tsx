import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import katex from 'katex';
import { allChapters } from '../data/chapters';
import { getLecture } from '../data/lectures';
import { useProgressStore } from '../store/useProgress';
import { pickQuestions } from '../utils/questionPicker';
import { checkAnswer } from '../utils/answerChecker';
import { LectureView } from '../components/node/LectureView';
import { QuestionCard } from '../components/question/QuestionCard';
import { SettlementScreen } from '../components/settlement/SettlementScreen';
import { SubjectSidebar } from '../components/layout/SubjectSidebar';
import type { Question, QuestionResult, SettlementResult } from '../types';

function renderSolutionLatex(text: string): string {
  let html = text;
  html = html.replace(/\$\$([\s\S]*?)\$\$/g, (_, formula) => {
    try {
      return katex.renderToString(formula.trim(), { displayMode: true, throwOnError: false });
    } catch { return formula; }
  });
  html = html.replace(/\$(.*?)\$/g, (_, formula) => {
    try {
      return katex.renderToString(formula.trim(), { displayMode: false, throwOnError: false });
    } catch { return formula; }
  });
  html = html.replace(/\\n/g, '<br/>');
  return html;
}

type Phase = 'menu' | 'lecture' | 'question' | 'feedback' | 'settlement';

export function NodePage() {
  const { nodeId } = useParams<{ nodeId: string }>();
  const [phase, setPhase] = useState<Phase>('menu');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [lastResult, setLastResult] = useState<QuestionResult | null>(null);
  const [settlement, setSettlement] = useState<SettlementResult | null>(null);
  const [startTime, setStartTime] = useState(0);

  const { nodeStates, initNode, markLectureRead, recordAttempt } = useProgressStore();
  const progress = nodeId ? nodeStates[nodeId] : undefined;

  const nodeDef = allChapters
    .flatMap(c => c.nodes)
    .find(n => n.id === nodeId);

  const chapterDef = allChapters.find(c =>
    c.nodes.some(n => n.id === nodeId)
  );

  useEffect(() => {
    if (nodeId) initNode(nodeId);
  }, [nodeId, initNode]);

  const isUnlocked = useCallback(() => {
    if (!chapterDef || !nodeId) return false;
    const chapterIdx = allChapters.findIndex(c => c.id === chapterDef.id);
    const chapter = allChapters[chapterIdx];
    const isFirstInSubject = chapterIdx === 0 ||
      chapter.subjectId !== allChapters[chapterIdx - 1].subjectId;
    if (isFirstInSubject) return true;
    const prevChapter = allChapters[chapterIdx - 1];
    return prevChapter.nodes.every(n => {
      const s = nodeStates[n.id]?.status;
      return s === 'cleared' || s === 'upgraded';
    });
  }, [chapterDef, nodeId, nodeStates]);

  useEffect(() => {
    if (nodeId && phase === 'menu') {
      if (!progress?.firstVisitDone) {
        setPhase('lecture');
      }
    }
  }, [nodeId, phase, progress?.firstVisitDone]);

  const handleStartQuestions = () => {
    if (!nodeId) return;
    const picked = pickQuestions(nodeId, progress);
    setQuestions(picked);
    setQuestionIndex(0);
    setResults([]);
    setLastResult(null);
    setStartTime(Date.now());
    setPhase('question');
  };

  const handleAnswer = (answer: string) => {
    const q = questions[questionIndex];
    const isCorrect = checkAnswer(answer, q.answer, q.type);
    const result: QuestionResult = {
      questionId: q.id,
      difficulty: q.difficulty,
      userAnswer: answer,
      isCorrect,
      timeSpent: (Date.now() - startTime) / 1000,
    };
    const newResults = [...results, result];
    setResults(newResults);
    setLastResult(result);
    setPhase('feedback');
  };

  const handleFeedbackContinue = () => {
    if (results.length >= 3) {
      const allCorrect = results.every(r => r.isCorrect);
      const firstTwoCorrect = results[0]?.isCorrect && results[1]?.isCorrect;
      let settleResult: SettlementResult;
      if (allCorrect) settleResult = 'perfect';
      else if (firstTwoCorrect) settleResult = 'cleared';
      else settleResult = 'failed';

      setSettlement(settleResult);
      setPhase('settlement');

      if (nodeId) {
        const record = {
          timestamp: Date.now(),
          results: results as [QuestionResult, QuestionResult, QuestionResult],
          settlement: settleResult,
        };
        recordAttempt(nodeId, record, settleResult);
      }
    } else {
      setQuestionIndex(questionIndex + 1);
      setStartTime(Date.now());
      setPhase('question');
    }
  };

  const handleLectureComplete = () => {
    if (nodeId) markLectureRead(nodeId);
    handleStartQuestions();
  };

  if (!nodeDef || !chapterDef || !nodeId) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <p className="text-text-muted">节点不存在</p>
        <Link to="/" className="text-primary-light mt-4 inline-block text-sm">返回首页</Link>
      </div>
    );
  }

  if (!isUnlocked()) {
    return (
      <div className="flex min-h-screen">
        <SubjectSidebar subjectId={chapterDef.subjectId} activeChapterId={chapterDef.id} />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-text-dim">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <p className="text-text-muted mt-4 text-sm">请先通关前一章的所有节点</p>
            <Link
              to={`/chapter/${chapterDef.id}`}
              className="inline-flex items-center gap-1.5 mt-4 px-4 py-2 rounded-lg bg-primary/10 text-primary-light text-sm font-medium hover:bg-primary/15 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              返回章节
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SubjectSidebar
        subjectId={chapterDef.subjectId}
        activeChapterId={chapterDef.id}
        activeNodeId={nodeId}
      />

      {/* Main content */}
      <div className="flex-1 min-w-0">
        <div className="max-w-2xl mx-auto px-6 py-8">
          {/* Navigation Header */}
          <div className="flex items-center gap-3 mb-6">
            <Link
              to={`/chapter/${chapterDef.id}`}
              className="flex items-center gap-1 text-text-muted hover:text-text transition-colors text-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              <span>返回</span>
            </Link>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-muted bg-surface-card px-2 py-0.5 rounded">
                  {chapterDef.name}
                </span>
                <span className="text-xs text-text-muted">·</span>
                <span className="text-xs text-text-muted">节点 {nodeDef.id}</span>
              </div>
              <h1 className="text-xl font-bold text-text mt-0.5">{nodeDef.name}</h1>
            </div>
          </div>

          {/* Phase-based content */}
          <AnimatePresence mode="wait">
            {phase === 'menu' && (
              <motion.div
                key="menu"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-3"
              >
                <motion.button
                  onClick={() => setPhase('lecture')}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-4 rounded-xl bg-surface-card hover:bg-surface-card-hover border border-white/10 text-left transition-all group"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 text-primary-light group-hover:bg-primary/20 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                    </svg>
                  </span>
                  <span className="ml-3 text-text font-medium">查看讲义</span>
                  <p className="text-text-muted text-xs mt-1 ml-12">回顾本节点的核心知识点</p>
                </motion.button>
                <motion.button
                  onClick={handleStartQuestions}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-4 rounded-xl bg-primary-dark/30 hover:bg-primary-dark/50 border border-primary/30 text-left transition-all group"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-primary/20 text-primary-light group-hover:bg-primary/30 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                    </svg>
                  </span>
                  <span className="ml-3 text-text font-medium">开始做题</span>
                  <p className="text-text-muted text-xs mt-1 ml-12">3 道递进题：基础 → 综合 → 压轴</p>
                </motion.button>
              </motion.div>
            )}

            {phase === 'lecture' && (
              <motion.div
                key="lecture"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
              >
                <LectureView
                  content={getLecture(nodeId)}
                  onComplete={progress?.firstVisitDone ? undefined : handleLectureComplete}
                  onStartQuestions={handleStartQuestions}
                  showAutoStart={!progress?.firstVisitDone}
                />
              </motion.div>
            )}

            {phase === 'question' && questions[questionIndex] && (
              <motion.div
                key={`q-${questionIndex}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
              >
                <QuestionCard
                  question={questions[questionIndex]}
                  questionNumber={questionIndex + 1}
                  onSubmit={handleAnswer}
                />
              </motion.div>
            )}

            {phase === 'feedback' && lastResult && (
              <motion.div
                key="feedback"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-4"
              >
                <motion.div
                  animate={lastResult.isCorrect
                    ? { boxShadow: ['0 0 0 0px oklch(0.62 0.18 155 / 0.3)', '0 0 24px 2px oklch(0.62 0.18 155 / 0.15)', '0 0 0 0px oklch(0.62 0.18 155 / 0)'] }
                    : { x: [0, -6, 6, -4, 4, -2, 2, 0] }
                  }
                  transition={lastResult.isCorrect
                    ? { duration: 1.5, ease: 'easeOut' }
                    : { duration: 0.5, ease: 'easeInOut' }
                  }
                  className={`p-4 rounded-xl border ${
                    lastResult.isCorrect
                      ? 'bg-success/10 border-success/30'
                      : 'bg-danger/10 border-danger/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <motion.span
                      animate={lastResult.isCorrect ? { scale: [1, 1.3, 1] } : {}}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                      {lastResult.isCorrect ? (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="oklch(0.62 0.18 155)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="oklch(0.52 0.22 20)" strokeWidth="2.5" strokeLinecap="round">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      )}
                    </motion.span>
                    <div>
                      <p className={`font-bold ${lastResult.isCorrect ? 'text-success' : 'text-danger'}`}>
                        {lastResult.isCorrect ? '回答正确！' : '回答错误'}
                      </p>
                      <p className="text-text-muted text-xs mt-0.5">
                        第 {questionIndex + 1} 题 · 难度{' '}
                        <span className="inline-flex gap-0.5 align-[-1px]">
                          {Array.from({ length: questions[questionIndex]?.difficulty || 1 }, (_, i) => (
                            <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="oklch(0.70 0.16 75 / 0.7)">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          ))}
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>

                <div className="p-4 rounded-xl bg-surface-card border border-white/10">
                  <h3 className="text-sm font-semibold text-text-muted mb-2 flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-text-dim">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    解析
                  </h3>
                  <div
                    className="text-text text-sm leading-relaxed whitespace-pre-wrap"
                    ref={el => {
                      if (el && questions[questionIndex]) {
                        el.innerHTML = renderSolutionLatex(questions[questionIndex].solution);
                      }
                    }}
                  />
                </div>

                <button
                  onClick={handleFeedbackContinue}
                  className="w-full py-3 rounded-xl bg-primary/20 hover:bg-primary/30 border border-primary/30 text-primary-light font-medium transition-all active:scale-[0.98]"
                >
                  {results.length >= 3 ? '查看结算' : '下一题'}
                </button>
              </motion.div>
            )}

            {phase === 'settlement' && settlement && (
              <motion.div
                key="settlement"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <SettlementScreen
                  result={settlement}
                  results={results as [QuestionResult, QuestionResult, QuestionResult]}
                  nodeName={nodeDef.name}
                  onRetry={() => {
                    setPhase('menu');
                    setResults([]);
                    setLastResult(null);
                    setSettlement(null);
                  }}
                  onBackToChapter={() => {}}
                  chapterId={chapterDef.id}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
