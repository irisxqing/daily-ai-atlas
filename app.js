const archiveZh = [
  {
    date: "2026-05-15",
    title: "Daily AI Atlas",
    meta: "2026年5月15日 · 深圳/香港视角",
    headline: "从模型能力到真实落地",
    summary:
      "今天的 AI 主线是落地：人形机器人开始跑完整班次，模型公司转向企业部署，AI 正从聊天框进入实时交互和操作系统层，中国开源模型继续压低使用成本，开源 Agent、有趣产品和机构报告则提供了更适合长期跟踪的信号。",
    items: [
      {
        section: "今日重点",
        priority: "高",
        title: "Figure 机器人完成 8 小时工厂班次",
        dek:
          "人形机器人公司 Figure 展示了一组机器人连续完成包裹分拣任务，试图证明机器人不只是演示视频里的角色，而是可以接近真实上班节奏。",
        media: {
          type: "image",
          src: "https://images.ctfassets.net/qx5k8y1u9drj/5yM1thk8o5swuduSTOMRHf/6be7879c59f758783472f06b28a6610c/all_hands_table.jpg?fm=webp&q=70&w=3840",
          alt: "Figure robot production rate chart",
          title: "Robot operations signal",
          caption: "Figure 官方生产节奏图：机器人从实验室样机进入规模化运营",
          href: "https://www.figure.ai/news/ramping-figure-03-production"
        },
        details: [
          "Figure 成立于 2022 年，主攻通用人形机器人，投资方包括 Microsoft、NVIDIA、OpenAI Startup Fund、Intel 和 Jeff Bezos。",
          "这次任务包含识别条形码、抓取包裹、调整方向、放到传送带上，AI Valley 提到节奏约为每 3 秒处理一个包裹。",
          "机器人运行在 Figure 的 Helix-02 系统上，可以把视觉理解、动作控制、平衡和抓取整合在一起。",
          "真正值得看的是连续运行、协作换班、电量不足时请求替换、故障时进入维护流程。"
        ],
        why:
          "机器人商业化最难的不是单次动作，而是稳定性、维护成本和单位时间产出。这条新闻把问题从“机器人会不会抓东西”推进到了“机器人能不能完整上一个班”。",
        links: [
          ["AI Valley 原文", "https://www.theaivalley.com/p/figure-s-robots-worked-an-8-hour-factory-shift"],
          ["Figure Helix-02", "https://www.figure.ai/news/helix-02"],
          ["Figure 生产进展", "https://www.figure.ai/news/ramping-figure-03-production"],
          ["融资背景", "https://www.cnbc.com/2024/02/29/robot-startup-figure-valued-at-2point6-billion-by-bezos-amazon-nvidia.html"]
        ]
      },
      {
        section: "今日重点",
        priority: "高",
        title: "OpenAI 推出 Deployment Company，企业落地战加速",
        dek:
          "OpenAI 正式推出企业部署公司，目标是派出更接近顾问和工程师混合体的团队，帮助大企业把 AI 接入真实工作流。",
        details: [
          "OpenAI 使用 Forward Deployed Engineers 这一角色，可以理解为驻场 AI 工程师。",
          "这类团队会处理企业数据、权限、安全、工作流设计和内部系统集成。",
          "Reuters 此前称 OpenAI 和 Anthropic 相关企业服务公司都在洽谈收购 AI 服务公司。",
          "这意味着模型公司正在从卖 API，走向卖行业解决方案和业务结果。"
        ],
        why:
          "企业客户不会只问模型排行榜，而会问 AI 能否减少客服成本、提高法务审阅速度、缩短投研和财务流程。AI 公司正在变成模型、软件、咨询和系统集成的混合体。",
        links: [
          ["OpenAI 官方", "https://openai.com/index/openai-launches-the-deployment-company/"],
          ["TechCrunch", "https://techcrunch.com/2026/05/04/anthropic-and-openai-are-both-launching-joint-ventures-for-enterprise-ai-services/"],
          ["Reuters 转引", "https://www.investing.com/news/stock-market-news/openai-anthropic-ventures-in-talks-to-buy-ai-services-firms-sources-say-4659837"]
        ]
      },
      {
        section: "今日重点",
        priority: "中高",
        title: "DeepSeek V4 继续强化中国模型的低成本路线",
        dek:
          "DeepSeek V4 预览版继续用低成本、开放生态和国产算力适配挑战美国闭源模型的价格体系。",
        details: [
          "DeepSeek 是杭州 AI 公司，因 R1 推理模型在全球出圈，核心标签是高效率和低成本。",
          "Reuters 报道称 DeepSeek V4 适配华为芯片，这对中国 AI 自主生态有标志意义。",
          "多家媒体提到 V4 支持更长上下文窗口，即模型一次能处理更多资料。",
          "它会继续给 Qwen、GLM、MiniMax、Kimi 等中国模型带来价格和能力压力。"
        ],
        why:
          "DeepSeek 的影响不只是“又一个模型发布”，而是改变企业对模型价格的预期。如果一个更便宜的模型已经够用，企业会自然转向多模型组合。",
        links: [
          ["TechCrunch", "https://techcrunch.com/2026/04/24/deepseek-previews-new-ai-model-that-closes-the-gap-with-frontier-models/"],
          ["Reuters 转引", "https://www.marketscreener.com/news/deepseek-v4-the-chinese-ai-model-adapted-for-huawei-chips-ce7f59dfdd8ef323"],
          ["Fortune", "https://fortune.com/2026/04/24/deepseek-v4-ai-model-price-performance-china-open-source/"]
        ]
      },
      {
        section: "今日重点",
        priority: "中高",
        title: "Google DeepMind 的 AlphaEvolve 进入科学和产业优化",
        dek:
          "AlphaEvolve 被用于基因、电网、芯片、量子计算、物流路线等问题，代表 AI 从内容工具走向优化工具。",
        details: [
          "AlphaEvolve 是 Gemini 驱动的 coding agent，能反复尝试、写代码、评估结果并继续优化。",
          "Google DeepMind 称它在基因测序错误检测中让部分错误降低 30%。",
          "在物流场景里，FM Logistic 用它优化路线问题，路线效率提升 10.4%。",
          "它也被用于 TPU 芯片设计、数据库写入优化、数学问题和量子电路优化。"
        ],
        why:
          "这类 AI 不一定直接面对普通用户，但长期商业价值很大。它像一个优化机器，帮科学家和企业找到更快、更省、更稳定的方案。",
        links: [["Google DeepMind 官方", "https://deepmind.google/blog/alphaevolve-impact/"]]
      },
      {
        section: "今日重点",
        priority: "中高",
        title: "Thinking Machines 预览 interaction models，让 AI 更像实时协作者",
        dek:
          "Mira Murati 创立的 Thinking Machines Lab 发布 interaction models 研究预览，目标是让 AI 在音频、视频、文本中原生处理互动，而不是等你说完再轮流回复。",
        details: [
          "雷达源 TLDR AI 把它列为近期值得读的模型方向；官方博客确认这是 research preview，不是成熟产品。",
          "传统聊天模型更像回合制对话：你输入，模型回答。Thinking Machines 想让模型一边接收多路输入，一边生成回应，更接近真实通话或协作。",
          "它强调 multi-stream design，可以同时处理音频、视频和文本，减少现在语音助手常见的停顿、打断困难和上下文丢失。",
          "TechCrunch 的解读是：这类模型的目标不是更会写文章，而是更会在真实互动中听、看、说和调整。"
        ],
        why:
          "如果这条路线成立，AI 产品会从“问答工具”走向“实时协作者”。对电商和运营场景来说，未来可能出现实时陪跑式客服、直播助手、商家培训教练和会议协同 agent。",
        links: [
          ["Thinking Machines 官方", "https://thinkingmachines.ai/blog/interaction-models/"],
          ["TechCrunch", "https://techcrunch.com/2026/05/11/thinking-machines-wants-to-build-an-ai-that-actually-listens-while-it-talks/"],
          ["Semafor", "https://www.semafor.com/article/05/13/2026/mira-muratis-thinking-machines-previews-interaction-models"]
        ]
      },
      {
        section: "今日重点",
        priority: "中",
        title: "Google 把 Gemini Intelligence 推向 Android 和 Googlebook",
        dek:
          "Google 在 Android Show: I/O Edition 预告 Gemini Intelligence 和 Googlebook，信号不是单个模型发布，而是把 AI 做进手机、浏览器和新一代笔记本的系统层。",
        details: [
          "TLDR 把 Googlebook 和 Android AI overhaul 列为近期平台级新闻；Google 官方博客确认 Googlebook 是面向 Gemini Intelligence 的新笔记本品类。",
          "Gemini Intelligence 被描述为更主动的 Android AI 功能，方向是理解屏幕、跨应用给建议、把手机和笔记本联动起来。",
          "Googlebook 的重点不是传统硬件参数，而是让 Gemini 深度进入桌面计算体验，Google 的说法是从 operating system 走向 intelligence system。",
          "这也解释了为什么 Google 的 AI 竞争不只在模型榜单，而在 Android、Chrome、Workspace、搜索和硬件分发网络。"
        ],
        why:
          "对普通用户来说，AI 真正变成基础设施，往往不是因为单个 app 更聪明，而是因为操作系统默认带着 AI。对跨境电商来说，这会影响移动端商家工具、客服、广告投放和内容生产的入口。",
        links: [
          ["Google 官方", "https://blog.google/products-and-platforms/platforms/android/android-show-io-edition-2026"],
          ["TechCrunch", "https://techcrunch.com/2026/05/12/everything-google-announced-at-its-android-show-from-googlebooks-to-vibe-coded-widgets/"],
          ["Android Central", "https://www.androidcentral.com/chromebooks-laptops/google-announces-googlebook"]
        ]
      },
      {
        section: "投融资信息",
        priority: "Mega round",
        title: "Recursive Superintelligence 完成 6.5 亿美元融资",
        dek:
          "钛媒体早报提到 Recursive Superintelligence 获得 6.5 亿美元融资，这类“刚出场就巨额融资”的 AI 公司，值得单独放进投融资观察里看。",
        details: [
          "融资规模：多家媒体报道 Recursive Superintelligence 完成超过 6.5 亿美元融资，投后估值约 46.5 亿美元。",
          "投资方：本轮由 GV 和 Greycroft 领投，NVIDIA、AMD Ventures 等产业方参与，说明资本和算力公司都在押注“AI 自动做 AI 研究”这个方向。",
          "团队背景：公开报道提到创始团队来自 Google DeepMind、OpenAI、Meta AI、Salesforce AI 等机构，核心人物包括 Richard Socher 和田渊栋等 AI 研究者。",
          "技术方向：recursive self-improvement 可以理解为“让 AI 自动发现自己的短板、设计实验、改进模型”，比普通聊天机器人更接近基础研究路线。",
          "风险提示：钛媒体这篇内容标注为 AI 生成，适合作为线索；融资金额和投资方已被 SCMP、TechCrunch、MarketScreener 等来源交叉报道，但技术成果仍需要继续观察。"
        ],
        why:
          "这条融资的意义不只是金额大，而是资本正在从“更大的通用模型”继续外溢到“自动化科研、自动改进模型、AI for AI”这类更底层的 AGI 路线。对产业侧来说，短期未必有产品可用，但它会影响人才、算力和资本向哪些方向集中。",
        links: [
          ["钛媒体 Edge AI Daily", "https://www.tmtpost.com/7989030.html"],
          ["SCMP 报道", "https://www.scmp.com/tech/big-tech/article/3353576/ex-meta-chinese-star-researcher-joins-race-self-improving-ai-us46b-start"],
          ["TechCrunch 访谈", "https://techcrunch.com/2026/05/14/what-happens-when-ai-starts-building-itself/"],
          ["MarketScreener / S&P Capital IQ", "https://uk.marketscreener.com/news/recursive-superintelligence-ltd-announced-that-it-has-received-650-million-in-funding-from-gv-mana-ce7f5bdcd18df423"]
        ]
      },
      {
        section: "开源项目",
        priority: "新",
        title: "OpenHuman：一个试图成为“数字分身”的开源 Agent",
        dek:
          "钛媒体提到 OpenHuman 最近登上 GitHub Trending，它的核心方向是让 AI 快速吃透你的工作和生活上下文。",
        media: {
          type: "image",
          src: "https://opengraph.githubassets.com/daily-ai-atlas/tinyhumansai/openhuman",
          alt: "OpenHuman GitHub repository preview",
          title: "GitHub project preview",
          caption: "GitHub 项目预览：个人上下文、记忆和工具连接是它的核心卖点",
          href: "https://github.com/tinyhumansai/openhuman"
        },
        details: [
          "项目由 Tiny Humans AI 团队开发，主打 Context in minutes, not weeks。",
          "它支持 Gmail、Notion、GitHub、Slack、Google Calendar、Jira、Linear、Stripe 等 100 多个第三方集成。",
          "核心设计包括本地 SQLite 记忆树、Obsidian 兼容 Markdown 知识库、TokenJuice 压缩管道。",
          "风险点也明显：项目处于早期，GPL-3.0 对商业使用有约束，连接个人账户会带来隐私和安全要求。"
        ],
        why:
          "OpenHuman 抓住了 Agent 的关键痛点：大多数 AI 助手不了解你。未来个人 AI 的竞争可能不只是模型强弱，而是谁能更快、更安全地理解你的长期上下文。",
        links: [
          ["钛媒体文章", "https://www.tmtpost.com/7987326.html"],
          ["GitHub 仓库", "https://github.com/tinyhumansai/openhuman"]
        ]
      },
      {
        section: "AI产品推荐",
        priority: "今日可玩",
        title: "FocuSee 2.0：把普通录屏自动变成精致产品 demo",
        dek:
          "FocuSee 适合做产品演示、教程和汇报视频：你只要正常录屏，它会自动加缩放、鼠标高亮、背景和字幕，让粗糙录屏看起来像认真剪过。",
        media: {
          type: "image",
          src: "https://store.setapp.com/cdn-cgi/image/width%3D1200%2Cquality%3D75%2Cformat%3Dauto/app/1771/screenshots/1762230093-69097f4d1dd30.png",
          alt: "FocuSee product demo screenshot",
          title: "Product demo visual",
          caption: "录屏、缩放、鼠标高亮和字幕都在一个工作流里",
          href: "https://setapp.com/apps/focusee"
        },
        details: [
          "TrendHunt Daily 把 FocuSee 2.0 列为 5 月上旬 Product Hunt 热门发布之一，定位是 Pick Record screen to get polished demos & tutorials。",
          "Setapp 页面显示，FocuSee 可以同时录屏、摄像头和声音，并自动添加 zoom、cursor highlight、背景、overlay、字幕和降噪。",
          "它最适合非专业剪辑用户：产品经理、运营、创业者、讲方案的人，都可以用它快速做一个能看的产品 walk-through。",
          "有趣点在于它不是生成一个虚构视频，而是把你真实操作产品的过程变得更清楚、更像正式 demo。"
        ],
        why:
          "对你很实用：以后做 AI 项目复盘、商家工具演示、跨团队汇报或个人作品集，都可以用这类工具降低“把想法讲清楚”的成本。它比纯文字工具更有产品感。",
        links: [
          ["FocuSee / Setapp", "https://setapp.com/apps/focusee"],
          ["TrendHunt Daily", "https://trendhuntdaily.com/"]
        ]
      },
      {
        section: "AI产品推荐",
        priority: "产品灵感",
        title: "Magic Patterns Agent 2.0：一句话生成可交互产品原型",
        dek:
          "Magic Patterns 是给产品团队用的 AI 设计 agent：你描述一个功能、上传截图或引用已有设计系统，它可以快速生成可交互 mockup。",
        media: {
          type: "image",
          src: "https://www.magicpatterns.com/marketing/YourComponents.png",
          alt: "Magic Patterns prototype screenshot",
          title: "Prototype preview",
          caption: "从现有组件和设计系统生成可讨论的产品界面",
          href: "https://www.magicpatterns.com/"
        },
        details: [
          "Product Hunt 页面把 Agent 2.0 描述为从 idea 到 production 的 AI design agent，核心是用已有 style 和 design system 生成原型。",
          "官方介绍提到，PM、设计师和创始人可以用它快速做 interactive mockups，并把结果交给工程团队继续实现。",
          "2.0 版本强调 Skills、Connectors 和 MCP：也就是可以给设计 agent 注入特定规则、连接上下文，并把结果交给 coding agents。",
          "它比普通“生成漂亮界面”的工具更值得看，因为它试图进入真实产品流程：需求讨论、原型、设计系统、工程交付。"
        ],
        why:
          "这类工具很适合战略/产品背景的人：你不一定要会画高保真图，但可以把商家工具、广告投放后台、AI客服工作台这类想法快速变成可讨论的界面。",
        links: [
          ["Product Hunt", "https://www.producthunt.com/products/magicpatterns/"],
          ["Magic Patterns", "https://www.magicpatterns.com/"],
          ["The Product Consortium 介绍", "https://www.theproductconsortium.com/articles/magic-patterns"]
        ]
      },
      {
        section: "AI产品推荐",
        priority: "创意视频",
        title: "LTX Desktop：免费开源的本地 AI 视频生成与编辑器",
        dek:
          "LTX Desktop 把 AI 视频生成和剪辑界面放在一起，重点是本地运行、开源、没有按次生成费用，适合想探索 AI 视频但不想一直烧云端点数的人。",
        media: {
          type: "video",
          src: "https://cdn.prod.website-files.com/68872d15af29880764eac4aa/69a9852c61140d7cfbc32175_b4129705569c6d9fa65b5f6730ceefe7_LTX-desktop-Hero_1_frame.avif",
          alt: "LTX Desktop video editor screenshot",
          title: "Video workflow preview",
          caption: "本地视频生成、剪辑和模型工作流的产品界面",
          href: "https://ltx.io/ltx-desktop",
          cta: "打开产品演示"
        },
        details: [
          "LTX 官方称 LTX Desktop 是 built entirely on the LTX engine 的本地视频生成和编辑应用，支持 macOS 和 Windows。",
          "它的卖点是 no cloud、no per-generation fees、数据留在本机；对企业和创作者来说，隐私和成本都更可控。",
          "LTX 2.3 同时发布，官方称模型可以在消费级 GPU 上生成高质量视频，桌面端则把模型能力包装成可操作界面。",
          "Product Hunt 上也有 LTX Desktop 页面，定位是 local open-source video editor optimized for GPUs。"
        ],
        why:
          "这是更适合“玩一玩”的推荐：你可以用它理解 AI 视频从纯网页生成器走向本地创作工作台的趋势。对电商内容来说，未来商品视频、广告素材、达人脚本验证都会受这类工具影响。",
        links: [
          ["LTX Desktop", "https://ltx.io/ltx-desktop"],
          ["LTX 2.3 发布", "https://ltx.io/model/model-blog/ltx-2-3-release"],
          ["Product Hunt", "https://www.producthunt.com/products/ltx-desktop"]
        ]
      },
      {
        section: "机构报告",
        priority: "收藏",
        title: "机构报告速读：AI 已经从试点走向组织级部署",
        dek:
          "今天的宏观信号来自 Stanford、BCG、McKinsey 和 KPMG/HFS：AI 的重点正在从“试几个工具”变成“重构企业工作流、技术服务和治理体系”。",
        details: [
          {
            summary:
              "Stanford AI Index 2026：行业贡献了 2025 年超过 90% 的 notable frontier models，组织采用率达到 88%。",
            expanded:
              "Stanford 的核心判断是：AI 创新重心已经明显从学术界转向产业界，模型能力、算力投入和产品化速度都由公司主导。报告提到，2025 年超过 90% 的 notable frontier models 来自行业，说明最前沿模型越来越依赖资本、数据、工程体系和算力基础设施。采用侧也进入高频阶段，组织采用率达到 88%，生成式 AI 已不只是试点工具，而是在员工生产力、学生学习、软件开发和内容生产里变成日常能力。对你来说，这份报告适合做宏观底稿：判断 AI 是否还在加速、哪些能力在商品化、监管和教育端是否跟上。",
            quote: "“Industry produced over 90% of notable frontier models in 2025.”",
            chart: ["关键图表：AI Index 报告页 / PDF", "https://hai.stanford.edu/ai-index/2026-ai-index-report"]
          },
          {
            summary:
              "BCG AI Radar 2026：AI 决策从 CIO 议题升级为 CEO 议题，领先企业把 AI 当作端到端业务转型。",
            expanded:
              "BCG 的重点不是模型技术，而是企业怎么把 AI 变成经营结果。报告强调 Trailblazer CEOs 会亲自定义 AI ambition，把 AI 放进增长、成本、客户体验和组织效率，而不是让 IT 部门零散试工具。它也提醒企业从“用例清单”升级到“能力体系”：包括数据基础、流程重构、人才培训、治理机制和持续度量。对战略岗位来说，这份报告很有用，因为它提供了 CEO 视角的话术：AI 项目要从 demo 和 PoC 走向 P&L impact，必须有业务 owner、预算、KPI 和组织变革配套。",
            quote: "“Three CEO archetypes emerge.”",
            chart: ["关键图表：BCG AI Radar PDF", "https://web-assets.bcg.com/73/8e/cc44cbc14a3b81695f8a3de28ff1/ai-radar-2026-web-jan-2026-edit.pdf"]
          },
          {
            summary:
              "BCG Tech Services：Agentic AI 会压缩传统外包，但创造新的 AI 服务池。",
            expanded:
              "这份报告的核心是技术服务行业会被 agentic AI 重塑。传统低复杂度外包、测试、维护和部分开发工作可能被自动化压缩，但新的需求会增长：agent 工作流设计、企业系统集成、数据治理、agent 监控、合规审计、模型评估和业务流程再造。也就是说，AI 不是简单减少服务市场，而是把服务价值从“人力交付”推向“AI 体系设计和运营”。这对你的职业判断很重要：未来高价值岗位会更偏业务问题定义、AI 方案组合、跨系统落地和价值度量，而不是单点工具实施。",
            quote: "“Unlocking up to $200 billion in net new value pools.”",
            chart: ["关键图表：Tech Services 机会池 PDF", "https://web-assets.bcg.com/pdf-src/prod-live/the-%24200-billion-ai-opportunity-in-tech-services.pdf"]
          },
          {
            summary:
              "McKinsey：AI 基础设施成本到 2030 年可能上升 2-3 倍，agentic AI 也会反过来自动化基础设施工作。",
            expanded:
              "McKinsey 关注的是企业技术底座。随着 AI 应用进入生产环境，企业对算力、数据平台、网络、安全、监控和模型服务的需求会显著增加，因此基础设施成本可能在 2030 年前上升 2-3 倍。与此同时，agentic AI 又会成为降本工具：它可以自动化云资源配置、故障排查、代码迁移、日志分析、容量规划等常规基础设施工作，报告提到常规基础设施任务中有 60%-80% 存在自动化空间。对业务 leader 来说，这意味着 AI 项目不能只算模型 API 成本，还要考虑数据、集成、安全、运维和治理的总拥有成本。",
            quote: "“IT infrastructure costs are projected to increase two to three times by 2030.”",
            chart: ["关键图表：McKinsey 原文 exhibits", "https://www.mckinsey.com/capabilities/mckinsey-technology/our-insights/reimagining-tech-infrastructure-for-and-with-agentic-ai"]
          },
          {
            summary:
              "KPMG/HFS Agentic Services：服务商正在围绕主流云和模型生态搭建 agentic services。",
            expanded:
              "KPMG/HFS 的报告更像服务商竞争地图：咨询和 IT 服务公司正在围绕 AWS、Google Cloud、Microsoft、OpenAI、Anthropic、Salesforce、SAP、LangChain 等生态构建 agentic services。核心观点是，agent 真正落地需要的不只是模型，而是流程拆解、工具调用、权限控制、数据访问、评估体系和组织 adoption。报告也暗示，未来企业购买的可能不是一个 AI 工具，而是一套“可持续运营的 agent workflow”。对你来说，这份报告可以帮助识别未来高价值职位：AI transformation lead、agent workflow owner、AI adoption lead、AI governance lead。",
            quote: "“AI-led agentic services augmenting human capabilities.”",
            chart: ["关键图表：HFS Horizons 下载页", "https://www.hfsresearch.com/research/hfs-horizons-agentic-services-2026/"]
          }
        ],
        why:
          "这些报告共同指向一个结论：未来最稀缺的不只是会用 AI 工具的人，而是能把 AI 用例、业务价值、数据基础、治理机制和组织变革连成一套方案的人。这和战略+AI的业务落地方向很贴近。",
        links: [
          ["Stanford 报告页", "https://hai.stanford.edu/ai-index/2026-ai-index-report"],
          ["Stanford PDF 下载", "https://hai.stanford.edu/assets/files/ai_index_report_2026.pdf"],
          ["BCG AI Radar PDF", "https://web-assets.bcg.com/73/8e/cc44cbc14a3b81695f8a3de28ff1/ai-radar-2026-web-jan-2026-edit.pdf"],
          ["BCG Tech Services", "https://www.bcg.com/publications/2026/the-200-billion-dollar-ai-opportunity-in-tech-services"],
          ["McKinsey Agentic AI", "https://www.mckinsey.com/capabilities/mckinsey-technology/our-insights/reimagining-tech-infrastructure-for-and-with-agentic-ai"],
          ["KPMG/HFS PDF", "https://assets.kpmg.com/content/dam/kpmgsites/xx/pdf/2026/04/hfs-horizons-agentic-services-2026.pdf"]
        ]
      },
      {
        section: "每日词条",
        priority: "学习",
        title: "RAG",
        dek:
          "RAG 就是让 AI 在回答前先去查你指定的资料库，再基于资料回答，而不是只凭模型自己的记忆发挥。",
        details: [
          "稍微深入一点：系统会把文档切成小段，转成向量，存进数据库；用户提问时先找出相关资料，再交给大模型生成回答。",
          "和今天新闻的关系：OpenHuman、企业知识库、金融 AI agent 这类产品，大多离不开 RAG 或类似检索能力。",
          "常见误解：RAG 不是让模型本身变聪明，而是让回答更有依据；资料库质量差，回答也会差。",
          "工作里怎么用：可以用它连接 SOP、政策、商家服务文档、历史案例，做内部运营助手或客服助手。"
        ],
        why:
          "如果你做 AI 战略，RAG 是一个必须熟悉的基础词，因为很多企业 AI 项目第一步就是把内部知识变成可检索、可引用、可追溯的回答系统。",
        links: [["OpenAI Retrieval Guide", "https://platform.openai.com/docs/guides/retrieval"]]
      },
      {
        section: "职业雷达",
        priority: "匹配",
        title: "职业雷达：优先看 AI Strategy / Transformation / Product 负责人",
        dek:
          "你的匹配方向不是纯技术架构、算法研发或工程平台管理，而是能连接业务、产品、技术团队和高层决策的 AI 战略落地型岗位。",
        details: [
          "优先岗位 1：跨境电商/零售平台的 AI Strategy、AI Product Strategy、GenAI Transformation、Seller/Ads/Operations AI Lead。公司池包括 TikTok Shop、Walmart Global Tech、Amazon、Shopify、Temu、Shein、Lazada 和东南亚电商平台生态相关团队。",
          "优先岗位 2：Director, AI Product Strategy - Insurance Group。关键词是 Enterprise GenAI Initiative、商业路线图、ROI、用例组合、业务部门 adoption，适合咨询+业务战略背景。",
          "优先岗位 3：Director, AI Product Strategy & Adoption。关键词是 GenAI capability adoption、business priorities、use case evaluation、productivity impact、build vs buy 判断。",
          "优先岗位 4：Director, Technology & AI Transformation。关键词是 digital transformation roadmap、business impact、senior stakeholder、Agile delivery、emerging technology adoption。",
          "暂时不优先：纯技术架构、算法平台、AI研发管理类岗位。这类岗位更看研发管理、系统架构、模型工程、数据平台和技术团队 ownership。"
        ],
        why:
          "你的求职叙事应该从“我做 AI 战略”升级为“我能把 AI 机会识别、业务用例设计、ROI 跟踪、跨团队交付和组织 adoption 串起来”。跨境电商背景会是加分项，尤其是 seller growth、广告商业化、商品治理、履约效率、客服自动化和商家工具这些场景。",
        links: [
          ["TikTok Careers", "https://careers.tiktok.com/"],
          ["Walmart Global Tech", "https://tech.walmart.com/content/walmart-global-tech/en_us/careers.html"],
          ["Amazon Jobs", "https://www.amazon.jobs/"],
          ["Insurance AI Product Strategy", "https://www.pinpointasia.com/pinpointasia-jobs/director%2C-ai-product-strategy---insurance-group---j12585"],
          ["Bank AI Product Strategy", "https://www.jobleads.com/hk/job/director-ai-product-strategy-adoption--hongkong--ec10395eb27b43cc4b3821f00e11d4184"],
          ["Technology & AI Transformation", "https://www.jobleads.com/hk/job/director-technology-ai-transformation-circa-70-80k--hong-kong--e0c3b36cab4ae92a085360e2042b42cff"]
        ]
      },
      {
        section: "职业雷达",
        priority: "能力缺口",
        title: "相关岗位共同要求：你需要补强的 7 类能力",
        dek:
          "我把非技术型 AI leader 岗位的 JD 拆了一遍，真正反复出现的不是写代码，而是业务价值、产品化、交付和治理。",
        details: [
          "AI 用例组合与 ROI：能识别高价值 use cases，估算收益/成本/复杂度，设置 value realization 指标，并能叫停低价值项目。",
          "AI 产品战略：能把 GenAI / agent 能力翻译成 roadmap、MVP、用户旅程、优先级和商业化路径。",
          "跨境电商 domain：能讲清 seller lifecycle、商品上架、广告投放、内容电商、履约、客服、风控、跨境支付、商家增长和平台治理里的 AI 机会。",
          "跨部门 adoption：能推动业务、产品、技术、法务、风控、运营一起落地，而不是只做策略文档。",
          "技术翻译能力：不需要做算法工程师，但要能讲清 RAG、agent、model routing、evaluation、guardrails、data privacy、MLOps 的业务含义。",
          "第二行业 domain：香港金融/保险岗位会看 distribution、claims、operations、KYC、risk、compliance；跨境电商岗位会看增长、商业化、供应链和商家生态。",
          "治理与风险：需要理解 AI governance、模型风险、数据权限、审计追踪、human-in-the-loop 和合规边界。",
          "领导力证据：高级岗位会看你是否拿过预算、带过跨职能团队、背过业务 KPI，而不是只做过分析和建议。"
        ],
        why:
          "最值得提前准备的是 2-3 个 AI 项目案例，每个案例按“业务问题 - AI方案 - 跨团队推进 - 指标结果 - 风险治理”来讲。这样你会显得像 AI transformation owner，而不是 AI strategy advisor。",
        links: [
          ["Insurance AI Product Strategy", "https://www.pinpointasia.com/pinpointasia-jobs/director%2C-ai-product-strategy---insurance-group---j12585"],
          ["Bank AI Product Strategy", "https://www.jobleads.com/hk/job/director-ai-product-strategy-adoption--hongkong--ec10395eb27b43cc4b3821f00e11d4184"],
          ["Technology & AI Transformation", "https://www.jobleads.com/hk/job/director-technology-ai-transformation-circa-70-80k--hong-kong--e0c3b36cab4ae92a085360e2042b42cff"]
        ]
      }
    ]
  },
  {
    date: "2026-05-14",
    title: "Daily AI Atlas",
    meta: "历史样例 · 可由每日任务追加",
    headline: "历史日报占位",
    summary:
      "这里是一个历史归档样例。后续每天的自动任务可以把新的日报写入 archive 数据，页面左侧会自动出现对应日期。",
    items: [
      {
        section: "今日重点",
        priority: "样例",
        title: "历史日报会按日期保存在左侧",
        dek:
          "点击不同日期可以回看当天 AI 新闻、开源项目、AI 产品推荐、机构报告、每日词条和职业雷达。",
        details: [
          "当前页面是纯本地静态网页，不依赖服务器。",
          "后续可以让定时任务每天追加一条 archive 记录。",
          "所有外部新闻和报告链接会保留为可点击来源。"
        ],
        why:
          "这样你既能收到邮件，也能沉淀成一个本地知识库，方便回看趋势和做职业判断。",
        links: []
      }
    ]
  }
];

const archiveEn = [
  {
    date: "2026-05-15",
    title: "Daily AI Atlas",
    meta: "May 15, 2026 · Shenzhen / Hong Kong lens",
    headline: "From model capability to real-world deployment",
    summary:
      "Today’s AI signal is deployment: humanoid robots are testing full shifts, model labs are moving into enterprise implementation, AI is moving from chat boxes into real-time interaction and operating-system layers, Chinese open models keep pushing costs down, and open-source agents, product picks, and institutional reports offer longer-term signals to track.",
    items: [
      {
        section: "Top Stories",
        priority: "High",
        title: "Figure robots completed an 8-hour factory-style shift",
        dek:
          "Humanoid robotics company Figure showed robots running a package-sorting workflow for a full shift, trying to prove that robots can move beyond demos and toward operational labor.",
        media: {
          type: "image",
          src: "https://images.ctfassets.net/qx5k8y1u9drj/5yM1thk8o5swuduSTOMRHf/6be7879c59f758783472f06b28a6610c/all_hands_table.jpg?fm=webp&q=70&w=3840",
          alt: "Figure robot production rate chart",
          title: "Robot operations signal",
          caption: "Figure's production-rate chart shows humanoids moving from prototype to scaled operations.",
          href: "https://www.figure.ai/news/ramping-figure-03-production"
        },
        details: [
          "Figure was founded in 2022 and focuses on general-purpose humanoid robots backed by investors such as Microsoft, NVIDIA, OpenAI Startup Fund, Intel, and Jeff Bezos.",
          "The task involved reading barcodes, picking packages, adjusting orientation, and placing them onto conveyors; AI Valley cited a pace of roughly one package every three seconds.",
          "The robots run on Figure’s Helix-02 system, which integrates visual understanding, motion control, balance, and manipulation.",
          "The real signal is not the pick itself, but continuous operation, robot handoffs, battery replacement requests, and maintenance workflows."
        ],
        why:
          "Robotics commercialization is less about a single impressive action and more about uptime, maintenance cost, and output per hour. This moves the question from 'can the robot grab something?' to 'can it complete a real shift?'",
        links: [
          ["AI Valley", "https://www.theaivalley.com/p/figure-s-robots-worked-an-8-hour-factory-shift"],
          ["Figure Helix-02", "https://www.figure.ai/news/helix-02"],
          ["Figure production update", "https://www.figure.ai/news/ramping-figure-03-production"],
          ["Funding background", "https://www.cnbc.com/2024/02/29/robot-startup-figure-valued-at-2point6-billion-by-bezos-amazon-nvidia.html"]
        ]
      },
      {
        section: "Top Stories",
        priority: "High",
        title: "OpenAI launched a Deployment Company",
        dek:
          "OpenAI is building an enterprise deployment arm that looks like a hybrid of AI engineering and consulting, aimed at getting AI into real enterprise workflows.",
        details: [
          "OpenAI uses the role Forward Deployed Engineers, roughly meaning AI engineers embedded close to customer operations.",
          "These teams handle enterprise data, permissions, security, workflow design, and internal system integration.",
          "Reuters previously reported that OpenAI- and Anthropic-related service ventures were exploring acquisitions of AI services firms.",
          "The model-lab business is shifting from selling APIs toward selling industry solutions and business outcomes."
        ],
        why:
          "Enterprise customers care less about leaderboard scores and more about whether AI reduces support costs, speeds legal review, or shortens research and finance workflows. AI companies are becoming a blend of model lab, software vendor, consulting firm, and systems integrator.",
        links: [
          ["OpenAI", "https://openai.com/index/openai-launches-the-deployment-company/"],
          ["TechCrunch", "https://techcrunch.com/2026/05/04/anthropic-and-openai-are-both-launching-joint-ventures-for-enterprise-ai-services/"],
          ["Reuters via Investing.com", "https://www.investing.com/news/stock-market-news/openai-anthropic-ventures-in-talks-to-buy-ai-services-firms-sources-say-4659837"]
        ]
      },
      {
        section: "Top Stories",
        priority: "Medium-high",
        title: "DeepSeek V4 reinforces the low-cost Chinese model route",
        dek:
          "DeepSeek V4 Preview continues to challenge the pricing logic of closed U.S. frontier models through lower cost, open ecosystems, and domestic chip adaptation.",
        details: [
          "DeepSeek is a Hangzhou-based AI company that became globally visible through its R1 reasoning model and its efficiency-first approach.",
          "Reuters reported that DeepSeek V4 is adapted for Huawei chips, an important signal for China’s AI self-reliance stack.",
          "Several reports mention a longer context window, meaning the model can process more information in one run.",
          "The release raises pressure on Qwen, GLM, MiniMax, Kimi, and other Chinese model families."
        ],
        why:
          "DeepSeek is not just another model release; it changes pricing expectations. If a cheaper model is good enough, enterprises will naturally move toward multi-model routing instead of relying on one premium provider.",
        links: [
          ["TechCrunch", "https://techcrunch.com/2026/04/24/deepseek-previews-new-ai-model-that-closes-the-gap-with-frontier-models/"],
          ["Reuters via MarketScreener", "https://www.marketscreener.com/news/deepseek-v4-the-chinese-ai-model-adapted-for-huawei-chips-ce7f59dfdd8ef323"],
          ["Fortune", "https://fortune.com/2026/04/24/deepseek-v4-ai-model-price-performance-china-open-source/"]
        ]
      },
      {
        section: "Top Stories",
        priority: "Medium-high",
        title: "Google DeepMind’s AlphaEvolve moves into scientific and industrial optimization",
        dek:
          "AlphaEvolve is being applied to genomics, power grids, chips, quantum circuits, and logistics routing, showing AI moving from content generation toward optimization.",
        details: [
          "AlphaEvolve is a Gemini-powered coding agent that can try solutions, write code, evaluate outcomes, and keep improving.",
          "Google DeepMind says it reduced some genomic variant detection errors by 30%.",
          "FM Logistic used it on a routing problem and reported a 10.4% route-efficiency improvement.",
          "It has also been applied to TPU chip design, database write optimization, mathematical problems, and quantum circuits."
        ],
        why:
          "This kind of AI may not face consumers directly, but its long-term commercial value can be substantial. It acts like an optimization machine for scientists, engineers, and operators.",
        links: [["Google DeepMind", "https://deepmind.google/blog/alphaevolve-impact/"]]
      },
      {
        section: "Top Stories",
        priority: "Medium-high",
        title: "Thinking Machines previews interaction models for real-time collaboration",
        dek:
          "Mira Murati’s Thinking Machines Lab released a research preview of interaction models, aiming to make AI handle audio, video, and text interaction natively instead of waiting for turn-based prompts.",
        details: [
          "TLDR AI flagged this as a notable model direction, and the official post confirms it is a research preview rather than a mature product.",
          "Current chat models are mostly turn-based: you speak, then the model replies. Thinking Machines wants models that receive multi-stream input while generating responses, closer to a live call or shared workspace.",
          "The system emphasizes a multi-stream design across audio, video, and text, reducing pauses, interruption problems, and context loss in voice assistants.",
          "TechCrunch framed the goal as AI that can listen while it talks, not merely a model that writes better text."
        ],
        why:
          "If this direction works, AI products may move from Q&A tools toward real-time collaborators. In commerce and operations, that could mean live support copilots, merchant training coaches, meeting agents, and livestream assistants.",
        links: [
          ["Thinking Machines", "https://thinkingmachines.ai/blog/interaction-models/"],
          ["TechCrunch", "https://techcrunch.com/2026/05/11/thinking-machines-wants-to-build-an-ai-that-actually-listens-while-it-talks/"],
          ["Semafor", "https://www.semafor.com/article/05/13/2026/mira-muratis-thinking-machines-previews-interaction-models"]
        ]
      },
      {
        section: "Top Stories",
        priority: "Medium",
        title: "Google pushes Gemini Intelligence into Android and Googlebook",
        dek:
          "Google’s Android Show: I/O Edition previewed Gemini Intelligence and Googlebook, signaling that AI is moving deeper into phones, browsers, and the operating-system layer.",
        details: [
          "TLDR highlighted Googlebook and Android’s AI overhaul as platform-level news; Google’s own blog confirms Googlebook as a new laptop category designed for Gemini Intelligence.",
          "Gemini Intelligence points to more proactive Android AI features that understand screen context, make cross-app suggestions, and connect phones with laptops.",
          "Googlebook is less about hardware specs and more about embedding Gemini into desktop computing; Google frames the shift as moving from an operating system to an intelligence system.",
          "This shows Google’s AI advantage is not only model quality, but distribution through Android, Chrome, Workspace, Search, and hardware."
        ],
        why:
          "For most users, AI becomes infrastructure when it is built into the default operating environment. For cross-border commerce, this can reshape merchant tools, customer support, ad workflows, and content creation on mobile.",
        links: [
          ["Google", "https://blog.google/products-and-platforms/platforms/android/android-show-io-edition-2026"],
          ["TechCrunch", "https://techcrunch.com/2026/05/12/everything-google-announced-at-its-android-show-from-googlebooks-to-vibe-coded-widgets/"],
          ["Android Central", "https://www.androidcentral.com/chromebooks-laptops/google-announces-googlebook"]
        ]
      },
      {
        section: "Funding Watch",
        priority: "Mega round",
        title: "Recursive Superintelligence raised $650M",
        dek:
          "TMTPost’s Edge AI Daily flagged Recursive Superintelligence’s $650 million raise. This kind of massive launch-stage financing deserves a separate funding lens.",
        details: [
          "Funding size: multiple outlets reported that Recursive Superintelligence raised over $650 million at a post-money valuation of roughly $4.65 billion.",
          "Investors: the round was led by GV and Greycroft, with participation from NVIDIA and AMD Ventures, showing interest from both venture capital and compute-infrastructure players.",
          "Team background: public reports point to founders and researchers from Google DeepMind, OpenAI, Meta AI, Salesforce AI, and related AI labs, including Richard Socher and Yuandong Tian.",
          "Technical direction: recursive self-improvement means AI systems that can identify their own weaknesses, run experiments, and improve themselves, closer to frontier research than consumer chatbot products.",
          "Source caution: the TMTPost article is labeled AI-generated, so it should be treated as a signal source; the financing amount and investors are also reported by SCMP, TechCrunch, and MarketScreener, while concrete technical results still need watching."
        ],
        why:
          "The signal is not just the size of the round. Capital is moving from bigger general models into automated scientific discovery, model self-improvement, and 'AI for AI' research paths. It may not create a usable product immediately, but it can shape where talent, compute, and capital concentrate next.",
        links: [
          ["TMTPost Edge AI Daily", "https://www.tmtpost.com/7989030.html"],
          ["SCMP", "https://www.scmp.com/tech/big-tech/article/3353576/ex-meta-chinese-star-researcher-joins-race-self-improving-ai-us46b-start"],
          ["TechCrunch", "https://techcrunch.com/2026/05/14/what-happens-when-ai-starts-building-itself/"],
          ["MarketScreener / S&P Capital IQ", "https://uk.marketscreener.com/news/recursive-superintelligence-ltd-announced-that-it-has-received-650-million-in-funding-from-gv-mana-ce7f5bdcd18df423"]
        ]
      },
      {
        section: "Open Source",
        priority: "New",
        title: "OpenHuman: an open-source agent trying to become a digital twin",
        dek:
          "TMTPost highlighted OpenHuman as a GitHub-trending project whose core idea is to help an AI quickly understand your work and life context.",
        media: {
          type: "image",
          src: "https://opengraph.githubassets.com/daily-ai-atlas/tinyhumansai/openhuman",
          alt: "OpenHuman GitHub repository preview",
          title: "GitHub project preview",
          caption: "A repository preview for a personal-context, memory, and integrations-focused agent.",
          href: "https://github.com/tinyhumansai/openhuman"
        },
        details: [
          "The project is developed by Tiny Humans AI and pitches itself as 'Context in minutes, not weeks.'",
          "It supports 100+ integrations including Gmail, Notion, GitHub, Slack, Google Calendar, Jira, Linear, and Stripe.",
          "Core designs include a local SQLite memory tree, an Obsidian-compatible Markdown knowledge base, and a TokenJuice compression pipeline.",
          "Risks remain: it is early-stage, GPL-3.0 can constrain commercial use, and connecting personal accounts creates privacy and security requirements."
        ],
        why:
          "OpenHuman targets a central agent pain point: most assistants do not know you. Personal AI may compete not only on model quality, but on how quickly and safely it understands long-term context.",
        links: [
          ["TMTPost", "https://www.tmtpost.com/7987326.html"],
          ["GitHub", "https://github.com/tinyhumansai/openhuman"]
        ]
      },
      {
        section: "AI Product Picks",
        priority: "Play today",
        title: "FocuSee 2.0 turns raw screen recordings into polished product demos",
        dek:
          "FocuSee is useful for product walkthroughs, tutorials, and strategy demos: record normally, then let the tool add zooms, cursor highlights, backgrounds, overlays, and captions.",
        media: {
          type: "image",
          src: "https://store.setapp.com/cdn-cgi/image/width%3D1200%2Cquality%3D75%2Cformat%3Dauto/app/1771/screenshots/1762230093-69097f4d1dd30.png",
          alt: "FocuSee product demo screenshot",
          title: "Product demo visual",
          caption: "Screen recording, zooms, cursor highlights, and captions in one workflow",
          href: "https://setapp.com/apps/focusee"
        },
        details: [
          "TrendHunt Daily listed FocuSee 2.0 among early-May Product Hunt launches, positioning it as a way to record screens and get polished demos and tutorials.",
          "Setapp’s page says FocuSee can capture screen, webcam, and voice, then add zooms, cursor highlights, backgrounds, overlays, captions, denoise, and trims.",
          "It is most useful for non-editors: PMs, operators, founders, and anyone who needs to explain a product or workflow quickly.",
          "The appeal is that it improves real product operation footage instead of generating a fictional video from scratch."
        ],
        why:
          "This is directly practical for AI project recaps, merchant-tool demos, internal rollouts, and personal portfolio clips. It reduces the cost of making ideas understandable.",
        links: [
          ["FocuSee / Setapp", "https://setapp.com/apps/focusee"],
          ["TrendHunt Daily", "https://trendhuntdaily.com/"]
        ]
      },
      {
        section: "AI Product Picks",
        priority: "Product idea",
        title: "Magic Patterns Agent 2.0 generates interactive product prototypes from prompts",
        dek:
          "Magic Patterns is an AI design agent for product teams: describe a feature, upload screenshots, or reference an existing design system, and it can generate interactive mockups.",
        media: {
          type: "image",
          src: "https://www.magicpatterns.com/marketing/YourComponents.png",
          alt: "Magic Patterns prototype screenshot",
          title: "Prototype preview",
          caption: "Generate product screens from existing components and design systems",
          href: "https://www.magicpatterns.com/"
        },
        details: [
          "Product Hunt describes Agent 2.0 as an AI design agent that goes from idea to production, using existing styles and design systems.",
          "Magic Patterns says PMs, designers, and founders use it to rapidly prototype and create interactive mockups for engineering handoff.",
          "Agent 2.0 adds Skills, Connectors, and MCP, meaning the design agent can receive specialized instructions, pull context, and hand work to coding agents.",
          "It is more interesting than a generic pretty-screen generator because it tries to sit inside real product workflow: requirements, prototype, design system, and handoff."
        ],
        why:
          "This is useful for strategy and product work: you can turn seller tools, ad dashboards, AI support consoles, or operations workflows into discussion-ready interfaces without starting in Figma.",
        links: [
          ["Product Hunt", "https://www.producthunt.com/products/magicpatterns/"],
          ["Magic Patterns", "https://www.magicpatterns.com/"],
          ["The Product Consortium", "https://www.theproductconsortium.com/articles/magic-patterns"]
        ]
      },
      {
        section: "AI Product Picks",
        priority: "Creative video",
        title: "LTX Desktop is a free, open-source local AI video editor",
        dek:
          "LTX Desktop combines AI video generation and editing in a local desktop app, with no cloud dependency and no per-generation fees.",
        media: {
          type: "video",
          src: "https://cdn.prod.website-files.com/68872d15af29880764eac4aa/69a9852c61140d7cfbc32175_b4129705569c6d9fa65b5f6730ceefe7_LTX-desktop-Hero_1_frame.avif",
          alt: "LTX Desktop video editor screenshot",
          title: "Video workflow preview",
          caption: "A local interface for video generation, editing, and model workflows",
          href: "https://ltx.io/ltx-desktop",
          cta: "Open product demo"
        },
        details: [
          "LTX says Desktop is built entirely on the LTX engine and offers a local video generation and editing workspace for macOS and Windows.",
          "Its key pitch is no cloud, no per-generation fees, and prompts, footage, and outputs staying on your machine.",
          "LTX 2.3 launched alongside it, and the company says the model can generate high-quality video on consumer-grade GPUs.",
          "Product Hunt positions LTX Desktop as a local open-source video editor optimized for GPUs."
        ],
        why:
          "This is a better 'try it' pick: it shows AI video moving from browser credits toward local creative workstations. For commerce, that points toward cheaper product videos, ad concepts, and creator-content experiments.",
        links: [
          ["LTX Desktop", "https://ltx.io/ltx-desktop"],
          ["LTX 2.3 release", "https://ltx.io/model/model-blog/ltx-2-3-release"],
          ["Product Hunt", "https://www.producthunt.com/products/ltx-desktop"]
        ]
      },
      {
        section: "Research Reports",
        priority: "Save",
        title: "Report brief: AI is moving from pilots to organization-level deployment",
        dek:
          "The macro signal from Stanford, BCG, McKinsey, and KPMG/HFS is clear: AI is shifting from tool trials to workflow redesign, technology services, and governance systems.",
        details: [
          {
            summary:
              "Stanford AI Index 2026: industry produced over 90% of notable frontier models in 2025, and organizational adoption reached 88%.",
            expanded:
              "Stanford’s core point is that AI innovation has moved strongly from academia to industry. Model capability, compute investment, and productization are now largely company-led. The 90%+ industry share of notable frontier models shows how much leading AI now depends on capital, data, engineering systems, and compute infrastructure. Adoption is also mainstream: 88% of organizations use AI, and generative AI has become a daily capability for students and employees.",
            quote: "“Industry produced over 90% of notable frontier models in 2025.”",
            chart: ["Key charts: AI Index report / PDF", "https://hai.stanford.edu/ai-index/2026-ai-index-report"]
          },
          {
            summary:
              "BCG AI Radar 2026: AI has moved from a CIO topic to a CEO transformation agenda.",
            expanded:
              "BCG focuses less on model technology and more on how enterprises turn AI into business outcomes. Trailblazer CEOs define AI ambition directly and link it to growth, cost, customer experience, and organizational productivity. The report pushes companies beyond use-case lists toward capability systems: data foundations, process redesign, talent, governance, and continuous measurement.",
            quote: "“Three CEO archetypes emerge.”",
            chart: ["Key charts: BCG AI Radar PDF", "https://web-assets.bcg.com/73/8e/cc44cbc14a3b81695f8a3de28ff1/ai-radar-2026-web-jan-2026-edit.pdf"]
          },
          {
            summary:
              "BCG Tech Services: agentic AI may compress traditional outsourcing while creating new AI service pools.",
            expanded:
              "The report argues that tech services will be reshaped by agentic AI. Some low-complexity outsourcing, testing, maintenance, and development work may shrink, but new demand will emerge around agent workflow design, system integration, data operations, monitoring, compliance, model evaluation, and business process redesign.",
            quote: "“Unlocking up to $200 billion in net new value pools.”",
            chart: ["Key charts: Tech services opportunity PDF", "https://web-assets.bcg.com/pdf-src/prod-live/the-%24200-billion-ai-opportunity-in-tech-services.pdf"]
          },
          {
            summary:
              "McKinsey: AI infrastructure costs may rise 2-3x by 2030, while agentic AI can automate infrastructure work.",
            expanded:
              "McKinsey looks at the enterprise technology base. As AI applications move into production, companies need more compute, data platforms, security, monitoring, and model-serving capabilities. Infrastructure costs could rise 2-3x by 2030. At the same time, agentic AI can automate routine infrastructure work such as cloud rightsizing, troubleshooting, migration, log analysis, and capacity planning.",
            quote: "“IT infrastructure costs are projected to increase two to three times by 2030.”",
            chart: ["Key charts: McKinsey exhibits", "https://www.mckinsey.com/capabilities/mckinsey-technology/our-insights/reimagining-tech-infrastructure-for-and-with-agentic-ai"]
          },
          {
            summary:
              "KPMG/HFS Agentic Services: service providers are building agentic services around major cloud and model ecosystems.",
            expanded:
              "This report reads like a service-provider market map. Consulting and IT services firms are building agentic services around AWS, Google Cloud, Microsoft, OpenAI, Anthropic, Salesforce, SAP, and LangChain. The core point is that enterprise agents require more than a model: they need process decomposition, tool calling, permissions, data access, evaluation, and organizational adoption.",
            quote: "“AI-led agentic services augmenting human capabilities.”",
            chart: ["Key charts: HFS Horizons download page", "https://www.hfsresearch.com/research/hfs-horizons-agentic-services-2026/"]
          }
        ],
        why:
          "These reports converge on one point: the scarce skill is not merely using AI tools, but connecting AI use cases, business value, data foundations, governance, and organizational change into one operating system.",
        links: [
          ["Stanford report", "https://hai.stanford.edu/ai-index/2026-ai-index-report"],
          ["Stanford PDF", "https://hai.stanford.edu/assets/files/ai_index_report_2026.pdf"],
          ["BCG AI Radar PDF", "https://web-assets.bcg.com/73/8e/cc44cbc14a3b81695f8a3de28ff1/ai-radar-2026-web-jan-2026-edit.pdf"],
          ["BCG Tech Services", "https://www.bcg.com/publications/2026/the-200-billion-dollar-ai-opportunity-in-tech-services"],
          ["McKinsey Agentic AI", "https://www.mckinsey.com/capabilities/mckinsey-technology/our-insights/reimagining-tech-infrastructure-for-and-with-agentic-ai"],
          ["KPMG/HFS PDF", "https://assets.kpmg.com/content/dam/kpmgsites/xx/pdf/2026/04/hfs-horizons-agentic-services-2026.pdf"]
        ]
      },
      {
        section: "AI Term",
        priority: "Learn",
        title: "RAG",
        dek:
          "RAG means the AI looks up a specified knowledge base before answering, instead of relying only on what the model already 'remembers.'",
        details: [
          "A typical system splits documents into chunks, turns them into vectors, stores them in a database, retrieves relevant chunks for a question, then gives those chunks to the model.",
          "Today’s connection: OpenHuman, enterprise knowledge bases, and financial AI agents often rely on RAG-like retrieval.",
          "Common misconception: RAG does not make the model itself smarter; it makes answers more grounded. Poor source material still leads to poor answers.",
          "Work use case: connect SOPs, policies, merchant-service documents, and past cases to build internal operations or support assistants."
        ],
        why:
          "For AI strategy work, RAG is a foundational term because many enterprise AI projects start by turning internal knowledge into searchable, quotable, traceable answers.",
        links: [["OpenAI Retrieval Guide", "https://platform.openai.com/docs/guides/retrieval"]]
      },
      {
        section: "Career Radar",
        priority: "Match",
        title: "Career radar: prioritize AI Strategy / Transformation / Product leadership roles",
        dek:
          "The best-fit direction is not pure technical architecture or algorithm management, but roles that connect business, product, technical teams, and senior decision-making.",
        details: [
          "Priority 1: AI Strategy, AI Product Strategy, GenAI Transformation, Seller/Ads/Operations AI Lead roles in cross-border e-commerce and retail platforms such as TikTok Shop, Walmart Global Tech, Amazon, Shopify, Temu, Shein, Lazada, and Southeast Asian e-commerce ecosystems.",
          "Priority 2: Director, AI Product Strategy in insurance or financial services, where the keywords are enterprise GenAI initiative, roadmap, ROI, use-case portfolio, and business adoption.",
          "Priority 3: Director, AI Product Strategy & Adoption roles focused on capability adoption, business priorities, use-case evaluation, productivity impact, and build-vs-buy decisions.",
          "Priority 4: Technology & AI Transformation roles focused on digital transformation roadmaps, senior stakeholders, Agile delivery, and emerging technology adoption.",
          "Lower priority: pure AI architecture, algorithm platform, and AI R&D management roles, which require deeper engineering leadership and platform ownership."
        ],
        why:
          "The strongest positioning is: I can identify AI opportunities, design business use cases, track ROI, drive cross-functional delivery, and build adoption. Cross-border e-commerce is an advantage in seller growth, ads monetization, product governance, fulfillment, support automation, and merchant tools.",
        links: [
          ["TikTok Careers", "https://careers.tiktok.com/"],
          ["Walmart Global Tech", "https://tech.walmart.com/content/walmart-global-tech/en_us/careers.html"],
          ["Amazon Jobs", "https://www.amazon.jobs/"],
          ["Insurance AI Product Strategy", "https://www.pinpointasia.com/pinpointasia-jobs/director%2C-ai-product-strategy---insurance-group---j12585"],
          ["Bank AI Product Strategy", "https://www.jobleads.com/hk/job/director-ai-product-strategy-adoption--hongkong--ec10395eb27b43cc4b3821f00e11d4184"],
          ["Technology & AI Transformation", "https://www.jobleads.com/hk/job/director-technology-ai-transformation-circa-70-80k--hong-kong--e0c3b36cab4ae92a085360e2042b42cff"]
        ]
      },
      {
        section: "Career Radar",
        priority: "Skill gaps",
        title: "Common requirements: 7 skill areas to strengthen",
        dek:
          "Across non-technical AI leadership roles, the repeated requirements are business value, productization, delivery, and governance, not coding.",
        details: [
          "AI use-case portfolio and ROI: identify high-value opportunities, estimate benefit/cost/complexity, define value-realization metrics, and stop low-value projects.",
          "AI product strategy: turn GenAI and agent capabilities into roadmaps, MVPs, user journeys, priorities, and commercialization paths.",
          "Cross-border e-commerce domain: explain AI opportunities in seller lifecycle, listings, ads, content commerce, fulfillment, support, risk, payments, merchant growth, and marketplace governance.",
          "Cross-functional adoption: move business, product, engineering, legal, risk, and operations together instead of only writing strategy decks.",
          "Technical translation: explain the business meaning of RAG, agents, model routing, evaluation, guardrails, data privacy, and MLOps without being an algorithm engineer.",
          "Governance and risk: understand AI governance, model risk, data permissions, audit trails, human-in-the-loop, and compliance boundaries.",
          "Leadership evidence: show budget ownership, cross-functional teams, and business KPI ownership, not just analysis and recommendations."
        ],
        why:
          "Prepare 2-3 AI project stories using the structure: business problem, AI solution, cross-functional delivery, measurable outcome, and risk governance. That reads like AI transformation ownership, not just AI strategy advice.",
        links: [
          ["Insurance AI Product Strategy", "https://www.pinpointasia.com/pinpointasia-jobs/director%2C-ai-product-strategy---insurance-group---j12585"],
          ["Bank AI Product Strategy", "https://www.jobleads.com/hk/job/director-ai-product-strategy-adoption--hongkong--ec10395eb27b43cc4b3821f00e11d4184"],
          ["Technology & AI Transformation", "https://www.jobleads.com/hk/job/director-technology-ai-transformation-circa-70-80k--hong-kong--e0c3b36cab4ae92a085360e2042b42cff"]
        ]
      }
    ]
  },
  {
    date: "2026-05-14",
    title: "Daily AI Atlas",
    meta: "Historical sample · can be appended by the daily automation",
    headline: "Historical issue placeholder",
    summary:
      "This is a sample historical archive entry. Future automation can append new daily issues to the archive data, and the left rail will show each date automatically.",
    items: [
      {
        section: "Top Stories",
        priority: "Sample",
        title: "Historical issues are saved by date",
        dek:
          "Click different dates to review that day’s AI news, open-source projects, AI product picks, research reports, AI term, and career radar.",
        details: [
          "The current page is a local static website with no server dependency.",
          "The daily automation can append a new archive record each day.",
          "External news and report links remain clickable sources."
        ],
        why:
          "This turns the daily digest into a local knowledge archive that helps track trends over time.",
        links: []
      }
    ]
  }
];

const sectionOrders = {
  zh: ["全部", "今日重点", "投融资信息", "开源项目", "AI产品推荐", "机构报告", "职业雷达"],
  en: ["All", "Top Stories", "Funding Watch", "Open Source", "AI Product Picks", "Research Reports", "Career Radar"]
};

const uiText = {
  zh: {
    all: "全部",
    language: "语言",
    zh: "中",
    en: "EN",
    dateSearch: "搜索归档",
    archiveTags: "归档标签",
    contentSearch: "搜索当前日报",
    refreshNote: "每天 9:30 刷新最新 AI 消息",
    termLabel: "今日 AI 词条",
    termExpand: "展开核心解释",
    sourceMethodTitle: "信息来源",
    sourceMethodText: "日报源只做雷达，重要内容会回到官网、论文、GitHub、招聘页和机构报告确认。",
    datePlaceholder: "搜索日期、公司、关键词",
    contentPlaceholder: "例如 DeepSeek、机器人、投融资、香港岗位",
    noDates: "没有匹配的日期。",
    noContent: "没有找到匹配内容。换个关键词试试。",
    copyDone: "已复制"
  },
  en: {
    all: "All",
    language: "Language",
    zh: "中",
    en: "EN",
    dateSearch: "Search archive",
    archiveTags: "Archive tags",
    contentSearch: "Search current issue",
    refreshNote: "Latest AI signals refresh daily at 9:30",
    termLabel: "AI Term of the Day",
    termExpand: "Read the quick explainer",
    sourceMethodTitle: "Sources",
    sourceMethodText: "Newsletters act as radar; key items are checked against company posts, papers, GitHub, hiring pages, and original reports.",
    datePlaceholder: "Search dates, companies, keywords",
    contentPlaceholder: "e.g. DeepSeek, robotics, funding, Hong Kong roles",
    noDates: "No matching dates.",
    noContent: "No matching content. Try another keyword.",
    copyDone: "Copied"
  }
};

let currentLang = localStorage.getItem("daily-ai-atlas-lang") || "zh";
let activeDate = archiveZh[0].date;
let activeSection = uiText[currentLang].all;
let activeArchiveTag = uiText[currentLang].all;
let calendarMonth = activeDate.slice(0, 7);
let contentQuery = "";
let dateQuery = "";

const dateList = document.querySelector("#dateList");
const dateSearch = document.querySelector("#dateSearch");
const archiveTags = document.querySelector("#archiveTags");
const languageSwitch = document.querySelector("#languageSwitch");
const languageLabel = document.querySelector("#languageLabel");
const dateSearchLabel = document.querySelector("#dateSearchLabel");
const archiveTagsLabel = document.querySelector("#archiveTagsLabel");
const refreshNote = document.querySelector("#refreshNote");
const sectionTabs = document.querySelector("#sectionTabs");
const contentSearch = document.querySelector("#contentSearch");
const contentSearchLabel = document.querySelector("#contentSearchLabel");
const contentGrid = document.querySelector("#contentGrid");
const issueMeta = document.querySelector("#issueMeta");
const termSpotlight = document.querySelector("#termSpotlight");
const sourceMethodSummary = document.querySelector("#sourceMethodSummary");
const sourceMethodText = document.querySelector("#sourceMethodText");
const sourceMethodLinks = document.querySelector("#sourceMethodLinks");
const heroHeadline = document.querySelector("#heroHeadline");
const heroSummary = document.querySelector("#heroSummary");
const copyLinkButton = document.querySelector("#copyLinkButton");
const storyTemplate = document.querySelector("#storyTemplate");

function normalize(value) {
  return String(value || "").toLowerCase();
}

function getArchive() {
  return currentLang === "en" ? archiveEn : archiveZh;
}

function t(key) {
  return uiText[currentLang][key];
}

function allLabel() {
  return t("all");
}

const sourceLinks = [
  ["AI Valley", "https://www.theaivalley.com/c/about"],
  ["Ben's Bites", "https://bensbites.co/"],
  ["TLDR AI", "https://tldr.tech/ai"],
  ["The Batch", "https://www.deeplearning.ai/thebatch/"],
  ["Import AI", "https://jack-clark.net/"],
  ["Stanford AI Index", "https://hai.stanford.edu/ai-index/2026-ai-index-report"]
];

function isTermSection(section) {
  return section === "每日词条" || section === "AI Term";
}

const sectionThemeMap = {
  "今日重点": "top",
  "Top Stories": "top",
  "投融资信息": "funding",
  "Funding Watch": "funding",
  "开源项目": "open-source",
  "Open Source": "open-source",
  "AI产品推荐": "product",
  "AI Product Picks": "product",
  "机构报告": "report",
  "Research Reports": "report",
  "职业雷达": "career",
  "Career Radar": "career"
};

const sectionCodeMap = {
  all: "ALL",
  top: "NEWS",
  funding: "FUND",
  "open-source": "OSS",
  product: "TOOL",
  report: "REPORT",
  career: "CAREER"
};

function getSectionKey(section) {
  if (section === allLabel()) return "all";
  return sectionThemeMap[section] || "default";
}

function getSectionCode(section) {
  return sectionCodeMap[getSectionKey(section)] || "SIGNAL";
}

function renderStoryMedia(item) {
  if (!item.media || !item.media.src) return null;
  const media = item.media;
  const shell = document.createElement(media.href ? "a" : "div");
  shell.className = `story-media is-${media.type || "image"}`;
  if (media.href) {
    shell.href = media.href;
    shell.target = "_self";
    shell.rel = "noopener";
    shell.setAttribute("aria-label", media.title || item.title);
  }

  const image = document.createElement("img");
  image.src = media.src;
  image.alt = media.alt || item.title;
  image.loading = "lazy";
  image.decoding = "async";
  shell.appendChild(image);

  const overlay = document.createElement("div");
  overlay.className = "media-overlay";
  const title = document.createElement("span");
  title.className = "media-title";
  title.textContent = media.title || getSectionCode(item.section);
  const caption = document.createElement("span");
  caption.className = "media-caption";
  caption.textContent = media.caption || "";
  overlay.append(title, caption);
  shell.appendChild(overlay);

  if (media.type === "video" || media.cta) {
    const badge = document.createElement("span");
    badge.className = "media-badge";
    badge.textContent = media.cta || (currentLang === "en" ? "Open demo" : "打开演示");
    shell.appendChild(badge);
  }

  return shell;
}

function itemMatches(item, query) {
  if (!query) return true;
  const detailText = (item.details || []).flatMap((detail) => {
    if (typeof detail === "string") return [detail];
    return [detail.summary, detail.expanded];
  });
  const mediaText = item.media
    ? [item.media.title, item.media.caption, item.media.alt, item.media.href, item.media.cta]
    : [];
  const haystack = [
    item.section,
    item.priority,
    item.title,
    item.dek,
    item.why,
    ...detailText,
    ...mediaText,
    ...(item.links || []).flat()
  ]
    .map(normalize)
    .join(" ");
  return haystack.includes(normalize(query));
}

function getIssue() {
  const archive = getArchive();
  return archive.find((issue) => issue.date === activeDate) || archive[0];
}

function getArchiveTags() {
  const tags = new Set([allLabel()]);
  getArchive().forEach((issue) => {
    issue.items.forEach((item) => {
      if (!isTermSection(item.section)) tags.add(item.section);
    });
  });
  return [allLabel(), ...Array.from(tags).filter((tag) => tag !== allLabel()).sort()];
}

function issueMatchesArchiveTag(issue) {
  if (activeArchiveTag === allLabel()) return true;
  return issue.items.some((item) => item.section === activeArchiveTag);
}

function renderArchiveTags() {
  archiveTags.innerHTML = "";
  getArchiveTags().forEach((tag) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `archive-tag-button${tag === activeArchiveTag ? " is-active" : ""}`;
    button.textContent = tag;
    button.addEventListener("click", () => {
      activeArchiveTag = tag;
      const visibleIssues = getFilteredIssues();
      if (!visibleIssues.some((issue) => issue.date === activeDate) && visibleIssues[0]) {
        activeDate = visibleIssues[0].date;
        calendarMonth = activeDate.slice(0, 7);
        activeSection = tag === allLabel() ? allLabel() : tag;
      } else if (tag !== allLabel()) {
        activeSection = tag;
      } else {
        activeSection = allLabel();
      }
      contentQuery = "";
      contentSearch.value = "";
      render();
    });
    archiveTags.appendChild(button);
  });
}

function getFilteredIssues() {
  return getArchive().filter((issue) => {
    const queryMatch = normalize([issue.date, issue.title, issue.meta, issue.headline, issue.summary].join(" ")).includes(
      normalize(dateQuery)
    );
    return queryMatch && issueMatchesArchiveTag(issue);
  });
}

function formatMonthLabel(monthKey) {
  const [year, month] = monthKey.split("-").map(Number);
  const date = new Date(year, month - 1, 1);
  if (currentLang === "en") {
    return new Intl.DateTimeFormat("en", { month: "long", year: "numeric" }).format(date);
  }
  return `${year}年${month}月`;
}

function shiftCalendarMonth(delta) {
  const [year, month] = calendarMonth.split("-").map(Number);
  const next = new Date(year, month - 1 + delta, 1);
  calendarMonth = `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}`;
  renderDates();
}

function renderDates() {
  dateList.innerHTML = "";
  const filtered = getFilteredIssues();
  const issueByDate = new Map(filtered.map((issue) => [issue.date, issue]));
  const [year, month] = calendarMonth.split("-").map(Number);
  const firstDay = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const leadingBlanks = firstDay.getDay();
  const weekLabels = currentLang === "en"
    ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    : ["日", "一", "二", "三", "四", "五", "六"];

  const calendar = document.createElement("div");
  calendar.className = "calendar";

  const header = document.createElement("div");
  header.className = "calendar-header";
  const prev = document.createElement("button");
  prev.type = "button";
  prev.className = "calendar-nav";
  prev.textContent = "‹";
  prev.addEventListener("click", () => shiftCalendarMonth(-1));
  const title = document.createElement("strong");
  title.textContent = formatMonthLabel(calendarMonth);
  const next = document.createElement("button");
  next.type = "button";
  next.className = "calendar-nav";
  next.textContent = "›";
  next.addEventListener("click", () => shiftCalendarMonth(1));
  header.append(prev, title, next);
  calendar.appendChild(header);

  const weekdays = document.createElement("div");
  weekdays.className = "calendar-weekdays";
  weekLabels.forEach((label) => {
    const cell = document.createElement("span");
    cell.textContent = label;
    weekdays.appendChild(cell);
  });
  calendar.appendChild(weekdays);

  const grid = document.createElement("div");
  grid.className = "calendar-grid";
  for (let i = 0; i < leadingBlanks; i += 1) {
    const blank = document.createElement("span");
    blank.className = "calendar-empty";
    grid.appendChild(blank);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = `${calendarMonth}-${String(day).padStart(2, "0")}`;
    const issue = issueByDate.get(date);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `calendar-day${issue ? " has-issue" : ""}${date === activeDate ? " is-active" : ""}`;
    button.textContent = String(day);
    button.disabled = !issue;
    if (issue) {
      button.title = issue.headline;
      button.addEventListener("click", () => {
        activeDate = issue.date;
        activeSection = allLabel();
        contentQuery = "";
        contentSearch.value = "";
        render();
      });
    }
    grid.appendChild(button);
  }
  calendar.appendChild(grid);
  dateList.appendChild(calendar);

  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = t("noDates");
    dateList.appendChild(empty);
  }
}

function renderTabs(issue) {
  sectionTabs.innerHTML = "";
  const available = new Set(issue.items.filter((item) => !isTermSection(item.section)).map((item) => item.section));
  if (activeSection !== allLabel() && !available.has(activeSection)) {
    activeSection = allLabel();
  }
  sectionOrders[currentLang]
    .filter((section) => section === allLabel() || available.has(section))
    .forEach((section) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `tab-button${section === activeSection ? " is-active" : ""}`;
      button.dataset.sectionKey = getSectionKey(section);
      button.textContent = section;
      button.addEventListener("click", () => {
        activeSection = section;
        renderContent();
        renderTabs(getIssue());
      });
      sectionTabs.appendChild(button);
    });
}

function renderContent() {
  const issue = getIssue();
  contentGrid.innerHTML = "";
  const filtered = issue.items.filter((item) => {
    if (isTermSection(item.section)) return false;
    const sectionMatch = activeSection === allLabel() || item.section === activeSection;
    return sectionMatch && itemMatches(item, contentQuery);
  });

  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = t("noContent");
    contentGrid.appendChild(empty);
    return;
  }

  filtered.forEach((item) => {
    const node = storyTemplate.content.firstElementChild.cloneNode(true);
    node.dataset.sectionKey = getSectionKey(item.section);
    node.dataset.sectionCode = getSectionCode(item.section);
    if (["投融资信息", "机构报告", "职业雷达", "Funding Watch", "Research Reports", "Career Radar"].includes(item.section)) {
      node.classList.add("is-wide");
    }
    node.querySelector(".section-code").textContent = getSectionCode(item.section);
    node.querySelector(".section-label").textContent = item.section;
    node.querySelector(".priority").textContent = item.priority || "";
    node.querySelector("h3").textContent = item.title;
    node.querySelector(".dek").textContent = item.dek;
    const details = node.querySelector(".details");
    const media = renderStoryMedia(item);
    if (media) details.before(media);
    (item.details || []).forEach((detail) => {
      if (typeof detail === "string") {
        const line = document.createElement("div");
        line.className = "detail-line";
        line.textContent = detail;
        details.appendChild(line);
        return;
      }

      const disclosure = document.createElement("details");
      disclosure.className = "detail-disclosure";
      const summary = document.createElement("summary");
      summary.textContent = detail.summary;
      const expanded = document.createElement("p");
      expanded.textContent = detail.expanded;
      disclosure.append(summary, expanded);
      if (detail.quote) {
        const quote = document.createElement("blockquote");
        quote.className = "source-quote";
        quote.textContent = detail.quote;
        disclosure.appendChild(quote);
      }
      if (detail.chart) {
        const chartLink = document.createElement("a");
        chartLink.className = "chart-link";
        chartLink.href = detail.chart[1];
        chartLink.textContent = detail.chart[0];
        disclosure.appendChild(chartLink);
      }
      details.appendChild(disclosure);
    });
    node.querySelector(".why").textContent = item.why;
    const links = node.querySelector(".link-row");
    (item.links || []).forEach(([label, href]) => {
      const link = document.createElement("a");
      link.href = href;
      link.textContent = label;
      links.appendChild(link);
    });
    if (!item.links || !item.links.length) {
      links.remove();
    }
    contentGrid.appendChild(node);
  });
}

function renderTermSpotlight(issue) {
  const term = issue.items.find((item) => isTermSection(item.section));
  termSpotlight.innerHTML = "";
  termSpotlight.hidden = !term;
  if (!term) return;

  const intro = document.createElement("div");
  const kicker = document.createElement("p");
  kicker.className = "term-kicker";
  kicker.textContent = t("termLabel");
  const title = document.createElement("h3");
  title.className = "term-title";
  title.textContent = term.title;
  intro.append(kicker, title);

  const dek = document.createElement("p");
  dek.className = "term-dek";
  dek.textContent = term.dek;
  intro.appendChild(dek);

  const more = document.createElement("details");
  more.className = "term-more";
  const moreSummary = document.createElement("summary");
  moreSummary.textContent = t("termExpand");
  more.appendChild(moreSummary);

  const points = document.createElement("div");
  points.className = "term-points";
  (term.details || []).forEach((detail) => {
    const line = document.createElement("div");
    line.className = "term-point";
    line.textContent = typeof detail === "string" ? detail : detail.summary;
    points.appendChild(line);
  });
  const why = document.createElement("p");
  why.className = "term-why";
  why.textContent = term.why;
  more.append(points, why);

  if (term.links && term.links.length) {
    const links = document.createElement("div");
    links.className = "term-links";
    term.links.forEach(([label, href]) => {
      const link = document.createElement("a");
      link.href = href;
      link.textContent = label;
      links.appendChild(link);
    });
    more.appendChild(links);
  }

  termSpotlight.append(intro, more);
}

function renderHeader(issue) {
  issueMeta.textContent = issue.meta;
  heroHeadline.textContent = issue.headline;
  heroSummary.textContent = issue.summary;
}

function renderSourceMethod() {
  sourceMethodSummary.textContent = t("sourceMethodTitle");
  sourceMethodText.textContent = t("sourceMethodText");
  sourceMethodLinks.innerHTML = "";
  sourceLinks.forEach(([label, href]) => {
    const link = document.createElement("a");
    link.href = href;
    link.textContent = label;
    sourceMethodLinks.appendChild(link);
  });
}

function renderLanguageSwitch() {
  languageSwitch.innerHTML = "";
  languageSwitch.dataset.lang = currentLang;
  [
    ["zh", t("zh")],
    ["en", t("en")]
  ].forEach(([lang, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `language-button${lang === currentLang ? " is-active" : ""}`;
    button.textContent = label;
    button.addEventListener("click", () => {
      if (currentLang === lang) return;
      currentLang = lang;
      localStorage.setItem("daily-ai-atlas-lang", currentLang);
      activeSection = allLabel();
      activeArchiveTag = allLabel();
      contentQuery = "";
      dateQuery = "";
      contentSearch.value = "";
      dateSearch.value = "";
      render();
    });
    languageSwitch.appendChild(button);
  });
}

function renderChrome() {
  document.documentElement.lang = currentLang === "en" ? "en" : "zh-CN";
  languageLabel.textContent = t("language");
  refreshNote.textContent = t("refreshNote");
  dateSearchLabel.textContent = t("dateSearch");
  archiveTagsLabel.textContent = t("archiveTags");
  contentSearchLabel.textContent = t("contentSearch");
  dateSearch.placeholder = t("datePlaceholder");
  contentSearch.placeholder = t("contentPlaceholder");
  renderSourceMethod();
  renderLanguageSwitch();
}

function render() {
  const issue = getIssue();
  renderChrome();
  renderHeader(issue);
  renderTermSpotlight(issue);
  renderArchiveTags();
  renderDates();
  renderTabs(issue);
  renderContent();
}

dateSearch.addEventListener("input", (event) => {
  dateQuery = event.target.value;
  const visibleIssues = getFilteredIssues();
  if (!visibleIssues.some((issue) => issue.date === activeDate) && visibleIssues[0]) {
    activeDate = visibleIssues[0].date;
    calendarMonth = activeDate.slice(0, 7);
  }
  renderArchiveTags();
  renderDates();
  renderHeader(getIssue());
  renderTermSpotlight(getIssue());
  renderTabs(getIssue());
  renderContent();
});

contentSearch.addEventListener("input", (event) => {
  contentQuery = event.target.value;
  renderContent();
});

copyLinkButton.addEventListener("click", async () => {
  const href = window.location.href;
  try {
    await navigator.clipboard.writeText(href);
    copyLinkButton.title = t("copyDone");
  } catch {
    copyLinkButton.title = href;
  }
});

render();
