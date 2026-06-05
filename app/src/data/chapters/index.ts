import type { ChapterDef } from '../../types';

export const chapter1: ChapterDef = {
  id: 'ch1',
  name: '基础知识',
  order: 1,
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

export const allChapters: ChapterDef[] = [chapter1, chapter2, chapter3];
