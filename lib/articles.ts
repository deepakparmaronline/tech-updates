import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

export type FAQ = { question: string; answer: string };
export type Article = { slug: string; title: string; description: string; category: string; author: string; date: string; readingTime: string; featuredImage: string; tags: string[]; featured?: boolean; keyTakeaways: string[]; faqs: FAQ[]; content: string; html: string; headings: { id: string; text: string }[] };
const directory = path.join(process.cwd(), 'content/articles');
const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export function getAllArticles(): Article[] {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory).filter((file) => file.endsWith('.md')).map((file) => {
    const raw = fs.readFileSync(path.join(directory, file), 'utf8');
    const { data, content } = matter(raw);
    const headings = [...content.matchAll(/^## (.+)$/gm)].filter((m) => m[1] !== 'FAQ').map((m) => ({ text: m[1].trim(), id: slugify(m[1]) }));
    const renderer = new marked.Renderer();
    renderer.heading = ({ text, depth }) => `<h${depth} id="${slugify(text)}">${text}</h${depth}>`;
    return { slug: file.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, ''), title: data.title, description: data.description, category: data.category, author: data.author || 'Tech Updates', date: data.date instanceof Date ? data.date.toISOString().slice(0,10) : String(data.date), readingTime: data.readingTime, featuredImage: data.featuredImage, tags: data.tags || [], featured: Boolean(data.featured), keyTakeaways: data.keyTakeaways || [], faqs: data.faqs || [], content, html: marked.parse(content, { renderer }) as string, headings };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
export const getArticle = (slug: string) => getAllArticles().find((article) => article.slug === slug);
export const CATEGORIES = ['AI','ChatGPT','OpenAI','Google','Gemini','Claude','Microsoft','Apple','SEO','Automation','Coding','Python','WordPress'];
export const getCategories = () => CATEGORIES;
export const formatDate = (value: string) => new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(value));
export function getRelated(article: Article) { return getAllArticles().filter((item) => item.slug !== article.slug).sort((a,b) => Number(b.category === article.category) - Number(a.category === article.category) || b.tags.filter((t) => article.tags.includes(t)).length - a.tags.filter((t) => article.tags.includes(t)).length).slice(0,3); }
