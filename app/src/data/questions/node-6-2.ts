import type { Question, ChoiceQuestion } from '../../types';

const questions6_2: (Question | ChoiceQuestion)[] = [
  // ===== 难度 1：基础巩固 =====
  {
    id: '6.2-easy-1',
    nodeId: '6.2',
    difficulty: 1,
    type: 'fill',
    content: '函数 $f(x) = x^2$ 在区间 $[0, 1]$ 上的最大值与最小值的差为 $\\underline{\\qquad}$。',
    answer: '$1$',
    solution: '最大值 $f(1) = 1$，最小值 $f(0) = 0$，差为 $1$。此题引出单变量最值问题，为双变量问题打基础。',
    tags: ['单变量', '最值', '基础题'],
  },
  {
    id: '6.2-easy-2',
    nodeId: '6.2',
    difficulty: 1,
    type: 'choice',
    content: '关于双变量问题，常见的处理策略不包括：',
    options: [
      '消元法：利用等式关系将一个变量用另一个表示',
      '比值代换：设 $t = x_1/x_2$ 转化为单变量',
      '极值点偏移的对称化构造',
      '直接对两个变量同时求偏导',
    ],
    answer: 'D',
    solution: 'D 不属于高中双变量问题的常见策略（偏导数是大学内容）。A（利用 $f(x_1)=f(x_2)$ 消元）、B（比值代换）、C（对称化构造）都是常用方法。',
    tags: ['双变量策略', '消元', '比值代换'],
  } as ChoiceQuestion,
  {
    id: '6.2-easy-3',
    nodeId: '6.2',
    difficulty: 1,
    type: 'fill',
    content: '若 $x_1, x_2 > 0$ 且 $x_1 + x_2 = 2$，则 $x_1 x_2$ 的最大值为 $\\underline{\\qquad}$。',
    answer: '$1$',
    solution: '由均值不等式：$x_1 x_2 \\le (\\frac{x_1 + x_2}{2})^2 = 1$，等号当 $x_1 = x_2 = 1$。这是最简单的双变量约束最值问题。',
    tags: ['双变量', '均值不等式', '基础题'],
  },

  // ===== 难度 2：综合 =====
  {
    id: '6.2-mid-1',
    nodeId: '6.2',
    difficulty: 2,
    type: 'calculation',
    content: '已知正实数 $a, b$ 满足 $a + b = 2$。\n\n(1) 求 $\\frac{1}{a} + \\frac{1}{b}$ 的最小值；\n(2) 求 $a^2 + b^2$ 的最小值。',
    answer: '$2$; $2$',
    solution: '(1) $\\frac{1}{a} + \\frac{1}{b} = \\frac{a+b}{ab} = \\frac{2}{ab}$。由 $a+b=2$，均值不等式得 $ab \\le 1$，故 $\\frac{2}{ab} \\ge 2$。$a=b=1$ 时等号成立。\n\n(2) $a^2 + b^2 = (a+b)^2 - 2ab = 4 - 2ab \\ge 4 - 2 = 2$。等号 $a=b=1$。',
    tags: ['双变量', '均值不等式', '消元'],
  },
  {
    id: '6.2-mid-2',
    nodeId: '6.2',
    difficulty: 2,
    type: 'calculation',
    content: '已知函数 $f(x) = \\ln x$，设 $x_1, x_2 > 0$ 且 $x_1 \\neq x_2$。\n\n(1) 证明：$\\frac{\\ln x_1 - \\ln x_2}{x_1 - x_2} > 0$；\n(2) 利用 (1) 证明：$\\sqrt{x_1 x_2} < \\frac{x_1 - x_2}{\\ln x_1 - \\ln x_2} < \\frac{x_1 + x_2}{2}$（$x_1 \\neq x_2$ 时）。',
    answer: '证明见解答。',
    solution: '(1) $f(x) = \\ln x$ 在 $(0, +\\infty)$ 上严格递增，故 $\\frac{\\ln x_1 - \\ln x_2}{x_1 - x_2} > 0$（$x_1 \\neq x_2$）。\n\n(2) 左半：$\\frac{x_1 - x_2}{\\ln x_1 - \\ln x_2} > \\sqrt{x_1 x_2}$ 等价于 $\\frac{x_1/x_2 - 1}{\\ln(x_1/x_2)} > \\sqrt{x_1/x_2}$。令 $t = x_1/x_2 > 0, t \\neq 1$，则需证 $\\frac{t-1}{\\ln t} > \\sqrt{t}$。\n右半：$\\frac{x_1 - x_2}{\\ln x_1 - \\ln x_2} < \\frac{x_1 + x_2}{2}$ 等价于 $\\frac{2(t-1)}{\\ln t} < t + 1$（$t = x_1/x_2$）。\n两不等式均可通过构造函数 + 单调性证明。这就是著名的"对数平均不等式"：几何平均 < 对数平均 < 算术平均。',
    tags: ['双变量', '比值代换', '对数平均'],
  },
  {
    id: '6.2-mid-3',
    nodeId: '6.2',
    difficulty: 2,
    type: 'calculation',
    content: '已知 $x_1, x_2$ 是方程 $x^2 - 2ax + 1 = 0$（$a > 1$）的两个正根。\n\n(1) 用 $a$ 表示 $x_1 + x_2$ 和 $x_1 x_2$；\n(2) 求 $x_1^2 + x_2^2$ 的最小值。',
    answer: '$x_1 + x_2 = 2a$, $x_1x_2 = 1$; 最小值为 $2$（$a \\to 1^+$ 时）',
    solution: '(1) 由韦达定理：$x_1 + x_2 = 2a$，$x_1 x_2 = 1$。\n\n(2) $x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2 = 4a^2 - 2$。$a > 1$ 时该表达式随 $a$ 增大而增大，$a \\to 1^+$ 时下确界为 $2$。但 $a > 1$（开区间），最小值不存在，下确界为 $2$。',
    tags: ['韦达定理', '双变量', '对称式'],
  },

  // ===== 难度 3：压轴 =====
  {
    id: '6.2-hard-1',
    nodeId: '6.2',
    difficulty: 3,
    type: 'calculation',
    content: '已知函数 $f(x) = \\ln x - x$，$f(x_1) = f(x_2)$（$x_1 < x_2$）。\n\n(1) 证明：$x_1 < 1 < x_2$；\n(2) 利用比值代换 $t = \\frac{x_2}{x_1} > 1$，证明 $x_1 + x_2 > 2$。',
    answer: '证明见解答。',
    solution: '(1) $f\'(x) = \\frac{1}{x} - 1$，极大值点 $x = 1$。$f(x_1) = f(x_2)$ 且 $x_1 \\neq x_2$，由单调性知必分布于 $1$ 两侧。\n\n(2) 由 $f(x_1) = f(x_2)$ 得 $\\ln x_1 - x_1 = \\ln x_2 - x_2 \\Rightarrow x_2 - x_1 = \\ln\\frac{x_2}{x_1} = \\ln t$。又 $x_2 = tx_1$，故 $(t-1)x_1 = \\ln t \\Rightarrow x_1 = \\frac{\\ln t}{t-1}$，$x_2 = \\frac{t\\ln t}{t-1}$。\n$x_1 + x_2 = \\frac{(t+1)\\ln t}{t-1}$。要证 $x_1 + x_2 > 2$，即 $\\frac{(t+1)\\ln t}{t-1} > 2$（$t > 1$），等价于 $\\ln t > \\frac{2(t-1)}{t+1}$。\n令 $h(t) = \\ln t - \\frac{2(t-1)}{t+1}$（$t > 1$）。$h\'(t) = \\frac{1}{t} - \\frac{4}{(t+1)^2} = \\frac{(t+1)^2 - 4t}{t(t+1)^2} = \\frac{(t-1)^2}{t(t+1)^2} > 0$。\n$h(t)$ 递增，$h(1) = 0$，故 $h(t) > 0$ 对所有 $t > 1$ 成立。得证。',
    tags: ['双变量', '比值代换', '极值点偏移'],
  },
  {
    id: '6.2-hard-2',
    nodeId: '6.2',
    difficulty: 3,
    type: 'calculation',
    content: '已知 $x_1, x_2 > 0$ 且 $x_1 x_2 = 4$。\n\n(1) 利用均值不等式求 $x_1 + x_2$ 的最小值；\n(2) 利用 (1) 求 $2^{x_1} + 2^{x_2}$ 的最小值。',
    answer: '$4$; $8$',
    solution: '(1) $x_1 + x_2 \\ge 2\\sqrt{x_1 x_2} = 2\\sqrt{4} = 4$，当且仅当 $x_1 = x_2 = 2$ 时等号成立。\n\n(2) $2^{x_1} + 2^{x_2} \\ge 2\\sqrt{2^{x_1} \\cdot 2^{x_2}} = 2\\sqrt{2^{x_1 + x_2}}$。由 (1) $x_1 + x_2 \\ge 4$，且 $2^t$ 递增，故 $\\sqrt{2^{x_1+x_2}} \\ge \\sqrt{2^4} = 4$。$2^{x_1} + 2^{x_2} \\ge 2 \\cdot 4 = 8$。等号成立仅当 $x_1 = x_2 = 2$。',
    tags: ['双变量', '均值不等式', '约束最值'],
  },
  {
    id: '6.2-hard-3',
    nodeId: '6.2',
    difficulty: 3,
    type: 'calculation',
    content: '已知函数 $f(x) = xe^{-x}$。若 $x_1 \\neq x_2$ 且 $f(x_1) = f(x_2)$。\n\n(1) 证明：$x_1 + x_2 > 2$；\n(2) 证明：$x_1 x_2 < 1$。',
    answer: '证明见解答。',
    solution: '(1) $f\'(x) = (1-x)e^{-x}$，极大值点 $x = 1$。由 $f(x_1) = f(x_2)$ 且 $x_1 \\neq x_2$，知 $x_1 < 1 < x_2$。$x_1 + x_2 > 2$ 的证明可用对称化方法（类比 node 5.3 的极值点偏移标准证明）。\n\n(2) 由 $x_1 e^{-x_1} = x_2 e^{-x_2}$，取对数得 $\\ln x_1 - x_1 = \\ln x_2 - x_2$，即 $\\ln(x_1/x_2) = x_1 - x_2$。令 $t = x_1/x_2 \\in (0, 1)$，则 $\\ln t = x_1 - x_2$。由 $x_1 = t x_2$ 代入得 $\\ln t = (t-1)x_2$，$x_2 = \\frac{\\ln t}{t-1}$。$x_1x_2 = \\frac{t\\ln^2 t}{(t-1)^2}$。构造 $h(t) = \\ln^2 t - \\frac{(t-1)^2}{t}$，求导分析可得 $h(t) < 0$（$t \\in (0, 1)$），故 $x_1x_2 < 1$。',
	    tags: ['极值点偏移', '双变量', '对称化构造'],
    source: '2020·新高考Ⅰ卷·T21改编',
  },
];

export default questions6_2;
