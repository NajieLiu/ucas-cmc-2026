// 用法: node check_katex.js <md文件或目录>
// 提取 Markdown 中的行内公式、$$ 块与 GitHub math 围栏，用 KaTeX 验证语法
// 依赖：在本目录运行 npm ci。
const fs = require('fs');
const path = require('path');
const katex = require('katex');

function collectFiles(p) {
  const st = fs.statSync(p);
  if (st.isFile()) return [p];
  const out = [];
  for (const f of fs.readdirSync(p)) {
    const fp = path.join(p, f);
    if (fs.statSync(fp).isFile() && f.endsWith('.md')) out.push(fp);
  }
  return out;
}

// 从文本里提取公式片段：先摘 $$...$$，再摘 $...$
function extractFormulas(text) {
  const formulas = [];
  // math 围栏是公式；先提取它们，再去掉真正的代码块，避免漏检。
  const noMathFences = text.replace(/^[ \t]*(?:>[ \t]*)*```math[ \t]*\r?\n([\s\S]*?)^[ \t]*(?:>[ \t]*)*```[ \t]*$/gm, (m, body) => {
    formulas.push({ display: true, body: body.replace(/^[ \t]*(?:>[ \t]*)*/gm, '') });
    return '';
  });
  const noCode = noMathFences.replace(/```[\s\S]*?```/g, '');
  let work = noCode;
  // $$...$$ （跨行）
  work = work.replace(/\$\$([\s\S]+?)\$\$/g, (m, body) => {
    formulas.push({ display: true, body });
    return '';
  });
  // 剩余的单 $...$（跨行也收，行内公式不应跨行，但检测出跨行也说明问题）
  work = work.replace(/\$([^$\n]+?)\$/g, (m, body) => {
    // GitHub 的 $`...`$ 写法用反引号保护公式，反引号不属于 LaTeX。
    formulas.push({ display: false, body: body.startsWith('`') && body.endsWith('`') ? body.slice(1, -1) : body });
    return '';
  });
  // 剩余未配对的 $（奇数个）也要报，并给出上下文便于定位
  const ctx = [];
  const re = /\$/g;
  let m;
  while ((m = re.exec(work)) !== null && ctx.length < 5) {
    ctx.push(work.slice(Math.max(0, m.index - 60), m.index + 60).replace(/\n/g, '⏎'));
  }
  const lone = (work.match(/\$/g) || []).length;
  return { formulas, loneDollars: lone, loneContext: ctx };
}

function checkFile(fp) {
  const text = fs.readFileSync(fp, 'utf8');
  const { formulas, loneDollars, loneContext } = extractFormulas(text);
  const problems = [];
  if (loneDollars > 0) {
    problems.push(`存疑：正文残留 ${loneDollars} 个未配对或可疑的 $ 符号，前几处上下文：`);
    loneContext.forEach(c => problems.push(`      …${c}…`));
  }
  formulas.forEach((f, i) => {
    try {
      katex.renderToString(f.body, { throwOnError: true, displayMode: f.display });
    } catch (e) {
      const head = f.body.replace(/\n/g, ' ').slice(0, 90);
      problems.push(`${f.display ? '块' : '行内'}公式[#${i + 1}] "${head}..." → ${String(e.message).split('\n')[0]}`);
    }
  });
  return { formulas: formulas.length, problems };
}

const target = process.argv[2];
if (!target) {
  console.error('用法: node check_katex.js <md文件或目录>');
  process.exit(1);
}
const files = collectFiles(target);
let totalProblems = 0;
for (const fp of files) {
  const { formulas, problems } = checkFile(fp);
  const name = path.basename(fp);
  if (problems.length === 0) {
    console.log(`✓ ${name}  (${formulas} 个公式，全部通过)`);
  } else {
    totalProblems += problems.length;
    console.log(`✗ ${name}  (${formulas} 个公式，${problems.length} 个问题)`);
    problems.forEach(p => console.log(`    - ${p}`));
  }
}
console.log(`\n== 总计 ${files.length} 个文件，${totalProblems} 个问题 ==`);
