import type { Question, ChoiceQuestion } from '../../types';

const questions3_2: (Question | ChoiceQuestion)[] = [
  // ===== 难度 1：基础巩固 =====
  {
    id: '3.2-easy-1',
    nodeId: '3.2',
    difficulty: 1,
    type: 'fill',
    content: '已知 $F_1, F_2$ 是椭圆 $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ 的两个焦点，$P$ 是椭圆上一点。若 $|PF_1| = 4$，则 $|PF_2| = \\underline{\\qquad}$。',
    answer: '$6$',
    solution: '由椭圆第一定义：椭圆上任意一点到两焦点的距离之和等于长轴长 $2a$。由方程 $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ 得 $a = 5$，$2a = 10$。故 $|PF_1| + |PF_2| = 10$，$|PF_2| = 10 - 4 = 6$。直接使用定义，无需设点坐标。',
    tags: ['第一定义', '椭圆的定义'],
  },
  {
    id: '3.2-easy-2',
    nodeId: '3.2',
    difficulty: 1,
    type: 'choice',
    content: '已知椭圆 $\\frac{x^2}{4} + \\frac{y^2}{3} = 1$，$F_1, F_2$ 为其左、右焦点，$P$ 为椭圆上任意一点。设 $m = |PF_1|$，$n = |PF_2|$，则 $m^2 + n^2$ 的最小值为：',
    options: ['$8$', '$9$', '$10$', '$12$'],
    answer: 'A',
    solution: '由定义得 $m + n = 2a = 4$。$m^2 + n^2 = (m + n)^2 - 2mn = 16 - 2mn$。由基本不等式 $mn \\le \\left(\\frac{m + n}{2}\\right)^2 = 4$，当 $m = n = 2$ 时取等。故 $m^2 + n^2 \\ge 16 - 8 = 8$，最小值为 $8$。若直接设点 $P(x, y)$ 硬算，计算量大得多；用定义结合不等式一步到位。',
    tags: ['定义法', '基本不等式', '最值'],
  } as ChoiceQuestion,
  {
    id: '3.2-easy-3',
    nodeId: '3.2',
    difficulty: 1,
    type: 'fill',
    content: '若动点 $P$ 到两定点 $F_1(-4, 0)$ 和 $F_2(4, 0)$ 的距离之和为 $10$，则 $P$ 的轨迹方程为 $\\underline{\\qquad}$。',
    answer: '$\\frac{x^2}{25} + \\frac{y^2}{9} = 1$',
    solution: '由椭圆定义知轨迹为椭圆。$2a = 10$ 得 $a = 5$，两焦点距离 $2c = 8$ 得 $c = 4$。$b^2 = a^2 - c^2 = 25 - 16 = 9$。焦点在 $x$ 轴上，中心在原点，故轨迹方程为 $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$。这是定义法求轨迹的典型应用——直接从定义条件写出标准方程。',
    tags: ['定义法', '轨迹方程', '椭圆定义'],
  },

  // ===== 难度 2：综合 =====
  {
    id: '3.2-mid-1',
    nodeId: '3.2',
    difficulty: 2,
    type: 'calculation',
    content: '已知椭圆 $C: \\frac{x^2}{25} + \\frac{y^2}{9} = 1$ 的左、右焦点分别为 $F_1, F_2$，$P$ 是 $C$ 上一点，且 $\\angle F_1PF_2 = 120^\\circ$。\n\n(1) 求 $|PF_1| \\cdot |PF_2|$ 的值；\n(2) 求 $\\triangle F_1PF_2$ 的面积。',
    answer: '$36$; $9\\sqrt{3}$',
    solution: '由椭圆方程得 $a = 5$，$c = \\sqrt{25 - 9} = 4$，$|F_1F_2| = 2c = 8$。\n\n(1) 设 $m = |PF_1|$，$n = |PF_2|$。由定义知 $m + n = 2a = 10$。在 $\\triangle F_1PF_2$ 中，由余弦定理：$|F_1F_2|^2 = m^2 + n^2 - 2mn\\cos 120^\\circ = m^2 + n^2 + mn$。而 $m^2 + n^2 = (m + n)^2 - 2mn = 100 - 2mn$。代入：$64 = 100 - 2mn + mn = 100 - mn$，得 $mn = 36$。\n\n(2) $S_{\\triangle F_1PF_2} = \\frac{1}{2}mn\\sin 120^\\circ = \\frac{1}{2} \\cdot 36 \\cdot \\frac{\\sqrt{3}}{2} = 9\\sqrt{3}$。\n\n此题若用坐标法（设 $P(x, y)$ 再联立椭圆方程和余弦条件）将引入高次方程，极其繁琐；而用定义法仅需三步代数。',
    tags: ['定义法', '余弦定理', '焦点三角形', '面积'],
  },

  // ===== 难度 3：压轴 =====
  {
    id: '3.2-hard-1',
    nodeId: '3.2',
    difficulty: 3,
    type: 'calculation',
    content: '已知椭圆 $C: \\frac{x^2}{4} + \\frac{y^2}{3} = 1$ 的左焦点为 $F_1$，右焦点为 $F_2$。点 $P$ 在椭圆上且位于第一象限，满足 $|PF_1| = 2|PF_2|$。\n\n(1) 求 $|PF_1|$ 和 $|PF_2|$ 的值；\n(2) 求点 $P$ 的坐标；\n(3) 求 $\\triangle PF_1F_2$ 的面积。',
    answer: '$\\frac{8}{3}$, $\\frac{4}{3}$; $P(\\frac{4}{3}, \\frac{\\sqrt{15}}{3})$; $\\frac{\\sqrt{15}}{3}$',
    solution: '由椭圆方程得 $a = 2$，$c = \\sqrt{4 - 3} = 1$，$F_1(-1, 0)$，$F_2(1, 0)$。\n\n(1) 由定义 $|PF_1| + |PF_2| = 2a = 4$，又 $|PF_1| = 2|PF_2|$，解得 $|PF_2| = \\frac{4}{3}$，$|PF_1| = \\frac{8}{3}$。\n\n(2) 设 $P(x, y)$（$x > 0, y > 0$）。由距离公式：\n$|PF_1|^2 = (x + 1)^2 + y^2 = \\frac{64}{9}$ ①\n$|PF_2|^2 = (x - 1)^2 + y^2 = \\frac{16}{9}$ ②\n① $-$ ②：$(x + 1)^2 - (x - 1)^2 = \\frac{48}{9}$，即 $4x = \\frac{16}{3}$，$x = \\frac{4}{3}$。\n代入②：$(\\frac{4}{3} - 1)^2 + y^2 = \\frac{16}{9}$，$(\\frac{1}{3})^2 + y^2 = \\frac{16}{9}$，$\\frac{1}{9} + y^2 = \\frac{16}{9}$，$y^2 = \\frac{15}{9}$，$y = \\frac{\\sqrt{15}}{3}$（第一象限取正）。\n验证：$\\frac{x^2}{4} + \\frac{y^2}{3} = \\frac{16/9}{4} + \\frac{15/9}{3} = \\frac{4}{9} + \\frac{5}{9} = 1$ ✓。\n\n(3) $S_{\\triangle PF_1F_2} = \\frac{1}{2} \\cdot |F_1F_2| \\cdot y_P = \\frac{1}{2} \\cdot 2 \\cdot \\frac{\\sqrt{15}}{3} = \\frac{\\sqrt{15}}{3}$。\n\n此题先利用定义快速求得焦半径，再结合距离公式解出坐标，充分体现了定义法与坐标法数形结合的思想。',
    tags: ['定义法', '焦半径', '距离公式', '数形结合'],
  },
  {
    id: '3.2-mid-2',
    nodeId: '3.2',
    difficulty: 2,
    type: 'calculation',
    content: '已知双曲线 $C: \\frac{x^2}{9} - \\frac{y^2}{16} = 1$ 的左、右焦点分别为 $F_1, F_2$。$P$ 在双曲线的右支上，且 $|PF_1| = 3|PF_2|$。\n\n(1) 求 $|PF_1|$ 和 $|PF_2|$ 的值；\n(2) 求 $\\triangle PF_1F_2$ 的面积。',
    answer: '$|PF_1| = 9$, $|PF_2| = 3$; $S = 12$',
    solution: '由双曲线方程得 $a=3, b=4, c=5$, $|F_1F_2| = 2c = 10$, $F_1(-5, 0), F_2(5, 0)$。\n\n(1) 由定义: $|PF_1| - |PF_2| = 2a = 6$（$P$ 在右支）。又 $|PF_1| = 3|PF_2|$, 联立解得 $|PF_2| = 3$, $|PF_1| = 9$。\n\n(2) $\\triangle PF_1F_2$ 中三边: $9, 3, 10$。半周长 $p = \\frac{9+3+10}{2} = 11$。由海伦公式: $S = \\sqrt{11 \\cdot (11-9) \\cdot (11-3) \\cdot (11-10)} = \\sqrt{11 \\cdot 2 \\cdot 8 \\cdot 1} = \\sqrt{176} = 4\\sqrt{11} \\approx 13.27$。\n\n也可以直接使用: $\\cos\\angle F_1PF_2 = \\frac{|PF_1|^2+|PF_2|^2-|F_1F_2|^2}{2|PF_1||PF_2|} = \\frac{81+9-100}{2 \\cdot 9 \\cdot 3} = -\\frac{10}{54} = -\\frac{5}{27}$。$S = \\frac{1}{2}|PF_1||PF_2|\\sin\\angle F_1PF_2 = \\frac{1}{2} \\cdot 9 \\cdot 3 \\cdot \\sqrt{1 - \\frac{25}{729}} = \\frac{27}{2} \\cdot \\frac{\\sqrt{704}}{27} = \\frac{\\sqrt{704}}{2} = 2\\sqrt{44} = 4\\sqrt{11}$ ✓。\n\n此题展示了定义法在双曲线问题中的应用——利用 $|PF_1|-|PF_2|=2a$ 快速建立方程。',
    tags: ['定义法', '双曲线', '余弦定理', '焦点三角形'],
  },
  {
    id: '3.2-mid-3',
    nodeId: '3.2',
    difficulty: 2,
    type: 'calculation',
    content: '已知抛物线 $y^2 = 8x$ 的焦点为 $F$。$P$ 是抛物线上一动点，$A(3, 0)$ 为 $x$ 轴上一定点。\\n\\n(1) 利用抛物线定义，求 $|PF|$ 关于点 $P$ 横坐标 $x$ 的表达式；\\n(2) 求 $|PF| + |PA|$ 的最小值。',
    answer: '$|PF| = x + 2$; 最小值为 $5$, 当 $P(0, 0)$ 时取得',
    solution: '抛物线 $y^2 = 8x$: $2p = 8$, $p = 4$, 焦点 $F(2, 0)$, 准线 $l: x = -2$。\n\n(1) 根据抛物线定义，$|PF|$ 等于 $P$ 到准线的距离: $|PF| = x_P - (-2) = x_P + 2$。\n\n(2) $|PF| + |PA| = (x+2) + \\sqrt{(x-3)^2 + y^2}$。由 $y^2 = 8x$，代入: $|PA| = \\sqrt{(x-3)^2 + 8x} = \\sqrt{x^2 + 2x + 9}$。\n令 $f(x) = x + 2 + \\sqrt{x^2 + 2x + 9}$（$x \\ge 0$）。\n$f(x)$ 的导数为 $1 + \\frac{x+1}{\\sqrt{x^2+2x+9}}$。当 $x \\ge 0$ 时 $x+1 > 0$，$f(x)$ 的导数 $> 0$ 恒成立。\n$f(x)$ 在 $[0, +\\infty)$ 上单调递增，最小值 $f(0) = 2 + \\sqrt{9} = 2 + 3 = 5$，此时 $P(0, 0)$ 为抛物线顶点。\n\n此题利用抛物线定义简化了焦半径计算，直接转化为关于 $x$ 的一元函数求最值。',
    tags: ['抛物线', '定义法', '焦半径', '距离'],
  },
  {
    id: '3.2-hard-2',
    nodeId: '3.2',
    difficulty: 3,
    type: 'calculation',
    content: '已知椭圆 $C: \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$（$a > b > 0$）的离心率为 $\\frac{\\sqrt{3}}{2}$，$F_1, F_2$ 为左、右焦点。$P$ 为椭圆上一点，且 $\\angle F_1PF_2 = 60^\\circ$，$\\triangle F_1PF_2$ 的面积为 $\\frac{\\sqrt{3}}{3}$。\n\n(1) 求椭圆的方程；\n(2) 求 $|PF_1| \\cdot |PF_2|$ 的值，并指出点 $P$ 在椭圆上的位置特征。',
    answer: '$\\frac{x^2}{4} + y^2 = 1$; $|PF_1| \\cdot |PF_2| = \\frac{4}{3}$',
    solution: '(1) 由 $e = \\frac{c}{a} = \\frac{\\sqrt{3}}{2}$ 得 $c = \\frac{\\sqrt{3}}{2}a$, $b^2 = a^2 - c^2 = a^2 - \\frac{3}{4}a^2 = \\frac{1}{4}a^2$。\n由焦点三角形面积公式: $S = b^2\\tan\\frac{\\theta}{2} = b^2\\tan 30^\\circ = \\frac{b^2}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$。\n得 $b^2 = 1$, 故 $a^2 = 4b^2 = 4$。椭圆方程为 $\\frac{x^2}{4} + y^2 = 1$。\n\n(2) $a = 2, b = 1, c = \\sqrt{3}$。\n由余弦定理: $|F_1F_2|^2 = |PF_1|^2 + |PF_2|^2 - 2|PF_1||PF_2|\\cos 60^\\circ$。\n$(2c)^2 = (|PF_1|+|PF_2|)^2 - 2|PF_1||PF_2| - |PF_1||PF_2|$。\n$12 = (2a)^2 - 3|PF_1||PF_2| = 16 - 3|PF_1||PF_2|$。\n得 $|PF_1||PF_2| = \\frac{4}{3}$。\n\n$|PF_1|+|PF_2| = 4$, $|PF_1||PF_2| = \\frac{4}{3}$。设 $|PF_1|, |PF_2|$ 为方程 $t^2 - 4t + \\frac{4}{3} = 0$ 的两根。\n$t = \\frac{4 \\pm \\sqrt{16 - \\frac{16}{3}}}{2} = 2 \\pm \\frac{2\\sqrt{6}}{3}$。两焦半径不等，$P$ 不在 $y$ 轴上。$\\triangle = \\frac{48-16}{3} = \\frac{32}{3} > 0$, $P$ 有两解关于 $x$ 轴对称。',
    tags: ['定义法', '焦点三角形', '离心率', '面积公式'],
    source: '2023·全国甲卷·理数T20改编',
  },
  {
    id: '3.2-hard-3',
    nodeId: '3.2',
    difficulty: 3,
    type: 'proof',
    content: '设 $F_1, F_2$ 是双曲线 $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$（$a>0, b>0$）的左、右焦点。过 $F_1$ 的直线与双曲线左支交于 $A, B$, 与右支交于 $C$。\n\n证明: $|AC| + |BF_2| = |BC| + |AF_2|$。',
    answer: '证明见解答。',
    solution: '由双曲线定义:\n$A$ 在左支 $\\Rightarrow |AF_2| - |AF_1| = 2a$ ①\n$B$ 在左支 $\\Rightarrow |BF_2| - |BF_1| = 2a$ ②\n$C$ 在右支 $\\Rightarrow |CF_1| - |CF_2| = 2a$ ③\n\n由①: $|AF_2| = |AF_1| + 2a$。由②: $|BF_2| = |BF_1| + 2a$。\n\n待证: $|AC| + |BF_2| = |BC| + |AF_2|$\n即 $|AC| + |BF_1| + 2a = |BC| + |AF_1| + 2a$\n即 $|AC| + |BF_1| = |BC| + |AF_1|$（$2a$ 抵消）。\n\n$A, B, C$ 共线，且 $F_1$ 在 $A, B$ 之间。设 $A$ 在 $F_1$ 左侧, $B$ 在 $F_1$ 左侧（$A, B$ 均在左支）, $C$ 在右支（$F_1$ 右侧）。排列顺序: $A, B, F_1, C$ 或 $B, A, F_1, C$。\n\n不妨设顺序为 $A, B, F_1, C$（从左到右）。则:\n$|AC| = |AB| + |BF_1| + |F_1C|$\n$|BC| = |BF_1| + |F_1C|$\n$|AF_1| = |AB| + |BF_1|$\n$|BF_1| = |BF_1|$\n\n左 $= |AC| + |BF_1| = (|AB| + |BF_1| + |F_1C|) + |BF_1|$\n右 $= |BC| + |AF_1| = (|BF_1| + |F_1C|) + (|AB| + |BF_1|)$\n左 = 右 ✓。\n\n此题充分展示了定义法的威力——将看似复杂的几何关系通过双曲线定义转化为$2a$的简单加减。',
    tags: ['定义法', '双曲线', '数形结合', '几何证明'],
  },
];

export default questions3_2;
