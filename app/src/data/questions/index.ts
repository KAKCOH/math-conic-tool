import type { Question } from '../../types';
import q1_1 from './node-1-1';
import q1_2 from './node-1-2';
import q1_3 from './node-1-3';
import q1_4 from './node-1-4';
import q2_1 from './node-2-1';
import q2_2 from './node-2-2';
import q2_3 from './node-2-3';
import q2_4 from './node-2-4';
import q2_5 from './node-2-5';
import q3_1 from './node-3-1';
import q3_2 from './node-3-2';
import q3_3 from './node-3-3';
import q3_4 from './node-3-4';
import q3_5 from './node-3-5';
import q3_6 from './node-3-6';
import q3_7 from './node-3-7';
import q4_1 from './node-4-1';
import q4_2 from './node-4-2';
import q4_3 from './node-4-3';
import q4_4 from './node-4-4';
import q5_1 from './node-5-1';
import q5_2 from './node-5-2';
import q5_3 from './node-5-3';
import q5_4 from './node-5-4';
import q6_1 from './node-6-1';
import q6_2 from './node-6-2';
import q6_3 from './node-6-3';
import q6_4 from './node-6-4';

const allQuestions: Question[] = [
  ...q1_1, ...q1_2, ...q1_3, ...q1_4,
  ...q2_1, ...q2_2, ...q2_3, ...q2_4, ...q2_5,
  ...q3_1, ...q3_2, ...q3_3, ...q3_4, ...q3_5, ...q3_6, ...q3_7,
  ...q4_1, ...q4_2, ...q4_3, ...q4_4,
  ...q5_1, ...q5_2, ...q5_3, ...q5_4,
  ...q6_1, ...q6_2, ...q6_3, ...q6_4,
];

export function getQuestionsByNode(nodeId: string): Question[] {
  return allQuestions.filter(q => q.nodeId === nodeId);
}

export function getQuestionsByDifficulty(nodeId: string, difficulty: 1 | 2 | 3): Question[] {
  return allQuestions.filter(q => q.nodeId === nodeId && q.difficulty === difficulty);
}

export default allQuestions;
