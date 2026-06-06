import type { Question, ChoiceQuestion } from '../../types';

const questions3_4: (Question | ChoiceQuestion)[] = [
  // ===== 难度 1：基础巩固 =====
  {
    id: '3.4-easy-1',
    nodeId: '3.4',
    difficulty: 1,
    type: 'fill',
    content: '![椭圆 $\\frac{x^2}{4}+y^2=1$，直线 $y=x+1$ 截得的弦 $AB$](/figures/q-3.4-easy-1.png)\n\n直线 $y = x + 1$ 被椭圆 $\\frac{x^2}{4} + y^2 = 1$ 截得的弦长为 $\\underline{\\qquad}$（结果用根式表示）。',
    answer: '$\\frac{8\\sqrt{2}}{5}$',
    solution: '联立 $\\frac{x^2}{4} + (x + 1)^2 = 1$，乘 4：$x^2 + 4(x^2 + 2x + 1) = 4$，即 $5x^2 + 8x = 0$。$x = 0$ 或 $x = -\\frac{8}{5}$。由弦长公式 $|AB| = \\sqrt{1 + k^2} \\cdot |x_1 - x_2| = \\sqrt{2} \\cdot \\frac{8}{5} = \\frac{8\\sqrt{2}}{5}$。\n\n弦长公式：对于直线 $y = kx + m$ 与二次曲线联立后的一元二次方程 $ax^2 + bx + c = 0$（$a \\neq 0$），$|AB| = \\sqrt{1 + k^2} \\cdot \\frac{\\sqrt{\\Delta}}{|a|}$。这里 $a = 5$，$\\Delta = 64$，$\\frac{\\sqrt{64}}{5} = \\frac{8}{5}$。',
    tags: ['弦长公式', '联立', 'Δ'],
  },
  {
    id: '3.4-easy-2',
    nodeId: '3.4',
    difficulty: 1,
    type: 'choice',
    content: '已知椭圆 $\\frac{x^2}{4} + \\frac{y^2}{3} = 1$ 的右焦点为 $F$，过 $F$ 且倾斜角为 $60^\\circ$ 的直线与椭圆交于 $A, B$ 两点，则弦长 $|AB| =$：',
    options: ['$\\frac{8}{5}$', '$\\frac{12}{5}$', '$\\frac{16}{5}$', '$4$'],
    answer: 'C',
    solution: '$c = 1$，$F(1, 0)$。直线 $l: y = \\sqrt{3}(x - 1)$。联立椭圆：$3x^2 + 4 \\cdot 3(x - 1)^2 = 12$，$3x^2 + 12(x^2 - 2x + 1) = 12$，$15x^2 - 24x = 0$。$x = 0$ 或 $x = \\frac{8}{5}$。$|AB| = \\sqrt{1 + k^2} \\cdot |x_1 - x_2| = \\sqrt{1 + 3} \\cdot \\frac{8}{5} = 2 \\cdot \\frac{8}{5} = \\frac{16}{5}$。',
    tags: ['弦长公式', '焦点弦'],
  } as ChoiceQuestion,
  {
    id: '3.4-easy-3',
    nodeId: '3.4',
    difficulty: 1,
    type: 'fill',
    content: '已知椭圆 $\\frac{x^2}{5} + \\frac{y^2}{4} = 1$ 上一点 $P$ 使得 $\\angle F_1PF_2 = 60^\\circ$，则 $\\triangle F_1PF_2$ 的面积为 $\\underline{\\qquad}$。',
    answer: '$\\frac{4\\sqrt{3}}{3}$',
    solution: '$a = \\sqrt{5}$，$b = 2$，$c = 1$。焦点三角形面积公式：$S_{\\triangle F_1PF_2} = b^2 \\tan\\frac{\\angle F_1PF_2}{2} = 4 \\tan 30^\\circ = \\frac{4\\sqrt{3}}{3}$。\n\n公式推导：由定义 $m + n = 2a$ 和余弦定理 $(2c)^2 = m^2 + n^2 - 2mn\\cos\\theta$，消去 $m^2 + n^2$ 得 $mn = \\frac{2b^2}{1 + \\cos\\theta}$，$S = \\frac{1}{2}mn\\sin\\theta = b^2\\tan\\frac{\\theta}{2}$。',
    tags: ['焦点三角形', '面积公式', 'b²tan(θ/2)'],
  },

  // ===== 难度 2：综合 =====
  {
    id: '3.4-mid-1',
    nodeId: '3.4',
    difficulty: 2,
    type: 'calculation',
    content: '![椭圆 $\\frac{x^2}{4}+\\frac{y^2}{3}=1$，直线过 $F_2(1,0)$ 且斜率 $k=1$，弦 $AB$ 及 $\\triangle F_1AB$](/figures/q-3.4-mid-1.png)\n\n已知椭圆 $C: \\frac{x^2}{4} + \\frac{y^2}{3} = 1$，斜率为 $1$ 的直线 $l$ 过椭圆右焦点 $F_2$。\n\n(1) 求直线 $l$ 被椭圆截得的弦长 $|AB|$；\n(2) 设椭圆的左焦点为 $F_1$，求 $\\triangle F_1AB$ 的面积。',
    answer: '$\\frac{24}{7}$; $\\frac{12\\sqrt{2}}{7}$',
    solution: '由椭圆方程得 $c = 1$，$F_2(1, 0)$，$F_1(-1, 0)$。直线 $l: y = x - 1$。\n\n(1) 联立 $\\frac{x^2}{4} + \\frac{(x - 1)^2}{3} = 1$，乘 $12$：$3x^2 + 4(x^2 - 2x + 1) = 12$，$7x^2 - 8x - 8 = 0$。$\\Delta = 64 + 224 = 288 = 144 \\times 2$。$|AB| = \\sqrt{1 + 1} \\cdot \\frac{\\sqrt{288}}{7} = \\sqrt{2} \\cdot \\frac{12\\sqrt{2}}{7} = \\frac{24}{7}$。\n\n(2) 左焦点 $F_1(-1, 0)$ 到直线 $l: x - y - 1 = 0$ 的距离：$d = \\frac{|-1 - 0 - 1|}{\\sqrt{1 + 1}} = \\frac{2}{\\sqrt{2}} = \\sqrt{2}$。$S_{\\triangle F_1AB} = \\frac{1}{2} \\cdot |AB| \\cdot d = \\frac{1}{2} \\cdot \\frac{24}{7} \\cdot \\sqrt{2} = \\frac{12\\sqrt{2}}{7}$。',
    tags: ['弦长', '焦点', '点到直线距离', '三角形面积'],
  },

  // ===== 难度 3：压轴 =====
  {
    id: '3.4-hard-1',
    nodeId: '3.4',
    difficulty: 3,
    type: 'calculation',
    content: '已知椭圆 $C: \\frac{x^2}{4} + \\frac{y^2}{3} = 1$，斜率为 $1$ 的直线 $l: y = x + m$ 与 $C$ 交于 $A, B$ 两点（$A, B$ 不重合），$O$ 为坐标原点。\n\n(1) 求 $m$ 的取值范围，并写出弦长 $|AB|$ 关于 $m$ 的表达式；\n(2) 求 $\\triangle OAB$ 面积的最大值及此时 $m$ 的值。',
    answer: '$|m|<\\sqrt{7}$, $|AB|=\\frac{4\\sqrt{6}\\sqrt{7-m^2}}{7}$; $S_{\\max}=\\sqrt{3}$, $m=\\pm\\frac{\\sqrt{14}}{2}$',
    solution: '(1) 联立 $\\frac{x^2}{4} + \\frac{(x + m)^2}{3} = 1$，乘 $12$：$3x^2 + 4(x^2 + 2mx + m^2) = 12$，$7x^2 + 8mx + (4m^2 - 12) = 0$。\n$\\Delta = 64m^2 - 28(4m^2 - 12) = 64m^2 - 112m^2 + 336 = 48(7 - m^2)$。有两个不同交点需 $\\Delta > 0$，故 $m^2 < 7$，即 $|m| < \\sqrt{7}$。\n$|AB| = \\sqrt{1 + k^2} \\cdot \\frac{\\sqrt{\\Delta}}{|a|} = \\sqrt{2} \\cdot \\frac{\\sqrt{48(7 - m^2)}}{7} = \\frac{4\\sqrt{6}\\sqrt{7 - m^2}}{7}$。\n\n(2) 原点 $O$ 到 $l: x - y + m = 0$ 的距离 $d = \\frac{|m|}{\\sqrt{1 + 1}} = \\frac{|m|}{\\sqrt{2}}$。\n$S_{\\triangle OAB} = \\frac{1}{2} \\cdot |AB| \\cdot d = \\frac{1}{2} \\cdot \\frac{4\\sqrt{6}\\sqrt{7 - m^2}}{7} \\cdot \\frac{|m|}{\\sqrt{2}} = \\frac{2\\sqrt{3}}{7} \\cdot |m|\\sqrt{7 - m^2}$。\n令 $u = m^2 \\in [0, 7)$，$S = \\frac{2\\sqrt{3}}{7}\\sqrt{u(7 - u)}$。$u(7 - u) = -u^2 + 7u$，当 $u = \\frac{7}{2}$ 时取最大值 $\\frac{49}{4}$。\n$S_{\\max} = \\frac{2\\sqrt{3}}{7} \\cdot \\sqrt{\\frac{49}{4}} = \\frac{2\\sqrt{3}}{7} \\cdot \\frac{7}{2} = \\sqrt{3}$。此时 $m = \\pm\\sqrt{\\frac{7}{2}} = \\pm\\frac{\\sqrt{14}}{2}$。\n\n此题综合了弦长公式、点到直线距离、二次函数最值三个知识点，是典型的弦长与面积综合题。',
    tags: ['弦长公式', '三角形面积', '最值', '二次函数'],
  },
  {
    id: '3.4-mid-2',
    nodeId: '3.4',
    difficulty: 2,
    type: 'calculation',
    content: '已知抛物线 $C: y^2 = 4x$ 的焦点为 $F$，过 $F$ 且倾斜角为 $45^\\circ$ 的直线 $l$ 与 $C$ 交于 $A, B$ 两点（$A$ 在 $x$ 轴上方）。\\n\\n(1) 求弦长 $|AB|$；\\n(2) 求 $\\triangle OAB$ 的面积（$O$ 为坐标原点）。',
    answer: '$8$; $2\\sqrt{2}$',
    solution: '抛物线 $y^2 = 4x$: $2p = 4$，$p = 2$，焦点 $F(1, 0)$。直线 $l$: $k = \\tan 45^\\circ = 1$，过 $F(1, 0)$，故 $l: y = x - 1$。\\n\\n(1) 联立 $y^2 = 4x$ 和 $y = x - 1$: $(x - 1)^2 = 4x$，即 $x^2 - 6x + 1 = 0$。$\\Delta = 36 - 4 = 32$。\\n$|AB| = \\sqrt{1 + k^2} \\cdot \\frac{\\sqrt{\\Delta}}{|a|} = \\sqrt{2} \\cdot \\sqrt{32} = \\sqrt{2} \\cdot 4\\sqrt{2} = 8$。\\n\\n(2) 原点 $O$ 到直线 $l: x - y - 1 = 0$ 的距离 $d = \\frac{|0 - 0 - 1|}{\\sqrt{1 + 1}} = \\frac{1}{\\sqrt{2}}$。\\n$S_{\\triangle OAB} = \\frac{1}{2} \\cdot |AB| \\cdot d = \\frac{1}{2} \\cdot 8 \\cdot \\frac{1}{\\sqrt{2}} = 2\\sqrt{2}$。',
    tags: ['抛物线', '焦点弦', '弦长', '三角形面积'],
  },
  {
    id: '3.4-mid-3',
    nodeId: '3.4',
    difficulty: 2,
    type: 'calculation',
    content: '已知椭圆 $C: \\frac{x^2}{4} + \\frac{y^2}{3} = 1$，直线 $l: y = x + m$（$m \\in \\mathbb{R}$）与 $C$ 交于不同的两点 $A, B$。\\n\\n(1) 当 $m = 1$ 时，求弦长 $|AB|$；\\n(2) 求 $|AB|$ 的取值范围。',
    answer: '$\\frac{24}{7}$; $(0, \\frac{4\\sqrt{42}}{7}]$',
    solution: '(1) 联立 $\\frac{x^2}{4} + \\frac{(x + 1)^2}{3} = 1$，乘 $12$: $3x^2 + 4(x^2 + 2x + 1) = 12$，即 $7x^2 + 8x - 8 = 0$。$\\Delta = 64 + 224 = 288$。\\n$|AB| = \\sqrt{1 + 1} \\cdot \\frac{\\sqrt{288}}{7} = \\sqrt{2} \\cdot \\frac{12\\sqrt{2}}{7} = \\frac{24}{7}$。\\n\\n(2) 联立一般情形: $3x^2 + 4(x + m)^2 = 12$，得 $7x^2 + 8mx + (4m^2 - 12) = 0$。\\n$\\Delta = 64m^2 - 28(4m^2 - 12) = 48(7 - m^2)$。由 $\\Delta > 0$ 得 $|m| < \\sqrt{7}$。\\n$|AB| = \\sqrt{2} \\cdot \\frac{\\sqrt{48(7 - m^2)}}{7} = \\frac{4\\sqrt{6}\\sqrt{7 - m^2}}{7}$。\\n当 $m = 0$ 时 $|AB|_{\\max} = \\frac{4\\sqrt{42}}{7}$；当 $m \\to \\pm\\sqrt{7}$ 时 $|AB| \\to 0$。\\n故 $|AB| \\in (0, \\frac{4\\sqrt{42}}{7}]$。',
    tags: ['弦长公式', '范围', '判别式', '最值'],
  },
  {
    id: '3.4-hard-2',
    nodeId: '3.4',
    difficulty: 3,
    type: 'calculation',
    content: '已知椭圆 $C: \\frac{x^2}{4} + \\frac{y^2}{3} = 1$，$F_1, F_2$ 为左、右焦点。过 $F_2$ 的直线 $l$ 与椭圆交于 $A, B$ 两点。\\n\\n(1) 当 $l \\perp x$ 轴时，求弦长 $|AB|$ 和 $\\triangle F_1AB$ 的面积；\\n(2) 若 $\\triangle F_1AB$ 的面积为 $\\frac{12\\sqrt{2}}{7}$，求直线 $l$ 的斜率 $k$。',
    answer: '$|AB| = 3$，$S = 3$; $k = \\pm 1$',
    solution: '$c = \\sqrt{4 - 3} = 1$，$F_1(-1, 0)$，$F_2(1, 0)$。\\n\\n(1) $l \\perp x$ 轴: $x = 1$。代入椭圆: $\\frac{1}{4} + \\frac{y^2}{3} = 1$，$y^2 = \\frac{9}{4}$，$y = \\pm\\frac{3}{2}$。$A(1, \\frac{3}{2}), B(1, -\\frac{3}{2})$，$|AB| = 3$。\\n$F_1(-1, 0)$ 到 $x = 1$ 的距离 $d = 2$。$S_{\\triangle F_1AB} = \\frac{1}{2} \\cdot 3 \\cdot 2 = 3$。\\n\\n(2) 设 $l: y = k(x - 1)$。联立椭圆: $3x^2 + 4k^2(x - 1)^2 = 12$，得 $(3 + 4k^2)x^2 - 8k^2x + (4k^2 - 12) = 0$。\\n$\\Delta = 64k^4 - 4(3 + 4k^2)(4k^2 - 12) = 144(k^2 + 1)$。\\n$|AB| = \\sqrt{1 + k^2} \\cdot \\frac{\\sqrt{144(k^2 + 1)}}{3 + 4k^2} = \\frac{12(k^2 + 1)}{3 + 4k^2}$。\\n$F_1$ 到 $l: kx - y - k = 0$ 的距离: $d = \\frac{|-k - 0 - k|}{\\sqrt{k^2 + 1}} = \\frac{2|k|}{\\sqrt{k^2 + 1}}$。\\n$S = \\frac{1}{2} \\cdot \\frac{12(k^2 + 1)}{3 + 4k^2} \\cdot \\frac{2|k|}{\\sqrt{k^2 + 1}} = \\frac{12|k|\\sqrt{k^2 + 1}}{3 + 4k^2}$。\\n令 $S = \\frac{12\\sqrt{2}}{7}$: $\\frac{|k|\\sqrt{k^2 + 1}}{3 + 4k^2} = \\frac{\\sqrt{2}}{7}$。\\n平方: $\\frac{k^2(k^2 + 1)}{(3 + 4k^2)^2} = \\frac{2}{49}$，$49k^4 + 49k^2 = 2(9 + 24k^2 + 16k^4)$，$17k^4 + k^2 - 18 = 0$。\\n$(17k^2 + 18)(k^2 - 1) = 0$，$k^2 = 1$ 或 $k^2 = -\\frac{18}{17}$（舍），故 $k = \\pm 1$。',
    tags: ['焦点弦', '弦长', '面积', '斜率'],
    source: '2022·全国乙卷·理T20改编',
  },
  {
    id: '3.4-hard-3',
    nodeId: '3.4',
    difficulty: 3,
    type: 'calculation',
    content: '已知椭圆 $C: \\frac{x^2}{8} + \\frac{y^2}{4} = 1$，$O$ 为坐标原点。直线 $l: y = kx + m$（$m \\neq 0$）与 $C$ 交于 $P, Q$ 两点，且 $OP \\perp OQ$。\\n\\n(1) 求证: $m$ 与 $k$ 满足 $3m^2 = 8(k^2 + 1)$；\\n(2) 求 $\\triangle OPQ$ 面积的取值范围。',
    answer: '证明见解答; $S \\in (\\frac{4}{3}, \\frac{8}{3}]$',
    solution: '(1) 联立 $\\frac{x^2}{8} + \\frac{(kx + m)^2}{4} = 1$，乘 $8$: $x^2 + 2(k^2x^2 + 2kmx + m^2) = 8$，即 $(1 + 2k^2)x^2 + 4kmx + (2m^2 - 8) = 0$。\\n$x_1 + x_2 = -\\frac{4km}{1 + 2k^2}$，$x_1x_2 = \\frac{2m^2 - 8}{1 + 2k^2}$。\\n$OP \\perp OQ$ 等价于 $\\frac{y_1}{x_1} \\cdot \\frac{y_2}{x_2} = -1$，即 $x_1x_2 + y_1y_2 = 0$。\\n$y_1y_2 = (kx_1 + m)(kx_2 + m) = k^2x_1x_2 + km(x_1 + x_2) + m^2$。\\n代入: $(1 + k^2)x_1x_2 + km(x_1 + x_2) + m^2 = 0$。\\n代入韦达结果: $(1 + k^2)\\frac{2m^2 - 8}{1 + 2k^2} + km\\left(-\\frac{4km}{1 + 2k^2}\\right) + m^2 = 0$。\\n乘 $1 + 2k^2$: $(1 + k^2)(2m^2 - 8) - 4k^2m^2 + m^2(1 + 2k^2) = 0$。\\n展开: $2m^2 - 8 + 2k^2m^2 - 8k^2 - 4k^2m^2 + m^2 + 2k^2m^2 = 0$。\\n整理: $3m^2 - 8(k^2 + 1) = 0$，即 $3m^2 = 8(k^2 + 1)$。得证。\\n\\n(2) 判别式: $\\Delta = 16k^2m^2 - 4(1 + 2k^2)(2m^2 - 8) = 16k^2m^2 - 8m^2 + 32 - 16k^2m^2 + 32k^2 = 32(k^2 + 1) - 8m^2$。\\n代入 $m^2 = \\frac{8}{3}(k^2 + 1)$: $\\Delta = 32(k^2+1) - \\frac{64}{3}(k^2+1) = \\frac{32}{3}(k^2 + 1) > 0$ 恒成立。\\n$|PQ| = \\sqrt{1 + k^2} \\cdot \\frac{\\sqrt{\\Delta}}{1 + 2k^2} = \\sqrt{1 + k^2} \\cdot \\frac{\\sqrt{\\frac{32}{3}(1 + k^2)}}{1 + 2k^2} = \\frac{4\\sqrt{2}(1 + k^2)}{\\sqrt{3}(1 + 2k^2)}$。\\n$O$ 到 $l$ 的距离 $d = \\frac{|m|}{\\sqrt{1 + k^2}} = \\frac{\\sqrt{\\frac{8}{3}(1 + k^2)}}{\\sqrt{1 + k^2}} = \\sqrt{\\frac{8}{3}} = \\frac{2\\sqrt{6}}{3}$（恰好为常数！）。\\n$S = \\frac{1}{2}|PQ| \\cdot d = \\frac{1}{2} \\cdot \\frac{4\\sqrt{2}(1 + k^2)}{\\sqrt{3}(1 + 2k^2)} \\cdot \\frac{2\\sqrt{6}}{3} = \\frac{8(1 + k^2)}{3(1 + 2k^2)}$。\\n令 $t = k^2 \\in [0, +\\infty)$，$S(t) = \\frac{8(1 + t)}{3(1 + 2t)}$。$S^\\prime(t) = \\frac{8(1 + 2t) - 8(1 + t) \\cdot 2}{3(1 + 2t)^2} = \\frac{-8}{3(1 + 2t)^2} < 0$。\\n$S(t)$ 在 $[0, +\\infty)$ 上递减，$S(0) = \\frac{8}{3}$，$\\lim_{t \\to +\\infty} S(t) = \\frac{8}{3} \\cdot \\frac{1}{2} = \\frac{4}{3}$。\\n当 $k = 0$ 时 $m = \\pm\\frac{2\\sqrt{6}}{3}$，$l$ 为水平线，$S = \\frac{8}{3}$。当 $k \\to \\infty$ 时 $S \\to \\frac{4}{3}$（趋向极限但不取到）。\\n故 $S \\in (\\frac{4}{3}, \\frac{8}{3}]$。',
    tags: ['垂直', '弦长', '面积', '定值', '范围'],
  },
];

export default questions3_4;
