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
  {
    id: '3.1-mid-2',
    nodeId: '3.1',
    difficulty: 2,
    type: 'calculation',
    content: '已知椭圆 $C: \\frac{x^2}{9} + \\frac{y^2}{4} = 1$，$P$ 是 $C$ 上任意一点。\n\n(1) 写出 $C$ 的参数方程；\n(2) 用参数法求 $P$ 到直线 $l: 2x + 3y - 6 = 0$ 的距离的最大值和最小值。',
    answer: '参数方程 $\\begin{cases} x=3\\cos\\theta \\\\ y=2\\sin\\theta \\end{cases}$; 最大 $\\frac{6(\\sqrt{2}+1)}{\\sqrt{13}}$, 最小 $\\frac{6(\\sqrt{2}-1)}{\\sqrt{13}}$',
    solution: '(1) 参数方程为 $\\begin{cases} x = 3\\cos\\theta \\\\ y = 2\\sin\\theta \\end{cases}$($\\theta \\in [0, 2\\pi)$)。\n\n(2) $P$ 到 $l$ 的距离: $d = \\frac{|2 \\cdot 3\\cos\\theta + 3 \\cdot 2\\sin\\theta - 6|}{\\sqrt{2^2 + 3^2}} = \\frac{|6\\cos\\theta + 6\\sin\\theta - 6|}{\\sqrt{13}} = \\frac{6|\\sqrt{2}\\sin(\\theta + \\frac{\\pi}{4}) - 1|}{\\sqrt{13}}$。\n$\\sqrt{2}\\sin(\\theta + \\frac{\\pi}{4}) \\in [-\\sqrt{2}, \\sqrt{2}]$, 故 $\\sqrt{2}\\sin(\\theta + \\frac{\\pi}{4}) - 1 \\in [-\\sqrt{2}-1, \\sqrt{2}-1]$。\n$|\\sqrt{2}\\sin(\\theta + \\frac{\\pi}{4}) - 1|$ 的最大值为 $\\sqrt{2}+1$, 最小值为 $|\\sqrt{2}-1| = \\sqrt{2}-1$。\n故 $d_{\\max} = \\frac{6(\\sqrt{2}+1)}{\\sqrt{13}}$, $d_{\\min} = \\frac{6(\\sqrt{2}-1)}{\\sqrt{13}}$。',
    tags: ['参数法', '三角最值', '点到直线距离'],
  },
  {
    id: '3.1-mid-3',
    nodeId: '3.1',
    difficulty: 2,
    type: 'calculation',
    content: '已知椭圆 $C: \\frac{x^2}{4} + \\frac{y^2}{2} = 1$，弦 $AB$ 的中点为 $M(1, \\frac{1}{2})$。\n\n(1) 用联立法（设直线 $y = kx + m$）求 $k$ 和 $m$ 的值；\n(2) 求弦长 $|AB|$。',
    answer: '$k = -1$, $m = \\frac{3}{2}$; $|AB| = \\frac{2\\sqrt{15}}{3}$',
    solution: '(1) 联立 $\\frac{x^2}{4} + \\frac{(kx+m)^2}{2} = 1$，乘 $4$: $x^2 + 2(k^2x^2 + 2kmx + m^2) = 4$, 即 $(1+2k^2)x^2 + 4kmx + (2m^2-4) = 0$。\n由韦达定理: $x_1+x_2 = -\\frac{4km}{1+2k^2}$, 中点横坐标 $x_M = \\frac{x_1+x_2}{2} = -\\frac{2km}{1+2k^2} = 1$ ①。\n$y_M = kx_M + m = k + m = \\frac{1}{2}$ ②。由② $m = \\frac{1}{2} - k$, 代入①: $-\\frac{2k(\\frac{1}{2}-k)}{1+2k^2}=1$, 即 $\\frac{-k+2k^2}{1+2k^2}=1$, $2k^2-k = 1+2k^2$, 得 $k = -1$, $m = \\frac{3}{2}$。\n\n(2) 联立 $\\frac{x^2}{4} + \\frac{(-x+\\frac{3}{2})^2}{2} = 1$, 乘 $4$: $x^2 + 2(x^2-3x+\\frac{9}{4}) = 4$, $3x^2 - 6x + \\frac{1}{2} = 0$, 即 $6x^2 - 12x + 1 = 0$。\n$\\Delta = 144 - 24 = 120$, $|AB| = \\sqrt{2} \\cdot \\frac{\\sqrt{120}}{6} = \\frac{2\\sqrt{60}}{6} = \\frac{2\\sqrt{15}}{3}$。',
    tags: ['联立', '韦达定理', '中点弦', '弦长公式'],
  },
  {
    id: '3.1-hard-2',
    nodeId: '3.1',
    difficulty: 3,
    type: 'calculation',
    content: '已知双曲线 $C: \\frac{x^2}{2} - y^2 = 1$, 过点 $P(0, 1)$ 的直线 $l$ 与 $C$ 的右支交于 $A, B$ 两点。\n\n(1) 若 $l$ 的斜率为 $k$, 求 $\\triangle OAB$ 面积 $S$ 关于 $k$ 的表达式（$O$ 为坐标原点）；\n(2) 求 $S$ 的取值范围。',
    answer: '$S(k) = \\frac{2\\sqrt{1-k^2}}{2k^2-1}$ ($k \\in (-1, -\\frac{\\sqrt{2}}{2})$); $S \\in (0, +\\infty)$, 最小值的下确界为 $0$（$k \\to -1^+$ 时）',
    solution: '(1) 设 $l: y = kx + 1$。联立 $\\frac{x^2}{2} - (kx+1)^2 = 1$，得 $(1-2k^2)x^2 - 4kx - 4 = 0$。\n$A,B$ 在右支 $\\Rightarrow x_1, x_2 > 0$。$x_1x_2 = \\frac{-4}{1-2k^2} > 0 \\Rightarrow 1-2k^2 < 0 \\Rightarrow |k| > \\frac{\\sqrt{2}}{2}$。\n$x_1+x_2 = \\frac{4k}{1-2k^2} > 0 \\Rightarrow k < 0$（$1-2k^2 < 0$）。$\\Delta = 16k^2 + 16(1-2k^2) = 16-16k^2 > 0 \\Rightarrow |k| < 1$。\n综上 $k \\in (-1, -\\frac{\\sqrt{2}}{2})$。\n$|AB| = \\sqrt{1+k^2} \\cdot \\frac{\\sqrt{16-16k^2}}{2k^2-1} = \\frac{4\\sqrt{1+k^2}\\sqrt{1-k^2}}{2k^2-1}$。\n原点 $O$ 到 $l: kx-y+1=0$ 的距离 $d = \\frac{1}{\\sqrt{k^2+1}}$。\n$S = \\frac{1}{2}|AB| \\cdot d = \\frac{2\\sqrt{1-k^2}}{2k^2-1}$。\n\n(2) 令 $u = k^2 \\in (\\frac{1}{2}, 1)$。$S = \\frac{2\\sqrt{1-u}}{2u-1}$。当 $u \\to 1^-$ 时 $S \\to 0$; 当 $u \\to (\\frac{1}{2})^+$ 时 $S \\to +\\infty$。$S$ 在区间上单调递减, 取值范围为 $(0, +\\infty)$。',
    tags: ['双曲线', '联立', '面积', '取值范围'],
    source: '2022·新高考Ⅱ卷·T21改编',
  },
  {
    id: '3.1-hard-3',
    nodeId: '3.1',
    difficulty: 3,
    type: 'calculation',
    content: '已知椭圆 $C: \\frac{x^2}{4} + y^2 = 1$，$A, B$ 是椭圆 $C$ 与 $x$ 轴的两个交点。$P$ 为 $C$ 上任意一点。\n\n(1) 用 $P$ 的横坐标 $x$ 表示 $|PA|^2 + |PB|^2$；\n(2) 求 $|PA| + |PB|$ 的最大值。',
    answer: '$\\frac{3x^2}{2} + 4$; 最大值为 $4$, 当 $P$ 在长轴端点时取得',
    solution: '(1) $A(-2, 0), B(2, 0)$, $P(x, y)$ 满足 $y^2 = 1 - \\frac{x^2}{4}$。\n$|PA|^2 = (x+2)^2 + y^2 = x^2 + 4x + 4 + y^2$,\n$|PB|^2 = (x-2)^2 + y^2 = x^2 - 4x + 4 + y^2$。\n$|PA|^2 + |PB|^2 = 2x^2 + 8 + 2y^2 = 2x^2 + 8 + 2(1 - \\frac{x^2}{4}) = \\frac{3x^2}{2} + 10$。\n\n(2) $|PA| + |PB| \\le \\sqrt{2(|PA|^2 + |PB|^2)} = \\sqrt{3x^2 + 20}$（柯西不等式）。\n$x \\in [-2, 2]$, $3x^2 \\in [0, 12]$，故 $\\sqrt{3x^2+20} \\in [\\sqrt{20}, \\sqrt{32}] = [2\\sqrt{5}, 4\\sqrt{2}]$。\n端点检验: $P(0, \\pm 1)$ 时 $|PA| = |PB| = \\sqrt{5}$，和为 $2\\sqrt{5} \\approx 4.47$；$P(\\pm 2, 0)$ 时和为 $4$。故最大值为 $2\\sqrt{5}$（$P$ 在短轴端点）。',
    tags: ['椭圆', '距离最值', '柯西不等式'],
  },
];

export default questions3_1;
