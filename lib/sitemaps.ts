import { categorySitemapSlug, getAllArticles, getCategories, getCategoryHref } from '@/lib/articles';

const XML_HEADER = '<?xml version="1.0" encoding="UTF-8"?>';
const DEFAULT_SITE_URL = 'https://techupates.blog';

export const getSiteUrl = () => (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '');

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

const urlEntry = (url: string, lastModified?: string) => [
  '  <url>',
  `    <loc>${escapeXml(encodeURI(url))}</loc>`,
  ...(lastModified ? [`    <lastmod>${escapeXml(lastModified)}</lastmod>`] : []),
  '  </url>',
].join('\n');

export const getSitemapKeys = () => [
  'pages',
  ...getCategories().map(categorySitemapSlug),
];

export function buildSitemapIndex() {
  const base = getSiteUrl();
  const entries = getSitemapKeys().map((key) => [
    '  <sitemap>',
    `    <loc>${escapeXml(encodeURI(`${base}/sitemaps/${key}/sitemap.xml`))}</loc>`,
    '  </sitemap>',
  ].join('\n'));

  return `${XML_HEADER}\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</sitemapindex>\n`;
}

export function buildUrlSitemap(key: string) {
  const base = getSiteUrl();

  if (key === 'pages') {
    const articles = getAllArticles();
    const latestDate = articles[0]?.date;
    const paths = ['/', '/search/', '/about/', '/contact/', '/editorial-policy/', '/privacy/'];
    const entries = paths.map((pathname, index) => urlEntry(`${base}${pathname}`, index === 0 ? latestDate : undefined));
    return `${XML_HEADER}\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;
  }

  const category = getCategories().find((item) => categorySitemapSlug(item) === key);
  if (!category) return null;

  const articles = getAllArticles().filter((article) => article.category === category);
  const entries = [
    urlEntry(`${base}${getCategoryHref(category)}`, articles[0]?.date),
    ...articles.map((article) => urlEntry(`${base}/articles/${article.slug}/`, article.date)),
  ];

  return `${XML_HEADER}\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;
}
