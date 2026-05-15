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

- **每日 AI 信号简报**：把全球 AI 新闻整理成可快速阅读的日报，覆盖今日重点、投融资、开源项目、AI 产品推荐和机构报告。
  **Daily AI signal briefing**: turns global AI updates into a readable daily briefing across top stories, funding, open source, product picks, and research reports.

- **面向非技术读者的解释方式**：不只罗列新闻，也解释公司背景、事件细节、为什么重要，以及可能影响哪些行业和工作流。
  **Non-technical friendly context**: goes beyond headlines by explaining company background, event details, why it matters, and which workflows may be affected.

- **高价值 AI 产品发现**：优先推荐知识管理、研究工作台、跨模型记忆、Agent 工作流和产品原型等真正能进入工作场景的工具。
  **High-signal AI product discovery**: prioritizes tools that can enter real workflows, including knowledge bases, research workbenches, cross-model memory, agent workflows, and prototyping.

- **机构报告深读**：报告条目支持展开，查看核心观点、关键数据、原始 quote、图表线索和下载/阅读链接。
  **Research report deep dives**: report bullets expand into core takeaways, key data, original quotes, chart references, and source links.

- **原始来源可追溯**：每张信息卡片都会突出原文、官网、GitHub、报告或媒体链接，方便继续追踪一手信息。
  **Traceable original sources**: every card highlights source links such as articles, official pages, GitHub repositories, reports, or media.

- **双语阅读体验**：默认简体中文，支持轻量中/英切换，适合中文阅读和英文原始资料之间来回切换。
  **Bilingual reading experience**: Simplified Chinese by default, with a lightweight CN/EN switch for moving between Chinese summaries and English source material.

- **归档与标签检索**：通过月历、关键词搜索和标签筛选查看历史日报，让每日内容可以长期沉淀。
  **Archive and tag search**: calendar navigation, keyword search, and tag filters make daily issues reusable over time.

- **今日 AI 词条**：每天解释一个 AI 概念，帮助读者逐步建立 AI 领域的基础词汇和判断框架。
  **Daily AI term spotlight**: explains one AI concept each day to build vocabulary and judgment over time.

- **图文并茂的信息卡片**：支持图片、视频式预览、GitHub preview 和加载失败兜底，让信息流更容易扫读。
  **Media-rich information cards**: supports images, video-style previews, GitHub previews, and graceful fallbacks for easier scanning.

- **静态网站发布**：无需后端即可本地预览并通过 GitHub Pages 发布，适合轻量维护和公开分享。
  **Static-site publishing**: runs without a backend, supports local preview, and can be published via GitHub Pages for lightweight sharing.

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
