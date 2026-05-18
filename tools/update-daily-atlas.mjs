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
const maxSourceEntries = Number(process.env.MAX_SOURCE_ENTRIES || 90);
const maxEntriesPerSource = Number(process.env.MAX_ENTRIES_PER_SOURCE || 6);
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

const sourceFeeds = [
  googleNews("Google News AI Labs", "(OpenAI OR Anthropic OR DeepMind OR xAI OR Meta AI OR Microsoft AI OR NVIDIA AI) when:2d"),
  googleNews("Google News China AI", "(DeepSeek OR Qwen OR MiniMax OR Zhipu OR Kimi OR Doubao OR Alibaba AI OR Tencent AI) when:2d", {
    hl: "zh-CN",
    gl: "CN",
    ceid: "CN:zh-Hans"
  }),
  googleNews("Google News AI Funding", "(AI startup funding OR AI acquisition OR AI IPO OR 人工智能 融资 OR AI 投融资) when:7d"),
  googleNews("Google News AI Products", "(AI agent product launch OR AI tool Product Hunt OR AI workflow tool OR AI 产品 发布) when:7d"),
  googleNews("Google News AI Reports", "(AI report PDF OR State of AI report OR Stanford AI Index OR McKinsey AI report OR BCG AI report OR AI 报告) when:14d"),
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

function lookbackDescription() {
  return "每天北京时间 7:30 运行：覆盖过去 24 小时内的重要 AI 信号。";
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

  const seen = new Set();
  const sortedEntries = entries
    .map((entry) => ({ ...entry, timestamp: Date.parse(entry.date) || 0, score: relevanceScore(entry) }))
    .sort((a, b) => b.score - a.score || b.timestamp - a.timestamp);
  const recentCutoff = Date.now() - 14 * 24 * 60 * 60 * 1000;
  const candidateEntries = sortedEntries.filter((entry) => entry.timestamp >= recentCutoff);
  const freshnessBalancedEntries = candidateEntries.length >= 35 ? candidateEntries : sortedEntries;
  const sourceCounts = new Map();
  const uniqueEntries = freshnessBalancedEntries
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

  if (uniqueEntries.length < 10) {
    throw new Error(`Too few source entries collected (${uniqueEntries.length}). Check feed availability.`);
  }

  return {
    date,
    timezone,
    generatedAt: new Date().toISOString(),
    coverage: lookbackDescription(),
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
  return details
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
    links: normalizeLinks(item.links || [])
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

  if (!normalized.headline || !normalized.summary) {
    throw new Error(`${lang} issue missing headline or summary.`);
  }
  if (normalized.items.length < 8) {
    throw new Error(`${lang} issue has too few items.`);
  }
  normalized.items.forEach((item) => {
    if (isTermSectionName(item.section)) return;
    const richDetails = item.details.filter((detail) => detailDepth(detail) >= 45);
    if (richDetails.length < 2) {
      throw new Error(`${lang} item "${item.title}" is too shallow. Details must include at least two rich context points.`);
    }
    if (isReportSection(item.section)) {
      const expandedReports = item.details.filter((detail) => detail && typeof detail === "object" && detail.expanded && detail.expanded.length >= 90);
      if (!expandedReports.length) {
        throw new Error(`${lang} report "${item.title}" needs expanded report analysis objects.`);
      }
    }
  });
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

function buildSelectionPrompt(date, sourcePack, revisionNote = "") {
  return `
今天日期：${date}，时区：北京时间 / Asia/Shanghai。
${lookbackDescription()}
${revisionNote ? `\n上一次生成未通过质量校验：${revisionNote}\n请修复：增加新闻细节、写成解释性段落，机构报告必须有 expanded 深度解读对象。\n` : ""}

请为 AI Daily Atlas 先生成一份“选题计划”JSON。后续中英文正文必须基于这份选题计划生成，所以这一步最重要。
你不能联网浏览；只能使用下面 SOURCE_PACK 中的公开来源条目作为事实基础。不要编造 SOURCE_PACK 之外的链接、融资金额、发布时间或媒体素材。SOURCE_PACK 里的 newsletter / media 只作为雷达线索；公司官网、官方博客、论文、GitHub、Hugging Face、Product Hunt、机构报告、主流媒体来源优先作为确认来源。

重要：换模型不应改变日报目标。你不是在复述 SOURCE_PACK 排名前几条，而是在做“当日 AI 信号编辑”。请横向比较所有来源，按影响力、可信度、对产品/投资/战略/AI落地的启发排序。不要被 Product Hunt、Google News 或单一 feed 的更新时间挤占版面。若同一事件被多源报道，合并成一条并放多个 links。

选题范围：
- 中国和美国 AI 公司为主，其他国家为辅。
- 覆盖 OpenAI、Anthropic、Google/DeepMind、xAI、Meta、Microsoft、Amazon、NVIDIA、中国的智谱/Z.ai、MiniMax、阿里/Qwen、DeepSeek、月之暗面/Kimi、字节/Doubao、百度、腾讯，以及小而美创业公司。
- 关注 AI agents、开源项目、AI 硬件、机器人、AI 基础设施、企业落地、AI+跨境电商/零售/物流/金融/医疗/制造。
- 来源方法：AI Valley、The Rundown AI、Ben's Bites、TLDR AI、The Batch、Import AI、Latent Space、中文 AI 媒体只作为雷达；重要事实需要回到公司官网、官方博客、论文、GitHub、Hugging Face、Product Hunt、机构报告、主流媒体或招聘官网确认。

内容结构要求：
- 计划里使用中文 section：今日重点、投融资信息、开源项目、AI产品推荐、机构报告、每日词条。
- 今日重点 4-6 条；投融资 1-2 条；开源 1-2 条；AI 产品推荐 1-3 条；机构报告 1-2 条；每日 AI 词条 1 条。
- 每条 plan item 必须包含 section、priority、titleZh、titleEn、angle、sourceIds、links。
- sourceIds 必须引用 SOURCE_PACK.entries 里的 id。每条至少 1 个，重要新闻尽量 2-4 个。
- links 是 [label, url] 数组，URL 必须来自 SOURCE_PACK。
- angle 要写明为什么选择它、应该补充哪些上下文、对非技术读者最重要的理解角度。

机构报告 / Research Reports 的特殊要求：
- 计划里必须至少包含 1 条机构报告或深度研究文章。
- 如果 SOURCE_PACK 提供了报告页/PDF/研究文章链接，links 必须包含它。
- 如果当天没有真正的机构报告，可以选择深度研究文章/官方研究博客/年度报告，但必须明确它不是正式咨询报告，不要硬编 PDF。

选题覆盖要求：
- 今日重点不要只来自一个来源；优先混合官方/主流媒体/研究社区/中国媒体。
- AI 产品推荐要选真正可试用、有产品启发的工具，尤其关注个人知识管理、跨模型工作流、agent、创作工具、效率工具，不能只按 Product Hunt 最新时间排序。
- 投融资只写有融资、IPO、并购、估值、投资方或资本市场信号的内容；没有可信信号时宁可写 1 条并标注来源限制。
- 开源项目优先 GitHub/Hugging Face/开发者社区有明确项目页或技术博客的内容。
- 每日词条要和当天新闻有关，解释清楚但不要幼稚化。

返回 JSON，不能有 Markdown 包裹。格式：
{
  "plan": {
    "headlineZh": "...",
    "headlineEn": "...",
    "summaryZh": "...",
    "summaryEn": "...",
    "tagsZh": ["..."],
    "tagsEn": ["..."],
    "items": [
      {
        "section": "今日重点",
        "priority": "high",
        "titleZh": "...",
        "titleEn": "...",
        "angle": "...",
        "sourceIds": ["S001"],
        "links": [["source label", "https://..."]]
      }
    ]
  }
}

SOURCE_PACK:
${JSON.stringify(sourcePack, null, 2)}
`;
}

function buildIssuePrompt(date, sourcePack, plan, lang, revisionNote = "") {
  const isZh = lang === "zh";
  return `
今天日期：${date}，时区：北京时间 / Asia/Shanghai。
${lookbackDescription()}
${revisionNote ? `\n上一次生成未通过质量校验：${revisionNote}\n请修复：增加新闻细节、写成解释性段落，机构报告必须有 expanded 深度解读对象。\n` : ""}

请基于 EDITORIAL_PLAN 生成 AI Daily Atlas ${isZh ? "中文版" : "英文版"}正文 JSON。
你不能改变选题，只能基于 EDITORIAL_PLAN 和 SOURCE_PACK 写正文。不要编造 SOURCE_PACK 之外的链接、融资金额、发布时间或媒体素材。未确认消息必须标注不确定性，不要写成事实。

${isZh ? `
中文 sections 必须使用：今日重点、投融资信息、开源项目、AI产品推荐、机构报告、每日词条。
语言风格：轻量、好读、有判断，适合非技术背景读者；不要幼稚化，也不要只堆技术名词。
每条 detail 写成 3-5 条“有信息量的小段落”，每条约 80-180 字，至少包含背景/关键数字/主体动作/影响范围/不确定性中的两个维度。
` : `
English sections must use: Top Stories, Funding Watch, Open Source, AI Product Picks, Research Reports, AI Term.
Tone: concise, readable, analytical, not a mechanical translation. Each detail should be 45-100 words and include at least two of: context, key numbers, actor action, impact, uncertainty.
`}

所有 item 必须有 section、priority、title、dek、details、why、links。
- details 不能是短 bullet。要让非技术读者理解来龙去脉。
- why 必须是 1-2 句判断，解释这条新闻对产品、投资、公司战略、创业机会或职业判断有什么意义。
- links 是 [label, url] 数组。每条内容的 links 必须至少包含 1 个 SOURCE_PACK 中出现过的 URL。
- 如果 SOURCE_PACK 条目里有 image，或原链接显然是视频/GitHub/Product Hunt/Hugging Face 页面，可以加 media；没有可靠素材就不要编造。AI 产品推荐和今日重点优先带 media。
- 不要包含用户个人收入、具体雇主经历或敏感个人信息。

机构报告 / Research Reports 的特殊要求：
- 不允许只写一句话摘要。每份报告的 details 必须使用对象数组，每个对象包含 summary 和 expanded。
- expanded 要相对详细，${isZh ? "中文约 120-260 字" : "English 80-160 words"}；需要讲清核心观点、关键数据或结论、产业/投资/职业启发。
- 如果 SOURCE_PACK 提供了报告页/PDF/研究文章链接，links 必须包含它。若有原文短句，可以加 quote；quote 必须很短，不能超过 25 个英文词或 35 个中文字。若有报告图表入口，可以加 chart: ["图表/报告入口", "url"]。
- 如果当天没有真正的机构报告，可以选择深度研究文章/官方研究博客/年度报告，但必须明确它不是正式咨询报告，不要硬编 PDF。

返回 JSON，不能有 Markdown 包裹。格式：
{
  "issue": {
    "headline": "...",
    "summary": "...",
    "tags": ["..."],
    "items": []
  }
}

EDITORIAL_PLAN:
${JSON.stringify(plan, null, 2)}

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
      links: normalizeLinks(item.links || [])
    })) : []
  };

  if (!normalized.headlineZh || !normalized.headlineEn || !normalized.summaryZh || !normalized.summaryEn) {
    throw new Error("Editorial plan missing headline or summary.");
  }
  if (normalized.items.length < 8) {
    throw new Error("Editorial plan has too few items.");
  }
  normalized.items.forEach((item) => {
    for (const key of ["section", "titleZh", "titleEn", "angle"]) {
      if (!item[key]) throw new Error(`Editorial plan item missing ${key}.`);
    }
    if (!item.sourceIds.length || !item.links.length) {
      throw new Error(`Editorial plan item "${item.titleZh}" needs sourceIds and links.`);
    }
  });

  return normalized;
}

async function deepSeekJson(prompt, maxTokens = 9000) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    throw new Error("Missing DEEPSEEK_API_KEY. Add it as a GitHub Actions repository secret.");
  }

  const response = await fetch(`${deepseekBaseUrl.replace(/\/$/, "")}/chat/completions`, {
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
      temperature: 0.25,
      max_tokens: maxTokens
    })
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(`DeepSeek API error ${response.status}: ${JSON.stringify(body)}`);
  }

  return extractJson(chatCompletionText(body));
}

async function openAIJson(prompt, maxOutputTokens = 9000) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY. Add it as a GitHub Actions repository secret.");
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
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
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(`OpenAI API error ${response.status}: ${JSON.stringify(body)}`);
  }

  return extractJson(responseText(body));
}

async function createIssueWithDeepSeek(date, sourcePack, revisionNote = "") {
  const planJson = await deepSeekJson(buildSelectionPrompt(date, sourcePack, revisionNote), 5000);
  const plan = normalizePlan(planJson.plan);
  const zhJson = await deepSeekJson(buildIssuePrompt(date, sourcePack, plan, "zh", revisionNote), 9000);
  const enJson = await deepSeekJson(buildIssuePrompt(date, sourcePack, plan, "en", revisionNote), 9000);
  return {
    zh: normalizeIssue(zhJson.issue, date, "zh"),
    en: normalizeIssue(enJson.issue, date, "en")
  };
}

async function createIssueWithOpenAI(date, sourcePack, revisionNote = "") {
  const planJson = await openAIJson(buildSelectionPrompt(date, sourcePack, revisionNote), 5000);
  const plan = normalizePlan(planJson.plan);
  const zhJson = await openAIJson(buildIssuePrompt(date, sourcePack, plan, "zh", revisionNote), 9000);
  const enJson = await openAIJson(buildIssuePrompt(date, sourcePack, plan, "en", revisionNote), 9000);
  return {
    zh: normalizeIssue(zhJson.issue, date, "zh"),
    en: normalizeIssue(enJson.issue, date, "en")
  };
}

async function createIssue(date, sourcePack) {
  const create = provider === "deepseek" ? createIssueWithDeepSeek : provider === "openai" ? createIssueWithOpenAI : null;
  if (!create) throw new Error(`Unsupported AI_PROVIDER: ${provider}`);
  try {
    return await create(date, sourcePack);
  } catch (error) {
    const message = String(error?.message || error);
    if (!/too shallow|expanded report|needs expanded|unterminated string|parseable json|unexpected end/i.test(message)) throw error;
    console.warn(`Quality check failed, retrying once: ${message}`);
    return create(date, sourcePack, message);
  }
}

async function main() {
  const date = process.env.ISSUE_DATE || shanghaiDate();
  const sourcePack = await collectSourcePack(date);
  console.log(`Collected ${sourcePack.entries.length} source entries from ${sourcePack.sources.filter((source) => source.ok).length} sources.`);
  if (process.env.DRY_RUN_SOURCES === "1") {
    console.log(JSON.stringify(sourcePack, null, 2));
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
