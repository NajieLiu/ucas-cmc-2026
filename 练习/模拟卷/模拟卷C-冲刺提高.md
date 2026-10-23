# 全国大学生数学竞赛初赛模拟卷 C（非数学专业 A 类 · 冲刺提高）

> **原创模拟卷 · 由 CMC 备考项目命题组命制**
> **定位**：冲刺提高（标准难度基础上含 2 道拉分题）
> **考试形式**：闭卷｜**时间**：150 分钟｜**满分**：100 分
> **命题说明**：本卷不照搬历年真题，数值、结构、问法均为原创设计；难度与考点布局对标第 15—17 届（2023—2025）非数学 A 类初赛真题。八大板块全覆盖：极限、一元微分（含微分不等式证明）、一元积分、多元微分、多元积分（含 Green 公式）、常微分方程（换元求解型）、级数、解析几何。本卷解答题中『二』『五』『六』为拉分位（『二』为证明题），目标 150 分钟内完成全卷并留出 15 分钟检查。各题与历年真题的呼应关系及差异说明见卷末「命题双向细目表」。

---

## 卷面结构

| 题号 | 一 | 二 | 三 | 四 | 五 | 六 | 总分 |
|---|---|---|---|---|---|---|---|
| 满分 | 30 | 14 | 14 | 14 | 14 | 14 | 100 |
| 形式 | 填空题 ×5 | 解答题 | 解答题 | 解答题 | 解答题 | 解答题 | |

> **注意事项**：所有答题都须写在本试卷指定的答题区域内；如答题空白不够，可写在当页背面，并标明题号。

---

## 一、填空题（本题 30 分，每小题 6 分）

**(1)** $\lim\limits_{x\to 1}\dfrac{\sqrt[4]{x}-1}{\sqrt[3]{x}-1} = \underline{\qquad}$。

> **答案**：$\dfrac{3}{4}$
>
> **解答**：令 $t = x^{\frac{1}{12}}$，则当 $x \to 1$ 时 $t \to 1$，且 $\sqrt[4]{x} = t^3$，$\sqrt[3]{x} = t^4$。于是
> $$\lim_{x\to 1}\frac{\sqrt[4]{x}-1}{\sqrt[3]{x}-1} = \lim_{t\to 1}\frac{t^3-1}{t^4-1} = \lim_{t\to 1}\frac{t^2+t+1}{(t+1)(t^2+1)} = \frac{3}{4}.$$

**(2)** 曲面 $x^2 + 3y^2 + 2z^2 = 6$ 在点 $(1,1,1)$ 处的切平面与三个坐标平面所围成的四面体的体积为 $\underline{\qquad}$。

> **答案**：$6$
>
> **解答**：记 $F(x,y,z) = x^2 + 3y^2 + 2z^2 - 6$，则
> $$F_x = 2x,\quad F_y = 6y,\quad F_z = 4z,$$
> 在点 $(1,1,1)$ 处法向量为 $(2,\,6,\,4)$，约去公因子 $2$ 得 $(1,\,3,\,2)$。故切平面方程为
> $$(x-1) + 3(y-1) + 2(z-1) = 0,\qquad \text{即}\qquad x + 3y + 2z = 6.$$
> 该平面与三个坐标轴的交点分别为 $(6,0,0)$、$(0,2,0)$、$(0,0,3)$，故四面体体积为
> $$V = \frac{1}{6}\cdot 6\cdot 2\cdot 3 = 6.$$

**(3)** 设 $L$ 为圆 $x^2 + y^2 = 1$ 取逆时针方向，则
$$\oint_L \left(y - x^2y\right)\mathrm{d}x + \left(x + xy^2\right)\mathrm{d}y = \underline{\qquad}.$$

> **答案**：$\dfrac{\pi}{2}$
>
> **解答**：记 $P = y - x^2y = y(1-x^2)$，$Q = x + xy^2 = x(1+y^2)$，则
> $$\frac{\partial Q}{\partial x} = 1 + y^2,\qquad \frac{\partial P}{\partial y} = 1 - x^2,$$
> 于是 $\dfrac{\partial Q}{\partial x} - \dfrac{\partial P}{\partial y} = x^2 + y^2$。由 Green 公式（$L$ 取正向）：
> $$\oint_L P\,\mathrm{d}x + Q\,\mathrm{d}y = \iint_{x^2+y^2\le 1}\left(x^2+y^2\right)\mathrm{d}x\,\mathrm{d}y.$$
> 用极坐标：
> $$\iint_{x^2+y^2\le 1}\left(x^2+y^2\right)\mathrm{d}x\,\mathrm{d}y = \int_0^{2\pi}\mathrm{d}\theta\int_0^1 r^2\cdot r\,\mathrm{d}r = 2\pi\cdot\frac{1}{4} = \frac{\pi}{2}.$$

**(4)** 设 $y = y(x)$ 是微分方程 $x\dfrac{\mathrm{d}y}{\mathrm{d}x} + y = y^2\ln x$（$x>0$）满足 $y(1) = 1$ 的解，则 $y(\mathrm{e}) = \underline{\qquad}$。

> **答案**：$\dfrac{1}{2}$
>
> **解答**：原方程即 $y' + \dfrac{1}{x}y = \dfrac{\ln x}{x}y^2$——这是 $n=2$ 的 Bernoulli 方程。令 $u = y^{-1}$，则 $y = \dfrac{1}{u}$，$y' = -\dfrac{u'}{u^2}$，代入化简得
> $$u' - \frac{1}{x}u = -\frac{\ln x}{x}.$$
> 这是一阶线性方程，积分因子 $e^{-\int\frac{\mathrm{d}x}{x}} = \dfrac{1}{x}$，两边乘 $\dfrac{1}{x}$：
> $$\left(\frac{u}{x}\right)' = -\frac{\ln x}{x^2},$$
> 积分（$\int\dfrac{\ln x}{x^2}\,\mathrm{d}x = -\dfrac{\ln x+1}{x}$）：
> $$\frac{u}{x} = \frac{\ln x + 1}{x} + C,\qquad\text{即}\qquad u = \ln x + 1 + Cx.$$
> 故 $y = \dfrac{1}{1 + \ln x + Cx}$。由 $y(1) = 1$ 得 $\dfrac{1}{1+C} = 1$，即 $C = 0$，所以
> $$y(x) = \frac{1}{1+\ln x},\qquad y(\mathrm{e}) = \frac{1}{1+1} = \frac{1}{2}.$$
> （验证：对 $y = \dfrac{1}{1+\ln x}$，$xy' + y = -\dfrac{1}{(1+\ln x)^2} + \dfrac{1}{1+\ln x} = \dfrac{\ln x}{(1+\ln x)^2} = y^2\ln x$ ✓。）

**(5)** $\displaystyle\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\frac{\mathrm{e}^{\sin x}}{\mathrm{e}^{\sin x}+\mathrm{e}^{-\sin x}}\,\cos^2 x\,\mathrm{d}x = \underline{\qquad}$。

> **答案**：$\dfrac{\pi}{4}$
>
> **解答**：记 $h(x) = \dfrac{\mathrm{e}^{\sin x}}{\mathrm{e}^{\sin x}+\mathrm{e}^{-\sin x}}$。由于 $\sin(-x) = -\sin x$，直接验证得
> $$h(x) + h(-x) = \frac{\mathrm{e}^{\sin x}}{\mathrm{e}^{\sin x}+\mathrm{e}^{-\sin x}} + \frac{\mathrm{e}^{-\sin x}}{\mathrm{e}^{\sin x}+\mathrm{e}^{-\sin x}} = 1.$$
> 又 $\cos^2x$ 是偶函数。记所求积分为 $J$，作换元 $x = -t$ 得
> $$J = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} h(-t)\cos^2 t\,\mathrm{d}t = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} h(-x)\cos^2 x\,\mathrm{d}x,$$
> 于是
> $$2J = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\big[h(x)+h(-x)\big]\cos^2 x\,\mathrm{d}x = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\cos^2 x\,\mathrm{d}x = 2\int_0^{\frac{\pi}{2}}\cos^2 x\,\mathrm{d}x = 2\cdot\frac{\pi}{4} = \frac{\pi}{2},$$
> 故 $J = \dfrac{\pi}{4}$。

---

## 二、（本题 14 分）

设函数 $f(x)$ 是定义在 $(-\infty,\,+\infty)$ 上的非负函数，具有二阶连续导数，且存在常数 $M > 0$，使得对一切实数 $x$ 都有
$$|f''(x)| \leqslant M.$$
证明：对一切实数 $x$，恒有
$$[f'(x)]^2 \leqslant 2Mf(x).$$

> **解答**：
>
> 固定 $x \in (-\infty,+\infty)$。对任意 $h \in (-\infty,+\infty)$，在 $x$ 与 $x+h$ 之间对 $f$ 使用带 Lagrange 余项的 Taylor 公式（$f$ 二阶连续可导，条件满足）：
> $$f(x+h) = f(x) + f'(x)h + \frac{1}{2}f''(\xi)h^2,$$
> 其中 $\xi$ 介于 $x$ 与 $x+h$ 之间。由 $|f''(x)| \leqslant M$ 得
> $$f(x+h) \leqslant f(x) + f'(x)h + \frac{M}{2}h^2.$$
> 又 $f$ 非负，即 $0 \leqslant f(x+h)$，于是对一切 $h$ 都有
> $$\frac{M}{2}h^2 + f'(x)h + f(x) \geqslant 0. \tag{*}$$
> 式 $(*)$ 表明：关于 $h$ 的二次三项式 $\varphi(h) = \dfrac{M}{2}h^2 + f'(x)h + f(x)$ 恒非负。其二次项系数 $\dfrac{M}{2} > 0$，故其判别式非正：
> $$\Delta = \big[f'(x)\big]^2 - 4\cdot\frac{M}{2}\cdot f(x) = \big[f'(x)\big]^2 - 2Mf(x) \leqslant 0,$$
> 即 $[f'(x)]^2 \leqslant 2Mf(x)$。由 $x$ 的任意性，命题对一切实数 $x$ 成立。
>
> **注（常数最优性）**：因子 $2M$ 不能再改进。取 $f(x) = \dfrac{M}{2}x^2$，则 $f \geqslant 0$ 且 $|f''(x)| \equiv M$ 满足题设条件，而
> $$[f'(x)]^2 = (Mx)^2 = M^2x^2 = 2M\cdot\frac{M}{2}x^2 = 2Mf(x),$$
> 即该函数处处取到等号。（本题只要求证明不等式；等号成立条件的完整刻画超出考试要求，此注仅供理解"常数为什么是 $2M$"。）

---

## 三、（本题 14 分）

设 $\Omega$ 是由旋转抛物面 $z = x^2 + y^2$ 与平面 $z = 2$ 所围成的空间区域，求三重积分
$$\iiint_{\Omega}\left(x^2+y^2\right)\mathrm{d}x\,\mathrm{d}y\,\mathrm{d}z.$$

> **解答**：
>
> **（方法一：柱坐标）** 区域可写为
> $$\Omega = \left\{(x,y,z)\ \middle|\ x^2+y^2 \leqslant z \leqslant 2\right\}.$$
> 用柱坐标 $x = r\cos\theta$，$y = r\sin\theta$，$z=z$：
> $$0 \leqslant \theta \leqslant 2\pi,\qquad 0 \leqslant r \leqslant \sqrt{2},\qquad r^2 \leqslant z \leqslant 2.$$
> 于是
> $$\iiint_{\Omega}\left(x^2+y^2\right)\mathrm{d}V = \int_0^{2\pi}\mathrm{d}\theta\int_0^{\sqrt{2}}r^2\cdot r\,\mathrm{d}r\int_{r^2}^{2}\mathrm{d}z = 2\pi\int_0^{\sqrt{2}}r^3\left(2-r^2\right)\mathrm{d}r.$$
> 计算定积分：
> $$\int_0^{\sqrt{2}}r^3\left(2-r^2\right)\mathrm{d}r = \left[2\cdot\frac{r^4}{4} - \frac{r^6}{6}\right]_0^{\sqrt{2}} = \left(2 - \frac{8}{6}\right) = \frac{2}{3}.$$
> 故原式 $= 2\pi\cdot\dfrac{2}{3} = \dfrac{4\pi}{3}$。
>
> **（方法二：先二后一 / 截面法）** 对 $z \in [0,2]$，用平面 $Z = z$ 截 $\Omega$ 得圆盘
> $$D_z:\ x^2+y^2 \leqslant z.$$
> 于是
> $$\iiint_{\Omega}\left(x^2+y^2\right)\mathrm{d}V = \int_0^{2}\mathrm{d}z\iint_{D_z}\left(x^2+y^2\right)\mathrm{d}x\,\mathrm{d}y = \int_0^{2}\left(2\pi\cdot\frac{z^2}{4}\right)\mathrm{d}z = \frac{\pi}{2}\cdot\frac{8}{3} = \frac{4\pi}{3}.$$
> （其中用了 $\displaystyle\iint_{D_z}(x^2+y^2)\,\mathrm{d}x\mathrm{d}y = 2\pi\int_0^{\sqrt{z}}r^3\,\mathrm{d}r = \frac{\pi z^2}{2}$。）
>
> 两种方法结果一致：$\displaystyle\iiint_{\Omega}\left(x^2+y^2\right)\mathrm{d}V = \frac{4\pi}{3}$。

---

## 四、（本题 14 分）

设函数 $f(u,v)$ 具有连续的二阶偏导数，$z = f\!\left(\mathrm{e}^x\cos y,\ \mathrm{e}^x\sin y\right)$。

**(1)** 证明：
$$\frac{\partial^2 z}{\partial x^2} + \frac{\partial^2 z}{\partial y^2} = \mathrm{e}^{2x}\left(f_{uu} + f_{vv}\right),$$
其中 $f_{uu} = \dfrac{\partial^2 f}{\partial u^2}$，$f_{vv} = \dfrac{\partial^2 f}{\partial v^2}$，$f_{uv} = \dfrac{\partial^2 f}{\partial u\partial v}$；

**(2)** 若进一步设 $f_{uu} + f_{vv} \equiv 1$（在 $\mathbb{R}^2$ 上恒成立），求二重积分
$$\iint_{0\le x\le 1,\ 0\le y\le 1}\left(\frac{\partial^2 z}{\partial x^2} + \frac{\partial^2 z}{\partial y^2}\right)\mathrm{d}x\,\mathrm{d}y.$$

> **解答**：
>
> **(1)** 记 $u = \mathrm{e}^x\cos y$，$v = \mathrm{e}^x\sin y$，则各阶偏导为
> $$u_x = \mathrm{e}^x\cos y = u,\qquad u_y = -\mathrm{e}^x\sin y = -v,\qquad u_{xx} = u,\qquad u_{yy} = -u;$$
> $$v_x = \mathrm{e}^x\sin y = v,\qquad v_y = \mathrm{e}^x\cos y = u,\qquad v_{xx} = v,\qquad v_{yy} = -v.$$
> （即 $u,v$ 都是调和函数：$u_{xx}+u_{yy} = 0$，$v_{xx}+v_{yy} = 0$——这是后面一阶项相消的根源。）
> 由链式法则
> $$z_x = f_u\,u_x + f_v\,v_x = u\,f_u + v\,f_v,$$
> 再对 $x$ 求导（注意 $f_u,f_v$ 仍需链式展开）：
> $$\begin{aligned}z_{xx} &= u\,f_u + u\left(u\,f_{uu} + v\,f_{uv}\right) + v\,f_v + v\left(u\,f_{vu} + v\,f_{vv}\right)\\ &= u\,f_u + u^2f_{uu} + 2uv\,f_{uv} + v^2f_{vv} + v\,f_v.\end{aligned}$$
> 同理
> $$z_y = f_u\,u_y + f_v\,v_y = -v\,f_u + u\,f_v,$$
> $$\begin{aligned}z_{yy} &= -u\,f_u + (-v)\left(-v\,f_{uu} + u\,f_{uv}\right) - v\,f_v + u\left(-v\,f_{uv} + u\,f_{vv}\right)\\ &= -u\,f_u + v^2f_{uu} - 2uv\,f_{uv} + u^2f_{vv} - v\,f_v.\end{aligned}$$
> 两式相加——一阶项 $u f_u$ 与 $-u f_u$、$v f_v$ 与 $-v f_v$、交叉项 $2uv f_{uv}$ 与 $-2uv f_{uv}$ 全部相消：
> $$z_{xx} + z_{yy} = \left(u^2+v^2\right)\left(f_{uu}+f_{vv}\right).$$
> 而 $u^2 + v^2 = \mathrm{e}^{2x}\cos^2 y + \mathrm{e}^{2x}\sin^2 y = \mathrm{e}^{2x}$，故
> $$z_{xx} + z_{yy} = \mathrm{e}^{2x}\left(f_{uu}+f_{vv}\right).$$
>
> **(2)** 由 (1) 及 $f_{uu}+f_{vv} \equiv 1$，被积函数为 $\mathrm{e}^{2x}$，于是
> $$\iint_{0\le x\le 1,\ 0\le y\le 1}\left(z_{xx}+z_{yy}\right)\mathrm{d}x\,\mathrm{d}y = \int_0^1\mathrm{e}^{2x}\,\mathrm{d}x\int_0^1\mathrm{d}y = \frac{\mathrm{e}^2-1}{2}\cdot 1 = \frac{\mathrm{e}^2-1}{2},$$
> 即所求二重积分的值为 $\dfrac{\mathrm{e}^2-1}{2}$。

---

## 五、（本题 14 分）

设 $P_n = \displaystyle\prod_{k=1}^{n}\left(1+\dfrac{k}{n^2}\right)$，$n = 1, 2, \cdots$。

**(1)** 求极限 $\lim\limits_{n\to\infty} P_n$；

**(2)** 求极限 $\lim\limits_{n\to\infty} n\left(P_n - \sqrt{\mathrm{e}}\right)$。

> **解答**：
>
> **(1)** 取对数，记 $u_k = \dfrac{k}{n^2}\in(0,1]$，则
> $$\ln P_n = \sum_{k=1}^{n}\ln\left(1+u_k\right).$$
> 对 $0 \leqslant u \leqslant 1$，由 Taylor 展开（或令 $g(u) = \ln(1+u) - u + \dfrac{u^2}{2}$，$g'(u) = \dfrac{u^2}{1+u} \geqslant 0$，$g(0)=0$）得两边估计
> $$u - \frac{u^2}{2} \leqslant \ln(1+u) \leqslant u.$$
> 于是
> $$\sum_{k=1}^{n}\left(u_k - \frac{u_k^2}{2}\right) \leqslant \ln P_n \leqslant \sum_{k=1}^{n} u_k.$$
> 而
> $$\sum_{k=1}^{n} u_k = \frac{1}{n^2}\cdot\frac{n(n+1)}{2} = \frac{n+1}{2n} \longrightarrow \frac{1}{2},$$
> $$\frac{1}{2}\sum_{k=1}^{n} u_k^2 = \frac{n(n+1)(2n+1)}{12\,n^4} \longrightarrow 0,$$
> 由夹逼准则 $\ln P_n \to \dfrac{1}{2}$，故
> $$\lim_{n\to\infty} P_n = \mathrm{e}^{\frac{1}{2}} = \sqrt{\mathrm{e}}.$$
>
> **(2)** 对 $\ln(1+u)$ 作三阶 Taylor 展开：当 $0 \leqslant u \leqslant 1$ 时
> $$\ln(1+u) = u - \frac{u^2}{2} + \frac{u^3}{3} + R(u),\qquad |R(u)| \leqslant \frac{u^4}{4}.$$
> 于是
> $$\ln P_n = \sum_{k=1}^{n} u_k - \frac{1}{2}\sum_{k=1}^{n} u_k^2 + \frac{1}{3}\sum_{k=1}^{n} u_k^3 + O\!\left(\sum_{k=1}^{n} u_k^4\right).$$
> 逐项估计：
> $$\sum_{k=1}^{n} u_k = \frac{1}{2} + \frac{1}{2n};\qquad \frac{1}{2}\sum_{k=1}^{n} u_k^2 = \frac{1}{6n} + O\!\left(\frac{1}{n^2}\right);$$
> $$\frac{1}{3}\sum_{k=1}^{n} u_k^3 = \frac{1}{3n^6}\cdot\left[\frac{n(n+1)}{2}\right]^2 = \frac{1}{12n^2}\left(1+\frac{1}{n}\right)^2 = O\!\left(\frac{1}{n^2}\right);\qquad \sum_{k=1}^{n} u_k^4 = O\!\left(\frac{1}{n^3}\right).$$
> 因此
> $$\ln P_n = \frac{1}{2} + \frac{1}{2n} - \frac{1}{6n} + O\!\left(\frac{1}{n^2}\right) = \frac{1}{2} + \frac{1}{3n} + O\!\left(\frac{1}{n^2}\right).$$
> 从而
> $$P_n = \sqrt{\mathrm{e}}\cdot\mathrm{e}^{\frac{1}{3n}\,+\,O\left(\frac{1}{n^2}\right)} = \sqrt{\mathrm{e}}\left(1 + \frac{1}{3n} + O\!\left(\frac{1}{n^2}\right)\right),$$
> 即
> $$n\left(P_n - \sqrt{\mathrm{e}}\right) = \sqrt{\mathrm{e}}\left(\frac{1}{3} + O\!\left(\frac{1}{n}\right)\right) \longrightarrow \frac{\sqrt{\mathrm{e}}}{3}.$$
> 所以 $\lim\limits_{n\to\infty} n\left(P_n - \sqrt{\mathrm{e}}\right) = \dfrac{\sqrt{\mathrm{e}}}{3}$。

---

## 六、（本题 14 分）

**(1)** 证明恒等式：对一切正整数 $n$，
$$\arctan\frac{1}{n^2} - \arctan\frac{1}{(n+1)^2} = \arctan\frac{2n+1}{n^4+2n^3+n^2+1};$$

**(2)** 求无穷级数 $\displaystyle\sum_{n=1}^{\infty}\arctan\frac{2n+1}{n^4+2n^3+n^2+1}$ 的和（并说明其收敛性）。

> **解答**：
>
> **(1)** 记 $\alpha = \arctan\dfrac{1}{n^2}$，$\beta = \arctan\dfrac{1}{(n+1)^2}$，则 $\alpha,\beta \in \left(0,\dfrac{\pi}{2}\right)$。由 $\dfrac{1}{n^2} > \dfrac{1}{(n+1)^2} > 0$ 及 $\arctan$ 的单调性知 $\alpha > \beta$，从而 $0 < \alpha - \beta < \dfrac{\pi}{2}$。
> 由正切差角公式
> $$\tan(\alpha-\beta) = \frac{\tan\alpha - \tan\beta}{1 + \tan\alpha\tan\beta}.$$
> 其中
> $$\tan\alpha - \tan\beta = \frac{1}{n^2} - \frac{1}{(n+1)^2} = \frac{(n+1)^2-n^2}{n^2(n+1)^2} = \frac{2n+1}{n^2(n+1)^2},$$
> $$1 + \tan\alpha\tan\beta = 1 + \frac{1}{n^2(n+1)^2} = \frac{n^2(n+1)^2+1}{n^2(n+1)^2},$$
> 两式相除得
> $$\tan(\alpha-\beta) = \frac{2n+1}{n^2(n+1)^2+1} = \frac{2n+1}{n^4+2n^3+n^2+1}.$$
> 由于 $0 < \alpha-\beta < \dfrac{\pi}{2}$，两边取 $\arctan$ 即得所证恒等式。
>
> **(2)** 由 (1)，级数的通项可裂项：
> $$a_n := \arctan\frac{2n+1}{n^4+2n^3+n^2+1} = \arctan\frac{1}{n^2} - \arctan\frac{1}{(n+1)^2}.$$
> 于是部分和
> $$S_N = \sum_{n=1}^{N} a_n = \arctan\frac{1}{1^2} - \arctan\frac{1}{(N+1)^2} = \frac{\pi}{4} - \arctan\frac{1}{(N+1)^2}.$$
> 令 $N \to \infty$，得
> $$\sum_{n=1}^{\infty} a_n = \frac{\pi}{4} - 0 = \frac{\pi}{4},$$
> 即级数收敛，其和为 $\dfrac{\pi}{4}$。（收敛性也可直接由 $a_n = \arctan\dfrac{2n+1}{n^4+2n^3+n^2+1} \sim \dfrac{2}{n^3}$ 知级数绝对收敛。）

---

## 命题双向细目表

> 说明：本表逐题标注考点、难度与"与历年真题的呼应关系"（呼应 = 同族题型或同考法；差异 = 本卷在哪一维做了重新设计）。全套为原创命题，数值与问法均不照搬真题。

| 题号 | 分值 | 考点 | 难度 | 与历年真题的呼应关系 |
|---|---|---|---|---|
| 一(1) | 6 | 极限：根式差、换元 $x = t^{12}$ / 等价无穷小 | 易 | 呼应 15 届一(1)、17 届一(1) 的 $\frac{0}{0}$ 型极限；差异：统一换元 $t=x^{1/12}$ 一次消去双重根式，答案 $\frac{3}{4}$（数值与问法全新） |
| 一(2) | 6 | 空间解析几何 / 多元微分：椭球面切平面 + 四面体体积 | 易–中 | 呼应 07 届一(3)（"切平面 + 所围体积"的填空位先例）、17 届一(2)（平面方程）、11 届一(5)（两曲面相切的法向量处理）；差异：椭球面切平面与三个坐标平面围四面体，答案 $6$ |
| 一(3) | 6 | 多元积分：Green 公式（逆时针正向） | 中 | 呼应 16 届一(5)（Green 公式出现在填空位）；差异：无奇点可直接应用，$\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}$ 化简为 $x^2+y^2$，答案 $\frac{\pi}{2}$ |
| 一(4) | 6 | 常微分方程：Bernoulli 方程、换元 $u=y^{-1}$ 化一阶线性 | 中 | 呼应 17 届三、14 届一(4)（换元化可解型一阶方程）；差异：换元对象为 $u = y^{-1}$、初值驱动求单点值 $y(\mathrm{e}) = \frac{1}{2}$ |
| 一(5) | 6 | 一元积分：对称区间技巧（$h(x)+h(-x)=1$） | 中 | 呼应 05 届二（对称区间 + $\arctan \mathrm{e}^x$ 型）、13 届补一(2)（区间再现换元）；差异：$\mathrm{e}^{\sin x}$ 结构配 $\cos^2 x$ 权重，答案 $\frac{\pi}{4}$ |
| 二 | 14 | 一元微分（证明）：非负函数、$\lvert f''\rvert\le M$ $\Rightarrow$ $[f']^2\le 2Mf$ | 中–难 | 呼应 16 届五（同族结论 $[f']^2\le 2Mf$）；差异：条件由"$f'$ Lipschitz"改为"$\lvert f''\rvert\le M$"，证法由"取邻域积分放缩"改为"Taylor 上界 + 二次式判别式"（并附常数最优性例） |
| 三 | 14 | 多元积分：旋转抛物面帽区域的三重积分（柱坐标 / 先二后一） | 中 | 呼应 17 届四（先二后一）、15 届三（旋转体几何背景）；差异：区域为 $z=x^2+y^2$ 与 $z=2$ 围成，被积函数 $x^2+y^2$，答案 $\frac{4\pi}{3}$ |
| 四 | 14 | 多元微分：复合二阶偏导恒等式（$u=\mathrm{e}^x\cos y$、$v=\mathrm{e}^x\sin y$）+ 二重积分应用 | 中 | 呼应 15 届一(2) / 16 届一(3)（抽象复合二阶偏导，填空级）与 9 届一(3)（PDE 算子换元，填空级）；差异：升格为 14 分证明题，$\mathrm{e}^{2x}$ 因子型 Laplace 恒等式 + 二重积分收尾（$\frac{\mathrm{e}^2-1}{2}$） |
| 五 | 14 | 极限（拉分 1）：乘积型极限、取对数、三阶展开求渐近误差 | 难 | 呼应 15 届四（复合结构极限）、13 届五（误差量级估计思路）；差异：历年无"乘积型 + 渐近误差项"先例，答案 $\frac{\sqrt{\mathrm{e}}}{3}$ |
| 六 | 14 | 级数（拉分 2）：$\arctan$ 差角裂项 + 望远镜求和 | 难 | 呼应 13 届补一(4)（$\arctan$ 裂项）、15 届六（裂项相消）、17 届五（级数判敛）；差异：裂项对象升级为 $\frac{1}{n^2}$ 型（分母四次多项式），和为 $\frac{\pi}{4}$ |
