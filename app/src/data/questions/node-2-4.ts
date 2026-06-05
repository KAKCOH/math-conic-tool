import type { Question, ChoiceQuestion } from '../../types';

const questions2_4: (Question | ChoiceQuestion)[] = [
  // ===== 难度 1：基础巩固 =====
  {
    id: '2.4-easy-1',
    nodeId: '2.4',
    difficulty: 1,
    type: 'fill',
    content: '椭圆 $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ 的蒙日圆方程为 $\\underline{\\qquad}$，其半径为 $\\underline{\\qquad}$。',
    answer: '$x^2 + y^2 = 41$; $\\sqrt{41}$',
    solution: '椭圆 $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ 的蒙日圆方程为 $x^2 + y^2 = a^2 + b^2$。\n\n此处 $a^2 = 25, b^2 = 16$，故蒙日圆方程为 $x^2 + y^2 = 41$，半径 $r = \\sqrt{41}$。\n\n几何意义：从此圆上任意一点作椭圆的两条切线，两条切线必然互相垂直。',
    tags: ['蒙日圆', '垂直切线', '椭圆'],
  },
  {
    id: '2.4-easy-2',
    nodeId: '2.4',
    difficulty: 1,
    type: 'choice',
    content: '关于椭圆的光学性质，以下说法正确的是：',
    options: [
      '从一个焦点发出的光线经椭圆反射后平行于长轴射出',
      '从一个焦点发出的光线经椭圆反射后经过另一个焦点',
      '平行于长轴射入的光线经椭圆反射后从两个焦点射出',
      '从一个焦点发出的光线经椭圆反射后经过椭圆中心',
    ],
    answer: 'B',
    solution: '椭圆的光学性质：从一个焦点发出的光线经椭圆反射后，必定经过另一个焦点。其物理原理是反射定律——入射角等于反射角，而椭圆在每点的法线平分 $\\angle F_1 P F_2$。\n\n应用：回音壁——在一个焦点处发出声音，经椭圆形墙壁反射后汇聚到另一个焦点。\n\nA 是抛物线的光学性质（从焦点发出平行反射）。C、D 错误。',
    tags: ['光学性质', '反射', '椭圆'],
  } as ChoiceQuestion,
  {
    id: '2.4-easy-3',
    nodeId: '2.4',
    difficulty: 1,
    type: 'fill',
    content: '双曲线 $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ 的蒙日圆方程为 $x^2 + y^2 = \\underline{\\qquad}$。',
    answer: '$7$',
    solution: '双曲线 $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ 的蒙日圆方程为 $x^2 + y^2 = a^2 - b^2$（当 $a > b$ 时存在）。\n\n此处 $a = 4, b = 3$，$a > b$，故蒙日圆为 $x^2 + y^2 = 16 - 9 = 7$。\n\n注：当 $a \\leq b$ 时，$a^2 - b^2 \\leq 0$，蒙日圆退化为一点或不存在。',
    tags: ['蒙日圆', '双曲线'],
  },

  // ===== 难度 2：综合 =====
  {
    id: '2.4-mid-1',
    nodeId: '2.4',
    difficulty: 2,
    type: 'calculation',
    content: '已知椭圆 $C: \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ $(a > b > 0)$ 的蒙日圆方程为 $x^2 + y^2 = 41$，且椭圆的离心率 $e = \\frac{3}{5}$。\n\n(1) 求椭圆 $C$ 的标准方程；\n(2) 求斜率为 $2$ 的椭圆切线的方程。',
    answer: '$\\frac{x^2}{25} + \\frac{y^2}{16} = 1$; $y = 2x \\pm 2\\sqrt{29}$',
    solution: '(1) 蒙日圆 $x^2 + y^2 = a^2 + b^2 = 41$。\n$e = \\frac{c}{a} = \\frac{3}{5}$，得 $c = \\frac{3}{5}a$。\n$b^2 = a^2 - c^2 = a^2 - \\frac{9}{25}a^2 = \\frac{16}{25}a^2$。\n代入 $a^2 + b^2 = 41$：$a^2 + \\frac{16}{25}a^2 = \\frac{41}{25}a^2 = 41$，得 $a^2 = 25$，$a = 5$。\n$b^2 = 16$，$b = 4$。椭圆方程为 $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$。\n\n(2) 椭圆斜率为 $k$ 的切线方程为 $y = kx \\pm \\sqrt{a^2 k^2 + b^2}$。\n$k = 2$ 时：$\\sqrt{a^2 k^2 + b^2} = \\sqrt{25 \\times 4 + 16} = \\sqrt{116} = 2\\sqrt{29}$。\n切线方程为 $y = 2x \\pm 2\\sqrt{29}$。',
    tags: ['蒙日圆', '切线', '离心率'],
  },

  // ===== 难度 3：压轴 =====
  {
    id: '2.4-hard-1',
    nodeId: '2.4',
    difficulty: 3,
    type: 'calculation',
    content: '已知椭圆 $C: \\frac{x^2}{25} + \\frac{y^2}{9} = 1$，$F_1, F_2$ 分别为左、右焦点。\n\n(1) 求椭圆 $C$ 的蒙日圆方程；\n(2) 从蒙日圆上一点作椭圆的两条互相垂直的切线，若其中一条切线的斜率为 $1$，求两条切线方程；\n(3) 利用光学性质与焦点三角形结论，求椭圆上满足 $\\angle F_1 Q F_2 = 90^\\circ$ 的点 $Q$ 的坐标。',
    answer: '$x^2+y^2=34$; $y=x\\pm\\sqrt{34}$, $y=-x\\pm\\sqrt{34}$; $(\\pm\\frac{5\\sqrt{7}}{4}, \\pm\\frac{9}{4})$',
    solution: '(1) $a^2 = 25, b^2 = 9$。蒙日圆：$x^2 + y^2 = a^2 + b^2 = 25 + 9 = 34$。\n\n(2) 椭圆 $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$，斜率为 $k$ 的切线为 $y = kx \\pm \\sqrt{25k^2 + 9}$。\n切线 $1$ 斜率 $k_1 = 1$：$y = x \\pm \\sqrt{25 + 9} = x \\pm \\sqrt{34}$。\n由蒙日圆性质，两条切线互相垂直，故 $k_2 = -1$。\n切线 $2$：$y = -x \\pm \\sqrt{25 \\times 1 + 9} = -x \\pm \\sqrt{34}$。\n注意：两个 "$\\pm$" 并非独立——过蒙日圆上同一点的两条切线，其截距符号需通过解交点确定。四组可能方程对应蒙日圆上的四个点。\n\n(3) $a = 5, b = 3, c = 4, e = \\frac{4}{5}$。\n焦点 $F_1(-4, 0), F_2(4, 0)$。设 $Q(x_0, y_0)$ 在椭圆上，$\\angle F_1QF_2 = 90^\\circ$。\n先验证必要条件：$e = \\frac{4}{5} > \\frac{\\sqrt{2}}{2}$，故椭圆上存在使 $PF_1 \\perp PF_2$ 的点。\n\n由 $QF_1 \\perp QF_2$ 得 $|QF_1|^2 + |QF_2|^2 = |F_1F_2|^2 = (2c)^2 = 64$。\n焦半径公式：$|QF_1| = a + ex_0 = 5 + \\frac{4}{5}x_0$，$|QF_2| = 5 - \\frac{4}{5}x_0$。\n$(5 + \\frac{4}{5}x_0)^2 + (5 - \\frac{4}{5}x_0)^2 = 64$\n展开：$25 + 8x_0 + \\frac{16}{25}x_0^2 + 25 - 8x_0 + \\frac{16}{25}x_0^2 = 64$\n$50 + \\frac{32}{25}x_0^2 = 64 \\Rightarrow \\frac{32}{25}x_0^2 = 14 \\Rightarrow x_0^2 = \\frac{14 \\times 25}{32} = \\frac{175}{16}$。\n$x_0 = \\pm \\frac{5\\sqrt{7}}{4}$。\n\n代入椭圆方程 $\\frac{x_0^2}{25} + \\frac{y_0^2}{9} = 1$：\n$\\frac{175/16}{25} + \\frac{y_0^2}{9} = 1 \\Rightarrow \\frac{7}{16} + \\frac{y_0^2}{9} = 1 \\Rightarrow \\frac{y_0^2}{9} = \\frac{9}{16} \\Rightarrow y_0 = \\pm \\frac{9}{4}$。\n\n$Q(\\pm \\frac{5\\sqrt{7}}{4}, \\pm \\frac{9}{4})$（四个点，符号独立）。',
    tags: ['蒙日圆', '光学性质', '焦点三角形', '垂直条件'],
  },
];

export default questions2_4;
