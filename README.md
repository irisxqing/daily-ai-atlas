# Daily AI Atlas

Daily AI Atlas is a bilingual AI newsletter website for people who want to catch global AI signals early, without drowning in noisy feeds.

Daily AI Atlas 是一个中英双语 AI newsletter 网站，帮助关注 AI 的战略、产品、运营和研究型读者，第一时间抓住全球 AI 信号，而不是被碎片信息淹没。

## Why I Built This / 为什么做这个

AI news moves too fast. A single day can include model updates, funding rounds, open-source agents, robotics demos, product launches, research reports, and new tools worth trying. I wanted something more useful than another endless feed: a daily map that helps me see what matters, why it matters, and which original sources are worth opening.

AI 新闻太多、太快，也太容易变成碎片化焦虑。我想要的不是又一个信息流，而是一张每天更新的 AI 地图：既能快速扫到今天发生了什么，也能沉淀长期趋势、产品灵感、机构观点和可追踪的原始来源。

## Demo / 在线演示

Website: [https://irisxqing.github.io/daily-ai-atlas/](https://irisxqing.github.io/daily-ai-atlas/)

线上地址：[https://irisxqing.github.io/daily-ai-atlas/](https://irisxqing.github.io/daily-ai-atlas/)

## Screenshot / 首页截图

![Daily AI Atlas homepage](./assets/screenshot-home.png)

## Features / 功能

- AI newsletter: curated daily briefings across top stories, funding, open source, AI product picks, and research reports.
- Daily refresh note: the site clearly communicates that the latest AI news is refreshed every day at 9:30.
- Bilingual reading: Simplified Chinese by default, with a lightweight CN/EN language switch.
- Archive and search: calendar-based archive, keyword search, and tag filtering for past issues.
- AI term spotlight: one compact AI concept explainer per day, placed near the top for quick context.
- Report expansion: research report bullets can expand into more detailed summaries with core viewpoints, key data, quotes, and chart references.
- Product picks: AI tools are selected for workflow relevance, such as knowledge management, research workbenches, cross-model memory, and product prototyping.
- Source links: original articles, product pages, GitHub repositories, reports, and media links are highlighted directly inside the information cards.
- Media-rich cards: cards support images, video-style previews, GitHub previews, and graceful fallbacks when media fails to load.
- Static publishing: the site runs as a static website and is hosted on GitHub Pages.

- AI 生成/整理 newsletter：按今日重点、投融资、开源项目、AI 产品推荐、机构报告等板块组织。
- 每日刷新提示：页面明确展示每天 9:30 刷新最新 AI 消息。
- 双语阅读：默认简体中文，并支持轻量中/英切换。
- 归档检索：支持月历归档、关键词搜索和标签筛选，方便回看历史日报。
- 今日 AI 词条：每天解释一个 AI 概念，帮助非技术背景读者快速建立上下文。
- 机构报告展开：报告要点可以展开查看更详细的核心观点、关键数据、原始 quote 和图表线索。
- AI 产品推荐：更偏向知识管理、研究工作台、跨模型记忆、产品原型等高价值工作流，而不是单纯好玩的工具。
- 原始链接高亮：信息卡片内直接突出原文、产品页、GitHub 仓库、报告和媒体链接。
- 图文卡片：支持图片、视频式预览、GitHub preview，并处理图片加载失败的情况。
- 静态托管：网站无需后端，可直接通过 GitHub Pages 发布。

## Tech Stack / 技术栈

- HTML / CSS / Vanilla JavaScript
- Static issue archive stored in `app.js`
- GitHub Pages for public hosting
- Codex-assisted workflow for content updates, local preview, and publishing
- Python `http.server` for local development preview

## Getting Started / 本地运行

Clone the repo and run a local static server:

```bash
git clone git@github.com:irisxqing/daily-ai-atlas.git
cd daily-ai-atlas
python3 -m http.server 8765
```

Open:

```text
http://localhost:8765/
```

The site is fully static. Daily issues live inside `app.js`, while layout and interactions are handled by `index.html`, `styles.css`, and `app.js`.

这是一个纯静态网站。日报内容主要存放在 `app.js`，页面结构和交互分别由 `index.html`、`styles.css` 和 `app.js` 处理。

## Roadmap / 接下来想做

- Add a real email subscription and delivery flow.
- Add RSS output for daily issues.
- Add a lightweight editor/admin panel for newsletter templates and archive entries.
- Add saved/bookmarked articles and read-later state.
- Add topic trend views across 7/30/90 days.
- Add more structured source metadata and scoring logic.
- Improve mobile reading for long reports and media-heavy cards.

- 增加真正的邮件订阅和自动发送能力。
- 为每日内容生成 RSS。
- 增加轻量管理后台，用来维护日报模板和归档内容。
- 增加收藏、稍后阅读和已读状态。
- 增加 7/30/90 天主题趋势视图。
- 增加更结构化的信息源元数据和筛选评分逻辑。
- 继续优化移动端阅读，尤其是长报告和图文卡片。

## Feedback / 反馈

Issues, stars, forks, and source suggestions are welcome.

欢迎提交 issue、star 或 fork。也欢迎建议新的 AI 信息源、产品推荐标准、报告来源和版式改进。
