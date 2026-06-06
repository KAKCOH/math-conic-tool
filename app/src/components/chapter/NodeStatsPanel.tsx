import { useProgressStore } from '../../store/useProgress';
import { getQuestionsByNode } from '../../data/questions';

interface Props {
  nodeId: string;
}

export function NodeStatsPanel({ nodeId }: Props) {
  const nodeProgress = useProgressStore(s => s.nodeStates[nodeId]);
  const totalQuestions = getQuestionsByNode(nodeId).length;
  const answeredQuestions = nodeProgress?.questionsAnswered?.length || 0;
  const attempts = nodeProgress?.attempts || [];

  // 正确率：所有轮次中正确题目数 / 总答题数
  let totalResults = 0;
  let correctResults = 0;
  for (const a of attempts) {
    for (const r of a.results) {
      totalResults++;
      if (r.isCorrect) correctResults++;
    }
  }
  const accuracy = totalResults > 0 ? Math.round((correctResults / totalResults) * 100) : null;

  const rows = [
    { label: '题库', value: `${totalQuestions} 题` },
    { label: '已刷', value: `${answeredQuestions} 题` },
    { label: '正确率', value: accuracy != null ? `${accuracy}%` : '—' },
    { label: '轮数', value: `${attempts.length} 轮` },
  ];

  return (
    <div className="px-4 pb-3">
      <div className="rounded-xl bg-white/[0.02] border border-white/[0.05] px-3 py-2.5 grid grid-cols-2 gap-x-4 gap-y-1.5">
        {rows.map(r => (
          <div key={r.label} className="flex justify-between items-center">
            <span className="text-[11px] text-text-dim">{r.label}</span>
            <span className="text-[11px] text-text font-mono">{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
