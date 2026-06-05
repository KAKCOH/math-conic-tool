import type { Question, NodeProgress, Difficulty } from '../types';
import { getQuestionsByDifficulty } from '../data/questions';

// Fisher-Yates 洗牌
function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function pickQuestions(
  nodeId: string,
  progress: NodeProgress | undefined
): Question[] {
  const difficulties: Difficulty[] = [1, 2, 3];
  const picked: Question[] = [];

  for (const diff of difficulties) {
    const pool = getQuestionsByDifficulty(nodeId, diff);
    if (pool.length === 0) {
      // 没有该难度的题，从相邻难度借用
      const altPool = getQuestionsByDifficulty(nodeId, diff === 3 ? 2 : diff === 1 ? 2 : 3);
      if (altPool.length > 0) {
        picked.push(altPool[Math.floor(Math.random() * altPool.length)]);
      }
      continue;
    }

    const answered = progress?.questionsAnswered || [];

    // 优先级 1：未做过的题
    let candidates = pool.filter(q => !answered.includes(q.id));
    if (candidates.length === 0) {
      // 全部做过，重新循环
      candidates = pool;
    }

    // 优先级 2：薄弱标签相关（在未做过的题中优先，如已全部做过则在全部题中优先）
    const weakTags = progress?.weakTags || [];
    if (weakTags.length > 0) {
      const tagged = candidates.filter(q =>
        q.tags.some(t => weakTags.includes(t))
      );
      if (tagged.length > 0) {
        candidates = tagged;
      }
    }

    // 随机选一道
    const chosen = shuffle(candidates)[0];
    picked.push(chosen);
  }

  return picked;
}
