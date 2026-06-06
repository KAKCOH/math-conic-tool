// 4.2 导数的运算 讲义
const lecture4_2 = `
## 导数的运算

### 一、四则运算法则

设 $u(x)$、$v(x)$ 均可导，则：

$$
\\begin{aligned}
(u \\pm v)' &= u' \\pm v' \\\\[4pt]
(u \\cdot v)' &= u'v + uv' \\\\[4pt]
\\left(\\frac{u}{v}\\right)' &= \\frac{u'v - uv'}{v^2} \\quad (v \\neq 0)
\\end{aligned}
$$

> **记忆口诀**：乘法的导数是「前导后不导 + 前不导后导」，除法的导数是「上导下不导 减 上不导下导，再除以下平方」。

常数因子可直接提出：$(Cu)' = C \\cdot u'$（$C$ 为常数）。

### 二、复合函数求导（链式法则）

若 $y = f(u)$，$u = g(x)$，且 $f$、$g$ 均可导，则复合函数 $y = f(g(x))$ 的导数为：

$$y'_x = y'_u \\cdot u'_x = f'(g(x)) \\cdot g'(x)$$

> **核心思想**：从外向内逐层求导，每层相乘。

**示例**：
- $(\\sin 2x)' = \\cos 2x \\cdot 2 = 2\\cos 2x$
- $(e^{-x^2})' = e^{-x^2} \\cdot (-2x) = -2xe^{-x^2}$
- $(\\ln(3x+1))' = \\frac{1}{3x+1} \\cdot 3 = \\frac{3}{3x+1}$

### 三、常见求导技巧

**1. 积的多次求导**（莱布尼茨公式，仅了解）：

对 $n$ 次可导的 $u$、$v$，$(uv)^{(n)} = \\sum_{k=0}^{n} C_n^k \\, u^{(n-k)} v^{(k)}$。

**2. 复合函数的二阶导数**：

$[f(g(x))]'' = f''(g(x)) \\cdot [g'(x)]^2 + f'(g(x)) \\cdot g''(x)$

### 四、对数求导法

对于形如 $y = f(x)^{g(x)}$ 的幂指函数，两边取对数后求导：

$$\\ln y = g(x) \\cdot \\ln f(x) \\quad \\Rightarrow \\quad \\frac{y'}{y} = g'(x)\\ln f(x) + g(x) \\cdot \\frac{f'(x)}{f(x)}$$

### 五、导数运算中的常见误区

1. **忘记链式法则**：$(\\ln x^2)' \\neq \\frac{1}{x^2}$，应为 $(\\ln x^2)' = \\frac{2x}{x^2} = \\frac{2}{x}$（先化简也行）。
2. **商法则分子符号**：$\\left(\\frac{1}{x}\\right)' = \\frac{0 \\cdot x - 1 \\cdot 1}{x^2} = -\\frac{1}{x^2}$，注意分子是 $u'v - uv'$ 而非 $u'v + uv'$。
3. **$(e^{x^2})' \\neq e^{x^2}$**：正确为 $(e^{x^2})' = e^{x^2} \\cdot 2x$。

### 六、关键公式表

| 函数 | 求导公式 |
|------|----------|
| $\\tan x$ | $\\frac{1}{\\cos^2 x} = \\sec^2 x$ |
| $\\cot x$ | $-\\frac{1}{\\sin^2 x} = -\\csc^2 x$ |
| $\\arcsin x$ | $\\frac{1}{\\sqrt{1-x^2}}$ |
| $\\arccos x$ | $-\\frac{1}{\\sqrt{1-x^2}}$ |
| $\\arctan x$ | $\\frac{1}{1+x^2}$ |
`;

export default lecture4_2;
