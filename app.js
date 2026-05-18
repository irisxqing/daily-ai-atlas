const archiveZh = [
  {
    date: "2026-05-18",
    title: "AI Daily Atlas",
    meta: "2026年5月18日",
    headline: "算力的单位，正在从“几张卡”变成“几座电站”",
    summary:
      "早上好。今天最值得知道的 5 件事：NVIDIA 与 OpenAI 把合作口径直接拉到 10GW 级别（相当于把“训练模型”写成“建电站”）；AI 安全正在从模型对齐扩展到供应链与签名证书；Anthropic 与盖茨基金会把 Claude 推进公共部门和公共产品；中国侧继续在“更便宜、更可用、更工程化”的模型/API 路线卷细节；开源圈开始出现专门为 agent 设计的新语言与工具链。",
    items: [
      {
        section: "今日重点",
        priority: "高",
        title: "NVIDIA 与 OpenAI 宣布 10GW 级“算力工厂”合作意向",
        dek:
          "这不是“又买了一批 GPU”，而是把合作写成“至少 10GW 的 AI 数据中心能力”——算力正在变成一种基础设施级资产。",
        details: [
          "NVIDIA 新闻稿称双方签署合作意向：为 OpenAI 下一代 AI 基础设施部署至少 10GW 的 NVIDIA 系统，规模相当于“数百万张 GPU”。",
          "NVIDIA 表示将随着每 1GW 部署逐步投资 OpenAI，最高可达 1000 亿美元；第一阶段目标是在 2026 年下半年上线，平台为 NVIDIA Vera Rubin。",
          "合作内容包括：OpenAI 把 NVIDIA 作为优先的计算与网络伙伴，共同优化 OpenAI 的模型/基础设施软件路线图与 NVIDIA 的软硬件路线图。",
          "新闻稿还提到这与 OpenAI 现有的基础设施协作网络互补（包括 Microsoft、Oracle、SoftBank 等）。"
        ],
        why:
          "对产品和职业判断而言，这条消息的核心是：领先模型公司的“护城河”越来越像能源与工程项目——电力、机房、网络、运维与资本结构，正在决定模型迭代速度与成本曲线。",
        links: [
          ["NVIDIA 新闻稿（PDF）", "https://nvidianews.nvidia.com/_gallery/download_pdf/68d173273d633288cb44040b/"]
        ]
      },
      {
        section: "今日重点",
        priority: "高",
        title: "OpenAI 披露第三方开发者工具事件：强调未发现用户数据泄露",
        dek:
          "这类安全事件的价值不在八卦，而在提醒：AI 时代的安全边界不仅是模型输出，更是开发链路、签名证书与供应链。",
        details: [
          "OpenAI 表示其调查未发现 OpenAI 用户数据被访问、生产系统或知识产权被攻破、软件被篡改。",
          "应对动作包括：引入第三方取证与事件响应团队、轮换 macOS 代码签名证书、发布使用新证书的 macOS 产品新版本，并与 Apple 协作降低旧证书被继续滥用的风险。",
          "对普通用户最直接的含义是：桌面端/企业端工具的“可信交付链”在变得更重要，更新与合规流程会越来越频繁。",
          "对企业落地来说，这也强化了一个现实：安全团队会更关注开发链路与供应链，而不只看模型本身。"
        ],
        why:
          "当 AI 进入关键业务流程，安全部门关注点会从“模型会不会胡说”扩展到“交付链能不能被信任”。这会影响企业采购节奏、上线审批、以及你做 AI 落地时必须准备的安全叙事。",
        links: [["OpenAI 官方说明", "https://openai.com/index/axios-developer-tool-compromise/"]]
      },
      {
        section: "今日重点",
        priority: "中高",
        title: "Anthropic × 盖茨基金会：4 年 2 亿美元推进公共部门 AI 工具与公共产品",
        dek:
          "一个值得跟踪的信号：顶级模型公司开始把“影响力/合规/公共部门落地”写进长期合作，而不只是卖 API。",
        details: [
          "Anthropic 宣布与盖茨基金会达成合作，4 年总计 2 亿美元的承诺，包含资助、Claude 使用额度与技术支持。",
          "合作重点覆盖健康、教育、农业与经济流动等场景，并强调建设可复用的“公共产品/公共资源”。",
          "盖茨基金会的口径强调 country-led（由各国主导）把 AI 融入现有系统，而不是单点试验。",
          "对模型公司而言，这类合作也意味着更强的评估、治理、隐私与本地化交付要求。"
        ],
        why:
          "公共部门与公益领域的 AI 采用，往往更在意可解释性、可审计、可持续运营和成本可控。未来很多“最难但最值钱”的 AI 项目，会发生在这类高约束环境里。",
        links: [
          ["Anthropic 公告", "https://www.anthropic.com/news/gates-foundation-partnership"],
          ["盖茨基金会新闻稿", "https://www.gatesfoundation.org/ideas/media-center/press-releases/2026/05/ai-anthropic-partnership"]
        ]
      },
      {
        section: "今日重点",
        priority: "中",
        title: "DeepSeek API 进入“改名 + 退役窗口”：工程细节比发布会更影响落地",
        dek:
          "对企业来说，模型能力之外更真实的成本来自：API 变更、模型版本策略、迁移窗口和兼容性。",
        details: [
          "DeepSeek API 更新页显示：旧的模型名 `deepseek-chat` 与 `deepseek-reasoner` 将在三个月内停止使用（到 2026-07-24）。",
          "这种“模型名/版本策略”是典型工程信号：它通常发生在产品团队开始追求更清晰的产品线、计费口径与能力分层。",
          "对使用方而言，迁移窗口意味着要提前做兼容测试、回归评估与成本测算，而不是等到生产系统报警。",
          "如果你在做多模型组合（OpenAI/Claude/DeepSeek/Qwen 等），这种变更会直接影响路由、缓存和评测体系。"
        ],
        why:
          "“模型排行榜”很热闹，但真正决定交付成本的是工程稳定性和版本策略。能把这类变化提前纳入 roadmap 的团队，落地体验会明显更稳。",
        links: [["DeepSeek API 更新", "https://api-docs.deepseek.com/updates/"]]
      },
      {
        section: "投融资信息",
        priority: "资本信号",
        title: "为什么“千兆瓦级算力合作”本身就是融资新闻",
        dek:
          "这条不是传统意义的融资公告，但它会改变你理解 AI 资本市场的方式：算力合同、能源与机房建设，正在成为“隐形融资”。",
        details: [
          "NVIDIA 在合作意向中明确写出“拟逐步投资 OpenAI，最高可达 1000 亿美元”，且与每 1GW 部署进度绑定。",
          "从结果看，这类结构让“算力供给 + 资本投入 + 路线图协同”被打包成一体：既是供货关系，也是战略投资与长期锁定。",
          "风险点同样清晰：电力与合规、项目交付周期、单一供应链依赖、以及模型需求波动都会影响落地节奏。",
          "对创业公司与中型企业来说，这也意味着“买得起算力”可能比“选哪个模型”更先成为战略问题。"
        ],
        why:
          "如果你做 AI 战略或投资研究，建议把“算力与能源合同”当成与融资同等重要的信号：它能更早反映谁真的在押注下一代模型迭代速度。",
        links: [
          ["NVIDIA 新闻稿（PDF）", "https://nvidianews.nvidia.com/_gallery/download_pdf/68d173273d633288cb44040b/"]
        ]
      },
      {
        section: "开源项目",
        priority: "新",
        title: "Zero：把 agent 工具链做成一门“系统级语言”",
        dek:
          "Vercel Labs 的 Zero 把自己定位为“the programming language for agents”，强调可预测内存、显式 effects、结构化编译器输出——听起来像是为 agent 的可靠性与可调试性而生。",
        media: {
          type: "image",
          src: "https://opengraph.githubassets.com/daily-ai-atlas/vercel-labs/zero",
          alt: "Zero GitHub repository preview",
          title: "GitHub project preview",
          caption: "“The programming language for agents”——为 agent 的可控性与工具链而做的语言尝试",
          href: "https://github.com/vercel-labs/zero"
        },
        details: [
          "Zero 的 README 直接写明：它是面向 agent 的 systems language，目标是小而快的原生工具、显式 effects、可预测内存与结构化输出。",
          "它仍处于实验阶段，语言/编译器/标准库都在快速变化；更像一个“方向押注”而不是稳定生产工具。",
          "对使用者而言，值得看的不是语法，而是：它把 agent 工具（skills、routes、graph、size）当成一等公民来设计。",
          "如果你的团队正在做 agent 工作流，长期痛点一定包括：可调试性、可复现性、权限与副作用管理。Zero 这种路线是对这些痛点的直接回应。"
        ],
        why:
          "当 agent 从“会写代码”走向“能动手改系统”，工具链会重新变得重要。未来可能会出现一批专门面向 agent 的语言、运行时与安全沙箱。",
        links: [
          ["GitHub 仓库", "https://github.com/vercel-labs/zero"],
          ["Zero 官网", "https://zerolang.ai/"]
        ]
      },
      {
        section: "AI产品推荐",
        priority: "办公场景",
        title: "Claude Design：把“做图/做稿/做原型”变成和 Claude 对话",
        dek:
          "Anthropic Labs 推出的 Claude Design 把 Claude 的能力延伸到更像“可交付物”的东西：一页纸、原型、幻灯片、视觉稿。",
        details: [
          "Anthropic 将 Claude Design 放在 Labs 产品线下，强调和 Claude 协作生成 polished visual work（设计、原型、slides、one-pagers）。",
          "对文科背景更友好的一点是：它把提示词的输出目标从“文字”变成“可以拿去讨论/评审/交付的版面”。",
          "对电商与运营团队，典型用法是：活动页草稿、商品故事页、一页策略梳理、内部汇报稿、以及快速 A/B 的视觉方向。",
          "限制也很现实：品牌一致性、资产版权、以及与现有设计系统的协作深度，仍需要实际试用验证。"
        ],
        why:
          "当你需要在 30 分钟内把一个想法变成“可以让团队对齐”的东西，Claude Design 这类工具的价值会比“更聪明的聊天机器人”更直接。",
        links: [["Anthropic 公告", "https://www.anthropic.com/news/introducing-claude-design"]]
      },
      {
        section: "AI产品推荐",
        priority: "安全提醒",
        title: "企业用 agent 前先补一课：把“权限”当成产品设计",
        dek:
          "今天的安全新闻提醒了一件事：你做的不是一个聊天机器人，而是一个能读写系统的“自动化员工”。",
        details: [
          "如果 agent 能访问 Gmail/ERP/订单系统/广告账户，那么“最小权限 + 审计追踪 + 可回滚”就必须成为默认配置。",
          "把关键动作做成“明确确认”而不是“自动执行”，尤其是付款、改价、删库、发货、批量邮件等高风险动作。",
          "优先把 agent 放进隔离环境（沙箱/只读镜像/测试账号），再逐步扩大权限范围。",
          "把供应链与交付链纳入风险清单：依赖的 npm 包、桌面端签名证书、CI/CD 权限、密钥轮换流程都要有预案。"
        ],
        why:
          "你越早把“权限设计”当成产品的一部分，越不容易在规模化落地时被安全与合规卡住。",
        links: [["OpenAI 安全说明", "https://openai.com/index/axios-developer-tool-compromise/"]]
      },
      {
        section: "机构报告",
        priority: "收藏",
        title: "AI Index 2026：产业主导创新、组织采用进入常态",
        dek:
          "想做一年以上的 AI 趋势判断，Stanford AI Index 依然是最省心的“宏观底稿”。",
        details: [
          {
            summary:
              "AI Index 2026：2025 年超过 90% 的 notable frontier models 来自行业；组织 AI 采用率达到 88%。",
            expanded:
              "报告的核心价值不在“某个模型赢了谁”，而在把宏观变化固定成可复用的锚点：创新主体从学术界转向产业界、模型迭代越来越依赖资本与基础设施、AI 采用在组织里进入常态化。对战略岗位来说，你可以把它当作每季度复盘的底层坐标系：哪些能力在商品化、哪些环节仍被算力/数据/人才卡住、监管与教育是否跟上。",
            quote: "“Industry produced over 90% of notable frontier models in 2025.”",
            chart: ["报告页 / PDF 入口", "https://hai.stanford.edu/ai-index/2026-ai-index-report"]
          }
        ],
        why:
          "当你需要把“为什么今年要投入 AI”讲给非技术高层听，这份报告提供的是可引用的宏观事实和结构化框架。",
        links: [
          ["报告页", "https://hai.stanford.edu/ai-index/2026-ai-index-report"],
          ["PDF 下载", "https://hai.stanford.edu/assets/files/ai_index_report_2026.pdf"]
        ]
      },
      {
        section: "机构报告",
        priority: "对照",
        title: "OECD.AI Index：把“国家 AI 能力”拆成可比较的指标",
        dek:
          "如果你关心中美之外的政策与产业差异，OECD 的 Index 很适合做横向对照。",
        details: [
          {
            summary:
              "OECD.AI Index 2026：从研究、产业、人才与政策等维度整理国家层面的 AI 指标体系。",
            expanded:
              "这份报告的好处是“可比”：它把讨论从口号拉回指标（研发投入、人才供给、产业结构、治理与政策工具等），适合在做海外市场或跨境业务时，快速判断某个国家/地区的 AI 生态成熟度与落地条件。",
            quote: "“THE OECD.AI INDEX © OECD 2026.”",
            chart: ["PDF 入口", "https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/02/oecd-ai-observatory-index_8f5fa0f2/32c01014-en.pdf"]
          }
        ],
        why:
          "当 AI 变成产业政策的一部分，你需要一套“看得懂、比得动”的指标体系来做区域判断。",
        links: [["OECD PDF", "https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/02/oecd-ai-observatory-index_8f5fa0f2/32c01014-en.pdf"]]
      },
      {
        section: "每日词条",
        priority: "学习",
        title: "AI Factory（AI 算力工厂）",
        dek:
          "一句话：AI Factory 指把算力、数据、网络、运维和软件栈打包成一套“持续生产智能”的工厂系统，而不只是买几台服务器。",
        details: [
          "稍微深入一点：AI Factory 的关键不是单点 GPU 性能，而是端到端吞吐——供电与散热、网络拓扑、存储、调度、训练/推理软件栈、故障恢复与成本管理。",
          "和今天新闻的关系：当合作口径变成“10GW”，你就很难再用“买卡”去理解它——这更像一个能源与工程项目。",
          "常见误解：AI Factory 不是只有大厂才需要。只要你做多模型路由、实时推理、或有严格延迟/成本约束，本质上都在做一个小型 AI 工厂。",
          "工作里怎么用：做战略时，把问题从“选哪个模型”前置到“算力预算、延迟目标、数据合规、可观测性、灰度发布与故障预案”。"
        ],
        why:
          "理解 AI Factory，有助于你在讨论预算与路线图时更像“做系统的人”，而不是“挑工具的人”。",
        links: [["NVIDIA 新闻稿（PDF）", "https://nvidianews.nvidia.com/_gallery/download_pdf/68d173273d633288cb44040b/"]]
      },
      {
        section: "今日学习",
        priority: "收藏",
        title: "读一遍 OpenAI 的安全响应：你会更懂“企业为什么总在催更新”",
        dek:
          "这不是安全八卦，而是一份很好的企业沟通素材：怎么在不夸大风险的前提下解释措施、边界和下一步。",
        details: [
          "重点看三件事：它怎么界定影响范围（哪些系统/哪些数据），它做了哪些可验证动作（取证、证书轮换、新版本发布），以及它如何与生态伙伴协作（Apple）。",
          "把它当成“写给业务方看的安全说明”模板：清晰、克制、有行动点。",
          "对做 AI 落地的人来说，这类文本可以直接复用到内部沟通：解释为什么需要审批、为什么需要轮换密钥、为什么需要分环境。",
          "看完再回到你的项目：有没有类似的“交付链风险清单”？"
        ],
        why:
          "你越能把安全与合规讲清楚，AI 项目越不容易被动停在 PoC。",
        links: [["OpenAI 官方说明", "https://openai.com/index/axios-developer-tool-compromise/"]]
      },
      {
        section: "继续追踪",
        priority: "信号",
        title: "10GW 叙事会如何落到合同与交付？",
        dek:
          "关注后续两类信息：一是具体数据中心/电力/选址的公开进展，二是 GPU 平台与软件栈协同能否形成可复用模板。",
        details: [
          "第一类：有没有公开披露的机房、能源协议、并网进度、或合作伙伴名单？",
          "第二类：Vera Rubin 平台的交付节奏、网络方案与软件栈（训练/推理/调度）是否会同步公开。",
          "第三类：这类“算力 + 投资”结构是否会成为行业新模板，复制到其他模型公司或云厂商。",
          "如果你做职业规划：这类项目会催生更多“AI 基础设施 + 交付”岗位，角色会更像工程项目经理 + 平台产品经理的结合体。"
        ],
        why:
          "领先实验室的迭代速度越来越依赖工程交付能力，而不是单纯研究灵感。",
        links: [["NVIDIA 新闻稿（PDF）", "https://nvidianews.nvidia.com/_gallery/download_pdf/68d173273d633288cb44040b/"]]
      },
      {
        section: "职业雷达",
        priority: "匹配",
        title: "AI Career Radar：偏战略落地的两条公开机会（深港/香港可关注）",
        dek:
          "目标画像：战略+AI背景，熟悉跨境电商平台或零售平台业务，偏业务落地与增长/运营/产品转型方向。",
        details: [
          "Zurich Insurance：Head of Data and AI（地点标注包含 Hong Kong 与深圳福田）。关键词：enterprise AI enablement、把 AI 嵌入分销/运营/理赔/核保等流程、治理与合规。",
          "BTSE：AI Business Strategy Manager（香港/远程）。关键词：AI-first 组织转型、agentic workflows、MCP/工具链、ROI 与治理。",
          "筛选建议：优先看“要结果、要 adoption、要跨部门推进”的岗位描述，而不是只写“负责 AI 战略研究”的岗位。",
          "面试准备：建议准备 2-3 个“业务问题—AI 方案—交付节奏—指标—风险治理”的案例，强调你能把方案做成组织能力。"
        ],
        why:
          "这类岗位的加分点通常不是写模型，而是能把 AI 从 PoC 推到生产：预算、KPI、治理、变更管理与跨团队协作。",
        links: [
          ["Zurich：Head of Data and AI（Indeed）", "https://hk.indeed.com/viewjob?jk=3e8ed0b4cee997bd"],
          ["BTSE：AI Business Strategy Manager（Lever）", "https://jobs.lever.co/BTSE/2bab2e38-413b-4fea-96b7-101dd6adda23"]
        ]
      }
    ]
  },
  {
    date: "2026-05-15",
    title: "AI Daily Atlas",
    meta: "2026年5月15日",
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
          type: "video",
          embed: "https://www.youtube.com/embed/luU57hMhkak",
          src: "https://i.ytimg.com/vi/luU57hMhkak/hqdefault.jpg",
          alt: "Figure robot livestream thumbnail",
          title: "Robot shift video",
          caption: "Figure 机器人 8 小时包裹分拣直播/回放",
          href: "https://www.youtube.com/watch?v=luU57hMhkak",
          cta: "打开视频"
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
        priority: "官方更新",
        title: "OpenAI 连发语音、默认模型和研究型模型更新",
        dek:
          "OpenAI 最近的信号不是单点发布，而是一组平台能力升级：实时语音 API 进入更强的实时交互，GPT-5.5 Instant 成为更智能的默认 ChatGPT 体验，研究页还出现 Privacy Filter 和 GPT-Rosalind。",
        details: [
          "实时语音：OpenAI 发布 GPT-Realtime-2、GPT-Realtime-Translate 和 GPT-Realtime-Whisper，方向是让语音应用可以边说边理解、边翻译、边转写，而不是先录音再处理。",
          "默认体验：GPT-5.5 Instant 正在替代 GPT-5.3 Instant，成为 ChatGPT 更聪明、更准确、更个性化的默认模型；OpenAI 称它在高风险问题上的幻觉声明比 GPT-5.3 Instant 少 52.5%。",
          "隐私工具：OpenAI Privacy Filter 是一个开源权重的 PII 检测和脱敏模型，参数量为 1.5B、活跃参数约 50M，说明隐私和合规能力正在变成 AI 平台基础设施。",
          "科学模型：GPT-Rosalind 面向生命科学研究，支持文献综合、假设生成、实验规划、蛋白和基因相关推理，并通过 trusted access 向合格客户开放。",
          "这组更新放在一起看，OpenAI 正在同时推进三条线：普通用户默认体验、开发者实时 API、垂直行业研究模型。"
        ],
        why:
          "这条比单个产品发布更重要：它说明模型公司正在把能力拆成不同层级交付。普通用户得到更好的默认模型，开发者得到实时语音 API，企业和科研客户得到专用模型和隐私组件。对 AI 产品和跨境业务来说，下一波机会可能来自实时客服、直播翻译、语音导购、合规数据处理和行业专属 agent。",
        links: [
          ["OpenAI 语音 API 更新", "https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/"],
          ["GPT-5.5 Instant", "https://openai.com/index/gpt-5-5-instant/"],
          ["GPT-5.5", "https://openai.com/index/introducing-gpt-5-5/"],
          ["OpenAI Privacy Filter", "https://openai.com/index/introducing-openai-privacy-filter/"],
          ["GPT-Rosalind", "https://openai.com/index/introducing-gpt-rosalind/"]
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
        priority: "趋势产品",
        title: "Anuma：一个订阅里的多模型入口和跨模型记忆层",
        dek:
          "Anuma 把 ChatGPT、Claude、Gemini、Grok、DeepSeek、Kimi、Llama、Mistral 等模型放进一个界面，并主打用户自有、加密、可跨模型携带的记忆。",
        details: [
          "Anuma 官网把自己定位为 privacy focused all-in-one AI platform，核心卖点是 one memory, every model, always private。",
          "它支持多模型访问：ChatGPT、Claude、Gemini、Grok、DeepSeek、Kimi、Llama、Mistral 等，用户不需要在不同 app 之间反复复制上下文。",
          "记忆层是重点：Anuma 称记忆会跨模型工作，用户可以添加、编辑、删除，且对话和记忆加密并存储在设备侧或用户控制的加密体系里。",
          "Council Mode 可以让同一个问题同时交给多个模型回答，用来比较风格、准确性和深度；这比单纯的模型聚合更接近“多模型决策台”。",
          "需要继续观察的是：跨模型记忆会涉及隐私、供应商数据策略、模型调用成本和用户迁移成本，产品承诺需要靠真实使用体验验证。"
        ],
        why:
          "Anuma 不是最炫的单点工具，但它代表一个很值得跟踪的方向：个人 AI 操作系统和跨模型上下文层。未来用户可能不在意自己用的是哪个模型，而在意“我的长期记忆、偏好、项目上下文能不能跟着我走”。",
        links: [
          ["Anuma 官网", "https://www.anuma.ai/"],
          ["Anuma Memory", "https://www.anuma.ai/ai-memory"],
          ["多模型访问", "https://www.anuma.ai/multiple-ai-models"],
          ["Anuma Launch", "https://www.anuma.ai/blog/anuma-launch"]
        ]
      },
      {
        section: "AI产品推荐",
        priority: "知识管理",
        title: "Recall：把碎片阅读沉淀成可对话的个人知识库",
        dek:
          "Recall 不是简单收藏夹，而是把网页、视频、PDF、文章和笔记保存、总结、自动打标签，并连接成一个可以追问的个人知识库。",
        details: [
          "Recall 官网把自己定位为 AI knowledge base，核心动作是“一键保存重要内容”，然后自动完成总结、分类、连接和后续检索。",
          "它支持网页、YouTube、播客、PDF、书籍、笔记等多种内容类型，适合把每天看到的 AI 新闻、报告、产品页和长文沉淀起来。",
          "比较有价值的是连接能力：Recall 会把新保存的内容和既有知识自动关联，并在浏览时重新浮现相关内容，减少“看过但想不起来”的损耗。",
          "它还支持和自己的知识库对话，并可以选择不同 AI 模型；这让它更像一个研究型第二大脑，而不是普通书签工具。",
          "如果 AI Daily Atlas 以后要做个人版归档，Recall 这类产品很值得对标：每天看信息不是目的，把信息变成可复用判断才是目的。"
        ],
        why:
          "它适合你的信息消费方式：既要快速追踪 AI 信号，又不希望日报看完就消失。Recall 的价值在于把新闻、报告、产品线索变成长期可查询的行业记忆。",
        links: [
          ["Recall 官网", "https://www.recall.it/"],
          ["Recall Docs", "https://docs.recall.it/"]
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
        priority: "研究工作台",
        title: "Liminary：面向咨询和战略团队的 AI 研究工作台",
        dek:
          "Liminary 的定位非常明确：给 consultants、strategists 和 researchers 用，让高风险建议能够基于真实研究、可追溯来源和可复用知识。",
        details: [
          "官网首页直接写明 Liminary is AI for consultants and strategists making high-stakes recommendations grounded in real research，这一点比泛用聊天机器人更垂直。",
          "它强调从研究到交付物不要丢信息：保存文章、报告、PDF、AI 对话和视频，边读边加注释，再让 agent 跟踪客户或项目的新信息。",
          "对咨询和战略场景很关键的是可追溯性：Liminary 称每个 insight 都能回到来源，来源可以一键打开，数据不会用于训练 AI 模型。",
          "它主打跨项目复用：当你做新项目时，系统会浮现过去相关研究、竞品分析或客户洞察，帮助把经验复利化。",
          "这类产品的趋势信号是：AI 工具正在从“帮我总结”走向“帮我形成更可靠的判断和建议”，尤其适合专业服务、投资、战略和市场研究。"
        ],
        why:
          "它和你的背景非常贴：咨询方法论、行业研究、跨境电商策略和 AI 信号跟踪，本质上都是把大量碎片证据变成可 defend 的判断。Liminary 是值得长期观察的战略工作台形态。",
        links: [
          ["Liminary 官网", "https://liminary.io/"],
          ["Chrome Extension", "https://chromewebstore.google.com/detail/liminary/bbgbkegkcbgpbmnjomngmfadekddjlpp"]
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
    title: "AI Daily Atlas",
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
    date: "2026-05-18",
    title: "AI Daily Atlas",
    meta: "May 18, 2026",
    headline: "Compute is shifting from 'GPUs' to 'gigawatts'",
    summary:
      "Good morning. The 5 things worth knowing today: NVIDIA and OpenAI are talking in 10GW units (this is 'build power plants' scale, not 'buy GPUs' scale); security attention is expanding from model alignment to supply chains and signing certificates; Anthropic and the Gates Foundation are pushing Claude into public-sector programs and shared public goods; China-side labs keep competing on cost, stability, and API/product engineering; and open source is starting to grow agent-first languages and toolchains.",
    items: [
      {
        section: "Top Stories",
        priority: "High",
        title: "NVIDIA and OpenAI sign an LOI to deploy at least 10GW of NVIDIA systems",
        dek:
          "This reads less like 'they bought more GPUs' and more like 'they are building an AI power-and-data-center program' — compute is becoming infrastructure.",
        details: [
          "NVIDIA’s release says the two companies signed a letter of intent to deploy at least 10 gigawatts of NVIDIA systems for OpenAI’s next-generation AI infrastructure — described as millions of GPUs.",
          "NVIDIA says it intends to invest up to $100B in OpenAI progressively as each gigawatt is deployed; the first phase targets the second half of 2026 on the NVIDIA Vera Rubin platform.",
          "The partnership positions NVIDIA as a preferred strategic compute and networking partner, with co-optimization across OpenAI’s model/infrastructure software roadmap and NVIDIA’s hardware/software roadmap.",
          "The release frames this as complementary to OpenAI’s broader infrastructure collaborator network (including Microsoft, Oracle, SoftBank, and others)."
        ],
        why:
          "The strategic takeaway: frontier labs’ moats increasingly look like energy, facilities, networking, and delivery execution. For products and careers, the bottleneck is shifting toward infrastructure and systems engineering as much as model research.",
        links: [
          ["NVIDIA release (PDF)", "https://nvidianews.nvidia.com/_gallery/download_pdf/68d173273d633288cb44040b/"]
        ]
      },
      {
        section: "Top Stories",
        priority: "High",
        title: "OpenAI on a third-party developer tool compromise: no evidence of user-data access",
        dek:
          "The point here isn’t drama — it’s a reminder that modern AI risk is as much about the delivery chain as it is about model behavior.",
        details: [
          "OpenAI says it found no evidence that OpenAI user data was accessed, that production systems or IP were compromised, or that software was altered.",
          "Response steps include third-party forensics/incident response, rotating a macOS code-signing certificate, shipping new macOS builds, and working with Apple to reduce risk from the prior certificate.",
          "For end users, this translates into more frequent update and compliance cycles for desktop and enterprise software.",
          "For enterprise deployments, security and IT teams increasingly focus on supply chain and signing integrity — not only model outputs."
        ],
        why:
          "As AI becomes part of critical workflows, trust shifts from 'is the model smart?' to 'is the software supply chain trustworthy?'. This impacts procurement, approvals, and go-live timelines.",
        links: [["OpenAI post", "https://openai.com/index/axios-developer-tool-compromise/"]]
      },
      {
        section: "Top Stories",
        priority: "High",
        title: "Anthropic and the Gates Foundation commit $200M over four years",
        dek:
          "A signal to track: top labs are building long-horizon partnerships for public-sector adoption and shared public goods, not just selling APIs.",
        details: [
          "Anthropic announced a four-year, $200M commitment with the Gates Foundation, including grants, Claude usage credits, and technical support.",
          "The partnership focuses on programs in global health, education, agriculture, and economic mobility, and highlights building reusable public goods.",
          "The Gates Foundation framing emphasizes country-led integration into existing systems, rather than isolated pilots.",
          "For model providers, this usually implies stronger requirements on evaluation, governance, privacy, and localization."
        ],
        why:
          "Public-sector and philanthropic deployments are high-constraint environments (auditability, sustainability, cost control). They tend to set the bar for what 'serious' AI delivery looks like.",
        links: [
          ["Anthropic announcement", "https://www.anthropic.com/news/gates-foundation-partnership"],
          ["Gates Foundation release", "https://www.gatesfoundation.org/ideas/media-center/press-releases/2026/05/ai-anthropic-partnership"]
        ]
      },
      {
        section: "Top Stories",
        priority: "Medium",
        title: "DeepSeek signals an API migration window (naming + deprecation schedule)",
        dek:
          "Operational changes like model naming, migration windows, and compatibility often matter more to real deployments than flashy launches.",
        details: [
          "DeepSeek’s API updates page states the legacy model names `deepseek-chat` and `deepseek-reasoner` will be discontinued in three months (by 2026-07-24).",
          "This is a classic engineering signal: clearer product-line segmentation, billing semantics, and long-term version strategy.",
          "For teams in production, it implies early compatibility testing, regression evals, and cost recalibration — not last-minute firefighting.",
          "If you’re running multi-model routing, these changes directly affect routing rules, caching, and evaluation baselines."
        ],
        why:
          "Leaderboards are loud; stability is expensive. The teams that operationalize versioning and migration discipline ship smoother AI systems.",
        links: [["DeepSeek API updates", "https://api-docs.deepseek.com/updates/"]]
      },
      {
        section: "Funding Watch",
        priority: "Capital signal",
        title: "Why a 10GW compute partnership is 'financing news' in disguise",
        dek:
          "This isn’t a traditional funding round announcement, but it changes how you should read the AI capital cycle: compute contracts and power/facilities are becoming hidden financing.",
        details: [
          "NVIDIA explicitly states an intent to invest up to $100B in OpenAI progressively as each gigawatt is deployed.",
          "The structure bundles supply, capital, and roadmap alignment into one long lock-in mechanism.",
          "The risk side is equally real: power and permitting, delivery timelines, single-supplier dependency, and demand volatility can all affect execution.",
          "For startups and mid-size firms, 'affordable compute' may become a more strategic limiter than 'which model to pick'."
        ],
        why:
          "If you track strategy or investing, treat power-and-compute contracts as first-class signals — they often front-run product and model cycles.",
        links: [
          ["NVIDIA release (PDF)", "https://nvidianews.nvidia.com/_gallery/download_pdf/68d173273d633288cb44040b/"]
        ]
      },
      {
        section: "Open Source",
        priority: "New",
        title: "Zero: an agent-first systems language from Vercel Labs",
        dek:
          "Zero brands itself as 'the programming language for agents' — explicit effects, predictable memory, and structured compiler output designed for reliability and debugging.",
        media: {
          type: "image",
          src: "https://opengraph.githubassets.com/daily-ai-atlas/vercel-labs/zero",
          alt: "Zero GitHub repository preview",
          title: "GitHub project preview",
          caption: "An experimental agent-first language with a toolchain mindset",
          href: "https://github.com/vercel-labs/zero"
        },
        details: [
          "The README describes Zero as a systems language for small native tools, explicit effects, predictable memory, and structured compiler output.",
          "It is explicitly experimental and not stable yet — more direction than production default.",
          "What’s interesting is the toolchain framing: agent tooling (skills/routes/graph/size) shows up as first-class concerns.",
          "If your team builds agents, the long-term pain points are observability, reproducibility, and side-effect control — languages like this are a direct bet on that future."
        ],
        why:
          "As agents move from 'write code' to 'change systems', reliable toolchains and safety boundaries start to matter again — expect more agent-native runtimes and sandboxes.",
        links: [
          ["GitHub", "https://github.com/vercel-labs/zero"],
          ["Website", "https://zerolang.ai/"]
        ]
      },
      {
        section: "AI Product Picks",
        priority: "Work deliverables",
        title: "Claude Design turns 'make a deck/one-pager' into a Claude workflow",
        dek:
          "Anthropic Labs’ Claude Design is aimed at producing polished visual deliverables (designs, prototypes, slides, one-pagers) through collaboration with Claude.",
        details: [
          "Anthropic positions it as a Labs product for creating polished visual work with Claude.",
          "For non-technical teams, the key shift is output format: from 'text answers' to 'reviewable deliverables' that teams can align on quickly.",
          "Ecommerce and growth teams can use this for campaign-page drafts, product storytelling pages, one-page strategy briefs, and internal updates.",
          "The practical limits to validate in real use: brand consistency, asset/IP handling, and how well it plays with existing design systems."
        ],
        why:
          "When you need something discussion-ready in 30 minutes, 'deliverable-first' tools can be more valuable than a smarter chat box.",
        links: [["Anthropic", "https://www.anthropic.com/news/introducing-claude-design"]]
      },
      {
        section: "AI Product Picks",
        priority: "Safety note",
        title: "Before you ship an agent, design permissions like a product",
        dek:
          "If an agent can read/write real systems, it’s not a chatbot — it’s an automated employee. Your default architecture needs guardrails.",
        details: [
          "Start with least privilege plus audit logs, and keep high-risk actions (payments, pricing, bulk messaging, fulfillment) behind explicit confirmations.",
          "Use sandboxes and test accounts before expanding access to production systems.",
          "Treat supply chain risk (npm deps, CI/CD permissions, signing certificates, secret rotation) as part of the product risk model.",
          "Operationally, this is where many AI deployments actually fail: not model quality, but governance and control."
        ],
        why:
          "The earlier you bake permission design into the product, the less likely you get stuck in security/compliance purgatory at scale.",
        links: [["OpenAI post", "https://openai.com/index/axios-developer-tool-compromise/"]]
      },
      {
        section: "Research Reports",
        priority: "Save",
        title: "Stanford AI Index 2026: industry-led innovation, mainstream organizational adoption",
        dek:
          "If you want a reusable macro baseline for AI strategy, the AI Index remains one of the best 'annual anchors'.",
        details: [
          {
            summary:
              "AI Index 2026: industry produced over 90% of notable frontier models in 2025; organizational AI adoption reached 88%.",
            expanded:
              "The value is not picking winners — it’s freezing macro shifts into reusable reference points: innovation moving from academia to industry, iteration speed becoming capital-and-infrastructure driven, and AI adoption becoming normal in organizations. For strategy roles, it’s a quarterly compass: what’s commoditizing, what’s still bottlenecked by compute/data/talent, and whether regulation and education are keeping up.",
            quote: "“Industry produced over 90% of notable frontier models in 2025.”",
            chart: ["Report hub / PDF", "https://hai.stanford.edu/ai-index/2026-ai-index-report"]
          }
        ],
        why:
          "When you need to justify investment to non-technical leaders, this gives you credible macro facts and structure.",
        links: [
          ["Report hub", "https://hai.stanford.edu/ai-index/2026-ai-index-report"],
          ["PDF", "https://hai.stanford.edu/assets/files/ai_index_report_2026.pdf"]
        ]
      },
      {
        section: "Research Reports",
        priority: "Compare",
        title: "OECD.AI Index 2026: country-level indicators you can actually compare",
        dek:
          "For cross-border work, a comparable indicator framework beats vibes. OECD’s index is useful for quick ecosystem reality checks.",
        details: [
          {
            summary:
              "OECD.AI Index 2026: organizes national AI indicators across research, industry, talent, and policy dimensions.",
            expanded:
              "This report is 'comparable by design' — it pushes conversations from slogans into measurable indicators. For market entry, partnerships, or global hiring, it helps you quickly gauge the maturity and constraints of an AI ecosystem.",
            quote: "“THE OECD.AI INDEX © OECD 2026.”",
            chart: ["PDF", "https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/02/oecd-ai-observatory-index_8f5fa0f2/32c01014-en.pdf"]
          }
        ],
        why:
          "As AI becomes industrial policy, you want a consistent lens to compare regions beyond US/China.",
        links: [["OECD PDF", "https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/02/oecd-ai-observatory-index_8f5fa0f2/32c01014-en.pdf"]]
      },
      {
        section: "AI Term",
        priority: "Learn",
        title: "AI Factory",
        dek:
          "One-liner: an AI Factory is an end-to-end system that continuously 'produces intelligence' by packaging compute, data, networking, ops, and software — not just a pile of servers.",
        details: [
          "A bit deeper: the bottleneck is throughput and reliability across power/cooling, networking, storage, scheduling, train/infer stacks, failure recovery, and cost controls.",
          "Why it matters today: when partnerships are framed in 10GW units, 'buying GPUs' becomes the wrong mental model — it’s an energy-and-delivery program.",
          "Common misconception: only hyperscalers need this. Any team doing multi-model routing, realtime inference, or strict latency/cost control is building a smaller AI factory.",
          "How to use at work: move earlier than 'which model' toward compute budget, latency targets, data compliance, observability, rollout plans, and incident playbooks."
        ],
        why:
          "This helps you talk like a systems builder (budget + roadmap) rather than a tool picker.",
        links: [
          ["NVIDIA release (PDF)", "https://nvidianews.nvidia.com/_gallery/download_pdf/68d173273d633288cb44040b/"]
        ]
      },
      {
        section: "Learning",
        priority: "Bookmark",
        title: "Read OpenAI’s security response once — it’s a great internal-communication template",
        dek:
          "Not security gossip: this is a clean example of how to define scope, actions, and next steps without overselling risk.",
        details: [
          "Look for three things: how they define scope (what was and wasn’t impacted), what actions are verifiable (forensics, certificate rotation, new builds), and how ecosystem coordination works (Apple).",
          "Treat it as a 'business-readable security note' template you can reuse in your own org.",
          "For AI deployment leads, this is practical language for explaining approvals, key rotation, environment separation, and rollout discipline.",
          "Then bring it back to your project: do you have a supply-chain risk checklist?"
        ],
        why:
          "The better you can explain security and compliance, the less your AI project gets stuck at PoC.",
        links: [["OpenAI post", "https://openai.com/index/axios-developer-tool-compromise/"]]
      },
      {
        section: "Watchlist",
        priority: "Signal",
        title: "How does '10GW' translate into contracts and delivery milestones?",
        dek:
          "Watch for (1) public data-center/power-site progress, and (2) whether Rubin + software co-optimization becomes a replicable playbook.",
        details: [
          "Facilities side: do we see site announcements, power agreements, permitting timelines, or named partners?",
          "Platform side: delivery schedule for Vera Rubin, networking stack choices, and any public software-stack details (training/inference/scheduling).",
          "Market side: does the 'compute + investment' structure become a template replicated across other labs and cloud vendors?",
          "Career side: this kind of program expands roles that blend infra delivery, platform product, and governance."
        ],
        why:
          "Iteration speed is increasingly limited by delivery execution, not just research ideas.",
        links: [
          ["NVIDIA release (PDF)", "https://nvidianews.nvidia.com/_gallery/download_pdf/68d173273d633288cb44040b/"]
        ]
      },
      {
        section: "Career Radar",
        priority: "Fit",
        title: "Two public roles worth scanning (HK / Shenzhen-adjacent)",
        dek:
          "Target profile: strategy + AI, familiar with cross-border ecommerce or retail platforms, focused on execution and growth/ops/product transformation.",
        details: [
          "Zurich Insurance: Head of Data and AI (location listing includes Hong Kong and Shenzhen Futian). Keywords: enterprise AI enablement, embedding AI into distribution/operations/claims/underwriting, governance and compliance.",
          "BTSE: AI Business Strategy Manager (Hong Kong / remote). Keywords: AI-first transformation, agentic workflows, MCP/tooling, ROI governance.",
          "Filter tip: prioritize roles that explicitly own adoption, KPIs, and cross-functional delivery — not just 'AI research'.",
          "Interview prep: bring 2–3 cases in the format 'business problem → AI approach → delivery → metrics → risk/governance'."
        ],
        why:
          "These roles don’t reward 'knowing models'; they reward getting AI into production with budget, governance, and measurable outcomes.",
        links: [
          ["Zurich role (Indeed)", "https://hk.indeed.com/viewjob?jk=3e8ed0b4cee997bd"],
          ["BTSE role (Lever)", "https://jobs.lever.co/BTSE/2bab2e38-413b-4fea-96b7-101dd6adda23"]
        ]
      }
    ]
  },
  {
    date: "2026-05-15",
    title: "AI Daily Atlas",
    meta: "May 15, 2026",
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
          type: "video",
          embed: "https://www.youtube.com/embed/luU57hMhkak",
          src: "https://i.ytimg.com/vi/luU57hMhkak/hqdefault.jpg",
          alt: "Figure robot livestream thumbnail",
          title: "Robot shift video",
          caption: "Figure's 8-hour package-sorting robot livestream / replay",
          href: "https://www.youtube.com/watch?v=luU57hMhkak",
          cta: "Open video"
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
        priority: "Official update",
        title: "OpenAI updated realtime voice, default ChatGPT, and research models",
        dek:
          "OpenAI’s recent signal is not one isolated launch. It is a stack of platform upgrades: stronger realtime voice APIs, GPT-5.5 Instant as a smarter default ChatGPT experience, plus research releases such as Privacy Filter and GPT-Rosalind.",
        details: [
          "Voice: OpenAI introduced GPT-Realtime-2, GPT-Realtime-Translate, and GPT-Realtime-Whisper, pointing toward apps that can reason, translate, and transcribe while people speak.",
          "Default ChatGPT: GPT-5.5 Instant is replacing GPT-5.3 Instant as a smarter, more accurate, more personalized default model; OpenAI says it produced 52.5% fewer hallucinated claims on high-stakes prompts than GPT-5.3 Instant.",
          "Privacy infrastructure: OpenAI Privacy Filter is an open-weight model for detecting and redacting PII in text, with 1.5B total parameters and around 50M active parameters.",
          "Scientific model: GPT-Rosalind is a life-sciences research model for evidence synthesis, hypothesis generation, experiment planning, and biological reasoning, available to qualified customers through trusted access.",
          "Taken together, OpenAI is advancing three layers at once: default consumer experience, realtime developer APIs, and domain-specific enterprise/research models."
        ],
        why:
          "This is more important than a single product release. It shows model labs packaging intelligence into different delivery layers: better defaults for users, realtime APIs for developers, and specialized models or privacy components for regulated organizations. For commerce, this points toward realtime support, live translation, voice shopping, compliance workflows, and vertical agents.",
        links: [
          ["OpenAI voice API update", "https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/"],
          ["GPT-5.5 Instant", "https://openai.com/index/gpt-5-5-instant/"],
          ["GPT-5.5", "https://openai.com/index/introducing-gpt-5-5/"],
          ["OpenAI Privacy Filter", "https://openai.com/index/introducing-openai-privacy-filter/"],
          ["GPT-Rosalind", "https://openai.com/index/introducing-gpt-rosalind/"]
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
        priority: "Trend product",
        title: "Anuma: one subscription, many models, and portable AI memory",
        dek:
          "Anuma puts ChatGPT, Claude, Gemini, Grok, DeepSeek, Kimi, Llama, Mistral, and more into one interface, with a user-owned encrypted memory layer that travels across models.",
        details: [
          "Anuma positions itself as a privacy-focused all-in-one AI platform built around the idea of one memory, every model, always private.",
          "It supports multi-model access across ChatGPT, Claude, Gemini, Grok, DeepSeek, Kimi, Llama, Mistral, and more, reducing the need to copy context between apps.",
          "The memory layer is the key product idea: Anuma says users can add, edit, or delete memory, and that memory works across both open- and closed-source models.",
          "Council Mode lets the same prompt run through multiple models at once, so users can compare tone, accuracy, and depth in one view.",
          "The open questions are privacy guarantees, provider-side retention policies, model cost, and whether portable memory feels genuinely useful in daily workflows."
        ],
        why:
          "Anuma is not just another chatbot wrapper. It represents a direction worth tracking: personal AI operating systems and cross-model context layers. Users may eventually care less about which model is underneath and more about whether their preferences, work context, and memory can follow them.",
        links: [
          ["Anuma", "https://www.anuma.ai/"],
          ["Anuma Memory", "https://www.anuma.ai/ai-memory"],
          ["Multi-model access", "https://www.anuma.ai/multiple-ai-models"],
          ["Anuma launch", "https://www.anuma.ai/blog/anuma-launch"]
        ]
      },
      {
        section: "AI Product Picks",
        priority: "Knowledge management",
        title: "Recall turns scattered reading into a conversational personal knowledge base",
        dek:
          "Recall is more than a bookmark manager: it saves, summarizes, tags, connects, and lets you chat with articles, videos, PDFs, notes, and web pages.",
        details: [
          "Recall positions itself as an AI knowledge base built around one-click saving, summarization, organization, and retrieval.",
          "It supports many content types including web pages, YouTube, podcasts, PDFs, books, and notes, making it relevant for daily AI news, reports, product pages, and long-form reading.",
          "Its interesting edge is connection: Recall links new saves to existing knowledge and can resurface related material as you browse.",
          "Users can chat with their knowledge base and choose across AI models, which makes it feel closer to a research second brain than a simple reading queue.",
          "If AI Daily Atlas evolves into a personal archive, products like Recall are useful references: the goal is not just to consume signals, but to turn them into reusable judgment."
        ],
        why:
          "Recall fits your information workflow: you want fast AI signal tracking, but the real value comes when today’s links become a searchable long-term memory for company, product, and market themes.",
        links: [
          ["Recall", "https://www.recall.it/"],
          ["Recall Docs", "https://docs.recall.it/"]
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
        priority: "Research workbench",
        title: "Liminary is an AI research workbench for consultants and strategists",
        dek:
          "Liminary is explicitly built for consultants, strategists, and researchers who need high-stakes recommendations grounded in real research.",
        details: [
          "Liminary’s homepage describes it as AI for consultants and strategists making high-stakes recommendations grounded in real research, which is much more vertical than a generic chatbot.",
          "It focuses on the research-to-deliverable workflow: save articles, reports, PDFs, AI chats, and videos, annotate while reading, and let an agent monitor new information for a client or project.",
          "Source traceability is central: Liminary says every insight traces back to a source, every source is one click away, and user data is not used to train AI models.",
          "The product also tries to compound past work by surfacing relevant research, competitive analyses, or project notes when users start something new.",
          "The broader signal: AI products are moving from 'summarize this' toward 'help me form a defensible recommendation,' especially for consulting, investing, strategy, and market research."
        ],
        why:
          "This maps tightly to your background: consulting methods, industry research, cross-border commerce strategy, and AI signal tracking all depend on turning scattered evidence into defensible judgment.",
        links: [
          ["Liminary", "https://liminary.io/"],
          ["Chrome Extension", "https://chromewebstore.google.com/detail/liminary/bbgbkegkcbgpbmnjomngmfadekddjlpp"]
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
    title: "AI Daily Atlas",
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
    en: "英",
    dateSearch: "搜索归档",
    archiveTags: "归档标签",
    topicLabel: "主题聚合",
    contentSearch: "搜索当前日报",
    refreshNote: "每天 7:30 刷新最新 AI 消息",
    statusReady: "今日已更新",
    statusWaiting: "等待今日 7:30 刷新",
    statusArchive: "历史归档",
    topicAll: "全部主题",
    sourceTrustOfficial: "官方确认",
    sourceTrustMulti: "多源交叉",
    sourceTrustCommunity: "社区热度",
    sourceTrustInstitution: "机构报告",
    sourceTrustCaution: "需继续验证",
    termLabel: "今日 AI 词条",
    termExpand: "展开核心解释",
    sourceMethodTitle: "信息来源",
    sourceMethodText: "完整信息源按类型分层使用：日报和媒体负责发现信号，官方博客、论文、GitHub、机构报告、招聘页负责交叉确认。",
    datePlaceholder: "搜索日期、公司、关键词",
    contentPlaceholder: "例如 DeepSeek、机器人、投融资、香港岗位",
    noDates: "没有匹配的日期。",
    noContent: "没有找到匹配内容。换个关键词试试。",
    copyDone: "已复制"
  },
  en: {
    all: "All",
    language: "Language",
    zh: "CN",
    en: "EN",
    dateSearch: "Search archive",
    archiveTags: "Archive tags",
    topicLabel: "Topic clusters",
    contentSearch: "Search current issue",
    refreshNote: "Latest AI signals refresh daily at 7:30",
    statusReady: "Updated today",
    statusWaiting: "Waiting for the 7:30 refresh",
    statusArchive: "Historical issue",
    topicAll: "All topics",
    sourceTrustOfficial: "Official source",
    sourceTrustMulti: "Cross-checked",
    sourceTrustCommunity: "Community signal",
    sourceTrustInstitution: "Institutional report",
    sourceTrustCaution: "Needs verification",
    termLabel: "AI Term of the Day",
    termExpand: "Read the quick explainer",
    sourceMethodTitle: "Sources",
    sourceMethodText: "Sources are layered by purpose: newsletters and media surface signals, while official posts, papers, GitHub, reports, and hiring pages are used for verification.",
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
let activeTopic = "all";
let calendarMonth = activeDate.slice(0, 7);
let contentQuery = "";
let dateQuery = "";

const dateList = document.querySelector("#dateList");
const dateSearch = document.querySelector("#dateSearch");
const archiveTags = document.querySelector("#archiveTags");
const topicTags = document.querySelector("#topicTags");
const languageSwitch = document.querySelector("#languageSwitch");
const dateRail = document.querySelector(".date-rail");
const dateSearchLabel = document.querySelector("#dateSearchLabel");
const archiveTagsLabel = document.querySelector("#archiveTagsLabel");
const topicLabel = document.querySelector("#topicLabel");
const refreshNote = document.querySelector("#refreshNote");
const sectionTabs = document.querySelector("#sectionTabs");
const contentSearch = document.querySelector("#contentSearch");
const contentSearchLabel = document.querySelector("#contentSearchLabel");
const contentGrid = document.querySelector("#contentGrid");
const issueMeta = document.querySelector("#issueMeta");
const termSpotlight = document.querySelector("#termSpotlight");
const sourceMethod = document.querySelector("#sourceMethod");
const sourceApproachMethod = document.querySelector("#sourceApproachMethod");
const sourceMethodSummary = document.querySelector("#sourceMethodSummary");
const sourceMethodText = document.querySelector("#sourceMethodText");
const sourceMethodLinks = document.querySelector("#sourceMethodLinks");
const sourceApproachSummary = document.querySelector("#sourceApproachSummary");
const sourceApproachPanel = document.querySelector("#sourceApproachPanel");
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

function getTopicLabel(topic) {
  if (topic.id === "all") return t("topicAll");
  return topic[currentLang];
}

function getTopicById(id) {
  return topicDefinitions.find((topic) => topic.id === id);
}

function flattenDetails(details = []) {
  return details.flatMap((detail) => {
    if (typeof detail === "string") return [detail];
    return [detail.summary, detail.expanded, detail.quote, detail.chart && detail.chart[0], detail.chart && detail.chart[1]];
  });
}

function getItemText(item) {
  const mediaText = item.media
    ? [item.media.title, item.media.caption, item.media.alt, item.media.href, item.media.cta]
    : [];
  return [
    item.section,
    item.priority,
    item.title,
    item.dek,
    item.why,
    ...flattenDetails(item.details),
    ...mediaText,
    ...(item.links || []).flat()
  ]
    .map(normalize)
    .join(" ");
}

function itemMatchesTopic(item, topicId = activeTopic) {
  if (topicId === "all") return true;
  const topic = getTopicById(topicId);
  if (!topic) return true;
  const haystack = getItemText(item);
  return topic.terms.some((term) => haystack.includes(normalize(term)));
}

function issueMatchesTopic(issue) {
  if (activeTopic === "all") return true;
  return issue.items.some((item) => itemMatchesTopic(item));
}

const sourceGroups = [
  {
    zh: "AI 日报 / 媒体雷达",
    en: "AI newsletters / media radar",
    links: [
      ["AI Valley", "https://www.theaivalley.com/c/about"],
      ["Ben's Bites", "https://bensbites.co/"],
      ["TLDR AI", "https://tldr.tech/ai"],
      ["The Batch", "https://www.deeplearning.ai/thebatch/"],
      ["Import AI", "https://jack-clark.net/"],
      ["The Rundown AI", "https://www.therundown.ai/"],
      ["Latent Space", "https://www.latent.space/"],
      ["The Neuron", "https://www.theneurondaily.com/"],
      ["Superhuman AI", "https://www.superhuman.ai/"],
      ["钛媒体 AI", "https://www.tmtpost.com/"],
      ["机器之心", "https://www.jiqizhixin.com/"]
    ]
  },
  {
    zh: "公司官方 / 产品发布",
    en: "Official company / product updates",
    links: [
      ["OpenAI News", "https://openai.com/news/"],
      ["OpenAI Research", "https://openai.com/research/"],
      ["Anthropic News", "https://www.anthropic.com/news"],
      ["Google DeepMind", "https://deepmind.google/discover/blog/"],
      ["Google AI Blog", "https://ai.googleblog.com/"],
      ["xAI News", "https://x.ai/news"],
      ["Meta AI Blog", "https://ai.meta.com/blog/"],
      ["Microsoft AI Blog", "https://blogs.microsoft.com/ai/"],
      ["NVIDIA Blog", "https://blogs.nvidia.com/"],
      ["阿里云通义", "https://tongyi.aliyun.com/"],
      ["智谱 AI", "https://www.zhipuai.cn/"],
      ["MiniMax", "https://www.minimax.io/"]
    ]
  },
  {
    zh: "研究论文 / 机构报告",
    en: "Research papers / institutional reports",
    links: [
      ["Stanford AI Index", "https://hai.stanford.edu/ai-index/2026-ai-index-report"],
      ["State of AI Report", "https://www.stateof.ai/"],
      ["arXiv cs.AI", "https://arxiv.org/list/cs.AI/recent"],
      ["arXiv cs.CL", "https://arxiv.org/list/cs.CL/recent"],
      ["Papers with Code", "https://paperswithcode.com/"],
      ["McKinsey AI", "https://www.mckinsey.com/capabilities/quantumblack/our-insights"],
      ["BCG AI", "https://www.bcg.com/capabilities/artificial-intelligence"],
      ["KPMG AI", "https://kpmg.com/xx/en/what-we-do/services/advisory/ai.html"],
      ["Deloitte AI Institute", "https://www.deloitte.com/global/en/our-thinking/insights/topics/analytics/artificial-intelligence.html"]
    ]
  },
  {
    zh: "开源社区 / 开发者信号",
    en: "Open source / developer signals",
    links: [
      ["GitHub Trending", "https://github.com/trending"],
      ["Hugging Face Papers", "https://huggingface.co/papers"],
      ["Hugging Face Blog", "https://huggingface.co/blog"],
      ["Hacker News", "https://news.ycombinator.com/"],
      ["Replicate Blog", "https://replicate.com/blog"],
      ["LangChain Blog", "https://blog.langchain.com/"],
      ["LlamaIndex Blog", "https://www.llamaindex.ai/blog"]
    ]
  },
  {
    zh: "AI 产品发现",
    en: "AI product discovery",
    links: [
      ["Product Hunt AI", "https://www.producthunt.com/categories/artificial-intelligence"],
      ["Futurepedia", "https://www.futurepedia.io/"],
      ["There's An AI For That", "https://theresanaiforthat.com/"],
      ["AITopTools", "https://aitoptools.com/"],
      ["Toolify", "https://www.toolify.ai/"],
      ["Recall", "https://www.recall.it/"],
      ["Liminary", "https://liminary.io/"]
    ]
  },
  {
    zh: "招聘 / 职业雷达",
    en: "Hiring / career radar",
    links: [
      ["LinkedIn Jobs", "https://www.linkedin.com/jobs/"],
      ["Wellfound", "https://wellfound.com/jobs"],
      ["YC Work at a Startup", "https://www.ycombinator.com/jobs"],
      ["a16z Jobs", "https://jobs.a16z.com/"],
      ["Boss 直聘", "https://www.zhipin.com/"],
      ["猎聘", "https://www.liepin.com/"],
      ["拉勾", "https://www.lagou.com/"]
    ]
  },
  {
    zh: "社交平台 / 实时讨论",
    en: "Social platforms / real-time discussion",
    links: [
      ["X / Twitter", "https://x.com/"],
      ["Reddit Machine Learning", "https://www.reddit.com/r/MachineLearning/"],
      ["Reddit LocalLLaMA", "https://www.reddit.com/r/LocalLLaMA/"]
    ]
  }
];

const sourceApproach = {
  zh: [
    ["先广后窄", "先用日报、媒体、社交平台和产品榜单做雷达，快速发现新公司、新产品、新融资和新开源项目。"],
    ["回到一手来源", "有价值的线索必须回到公司官网、官方博客、论文、GitHub、机构报告或招聘页确认，避免只搬运二手摘要。"],
    ["按读者价值筛选", "优先保留和战略、产品、商业化、跨境电商、AI 工作流相关的信息，不追求把所有新闻都塞进来。"],
    ["补充背景和影响", "重要新闻会补公司背景、事件细节、为什么重要，以及它可能影响哪些行业、岗位或工作方式。"],
    ["标记不确定性", "融资传闻、社交平台爆料和早期产品会谨慎处理，能确认的写确认，仍需观察的明确标注。"]
  ],
  en: [
    ["Wide scan first", "Use newsletters, media, social platforms, and product directories as radar to spot new companies, launches, funding, and open-source projects."],
    ["Return to primary sources", "Important signals are checked against company sites, official blogs, papers, GitHub repositories, reports, or hiring pages instead of relying only on second-hand summaries."],
    ["Filter for reader value", "Prioritize items relevant to strategy, product, commercialization, cross-border commerce, and AI workflows rather than covering every AI headline."],
    ["Add context and implications", "For important stories, add company background, event details, why it matters, and which industries, roles, or workflows may be affected."],
    ["Label uncertainty", "Funding rumors, social posts, and early products are treated carefully: confirmed facts are separated from items that still need observation."]
  ]
};

const topicDefinitions = [
  {
    id: "models-platforms",
    zh: "模型/API",
    en: "Models / APIs",
    terms: ["模型", "API", "OpenAI", "GPT-5.5", "Realtime", "语音", "Privacy Filter", "Rosalind", "ChatGPT", "Models", "Platforms"]
  },
  {
    id: "robotics",
    zh: "机器人",
    en: "Robotics",
    terms: ["机器人", "Figure", "robot", "robotics", "humanoid", "warehouse", "factory", "物流", "制造"]
  },
  {
    id: "products",
    zh: "AI产品",
    en: "AI products",
    terms: ["AI产品", "product", "Product Hunt", "Anuma", "Recall", "Liminary", "memory", "AI OS", "knowledge base", "research", "Magic Patterns", "tool", "原型"]
  },
  {
    id: "funding",
    zh: "投融资",
    en: "Funding",
    terms: ["投融资", "融资", "估值", "投资", "Funding", "raised", "valuation", "round", "capital"]
  },
  {
    id: "open-source",
    zh: "开源/Agent",
    en: "Open source / agents",
    terms: ["开源", "GitHub", "Agent", "agent", "Open Source", "RAG", "workflow", "MCP", "Hugging Face"]
  },
  {
    id: "reports",
    zh: "机构报告",
    en: "Reports",
    terms: ["机构报告", "报告", "Stanford", "BCG", "McKinsey", "KPMG", "Research Reports", "AI Index"]
  },
  {
    id: "career",
    zh: "职业机会",
    en: "Career",
    terms: ["职业雷达", "岗位", "career", "jobs", "AI Strategy", "Transformation", "Product Strategy", "skill"]
  }
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
  const hasInlineVideo = media.type === "video" && media.embed;
  const shell = document.createElement(hasInlineVideo || !media.href ? "div" : "a");
  shell.className = `story-media is-${media.type || "image"}`;
  if (media.href) {
    shell.dataset.href = media.href;
    if (shell.tagName === "A") {
      shell.href = media.href;
      shell.target = "_self";
      shell.rel = "noopener";
      shell.setAttribute("aria-label", media.title || item.title);
    }
  }

  if (hasInlineVideo) {
    const frame = document.createElement("iframe");
    frame.src = media.embed;
    frame.title = media.title || item.title;
    frame.loading = "lazy";
    frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.allowFullscreen = true;
    shell.appendChild(frame);
  } else {
    const image = document.createElement("img");
    image.src = media.src;
    image.alt = media.alt || item.title;
    image.loading = "lazy";
    image.decoding = "async";
    image.addEventListener("error", () => {
      shell.classList.add("is-broken");
      image.remove();
    });
    shell.appendChild(image);
  }

  const fallback = document.createElement("div");
  fallback.className = "media-fallback";
  const fallbackTitle = document.createElement("span");
  fallbackTitle.className = "media-title";
  fallbackTitle.textContent = media.title || getSectionCode(item.section);
  const fallbackCaption = document.createElement("span");
  fallbackCaption.className = "media-caption";
  fallbackCaption.textContent = media.caption || "";
  fallback.append(fallbackTitle, fallbackCaption);
  shell.appendChild(fallback);

  if (!hasInlineVideo) {
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
  }

  if (media.type === "video" || media.cta || (hasInlineVideo && media.href)) {
    const badge = document.createElement("span");
    badge.className = "media-badge";
    badge.textContent = media.cta || (currentLang === "en" ? "Open demo" : "打开演示");
    if (hasInlineVideo && media.href) {
      badge.setAttribute("role", "link");
      badge.tabIndex = 0;
      badge.addEventListener("click", () => {
        window.location.href = media.href;
      });
      badge.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          window.location.href = media.href;
        }
      });
    }
    shell.appendChild(badge);
  }

  return shell;
}

function itemMatches(item, query) {
  if (!query) return true;
  return getItemText(item).includes(normalize(query));
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

function renderTopicTags() {
  topicTags.innerHTML = "";
  [{ id: "all" }, ...topicDefinitions].forEach((topic) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `topic-tag-button${topic.id === activeTopic ? " is-active" : ""}`;
    button.textContent = getTopicLabel(topic);
    button.addEventListener("click", () => {
      activeTopic = topic.id;
      const visibleIssues = getFilteredIssues();
      if (!visibleIssues.some((issue) => issue.date === activeDate) && visibleIssues[0]) {
        activeDate = visibleIssues[0].date;
        calendarMonth = activeDate.slice(0, 7);
      }
      activeArchiveTag = allLabel();
      activeSection = allLabel();
      contentQuery = "";
      contentSearch.value = "";
      render();
    });
    topicTags.appendChild(button);
  });
}

function getFilteredIssues() {
  return getArchive().filter((issue) => {
    const issueText = [issue.date, issue.title, issue.meta, issue.headline, issue.summary, ...issue.items.map(getItemText)].join(" ");
    const queryMatch = normalize(issueText).includes(normalize(dateQuery));
    return queryMatch && issueMatchesArchiveTag(issue) && issueMatchesTopic(issue);
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
  const visibleItems = issue.items.filter((item) => !isTermSection(item.section) && itemMatchesTopic(item));
  const available = new Set(visibleItems.map((item) => item.section));
  if (activeSection !== allLabel() && !available.has(activeSection)) {
    activeSection = allLabel();
  }
  sectionOrders[currentLang]
    .filter((section) => section === allLabel() || available.has(section))
    .forEach((section) => {
      const count = section === allLabel()
        ? visibleItems.length
        : visibleItems.filter((item) => item.section === section).length;
      const button = document.createElement("button");
      button.type = "button";
      button.className = `tab-button${section === activeSection ? " is-active" : ""}`;
      button.dataset.sectionKey = getSectionKey(section);
      const label = document.createElement("span");
      label.textContent = section;
      const badge = document.createElement("span");
      badge.className = "tab-count";
      badge.textContent = String(count);
      button.append(label, badge);
      button.addEventListener("click", () => {
        activeSection = section;
        renderContent();
        renderTabs(getIssue());
      });
      sectionTabs.appendChild(button);
    });
}

function getTodayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function getRefreshState(issue) {
  const now = new Date();
  const refreshTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 30, 0);
  const today = getTodayKey();
  if (issue.date === today && now >= refreshTime) {
    return { label: t("statusReady"), tone: "ready" };
  }
  if (issue.date === today) {
    return { label: t("statusWaiting"), tone: "waiting" };
  }
  return { label: t("statusArchive"), tone: "archive" };
}

function getPrimaryLinks(issue) {
  const candidates = [];
  issue.items.forEach((item) => {
    if (isTermSection(item.section) || getSectionKey(item.section) === "career") return;
    (item.links || []).forEach(([label, href], index) => {
      const text = normalize(`${label} ${href}`);
      let score = 0;
      if (index === 0) score += 2;
      if (/official|官方|openai|google|deepmind|figure|github|producthunt|stanford|bcg|mckinsey|kpmg|pdf/.test(text)) score += 4;
      if (/ai valley|tldr|trendhunt|tmtpost|钛媒体/.test(text)) score += 1;
      if (getSectionKey(item.section) === "report") score += 2;
      if (getSectionKey(item.section) === "product") score += 1;
      candidates.push({ label, href, item, score });
    });
  });
  const seen = new Set();
  return candidates
    .sort((a, b) => b.score - a.score)
    .filter((link) => {
      if (seen.has(link.href)) return false;
      seen.add(link.href);
      return true;
    })
    .slice(0, 3);
}

function renderRefreshNote(issue) {
  const state = getRefreshState(issue);
  refreshNote.dataset.state = state.tone;
  refreshNote.textContent = `${state.label}｜${t("refreshNote")}`;
}

function getTrustSignals(item) {
  const text = getItemText(item);
  const signals = [];
  if (getSectionKey(item.section) === "report") signals.push(t("sourceTrustInstitution"));
  if (/官方|official|openai|google|deepmind|figure\.ai|github\.com|producthunt|ltx\.io|magicpatterns|stanford|bcg|mckinsey|kpmg/.test(text)) {
    signals.push(t("sourceTrustOfficial"));
  }
  if ((item.links || []).length >= 3) signals.push(t("sourceTrustMulti"));
  if (/github|product hunt|hacker news|hugging face|community|trending|开源/.test(text)) signals.push(t("sourceTrustCommunity"));
  if (/未确认|传闻|ai 生成|ai-generated|needs watching|caution|风险提示/.test(text)) signals.push(t("sourceTrustCaution"));
  return Array.from(new Set(signals)).slice(0, 3);
}

function renderTrustSignals(node, item) {
  const signals = getTrustSignals(item);
  if (!signals.length) return;
  const row = document.createElement("div");
  row.className = "trust-row";
  signals.forEach((signal) => {
    const badge = document.createElement("span");
    badge.textContent = signal;
    row.appendChild(badge);
  });
  node.querySelector(".link-row").before(row);
}

function renderContent() {
  const issue = getIssue();
  const highlightedLinks = new Set(getPrimaryLinks(issue).map((link) => link.href));
  contentGrid.innerHTML = "";
  const filtered = issue.items.filter((item) => {
    if (isTermSection(item.section)) return false;
    const sectionMatch = activeSection === allLabel() || item.section === activeSection;
    return sectionMatch && itemMatchesTopic(item) && itemMatches(item, contentQuery);
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
    renderTrustSignals(node, item);
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
      if (highlightedLinks.has(href)) {
        link.className = "is-highlighted";
        link.dataset.highlightLabel = currentLang === "en" ? "Pick" : "精选";
      }
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
  sourceApproachSummary.textContent = currentLang === "en" ? "Approach" : "搜集方法论";
  sourceMethodText.textContent = t("sourceMethodText");
  sourceMethodLinks.innerHTML = "";
  sourceApproachPanel.innerHTML = "";
  sourceGroups.forEach((group) => {
    const sourceGroup = document.createElement("div");
    sourceGroup.className = "source-link-group";

    const heading = document.createElement("strong");
    heading.textContent = currentLang === "en" ? group.en : group.zh;
    sourceGroup.appendChild(heading);

    const links = document.createElement("div");
    links.className = "source-link-list";

    group.links.forEach(([label, href]) => {
      const link = document.createElement("a");
      link.href = href;
      link.textContent = label;
      links.appendChild(link);
    });

    sourceGroup.appendChild(links);
    sourceMethodLinks.appendChild(sourceGroup);
  });

  const approachList = document.createElement("ol");
  approachList.className = "source-approach-list";
  sourceApproach[currentLang].forEach(([title, body]) => {
    const item = document.createElement("li");
    const itemTitle = document.createElement("span");
    itemTitle.textContent = title;
    const itemBody = document.createElement("p");
    itemBody.textContent = body;
    item.append(itemTitle, itemBody);
    approachList.appendChild(item);
  });
  sourceApproachPanel.appendChild(approachList);
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
  languageSwitch.setAttribute("aria-label", t("language"));
  refreshNote.textContent = t("refreshNote");
  dateSearchLabel.textContent = t("dateSearch");
  archiveTagsLabel.textContent = t("archiveTags");
  topicLabel.textContent = t("topicLabel");
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
  renderTopicTags();
  renderDates();
  renderRefreshNote(issue);
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
  renderTopicTags();
  renderDates();
  renderHeader(getIssue());
  renderTermSpotlight(getIssue());
  renderRefreshNote(getIssue());
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

function updateRailScrollState() {
  dateRail.classList.toggle("is-source-open", sourceMethod.open || sourceApproachMethod.open);
}

sourceMethod.addEventListener("toggle", updateRailScrollState);
sourceApproachMethod.addEventListener("toggle", updateRailScrollState);

render();
