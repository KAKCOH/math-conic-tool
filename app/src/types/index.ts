// 节点状态
export type NodeStatus = 'locked' | 'available' | 'cleared' | 'upgraded';

// 题目类型
export type QuestionType = 'choice' | 'fill' | 'calculation' | 'proof';

// 题目难度
export type Difficulty = 1 | 2 | 3;

// 结算结果
export type SettlementResult = 'perfect' | 'cleared' | 'failed';

// 节点定义（数据层）
export interface NodeDef {
  id: string;
  name: string;
  chapterId: string;
  order: number;
}

// 章节定义（数据层）
export interface ChapterDef {
  id: string;
  name: string;
  order: number;
  subjectId: string;
  nodes: NodeDef[];
}

// 题目
export interface Question {
  id: string;
  nodeId: string;
  difficulty: Difficulty;
  type: QuestionType;
  content: string;
  answer: string;
  solution: string;
  tags: string[];
  source?: string;
}

// 选项（选择题专用）
export interface ChoiceQuestion extends Question {
  type: 'choice';
  options: string[]; // LaTeX 选项
}

// 单次做题记录
export interface QuestionResult {
  questionId: string;
  difficulty: Difficulty;
  userAnswer: string;
  isCorrect: boolean;
  timeSpent: number;
}

// 一次做题会话（3 道题）
export interface AttemptRecord {
  timestamp: number;
  results: [QuestionResult, QuestionResult, QuestionResult];
  settlement: SettlementResult;
}

// 单个节点的用户进度
export interface NodeProgress {
  status: NodeStatus;
  firstVisitDone: boolean;
  attempts: AttemptRecord[];
  weakTags: string[];
  questionsAnswered: string[];
}

// 全局用户进度
export interface UserProgress {
  nodeStates: Record<string, NodeProgress>;
}

// 做题会话临时状态
export interface SessionState {
  currentNodeId: string;
  currentDifficulty: Difficulty;
  questions: Question[];
  results: QuestionResult[];
  showingFeedback: boolean;
  lastResult: QuestionResult | null;
}
