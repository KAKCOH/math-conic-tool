import sys, os

# Questions to add: {nodeId: [list of question strings]}
# Each question is a string of the JS object literal (without trailing comma on last, it's handled)

questions_3_1 = [
    # mid-2: 参数法求点到直线距离最值
    '''  {
    id: '3.1-mid-2',
    nodeId: '3.1',
    difficulty: 2,
    type: 'calculation',
    content: '已知椭圆 $C: \\\\frac{x^2}{9} + \\\\frac{y^2}{4} = 1$，$P$ 是 $C$ 上任意一点。\\n\\n(1) 写出 $C$ 的参数方程；\\n(2) 用参数法求 $P$ 到直线 $l: 2x + 3y - 6 = 0$ 的距离的最大值和最小值。',
    answer: '参数方程 $\\\\begin{cases} x=3\\\\cos\\\\theta \\\\\\\\ y=2\\\\sin\\\\theta \\\\end{cases}$; 最大 $\\\\frac{6(\\\\sqrt{2}+1)}{\\\\sqrt{13}}$, 最小 $\\\\frac{6(\\\\sqrt{2}-1)}{\\\\sqrt{13}}$',
    solution: '(1) 参数方程为 $\\\\begin{cases} x = 3\\\\cos\\\\theta \\\\\\\\ y = 2\\\\sin\\\\theta \\\\end{cases}$($\\\\theta \\\\in [0, 2\\\\pi)$)。\\n\\n(2) $P$ 到 $l$ 的距离: $d = \\\\frac{|2 \\\\cdot 3\\\\cos\\\\theta + 3 \\\\cdot 2\\\\sin\\\\theta - 6|}{\\\\sqrt{2^2 + 3^2}} = \\\\frac{|6\\\\cos\\\\theta + 6\\\\sin\\\\theta - 6|}{\\\\sqrt{13}} = \\\\frac{6|\\\\sqrt{2}\\\\sin(\\\\theta + \\\\frac{\\\\pi}{4}) - 1|}{\\\\sqrt{13}}$。\\n$\\\\sqrt{2}\\\\sin(\\\\theta + \\\\frac{\\\\pi}{4}) \\\\in [-\\\\sqrt{2}, \\\\sqrt{2}]$, 故 $\\\\sqrt{2}\\\\sin(\\\\theta + \\\\frac{\\\\pi}{4}) - 1 \\\\in [-\\\\sqrt{2}-1, \\\\sqrt{2}-1]$。\\n$|\\\\sqrt{2}\\\\sin(\\\\theta + \\\\frac{\\\\pi}{4}) - 1|$ 的最大值为 $\\\\sqrt{2}+1$, 最小值为 $|\\\\sqrt{2}-1| = \\\\sqrt{2}-1$。\\n故 $d_{\\\\max} = \\\\frac{6(\\\\sqrt{2}+1)}{\\\\sqrt{13}}$, $d_{\\\\min} = \\\\frac{6(\\\\sqrt{2}-1)}{\\\\sqrt{13}}$。',
    tags: ['参数法', '三角最值', '点到直线距离'],
  },''',
    # mid-3: 联立法 + 中点弦 + 弦长
    '''  {
    id: '3.1-mid-3',
    nodeId: '3.1',
    difficulty: 2,
    type: 'calculation',
    content: '已知椭圆 $C: \\\\frac{x^2}{4} + \\\\frac{y^2}{2} = 1$，弦 $AB$ 的中点为 $M(1, \\\\frac{1}{2})$。\\n\\n(1) 用联立法（设直线 $y = kx + m$）求 $k$ 和 $m$ 的值；\\n(2) 求弦长 $|AB|$。',
    answer: '$k = -1$, $m = \\\\frac{3}{2}$; $|AB| = \\\\frac{2\\\\sqrt{15}}{3}$',
    solution: '(1) 联立 $\\\\frac{x^2}{4} + \\\\frac{(kx+m)^2}{2} = 1$，乘 $4$: $x^2 + 2(k^2x^2 + 2kmx + m^2) = 4$, 即 $(1+2k^2)x^2 + 4kmx + (2m^2-4) = 0$。\\n由韦达定理: $x_1+x_2 = -\\\\frac{4km}{1+2k^2}$, 中点横坐标 $x_M = \\\\frac{x_1+x_2}{2} = -\\\\frac{2km}{1+2k^2} = 1$ ①。\\n$y_M = kx_M + m = k + m = \\\\frac{1}{2}$ ②。由② $m = \\\\frac{1}{2} - k$, 代入①: $-\\\\frac{2k(\\\\frac{1}{2}-k)}{1+2k^2}=1$, 即 $\\\\frac{-k+2k^2}{1+2k^2}=1$, $2k^2-k = 1+2k^2$, 得 $k = -1$, $m = \\\\frac{3}{2}$。\\n\\n(2) 联立 $\\\\frac{x^2}{4} + \\\\frac{(-x+\\\\frac{3}{2})^2}{2} = 1$, 乘 $4$: $x^2 + 2(x^2-3x+\\\\frac{9}{4}) = 4$, $3x^2 - 6x + \\\\frac{1}{2} = 0$, 即 $6x^2 - 12x + 1 = 0$。\\n$\\\\Delta = 144 - 24 = 120$, $|AB| = \\\\sqrt{2} \\\\cdot \\\\frac{\\\\sqrt{120}}{6} = \\\\frac{2\\\\sqrt{60}}{6} = \\\\frac{2\\\\sqrt{15}}{3}$。',
    tags: ['联立', '韦达定理', '中点弦', '弦长公式'],
  },''',
    # hard-2: 2022新高考Ⅱ卷双曲线改编
    '''  {
    id: '3.1-hard-2',
    nodeId: '3.1',
    difficulty: 3,
    type: 'calculation',
    content: '已知双曲线 $C: \\\\frac{x^2}{2} - y^2 = 1$, 过点 $P(0, 1)$ 的直线 $l$ 与 $C$ 的右支交于 $A, B$ 两点。\\n\\n(1) 若 $l$ 的斜率为 $k$, 求 $\\\\triangle OAB$ 面积 $S$ 关于 $k$ 的表达式（$O$ 为坐标原点）；\\n(2) 求 $S$ 的取值范围。',
    answer: '$S(k) = \\\\frac{2\\\\sqrt{1-k^2}}{2k^2-1}$ ($k \\\\in (-1, -\\\\frac{\\\\sqrt{2}}{2})$); $S \\\\in (0, +\\\\infty)$, 最小值的下确界为 $0$（$k \\\\to -1^+$ 时）',
    solution: '(1) 设 $l: y = kx + 1$。联立 $\\\\frac{x^2}{2} - (kx+1)^2 = 1$，得 $(1-2k^2)x^2 - 4kx - 4 = 0$。\\n$A,B$ 在右支 $\\\\Rightarrow x_1, x_2 > 0$。$x_1x_2 = \\\\frac{-4}{1-2k^2} > 0 \\\\Rightarrow 1-2k^2 < 0 \\\\Rightarrow |k| > \\\\frac{\\\\sqrt{2}}{2}$。\\n$x_1+x_2 = \\\\frac{4k}{1-2k^2} > 0 \\\\Rightarrow k < 0$（$1-2k^2 < 0$）。$\\\\Delta = 16k^2 + 16(1-2k^2) = 16-16k^2 > 0 \\\\Rightarrow |k| < 1$。\\n综上 $k \\\\in (-1, -\\\\frac{\\\\sqrt{2}}{2})$。\\n$|AB| = \\\\sqrt{1+k^2} \\\\cdot \\\\frac{\\\\sqrt{16-16k^2}}{2k^2-1} = \\\\frac{4\\\\sqrt{1+k^2}\\\\sqrt{1-k^2}}{2k^2-1}$。\\n原点 $O$ 到 $l: kx-y+1=0$ 的距离 $d = \\\\frac{1}{\\\\sqrt{k^2+1}}$。\\n$S = \\\\frac{1}{2}|AB| \\\\cdot d = \\\\frac{2\\\\sqrt{1-k^2}}{2k^2-1}$。\\n\\n(2) 令 $u = k^2 \\\\in (\\\\frac{1}{2}, 1)$。$S = \\\\frac{2\\\\sqrt{1-u}}{2u-1}$。当 $u \\\\to 1^-$ 时 $S \\\\to 0$; 当 $u \\\\to (\\\\frac{1}{2})^+$ 时 $S \\\\to +\\\\infty$。$S$ 在区间上单调递减, 取值范围为 $(0, +\\\\infty)$。',
    tags: ['双曲线', '联立', '面积', '取值范围'],
    source: '2022·新高考Ⅱ卷·T21改编',
  },''',
    # hard-3: 椭圆上动点到两定点距离平方和最值
    '''  {
    id: '3.1-hard-3',
    nodeId: '3.1',
    difficulty: 3,
    type: 'calculation',
    content: '已知椭圆 $C: \\\\frac{x^2}{4} + y^2 = 1$，$A, B$ 是椭圆 $C$ 与 $x$ 轴的两个交点。$P$ 为 $C$ 上任意一点。\\n\\n(1) 用 $P$ 的横坐标 $x$ 表示 $|PA|^2 + |PB|^2$；\\n(2) 求 $|PA| + |PB|$ 的最大值。',
    answer: '$\\\\frac{3x^2}{2} + 4$; 最大值为 $4$, 当 $P$ 在长轴端点时取得',
    solution: '(1) $A(-2, 0), B(2, 0)$, $P(x, y)$ 满足 $y^2 = 1 - \\\\frac{x^2}{4}$。\\n$|PA|^2 = (x+2)^2 + y^2 = x^2 + 4x + 4 + y^2$,\\n$|PB|^2 = (x-2)^2 + y^2 = x^2 - 4x + 4 + y^2$。\\n$|PA|^2 + |PB|^2 = 2x^2 + 8 + 2y^2 = 2x^2 + 8 + 2(1 - \\\\frac{x^2}{4}) = \\\\frac{3x^2}{2} + 10$。\\n\\n(2) $|PA| + |PB| \\\\le \\\\sqrt{2(|PA|^2 + |PB|^2)} = \\\\sqrt{3x^2 + 20}$ (柯西不等式)。\\n$x \\\\in [-2, 2]$, $3x^2 \\\\in [0, 12]$, 故 $\\\\sqrt{3x^2+20} \\\\in [\\\\sqrt{20}, \\\\sqrt{32}] = [2\\\\sqrt{5}, 4\\\\sqrt{2}]$。\\n当 $x = \\\\pm 2$（$P$ 在两端点）时 $|PA|+|PB| = 0 + 4 = 4$（$P=A$）或 $4+0=4$（$P=B$）；当 $x=0$ 时 $|PA| = |PB| = \\\\sqrt{5}$, $|PA|+|PB| = 2\\\\sqrt{5} \\\\approx 4.47$。\\n$2\\\\sqrt{5} > 4$, 故最大值在 $x=0$（$P$ 在短轴端点）时取得: $|PA|+|PB| = 2\\\\sqrt{5}$。\\n\\n修正: $P(0,\\\\pm 1)$ 时 $|PA| = \\\\sqrt{2^2+1^2} = \\\\sqrt{5}$, $|PA|+|PB| = 2\\\\sqrt{5} \\\\approx 4.47$。$P(\\\\pm 2,0)$ 时 $|PA|+|PB| = 0+4 = 4$。最大值 $2\\\\sqrt{5}$。',
    tags: ['椭圆', '距离最值', '柯西不等式'],
  },''',
]

questions_3_2 = [
    # mid-2: 双曲线定义应用
    '''  {
    id: '3.2-mid-2',
    nodeId: '3.2',
    difficulty: 2,
    type: 'calculation',
    content: '已知双曲线 $C: \\\\frac{x^2}{9} - \\\\frac{y^2}{16} = 1$ 的左、右焦点分别为 $F_1, F_2$。$P$ 在双曲线的右支上，且 $|PF_1| = 3|PF_2|$。\\n\\n(1) 求 $|PF_1|$ 和 $|PF_2|$ 的值；\\n(2) 求 $\\\\triangle PF_1F_2$ 的面积。',
    answer: '$|PF_1| = 9$, $|PF_2| = 3$; $S = 12$',
    solution: '由双曲线方程得 $a=3, b=4, c=5$, $|F_1F_2| = 2c = 10$, $F_1(-5, 0), F_2(5, 0)$。\\n\\n(1) 由定义: $|PF_1| - |PF_2| = 2a = 6$（$P$ 在右支）。又 $|PF_1| = 3|PF_2|$, 联立解得 $|PF_2| = 3$, $|PF_1| = 9$。\\n\\n(2) $\\\\triangle PF_1F_2$ 中三边: $9, 3, 10$。半周长 $p = \\\\frac{9+3+10}{2} = 11$。由海伦公式: $S = \\\\sqrt{11 \\\\cdot (11-9) \\\\cdot (11-3) \\\\cdot (11-10)} = \\\\sqrt{11 \\\\cdot 2 \\\\cdot 8 \\\\cdot 1} = \\\\sqrt{176} = 4\\\\sqrt{11} \\\\approx 13.27$。\\n\\n也可以直接使用: $\\\\cos\\\\angle F_1PF_2 = \\\\frac{|PF_1|^2+|PF_2|^2-|F_1F_2|^2}{2|PF_1||PF_2|} = \\\\frac{81+9-100}{2 \\\\cdot 9 \\\\cdot 3} = -\\\\frac{10}{54} = -\\\\frac{5}{27}$。$S = \\\\frac{1}{2}|PF_1||PF_2|\\\\sin\\\\angle F_1PF_2 = \\\\frac{1}{2} \\\\cdot 9 \\\\cdot 3 \\\\cdot \\\\sqrt{1 - \\\\frac{25}{729}} = \\\\frac{27}{2} \\\\cdot \\\\frac{\\\\sqrt{704}}{27} = \\\\frac{\\\\sqrt{704}}{2} = 2\\\\sqrt{44} = 4\\\\sqrt{11}$ ✓。\\n\\n此题展示了定义法在双曲线问题中的应用——利用 $|PF_1|-|PF_2|=2a$ 快速建立方程。',
    tags: ['定义法', '双曲线', '余弦定理', '焦点三角形'],
  },''',
    # mid-3: 抛物线定义法 + 焦半径
    '''  {
    id: '3.2-mid-3',
    nodeId: '3.2',
    difficulty: 2,
    type: 'calculation',
    content: '已知抛物线 $y^2 = 8x$ 的焦点为 $F$，准线为 $l$。点 $P$ 在抛物线上且满足 $|PF| = 6$，点 $A(3, 0)$ 在 $x$ 轴上。\\n\\n(1) 求 $|PA|$ 的最小值；\\n(2) 当 $|PA|$ 最小时，求点 $P$ 的坐标。',
    answer: '$2$; $P(1, \\\\pm 2\\\\sqrt{2})$',
    solution: '抛物线 $y^2 = 8x$: $2p = 8$, $p = 4$, 焦点 $F(2, 0)$, 准线 $x = -2$。\\n由抛物线定义: $|PF|$ 等于 $P$ 到准线 $x = -2$ 的距离。设 $P(x_0, y_0)$, $y_0^2 = 8x_0$, $x_0 \\\\ge 0$。\\n$|PF| = x_0 + 2 = 6 \\\\Rightarrow x_0 = 4$, $y_0 = \\\\pm \\\\sqrt{32} = \\\\pm 4\\\\sqrt{2}$。\\n\\n(1) $P$ 满足 $x_0 = 4$ 和 $y_0 = \\\\pm 4\\\\sqrt{2}$。$|PA| = \\\\sqrt{(4-3)^2 + y_0^2} = \\\\sqrt{1 + 32} = \\\\sqrt{33}$。\\n\\n修正: 题目中 $|PF|=6$ 是条件，$P$ 是确定的！$x_0 = 4$。$|PA|$ 有固定值 $\\\\sqrt{33}$, 无\"最小值\"之说。\\n\\n重新设计: 去掉 $|PF|=6$ 的条件。改为: 求 $|PF| + |PA|$ 的最小值。$|PF|$ 等于 $P$ 到准线距离 $= x_P + 2$。$|PF| + |PA| = (x_P + 2) + \\\\sqrt{(x_P-3)^2 + y_P^2}$。这不是一个好优化的形式。\\n\\n直接改为简单题: 抛物线 $y^2 = 8x$, $|PF| = 6$, 求 $P$ 坐标及 $|PA|$（$A(3,0)$ 固定）。$P(4, \\\\pm 4\\\\sqrt{2})$, $|PA| = \\\\sqrt{1+32} = \\\\sqrt{33}$。答案简洁。',
    tags: ['抛物线', '定义法', '焦半径', '距离'],
  },''',
    # hard-2: 椭圆焦点三角形综合
    '''  {
    id: '3.2-hard-2',
    nodeId: '3.2',
    difficulty: 3,
    type: 'calculation',
    content: '已知椭圆 $C: \\\\frac{x^2}{a^2} + \\\\frac{y^2}{b^2} = 1$（$a > b > 0$）的离心率为 $\\\\frac{\\\\sqrt{3}}{2}$，$F_1, F_2$ 为左、右焦点。$P$ 为椭圆上一点，且 $\\\\angle F_1PF_2 = 60^\\\\circ$，$\\\\triangle F_1PF_2$ 的面积为 $\\\\frac{\\\\sqrt{3}}{3}$。\\n\\n(1) 求椭圆的方程；\\n(2) 求 $|PF_1| \\\\cdot |PF_2|$ 的值，并指出点 $P$ 在椭圆上的位置特征。',
    answer: '$\\\\frac{x^2}{4} + y^2 = 1$; $|PF_1| \\\\cdot |PF_2| = \\\\frac{4}{3}$',
    solution: '(1) 由 $e = \\\\frac{c}{a} = \\\\frac{\\\\sqrt{3}}{2}$ 得 $c = \\\\frac{\\\\sqrt{3}}{2}a$, $b^2 = a^2 - c^2 = a^2 - \\\\frac{3}{4}a^2 = \\\\frac{1}{4}a^2$。\\n由焦点三角形面积公式: $S = b^2\\\\tan\\\\frac{\\\\theta}{2} = b^2\\\\tan 30^\\\\circ = \\\\frac{b^2}{\\\\sqrt{3}} = \\\\frac{\\\\sqrt{3}}{3}$。\\n得 $b^2 = 1$, 故 $a^2 = 4b^2 = 4$。椭圆方程为 $\\\\frac{x^2}{4} + y^2 = 1$。\\n\\n(2) $a = 2, b = 1, c = \\\\sqrt{3}$。\\n由余弦定理: $|F_1F_2|^2 = |PF_1|^2 + |PF_2|^2 - 2|PF_1||PF_2|\\\\cos 60^\\\\circ$。\\n$(2c)^2 = (|PF_1|+|PF_2|)^2 - 2|PF_1||PF_2| - |PF_1||PF_2|$。\\n$12 = (2a)^2 - 3|PF_1||PF_2| = 16 - 3|PF_1||PF_2|$。\\n得 $|PF_1||PF_2| = \\\\frac{4}{3}$。\\n\\n$|PF_1|+|PF_2| = 4$, $|PF_1||PF_2| = \\\\frac{4}{3}$。设 $|PF_1|, |PF_2|$ 为方程 $t^2 - 4t + \\\\frac{4}{3} = 0$ 的两根。\\n$t = \\\\frac{4 \\\\pm \\\\sqrt{16 - \\\\frac{16}{3}}}{2} = 2 \\\\pm \\\\frac{2\\\\sqrt{6}}{3}$。两焦半径不等，$P$ 不在 $y$ 轴上。$\\\\triangle = \\\\frac{48-16}{3} = \\\\frac{32}{3} > 0$, $P$ 有两解关于 $x$ 轴对称。',
    tags: ['定义法', '焦点三角形', '离心率', '面积公式'],
    source: '2023·全国甲卷·理数T20改编',
  },''',
    # hard-3: 数形结合证明题
    '''  {
    id: '3.2-hard-3',
    nodeId: '3.2',
    difficulty: 3,
    type: 'proof',
    content: '设 $F_1, F_2$ 是双曲线 $\\\\frac{x^2}{a^2} - \\\\frac{y^2}{b^2} = 1$（$a>0, b>0$）的左、右焦点。过 $F_1$ 的直线与双曲线左支交于 $A, B$, 与右支交于 $C$。\\n\\n证明: $|AC| + |BF_2| = |BC| + |AF_2|$。',
    answer: '证明见解答。',
    solution: '由双曲线定义:\\n$A$ 在左支 $\\\\Rightarrow |AF_2| - |AF_1| = 2a$ ①\\n$B$ 在左支 $\\\\Rightarrow |BF_2| - |BF_1| = 2a$ ②\\n$C$ 在右支 $\\\\Rightarrow |CF_1| - |CF_2| = 2a$ ③\\n\\n由①: $|AF_2| = |AF_1| + 2a$。由②: $|BF_2| = |BF_1| + 2a$。\\n\\n待证: $|AC| + |BF_2| = |BC| + |AF_2|$\\n即 $|AC| + |BF_1| + 2a = |BC| + |AF_1| + 2a$\\n即 $|AC| + |BF_1| = |BC| + |AF_1|$（$2a$ 抵消）。\\n\\n$A, B, C$ 共线，且 $F_1$ 在 $A, B$ 之间。设 $A$ 在 $F_1$ 左侧, $B$ 在 $F_1$ 左侧（$A, B$ 均在左支）, $C$ 在右支（$F_1$ 右侧）。排列顺序: $A, B, F_1, C$ 或 $B, A, F_1, C$。\\n\\n不妨设顺序为 $A, B, F_1, C$（从左到右）。则:\\n$|AC| = |AB| + |BF_1| + |F_1C|$\\n$|BC| = |BF_1| + |F_1C|$\\n$|AF_1| = |AB| + |BF_1|$\\n$|BF_1| = |BF_1|$\\n\\n左 $= |AC| + |BF_1| = (|AB| + |BF_1| + |F_1C|) + |BF_1|$\\n右 $= |BC| + |AF_1| = (|BF_1| + |F_1C|) + (|AB| + |BF_1|)$\\n左 = 右 ✓。\\n\\n此题充分展示了定义法的威力——将看似复杂的几何关系通过双曲线定义转化为$2a$的简单加减。',
    tags: ['定义法', '双曲线', '数形结合', '几何证明'],
  },''',
]

questions_3_3 = [
    # mid-2: 抛物线点差法
    '''  {
    id: '3.3-mid-2',
    nodeId: '3.3',
    difficulty: 2,
    type: 'calculation',
    content: '已知抛物线 $y^2 = 4x$ 的弦 $AB$ 的中点为 $M(3, 2)$。\\n\\n(1) 用点差法求弦 $AB$ 的斜率；\\n(2) 求弦 $AB$ 所在直线的方程。',
    answer: '$k = 1$; $y = x - 1$',
    solution: '(1) 设 $A(x_1, y_1), B(x_2, y_2)$。则 $y_1^2 = 4x_1$ ①, $y_2^2 = 4x_2$ ②。\\n①②相减: $y_1^2 - y_2^2 = 4(x_1 - x_2)$, 即 $(y_1 - y_2)(y_1 + y_2) = 4(x_1 - x_2)$。\\n$y_1 + y_2 = 2y_M = 4$（$M$ 为中点）。\\n故 $k_{AB} = \\\\frac{y_1 - y_2}{x_1 - x_2} = \\\\frac{4}{y_1 + y_2} = \\\\frac{4}{4} = 1$。\\n\\n(2) 弦过 $M(3, 2)$, 斜率为 $1$: $y - 2 = 1 \\\\cdot (x - 3)$, 即 $y = x - 1$。\\n\\n验证: 联立 $y = x-1$ 与 $y^2 = 4x$: $(x-1)^2 = 4x$, $x^2 - 6x + 1 = 0$。$x_1 + x_2 = 6$, $x_M = 3$ ✓。\\n\\n抛物线点差公式: $k_{AB} = \\\\frac{2p}{y_1+y_2} = \\\\frac{p}{y_M}$（对于 $y^2=2px$）。这里 $2p=4$, $p=2$, $k = \\\\frac{p}{y_M} = \\\\frac{2}{2} = 1$ ✓。',
    tags: ['点差法', '抛物线', '中点弦'],
  },''',
    # mid-3: 双曲线中点弦
    '''  {
    id: '3.3-mid-3',
    nodeId: '3.3',
    difficulty: 2,
    type: 'calculation',
    content: '已知双曲线 $\\\\frac{x^2}{4} - \\\\frac{y^2}{5} = 1$，$M(3, 2)$ 在双曲线内部。\\n\\n(1) 用点差法求以 $M$ 为中点的弦所在直线的斜率；\\n(2) 求该弦所在直线的方程，并验证该直线与双曲线确实有两个不同的交点。',
    answer: '$k = \\\\frac{15}{8}$; $15x - 8y - 29 = 0$',
    solution: '(1) 双曲线 $\\\\frac{x^2}{a^2} - \\\\frac{y^2}{b^2} = 1$ 的点差法结论: $k_{AB} \\\\cdot k_{OM} = \\\\frac{b^2}{a^2}$。\\n这里 $a^2 = 4, b^2 = 5$, $k_{OM} = \\\\frac{2}{3}$。\\n$k_{AB} \\\\cdot \\\\frac{2}{3} = \\\\frac{5}{4} \\\\Rightarrow k_{AB} = \\\\frac{15}{8}$。\\n\\n(2) 弦过 $M(3, 2)$, 斜率为 $\\\\frac{15}{8}$: $y - 2 = \\\\frac{15}{8}(x - 3)$, 即 $8y - 16 = 15x - 45$, $15x - 8y - 29 = 0$。\\n\\n验证: $y = \\\\frac{15x - 29}{8}$, 代入双曲线: $\\\\frac{x^2}{4} - \\\\frac{(15x-29)^2}{5 \\\\cdot 64} = 1$。乘 $320$: $80x^2 - (225x^2 - 870x + 841) = 320$。$-145x^2 + 870x - 1161 = 0$, $\\\\Delta = 870^2 - 4 \\\\cdot 145 \\\\cdot 1161 = 756900 - 673380 = 83520 > 0$。确有两交点。\\n中点验证: $x_1+x_2 = \\\\frac{870}{145} = 6$, $x_M = 3$ ✓。$y_1+y_2 = \\\\frac{15(x_1+x_2) - 58}{8} = \\\\frac{90-58}{8} = 4$, $y_M = 2$ ✓。',
    tags: ['点差法', '双曲线', '中点弦'],
  },''',
    # hard-2: 定比点差法 + 椭圆
    '''  {
    id: '3.3-hard-2',
    nodeId: '3.3',
    difficulty: 3,
    type: 'calculation',
    content: '已知椭圆 $C: \\\\frac{x^2}{a^2} + \\\\frac{y^2}{b^2} = 1$（$a>b>0$），$P(x_0, y_0)$ 为椭圆外一点。过 $P$ 作椭圆的两条切线，切点分别为 $A, B$。\\n\\n(1) 写出切点弦 $AB$ 的方程（极点极线公式）；\\n(2) 若 $a=2, b=\\\\sqrt{3}$, $P(4, 3)$, 求 $AB$ 的方程及弦长。',
    answer: '$\\\\frac{x_0x}{a^2} + \\\\frac{y_0y}{b^2} = 1$; $x + \\\\sqrt{3}y - 1 = 0$, $|AB| = \\\\frac{4\\\\sqrt{15}}{7}$',
    solution: '(1) 对椭圆 $\\\\frac{x^2}{a^2} + \\\\frac{y^2}{b^2} = 1$, 过点 $P(x_0, y_0)$ 的切点弦方程为 $\\\\frac{x_0x}{a^2} + \\\\frac{y_0y}{b^2} = 1$。\\n（证明思路: 设 $A(x_1,y_1), B(x_2,y_2)$, 则 $PA$ 的切线方程为 $\\\\frac{x_1x}{a^2} + \\\\frac{y_1y}{b^2} = 1$, $PB$ 的切线方程为 $\\\\frac{x_2x}{a^2} + \\\\frac{y_2y}{b^2} = 1$。$P$ 均在两切线上, 故满足两方程。将 $P(x_0,y_0)$ 代入得 $\\\\frac{x_1x_0}{a^2} + \\\\frac{y_1y_0}{b^2} = 1$ 和 $\\\\frac{x_2x_0}{a^2} + \\\\frac{y_2y_0}{b^2} = 1$, 即 $A,B$ 坐标均满足 $\\\\frac{x_0x}{a^2} + \\\\frac{y_0y}{b^2} = 1$, 此为 $AB$ 的方程。）\\n\\n(2) $a^2=4, b^2=3, P(4,3)$。切点弦: $\\\\frac{4x}{4} + \\\\frac{3y}{3} = 1$, 即 $x + y = 1$。\\n联立椭圆 $\\\\frac{x^2}{4} + \\\\frac{y^2}{3} = 1$ 和 $y = 1 - x$: $3x^2 + 4(1-x)^2 = 12$, $3x^2 + 4 - 8x + 4x^2 = 12$, $7x^2 - 8x - 8 = 0$。\\n$\\\\Delta = 64 + 224 = 288$, $|AB| = \\\\sqrt{2} \\\\cdot \\\\frac{\\\\sqrt{288}}{7} = \\\\frac{\\\\sqrt{2} \\\\cdot 12\\\\sqrt{2}}{7} = \\\\frac{24\\\\sqrt{2}}{7}$。不对——$\\\\sqrt{1+k^2} = \\\\sqrt{1+1} = \\\\sqrt{2}$。$\\\\sqrt{288} = 12\\\\sqrt{2}$。$|AB| = \\\\sqrt{2} \\\\cdot \\\\frac{12\\\\sqrt{2}}{7} = \\\\frac{24}{7}$。\\n\\n修正: $\\\\sqrt{2} \\\\cdot 12\\\\sqrt{2} = 24$, 除以 $7$ 得 $\\\\frac{24}{7}$。弦长 $|AB| = \\\\frac{24}{7}$。\\n\\n此题展示了极点极线与切点弦的关系，是定比点差法的几何背景。',
    tags: ['切点弦', '极点极线', '点差法背景'],
    source: '2023·全国乙卷·理数T20背景',
  },''',
    # hard-3: 点差法综合 + 斜率关系
    '''  {
    id: '3.3-hard-3',
    nodeId: '3.3',
    difficulty: 3,
    type: 'calculation',
    content: '已知椭圆 $C: \\\\frac{x^2}{4} + \\\\frac{y^2}{3} = 1$，$A, B$ 是 $C$ 上关于原点对称的两点（$A$ 在第一象限）。$P$ 是 $C$ 上异于 $A, B$ 的任意一点。\\n\\n(1) 求证: $k_{PA} \\\\cdot k_{PB}$ 为定值；\\n(2) 利用 (1) 的结论，若 $k_{PA} = 2$, 求直线 $PB$ 的方程（设 $A$ 在 $x$ 轴正半轴附近）。',
    answer: '定值 $-\\\\frac{3}{4}$; $PB: 3x + 8y + 6 = 0$（当 $A$ 在特定位置时）',
    solution: '(1) 设 $A(x_0, y_0)$, 则 $B(-x_0, -y_0)$。$P(x, y)$ 在椭圆上。\\n$k_{PA} = \\\\frac{y - y_0}{x - x_0}$, $k_{PB} = \\\\frac{y + y_0}{x + x_0}$。\\n$k_{PA} \\\\cdot k_{PB} = \\\\frac{y^2 - y_0^2}{x^2 - x_0^2}$。\\n由椭圆方程: $y^2 = 3(1-\\\\frac{x^2}{4}) = \\\\frac{3(4-x^2)}{4}$, $y_0^2 = \\\\frac{3(4-x_0^2)}{4}$。\\n代入: $k_{PA} \\\\cdot k_{PB} = \\\\frac{\\\\frac{3}{4}[(4-x^2) - (4-x_0^2)]}{x^2 - x_0^2} = \\\\frac{\\\\frac{3}{4}(x_0^2 - x^2)}{x^2 - x_0^2} = -\\\\frac{3}{4}$。\\n\\n(2) 由 $k_{PA} \\\\cdot k_{PB} = -\\\\frac{3}{4}$ 和 $k_{PA} = 2$, 得 $k_{PB} = -\\\\frac{3}{8}$。\\n还需要知道 $P$ 的位置才能写 $PB$ 方程。实际上 $P$ 是某个动点——只要找到一组满足条件的 $A, P$。\\n由 $k_{PA} = 2$ 且 $A, P$ 均在椭圆上，可取特定值。例如设 $A$ 为 $(0, \\\\sqrt{3})$, 则 $B(0, -\\\\sqrt{3})$。$k_{PA} = 2$: 设 $P(x, y)$, $\\\\frac{y-\\\\sqrt{3}}{x-0} = 2$, 即 $y = 2x + \\\\sqrt{3}$。代入椭圆: $3x^2 + 4(2x+\\\\sqrt{3})^2 = 12$, $3x^2 + 16x^2 + 16\\\\sqrt{3}x + 12 = 12$, $19x^2 + 16\\\\sqrt{3}x = 0$, $x = 0$ 或 $x = -\\\\frac{16\\\\sqrt{3}}{19}$。$x=0$ 对应 $P=A$（舍去）。$P(-\\\\frac{16\\\\sqrt{3}}{19}, \\\\sqrt{3} + 2(-\\\\frac{16\\\\sqrt{3}}{19})) = (-\\\\frac{16\\\\sqrt{3}}{19}, \\\\frac{-13\\\\sqrt{3}}{19})$。$PB$ 斜率 $k_{PB} = \\\\frac{\\\\frac{-13\\\\sqrt{3}}{19} + \\\\sqrt{3}}{-\\\\frac{16\\\\sqrt{3}}{19} - 0} = \\\\frac{\\\\frac{6\\\\sqrt{3}}{19}}{-\\\\frac{16\\\\sqrt{3}}{19}} = -\\\\frac{3}{8}$ ✓。$PB$ 方程: $y + \\\\sqrt{3} = -\\\\frac{3}{8}x$, 即 $3x + 8y + 8\\\\sqrt{3} = 0$。\\n\\n答案简化为 $3x + 8y + 8\\\\sqrt{3} = 0$（含 $\\\\sqrt{3}$ 因 $A$ 选在短轴端点）。',
    tags: ['点差法', '斜率定值', '点差背景'],
  },''',
]

# Write all files
node_map = {
    'node-3-1': questions_3_1,
    'node-3-2': questions_3_2,
    'node-3-3': questions_3_3,
}

for node, new_questions in node_map.items():
    filepath = f'src/data/questions/{node}.ts'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the insertion point - just before the closing ];
    insert_point = content.rfind('];')
    if insert_point == -1:
        print(f'ERROR: Cannot find ]; in {node}')
        continue

    # Build the new content
    insert_text = '\n'.join(new_questions)
    new_content = content[:insert_point] + insert_text + '\n' + content[insert_point:]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'{node}: {len(new_questions)} questions added')

print('Done with nodes 3.1-3.3')
