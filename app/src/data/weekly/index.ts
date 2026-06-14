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

const week2: WeeklyIssue = {
  id: 'week-2',
  weekNumber: 2,
  date: '2026-06',
  intro: '本周精选三道题：一道椭圆综合大题（定值+最值）、一道指对函数多选题、一道数列不等式证明。',
  problems: [
    {
      id: 'w2-p1',
      content:
        '已知椭圆 $C$: $\\dfrac{x^{2}}{a^{2}}+\\dfrac{y^{2}}{b^{2}}=1\\ (a>b>0)$ 的左、右焦点分别为 $F_{1}$，$F_{2}$，点 $(\\sqrt{2},1)$ 在椭圆上，且椭圆上满足 $PF_{1}\\perp PF_{2}$ 的点 $P$ 有且仅有 $2$ 个.\n\n' +
        '**(1)** 求椭圆 $C$ 的方程；\n\n' +
        '**(2)** 设直线 $l$ 与椭圆 $C$ 交于 $A$，$B$ 两点（$A$ 在第一象限），与 $x$ 轴，$y$ 轴分别交于点 $M$，$N$，且 $\\overrightarrow{AM}=3\\overrightarrow{AN}$；点 $A$ 关于 $x$ 轴的对称点为 $D$，直线 $DN$ 与椭圆的另一个交点为 $E$.\n\n' +
        '**(i)** 记直线 $AN$，$DN$ 的斜率分别为 $k_{1}$，$k_{2}$，证明：$\\dfrac{k_{2}}{k_{1}}$ 为定值；\n\n' +
        '**(ii)** 求直线 $BE$ 的斜率的最小值.\n\n' +
        '![几何示意图](/figures/weekly-2-1.png)',
      solution:
        '**(1)** 由椭圆上满足 $PF_{1}\\perp PF_{2}$ 的点 $P$ 有且仅有 $2$ 个知以 $F_{1}F_{2}$ 为直径的圆与椭圆有 $2$ 个公共点，故 $b=c$，故椭圆 $C$: $\\dfrac{x^{2}}{2b^{2}}+\\dfrac{y^{2}}{b^{2}}=1$，代入 $(\\sqrt{2},1)$ 解得 $b^{2}=2$，故椭圆 $C$ 的方程为 $\\dfrac{x^{2}}{4}+\\dfrac{y^{2}}{2}=1$.\n\n' +
        '**(2)(i)** 设 $N(0,n)$，则由 $\\overrightarrow{AM}=3\\overrightarrow{AN}$ 知 $A\\left(x_{0},\\dfrac{3}{2}n\\right)\\Rightarrow D\\left(x_{0},-\\dfrac{3}{2}n\\right)$ $(n>0,x_{0}>0)$，故\n\n' +
        '$$k_{1}=\\frac{\\dfrac{3}{2}n-n}{x_{0}}=\\frac{n}{2x_{0}},\\quad k_{2}=\\frac{-\\dfrac{3}{2}n-n}{x_{0}}=-\\frac{5n}{2x_{0}},$$\n\n' +
        '故 $\\dfrac{k_{2}}{k_{1}}=-5$ 为定值.\n\n' +
        '**(ii)** 由(i)可知直线 $l$: $y=kx+n$ $\\left(k=k_{1}=\\dfrac{n}{2x_{0}}>0\\right)$，直线 $DN$: $y=-5kx+n$；\n\n' +
        '联立 $\\begin{cases}\\dfrac{x^{2}}{4}+\\dfrac{y^{2}}{2}=1\\\\[6pt]y=kx+n\\end{cases}$，整理得：$(2k^{2}+1)x^{2}+4nkx+(2n^{2}-4)=0$，\n\n' +
        '故由韦达定理：$x_{0}x_{B}=\\dfrac{2n^{2}-4}{2k^{2}+1}\\Rightarrow x_{B}=\\dfrac{2(n^{2}-2)}{(2k^{2}+1)x_{0}}\\Rightarrow y_{B}=kx_{B}+n=\\dfrac{2k(n^{2}-2)}{(2k^{2}+1)x_{0}}+n$；\n\n' +
        '同理可得：$x_{E}=\\dfrac{2(n^{2}-2)}{(50k^{2}+1)x_{0}}\\Rightarrow y_{E}=\\dfrac{-10k(n^{2}-2)}{(50k^{2}+1)x_{0}}+n$；\n\n' +
        '故\n\n' +
        '$$\\begin{aligned}x_{E}-x_{B}&=\\frac{2(n^{2}-2)}{(50k^{2}+1)x_{0}}-\\frac{2(n^{2}-2)}{(2k^{2}+1)x_{0}}=\\frac{-96k^{2}(n^{2}-2)}{(50k^{2}+1)(2k^{2}+1)x_{0}},\\\\[6pt]y_{E}-y_{B}&=\\frac{-10k(n^{2}-2)}{(50k^{2}+1)x_{0}}+n-\\frac{2k(n^{2}-2)}{(2k^{2}+1)x_{0}}-n=\\frac{-12k(10k^{2}+1)(n^{2}-2)}{(50k^{2}+1)(2k^{2}+1)x_{0}},\\end{aligned}$$\n\n' +
        '故\n\n' +
        '$$k_{BE}=\\frac{y_{E}-y_{B}}{x_{E}-x_{B}}=\\frac{10k^{2}+1}{8k}=\\frac{5k}{4}+\\frac{1}{8k}\\geqslant 2\\sqrt{\\frac{5k}{4}\\cdot\\frac{1}{8k}}=\\frac{\\sqrt{10}}{4},$$\n\n' +
        '当且仅当 $\\dfrac{5k}{4}=\\dfrac{1}{8k}\\Rightarrow k=\\dfrac{\\sqrt{10}}{10}$ 时取等号；此时 $\\dfrac{n}{2\\sqrt{4-\\dfrac{9}{2}n^{2}}}=\\dfrac{\\sqrt{10}}{10}\\Rightarrow n^{2}=\\dfrac{4}{7}<2$，故 $N$ 在椭圆 $C$ 内 $\\Rightarrow\\Delta>0$ 成立；\n\n' +
        '综上所述：直线 $BE$ 的斜率的最小值为 $\\dfrac{\\sqrt{10}}{4}$.\n\n$\\square$',
    },
    {
      id: 'w2-p2',
      content:
        '已知 $b>0$，$\\mathrm{e}^{b+\\ln 2}+2\\ln a\\mathrm{e}=4$，则下列说法错误的是（ ）\n\n' +
        '**A.** $b<\\ln \\dfrac{1}{a}$\n\n' +
        '**B.** $\\mathrm{e}^{b+\\ln 2}>4-2a$\n\n' +
        '**C.** $a\\mathrm{e}^{b}>1$\n\n' +
        '**D.** $b+a-1>0$',
      solution:
        '因为 $\\mathrm{e}^{b+\\ln 2}+2\\ln a\\mathrm{e}=4$，则 $2\\mathrm{e}^{b}+2(\\ln a+1)=4$，可得 $\\mathrm{e}^{b}+\\ln a=1$，\n\n' +
        '由 $b>0$，则 $\\mathrm{e}^{b}=1-\\ln a>1$，解得 $0<a<1$。\n\n' +
        '**对于选项A：** 由题意可得：$\\ln a=1-\\mathrm{e}^{b}$，则 $b-\\ln \\dfrac{1}{a}=b+\\ln a=b-\\mathrm{e}^{b}+1$，\n' +
        '令 $f(b)=b-\\mathrm{e}^{b}+1$ $(b>0)$，则 $f\'(b)=1-\\mathrm{e}^{b}<0$，\n' +
        '可知 $f(b)$ 在 $(0,+\\infty)$ 内单调递减，则 $f(b)<f(0)=0$，\n' +
        '所以 $b-\\ln \\dfrac{1}{a}<0$，即 $b<\\ln \\dfrac{1}{a}$，**故A正确**；\n\n' +
        '**对于选项B：** 因为 $\\mathrm{e}^{b+\\ln 2}=2\\mathrm{e}^{b}$，则 $\\mathrm{e}^{b+\\ln 2}>4-2a$ 等价于 $\\mathrm{e}^{b}>2-a$，\n' +
        '由题意可得：$\\mathrm{e}^{b}=1-\\ln a$，则 $\\mathrm{e}^{b}+a-2=a-\\ln a-1$，\n' +
        '令 $g(a)=a-\\ln a-1$ $(0<a<1)$，则 $g\'(a)=1-\\dfrac{1}{a}=\\dfrac{a-1}{a}<0$，\n' +
        '可知 $g(a)$ 在 $(0,1)$ 内单调递减，则 $g(a)>g(1)=0$，\n' +
        '所以 $\\mathrm{e}^{b}>2-a$，即 $\\mathrm{e}^{b+\\ln 2}>4-2a$，**故B正确**；\n\n' +
        '**对于选项C：** 因为 $\\mathrm{e}^{b}=1-\\ln a$，则 $a\\mathrm{e}^{b}>1$ 等价于 $a(1-\\ln a)>1$，即 $1-\\ln a>\\dfrac{1}{a}$，\n' +
        '令 $h(a)=\\dfrac{1}{a}+\\ln a-1$ $(0<a<1)$，则 $h\'(a)=-\\dfrac{1}{a^{2}}+\\dfrac{1}{a}=\\dfrac{a-1}{a^{2}}<0$，\n' +
        '可知 $h(a)$ 在 $(0,1)$ 内单调递减，则 $h(a)>h(1)=0$，\n' +
        '所以 $1-\\ln a<\\dfrac{1}{a}$，即 $a\\mathrm{e}^{b}<1$，**故C错误**；\n\n' +
        '**对于选项D：** 令 $m=\\mathrm{e}^{b}>1,\\ n=\\ln a<0$，则 $m+n=1$，即 $n=1-m$，\n' +
        '可得 $b=\\ln m,\\ a=\\mathrm{e}^{n}=\\mathrm{e}^{1-m}$，则 $b+a-1>0$ 等价于 $\\ln m+\\mathrm{e}^{1-m}-1>0$，\n' +
        '令 $k(m)=\\ln m+\\mathrm{e}^{1-m}-1$ $(m>1)$，则 $k\'(m)=\\dfrac{1}{m}-\\mathrm{e}^{1-m}=\\dfrac{\\mathrm{e}^{m}-\\mathrm{e}m}{m\\mathrm{e}^{m}}$，\n' +
        '令 $l(m)=\\mathrm{e}^{m}-\\mathrm{e}m$ $(m>1)$，则 $l\'(m)=\\mathrm{e}^{m}-\\mathrm{e}>0$，\n' +
        '可知 $l(m)$ 在 $(1,+\\infty)$ 内单调递增，则 $l(m)>l(1)=0$，即 $k\'(m)>0$，\n' +
        '可知 $k(m)$ 在 $(1,+\\infty)$ 内单调递增，则 $k(m)>k(1)=0$，\n' +
        '即 $\\ln m+\\mathrm{e}^{1-m}-1>0$，所以 $b+a-1>0$，**故D正确**。\n\n' +
        '综上所述，故选：**C**\n\n$\\square$',
    },
    {
      id: 'w2-p3',
      content:
        '已知正数数列 $\\{a_{n}\\}$，$\\{b_{n}\\}$ 满足：$a_{1}=1$，$b_{1}=2$，$a_{n+1}=a_{n}+\\dfrac{b_{n}}{a_{n}}$，$b_{n+1}=b_{n}+\\dfrac{a_{n}}{b_{n}}$。求证：\n\n' +
        '**(1)** $50<b_{50}<a_{50}<51$；\n\n' +
        '**(2)** $a_{50}-b_{50}<\\dfrac{1}{2450}$',
      solution:
        '**(1)** $a_{2}=1+2=3$，$b_{2}=2+\\dfrac{1}{2}=\\dfrac{5}{2}$。\n\n' +
        '下面用数学归纳法证明：$n<b_{n}<a_{n}\\leq n+1$ 对 $n\\geq 2$ 恒成立。\n\n' +
        '$n=2$ 时，$2<b_{2}<a_{2}\\leq 3$，结论成立；假设 $n=k$ $(k\\geq 2)$ 时结论成立，\n\n' +
        '即 $k<b_{k}<a_{k}\\leq k+1\\Rightarrow \\dfrac{1}{a_{k}}<\\dfrac{1}{b_{k}}<\\dfrac{1}{k}\\Rightarrow \\dfrac{1}{a_{k}}+\\dfrac{1}{b_{k}}<\\dfrac{2}{k}$。\n\n' +
        '则 $n=k+1$ 时，\n\n' +
        '$$\\begin{aligned}a_{k+1}-b_{k+1}&=a_{k}-b_{k}+\\frac{b_{k}}{a_{k}}-\\frac{a_{k}}{b_{k}}=a_{k}-b_{k}+\\frac{b_{k}^{2}-a_{k}^{2}}{a_{k}b_{k}}=(a_{k}-b_{k})\\left(1-\\frac{a_{k}+b_{k}}{a_{k}b_{k}}\\right)\\\\&=(a_{k}-b_{k})\\left[1-\\left(\\frac{1}{a_{k}}+\\frac{1}{b_{k}}\\right)\\right]>(a_{k}-b_{k})\\left(1-\\frac{2}{k}\\right)\\geq 0\\end{aligned}$$\n\n' +
        '$\\Rightarrow a_{k+1}>b_{k+1}$；\n\n' +
        '且 $a_{k+1}=a_{k}+\\dfrac{b_{k}}{a_{k}}<k+1+1=k+2$，$b_{k+1}=b_{k}+\\dfrac{a_{k}}{b_{k}}>k+1$，\n\n' +
        '于是 $k+1<b_{k+1}<a_{k+1}<k+2$，即 $n=k+1$ 时结论也成立。\n\n' +
        '综上，$n<b_{n}<a_{n}\\leq n+1$ 对 $n\\geq 2$ 恒成立，且等号成立当且仅当 $n=2$。\n\n' +
        '所以 $50<b_{50}<a_{50}<51$。\n\n' +
        '**(2)** 由 (1) 知 $k\\geq 2$ 时，$a_{k+1}-b_{k+1}=(a_{k}-b_{k})\\left[1-\\left(\\dfrac{1}{a_{k}}+\\dfrac{1}{b_{k}}\\right)\\right]<(a_{k}-b_{k})\\left(1-\\dfrac{2}{k+1}\\right)$\n\n' +
        '因为 $n<b_{n}<a_{n}\\leq n+1$ 对 $n\\geq 2$ 恒成立，故 $0<a_{k}-b_{k}<1$，\n\n' +
        '$\\Rightarrow \\dfrac{a_{k+1}-b_{k+1}}{a_{k}-b_{k}}<1-\\dfrac{2}{k+1}=\\dfrac{k-1}{k+1}$，\n\n' +
        '设 $c_{k}=a_{k}-b_{k}$，\n\n' +
        '则 $\\dfrac{c_{3}}{c_{2}}\\cdot\\dfrac{c_{4}}{c_{3}}\\cdots\\dfrac{c_{50}}{c_{49}}<\\dfrac{1}{3}\\times\\dfrac{2}{4}\\times\\dfrac{3}{5}\\times\\cdots\\times\\dfrac{48}{50}$\n\n' +
        '整理得 $\\dfrac{c_{50}}{c_{2}}<\\dfrac{2}{49\\times 50}$\n\n' +
        '所以 $a_{50}-b_{50}<\\dfrac{2}{49\\times 50}(a_{2}-b_{2})$\n\n' +
        '又 $a_{2}=3$，$b_{2}=\\dfrac{5}{2}$，代入得 $a_{50}-b_{50}<\\dfrac{1}{2450}$\n\n$\\square$',
    },
  ],
};

export const weeklyIssues: WeeklyIssue[] = [week2, week1];
