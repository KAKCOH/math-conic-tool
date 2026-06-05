import type { Question, ChoiceQuestion } from '../../types';

const questions2_3: (Question | ChoiceQuestion)[] = [
  // ===== 难度 1：基础巩固 =====
  {
    id: '2.3-easy-1',
    nodeId: '2.3',
    difficulty: 1,
    type: 'fill',
    content: '![椭圆 $\\frac{x^2}{25}+\\frac{y^2}{16}=1$，点 $P(3,\\frac{16}{5})$ 在椭圆上，过 $P$ 的切线](/figures/q-2.3-easy-1.png)\n\n椭圆 $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ 在点 $P(3, \\frac{16}{5})$ 处的切线方程为 $\\underline{\\qquad}$。',
    answer: '$3x + 5y = 25$',
    solution: '由替换法则，椭圆 $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ 在点 $P(x_0, y_0)$ 处的切线方程为 $\\frac{x_0 x}{a^2} + \\frac{y_0 y}{b^2} = 1$。\n\n代入 $x_0 = 3, y_0 = \\frac{16}{5}, a^2 = 25, b^2 = 16$：\n$\\frac{3x}{25} + \\frac{(16/5)y}{16} = 1 \\Rightarrow \\frac{3x}{25} + \\frac{y}{5} = 1$。\n各项乘 $25$：$3x + 5y = 25$。\n\n验证：$P$ 在椭圆上，$\\frac{9}{25} + \\frac{256/25}{16} = \\frac{9}{25} + \\frac{16}{25} = 1$。',
    tags: ['切线', '替换法则', '椭圆'],
  },
  {
    id: '2.3-easy-2',
    nodeId: '2.3',
    difficulty: 1,
    type: 'choice',
    content: '![椭圆 $\\frac{x^2}{9}+\\frac{y^2}{4}=1$，外点 $P(3,2)$，两条切线及切点弦 $Q_1Q_2$](/figures/q-2.3-easy-2.png)\n\n过椭圆 $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$ 外一点 $P(3, 2)$ 作两条切线，切点分别为 $Q_1, Q_2$，则直线 $Q_1Q_2$（切点弦）的方程为：',
    options: ['$2x + 3y = 6$', '$3x + 2y = 6$', '$\\frac{x}{3} + \\frac{y}{2} = 6$', '$2x + 3y = 1$'],
    answer: 'A',
    solution: '$P(3, 2)$ 在椭圆外（$\\frac{9}{9} + \\frac{4}{4} = 2 > 1$）。\n\n切点弦方程（替换法则）：$\\frac{x_0 x}{a^2} + \\frac{y_0 y}{b^2} = 1$。代入 $x_0 = 3, y_0 = 2, a^2 = 9, b^2 = 4$：\n$\\frac{3x}{9} + \\frac{2y}{4} = 1 \\Rightarrow \\frac{x}{3} + \\frac{y}{2} = 1$。整理得 $2x + 3y = 6$。\n\n注：无论点在曲线上、曲线外还是曲线内，替换法则写出的方程分别为切线、切点弦和极线。',
    tags: ['切点弦', '替换法则', '椭圆'],
  } as ChoiceQuestion,
  {
    id: '2.3-easy-3',
    nodeId: '2.3',
    difficulty: 1,
    type: 'fill',
    content: '椭圆 $\\frac{x^2}{9} + \\frac{y^2}{5} = 1$ 的斜率为 $2$ 的切线方程为 $y = 2x \\pm \\underline{\\qquad}$。',
    answer: '$\\sqrt{41}$',
    solution: '椭圆 $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ 中已知斜率 $k$ 的切线方程为 $y = kx \\pm \\sqrt{a^2 k^2 + b^2}$。\n\n此处 $a^2 = 9, b^2 = 5, k = 2$，故截距 $|m| = \\sqrt{9 \\times 4 + 5} = \\sqrt{36 + 5} = \\sqrt{41}$。\n切线为 $y = 2x \\pm \\sqrt{41}$。\n\n推导：设 $y = 2x + m$，代入椭圆方程，令判别式 $\\Delta = 0$ 解得 $m = \\pm \\sqrt{41}$。',
    tags: ['切线', '斜率', '判别式'],
  },

  // ===== 难度 2：综合 =====
  {
    id: '2.3-mid-1',
    nodeId: '2.3',
    difficulty: 2,
    type: 'calculation',
    content: '已知椭圆 $C: \\frac{x^2}{4} + \\frac{y^2}{3} = 1$。\n\n(1) 求椭圆上一点 $P(1, \\frac{3}{2})$ 处的切线方程；\n(2) 过椭圆外一点 $Q(4, 3)$ 作椭圆的切线，求切点弦所在直线的方程。',
    answer: '$x + 2y = 4$; $x + y = 1$',
    solution: '(1) 验证 $P$ 在椭圆上：$\\frac{1}{4} + \\frac{9/4}{3} = \\frac{1}{4} + \\frac{3}{4} = 1$。\n切线方程（替换法则）：$\\frac{1 \\cdot x}{4} + \\frac{\\frac{3}{2} \\cdot y}{3} = 1$，即 $\\frac{x}{4} + \\frac{y}{2} = 1$，整理得 $x + 2y = 4$。\n\n(2) $Q(4, 3)$ 在椭圆外：$\\frac{16}{4} + \\frac{9}{3} = 4 + 3 = 7 > 1$。\n切点弦方程：$\\frac{4x}{4} + \\frac{3y}{3} = 1$，整理得 $x + y = 1$。\n\n注：虽然 (1) 是切线、(2) 是切点弦，但使用的替换法则公式完全一致。',
    tags: ['切线', '切点弦', '替换法则'],
  },

  // ===== 难度 3：压轴 =====
  {
    id: '2.3-hard-1',
    nodeId: '2.3',
    difficulty: 3,
    type: 'calculation',
    content: '已知椭圆 $C: \\frac{x^2}{9} + \\frac{y^2}{5} = 1$，$F$ 为其右焦点。\n\n(1) 求 $F$ 关于椭圆 $C$ 的极线方程，并与右准线方程比较；\n(2) 设 $P$ 为椭圆上一点，$l$ 为 $F$ 的极线，利用极点极线关系证明 $\\frac{|PF|}{d(P, l)}$ 为常数，并求出该常数；\n(3) 左、右两条准线与椭圆围成一个矩形区域，求该矩形的面积。',
    answer: '$x = \\frac{9}{2}$; $\\frac{2}{3}$; $18\\sqrt{5}$',
    solution: '(1) $C$ 中 $a = 3, b = \\sqrt{5}, c = \\sqrt{9-5} = 2$。右焦点 $F(2, 0)$。\n点 $F$ 的极线方程（替换法则）：$\\frac{2x}{9} + \\frac{0 \\cdot y}{5} = 1$，即 $x = \\frac{9}{2}$。\n而右准线方程为 $x = \\frac{a^2}{c} = \\frac{9}{2}$。两者完全一致——焦点与准线自成极点极线对，这是极点极线体系的核心几何背景。\n\n(2) 由第二定义：椭圆上任意一点 $P(x_0, y_0)$ 到焦点 $F$ 的距离与到对应准线的距离之比恒为离心率 $e$。\n$e = \\frac{c}{a} = \\frac{2}{3}$。故 $\\frac{|PF|}{d(P, l)} = \\frac{2}{3}$（常数）。\n从极点极线角度看：$F$ 和 $l$ 构成极点极线对，$e$ 为圆锥曲线的特征常数。\n\n(3) 左准线 $x = -\\frac{9}{2}$，右准线 $x = \\frac{9}{2}$，宽度为 $9$。\n椭圆上下顶点为 $(0, \\pm \\sqrt{5})$，高度为 $2\\sqrt{5}$。\n该矩形面积 $S = 9 \\times 2\\sqrt{5} = 18\\sqrt{5}$。\n\n注：极点极线观点统一了椭圆、双曲线和抛物线中"焦点-准线"关系，这是圆锥曲线统一定义的理论基础。',
    tags: ['极点极线', '焦点', '准线', '第二定义'],
  },
];

export default questions2_3;
