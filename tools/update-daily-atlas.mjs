#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const appPath = path.join(rootDir, "app.js");
const timezone = "Asia/Shanghai";
const model = process.env.OPENAI_MODEL || "gpt-5";

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
  throw new Error("Model response did not contain parseable JSON.");
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

function buildPrompt(date) {
  return `
今天日期：${date}，时区：北京时间 / Asia/Shanghai。
${lookbackDescription()}

请为 AI Daily Atlas 生成一个可直接写入 app.js 的双语日报 JSON。你可以使用 web search 搜集最新公开信息，并必须优先引用可打开的一手或可信来源。

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
- 如果有可靠公开图片/视频/GitHub preview，可以加 media；没有就不要编造。
- 语言风格：中文轻量、好读、有判断，适合非技术背景读者；英文自然简洁，不要机械直译。
- 不要包含用户个人收入、具体雇主经历或敏感个人信息。
- 未确认消息必须标注不确定性，不要写成事实。

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
`;
}

async function createIssue(date) {
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
      model,
      reasoning: { effort: process.env.OPENAI_REASONING_EFFORT || "medium" },
      tools: [
        {
          type: "web_search",
          user_location: {
            type: "approximate",
            country: "CN",
            city: "Shanghai",
            region: "Shanghai",
            timezone
          }
        }
      ],
      tool_choice: "auto",
      max_output_tokens: 14000,
      input: buildPrompt(date)
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

async function main() {
  const date = process.env.ISSUE_DATE || shanghaiDate();
  const { zh, en } = await createIssue(date);

  let source = fs.readFileSync(appPath, "utf8");
  source = replaceOrInsertIssue(source, "archiveZh", zh);
  source = replaceOrInsertIssue(source, "archiveEn", en);
  fs.writeFileSync(appPath, source);

  console.log(`Updated AI Daily Atlas issue for ${date}`);
  console.log(`Chinese items: ${zh.items.length}; English items: ${en.items.length}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
