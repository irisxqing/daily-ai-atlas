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

function curatedProductSignals(date) {
  const publishedAt = `${date}T07:30:00+08:00`;
  return [
    {
      source: "Curated AI Products",
      title: "Recall: personal AI knowledge base for articles, videos, PDFs, and notes",
      link: "https://www.recall.it/",
      date: publishedAt,
      summary: "Recall saves, summarizes, tags, connects, and lets users chat with web pages, YouTube videos, podcasts, PDFs, books, and notes. It is useful for turning daily AI reading into a reusable personal knowledge base instead of a disposable reading list."
    },
    {
      source: "Curated AI Products",
      title: "Liminary: AI research workspace for consultants, strategists, and researchers",
      link: "https://liminary.io/",
      date: publishedAt,
      summary: "Liminary is built for high-stakes recommendations grounded in real research. It helps users save articles, reports, PDFs, AI chats, and videos, annotate them, keep source traceability, and reuse insights across projects."
    },
    {
      source: "Curated AI Products",
      title: "Anuma: multi-model AI workspace with private cross-model memory",
      link: "https://www.anuma.ai/",
      date: publishedAt,
      summary: "Anuma aggregates ChatGPT, Claude, Gemini, Grok, DeepSeek, Kimi, Llama, and other models into one workspace, with a privacy-focused memory layer that users can edit and carry across models."
    },
    {
      source: "Curated AI Products",
      title: "Magic Patterns: AI design agent for interactive product prototypes",
      link: "https://www.magicpatterns.com/",
      date: publishedAt,
      summary: "Magic Patterns helps product teams generate interactive mockups from a prompt, screenshot, existing style, or design system. It is useful for PMs and founders who need to make product ideas discussable before engineering starts."
    }
  ];
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

function entryText(entry) {
  return `${entry.source || ""} ${entry.title || ""} ${entry.summary || ""}`.toLowerCase();
}

function isRecentEntry(entry, maxAgeDays) {
  const timestamp = Date.parse(entry.date) || 0;
  if (!timestamp) return false;
  return Date.now() - timestamp <= maxAgeDays * 24 * 60 * 60 * 1000;
}

function isFundingEntry(entry) {
  return /\bfunding\b|\braises?\b|\braised\b|\bseries [a-z]\b|\bipo\b|\bacquisition\b|\bacquires?\b|\bvaluation\b|\binvest(?:s|ed|ment|or)?\b|\bround\b|融资|投资|估值|并购|上市|收购/i.test(entryText(entry));
}

function isOpenSourceEntry(entry) {
  return /\bgithub\b|\bopen[- ]source\b|\bhugging face\b|\brepo\b|开源|模型库|代码库/i.test(entryText(entry));
}

function isProductEntry(entry) {
  const text = entryText(entry);
  const titleSource = `${entry.source || ""} ${entry.title || ""}`.toLowerCase();
  if (/\barxiv\b|\bpaper\b|\bresearch repository\b|\bbenchmark\b|论文|研究论文/.test(text)) return false;
  const hasProductSignal = /\bcurated ai products\b|\bproduct hunt\b|\btool\b|\bapp\b|\bworkspace\b|\bworkflow\b|\bmemory\b|\bagentmemory\b|\brecall\b|\bliminary\b|\banuma\b|\bmagic patterns\b|\bbrowser\b|\bextension\b|\bdashboard\b|\bcanvas\b|\bnotebook\b|\bautomation\b|插件|应用|产品|工具|工作流|知识管理|浏览器/i.test(titleSource);
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
  const text = entryText(entry);
  const title = String(entry.title || "").toLowerCase();
  const hasReportSignal = /\breport\b|\bpdf\b|\bindex\b|\bsurvey\b|\bwhitepaper\b|\bresearch brief\b|\bstate of\b|报告|指数|调研|白皮书|研究报告/.test(title);
  const hasAiSignal = /\bai\b|artificial intelligence|generative|llm|agent|人工智能|大模型|模型|智能体/i.test(text);
  const staleYear = /\b20(1\d|2[0-5])\b/.test(title) && !/\b2026\b/.test(title);
  return hasReportSignal && hasAiSignal && isRecentEntry(entry, 14) && !staleYear;
}

function isDeepReadEntry(entry) {
  const text = entryText(entry);
  const source = String(entry.source || "").toLowerCase();
  const title = String(entry.title || "").toLowerCase();
  const isDeepSource = /latent space|import ai|the batch|ai valley|tmtpost|钛媒体|机器之心|stratechery|semi|sequoia|a16z|interview|newsletter/i.test(source);
  const hasDeepSignal = /\banalysis\b|\bdeep[- ]dive\b|\bessay\b|\binterview\b|\blong read\b|\bexplainer\b|\bguide\b|\bstrategy\b|\bopinion\b|\bcase study\b|\bwhat it means\b|深度|长文|访谈|专访|解读|复盘|观察|分析|案例|方法论/i.test(text);
  const hasAiSignal = /\bai\b|artificial intelligence|generative|llm|agent|openai|anthropic|deepmind|机器人|人工智能|大模型|模型|智能体/i.test(text);
  const isHardNews = isFundingEntry(entry) || isOpenSourceEntry(entry) || isProductEntry(entry) || isReportEntry(entry) || isAcademicPaperEntry(entry);
  const isTinyUpdate = /\brelease notes?\b|\bchangelog\b|\bpatch\b|更新日志|版本更新/.test(title);
  return hasAiSignal && (isDeepSource || hasDeepSignal) && !isHardNews && !isTinyUpdate && isRecentEntry(entry, 14);
}

function isTopStoryEntry(entry) {
  return !isFundingEntry(entry)
    && !isOpenSourceEntry(entry)
    && !isProductEntry(entry)
    && !isDeepReadEntry(entry)
    && !isReportEntry(entry)
    && !isStaleReportLikeEntry(entry)
    && !isAcademicPaperEntry(entry);
}

function categoryCandidates(sourcePack, predicate, limit, excludeIds = new Set()) {
  return sourcePack.entries
    .filter((entry) => !excludeIds.has(entry.id) && predicate(entry))
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .slice(0, limit);
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

function isListLikeSummary(summary = "") {
  const text = String(summary).trim();
  const separators = (text.match(/[、；;]/g) || []).length;
  const sectionWords = ["投融资", "开源", "产品", "报告", "融资", "机器人", "agents", "funding", "open source", "products", "reports"];
  const sectionHits = sectionWords.filter((word) => text.toLowerCase().includes(word.toLowerCase())).length;
  const companyWords = ["OpenAI", "Anthropic", "Google", "DeepMind", "xAI", "Meta", "NVIDIA", "DeepSeek", "Qwen", "MiniMax", "Kimi", "智谱", "阿里", "腾讯", "字节"];
  const companyHits = companyWords.filter((word) => text.includes(word)).length;
  return separators >= 4 || (companyHits >= 4 && sectionHits >= 2);
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
  if (normalized.items.length < 8) {
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
  const funding = categoryCandidates(sourcePack, isFundingEntry, 8, used);
  funding.forEach((entry) => used.add(entry.id));
  const openSource = categoryCandidates(sourcePack, isOpenSourceEntry, 8, used);
  openSource.forEach((entry) => used.add(entry.id));
  const products = categoryCandidates(sourcePack, isProductEntry, 12, used);
  products.forEach((entry) => used.add(entry.id));
  const deepReads = categoryCandidates(sourcePack, isDeepReadEntry, 8, used);
  deepReads.forEach((entry) => used.add(entry.id));
  const reports = categoryCandidates(sourcePack, isReportEntry, 8, used);
  reports.forEach((entry) => used.add(entry.id));
  const topStories = categoryCandidates(
    sourcePack,
    isTopStoryEntry,
    28,
    new Set()
  );

  const compactEntry = (entry) => ({
    id: entry.id,
    source: entry.source,
    title: entry.title,
    link: entry.link,
    date: entry.date,
    summary: String(entry.summary || "").slice(0, 220),
    score: entry.score
  });

  return {
    date: sourcePack.date,
    timezone: sourcePack.timezone,
    coverage: sourcePack.coverage,
    methodology: "The script first collects and scores all source leads, then builds section-specific candidate pools. The model must choose from the matching pool instead of moving model/platform news into product picks or stale reports into report picks.",
    candidatePools: {
      topStories: topStories.map(compactEntry),
      funding: funding.map(compactEntry),
      openSource: openSource.map(compactEntry),
      products: products.map(compactEntry),
      deepReads: deepReads.map(compactEntry),
      reports: reports.map(compactEntry)
    }
  };
}

function buildSelectionPrompt(date, sourcePack, revisionNote = "") {
  return `
今天日期：${date}，时区：北京时间 / Asia/Shanghai。
${lookbackDescription()}
${revisionNote ? `\n上一次生成未通过质量校验：${revisionNote}\n请修复：如果是篇首 summary 问题，要提炼一条主题主线，不要罗列新闻；如果是内容问题，要增加新闻细节、写成解释性段落，机构报告必须有 expanded 深度解读对象。\n` : ""}

请为 AI Daily Atlas 先生成一份“选题计划”JSON。后续中英文正文必须基于这份选题计划生成，所以这一步最重要。
你不能联网浏览；只能使用下面 SOURCE_PACK 中的公开来源条目作为事实基础。不要编造 SOURCE_PACK 之外的链接、融资金额、发布时间或媒体素材。SOURCE_PACK 里的 newsletter / media 只作为雷达线索；公司官网、官方博客、论文、GitHub、Hugging Face、Product Hunt、机构报告、主流媒体来源优先作为确认来源。

重要：换模型不应改变日报目标。你不是在复述 SOURCE_PACK 排名前几条，而是在做“当日 AI 信号编辑”。请横向比较所有来源，按影响力、可信度、对产品/投资/战略/AI落地的启发排序。不要被 Product Hunt、Google News 或单一 feed 的更新时间挤占版面。若同一事件被多源报道，合并成一条并放多个 links。
SOURCE_PACK 已经是脚本轮巡所有公开源之后的分栏目候选池。你必须从对应 candidatePools 里选题：
- 今日重点只能从 candidatePools.topStories 选。
- 投融资信息只能从 candidatePools.funding 选。
- 开源项目只能从 candidatePools.openSource 选。
- AI产品推荐只能从 candidatePools.products 选，必须是真正可试用的软件/工具/应用/工作流产品；不要选择纯模型发布、API、芯片、融资或平台战略新闻。
- 深度阅读只能从 candidatePools.deepReads 选，必须是值得花时间读完的长文、访谈、深度分析、案例复盘或观点文章；不要选择普通新闻快讯、融资、GitHub 项目、工具推荐或旧报告。
- 机构报告只能从 candidatePools.reports 选，必须是近期发布的报告/研究/白皮书/指数/深度研究。如果 reports 候选为空，可以把这一栏改成“暂无足够新的机构报告信号”，但不能选旧报告凑数。

选题范围：
- 中国和美国 AI 公司为主，其他国家为辅。
- 覆盖 OpenAI、Anthropic、Google/DeepMind、xAI、Meta、Microsoft、Amazon、NVIDIA、中国的智谱/Z.ai、MiniMax、阿里/Qwen、DeepSeek、月之暗面/Kimi、字节/Doubao、百度、腾讯，以及小而美创业公司。
- 关注 AI agents、开源项目、AI 硬件、机器人、AI 基础设施、企业落地、AI+跨境电商/零售/物流/金融/医疗/制造。
- 来源方法：AI Valley、The Rundown AI、Ben's Bites、TLDR AI、The Batch、Import AI、Latent Space、中文 AI 媒体只作为雷达；重要事实需要回到公司官网、官方博客、论文、GitHub、Hugging Face、Product Hunt、机构报告、主流媒体或招聘官网确认。

内容结构要求：
- 计划里使用中文 section：今日重点、投融资信息、开源项目、AI产品推荐、深度阅读、机构报告、每日词条。
- 控制在 11 条：今日重点 4 条；投融资 1 条；开源 1 条；AI 产品推荐 2 条；深度阅读 1 条；机构报告 1 条；每日 AI 词条 1 条。
- 每条 plan item 必须包含 section、priority、titleZh、titleEn、angle、sourceIds。
- sourceIds 必须引用对应 candidatePools 里的 id。每条至少 1 个，重要新闻尽量 2-4 个。
- 不要在 plan item 里返回 links，脚本会根据 sourceIds 自动补链接。
- angle 要写明为什么选择它、应该补充哪些上下文、对非技术读者最重要的理解角度，最多 60 个中文字。

篇首编辑要求：
- headlineZh/headlineEn 和 summaryZh/summaryEn 不能是新闻标题罗列，也不能像目录一样覆盖“融资、产品、报告、开源……”。
- 它们要提炼当天一条主线：例如“模型公司从发布模型转向争夺用户入口”“AI 落地正在从演示走向流程重构”。
- summary 必须是 2 句话：第 1 句提炼当天主题，第 2 句解释这个主题为什么值得关注。
- summary 最多点名 2 个公司或产品；如果需要更多具体新闻，留到正文卡片里写。
- 中文 summary 约 70-130 字；英文 summary 约 35-70 words。

机构报告 / Research Reports 的特殊要求：
- 计划里必须至少包含 1 条机构报告或深度研究文章。
- 如果 SOURCE_PACK 提供了报告页/PDF/研究文章链接，links 必须包含它。
- 如果当天没有真正新的机构报告，可以选择 candidatePools.reports 中的近期研究文章/官方研究博客，但必须明确它不是正式咨询报告；不要选 2025 或更早的旧报告凑数。

选题覆盖要求：
- 今日重点不要只来自一个来源；优先混合官方/主流媒体/研究社区/中国媒体。
- AI 产品推荐要选真正可试用、有产品启发的工具，尤其关注个人知识管理、跨模型工作流、agent、创作工具、效率工具，不能只按 Product Hunt 最新时间排序。
- 深度阅读每天只选 1 篇。它应该帮助读者理解一个更大的 AI 产业问题，例如模型竞争、AI agent 落地、机器人商业化、开源生态、AI 产品入口、企业采用或监管变化。angle 里要写清“为什么值得深读”。
- 投融资只写有融资、IPO、并购、估值、投资方或资本市场信号的内容；没有可信信号时宁可写 1 条并标注来源限制。
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
        "section": "今日重点",
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
    "今日重点": "Top Stories",
    "投融资信息": "Funding Watch",
    "开源项目": "Open Source",
    "AI产品推荐": "AI Product Picks",
    "深度阅读": "Deep Read",
    "机构报告": "Research Reports",
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
    .slice(0, 3)
    .map((entry) => [`${entry.source}: ${entry.title}`.slice(0, 90), entry.link]);
}

function sectionPredicate(section) {
  if (section === "投融资信息") return isFundingEntry;
  if (section === "开源项目") return isOpenSourceEntry;
  if (section === "AI产品推荐") return isProductEntry;
  if (section === "深度阅读") return isDeepReadEntry;
  if (section === "机构报告") return isReportEntry;
  if (section === "今日重点") return isTopStoryEntry;
  return () => true;
}

function validatePlanAgainstPools(plan, sourcePack) {
  const entryById = new Map(sourcePack.entries.map((entry) => [entry.id, entry]));
  plan.items.forEach((item) => {
    if (isTermSectionName(item.section)) return;
    const predicate = sectionPredicate(item.section);
    const invalidIds = item.sourceIds.filter((id) => {
      const entry = entryById.get(id);
      return !entry || !predicate(entry);
    });
    if (invalidIds.length) {
      throw new Error(`Editorial plan item "${item.titleZh}" uses sourceIds outside its section pool: ${invalidIds.join(", ")}`);
    }
  });
  return plan;
}

function fallbackPlan(date, sourcePack, reason = "") {
  console.warn(`Using fallback editorial plan: ${reason}`);
  const used = new Set();
  const fallbackReports = categoryCandidates(sourcePack, isReportEntry, 1, used);
  const specs = [
    ["今日重点", 4, isTopStoryEntry],
    ["投融资信息", 1, isFundingEntry],
    ["开源项目", 1, isOpenSourceEntry],
    ["AI产品推荐", 2, isProductEntry],
    ["深度阅读", 1, isDeepReadEntry],
    ["机构报告", 1, isReportEntry]
  ];
  const items = [];
  specs.forEach(([section, count, predicate]) => {
    categoryCandidates(sourcePack, predicate, count, used).forEach((entry) => {
      items.push({
        section,
        priority: section === "今日重点" ? "high" : "medium",
        titleZh: entry.title,
        titleEn: entry.title,
        angle: "从多源公开信息中筛出的高相关 AI 信号，需要关注其产品、资本或产业落地含义。",
        sourceIds: [entry.id],
        links: [[`${entry.source}: ${entry.title}`.slice(0, 90), entry.link]]
      });
      used.add(entry.id);
    });
  });

  if (!fallbackReports.length && !items.some((item) => item.section === "机构报告")) {
    items.push({
      section: "机构报告",
      priority: "low",
      titleZh: "暂无足够新的机构报告信号",
      titleEn: "No sufficiently fresh institutional report signal",
      angle: "今天的公开来源没有出现足够新的机构报告，避免用旧报告凑数。",
      sourceIds: [],
      links: []
    });
  }

  for (const entry of sourcePack.entries) {
    if (items.length >= 10) break;
    if (used.has(entry.id)) continue;
    if (!isTopStoryEntry(entry)) continue;
    used.add(entry.id);
    items.push({
      section: "今日重点",
      priority: "medium",
      titleZh: entry.title,
      titleEn: entry.title,
      angle: "作为今日 AI 信息流中的补充信号，适合观察行业注意力正在流向哪里。",
      sourceIds: [entry.id],
      links: [[`${entry.source}: ${entry.title}`.slice(0, 90), entry.link]]
    });
  }

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
    headlineZh: "AI 竞争正在从模型发布转向真实工作流",
    headlineEn: "AI competition is moving from model launches to real workflows",
    summaryZh: "今天的 AI 信号主线不是单点发布，而是模型、产品、资本和行业应用都在向可落地的工作流靠拢。对读者来说，值得关注的不只是哪个模型更强，而是谁能把 AI 嵌进真实业务、知识管理和自动化流程。",
    summaryEn: "Today’s AI signals point less to isolated launches and more to the race to turn models into usable workflows. The important question is not only which model is stronger, but who can embed AI into real business, knowledge, and automation loops.",
    tagsZh: ["模型平台", "AI产品", "投融资", "开源", "深度阅读", "机构报告"],
    tagsEn: ["Models", "AI Products", "Funding", "Open Source", "Deep Read", "Reports"],
    items: items.slice(0, 11)
  });
}

function fallbackItem(planItem, scopedSourcePack, lang, reason = "") {
  console.warn(`Using fallback item for ${lang} "${planItem.titleZh || planItem.titleEn}": ${reason}`);
  const isZh = lang === "zh";
  const section = sectionForLang(planItem.section, lang);
  const entry = scopedSourcePack.entries[0] || {};
  const title = isZh ? planItem.titleZh : planItem.titleEn;
  const sourceLine = entry.source ? `${entry.source}：${entry.title}` : title;
  const summary = String(entry.summary || planItem.angle || title).trim();
  const links = entry.link ? [[`${entry.source || "Source"}: ${entry.title || title}`.slice(0, 90), entry.link]] : [];

  if (isTermSectionName(section)) {
    return normalizeItem({
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
    });
  }

  const reportDetail = {
    summary: isZh ? "这是一条来自公开信息源的研究/报告类信号。" : "This is a research or report-like signal from public sources.",
    expanded: isZh
      ? `原始来源显示，${sourceLine}。核心值得看的不是标题本身，而是它反映了 AI 行业正在从单一模型能力比较，转向更关注企业采用、成本结构、工作流改造和投资回报。由于自动化抓取只能看到公开摘要，具体数字和图表仍应以原文为准。`
      : `The source item is ${sourceLine}. The useful read is not only the headline, but the broader shift it reflects: AI discussion is moving from raw model capability toward enterprise adoption, cost structure, workflow redesign, and return on investment. Any exact figures or charts should still be checked against the original source.`
  };

  return normalizeItem({
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
  });
}

function buildItemPrompt(date, sourcePack, planItem, lang, revisionNote = "") {
  const isZh = lang === "zh";
  const section = sectionForLang(planItem.section, lang);
  return `
今天日期：${date}，时区：北京时间 / Asia/Shanghai。
${lookbackDescription()}
${revisionNote ? `\n上一次生成未通过质量校验：${revisionNote}\n请修复：增加新闻细节、写成解释性段落，机构报告必须有 expanded 深度解读对象。\n` : ""}

请基于 ITEM_PLAN 生成 AI Daily Atlas ${isZh ? "中文版" : "英文版"}的一张信息卡 JSON。
你不能改变选题，只能基于 ITEM_PLAN 和 SOURCE_PACK 写正文。不要编造 SOURCE_PACK 之外的链接、融资金额、发布时间或媒体素材。未确认消息必须标注不确定性，不要写成事实。
本条 section 必须是：${section}

${isZh ? `
语言风格：轻量、好读、有判断，适合非技术背景读者；不要幼稚化，也不要只堆技术名词。
每条 detail 写成 3-5 条“有信息量的小段落”，每条约 80-180 字，至少包含背景/关键数字/主体动作/影响范围/不确定性中的两个维度。
` : `
Tone: concise, readable, analytical, not a mechanical translation. Each detail should be 45-100 words and include at least two of: context, key numbers, actor action, impact, uncertainty.
`}

item 必须有 section、priority、title、dek、details、why、links。
- details 不能是短 bullet。要让非技术读者理解来龙去脉。
- why 必须是 1-2 句判断，解释这条新闻对产品、投资、公司战略、创业机会或职业判断有什么意义。
- links 是 [label, url] 数组。每条内容的 links 必须至少包含 1 个 SOURCE_PACK 中出现过的 URL。
- 如果 SOURCE_PACK 条目里有 image，或原链接显然是视频/GitHub/Product Hunt/Hugging Face 页面，可以加 media；没有可靠素材就不要编造。AI 产品推荐和今日重点优先带 media。
- 不要包含用户个人收入、具体雇主经历或敏感个人信息。

深度阅读 / Deep Read 的特殊要求：
- 这不是普通新闻卡，也不是报告卡。details 要解释：文章核心问题、作者/来源背景、最值得读的 2-3 个观点、对产品/投资/战略/职业判断的启发。
- 标题和 why 要明确告诉读者“为什么今天值得花时间读这篇”，而不是只复述文章标题。
- 如果原文是访谈、长文或观点文章，要保留其观点属性；不要把作者观点包装成已确认事实。

机构报告 / Research Reports 的特殊要求：
- 不允许只写一句话摘要。每份报告的 details 必须使用对象数组，每个对象包含 summary 和 expanded。
- expanded 要相对详细，${isZh ? "中文约 120-260 字" : "English 80-160 words"}；需要讲清核心观点、关键数据或结论、产业/投资/职业启发。
- 如果 SOURCE_PACK 提供了报告页/PDF/研究文章链接，links 必须包含它。若有原文短句，可以加 quote；quote 必须很短，不能超过 25 个英文词或 35 个中文字。若有报告图表入口，可以加 chart: ["图表/报告入口", "url"]。
- 如果当天没有真正的机构报告，可以选择深度研究文章/官方研究博客/年度报告，但必须明确它不是正式咨询报告，不要硬编 PDF。

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
      links: normalizeLinks(item.links || [])
    })) : []
  };

  if (!normalized.headlineZh || !normalized.headlineEn || !normalized.summaryZh || !normalized.summaryEn) {
    throw new Error("Editorial plan missing headline or summary.");
  }
  validateIssueFrame({ headline: normalized.headlineZh, summary: normalized.summaryZh }, "zh plan");
  validateIssueFrame({ headline: normalized.headlineEn, summary: normalized.summaryEn }, "en plan");
  if (normalized.items.length < 8) {
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
      temperature: 0.15,
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

async function createItemWithRetry({ date, sourcePack, planItem, lang, requestJson }) {
  const scopedSourcePack = sourcesForPlanItem(sourcePack, planItem);
  const sourceLinks = linksForSourceIds(sourcePack, planItem.sourceIds);
  try {
    const parsed = await requestJson(buildItemPrompt(date, scopedSourcePack, planItem, lang), 4500);
    const item = normalizeItem(parsed.item);
    item.section = sectionForLang(planItem.section, lang);
    if (!item.links.length && sourceLinks.length) item.links = sourceLinks;
    validateItemContent(item, lang);
    return item;
  } catch (error) {
    const message = String(error?.message || error);
    if (!/too shallow|expanded report|needs expanded|summary is list-like|json|expected|unexpected|unterminated string|parseable json|unexpected end/i.test(message)) {
      return fallbackItem(planItem, scopedSourcePack, lang, message);
    }
    console.warn(`Item generation retry for ${lang} "${planItem.titleZh || planItem.titleEn}": ${message}`);
    try {
      const parsed = await requestJson(buildItemPrompt(date, scopedSourcePack, planItem, lang, message), 4500);
      const item = normalizeItem(parsed.item);
      item.section = sectionForLang(planItem.section, lang);
      if (!item.links.length && sourceLinks.length) item.links = sourceLinks;
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
  let plan;
  try {
    const planJson = await deepSeekJson(buildSelectionPrompt(date, sourcePack, revisionNote), 3000);
    plan = validatePlanAgainstPools(normalizePlan(planJson.plan), sourcePack);
  } catch (error) {
    plan = fallbackPlan(date, sourcePack, String(error?.message || error));
  }
  return {
    zh: await createIssueFromPlan(date, sourcePack, plan, "zh", deepSeekJson),
    en: await createIssueFromPlan(date, sourcePack, plan, "en", deepSeekJson)
  };
}

async function createIssueWithOpenAI(date, sourcePack, revisionNote = "") {
  let plan;
  try {
    const planJson = await openAIJson(buildSelectionPrompt(date, sourcePack, revisionNote), 3000);
    plan = validatePlanAgainstPools(normalizePlan(planJson.plan), sourcePack);
  } catch (error) {
    plan = fallbackPlan(date, sourcePack, String(error?.message || error));
  }
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
    if (!/too shallow|expanded report|needs expanded|summary is list-like|json|expected|unexpected|unterminated string|parseable json|unexpected end/i.test(message)) throw error;
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
