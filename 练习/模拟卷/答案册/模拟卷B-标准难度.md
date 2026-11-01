# 全国大学生数学竞赛初赛模拟卷 B（非数学专业 A 类 · 标准难度）

> **原创模拟卷 · 由 CMC 备考项目命题组命制**
> **定位**：全真模拟（第二轮使用；难度对标第 15—17 届非数学 A 类初赛真题）
> **考试形式**：闭卷｜**时间**：150 分钟｜**满分**：100 分
> **命题说明**：本卷不照搬历年真题，数值、结构、问法均为原创设计；整体难度、题位布局与近三届 A 类真题保持一致（填空 5×6 + 解答 5×14；卷末第 5、6 题为拉分层）。八大板块全覆盖：极限、一元微分（含证明）、一元积分、多元微分、多元积分（含 Gauss 公式）、常微分方程（换元求解型）、级数、解析几何。建议严格按照 150 分钟计时、用答题纸书写，作为第二轮全真模拟。各题与历年真题的呼应关系及差异说明见卷末「命题双向细目表」。

---

## 卷面结构

| 题号 | 一 | 二 | 三 | 四 | 五 | 六 | 总分 |
|---|---|---|---|---|---|---|---|
| 满分 | 30 | 14 | 14 | 14 | 14 | 14 | 100 |
| 形式 | 填空题 ×5 | 解答题 | 解答题 | 解答题 | 解答题 | 解答题 | |

> **注意事项**：所有答题都须写在本试卷指定的答题区域内；如答题空白不够，可写在当页背面，并标明题号。

---

## 一、填空题（本题 30 分，每小题 6 分）

**(1)** 设 $`f(x) = \displaystyle\int_0^{x}\arctan t\,\mathrm{d}t`$，则 $`\lim\limits_{x\to 0}\dfrac{f(x)-\dfrac{x^2}{2}}{x^4} = \underline{\qquad}`$。

> **答案**：$`-\dfrac{1}{12}`$
>
> **解答**：这是 $`\dfrac{0}{0}`$ 型。用洛必达法则（$`f'(x) = \arctan x`$）：
>
> ```math
> \lim_{x\to 0}\frac{f(x)-\dfrac{x^2}{2}}{x^4} = \lim_{x\to 0}\frac{\arctan x - x}{4x^3}.
> ```
>
> 再对 $`\arctan x`$ 作三阶 Taylor 展开：$`\arctan x = x - \dfrac{x^3}{3} + o(x^3)`$，故
>
> ```math
> \lim_{x\to 0}\frac{\arctan x - x}{4x^3} = \lim_{x\to 0}\frac{-\dfrac{x^3}{3}+o(x^3)}{4x^3} = -\frac{1}{12}.
> ```
>

**(2)** 设 $`f(x) = x^2\mathrm{e}^{2x}`$，则 $`f^{(n)}(0) = \underline{\qquad}`$（用 $`n`$ 表示，$`n\ge 2`$）。

> **答案**：$`n(n-1)\cdot 2^{\,n-2}`$
>
> **解答**：取 $`u = x^2`$，$`v = \mathrm{e}^{2x}`$。由 Leibniz 公式
>
> ```math
> f^{(n)}(0) = \sum_{k=0}^{n}C_n^k\,u^{(k)}(0)\,v^{(n-k)}(0).
> ```
>
> 逐步检查 $`u^{(k)}(0) = \left(x^2\right)^{(k)}\Big|_0`$ 的取值：$`k=0`$ 时为 $`x^2\big|_0 = 0`$；$`k=1`$ 时为 $`2x\big|_0 = 0`$；$`k=2`$ 时为 $`2`$；$`k\ge 3`$ 时恒为 $`0`$。故和式中**只剩 $`k=2`$ 一项**：
>
> ```math
> f^{(n)}(0) = C_n^2\cdot 2\cdot\left(\mathrm{e}^{2x}\right)^{(n-2)}\Big|_0 = C_n^2\cdot 2\cdot 2^{\,n-2} = \frac{n(n-1)}{2}\cdot 2\cdot 2^{\,n-2} = n(n-1)\cdot 2^{\,n-2}.
> ```
>
> （验证：$`n=2`$ 时 $`f''(0) = 2`$ ✓；$`n=3`$ 时 $`f'''(0) = 12`$ ✓。）

**(3)** 经过两平面 $`2x - y + 3z - 5 = 0`$ 与 $`x + 2y - z + 2 = 0`$ 的交线，且平行于 $`z`$ 轴的平面方程为 $`\underline{\qquad}`$。

> **答案**：$`5x + 5y + 1 = 0`$
>
> **解答**：过两平面交线的平面束方程为
>
> ```math
> \lambda\left(2x - y + 3z - 5\right) + \mu\left(x + 2y - z + 2\right) = 0,
> ```
>
> 即
>
> ```math
> (2\lambda+\mu)x + (-\lambda+2\mu)y + (3\lambda-\mu)z + (-5\lambda+2\mu) = 0.
> ```
>
> 平面平行于 $`z`$ 轴 $`\iff`$ 其法向量的 $`z`$ 分量为零 $`\iff 3\lambda - \mu = 0`$，取 $`\mu = 3\lambda`$ 代入并约去 $`\lambda`$：
>
> ```math
> 5x + 5y + 1 = 0.
> ```
>

**(4)** $`\displaystyle\int_0^{\frac{\pi}{2}}\mathrm{e}^{x}\cos x\,\mathrm{d}x = \underline{\qquad}`$。

> **答案**：$`\dfrac{\mathrm{e}^{\frac{\pi}{2}}-1}{2}`$
>
> **解答**：分部积分两次（或直接用公式 $`\int \mathrm{e}^{x}\cos x\,\mathrm{d}x = \dfrac{\mathrm{e}^x(\sin x+\cos x)}{2}+C`$）：
>
> ```math
> \int_0^{\frac{\pi}{2}}\mathrm{e}^{x}\cos x\,\mathrm{d}x = \left[\frac{\mathrm{e}^x(\sin x+\cos x)}{2}\right]_0^{\frac{\pi}{2}} = \frac{\mathrm{e}^{\frac{\pi}{2}}(1+0)}{2} - \frac{1\cdot(0+1)}{2} = \frac{\mathrm{e}^{\frac{\pi}{2}}-1}{2}.
> ```
>

**(5)** 设 $`L`$ 为圆周 $`(x-1)^2 + y^2 = 1`$，则 $`\displaystyle\oint_L \left(x^2+y^2\right)\mathrm{d}s = \underline{\qquad}`$。

> **答案**：$`4\pi`$
>
> **解答**：在圆 $`L`$ 上有 $`x^2 + y^2 = 2x`$（把圆周方程展开即得），故
>
> ```math
> \oint_L\left(x^2+y^2\right)\mathrm{d}s = \oint_L 2x\,\mathrm{d}s = 2\oint_L x\,\mathrm{d}s.
> ```
>
> 由 $`L`$ 关于直线 $`x = 1`$ 对称，$`\displaystyle\oint_L (x-1)\,\mathrm{d}s = 0`$，于是
>
> ```math
> \oint_L x\,\mathrm{d}s = \oint_L 1\,\mathrm{d}s = 2\pi\cdot 1 = 2\pi,
> ```
>
> 所以原式 $`= 2\cdot 2\pi = 4\pi`$。
> （也可靠参数化验证：$`x = 1+\cos t`$，$`y = \sin t`$，$`\mathrm{d}s = \mathrm{d}t`$，$`\oint(x^2+y^2)\,\mathrm{d}s = \int_0^{2\pi}(2+2\cos t)\,\mathrm{d}t = 4\pi`$ ✓。）

---

## 二、（本题 14 分）

求微分方程

```math
2xy\,\dfrac{\mathrm{d}y}{\mathrm{d}x} = x^2 + y^2 \qquad (x > 0)
```

的通解；并求满足 $`y(1) = 2`$ 的特解（写出 $`y`$ 关于 $`x`$ 的显式表达式）。

> **解答**：
>
> **(1) 换元化线性（5 分）**：令 $`u = y^2`$，则 $`\dfrac{\mathrm{d}u}{\mathrm{d}x} = 2y\dfrac{\mathrm{d}y}{\mathrm{d}x}`$，原方程化为
>
> ```math
> x\,u' = x^2 + u,\qquad\text{即}\qquad u' - \frac{1}{x}u = x.
> ```
>
> 这是一阶线性方程，$`P(x) = -\dfrac{1}{x}`$，$`Q(x) = x`$。
>
> **(2) 求解线性方程（5 分）**：积分因子
>
> ```math
> \mathrm{e}^{\int P\,\mathrm{d}x} = \mathrm{e}^{-\ln x} = \frac{1}{x},
> ```
>
> 两边乘 $`\dfrac{1}{x}`$：
>
> ```math
> \left(\frac{u}{x}\right)' = 1,\qquad \frac{u}{x} = x + C,\qquad u = x^2 + Cx.
> ```
>
> 回代 $`u = y^2`$，得通解
>
> ```math
> y^2 = x^2 + Cx.
> ```
>
> （验证：两边求导得 $`2yy' = 2x + C`$，故 $`2xyy' = 2x^2 + Cx = (x^2+Cx) + x^2 = y^2 + x^2`$ ✓。）
>
> **(3) 定常数（4 分）**：由 $`y(1) = 2`$ 得 $`4 = 1 + C`$，即 $`C = 3`$，故特解满足
>
> ```math
> y^2 = x^2 + 3x.
> ```
>
> 由 $`y(1) = 2 > 0`$ 及连续性，取正支：
>
> ```math
> y = \sqrt{x^2 + 3x}\qquad (x>0).
> ```
>

---

## 三、（本题 14 分）

计算曲面积分

```math
I = \iint_S x^3\,\mathrm{d}y\,\mathrm{d}z + y^3\,\mathrm{d}z\,\mathrm{d}x + z^3\,\mathrm{d}x\,\mathrm{d}y,
```

其中 $`S`$ 为上半球面 $`x^2 + y^2 + z^2 = 1`$（$`z\ge 0`$）取上侧。

> **解答**：
>
> **(1) 补面（4 分）**：记 $`\Sigma_0`$ 为圆盘 $`z = 0`$（$`x^2+y^2\le 1`$）取**下侧**，则 $`S + \Sigma_0`$ 构成半球体
>
> ```math
> \Omega = \left\{(x,y,z)\ \middle|\ x^2+y^2+z^2\le 1,\ z\ge 0\right\}
> ```
>
> 的封闭外侧边界。由 Gauss 公式：
>
> ```math
> I + \iint_{\Sigma_0} x^3\,\mathrm{d}y\,\mathrm{d}z + y^3\,\mathrm{d}z\,\mathrm{d}x + z^3\,\mathrm{d}x\,\mathrm{d}y = \iiint_\Omega \left(3x^2+3y^2+3z^2\right)\mathrm{d}x\,\mathrm{d}y\,\mathrm{d}z.
> ```
>
> **(2) 底面贡献为零（3 分）**：在 $`\Sigma_0`$ 上 $`z = 0`$，第三项被积函数 $`z^3 = 0`$；且在 $`yOz`$ 面、$`zOx`$ 面上，$`\Sigma_0`$ 的投影均为线段（面积为零），相应两项积分为零。故 $`\displaystyle\iint_{\Sigma_0}(\cdots) = 0`$。
>
> **(3) 球坐标计算三重积分（7 分）**：用球坐标 $`x = \rho\sin\varphi\cos\theta`$，$`y = \rho\sin\varphi\sin\theta`$，$`z = \rho\cos\varphi`$，其中
>
> ```math
> 0\le \theta\le 2\pi,\qquad 0\le \varphi\le \frac{\pi}{2},\qquad 0\le \rho\le 1.
> ```
>
> 于是
>
> ```math
> I = 3\iiint_\Omega \left(x^2+y^2+z^2\right)\mathrm{d}V = 3\int_0^{2\pi}\mathrm{d}\theta\int_0^{\frac{\pi}{2}}\mathrm{d}\varphi\int_0^1 \rho^2\cdot\rho^2\sin\varphi\,\mathrm{d}\rho.
> ```
>
> 逐层积分：
>
> ```math
> \int_0^1\rho^4\,\mathrm{d}\rho = \frac{1}{5},\qquad \int_0^{\frac{\pi}{2}}\sin\varphi\,\mathrm{d}\varphi = 1,\qquad \int_0^{2\pi}\mathrm{d}\theta = 2\pi.
> ```
>
> 所以
>
> ```math
> I = 3\cdot 2\pi\cdot 1\cdot\frac{1}{5} = \frac{6\pi}{5}.
> ```
>

---

## 四、（本题 14 分）

求函数

```math
f(x,y) = x^2 + 2y^2 - x^2y^2
```

在闭区域 $`D = \left\{(x,y)\ \middle|\ x^2+y^2\le 4\right\}`$ 上的最大值与最小值。

> **解答**：
>
> **(1) 内部驻点（5 分）**：令
>
> ```math
> f_x = 2x\left(1-y^2\right) = 0,\qquad f_y = 2y\left(2-x^2\right) = 0.
> ```
>
> 由 $`f_x = 0`$ 得 $`x = 0`$ 或 $`y^2 = 1`$；由 $`f_y = 0`$ 得 $`y = 0`$ 或 $`x^2 = 2`$。四种组合中（$`x=0`$ 与 $`x^2=2`$ 矛盾、$`y^2=1`$ 与 $`y=0`$ 矛盾）实际给出两类驻点：
>
> ```math
> (0,0);\qquad \left(\pm\sqrt{2},\ \pm 1\right)\ (\text{四个点}).
> ```
>
> 对应函数值：$`f(0,0) = 0`$；$`f\left(\pm\sqrt{2},\pm 1\right) = 2 + 2 - 2 = 2`$。
>
> **(2) 边界上的最值（6 分）**：在边界 $`x^2+y^2 = 4`$ 上，$`y^2 = 4-x^2`$，代入得
>
> ```math
> f = x^2 + 2\left(4-x^2\right) - x^2\left(4-x^2\right) = x^4 - 5x^2 + 8.
> ```
>
> 令 $`t = x^2 \in [0,4]`$，则 $`f = t^2 - 5t + 8 = \left(t-\dfrac{5}{2}\right)^2 + \dfrac{7}{4}`$。
> - 最小值：$`t = \dfrac{5}{2}`$ 时取 $`f = \dfrac{7}{4}`$（对应 $`x = \pm\sqrt{\dfrac{5}{2}}`$，$`y = \pm\sqrt{\dfrac{3}{2}}`$）；
> - 最大值：比较端点 $`t = 0`$（$`f = 8`$）与 $`t = 4`$（$`f = 4`$），得 $`t=0`$ 时 $`f = 8`$（对应 $`(0,\pm 2)`$）。
>
> **(3) 比较（3 分）**：汇总所有候选值 $`\left\{0,\ 2,\ \dfrac{7}{4},\ 8,\ 4\right\}`$：
>
> ```math
> \max_D f = 8\quad\left(\text{在}\ (0,\pm 2)\ \text{处}\right);\qquad \min_D f = 0\quad\left(\text{在}\ (0,0)\ \text{处}\right).
> ```
>

---

## 五、（本题 14 分）

设函数 $`f(x)`$ 在 $`[0,1]`$ 上连续，在 $`(0,1)`$ 内可导，$`f(0) = 0`$，$`f(1) = 3`$。证明：存在**两两互异**的点 $`\xi_1,\xi_2,\xi_3\in(0,1)`$，使得

```math
f'(\xi_1)\,f'(\xi_2)\,\left(2-\xi_3\right)\ \ge\ 6.
```

> **解答**：
>
> **(1) 用介值定理构造分界点 $`\xi_3`$（5 分）**：令
>
> ```math
> F(x) = f(x) + 2x - 3.
> ```
>
> 则 $`F`$ 在 $`[0,1]`$ 上连续，且
>
> ```math
> F(0) = -3 < 0,\qquad F(1) = f(1) + 2 - 3 = 2 > 0.
> ```
>
> 由介值定理，存在 $`\xi_3\in(0,1)`$ 使 $`F(\xi_3) = 0`$，即
>
> ```math
> f(\xi_3) = 3 - 2\xi_3.
> ```
>
> **(2) 在两个子区间上分别用 Lagrange 中值定理（5 分）**：
> 在 $`[0,\xi_3]`$ 上：存在 $`\xi_1\in(0,\xi_3)`$，使
>
> ```math
> f'(\xi_1) = \frac{f(\xi_3)-f(0)}{\xi_3 - 0} = \frac{3-2\xi_3}{\xi_3}.
> ```
>
> 在 $`[\xi_3,1]`$ 上：存在 $`\xi_2\in(\xi_3,1)`$，使
>
> ```math
> f'(\xi_2) = \frac{f(1)-f(\xi_3)}{1-\xi_3} = \frac{3-(3-2\xi_3)}{1-\xi_3} = \frac{2\xi_3}{1-\xi_3}.
> ```
>
> 显然 $`0 < \xi_1 < \xi_3 < \xi_2 < 1`$，即 $`\xi_1,\xi_2,\xi_3`$ 两两互异。
>
> **(3) 估计乘积（4 分）**：于是
>
> ```math
> f'(\xi_1)\,f'(\xi_2) = \frac{3-2\xi_3}{\xi_3}\cdot\frac{2\xi_3}{1-\xi_3} = \frac{2\left(3-2\xi_3\right)}{1-\xi_3},
> ```
>
> 从而
>
> ```math
> f'(\xi_1)\,f'(\xi_2)\left(2-\xi_3\right) = \frac{2\left(3-2\xi_3\right)\left(2-\xi_3\right)}{1-\xi_3}.
> ```
>
> 由 $`\xi_3\in(0,1)`$，只需验证
>
> ```math
> \left(3-2\xi_3\right)\left(2-\xi_3\right)\ \ge\ 3\left(1-\xi_3\right),
> ```
>
> 即 $`2\xi_3^2 - 4\xi_3 + 3\ \ge\ 0`$。该二次三项式的判别式 $`\Delta = 16 - 24 = -8 < 0`$ 且首项系数为正，故对一切实数 $`\xi_3`$ 恒成立。因此
>
> ```math
> f'(\xi_1)\,f'(\xi_2)\left(2-\xi_3\right)\ \ge\ \frac{2\cdot 3\left(1-\xi_3\right)}{1-\xi_3} = 6. \qquad\blacksquare
> ```
>

---

## 六、（本题 14 分）

设 $`p`$ 为实数，讨论级数

```math
\sum_{n=1}^{\infty}(-1)^n\left(\sqrt{n+1}-\sqrt{n}\right)^p
```

的收敛性（须区分绝对收敛、条件收敛与发散）。

> **解答**：
>
> **(1) 化简通项（3 分）**：记
>
> ```math
> u_n = \left(\sqrt{n+1}-\sqrt{n}\right)^p = \left(\frac{1}{\sqrt{n+1}+\sqrt{n}}\right)^p.
> ```
>
> 由于 $`\sqrt{n+1}+\sqrt{n} \sim 2\sqrt{n}`$（$`n\to\infty`$），故
>
> ```math
> u_n \sim \frac{1}{\left(2\sqrt{n}\right)^p} = \frac{1}{2^p\,n^{p/2}}.
> ```
>
> **(2) 绝对收敛性（4 分）**：与 $`p`$ 级数比较：$`\displaystyle\sum_{n=1}^{\infty}u_n`$ 收敛 $`\iff`$ $`\dfrac{p}{2} > 1`$ $`\iff`$ $`p > 2`$。故当 $`p > 2`$ 时原级数**绝对收敛**。
>
> **(3) 条件收敛性（4 分）**：当 $`p > 0`$ 时，数列 $`\left\{\sqrt{n+1}+\sqrt{n}\right\}`$ 严格单调递增，故 $`\left\{u_n\right\}`$ 严格单调递减，且 $`\lim\limits_{n\to\infty} u_n = 0`$。由 Leibniz 判别法，$`\displaystyle\sum_{n=1}^{\infty}(-1)^n u_n`$ 收敛；而由 (2)，当 $`0 < p \le 2`$ 时 $`\displaystyle\sum u_n`$ 发散。故当 $`0 < p \le 2`$ 时原级数**条件收敛**。
>
> **(4) 发散情形（3 分）**：当 $`p \le 0`$ 时，$`\sqrt{n+1}-\sqrt{n} = \dfrac{1}{\sqrt{n+1}+\sqrt{n}} \to 0^+`$，故
>
> ```math
> u_n = \left(\sqrt{n+1}-\sqrt{n}\right)^p \to +\infty\qquad(p<0)\ \text{或}\ u_n\equiv 1\qquad(p=0),
> ```
>
> 通项不趋于零，级数发散。
>
> **结论**：$`p > 2`$ 时绝对收敛；$`0 < p \le 2`$ 时条件收敛；$`p\le 0`$ 时发散。

---

## 命题双向细目表

> 说明：本表逐题标注考点、难度与"与历年真题的呼应关系"（呼应 = 同族题型或同考法；差异 = 本卷在哪一维做了重新设计）。全套为原创命题，数值与问法均不照搬真题。

| 题号 | 分值 | 考点 | 难度 | 与历年真题的呼应关系 |
|---|---|---|---|---|
| 一(1) | 6 | 极限：变限积分 + 洛必达 + 三阶 Taylor（"变限积分型极限"模板） | 中 | 呼应 13 届一(3)、17 届一(3)（变限积分型极限的填空传统）；差异：被积函数为 $`\arctan t`$、结论 $`\arctan x - x`$ 型，答案 $`-\frac{1}{12}`$ |
| 一(2) | 6 | 高阶导数：Leibniz 公式 + "点值归零" | 中 | 呼应 12 届一(2)、8 届一(4)（n 阶导填空位，4 届直接考）；差异：$`f = x^2\mathrm{e}^{2x}`$、求一般 $`n`$，答案 $`n(n-1)2^{n-2}`$ |
| 一(3) | 6 | 空间解析几何：平面束 + "平行于 $`z`$ 轴"的条件翻译 | 中 | 呼应 16 届一(4)、13 届补一(3)（平面束与投影）；差异：用平面束求"平行 $`z`$ 轴"的平面，法向量 $`z`$ 分量置零，答案 $`5x+5y+1=0`$ |
| 一(4) | 6 | 一元积分：$`\int \mathrm{e}^x\cos x`$ 型分部积分 | 中 | 呼应 16 届一(1)（定积分填空位）；差异：指数-三角振荡型分部，答案 $`\frac{\mathrm{e}^{\pi/2}-1}{2}`$ |
| 一(5) | 6 | 多元积分：第一类曲线积分 + 方程化简 + 对称性 | 中 | 呼应 17 届一(5)（对弧长曲线积分首考；该题用"方程在曲线上化简被积函数"技巧）；差异：（旋转）圆心 $`(1,0)`$、$`x^2+y^2 \to 2x`$、质心对称性，答案 $`4\pi`$ |
| 二 | 14 | 常微分方程：换元 $`u=y^2`$ 化一阶线性 + 初值 | 中 | 呼应 16 届二（$`u = y^2`$ 换元路径）、17 届三（换元化可解）；差异：换元后方程为 $`u' - u/x = x`$（系数最简款），通解 $`y^2 = x^2+Cx`$、特解 $`y=\sqrt{x^2+3x}`$ |
| 三 | 14 | 多元积分：第二类曲面积分 + Gauss 公式（补面）+ 球坐标 | 中 | 呼应 16 届四（上半球面 + 补面 + Gauss 的结构）、15 届一(5) 的几何背景；差异：被积函数为 $`x^3,y^3,z^3`$（div $`=3r^2`$）、底面贡献为零的对称讨论，答案 $`\frac{6\pi}{5}`$ |
| 四 | 14 | 多元微分：闭区域最值（内部驻点 + 边界化一元 + 比较） | 中 | 呼应 16 届三（连续、单调性与最值的 14 分地位）、14 届二（二次函数化而归约）；差异：圆域约束下"内部坐坡 + 边界四次函数"双轨结构，$`\max = 8`$、$`\min = 0`$ |
| 五 | 14 | 一元微分（证明）：介值定理造分界点 + 分段两次 Lagrange + 二次式判别 | 难 | 呼应 14 届补二四（$`f'(\xi_1)f'(\xi_2)\sqrt{1-\xi_3}\ge 2`$ 的三点乘积型）；差异：权因子改为 $`(2-\xi_3)`$、端点值 3、分界函数 $`f+2x-3`$，收尾用二次式判别式恒正 |
| 六 | 14 | 级数：交错级数 + 估阶 $`u_n\sim c\,n^{-p/2}`$ + 绝对/条件收敛的分界讨论 | 中–难 | 呼应 12 届七(2)（交错级数条件收敛的讨论传统）、17 届五（级数判敛）；差异：通项 $`(\sqrt{n+1}-\sqrt{n})^p`$ 含参数 $`p`$，三分界 $`p>2`$ / $`0<p\le 2`$ / $`p\le 0`$ |
