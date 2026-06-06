import type { Question, ChoiceQuestion } from '../../types';

const questions6_4: (Question | ChoiceQuestion)[] = [
  // ===== 难度 1：基础巩固 =====
  {
    id: '6.4-easy-1',
    nodeId: '6.4',
    difficulty: 1,
    type: 'fill',
    content: '函数 $f(x) = x^3 - 3x$ 的零点个数为 $\\underline{\\qquad}$。',
    answer: '$3$',
    solution: '$f(x) = x(x^2 - 3) = x(x - \\sqrt{3})(x + \\sqrt{3}) = 0$，得 $x = 0, \\pm\\sqrt{3}$，三个零点。',
    tags: ['零点', '多项式', '基础题'],
  },
  {
    id: '6.4-easy-2',
    nodeId: '6.4',
    difficulty: 1,
    type: 'choice',
    content: '关于函数零点与导数的关系，下列说法正确的是：',
    options: [
      '若 $f\'(x) > 0$，则 $f(x)$ 一定有零点',
      '若 $f(a)f(b) < 0$，则 $f(x)$ 在 $(a, b)$ 内必有零点（$f$ 连续）',
      '$f\'(x_0) = 0$ 是 $x_0$ 为零点的必要条件',
      '单调函数至多有一个零点',
    ],
    answer: 'D',
    solution: 'D 正确——严格单调函数至多有一个零点。A 错：$f(x) = e^x$ 递增但无零点。B 错：零点存在定理还需 $f$ 在 $[a, b]$ 上连续（题目条件中未明确）。C 错：$f\'(x_0) = 0$ 是极值点的必要条件，与零点无关。',
    tags: ['零点概念', '零点存在定理', '单调性'],
  } as ChoiceQuestion,
  {
    id: '6.4-easy-3',
    nodeId: '6.4',
    difficulty: 1,
    type: 'fill',
    content: '函数 $f(x) = e^x - 2$ 的零点为 $x = \\underline{\\qquad}$。',
    answer: '$\\ln 2$',
    solution: '$e^x - 2 = 0 \\Rightarrow e^x = 2 \\Rightarrow x = \\ln 2$。$f\'(x) = e^x > 0$，函数单调，零点唯一。',
    tags: ['零点', '指数函数', '基础题'],
  },

  // ===== 难度 2：综合 =====
  {
    id: '6.4-mid-1',
    nodeId: '6.4',
    difficulty: 2,
    type: 'calculation',
    content: '已知函数 $f(x) = x^3 - 3x - a$。讨论 $f(x)$ 的零点个数与 $a$ 的关系。',
    answer: '当 $|a| > 2$ 时 1 个零点；当 $|a| = 2$ 时 2 个零点；当 $|a| < 2$ 时 3 个零点。',
    solution: '$f\'(x) = 3x^2 - 3 = 3(x-1)(x+1)$。极大值 $f(-1) = 2 - a$，极小值 $f(1) = -2 - a$。\n$|a| > 2$：$f(-1)$ 与 $f(1)$ 同号，1 零点。\n$|a| = 2$：一个极值为 $0$（等号），2 零点（一重根 + 一单根）。\n$|a| < 2$：$f(-1) > 0 > f(1)$，3 零点。',
    tags: ['零点个数', '参数讨论', '极值符号'],
  },
  {
    id: '6.4-mid-2',
    nodeId: '6.4',
    difficulty: 2,
    type: 'calculation',
    content: '已知函数 $f(x) = \\ln x - ax$（$a > 0$）。\n\n(1) 求 $f(x)$ 的极值；\n(2) 讨论 $f(x)$ 的零点个数。',
    answer: '极大值 $f(\\frac{1}{a}) = -\\ln a - 1$; 当 $a < \\frac{1}{e}$ 时 2 零点，$a = \\frac{1}{e}$ 时 1 零点，$a > \\frac{1}{e}$ 时 0 零点。',
    solution: '(1) $f\'(x) = \\frac{1}{x} - a$，唯一驻点 $x = \\frac{1}{a}$。极大值 $f(\\frac{1}{a}) = \\ln\\frac{1}{a} - 1 = -\\ln a - 1$。\n\n(2) $a = \\frac{1}{e}$ 时 $f_{\\max} = 0$，1 零点（$x = e$）。$a < \\frac{1}{e}$ 时 $f_{\\max} > 0$，$\\lim_{x \\to 0^+} f(x) = -\\infty$，$\\lim_{x \\to +\\infty} f(x) = -\\infty$，2 零点。$a > \\frac{1}{e}$ 时 $f_{\\max} < 0$，0 零点。',
    tags: ['零点个数', '参数讨论', '极值判断'],
  },
  {
    id: '6.4-mid-3',
    nodeId: '6.4',
    difficulty: 2,
    type: 'calculation',
    content: '证明方程 $e^x = 3 - x$ 有且仅有一个实根，并判断它所在的区间。',
    answer: '唯一实根 $x_0 \\in (0, 1)$。',
    solution: '令 $f(x) = e^x + x - 3$。$f\'(x) = e^x + 1 > 0$，$f$ 严格递增，至多一个零点。$f(0) = -2 < 0$，$f(1) = e - 2 > 0$（$e \\approx 2.718$）。由介值定理和单调性，存在唯一 $x_0 \\in (0, 1)$ 使 $f(x_0) = 0$。',
    tags: ['零点存在性', '单调性', '介值定理'],
  },

  // ===== 难度 3：压轴 =====
  {
    id: '6.4-hard-1',
    nodeId: '6.4',
    difficulty: 3,
    type: 'calculation',
    content: '已知函数 $f(x) = e^x - ax$（$a > 0$）。\n\n(1) 若 $f(x)$ 有两个零点，求 $a$ 的取值范围；\n(2) 在 (1) 的条件下，设两个零点为 $x_1 < x_2$，证明：$x_1 + x_2 > 2$。',
    answer: '$a > e$; 证明见解答。',
    solution: '(1) $f\'(x) = e^x - a$，驻点 $x = \\ln a$。$f_{\\min} = f(\\ln a) = a - a\\ln a$。有两个零点需 $f_{\\min} < 0$ 且 $\\lim_{x \\to \\pm\\infty} f(x) = +\\infty$。$a - a\\ln a < 0 \\Rightarrow 1 - \\ln a < 0 \\Rightarrow a > e$。\n\n(2) 由 $f(x_1) = f(x_2) = 0$ 得 $e^{x_1} = ax_1$，$e^{x_2} = ax_2$。相除：$e^{x_2 - x_1} = \\frac{x_2}{x_1}$。令 $t = x_2 - x_1 > 0$，则 $e^t = 1 + \\frac{t}{x_1}$，$x_1 = \\frac{t}{e^t - 1}$，$x_2 = \\frac{te^t}{e^t - 1}$。\n$x_1 + x_2 = \\frac{t(1+e^t)}{e^t - 1}$。要证 $x_1 + x_2 > 2$，即 $t(1+e^t) > 2(e^t - 1)$。令 $h(t) = t(1+e^t) - 2(e^t - 1)$（$t > 0$）。$h\'(t) = 1 + (t-1)e^t$，$h\'\'(t) = te^t > 0$。$h\'(0) = 0$，$h\'$ 递增，$h\'(t) > 0$，$h$ 递增。$h(0) = 0$，故 $h(t) > 0$。得证。',
    tags: ['双零点', '参数范围', '零点偏移'],
    source: '2013·新课标Ⅰ卷·理T21改编',
  },
  {
    id: '6.4-hard-2',
    nodeId: '6.4',
    difficulty: 3,
    type: 'calculation',
    content: '已知函数 $f(x) = x\\ln x - a(x - 1)$。\n\n(1) 若 $f(x) \\ge 0$ 恒成立，求 $a$ 的值；\n(2) 在 (1) 的条件下，讨论 $g(x) = f(x) - m$（$m > 0$）的零点个数。',
    answer: '$a = 1$; 当 $0 < m < 1$ 时 2 零点，$m = 1$ 时 1 零点，$m > 1$ 时 1 零点。',
    solution: '(1) $f\'(x) = \\ln x + 1 - a$。$f(1) = 0$。$f(x) \\ge 0$ 恒成立且 $f(1) = 0$ $\\Rightarrow$ $f\'(1) = 0$（必要性），得 $a = 1$。验证：$a=1$ 时 $f(x) = x\\ln x - x + 1$，$f\'(x) = \\ln x$。$x \\in (0, 1)$: 递减，$x > 1$: 递增。$f_{\\min} = f(1) = 0$，充分性成立。\n\n(2) $a=1$ 时 $f(x) = x\\ln x - x + 1$。$\\lim_{x \\to 0^+} f(x) = 1$，$f(1) = 0$（最小值），$\\lim_{x \\to +\\infty} f(x) = +\\infty$。$f$ 在 $(0, 1)$ 从 $1$ 递减到 $0$，在 $(1, +\\infty)$ 从 $0$ 递增到 $+\\infty$。$g(x) = f(x) - m$ 的零点数 = $f(x) = m$ 的解数：$0 < m < 1$: 2 零点；$m = 1$: 1 零点（$(1, +\\infty)$ 上唯一解）；$m > 1$: 1 零点（仅在 $(1, +\\infty)$）。',


    tags: ['零点个数', '参数讨论', '恒成立'],
    source: '2019·全国Ⅰ卷·文T20改编',
  },
  {
    id: '6.4-hard-3',
    nodeId: '6.4',
    difficulty: 3,
    type: 'calculation',
    content: '已知函数 $f(x) = \\frac{e^x}{x}$（$x \\neq 0$）。讨论方程 $f(x) = k$ 的实根个数。',
    answer: '$k < 0$: 1 个；$0 \\le k < e$: 0 个；$k = e$: 1 个；$k > e$: 2 个。',
    solution: '$f\'(x) = \\frac{e^x(x-1)}{x^2}$。\n$x < 0$: $f\'(x) < 0$，$f$ 从 $0$（$x \\to -\\infty$）递减至 $-\\infty$（$x \\to 0^-$），值域 $(-\\infty, 0)$。\n$0 < x < 1$: $f\'(x) < 0$，$f$ 从 $+\\infty$（$x \\to 0^+$）递减至 $e$（$x = 1$）。\n$x > 1$: $f\'(x) > 0$，$f$ 从 $e$ 递增至 $+\\infty$。\n$f(x)$ 在 $(0, +\\infty)$ 上最小值为 $f(1) = e$。\n\n$f(x) = k$ 的实根个数：\n$k < 0$: 1 根（$x < 0$，$f$ 递减且值域覆盖 $(-\\infty, 0)$）。\n$0 \\le k < e$: 0 根（$x < 0$ 时 $f(x) < 0$；$x > 0$ 时 $f(x) \\ge e > k$）。\n$k = e$: 1 根（$x = 1$）。\n$k > e$: 2 根（$x < 0$ 无解；$(0, 1)$ 上 $f$ 从 $+\\infty$ 递减过 $k$，$(1, +\\infty)$ 上 $f$ 从 $e$ 递增过 $k$）。',
    tags: ['零点个数', '完整讨论', '指数函数'],
  },
];

export default questions6_4;
