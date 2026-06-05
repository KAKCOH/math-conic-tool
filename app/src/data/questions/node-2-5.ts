import type { Question, ChoiceQuestion } from '../../types';

const questions2_5: (Question | ChoiceQuestion)[] = [
  // ===== 难度 1：基础巩固 =====
  {
    id: '2.5-easy-1',
    nodeId: '2.5',
    difficulty: 1,
    type: 'fill',
    content: '对椭圆 $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ 作仿射变换 $x\' = \\frac{x}{5}, y\' = \\frac{y}{4}$，椭圆变为单位圆。则原椭圆上一点 $P(3, \\frac{16}{5})$ 在变换后的坐标为 $\\underline{\\qquad}$。',
    answer: '$(\\frac{3}{5}, \\frac{4}{5})$',
    solution: '将 $P(3, \\frac{16}{5})$ 代入变换：$x\' = \\frac{x}{5} = \\frac{3}{5}$，$y\' = \\frac{y}{4} = \\frac{16/5}{4} = \\frac{4}{5}$。\n变换后坐标为 $(\\frac{3}{5}, \\frac{4}{5})$。\n验证：$(\\frac{3}{5})^2 + (\\frac{4}{5})^2 = \\frac{9}{25} + \\frac{16}{25} = 1$，确实落在单位圆上。',
    tags: ['仿射变换', '坐标变换'],
  },
  {
    id: '2.5-easy-2',
    nodeId: '2.5',
    difficulty: 1,
    type: 'choice',
    content: '关于仿射变换 $x\' = \\frac{x}{a}, y\' = \\frac{y}{b}$ 将椭圆 $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ 变为单位圆，以下说法错误的是：',
    options: [
      '平行线变换后仍平行',
      '弦的中点变换后仍为弦的中点',
      '变换后椭圆的焦点仍映射到圆的"焦点"',
      '共线三点的线段比例在变换前后保持不变',
    ],
    answer: 'C',
    solution: 'A 正确：仿射变换保持平行性。\nB 正确：中点即 1:1 分点，共线三点的单比是仿射不变量。\nC 错误：焦点 $(\\pm c, 0)$ 变换后为 $(\\pm \\frac{c}{a}, 0) = (\\pm e, 0)$，只是圆内两点，并非圆的"焦点"（圆无焦点概念）。涉及焦点、离心率、准线的问题不宜直接用仿射变换。\nD 正确：共线三点单比（有向线段比）是仿射不变量。',
    tags: ['仿射变换', '不变性', '焦点'],
  } as ChoiceQuestion,
  {
    id: '2.5-easy-3',
    nodeId: '2.5',
    difficulty: 1,
    type: 'fill',
    content: '椭圆 $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ 经仿射变换 $x\' = \\frac{x}{a}, y\' = \\frac{y}{b}$ 变为单位圆后，原图形面积 $S_{\\text{原}}$ 与变换后面积 $S_{\\text{变}}$ 满足 $S_{\\text{原}} = \\underline{\\qquad} \\times S_{\\text{变}}$。',
    answer: '$ab$',
    solution: '仿射变换 $x\' = \\frac{x}{a}, y\' = \\frac{y}{b}$ 的雅可比行列式 $|J| = \\frac{1}{ab}$。面积缩放因子为 $\\frac{1}{|J|} = ab$。\n即 $S_{\\text{原}} = ab \\cdot S_{\\text{变}}$。\n\n特例：椭圆面积 $\\pi ab$ = 单位圆面积 $\\pi$ 的 $ab$ 倍，与公式一致。',
    tags: ['仿射变换', '面积', '雅可比'],
  },

  // ===== 难度 2：综合 =====
  {
    id: '2.5-mid-1',
    nodeId: '2.5',
    difficulty: 2,
    type: 'calculation',
    content: '已知椭圆 $C: \\frac{x^2}{9} + \\frac{y^2}{4} = 1$，$A, B$ 为椭圆上的两点，线段 $AB$ 被点 $M(1, 1)$ 平分。\n\n(1) 用点差法求直线 $AB$ 的斜率；\n(2) 求直线 $AB$ 的方程。',
    answer: '$-\\frac{4}{9}$; $4x + 9y - 13 = 0$',
    solution: '(1) $a = 3, b = 2$。点差法（垂径定理）：$k_{AB} \\cdot k_{OM} = -\\frac{b^2}{a^2} = -\\frac{4}{9}$。\n$M(1, 1)$，$k_{OM} = \\frac{1}{1} = 1$，故 $k_{AB} = -\\frac{4}{9}$。\n\n（仿射变换思路得相同结果：作 $x\' = \\frac{x}{3}, y\' = \\frac{y}{2}$ 将椭圆变为单位圆，$M$ 变为 $M\'(\\frac{1}{3}, \\frac{1}{2})$。圆中 $O\'M\' \\perp A\'B\'$，$k_{A\'B\'} = -\\frac{2}{3}$。反变换 $k_{AB} = \\frac{2}{3} k_{A\'B\'} = -\\frac{4}{9}$。）\n\n(2) 先验证 $M$ 在椭圆内：$\\frac{1}{9} + \\frac{1}{4} = \\frac{13}{36} < 1$，弦存在。\n过 $M(1, 1)$ 斜率为 $-\\frac{4}{9}$ 的直线：$y - 1 = -\\frac{4}{9}(x - 1)$，整理得 $4x + 9y - 13 = 0$。',
    tags: ['仿射变换', '点差法', '中点弦'],
  },

  // ===== 难度 3：压轴 =====
  {
    id: '2.5-hard-1',
    nodeId: '2.5',
    difficulty: 3,
    type: 'calculation',
    content: '已知椭圆 $C: \\frac{x^2}{9} + \\frac{y^2}{4} = 1$。作仿射变换 $x\' = \\frac{x}{3}, y\' = \\frac{y}{2}$。\n\n(1) 写出变换后曲线 $C\'$ 的方程；\n(2) 利用仿射变换求椭圆 $C$ 内接三角形的最大面积；\n(3) 变换后的圆 $C\'$ 上有一个对应角（从 $x\'$ 轴正方向逆时针）为 $60^\\circ$ 的点 $P\'$，求原椭圆上点 $P$ 的坐标及 $P$ 处的切线方程。',
    answer: "$x'^2+y'^2=1$; $\\frac{9\\sqrt{3}}{2}$; $P(\\frac{3}{2}, \\sqrt{3})$, $2x+3\\sqrt{3}y=12$",
    solution: '(1) $x = 3x\', y = 2y\'$，代入椭圆方程：\n$\\frac{(3x\')^2}{9} + \\frac{(2y\')^2}{4} = 1 \\Rightarrow x\'^2 + y\'^2 = 1$。$C\'$ 为单位圆。\n\n(2) 圆 $C\'$ 中内接三角形的最大面积为内接正三角形面积：$S_{\\text{变}} = \\frac{3\\sqrt{3}}{4}$（单位圆 $R=1$ 内接正三角形边长为 $\\sqrt{3}$）。\n由面积缩放关系 $S_{\\text{原}} = ab \\cdot S_{\\text{变}}$，其中 $a = 3, b = 2$：\n$S_{\\max} = 3 \\times 2 \\times \\frac{3\\sqrt{3}}{4} = \\frac{9\\sqrt{3}}{2}$。\n\n(3) $P\'$ 在单位圆上对应角 $60^\\circ$：$P\'(\\cos 60^\\circ, \\sin 60^\\circ) = (\\frac{1}{2}, \\frac{\\sqrt{3}}{2})$。\n反变换：$x = 3x\' = \\frac{3}{2}$，$y = 2y\' = \\sqrt{3}$。$P(\\frac{3}{2}, \\sqrt{3})$。\n验证 $P$ 在椭圆上：$\\frac{(3/2)^2}{9} + \\frac{(\\sqrt{3})^2}{4} = \\frac{9/4}{9} + \\frac{3}{4} = \\frac{1}{4} + \\frac{3}{4} = 1$。\n\n切线方程（替换法则）：$\\frac{\\frac{3}{2}x}{9} + \\frac{\\sqrt{3}y}{4} = 1 \\Rightarrow \\frac{x}{6} + \\frac{\\sqrt{3}y}{4} = 1$。\n各项乘 $12$：$2x + 3\\sqrt{3}y = 12$。\n\n（也可用仿射保持相切：圆 $C\'$ 在 $P\'$ 的切线为 $\\frac{x\'}{2} + \\frac{\\sqrt{3}y\'}{2} = 1$，反变换回椭圆坐标即得上述方程。）',
    tags: ['仿射变换', '面积最值', '切线', '内接三角形'],
  },
];

export default questions2_5;
