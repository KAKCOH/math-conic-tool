import type { Question, ChoiceQuestion } from '../../types';

const questions4_4: (Question | ChoiceQuestion)[] = [
  // ===== 难度 1：基础巩固 =====
  {
    id: '4.4-easy-1',
    nodeId: '4.4',
    difficulty: 1,
    type: 'fill',
    content: '函数 $f(x) = x^3 - 3x$ 的极大值为 $\\underline{\\qquad}$，极小值为 $\\underline{\\qquad}$。',
    answer: '$2$, $-2$',
    solution: '$f\'(x) = 3x^2 - 3 = 3(x-1)(x+1)$。$x < -1$ 时 $f\'(x) > 0$，$-1 < x < 1$ 时 $f\'(x) < 0$，$x > 1$ 时 $f\'(x) > 0$。极大值 $f(-1) = 2$，极小值 $f(1) = -2$。',
    tags: ['极值', '多项式', '基础题'],
  },
  {
    id: '4.4-easy-2',
    nodeId: '4.4',
    difficulty: 1,
    type: 'choice',
    content: '关于函数的极值，下列说法正确的是：',
    options: [
      '极大值一定大于极小值',
      '可导函数的极值点处导数必为零',
      '导数为零的点一定是极值点',
      '极大值就是最大值',
    ],
    answer: 'B',
    solution: 'B 正确——可导函数在极值点处满足 $f\'(x_0) = 0$（费马引理）。A 错：局部极大值可能小于另一处的局部极小值。C 错：$f(x) = x^3$ 在 $x = 0$ 处 $f\'(0) = 0$ 但不是极值点。D 错：极大值是局部概念，最大值是全局概念。',
    tags: ['极值概念', '驻点', '费马引理'],
  } as ChoiceQuestion,
  {
    id: '4.4-easy-3',
    nodeId: '4.4',
    difficulty: 1,
    type: 'fill',
    content: '函数 $f(x) = x + \\frac{4}{x}$（$x > 0$）的最小值为 $\\underline{\\qquad}$。',
    answer: '$4$',
    solution: '$f\'(x) = 1 - \\frac{4}{x^2} = \\frac{x^2 - 4}{x^2}$。令 $f\'(x) = 0$ 得 $x = 2$。$x \\in (0, 2)$ 时 $f\'(x) < 0$，$x \\in (2, +\\infty)$ 时 $f\'(x) > 0$。$f_{\\min} = f(2) = 4$。',
    tags: ['最值', '分式函数', '基础题'],
  },

  // ===== 难度 2：综合 =====
  {
    id: '4.4-mid-1',
    nodeId: '4.4',
    difficulty: 2,
    type: 'calculation',
    content: '已知函数 $f(x) = x^3 + ax^2 + bx + 1$ 在 $x = 1$ 处取得极大值，在 $x = 3$ 处取得极小值。\n\n(1) 求 $a, b$ 的值；\n(2) 求 $f(x)$ 的极大值与极小值。',
    answer: '$a = -6, b = 9$; 极大值 $f(1) = 5$，极小值 $f(3) = 1$',
    solution: '(1) $f\'(x) = 3x^2 + 2ax + b$。由条件 $f\'(1) = 0, f\'(3) = 0$：\n$\\begin{cases} 3 + 2a + b = 0 \\\\ 27 + 6a + b = 0 \\end{cases}$\n两式相减：$24 + 4a = 0 \\Rightarrow a = -6$，代入得 $b = 9$。\n\n(2) $f\'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3)$。\n$x < 1$: $f\'(x) > 0$（递增）；$1 < x < 3$: $f\'(x) < 0$（递减）；$x > 3$: $f\'(x) > 0$（递增）。\n故 $x = 1$ 为极大值点，$f(1) = 5$；$x = 3$ 为极小值点，$f(3) = 1$。',
    tags: ['极值条件', '待定系数', '参数求解'],
  },
  {
    id: '4.4-mid-2',
    nodeId: '4.4',
    difficulty: 2,
    type: 'calculation',
    content: '求函数 $f(x) = \\frac{1}{3}x^3 - x^2 - 3x + 2$ 在区间 $[-2, 4]$ 上的最大值和最小值。',
    answer: '最大值为 $\\frac{11}{3}$，最小值为 $-7$',
    solution: '$f\'(x) = x^2 - 2x - 3 = (x-3)(x+1)$。驻点 $x = -1, 3$。\n计算四个关键点：\n$f(-2) = -\\frac{8}{3} - 4 + 6 + 2 = -\\frac{8}{3} + 4 = \\frac{4}{3}$；\n$f(-1) = -\\frac{1}{3} - 1 + 3 + 2 = \\frac{11}{3}$；\n$f(3) = 9 - 9 - 9 + 2 = -7$；\n$f(4) = \\frac{64}{3} - 16 - 12 + 2 = \\frac{64}{3} - 26 = -\\frac{14}{3}$。\n比较得：最大值 $\\frac{11}{3}$（$x = -1$），最小值 $-7$（$x = 3$）。',
    tags: ['闭区间最值', '驻点', '端点比较'],
  },
  {
    id: '4.4-mid-3',
    nodeId: '4.4',
    difficulty: 2,
    type: 'calculation',
    content: '已知函数 $f(x) = x\\ln x$。\n\n(1) 求 $f(x)$ 的极值点与极值；\n(2) 若 $f(x) \\ge ax - 1$ 对任意 $x > 0$ 恒成立，求实数 $a$ 的最大值。',
    answer: '极小值点 $x = \\frac{1}{e}$，极小值 $-\\frac{1}{e}$; $a_{\\max} = 1$',
    solution: '(1) $f\'(x) = \\ln x + 1$。令 $f\'(x) = 0$ 得 $x = \\frac{1}{e}$。\n$x \\in (0, \\frac{1}{e})$: $f\'(x) < 0$（递减）；$x \\in (\\frac{1}{e}, +\\infty)$: $f\'(x) > 0$（递增）。\n极小值 $f(\\frac{1}{e}) = -\\frac{1}{e}$。\n\n(2) $x\\ln x \\ge ax - 1 \\iff x\\ln x - ax + 1 \\ge 0$。\n令 $g(x) = x\\ln x - ax + 1$，$g\'(x) = \\ln x + 1 - a$。\n令 $g\'(x) = 0$ 得 $x = e^{a-1}$。\n当 $x < e^{a-1}$ 时 $g\'(x) < 0$；当 $x > e^{a-1}$ 时 $g\'(x) > 0$。\n$g_{\\min} = g(e^{a-1}) = e^{a-1}(a-1) - a e^{a-1} + 1 = -e^{a-1} + 1$。\n需 $g_{\\min} \\ge 0$，即 $e^{a-1} \\le 1 \\Rightarrow a - 1 \\le 0 \\Rightarrow a \\le 1$。$a_{\\max} = 1$。',
    tags: ['极值', '恒成立', '参数最值'],
  },

  // ===== 难度 3：压轴 =====
  {
    id: '4.4-hard-1',
    nodeId: '4.4',
    difficulty: 3,
    type: 'calculation',
    content: '已知函数 $f(x) = x^3 + ax^2 + x + 1$，$a \\in \\mathbb{R}$。\n\n(1) 若 $f(x)$ 在 $\\mathbb{R}$ 上无极值，求 $a$ 的取值范围；\n(2) 若 $f(x)$ 在 $x = -\\frac{1}{3}$ 处取得极值，求 $a$ 的值并求出所有极值。',
    answer: '$[-\\sqrt{3}, \\sqrt{3}]$; $a = 2$，极大值 $f(-1) = 1$，极小值 $f(-\\frac{1}{3}) = \\frac{23}{27}$',
    solution: '(1) $f\'(x) = 3x^2 + 2ax + 1$。$f(x)$ 无极值 $\\iff f\'(x)$ 不变号，即判别式 $\\Delta \\le 0$。\n$\\Delta = 4a^2 - 12 \\le 0 \\Rightarrow a^2 \\le 3 \\Rightarrow a \\in [-\\sqrt{3}, \\sqrt{3}]$。\n\n(2) $f\'(-\\frac{1}{3}) = 3 \\cdot \\frac{1}{9} + 2a(-\\frac{1}{3}) + 1 = \\frac{1}{3} - \\frac{2a}{3} + 1 = \\frac{4}{3} - \\frac{2a}{3} = 0$，得 $a = 2$。\n此时 $f\'(x) = 3x^2 + 4x + 1 = (3x+1)(x+1)$。\n驻点 $x = -1$ 和 $x = -\\frac{1}{3}$。\n$f\'\'(x) = 6x + 4$，$f\'\'(-1) = -2 < 0$（极大），$f\'\'(-\\frac{1}{3}) = 2 > 0$（极小）。\n极大值 $f(-1) = -1 + 2 - 1 + 1 = 1$。\n极小值 $f(-\\frac{1}{3}) = -\\frac{1}{27} + \\frac{2}{9} - \\frac{1}{3} + 1 = \\frac{-1+6-9+27}{27} = \\frac{23}{27}$。',
    tags: ['极值条件', '判别式', '参数讨论'],
  },
  {
    id: '4.4-hard-2',
    nodeId: '4.4',
    difficulty: 3,
    type: 'calculation',
    content: '已知函数 $f(x) = (x - k)e^x$。\n\n(1) 求 $f(x)$ 的单调区间和极值；\n(2) 若 $k \\le 0$，求 $f(x)$ 在区间 $[0, 1]$ 上的最大值。',
    answer: '减区间 $(-\\infty, k-1)$，增区间 $(k-1, +\\infty)$，极小值 $f(k-1) = -e^{k-1}$; $f_{\\max} = (1-k)e$',
    solution: '(1) $f\'(x) = e^x + (x - k)e^x = (x - k + 1)e^x$。\n令 $f\'(x) = 0$ 得 $x = k - 1$。\n$x < k-1$ 时 $f\'(x) < 0$（递减）；$x > k-1$ 时 $f\'(x) > 0$（递增）。\n极小值 $f(k-1) = -e^{k-1}$，无极大值。\n\n(2) $k \\le 0$ 时 $k-1 \\le -1 < 0$。在 $[0, 1]$ 上有 $x > k-1$，$f\'(x) > 0$，$f(x)$ 单调递增。\n$f_{\\max} = f(1) = (1 - k)e$。',
    tags: ['极值', '含参讨论', '闭区间最值'],
    source: '2012·新课标全国卷·文T21改编',
  },
  {
    id: '4.4-hard-3',
    nodeId: '4.4',
    difficulty: 3,
    type: 'calculation',
    content: '已知函数 $f(x) = \\frac{\\ln x}{x}$。\n\n(1) 求 $f(x)$ 的单调区间和最大值；\n(2) 比较 $e^{\\pi}$ 与 $\\pi^{e}$ 的大小，并证明你的结论。',
    answer: '增区间 $(0, e)$，减区间 $(e, +\\infty)$，$f_{\\max} = f(e) = \\frac{1}{e}$; $e^{\\pi} > \\pi^{e}$',
    solution: '(1) $f\'(x) = \\frac{1 - \\ln x}{x^2}$。$x \\in (0, e)$: $f\'(x) > 0$（增）；$x \\in (e, +\\infty)$: $f\'(x) < 0$（减）。\n最大值 $f(e) = \\frac{1}{e}$。\n\n(2) $e^{\\pi}$ 与 $\\pi^{e}$ 均为正数，取对数后比较 $\\pi$ 与 $e\\ln\\pi$，即比较 $\\frac{\\pi}{e}$ 与 $\\ln\\pi$。\n$\\ln\\pi = \\frac{\\ln\\pi}{\\pi} \\cdot \\pi = f(\\pi) \\cdot \\pi$。由 (1)，$\\pi > e$ 故 $f(\\pi) < f(e) = \\frac{1}{e}$，即 $\\frac{\\ln\\pi}{\\pi} < \\frac{1}{e}$。\n$\\ln\\pi < \\frac{\\pi}{e} \\Rightarrow e\\ln\\pi < \\pi \\Rightarrow \\ln(\\pi^{e}) < \\ln(e^{\\pi})$。\n由对数函数单调递增，得 $\\pi^{e} < e^{\\pi}$。',
    tags: ['极值', '单调性应用', '数值比较', '对数'],
  },
];

export default questions4_4;
