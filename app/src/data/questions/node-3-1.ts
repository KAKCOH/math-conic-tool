import type { Question, ChoiceQuestion } from '../../types';

const questions3_1: (Question | ChoiceQuestion)[] = [
  // ===== 难度 1：基础巩固 =====
  {
    id: '3.1-easy-1',
    nodeId: '3.1',
    difficulty: 1,
    type: 'fill',
    content: '直线 $y = x + 1$ 与椭圆 $\\frac{x^2}{4} + \\frac{y^2}{3} = 1$ 的公共点个数为 $\\underline{\\qquad}$。',
    answer: '$2$',
    solution: '联立 $\\frac{x^2}{4} + \\frac{(x+1)^2}{3} = 1$，乘以 12 得 $3x^2 + 4(x^2 + 2x + 1) = 12$，即 $7x^2 + 8x - 8 = 0$。判别式 $\\Delta = 8^2 - 4 \\cdot 7 \\cdot (-8) = 64 + 224 = 288 > 0$，故有两个不同实根，对应两个公共点。',
    tags: ['联立', '判别式', '交点个数'],
  },
  {
    id: '3.1-easy-2',
    nodeId: '3.1',
    difficulty: 1,
    type: 'choice',
    content: '已知椭圆 $\\frac{x^2}{4} + \\frac{y^2}{9} = 1$ 上一点 $P$ 的坐标为 $(2\\cos\\theta, 3\\sin\\theta)$，则 $3x + 2y$ 的最大值为：',
    options: ['$6$', '$6\\sqrt{2}$', '$\\sqrt{10}$', '$12$'],
    answer: 'B',
    solution: '将参数式代入：$3x + 2y = 3 \\cdot 2\\cos\\theta + 2 \\cdot 3\\sin\\theta = 6\\cos\\theta + 6\\sin\\theta = 6\\sqrt{2}\\sin(\\theta + \\frac{\\pi}{4})$。当 $\\sin(\\theta + \\frac{\\pi}{4}) = 1$ 时取最大值 $6\\sqrt{2}$。参数法将二元最值化为一元三角最值。',
    tags: ['参数方程', '三角最值', '辅助角公式'],
  } as ChoiceQuestion,
  {
    id: '3.1-easy-3',
    nodeId: '3.1',
    difficulty: 1,
    type: 'fill',
    content: '若直线 $y = kx + 3$ 与椭圆 $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$ 相切，则 $k = \\underline{\\qquad}$。',
    answer: '$\\pm\\frac{\\sqrt{5}}{3}$',
    solution: '联立得 $4x^2 + 9(kx + 3)^2 = 36$，展开：$(4 + 9k^2)x^2 + 54kx + 45 = 0$。相切则 $\\Delta = 0$：$(54k)^2 - 4(4 + 9k^2) \\cdot 45 = 2916k^2 - 720 - 1620k^2 = 1296k^2 - 720 = 0$，得 $k^2 = \\frac{720}{1296} = \\frac{5}{9}$，故 $k = \\pm\\frac{\\sqrt{5}}{3}$。',
    tags: ['联立', '相切条件', 'Δ=0'],
  },

  // ===== 难度 2：综合 =====
  {
    id: '3.1-mid-1',
    nodeId: '3.1',
    difficulty: 2,
    type: 'calculation',
    content: '已知椭圆 $C: \\frac{x^2}{4} + \\frac{y^2}{3} = 1$，直线 $l: y = kx + m$ 与 $C$ 交于 $A, B$ 两点，$AB$ 的中点为 $M$。\n\n(1) 用 $k, m$ 表示中点 $M$ 的坐标；\n(2) 若 $M$ 的坐标为 $(1, \\frac{1}{2})$，求 $k$ 和 $m$ 的值，并验证此时直线与椭圆确实有两个交点。',
    answer: '$M(-\\frac{4km}{3+4k^2}, \\frac{3m}{3+4k^2})$; $k=-\\frac{3}{2}$, $m=2$',
    solution: '(1) 联立 $\\frac{x^2}{4} + \\frac{(kx + m)^2}{3} = 1$，乘 12：$3x^2 + 4(k^2x^2 + 2kmx + m^2) = 12$，即 $(3 + 4k^2)x^2 + 8kmx + (4m^2 - 12) = 0$。由韦达定理：$x_1 + x_2 = -\\frac{8km}{3 + 4k^2}$，$x_M = \\frac{x_1 + x_2}{2} = -\\frac{4km}{3 + 4k^2}$。$y_M = kx_M + m = k\\left(-\\frac{4km}{3 + 4k^2}\\right) + m = \\frac{-4k^2m + 3m + 4k^2m}{3 + 4k^2} = \\frac{3m}{3 + 4k^2}$。\n\n(2) $x_M = 1$ 得 $-\\frac{4km}{3 + 4k^2} = 1$ ①，$y_M = \\frac{1}{2}$ 得 $\\frac{3m}{3 + 4k^2} = \\frac{1}{2}$ ②。由②：$3 + 4k^2 = 6m$，代入①：$-\\frac{4km}{6m} = 1$，$m \\neq 0$ 时 $-\\frac{2k}{3} = 1$，得 $k = -\\frac{3}{2}$。代回②：$3 + 4 \\cdot \\frac{9}{4} = 6m$，$12 = 6m$，$m = 2$。验证 $\\Delta$：代入原二次方程，$3 + 4k^2 = 12$，$8km = 8 \\cdot (-\\frac{3}{2}) \\cdot 2 = -24$，$4m^2 - 12 = 4 \\cdot 4 - 12 = 4$，二次方程为 $12x^2 - 24x + 4 = 0$，$\\Delta = 576 - 192 = 384 > 0$，确有两交点。',
    tags: ['联立', '韦达定理', '中点坐标', '参数讨论'],
  },

  // ===== 难度 3：压轴 =====
  {
    id: '3.1-hard-1',
    nodeId: '3.1',
    difficulty: 3,
    type: 'calculation',
    content: '设椭圆 $C: \\frac{x^2}{4} + y^2 = 1$，过点 $P(1, 0)$ 引直线 $l$，其参数方程为 $\\begin{cases} x = 1 + t\\cos\\alpha \\\\ y = t\\sin\\alpha \\end{cases}$（$t$ 为参数，$\\alpha$ 为倾斜角，$\\alpha \\in (0, \\pi)$）。$l$ 与 $C$ 交于 $A, B$ 两点。\n\n(1) 用 $\\alpha$ 表示 $|PA| \\cdot |PB|$；\n(2) 若 $|PA| \\cdot |PB| = 1$，求 $\\alpha$ 的值。',
    answer: '$\\frac{3}{4-3\\cos^2\\alpha}$; $\\alpha = \\arccos\\frac{\\sqrt{3}}{3}$ 或 $\\pi-\\arccos\\frac{\\sqrt{3}}{3}$',
    solution: '(1) 将参数方程代入椭圆：$\\frac{(1 + t\\cos\\alpha)^2}{4} + (t\\sin\\alpha)^2 = 1$。展开：$\\frac{1}{4} + \\frac{t\\cos\\alpha}{2} + \\frac{t^2\\cos^2\\alpha}{4} + t^2\\sin^2\\alpha = 1$。整理得 $t^2\\left(\\frac{\\cos^2\\alpha}{4} + \\sin^2\\alpha\\right) + t \\cdot \\frac{\\cos\\alpha}{2} - \\frac{3}{4} = 0$。其中 $\\frac{\\cos^2\\alpha}{4} + \\sin^2\\alpha = \\frac{\\cos^2\\alpha + 4\\sin^2\\alpha}{4} = \\frac{4 - 3\\cos^2\\alpha}{4}$。故 $|PA| \\cdot |PB| = |t_1t_2| = \\left|\\frac{-3/4}{(4 - 3\\cos^2\\alpha)/4}\\right| = \\frac{3}{4 - 3\\cos^2\\alpha}$。\n\n(2) 令 $\\frac{3}{4 - 3\\cos^2\\alpha} = 1$，得 $4 - 3\\cos^2\\alpha = 3$，$\\cos^2\\alpha = \\frac{1}{3}$，$\\cos\\alpha = \\pm\\frac{\\sqrt{3}}{3}$。由 $\\alpha \\in (0, \\pi)$：$\\alpha = \\arccos\\frac{\\sqrt{3}}{3}$ 或 $\\alpha = \\pi - \\arccos\\frac{\\sqrt{3}}{3}$。验证判别式：$\\Delta = \\frac{\\cos^2\\alpha}{4} + \\frac{3(4 - 3\\cos^2\\alpha)}{16} = \\frac{12 - 5\\cos^2\\alpha}{16} > 0$ 恒成立，又 $P(1, 0)$ 在椭圆内，故均有二交点。',
    tags: ['参数方程', '直线参数式', '韦达定理', 't的几何意义'],
  },
];

export default questions3_1;
