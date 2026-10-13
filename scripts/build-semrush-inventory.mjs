import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const exportDir = path.join(root, "data", "semrush-exports");
const queueDir = path.join(root, "data", "semrush", "queues");

const authorityFiles = [
  "chatgpt-questions-all-keywords-us-kd-0-49-2026-10-13.csv",
  "claude-ai-questions-all-keywords-us-kd-0-49-2026-10-13.csv",
  "gemini-ai-questions-all-keywords-us-kd-0-49-2026-10-13.csv",
  "perplexity-ai-questions-all-keywords-us-kd-0-49-2026-10-13.csv",
];

const alternativesFiles = [
  "base44-alternatives-all-keywords-us-kd-0-49-2026-10-13.csv",
  "bolt-new-alternatives-all-keywords-us-kd-0-49-2026-10-13.csv",
  "lovable-alternatives-all-keywords-us-kd-0-49-2026-10-13.csv",
  "manus-ai-alternatives-all-keywords-us-kd-0-49-2026-10-13.csv",
  "wispr-flow-alternatives-all-keywords-us-kd-0-49-2026-10-13.csv",
  "granola-ai-alternatives-all-keywords-us-kd-0-49-2026-10-13.csv",
  "replit-alternatives-all-keywords-us-kd-0-49-2026-10-13.csv",
];

function parseCsv(text) {
  const records = [];
  let row = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (quoted) {
      if (char === '"' && text[index + 1] === '"') {
        value += '"';
        index += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        value += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(value);
      value = "";
    } else if (char === "\n") {
      row.push(value.replace(/\r$/, ""));
      records.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }

  if (value || row.length) {
    row.push(value.replace(/\r$/, ""));
    records.push(row);
  }

  const [headers, ...rows] = records.filter((record) => record.some(Boolean));
  return rows.map((record) => Object.fromEntries(headers.map((header, index) => [header, record[index] ?? ""])));
}

function escapeCsv(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function stringifyCsv(rows, columns) {
  return `${columns.join(",")}\n${rows.map((row) => columns.map((column) => escapeCsv(row[column])).join(",")).join("\n")}\n`;
}

function metricNumber(value) {
  const normalized = String(value ?? "").replaceAll(",", "").trim().toUpperCase();
  if (!normalized || normalized === "N/A") return 0;
  const multiplier = normalized.endsWith("K") ? 1_000 : normalized.endsWith("M") ? 1_000_000 : 1;
  const numeric = Number.parseFloat(normalized.replace(/[KM]$/, ""));
  return Number.isFinite(numeric) ? Math.round(numeric * multiplier) : 0;
}

function normalizedKeyword(value) {
  return String(value ?? "").toLowerCase().replace(/[\u200b\u200c\u200d\ufeff]/g, "").replace(/\s+/g, " ").trim();
}

function dedupeRows(rows) {
  const seen = new Set();
  return rows.filter((row) => {
    const key = normalizedKeyword(row.keyword);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function score(row) {
  const volume = metricNumber(row.volume);
  const kd = metricNumber(row.kd);
  const relevance = metricNumber(row.relevance);
  return Math.round((Math.log10(volume + 1) * 40 + (49 - kd) * 1.5 + relevance * 0.5) * 10) / 10;
}

function authorityRelevant(category, keyword) {
  const value = normalizedKeyword(keyword);
  if (category === "ChatGPT") return /\bchat\s?gpt\b|\bgpt\b/.test(value);
  if (category === "Claude") return /\bclaude\b/.test(value);
  if (category === "Gemini") {
    const astrologyNoise = /\b(zodiac|horoscope|astrology|birth|birthday|moon|rising|sun sign|traits?|compatib|man|woman|male|female|love|may \d|june \d|withdrawal code)\b/;
    return /\bgemini\b/.test(value) && !astrologyNoise.test(value);
  }
  if (category === "Perplexity") return /\bperplexity\b/.test(value);
  return false;
}

function alternativeTopic(keyword) {
  const value = normalizedKeyword(keyword)
    .replace(/^best\s+/, "")
    .replace(/^top\s+\d*\s*/, "")
    .replace(/\s+(?:reddit|pricing|price|cost|review|reviews)$/g, "")
    .trim();

  const patterns = [
    /^(?:free\s+|open source\s+)?alternatives?\s+to\s+(.+)$/,
    /^(?:apps?|tools?|sites?|software)\s+(?:that are\s+)?similar\s+to\s+(.+)$/,
    /^(.+?)\s+(?:free\s+|open source\s+|self hosted\s+)?alternatives?(?:\s+for\s+.+)?$/,
    /^(.+?)\s+competitors?(?:\s+and\s+alternatives?)?$/,
  ];

  for (const pattern of patterns) {
    const match = value.match(pattern);
    if (match) {
      return match[1]
        .replace(/^(?:best|top|free)\s+/, "")
        .replace(/\s+(?:free|open source|self hosted)$/g, "")
        .replace(/[^a-z0-9.+ -]/g, "")
        .replace(/\s+/g, " ")
        .trim();
    }
  }
  return "";
}

async function loadAndClean(file) {
  const filePath = path.join(exportDir, file);
  const parsed = parseCsv(await fs.readFile(filePath, "utf8"));
  const clean = dedupeRows(parsed);
  if (clean.length !== parsed.length) {
    await fs.writeFile(filePath, stringifyCsv(clean, Object.keys(parsed[0])), "utf8");
  }
  return clean.map((row) => ({ ...row, source_file: `data/semrush-exports/${file}` }));
}

await fs.mkdir(queueDir, { recursive: true });

const authorityRows = (await Promise.all(authorityFiles.map(loadAndClean))).flat();
const authorityByCategory = new Map();

for (const row of authorityRows) {
  const kd = metricNumber(row.kd);
  const volume = metricNumber(row.volume);
  if (kd > 49 || volume < 1 || !authorityRelevant(row.category, row.keyword)) continue;
  const queueRow = {
    priority_score: score(row),
    category: row.category,
    primary_keyword: normalizedKeyword(row.keyword),
    intent: row.intent,
    volume,
    kd,
    relevance: metricNumber(row.relevance),
    cpc_usd: row.cpc_usd,
    serp_features: row.serp_features,
    metrics_updated: row.updated,
    captured_on: "2026-10-13",
    database: "US",
    source_file: row.source_file,
  };
  const list = authorityByCategory.get(row.category) ?? [];
  list.push(queueRow);
  authorityByCategory.set(row.category, list);
}

const queueColumns = [
  "priority_score",
  "category",
  "primary_keyword",
  "intent",
  "volume",
  "kd",
  "relevance",
  "cpc_usd",
  "serp_features",
  "metrics_updated",
  "captured_on",
  "database",
  "source_file",
];

const queueName = { ChatGPT: "chatgpt", Claude: "claude", Gemini: "gemini", Perplexity: "perplexity" };
const summary = { rawAuthorityRows: authorityRows.length, authorityQueues: {}, rawAlternativesRows: 0, alternativesTopics: 0 };

for (const [category, rows] of authorityByCategory) {
  rows.sort((a, b) => b.priority_score - a.priority_score || b.volume - a.volume || a.kd - b.kd);
  await fs.writeFile(path.join(queueDir, `${queueName[category]}.csv`), stringifyCsv(rows, queueColumns), "utf8");
  summary.authorityQueues[category] = rows.length;
}

const alternativesRows = (await Promise.all(alternativesFiles.map(loadAndClean))).flat();
summary.rawAlternativesRows = alternativesRows.length;

const alternativesByTopic = new Map();
for (const row of alternativesRows) {
  const kd = metricNumber(row.kd);
  const volume = metricNumber(row.volume);
  const relevance = metricNumber(row.relevance);
  const topic = alternativeTopic(row.keyword);
  if (
    !topic ||
    topic.length < 2 ||
    topic.length > 60 ||
    topic.split(/\s+/).length > 5 ||
    kd > 49 ||
    volume < 1 ||
    relevance < 30
  ) continue;
  const queueRow = {
    priority_score: score(row),
    canonical_topic: topic,
    primary_keyword: normalizedKeyword(row.keyword),
    seed_product: row.product,
    intent: row.intent,
    volume,
    kd,
    relevance,
    cpc_usd: row.cpc_usd,
    serp_features: row.serp_features,
    metrics_updated: row.updated,
    captured_on: "2026-10-13",
    database: "US",
    source_file: row.source_file,
  };
  const existing = alternativesByTopic.get(topic);
  if (!existing || queueRow.priority_score > existing.priority_score) alternativesByTopic.set(topic, queueRow);
}

const alternativesQueue = [...alternativesByTopic.values()].sort(
  (a, b) => b.priority_score - a.priority_score || b.volume - a.volume || a.kd - b.kd,
);
const alternativesColumns = [
  "priority_score",
  "canonical_topic",
  "primary_keyword",
  "seed_product",
  "intent",
  "volume",
  "kd",
  "relevance",
  "cpc_usd",
  "serp_features",
  "metrics_updated",
  "captured_on",
  "database",
  "source_file",
];
await fs.writeFile(path.join(queueDir, "alternatives.csv"), stringifyCsv(alternativesQueue, alternativesColumns), "utf8");
summary.alternativesTopics = alternativesQueue.length;

const usedFile = path.join(root, "data", "semrush", "used-keywords.csv");
try {
  await fs.access(usedFile);
} catch {
  await fs.writeFile(
    usedFile,
    "used_on,article_slug,category,canonical_topic,primary_keyword,source_queue\n",
    "utf8",
  );
}

await fs.writeFile(path.join(root, "data", "semrush", "inventory-summary.json"), `${JSON.stringify(summary, null, 2)}\n`, "utf8");
console.log(JSON.stringify(summary, null, 2));
