# 用法: python -I split_exam.py <转录目录> <输出目录>
# 把「题面+答案」合一的转录 md 拆成：
#   {输出目录}/题面卷/*.md   —— 去掉答案/解答引用块，供打印模拟考
#   {输出目录}/答案册/*.md   —— 原转录整份复制，供对答案
#
# v2 (2026-10-10 深夜)：针对外部评委 G1 发现的三种泄漏形态修复：
#   ① 解答块标记漏 "证"（10 届 `> **证**：`、14 届 `> **【证】**`）
#   ② 13 届补赛式「答案内嵌于 \underline{...}」——题面卷中非空 underline 一律剥为 \qquad
#   ③ 输出后自动泄漏断言（underline 非空扫描 + 答案块残留扫描），有泄漏即报 ⚠️
import sys, os, re, glob, shutil
sys.stdout.reconfigure(encoding='utf-8')

src_dir = sys.argv[1]
out_dir = sys.argv[2]
paper_dir = os.path.join(out_dir, '题面卷')
ans_dir = os.path.join(out_dir, '答案册')
os.makedirs(paper_dir, exist_ok=True)
os.makedirs(ans_dir, exist_ok=True)

# 答案块的起始标记（引用块内）：覆盖 **答案**/**解答**/**证明**/**证**/**【证】**/**另解**/**解**/**解法N**
ANS_START = re.compile(r'^>\s*\*\*\s*[【\s]*(答案|解答|证明|证|另解|解法|解|答)')

TOKEN = r'\underline{'


def iter_underlines(text):
    """产出 (内容, 起止位置) —— 嵌套花括号感知的 underline 命令遍历"""
    i = 0
    while True:
        j = text.find(TOKEN, i)
        if j < 0:
            break
        k = j + len(TOKEN)
        depth, p = 1, k
        while p < len(text) and depth > 0:
            if text[p] == '{':
                depth += 1
            elif text[p] == '}':
                depth -= 1
            p += 1
        inner = text[k:p - 1]
        yield inner, j, p
        i = p


def strip_underline_answers(text):
    """把 underline 命令内的非空白内容剥为空白（题面卷专用）"""
    out, i = [], 0
    for inner, start, end in iter_underlines(text):
        if start < i:
            continue
        out.append(text[i:start + len(TOKEN)])
        out.append(inner if inner.strip() in ('', r'\qquad') else r'\qquad')
        out.append('}')
        i = end
    out.append(text[i:])
    return ''.join(out)


def strip_answers(text):
    lines = text.split('\n')
    out = []
    skipping = False
    removed = 0
    for ln in lines:
        s = ln.rstrip()
        if skipping:
            if s.startswith('>'):
                continue
            elif s == '':
                continue
            else:
                skipping = False
        if ln.startswith('>') and ANS_START.match(ln):
            skipping = True
            removed += 1
            continue
        out.append(ln)
    res = re.sub(r'\n{3,}', '\n\n', '\n'.join(out))
    # 模拟卷：题面卷截断在「命题双向细目表」之前（细目表含答案数值，会泄漏）
    m = re.search(r'\n#+\s*(附[：:]\s*)?命题双向细目表', res)
    if m:
        res = res[:m.start()] + '\n\n> （命题双向细目表含答案数值，已移至「答案册」版本。）\n'
    # 剥去内嵌于 underline 的答案（13 届补赛式）
    res = strip_underline_answers(res)
    return res, removed


def leak_check(paper_text, name):
    """题面卷泄漏断言（评委 G1 的三重扫描思路）"""
    probs = []
    # ① 非空 underline 残留
    for inner, start, end in iter_underlines(paper_text):
        if inner.strip() not in ('', r'\qquad'):
            line_no = paper_text[:start].count('\n') + 1
            probs.append(f'L{line_no}: \\underline 内仍有内容「{inner[:40]}」')
    # ② 答案/证明块残留
    for i, ln in enumerate(paper_text.split('\n'), 1):
        if ANS_START.match(ln):
            probs.append(f'L{i}: 残留答案块 {ln[:50]}')
    return probs


files = sorted(glob.glob(os.path.join(src_dir, '*.md')))
total_probs = 0
for f in files:
    name = os.path.basename(f)
    # R1 修复：源目录中的「-参考解答.md」（纯解答文件）不参与拆分（它们不是题面+答案合一卷）
    if '参考解答' in name:
        print(f'· {name[:52]:54s} 跳过（纯解答文件，不属于题面卷体系）')
        continue
    text = open(f, encoding='utf-8').read()
    paper, n_removed = strip_answers(text)
    header_note = '\n> 📝 **本文件为「题面卷」**（答案与解答已移除，供模拟自测）。做完后对照同目录 `../答案册/` 下的完整版本。\n'
    m = re.match(r'^(# [^\n]+\n)', paper)
    if m:
        # L13：抬头里的「及参考答案/及答案解析」与"答案已移除"矛盾——题面卷抬头统一去掉
        title = m.group(1)
        title = re.sub(r'试题及参考答案', '试题', title)
        title = re.sub(r'试题及答案解析', '试题', title)
        title = re.sub(r'试题、参考答案', '试题', title)
        paper = title + header_note + paper[m.end():]
    with open(os.path.join(paper_dir, name), 'w', encoding='utf-8') as fh:
        fh.write(paper)
    shutil.copy2(f, os.path.join(ans_dir, name))
    probs = leak_check(paper, name)
    total_probs += len(probs)
    if probs:
        print(f'⚠️  {name[:46]:48s} 移除 {n_removed} 块 | 泄漏 {len(probs)} 处：')
        for p in probs[:6]:
            print(f'      {p}')
    else:
        print(f'✓ {name[:46]:48s} 移除 {n_removed} 块 | 泄漏断言通过')

print(f'\n完成：{len(files)} 份 → {paper_dir} 与 {ans_dir}｜总计泄漏问题 {total_probs} 处')
