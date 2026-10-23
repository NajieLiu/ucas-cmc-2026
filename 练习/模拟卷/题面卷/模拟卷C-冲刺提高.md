# 全国大学生数学竞赛初赛模拟卷 C（非数学专业 A 类 · 冲刺提高）

> 📝 **本文件为「题面卷」**（答案与解答已移除，供模拟自测）。做完后对照同目录 `../答案册/` 下的完整版本。

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

**(2)** 曲面 $x^2 + 3y^2 + 2z^2 = 6$ 在点 $(1,1,1)$ 处的切平面与三个坐标平面所围成的四面体的体积为 $\underline{\qquad}$。

**(3)** 设 $L$ 为圆 $x^2 + y^2 = 1$ 取逆时针方向，则
$$\oint_L \left(y - x^2y\right)\mathrm{d}x + \left(x + xy^2\right)\mathrm{d}y = \underline{\qquad}.$$

**(4)** 设 $y = y(x)$ 是微分方程 $x\dfrac{\mathrm{d}y}{\mathrm{d}x} + y = y^2\ln x$（$x>0$）满足 $y(1) = 1$ 的解，则 $y(\mathrm{e}) = \underline{\qquad}$。

**(5)** $\displaystyle\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\frac{\mathrm{e}^{\sin x}}{\mathrm{e}^{\sin x}+\mathrm{e}^{-\sin x}}\,\cos^2 x\,\mathrm{d}x = \underline{\qquad}$。

---

## 二、（本题 14 分）

设函数 $f(x)$ 是定义在 $(-\infty,\,+\infty)$ 上的非负函数，具有二阶连续导数，且存在常数 $M > 0$，使得对一切实数 $x$ 都有
$$|f''(x)| \leqslant M.$$
证明：对一切实数 $x$，恒有
$$[f'(x)]^2 \leqslant 2Mf(x).$$

---

## 三、（本题 14 分）

设 $\Omega$ 是由旋转抛物面 $z = x^2 + y^2$ 与平面 $z = 2$ 所围成的空间区域，求三重积分
$$\iiint_{\Omega}\left(x^2+y^2\right)\mathrm{d}x\,\mathrm{d}y\,\mathrm{d}z.$$

---

## 四、（本题 14 分）

设函数 $f(u,v)$ 具有连续的二阶偏导数，$z = f\!\left(\mathrm{e}^x\cos y,\ \mathrm{e}^x\sin y\right)$。

**(1)** 证明：
$$\frac{\partial^2 z}{\partial x^2} + \frac{\partial^2 z}{\partial y^2} = \mathrm{e}^{2x}\left(f_{uu} + f_{vv}\right),$$
其中 $f_{uu} = \dfrac{\partial^2 f}{\partial u^2}$，$f_{vv} = \dfrac{\partial^2 f}{\partial v^2}$，$f_{uv} = \dfrac{\partial^2 f}{\partial u\partial v}$；

**(2)** 若进一步设 $f_{uu} + f_{vv} \equiv 1$（在 $\mathbb{R}^2$ 上恒成立），求二重积分
$$\iint_{0\le x\le 1,\ 0\le y\le 1}\left(\frac{\partial^2 z}{\partial x^2} + \frac{\partial^2 z}{\partial y^2}\right)\mathrm{d}x\,\mathrm{d}y.$$

---

## 五、（本题 14 分）

设 $P_n = \displaystyle\prod_{k=1}^{n}\left(1+\dfrac{k}{n^2}\right)$，$n = 1, 2, \cdots$。

**(1)** 求极限 $\lim\limits_{n\to\infty} P_n$；

**(2)** 求极限 $\lim\limits_{n\to\infty} n\left(P_n - \sqrt{\mathrm{e}}\right)$。

---

## 六、（本题 14 分）

**(1)** 证明恒等式：对一切正整数 $n$，
$$\arctan\frac{1}{n^2} - \arctan\frac{1}{(n+1)^2} = \arctan\frac{2n+1}{n^4+2n^3+n^2+1};$$

**(2)** 求无穷级数 $\displaystyle\sum_{n=1}^{\infty}\arctan\frac{2n+1}{n^4+2n^3+n^2+1}$ 的和（并说明其收敛性）。

---


> （命题双向细目表含答案数值，已移至「答案册」版本。）
