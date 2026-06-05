import type { Question, ChoiceQuestion } from '../../types';

const questions1_2: (Question | ChoiceQuestion)[] = [
  // ===== 难度 1：基础巩固 =====
  {
    id: '1.2-easy-1',
    nodeId: '1.2',
    difficulty: 1,
    type: 'fill',
    content: '已知双曲线 $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$，则 $a = \\underline{\\qquad}$，$c = \\underline{\\qquad}$，焦点坐标为 $\\underline{\\qquad}$，渐近线方程为 $\\underline{\\qquad}$。',
    answer: '$3$; $5$; $(\\pm 5, 0)$; $y = \\pm \\frac{4}{3}x$',
    solution: '由标准方程 $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ 知 $a^2 = 9 \\Rightarrow a = 3$，$b^2 = 16 \\Rightarrow b = 4$。由 $c^2 = a^2 + b^2 = 9 + 16 = 25$ 得 $c = 5$。焦点在 $x$ 轴上，坐标为 $(\\pm c, 0) = (\\pm 5, 0)$。渐近线方程为 $y = \\pm \\frac{b}{a}x = \\pm \\frac{4}{3}x$。',
    tags: ['标准方程', 'a/b/c关系', '焦点', '渐近线'],
  },
  {
    id: '1.2-easy-2',
    nodeId: '1.2',
    difficulty: 1,
    type: 'fill',
    content: '若双曲线上一点 $P$ 到两焦点 $F_1, F_2$ 的距离之差的绝对值为 $8$，则 $a = \\underline{\\qquad}$。又知离心率 $e = \\frac{5}{4}$，则 $c = \\underline{\\qquad}$，$b = \\underline{\\qquad}$。',
    answer: '$4$; $5$; $3$',
    solution: '由双曲线第一定义：$||PF_1| - |PF_2|| = 2a = 8 \\Rightarrow a = 4$。由 $e = \\frac{c}{a} = \\frac{5}{4}$ 得 $c = \\frac{5}{4} \\times 4 = 5$。由 $c^2 = a^2 + b^2$ 得 $b^2 = c^2 - a^2 = 25 - 16 = 9 \\Rightarrow b = 3$。验证：$e = \\frac{5}{4} > 1$，符合双曲线性质。',
    tags: ['定义', '第一定义', '离心率', 'a/b/c关系'],
  },
  {
    id: '1.2-easy-3',
    nodeId: '1.2',
    difficulty: 1,
    type: 'choice',
    content: '下列方程中，表示焦点在 $x$ 轴上的双曲线的是：',
    options: [
      '$\\frac{x^2}{4} + \\frac{y^2}{9} = 1$',
      '$\\frac{x^2}{4} - \\frac{y^2}{9} = 1$',
      '$\\frac{y^2}{4} - \\frac{x^2}{9} = 1$',
      '$y^2 = 4x$',
    ],
    answer: 'B',
    solution: '双曲线的标准方程为 $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$（焦点在 $x$ 轴）或 $\\frac{y^2}{a^2} - \\frac{x^2}{b^2} = 1$（焦点在 $y$ 轴），特征是 $x^2$ 和 $y^2$ 的系数异号。A 是椭圆（同正），B 是焦点在 $x$ 轴上的双曲线（$x^2$ 系数为正），C 是焦点在 $y$ 轴上的双曲线（$y^2$ 系数为正），D 是抛物线（缺少 $y^2$ 或 $x^2$ 项中的一项）。',
    tags: ['标准方程', '曲线识别', '椭圆与双曲线区别'],
  } as ChoiceQuestion,

  // ===== 难度 2：综合 =====
  {
    id: '1.2-mid-1',
    nodeId: '1.2',
    difficulty: 2,
    type: 'calculation',
    content: '已知双曲线的中心在原点，焦点在 $x$ 轴上，离心率为 $\\frac{5}{3}$，且过点 $(5, \\frac{16}{3})$。\n\n求该双曲线的标准方程。',
    answer: '$\\frac{x^2}{9} - \\frac{y^2}{16} = 1$',
    solution: '设双曲线方程为 $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$。\n\n由 $e = \\frac{c}{a} = \\frac{5}{3}$ 得 $c = \\frac{5}{3}a$。\n\n由 $c^2 = a^2 + b^2$ 得 $\\frac{25}{9}a^2 = a^2 + b^2 \\Rightarrow b^2 = \\frac{16}{9}a^2$。\n\n代入点 $(5, \\frac{16}{3})$：$\\frac{25}{a^2} - \\frac{(16/3)^2}{b^2} = 1$。\n\n$b^2 = \\frac{16}{9}a^2$，故 $\\frac{256/9}{b^2} = \\frac{256/9}{16a^2/9} = \\frac{16}{a^2}$。\n\n所以 $\\frac{25}{a^2} - \\frac{16}{a^2} = 1 \\Rightarrow \\frac{9}{a^2} = 1 \\Rightarrow a^2 = 9, a = 3$。\n\n$b^2 = \\frac{16}{9} \\times 9 = 16, b = 4$。\n\n故标准方程为 $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$。\n\n验证：过点 $(5, \\frac{16}{3})$：$\\frac{25}{9} - \\frac{256/9}{16} = \\frac{25}{9} - \\frac{16}{9} = 1$ ✓。$e = \\frac{c}{a} = \\frac{\\sqrt{9+16}}{3} = \\frac{5}{3}$ ✓。',
    tags: ['标准方程', '离心率', 'a/b/c关系', '待定系数法'],
  },

  // ===== 难度 3：压轴 =====
  {
    id: '1.2-hard-1',
    nodeId: '1.2',
    difficulty: 3,
    type: 'calculation',
    content: '已知双曲线 $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ ($a > 0, b > 0$) 的左、右焦点分别为 $F_1, F_2$，点 $P$ 在双曲线的右支上，且 $|PF_1| = 3|PF_2|$。若 $\\angle F_1PF_2 = 60^\\circ$，求双曲线的离心率 $e$。',
    answer: '$\\frac{\\sqrt{7}}{2}$',
    solution: '设 $|PF_2| = m$，则 $|PF_1| = 3m$。\n\n$P$ 在右支上，由双曲线第一定义：$|PF_1| - |PF_2| = 2a$，即 $3m - m = 2a \\Rightarrow m = a$。\n\n故 $|PF_2| = a$，$|PF_1| = 3a$。\n\n在 $\\triangle PF_1F_2$ 中，$|F_1F_2| = 2c$，$\\angle F_1PF_2 = 60^\\circ$。\n\n由余弦定理：\n$|F_1F_2|^2 = |PF_1|^2 + |PF_2|^2 - 2|PF_1||PF_2|\\cos 60^\\circ$\n$(2c)^2 = (3a)^2 + a^2 - 2 \\cdot 3a \\cdot a \\cdot \\frac{1}{2}$\n$4c^2 = 9a^2 + a^2 - 3a^2$\n$4c^2 = 7a^2$\n$\\frac{c^2}{a^2} = \\frac{7}{4}$\n\n故离心率 $e = \\frac{c}{a} = \\frac{\\sqrt{7}}{2}$。\n\n验证：$e = \\frac{\\sqrt{7}}{2} \\approx 1.323 > 1$，符合双曲线的性质。',
    tags: ['离心率', '第一定义', '余弦定理', '焦半径'],
  },
];

export default questions1_2;
