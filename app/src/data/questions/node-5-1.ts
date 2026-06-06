import type { Question, ChoiceQuestion } from '../../types';

const questions5_1: (Question | ChoiceQuestion)[] = [
  // ===== 难度 1：基础巩固 =====
  {
    id: '5.1-easy-1',
    nodeId: '5.1',
    difficulty: 1,
    type: 'proof',
    content: '证明：当 $x \\ge 0$ 时，$\\sin x \\le x$。',
    answer: '证明见解答。',
    solution: '构造函数 $g(x) = x - \\sin x$（$x \\ge 0$）。$g\'(x) = 1 - \\cos x \\ge 0$，$g(x)$ 在 $[0, +\\infty)$ 上单调递增。$g(0) = 0$，故 $g(x) \\ge 0$，即 $x \\ge \\sin x$。',
    tags: ['构造函数', '证明不等式', '基础题'],
  },
  {
    id: '5.1-easy-2',
    nodeId: '5.1',
    difficulty: 1,
    type: 'choice',
    content: '要证明 $\\ln(1+x) \\le x$（$x > -1$），最合适的辅助函数是：',
    options: [
      '$F(x) = \\ln(1+x) - x$',
      '$F(x) = x - \\ln(1+x)$',
      '$F(x) = \\frac{\\ln(1+x)}{x}$',
      '$F(x) = \\ln(1+x) + x$',
    ],
    answer: 'B',
    solution: '构造 $F(x) = x - \\ln(1+x)$，则不等式等价于 $F(x) \\ge 0$。$F\'(x) = 1 - \\frac{1}{1+x} = \\frac{x}{1+x}$。$F(0) = 0$。$-1 < x < 0$ 时 $F\'(x) < 0$，$x > 0$ 时 $F\'(x) > 0$，故 $F(x) \\ge F(0) = 0$，不等式得证。',
    tags: ['构造函数', '对数不等式', '单调性'],
  } as ChoiceQuestion,
  {
    id: '5.1-easy-3',
    nodeId: '5.1',
    difficulty: 1,
    type: 'proof',
    content: '证明：当 $x > 0$ 时，$e^x > 1 + x$。',
    answer: '证明见解答。',
    solution: '构造函数 $h(x) = e^x - x - 1$（$x > 0$）。$h\'(x) = e^x - 1 > 0$。$h(x)$ 在 $(0, +\\infty)$ 上单调递增。$h(0) = 0$，故 $x > 0$ 时 $h(x) > 0$，即 $e^x > x + 1$。',
    tags: ['构造函数', '指数不等式', '单调性'],
  },

  // ===== 难度 2：综合 =====
  {
    id: '5.1-mid-1',
    nodeId: '5.1',
    difficulty: 2,
    type: 'proof',
    content: '证明：当 $x > 0$ 时，$e^x > 1 + x + \\frac{x^2}{2}$。',
    answer: '证明见解答。',
    solution: '令 $F(x) = e^x - 1 - x - \\frac{x^2}{2}$。$F\'(x) = e^x - 1 - x$。由 $e^x > 1 + x$（$x > 0$）可知 $F\'(x) > 0$，$F(x)$ 在 $(0, +\\infty)$ 上递增。$F(0) = 0$，故 $F(x) > 0$，即 $e^x > 1 + x + \\frac{x^2}{2}$。\n\n这是"逐层构造"的典型例子：先证 $e^x > 1+x$，再将其作为引理去证更强的不等式。',
    tags: ['逐层构造', '指数不等式', '泰勒型不等式'],
  },
  {
    id: '5.1-mid-2',
    nodeId: '5.1',
    difficulty: 2,
    type: 'calculation',
    content: '已知 $f(x) = e^x - 2x - a$。若对任意 $x \\in \\mathbb{R}$，$f(x) \\ge 0$ 恒成立，求实数 $a$ 的最大值。',
    answer: '$2 - 2\\ln 2$',
    solution: '$f(x) \\ge 0 \\iff a \\le e^x - 2x$ 恒成立。\n令 $g(x) = e^x - 2x$，则需 $a \\le g_{\\min}$。\n$g\'(x) = e^x - 2$，令 $g\'(x) = 0$ 得 $x = \\ln 2$。\n$x < \\ln 2$ 时 $g\'(x) < 0$，$x > \\ln 2$ 时 $g\'(x) > 0$。\n$g_{\\min} = g(\\ln 2) = 2 - 2\\ln 2$。故 $a_{\\max} = 2 - 2\\ln 2$。',
    tags: ['构造函数', '恒成立', '最值转化'],
  },
  {
    id: '5.1-mid-3',
    nodeId: '5.1',
    difficulty: 2,
    type: 'proof',
    content: '证明：当 $x > 0$ 时，$x - \\frac{x^2}{2} < \\ln(1+x) < x$。',
    answer: '证明见解答。',
    solution: '先证右半：令 $F(x) = x - \\ln(1+x)$，$F\'(x) = 1 - \\frac{1}{1+x} = \\frac{x}{1+x} > 0$（$x > 0$）。$F(0) = 0$，故 $F(x) > 0$，即 $\\ln(1+x) < x$。\n\n再证左半：令 $G(x) = \\ln(1+x) - x + \\frac{x^2}{2}$，$G\'(x) = \\frac{1}{1+x} - 1 + x = \\frac{1 - (1+x) + x(1+x)}{1+x} = \\frac{x^2}{1+x} > 0$。$G(0) = 0$，故 $G(x) > 0$，即 $\\ln(1+x) > x - \\frac{x^2}{2}$。',
    tags: ['构造双链', '双边不等式', '对数不等式'],
  },

  // ===== 难度 3：压轴 =====
  {
    id: '5.1-hard-1',
    nodeId: '5.1',
    difficulty: 3,
    type: 'calculation',
    content: '已知函数 $f(x) = x\\ln x + (1-x)\\ln(1-x)$，$x \\in (0, 1)$。\n\n(1) 求 $f(x)$ 的最小值；\n(2) 设 $a, b > 0$，利用 (1) 的结论证明：$a\\ln a + b\\ln b \\ge (a+b)\\ln\\frac{a+b}{2}$。',
    answer: '$f_{\\min} = f(\\frac{1}{2}) = -\\ln 2$; 证明见解答。',
    solution: '(1) $f\'(x) = \\ln x + 1 - \\ln(1-x) - 1 = \\ln\\frac{x}{1-x}$。\n令 $f\'(x) = 0$ 得 $\\frac{x}{1-x} = 1$，$x = \\frac{1}{2}$。\n$x \\in (0, \\frac{1}{2})$ 时 $f\'(x) < 0$，$x \\in (\\frac{1}{2}, 1)$ 时 $f\'(x) > 0$。\n$f_{\\min} = f(\\frac{1}{2}) = \\frac{1}{2}\\ln\\frac{1}{2} + \\frac{1}{2}\\ln\\frac{1}{2} = -\\ln 2$。\n\n(2) 令 $x = \\frac{a}{a+b} \\in (0, 1)$，则 $1-x = \\frac{b}{a+b}$。\n$f(x) = \\frac{a}{a+b}\\ln\\frac{a}{a+b} + \\frac{b}{a+b}\\ln\\frac{b}{a+b}$\n$= \\frac{1}{a+b}[a(\\ln a - \\ln(a+b)) + b(\\ln b - \\ln(a+b))]$\n$= \\frac{a\\ln a + b\\ln b}{a+b} - \\ln(a+b)$。\n由 (1) 知 $f(x) \\ge -\\ln 2$，即 $\\frac{a\\ln a + b\\ln b}{a+b} - \\ln(a+b) \\ge -\\ln 2$，整理得 $a\\ln a + b\\ln b \\ge (a+b)\\ln\\frac{a+b}{2}$。',
    tags: ['同构变换', '构造函数', '证明不等式'],
  },
  {
    id: '5.1-hard-2',
    nodeId: '5.1',
    difficulty: 3,
    type: 'calculation',
    content: '已知函数 $f(x) = \\ln x + \\frac{1}{x}$。\n\n(1) 求 $f(x)$ 的单调区间和最小值；\n(2) 设 $x_1 \\neq x_2$ 且 $f(x_1) = f(x_2)$，证明：$x_1x_2 > 1$。',
    answer: '在 $(0, 1)$ 递减，$(1, +\\infty)$ 递增，$f_{\\min} = f(1) = 1$; 证明见解答。',
    solution: '(1) $f\'(x) = \\frac{1}{x} - \\frac{1}{x^2} = \\frac{x-1}{x^2}$。$x \\in (0, 1)$ 时 $f\'(x) < 0$（递减），$x > 1$ 时 $f\'(x) > 0$（递增）。$f_{\\min} = f(1) = 1$。\n\n(2) 不妨设 $x_1 < 1 < x_2$。\n令 $h(t) = f(t) - f(\\frac{1}{t})$，$t \\in (0, 1]$。\n$h(t) = (\\ln t + \\frac{1}{t}) - (\\ln\\frac{1}{t} + t) = 2\\ln t + \\frac{1}{t} - t$。\n$h\'(t) = \\frac{2}{t} - \\frac{1}{t^2} - 1 = \\frac{2t - 1 - t^2}{t^2} = -\\frac{(t-1)^2}{t^2} < 0$（$t \\neq 1$）。\n$h(1) = 0$，故当 $t \\in (0, 1)$ 时 $h(t) > 0$，即 $f(t) > f(\\frac{1}{t})$。\n由 $x_1 \\in (0, 1)$ 得 $f(x_1) > f(\\frac{1}{x_1})$。又 $f(x_1) = f(x_2)$，故 $f(x_2) > f(\\frac{1}{x_1})$。\n由 (1) 知 $f$ 在 $(1, +\\infty)$ 上递增，而 $x_2, \\frac{1}{x_1} > 1$，所以 $x_2 > \\frac{1}{x_1}$，即 $x_1x_2 > 1$。',
    tags: ['构造函数', '同构变换', '对称性'],
  },
  {
    id: '5.1-hard-3',
    nodeId: '5.1',
    difficulty: 3,
    type: 'calculation',
    content: '已知 $x, y$ 为正实数，且满足 $x^y = y^x$（$x \\neq y$）。\n\n(1) 设 $f(t) = \\frac{\\ln t}{t}$（$t > 0$），讨论 $f(t)$ 的单调性；\n(2) 利用 (1) 证明：$x, y$ 中必有一个小于 $e$，另一个大于 $e$。',
    answer: '见解答。',
    solution: '(1) $f\'(t) = \\frac{1 - \\ln t}{t^2}$。$t \\in (0, e)$ 时 $f\'(t) > 0$（递增），$t \\in (e, +\\infty)$ 时 $f\'(t) < 0$（递减）。$f_{\\max} = f(e) = \\frac{1}{e}$。\n\n(2) 由 $x^y = y^x$，取对数得 $y\\ln x = x\\ln y$。由 $x \\neq y$，可设 $\\frac{\\ln x}{x} = \\frac{\\ln y}{y}$，即 $f(x) = f(y)$。\n设 $x < y$。若 $x \\ge e$，则 $x, y \\in [e, +\\infty)$，$f$ 在此区间递减，$f(x) > f(y)$，与 $f(x) = f(y)$ 矛盾。\n若 $y \\le e$，则 $x, y \\in (0, e]$，$f$ 在此区间递增，$f(x) < f(y)$，与 $f(x) = f(y)$ 矛盾。\n故必有 $x < e < y$。',
    tags: ['同构变换', '构造函数', '单调性应用'],
  },
];

export default questions5_1;
