# Design

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-math` | `oklch(0.85 0.12 260)` | 数学/几何蓝：主品牌色，按钮、激活态、脑图连线 |
| `--color-surface` | `oklch(0.08 0.01 260)` | 最深底色，接近纯黑但带极微蓝调 |
| `--color-surface-alt` | `oklch(0.13 0.01 260)` | 卡片、面板底色 |
| `--color-surface-raised` | `oklch(0.18 0.01 260)` | hover 态、浮层 |
| `--color-gold` | `oklch(0.80 0.15 85)` | 升级/完美通关 |
| `--color-silver` | `oklch(0.70 0.02 260)` | 通关/已完成 |
| `--color-ink` | `oklch(0.92 0.005 260)` | 正文 |
| `--color-ink-muted` | `oklch(0.60 0.01 260)` | 辅助文字 |
| `--color-ink-dim` | `oklch(0.35 0.01 260)` | 禁用/占位文字 |
| `--color-success` | `oklch(0.65 0.18 160)` | 正确反馈 |
| `--color-danger` | `oklch(0.55 0.22 20)` | 错误反馈 |

策略：Restrained。以数学蓝为单一品牌色（≤10% 表面），金/银为语义色（进度系统），其余为中性暗色阶。不做多色板块标签。

## Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display (板块标题) | Inter | 700 | clamp(2rem, 5vw, 3.5rem) |
| Heading (章节名) | Inter | 600 | 1.25rem |
| Body (讲义/题目) | Inter + Noto Sans SC | 400 | 0.9375rem (15px) |
| Caption (标签/辅助) | Inter + Noto Sans SC | 400 | 0.75rem |
| Math | KaTeX default (Computer Modern) | — | 1.1em relative |

单一字体族 Inter + 思源黑体回退。不做字体混排。KaTeX 公式使用 Computer Modern 保持数学排版的经典感，与 UI 的 Inter 形成学科感对比。

## Spacing Scale

`0.25rem` 基准：4, 8, 12, 16, 20, 24, 32, 40, 48, 64。页面外边距 16px，卡片内边距 20px，板块间距 24-32px。

## Layout

- 单栏，max-width 480px（手机优先），大屏幕居中展示
- 脑图页使用更大的画布（max-width 720px），支持水平滚动
- 不使用卡片嵌套。列表项使用分割线或间距分隔

## Motion

- 页面切换：淡入 + Y 轴微位移 (10px)，duration 0.3s，ease-out
- 列表 stagger：每项 delay 0.05s
- 结算粒子：perfect 时 30 个彩色碎纸片，cleared 时 15 个圆点，failed 时不播放粒子
- 弹簧动画：stiffness 300, damping 20（克制，不弹跳）
- 脑图连线：绘制动画 0.6s，ease-out
- 所有动画受 `prefers-reduced-motion` 控制

## Components

- 板块卡片：大圆角 (16px) 容器，几何装饰线，进度环
- 脑图节点：圆 + 连线 + 标签，颜色反映状态
- 章节卡片：紧凑列表项，右箭头
- 题目卡片：宽松排版，公式区有微妙背景区分
- 按钮：全部 pill (12px radius)，主按钮实色，次按钮描边
