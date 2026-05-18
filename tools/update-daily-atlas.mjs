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

const sourceFeeds = [
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
      image: itemImage(block)
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
    .map((entry) => ({ ...entry, timestamp: Date.parse(entry.date) || 0 }))
    .sort((a, b) => b.timestamp - a.timestamp);
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
    .map(({ timestamp, ...entry }) => entry);

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

function buildPrompt(date, sourcePack) {
  return `
今天日期：${date}，时区：北京时间 / Asia/Shanghai。
${lookbackDescription()}

请为 AI Daily Atlas 生成一个可直接写入 app.js 的双语日报 JSON。
你不能联网浏览；只能使用下面 SOURCE_PACK 中的公开来源条目作为事实基础。不要编造 SOURCE_PACK 之外的链接、融资金额、发布时间或媒体素材。SOURCE_PACK 里的 newsletter / media 只作为雷达线索；公司官网、官方博客、论文、GitHub、Hugging Face、Product Hunt、机构报告、主流媒体来源优先作为确认来源。

选题范围：
- 中国和美国 AI 公司为主，其他国家为辅。
- 覆盖 OpenAI、Anthropic、Google/DeepMind、xAI、Meta、Microsoft、Amazon、NVIDIA、中国的智谱/Z.ai、MiniMax、阿里/Qwen、DeepSeek、月之暗面/Kimi、字节/Doubao、百度、腾讯，以及小而美创业公司。
- 关注 AI agents、开源项目、AI 硬件、机器人、AI 基础设施、企业落地、AI+跨境电商/零售/物流/金融/医疗/制造。
- 来源方法：AI Valley、The Rundown AI、Ben's Bites、TLDR AI、The Batch、Import AI、Latent Space、中文 AI 媒体只作为雷达；重要事实需要回到公司官网、官方博客、论文、GitHub、Hugging Face、Product Hunt、机构报告、主流媒体或招聘官网确认。

内容结构要求：
- zh issue 使用中文 sections：今日重点、投融资信息、开源项目、AI产品推荐、机构报告、每日词条。
- en issue 使用英文 sections：Top Stories、Funding Watch、Open Source、AI Product Picks、Research Reports、AI Term。
- 今日重点 4-6 条；投融资 1-2 条；开源 1-2 条；AI 产品推荐 1-3 条；机构报告 1-2 条；每日 AI 词条 1 条。
- 每条 item 必须有 section、priority、title、dek、details、why、links。
- details 是 2-5 条字符串；links 是 [label, url] 数组。
- 如果 SOURCE_PACK 条目里有 image，或原链接显然是视频/GitHub/Product Hunt/Hugging Face 页面，可以加 media；没有可靠素材就不要编造。AI 产品推荐和今日重点优先带 media。
- 语言风格：中文轻量、好读、有判断，适合非技术背景读者；英文自然简洁，不要机械直译。
- 不要包含用户个人收入、具体雇主经历或敏感个人信息。
- 未确认消息必须标注不确定性，不要写成事实。
- 每条内容的 links 必须至少包含 1 个 SOURCE_PACK 中出现过的 URL。

返回 JSON，不能有 Markdown 包裹。格式：
{
  "archiveZhIssue": {
    "headline": "...",
    "summary": "...",
    "tags": ["..."],
    "items": []
  },
  "archiveEnIssue": {
    "headline": "...",
    "summary": "...",
    "tags": ["..."],
    "items": []
  }
}

SOURCE_PACK:
${JSON.stringify(sourcePack, null, 2)}
`;
}

function chatCompletionText(body) {
  return body?.choices?.[0]?.message?.content || "";
}

async function createIssueWithDeepSeek(date, sourcePack) {
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
          content: "You are the editor of AI Daily Atlas. Return valid JSON only. Base every factual claim on the provided SOURCE_PACK."
        },
        {
          role: "user",
          content: buildPrompt(date, sourcePack)
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.25,
      max_tokens: 14000
    })
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(`DeepSeek API error ${response.status}: ${JSON.stringify(body)}`);
  }

  const parsed = extractJson(chatCompletionText(body));
  return {
    zh: normalizeIssue(parsed.archiveZhIssue, date, "zh"),
    en: normalizeIssue(parsed.archiveEnIssue, date, "en")
  };
}

async function createIssueWithOpenAI(date, sourcePack) {
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
      max_output_tokens: 14000,
      input: buildPrompt(date, sourcePack)
    })
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(`OpenAI API error ${response.status}: ${JSON.stringify(body)}`);
  }

  const parsed = extractJson(responseText(body));
  return {
    zh: normalizeIssue(parsed.archiveZhIssue, date, "zh"),
    en: normalizeIssue(parsed.archiveEnIssue, date, "en")
  };
}

async function createIssue(date, sourcePack) {
  if (provider === "deepseek") return createIssueWithDeepSeek(date, sourcePack);
  if (provider === "openai") return createIssueWithOpenAI(date, sourcePack);
  throw new Error(`Unsupported AI_PROVIDER: ${provider}`);
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
