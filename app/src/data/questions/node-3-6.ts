import type { Question, ChoiceQuestion } from '../../types';

const questions3_6: (Question | ChoiceQuestion)[] = [
  // ===== 难度 1：基础巩固 =====
  {
    id: '3.6-easy-1',
    nodeId: '3.6',
    difficulty: 1,
    type: 'fill',
    content: '已知椭圆 $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$，$A(-3, 0), B(3, 0)$ 为其左、右顶点。$P$ 是椭圆上异于 $A, B$ 的任意一点，则 $k_{PA} \\cdot k_{PB} = \\underline{\\qquad}$。',
    answer: '$-\\frac{4}{9}$',
    solution: '设 $P(x, y)$ 在椭圆上，则 $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$，即 $y^2 = 4\\left(1 - \\frac{x^2}{9}\\right) = \\frac{4(9 - x^2)}{9}$。$k_{PA} = \\frac{y}{x + 3}$，$k_{PB} = \\frac{y}{x - 3}$。$k_{PA} \\cdot k_{PB} = \\frac{y^2}{(x + 3)(x - 3)} = \\frac{y^2}{x^2 - 9} = \\frac{4(9 - x^2)}{9(x^2 - 9)} = -\\frac{4}{9}$。\n\n注意：椭圆上任意一点（非顶点）与两顶点连线的斜率之积恒为 $-\\frac{b^2}{a^2}$，这是椭圆的一个重要定值性质。',
    tags: ['定值', '斜率之积', '顶点'],
  },
  {
    id: '3.6-easy-2',
    nodeId: '3.6',
    difficulty: 1,
    type: 'choice',
    content: '已知椭圆 $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$（$a > b > 0$），$A(-a, 0), B(a, 0)$ 为左、右顶点，$P$ 为椭圆上异于 $A, B$ 的任意一点。与 $k_{PA} \\cdot k_{PB}$ 的值相等的是：',
    options: [
      '$\\frac{b^2}{a^2}$',
      '$-\\frac{b^2}{a^2}$',
      '$\\frac{a^2}{b^2}$',
      '$-\\frac{a^2}{b^2}$',
    ],
    answer: 'B',
    solution: '由椭圆方程 $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ 得 $y^2 = b^2\\left(1 - \\frac{x^2}{a^2}\\right) = \\frac{b^2(a^2 - x^2)}{a^2}$。$k_{PA} \\cdot k_{PB} = \\frac{y}{x + a} \\cdot \\frac{y}{x - a} = \\frac{y^2}{x^2 - a^2} = \\frac{b^2(a^2 - x^2)}{a^2(x^2 - a^2)} = -\\frac{b^2}{a^2}$。该定值仅与椭圆的形状参数 $a, b$ 有关，与点 $P$ 的位置无关。',
    tags: ['定值', '顶点', '斜率之积'],
  } as ChoiceQuestion,
  {
    id: '3.6-easy-3',
    nodeId: '3.6',
    difficulty: 1,
    type: 'fill',
    content: '已知椭圆 $\\frac{x^2}{4} + \\frac{y^2}{3} = 1$，$P$ 是椭圆上任意一点，$F_1, F_2$ 为左、右焦点。则 $|PF_1|^2 + |PF_2|^2$ 的取值范围是 $\\underline{\\qquad}$。',
    answer: '$[8, 10]$',
    solution: '由椭圆方程得 $a = 2$，$c = 1$，离心率 $e = \\frac{1}{2}$。由焦半径公式：$|PF_1| = a + ex = 2 + \\frac{x}{2}$，$|PF_2| = a - ex = 2 - \\frac{x}{2}$。$|PF_1|^2 + |PF_2|^2 = \\left(2 + \\frac{x}{2}\\right)^2 + \\left(2 - \\frac{x}{2}\\right)^2 = 8 + \\frac{x^2}{2}$。$x \\in [-2, 2]$，故 $\\frac{x^2}{2} \\in [0, 2]$，取值范围为 $[8, 10]$。当 $P$ 在 $y$ 轴上时取最小值 $8$，当 $P$ 在左或右顶点时取最大值 $10$。',
    tags: ['最值', '焦半径', '范围'],
  },

  // ===== 难度 2：综合 =====
  {
    id: '3.6-mid-1',
    nodeId: '3.6',
    difficulty: 2,
    type: 'calculation',
    content: '已知椭圆 $C: \\frac{x^2}{4} + \\frac{y^2}{3} = 1$，右焦点为 $F(1, 0)$。过 $F$ 作斜率为 $k$ 的动直线 $l$ 交 $C$ 于 $A, B$ 两点（$A, B$ 不重合）。\n\n(1) 用 $k$ 和定点 $M(m, 0)$（$m$ 待定）表示 $k_{MA} + k_{MB}$；\n(2) 在 $x$ 轴上是否存在定点 $M$，使得 $k_{MA} + k_{MB} = 0$ 对任意 $k$ 恒成立？若存在，求出点 $M$ 的坐标并证明；若不存在，请说明理由。',
    answer: '存在，$M(4, 0)$',
    solution: '(1) 设 $l: y = k(x - 1)$。联立椭圆：$3x^2 + 4k^2(x - 1)^2 = 12$，得 $(3 + 4k^2)x^2 - 8k^2x + (4k^2 - 12) = 0$。由韦达定理：$x_1 + x_2 = \\frac{8k^2}{3 + 4k^2}$，$x_1x_2 = \\frac{4k^2 - 12}{3 + 4k^2}$。\n\n$k_{MA} = \\frac{y_1}{x_1 - m} = \\frac{k(x_1 - 1)}{x_1 - m}$，同理 $k_{MB} = \\frac{k(x_2 - 1)}{x_2 - m}$。\n\n$k_{MA} + k_{MB} = k \\cdot \\frac{(x_1 - 1)(x_2 - m) + (x_2 - 1)(x_1 - m)}{(x_1 - m)(x_2 - m)}$。分子展开：$(x_1 - 1)(x_2 - m) + (x_2 - 1)(x_1 - m) = 2x_1x_2 - (m + 1)(x_1 + x_2) + 2m$。\n\n代入韦达结果：$2 \\cdot \\frac{4k^2 - 12}{3 + 4k^2} - (m + 1) \\cdot \\frac{8k^2}{3 + 4k^2} + 2m = 0$（令分子 $= 0$）。\n乘 $3 + 4k^2$：$8k^2 - 24 - 8(m + 1)k^2 + 2m(3 + 4k^2) = 0$。整理：$[8 - 8(m + 1) + 8m]k^2 + (6m - 24) = 0$。$k^2$ 的系数 $8 - 8m - 8 + 8m = 0$ 恒为零！故条件简化为 $6m - 24 = 0$，得 $m = 4$。\n\n(2) 当 $M(4, 0)$ 时，$k_{MA} + k_{MB} = 0$ 对任意 $k$ 恒成立。$M(4, 0)$ 恰好是右准线 $x = \\frac{a^2}{c} = 4$ 与 $x$ 轴的交点。这一性质是椭圆的光学性质的体现：焦点关于准线的反射性质。',
    tags: ['定点', '准线', '斜率之和', '动直线'],
  },

  // ===== 难度 3：压轴 =====
  {
    id: '3.6-hard-1',
    nodeId: '3.6',
    difficulty: 3,
    type: 'calculation',
    content: '已知椭圆 $C: \\frac{x^2}{4} + \\frac{y^2}{3} = 1$，$O$ 为坐标原点。$A, B$ 是椭圆上两点，且满足 $OA \\perp OB$。\n\n(1) 求证：$\\frac{1}{|OA|^2} + \\frac{1}{|OB|^2}$ 为定值，并求出这个定值；\n(2) 求 $\\triangle OAB$ 面积的最小值。',
    answer: '$\\frac{7}{12}$; $\\frac{12}{7}$',
    solution: '(1) 设 $OA$ 的斜率为 $k$，则 $OB$ 的斜率为 $-\\frac{1}{k}$（$OA \\perp OB$）。直线 $y = kx$ 与椭圆联立：$\\frac{x^2}{4} + \\frac{k^2x^2}{3} = 1$，得 $x^2 = \\frac{12}{3 + 4k^2}$。$|OA|^2 = x^2 + k^2x^2 = x^2(1 + k^2) = \\frac{12(1 + k^2)}{3 + 4k^2}$。故 $\\frac{1}{|OA|^2} = \\frac{3 + 4k^2}{12(1 + k^2)}$。\n\n同理，将 $k$ 换为 $-\\frac{1}{k}$：$\\frac{1}{|OB|^2} = \\frac{3 + 4/k^2}{12(1 + 1/k^2)} = \\frac{3k^2 + 4}{12(k^2 + 1)}$。\n\n相加：$\\frac{1}{|OA|^2} + \\frac{1}{|OB|^2} = \\frac{3 + 4k^2 + 3k^2 + 4}{12(1 + k^2)} = \\frac{7(1 + k^2)}{12(1 + k^2)} = \\frac{7}{12}$，为定值。\n\n(2) $S_{\\triangle OAB} = \\frac{1}{2}|OA| \\cdot |OB|$。令 $u = k^2 \\ge 0$，由 (1) 知：$|OA|^2 = \\frac{12(1 + u)}{3 + 4u}$，$|OB|^2 = \\frac{12(1 + u)}{3u + 4}$。\n\n$S^2 = \\frac{1}{4}|OA|^2 \\cdot |OB|^2 = 36 \\cdot \\frac{(1 + u)^2}{(3 + 4u)(3u + 4)}$。令 $f(u) = \\frac{(1 + u)^2}{(4u + 3)(3u + 4)} = \\frac{u^2 + 2u + 1}{12u^2 + 25u + 12}$。\n\n求导：$f\'(u) = \\frac{(2u + 2)(12u^2 + 25u + 12) - (u^2 + 2u + 1)(24u + 25)}{(12u^2 + 25u + 12)^2}$。分子化简：$(24u^3 + 74u^2 + 74u + 24) - (24u^3 + 73u^2 + 74u + 25) = u^2 - 1$。\n\n$f\'(u) = 0$ 得 $u = 1$（$u \\ge 0$）。$f(1) = \\frac{4}{49}$，$S^2_{\\min} = 36 \\cdot \\frac{4}{49} = \\frac{144}{49}$，$S_{\\min} = \\frac{12}{7}$。\n\n当 $k = \\pm 1$ 时取得最小值，此时 $OA$ 与 $OB$ 的倾斜角分别为 $45^\\circ$ 和 $135^\\circ$，两直线关于 $x$ 轴和 $y$ 轴对称。',
    tags: ['定值', '垂直', '面积最值', '导数求最值'],
  },
];

export default questions3_6;
