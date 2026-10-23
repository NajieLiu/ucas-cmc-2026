# 用法: python -I render_pdf.py <pdf路径> <输出目录> [dpi]
# 把扫描版 PDF 逐页渲染为 PNG，供视觉转写使用
import sys, os
sys.stdout.reconfigure(encoding='utf-8')
import pymupdf

pdf_path = sys.argv[1]
out_dir = sys.argv[2]
dpi = int(sys.argv[3]) if len(sys.argv) > 3 else 140

os.makedirs(out_dir, exist_ok=True)
doc = pymupdf.open(pdf_path)
for i in range(doc.page_count):
    pix = doc[i].get_pixmap(dpi=dpi)
    pix.save(os.path.join(out_dir, f'p{i + 1}.png'))
print(f'rendered {doc.page_count} pages (dpi={dpi}) -> {out_dir}')
