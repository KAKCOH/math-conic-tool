import type { Question, ChoiceQuestion } from '../../types';

const questions1_1: (Question | ChoiceQuestion)[] = [
  // ===== 难度 1：基础巩固 =====
  {
    id: '1.1-easy-1',
    nodeId: '1.1',
    difficulty: 1,
    type: 'fill',
    content: '椭圆 $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$ 的焦点坐标是 $\\underline{\\qquad}$，离心率是 $\\underline{\\qquad}$。',
    answer: '$(\\pm 4, 0)$; $\\frac{4}{5}$',
    solution: '$a^2 = 25 \\Rightarrow a = 5$，$b^2 = 9 \\Rightarrow b = 3$。由 $c^2 = a^2 - b^2 = 25 - 9 = 16$ 得 $c = 4$。焦点在 $x$ 轴上（因为 $a > b$ 且 $a$ 在 $x$ 下），故焦点为 $(\\pm 4, 0)$。离心率 $e = \\frac{c}{a} = \\frac{4}{5}$。',
    tags: ['标准方程', '焦点', '离心率', 'a/b/c关系'],
  },
  {
    id: '1.1-easy-2',
    nodeId: '1.1',
    difficulty: 1,
    type: 'choice',
    content: '已知椭圆 $\\frac{x^2}{16} + \\frac{y^2}{m} = 1$ 的离心率为 $\\frac{1}{2}$，则 $m$ 等于：',
    options: ['$8$', '$12$ 或 $\\frac{64}{3}$', '$12$', '$\\frac{64}{3}$'],
    answer: 'B',
    solution: '$a^2 = 16 \\Rightarrow a = 4$。$e = \\frac{c}{a} = \\frac{1}{2} \\Rightarrow c = 2$。有两种情况：① 焦点在 $x$ 轴：$m < 16$，$c^2 = a^2 - m \\Rightarrow 4 = 16 - m \\Rightarrow m = 12$；② 焦点在 $y$ 轴：$m > 16$，$c^2 = m - a^2 \\Rightarrow 4 = m - 16 \\Rightarrow m = 20$（无此选项？检查：$c^2 = m - 16 = 4 \\Rightarrow m = 20$ 对应 $\\frac{64}{3}$？不对。重新审视：若焦点在 $y$ 轴则 $m > 16$，$a^2 = m, b^2 = 16, c^2 = m - 16 = \\frac{m}{4} \\Rightarrow \\frac{3m}{4} = 16 \\Rightarrow m = \\frac{64}{3}$。所以 $m = 12$ 或 $m = \\frac{64}{3}$，选 B。',
    tags: ['离心率', '焦点', 'a/b/c关系'],
  } as ChoiceQuestion,
  {
    id: '1.1-easy-3',
    nodeId: '1.1',
    difficulty: 1,
    type: 'fill',
    content: '椭圆 $\\frac{x^2}{9} + \\frac{y^2}{25} = 1$ 的长轴长为 $\\underline{\\qquad}$，短轴长为 $\\underline{\\qquad}$，焦点在 $\\underline{\\qquad}$ 轴上。',
    answer: '10; 6; y',
    solution: '$a^2 = 25$（分母大者为 $a^2$）$\\Rightarrow a = 5$，$b^2 = 9 \\Rightarrow b = 3$。焦点在 $y$ 轴（$y$ 下的分母 $25 > x$ 下的分母 $9$）。长轴 $= 2a = 10$，短轴 $= 2b = 6$。',
    tags: ['长轴', '短轴', '焦点', '标准方程'],
  },
  {
    id: '1.1-easy-4',
    nodeId: '1.1',
    difficulty: 1,
    type: 'fill',
    content: '已知椭圆上一点 $P$ 到两焦点 $F_1, F_2$ 的距离分别为 $3$ 和 $7$，则该椭圆的 $a = \\underline{\\qquad}$。',
    answer: '5',
    solution: '由椭圆定义：$|PF_1| + |PF_2| = 2a$。所以 $2a = 3 + 7 = 10$，$a = 5$。',
    tags: ['定义', '第一定义'],
  },

  // ===== 难度 2：综合 =====
  {
    id: '1.1-mid-1',
    nodeId: '1.1',
    difficulty: 2,
    type: 'calculation',
    content: '已知椭圆 $C$ 的中心在原点，一个焦点为 $F(2, 0)$，离心率为 $\\frac{1}{2}$。\n\n(1) 求椭圆 $C$ 的标准方程；\n(2) 若点 $P(2, 3)$ 在椭圆上，求 $P$ 到两焦点的距离之和。',
    answer: '$\\frac{x^2}{16} + \\frac{y^2}{12} = 1$; $8$',
    solution: '(1) 由焦点 $(2, 0)$ 知 $c = 2$，焦点在 $x$ 轴。$e = \\frac{c}{a} = \\frac{1}{2} \\Rightarrow a = 4$。$b^2 = a^2 - c^2 = 16 - 4 = 12$。故 $C: \\frac{x^2}{16} + \\frac{y^2}{12} = 1$。\n\n(2) 验证 $P$ 在椭圆上：$\\frac{4}{16} + \\frac{9}{12} = \\frac{1}{4} + \\frac{3}{4} = 1$ ✓。由椭圆定义，椭圆上任意一点到两焦点的距离之和等于 $2a = 8$。或用距离公式：$|PF_1| + |PF_2| = \\sqrt{(2-2)^2 + 3^2} + \\sqrt{(2+2)^2 + 3^2} = 3 + 5 = 8$，与定义吻合。',
    tags: ['标准方程', '离心率', '焦点', 'a/b/c关系'],
  },

  // ===== 难度 3：压轴 =====
  {
    id: '1.1-hard-1',
    nodeId: '1.1',
    difficulty: 3,
    type: 'calculation',
    content: '设 $F_1, F_2$ 分别是椭圆 $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ $(a > b > 0)$ 的左、右焦点。已知椭圆上存在一点 $P$，使得 $PF_1 \\perp PF_2$，求该椭圆离心率的取值范围。',
    answer: '$[\\frac{\\sqrt{2}}{2}, 1)$',
    solution: '设 $|PF_1| = m$，$|PF_2| = n$，则 $m + n = 2a$。由 $PF_1 \\perp PF_2$，在 $\\triangle PF_1F_2$ 中 $m^2 + n^2 = (2c)^2 = 4c^2$。又 $(m+n)^2 = m^2 + n^2 + 2mn = 4c^2 + 2mn = 4a^2$，得 $2mn = 4a^2 - 4c^2$。由基本不等式 $mn \\leq (\\frac{m+n}{2})^2 = a^2$，故 $4a^2 - 4c^2 \\leq 2a^2 \\Rightarrow 2a^2 \\leq 4c^2 \\Rightarrow \\frac{c^2}{a^2} \\geq \\frac{1}{2}$，即 $e \\geq \\frac{\\sqrt{2}}{2}$。又椭圆 $e < 1$，故 $e \\in [\\frac{\\sqrt{2}}{2}, 1)$。',
    tags: ['离心率', '定义', '基本不等式', '垂直条件'],
  },
];

export default questions1_1;
