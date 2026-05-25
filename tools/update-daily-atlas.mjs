#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const appPath = path.join(rootDir, "app.js");
const indexPath = path.join(rootDir, "index.html");
const timezone = "Asia/Shanghai";
const provider = process.env.AI_PROVIDER || (process.env.DEEPSEEK_API_KEY ? "deepseek" : "openai");
const deepseekModel = process.env.DEEPSEEK_MODEL || "deepseek-v4-flash";
const openaiModel = process.env.OPENAI_MODEL || "gpt-5-mini";
const deepseekBaseUrl = process.env.DEEPSEEK_BASE_URL || "https://api.deepseek.com";
const maxSourceEntries = Number(process.env.MAX_SOURCE_ENTRIES || 140);
const maxEntriesPerSource = Number(process.env.MAX_ENTRIES_PER_SOURCE || 8);
const jsonSystemPrompt = "You are the editor of AI Daily Atlas. Return valid JSON only. Base every factual claim on the provided SOURCE_PACK.";

function googleNews(name, query, locale = { hl: "en-US", gl: "US", ceid: "US:en" }) {
  const params = new URLSearchParams({
    q: query,
    hl: locale.hl,
    gl: locale.gl,
    ceid: locale.ceid
  });
  return [name, `https://news.google.com/rss/search?${params.toString()}`];
}

function dayOfYear(dateString) {
  const date = new Date(`${dateString}T12:00:00+08:00`);
  const start = new Date(`${dateString.slice(0, 4)}-01-01T12:00:00+08:00`);
  return Math.floor((date - start) / (24 * 60 * 60 * 1000)) + 1;
}

const sourceFeeds = [
  googleNews("Google News AI Labs", "(OpenAI OR Anthropic OR DeepMind OR xAI OR Meta AI OR Microsoft AI OR NVIDIA AI) when:2d"),
  googleNews("Google News AI Models", "(OpenAI OR Anthropic OR Google DeepMind OR xAI OR Meta AI OR DeepSeek OR Qwen OR Kimi) (model OR API OR agent OR launch OR release OR partnership) when:3d"),
  googleNews("Google News AI Infrastructure", "(NVIDIA OR AMD OR TSMC OR Broadcom OR AI chip OR GPU OR datacenter OR data center OR humanoid robot OR robotics) (AI OR inference OR compute) when:3d"),
  googleNews("Google News China AI", "(DeepSeek OR Qwen OR MiniMax OR Zhipu OR Kimi OR Doubao OR Alibaba AI OR Tencent AI) when:2d", {
    hl: "zh-CN",
    gl: "CN",
    ceid: "CN:zh-Hans"
  }),
  googleNews("Google News China AI Signals", "(DeepSeek OR Qwen OR MiniMax OR Zhipu OR Kimi OR Moonshot OR Doubao OR 阿里 OR 腾讯 OR 字节 OR 智谱 OR 月之暗面) (发布 OR 上线 OR 融资 OR 合作 OR 模型 OR 人事 OR 创业 OR 投资) when:3d", {
    hl: "zh-CN",
    gl: "CN",
    ceid: "CN:zh-Hans"
  }),
  googleNews("Google News AI Funding", "(AI startup funding OR AI acquisition OR AI IPO OR 人工智能 融资 OR AI 投融资) when:2d"),
  googleNews("Google News AI Products", "(AI agent product launch OR AI tool Product Hunt OR AI workflow tool OR AI 产品 发布) when:2d"),
  googleNews("Google News AI Product Discovery", "(site:producthunt.com/products AI agent OR AI productivity tool OR AI research workflow OR AI knowledge management) when:7d"),
  googleNews("Google News AI Reports", "(AI report PDF OR State of AI report OR Stanford AI Index OR McKinsey AI report OR BCG AI report OR AI 报告) when:14d"),
  googleNews("Google News AI Views", "(AI industry analysis OR AI founder interview OR AI strategy OR AI governance OR AI adoption OR AI 行业 访谈 OR AI 产业 观点) when:7d"),
  ["AI Valley", "https://www.theaivalley.com/feed"],
  ["The Rundown AI", "https://www.therundown.ai/feed"],
  ["Ben's Bites", "https://www.bensbites.co/feed"],
  ["TLDR AI", "https://tldr.tech/ai/feed"],
  ["The Batch", "https://www.deeplearning.ai/the-batch/feed/"],
  ["Latent Space", "https://www.latent.space/feed"],
  ["Import AI", "https://importai.substack.com/feed"],
  ["OpenAI News", "https://openai.com/news/rss.xml"],
  ["Anthropic News", "https://www.anthropic.com/news/rss.xml"],
  ["Google AI Blog", "https://blog.google/technology/ai/rss/"],
  ["Google DeepMind", "https://deepmind.google/discover/blog/rss.xml"],
  ["NVIDIA AI Blog", "https://blogs.nvidia.com/blog/category/deep-learning/feed/"],
  ["Hugging Face Blog", "https://huggingface.co/blog/feed.xml"],
  ["GitHub AI & ML", "https://github.blog/ai-and-ml/feed/"],
  ["TechCrunch AI", "https://techcrunch.com/category/artificial-intelligence/feed/"],
  ["VentureBeat AI", "https://venturebeat.com/category/ai/feed/"],
  ["Product Hunt", "https://www.producthunt.com/feed"],
  ["arXiv cs.AI", "https://export.arxiv.org/rss/cs.AI"],
  ["arXiv cs.CL", "https://export.arxiv.org/rss/cs.CL"],
  ["arXiv cs.LG", "https://export.arxiv.org/rss/cs.LG"],
  ["机器之心", "https://www.jiqizhixin.com/rss"],
  ["量子位", "https://www.qbitai.com/feed"]
];

function curatedProductSignals(date) {
  const publishedAt = `${addShanghaiDays(date, -3)}T09:00:00+08:00`;
  const products = [
    {
      source: "Curated AI Products",
      title: "Recall: personal AI knowledge base for articles, videos, PDFs, and notes",
      link: "https://www.recall.it/",
      date: publishedAt,
      curatedFallback: true,
      summary: "Recall saves, summarizes, tags, connects, and lets users chat with web pages, YouTube videos, podcasts, PDFs, books, and notes. It is useful for turning daily AI reading into a reusable personal knowledge base instead of a disposable reading list."
    },
    {
      source: "Curated AI Products",
      title: "Liminary: AI research workspace for consultants, strategists, and researchers",
      link: "https://liminary.io/",
      date: publishedAt,
      curatedFallback: true,
      summary: "Liminary is built for high-stakes recommendations grounded in real research. It helps users save articles, reports, PDFs, AI chats, and videos, annotate them, keep source traceability, and reuse insights across projects."
    },
    {
      source: "Curated AI Products",
      title: "Anuma: multi-model AI workspace with private cross-model memory",
      link: "https://www.anuma.ai/",
      date: publishedAt,
      curatedFallback: true,
      summary: "Anuma aggregates ChatGPT, Claude, Gemini, Grok, DeepSeek, Kimi, Llama, and other models into one workspace, with a privacy-focused memory layer that users can edit and carry across models."
    },
    {
      source: "Curated AI Products",
      title: "Magic Patterns: AI design agent for interactive product prototypes",
      link: "https://www.magicpatterns.com/",
      date: publishedAt,
      curatedFallback: true,
      summary: "Magic Patterns helps product teams generate interactive mockups from a prompt, screenshot, existing style, or design system. It is useful for PMs and founders who need to make product ideas discussable before engineering starts."
    },
    {
      source: "Curated AI Products",
      title: "Granola: AI meeting notes built for real work conversations",
      link: "https://www.granola.ai/",
      date: publishedAt,
      curatedFallback: true,
      summary: "Granola turns meetings into structured notes without behaving like a heavy meeting bot. It is useful for operators, product teams, investors, and consultants who need searchable meeting memory and cleaner follow-ups."
    },
    {
      source: "Curated AI Products",
      title: "NotebookLM: source-grounded AI notebook for research and learning",
      link: "https://notebooklm.google/",
      date: publishedAt,
      curatedFallback: true,
      summary: "NotebookLM lets users upload sources and ask questions against them, with citations and audio-style summaries. It is useful for turning reports, papers, and long documents into a grounded research workspace."
    },
    {
      source: "Curated AI Products",
      title: "Gamma: AI-native deck and document creation workspace",
      link: "https://gamma.app/",
      date: publishedAt,
      curatedFallback: true,
      summary: "Gamma helps users create presentations, webpages, and documents from prompts or outlines. It is useful for strategy, marketing, and internal communication workflows where speed and iteration matter."
    },
    {
      source: "Curated AI Products",
      title: "Flowith: canvas-based AI workspace for multi-step thinking",
      link: "https://flowith.io/",
      date: publishedAt,
      curatedFallback: true,
      summary: "Flowith uses a visual canvas to organize AI conversations, research threads, and multi-step workflows. It is useful for people who think spatially and need to connect prompts, sources, and outputs across a project."
    },
    {
      source: "Curated AI Products",
      title: "Fellou: agentic browser for research and workflow automation",
      link: "https://fellou.ai/",
      date: publishedAt,
      curatedFallback: true,
      summary: "Fellou positions itself as an agentic browser that can search, navigate, collect information, and help automate web workflows. It is useful to track as browser-based agents become a real productivity category."
    }
  ];
  const offset = dayOfYear(date) % products.length;
  return products
    .map((product, index) => ({
      ...product,
      curatedPriority: products.length - ((index - offset + products.length) % products.length)
    }));
}

function shanghaiDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

function chineseDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${year}年${Number(month)}月${Number(day)}日`;
}

function englishDate(dateString) {
  const date = new Date(`${dateString}T00:00:00+08:00`);
  return new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

function addShanghaiDays(dateString, delta) {
  const date = new Date(`${dateString}T00:00:00+08:00`);
  date.setUTCDate(date.getUTCDate() + delta);
  return shanghaiDate(date);
}

function shanghaiWeekday(dateString) {
  return new Date(`${dateString}T12:00:00+08:00`).getUTCDay();
}

function sourceDateString(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return shanghaiDate(date);
}

function dateWindowForIssue(issueDate) {
  const isWeekendWindow = shanghaiWeekday(issueDate) === 1;
  const primaryStartDate = addShanghaiDays(issueDate, isWeekendWindow ? -2 : -1);
  const primaryEndDate = addShanghaiDays(issueDate, -1);
  return {
    primaryDate: primaryEndDate,
    primaryStartDate,
    primaryEndDate,
    fallbackStartDate: addShanghaiDays(issueDate, -7),
    fallbackEndDate: addShanghaiDays(issueDate, isWeekendWindow ? -3 : -2),
    isWeekendWindow
  };
}

function dateStringForMonthDay(year, month, day) {
  const date = new Date(`${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T12:00:00+08:00`);
  if (Number.isNaN(date.getTime())) return "";
  const dateString = shanghaiDate(date);
  const [, actualMonth, actualDay] = dateString.split("-").map(Number);
  if (actualMonth !== Number(month) || actualDay !== Number(day)) return "";
  return dateString;
}

function explicitEventDates(entry, issueDate) {
  const issueYear = Number(issueDate.slice(0, 4));
  const text = `${entry.title || ""} ${entry.summary || ""}`;
  const dates = new Set();
  for (const match of text.matchAll(/\b(20\d{2})[-/.年](\d{1,2})[-/.月](\d{1,2})日?\b/g)) {
    const date = dateStringForMonthDay(Number(match[1]), Number(match[2]), Number(match[3]));
    if (date) dates.add(date);
  }
  for (const match of text.matchAll(/(?:^|[^\d])(\d{1,2})月(\d{1,2})日/g)) {
    const date = dateStringForMonthDay(issueYear, Number(match[1]), Number(match[2]));
    if (date) dates.add(date);
  }
  for (const match of text.matchAll(/(?:^|[^\d])(\d{1,2})[/.](\d{1,2})(?:$|[^\d])/g)) {
    const date = dateStringForMonthDay(issueYear, Number(match[1]), Number(match[2]));
    if (date) dates.add(date);
  }
  if (/315曝光|315晚会|3[·.]15|消费者权益日/i.test(text)) {
    const date = dateStringForMonthDay(issueYear, 3, 15);
    if (date) dates.add(date);
  }
  return [...dates];
}

function hasDateInWindow(dates, startDate, endDate) {
  return dates.some((date) => date >= startDate && date <= endDate);
}

function lookbackDescription(issueDate = shanghaiDate()) {
  const { primaryStartDate, primaryEndDate, isWeekendWindow } = dateWindowForIssue(issueDate);
  if (isWeekendWindow) {
    return `每天北京时间 7:30 生成，周一优先覆盖 ${primaryStartDate} 至 ${primaryEndDate} 的周末中美 AI 信号；少数产品、深度和观点会标注近7天补位。`;
  }
  return `每天北京时间 7:30 生成，优先覆盖 ${primaryEndDate} 的中美 AI 信号；少数产品、深度和观点会标注近7天补位。`;
}

function responseText(response) {
  if (typeof response.output_text === "string") return response.output_text;
  return (response.output || [])
    .flatMap((item) => item.content || [])
    .filter((content) => content.type === "output_text" && content.text)
    .map((content) => content.text)
    .join("\n");
}

function extractJson(text) {
  const trimmed = text.trim();
  if (trimmed.startsWith("{")) return JSON.parse(trimmed);
  const match = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (match) return JSON.parse(match[1]);
  const objectStart = trimmed.indexOf("{");
  const objectEnd = trimmed.lastIndexOf("}");
  if (objectStart !== -1 && objectEnd > objectStart) {
    return JSON.parse(trimmed.slice(objectStart, objectEnd + 1));
  }
  throw new Error("Model response did not contain parseable JSON.");
}

function decodeHtml(value = "") {
  return String(value)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));
}

function stripTags(value = "") {
  return decodeHtml(value)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeKey(value) {
  return String(value || "").trim().toLowerCase();
}

function tagValue(block, tag) {
  const escaped = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = block.match(new RegExp(`<${escaped}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${escaped}>`, "i"));
  return match ? decodeHtml(match[1]).trim() : "";
}

function atomLink(block) {
  const match = block.match(/<link[^>]+href=["']([^"']+)["'][^>]*>/i);
  return match ? decodeHtml(match[1]).trim() : "";
}

function isImageUrl(url = "") {
  return /\.(avif|gif|jpe?g|png|webp)(\?|#|$)/i.test(url)
    || /substackcdn\.com\/image|wp-content\/uploads|resize=|youtube\/w_/i.test(url);
}

function itemImage(block) {
  const mediaMatch = block.match(/<media:content[^>]+url=["']([^"']+)["'][^>]*>/i)
    || block.match(/<media:thumbnail[^>]+url=["']([^"']+)["'][^>]*>/i)
    || block.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
  if (mediaMatch) {
    const url = decodeHtml(mediaMatch[1]).trim();
    return isImageUrl(url) ? url : "";
  }
  const enclosure = block.match(/<enclosure[^>]+url=["']([^"']+)["'][^>]*type=["']image\/[^"']+["'][^>]*>/i);
  if (!enclosure) return "";
  const url = decodeHtml(enclosure[1]).trim();
  return isImageUrl(url) ? url : "";
}

function itemDate(block) {
  const raw = tagValue(block, "pubDate") || tagValue(block, "updated") || tagValue(block, "published") || tagValue(block, "dc:date");
  if (!raw) return "";
  const date = new Date(raw);
  return Number.isNaN(date.getTime()) ? raw : date.toISOString();
}

function sourceWeight(source = "") {
  if (/OpenAI|Anthropic|Google AI|Google DeepMind|NVIDIA|Hugging Face|GitHub/i.test(source)) return 18;
  if (/Google News AI Labs|Google News China AI|Google News AI Funding|Google News AI Reports/i.test(source)) return 16;
  if (/TechCrunch|VentureBeat|量子位|机器之心/i.test(source)) return 13;
  if (/Latent Space|Import AI|AI Valley|Rundown|Ben's Bites|TLDR|Batch/i.test(source)) return 10;
  if (/Product Hunt/i.test(source)) return 7;
  return 8;
}

function relevanceScore(entry) {
  const text = `${entry.source} ${entry.title} ${entry.summary}`.toLowerCase();
  const timestamp = Date.parse(entry.date) || 0;
  const ageHours = timestamp ? Math.max(0, (Date.now() - timestamp) / 36e5) : 168;
  let score = sourceWeight(entry.source) + Math.max(0, 18 - ageHours / 6);
  if (/openai|anthropic|deepmind|google|xai|meta|microsoft|nvidia|deepseek|qwen|minimax|zhipu|kimi|doubao|alibaba|tencent|bytedance|字节|阿里|腾讯|智谱|月之暗面/.test(text)) score += 12;
  if (/launch|release|announc|partnership|deploy|model|api|agent|robot|inference|benchmark|发布|上线|合作|模型|机器人|推理|评测/.test(text)) score += 8;
  if (/funding|ipo|acquisition|invest|valuation|round|融资|投融资|上市|并购|估值|投资/.test(text)) score += 8;
  if (/report|pdf|research|paper|index|survey|study|报告|研究|论文|指数|白皮书/.test(text)) score += 7;
  if (/github|open source|hugging face|repo|开源/.test(text)) score += 6;
  if (/product hunt|tool|workflow|memory|canvas|agentmemory|产品|工具|工作流/.test(text)) score += 4;
  if (/commencement speech|screen share|wordpress|spotify|developer tools, one menu/i.test(text)) score -= 8;
  if (!/ai|openai|anthropic|deepmind|llm|model|agent|robot|人工智能|大模型|模型|智能/.test(text)) score -= 10;
  return score;
}

function entryText(entry) {
  return `${entry.source || ""} ${entry.title || ""} ${entry.summary || ""}`.toLowerCase();
}

function entryContentText(entry) {
  return `${entry.title || ""} ${entry.summary || ""}`.toLowerCase();
}

const priorityCompanyPattern = /openai|anthropic|deepmind|google|xai|meta|microsoft|amazon|aws|nvidia|databricks|tsmc|amd|broadcom|deepseek|qwen|zhipu|z\.ai|minimax|kimi|moonshot|doubao|bytedance|baidu|tencent|alibaba|字节|阿里|腾讯|百度|智谱|月之暗面|阶跃星辰|零一万物/i;
const aiLeaderPattern = /sam altman|greg brockman|ilya|sutskever|karpathy|geoffrey hinton|yann lecun|andrew ng|dario amodei|demis hassabis|mustafa suleyman|liang wenfeng|梁文锋|李飞飞|周鸿祎|王小川|张鹏|ai leader|founder|co-founder|ceo|cto|chief scientist|负责人|创始人|离职|加入|创业|人事|高管/i;
const modelLaunchPattern = /\bmodel\b|\bgpt\b|\bclaude\b|\bgemini\b|\bgrok\b|\bllama\b|\bqwen\b|\bdeepseek\b|\bglm\b|\bkimi\b|\bdoubao\b|\brelease\b|\blaunch\b|\bannounc|\bapi\b|\brealtime\b|\bvoice\b|模型|发布|上线|语音|多模态|推理/i;
const industryChainPattern = /chip|gpu|inference|compute|datacenter|robot|robotics|humanoid|world model|video model|simulation|warehouse|factory|logistics|芯片|算力|推理|机器人|世界模型|视频模型|仿真|物流|制造|数据中心/i;
const communityConcernPattern = /safety|privacy|security|copyright|lawsuit|regulat|alignment|misuse|jailbreak|leak|whistleblower|concern|controversy|poison|安全|隐私|版权|监管|诉讼|争议|泄露|对齐|投毒|黑产/i;
const productivityProductPattern = /productivity|knowledge|research|workspace|workflow|memory|notes|browser|extension|assistant|agent|automation|calendar|email|docs|spreadsheet|meeting|design|prototype|知识|研究|效率|工作流|记忆|笔记|浏览器|助手|自动化|会议|原型|设计/i;
const broadDiscussionPattern = /product hunt|hacker news|reddit|github trending|launch|reviews?|users?|rating|community|viral|讨论|热议|好评|用户|社区/i;
const strategicReportPattern = /future|outlook|landscape|state of|index|benchmark report|survey|adoption|enterprise|industry|market|application|trend|未来|趋势|全景|产业|应用|采用|企业|市场|调研|指数/i;
const deepReadStylePattern = /\banalysis\b|\bdeep[- ]dive\b|\bessay\b|\binterview\b|\blong read\b|\bexplainer\b|\bguide\b|\bopinion\b|\bop-ed\b|\bcommentary\b|\bcase study\b|\bwhat it means\b|\bwho owns the future\b|\bpodcast\b|\bconversation\b|\bdialogue\b|深度|长文|访谈|专访|解读|复盘|观察|分析|案例|方法论|播客|对话|评论|社论/i;
const primaryMarketPattern = /中国|\bchina\b|\bchinese\b|\bu\.s\.(?:\b|$)|\bus\b|\busa\b|\bunited states\b|\bamerica\b|\bamerican\b|美国|深圳|香港|国内|国产/i;
const deprioritizedMarketPattern = /korea|korean|south korea|ghana|malta|european union|eu\b|france|germany|uk\b|britain|japan|singapore|韩国|加纳|马耳他|欧盟|法国|德国|英国|日本|新加坡/i;
const comparisonOnlyPattern = /outperforms?|beats?|lags?|stronger than|weaker than|surpass(?:es|ed)?|超过|强于|弱于|落后|跑分|榜单|排名/i;
const directActionPattern = /\blaunch(?:es|ed)?\b|\brelease(?:s|d)?\b|\bannounce(?:s|d)?\b|\bdeploy(?:s|ed)?\b|\broll(?:s|ed)? out\b|\bpartner(?:s|ed|ship)?\b|\bcollaborat(?:es|ed|ion)\b|\bacquir(?:es|ed|e)\b|\brais(?:es|ed)\b|\btakes charge\b|\bjoins?\b|\bleaves?\b|\bfounds?\b|\bappoint(?:s|ed)?\b|\bresign(?:s|ed)?\b|发布|上线|推出|部署|宣布|合作|并购|收购|融资|接管|离职|加入|任命|创业|创办|辞任/i;
const consumerDeviceNoisePattern = /轻薄本|笔记本|ai\s*pc|aipc|pc厂商|酷睿|英特尔酷睿|laptop|notebook|ultrabook|consumer pc|买本|换机|导购|评测|上手|跑分|整机|显卡|主板|手机|耳机|电视|平板/i;
const socialAnecdoteNoisePattern = /律师|法庭|法官|法院|代理意见|判决|谁能赢|ai问答|用deepseek|拿着.*deepseek|社会新闻|奇葩|离谱|当庭|训诫|民事|刑事|司法案例|court|judge|lawyer|legal brief|hearing/i;
const topStoryHardActionPattern = /\blaunch(?:es|ed)?\b|\brelease(?:s|d)?\b|\bannounce(?:s|d)?\b|\bdeploy(?:s|ed)?\b|\bpartnership\b|\bcollaboration\b|\bacquir(?:es|ed|e)\b|\brais(?:es|ed)\b|\bseries [a-z]\b|\bipo\b|\bfunding\b|\bvaluation\b|\btakes charge\b|\bjoins?\b|\bleaves?\b|\bfounds?\b|\bappoint(?:s|ed)?\b|\bresign(?:s|ed)?\b|发布|上线|推出|部署|合作|并购|收购|融资|上市|估值|接管|离职|加入|任命|创业|创办|辞任|负责人|正式发布|宣布/i;
const governanceOrSafetyPolicyPattern = /regulat|policy|governance|antitrust|competition|copyright|privacy|security|safety|alignment|lawsuit|whistleblower|model provider|监管|治理|反垄断|竞争|版权|隐私|安全|对齐|诉讼|政策|立法|听证|平台垄断|模型层/i;
const coreIndustryPattern = /nvidia|amd|tsmc|broadcom|datacenter|data center|server|gpu|chip|accelerator|inference|compute|robot|robotics|humanoid|world model|warehouse|factory|logistics|英伟达|台积电|博通|数据中心|服务器|芯片|算力|加速器|推理|机器人|世界模型|仓储|工厂|物流/i;
const megaCompanyPattern = /openai|anthropic|deepmind|google|xai|meta|microsoft|amazon|apple|nvidia|tesla|deepseek|qwen|zhipu|z\.ai|minimax|kimi|moonshot|doubao|bytedance|baidu|tencent|alibaba|字节|阿里|腾讯|百度|智谱|月之暗面|阶跃星辰|零一万物/i;
const briefSignalPattern = /发布|上线|推出|宣布|部署|合作|组织|调整|重组|任命|离职|加入|接管|融资|投资|估值|上市|ipo|并购|收购|launch|release|announce|deploy|partner|appoint|join|leave|reorg|funding|investment|valuation|acquisition|merger/i;
const depthTopicPattern = /agentic|agent\b|agents\b|multimodal|multi-modal|world model|robot|robotics|humanoid|medical ai|healthcare|ai for science|science|safety|governance|alignment|bio|drug discovery|智能体|多模态|世界模型|机器人|具身|医疗|医药|科学|安全|治理|对齐|生物|药物发现/i;
const viewpointSourcePattern = /latent space|import ai|the batch|ai valley|a16z|sequoia|stratechery|semi|stanford|mit|mckinsey|bcg|kpmg|deloitte|gartner|forrester|pwc|idc|ibm|钛媒体|机器之心/i;
const investorLeaderPattern = /sam altman|greg brockman|andrej karpathy|karpathy|andrew ng|fei-fei li|李飞飞|dario amodei|demis hassabis|ilya|sutskever|geoffrey hinton|yann lecun|mustafa suleyman|marc andreessen|a16z|sequoia|founder|ceo|cto|chief scientist|investor|vc|奥特曼|卡帕西|创始人|投资人|合伙人|科学家/i;

function patternScore(text, weightedPatterns) {
  return weightedPatterns.reduce((score, [pattern, weight]) => score + (pattern.test(text) ? weight : 0), 0);
}

function regionPriority(entry) {
  const text = entryContentText(entry);
  const hasDeprioritized = deprioritizedMarketPattern.test(text);
  const hasPrimaryMarket = primaryMarketPattern.test(text);
  const hasPriorityCompany = priorityCompanyPattern.test(text);
  const hasGlobalMajor = communityConcernPattern.test(text) || industryChainPattern.test(text) || aiLeaderPattern.test(text);
  if (hasPrimaryMarket) return "primary_market";
  if (hasDeprioritized && (hasPriorityCompany || hasGlobalMajor)) return "global_major";
  if (hasDeprioritized) return "deprioritized_market";
  if (hasPriorityCompany) return "primary_market";
  return hasGlobalMajor ? "global_major" : "deprioritized_market";
}

function classifyFreshness(entry, issueDate) {
  const sourceDate = sourceDateString(entry.date);
  if (!sourceDate) return null;
  const { primaryStartDate, primaryEndDate, fallbackStartDate, fallbackEndDate, isWeekendWindow } = dateWindowForIssue(issueDate);
  const eventDates = explicitEventDates(entry, issueDate);
  if (sourceDate >= primaryStartDate && sourceDate <= primaryEndDate) {
    if (eventDates.length && !hasDateInWindow(eventDates, primaryStartDate, primaryEndDate)) return null;
    return {
      sourceDate,
      freshness: "d-1",
      freshnessLabelZh: isWeekendWindow ? `周末窗口｜${sourceDate}` : "D-1",
      freshnessLabelEn: isWeekendWindow ? `Weekend window | ${sourceDate}` : "D-1"
    };
  }
  if (sourceDate >= fallbackStartDate && sourceDate <= fallbackEndDate) {
    if (eventDates.length && !hasDateInWindow(eventDates, fallbackStartDate, fallbackEndDate)) return null;
    const curated = entry.curatedFallback || entry.source === "Curated AI Products";
    return {
      sourceDate,
      freshness: "fallback",
      freshnessLabelZh: curated ? "补位｜编辑推荐" : `补位｜发布于 ${sourceDate}`,
      freshnessLabelEn: curated ? "Fallback | editor pick" : `Fallback | published ${sourceDate}`
    };
  }
  return null;
}

function freshnessScore(entry, maxAgeDays = 14) {
  const timestamp = Date.parse(entry.date) || 0;
  if (!timestamp) return 0;
  const ageDays = Math.max(0, (Date.now() - timestamp) / (24 * 60 * 60 * 1000));
  return Math.max(0, maxAgeDays - ageDays);
}

function editorialScore(entry, section) {
  const text = entryContentText(entry);
  const source = String(entry.source || "").toLowerCase();
  let score = (entry.score || 0) + freshnessScore(entry, 14);

  if (priorityCompanyPattern.test(text)) score += 18;
  if (primaryMarketPattern.test(text)) score += 6;

  if (section === "快讯" || section === "头条" || section === "今日重点") {
    if (consumerDeviceNoisePattern.test(text)) score -= 70;
    if (socialAnecdoteNoisePattern.test(text)) score -= 70;
    score += patternScore(text, [
      [modelLaunchPattern, 22],
      [aiLeaderPattern, 20],
      [industryChainPattern, 16],
      [communityConcernPattern, 14],
      [/\bpartnership\b|\bdeploy\b|\bcustomer\b|\benterprise\b|合作|部署|客户|企业落地/i, 10],
      [/\bworld model\b|世界模型/i, 18]
    ]);
    if (megaCompanyPattern.test(text)) score += section === "头条" ? 18 : 10;
    if (briefSignalPattern.test(text)) score += section === "头条" ? 16 : 20;
    if (regionPriority(entry) === "primary_market") score += 18;
    if (regionPriority(entry) === "global_major") score += 4;
    if (regionPriority(entry) === "deprioritized_market") score -= 24;
    if (comparisonOnlyPattern.test(text) && !directActionPattern.test(text)) score -= 28;
  }

  if (section === "AI产品推荐") {
    if (entry.curatedFallback) score += Number(entry.curatedPriority || 0) * 4;
    score += patternScore(text, [
      [productivityProductPattern, 24],
      [broadDiscussionPattern, 16],
      [/\bcurated ai products\b/i, 14],
      [/\bproduct hunt\b/i, 16],
      [/\brecall\b|\bliminary\b|\banuma\b|\bmagic patterns\b/i, 12]
    ]);
    if (/game|avatar|dating|wallpaper|meme|crypto|nft|游戏|头像|壁纸|币圈/.test(text)) score -= 18;
  }

  if (section === "深度" || section === "深度阅读") {
    score += patternScore(text, [
      [depthTopicPattern, 26],
      [aiLeaderPattern, 22],
      [communityConcernPattern, 18],
      [/\banalysis\b|\bessay\b|\binterview\b|\bopinion\b|\bdeep[- ]dive\b|\blong read\b|观察|分析|访谈|专访|长文|深度|concern/i, 20],
      [/\bfuture\b|\bstrategy\b|\bfrontier\b|\bsociety\b|\bgovernance\b|未来|战略|前沿|治理|担忧/i, 14],
    ]);
    if (/latent space|import ai|the batch|ai valley|a16z|sequoia|stratechery|钛媒体|机器之心/i.test(source)) score += 10;
  }

  if (section === "观点" || section === "机构报告") {
    score += patternScore(text, [
      [investorLeaderPattern, 24],
      [strategicReportPattern, 24],
      [/stanford|ai index|state of ai|mckinsey|bcg|kpmg|deloitte|gartner|forrester|pwc|idc|cb insights/i, 18],
      [/enterprise|adoption|industry|market|future|application|workforce|产业|企业|市场|应用|未来|就业/i, 14]
    ]);
    if (/arxiv|paper|technical|algorithm|benchmark|kernel|代码|算法|论文/.test(text)) score -= 28;
  }

  if (section === "投融资信息") {
    score += patternScore(text, [
      [/\bfunding\b|\braised\b|\bseries [a-z]\b|\bipo\b|\bacquisition\b|\bvaluation\b|\binvestment\b|融资|估值|上市|并购|投资/i, 24],
      [priorityCompanyPattern, 18],
      [aiLeaderPattern, 12],
      [industryChainPattern, 12],
      [/\binfrastructure\b|\bchips?\b|\bdatacenter\b|\bapplication\b|基础设施|芯片|数据中心|应用层/i, 10]
    ]);
  }

  return score;
}

function isRecentEntry(entry, maxAgeDays) {
  const timestamp = Date.parse(entry.date) || 0;
  if (!timestamp) return false;
  return Date.now() - timestamp <= maxAgeDays * 24 * 60 * 60 * 1000;
}

function isFundingEntry(entry) {
  const text = entryContentText(entry);
  return !isLowQualityEntry(entry)
    && !isAcademicPaperEntry(entry)
    && /\bfunding\b|\braises?\b|\braised\b|\bseries [a-z]\b|\bipo\b|\bacquisition\b|\bacquires?\b|\bvaluation\b|\binvest(?:s|ed|ment|or)?\b|\bround\b|融资|投资|估值|并购|上市|收购/i.test(text);
}

function isOpenSourceEntry(entry) {
  const text = entryContentText(entry);
  const source = String(entry.source || "").toLowerCase();
  const hasDeveloperSource = /\bgithub\b|\bopen[- ]source\b|\bhugging face\b|\brepo\b|开源|模型库|代码库/i.test(`${source} ${text}`);
  const hasAiSignal = /\bai\b|artificial intelligence|agent|llm|model|inference|rag|mcp|hugging face|人工智能|大模型|模型|智能体|推理|开源/i.test(text);
  return hasDeveloperSource && hasAiSignal;
}

function isLowQualityEntry(entry) {
  const text = entryText(entry);
  const title = String(entry.title || "").toLowerCase();
  return /top\s?\d|top\d|best\s+\d|权威测评|服务商|排行榜|哪家好|bluechip navigator|x\.com|seo|search result optimization|搜索结果优化|蹲守|版本答案|峰会亮点|来现场|报名参会|活动议程|财富号|股吧|股价|短期震荡|国资托底|股权重估|营销基本盘|涨停|概念股|a股|港股|美股|stock pick|price target|315曝光|315晚会|3[·.]15|消费者权益日/i.test(text)
    || title.length > 220;
}

function isProductEntry(entry) {
  const text = entryContentText(entry);
  const source = String(entry.source || "").toLowerCase();
  const titleSource = `${entry.title || ""}`.toLowerCase();
  if (isLowQualityEntry(entry)) return false;
  if (/\barxiv\b|\bpaper\b|\bresearch repository\b|\bbenchmark\b|论文|研究论文/.test(text)) return false;
  if (/summit|conference|webinar|meetup|event|峰会|大会|活动|报名|现场|议程/.test(text)) return false;
  const hasProductSignal = /\bcurated ai products\b|\bproduct hunt\b/i.test(source)
    || /\bproduct hunt\b|\btool\b|\bapp\b|\bworkspace\b|\bworkflow\b|\bmemory\b|\bagentmemory\b|\brecall\b|\bliminary\b|\banuma\b|\bmagic patterns\b|\bgranola\b|\bnotebooklm\b|\bgamma\b|\bflowith\b|\bfellou\b|\bbrowser\b|\bextension\b|\bdashboard\b|\bcanvas\b|\bnotebook\b|\bautomation\b|插件|AI应用|应用生成|应用平台|产品|工具|工作流|知识管理|浏览器/i.test(titleSource);
  const isMostlyModelNews = /\bmodel\b|\bapi\b|\bbenchmark\b|\binference\b|芯片|\bipo\b|\bvaluation\b|\bfunding\b|融资|估值|模型|推理|基准|参数/.test(text)
    && !/\btool\b|\bapp\b|\bproduct hunt\b|\bworkflow\b|\bmemory\b|\bextension\b|\bnotebook\b|应用|产品|工具|工作流|知识管理/.test(text);
  return hasProductSignal && !isMostlyModelNews;
}

function isStaleReportLikeEntry(entry) {
  const title = String(entry.title || "").toLowerCase();
  const reportLike = /\breport\b|\bpdf\b|\bindex\b|\bsurvey\b|\bwhitepaper\b|\bresearch brief\b|\bstate of\b|报告|指数|调研|白皮书|研究报告/.test(title);
  const staleYear = /\b20(1\d|2[0-5])\b/.test(title) && !/\b2026\b/.test(title);
  return reportLike && staleYear;
}

function isAcademicPaperEntry(entry) {
  const text = entryText(entry);
  return /arxiv|paper|论文|research repository|研究论文/.test(text);
}

function isReportEntry(entry) {
  if (isEditorialNoiseEntry(entry)) return false;
  const text = entryContentText(entry);
  const titleSummary = `${entry.title || ""} ${entry.summary || ""}`.toLowerCase();
  const title = String(entry.title || "").toLowerCase();
  const hasReportSignal = /\breport\b|\bpdf\b|\bindex\b|\bsurvey\b|\bstudy\b|\bwhitepaper\b|\bresearch brief\b|\bstate of\b|报告|指数|调研|白皮书|研究报告/.test(title);
  const hasAiSignal = /\bai\b|artificial intelligence|generative|llm|agent|人工智能|大模型|模型|智能体/i.test(titleSummary);
  const hasStrategicSignal = strategicReportPattern.test(titleSummary) || /workplace|workforce|creator|marketing|enterprise|ceo|产业|应用|企业|未来|生产力|工作/i.test(titleSummary);
  const staleYear = /\b20(1\d|2[0-5])\b/.test(title) && !/\b2026\b/.test(title);
  return hasReportSignal && hasAiSignal && hasStrategicSignal && isRecentEntry(entry, 14) && !staleYear && !isAcademicPaperEntry(entry) && !isLowQualityEntry(entry);
}

function isDeepReadEntry(entry) {
  if (isEditorialNoiseEntry(entry)) return false;
  const text = entryContentText(entry);
  const source = String(entry.source || "").toLowerCase();
  const title = String(entry.title || "").toLowerCase();
  const isDeepSource = /latent space|import ai|the batch|ai valley|tmtpost|钛媒体|机器之心|stratechery|semi|sequoia|a16z|interview|newsletter/i.test(source);
  const hasDeepSignal = deepReadStylePattern.test(text);
  const hasAiSignal = /\bai\b|artificial intelligence|generative|llm|agent|openai|anthropic|deepmind|机器人|人工智能|大模型|模型|智能体/i.test(text);
  const isPersonnelNews = aiLeaderPattern.test(text) && /\btakes charge\b|\bjoins?\b|\bleaves?\b|\bdepart|\bhire|\bappoint|\bfounds?\b|\bstarts?\b|接管|离职|加入|任命|创业|创办|负责/i.test(text);
  const isHardNews = isFundingEntry(entry) || isOpenSourceEntry(entry) || isProductEntry(entry) || isReportEntry(entry) || isAcademicPaperEntry(entry);
  const isTinyUpdate = /\brelease notes?\b|\bchangelog\b|\bpatch\b|更新日志|版本更新/.test(title);
  return hasAiSignal && (isDeepSource || hasDeepSignal) && !isPersonnelNews && !isHardNews && !isTinyUpdate && !isLowQualityEntry(entry) && isRecentEntry(entry, 14);
}

function isIndustryViewOrReportEntry(entry) {
  if (isEditorialNoiseEntry(entry)) return false;
  return isDeepReadEntry(entry) || isReportEntry(entry);
}

function isBriefEntry(entry) {
  if (isLowQualityEntry(entry) || isEditorialNoiseEntry(entry)) return false;
  if (isRoundupSourceEntry(entry)) return false;
  const text = entryContentText(entry);
  if (entry.freshness !== "d-1") return false;
  if (regionPriority(entry) === "deprioritized_market") return false;
  if (comparisonOnlyPattern.test(text) && !directActionPattern.test(text)) return false;
  const hasCompany = megaCompanyPattern.test(text) || (primaryMarketPattern.test(text) && priorityCompanyPattern.test(text));
  const hasSignal = briefSignalPattern.test(text) || isFundingEntry(entry) || isOpenSourceEntry(entry);
  return hasCompany && hasSignal && !isAcademicPaperEntry(entry);
}

function isHeadlineEntry(entry) {
  if (!isBriefEntry(entry)) return false;
  const text = entryContentText(entry);
  if (!megaCompanyPattern.test(text)) return false;
  return modelLaunchPattern.test(text)
    || aiLeaderPattern.test(text)
    || coreIndustryPattern.test(text)
    || governanceOrSafetyPolicyPattern.test(text)
    || isFundingEntry(entry);
}

function isHeadlineOrBriefEntry(entry) {
  return isHeadlineEntry(entry) || isBriefEntry(entry);
}

function isDepthEntry(entry) {
  if (isEditorialNoiseEntry(entry) || isLowQualityEntry(entry)) return false;
  const text = entryContentText(entry);
  const hasTopic = depthTopicPattern.test(text);
  const hasDeepRead = isDeepReadEntry(entry);
  const hasAiSignal = /\bai\b|artificial intelligence|generative|llm|agent|openai|anthropic|deepmind|机器人|人工智能|大模型|模型|智能体/i.test(text);
  return hasAiSignal && (hasTopic || hasDeepRead) && !isFundingEntry(entry) && !isProductEntry(entry) && !isOpenSourceEntry(entry);
}

function isViewpointEntry(entry) {
  if (isEditorialNoiseEntry(entry) || isLowQualityEntry(entry)) return false;
  const text = entryContentText(entry);
  const source = String(entry.source || "").toLowerCase();
  if (isReportEntry(entry)) return true;
  if (/回应|澄清|否认|辟谣|疑虑|泄露|responds?|clarif(?:y|ies|ied|ication)|denies|denied/i.test(text) && !deepReadStylePattern.test(text)) return false;
  const hasViewSource = viewpointSourcePattern.test(source);
  const hasViewSignal = deepReadStylePattern.test(text) || investorLeaderPattern.test(text) || strategicReportPattern.test(text);
  const hasAiSignal = /\bai\b|artificial intelligence|generative|llm|agent|人工智能|大模型|模型|智能体/i.test(text);
  if (directActionPattern.test(text) && !deepReadStylePattern.test(text)) return false;
  return hasAiSignal
    && hasViewSignal
    && (hasViewSource || investorLeaderPattern.test(text) || (deepReadStylePattern.test(text) && (strategicReportPattern.test(text) || depthTopicPattern.test(text))))
    && !isFundingEntry(entry)
    && !isProductEntry(entry);
}

function isEditorialNoiseEntry(entry) {
  const text = entryContentText(entry);
  if (consumerDeviceNoisePattern.test(text)) return true;
  if (socialAnecdoteNoisePattern.test(text)) return true;
  return false;
}

function isTopStoryNoise(entry) {
  return isEditorialNoiseEntry(entry);
}

function isTopStoryEntry(entry) {
  if (isLowQualityEntry(entry)) return false;
  const text = entryContentText(entry);
  const source = String(entry.source || "");
  if (entry.freshness !== "d-1") return false;
  if (isTopStoryNoise(entry)) return false;
  if (comparisonOnlyPattern.test(text) && !directActionPattern.test(text)) return false;
  const isCommentaryOrInterview = deepReadStylePattern.test(text) && !directActionPattern.test(text);
  if (isCommentaryOrInterview) return false;
  if (regionPriority(entry) === "deprioritized_market") return false;
  const hasHardAction = topStoryHardActionPattern.test(text);
  const hasGovernancePolicy = governanceOrSafetyPolicyPattern.test(text)
    && /(brookings|stanford|mit|ft\.com|financial times|reuters|bloomberg|techcrunch|venturebeat|official|policy|regulat|governance|antitrust|competition|监管|治理|反垄断|立法|听证|政策)/i.test(`${source} ${text}`);
  const hasPriorityCompanySignal = priorityCompanyPattern.test(text) && (hasHardAction || hasGovernancePolicy);
  const hasPrimaryMarketAction = primaryMarketPattern.test(text)
    && hasHardAction
    && (modelLaunchPattern.test(text) || aiLeaderPattern.test(text) || coreIndustryPattern.test(text) || /\bworld model\b|世界模型/i.test(text));
  const hasLeaderSignal = aiLeaderPattern.test(text) && hasHardAction;
  const hasCoreIndustrySignal = coreIndustryPattern.test(text) && hasHardAction;
  const hasWorldModelSignal = /\bworld model\b|世界模型/i.test(text) && (hasHardAction || priorityCompanyPattern.test(text));
  if (!(hasPriorityCompanySignal || hasPrimaryMarketAction || hasLeaderSignal || hasCoreIndustrySignal || hasWorldModelSignal || hasGovernancePolicy)) return false;
  return !isFundingEntry(entry)
    && !isOpenSourceEntry(entry)
    && !isProductEntry(entry)
    && !isDeepReadEntry(entry)
    && !isReportEntry(entry)
    && !isStaleReportLikeEntry(entry)
    && !isAcademicPaperEntry(entry);
}

function categoryCandidates(sourcePack, predicate, limit, excludeIds = new Set(), scorer = (entry) => entry.score || 0) {
  return sourcePack.entries
    .filter((entry) => !excludeIds.has(entry.id) && predicate(entry))
    .sort((a, b) => scorer(b) - scorer(a) || (b.score || 0) - (a.score || 0))
    .slice(0, limit);
}

function isFallbackEligibleSection(section) {
  return ["AI产品推荐", "深度", "观点", "深度阅读", "机构报告"].includes(section);
}

function isStrictD1Section(section) {
  return ["头条", "开源项目"].includes(section);
}

function entryAllowedForSection(entry, section) {
  if (isStrictD1Section(section)) return entry.freshness === "d-1";
  if (isFallbackEligibleSection(section)) return entry.freshness === "d-1" || entry.freshness === "fallback";
  return true;
}

function sectionCandidates(sourcePack, section, predicate, limit, excludeIds = new Set()) {
  const score = (entry) => editorialScore(entry, section);
  const candidates = sourcePack.entries.filter((entry) => !excludeIds.has(entry.id) && predicate(entry) && entryAllowedForSection(entry, section));
  const primary = candidates
    .filter((entry) => entry.freshness === "d-1")
    .sort((a, b) => score(b) - score(a) || (b.score || 0) - (a.score || 0));
  const fallback = candidates
    .filter((entry) => entry.freshness === "fallback")
    .sort((a, b) => score(b) - score(a) || (b.score || 0) - (a.score || 0));
  return [...primary, ...fallback].slice(0, limit);
}

function entryEventSignature(entry) {
  const text = entryContentText(entry);
  const hasGoogle = /google|gemini|deepmind|谷歌/i.test(text);
  const googleIoSignals = /google\s*i\/o|\bi\/o\s*20\d{2}\b|\bio\s*20\d{2}\b|developer conference|开发者大会|\bai mode\b|ai overviews|search box|smart glasses|google glass|co-scientist|agentic gemini era|workspace updates/i;
  if (hasGoogle && googleIoSignals.test(text)) return "event:google-io";

  if (/openai/i.test(text) && /devday|developer day|spring update|12 days of openai/i.test(text)) return "event:openai-launch";
  if (/microsoft|copilot|azure/i.test(text) && /\bbuild\s*20\d{2}\b|microsoft build|copilot wave/i.test(text)) return "event:microsoft-build";
  if (/apple|wwdc/i.test(text) && /\bwwdc\s*20\d{2}\b|worldwide developers conference|apple intelligence/i.test(text)) return "event:apple-wwdc";
  return "";
}

const companySignalPatterns = [
  ["openai", /openai|gpt|chatgpt|greg brockman|sam altman/i],
  ["anthropic", /anthropic|claude|dario amodei/i],
  ["google", /google|deepmind|gemini|demis hassabis|谷歌/i],
  ["xai", /\bxai\b|\bgrok\b|马斯克|elon musk/i],
  ["meta", /\bmeta\b|llama|扎克伯格|zuckerberg/i],
  ["microsoft", /microsoft|azure|copilot|微软/i],
  ["amazon", /amazon|\baws\b|亚马逊/i],
  ["alibaba", /alibaba|aliyun|qwen|阿里巴巴|阿里云|通义|千问|平头哥/i],
  ["kimi", /kimi|moonshot|月之暗面|杨植麟/i],
  ["deepseek", /deepseek|深度求索/i],
  ["bytedance", /bytedance|doubao|字节|豆包/i],
  ["tencent", /tencent|腾讯|混元|marvis|马维斯/i],
  ["baidu", /baidu|百度|文心/i],
  ["zhipu", /zhipu|z\.ai|智谱|glm/i],
  ["minimax", /minimax/i],
  ["nvidia", /nvidia|英伟达|jensen huang|黄仁勋/i]
];

const actionSignalPatterns = [
  ["launch", /launch|release|introduc|unveil|rollout|上线|发布|推出|开源|亮相/i],
  ["funding", /funding|financing|raises?|valuation|invest|融资|投资|估值|股东|国资/i],
  ["acquisition", /acquir|acquisition|buy|收购|并购/i],
  ["personnel", /layoff|cut jobs|join|leave|appoint|takes charge|founder|ceo|cto|裁员|任命|离职|加入|接管|创始人|负责人/i],
  ["partnership", /partner|collaborat|alliance|合作|联合|签约/i],
  ["infrastructure", /datacenter|data center|chip|gpu|energy|power|infrastructure|数据中心|芯片|算力|能源|电力|基础设施/i],
  ["governance", /safety|privacy|security|copyright|regulat|lawsuit|安全|隐私|版权|监管|诉讼/i]
];

function signalCompanies(text = "") {
  return new Set(companySignalPatterns.filter(([, pattern]) => pattern.test(text)).map(([company]) => company));
}

function signalActions(text = "") {
  return new Set(actionSignalPatterns.filter(([, pattern]) => pattern.test(text)).map(([action]) => action));
}

function isRoundupSourceEntry(entry) {
  if (entryEventSignature(entry)) return false;
  const title = String(entry.title || "");
  const text = entryContentText(entry);
  const companies = [...signalCompanies(text)];
  const actions = [...signalActions(text)];
  const hasRoundupLabel = /周报|日报|早报|晚报|一周|本周|weekly|roundup|recap|digest|what happened/i.test(title);
  const hasStrongSeparators = /[；;].+|[、,，].+[、,，]/.test(title);
  if (companies.length >= 3 && (hasRoundupLabel || hasStrongSeparators)) return true;
  if (companies.length >= 2 && actions.length >= 2 && (hasRoundupLabel || hasStrongSeparators)) return true;
  return false;
}

function entrySignalSignature(entry) {
  const eventSignature = entryEventSignature(entry);
  if (eventSignature) return eventSignature;
  const text = entryContentText(entry);
  const company = [...signalCompanies(text)][0] || "";
  const action = [...signalActions(text)][0] || "";
  const normalizedSubject = String(entry.title || "")
    .toLowerCase()
    .replace(/https?:\/\/\S+/g, "")
    .replace(/[-–—|｜].*$/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 2)
    .slice(0, 4)
    .join(" ");
  return [company, action, normalizedSubject].filter(Boolean).join(":") || String(entry.id || "");
}

function entryTopicSignature(entry) {
  const eventSignature = entryEventSignature(entry);
  if (eventSignature) return eventSignature;
  const text = entryContentText(entry);
  const topicPatterns = [
    ["chip", /chip|gpu|accelerator|compute|inference|晶片|芯片|算力|推理|训练/i],
    ["agent", /agent|agentic|workflow|智能体|工作流|ai打工人/i],
    ["model", /model|api|gpt|claude|gemini|grok|qwen|kimi|deepseek|模型|多模态|语音/i],
    ["search", /search|browser|chrome|搜索|浏览器/i],
    ["funding", /funding|financing|raises?|valuation|invest|融资|投资|估值|股东|国资/i],
    ["personnel", /join|leave|appoint|takes charge|founder|ceo|cto|任命|离职|加入|接管|创始人|负责人/i],
    ["robotics", /robot|robotics|humanoid|world model|机器人|具身|世界模型/i],
    ["governance", /safety|privacy|security|copyright|regulat|lawsuit|安全|隐私|版权|监管|诉讼/i],
    ["product", /product|launch|release|tool|app|workspace|产品|工具|上线|发布|推出/i],
    ["views", /report|interview|essay|analysis|观点|报告|访谈|专访|分析/i]
  ];
  const company = companySignalPatterns.find(([, pattern]) => pattern.test(text))?.[0] || "";
  const topic = topicPatterns.find(([, pattern]) => pattern.test(text))?.[0] || "";
  if (company && topic) return `${company}:${topic}`;
  const normalizedTitle = String(entry.title || "")
    .toLowerCase()
    .replace(/https?:\/\/\S+/g, "")
    .replace(/[-–—|｜].*$/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 2)
    .slice(0, 8)
    .join(" ");
  return normalizedTitle || String(entry.id || "");
}

function isDuplicateTopic(entry, usedTopicSignatures) {
  const signature = entryTopicSignature(entry);
  return Boolean(signature) && usedTopicSignatures.has(signature);
}

function eventAggregateCopy(signature) {
  const copy = {
    "event:google-io": {
      titleZh: "Google I/O 2026：搜索、Gemini 和科研 Agent 集中更新",
      titleEn: "Google I/O 2026: Search, Gemini, and research agents move together",
      angle: "同一场 Google I/O 发布会下的多个子更新，合并成一张卡片总结搜索入口、Gemini 和科研 Agent 的共同方向。"
    },
    "event:openai-launch": {
      titleZh: "OpenAI 发布会更新：把多个子产品合并看成一次平台动作",
      titleEn: "OpenAI launch update: read the sub-updates as one platform move",
      angle: "同一场 OpenAI 发布或产品周下的多个子新闻，合并总结平台方向，避免重复占位。"
    },
    "event:microsoft-build": {
      titleZh: "Microsoft Build：Copilot、Azure 和开发者工具集中更新",
      titleEn: "Microsoft Build: Copilot, Azure, and developer tools update together",
      angle: "同一场 Microsoft Build 下的多个子更新，合并观察企业 AI 平台和开发者生态方向。"
    },
    "event:apple-wwdc": {
      titleZh: "Apple WWDC：Apple Intelligence 和系统入口集中更新",
      titleEn: "Apple WWDC: Apple Intelligence and system entry points update together",
      angle: "同一场 Apple WWDC 下的多个 AI 子更新，合并观察系统级 AI 入口变化。"
    }
  };
  return copy[signature] || null;
}

function selectMajorEventClusters(sourcePack, limit = 1, excludeIds = new Set()) {
  const clusters = new Map();
  sourcePack.entries.forEach((entry) => {
    if (excludeIds.has(entry.id) || entry.freshness !== "d-1" || isEditorialNoiseEntry(entry) || isLowQualityEntry(entry)) return;
    const signature = entryEventSignature(entry);
    if (!signature || !eventAggregateCopy(signature)) return;
    if (!clusters.has(signature)) clusters.set(signature, []);
    clusters.get(signature).push(entry);
  });

  return [...clusters.entries()]
    .map(([signature, entries]) => ({
      signature,
      entries: entries
        .sort((a, b) => editorialScore(b, "头条") - editorialScore(a, "头条") || (b.score || 0) - (a.score || 0))
        .slice(0, 5)
    }))
    .filter((cluster) => cluster.entries.length >= 2)
    .sort((a, b) => b.entries.length - a.entries.length || editorialScore(b.entries[0], "头条") - editorialScore(a.entries[0], "头条"))
    .slice(0, limit);
}

function isChineseLocalizedTitle(title = "") {
  const text = String(title).trim();
  if (!text) return false;
  const cjkCount = (text.match(/[\u3400-\u9fff]/g) || []).length;
  const latinRuns = (text.match(/[A-Za-z][A-Za-z'’-]*/g) || []).filter((word) => word.length > 1);
  if (cjkCount >= 4) return true;
  if (cjkCount >= 2 && latinRuns.length <= 4) return true;
  return false;
}

function localizeTitleZh(title = "") {
  const raw = String(title || "").trim();
  if (!raw || isChineseLocalizedTitle(raw)) return raw;
  if (/google/i.test(raw) && /search box|search/i.test(raw)) return "Google 搜索框 25 年来首次重设计，转向 AI 多模态交互";
  if (/google/i.test(raw) && /smart glasses|google glass/i.test(raw)) return "Google 重启智能眼镜路线，试图把 Gemini 带到现实世界入口";
  if (/google\s*i\/o|^i\/o\s*20\d{2}/i.test(raw)) return "Google I/O 2026：AI 产品和开发者工具集中更新";
  if (/co-scientist/i.test(raw)) return "Co-Scientist：Google 用多智能体系统加速科研工作流";
  if (/demis hassabis/i.test(raw)) return "Demis Hassabis：用 AI 裁员是短视做法";
  if (/viberia/i.test(raw)) return "Viberia：像玩策略游戏一样指挥 AI Agent";
  if (/storeclaw/i.test(raw)) return "StoreClaw：面向电商卖家的 AI 销售 Agent";
  if (/openai/i.test(raw) && /education/i.test(raw)) return "OpenAI 推进国家级教育合作计划";
  if (/openai/i.test(raw) && /singapore/i.test(raw)) return "OpenAI 推出新加坡国家级 AI 合作计划";
  if (/alibaba cloud/i.test(raw) && /qwen cloud|agents/i.test(raw)) return "阿里云上线 Qwen Cloud 官网，降低 Agent 开发部署门槛";
  if (/bristol myers/i.test(raw) && /anthropic/i.test(raw)) return "百时美施贵宝扩大与 Anthropic 合作，用 AI 加速药物研发";
  if (/figure ai|humanoid robots/i.test(raw)) return "Figure AI 人形机器人处理包裹走红，机器人落地再升温";
  if (/openai/i.test(raw) && /dell|codex/i.test(raw)) return "OpenAI 与 Dell 合作，把 Codex 带进混合云和本地企业环境";
  if (/google deepmind/i.test(raw) && /edison|ai scientist/i.test(raw)) return "Google DeepMind 与 Edison 合作推进 AI Scientist";
  return `AI 信号：${raw.replace(/\s+/g, " ").slice(0, 72)}`;
}

function parseFeedEntries(xml, source) {
  const blocks = [
    ...xml.matchAll(/<item\b[\s\S]*?<\/item>/gi),
    ...xml.matchAll(/<entry\b[\s\S]*?<\/entry>/gi)
  ].map((match) => match[0]);

  return blocks.slice(0, 12).map((block) => {
    const title = stripTags(tagValue(block, "title"));
    const link = stripTags(tagValue(block, "link")) || atomLink(block) || stripTags(tagValue(block, "guid"));
    const description = stripTags(
      tagValue(block, "description")
      || tagValue(block, "summary")
      || tagValue(block, "content")
      || tagValue(block, "content:encoded")
    );
    return {
      source: source.name,
      sourceUrl: source.url,
      title,
      link,
      date: itemDate(block),
      summary: description.slice(0, 720),
      image: itemImage(block),
      score: 0
    };
  }).filter((entry) => entry.title && entry.link);
}

async function fetchWithTimeout(url, timeoutMs = 12000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "Accept": "application/rss+xml, application/atom+xml, application/xml, text/xml, text/html;q=0.8",
        "User-Agent": "AI Daily Atlas/1.0 (+https://irisxqing.github.io/daily-ai-atlas/)"
      }
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.text();
  } finally {
    clearTimeout(timeout);
  }
}

async function collectSourcePack(date) {
  const settled = await Promise.allSettled(sourceFeeds.map(async ([name, url]) => {
    const xml = await fetchWithTimeout(url);
    return { name, url, entries: parseFeedEntries(xml, { name, url }) };
  }));

  const sources = [];
  const entries = [];
  settled.forEach((result, index) => {
    const [name, url] = sourceFeeds[index];
    if (result.status === "fulfilled") {
      sources.push({ name, url, count: result.value.entries.length, ok: true });
      entries.push(...result.value.entries);
    } else {
      sources.push({ name, url, count: 0, ok: false, error: String(result.reason?.message || result.reason) });
    }
  });
  const curatedProducts = curatedProductSignals(date);
  sources.push({ name: "Curated AI Products", url: "manual:curated-ai-products", count: curatedProducts.length, ok: true });
  entries.push(...curatedProducts);

  const seen = new Set();
  const sortedEntries = entries
    .map((entry) => {
      const freshness = classifyFreshness(entry, date);
      return freshness ? {
        ...entry,
        ...freshness,
        regionPriority: regionPriority(entry),
        timestamp: Date.parse(entry.date) || 0,
        score: relevanceScore(entry)
      } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score || b.timestamp - a.timestamp);
  const sourceCounts = new Map();
  const uniqueEntries = sortedEntries
    .filter((entry) => {
      const key = normalizeKey(entry.link || entry.title);
      if (!key || seen.has(key)) return false;
      const sourceCount = sourceCounts.get(entry.source) || 0;
      if (sourceCount >= maxEntriesPerSource) return false;
      seen.add(key);
      sourceCounts.set(entry.source, sourceCount + 1);
      return true;
    })
    .slice(0, maxSourceEntries)
    .map(({ timestamp, ...entry }, index) => ({ id: `S${String(index + 1).padStart(3, "0")}`, ...entry }));

  if (uniqueEntries.length < 6) {
    throw new Error(`Too few D-1/fallback source entries collected (${uniqueEntries.length}). Check feed availability or date filters.`);
  }
  if (uniqueEntries.length < 12) {
    console.warn(`Only ${uniqueEntries.length} D-1/fallback source entries collected; continuing with stricter shortlist rather than failing the daily run.`);
  }

  return {
    date,
    timezone,
    generatedAt: new Date().toISOString(),
    coverage: lookbackDescription(date),
    dateWindow: dateWindowForIssue(date),
    sources,
    entries: uniqueEntries
  };
}

function normalizeLinks(links = []) {
  return links
    .filter((link) => Array.isArray(link) && link.length >= 2 && link[0] && link[1])
    .map(([label, href]) => [String(label), String(href)]);
}

function normalizeDetails(details = []) {
  const detailList = Array.isArray(details) ? details : [details];
  return detailList
    .map((detail) => {
      if (typeof detail === "string") return detail;
      if (detail && typeof detail === "object") {
        if (detail.summary || detail.expanded) return detail;
      }
      return null;
    })
    .filter(Boolean);
}

function normalizeItem(item) {
  if (!item || typeof item !== "object") throw new Error("Invalid item.");
  const normalized = {
    section: String(item.section || ""),
    priority: String(item.priority || ""),
    title: String(item.title || ""),
    dek: String(item.dek || ""),
    details: normalizeDetails(item.details || []),
    why: String(item.why || ""),
    links: normalizeLinks(item.links || []),
    sourceDate: String(item.sourceDate || ""),
    freshness: String(item.freshness || ""),
    regionPriority: String(item.regionPriority || ""),
    freshnessLabelZh: String(item.freshnessLabelZh || ""),
    freshnessLabelEn: String(item.freshnessLabelEn || ""),
    freshnessLabel: String(item.freshnessLabel || "")
  };

  if (item.media && typeof item.media === "object" && item.media.src && item.media.alt) {
    normalized.media = {
      type: String(item.media.type || "image"),
      src: String(item.media.src),
      alt: String(item.media.alt),
      caption: String(item.media.caption || ""),
      ...(item.media.href ? { href: String(item.media.href) } : {}),
      ...(item.media.title ? { title: String(item.media.title) } : {}),
      ...(item.media.embed ? { embed: String(item.media.embed) } : {}),
      ...(item.media.cta ? { cta: String(item.media.cta) } : {})
    };
  }

  for (const key of ["section", "title", "dek", "why"]) {
    if (!normalized[key]) throw new Error(`Item missing ${key}.`);
  }

  return normalized;
}

function detailDepth(detail) {
  if (typeof detail === "string") return detail.trim().length;
  if (detail && typeof detail === "object") {
    return `${detail.summary || ""} ${detail.expanded || ""} ${detail.quote || ""}`.trim().length;
  }
  return 0;
}

function isReportSection(section) {
  return ["机构报告", "Research Reports"].includes(section);
}

function isTermSectionName(section) {
  return ["每日词条", "AI Term"].includes(section);
}

function isListLikeSummary(summary = "") {
  const text = String(summary).trim();
  const separators = (text.match(/[、；;]/g) || []).length;
  const sectionWords = ["投融资", "开源", "产品", "报告", "融资", "机器人", "agents", "funding", "open source", "products", "reports"];
  const sectionHits = sectionWords.filter((word) => text.toLowerCase().includes(word.toLowerCase())).length;
  const companyWords = ["OpenAI", "Anthropic", "Google", "DeepMind", "xAI", "Meta", "NVIDIA", "DeepSeek", "Qwen", "MiniMax", "Kimi", "智谱", "阿里", "腾讯", "字节"];
  const companyHits = companyWords.filter((word) => text.includes(word)).length;
  return separators >= 4 || (companyHits >= 4 && sectionHits >= 2);
}

function itemDetailsText(item) {
  return (item.details || [])
    .map((detail) => typeof detail === "string" ? detail : `${detail.summary || ""} ${detail.expanded || ""} ${detail.quote || ""}`)
    .join(" ");
}

function detectMultiSubjectHeadline(item) {
  if (!["头条", "Headlines"].includes(item.section)) return "";
  const text = `${item.title} ${item.dek} ${itemDetailsText(item)} ${item.why}`;
  const eventSignature = entryEventSignature({ title: item.title, summary: `${item.dek} ${itemDetailsText(item)}` });
  if (eventSignature) return "";
  const companies = [...signalCompanies(text)];
  const actions = [...signalActions(text)];
  const titleCompanies = [...signalCompanies(`${item.title} ${item.dek}`)];
  const titleActions = [...signalActions(`${item.title} ${item.dek}`)];
  const hasRoundupPunctuation = /[,，；;、].*[,，；;、]/.test(`${item.title} ${item.dek}`);
  if (companies.length >= 3) return `headline mixes too many companies: ${companies.join(", ")}`;
  if (titleCompanies.length >= 2 && titleActions.length >= 2) return `headline mixes multiple companies and actions: ${titleCompanies.join(", ")}`;
  if (companies.length >= 2 && actions.length >= 2 && hasRoundupPunctuation) return `headline appears to be a multi-subject roundup: ${companies.join(", ")}`;
  return "";
}

function validateIssueFrame(issue, lang) {
  if (!issue.headline || !issue.summary) {
    throw new Error(`${lang} issue missing headline or summary.`);
  }
  if (isListLikeSummary(issue.summary)) {
    throw new Error(`${lang} issue summary is list-like. It must synthesize one editorial theme instead of listing news.`);
  }
}

function validateItemContent(item, lang) {
  if (isTermSectionName(item.section)) return;
  if (lang === "zh" && !isChineseLocalizedTitle(item.title)) {
    throw new Error(`zh item title not localized: "${item.title}". Chinese issue titles must be written primarily in Chinese.`);
  }
  const multiSubjectHeadline = detectMultiSubjectHeadline(item);
  if (multiSubjectHeadline) {
    throw new Error(`${lang} item "${item.title}" is an invalid roundup headline: ${multiSubjectHeadline}`);
  }
  if (isReportSection(item.section)) {
    const expandedReports = item.details.filter((detail) => detail && typeof detail === "object" && detail.expanded && detail.expanded.length >= 90);
    if (!expandedReports.length) {
      throw new Error(`${lang} report "${item.title}" needs expanded report analysis objects.`);
    }
    return;
  }
  const richDetails = item.details.filter((detail) => detailDepth(detail) >= 45);
  if (richDetails.length < 2) {
    throw new Error(`${lang} item "${item.title}" is too shallow. Details must include at least two rich context points.`);
  }
}

function normalizeIssue(issue, date, lang) {
  if (!issue || typeof issue !== "object") throw new Error(`Missing ${lang} issue.`);
  const normalized = {
    date,
    title: "AI Daily Atlas",
    meta: lang === "zh" ? chineseDate(date) : englishDate(date),
    headline: String(issue.headline || ""),
    summary: String(issue.summary || ""),
    tags: Array.isArray(issue.tags) ? issue.tags.map(String) : [],
    items: (issue.items || []).map(normalizeItem)
  };

  validateIssueFrame(normalized, lang);
  if (normalized.items.length < 6) {
    throw new Error(`${lang} issue has too few items.`);
  }
  normalized.items.forEach((item) => validateItemContent(item, lang));
  return normalized;
}

function serializeIssue(issue) {
  return JSON.stringify(issue, null, 2)
    .split("\n")
    .map((line) => `  ${line}`)
    .join("\n");
}

function findArrayBounds(source, arrayName) {
  const startNeedle = `const ${arrayName} = [`;
  const start = source.indexOf(startNeedle);
  if (start === -1) throw new Error(`Could not find ${arrayName}.`);
  const nextConst = source.indexOf("\nconst ", start + startNeedle.length);
  if (nextConst === -1) throw new Error(`Could not find end boundary for ${arrayName}.`);
  return { start, end: nextConst, contentStart: start + startNeedle.length };
}

function findMatchingBrace(source, openIndex) {
  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let index = openIndex; index < source.length; index += 1) {
    const char = source[index];
    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === "\"" || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return index;
    }
  }

  throw new Error("Could not match issue object braces.");
}

function replaceOrInsertIssue(source, arrayName, issue) {
  const bounds = findArrayBounds(source, arrayName);
  const arraySource = source.slice(bounds.start, bounds.end);
  const dateNeedle = `"date": "${issue.date}"`;
  const legacyDateNeedle = `date: "${issue.date}"`;
  const relativeDateIndex = arraySource.indexOf(dateNeedle) !== -1
    ? arraySource.indexOf(dateNeedle)
    : arraySource.indexOf(legacyDateNeedle);

  const serialized = serializeIssue(issue);

  if (relativeDateIndex !== -1) {
    const absoluteDateIndex = bounds.start + relativeDateIndex;
    const objectStart = source.lastIndexOf("{", absoluteDateIndex);
    const objectEnd = findMatchingBrace(source, objectStart) + 1;
    let replaceEnd = objectEnd;
    if (source[replaceEnd] === ",") replaceEnd += 1;
    return `${source.slice(0, objectStart)}${serialized},${source.slice(replaceEnd)}`;
  }

  const insertAt = bounds.contentStart + 1;
  return `${source.slice(0, insertAt)}${serialized},\n${source.slice(insertAt)}`;
}

function updateAppCacheBust(date) {
  const runStamp = process.env.GITHUB_RUN_ID || String(Date.now());
  const cacheBust = `${date.replaceAll("-", "")}-${runStamp}`;
  const source = fs.readFileSync(indexPath, "utf8");
  const appScriptPattern = /app\.js(?:\?v=[^"]+)?/g;
  if (!appScriptPattern.test(source)) {
    throw new Error("Could not update app.js cache bust parameter in index.html.");
  }
  const next = source.replace(appScriptPattern, `app.js?v=${cacheBust}`);
  if (next === source) return;
  fs.writeFileSync(indexPath, next);
}

function selectionSourcePack(sourcePack) {
  const used = new Set();
  const headlines = sectionCandidates(sourcePack, "头条", isHeadlineOrBriefEntry, 24, used);
  const depth = sectionCandidates(sourcePack, "深度", isDepthEntry, 12, used);
  const viewpoints = sectionCandidates(sourcePack, "观点", isViewpointEntry, 12, used);
  const openSource = sectionCandidates(sourcePack, "开源项目", isOpenSourceEntry, 8, used);
  openSource.forEach((entry) => used.add(entry.id));
  const products = sectionCandidates(sourcePack, "AI产品推荐", isProductEntry, 12, used);
  products.forEach((entry) => used.add(entry.id));

  const compactEntry = (entry) => ({
    id: entry.id,
    source: entry.source,
    title: entry.title,
    link: entry.link,
    date: entry.date,
    sourceDate: entry.sourceDate,
    freshness: entry.freshness,
    freshnessLabelZh: entry.freshnessLabelZh,
    freshnessLabelEn: entry.freshnessLabelEn,
    regionPriority: entry.regionPriority,
    summary: String(entry.summary || "").slice(0, 220),
    score: entry.score
  });

  return {
    date: sourcePack.date,
    timezone: sourcePack.timezone,
    coverage: sourcePack.coverage,
    methodology: "The script scans all source leads, removes duplicates, applies section-specific editorial scores and quotas, then sends only the fixed shortlist to the model for writing. The model no longer decides the final topic list.",
    candidatePools: {
      headlines: headlines.map(compactEntry),
      depth: depth.map(compactEntry),
      viewpoints: viewpoints.map(compactEntry),
      openSource: openSource.map(compactEntry),
      products: products.map(compactEntry)
    }
  };
}

function buildSelectionPrompt(date, sourcePack, revisionNote = "") {
  return `
今天日期：${date}，时区：北京时间 / Asia/Shanghai。
${lookbackDescription(date)}
${revisionNote ? `\n上一次生成未通过质量校验：${revisionNote}\n请修复：如果是篇首 summary 问题，要提炼一条主题主线，不要罗列新闻；如果是内容问题，要增加新闻细节、写成解释性段落；观点栏目要清楚区分行业观点、访谈和正式报告。\n` : ""}

请为 AI Daily Atlas 先生成一份“选题计划”JSON。后续中英文正文必须基于这份选题计划生成，所以这一步最重要。
你不能联网浏览；只能使用下面 SOURCE_PACK 中的公开来源条目作为事实基础。不要编造 SOURCE_PACK 之外的链接、融资金额、发布时间或媒体素材。SOURCE_PACK 里的 newsletter / media 只作为雷达线索；公司官网、官方博客、论文、GitHub、Hugging Face、Product Hunt、机构报告、主流媒体来源优先作为确认来源。

重要：换模型不应改变日报目标。你不是在复述 SOURCE_PACK 排名前几条，而是在做“当日 AI 信号编辑”。请横向比较所有来源，按影响力、可信度、对产品/投资/战略/AI落地的启发排序。不要被 Product Hunt、Google News 或单一 feed 的更新时间挤占版面。若同一事件被多源报道，合并成一条并放多个 links。
SOURCE_PACK 已经是脚本轮巡所有公开源之后的分栏目候选池。你必须从对应 candidatePools 里选题：
- 头条只能从 candidatePools.headlines 选，覆盖 D-1 中美 AI 大公司及产业链动作，包含产品发布、模型/API、人事变动、组织调整、投融资、收并购、战略合作和基础设施信号；短信号和重大完整新闻都合并在这一栏，不再拆“快讯”。
- 深度只能从 candidatePools.depth 选，解释 Agentic AI、多模态、世界模型/机器人、医疗 AI、AI for Science、AI 安全治理等热门主题。
- 观点只能从 candidatePools.viewpoints 选，覆盖 AI 研究报告、领军人物、著名投资人和高质量行业观察。
- 开源项目只能从 candidatePools.openSource 选。
- AI产品推荐只能从 candidatePools.products 选，必须是真正可试用的软件/工具/应用/工作流产品；不要选择纯模型发布、API、芯片、融资或平台战略新闻。
- 头条和开源项目已经被脚本限制为北京时间 D-1；AI产品推荐、深度、观点如使用 fallback，正文必须保留补位属性，不能伪装成当日新闻。

选题范围：
- 中国和美国 AI 公司为主，其他国家为辅。
- 今日重点优先中美两国；韩国、加纳、马耳他等非中美国家默认降权，除非直接涉及中美重点公司、全球 AI 安全治理、关键产业链或 AI 大佬重大动作。
- 覆盖 OpenAI、Anthropic、Google/DeepMind、xAI、Meta、Microsoft、Amazon、NVIDIA、中国的智谱/Z.ai、MiniMax、阿里/Qwen、DeepSeek、月之暗面/Kimi、字节/Doubao、百度、腾讯，以及小而美创业公司。
- 关注 AI agents、开源项目、AI 硬件、机器人、AI 基础设施、企业落地、AI+跨境电商/零售/物流/金融/医疗/制造。
- 来源方法：AI Valley、The Rundown AI、Ben's Bites、TLDR AI、The Batch、Import AI、Latent Space、中文 AI 媒体只作为雷达；重要事实需要回到公司官网、官方博客、论文、GitHub、Hugging Face、Product Hunt、机构报告、主流媒体或招聘官网确认。

内容结构要求：
- 计划里使用中文 section：头条、深度、观点、开源项目、AI产品推荐、每日词条。
- 控制在 13 条左右：头条 5-7 条；深度 2 条；观点 2 条；开源 1 条；AI 产品推荐 2 条；每日 AI 词条 1 条。
- 每条 plan item 必须包含 section、priority、titleZh、titleEn、angle、sourceIds。
- sourceIds 必须引用对应 candidatePools 里的 id。每条至少 1 个，重要新闻尽量 2-4 个。
- 不要在 plan item 里返回 links，脚本会根据 sourceIds 自动补链接。
- angle 要写明为什么选择它、应该补充哪些上下文、对非技术读者最重要的理解角度，最多 60 个中文字。
- 普通头条只能包含一个 primary company / organization 和一个 primary action；不得把多个独立快讯拼成一张 roundup 头条。Google I/O、OpenAI DevDay、Microsoft Build、Apple WWDC、公司财报日等有明确母事件的官方发布会是例外，可以聚合母事件内多个子更新。

篇首编辑要求：
- headlineZh/headlineEn 和 summaryZh/summaryEn 不能是新闻标题罗列，也不能像目录一样覆盖“融资、产品、报告、开源……”。
- 它们要提炼当天的真实结构，不要机械套“AI 从 A 转向 B”的句式；如果当天主题分散，可以明确写“今天没有单一压倒性主线”。
- summary 必须是 2 句话：第 1 句提炼当天主题，第 2 句解释这个主题为什么值得关注。
- summary 最多点名 2 个公司或产品；如果需要更多具体新闻，留到正文卡片里写。
- 中文 summary 约 70-130 字；英文 summary 约 35-70 words。

观点 / Views 的特殊要求：
- 计划里必须包含 2 条观点。优先至少 1 条行业观点/访谈/深度文章；如果 candidatePools.viewpoints 里有合格机构报告，可以选 1 条报告。
- 如果没有真正新的机构报告，不要硬凑报告；用高质量行业观点、访谈、官方研究博客或深度研究文章补位，并明确它不是正式咨询报告。
- 如果 SOURCE_PACK 提供了报告页/PDF/研究文章链接，links 必须包含它。不要选 2025 或更早的旧报告凑数。

选题覆盖要求：
- 头条不要只来自一个来源；优先混合官方/主流媒体/研究社区/中国媒体。
- AI 产品推荐要选真正可试用、有产品启发的工具，尤其关注个人知识管理、跨模型工作流、agent、创作工具、效率工具，不能只按 Product Hunt 最新时间排序。
- 深度应该帮助读者理解一个当下热门 AI 主题，例如 Agentic AI、多模态、世界模型/机器人、医疗 AI、AI for Science、AI 安全治理。
- 观点应该帮助读者理解一个更大的 AI 产业问题，例如模型竞争、AI agent 落地、机器人商业化、开源生态、AI 产品入口、企业采用或监管变化。angle 里要写清“为什么值得深读/值得作为观点跟踪”。
- 投融资、IPO、并购、估值、投资方或资本市场信号不再单独成栏；如果与中美重点公司或产业链相关，应进入头条。
- 开源项目优先 GitHub/Hugging Face/开发者社区有明确项目页或技术博客的内容。
- 每日词条要和当天新闻有关，解释清楚但不要幼稚化。

返回 JSON，不能有 Markdown 包裹。格式：
{
  "plan": {
    "headlineZh": "...",
    "headlineEn": "...",
    "summaryZh": "一句主题判断。第二句说明为什么重要。",
    "summaryEn": "One thematic sentence. A second sentence explaining why it matters.",
    "tagsZh": ["..."],
    "tagsEn": ["..."],
    "items": [
      {
        "section": "头条",
        "priority": "high",
        "titleZh": "...",
        "titleEn": "...",
        "angle": "...",
        "sourceIds": ["S001"]
      }
    ]
  }
}

SOURCE_PACK:
${JSON.stringify(selectionSourcePack(sourcePack), null, 2)}
`;
}

function sectionForLang(section, lang) {
  if (lang === "zh") return section;
  return {
    "快讯": "Briefs",
    "头条": "Headlines",
    "深度": "Deep Dive",
    "观点": "Views",
    "今日重点": "Top Stories",
    "投融资信息": "Funding Watch",
    "开源项目": "Open Source",
    "AI产品推荐": "AI Product Picks",
    "深度阅读": "Deep Read",
    "机构报告": "Research Reports",
    "行业观点与报告": "Industry Views & Reports",
    "每日词条": "AI Term"
  }[section] || section;
}

function sourcesForPlanItem(sourcePack, planItem) {
  const sourceIdSet = new Set(planItem.sourceIds || []);
  const linkSet = new Set((planItem.links || []).map((link) => link[1]));
  const entries = sourcePack.entries.filter((entry) => sourceIdSet.has(entry.id) || linkSet.has(entry.link));
  return {
    date: sourcePack.date,
    timezone: sourcePack.timezone,
    coverage: sourcePack.coverage,
    entries: entries.length ? entries : sourcePack.entries.slice(0, 6)
  };
}

function linksForSourceIds(sourcePack, sourceIds = []) {
  const sourceIdSet = new Set(sourceIds);
  return sourcePack.entries
    .filter((entry) => sourceIdSet.has(entry.id) && entry.link)
    .slice(0, 5)
    .map((entry) => [`${entry.source}: ${entry.title}`.slice(0, 90), entry.link]);
}

function mergeLinks(existingLinks = [], requiredLinks = []) {
  const seen = new Set();
  return [...existingLinks, ...requiredLinks]
    .filter((link) => Array.isArray(link) && link[0] && link[1])
    .filter((link) => {
      const href = String(link[1]);
      if (seen.has(href)) return false;
      seen.add(href);
      return true;
    })
    .slice(0, 6);
}

function metadataForPlanItem(planItem, lang) {
  return {
    sourceDate: planItem.sourceDate || "",
    freshness: planItem.freshness || "",
    regionPriority: planItem.regionPriority || "",
    freshnessLabelZh: planItem.freshnessLabelZh || "",
    freshnessLabelEn: planItem.freshnessLabelEn || "",
    freshnessLabel: lang === "en" ? planItem.freshnessLabelEn || planItem.freshnessLabelZh || "" : planItem.freshnessLabelZh || planItem.freshnessLabelEn || ""
  };
}

function applyPlanMetadata(item, planItem, lang) {
  Object.assign(item, metadataForPlanItem(planItem, lang));
  return item;
}

function sectionPredicate(section) {
  if (section === "快讯") return isBriefEntry;
  if (section === "头条") return isHeadlineOrBriefEntry;
  if (section === "深度") return isDepthEntry;
  if (section === "观点") return isViewpointEntry;
  if (section === "投融资信息") return isFundingEntry;
  if (section === "开源项目") return isOpenSourceEntry;
  if (section === "AI产品推荐") return isProductEntry;
  if (section === "深度阅读") return isDeepReadEntry;
  if (section === "机构报告") return isReportEntry;
  if (section === "行业观点与报告") return isIndustryViewOrReportEntry;
  if (section === "今日重点") return isTopStoryEntry;
  return () => true;
}

function isEventAggregatePlanItem(entries) {
  if (entries.length < 2) return false;
  const signatures = entries.map(entryEventSignature).filter(Boolean);
  return signatures.length === entries.length && new Set(signatures).size === 1;
}

function isValidHeadlineCluster(entries) {
  if (entries.length <= 1) return true;
  if (isEventAggregatePlanItem(entries)) return true;
  const companyKeys = new Set(entries.flatMap((entry) => [...signalCompanies(entryContentText(entry))]));
  if (companyKeys.size > 1) return false;
  const signatures = new Set(entries.map(entrySignalSignature));
  return signatures.size === 1;
}

function headlineClusterError(item, entries) {
  if (item.section !== "头条") return "";
  if (isValidHeadlineCluster(entries)) return "";
  const companies = [...new Set(entries.flatMap((entry) => [...signalCompanies(entryContentText(entry))]))];
  const titles = entries.map((entry) => entry.title).filter(Boolean).slice(0, 3).join(" | ");
  return `Headline "${item.titleZh || item.titleEn}" mixes unrelated sources (${companies.join(", ") || "multiple subjects"}): ${titles}`;
}

function validatePlanAgainstPools(plan, sourcePack) {
  const entryById = new Map(sourcePack.entries.map((entry) => [entry.id, entry]));
  plan.items.forEach((item) => {
    if (isTermSectionName(item.section)) return;
    const predicate = sectionPredicate(item.section);
    const itemEntries = item.sourceIds.map((id) => entryById.get(id)).filter(Boolean);
    const clusterError = headlineClusterError(item, itemEntries);
    if (clusterError) throw new Error(clusterError);
    const primaryEntry = entryById.get(item.sourceIds[0]);
    const primarySignature = primaryEntry ? entryTopicSignature(primaryEntry) : "";
    const invalidIds = item.sourceIds.filter((id) => {
      const entry = entryById.get(id);
      if (!entry) return true;
      const sameAggregateEvent = primarySignature && primarySignature.startsWith("event:") && entryTopicSignature(entry) === primarySignature && entry.freshness === "d-1";
      if (sameAggregateEvent) return false;
      return !predicate(entry) || !entryAllowedForSection(entry, item.section);
    });
    if (invalidIds.length) {
      throw new Error(`Editorial plan item "${item.titleZh}" uses sourceIds outside its section pool: ${invalidIds.join(", ")}`);
    }
  });
  return plan;
}

function planAngle(section, entry) {
  const text = entryText(entry);
  if (section === "快讯") {
    if (isFundingEntry(entry)) return "D-1 中美 AI 大公司或产业链资本信号，用头条式写法快速说明发生了什么。";
    if (aiLeaderPattern.test(text)) return "D-1 中美 AI 大公司关键人事/组织信号，适合快速捕捉人才和路线变化。";
    if (modelLaunchPattern.test(text)) return "D-1 中美 AI 大公司产品、模型或 API 动作，用快讯交代主体、动作和影响。";
    return "D-1 中美 AI 大公司或产业链动作，适合用快讯方式快速扫描。";
  }
  if (section === "头条") {
    if (isFundingEntry(entry)) return "D-1 中美 AI 大公司、明星创业公司或关键产业链公司的资本/并购信号，需要解释战略含义和产业影响。";
    if (aiLeaderPattern.test(text)) return "AI 超级公司或明星创业公司的关键人事/组织新闻，需要补足背景、影响和后续观察点。";
    if (modelLaunchPattern.test(text)) return "D-1 中美 AI 大公司产品、模型或 API 动作，需要交代主体、动作、背景和影响。";
    return "D-1 中美 AI 大公司或产业链重要信号，需要快速说明发生了什么，并补足影响和后续观察点。";
  }
  if (section === "深度") return "围绕当下 AI 热门主题做解释性拆解，帮助读者理解技术和产业含义。";
  if (section === "观点") {
    return isReportEntry(entry)
      ? "近期行业报告或研究材料，适合补充产业全景、企业采用和未来应用判断。"
      : "AI 领军人物、投资人或深度作者观点，适合帮助读者形成判断框架。";
  }
  if (section === "今日重点") {
    if (aiLeaderPattern.test(text)) return "关键 AI 人事/创业信号，可能影响大公司路线和人才流向。";
    if (communityConcernPattern.test(text)) return "社区热议的 AI 风险或治理议题，影响用户信任和监管预期。";
    if (industryChainPattern.test(text)) return "AI 产业链和关键技术进展，能帮助判断能力边界和落地节奏。";
    return "中美 AI 大公司或关键模型动态，适合作为今日主线观察。";
  }
  if (section === "投融资信息") return "资本流向与今日热点相关，用来观察哪些 AI 方向正在获得长期押注。";
  if (section === "开源项目") return "开发者社区信号，适合观察 agent、模型工具链或基础设施的新方向。";
  if (section === "AI产品推荐") return "偏 productivity 的 AI 应用，适合观察真实工作流里的产品机会。";
  if (section === "深度阅读") return "来自行业观察者或深度来源，适合帮助读者理解一个更大的 AI 产业问题。";
  if (section === "机构报告") return "偏产业全景、未来应用或企业采用的报告，不追求过度 technical。";
  if (section === "行业观点与报告") {
    return isReportEntry(entry)
      ? "近期行业报告或研究材料，适合补充产业全景、企业采用和未来应用判断。"
      : "行业访谈、观点或深度文章，适合帮助读者理解一个更大的 AI 产业问题。";
  }
  return "从公开来源中筛出的 AI 信号，适合作为进一步阅读入口。";
}

function priorityForSection(section) {
  if (section === "快讯") return "news";
  if (section === "头条") return "high";
  if (section === "今日重点") return "high";
  if (section === "投融资信息") return "high";
  if (section === "每日词条") return "learning";
  return "medium";
}

function selectedPlanItem(section, entry) {
  return {
    section,
    priority: priorityForSection(section),
    titleZh: localizeTitleZh(entry.title),
    titleEn: entry.title,
    angle: planAngle(section, entry),
    sourceIds: [entry.id],
    links: [[`${entry.source}: ${entry.title}`.slice(0, 90), entry.link]],
    sourceDate: entry.sourceDate || "",
    freshness: entry.freshness || "",
    regionPriority: entry.regionPriority || "",
    freshnessLabelZh: entry.freshnessLabelZh || "",
    freshnessLabelEn: entry.freshnessLabelEn || ""
  };
}

function selectedAggregatePlanItem(section, entries, titleZh, titleEn, angle) {
  const firstEntry = entries[0] || {};
  return {
    section,
    priority: priorityForSection(section),
    titleZh,
    titleEn,
    angle,
    sourceIds: entries.map((entry) => entry.id).filter(Boolean).slice(0, 5),
    links: entries
      .filter((entry) => entry.link)
      .slice(0, 5)
      .map((entry) => [`${entry.source}: ${entry.title}`.slice(0, 90), entry.link]),
    sourceDate: firstEntry.sourceDate || "",
    freshness: firstEntry.freshness || "",
    regionPriority: firstEntry.regionPriority || "",
    freshnessLabelZh: firstEntry.freshnessLabelZh || "",
    freshnessLabelEn: firstEntry.freshnessLabelEn || ""
  };
}

function selectTopStoryEntries(sourcePack, count, used) {
  const candidates = sectionCandidates(
    sourcePack,
    "今日重点",
    isTopStoryEntry,
    30,
    used
  );
  const selected = [];
  const selectedIds = new Set();
  const addBest = (predicate) => {
    const entry = candidates.find((candidate) => !selectedIds.has(candidate.id) && predicate(entryContentText(candidate)));
    if (!entry) return;
    selected.push(entry);
    selectedIds.add(entry.id);
  };

  addBest((text) => communityConcernPattern.test(text));
  addBest((text) => aiLeaderPattern.test(text));
  addBest((text) => modelLaunchPattern.test(text) && priorityCompanyPattern.test(text));
  addBest((text) => industryChainPattern.test(text));

  candidates.forEach((entry) => {
    if (selected.length >= count) return;
    if (selectedIds.has(entry.id)) return;
    selected.push(entry);
    selectedIds.add(entry.id);
  });

  return selected.slice(0, count);
}

function buildEditorialFrame(items) {
  const headlineTitles = items.filter((item) => item.section === "头条").map((item) => `${item.titleZh || ""} ${item.titleEn || ""}`).join(" ");
  const hasMajorEvent = /Google I\/O|OpenAI|Microsoft Build|WWDC/i.test(headlineTitles);
  const hasInfrastructure = /芯片|算力|能源|数据中心|GPU|NVIDIA|infrastructure|energy|datacenter/i.test(headlineTitles);
  const hasProductEntry = /Agent|助手|搜索|浏览器|工作流|workflow|assistant/i.test(headlineTitles);
  if (!hasMajorEvent && !hasInfrastructure && !hasProductEntry) {
    return {
      headlineZh: "今天的 AI 信号没有单一主线，但值得分开看",
      headlineEn: "Today’s AI signals are dispersed, but still worth reading separately",
      summaryZh: "今天没有一个压倒性的 AI 主题，更像是大公司动作、产品更新和行业观点的并行推进。阅读重点不是强行找“转变”，而是分别判断哪些信号有真实产品、资本或组织含义。",
      summaryEn: "Today does not have one dominant AI theme; it is a set of parallel company moves, product updates, and industry views. The useful read is not to force a transformation narrative, but to judge which signals carry real product, capital, or organizational meaning.",
      tagsZh: ["头条", "深度", "观点", "AI产品"],
      tagsEn: ["Headlines", "Deep Dive", "Views", "AI Products"]
    };
  }
  return {
    headlineZh: hasInfrastructure ? "AI 大公司的竞争继续落到入口、算力和行业场景" : "今天的 AI 信号集中在入口、Agent 和应用落地",
    headlineEn: hasInfrastructure ? "AI competition is showing up in entry points, compute, and industry deployments" : "Today’s AI signals cluster around entry points, agents, and applied workflows",
    summaryZh: "今天值得看的不是单一“转变”，而是几类具体动作同时出现：大公司继续争夺用户入口，产业链公司强化算力或基础设施位置，垂直行业开始把 Agent 包装成可交付方案。产品推荐只保留少量能进入真实工作流的工具，作为正文之外的补充。",
    summaryEn: "Today’s useful read is not one neat transformation story, but several concrete moves happening at once: major companies are defending user entry points, infrastructure players are strengthening compute positions, and vertical industries are packaging agents into deliverable solutions.",
    tagsZh: ["头条", "深度", "观点", "AI产品"],
    tagsEn: ["Headlines", "Deep Dive", "Views", "AI Products"]
  };
}

function selectViewpointEntries(sourcePack, count, used) {
  const selected = [];
  const selectedIds = new Set();
  const addEntry = (entry) => {
    if (!entry || selectedIds.has(entry.id)) return;
    selected.push(entry);
    selectedIds.add(entry.id);
    used.add(entry.id);
  };
  const viewCandidates = sectionCandidates(sourcePack, "观点", (entry) => isViewpointEntry(entry) && !isReportEntry(entry), 10, used);
  const reportCandidates = sectionCandidates(sourcePack, "观点", isReportEntry, 6, used);
  addEntry(viewCandidates[0]);
  addEntry(reportCandidates[0]);
  if (selected.length < count) {
    sectionCandidates(sourcePack, "观点", isViewpointEntry, 12, new Set([...used, ...selectedIds]))
      .forEach((entry) => {
        if (selected.length < count) addEntry(entry);
      });
  }
  return selected.slice(0, count);
}

function selectIndustryViewReportEntries(sourcePack, count, used) {
  const selected = [];
  const selectedIds = new Set();
  const addEntry = (entry) => {
    if (!entry || selectedIds.has(entry.id)) return;
    selected.push(entry);
    selectedIds.add(entry.id);
    used.add(entry.id);
  };
  const viewCandidates = sectionCandidates(sourcePack, "行业观点与报告", isDeepReadEntry, 8, used);
  const reportCandidates = sectionCandidates(sourcePack, "行业观点与报告", isReportEntry, 4, used);
  addEntry(viewCandidates[0]);
  addEntry(reportCandidates[0]);
  if (selected.length < count) {
    sectionCandidates(sourcePack, "行业观点与报告", isIndustryViewOrReportEntry, 12, new Set([...used, ...selectedIds]))
      .forEach((entry) => {
        if (selected.length < count) addEntry(entry);
      });
  }
  return selected.slice(0, count);
}

function deterministicPlan(date, sourcePack, reason = "") {
  if (reason) console.warn(`Using deterministic editorial plan: ${reason}`);
  const used = new Set();
  const usedTopicSignatures = new Set();
  const addSelectedEntry = (items, section, entry) => {
    items.push(selectedPlanItem(section, entry));
    used.add(entry.id);
    usedTopicSignatures.add(entryTopicSignature(entry));
  };
  const addAggregateEntries = (items, section, entries, titleZh, titleEn, angle) => {
    items.push(selectedAggregatePlanItem(section, entries, titleZh, titleEn, angle));
    entries.forEach((entry) => used.add(entry.id));
    if (entries[0]) usedTopicSignatures.add(entryTopicSignature(entries[0]));
  };
  const specs = [
    ["头条", 6, isHeadlineOrBriefEntry],
    ["深度", 2, isDepthEntry],
    ["开源项目", 1, isOpenSourceEntry],
    ["AI产品推荐", 2, isProductEntry]
  ];
  const items = [];

  selectMajorEventClusters(sourcePack, 1, used).forEach((cluster) => {
    const copy = eventAggregateCopy(cluster.signature);
    if (!copy) return;
    addAggregateEntries(items, "头条", cluster.entries, copy.titleZh, copy.titleEn, copy.angle);
  });

  specs.forEach(([section, count, predicate]) => {
    const existingCount = items.filter((item) => item.section === section).length;
    const remainingCount = Math.max(0, count - existingCount);
    if (!remainingCount) return;
    let added = 0;
    const candidates = sectionCandidates(sourcePack, section, predicate, remainingCount * 6, used);
    for (const entry of candidates) {
      if (added >= remainingCount) break;
      if (isDuplicateTopic(entry, usedTopicSignatures)) continue;
      addSelectedEntry(items, section, entry);
      added += 1;
    }
  });

  selectViewpointEntries(sourcePack, 2, used).forEach((entry) => {
    if (isDuplicateTopic(entry, usedTopicSignatures)) return;
    addSelectedEntry(items, "观点", entry);
  });

  for (const entry of sourcePack.entries) {
    if (items.length >= 12) break;
    if (used.has(entry.id)) continue;
    if (isDuplicateTopic(entry, usedTopicSignatures)) continue;
    if (!isHeadlineOrBriefEntry(entry)) continue;
    addSelectedEntry(items, "头条", entry);
  }

  const sectionOrder = ["头条", "深度", "观点", "开源项目", "AI产品推荐"];
  items.sort((a, b) => sectionOrder.indexOf(a.section) - sectionOrder.indexOf(b.section));

  items.push({
    section: "每日词条",
    priority: "learning",
    titleZh: "Agentic Workflow",
    titleEn: "Agentic Workflow",
    angle: "帮助理解今天多条 agent 和企业自动化新闻背后的共同语言。",
    sourceIds: [],
    links: []
  });

  return normalizePlan({
    ...buildEditorialFrame(items),
    items
  });
}

function fallbackPlan(date, sourcePack, reason = "") {
  return deterministicPlan(date, sourcePack, reason);
}

function runEditorialGateTests() {
  const issueDate = "2026-05-19";
  const baseEntry = {
    source: "Google News China AI",
    link: "https://example.com/news",
    date: "2026-05-18T09:00:00+08:00",
    sourceDate: "2026-05-18",
    freshness: "d-1",
    summary: "AI industry update."
  };
  const topStory = (entry) => isTopStoryEntry({ ...baseEntry, ...entry });
  const assert = (condition, message) => {
    if (!condition) throw new Error(`Editorial gate test failed: ${message}`);
  };
  const assertThrows = (fn, message) => {
    let threw = false;
    try {
      fn();
    } catch {
      threw = true;
    }
    if (!threw) throw new Error(`Editorial gate test failed: ${message}`);
  };

  assert(!topStory({
    title: "重塑主流PC，第三代英特尔酷睿开启全民AI轻薄本时代",
    summary: "AI PC 轻薄本评测与消费换机趋势。"
  }), "consumer AI laptop stories must not enter top stories");
  assert(!topStory({
    title: "律师问 DeepSeek 谁能赢，拿着 AI 问答作为代理意见提交法庭",
    summary: "法院训诫代理人不要把聊天机器人答案当法律意见。"
  }), "social/legal anecdotes about AI misuse must not enter top stories");
  assert(!isIndustryViewOrReportEntry({
    ...baseEntry,
    source: "Google News China AI",
    title: "律师问 DeepSeek 谁能赢，拿着 AI 问答作为代理意见提交法庭",
    summary: "法院训诫代理人不要把聊天机器人答案当法律意见。"
  }), "social/legal anecdotes about AI misuse must not enter industry views or reports");
  assert(!isProductEntry({
    ...baseEntry,
    source: "Google News China AI Signals",
    title: "DeepSeek回应用户“对话泄露”疑虑：特殊字符引发模型幻觉",
    summary: "特殊字符引发模型幻觉，不是产品发布。"
  }), "Chinese text crossing 回应用户 must not be misread as 应用/product");
  assert(!topStory({
    title: "韩国模型跑分超过 GPT 和 DeepSeek",
    summary: "A Korean model tops a benchmark leaderboard without a major deployment or company action."
  }), "deprioritized market benchmark-only news must not enter top stories");
  assert(topStory({
    source: "TechCrunch",
    title: "NVIDIA announces Korea datacenter partnership for AI inference",
    summary: "The partnership expands GPU datacenter capacity for global AI inference infrastructure."
  }), "global-major infrastructure action may enter top stories");
  assert(!classifyFreshness({
    title: "OpenAI 2026-03-16 old product update resurfaces",
    summary: "This article republishes a March 16, 2026 product update.",
    date: "2026-05-18T09:00:00+08:00"
  }, issueDate), "explicit old event dates must fail freshness gate");
  assert(entryTopicSignature({
    title: "阿里巴巴发布新款AI晶片 试图打造替代英伟达的本土产品",
    summary: ""
  }) === entryTopicSignature({
    title: "阿里巴巴发布新款AI芯片 可同时承担训练和推理任务",
    summary: ""
  }), "same company and topic should deduplicate across sections");
  assert(entryTopicSignature({
    source: "Google AI Blog",
    title: "I/O 2026: Welcome to the agentic Gemini era",
    summary: "Google I/O developer conference updates."
  }) === entryTopicSignature({
    source: "VentureBeat AI",
    title: "Google just redesigned the search box for the first time in 25 years",
    summary: "AI Mode and AI Overviews became part of a new search entry point."
  }), "Google I/O sub-stories should share one event cluster signature");
  assert(isRoundupSourceEntry({
    ...baseEntry,
    title: "AI周报 | DeepSeek-V4发布，国产芯片加持；谷歌将投资Anthropic至多400亿美元",
    summary: "DeepSeek 发布新模型，谷歌投资 Anthropic，国产芯片进入新阶段。"
  }), "single-source weekly roundup articles should be blocked from headline candidates");
  assert(!isBriefEntry({
    ...baseEntry,
    title: "AI周报 | DeepSeek-V4发布，国产芯片加持；谷歌将投资Anthropic至多400亿美元",
    summary: "DeepSeek 发布新模型，谷歌投资 Anthropic，国产芯片进入新阶段。"
  }), "roundup source entries must not enter brief/headline pool");
  assert(!isRoundupSourceEntry({
    ...baseEntry,
    source: "Google AI Blog",
    title: "Google I/O 2026：搜索、Gemini 和科研 Agent 集中更新",
    summary: "Google I/O developer conference updates."
  }), "official event aggregates should not be treated as bad roundup entries");
  assert(detectMultiSubjectHeadline({
    section: "头条",
    title: "Google I/O 2026：搜索、Gemini 和科研 Agent 集中更新",
    dek: "Google 在同一场 I/O 发布会中集中更新搜索、Gemini 和科研 Agent。",
    details: ["Google I/O 是同一母事件，多个子更新都来自同一官方发布上下文。", "这类聚合应该允许。"],
    why: "这是合法母事件聚合。"
  }) === "", "Google I/O event aggregation should be allowed");
  assert(detectMultiSubjectHeadline({
    section: "头条",
    title: "腾讯上线系统级AI助手马维斯，Meta裁员10%，马斯克或成万亿富翁",
    dek: "多个互不相关的大公司快讯被拼在一个头条里。",
    details: ["腾讯发布 Marvis，Meta 裁员，马斯克财富变化。", "这些不是同一母事件。"],
    why: "这应该被拒绝。"
  }), "multi-company roundup headline should be rejected");
  assert(detectMultiSubjectHeadline({
    section: "头条",
    title: "DeepSeek-V4发布与谷歌对Anthropic的巨额投资",
    dek: "DeepSeek 发布模型，Google 投资 Anthropic。",
    details: ["DeepSeek、Google、Anthropic 是两个独立事件。", "不能强行拼成一张头条。"],
    why: "这应该被拒绝。"
  }), "DeepSeek plus Google/Anthropic mixed headline should be rejected");
  const validClusterSourcePack = {
    entries: [
      { id: "S001", ...baseEntry, source: "Google AI Blog", title: "I/O 2026: Welcome to the agentic Gemini era", summary: "Google I/O developer conference updates." },
      { id: "S002", ...baseEntry, source: "VentureBeat", title: "Google redesigns search at I/O 2026", summary: "AI Mode and AI Overviews were announced at Google I/O." }
    ]
  };
  assert(validatePlanAgainstPools({
    headlineZh: "x",
    headlineEn: "x",
    summaryZh: "x",
    summaryEn: "x",
    tagsZh: [],
    tagsEn: [],
    items: [{ section: "头条", titleZh: "Google I/O 2026 聚合", sourceIds: ["S001", "S002"] }]
  }, validClusterSourcePack), "same-event headline cluster should validate");
  const invalidClusterSourcePack = {
    entries: [
      { id: "S001", ...baseEntry, source: "Google News", title: "腾讯上线系统级AI助手Marvis", summary: "Tencent launches Marvis AI assistant." },
      { id: "S002", ...baseEntry, source: "Google News", title: "Meta cuts 10% of AI staff", summary: "Meta layoffs affect AI organization." },
      { id: "S003", ...baseEntry, source: "Google News", title: "Elon Musk may become a trillionaire", summary: "xAI and Tesla wealth story." }
    ]
  };
  assertThrows(() => validatePlanAgainstPools({
    headlineZh: "x",
    headlineEn: "x",
    summaryZh: "x",
    summaryEn: "x",
    tagsZh: [],
    tagsEn: [],
    items: [{ section: "头条", titleZh: "腾讯 Marvis、Meta 裁员和马斯克财富", sourceIds: ["S001", "S002", "S003"] }]
  }, invalidClusterSourcePack), "mixed-subject headline cluster should fail validation");
  assert(!isChineseLocalizedTitle("Viberia: Command AI agents like you're playing Civilization"), "English source title should fail Chinese title localization");
  assert(isChineseLocalizedTitle(localizeTitleZh("Viberia: Command AI agents like you're playing Civilization")), "localized Chinese product title should pass title gate");
  const fallbackFreshness = classifyFreshness({
    title: "Recall knowledge management product update",
    summary: "A productivity AI product for research workflows.",
    date: "2026-05-16T09:00:00+08:00",
    source: "Product Hunt"
  }, issueDate);
  assert(fallbackFreshness?.freshness === "fallback", "product/report/deep-read candidates may be marked fallback within seven days");
  const productTitles = curatedProductSignals(issueDate).map((entry) => entry.title).join(" | ");
  assert(/Recall/.test(productTitles) && /Granola/.test(productTitles) && /Fellou/.test(productTitles), "curated products should use a broader rotation pool");
  const editorialFrame = buildEditorialFrame([
    { section: "AI产品推荐", titleZh: "AI 信号：Run and monitor several coding agents at once in an IDE | Google Antigravity", titleEn: "Run and monitor several coding agents at once in an IDE" }
  ]);
  assert(!/AI 信号|Run and monitor|Google Antigravity/.test(editorialFrame.summaryZh), "editorial summary should not paste raw product titles");
  console.log("Editorial gate tests passed.");
}

function fallbackItem(planItem, scopedSourcePack, lang, reason = "") {
  console.warn(`Using fallback item for ${lang} "${planItem.titleZh || planItem.titleEn}": ${reason}`);
  const isZh = lang === "zh";
  const section = sectionForLang(planItem.section, lang);
  const entry = scopedSourcePack.entries[0] || {};
  const title = isZh ? localizeTitleZh(planItem.titleZh || planItem.titleEn) : planItem.titleEn;
  const sourceLine = entry.source ? `${entry.source}：${entry.title}` : title;
  const summary = String(entry.summary || planItem.angle || title).trim();
  const links = entry.link ? [[`${entry.source || "Source"}: ${entry.title || title}`.slice(0, 90), entry.link]] : [];

  if (isTermSectionName(section)) {
    return applyPlanMetadata(normalizeItem({
      section,
      priority: planItem.priority || "learning",
      title,
      dek: isZh ? "理解 AI 自动化新闻时经常出现的基础概念。" : "A useful concept for reading today’s AI automation news.",
      details: [
        isZh
          ? "Agentic Workflow 指的是让 AI 不只回答问题，而是围绕一个目标拆解任务、调用工具、检查结果，并在多步流程中持续推进。它常出现在企业自动化、代码生成、研究助理和跨应用工作流里。"
          : "An agentic workflow is a multi-step process where AI does more than answer a prompt: it breaks down a goal, calls tools, checks intermediate results, and keeps moving through a task.",
        isZh
          ? "它和普通聊天机器人的区别在于，重点从“生成一句答案”转向“完成一段流程”。所以当新闻里提到 agent、AI 工作流或企业自动化时，真正要看的是工具权限、数据接入、错误纠正和可审计性。"
          : "The shift is from producing one answer to completing a process. When news mentions agents or enterprise automation, the practical questions are tool access, data integration, error recovery, and auditability."
      ],
      why: isZh ? "这个词能帮你判断哪些 AI 产品只是聊天入口，哪些已经开始进入真实业务流程。" : "This term helps separate simple chat interfaces from AI products that can operate inside real workflows.",
      links
    }), planItem, lang);
  }

  const reportDetail = {
    summary: isZh ? "这是一条来自公开信息源的研究/报告类信号。" : "This is a research or report-like signal from public sources.",
    expanded: isZh
      ? `原始来源显示，${sourceLine}。核心值得看的不是标题本身，而是它反映了 AI 行业正在从单一模型能力比较，转向更关注企业采用、成本结构、工作流改造和投资回报。由于自动化抓取只能看到公开摘要，具体数字和图表仍应以原文为准。`
      : `The source item is ${sourceLine}. The useful read is not only the headline, but the broader shift it reflects: AI discussion is moving from raw model capability toward enterprise adoption, cost structure, workflow redesign, and return on investment. Any exact figures or charts should still be checked against the original source.`
  };

  return applyPlanMetadata(normalizeItem({
    section,
    priority: planItem.priority || "medium",
    title,
    dek: isZh ? String(planItem.angle || summary).slice(0, 120) : String(planItem.angle || summary).slice(0, 160),
    details: isReportSection(section) ? [reportDetail] : [
      isZh
        ? `这条信号来自 ${sourceLine}。从摘要看，事件本身指向一个更大的趋势：AI 公司正在把竞争重点从“发布一个模型或功能”，推进到用户入口、企业工作流、垂直行业落地和生态合作。`
        : `This signal comes from ${sourceLine}. Based on the public summary, it points to a broader shift: AI companies are moving competition from standalone model or feature launches toward user entry points, enterprise workflows, vertical deployment, and ecosystem partnerships.`,
      isZh
        ? `需要注意的是，公开 RSS 摘要通常不能覆盖全部细节，尤其是金额、客户、技术指标或发布时间。这里把它纳入日报，是因为它与今天其他来源共同指向相似方向，适合作为进一步阅读和判断的入口。`
        : `One caveat: public RSS summaries often miss full details such as exact amounts, customers, benchmarks, or launch timing. It is included because it aligns with other signals in today’s source pack and is useful as a starting point for deeper reading.`,
      isZh
        ? `对产品和战略判断来说，关键问题是它能否改变真实使用频率，而不只是制造短期关注。后续可以继续看是否出现官方案例、开发者采用、客户复购或资本继续跟进。`
        : `For product and strategy judgment, the key question is whether it changes real usage frequency rather than creating short-term attention. Follow-up signals include official case studies, developer adoption, customer repeat usage, or continued capital interest.`
    ],
    why: isZh ? "它值得关注，是因为这类信号能帮助判断 AI 注意力正在流向模型能力、产品入口还是行业落地。" : "It matters because signals like this help identify whether AI attention is shifting toward model capability, product distribution, or industry deployment.",
    links,
    ...(entry.image ? { media: { type: "image", src: entry.image, alt: title, caption: entry.source || "", href: entry.link || "" } } : {})
  }), planItem, lang);
}

function buildItemPrompt(date, sourcePack, planItem, lang, revisionNote = "") {
  const isZh = lang === "zh";
  const section = sectionForLang(planItem.section, lang);
  return `
今天日期：${date}，时区：北京时间 / Asia/Shanghai。
${lookbackDescription(date)}
${revisionNote ? `\n上一次生成未通过质量校验：${revisionNote}\n请修复：增加新闻细节、写成解释性段落；观点栏目要清楚区分观点文章、访谈和正式报告。\n` : ""}

请基于 ITEM_PLAN 生成 AI Daily Atlas ${isZh ? "中文版" : "英文版"}的一张信息卡 JSON。
你不能改变选题，只能基于 ITEM_PLAN 和 SOURCE_PACK 写正文。不要编造 SOURCE_PACK 之外的链接、融资金额、发布时间或媒体素材。未确认消息必须标注不确定性，不要写成事实。
本条 section 必须是：${section}

${isZh ? `
语言风格：轻量、好读、有判断，适合非技术背景读者；不要幼稚化，也不要只堆技术名词。
头条写成 2-5 条有信息量的小段落：短头条每条约 50-110 字，重点头条每条约 80-180 字，至少包含主体动作、背景、关键数字、影响范围或不确定性中的两个维度；其他栏目写成 3-5 条“有信息量的小段落”。
中文标题和 dek 必须中文化：公司名、产品名、模型名、会议名可以保留英文专名，但不能把英文原文标题整句复制到中文页面。例：写成“Viberia：像玩策略游戏一样指挥 AI Agent”，不要写成“Viberia: Command AI agents like you're playing Civilization”。
` : `
Tone: concise, readable, analytical, not a mechanical translation. For Headlines, write 2-5 substantial short paragraphs: shorter headline items can be 35-70 words, while major stories should be 60-110 words and include at least two of: context, key numbers, actor action, impact, uncertainty.
`}

item 必须有 section、priority、title、dek、details、why、links。脚本会强制补入 sourceDate、freshness、regionPriority、freshnessLabel，不要改写这些元数据。
- details 不能是短 bullet。要让非技术读者理解来龙去脉。
- why 必须是 1-2 句判断，解释这条新闻对产品、投资、公司战略、创业机会或职业判断有什么意义。
- links 是 [label, url] 数组。每条内容的 links 必须至少包含 1 个 SOURCE_PACK 中出现过的 URL。
- 如果 SOURCE_PACK 条目里有 image，或原链接显然是视频/GitHub/Product Hunt/Hugging Face 页面，可以加 media；没有可靠素材就不要编造。AI 产品推荐和头条优先带 media。
- 不要包含用户个人收入、具体雇主经历或敏感个人信息。

栏目写法：
- 头条 / Headlines：覆盖 D-1 中美大公司和产业链重点动作。普通头条只能围绕一个主体动作：一个 primary company / organization + 一个 primary action + 一个核心影响。不要把多个快讯拼成“今日合集式头条”，例如不要把腾讯 Marvis、Meta 裁员、马斯克财富写进同一张卡，也不要把 DeepSeek 发布和 Google 投资 Anthropic 写成一张卡。Google I/O、OpenAI DevDay、Microsoft Build、Apple WWDC、公司财报日等有明确母事件的官方发布会可以聚合多个子更新，但正文必须只写该母事件内的内容。不要把社会奇闻、消费电子导购或单纯跑分新闻写进来。
- 深度 / Deep Dive：解释一个热门 AI 主题或产业问题，不只是复述一条新闻；要帮非技术读者理解“这件事为什么会成为趋势”。
- 观点 / Views：覆盖研究报告、领军人物、投资人和高质量行业观察。

观点 / Views 的特殊要求：
- 如果原文是访谈、长文、播客或观点文章，details 要解释：核心问题、作者/来源背景、最值得读的 2-3 个观点、对产品/投资/战略/职业判断的启发。要保留观点属性，不要把作者观点包装成已确认事实。
- 如果原文是机构报告、研究文章、白皮书或指数，不允许只写一句话摘要。details 可以使用对象数组，每个对象包含 summary 和 expanded；expanded 要讲清核心观点、关键数据或结论、产业/投资/职业启发。
- 如果 SOURCE_PACK 提供了报告页/PDF/研究文章链接，links 必须包含它。若有原文短句，可以加 quote；quote 必须很短，不能超过 25 个英文词或 35 个中文字。若有报告图表入口，可以加 chart: ["图表/报告入口", "url"]。
- 如果它不是正式咨询报告，要在正文里明确写成“行业观点/深度文章/官方研究博客”，不要硬编 PDF 或报告属性。

返回 JSON，不能有 Markdown 包裹。格式：
{
  "item": {
    "section": "${section}",
    "priority": "${planItem.priority || "medium"}",
    "title": "...",
    "dek": "...",
    "details": [],
    "why": "...",
    "links": []
  }
}

ITEM_PLAN:
${JSON.stringify({ ...planItem, section }, null, 2)}

SOURCE_PACK:
${JSON.stringify(sourcePack, null, 2)}
`;
}

function chatCompletionText(body) {
  return body?.choices?.[0]?.message?.content || "";
}

function normalizePlan(plan) {
  if (!plan || typeof plan !== "object") throw new Error("Missing editorial plan.");
  const normalized = {
    headlineZh: String(plan.headlineZh || ""),
    headlineEn: String(plan.headlineEn || ""),
    summaryZh: String(plan.summaryZh || ""),
    summaryEn: String(plan.summaryEn || ""),
    tagsZh: Array.isArray(plan.tagsZh) ? plan.tagsZh.map(String) : [],
    tagsEn: Array.isArray(plan.tagsEn) ? plan.tagsEn.map(String) : [],
    items: Array.isArray(plan.items) ? plan.items.map((item) => ({
      section: String(item.section || ""),
      priority: String(item.priority || ""),
      titleZh: String(item.titleZh || ""),
      titleEn: String(item.titleEn || ""),
      angle: String(item.angle || ""),
      sourceIds: Array.isArray(item.sourceIds) ? item.sourceIds.map(String) : [],
      links: normalizeLinks(item.links || []),
      sourceDate: String(item.sourceDate || ""),
      freshness: String(item.freshness || ""),
      regionPriority: String(item.regionPriority || ""),
      freshnessLabelZh: String(item.freshnessLabelZh || ""),
      freshnessLabelEn: String(item.freshnessLabelEn || "")
    })) : []
  };

  if (!normalized.headlineZh || !normalized.headlineEn || !normalized.summaryZh || !normalized.summaryEn) {
    throw new Error("Editorial plan missing headline or summary.");
  }
  validateIssueFrame({ headline: normalized.headlineZh, summary: normalized.summaryZh }, "zh plan");
  validateIssueFrame({ headline: normalized.headlineEn, summary: normalized.summaryEn }, "en plan");
  if (normalized.items.length < 6) {
    throw new Error("Editorial plan has too few items.");
  }
  normalized.items.forEach((item) => {
    for (const key of ["section", "titleZh", "titleEn", "angle"]) {
      if (!item[key]) throw new Error(`Editorial plan item missing ${key}.`);
    }
    if (!isTermSectionName(item.section) && !item.sourceIds.length) {
      throw new Error(`Editorial plan item "${item.titleZh}" needs sourceIds.`);
    }
  });

  return normalized;
}

async function deepSeekJson(prompt, maxTokens = 9000) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    throw new Error("Missing DEEPSEEK_API_KEY. Add it as a GitHub Actions repository secret.");
  }

  const body = await fetchModelJson(`${deepseekBaseUrl.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: deepseekModel,
      messages: [
        {
          role: "system",
          content: jsonSystemPrompt
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.15,
      max_tokens: maxTokens
    })
  }, "DeepSeek API");

  return extractJson(chatCompletionText(body));
}

async function fetchModelJson(url, options, label) {
  const timeoutMs = Number(process.env.AI_REQUEST_TIMEOUT_MS || 90000);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  let response;
  try {
    response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
  } catch (error) {
    if (error?.name === "AbortError") {
      throw new Error(`${label} timed out after ${Math.round(timeoutMs / 1000)}s.`);
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }

  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(`${label} error ${response.status}: ${JSON.stringify(body)}`);
  }
  return body;
}

async function openAIJson(prompt, maxOutputTokens = 9000) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY. Add it as a GitHub Actions repository secret.");
  }

  const body = await fetchModelJson("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: openaiModel,
      reasoning: { effort: process.env.OPENAI_REASONING_EFFORT || "medium" },
      text: { format: { type: "json_object" } },
      max_output_tokens: maxOutputTokens,
      input: `${jsonSystemPrompt}\n\n${prompt}`
    })
  }, "OpenAI API");

  return extractJson(responseText(body));
}

async function createItemWithRetry({ date, sourcePack, planItem, lang, requestJson }) {
  const scopedSourcePack = sourcesForPlanItem(sourcePack, planItem);
  const sourceLinks = linksForSourceIds(sourcePack, planItem.sourceIds);
  try {
    const parsed = await requestJson(buildItemPrompt(date, scopedSourcePack, planItem, lang), 4500);
    const item = normalizeItem(parsed.item);
    item.section = sectionForLang(planItem.section, lang);
    item.links = mergeLinks(item.links, sourceLinks);
    applyPlanMetadata(item, planItem, lang);
    validateItemContent(item, lang);
    return item;
  } catch (error) {
    const message = String(error?.message || error);
    if (!/too shallow|expanded report|needs expanded|summary is list-like|title not localized|Chinese issue titles|json|expected|unexpected|unterminated string|parseable json|unexpected end/i.test(message)) {
      return fallbackItem(planItem, scopedSourcePack, lang, message);
    }
    console.warn(`Item generation retry for ${lang} "${planItem.titleZh || planItem.titleEn}": ${message}`);
    try {
      const parsed = await requestJson(buildItemPrompt(date, scopedSourcePack, planItem, lang, message), 4500);
      const item = normalizeItem(parsed.item);
      item.section = sectionForLang(planItem.section, lang);
      item.links = mergeLinks(item.links, sourceLinks);
      applyPlanMetadata(item, planItem, lang);
      validateItemContent(item, lang);
      return item;
    } catch (retryError) {
      return fallbackItem(planItem, scopedSourcePack, lang, String(retryError?.message || retryError));
    }
  }
}

async function createIssueFromPlan(date, sourcePack, plan, lang, requestJson) {
  const isZh = lang === "zh";
  const issue = {
    headline: isZh ? plan.headlineZh : plan.headlineEn,
    summary: isZh ? plan.summaryZh : plan.summaryEn,
    tags: isZh ? plan.tagsZh : plan.tagsEn,
    items: []
  };

  for (const planItem of plan.items) {
    console.log(`Generating ${lang} item: ${planItem.section} / ${planItem.titleZh || planItem.titleEn}`);
    const item = await createItemWithRetry({ date, sourcePack, planItem, lang, requestJson });
    item.section = sectionForLang(planItem.section, lang);
    item.priority = item.priority || planItem.priority || "medium";
    issue.items.push(item);
  }

  return normalizeIssue(issue, date, lang);
}

async function createIssueWithDeepSeek(date, sourcePack, revisionNote = "") {
  const plan = validatePlanAgainstPools(deterministicPlan(date, sourcePack, revisionNote), sourcePack);
  return {
    zh: await createIssueFromPlan(date, sourcePack, plan, "zh", deepSeekJson),
    en: await createIssueFromPlan(date, sourcePack, plan, "en", deepSeekJson)
  };
}

async function createIssueWithOpenAI(date, sourcePack, revisionNote = "") {
  const plan = validatePlanAgainstPools(deterministicPlan(date, sourcePack, revisionNote), sourcePack);
  return {
    zh: await createIssueFromPlan(date, sourcePack, plan, "zh", openAIJson),
    en: await createIssueFromPlan(date, sourcePack, plan, "en", openAIJson)
  };
}

async function createIssue(date, sourcePack) {
  const create = provider === "deepseek" ? createIssueWithDeepSeek : provider === "openai" ? createIssueWithOpenAI : null;
  if (!create) throw new Error(`Unsupported AI_PROVIDER: ${provider}`);
  try {
    return await create(date, sourcePack);
  } catch (error) {
    const message = String(error?.message || error);
    if (!/too shallow|expanded report|needs expanded|summary is list-like|title not localized|Chinese issue titles|json|expected|unexpected|unterminated string|parseable json|unexpected end/i.test(message)) throw error;
    console.warn(`Quality check failed, retrying once: ${message}`);
    return create(date, sourcePack, message);
  }
}

async function main() {
  if (process.env.RUN_EDITORIAL_TESTS === "1") {
    runEditorialGateTests();
    return;
  }
  const date = process.env.ISSUE_DATE || shanghaiDate();
  const sourcePack = await collectSourcePack(date);
  console.log(`Collected ${sourcePack.entries.length} source entries from ${sourcePack.sources.filter((source) => source.ok).length} sources.`);
  if (process.env.DRY_RUN_SOURCES === "1") {
    console.log(JSON.stringify(sourcePack, null, 2));
    return;
  }
  if (process.env.DRY_RUN_PLAN === "1") {
    console.log(JSON.stringify({
      sourcePack: selectionSourcePack(sourcePack),
      plan: deterministicPlan(date, sourcePack)
    }, null, 2));
    return;
  }

  console.log(`Generating issue with provider=${provider}, model=${provider === "deepseek" ? deepseekModel : openaiModel}.`);
  const { zh, en } = await createIssue(date, sourcePack);

  let source = fs.readFileSync(appPath, "utf8");
  source = replaceOrInsertIssue(source, "archiveZh", zh);
  source = replaceOrInsertIssue(source, "archiveEn", en);
  fs.writeFileSync(appPath, source);
  updateAppCacheBust(date);

  console.log(`Updated AI Daily Atlas issue for ${date}`);
  console.log(`Chinese items: ${zh.items.length}; English items: ${en.items.length}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
