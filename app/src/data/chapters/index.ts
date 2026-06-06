import type { ChapterDef } from '../../types';

export const chapter1: ChapterDef = {
  id: 'ch1',
  name: '基础知识',
  order: 1,
  subjectId: 'conic',
  nodes: [
    { id: '1.1', name: '椭圆', chapterId: 'ch1', order: 1 },
    { id: '1.2', name: '双曲线', chapterId: 'ch1', order: 2 },
    { id: '1.3', name: '抛物线', chapterId: 'ch1', order: 3 },
    { id: '1.4', name: '三种曲线的统观对比', chapterId: 'ch1', order: 4 },
  ],
};

export const chapter2: ChapterDef = {
  id: 'ch2',
  name: '进阶知识',
  order: 2,
  subjectId: 'conic',
  nodes: [
    { id: '2.1', name: '第二定义、第三定义与中点弦', chapterId: 'ch2', order: 1 },
    { id: '2.2', name: '焦点三角形与焦点弦', chapterId: 'ch2', order: 2 },
    { id: '2.3', name: '切线、切点弦与极点极线', chapterId: 'ch2', order: 3 },
    { id: '2.4', name: '蒙日圆、阿波罗尼斯圆与光学性质', chapterId: 'ch2', order: 4 },
    { id: '2.5', name: '仿射变换', chapterId: 'ch2', order: 5 },
  ],
};

export const chapter3: ChapterDef = {
  id: 'ch3',
  name: '解题策略方法',
  order: 3,
  subjectId: 'conic',
  nodes: [
    { id: '3.1', name: '联立与参数法', chapterId: 'ch3', order: 1 },
    { id: '3.2', name: '定义法与数形结合', chapterId: 'ch3', order: 2 },
    { id: '3.3', name: '点差法与定比点差', chapterId: 'ch3', order: 3 },
    { id: '3.4', name: '弦长与面积问题', chapterId: 'ch3', order: 4 },
    { id: '3.5', name: '齐次化联立与非对称韦达', chapterId: 'ch3', order: 5 },
    { id: '3.6', name: '定点定值与最值范围', chapterId: 'ch3', order: 6 },
    { id: '3.7', name: '轨迹方程与探索性问题', chapterId: 'ch3', order: 7 },
  ],
};

export const chapter4: ChapterDef = {
  id: 'ch4',
  name: '导数基础知识',
  order: 4,
  subjectId: 'derivative',
  nodes: [
    { id: '4.1', name: '导数的定义与几何意义', chapterId: 'ch4', order: 1 },
    { id: '4.2', name: '导数的运算', chapterId: 'ch4', order: 2 },
    { id: '4.3', name: '导数与函数单调性', chapterId: 'ch4', order: 3 },
    { id: '4.4', name: '导数与极值、最值', chapterId: 'ch4', order: 4 },
  ],
};

export const chapter5: ChapterDef = {
  id: 'ch5',
  name: '导数进阶知识',
  order: 5,
  subjectId: 'derivative',
  nodes: [
    { id: '5.1', name: '构造函数与同构变换', chapterId: 'ch5', order: 1 },
    { id: '5.2', name: '隐零点与虚设零点', chapterId: 'ch5', order: 2 },
    { id: '5.3', name: '极值点偏移', chapterId: 'ch5', order: 3 },
    { id: '5.4', name: '端点效应与必要性探路', chapterId: 'ch5', order: 4 },
  ],
};

export const chapter6: ChapterDef = {
  id: 'ch6',
  name: '导数解题策略与技巧',
  order: 6,
  subjectId: 'derivative',
  nodes: [
    { id: '6.1', name: '恒成立与存在性问题', chapterId: 'ch6', order: 1 },
    { id: '6.2', name: '双变量与多变量问题', chapterId: 'ch6', order: 2 },
    { id: '6.3', name: '导数与不等式证明', chapterId: 'ch6', order: 3 },
    { id: '6.4', name: '导数与函数零点', chapterId: 'ch6', order: 4 },
  ],
};

export const allChapters: ChapterDef[] = [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6];
