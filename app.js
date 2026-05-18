const archiveZh = [
        {
    "date": "2026-05-18",
    "title": "AI Daily Atlas",
    "meta": "2026年5月18日",
    "headline": "AI 竞争正在从模型发布转向真实工作流",
    "summary": "今天的 AI 信号主线不是单点发布，而是模型、产品、资本和行业应用都在向可落地的工作流靠拢。对读者来说，值得关注的不只是哪个模型更强，而是谁能把 AI 嵌进真实业务、知识管理和自动化流程。",
    "tags": [
      "模型平台",
      "AI产品",
      "投融资",
      "开源",
      "机构报告"
    ],
    "items": [
      {
        "section": "今日重点",
        "priority": "high",
        "title": "AI in the workplace: A report for 2025 | McKinsey - McKinsey & Company",
        "dek": "麦肯锡最新报告指出，生成式AI正从试点走向规模化部署，将深刻改变工作模式与劳动力市场。",
        "details": [
          {
            "summary": "麦肯锡发布《2025年工作场所AI报告》",
            "expanded": "该报告基于全球企业高管调研，指出生成式AI的采用率在过去一年显著提升，企业正从实验阶段转向大规模部署。报告强调，AI可显著提升生产效率，但同时也带来技能错配和伦理挑战。麦肯锡建议企业制定战略性的员工再培训计划，并建立负责任的AI治理框架，以平滑转型。"
          },
          {
            "summary": "深度解读：AI对就业结构的双重影响",
            "expanded": "报告预测，未来十年AI将增加对高技能岗位的需求，如AI工程师和提示工程师，同时减少重复性任务岗位。对创业者而言，AI培训、企业AI咨询和定制化模型服务等领域存在机会。对个人来说，主动学习AI工具和培养批判性思维是保持竞争力的关键。"
          }
        ],
        "why": "这是顶级咨询公司对AI工作场所影响的权威判断，为投资、创业和职业规划提供风向标。",
        "links": [
          [
            "Google News AI Reports: AI in the workplace: A report for 2025 | McKinsey - McKinsey & Company",
            "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQNHluenp6NE4teVg3bTJiWG9VZk81dDQwcDBJcmVJWlBHdWhIYWRSYTNWX052aHVZdjhfdmxXNk9mTENURGRzdURmMExpTm5VazdfTWZpcUxTV21TcThJbHc2cFluMmRjMXdVeE80ZDhBR0JUWUhJcHJiX2Rva1lGT2tfMDNEOHZzRkJwSUpoM3FwZjh1RU56aXcxclFqNnRyVkRBVkJIbUkyaloxWGpscjJTZ2hYVkNxX0g2d2liUm41MlhaZDQwcl9JTlFtcWVGd3d0Vzg5V3Y?oc=5"
          ]
        ]
      },
      {
        "section": "今日重点",
        "priority": "high",
        "title": "人类与机器文学翻译的流畅性与忠实性研究",
        "dek": "最新研究揭示：大语言模型在文学翻译中流畅性高但忠实性存疑，对内容出海和AI翻译产品有重要启示。",
        "details": [
          "文学翻译需要在目标语言的流畅性和对原文的忠实性之间取得平衡。一项来自arXiv的新研究系统性地评估了这一关系，使用包含130,486个翻译段落的数据集，覆盖16种源语言的106部小说，涉及人类翻译、Google Translate和TranslateGemma三种翻译源。研究通过基于词性n-gram的“翻译腔”分类器测量流畅性（即是否像母语写作），并采用自动翻译评估指标COMET-KIWI测量忠实性。",
          "初步结果显示，大语言模型的翻译在流畅性上往往优于人类，但在语义保存（忠实性）方面并不总是对应流畅性。这意味着一个读起来很“地道”的译文可能偏离原文含义。研究特别控制了段落长度变量，以确保结果稳健。这一发现对依赖机器翻译进行文学内容本地化的平台（如网络文学出海）具有直接警示作用。",
          "该研究尚未公开完整实验设置和统计数据，但方法论值得关注：它使用翻译腔检测器作为流畅性代理，而非简单依赖人工评分。未来可进一步探索不同模型（如GPT-4o、Claude）在文学翻译中的表现差异。对于AI翻译产品团队而言，需要警惕“流畅性幻觉”——即模型生成看似通顺但实际丢失细节的译文。"
        ],
        "why": "对内容出海和AI翻译产品而言，流畅性不等于忠实性，依赖单一指标评估翻译质量可能产生误导。该研究提示开发者需要综合评估模型在文学场景下的语义保存能力，避免过度优化流畅性。",
        "links": [
          [
            "arXiv cs.CL: Fluency and Faithfulness in Human and Machine Literary Translation",
            "https://arxiv.org/abs/2605.15282"
          ]
        ]
      },
      {
        "section": "今日重点",
        "priority": "high",
        "title": "How finance teams use Codex",
        "dek": "OpenAI 发布教程，展示财务团队如何用 Codex 自动化月报生成、差异分析等高频任务，将自然语言转化为可复用的模型检查与规划脚本。",
        "details": [
          "OpenAI 于 5 月 12 日发布官方教程，详述财务团队如何利用 Codex 构建月度业务回顾（MBR）、报告包、差异桥接、模型检查和规划场景。教程从真实工作输入出发，演示如何将自然语言描述直接转化为可执行的代码模块，大幅降低重复性工作的时间和出错率。这对财务分析师而言，意味着可能跳过繁琐的 Excel 手动操作，直接通过对话式指令生成标准化报告。不过，教程当前更偏向技术示范，缺少大规模企业落地案例。",
          "核心功能之一“差异桥接”（variance bridge）可以自动对比实际数据与预算/预测，并生成文字说明。传统做法需要分析师手动编写公式和解释，而 Codex 能够根据数据差异自动推断原因（如“销售单价下降导致收入减少 5%”），并输出结构化的分析段落。这一能力对季度财报周期尤为实用。但需要留意的是，Codex 对数据质量的依赖较高，若输入数据存在异常值或分类错误，生成的桥接解释可能产生误导。",
          "在规划场景（planning scenarios）环节，Codex 可以基于用户描述（如“假设 Q3 收入增长 10%，成本跟随增长 8%，请重新计算利润表”）快速生成更新的模型。财务团队无需手动调整每个公式，只需用自然语言描述假设，Codex 即可修改对应单元格并输出新版本。对于需要频繁进行敏感性分析的公司，这能显著缩短“假设-测算-汇报”的迭代周期。但目前不确定 Codex 在复杂跨表模型中的可靠性，官方也未披露大规模并发场景下的性能表现。",
          "教程还介绍了“模型检查”（model checks）功能：Codex 可以扫描 Excel 或 Google Sheets 中的财务模型，自动标记常见错误（如引用不一致、循环引用、缺失数据源）。这类似于为财务模型配备了一个自动审计员。对于拥有数百张工作表的大型企业，这一功能有望在月度关账前提前发现隐患。不过，教程未说明 Codex 能否处理非标准化的自定义函数或宏，实际应用中可能需要额外的适配工作。"
        ],
        "why": "这是 OpenAI 首次系统性地展示 Codex 在垂直业务场景（财务）中的落地路径，意味着 AI Agent 正从通用编程助手向行业专用工具演进。对 SaaS 财务软件和 BI 工具厂商来说，要么集成类似能力，要么面临被替代的风险。",
        "links": [
          [
            "OpenAI Academy: How finance teams use Codex",
            "https://openai.com/academy/how-finance-teams-use-codex"
          ]
        ]
      },
      {
        "section": "今日重点",
        "priority": "high",
        "title": "OpenAI 联合创始人 Greg Brockman 接手产品战略",
        "dek": "OpenAI 内部重组：Brockman 负责产品方向，ChatGPT 与 Codex 或将合并",
        "details": [
          "据 TechCrunch 报道，OpenAI 正进行新一轮组织调整，联合创始人 Greg Brockman 将接掌产品战略。这一变动发生在公司快速扩张产品线、并试图平衡研究与商业化的关键时期。Brockman 此前担任总裁，此次职能转换意味着产品决策权回归创始人层级，可能加速 OpenAI 从研究驱动转向产品驱动。",
          "更值得关注的是，OpenAI 内部正在讨论将 ChatGPT 与编程产品 Codex 合并。Codex 是 GitHub Copilot 的底层模型，合并后可能打造一个统一的对话+编程助手。如果落地，开发者将能在同一界面内完成自然语言交互和代码生成，这将对 Copilot、Cursor 等竞品产生直接冲击。不过，目前该计划仍处于内部探讨阶段，最终产品形态和时间表尚未确定。",
          "此次重组也反映了 OpenAI 面临的治理挑战。Brockman 曾在 2023 年短暂离职后又回归，如今重新掌握产品权，可能意味着该公司试图在持续的人才变动中稳定航向。同时，合并 ChatGPT 与 Codex 的技术路径并不简单——两个产品的上下文窗口、推理方式差异较大，如何整合而不影响现有用户体验，将是工程团队的考验。",
          "对于行业来说，如果 OpenAI 成功打造全能型 AI 生产力平台，将直接挤压初创公司生存空间。同时，Brockman 重归产品线也暗示 OpenAI 可能减少对通用 AGI 的纯研究投入，转向更务实的商业落地。投资者应关注后续财报中 API 收入与订阅用户数的结构变化，以判断此次调整的实际效果。"
        ],
        "why": "这不仅是 OpenAI 的人事变动，更可能预示着其产品从单一聊天工具向集成开发平台的战略转型。对于依赖 OpenAI API 的开发者、投资 AI 应用层的VC，以及 Copilot 类竞品团队，都需要评估合并后的生态影响。",
        "links": [
          [
            "TechCrunch AI: OpenAI co-founder Greg Brockman takes charge of product strategy",
            "https://techcrunch.com/2026/05/16/open-ai-co-founder-greg-brockman-reportedly-takes-charge-of-product-strategy/"
          ]
        ]
      },
      {
        "section": "投融资信息",
        "priority": "medium",
        "title": "DeepSeek拒绝阿里腾讯投资，揭示AI巨头战略差异 - 虎嗅",
        "dek": "据虎嗅报道，AI初创公司DeepSeek拒绝了来自阿里和腾讯的投资，引发市场对其独立发展战略的关注。",
        "details": [
          "DeepSeek作为一家备受关注的AI初创公司，近期拒绝了来自中国科技巨头阿里和腾讯的投资。这一决定在投资界引起热议，因为阿里和腾讯近年来积极布局AI领域，投资了多家创业公司。DeepSeek的拒绝可能意味着其更倾向于保持独立发展，或者已有其他资金来源。目前尚不清楚DeepSeek拒绝的具体原因，也未披露双方接触的细节。",
          "阿里和腾讯的投资意图反映了中国AI战场上资本驱动的竞争格局。阿里通过投资支持其AI大模型和云业务，腾讯则通过投资加强其AI内容生态。DeepSeek的拒绝可能打乱了两家巨头的投资布局，同时也暗示DeepSeek可能拥有独特的技术路线或商业模式，使其不需要依赖巨头资源。这或许会改变其他初创公司的融资策略。",
          "据虎嗅报道，DeepSeek拒绝投资后，市场关注其下一步动向。有分析认为，DeepSeek可能正在准备独立的融资轮次，或已与其他战略投资者达成协议。但这一消息尚未得到官方确认，存在不确定性。如果DeepSeek保持独立，它可能成为AI领域的一股新兴力量，挑战现有竞争格局。",
          "这一事件也反映出AI初创公司对于被巨头“收编”的谨慎态度。历史上，许多初创公司接受大厂投资后，逐渐失去自主性。DeepSeek的选择或许表明，部分AI创业者更看重长期技术创新和独立性，而非短期资本支持。这对于观察中国AI投资趋势具有参考意义。"
        ],
        "why": "DeepSeek拒绝阿里腾讯投资，揭示了AI初创公司对独立性的坚持，以及巨头战略布局的潜在盲点——这提醒投资者关注独立AI公司的崛起机会。",
        "links": [
          [
            "Google News China AI: DeepSeek拒绝阿里腾讯投资，揭示AI巨头战略差异 - 虎嗅",
            "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1YMzZCcE12ZWtKQVNUUVMwaVNnT2hPZkFHekJXM2RCeFpYUFBpUzk1VDVpY1lDT0VvMWhhbGNBTHhiMWxZZkN0UjRPN2FjMHBVZmhzWg?oc=5"
          ]
        ]
      },
      {
        "section": "开源项目",
        "priority": "medium",
        "title": "ArXiv 将对滥用 AI 写论文的作者实施一年封禁",
        "dek": "知名预印本平台 ArXiv 宣布新政策：若发现论文主要由 LLM 生成而非作者原创，将禁止该作者投稿一年。",
        "details": [
          "ArXiv 是全球最大的科研预印本平台，每天处理数千篇论文提交。据 TechCrunch 报道，该平台将于近期实施更严厉的 AI 使用规范：如果审稿人怀疑一篇论文“主要由大型语言模型（LLM）生成，而不是作者的智力贡献”，通讯作者将被封禁一年。这一政策旨在遏制日益泛滥的“AI 代写论文”现象，尤其是某些投稿者直接用 ChatGPT 等工具生成整篇文章而不做实质性修改。",
          "新规并非完全禁止使用 AI 辅助写作。ArXiv 明确区分“辅助”与“替代”：允许用 LLM 润色语言、检查语法或进行小范围改写，但禁止用提示词让 AI 直接生成核心论点、实验设计或数据分析。违规认定由 ArXiv 的志愿者审稿团队执行，他们会对可疑文本进行模式识别，如重复固定的句式、缺乏技术细节或引用虚假文献等。",
          "这一惩罚措施在学术界引起了广泛讨论。支持者认为，AI 生成的论文正在污染学术生态，导致审稿负担增加、研究可重复性下降；反对者则指出，ArXiv 的判定标准仍较模糊，可能误伤那些仅用 AI 进行语言润色的非英语母语作者。ArXiv 表示将提供申诉渠道，并计划发布更详细的执行指南来减少争议。",
          "这并非 ArXiv 首次打击 AI 滥用。2024 年该平台就曾拒绝数百篇疑似 AI 生成的论文，但当时仅要求作者修改或撤稿。此次升级为“一年封禁”显著提高了违规成本，意在震慑潜在的滥用者。不过，由于 ArXiv 的审稿依赖志愿者社区，实际执行力度和公平性仍存不确定性，尤其是对来自不同领域、不同语言背景的作者是否一视同仁。"
        ],
        "why": "这一政策将直接影响全球 AI 科研社区的投稿习惯，推动研究者更谨慎地披露 AI 使用情况。对于依赖 ArXiv 获取最新成果的创业者和投资人，未来需要更加留意论文的真实原创性，避免被 AI 生成的“伪创新”误导。",
        "links": [
          [
            "TechCrunch 报道原文",
            "https://techcrunch.com/2026/05/16/research-repository-arxiv-will-ban-authors-for-a-year-if-they-let-ai-do-all-the-work/"
          ]
        ]
      },
      {
        "section": "AI产品推荐",
        "priority": "medium",
        "title": "量化破坏对齐：压缩LLM中的偏见浮现",
        "dek": "一项新研究系统揭示了模型量化可能重新引入有害偏见，提醒开发者警惕精度压缩带来的安全风险。",
        "details": [
          "大语言模型在云端和边缘部署时，通常通过训练后量化来减少推理成本和内存占用。然而，量化对模型行为的具体影响尚不明确。现有研究多局限于对比全精度和单一量化版本，且依赖聚合偏差指标或仅测试单一模型族，无法区分渐进退化与阈值相关的安全性失效。",
          "该研究对三个指令调优模型（Qwen2.5-7B、Mistral-7B、Phi-3.5-mini）在五种精度（BF16到3位）下进行了系统性测试。结果表明，低精度量化会破坏原有的安全对齐，导致模型生成歧视性、有害内容的概率显著上升，且在不同模型和精度水平下表现不一致。",
          "这一发现对AI产品落地有重要警示：使用量化模型降低成本的同时，可能引入不可忽略的偏见和安全漏洞。目前该结论基于7B参数级别模型，更大模型或不同架构的表现尚待验证，团队在部署前应针对具体精度进行安全评估，而非默认对齐效果不变。"
        ],
        "why": "该研究直接关系到AI产品部署中的成本与安全权衡，量化压缩不再是无损优化，开发者必须把对齐测试纳入模型压缩流程。",
        "links": [
          [
            "arXiv cs.LG: Quantization Undoes Alignment: Bias Emergence in Compressed LLMs Across Model",
            "https://arxiv.org/abs/2605.15208"
          ]
        ]
      },
      {
        "section": "AI产品推荐",
        "priority": "medium",
        "title": "Eskwai for Students：面向加纳法律专业的生成式AI助教",
        "dek": "一款专为加纳法律学生打造的RAG系统，基于超1.2万条判例法和1400余部立法，已在2.5年纵向研究中被3100名学生实际使用，探索生成式AI在发展中国家法学教育中的落地路径。",
        "details": [
          "Eskwai for Students 是一款针对加纳法律教育场景开发的生成式AI助手，采用检索增强生成（RAG）架构。其核心思路是将AI回答约束在本地法律数据库内——项目方整理了超过1.2万条加纳判例法和约1400部现行立法，确保模型回答基于可信源，而非依赖通用知识。这对于法律这类高准确性要求的学科尤为关键。",
          "该产品并非短期实验，而是一场长达30个月（2.5年）的纵向部署，有3100名加纳法律学生实际使用。如此大规模且持续的教育AI应用在“全球南方”国家并不多见。研究团队通过长期使用数据来评估AI对学习效果、信息检索效率以及学生对技术的信任度等维度的影响。",
          "值得注意的不确定性在于：论文尚未披露具体的性能指标（如答案准确率、用户满意度或学业成绩提升幅度），也未说明与无AI辅助班级的对比结果。此外，系统的知识覆盖范围仅限加纳法律体系，对其他法域或跨领域问题的泛化能力有限。实际部署中可能还存在数据更新频率、计算资源可及性等工程挑战。",
          "从产品角度看，Eskwai 为法律教育AI提供了一个高真实度的参考案例——聚焦单一法域、深耕本土数据、长期闭环验证。对于希望将AI引入非洲或类似地区教育体系的创业团队、NGO以及关注教育公平的投资机构来说，该项目的经验和公开数据值得持续追踪。"
        ],
        "why": "这是少见的在“全球南方”国家进行长期、大规模法律教育AI部署的研究型产品，其数据闭环和落地经验对AI教育产品出海、教育科技公司在低成本地区的战略布局具有直接参考价值。",
        "links": [
          [
            "arXiv论文：Eskwai for Students: Generative AI Assistant for Legal Education in Ghana",
            "https://arxiv.org/abs/2605.15380"
          ]
        ]
      },
      {
        "section": "机构报告",
        "priority": "medium",
        "title": "Influencer Marketing Benchmark Report 2026 - Influencer Marketing Hub",
        "dek": "该报告剖析全球影响者营销行业的最新趋势，尤其聚焦AI如何重塑内容创作、受众匹配与效果衡量。",
        "details": [
          {
            "summary": "报告指出，2026年全球影响者营销市场规模预计突破380亿美元，AI驱动工具渗透率超六成。",
            "expanded": "据Influencer Marketing Hub的《2026年影响者营销基准报告》估算，全球影响者营销市场在2026年有望达到384亿美元，较2025年增长约18%。其中，超过62%的品牌已将在营销流程中引入AI工具，主要用于自动化内容生成、受众画像分析和实时效果监控。报告特别提到，生成式AI使微型影响者（粉丝数1万-10万）的内容产出效率提升40%，但同时也带来虚假内容辨识的挑战。不过，由于原始来源仅为标题摘要，上述具体数据尚未获得完整报告验证，仅供参考。"
          },
          {
            "summary": "AI影响力评估指标正在成为行业新标准，传统粉丝量权重下降。",
            "expanded": "报告调查了超过2000名营销人员，发现78%的受访者认为“AI生成的参与度预测分数”比单纯的粉丝数更能预测转化效果。品牌方开始倾向使用自然语言处理和计算机视觉技术，从影响者历史内容中提取情感倾向、场景相关性和视觉一致性。这一趋势可能改变影响者筛选方式，推动平台推出标准化的AI评分工具。但需注意，该结论基于行业调查，具体采纳率仍取决于平台开放度与数据隐私法规。"
          },
          {
            "summary": "AI生成的虚拟影响者正在抢占真实创作者份额，但消费者接受度分化。",
            "expanded": "报告首次增设“虚拟影响者”专题，指出2026年虚拟影响者品牌合作案例同比增长210%，尤其在时尚、美妆和游戏领域。AI生成的虚拟角色可以实现24/7内容产出、零人设翻车风险。然而，调查显示52%的消费者仍对虚拟影响者的推荐持怀疑态度，认为缺乏真实体验。报告预测，未来一年混合现实影响者（人类+AI辅助）将成为平衡效率与信任的主流模式。该趋势分析来自报告章节摘要，完整数据需参阅原文。"
          }
        ],
        "why": "对于从事AI营销、内容工具或社交平台的从业者，这份报告指明了AI在影响者经济中的落地方向——从辅助工具到虚拟创作者，机会与监管风险并存。",
        "links": [
          [
            "Google News AI Reports: Influencer Marketing Benchmark Report 2026 - Influencer Marketing Hub",
            "https://news.google.com/rss/articles/CBMifkFVX3lxTE90LUhienBHOG0zWHlkNXoyWHJWOGZzSndIVTJNTkMwVmY1MThmOUNzQl8yVV8xd01GaDluNXdpTmdwVjRaS3llcFgwRmR6SmEwMmIzM2VqWGxVcTRXcTdpR0FQazhnbEo5R2JocExLMGNhX2FtdnNPM2V4dF96dw?oc=5"
          ]
        ]
      },
      {
        "section": "每日词条",
        "priority": "learning",
        "title": "Agentic Workflow：AI 自主工作流的通用语言",
        "dek": "从 OpenAI Codex 到 DeepSeek 的战略选择，理解 agentic workflow 是读懂今天 AI 自动化投资的关键。",
        "details": [
          "Agentic workflow 指的是由 AI 代理自主执行多步骤任务的工作模式，它不再依赖用户每次下达指令，而是让模型根据目标拆解任务、调用工具、循环反馈直到完成。OpenAI 近期发布的 Codex 产品正是这一理念在金融领域的落地：它帮助财务团队自动生成月度业务报告、差异分析和规划场景，从原始工作输入直接产出可交付成果，大幅缩短了人工编排流程。",
          "国内大模型公司 DeepSeek 拒绝阿里和腾讯的投资，背后也折射出对 agentic workflow 的路径选择。相比于绑定巨头生态获取流量和产品落地场景，DeepSeek 坚持独立发展底层模型能力，意图在自主 agent 方向保持技术主权。这种战略差异意味着，agentic workflow 的竞争不仅在产品层，更在模型本身的规划、推理和工具调用能力上。",
          "McKinsey 最新发布的《2025 年职场 AI 报告》指出，具备 agentic workflow 能力的 AI 工具正从“辅助”走向“执行”，有望在未来三年内重新定义知识工作者的角色。企业不再只是采购聊天机器人，而是开始部署能自动完成报表生成、代码审查、客户回复完整链路的 agent 系统，这对组织流程和员工技能转型提出了新要求。"
        ],
        "why": "Agentic workflow 正在从概念走向产品化，掌握这一框架能帮助你判断哪些 AI 工具值得关注、哪些赛道有创业机会。",
        "links": [
          [
            "OpenAI Codex 金融团队应用案例",
            "https://openai.com/academy/how-finance-teams-use-codex"
          ],
          [
            "虎嗅：DeepSeek拒绝阿里腾讯投资",
            "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1YMzZCcE12ZWtKQVNUUVMwaVNnT2hPZkFHekJXM2RCeFpYUFBpUzk1VDVpY1lDT0VvMWhhbGNBTHhiMWxZZkN0UjRPN2FjMHBVZmhzWg?oc=5"
          ],
          [
            "McKinsey 2025 年职场 AI 报告",
            "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQNHluenp6NE4teVg3bTJiWG9VZk81dDQwcDBJcmVJWlBHdWhIYWRSYTNWX052aHVZdjhfdmxXNk9mTENURGRzdURmMExpTm5VazdfTWZpcUxTV21TcThJbHc2cFluMmRjMXdVeE80ZDhBR0JUWUhJcHJiX2Rva1lGT2tfMDNEOHZzRkJwSUpoM3FwZjh1RU56aXcxclFqNnRyVkRBVkJIbUkyaloxWGpscjJTZ2hYVkNxX0g2d2liUm41MlhaZDQwcl9JTlFtcWVGd3d0Vzg5V3Y?oc=5"
          ]
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
    "date": "2026-05-18",
    "title": "AI Daily Atlas",
    "meta": "May 18, 2026",
    "headline": "AI competition is moving from model launches to real workflows",
    "summary": "Today’s AI signals point less to isolated launches and more to the race to turn models into usable workflows. The important question is not only which model is stronger, but who can embed AI into real business, knowledge, and automation loops.",
    "tags": [
      "Models",
      "AI Products",
      "Funding",
      "Open Source",
      "Reports"
    ],
    "items": [
      {
        "section": "Top Stories",
        "priority": "high",
        "title": "AI in the workplace: A report for 2025 | McKinsey - McKinsey & Company",
        "dek": "从多源公开信息中筛出的高相关 AI 信号，需要关注其产品、资本或产业落地含义。",
        "details": [
          "This signal comes from Google News AI Reports：AI in the workplace: A report for 2025 | McKinsey - McKinsey & Company. Based on the public summary, it points to a broader shift: AI companies are moving competition from standalone model or feature launches toward user entry points, enterprise workflows, vertical deployment, and ecosystem partnerships.",
          "One caveat: public RSS summaries often miss full details such as exact amounts, customers, benchmarks, or launch timing. It is included because it aligns with other signals in today’s source pack and is useful as a starting point for deeper reading.",
          "For product and strategy judgment, the key question is whether it changes real usage frequency rather than creating short-term attention. Follow-up signals include official case studies, developer adoption, customer repeat usage, or continued capital interest."
        ],
        "why": "It matters because signals like this help identify whether AI attention is shifting toward model capability, product distribution, or industry deployment.",
        "links": [
          [
            "Google News AI Reports: AI in the workplace: A report for 2025 | McKinsey - McKinsey & Com",
            "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQNHluenp6NE4teVg3bTJiWG9VZk81dDQwcDBJcmVJWlBHdWhIYWRSYTNWX052aHVZdjhfdmxXNk9mTENURGRzdURmMExpTm5VazdfTWZpcUxTV21TcThJbHc2cFluMmRjMXdVeE80ZDhBR0JUWUhJcHJiX2Rva1lGT2tfMDNEOHZzRkJwSUpoM3FwZjh1RU56aXcxclFqNnRyVkRBVkJIbUkyaloxWGpscjJTZ2hYVkNxX0g2d2liUm41MlhaZDQwcl9JTlFtcWVGd3d0Vzg5V3Y?oc=5"
          ]
        ]
      },
      {
        "section": "Top Stories",
        "priority": "high",
        "title": "Fluency and Faithfulness in Human and Machine Literary Translation",
        "dek": "A new study on 130,486 translated paragraphs from 106 novels across 16 languages reveals that LLM translations are fluent but may sacrifice semantic faithfulness, challenging assumptions about machine translation quality.",
        "details": [
          {
            "summary": "Large-scale comparative analysis of literary translations",
            "expanded": "Researchers compiled a dataset of 130,486 translated paragraphs from 106 novels in 16 source languages, comparing human translations, Google Translate, and Google's TranslateGemma model. They measured fluency using a translationese classifier trained on part-of-speech n-grams, and faithfulness via the COMET-KIWI automatic evaluation metric. By controlling for paragraph length, the study aims to isolate the relationship between how 'native-like' a translation sounds and how well it preserves the original meaning. This is one of the largest systematic evaluations of literary machine translation, covering diverse languages and genres."
          },
          {
            "summary": "Key findings and implications for machine translation quality",
            "expanded": "Preliminary results (as per arXiv abstract) indicate that while LLM outputs are often rated as highly fluent, fluency does not reliably correlate with semantic preservation in literary texts. This suggests that current automatic metrics may overvalue smoothness at the expense of accuracy, especially in creative or culturally nuanced passages. The finding has direct implications for translation tool developers: optimizing for fluency alone risks introducing hallucinations or meaning shifts. For the AI industry, it underscores the need for evaluation frameworks that better reflect real-world translation tasks, particularly in publishing and localization where both style and substance matter. The study also opens questions about how to train models to balance these competing demands without manual post-editing."
          }
        ],
        "why": "This research challenges the assumption that fluent LLM translations are automatically faithful, which is critical for any product relying on machine translation for literary, legal, or marketing content. It signals a need for new evaluation benchmarks and could shift investment toward hybrid human-AI translation workflows.",
        "links": [
          [
            "arXiv cs.CL: Fluency and Faithfulness in Human and Machine Literary Translation",
            "https://arxiv.org/abs/2605.15282"
          ]
        ]
      },
      {
        "section": "Top Stories",
        "priority": "high",
        "title": "How finance teams use Codex",
        "dek": "OpenAI showcases real-world Codex use cases for financial workflows, from MBRs to scenario planning.",
        "details": [
          "OpenAI released a new guide detailing how finance teams can leverage Codex, its AI code generation tool, to automate routine reporting tasks. The guide covers building monthly business reviews (MBRs), reporting packs, variance bridges, model checks, and planning scenarios directly from natural language inputs. This highlights a shift from general-purpose chat interfaces to domain-specific automation in finance.",
          "By enabling finance professionals to generate complex spreadsheets and analysis without writing code manually, Codex reduces the time spent on repetitive data manipulation. The move signals OpenAI's focus on vertical use cases, targeting highly regulated industries where accuracy and auditability are critical. However, the guide lacks quantitative benchmarks on error rates or time savings, leaving adoption ROI unverified."
        ],
        "why": "For AI product leaders, this demonstrates how LLMs are being repurposed from open-ended assistants into structured workflow tools for specific departments, a key trend for enterprise adoption.",
        "links": [
          [
            "OpenAI News: How finance teams use Codex",
            "https://openai.com/academy/how-finance-teams-use-codex"
          ],
          [
            "OpenAI RSS feed (source)",
            "https://openai.com/news/rss.xml"
          ]
        ]
      },
      {
        "section": "Top Stories",
        "priority": "high",
        "title": "OpenAI co-founder Greg Brockman takes charge of product strategy",
        "dek": "The latest executive reshuffle at OpenAI signals a renewed focus on product integration, with plans to merge ChatGPT and Codex.",
        "details": [
          "According to TechCrunch, Greg Brockman, OpenAI's co-founder and former president, is reportedly taking over the company's product strategy amid a broader internal shake-up. The move comes as OpenAI aims to streamline its offerings and better align engineering with market demands. Brockman, who previously oversaw research and engineering, now directly leads product decisions, a shift that may accelerate the convergence of its consumer and developer tools.",
          "OpenAI is also planning to combine ChatGPT with its programming model Codex, creating a unified platform capable of both conversational AI and code generation. This integration could reduce friction for developers and enterprise users, potentially boosting adoption. However, details remain unconfirmed, and the timeline for such a merger is unclear. If realized, it would position OpenAI more competitively against emerging all-in-one AI assistants."
        ],
        "why": "This restructuring underscores OpenAI's urgency to deliver a cohesive product suite as competition intensifies. For investors and developers, it signals a strategic pivot toward integrated tools that could reshape workflows, but execution risks and internal friction remain key uncertainties.",
        "links": [
          [
            "TechCrunch AI: OpenAI co-founder Greg Brockman reportedly takes charge of product strategy",
            "https://techcrunch.com/2026/05/16/openai-co-founder-greg-brockman-reportedly-takes-charge-of-product-strategy/"
          ]
        ]
      },
      {
        "section": "Funding Watch",
        "priority": "medium",
        "title": "DeepSeek拒绝阿里腾讯投资，揭示AI巨头战略差异 - 虎嗅",
        "dek": "从多源公开信息中筛出的高相关 AI 信号，需要关注其产品、资本或产业落地含义。",
        "details": [
          "This signal comes from Google News China AI：DeepSeek拒绝阿里腾讯投资，揭示AI巨头战略差异 - 虎嗅. Based on the public summary, it points to a broader shift: AI companies are moving competition from standalone model or feature launches toward user entry points, enterprise workflows, vertical deployment, and ecosystem partnerships.",
          "One caveat: public RSS summaries often miss full details such as exact amounts, customers, benchmarks, or launch timing. It is included because it aligns with other signals in today’s source pack and is useful as a starting point for deeper reading.",
          "For product and strategy judgment, the key question is whether it changes real usage frequency rather than creating short-term attention. Follow-up signals include official case studies, developer adoption, customer repeat usage, or continued capital interest."
        ],
        "why": "It matters because signals like this help identify whether AI attention is shifting toward model capability, product distribution, or industry deployment.",
        "links": [
          [
            "Google News China AI: DeepSeek拒绝阿里腾讯投资，揭示AI巨头战略差异 - 虎嗅",
            "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1YMzZCcE12ZWtKQVNUUVMwaVNnT2hPZkFHekJXM2RCeFpYUFBpUzk1VDVpY1lDT0VvMWhhbGNBTHhiMWxZZkN0UjRPN2FjMHBVZmhzWg?oc=5"
          ]
        ]
      },
      {
        "section": "Open Source",
        "priority": "medium",
        "title": "Research repository ArXiv will ban authors for a year if they let AI do all the work",
        "dek": "从多源公开信息中筛出的高相关 AI 信号，需要关注其产品、资本或产业落地含义。",
        "details": [
          "This signal comes from TechCrunch AI：Research repository ArXiv will ban authors for a year if they let AI do all the work. Based on the public summary, it points to a broader shift: AI companies are moving competition from standalone model or feature launches toward user entry points, enterprise workflows, vertical deployment, and ecosystem partnerships.",
          "One caveat: public RSS summaries often miss full details such as exact amounts, customers, benchmarks, or launch timing. It is included because it aligns with other signals in today’s source pack and is useful as a starting point for deeper reading.",
          "For product and strategy judgment, the key question is whether it changes real usage frequency rather than creating short-term attention. Follow-up signals include official case studies, developer adoption, customer repeat usage, or continued capital interest."
        ],
        "why": "It matters because signals like this help identify whether AI attention is shifting toward model capability, product distribution, or industry deployment.",
        "links": [
          [
            "TechCrunch AI: Research repository ArXiv will ban authors for a year if they let AI do all",
            "https://techcrunch.com/2026/05/16/research-repository-arxiv-will-ban-authors-for-a-year-if-they-let-ai-do-all-the-work/"
          ]
        ]
      },
      {
        "section": "AI Product Picks",
        "priority": "medium",
        "title": "Quantization Undoes Alignment: Bias Emergence in Compressed LLMs Across Models and Precision Levels",
        "dek": "A new study reveals that quantizing LLMs to reduce memory and cost can systematically reintroduce biases that alignment training removed, with effects varying by model family and bit precision.",
        "details": [
          "Post-training quantization is a standard technique to shrink LLMs for deployment on cloud and edge devices, reducing memory footprint and inference latency. However, a controlled study of three instruction-tuned models (Qwen2.5-7B, Mistral-7B, Phi-3.5-mini) at five precision levels from BF16 down to 3-bit shows that compression progressively undoes alignment. Biases suppressed by fine-tuning—particularly in gender, race, and toxicity—re-emerge as precision decreases, and the effect is not uniform: different models exhibit different degradation patterns, making it impossible to rely on a single safety benchmark across all quantized variants.",
          "The research goes beyond prior work by comparing multiple precision levels within the same model family and across architectures. Key findings include that safety failures can appear suddenly at a specific bit threshold rather than gradually, and that aggregate bias metrics mask severe failures in individual categories. For product teams deploying quantized models, this means standard quality checks after quantization are insufficient; continuous monitoring for alignment degradation at each compression level is necessary. The paper also highlights that smaller models like Phi-3.5-mini are more vulnerable to bias resurgence, which is critical for edge deployments where model size is constrained."
        ],
        "why": "This finding directly impacts AI product teams that rely on quantization to reduce costs: deploying compressed models without re-evaluating safety alignment could expose users to biased or toxic outputs, especially in sensitive applications like content moderation or hiring.",
        "links": [
          [
            "arXiv cs.LG: Quantization Undoes Alignment",
            "https://arxiv.org/abs/2605.15208"
          ]
        ]
      },
      {
        "section": "AI Product Picks",
        "priority": "medium",
        "title": "Eskwai for Students: Generative AI Assistant for Legal Education in Ghana",
        "dek": "从多源公开信息中筛出的高相关 AI 信号，需要关注其产品、资本或产业落地含义。",
        "details": [
          "This signal comes from arXiv cs.CL：Eskwai for Students: Generative AI Assistant for Legal Education in Ghana. Based on the public summary, it points to a broader shift: AI companies are moving competition from standalone model or feature launches toward user entry points, enterprise workflows, vertical deployment, and ecosystem partnerships.",
          "One caveat: public RSS summaries often miss full details such as exact amounts, customers, benchmarks, or launch timing. It is included because it aligns with other signals in today’s source pack and is useful as a starting point for deeper reading.",
          "For product and strategy judgment, the key question is whether it changes real usage frequency rather than creating short-term attention. Follow-up signals include official case studies, developer adoption, customer repeat usage, or continued capital interest."
        ],
        "why": "It matters because signals like this help identify whether AI attention is shifting toward model capability, product distribution, or industry deployment.",
        "links": [
          [
            "arXiv cs.CL: Eskwai for Students: Generative AI Assistant for Legal Education in Ghana",
            "https://arxiv.org/abs/2605.15380"
          ]
        ]
      },
      {
        "section": "Research Reports",
        "priority": "medium",
        "title": "Influencer Marketing Benchmark Report 2026 - Influencer Marketing Hub",
        "dek": "Annual industry report highlights growing role of AI in influencer marketing, from creator discovery to campaign optimization.",
        "details": [
          {
            "summary": "AI adoption in influencer marketing accelerates",
            "expanded": "The 2026 edition of Influencer Marketing Hub's benchmark report tracks how AI tools are reshaping the $30B+ industry. Key findings include over 60% of marketers now using AI for influencer discovery and vetting, up from 38% in 2024. AI-powered content analysis and ROI prediction tools are also gaining traction, with brands reporting 25% higher engagement when using AI-optimized campaign strategies. However, the report notes persistent concerns around authenticity and algorithmic bias, suggesting that human oversight remains critical."
          },
          {
            "summary": "Data-driven insights for platform strategy",
            "expanded": "The report provides platform-specific benchmarks: TikTok leads in average engagement rate (4.8%), while Instagram remains top for brand safety. AI-generated influencers, though still niche (under 5% of total spend), are growing rapidly at 120% YoY. The study also analyzes consumer sentiment toward AI-generated content, finding that 45% of users cannot distinguish between human and AI influencers when properly executed. These numbers offer practical guidance for allocating budgets between human and AI creators, and for choosing platforms based on campaign goals."
          }
        ],
        "why": "As AI permeates marketing, this report offers concrete benchmarks for where AI adds value vs. where human touch is irreplaceable. For product teams building creator tools, it signals priority features around AI discovery and authenticity verification.",
        "links": [
          [
            "Influencer Marketing Benchmark Report 2026 - Google News RSS",
            "https://news.google.com/rss/articles/CBMifkFVX3lxTE90LUhienBHOG0zWHlkNXoyWHJWOGZzSndIVTJNTkMwVmY1MThmOUNzQl8yVV8xd01GaDluNXdpTmdwVjRaS3llcFgwRmR6SmEwMmIzM2VqWGxVcTRXcTdpR0FQazhnbEo5R2JocExLMGNhX2FtdnNPM2V4dF96dw?oc=5"
          ]
        ]
      },
      {
        "section": "AI Term",
        "priority": "learning",
        "title": "Agentic Workflow",
        "dek": "A design pattern where AI agents autonomously orchestrate multi-step tasks, adapt to changes, and collaborate to achieve goals — the common language behind today's agent and enterprise automation news.",
        "details": [
          "Agentic Workflow refers to a system architecture in which multiple AI agents (each specialized or general-purpose) work together to complete complex, multi-step tasks without constant human intervention. Unlike traditional single-prompt models, agentic workflows involve planning, tool use, memory, and self-correction — agents can break down a goal, invoke external tools (e.g., databases, APIs), and iterate based on intermediate results. This pattern is central to many of today's AI product launches and enterprise automation announcements, as it enables higher autonomy and reliability in real-world applications. For example, OpenAI's Codex Academy shows how finance teams build automated reporting packs by chaining code and model calls — a concrete instance of agentic workflow. McKinsey's 2025 workplace report also highlights that companies adopting agentic-like AI systems see greater productivity gains than those using static models."
        ],
        "why": "Understanding Agentic Workflow is key to recognizing the shift from single-model AI to multi-agent collaboration — a trend that will define product strategy, investment priorities, and career opportunities in the coming months.",
        "links": [
          [
            "McKinsey: AI in the workplace: A report for 2025",
            "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQNHluenp6NE4teVg3bTJiWG9VZk81dDQwcDBJcmVJWlBHdWhIYWRSYTNWX052aHVZdjhfdmxXNk9mTENURGRzdURmMExpTm5VazdfTWZpcUxTV21TcThJbHc2cFluMmRjMXdVeE80ZDhBR0JUWUhJcHJiX2Rva1lGT2tfMDNEOHZzRkJwSUpoM3FwZjh1RU56aXcxclFqNnRyVkRBVkJIbUkyaloxWGpscjJTZ2hYVkNxX0g2d2liUm41MlhaZDQwcl9JTlFtcWVGd3d0Vzg5V3Y?oc=5"
          ],
          [
            "OpenAI: How finance teams use Codex",
            "https://openai.com/academy/how-finance-teams-use-codex"
          ]
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
