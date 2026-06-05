import type { Question, ChoiceQuestion } from '../../types';

const questions2_1: (Question | ChoiceQuestion)[] = [
  // ===== 难度 1：基础巩固 =====
  {
    id: '2.1-easy-1',
    nodeId: '2.1',
    difficulty: 1,
    type: 'fill',
    content: '椭圆 $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$ 上一点 $P$ 的横坐标 $x_0 = 3$（$y_0 > 0$），利用焦半径公式求 $|PF_1| = \\underline{\\qquad}$，$|PF_2| = \\underline{\\qquad}$。',
    answer: '$\\frac{37}{5}$; $\\frac{13}{5}$',
    solution: '由椭圆方程 $a = 5, b = 3, c = \\sqrt{25-9} = 4, e = \\frac{c}{a} = \\frac{4}{5}$。\n\n焦半径公式（焦点在 $x$ 轴）：$|PF_1| = a + ex_0 = 5 + \\frac{4}{5} \\times 3 = 5 + \\frac{12}{5} = \\frac{37}{5}$，$|PF_2| = a - ex_0 = 5 - \\frac{12}{5} = \\frac{13}{5}$。\n\n验证：$P$ 坐标 $y_0 = \\sqrt{9(1-\\frac{9}{25})} = \\frac{12}{5}$，用距离公式 $|PF_1| = \\sqrt{(3+4)^2 + (\\frac{12}{5})^2} = \\sqrt{49 + \\frac{144}{25}} = \\sqrt{\\frac{1369}{25}} = \\frac{37}{5}$，结果一致。',
    tags: ['焦半径公式', '第二定义'],
  },
  {
    id: '2.1-easy-2',
    nodeId: '2.1',
    difficulty: 1,
    type: 'fill',
    content: '椭圆 $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ 的离心率 $e = \\underline{\\qquad}$。若椭圆上一点 $P$ 到右焦点的距离为 $2$，则 $P$ 到右准线的距离为 $\\underline{\\qquad}$。',
    answer: '$\\frac{3}{5}$; $\\frac{10}{3}$',
    solution: '$a = 5, b = 4, c = \\sqrt{25-16} = 3$，故 $e = \\frac{c}{a} = \\frac{3}{5}$。由第二定义 $\\frac{|PF_2|}{d(P, \\text{右准线})} = e$，得 $d = \\frac{|PF_2|}{e} = \\frac{2}{3/5} = \\frac{10}{3}$。',
    tags: ['第二定义', '离心率', '准线'],
  },
  {
    id: '2.1-easy-3',
    nodeId: '2.1',
    difficulty: 1,
    type: 'choice',
    content: '设 $A_1, A_2$ 分别是椭圆 $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$ 的左、右顶点，$P$ 为椭圆上异于 $A_1, A_2$ 的任意一点，则 $k_{PA_1} \\cdot k_{PA_2}$ 等于：',
    options: ['$\\frac{9}{16}$', '$-\\frac{9}{16}$', '$\\frac{16}{9}$', '$-\\frac{16}{9}$'],
    answer: 'B',
    solution: '由第三定义，椭圆 $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ 上任意一点（非顶点）与长轴两端点连线的斜率之积恒为 $-\\frac{b^2}{a^2}$。此处 $a^2 = 16, b^2 = 9$，故 $k_{PA_1} \\cdot k_{PA_2} = -\\frac{9}{16}$。\n\n验证：取 $P(0, 3)$，$k_{PA_1} = \\frac{3}{4}$，$k_{PA_2} = -\\frac{3}{4}$，积为 $-\\frac{9}{16}$。',
    tags: ['第三定义', '斜率之积', '顶点'],
  } as ChoiceQuestion,

  // ===== 难度 2：综合 =====
  {
    id: '2.1-mid-1',
    nodeId: '2.1',
    difficulty: 2,
    type: 'calculation',
    content: '已知椭圆 $C$ 的焦点在 $x$ 轴上，中心在原点，离心率为 $\\frac{1}{2}$，且右焦点到右准线的距离为 $3$。\n\n(1) 求椭圆 $C$ 的标准方程；\n(2) 若点 $M(1, 1)$ 在椭圆 $C$ 内，以 $M$ 为中点的弦 $AB$ 交椭圆于 $A, B$ 两点，求直线 $AB$ 的方程。',
    answer: '$\\frac{x^2}{4} + \\frac{y^2}{3} = 1$; $3x + 4y - 7 = 0$',
    solution: '(1) 设 $e = \\frac{c}{a} = \\frac{1}{2}$，得 $a = 2c$。右准线 $x = \\frac{a^2}{c} = \\frac{(2c)^2}{c} = 4c$。右焦点 $(c, 0)$ 到右准线距离 $4c - c = 3c = 3$，故 $c = 1$。\n进而 $a = 2$，$b^2 = a^2 - c^2 = 4 - 1 = 3$。椭圆方程为 $\\frac{x^2}{4} + \\frac{y^2}{3} = 1$。\n\n(2) 由点差法（垂径定理）：$k_{AB} \\cdot k_{OM} = -\\frac{b^2}{a^2} = -\\frac{3}{4}$。$M(1, 1)$，$k_{OM} = 1$，故 $k_{AB} = -\\frac{3}{4}$。\n（先验证 $M$ 在椭圆内：$\\frac{1}{4} + \\frac{1}{3} = \\frac{7}{12} < 1$，弦存在。）\n过 $M(1, 1)$ 斜率为 $-\\frac{3}{4}$ 的直线：$y - 1 = -\\frac{3}{4}(x - 1)$，整理得 $3x + 4y - 7 = 0$。',
    tags: ['离心率', '准线', '点差法', '中点弦'],
  },

  // ===== 难度 3：压轴 =====
  {
    id: '2.1-hard-1',
    nodeId: '2.1',
    difficulty: 3,
    type: 'calculation',
    content: '已知椭圆 $C: \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ $(a > b > 0)$，离心率 $e = \\frac{3}{5}$，焦点 $F_1, F_2$ 在 $x$ 轴上。\n\n(1) 椭圆上一点 $P$ 满足 $|PF_1| : |PF_2| = 3 : 2$，试用 $a$ 表示 $P$ 的横坐标 $x_0$；\n(2) 若 $a = 5$，求 $P$ 的坐标（$y_0 > 0$）；\n(3) 若点 $M(\\frac{5}{2}, 2)$ 是椭圆内一条弦的中点，求该弦所在直线的方程。',
    answer: '$\\frac{a}{3}$; $(\\frac{5}{3}, \\frac{8\\sqrt{2}}{3})$; $4x + 5y - 20 = 0$',
    solution: '(1) $e = \\frac{c}{a} = \\frac{3}{5}$，得 $c = \\frac{3a}{5}$，$b = \\frac{4a}{5}$。\n焦半径公式：$|PF_1| = a + ex_0 = a + \\frac{3}{5}x_0$，$|PF_2| = a - ex_0 = a - \\frac{3}{5}x_0$。\n由 $\\frac{|PF_1|}{|PF_2|} = \\frac{3}{2}$ 得 $a + \\frac{3}{5}x_0 = \\frac{3}{2}(a - \\frac{3}{5}x_0)$。\n$a + \\frac{3}{5}x_0 = \\frac{3}{2}a - \\frac{9}{10}x_0$\n$\\frac{3}{5}x_0 + \\frac{9}{10}x_0 = \\frac{3}{2}a - a$\n$\\frac{15}{10}x_0 = \\frac{1}{2}a$\n$x_0 = \\frac{a}{3}$。\n\n(2) $a = 5$ 时，$x_0 = \\frac{5}{3}$，$b = 4$。\n代入椭圆方程 $\\frac{x_0^2}{25} + \\frac{y_0^2}{16} = 1$：\n$\\frac{25/9}{25} + \\frac{y_0^2}{16} = 1 \\Rightarrow \\frac{1}{9} + \\frac{y_0^2}{16} = 1 \\Rightarrow y_0^2 = 16 \\times \\frac{8}{9} = \\frac{128}{9}$。\n$y_0 = \\frac{8\\sqrt{2}}{3}$（取正）。$P(\\frac{5}{3}, \\frac{8\\sqrt{2}}{3})$。\n\n(3) $a = 5, b = 4$ 时，椭圆为 $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$。\n验证 $M$ 在椭圆内：$\\frac{25/4}{25} + \\frac{4}{16} = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2} < 1$。\n由点差法：$k_{AB} \\cdot k_{OM} = -\\frac{b^2}{a^2} = -\\frac{16}{25}$，其中 $k_{OM} = \\frac{2}{5/2} = \\frac{4}{5}$。\n故 $k_{AB} = -\\frac{16}{25} \\div \\frac{4}{5} = -\\frac{16}{25} \\times \\frac{5}{4} = -\\frac{4}{5}$。\n过 $M(\\frac{5}{2}, 2)$ 斜率为 $-\\frac{4}{5}$ 的直线：$y - 2 = -\\frac{4}{5}(x - \\frac{5}{2})$，整理得 $4x + 5y - 20 = 0$。',
    tags: ['焦半径公式', '点差法', '中点弦', '比例'],
  },
];

export default questions2_1;
