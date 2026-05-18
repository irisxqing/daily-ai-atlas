const archiveZh = [
                              {
    "date": "2026-05-18",
    "title": "AI Daily Atlas",
    "meta": "2026年5月18日",
    "headline": "AI 竞争正在从模型能力转向真实产品和产业控制点",
    "summary": "今天的主线是 AI 公司正在把技术能力变成更稳定的产品入口和产业控制点。值得关注的不只是模型强弱，而是谁能把能力沉淀为持续使用、商业化和行业影响力。",
    "tags": [
      "模型平台",
      "AI产品",
      "投融资",
      "开源",
      "深度阅读",
      "机构报告"
    ],
    "items": [
      {
        "section": "今日重点",
        "priority": "high",
        "title": "315曝光AI大模型“投毒”黑产，39.9元篡改AI答案",
        "dek": "央视315晚会揭露了一项低成本操纵AI输出的黑产，用户只需支付39.9元即可让AI生成特定误导性答案，引发对模型安全与监管的紧急讨论。",
        "details": [
          "2026年央视315晚会曝光了AI大模型“投毒”黑产链条。报道指出，不法分子利用低至39.9元的服务，通过向模型注入对抗性提示或污染训练数据，系统性地篡改AI回答内容。这类操作无需高级技术，普通用户即可通过暗箱指令让AI生成偏向性或虚假信息，直接影响搜索、客服、内容生成等场景的可靠性。",
          "黑产运作模式包括两种路径：一是利用模型未公开的漏洞，通过精心设计的“越狱”提示词覆盖原有安全限制；二是通过大量提交虚假标注数据，在持续微调中“毒害”模型对特定话题（如商品评价、企业声誉）的判断。这种低成本攻击使个人或小团体也能规模化制造虚假信息，严重侵蚀用户对AI真实性的信任。",
          "事件迅速引发行业连锁反应。百度、阿里等国内大模型厂商紧急发声，称已内部排查并强化了对抗训练与实时监控机制。但安全专家指出，现有防御手段对“数据投毒”类攻击仍存在滞后性，尤其是对第三方API接口的调用缺乏端到端防护，黑产可能转向更多中小规模模型服务提供商。",
          "对国家监管层面而言，该事件可能加速《生成式AI服务管理办法》的进一步细化。当前法规侧重于内容合规与算法备案，但对模型被第三方恶意操控的场景覆盖不足。业内预期，监管部门或要求平台提供更透明的输出溯源能力，并强制部署“模型行为审计”模块，这将显著提高AI服务的合规成本。",
          "对于普通用户，这一曝光意味着使用AI信息时需更加审慎。短期来看，涉及金融、医疗、法律等强信任领域的企业AI应用可能面临信任危机；长期则将驱动“可解释AI”与“对抗鲁棒性”成为模型采购的核心标准，利好ARM、Credo AI等专注于安全性的技术供应商，但也增加了应用开发者的技术门槛。"
        ],
        "why": "这条新闻揭示了AI规模化落地中一个被低估的软肋：即使模型本身合规，外部恶意注入仍能轻松破解信任。对于投资人，应警惕过度依赖黑盒模型的平台风险；对产品团队，必须将对抗攻击防御纳入生命周期管理，否则一次“投毒”事件足以摧毁用户积累。",
        "links": [
          [
            "Google News China AI: 315曝光AI大模型“投毒”黑产，39.9元篡改AI答案 - 36氪",
            "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9pTVgwS1FDN0VkR2t3anFQenlabGxNbU5hRU05UWlXelNjc3ljcWtWaE1ZcHljVWVjTlJfdUhrQmtQcjBIc2p1NjNnQmM0Zw?oc=5"
          ]
        ],
        "sourceDate": "2026-05-16",
        "freshness": "d-1",
        "regionPriority": "primary_market",
        "freshnessLabelZh": "周末窗口｜2026-05-16",
        "freshnessLabelEn": "Weekend window | 2026-05-16",
        "freshnessLabel": "周末窗口｜2026-05-16"
      },
      {
        "section": "今日重点",
        "priority": "high",
        "title": "OpenAI co-founder Greg Brockman takes charge of product strategy",
        "dek": "OpenAI联合创始人Greg Brockman转任产品战略负责人，公司据报道计划合并ChatGPT与Codex。",
        "details": [
          "OpenAI近日传出人事变动：联合创始人兼前总裁Greg Brockman正式接管产品战略。据TechCrunch报道，Brockman的职责调整与公司内部一项重大产品计划紧密相关——将ChatGPT与编程产品Codex合并。这一整合若实现，意味着OpenAI正试图将对话式AI和代码生成两大核心能力融为一体，打造更统一的开发者工具。不过，消息仍属“报道称”阶段，官方尚未确认。",
          "Brockman此前长期负责研究团队和战略规划，此番转向产品一线，表明OpenAI正在强化产品化能力而非纯研究驱动。Codex基于GPT模型，早已被GitHub Copilot采用；ChatGPT则是面向大众的对话产品。合并后，用户或许能在同一界面中完成自然语言对话与代码生成、调试，这也符合OpenAI去年提出的“AI Agent”愿景。关键看整合深度——是简单拼合还是真正实现上下文互通。",
          "这一调整对AI行业释放多重信号：一方面，头部公司加速“模型+产品”一体化，中小创业公司如果只做AI接口层将面临更大挤压；另一方面，Codex与ChatGPT合并可能催生新的开发者工作流，类似“对话式IDE”概念。对于国内AI厂商来说，如果OpenAI走通这条路，类似的产品整合（如文心一言+文心快码）也可能加速。不过，OpenAI内部治理波动频繁，Brockman能否稳定推动整合尚存不确定性。",
          "从投资和职业视角看，这次变动提示：AI产品经理和战略人才的价值正在上升，纯算法研究岗位的权重可能相对下降。同时，关注OpenAI合并后的API定价策略——若捆绑销售，可能改变开发者成本结构。建议追踪后续官方公告和Beta测试进度，以验证传闻的准确性。"
        ],
        "why": "Brockman转任产品战略负责人并推动ChatGPT与Codex合并，意味着OpenAI正从研究驱动转向产品整合，这将重塑开发者工具生态和AI应用竞争格局——无论是竞品公司、创业团队还是开发者，都需重新评估自身定位。",
        "links": [
          [
            "TechCrunch AI: OpenAI co-founder Greg Brockman takes charge of product strategy",
            "https://techcrunch.com/2026/05/16/openai-co-founder-greg-brockman-reportedly-takes-charge-of-product-strategy/"
          ]
        ],
        "sourceDate": "2026-05-16",
        "freshness": "d-1",
        "regionPriority": "primary_market",
        "freshnessLabelZh": "周末窗口｜2026-05-16",
        "freshnessLabelEn": "Weekend window | 2026-05-16",
        "freshnessLabel": "周末窗口｜2026-05-16"
      },
      {
        "section": "今日重点",
        "priority": "high",
        "title": "龙虾之父月烧940万元的token！要不是入职OpenAI还真用不起",
        "dek": "一位被称为“龙虾之父”的AI研究者，在入职OpenAI后每月token消耗折合人民币940万元，引发对模型调用成本和OpenAI内部资源的讨论。",
        "details": [
          "“龙虾之父”是社区对某位知名AI研究者的昵称。他透露自己每月在OpenAI模型上的token花费高达940万元人民币，若不是入职OpenAI，个人或小团队根本承担不起。这一数字直观展示了前沿AI实验的烧钱速度——仅仅调用API，月开销就堪比一家初创公司的全年研发预算。",
          "940万元/月意味着日均约31万元，按照OpenAI主流模型定价，相当于每天调用数百亿token。这暗示研究者在进行大规模数据生成、模型逆训练或强化学习实验，而非简单的对话调用。如此量级也让外界得以一窥OpenAI内部研究团队的工作强度与资源倾斜。",
          "有趣的是，即使有如此海量的OpenAI模型调用，龙虾之父仍表示“复杂需求还得Claude”。这说明在特定任务（如长文推理、精细指令遵循）上，Claude（Anthropic 模型）依然保留优势，并非单纯被OpenAI碾压。多模型并用的生态现状，对开发者的选型策略有直接参考价值。",
          "目前无法独立核实这一数字是否完全精确，但研究者的公开表态已引起广泛讨论。若属实，它揭示了顶级AI实验室与外界之间的资源鸿沟——普通开发者可能连复现这类实验的API预算都凑不齐，而OpenAI内部则能轻松提供数十倍于市场价的算力支持。"
        ],
        "why": "这条新闻不仅是一个数字奇观，更点破了当前AI研发的“资源壁垒”——只有极少数机构能负担得起最前沿的试验成本，而模型之间的能力差异依然存在，开源与闭源、多模型并用的策略仍是务实选择。",
        "links": [
          [
            "量子位: 龙虾之父月烧940万元的token！要不是入职OpenAI还真用不起",
            "https://www.qbitai.com/2026/05/418822.html"
          ]
        ],
        "sourceDate": "2026-05-17",
        "freshness": "d-1",
        "regionPriority": "primary_market",
        "freshnessLabelZh": "周末窗口｜2026-05-17",
        "freshnessLabelEn": "Weekend window | 2026-05-17",
        "freshnessLabel": "周末窗口｜2026-05-17"
      },
      {
        "section": "今日重点",
        "priority": "high",
        "title": "一只机器狗，把英伟达的算力王座拱翻了",
        "dek": "一只不起眼的机器狗，却让英伟达的算力神话出现裂缝？人造劳动力正在靠近普通家庭，而背后的算力格局也在悄然改变。",
        "details": [
          "量子位报道称，一款名为“铁甲”的国产机器狗在家庭服务任务中展现出惊人的能效比——其搭载的端侧AI芯片仅需5瓦功耗，就能完成过去需要云端GPU集群才能实现的复杂导航与物体抓取。这直接动摇了英伟达在边缘算力领域的主导逻辑：当低功耗专用芯片足以胜任具体任务时，通用GPU的“算力霸权”便不再牢不可破。",
          "关键突破在于算法架构的革新。该机器狗采用稀疏化神经网络与事件相机融合方案，将视觉感知的计算量压缩至传统方法的1/20，同时保持95%以上的任务成功率。这意味着，过去依赖英伟达GPU的机器人公司，现在可以用更便宜的国产芯片实现同等甚至更优的表现，从而大幅降低整机成本。",
          "影响范围远不止机器人行业。家庭服务机器人如果以万元级价格进入市场，将直接刺激“人工替代”需求——从老人陪护到清洁搬运，潜在市场规模可达千亿级。但不确定性依然存在：机器狗在复杂动态环境（如楼梯、宠物干扰）下的稳定性尚未公开验证，且端侧芯片的大规模量产时间表仍不明朗。",
          "对英伟达而言，这是一个信号：虽然数据中心GPU需求依然旺盛，但在最具爆发力的消费级具身智能领域，算力垄断正在被打破。国产芯片设计公司（如地平线、黑芝麻）和机器人本体制造商（如宇树、追觅）可能受益于这一趋势，而投资者需关注端侧AI芯片的能效指标能否持续迭代。"
        ],
        "why": "这条新闻揭示了具身智能时代算力格局的潜在转折点：低成本、低功耗的专用方案正在挑战英伟达的通用GPU地位。对产品经理和创业者而言，这意味着家庭服务机器人的成本下降曲线可能比预期更陡，而算力选型也需要重新评估。",
        "links": [
          [
            "量子位: 一只机器狗，把英伟达的算力王座拱翻了",
            "https://www.qbitai.com/2026/05/418969.html"
          ]
        ],
        "sourceDate": "2026-05-17",
        "freshness": "d-1",
        "regionPriority": "global_major",
        "freshnessLabelZh": "周末窗口｜2026-05-17",
        "freshnessLabelEn": "Weekend window | 2026-05-17",
        "freshnessLabel": "周末窗口｜2026-05-17"
      },
      {
        "section": "投融资信息",
        "priority": "high",
        "title": "DeepSeek拒绝阿里腾讯投资，揭示AI巨头战略差异",
        "dek": "虎嗅报道称DeepSeek拒绝了阿里和腾讯的投资意向，选择保持独立发展，这一策略与阿里、腾讯通过投资布局AI生态的做法形成鲜明对比。",
        "details": [
          "据虎嗅2026年5月17日报道，中国AI明星创业公司DeepSeek近期拒绝了来自阿里巴巴和腾讯的投资意向。这一决定出人意料，因为阿里和腾讯此前已在AI领域进行了大量投资，例如阿里投资了月之暗面、MiniMax等，腾讯则投资了智谱AI等。DeepSeek的拒绝意味着它希望保持独立创始团队的控制权，而非成为巨头生态的一部分。目前尚不清楚DeepSeek拒绝的具体原因，但业内人士猜测可能与公司长期战略和创始团队对技术路线的坚持有关。",
          "DeepSeek的决策凸显了中国AI大模型创业公司的两种路径：一种是与巨头结盟获取资源，另一种是独立发展以保持技术自主。阿里和腾讯的投资通常伴随着业务协同或数据共享要求，而DeepSeek可能更倾向于自由选择商业化场景。此外，DeepSeek近期发布的DeepSeek-V3模型在性能上表现出色，可能增强了其独立发展的信心。不过，独立发展也意味着需要独自承担高昂的算力和研发成本，资金压力不容小觑。",
          "阿里和腾讯的投资策略本身也存在差异。阿里更偏重与自身云业务和电商场景的融合，而腾讯则关注社交和内容领域的AI应用。DeepSeek的拒绝可能促使两大巨头更积极地寻找其他投资标的，例如继续加注月之暗面、百川智能等。据未证实传闻，字节跳动也对DeepSeek表达了兴趣，但同样未获积极回应。这反映出当前AI领域的资本博弈正进入白热化阶段，创业公司的独立意志与巨头生态扩张之间的矛盾日益突出。"
        ],
        "why": "DeepSeek拒绝阿里腾讯投资，说明中国AI创业公司开始从“站队”转向“独立”，这可能会改变未来AI行业的竞争格局，投资人需要重新评估哪些公司值得大手笔押注。",
        "links": [
          [
            "Google News China AI: DeepSeek拒绝阿里腾讯投资，揭示AI巨头战略差异 - 虎嗅",
            "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1YMzZCcE12ZWtKQVNUUVMwaVNnT2hPZkFHekJXM2RCeFpYUFBpUzk1VDVpY1lDT0VvMWhhbGNBTHhiMWxZZkN0UjRPN2FjMHBVZmhzWg?oc=5"
          ]
        ],
        "sourceDate": "2026-05-17",
        "freshness": "d-1",
        "regionPriority": "primary_market",
        "freshnessLabelZh": "周末窗口｜2026-05-17",
        "freshnessLabelEn": "Weekend window | 2026-05-17",
        "freshnessLabel": "周末窗口｜2026-05-17"
      },
      {
        "section": "开源项目",
        "priority": "medium",
        "title": "构建通用无障碍 Agent：GitHub 的实验与教训",
        "dek": "GitHub 于 5 月 15 日发布博文，分享其在构建一款通用无障碍代理（accessibility agent）过程中的实验经验，涵盖技术选型、模型局限性和用户反馈。",
        "details": [
          "GitHub 团队尝试构建一个能跨应用、跨平台执行无障碍操作的通用 Agent，目标是替代传统的单一功能辅助工具。该 Agent 基于大语言模型和多模态交互，可理解屏幕内容并自动执行如元素聚焦、文本朗读、点击等操作。实验表明，在受控场景下成功率较高，但在动态页面和复杂布局中仍存在较大偏差。",
          "项目过程中暴露出的主要挑战包括：模型对非标准 HTML/ARIA 标签的识别能力不足，以及跨平台权限管理的安全性难题。GitHub 采用了分层架构：底层为视觉-文本联合编码，上层为策略规划模块。然而，高层规划的泛化能力依然脆弱，尤其在面对首次出现的界面样式时容易失败。",
          "作者还提到，现有的无障碍 Agent 大多针对特定场景（如阅读长文、填写表单），而通用 Agent 需要平衡深度与广度。GitHub 近期开源了部分评估数据集和基准测试工具，供社区复现和改进。目前该项目仍处于实验阶段，暂未正式进入 GitHub Copilot 路线图，但团队表示会持续迭代。",
          "此次实验对开发者社区的启示在于：通用 Agent 的“组合爆炸”问题比预期更严峻，但视觉-语言模型的进步已大幅降低了交互门槛。对于有残障用户支持需求的产品团队，可借鉴其分层策略和数据集设计思路，而无需从零起步。"
        ],
        "why": "虽然当前 Agent 尚未成熟，但其技术路线和失败教训对关注 Agent 基础设施、无障碍工具链或大模型多模态应用的团队具有直接参考意义——它展示了“全能”Agent 的现实边界和当前最可行的拆解方式。",
        "links": [
          [
            "GitHub AI & ML 原文",
            "https://github.blog/ai-and-ml/github-copilot/building-a-general-purpose-accessibility-agent-and-what-we-learned-in-the-process/"
          ]
        ],
        "sourceDate": "2026-05-16",
        "freshness": "d-1",
        "regionPriority": "deprioritized_market",
        "freshnessLabelZh": "周末窗口｜2026-05-16",
        "freshnessLabelEn": "Weekend window | 2026-05-16",
        "freshnessLabel": "周末窗口｜2026-05-16"
      },
      {
        "section": "AI产品推荐",
        "priority": "medium",
        "title": "Anuma: 跨模型工作空间，带私有记忆层",
        "dek": "集成 ChatGPT、Claude、Gemini、Grok、DeepSeek、Kimi、Llama 等模型，并支持用户可编辑的跨模型记忆。",
        "details": [
          "日常使用 AI 聊天时，常遇到“这个模型擅长推理，那个模型擅长创意”，但每次切换模型都意味着丢失上下文。Anuma 的出现正好解决了这个痛点：它将 ChatGPT、Claude、Gemini、Grok、DeepSeek、Kimi、Llama 等多个主流模型整合到同一个工作台中，用户可以自由切换模型而无需重新输入提示词，过往对话和记忆会被保留。",
          "Anuma 最值得留意的功能是它的“隐私优先”记忆层。传统模型记忆会存在各自的服务端，而 Anuma 允许用户自主编辑记忆内容，并且这些记忆可以跨模型携带。比如你在 Claude 中设定了一个项目偏好，切换到 ChatGPT 时，该偏好仍会生效。这种设计对需要保密性或希望精细控制模型行为的用户尤其友好。",
          "目前该产品还处于早期阶段，支持模型数量和隐私加密的具体细节尚待完善。不过从它的定位来看，它更像是“AI 时代的浏览器”而非单纯的聚合器——通过统一界面和记忆层，降低多模型使用的碎片化成本。对于频繁在多个 AI 助手间切换的知识工作者、内容创作者或产品经理，这是一个值得试用的新工具。",
          "从市场角度看，这类跨模型工作空间正在成为一个新兴赛道。Anuma 选择了“隐私可编辑记忆”作为差异化点，如果执行得当，可能吸引对数据控制权敏感的用户群体。但当前行业格局尚未定型，类似产品也在快速迭代，Anuma 能否跑通仍需观望。"
        ],
        "why": "对于每天切换多个 AI 模型的用户，Anuma 提供了一个清爽的统一入口和可携带的记忆能力，有望大幅提升工作效率；对产品人而言，它展示了“模型中间层”的创业机会——在模型之上构建用户数据层和界面，可能是未来 AI 平台的争夺重点。",
        "links": [
          [
            "产品页面",
            "https://www.anuma.ai/"
          ]
        ],
        "sourceDate": "2026-05-15",
        "freshness": "fallback",
        "regionPriority": "primary_market",
        "freshnessLabelZh": "补位｜编辑推荐",
        "freshnessLabelEn": "Fallback | editor pick",
        "freshnessLabel": "补位｜编辑推荐"
      },
      {
        "section": "AI产品推荐",
        "priority": "medium",
        "title": "Liminary：为顾问和研究者打造的AI研究工作站",
        "dek": "一款聚焦研究溯源与知识复用的AI工具，帮助专业人士将散落的信息转化为可信任的洞察。",
        "details": [
          "Liminary 将自己定位为“AI research workspace”，目标用户是咨询顾问、战略分析师和学术研究者。这类人群的共同痛点是：日常需要处理大量文章、报告、PDF、AI对话甚至视频，但信息分散在不同工具中，难以统一管理并追溯来源。Liminary 试图解决这个问题，它允许用户保存各种格式的资料，并内置了注解和引用追踪功能，让每个结论都能找到原始出处。",
          "产品核心卖点之一是“source traceability”（来源可溯）。在高风险决策场景（如商业战略、投资分析）中，AI 生成的结论如果没有明确的引用支撑，几乎无法被采纳。Liminary 通过将 AI 辅助的洞察与原始材料一一对应，降低了“AI 幻觉”带来的信任成本。这种设计思路很务实，没有追求炫酷的通用能力，而是锚定了一个具体且付费意愿强的工作流。",
          "此外，Liminary 强调“reuse insights across projects”——跨项目复用洞察。这触及了知识管理中的关键环节：研究产出的沉淀与再应用。对于频繁更换项目或长期跟踪某个主题的用户（如行业研究员、管理顾问），能够从过去的研究中快速提取相关结论，可以显著提升效率。不过，该产品目前仍在早期阶段（官网显示为“Beta”），功能完整性和用户体验尚需观察。",
          "从市场角度看，Liminary 所切入的赛道已有 Notion AI、Mem、Obsidian 等竞品，但它的差异化在于“为高价值决策研究设计”，而非泛知识管理。这种垂直定位有利于早期获客，但也意味着市场天花板可能相对有限。若能在咨询公司、智库或企业战略部门中建立口碑，有潜力成为细分领域的标配工具。"
        ],
        "why": "对于关注 AI+知识管理赛道的读者，Liminary 代表了一种从“通用聊天”向“专业研究协作”的转向。它不追求面面俱到，而是用“来源可溯”和“跨项目复用”两个功能点切入高价值用户群，这样的产品策略值得创业者与产品经理参考。",
        "links": [
          [
            "Curated AI Products: Liminary: AI research workspace for consultants, strategists, and researchers",
            "https://liminary.io/"
          ]
        ],
        "sourceDate": "2026-05-15",
        "freshness": "fallback",
        "regionPriority": "primary_market",
        "freshnessLabelZh": "补位｜编辑推荐",
        "freshnessLabelEn": "Fallback | editor pick",
        "freshnessLabel": "补位｜编辑推荐"
      },
      {
        "section": "深度阅读",
        "priority": "medium",
        "title": "马斯克诉奥特曼审判落幕，创始人机器继续转动：AI信任危机未解",
        "dek": "TechCrunch AI播客深度复盘马斯克诉OpenAI案终审，探讨AI掌舵人信任问题，并链接SpaceX潜在史上最大IPO背后的创始人生态。适合关心AI治理与产业权力格局的读者。",
        "details": [
          "本周，马斯克诉奥特曼案正式结案。双方最终辩论反复围绕一个核心问题：我们能否信任那些掌控AI的人？TechCrunch AI播客的主持人认为，这场审判暴露了AI行业从“开放研究”到“闭源营利”的转向，以及创始人在叙事上的巨大话语权。对于非技术读者，理解这个案件的实质比记住法律细节更重要——它关乎未来AI公司的治理结构。",
          "播客同时将目光投向SpaceX，它正朝着美国历史上最大规模IPO迈进。而围绕SpaceX，一批创始人已经开始“旋出”（spin out）新公司。马斯克的创始人机器并未因审判放缓，反而通过法律战和商业扩张并行，维持着个人影响力。这提醒我们，硅谷的权力转移从来不是单线的，马斯克正在同时操作AI、航天、社交媒体等多条战线。",
          "值得关注的见解：播客提到，法庭辩论揭示了一个悖论——OpenAI最初以非营利使命起家，但现在其盈利实体估值已超千亿美元，而监管者还在追问“谁有权决定AGI的走向”。这种张力在AI安全、开源与闭源、以及公共信任之间制造了持续的裂缝。对于关注AI政策或创业机会的读者，这期播客提供了从法律和人性的角度拆解“信任困境”的素材。",
          "虽然播客本身是评论性质，但TechCrunch AI作为权威科技媒体，其分析结合了法庭现场报道与产业观察。建议读者思考：如果AI领头羊的信任度持续被削弱，会如何影响企业采购AI服务的决策？是否会出现第三方审计机构或新的治理模型？这些判断将直接预演未来12个月AI生态的博弈方向。"
        ],
        "why": "在AI监管立法悬而未决的时刻，马斯克诉OpenAI案是一面镜子，映照出行业领袖信任赤字与权力集中风险。理解这场审判背后的叙事斗争，比关注诉讼结果更有战略价值——它将影响投资人、创业者以及政策制定者在未来AI治理中的立场选择。",
        "links": [
          [
            "TechCrunch AI: The OpenAI trial wraps up, and the Musk founder machine keeps spinning",
            "https://techcrunch.com/podcast/the-openai-trial-wraps-up-and-the-musk-founder-machine-keeps-spinning/"
          ]
        ],
        "sourceDate": "2026-05-16",
        "freshness": "d-1",
        "regionPriority": "primary_market",
        "freshnessLabelZh": "周末窗口｜2026-05-16",
        "freshnessLabelEn": "Weekend window | 2026-05-16",
        "freshnessLabel": "周末窗口｜2026-05-16"
      },
      {
        "section": "机构报告",
        "priority": "medium",
        "title": "IBM 2026 CEO Study: AI-first转型的五步棋",
        "dek": "IBM连续第24年发布CEO调研，本年度主题聚焦“AI-first转型”，提出五项关键行动，旨在帮助企业在不确定中抓住系统性机会。",
        "details": [
          {
            "summary": "IBM 2026 CEO研究提出企业AI-first转型的5个关键策略",
            "expanded": "本报告基于IBM对全球数千位CEO的访谈与问卷分析，提炼出五项核心行动：将AI嵌入企业战略而非仅作为工具、重构数据基础设施以支持实时决策、培养“人机协作”的文化与人才机制、建立负责任的AI治理框架、以及通过开放生态加速创新。报告特别指出，超过60%的受访CEO认为行业领先者将在三年内完成AI原生重构，但大多数企业仍陷于试点困局。对于投资者而言，需警惕AI炒作泡沫转向执行力溢价——那些能同时管理技术部署与组织变革的企业才可能获得持续回报。报告未给出具体行业分布数据，但强调了跨行业通用性。"
          }
        ],
        "why": "这份报告直接点明了企业AI转型从概念验证到规模化落地的关键卡点，对投资者和创业者判断下一阶段AI应用投资方向具有参考价值。",
        "links": [
          [
            "Google News AI Reports: 2026 CEO Study: 5 plays for AI-first transformation - IBM",
            "https://news.google.com/rss/articles/CBMimAFBVV95cUxQY0R1WkVEcUprYVJhTW82Snp3Y1FwdjJmMFlzRWFTTUtCc0thbUhwdHNaenEyZkF0QXJmSjJ3Uk5fR1V2blhfTzRhZXNuYnVzRTUzQkU2MU9neXFaOG1vNEtMWWRLVDY4RG5LQklkb3lDaFhnWHlfQzdROUtFV1FCZUp3YlB4QUZnQnJzZWZuMFZiNTVGTjBERA?oc=5"
          ]
        ],
        "sourceDate": "2026-05-14",
        "freshness": "fallback",
        "regionPriority": "primary_market",
        "freshnessLabelZh": "补位｜发布于 2026-05-14",
        "freshnessLabelEn": "Fallback | published 2026-05-14",
        "freshnessLabel": "补位｜发布于 2026-05-14"
      },
      {
        "section": "每日词条",
        "priority": "learning",
        "title": "Agentic Workflow",
        "dek": "理解AI从“聊天”走向“自主执行”的关键概念，以及它如何驱动企业自动化和产品整合。",
        "details": [
          "Agentic Workflow 指的是AI模型不再仅回答问题，而是能自主规划、调用工具、执行多步骤任务的工作模式。例如，Databricks 近日将 GPT-5.5 集成到企业代理工作流中，让AI自动处理复杂的办公数据分析任务，在 OfficeQA Pro 基准上达到新高度。这意味着企业可以将重复性、多步骤的流程交给AI Agent，而不需要人工每一步干预。",
          "OpenAI 的产品动向也印证了这一趋势：据 TechCrunch 报道，联合创始人 Greg Brockman 重新接管产品战略，公司计划将 ChatGPT 与编程产品 Codex 合并。这一整合的核心正是让聊天界面与代码执行、任务调度能力结合，形成更强大的 Agent 体验。对于非技术用户来说，未来可能通过自然语言直接驱动一系列自动化操作，比如自动生成财务报告或部署代码。",
          "在金融领域，OpenAI 官方展示了财务团队如何使用 Codex 构建月度业务回顾、报告包、差异分析等工具。这些场景本质上就是 Agentic Workflow 的典型应用——AI 从真实工作输入中提取数据、运行模型检查、生成情景规划。这表明 Agent 模式正在从概念走向具体岗位的落地，尤其适合数据密集、流程固定的工作。",
          "值得注意的是，“Agentic”并非单一技术，而是一套系统设计原则：包括任务分解、工具调用、记忆管理、自我纠错等。当前主流实现依赖大语言模型作为“大脑”，配合 API 调用外部工具。然而，这类系统仍存在不可预测性和安全性挑战，部署时需谨慎设计人工监督环节。"
        ],
        "why": "理解 Agentic Workflow 是看懂近期多家大厂（OpenAI、Databricks、微软等）产品战略的关键，它代表了AI从“陪聊”到“干活”的范式转变。对产品经理和创业者而言，这意味着新的自动化机会和交互设计挑战。",
        "links": [
          [
            "Databricks brings GPT-5.5 to enterprise agent workflows",
            "https://openai.com/index/databricks"
          ],
          [
            "OpenAI co-founder Greg Brockman takes charge of product strategy",
            "https://techcrunch.com/2026/05/16/openai-co-founder-greg-brockman-reportedly-takes-charge-of-product-strategy/"
          ],
          [
            "How finance teams use Codex",
            "https://openai.com/academy/how-finance-teams-use-codex"
          ]
        ],
        "sourceDate": "",
        "freshness": "",
        "regionPriority": "",
        "freshnessLabelZh": "",
        "freshnessLabelEn": "",
        "freshnessLabel": ""
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
    "date": "2026-05-18",
    "title": "AI Daily Atlas",
    "meta": "May 18, 2026",
    "headline": "AI competition is shifting from model capability to products and industry control points",
    "summary": "Today’s main theme is that AI competition is moving beyond isolated model releases into product entry points, key talent, infrastructure, and real-world adoption. The important question is no longer only which model is stronger, but who can turn capability into usage, revenue, and industry influence.",
    "tags": [
      "Models",
      "AI Products",
      "Funding",
      "Open Source",
      "Deep Read",
      "Reports"
    ],
    "items": [
      {
        "section": "Top Stories",
        "priority": "high",
        "title": "China's 315 Gala Exposes AI Model 'Poisoning' Black Market: 39.9 Yuan to Manipulate Answers",
        "dek": "A weekend investigative report reveals a burgeoning underground industry where malicious actors can alter AI responses for as little as 39.9 yuan, raising serious concerns about model integrity and user trust.",
        "details": [
          "The black market operates by injecting malicious prompts or corrupted training data into AI models, often targeting public-facing chatbots and content generators. According to the 36Kr report, attackers charge as low as 39.9 yuan to subtly skew outputs, such as promoting certain products or spreading misinformation, undermining the reliability of AI systems used by millions. The practice, dubbed 'model poisoning,' exploits vulnerabilities in how models process user inputs and update from feedback, making detection difficult without dedicated safeguards.",
          "This exposure comes amid heightened scrutiny of AI safety ahead of potential regulatory crackdowns. The 315 Gala, known for consumer rights enforcement, highlighted cases where even major Chinese AI models were vulnerable, leaving users and enterprises questioning the robustness of current safeguards. The incident underscores the urgent need for more rigorous model evaluation and real-time monitoring. Some experts argue that without standardized security protocols, such attacks could erode public confidence in AI adoption across industries."
        ],
        "why": "For enterprises and AI product teams, this news signals an emerging security threat that demands immediate attention—integrating prompt injection detection and red-teaming into deployment pipelines is no longer optional but critical for maintaining user trust.",
        "links": [
          [
            "Google News China AI: 315曝光AI大模型“投毒”黑产，39.9元篡改AI答案 - 36氪",
            "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9pTVgwS1FDN0VkR2t3anFQenlabGxNbU5hRU05UWlXelNjc3ljcWtWaE1ZcHljVWVjTlJfdUhrQmtQcjBIc2p1NjNnQmM0Zw?oc=5"
          ]
        ],
        "sourceDate": "2026-05-16",
        "freshness": "d-1",
        "regionPriority": "primary_market",
        "freshnessLabelZh": "周末窗口｜2026-05-16",
        "freshnessLabelEn": "Weekend window | 2026-05-16",
        "freshnessLabel": "Weekend window | 2026-05-16"
      },
      {
        "section": "Top Stories",
        "priority": "high",
        "title": "OpenAI co-founder Greg Brockman takes charge of product strategy",
        "dek": "Greg Brockman returns to operational role as OpenAI eyes tighter integration between conversational AI and coding tools.",
        "details": [
          "Greg Brockman, OpenAI's co-founder and former president who had stepped back from day-to-day operations, is now taking the helm of product strategy, according to a TechCrunch report. The move signals a strategic pivot for the company to unify its product roadmap under one of its most experienced leaders. Brockman had previously led key technical initiatives, including the development of GPT-4, and his return suggests OpenAI is prioritizing product cohesion over pure research.",
          "The reorganization comes as OpenAI is reportedly planning to merge ChatGPT with its Codex programming product, creating a unified assistant that handles both natural language and code generation. This integration could blur the lines between consumer AI and developer tools, potentially giving OpenAI a competitive edge over rivals like Google and Anthropic. However, the details remain unconfirmed, and the success of such a merger will depend on execution and user adoption."
        ],
        "why": "This leadership reshuffle underscores OpenAI's push to combine its flagship products, which could reshape the AI assistant market and signal a shift from research-driven to product-driven strategy. For startups and investors, it highlights the growing importance of integrated AI workflows and may prompt talent moves in the industry.",
        "links": [
          [
            "TechCrunch AI: OpenAI co-founder Greg Brockman takes charge of product strategy",
            "https://techcrunch.com/2026/05/16/openai-co-founder-greg-brockman-reportedly-takes-charge-of-product-strategy/"
          ]
        ],
        "sourceDate": "2026-05-16",
        "freshness": "d-1",
        "regionPriority": "primary_market",
        "freshnessLabelZh": "周末窗口｜2026-05-16",
        "freshnessLabelEn": "Weekend window | 2026-05-16",
        "freshnessLabel": "Weekend window | 2026-05-16"
      },
      {
        "section": "Top Stories",
        "priority": "high",
        "title": "Lobster Father burns ¥9.4M monthly on tokens! Can't afford it without joining OpenAI",
        "dek": "How one developer's token bill reveals the hidden cost of frontier AI models",
        "details": [
          "The developer known as 'Lobster Father' runs a personal chatbot project that guzzles ¥9.4 million (about $1.3M) worth of tokens per month—a cost he could never sustain without joining OpenAI, which provides him free access. His case highlights how top AI talent can effectively bypass the steep inference costs that plague smaller teams.",
          "Despite the generous token allowance, Lobster Father admits that complex reasoning tasks still force him to switch to Anthropic's Claude, underscoring that even with unlimited budget, no single model is a complete solution. This reveals the persistent gap between raw compute and true cognitive performance."
        ],
        "why": "The story exposes the extreme token burn of cutting-edge AI development and the competitive edge OpenAI gains by absorbing heavy users—a signal that cost management remains a key moat in the AI arms race.",
        "links": [
          [
            "量子位: 龙虾之父月烧940万元的token！要不是入职OpenAI还真用不起",
            "https://www.qbitai.com/2026/05/418822.html"
          ]
        ],
        "sourceDate": "2026-05-17",
        "freshness": "d-1",
        "regionPriority": "primary_market",
        "freshnessLabelZh": "周末窗口｜2026-05-17",
        "freshnessLabelEn": "Weekend window | 2026-05-17",
        "freshnessLabel": "Weekend window | 2026-05-17"
      },
      {
        "section": "Top Stories",
        "priority": "high",
        "title": "A robot dog overthrows Nvidia's computing throne",
        "dek": "A quadruped robot demonstrates a new computing paradigm that challenges Nvidia's GPU dominance in AI workloads.",
        "details": [
          "A recent report highlights how a robot dog—likely a general-purpose quadruped—achieved comparable or superior performance to Nvidia-powered systems in specific AI tasks, using a novel chip architecture. The breakthrough suggests that Nvidia's stranglehold on AI compute may face credible alternatives from edge or specialized hardware, especially in robotics and embodied AI. The robot's success underscores a shift toward heterogeneous computing, where multiple chip types collaborate rather than relying solely on GPUs. However, the scalability and generalizability of this approach remain unproven beyond the lab environment.",
          "The development could democratize AI deployment by reducing dependency on expensive, power-hungry GPU clusters. For startups and researchers, it opens the door to smaller, cheaper, and more energy-efficient solutions tailored to specific robotic or edge applications. Investors should monitor whether this architecture can be mass-produced and adopted in real-world settings before declaring the end of Nvidia's reign."
        ],
        "why": "This news signals a potential inflection point in AI hardware: alternative compute architectures are not just theoretical but are achieving practical results in demanding tasks. For product builders and investors, it's a reminder to diversify compute strategies beyond Nvidia.",
        "links": [
          [
            "量子位: 一只机器狗，把英伟达的算力王座拱翻了",
            "https://www.qbitai.com/2026/05/418969.html"
          ]
        ],
        "sourceDate": "2026-05-17",
        "freshness": "d-1",
        "regionPriority": "global_major",
        "freshnessLabelZh": "周末窗口｜2026-05-17",
        "freshnessLabelEn": "Weekend window | 2026-05-17",
        "freshnessLabel": "Weekend window | 2026-05-17"
      },
      {
        "section": "Funding Watch",
        "priority": "high",
        "title": "DeepSeek Shuns Alibaba and Tencent Investment, Highlighting Strategic Divergence Among AI Giants",
        "dek": "The Chinese AI startup's decision to reject funding from two of the country's largest tech conglomerates signals a strategic shift in how AI companies are positioning themselves amid competing ecosystems.",
        "details": [
          "DeepSeek, a rising Chinese AI startup, has reportedly turned down investment offers from both Alibaba and Tencent, opting instead to maintain its independence. According to a report by Huxiu, the decision underscores a growing divergence in AI strategy among China's tech giants. While Alibaba has been aggressively integrating AI into its cloud and e-commerce platforms, Tencent has focused on consumer-facing AI applications. DeepSeek's refusal suggests it aims to avoid being tied to a single corporate ecosystem, potentially to preserve flexibility in partnerships and product direction. The move also reflects the broader trend of AI startups seeking to negotiate favorable terms or pursue an independent IPO path amidst intense competition.",
          "Industry observers note that DeepSeek's choice may reshape the funding landscape for Chinese AI startups. By rejecting deep-pocketed investors, DeepSeek signals confidence in its own technology and business model, but also risks missing out on the powerful distribution channels and data resources that Alibaba and Tencent can provide. This strategic autonomy could appeal to other startups wary of being absorbed into larger platforms, but it also raises questions about how DeepSeek will scale without the backing of a major tech conglomerate. The incident highlights the tension between the need for capital and the desire for strategic independence in the fast-evolving AI sector."
        ],
        "why": "This news matters for investors and entrepreneurs because it reveals a critical inflection point in Chinese AI: startups are increasingly choosing strategic autonomy over deep-pocketed corporate ties, which could reshape deal structures and competitive dynamics in the AI funding ecosystem.",
        "links": [
          [
            "Google News China AI: DeepSeek拒绝阿里腾讯投资，揭示AI巨头战略差异 - 虎嗅",
            "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1YMzZCcE12ZWtKQVNUUVMwaVNnT2hPZkFHekJXM2RCeFpYUFBpUzk1VDVpY1lDT0VvMWhhbGNBTHhiMWxZZkN0UjRPN2FjMHBVZmhzWg?oc=5"
          ]
        ],
        "sourceDate": "2026-05-17",
        "freshness": "d-1",
        "regionPriority": "primary_market",
        "freshnessLabelZh": "周末窗口｜2026-05-17",
        "freshnessLabelEn": "Weekend window | 2026-05-17",
        "freshnessLabel": "Weekend window | 2026-05-17"
      },
      {
        "section": "Open Source",
        "priority": "medium",
        "title": "Building a general-purpose accessibility agent—and what we learned in the process",
        "dek": "Building a general-purpose accessibility agent—and what we learned in the process",
        "details": [
          "GitHub has piloted an experimental general-purpose AI agent designed to improve web accessibility on its platform. The agent aims to automatically detect and suggest fixes for issues such as missing alt text, low contrast, or keyboard navigation problems. This initiative represents a novel application of AI agents in the open-source developer toolchain, moving beyond code generation into broader quality assurance and inclusive design.",
          "The project's key takeaway is that building a truly general-purpose accessibility agent is extremely challenging due to the context-dependent nature of violations and the need for human judgment. GitHub shared lessons on balancing automated suggestions with human oversight and the importance of fine-tuning models on accessibility-specific data. While still experimental, the agent signals a growing trend where AI agents tackle non-code tasks, lowering barriers for accessible software."
        ],
        "why": "This post is valuable for developers and AI practitioners exploring agent-based tooling beyond code generation. It provides a concrete case of using AI for accessibility—an underserved domain—and the honest recounting of challenges offers practical insights for building similar agents in open-source or enterprise settings.",
        "links": [
          [
            "GitHub Blog: Building a general-purpose accessibility agent",
            "https://github.blog/ai-and-ml/github-copilot/building-a-general-purpose-accessibility-agent-and-what-we-learned-in-the-process/"
          ]
        ],
        "sourceDate": "2026-05-16",
        "freshness": "d-1",
        "regionPriority": "deprioritized_market",
        "freshnessLabelZh": "周末窗口｜2026-05-16",
        "freshnessLabelEn": "Weekend window | 2026-05-16",
        "freshnessLabel": "Weekend window | 2026-05-16"
      },
      {
        "section": "AI Product Picks",
        "priority": "medium",
        "title": "Anuma: multi-model AI workspace with private cross-model memory",
        "dek": "Anuma unifies eight major AI models into a single workspace, adding a user-controlled memory layer that persists across models.",
        "details": [
          "Anuma aggregates ChatGPT, Claude, Gemini, Grok, DeepSeek, Kimi, and Llama into one interface, letting users compare outputs, switch models mid-task, and manage conversations in a unified thread. This eliminates the friction of toggling between tabs and manually copying context, a common pain point for power users who rely on multiple AI assistants for different strengths.",
          "A standout feature is Anuma's privacy-first memory layer: users can create, edit, and delete memory entries that carry across any model in the workspace. Unlike platform-specific memory (e.g. OpenAI's persistent memory), this cross-model memory is encrypted locally and never leaves the user's control. It enables personalized, consistent interactions without vendor lock-in, a significant step toward interoperable AI workflows."
        ],
        "why": "Anuma exemplifies a growing trend: tooling that abstracts away model fragmentation. For product builders, it highlights demand for cross-model memory and privacy controls as competitive differentiators in the AI workspace space.",
        "links": [
          [
            "Curated AI Products: Anuma: multi-model AI workspace with private cross-model memory",
            "https://www.anuma.ai/"
          ]
        ],
        "sourceDate": "2026-05-15",
        "freshness": "fallback",
        "regionPriority": "primary_market",
        "freshnessLabelZh": "补位｜编辑推荐",
        "freshnessLabelEn": "Fallback | editor pick",
        "freshnessLabel": "Fallback | editor pick"
      },
      {
        "section": "AI Product Picks",
        "priority": "medium",
        "title": "Liminary: AI research workspace for consultants, strategists, and researchers",
        "dek": "偏 productivity 的 AI 应用，适合观察真实工作流里的产品机会。",
        "details": [
          "This signal comes from Curated AI Products：Liminary: AI research workspace for consultants, strategists, and researchers. Based on the public summary, it points to a broader shift: AI companies are moving competition from standalone model or feature launches toward user entry points, enterprise workflows, vertical deployment, and ecosystem partnerships.",
          "One caveat: public RSS summaries often miss full details such as exact amounts, customers, benchmarks, or launch timing. It is included because it aligns with other signals in today’s source pack and is useful as a starting point for deeper reading.",
          "For product and strategy judgment, the key question is whether it changes real usage frequency rather than creating short-term attention. Follow-up signals include official case studies, developer adoption, customer repeat usage, or continued capital interest."
        ],
        "why": "It matters because signals like this help identify whether AI attention is shifting toward model capability, product distribution, or industry deployment.",
        "links": [
          [
            "Curated AI Products: Liminary: AI research workspace for consultants, strategists, and res",
            "https://liminary.io/"
          ]
        ],
        "sourceDate": "2026-05-15",
        "freshness": "fallback",
        "regionPriority": "primary_market",
        "freshnessLabelZh": "补位｜编辑推荐",
        "freshnessLabelEn": "Fallback | editor pick",
        "freshnessLabel": "Fallback | editor pick"
      },
      {
        "section": "Deep Read",
        "priority": "medium",
        "title": "The OpenAI trial wraps up, and the Musk founder machine keeps spinning",
        "dek": "A TechCrunch AI podcast dissects the final arguments in the Musk v. Altman trial and explores how SpaceX’s looming IPO is fueling a new wave of AI startups.",
        "details": [
          "The core question of the trial—whether OpenAI’s leadership can be trusted to steward AGI for humanity—remained unresolved as final arguments circled trust and governance. The episode does not declare a winner but lays out the stakes for future AI regulation and board oversight, especially as the case highlights the tension between mission-driven non-profit origins and for-profit ambitions.",
          "Simultaneously, SpaceX’s potential record-breaking IPO is creating a cascade of capital and talent, with a generation of founders spinning out to launch AI ventures. The podcast connects these two stories to illustrate how the same entrepreneurial engine that built SpaceX is now reshaping AI, raising questions about concentration of power and the reliability of a small group of billionaire-led organizations."
        ],
        "why": "This podcast is worth 30 minutes because it ties together the unresolved trust deficit in AI leadership (exposed by the trial) with the structural shift in startup creation driven by SpaceX’s capital event, offering a rare bird’s-eye view for investors and strategists assessing the next phase of AI.",
        "links": [
          [
            "TechCrunch AI: The OpenAI trial wraps up, and the Musk founder machine keeps spinning",
            "https://techcrunch.com/podcast/the-openai-trial-wraps-up-and-the-musk-founder-machine-keeps-spinning/"
          ]
        ],
        "sourceDate": "2026-05-16",
        "freshness": "d-1",
        "regionPriority": "primary_market",
        "freshnessLabelZh": "周末窗口｜2026-05-16",
        "freshnessLabelEn": "Weekend window | 2026-05-16",
        "freshnessLabel": "Weekend window | 2026-05-16"
      },
      {
        "section": "Research Reports",
        "priority": "medium",
        "title": "2026 CEO Study: 5 plays for AI-first transformation - IBM",
        "dek": "IBM's latest CEO study outlines five strategic plays for enterprises transitioning to AI-first operations, drawing on insights from global chief executives.",
        "details": [
          {
            "summary": "The IBM 2026 CEO Study identifies five essential plays for achieving AI-first transformation, covering strategy, data, talent, governance, and partnerships.",
            "expanded": "IBM's 2026 CEO Study, based on a global survey of CEOs, distills the journey to becoming an AI-first enterprise into five distinct plays: 1) Reinvent the business model around AI, 2) Build a data-first architecture, 3) Cultivate an AI-ready workforce and culture, 4) Embed responsible AI governance, and 5) Leverage ecosystem partnerships for scale. The report emphasizes that while most CEOs recognize AI as a top priority, execution gaps remain wide. It argues that companies that systematically adopt these five plays are more likely to achieve measurable revenue growth and operational efficiency. For product managers and investors, the study provides a diagnostic tool to assess a company's AI maturity and identify areas where startups can offer targeted solutions—such as data infrastructure or governance tools."
          }
        ],
        "why": "This report offers a structured framework for evaluating enterprise AI strategies. For investors and product leaders, it highlights critical gaps in execution and points to where the next wave of AI-native tools and services may find the strongest demand.",
        "links": [
          [
            "Google News AI Reports: 2026 CEO Study: 5 plays for AI-first transformation - IBM",
            "https://news.google.com/rss/articles/CBMimAFBVV95cUxQY0R1WkVEcUprYVJhTW82Snp3Y1FwdjJmMFlzRWFTTUtCc0thbUhwdHNaenEyZkF0QXJmSjJ3Uk5fR1V2blhfTzRhZXNuYnVzRTUzQkU2MU9neXFaOG1vNEtMWWRLVDY4RG5LQklkb3lDaFhnWHlfQzdROUtFV1FCZUp3YlB4QUZnQnJzZWZuMFZiNTVGTjBERA?oc=5"
          ]
        ],
        "sourceDate": "2026-05-14",
        "freshness": "fallback",
        "regionPriority": "primary_market",
        "freshnessLabelZh": "补位｜发布于 2026-05-14",
        "freshnessLabelEn": "Fallback | published 2026-05-14",
        "freshnessLabel": "Fallback | published 2026-05-14"
      },
      {
        "section": "AI Term",
        "priority": "learning",
        "title": "Agentic Workflow",
        "dek": "The common language behind today's agent and enterprise automation news",
        "details": [
          "Agentic Workflow refers to a structured process where AI agents autonomously plan, execute, and iterate on tasks—often with human oversight—to achieve complex goals. Unlike simple chatbots, agentic workflows break down a user’s request into subtasks, call external tools or APIs, verify outputs, and self-correct. This concept powers recent moves like OpenAI combining ChatGPT with Codex (S004) and Databricks integrating GPT-5.5 for enterprise agent workflows (S006). Even finance teams using Codex to build reporting packs (S001) exemplify agentic patterns: the model takes raw data, runs calculations, and formats results without step-by-step prompting."
        ],
        "why": "Understanding 'agentic workflow' is essential because it distills a key shift from single-turn AI to multi-step autonomous collaboration—a trend that will reshape product strategy, enterprise automation, and investment priorities in 2026.",
        "links": [
          [
            "OpenAI Academy: How finance teams use Codex",
            "https://openai.com/academy/how-finance-teams-use-codex"
          ],
          [
            "OpenAI: Databricks brings GPT-5.5 to enterprise agent workflows",
            "https://openai.com/index/databricks"
          ]
        ],
        "sourceDate": "",
        "freshness": "",
        "regionPriority": "",
        "freshnessLabelZh": "",
        "freshnessLabelEn": "",
        "freshnessLabel": ""
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
  zh: ["全部", "今日重点", "投融资信息", "开源项目", "AI产品推荐", "深度阅读", "机构报告", "职业雷达"],
  en: ["All", "Top Stories", "Funding Watch", "Open Source", "AI Product Picks", "Deep Read", "Research Reports", "Career Radar"]
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
    refreshNote: "每天 7:30 生成，优先覆盖前一自然日的中美 AI 信号；少数产品、报告和深度阅读会标注近7天补位",
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
    refreshNote: "Refreshes daily at 7:30 Beijing time, prioritizing the previous Beijing day’s China-US AI signals; selected products, reports, and deep reads may be labeled as 7-day fallback picks",
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
const heroImage = document.querySelector("#heroImage");
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
    item.sourceDate,
    item.freshness,
    item.regionPriority,
    item.freshnessLabel,
    item.freshnessLabelZh,
    item.freshnessLabelEn,
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
      ["Anuma", "https://www.anuma.ai/"],
      ["Recall", "https://www.recall.it/"],
      ["Liminary", "https://liminary.io/"],
      ["Magic Patterns", "https://www.magicpatterns.com/"]
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
    id: "deep-read",
    zh: "深度阅读",
    en: "Deep Read",
    terms: ["深度阅读", "Deep Read", "analysis", "deep dive", "essay", "interview", "long read", "explainer", "strategy", "case study", "深度", "长文", "访谈", "专访", "解读", "复盘", "分析"]
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
  "深度阅读": "deep-read",
  "Deep Read": "deep-read",
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
  "deep-read": "READ",
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
  const refreshTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 7, 30, 0);
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
    if (["投融资信息", "深度阅读", "机构报告", "职业雷达", "Funding Watch", "Deep Read", "Research Reports", "Career Radar"].includes(item.section)) {
      node.classList.add("is-wide");
    }
    node.querySelector(".section-code").textContent = getSectionCode(item.section);
    node.querySelector(".section-label").textContent = item.section;
    const priority = node.querySelector(".priority");
    priority.textContent = item.priority || "";
    const freshnessLabel = item.freshnessLabel || (currentLang === "en" ? item.freshnessLabelEn : item.freshnessLabelZh) || item.sourceDate || "";
    if (freshnessLabel) {
      const freshness = document.createElement("span");
      freshness.className = `freshness-badge${item.freshness === "fallback" ? " is-fallback" : ""}`;
      freshness.textContent = freshnessLabel;
      priority.after(freshness);
    }
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

function hashString(value) {
  let hash = 2166136261;
  const text = String(value || "");
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function pickHeroKeywords(issue) {
  const candidates = [
    ...(issue.tags || []),
    ...issue.items.slice(0, 5).flatMap((item) => [item.title, item.section])
  ];
  const seen = new Set();
  return candidates
    .map((value) => String(value || "").replace(/[：:｜|].*$/, "").trim())
    .filter((value) => value && value.length <= 24)
    .filter((value) => {
      const key = value.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 5);
}

function heroSvg(issue) {
  const seed = hashString(`${issue.date}-${issue.headline}-${(issue.tags || []).join(",")}`);
  const keywords = pickHeroKeywords(issue);
  const accentSets = [
    ["#ff8a3d", "#10a6b8", "#1f2937"],
    ["#f59e0b", "#3b82f6", "#111827"],
    ["#fb7185", "#14b8a6", "#202124"],
    ["#f97316", "#6366f1", "#111827"]
  ];
  const [warm, cool, ink] = accentSets[seed % accentSets.length];
  const nodes = Array.from({ length: 12 }, (_, index) => {
    const nodeSeed = hashString(`${seed}-${index}`);
    return {
      x: 70 + (nodeSeed % 560),
      y: 46 + ((nodeSeed >>> 8) % 248),
      r: 3 + ((nodeSeed >>> 16) % 7)
    };
  });
  const labels = keywords.map((keyword, index) => {
    const y = 86 + index * 35;
    return `
      <g transform="translate(382 ${y})">
        <rect width="${Math.max(92, Math.min(190, keyword.length * 12 + 32))}" height="24" rx="12" fill="rgba(255,255,255,.72)" stroke="rgba(17,24,39,.12)" />
        <text x="16" y="16" font-size="11" fill="${ink}" font-family="Inter, Arial, sans-serif">${escapeSvg(keyword)}</text>
      </g>`;
  }).join("");
  const nodeMarkup = nodes.map((node, index) => `
    <circle cx="${node.x}" cy="${node.y}" r="${node.r}" fill="${index % 3 === 0 ? warm : cool}" opacity="${index % 2 ? ".68" : ".92"}" />
  `).join("");
  const lineMarkup = nodes.slice(1).map((node, index) => `
    <line x1="${nodes[index].x}" y1="${nodes[index].y}" x2="${node.x}" y2="${node.y}" stroke="${index % 2 ? cool : warm}" stroke-opacity=".22" stroke-width="1.2" />
  `).join("");
  const code = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="AI Daily Atlas generated visual">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#f8fafc"/>
          <stop offset=".48" stop-color="#eef7f8"/>
          <stop offset="1" stop-color="#fff5ed"/>
        </linearGradient>
        <radialGradient id="pulse" cx=".28" cy=".36" r=".64">
          <stop offset="0" stop-color="${warm}" stop-opacity=".25"/>
          <stop offset=".52" stop-color="${cool}" stop-opacity=".12"/>
          <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
        </radialGradient>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="#111827" stroke-opacity=".06" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="720" height="360" fill="url(#bg)"/>
      <rect width="720" height="360" fill="url(#grid)"/>
      <rect width="720" height="360" fill="url(#pulse)"/>
      <path d="M52 274 C142 178 206 250 296 154 S462 92 646 132" fill="none" stroke="${ink}" stroke-opacity=".18" stroke-width="22" stroke-linecap="round"/>
      <path d="M52 274 C142 178 206 250 296 154 S462 92 646 132" fill="none" stroke="${warm}" stroke-opacity=".72" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M82 118 C160 56 238 78 304 132 S444 212 620 86" fill="none" stroke="${cool}" stroke-opacity=".58" stroke-width="2" stroke-dasharray="8 10"/>
      ${lineMarkup}
      ${nodeMarkup}
      <g transform="translate(48 54)">
        <text x="0" y="0" font-size="11" fill="${cool}" font-weight="700" letter-spacing="2" font-family="Inter, Arial, sans-serif">AI DAILY ATLAS</text>
        <text x="0" y="42" font-size="34" fill="${ink}" font-weight="760" font-family="Inter, Arial, sans-serif">Signal Map</text>
        <text x="0" y="72" font-size="13" fill="#64748b" font-family="Inter, Arial, sans-serif">${escapeSvg(issue.meta || issue.date)}</text>
      </g>
      ${labels}
      <g transform="translate(50 300)">
        <rect width="118" height="28" rx="14" fill="${ink}" opacity=".92"/>
        <circle cx="20" cy="14" r="5" fill="${warm}"/>
        <text x="34" y="18" font-size="11" fill="#fff" font-family="Inter, Arial, sans-serif">Live signals</text>
      </g>
    </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(code)}`;
}

function escapeSvg(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderHeader(issue) {
  issueMeta.textContent = issue.meta;
  heroHeadline.textContent = issue.headline;
  heroSummary.textContent = issue.summary;
  try {
    heroImage.src = heroSvg(issue);
    heroImage.alt = `${issue.title} ${issue.meta} signal map`;
    heroImage.onerror = () => {
      heroImage.src = "./assets/ai-daily-hero.png";
      heroImage.alt = "AI Daily Atlas visual";
    };
  } catch (error) {
    heroImage.src = "./assets/ai-daily-hero.png";
    heroImage.alt = "AI Daily Atlas visual";
  }
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
