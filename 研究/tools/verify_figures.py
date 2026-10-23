# 用法: python -I verify_figures.py
# 作用：审计 教学文档/图/ 下全部插图三件套（dot/svg/png）完整性 + SVG 宽度红线检查
#   ✔ 宽度 ≤700pt = 达标；700–800pt = 可接受；>800pt = ⚠ 超标需优化
import sys, os, re, glob

sys.stdout.reconfigure(encoding='utf-8')

FIG_DIR = r'C:\Users\15861\WPSDrive\1876856493\WPS企业云盘\中国科学院大学\我的企业文档\大三上学习\CMC教程和练习\教学文档\图'

EXPECTED = [
    '00-作战地图', '01-知识树', '02-知识树', '02-间断点分类树', '03-知识树',
    '04-知识树', '04-四板斧流程', '05-知识树', '06-知识树', '07-知识树',
    '07-ODE求解流程', '08-知识树', '09-知识树', '10-知识树', '11-知识树',
    '12-知识树', '13-知识树',
]

missing, over, ok = [], [], 0
for name in EXPECTED:
    trio = [os.path.join(FIG_DIR, name + ext) for ext in ('.dot', '.svg', '.png')]
    absent = [ext for ext, p in zip(('.dot', '.svg', '.png'), trio) if not os.path.exists(p)]
    if absent:
        missing.append(f'{name}: 缺 {", ".join(absent)}')
        continue
    svg = open(trio[1], encoding='utf-8').read()
    m = re.search(r'width="([\d.]+)pt" height="([\d.]+)pt"', svg)
    w, h = float(m.group(1)), float(m.group(2))
    png_kb = os.path.getsize(trio[2]) // 1024
    flag = '✓' if w <= 700 else ('△' if w <= 800 else '⚠ 超标')
    if w > 800:
        over.append(name)
    else:
        ok += 1
    # 等效打印字号（A4 内容宽 527pt 时的缩放系数，参照 14pt 叶节点字号）
    scale = min(1.0, 527 / w)
    print(f'{flag} {name:16s} {w:6.1f} x {h:6.1f} pt  (缩放 {scale:.0%}，14pt 叶节点→打印 {14*scale:.1f}pt)  PNG {png_kb}KB')

print()
if missing:
    print('❌ 缺失：'); [print('   ', x) for x in missing]
if over:
    print(f'⚠ 宽度超标（>800pt）：{", ".join(over)}')
print(f'合计：{len(EXPECTED)} 张应存在，{ok} 张宽度达标/可接受，{len(missing)} 张缺失，{len(over)} 张超标')
