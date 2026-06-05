import type { Question, ChoiceQuestion } from '../../types';

const questions2_2: (Question | ChoiceQuestion)[] = [
  // ===== 难度 1：基础巩固 =====
  {
    id: '2.2-easy-1',
    nodeId: '2.2',
    difficulty: 1,
    type: 'fill',
    content: '![椭圆 $\\frac{x^2}{25}+\\frac{y^2}{9}=1$，$F_1(-4,0),F_2(4,0)$，$P$ 在椭圆上，$\\angle F_1PF_2=60^\\circ$](/figures/q-2.2-easy-1.png)\n\n已知 $P$ 为椭圆 $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$ 上一点，$F_1, F_2$ 为焦点，$\\angle F_1PF_2 = 60^\\circ$，则 $\\triangle PF_1F_2$ 的面积 $S = \\underline{\\qquad}$。',
    answer: '$3\\sqrt{3}$',
    solution: '由椭圆方程 $a = 5, b = 3, c = 4$。焦点三角形面积公式（椭圆）：$S = b^2 \\cdot \\tan\\frac{\\theta}{2}$，其中 $\\theta = \\angle F_1PF_2 = 60^\\circ$。\n\n$S = 9 \\cdot \\tan 30^\\circ = 9 \\cdot \\frac{1}{\\sqrt{3}} = 3\\sqrt{3}$。\n\n验证：此公式适用于椭圆上任意满足条件 $\\angle F_1PF_2 = 60^\\circ$ 的点。',
    tags: ['焦点三角形', '面积公式'],
  },
  {
    id: '2.2-easy-2',
    nodeId: '2.2',
    difficulty: 1,
    type: 'fill',
    content: '![抛物线 $y^2=4x$，焦点 $F(1,0)$，过 $F$ 的弦 $AB$](/figures/q-2.2-easy-2.png)\n\n抛物线 $y^2 = 4x$ 的焦点为 $F$，过 $F$ 的弦 $AB$ 交抛物线于 $A(x_1, y_1), B(x_2, y_2)$，则 $y_1 y_2 = \\underline{\\qquad}$，$x_1 x_2 = \\underline{\\qquad}$。',
    answer: '$-4$; $1$',
    solution: '由 $y^2 = 4x$ 知 $2p = 4$，故 $p = 2$。焦点 $F(\\frac{p}{2}, 0) = (1, 0)$。\n\n设焦点弦 $AB: x = my + 1$，代入抛物线得 $y^2 = 4(my + 1)$，即 $y^2 - 4my - 4 = 0$。\n\n由韦达定理：$y_1y_2 = -4$。\n$x_1x_2 = \\frac{y_1^2}{4} \\cdot \\frac{y_2^2}{4} = \\frac{(y_1y_2)^2}{16} = \\frac{16}{16} = 1$。\n\n这正是抛物线焦点弦的两个直接结论：$y_1y_2 = -p^2$，$x_1x_2 = \\frac{p^2}{4}$。',
    tags: ['抛物线', '焦点弦', '韦达定理'],
  },
  {
    id: '2.2-easy-3',
    nodeId: '2.2',
    difficulty: 1,
    type: 'choice',
    content: '对于抛物线 $y^2 = 2px$ $(p > 0)$，过焦点 $F$ 作弦 $AB$，以下结论错误的是：',
    options: [
      '$y_1 y_2 = -p^2$',
      '$\\frac{1}{|AF|} + \\frac{1}{|BF|} = \\frac{2}{p}$',
      '$|AB| = \\frac{2p}{\\sin^2\\alpha}$，$\\alpha$ 为弦的倾斜角',
      '以 $AB$ 为直径的圆与 $y$ 轴相切',
    ],
    answer: 'D',
    solution: 'A 正确：设焦点弦方程与抛物线联立，由韦达定理得 $y_1y_2 = -p^2$。\nB 正确：焦半径倒数之和恒为 $\\frac{2}{p}$，与弦的方向无关。\nC 正确：焦点弦长公式 $|AB| = \\frac{2p}{\\sin^2\\alpha}$（或 $|AB| = x_1 + x_2 + p$）。\nD 错误：以焦点弦 $AB$ 为直径的圆与**准线** $x = -\\frac{p}{2}$ 相切，而不是与 $y$ 轴相切。',
    tags: ['抛物线', '焦点弦', '性质辨析'],
  } as ChoiceQuestion,

  // ===== 难度 2：综合 =====
  {
    id: '2.2-mid-1',
    nodeId: '2.2',
    difficulty: 2,
    type: 'calculation',
    content: '![椭圆焦点三角形，$\\angle F_1PF_2=90^\\circ$，面积 $S=b^2=9$](/figures/q-2.2-mid-1.png)\n\n已知椭圆 $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ $(a > b > 0)$ 上一点 $P$，$F_1, F_2$ 为焦点，$\\angle F_1PF_2 = 90^\\circ$，$\\triangle PF_1F_2$ 的面积为 $9$。\n\n(1) 求 $b$ 的值；\n(2) 若椭圆离心率 $e = \\frac{4}{5}$，求椭圆的标准方程。',
    answer: '$3$; $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$',
    solution: '(1) 焦点三角形面积公式（椭圆）：$S = b^2 \\cdot \\tan\\frac{\\theta}{2}$，其中 $\\theta = \\angle F_1PF_2 = 90^\\circ$。\n$S = b^2 \\cdot \\tan 45^\\circ = b^2$。由 $S = 9$ 得 $b^2 = 9$，$b = 3$。\n\n(2) $e = \\frac{c}{a} = \\frac{4}{5}$，设 $c = 4k, a = 5k$。\n$b^2 = a^2 - c^2 = 25k^2 - 16k^2 = 9k^2$。\n由 (1) 知 $b^2 = 9$，故 $9k^2 = 9$，$k = 1$。\n得 $a = 5, c = 4$。椭圆方程为 $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$。\n\n验证：$e = \\frac{4}{5} > \\frac{\\sqrt{2}}{2}$，满足椭圆上存在使 $\\angle F_1PF_2 = 90^\\circ$ 的点的必要条件。',
    tags: ['焦点三角形', '面积', '离心率'],
  },

  // ===== 难度 3：压轴 =====
  {
    id: '2.2-hard-1',
    nodeId: '2.2',
    difficulty: 3,
    type: 'calculation',
    content: '![焦点三角形对称情形：$\\angle PF_1F_2=\\angle PF_2F_1=30^\\circ$，$P$ 在 $y$ 轴上](/figures/q-2.2-hard-1.png)\n\n设 $F_1, F_2$ 为椭圆 $C: \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ $(a > b > 0)$ 的左、右焦点，$P$ 为椭圆上一点。已知 $\\angle PF_1F_2 = \\angle PF_2F_1 = 30^\\circ$。\n\n(1) 求椭圆 $C$ 的离心率 $e$；\n(2) 若 $\\triangle PF_1F_2$ 的面积为 $\\sqrt{3}$，求椭圆的标准方程；\n(3) 求 $|PF_1|$ 和 $|PF_2|$。',
    answer: '$\\frac{\\sqrt{3}}{2}$; $\\frac{x^2}{4} + y^2 = 1$; $2$, $2$',
    solution: '(1) 在 $\\triangle PF_1F_2$ 中，$\\angle PF_1F_2 = \\angle PF_2F_1 = 30^\\circ$，故 $\\angle F_1PF_2 = 180^\\circ - 30^\\circ - 30^\\circ = 120^\\circ$。\n\n利用焦点三角形的离心率公式（椭圆）：\n$e = \\frac{\\sin\\theta}{\\sin\\alpha + \\sin\\beta}$，其中 $\\theta = \\angle F_1PF_2 = 120^\\circ$，$\\alpha = \\beta = 30^\\circ$。\n$e = \\frac{\\sin 120^\\circ}{\\sin 30^\\circ + \\sin 30^\\circ} = \\frac{\\frac{\\sqrt{3}}{2}}{\\frac{1}{2} + \\frac{1}{2}} = \\frac{\\sqrt{3}}{2}$。\n\n也可用特例：$\\alpha = \\beta$ 时 $e = \\cos\\alpha = \\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$。\n\n(2) $\\theta = 120^\\circ$，$S = b^2 \\cdot \\tan\\frac{\\theta}{2} = b^2 \\cdot \\tan 60^\\circ = b^2 \\cdot \\sqrt{3} = \\sqrt{3}$，得 $b^2 = 1$。\n由 $e = \\frac{c}{a} = \\frac{\\sqrt{3}}{2}$ 和 $b^2 = a^2 - c^2$：\n设 $a = 2k, c = \\sqrt{3}k$，则 $b^2 = 4k^2 - 3k^2 = k^2 = 1$，得 $k = 1$。\n故 $a = 2, b = 1$。椭圆方程为 $\\frac{x^2}{4} + y^2 = 1$。\n\n(3) 由 $\\alpha = \\beta = 30^\\circ$ 知 $\\triangle PF_1F_2$ 对 $F_1F_2$ 对称，故 $P$ 在 $y$ 轴上（$x_P = 0$）。代入椭圆得 $y_P = \\pm 1$。\n焦半径公式：$|PF_1| = a + ex_P = 2 + \\frac{\\sqrt{3}}{2} \\cdot 0 = 2$，同理 $|PF_2| = 2$。\n用距离公式验证：$F_1(-\\sqrt{3}, 0), P(0, 1)$，$|PF_1| = \\sqrt{3 + 1} = 2$。$|PF_1| + |PF_2| = 4 = 2a$，符合椭圆定义。',
    tags: ['焦点三角形', '离心率公式', '面积', '对称性'],
  },
];

export default questions2_2;
