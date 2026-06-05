import type { Question, ChoiceQuestion } from '../../types';

const questions1_3: (Question | ChoiceQuestion)[] = [
  // ===== 难度 1：基础巩固 =====
  {
    id: '1.3-easy-1',
    nodeId: '1.3',
    difficulty: 1,
    type: 'fill',
    content: '抛物线 $y^2 = 12x$ 的焦点坐标为 $\\underline{\\qquad}$，准线方程为 $\\underline{\\qquad}$，$p$ 的值为 $\\underline{\\qquad}$。',
    answer: '$(3, 0)$; $x = -3$; $6$',
    solution: '标准形式 $y^2 = 2px$，对比得 $2p = 12 \\Rightarrow p = 6$。焦点在 $(\\frac{p}{2}, 0) = (3, 0)$，准线为 $x = -\\frac{p}{2} = -3$。注意区分 $p$ 与 $2p$：$p$ 表示焦点到准线的距离，$2p$ 是方程中的系数。',
    tags: ['标准方程', '焦点', '准线', 'p的含义'],
  },
  {
    id: '1.3-easy-2',
    nodeId: '1.3',
    difficulty: 1,
    type: 'choice',
    content: '抛物线 $x^2 = -4y$ 的焦点坐标是：',
    options: ['$(0, -1)$', '$(1, 0)$', '$(0, 1)$', '$(-1, 0)$'],
    answer: 'A',
    solution: '$x^2 = -4y$ 为标准形式 $x^2 = -2py$，对比得 $2p = 4 \\Rightarrow p = 2$。开口向下（$x^2 = -2py$），焦点在 $(0, -\\frac{p}{2}) = (0, -1)$，准线为 $y = \\frac{p}{2} = 1$。注意：$x^2 = \\pm 2py$ 的焦点在 $y$ 轴上，不要与 $y^2 = \\pm 2px$ 混淆。',
    tags: ['标准方程', '焦点', '开口方向'],
  } as ChoiceQuestion,
  {
    id: '1.3-easy-3',
    nodeId: '1.3',
    difficulty: 1,
    type: 'choice',
    content: '以原点为顶点，焦点为 $F(0, -2)$ 的抛物线的标准方程是：',
    options: ['$y^2 = -8x$', '$x^2 = -8y$', '$y^2 = 8x$', '$x^2 = 8y$'],
    answer: 'B',
    solution: '焦点 $(0, -2)$ 在 $y$ 轴负半轴上，故抛物线开口向下，方程形如 $x^2 = -2py$（$p > 0$）。焦点到顶点的距离 $\\frac{p}{2} = 2$，故 $p = 4$，$2p = 8$。标准方程为 $x^2 = -8y$。验证：焦点 $(0, -\\frac{p}{2}) = (0, -2)$ ✓，准线 $y = 2$。',
    tags: ['标准方程', '焦点', '顶点', '开口方向'],
  } as ChoiceQuestion,

  // ===== 难度 2：综合 =====
  {
    id: '1.3-mid-1',
    nodeId: '1.3',
    difficulty: 2,
    type: 'calculation',
    content: '已知抛物线的顶点在原点，对称轴为 $x$ 轴，且过点 $(-2, 4)$。\n\n(1) 求抛物线的标准方程；\n(2) 求该抛物线的焦点坐标和准线方程。',
    answer: '$y^2 = -8x$; $(-2, 0)$, $x = 2$',
    solution: '(1) 对称轴为 $x$ 轴，方程形如 $y^2 = \\pm 2px$（$p > 0$）。代入点 $(-2, 4)$：\n\n若为 $y^2 = 2px$（开口向右），则 $16 = 2p \\cdot (-2) \\Rightarrow p = -4$，与 $p > 0$ 矛盾。\n\n若为 $y^2 = -2px$（开口向左），则 $16 = -2p \\cdot (-2) = 4p \\Rightarrow p = 4$。\n\n故抛物线方程为 $y^2 = -2 \\cdot 4 \\cdot x = -8x$。\n\n(2) 由 $y^2 = -8x$ 知 $2p = 8 \\Rightarrow p = 4$。开口向左，焦点为 $(-\\frac{p}{2}, 0) = (-2, 0)$，准线为 $x = \\frac{p}{2} = 2$。\n\n验证：点 $(-2, 4)$ 满足 $y^2 = -8x$：$16 = -8 \\times (-2) = 16$ ✓。',
    tags: ['标准方程', '待定系数法', '焦点', '准线'],
  },

  // ===== 难度 3：压轴 =====
  {
    id: '1.3-hard-1',
    nodeId: '1.3',
    difficulty: 3,
    type: 'calculation',
    content: '过抛物线 $y^2 = 2px$ ($p > 0$) 的焦点 $F$ 作一条倾斜角为 $\\theta$（$\\theta \\neq 0$）的直线，交抛物线于 $A, B$ 两点。\n\n(1) 用 $p$ 和 $\\theta$ 表示弦长 $|AB|$；\n(2) 若 $|AB| = 4p$，求 $\\theta$ 的值。',
    answer: '$\\frac{2p}{\\sin^2\\theta}$; $45^\\circ$',
    solution: '(1) 焦点 $F(\\frac{p}{2}, 0)$。当 $\\theta \\neq 90^\\circ$ 时，设直线的参数方程 $x = \\frac{p}{2} + t\\cos\\theta,\\, y = t\\sin\\theta$（$t$ 为参数）。\n\n代入 $y^2 = 2px$：$t^2\\sin^2\\theta = 2p(\\frac{p}{2} + t\\cos\\theta) = p^2 + 2pt\\cos\\theta$。\n\n$t^2\\sin^2\\theta - 2p\\cos\\theta \\cdot t - p^2 = 0$。设两根为 $t_A, t_B$，由韦达定理：$t_A + t_B = \\frac{2p\\cos\\theta}{\\sin^2\\theta}$，$t_A t_B = -\\frac{p^2}{\\sin^2\\theta}$。\n\n弦长 $|AB| = |t_A - t_B| = \\sqrt{(t_A + t_B)^2 - 4t_At_B}$\n$= \\sqrt{\\frac{4p^2\\cos^2\\theta}{\\sin^4\\theta} + \\frac{4p^2}{\\sin^2\\theta}} = \\frac{2p}{\\sin^2\\theta}\\sqrt{\\cos^2\\theta + \\sin^2\\theta} = \\frac{2p}{\\sin^2\\theta}$。\n\n当 $\\theta = 90^\\circ$（直线 $x = \\frac{p}{2}$）时：$y^2 = p^2 \\Rightarrow y = \\pm p$，$|AB| = 2p$。公式 $\\frac{2p}{\\sin^2 90^\\circ} = 2p$，同样成立。\n\n综上，$|AB| = \\frac{2p}{\\sin^2\\theta}$。\n\n(2) 令 $\\frac{2p}{\\sin^2\\theta} = 4p$，得 $\\sin^2\\theta = \\frac{1}{2}$，$\\sin\\theta = \\frac{\\sqrt{2}}{2}$（$\\sin\\theta > 0$，因倾斜角 $\\theta \\in [0, \\pi)$ 且 $\\theta \\neq 0$）。\n\n故 $\\theta = 45^\\circ$ 或 $\\theta = 135^\\circ$。两组解均满足条件（倾斜角互补，$\\sin^2\\theta$ 相同，弦长相等）。通常取锐角 $\\theta = 45^\\circ$。',
    tags: ['焦点弦', '弦长公式', '参数方程', '韦达定理'],
  },
];

export default questions1_3;
