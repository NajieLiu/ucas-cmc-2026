# 全国大学生数学竞赛初赛模拟卷 A（非数学专业 A 类 · 基础巩固）

> **原创模拟卷 · 由 CMC 备考项目命题组命制**
> **定位**：基础巩固（第一轮自测用；目标：填空全对 + 解答前 2 道拿满）
> **考试形式**：闭卷｜**时间**：150 分钟｜**满分**：100 分
> **命题说明**：本卷不照搬历年真题，数值、结构、问法均为原创设计；难度对标"回归教材"层级——所有考点均为大纲内的基本方法（等价无穷小与泰勒、隐函数微分、定积分基本技巧、换元型一阶方程、幂级数收敛域、Green 公式、区间再现、单调性证明、幂级数求和）。八大板块全覆盖；本卷定位为第一轮自测卷，建议在有详解对照的状态下使用，用于暴露"记不牢、不规范"类问题。各题与历年真题的呼应关系及差异说明见卷末「命题双向细目表」。

---

## 卷面结构

| 题号 | 一 | 二 | 三 | 四 | 五 | 六 | 总分 |
|---|---|---|---|---|---|---|---|
| 满分 | 30 | 14 | 14 | 14 | 14 | 14 | 100 |
| 形式 | 填空题 ×5 | 解答题 | 解答题 | 解答题 | 解答题 | 解答题 | |

> **注意事项**：所有答题都须写在本试卷指定的答题区域内；如答题空白不够，可写在当页背面，并标明题号。

---

## 一、填空题（本题 30 分，每小题 6 分）

**(1)** $`\lim\limits_{x\to 0}\dfrac{\mathrm{e}^{x}+\mathrm{e}^{-x}-2}{1-\cos x} = \underline{\qquad}`$。

> **答案**：$`2`$
>
> **解答**：由 Taylor 展开（$`x\to 0`$）：
>
> ```math
> \mathrm{e}^{x}+\mathrm{e}^{-x} = \left(1+x+\frac{x^2}{2}+o(x^2)\right)+\left(1-x+\frac{x^2}{2}+o(x^2)\right) = 2 + x^2 + o(x^2),
> ```
>
> ```math
> 1-\cos x = \frac{x^2}{2}+o(x^2).
> ```
>
> 于是
>
> ```math
> \lim_{x\to 0}\frac{\mathrm{e}^{x}+\mathrm{e}^{-x}-2}{1-\cos x} = \lim_{x\to 0}\frac{x^2+o(x^2)}{\dfrac{x^2}{2}+o(x^2)} = 2.
> ```
>
> （另解：分子 $`=\left(\mathrm{e}^{x/2}-\mathrm{e}^{-x/2}\right)^2`$，而 $`\mathrm{e}^{x/2}-\mathrm{e}^{-x/2}\sim x`$，故分子 $`\sim x^2`$，同样得 $`2`$。）

**(2)** 设 $`z = z(x,y)`$ 由方程 $`z + \ln z = xy`$（$`z>0`$）确定，则 $`\mathrm{d}z = \underline{\qquad}`$。

> **答案**：$`\mathrm{d}z = \dfrac{z\left(y\,\mathrm{d}x + x\,\mathrm{d}y\right)}{z+1}`$
>
> **解答**：对方程两边求全微分：
>
> ```math
> \mathrm{d}z + \frac{\mathrm{d}z}{z} = y\,\mathrm{d}x + x\,\mathrm{d}y,
> ```
>
> 即
>
> ```math
> \left(1+\frac{1}{z}\right)\mathrm{d}z = y\,\mathrm{d}x + x\,\mathrm{d}y,
> ```
>
> 解得
>
> ```math
> \mathrm{d}z = \frac{z\left(y\,\mathrm{d}x + x\,\mathrm{d}y\right)}{z+1}.
> ```
>
> （也可分别求偏导：$`\dfrac{\partial z}{\partial x} = \dfrac{yz}{z+1}`$，$`\dfrac{\partial z}{\partial y} = \dfrac{xz}{z+1}`$，结果一致。）

**(3)** $`\displaystyle\int_0^{\frac{\pi}{4}}\tan^2 x\,\mathrm{d}x = \underline{\qquad}`$。

> **答案**：$`1 - \dfrac{\pi}{4}`$
>
> **解答**：利用恒等式 $`\tan^2 x = \sec^2 x - 1`$：
>
> ```math
> \int_0^{\frac{\pi}{4}}\tan^2 x\,\mathrm{d}x = \int_0^{\frac{\pi}{4}}\left(\sec^2 x - 1\right)\mathrm{d}x = \Big[\tan x - x\Big]_0^{\frac{\pi}{4}} = 1 - \frac{\pi}{4}.
> ```
>

**(4)** 微分方程 $`\dfrac{\mathrm{d}y}{\mathrm{d}x} = (x+y)^2`$ 满足 $`y(0) = 0`$ 的解为 $`y = \underline{\qquad}`$。

> **答案**：$`y = \tan x - x`$
>
> **解答**：令 $`u = x + y`$，则 $`u' = 1 + y' = 1 + u^2`$，方程化为可分离变量方程
>
> ```math
> \frac{\mathrm{d}u}{1+u^2} = \mathrm{d}x.
> ```
>
> 积分得 $`\arctan u = x + C`$。由 $`y(0)=0`$ 得 $`u(0)=0`$，故 $`C = 0`$，即 $`u = \tan x`$，从而
>
> ```math
> y = u - x = \tan x - x.
> ```
>
> （验证：$`y' = \sec^2 x - 1 = \tan^2 x = (x+y)^2`$ ✓。）

**(5)** 幂级数 $`\displaystyle\sum_{n=1}^{\infty}\dfrac{(x+2)^n}{n^2\cdot 3^n}`$ 的收敛域为 $`\underline{\qquad}`$。

> **答案**：$`[-5,\,1]`$
>
> **解答**：记 $`a_n = \dfrac{1}{n^2\cdot 3^n}`$，则收敛半径
>
> ```math
> R = \lim_{n\to\infty}\frac{a_n}{a_{n+1}} = \lim_{n\to\infty}\frac{(n+1)^2\,3^{n+1}}{n^2\cdot 3^n} = 3,
> ```
>
> 故当 $`|x+2| < 3`$，即 $`-5 < x < 1`$ 时级数绝对收敛。
> 端点检验：当 $`x = 1`$ 时，级数为 $`\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^2}`$，收敛；
> 当 $`x = -5`$ 时，级数为 $`\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}`$，绝对收敛。
> 所以收敛域为 $`[-5,\,1]`$。

---

## 二、（本题 14 分）

已知直线 $`L`$：$`x = t`$，$`y = 1`$，$`z = t-1`$（$`t\in\mathbb{R}`$），平面 $`\pi`$：$`x + y = 3`$。

**(1)** 求直线 $`L`$ 与平面 $`\pi`$ 的交点；

**(2)** 求直线 $`L`$ 在平面 $`\pi`$ 上的投影直线方程（用两平面交线的形式表示）。

> **解答**：
>
> **(1)** 将 $`L`$ 的参数式代入 $`\pi`$ 的方程：$`t + 1 = 3`$，得 $`t = 2`$，故交点为
>
> ```math
> P(2,\,1,\,1).
> ```
>
> **(2)** 直线 $`L`$ 的方向向量为 $`\boldsymbol d = (1,\,0,\,1)`$，平面 $`\pi`$ 的法向量为 $`\boldsymbol n = (1,\,1,\,0)`$。
> 投影直线是"过 $`L`$ 且垂直于 $`\pi`$ 的平面 $`\pi_1`$"与 $`\pi`$ 的交线。$`\pi_1`$ 的法向量为
>
> ```math
> \boldsymbol n_1 = \boldsymbol d\times\boldsymbol n = \begin{vmatrix}\boldsymbol i&\boldsymbol j&\boldsymbol k\\ 1&0&1\\ 1&1&0\end{vmatrix} = (-1,\,1,\,1).
> ```
>
> 取 $`L`$ 上一点 $`(0,1,-1)`$，则 $`\pi_1`$ 的方程为
>
> ```math
> -(x-0) + (y-1) + (z+1) = 0,\qquad\text{即}\qquad -x + y + z = 0.
> ```
>
> 故投影直线方程为
>
> ```math
> \begin{cases}-x + y + z = 0,\\[2pt] x + y = 3.\end{cases}
> ```
>
> **验证**：(a) 投影直线含交点 $`P(2,1,1)`$：$`-2+1+1=0`$ ✓，$`2+1=3`$ ✓；(b) 投影直线的方向向量 $`\boldsymbol n_1\times\boldsymbol n = (-1,1,1)\times(1,1,0) = (-1,\,1,\,-2)`$ 满足 $`(-1,1,-2)\cdot(1,1,0)=0`$，即方向落在平面 $`\pi`$ 内 ✓。

---

## 三、（本题 14 分）

设 $`L`$ 为正方形区域 $`D = \{(x,y)\mid 0\le x\le 1,\ 0\le y\le 1\}`$ 的正向（逆时针）边界，计算曲线积分

```math
\oint_L x^2\,\mathrm{d}x + \left(\mathrm{e}^x + x^2 + y\right)\mathrm{d}y.
```

> **解答**：
>
> 记 $`P = x^2`$，$`Q = \mathrm{e}^x + x^2 + y`$，则
>
> ```math
> \frac{\partial Q}{\partial x} = \mathrm{e}^x + 2x,\qquad \frac{\partial P}{\partial y} = 0,
> ```
>
> 于是 $`\dfrac{\partial Q}{\partial x} - \dfrac{\partial P}{\partial y} = \mathrm{e}^x + 2x`$。由 Green 公式（$`L`$ 取正向）：
>
> ```math
> \oint_L P\,\mathrm{d}x + Q\,\mathrm{d}y = \iint_D\left(\mathrm{e}^x + 2x\right)\mathrm{d}x\,\mathrm{d}y.
> ```
>
> 在正方形上逐项积分：
>
> ```math
> \iint_D \mathrm{e}^x\,\mathrm{d}x\,\mathrm{d}y = \int_0^1\mathrm{e}^x\,\mathrm{d}x\int_0^1\mathrm{d}y = \mathrm{e}-1,
> ```
>
> ```math
> \iint_D 2x\,\mathrm{d}x\,\mathrm{d}y = \int_0^1 2x\,\mathrm{d}x\int_0^1\mathrm{d}y = 1.
> ```
>
> 所以
>
> ```math
> \oint_L x^2\,\mathrm{d}x + \left(\mathrm{e}^x+x^2+y\right)\mathrm{d}y = \left(\mathrm{e}-1\right) + 1 = \mathrm{e}.
> ```
>

---

## 四、（本题 14 分）

**(1)** 证明：当 $`0 < x < \dfrac{\pi}{2}`$ 时，$`\tan x > x`$；

**(2)** 证明：当 $`0 < x < \dfrac{\pi}{2}`$ 时，$`\tan x > x + \dfrac{x^3}{3}`$。

> **解答**：
>
> **(1)** 令 $`f(x) = \tan x - x`$，$`x\in\left[0,\dfrac{\pi}{2}\right)`$。则 $`f(0)=0`$，且
>
> ```math
> f'(x) = \sec^2 x - 1 = \tan^2 x > 0\qquad\left(0<x<\frac{\pi}{2}\right).
> ```
>
> 故 $`f`$ 在 $`\left[0,\dfrac{\pi}{2}\right)`$ 上严格单调递增，从而 $`f(x) > f(0) = 0`$，即 $`\tan x > x`$。
>
> **(2)** 令 $`g(x) = \tan x - x - \dfrac{x^3}{3}`$，$`x\in\left[0,\dfrac{\pi}{2}\right)`$。则 $`g(0)=0`$，且
>
> ```math
> g'(x) = \sec^2 x - 1 - x^2 = \tan^2 x - x^2 = \left(\tan x - x\right)\left(\tan x + x\right).
> ```
>
> 由 (1) 知 $`\tan x - x > 0`$；又 $`\tan x + x > 0`$（$`x>0`$），故 $`g'(x) > 0`$，$`g`$ 在 $`\left[0,\dfrac{\pi}{2}\right)`$ 上严格单调递增，从而
>
> ```math
> g(x) > g(0) = 0,\qquad\text{即}\qquad \tan x > x + \frac{x^3}{3}. \qquad\blacksquare
> ```
>

---

## 五、（本题 14 分）

计算下列定积分：

**(1)** $`I = \displaystyle\int_0^{\frac{\pi}{4}}\ln\left(1+\tan x\right)\mathrm{d}x`$；

**(2)** $`J = \displaystyle\int_0^{\pi}\frac{x\sin x}{1+\cos^2 x}\,\mathrm{d}x`$。

> **解答**：
>
> **(1)** 作换元 $`x = \dfrac{\pi}{4} - t`$：
>
> ```math
> I = \int_0^{\frac{\pi}{4}}\ln\left(1+\tan\left(\frac{\pi}{4}-t\right)\right)\mathrm{d}t.
> ```
>
> 由 $`\tan\left(\dfrac{\pi}{4}-t\right) = \dfrac{1-\tan t}{1+\tan t}`$，得
>
> ```math
> 1 + \tan\left(\frac{\pi}{4}-t\right) = 1 + \frac{1-\tan t}{1+\tan t} = \frac{2}{1+\tan t},
> ```
>
> 于是
>
> ```math
> I = \int_0^{\frac{\pi}{4}}\ln\frac{2}{1+\tan t}\,\mathrm{d}t = \ln 2\cdot\frac{\pi}{4} - \int_0^{\frac{\pi}{4}}\ln\left(1+\tan t\right)\mathrm{d}t = \frac{\pi\ln 2}{4} - I.
> ```
>
> 解得
>
> ```math
> I = \frac{\pi\ln 2}{8}.
> ```
>
> **(2)** 作换元 $`x = \pi - t`$：
>
> ```math
> J = \int_0^{\pi}\frac{(\pi-t)\sin(\pi-t)}{1+\cos^2(\pi-t)}\,\mathrm{d}t = \int_0^{\pi}\frac{(\pi-t)\sin t}{1+\cos^2 t}\,\mathrm{d}t = \pi\int_0^{\pi}\frac{\sin t}{1+\cos^2 t}\,\mathrm{d}t - J,
> ```
>
> 于是
>
> ```math
> 2J = \pi\int_0^{\pi}\frac{\sin x}{1+\cos^2 x}\,\mathrm{d}x.
> ```
>
> 计算右端：令 $`u = \cos x`$，$`\mathrm{d}u = -\sin x\,\mathrm{d}x`$，
>
> ```math
> \int_0^{\pi}\frac{\sin x}{1+\cos^2 x}\,\mathrm{d}x = \int_{-1}^{1}\frac{\mathrm{d}u}{1+u^2} = \left[\arctan u\right]_{-1}^{1} = \frac{\pi}{2}.
> ```
>
> 故 $`2J = \pi\cdot\dfrac{\pi}{2} = \dfrac{\pi^2}{2}`$，即
>
> ```math
> J = \frac{\pi^2}{4}.
> ```
>

---

## 六、（本题 14 分）

**(1)** 求幂级数 $`\displaystyle S(x) = \sum_{n=1}^{\infty}\frac{x^n}{n\cdot 2^n}`$ 的收敛半径与和函数（写出 $`|x|<2`$ 上的初等表达式）；

**(2)** 利用 (1) 求数项级数 $`\displaystyle\sum_{n=1}^{\infty}\frac{1}{n\cdot 2^n}`$ 的和。

> **解答**：
>
> **(1)** 记 $`a_n = \dfrac{1}{n\cdot 2^n}`$，
>
> ```math
> R = \lim_{n\to\infty}\frac{a_n}{a_{n+1}} = \lim_{n\to\infty}\frac{(n+1)\cdot 2^{n+1}}{n\cdot 2^n} = 2,
> ```
>
> 故收敛半径为 $`2`$。在 $`|x| < 2`$ 内逐项求导：
>
> ```math
> S'(x) = \sum_{n=1}^{\infty}\frac{n x^{n-1}}{n\cdot 2^n} = \sum_{n=1}^{\infty}\left(\frac{x}{2}\right)^{n-1}\cdot\frac{1}{2} = \frac{1}{2}\cdot\frac{1}{1-\dfrac{x}{2}} = \frac{1}{2-x}.
> ```
>
> 积分得
>
> ```math
> S(x) = \int_0^x\frac{\mathrm{d}t}{2-t} + S(0) = -\ln(2-x) + \ln 2 = \ln\frac{2}{2-x} = -\ln\left(1-\frac{x}{2}\right).
> ```
>
> 即 $`S(x) = -\ln\left(1-\dfrac{x}{2}\right)`$，$`|x|<2`$。
>
> **(2)** $`x = 1`$ 在收敛域 $`(-2,2)`$ 内部，可直接代入：
>
> ```math
> \sum_{n=1}^{\infty}\frac{1}{n\cdot 2^n} = S(1) = -\ln\left(1-\frac{1}{2}\right) = \ln 2.
> ```
>

---

## 命题双向细目表

> 说明：本表逐题标注考点、难度与"与历年真题的呼应关系"（呼应 = 同族题型或同考法；差异 = 本卷在哪一维做了重新设计）。全套为原创命题，数值与问法均不照搬真题。

| 题号 | 分值 | 考点 | 难度 | 与历年真题的呼应关系 |
|---|---|---|---|---|
| 一(1) | 6 | 极限：$`\frac{0}{0}`$ 型、Taylor 展开（或平方差配方） | 易 | 呼应 15 届一(1)、17 届一(1) 等"填空首题 = 极限"的题位规律；差异：$`\mathrm{e}^x+\mathrm{e}^{-x}-2 = (\mathrm{e}^{x/2}-\mathrm{e}^{-x/2})^2`$ 的对偶结构，答案 $`2`$ |
| 一(2) | 6 | 多元微分：隐函数求全微分 | 易 | 呼应 13 届一(2)、17 届一(4)（隐函数填空位）；差异：本卷求 $`\mathrm{d}z`$ 整体（非单个偏导），方程含 $`\ln z`$，答案 $`\frac{z(y\,\mathrm{d}x+x\,\mathrm{d}y)}{z+1}`$ |
| 一(3) | 6 | 一元积分：$`\tan^2 x = \sec^2 x - 1`$ 变形 | 易 | 呼应 16 届一(1)（定积分填空位）；差异：基础恒等变形款，答案 $`1-\frac{\pi}{4}`$ |
| 一(4) | 6 | 常微分方程：换元 $`u=x+y`$ 化可分离（$`\arctan`$ 积分） | 中 | 呼应 17 届三、16 届二（换元求解型一阶方程的填空缩放版）；差异：平移换元 $`u = x+y`$，解 $`y = \tan x - x`$（回代验证闭环） |
| 一(5) | 6 | 级数：收敛半径 + 端点收敛性（收敛域） | 中 | 呼应 15 届一(4)（幂级数收敛域）；差异：中心 $`x=-2`$、半径 $`3`$、双端点均收敛：$`[-5,\,1]`$ |
| 二 | 14 | 解析几何：直线与平面的交点 + 投影直线（平面束、叉积） | 中 | 呼应 16 届一(4)（投影直线，填空级）、13 届补一(3)（平面束求投影，填空级）；差异：升格为解答题、直线用参数式给出、"过直线且垂直已知平面的平面"构造投影 |
| 三 | 14 | 多元积分：Green 公式（方形区域上的直接应用） | 中 | 呼应 16 届一(5)（Green 公式出现在真题；该题为挖洞型）；差异：无奇点、方形区域、$`\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y} = \mathrm{e}^x+2x`$ 的化简设计，答案 $`\mathrm{e}`$ |
| 四 | 14 | 一元微分（证明）：单调性方法证 $`\tan x > x`$ 与 $`\tan x > x+\frac{x^3}{3}`$ | 中 | 呼应 16 届五、14 届三（微分不等式证明的传统）；差异：经典三角不等式"引理 + 主结论"两问结构，结论与证法均为基础款（暴露"证明书写规范"类问题） |
| 五 | 14 | 一元积分（技巧）：区间再现换元双联 | 中 | 呼应 13 届补一(2)（区间再现 $`x=\frac{\pi}{2}-t`$）、05 届二（对称技巧）；差异：$`\ln(1+\tan x)`$ 与 $`\frac{x\sin x}{1+\cos^2 x}`$ 两小题、换元目标分别为 $`\frac{\pi}{4}-x`$ 与 $`\pi-x`$，答案 $`\frac{\pi\ln 2}{8}`$ 与 $`\frac{\pi^2}{4}`$ |
| 六 | 14 | 级数：幂级数求和函数（逐项求导）+ 数项级数取值 | 中 | 呼应 07 届四（和函数 + 收敛域）、12 届七(3)（用展开式/和函数求数项和）；差异：基础款 $`S(x)=-\ln(1-\frac{x}{2})`$，取值 $`x=1`$ 得 $`\ln 2`$ |
