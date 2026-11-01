// 将第五篇精讲 5–10、易错点、自测与结语的公式预渲染为本地 SVG。
// 用法：在本目录 npm ci，再运行 node render_integral_examples.js。
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const {mathjax} = require('mathjax-full/js/mathjax.js');
const {TeX} = require('mathjax-full/js/input/tex.js');
const {SVG} = require('mathjax-full/js/output/svg.js');
const {liteAdaptor} = require('mathjax-full/js/adaptors/liteAdaptor.js');
const {RegisterHTMLHandler} = require('mathjax-full/js/handlers/html.js');
require('mathjax-full/js/input/tex/ams/AmsConfiguration.js');
const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);
const doc = mathjax.document('', {
  InputJax: new TeX({packages: ['base', 'ams'], formatError(jax, error) { throw error; }}),
  OutputJax: new SVG({fontCache: 'none'})
});
const root = path.resolve(__dirname, '../..');
const main = path.join(root, '教学文档/CMC手把手精讲-05-一元积分计算.md');
const source = path.join(root, '教学文档/公式源码/05-精讲5至10.md');
const imageDir = path.join(root, '教学文档/图/05-精讲公式');
fs.mkdirSync(imageDir, {recursive: true});
const escape = text => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const seen = new Set();

function topLevelSplit(body, separator) {
  let depth = 0, start = 0;
  const parts = [];
  for (let i = 0; i < body.length; i++) {
    if (body[i] === '{') depth++;
    if (body[i] === '}') depth--;
    if (body[i] === separator && depth === 0) {
      parts.push(body.slice(start, i));
      start = i + 1;
    }
  }
  parts.push(body.slice(start));
  return parts;
}

function width(body) {
  const node = adaptor.firstChild(doc.convert(body, {display: true}));
  return parseFloat(adaptor.getAttribute(node, 'width')) * 8;
}

function wrap(body) {
  if (body.includes('\\begin{') || width(body) <= 900) return body;
  const equalities = topLevelSplit(body, '=');
  if (equalities.length < 2) return body;
  const rows = [];
  const lhs = equalities.shift();
  equalities.forEach((rhs, index) => {
    let row = (index === 0 ? lhs : '') + '&=';
    const terms = topLevelSplit(rhs, '+');
    terms.forEach((term, termIndex) => {
      const extra = (termIndex ? '+' : '') + term;
      if (termIndex && width(row.replace('&', '') + extra) > 900) {
        rows.push(row);
        row = '&\\quad +' + term;
      } else row += extra;
    });
    rows.push(row);
  });
  return '\\begin{aligned}\n' + rows.join('\\\\\n') + '\n\\end{aligned}';
}

function image(body, display) {
  const id = crypto.createHash('sha256').update(JSON.stringify([body, display])).digest('hex').slice(0, 16);
  if (!seen.has(id)) {
    const typeset = display ? wrap(body) : body;
    const node = doc.convert(typeset, {display});
    const svg = adaptor.firstChild(node);
    // Explicit pixels avoid standalone SVG em/ex sizing differences between browsers.
    const w = parseFloat(adaptor.getAttribute(svg, 'width')) * 8;
    const h = parseFloat(adaptor.getAttribute(svg, 'height')) * 8;
    adaptor.setAttribute(svg, 'width', w.toFixed(2) + 'px');
    adaptor.setAttribute(svg, 'height', h.toFixed(2) + 'px');
    for (const [theme, color] of [['light', '#1f2328'], ['dark', '#e6edf3']]) {
      adaptor.setAttribute(svg, 'color', color);
      fs.writeFileSync(path.join(imageDir, `${id}-${theme}.svg`), adaptor.outerHTML(svg).replace(/currentColor/g, color) + '\n');
    }
    seen.add(id);
  }
  const base = `图/05-精讲公式/${id}`;
  return `<picture><source media="(prefers-color-scheme: dark)" srcset="${base}-dark.svg"><img src="${base}-light.svg" alt="${escape(body.replace(/\s+/g, ' ').trim())}"></picture>`;
}

let displayCount = 0;
function renderSource(file) {
  let text = fs.readFileSync(file, 'utf8');
  const blocks = [];
  text = text.replace(/```math\r?\n([\s\S]*?)```/g, (match, body) => {
    blocks.push(image(body.trim(), true));
    return `@@DISPLAY_FORMULA_${blocks.length - 1}@@`;
  });
  text = text.replace(/\$`([^`\n]+)`\$/g, (match, body) => image(body, false));
  displayCount += blocks.length;
  return text.replace(/@@DISPLAY_FORMULA_(\d+)@@/g, (match, index) => blocks[Number(index)]);
}
const text = renderSource(source);
const begin = '<!-- integral-examples:start -->';
const end = '<!-- integral-examples:end -->';
let page = fs.readFileSync(main, 'utf8');
const a = page.includes(begin) ? page.indexOf(begin) : page.indexOf('### 精讲 5：');
const b = page.includes(end) ? page.indexOf(end) + end.length : page.indexOf('# 五、易错点清单', a);
if (a < 0 || b < a) throw new Error('未找到精讲 5–10 的范围');
const result = `${begin}\n\n> [查看精讲 5–10 的 LaTeX 源码](公式源码/05-精讲5至10.md)\n\n${text.trim()}\n\n${end}\n\n`;
page = page.slice(0, a) + result + page.slice(b).replace(/^\s*\n/, '');
const tailBegin = '<!-- integral-tail:start -->';
const tailEnd = '<!-- integral-tail:end -->';
const tailStart = page.includes(tailBegin) ? page.indexOf(tailBegin) : page.indexOf('# 五、易错点清单');
const tailStop = page.includes(tailEnd) ? page.indexOf(tailEnd) + tailEnd.length : page.length;
if (tailStart < 0 || tailStop < tailStart) throw new Error('未找到易错点清单的范围');
const tail = renderSource(path.join(root, '教学文档/公式源码/05-易错点与自测.md'));
page = page.slice(0, tailStart) + `${tailBegin}\n\n> [查看易错点、自测题与结语的 LaTeX 源码](公式源码/05-易错点与自测.md)\n\n${tail.trim()}\n\n${tailEnd}\n` + page.slice(tailStop).trimEnd();
fs.writeFileSync(main, page);
console.log(`已生成 ${seen.size} 个公式的明暗主题 SVG（${displayCount} 个独立公式块）。`);
