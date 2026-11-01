// 用法：在本目录 npm ci，再运行 npm run check（或 node check_math.js <文件或目录>）。
// Markdown 被识别为公式不代表 LaTeX 能编译；这里分别用 MathJax 和 KaTeX 检查。
const fs = require('fs');
const path = require('path');
const {mathjax} = require('mathjax-full/js/mathjax.js');
const {TeX} = require('mathjax-full/js/input/tex.js');
const {SVG} = require('mathjax-full/js/output/svg.js');
const {liteAdaptor} = require('mathjax-full/js/adaptors/liteAdaptor.js');
const {RegisterHTMLHandler} = require('mathjax-full/js/handlers/html.js');
const {STATE} = require('mathjax-full/js/core/MathItem.js');
require('mathjax-full/js/input/tex/ams/AmsConfiguration.js');
require('mathjax-full/js/input/tex/newcommand/NewcommandConfiguration.js');
require('mathjax-full/js/input/tex/boldsymbol/BoldsymbolConfiguration.js');
const katex = require('katex');

RegisterHTMLHandler(liteAdaptor());
const tex = new TeX({
  packages: ['base', 'ams', 'newcommand', 'boldsymbol'],
  formatError(jax, error) { throw error; }
});
const doc = mathjax.document('', {InputJax: tex, OutputJax: new SVG({fontCache: 'none'})});

function collect(target) {
  if (fs.statSync(target).isFile()) return target.endsWith('.md') ? [target] : [];
  return fs.readdirSync(target, {withFileTypes: true}).flatMap(entry => {
    if (['.git', 'node_modules'].includes(entry.name)) return [];
    return collect(path.join(target, entry.name));
  });
}

function extract(text) {
  const formulas = [];
  let fence = null, body = [], start = 0;
  text.split(/\r?\n/).forEach((line, index) => {
    const content = line.replace(/^[ \t]*(?:>[ \t]*)*/, '');
    const mark = content.match(/^(`{3,}|~{3,})(.*)$/);
    if (mark) {
      if (!fence) {
        fence = {char: mark[1][0], size: mark[1].length, math: mark[2].trim() === 'math'};
        start = index + 1;
        body = [];
      } else if (mark[1][0] === fence.char && mark[1].length >= fence.size && !mark[2].trim()) {
        if (fence.math) formulas.push({line: start, body: body.join('\n'), display: true});
        fence = null;
      }
      return;
    }
    if (fence) {
      if (fence.math) body.push(content);
      return;
    }
    // Match protected math before ordinary code spans, so code examples remain excluded.
    const tokens = /\$`([^`\n]+)`\$|(`+)[^`]*?\2/g;
    for (const match of line.matchAll(tokens)) {
      if (match[1]) formulas.push({line: index + 1, body: match[1], display: false});
    }
  });
  if (fence?.math) throw new Error(`第 ${start} 行的 math 围栏未闭合`);
  return formulas;
}

const files = collect(path.resolve(process.argv[2] || path.join(__dirname, '../..')));
const cache = new Map();
let count = 0, errors = 0;
for (const file of files) {
  for (const formula of extract(fs.readFileSync(file, 'utf8'))) {
    count++;
    const key = JSON.stringify([formula.body, formula.display]);
    if (!cache.has(key)) {
      const problems = [];
      if (/\\tag\*?\s*\{/.test(formula.body)) problems.push('请用普通文字编号，避免依赖网页的公式编号环境');
      try { doc.convert(formula.body, {display: formula.display, end: STATE.COMPILED}); }
      catch (error) { problems.push(`MathJax: ${error.message}`); }
      try { katex.renderToString(formula.body, {displayMode: formula.display, throwOnError: true, strict: 'ignore'}); }
      catch (error) { problems.push(`KaTeX: ${error.message}`); }
      cache.set(key, problems);
    }
    const problems = cache.get(key);
    if (problems.length) {
      errors++;
      console.error(`${file}:${formula.line}: ${problems.join('; ')}`);
    }
  }
}
console.log(`${files.length} 个文件，${count} 个公式，${errors} 个错误`);
process.exitCode = errors ? 1 : 0;
