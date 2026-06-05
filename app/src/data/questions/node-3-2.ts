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
];

export default questions3_2;
