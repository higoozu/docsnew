---
sidebar_position: 1
---

# 常用代码

## 给图片批量加水印

```bash
ffmpeg -i 61704974634.webp -vf drawtext="fontsize=40:text='#':fontcolor=white:alpha=0.5:x=W-tw-10:y=H-th-10" -y output2.webp
for /r %%a in (*.webp) do ffmpeg -i %%a -vf drawtext="fontsize=40:text='#':fontcolor=white:alpha=0.5:x=W-tw-10:y=H-th-10" -y [out] %%a~na
```