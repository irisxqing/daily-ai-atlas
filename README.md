# AI Daily Atlas

AI Daily Atlas is a bilingual AI newsletter website for people who want to catch global AI signals early, without drowning in noisy feeds.

AI Daily Atlas 是一个中英双语 AI newsletter 网站，帮助关注 AI 的战略、产品、运营和研究型读者，第一时间抓住全球 AI 信号，而不是被碎片信息淹没。

## Why I Built This / 为什么做这个

AI news moves too fast. A single day can include model updates, funding rounds, open-source agents, robotics demos, product launches, research reports, and new tools worth trying. I wanted something more useful than another endless feed: a daily map that helps me see what matters, why it matters, and which original sources are worth opening.

AI 新闻太多、太快，也太容易变成碎片化焦虑。我想要的不是又一个信息流，而是一张每天更新的 AI 地图：既能快速扫到今天发生了什么，也能沉淀长期趋势、产品灵感、机构观点和可追踪的原始来源。

## Demo / 在线演示

Website: [https://irisxqing.github.io/daily-ai-atlas/](https://irisxqing.github.io/daily-ai-atlas/)

线上地址：[https://irisxqing.github.io/daily-ai-atlas/](https://irisxqing.github.io/daily-ai-atlas/)

## Screenshot / 首页截图

![AI Daily Atlas homepage](./assets/screenshot-ai-daily-atlas-20260515.png)

## Features / 功能

- **每日 AI 信号简报**：把全球 AI 新闻整理成可快速阅读的日报，主线栏目重构为头条、深度、观点，并保留开源项目、AI 产品推荐和每日词条。
  **Daily AI signal briefing**: turns global AI updates into a readable daily briefing structured around headlines, deep dives, views, open source, product picks, and the daily AI term.

- **确定性编辑筛选**：先巡源、去重、日期门禁和栏目打分，再把固定 shortlist 交给模型写解读，减少换模型导致的选题漂移。
  **Deterministic editorial filtering**: scans sources, deduplicates, gates by date, scores by section, and only then asks the model to write from a fixed shortlist.

- **面向非技术读者的解释方式**：不只罗列新闻，也解释公司背景、事件细节、为什么重要，以及可能影响哪些行业和工作流。
  **Non-technical friendly context**: goes beyond headlines by explaining company background, event details, why it matters, and which workflows may be affected.

- **高价值 AI 产品发现**：优先推荐知识管理、研究工作台、跨模型记忆、Agent 工作流和产品原型等真正能进入工作场景的工具。
  **High-signal AI product discovery**: prioritizes tools that can enter real workflows, including knowledge bases, research workbenches, cross-model memory, agent workflows, and prototyping.

- **深度与观点分层**：深度栏目解释 Agentic AI、多模态、世界模型/机器人、医疗 AI、AI for Science 和安全治理等热门主题；观点栏目收纳机构报告、AI 领军人物和投资人的判断。
  **Deep dives and views**: deep dives explain themes like agentic AI, multimodality, world models, robotics, healthcare AI, AI for Science, and safety governance; views collect reports and expert or investor perspectives.

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

## Broadcast Generation / 每日口播稿生成

Generate a Chinese broadcast script from the latest issue in `app.js`:

```bash
node tools/generate-broadcast.mjs
```

Generate a specific issue or English version:

```bash
node tools/generate-broadcast.mjs --date 2026-05-15 --out broadcasts/2026-05-15-zh.md
node tools/generate-broadcast.mjs --lang en --date 2026-05-15 --stdout
```

生成结果会保存到 `broadcasts/YYYY-MM-DD-zh.md`，可以直接作为播客、短视频口播、微信群语音或 LinkedIn 摘要的底稿。

## Automation / 自动更新

- **工作日自动更新**：GitHub Actions 在 UTC 周日到周四 23:30 运行，也就是北京时间周一到周五 7:30。
  **Weekday automation**: GitHub Actions runs Sunday-Thursday at 23:30 UTC, which is Monday-Friday 7:30 Beijing time.

- **覆盖窗口**：周二到周五覆盖北京时间前一自然日；周一覆盖周六和周日。
  **Coverage window**: Tuesday-Friday issues cover the previous Beijing calendar day; Monday issues cover Saturday and Sunday.

- **发布方式**：脚本会更新 `app.js`，提交到 `main`，然后 GitHub Pages 自动刷新。
  **Publishing flow**: the script updates `app.js`, commits to `main`, and GitHub Pages refreshes automatically.

- **低成本生成**：默认优先使用 `DEEPSEEK_API_KEY` + `deepseek-v4-flash`，并用多源采集、内容深度校验和一次自动重试保证质量；如果没有 DeepSeek key，会回退到 OpenAI。可选 repository variables：`AI_PROVIDER`、`DEEPSEEK_MODEL`、`OPENAI_MODEL`、`OPENAI_REASONING_EFFORT`。
  **Low-cost generation**: the workflow prefers `DEEPSEEK_API_KEY` + `deepseek-v4-flash`, with multi-source collection, depth validation, and one automatic retry for quality; if no DeepSeek key is available, it falls back to OpenAI. Optional repository variables: `AI_PROVIDER`, `DEEPSEEK_MODEL`, `OPENAI_MODEL`, `OPENAI_REASONING_EFFORT`.

## Roadmap / 接下来想做

- **结构化信息源与评分逻辑**：为每条新闻增加来源类型、可信度、地区、公司、主题和推荐理由，提升筛选质量。
  **Add structured source metadata and scoring**: capture source type, confidence, region, company, topic, and selection rationale for each story.

- **原文深度抓取**：接入 Jina Reader API、Firecrawl 或同等工具，为高分候选补充 clean text，减少只靠 RSS snippet 写作带来的信息不足。
  **Fetch full source text**: add Jina Reader API, Firecrawl, or an equivalent reader layer so high-scoring leads get clean source text instead of relying only on RSS snippets.

- **结构化输出升级**：将当前 JSON 输出约束升级为更严格的 JSON Schema / structured outputs，降低格式漂移和模块缺失。
  **Upgrade structured outputs**: move from JSON-only prompting to stricter JSON Schema or provider-native structured outputs to reduce format drift and missing modules.

- **前端数据分片与历史搜索索引**：把长期归档拆成月份数据文件，并生成轻量全站索引，改善 GitHub Pages 上的加载和搜索体验。
  **Chunk archive data and add a search index**: split long-term archives into monthly data files and generate a lightweight global index for faster GitHub Pages loading and search.

- **搭建可维护的内容后台**：增加轻量编辑/admin 面板，用来维护日报模板、归档内容、产品推荐和报告条目。
  **Build a maintainable content backend**: add a lightweight editor/admin panel for daily templates, archive entries, product picks, and report items.

- **邮件订阅与自动发送**：支持用户订阅，并把每日 7:30 生成的内容自动发送到邮箱。
  **Add email subscription and delivery**: let readers subscribe and receive the daily 7:30 briefing by email.

- **RSS 输出**：为每日 issue 生成 RSS，让读者可以在自己的阅读器里订阅。
  **Publish RSS feeds**: generate RSS output for each daily issue so readers can subscribe in their own feed readers.

- **收藏与稍后阅读**：支持保存重要文章、产品和报告，并标记已读/待读状态。
  **Add bookmarks and read-later state**: let readers save important articles, products, and reports, with read/unread status.

- **主题趋势分析**：增加 7/30/90 天趋势视图，看哪些公司、技术方向和产品类别正在升温。
  **Add topic trend views**: show 7/30/90-day trends for companies, technologies, and product categories.

- **移动端深度优化**：继续优化手机上的长报告阅读、媒体卡片、标签筛选和归档浏览。
  **Improve mobile reading**: refine long-report reading, media cards, tag filters, and archive browsing on mobile.

## Feedback / 反馈

Issues, stars, forks, and source suggestions are welcome.

欢迎提交 issue、star 或 fork。也欢迎建议新的 AI 信息源、产品推荐标准、报告来源和版式改进。
