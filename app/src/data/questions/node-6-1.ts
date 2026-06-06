import type { Question, ChoiceQuestion } from '../../types';

const questions6_1: (Question | ChoiceQuestion)[] = [
  // ===== 难度 1：基础巩固 =====
  {
    id: '6.1-easy-1',
    nodeId: '6.1',
    difficulty: 1,
    type: 'fill',
    content: '若不等式 $x^2 - ax + 1 \\ge 0$ 对任意 $x \\in \\mathbb{R}$ 恒成立，则 $a$ 的取值范围是 $\\underline{\\qquad}$。',
    answer: '$[-2, 2]$',
    solution: '二次函数 $x^2 - ax + 1$ 开口向上，$\\Delta \\le 0$ 时恒非负。$\\Delta = a^2 - 4 \\le 0 \\Rightarrow a \\in [-2, 2]$。',
    tags: ['恒成立', '判别式', '基础题'],
  },
  {
    id: '6.1-easy-2',
    nodeId: '6.1',
    difficulty: 1,
    type: 'choice',
    content: '关于"恒成立"与"存在性"问题，下列转化正确的是：',
    options: [
      '$f(x) \\ge a$ 恒成立 $\\iff a \\le f(x)_{\\max}$',
      '$f(x) \\ge a$ 恒成立 $\\iff a \\le f(x)_{\\min}$',
      '$\\exists x: f(x) \\ge a$（有解）$\\iff a \\le f(x)_{\\min}$',
      '以上都不对',
    ],
    answer: 'B',
    solution: 'B 正确。$\\forall x: f(x) \\ge a$（恒成立）$\\iff a \\le \\min f(x)$。$\\exists x: f(x) \\ge a$（存在/有解）$\\iff a \\le \\max f(x)$。',
    tags: ['恒成立', '存在性', '逻辑辨析'],
  } as ChoiceQuestion,
  {
    id: '6.1-easy-3',
    nodeId: '6.1',
    difficulty: 1,
    type: 'fill',
    content: '若存在 $x \\in [1, 2]$ 使得 $x^2 - ax + 1 \\le 0$，则 $a$ 的最小值为 $\\underline{\\qquad}$。',
    answer: '$2$',
    solution: '存在 $x \\in [1, 2]$ 使 $a \\ge x + \\frac{1}{x}$。令 $g(x) = x + \\frac{1}{x}$（$x \\in [1, 2]$）。$g\'(x) = 1 - \\frac{1}{x^2} \\ge 0$，$g$ 递增，$g_{\\min} = g(1) = 2$。存在性 $\\iff a \\ge g_{\\min} = 2$，$a_{\\min} = 2$。',
    tags: ['存在性问题', '分离参数', '最值'],
  },

  // ===== 难度 2：综合 =====
  {
    id: '6.1-mid-1',
    nodeId: '6.1',
    difficulty: 2,
    type: 'calculation',
    content: '已知函数 $f(x) = x\\ln x - ax + 1$（$x > 0$）。\n\n(1) 若 $f(x) \\ge 0$ 恒成立，求 $a$ 的取值范围；\n(2) 若存在 $x_0 > 0$ 使得 $f(x_0) < 0$，求 $a$ 的取值范围。',
    answer: '$a \\le 1$; $a > 1$',
    solution: '(1) $f(x) \\ge 0 \\iff a \\le \\ln x + \\frac{1}{x}$。令 $g(x) = \\ln x + \\frac{1}{x}$，$g\'(x) = \\frac{1}{x} - \\frac{1}{x^2} = \\frac{x-1}{x^2}$。$x \\in (0, 1)$: $g\'(x) < 0$；$x \\in (1, +\\infty)$: $g\'(x) > 0$。$g_{\\min} = g(1) = 1$。恒成立 $\\iff a \\le g_{\\min} = 1$。\n\n(2) (1) 的否定：$a > 1$。',
    tags: ['恒成立', '存在性', '分离参数'],
  },
  {
    id: '6.1-mid-2',
    nodeId: '6.1',
    difficulty: 2,
    type: 'calculation',
    content: '已知函数 $f(x) = e^x - ax$。\n\n(1) 若 $f(x) > 0$ 对任意 $x \\in \\mathbb{R}$ 恒成立，求 $a$ 的取值范围；\n(2) 若存在 $x_0 \\in \\mathbb{R}$ 使得 $f(x_0) < 0$，求 $a$ 的取值范围。',
    answer: '$a \\in [0, e)$; $a \\in (-\\infty, 0) \\cup (e, +\\infty)$',
    solution: '(1) $f\'(x) = e^x - a$。$a \\le 0$ 时 $f\'(x) > 0$，$f$ 递增，$\\lim_{x \\to -\\infty} f(x) = -\\infty$（$-ax \\to -\\infty$），不成立。$a > 0$ 时 $f_{\\min} = f(\\ln a) = a - a\\ln a$。需 $a - a\\ln a > 0 \\Rightarrow \\ln a < 1 \\Rightarrow a < e$。结合 $a > 0$ 得 $0 < a < e$。$a = 0$ 时 $f(x) = e^x > 0$，满足。故 $a \\in [0, e)$。\n\n(2) (1) 的补集：$a < 0$ 或 $a \\ge e$？（$a = e$ 时 $f_{\\min} = 0$，$f(x)$ 不满足 $< 0$）故 $a \\in (-\\infty, 0) \\cup (e, +\\infty)$。',
    tags: ['恒成立', '存在性', '补集法'],
  },
  {
    id: '6.1-mid-3',
    nodeId: '6.1',
    difficulty: 2,
    type: 'calculation',
    content: '已知 $f(x) = x^2 - 2x + a\\ln x$。\n\n(1) 若 $f(x)$ 在 $[1, +\\infty)$ 上单调递增，求 $a$ 的取值范围；\n(2) 若存在 $x_0 \\in [1, 2]$ 使得 $f(x_0) > 3$，求 $a$ 的取值范围。',
    answer: '$a \\ge 0$; $a > \\frac{3}{\\ln 2}$',
    solution: '(1) $f\'(x) = 2x - 2 + \\frac{a}{x} \\ge 0$ 对 $x \\ge 1$ 恒成立。即 $a \\ge 2x - 2x^2 = 2x(1-x)$。当 $x \\ge 1$ 时 $2x(1-x) \\le 0$，最大值为 $0$（$x = 1$）。故 $a \\ge 0$。\n\n(2) 由 (1)，$a \\ge 0$ 时 $f$ 在 $[1, 2]$ 上递增，最大值为 $f(2) = a\\ln 2$。需 $a\\ln 2 > 3$，即 $a > \\frac{3}{\\ln 2}$。$a < 0$ 时 $f(2) = a\\ln 2 < 0 < 3$，不存在。综上 $a > \\frac{3}{\\ln 2}$。',
    tags: ['恒成立', '存在性', '参数讨论'],
  },

  // ===== 难度 3：压轴 =====
  {
    id: '6.1-hard-1',
    nodeId: '6.1',
    difficulty: 3,
    type: 'calculation',
    content: '已知函数 $f(x) = (x+1)\\ln x - ax + a$。\n\n(1) 当 $a = 2$ 时，求 $f(x)$ 的单调区间；\n(2) 若 $f(x) \\ge 0$ 对任意 $x \\ge 1$ 恒成立，求 $a$ 的取值范围。',
    answer: '$f(x)$ 在 $(0, +\\infty)$ 上单调递增; $a \\le 2$',
    solution: '(1) $a=2$ 时 $f(x) = (x+1)\\ln x - 2x + 2$。$f\'(x) = \\ln x + \\frac{x+1}{x} - 2 = \\ln x + \\frac{1}{x} - 1$。令 $g(x) = \\ln x + \\frac{1}{x} - 1$，$g\'(x) = \\frac{x-1}{x^2}$。$g(1) = 0$ 且为最小值，故 $f\'(x) \\ge 0$，$f$ 在 $(0, +\\infty)$ 上递增。\n\n(2) $f(1) = 2\\ln 1 - a + a = 0$。$f(x) \\ge 0$ 恒成立且 $f(1)=0$ $\\Rightarrow$ $x=1$ 为极小值点（端点 $x \\ge 1$ 的条件）。$f\'(1) = \\ln 1 + \\frac{1}{1} - a = 1 - a \\ge 0 \\Rightarrow a \\le 1$？\n重新计算：$f\'(x) = \\ln x + \\frac{x+1}{x} - a = \\ln x + 1 + \\frac{1}{x} - a$。$f\'(1) = 0 + 1 + 1 - a = 2 - a$。由必要性 $f\'(1) \\ge 0 \\Rightarrow a \\le 2$。\n当 $a \\le 2$ 时，$f\'(x) \\ge \\ln x + 1 + \\frac{1}{x} - 2 = g(x)$（同(1)），$g(x) \\ge 0$，故 $f\'(x) \\ge 0$，$f$ 在 $[1, +\\infty)$ 递增。$f(x) \\ge f(1) = 0$。充分性成立。',
	    tags: ['恒成立', '端点效应', '含参讨论'],
    source: '2021·全国乙卷·文T21改编',
  },
  {
    id: '6.1-hard-2',
    nodeId: '6.1',
    difficulty: 3,
    type: 'calculation',
    content: '已知函数 $f(x) = e^x - 1 - x - ax^2$。\n\n(1) 当 $a = 0$ 时，证明 $f(x) \\ge 0$（$x \\ge 0$）；\n(2) 若 $f(x) \\ge 0$ 对 $x \\ge 0$ 恒成立，求 $a$ 的取值范围。',
    answer: '证明见解答; $a \\le \\frac{1}{2}$',
    solution: '(1) $a=0$ 时 $f(x) = e^x - 1 - x$。$f\'(x) = e^x - 1 \\ge 0$（$x \\ge 0$），$f$ 递增，$f(x) \\ge f(0) = 0$。\n\n(2) $f(0) = 0$。$f\'(x) = e^x - 1 - 2ax$，$f\'(0) = 0$。$f\'\'(x) = e^x - 2a$。由 $f(x) \\ge 0$ 恒成立得 $f\'\'(0) \\ge 0$（必要性）：$1 - 2a \\ge 0 \\Rightarrow a \\le \\frac{1}{2}$。\n当 $a \\le \\frac{1}{2}$ 时，$f(x) = e^x - 1 - x - ax^2 \\ge e^x - 1 - x - \\frac{1}{2}x^2$。令 $h(x) = e^x - 1 - x - \\frac{1}{2}x^2$。$h\'(x) = e^x - 1 - x$。由 (1) 知 $h\'(x) \\ge 0$（$x \\ge 0$），$h$ 递增，$h(x) \\ge h(0) = 0$。故 $f(x) \\ge h(x) \\ge 0$。',
    tags: ['恒成立', '端点效应', '高阶导数'],
  },
  {
    id: '6.1-hard-3',
    nodeId: '6.1',
    difficulty: 3,
    type: 'calculation',
    content: '已知函数 $f(x) = a\\ln x + \\frac{1}{x}$。\n\n(1) 当 $a = -1$ 时，讨论 $f(x)$ 的单调性；\n(2) 若 $f(x) \\le 0$ 对任意 $x > 0$ 恒成立，求 $a$ 的取值范围。',
    answer: '$f(x)$ 在 $(0, +\\infty)$ 上单调递减; $a \\ge e$',
    solution: '(1) $a=-1$ 时 $f(x) = -\\ln x + \\frac{1}{x}$。$f\'(x) = -\\frac{1}{x} - \\frac{1}{x^2} < 0$，$f$ 在 $(0, +\\infty)$ 上严格递减。\n\n(2) $f\'(x) = \\frac{a}{x} - \\frac{1}{x^2} = \\frac{ax - 1}{x^2}$。\n若 $a \\le 0$：$f\'(x) < 0$，$f$ 递减，$\\lim_{x \\to 0^+} f(x) = +\\infty$，不可能恒 $\\le 0$。\n若 $a > 0$：$x \\in (0, \\frac{1}{a})$ 时 $f\'(x) < 0$，$x \\in (\\frac{1}{a}, +\\infty)$ 时 $f\'(x) > 0$。$f_{\\min} = f(\\frac{1}{a}) = a\\ln\\frac{1}{a} + a = a(1 - \\ln a)$。\n$f(x) \\le 0$ 恒成立 $\\iff f_{\\min} \\le 0 \\iff 1 - \\ln a \\le 0 \\iff a \\ge e$。',
    tags: ['恒成立', '含参讨论', '最值转化'],
    source: '2014·全国大纲卷·理T21改编',
  },

  // ===== 难度 2：任意/存在混合量词 =====
  {
    id: '6.1-mid-4',
    nodeId: '6.1',
    difficulty: 2,
    type: 'calculation',
    content: '已知函数 $f(x) = x + \\frac{1}{x}$（$x \\in [1, 2]$），$g(x) = 2x + a$（$x \\in [-1, 1]$）。若对任意 $x_1 \\in [1, 2]$，总存在 $x_2 \\in [-1, 1]$ 使得 $f(x_1) = g(x_2)$，求实数 $a$ 的取值范围。',
    answer: '$a \\in [\\frac{1}{2}, 4]$',
    solution: '条件"$\\forall x_1 \\in [1,2], \\exists x_2 \\in [-1,1]: f(x_1) = g(x_2)$"等价于：对任意 $x_1$，$f(x_1)$ 都在 $g$ 的值域中，即 $R_f \\subseteq R_g$。\n\n先求 $R_f$：$f(x) = x + \\frac{1}{x}$，$f\'(x) = 1 - \\frac{1}{x^2} \\ge 0$（$x \\in [1, 2]$），$f$ 单调递增。$f_{\\min} = f(1) = 2$，$f_{\\max} = f(2) = \\frac{5}{2}$，故 $R_f = [2, \\frac{5}{2}]$。\n\n再求 $R_g$：$g(x) = 2x + a$ 在 $[-1, 1]$ 上单调递增，$R_g = [a - 2, a + 2]$。\n\n由 $R_f \\subseteq R_g$ 得 $\\begin{cases} a - 2 \\le 2 \\\\ a + 2 \\ge \\frac{5}{2} \\end{cases}$，解得 $\\begin{cases} a \\le 4 \\\\ a \\ge \\frac{1}{2} \\end{cases}$。\n故 $a \\in [\\frac{1}{2}, 4]$。',
    tags: ['任意存在混合', '值域包含', '量词转化'],
    source: '自主命题',
  },

  // ===== 难度 3：任意/存在混合量词（复杂） =====
  {
    id: '6.1-hard-4',
    nodeId: '6.1',
    difficulty: 3,
    type: 'calculation',
    content: '已知函数 $f(x) = ae^x - x$（$x \\in [0, 1]$），$g(x) = x - \\ln x$（$x \\in [1, e]$）。若存在 $x_1 \\in [0, 1]$，使得对任意 $x_2 \\in [1, e]$ 都有 $f(x_1) \\ge g(x_2)$，求实数 $a$ 的取值范围。',
    answer: '$a \\ge 1$',
    solution: '条件"$\\exists x_1 \\in [0,1], \\forall x_2 \\in [1,e]: f(x_1) \\ge g(x_2)$"的含义是：存在某个 $x_1$，其函数值 $f(x_1)$ 不小于 $g$ 的所有函数值。这等价于 $f$ 的最大值不小于 $g$ 的最大值，即 $\\max_{[0,1]} f \\ge \\max_{[1,e]} g$。\n\n先求 $\\max g$：$g\'(x) = 1 - \\frac{1}{x}$，在 $[1, e]$ 上 $g\'(x) \\ge 0$（等号仅当 $x = 1$），$g$ 单调递增，$\\max g = g(e) = e - 1$。\n\n再求 $\\max f$：$f\'(x) = ae^x - 1$。分情况讨论：\n\n① 若 $a \\le 0$：$f\'(x) < 0$，$f$ 在 $[0, 1]$ 上严格递减，$\\max f = f(0) = a$。需 $a \\ge e - 1$，这与 $a \\le 0$ 矛盾（$e - 1 \\approx 1.718 > 0$），舍去。\n\n② 若 $a > 0$：令 $f\'(x) = 0$ 得临界点 $x = -\\ln a$。\n  \\quad (i) 当 $-\\ln a \\le 0$ 即 $a \\ge 1$ 时：在 $[0, 1]$ 上 $f\'(x) \\ge 0$ 恒成立，$f$ 单调递增，$\\max f = f(1) = ae - 1$。由 $\\max f \\ge \\max g$ 得 $ae - 1 \\ge e - 1 \\Rightarrow a \\ge 1$，符合前提。\n  \\quad (ii) 当 $0 < -\\ln a < 1$ 即 $\\frac{1}{e} < a < 1$ 时：$f$ 在 $[0, -\\ln a]$ 上递减，在 $[-\\ln a, 1]$ 上递增，$\\max f = \\max\\{f(0), f(1)\\} = \\max\\{a, ae - 1\\}$。比较两者：$a - (ae - 1) = 1 - a(e - 1)$。当 $a \\le \\frac{1}{e-1}$ 时 $\\max f = a$，此时需 $a \\ge e-1$，不可能；当 $a > \\frac{1}{e-1}$ 时 $\\max f = ae - 1$，需 $ae - 1 \\ge e - 1 \\Rightarrow a \\ge 1$，与 $a < 1$ 矛盾。\n  \\quad (iii) 当 $-\\ln a \\ge 1$ 即 $0 < a \\le \\frac{1}{e}$ 时：在 $[0, 1]$ 上 $f\'(x) \\le 0$，$f$ 递减，$\\max f = f(0) = a$。需 $a \\ge e - 1$，不可能。\n\n综合所有情况，$a \\ge 1$。',
    tags: ['任意存在混合', '量词转化', '最大值比较', '含参分类讨论'],
    source: '自主命题',
  },
];

export default questions6_1;
