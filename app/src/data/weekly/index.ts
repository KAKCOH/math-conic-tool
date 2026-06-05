export interface WeeklyProblem {
  id: string;
  content: string;
  solution: string;
}

export interface WeeklyIssue {
  id: string;
  weekNumber: number;
  date: string;
  intro?: string;
  problems: WeeklyProblem[];
}

const week1: WeeklyIssue = {
  id: 'week-1',
  weekNumber: 1,
  date: '2026-06',
  intro: '本周精选三道题：一道椭圆焦点弦几何证明、一道三角函数不等式恒成立、一道双曲线与椭圆共焦点综合题。',
  problems: [
    {
      id: 'w1-p1',
      content:
        '![椭圆 $\Gamma$，焦点 $F_1$，点 $P$，以 $F_1P$ 为直径的圆与以长轴为直径的圆内切](/figures/weekly-1-1.png)\n\n' +
        '设 $F_1$ 是椭圆 $\\Gamma$ 的一个焦点，$P$ 是椭圆 $\\Gamma$ 上的一个点，证明：以线段 $F_1P$ 为直径的圆和以椭圆 $\\Gamma$ 长轴为直径的圆内切。',
      solution:
        '设椭圆 $\\Gamma$ 的中心为 $O$，长轴长为 $2a$，另一个焦点为 $F_2$。\n\n' +
        '记 $F_1P$ 的中点为 $M$，则 $OM$ 是 $\\triangle PF_1F_2$ 的中位线，故 $|OM| = \\dfrac{|PF_2|}{2}$。\n\n' +
        '这两个圆的半径分别为 $\\dfrac{|PF_1|}{2}$ 和 $a$，圆心距为 $|OM|$，要证明它们内切，只需证明：\n\n' +
        '$$a - \\frac{|PF_1|}{2} = |OM|$$\n\n' +
        '即 $a = \\dfrac{|PF_1|}{2} + \\dfrac{|PF_2|}{2}$，即 $2a = |PF_1| + |PF_2|$。\n\n' +
        '这正是椭圆的定义。$\\square$',
    },
    {
      id: 'w1-p2',
      content:
        '若不等式 $\\cos x \\geq 1 - ax^2$ 恒成立，求实数 $a$ 的取值范围。',
      solution:
        '不妨设 $x > 0$，令 $f(x) = \\cos x + ax^2 - 1$，$f(0) = 0$。\n\n' +
        '求导得 $f\'(x) = 2ax - \\sin x$，$f\'(0) = 0$。\n\n' +
        '再求导得 $f\'\'(x) = 2a - \\cos x$，$f\'\'(0) = 2a - 1$。\n\n' +
        '令 $f\'\'(0) = 0$ 解得 $a = \\dfrac{1}{2}$，即分类讨论的分界点是 $a = \\dfrac{1}{2}$。\n\n' +
        '再考虑 $a$ 的正负性，还有一个分界点 $a = 0$。\n\n' +
        '**（1）** 若 $a \\leq 0$，则 $\\cos x \\leq 1 \\leq 1 - ax^2$，原不等式不成立。\n\n' +
        '**（2）** 若 $0 < a < \\frac{1}{2}$，则 $f\'\'(0) = 2a - 1 < 0$，又 $f\'\'\\left(\\frac{\\pi}{2}\\right) = 2a > 0$，\n' +
        '故存在 $x_0 \\in \\left(0, \\frac{\\pi}{2}\\right)$ 使得 $f\'\'(x_0) = 0$。\n' +
        '从而 $f\'(x)$ 在 $(0, x_0)$ 内单调递减，对任意 $x \\in (0, x_0)$ 有 $f\'(x) < f\'(0) = 0$，\n' +
        '进而 $f(x)$ 在 $(0, x_0)$ 内单调递减，$f(x) < f(0) = 0$，原不等式不成立。\n\n' +
        '**（3）** 若 $a \\geq \\frac{1}{2}$，则 $f\'(x) \\geq x - \\sin x \\geq 0$，\n' +
        '从而 $f(x)$ 在 $(0, +\\infty)$ 内单调递增，$f(x) \\geq f(0) = 0$。\n\n' +
        '综上，实数 $a$ 的取值范围是 $\\left[\\dfrac{1}{2}, +\\infty\\right)$。$\\square$',
    },
    {
      id: 'w1-p3',
      content:
        '双曲线 $\\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} = 1$（$b > a > 0$）的左、右焦点分别为 $F_1$，$F_2$，具有公共焦点的椭圆与双曲线在第一象限的交点为 $P$，双曲线和椭圆的离心率分别为 $e_1$，$e_2$，$\\triangle PF_1F_2$ 的内切圆的圆心为 $I$，过 $F_2$ 作直线 $PI$ 的垂线，垂足为 $D$，则下列选项正确的是：\n\n' +
        '**A.** 若 $PI$ 的延长线交 $x$ 轴于点 $N$，则 $\\dfrac{|F_1N|}{|F_2N|} = e_1^2$\n\n' +
        '**B.** 点 $D$ 的轨迹在圆上\n\n' +
        '**C.** 若 $S_{\\triangle IPF_1} - S_{\\triangle IPF_2} \\geq \\dfrac{1}{3}S_{\\triangle IF_1F_2}$，则 $1 < e_1 \\leq 3$\n\n' +
        '**D.** 若 $|OP| = |OF_1|$，则 $\\dfrac{1}{e_1^2} + \\dfrac{1}{e_2^2} = 2$',
      solution:
        '设椭圆 $\\dfrac{x^2}{m^2} + \\dfrac{y^2}{n^2} = 1$（$m^2 - n^2 \\neq a^2$）。\n\n' +
        '根据定义：$|PF_1| - |PF_2| = 2a$，$|PF_1| + |PF_2| = 2m$。\n' +
        '解得 $|PF_1| = a + m$，$|PF_2| = m - a$。\n\n' +
        '**A 选项：** 由角平分线性质，$\\dfrac{|F_1N|}{|F_2N|} = \\dfrac{|PF_1|}{|PF_2|} = \\dfrac{a+m}{m-a} \\neq \\dfrac{c^2}{a^2}$（无恒等关系），故 **A 错误**。\n\n' +
        '**B 选项：** 过 $F_2$ 作直线 $PI$ 的垂线，垂足为 $D$。延长 $F_2D$ 交 $PF_1$ 于点 $E$。\n' +
        '由内切圆及垂线性质可知 $\\triangle PED \\cong \\triangle PF_2D$，则 $D$ 为 $EF_2$ 中点且 $|PF_2| = |PE|$。\n' +
        '连接 $OD$，由中位线定理：\n' +
        '$$|OD| = \\frac{1}{2}|F_1E| = \\frac{1}{2}(|PF_1| - |PE|) = \\frac{1}{2}(|PF_1| - |PF_2|) = a$$\n' +
        '故点 $D$ 的轨迹在以 $O$ 为圆心、半径为 $a$ 的圆上，**B 正确**。\n\n' +
        '**C 选项：** $S_{\\triangle IPF_1} - S_{\\triangle IPF_2} \\geq \\frac{1}{3}S_{\\triangle IF_1F_2}$\n' +
        '等价于 $|PF_1| - |PF_2| \\geq \\frac{1}{3}|F_1F_2|$，即 $2a \\geq \\frac{2c}{3} \\Rightarrow e_1 \\leq 3$。\n' +
        '又 $e_1$ 为双曲线离心率，$e_1 > 1$，故 $1 < e_1 \\leq 3$。\n' +
        '但题设 $b > a > 0$，对于双曲线有 $c^2 = a^2 + b^2 > 2a^2$，故 $e_1 = \\frac{c}{a} > \\sqrt{2}$。\n' +
        '因此实际范围应为 $\\sqrt{2} < e_1 < 3$，选项条件不充分，**C 错误**。\n\n' +
        '**D 选项：** 若 $|OP| = |OF_1|$，由 $|OP| = |OF_1| = |OF_2|$ 知 $\\triangle PF_1F_2$ 为直角三角形，$\\angle F_1PF_2 = 90^\\circ$。\n' +
        '$$\\begin{cases} |PF_1| - |PF_2| = 2a \\\\ |PF_1| + |PF_2| = 2a_1 \\\\ |PF_1|^2 + |PF_2|^2 = 4c^2 \\end{cases}$$\n' +
        '推出 $a^2 + a_1^2 = 2c^2$，即 $\\dfrac{1}{e_1^2} + \\dfrac{1}{e_2^2} = 2$，**D 正确**。\n\n' +
        '故选 **BD**。$\\square$',
    },
  ],
};

export const weeklyIssues: WeeklyIssue[] = [week1];
