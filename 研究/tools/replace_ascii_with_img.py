# 用法: python -I replace_ascii_with_img.py [篇号，如 01 / 留空=全部]
# 作用：把教学文档中被画成 Graphviz 插图的 ASCII 代码块，替换为图片引用 ![alt](图/<名>.svg)
# 依据：教学文档/图/_原文备档/_index.json（导出时记录的文件名+围栏行号+块内容）
# 安全：
#   ① 替换前断言围栏行是 ```、块内容与备档完全一致（防行号漂移）
#   ② 同文件多块按行号倒序替换（防漂移）；已替换过的块直接跳过（幂等）
import sys, os, json

sys.stdout.reconfigure(encoding='utf-8')

BASE = r'C:\Users\15861\WPSDrive\1876856493\WPS企业云盘\中国科学院大学\我的企业文档\大三上学习\CMC教程和练习\教学文档'
IDX = os.path.join(BASE, '图', '_原文备档', '_index.json')

ALTS = {
    '00-作战地图':     '150 分钟作战地图：难度梯度与得分策略',
    '01-知识树':       '极限计算知识树：函数极限三件套 / 数列极限两把尺 / 含积分的极限',
    '02-知识树':       '极限证明与连续性知识树',
    '03-知识树':       '导数与微分计算知识树',
    '04-知识树':       '微分中值定理与证明知识树',
    '05-知识树':       '一元积分计算知识树',
    '06-知识树':       '定积分应用与积分不等式知识树',
    '07-知识树':       '常微分方程知识树',
    '08-知识树':       '向量代数与空间解析几何知识树',
    '09-知识树':       '多元函数微分学知识树',
    '10-知识树':       '重积分知识树',
    '11-知识树':       '曲线曲面积分知识树',
    '12-知识树':       '数项级数知识树',
    '13-知识树':       '幂级数与傅里叶级数知识树',
    '02-间断点分类树': '间断点分类树：第一类（可去/跳跃）与第二类（无穷/振荡）',
    '04-四板斧流程':   '构造辅助函数四板斧：选择流程',
    '07-ODE求解流程':  '常微分方程求解流程图（考场上照着走）',
}


def main():
    only = sys.argv[1] if len(sys.argv) > 1 else ''
    idx = json.load(open(IDX, encoding='utf-8'))
    # 按文件分组、组内按 fence_start 倒序
    by_file = {}
    for key, rec in idx.items():
        if only and not key.startswith(only):
            continue
        by_file.setdefault(rec['file'], []).append((key, rec))
    n_done = 0
    for fn, items in by_file.items():
        path = os.path.join(BASE, fn)
        lines = open(path, encoding='utf-8').read().split('\n')
        for key, rec in sorted(items, key=lambda x: x[1]['fence_start'], reverse=True):
            alt = ALTS[key]
            imgline = f'![{alt}](图/{key}.svg)'
            fs, fe = rec['fence_start'], rec['fence_end']   # 1-based，含围栏
            if lines[fs - 1].strip() == imgline:
                print(f'  · {fn[:28]} {key}: 已是图片引用，跳过')
                continue
            assert lines[fs - 1].startswith('```') and lines[fe - 1].startswith('```'), \
                f'{fn} {key}: 围栏行异常 L{fs}/{fe}: {lines[fs-1][:30]!r} / {lines[fe-1][:30]!r}'
            content = '\n'.join(lines[fs:fe - 1])
            assert content == rec['content'], f'{fn} {key}: 块内容与备档不一致（行号可能已漂移）'
            lines[fs - 1:fe] = [imgline]
            n_done += 1
            print(f'  ✓ {fn[:28]} {key}: L{fs}-{fe} 代码块 → 图片引用')
        open(path, 'w', encoding='utf-8', newline='\n').write('\n'.join(lines))
    print(f'\n完成：共替换 {n_done} 处')


if __name__ == '__main__':
    main()
