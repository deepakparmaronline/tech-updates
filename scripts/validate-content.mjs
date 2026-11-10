import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = process.cwd();
const directory = path.join(root, 'content/articles');
const required = ['title', 'description', 'category', 'author', 'date', 'readingTime', 'featuredImage', 'tags', 'keyTakeaways', 'faqs'];
const allowed = ['AI', 'AI News', 'ChatGPT', 'OpenAI', 'Google', 'Gemini', 'Claude', 'Perplexity', 'Cursor', 'GitHub', 'Programming', 'Python', 'WordPress', 'SEO', 'Automation', 'AI Tools', 'Alternatives', 'Shopify', 'Development', 'Coding', 'Microsoft', 'Apple'];
const files = fs.readdirSync(directory).filter((file) => file.endsWith('.md'));
const articles = files.map((file) => {
  const raw = fs.readFileSync(path.join(directory, file), 'utf8');
  const { data, content } = matter(raw);
  const slug = file.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
  return { file, slug, data, content };
});
const articlesBySlug = new Map(articles.map((article) => [article.slug, article]));
const reservedRootSlugs = new Set(['about', 'ai-news', 'articles', 'category', 'contact', 'editorial-policy', 'privacy', 'search', 'sitemap.xml', 'sitemaps']);
const errors = [];

for (const { file, slug, data, content } of articles) {
  for (const key of required) {
    if (data[key] === undefined || data[key] === '') errors.push(`${file}: missing ${key}`);
  }
  if (!allowed.includes(data.category)) errors.push(`${file}: unsupported category ${data.category}`);
  if (!Array.isArray(data.tags) || data.tags.length < 2) errors.push(`${file}: add at least two tags`);
  if (!Array.isArray(data.keyTakeaways) || data.keyTakeaways.length < 3) errors.push(`${file}: add at least three key takeaways`);
  if (!Array.isArray(data.faqs) || data.faqs.length < 6) errors.push(`${file}: add at least six FAQs`);
  const dateValue = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) errors.push(`${file}: date must be YYYY-MM-DD`);
  if (!/^\/images\//.test(data.featuredImage || '') || !fs.existsSync(path.join(root, 'public', data.featuredImage || ''))) errors.push(`${file}: featured image is missing`);
  const words = content.replace(/[#*\`>\[\]()_-]/g, ' ').split(/\s+/).filter(Boolean).length;
  const minimumWords = dateValue >= '2026-10-05' ? 1200 : 700;
  if (words < minimumWords) errors.push(`${file}: body has ${words} words; minimum is ${minimumWords}`);
  if (data.category === 'Alternatives' && reservedRootSlugs.has(slug)) errors.push(`${file}: Alternatives slug conflicts with reserved root route ${slug}`);

  for (const match of content.matchAll(/\]\((?:https:\/\/(?:www\.)?techupates\.blog)?\/articles\/([^/)]+)\/?(?:[?#][^)]*)?\)/g)) {
    const target = articlesBySlug.get(match[1]);
    if (!target) errors.push(`${file}: broken article link ${match[1]}`);
    else if (target.data.category === 'Alternatives') errors.push(`${file}: use canonical Alternatives link /${match[1]}/ instead of /articles/${match[1]}/`);
  }
  for (const match of content.matchAll(/\]\((?:https:\/\/(?:www\.)?techupates\.blog)?\/([^/)]+)\/?(?:[?#][^)]*)?\)/g)) {
    const target = articlesBySlug.get(match[1]);
    if (target && target.data.category !== 'Alternatives') errors.push(`${file}: use canonical article link /articles/${match[1]}/ instead of /${match[1]}/`);
  }

  const legacy = ['What Happened?', 'Why People Are Talking About It', 'What Users Experienced', 'Why It Happens', 'Working Fixes', "What Doesn't Work", 'Official Response', 'Key Takeaways', 'Related Reading'];
  const authority = ['Short Answer', 'What the Question Really Means', 'How It Works', 'Practical Steps', 'Common Problems', 'What Does Not Work', 'Safety and Limitations', 'Key Takeaways', 'Related Reading', 'FAQ'];
  const alternatives = ['Quick Answer', 'How We Chose These Alternatives', 'Best Alternatives', 'Comparison Table', 'How to Choose', 'What to Avoid', 'Key Takeaways', 'Related Reading', 'FAQ'];
  const news = ['News Summary', 'What Happened', 'Why It Matters', 'Key Details', 'Who Is Affected', 'What Happens Next', 'What We Know and Do Not Know', 'Key Takeaways', 'Related Reading', 'FAQ'];
  const headings = dateValue >= '2026-10-14' ? (data.category === 'Alternatives' ? alternatives : (data.category === 'AI News' || data.contentType === 'news' ? news : authority)) : legacy;
  for (const heading of headings) {
    if (!content.includes(`## ${heading}`)) errors.push(`${file}: missing section ${heading}`);
  }
}

if (errors.length) {
  console.error(`Content validation failed:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log(`Validated ${files.length} articles successfully.`);
