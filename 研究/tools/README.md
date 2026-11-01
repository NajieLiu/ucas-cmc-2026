# 公式编译检查

在本目录运行：

```sh
npm ci
npm run check
```

检查会递归读取整个仓库的 Markdown，提取带反引号的行内公式与 `math` 围栏，分别用 MathJax 3.2.2 和 KaTeX 编译；失败时输出文件、行号与错误，并以非零状态退出。普通代码块和行内代码示例不参与编译。也可以运行 `node check_math.js <文件或目录>` 检查指定范围。

MathJax 只加载 base、ams、newcommand 和 boldsymbol，避免本地开启额外扩展后掩盖网页兼容问题。公式编号用普通文字编号；带注释等号使用 `\overset{说明}{=}`；闭曲面积分使用 `\mathop{∯}\nolimits`，保留原有数学含义。

编译检查验证的是语法和上述扩展兼容性，不能替代浏览器中的最终显示检查。
