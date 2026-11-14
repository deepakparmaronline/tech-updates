import { ArticleCard } from '@/components/article-card';
import { MobileToc, ReadingProgress, ShareButtons } from '@/components/article-tools';
import { Newsletter } from '@/components/site-footer';
import { formatDate, getAllArticles, getCategoryHref, getRelated, type Article } from '@/lib/articles';
import { getArticleHref } from '@/lib/article-routes';

export function ArticleDetail({ article }: { article: Article }) {
  const all = getAllArticles();
  const index = all.findIndex((item) => item.slug === article.slug);
  const previous = all[index + 1];
  const next = all[index - 1];
  const related = getRelated(article);
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://techupates.blog';
  const categoryHref = getCategoryHref(article.category);
  const articleHref = getArticleHref(article);
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { '@type': 'Organization', name: article.author },
    image: `${base}${article.featuredImage}`,
    mainEntityOfPage: `${base}${articleHref}`,
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: base },
      { '@type': 'ListItem', position: 2, name: article.category, item: `${base}${categoryHref}` },
      { '@type': 'ListItem', position: 3, name: article.title, item: `${base}${articleHref}` },
    ],
  };

  return (
    <main>
      <ReadingProgress />
      <article className="article-shell">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>/</span><a href={categoryHref}>{article.category}</a><span>/</span><span>{article.title}</span>
        </nav>
        <header className="article-header">
          <span className="tag">{article.category}</span>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <div className="byline"><strong>{article.author}</strong><span>{formatDate(article.date)}</span><span>{article.readingTime} read</span></div>
        </header>
        <div className="article-image" style={{ backgroundImage: `linear-gradient(135deg,rgba(37,99,235,.15),rgba(15,23,42,.28)),url(${article.featuredImage})` }} role="img" aria-label={article.title} />
        <section className="key-takeaways"><span>Key takeaways</span><ul>{article.keyTakeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}</ul></section>
        <MobileToc headings={article.headings} />
        <div className="article-grid">
          <ShareButtons title={article.title} />
          <aside className="toc"><span>On this page</span>{article.headings.map((heading) => <a key={heading.id} href={`#${heading.id}`}>{heading.text}</a>)}</aside>
          <section className="prose" dangerouslySetInnerHTML={{ __html: article.html }} />
        </div>
        <section className="related">
          <div className="section-heading"><div><p className="eyebrow">Keep reading</p><h2>Related articles</h2></div></div>
          <div className="story-grid">{related.map((item, relatedIndex) => <ArticleCard key={item.slug} article={item} index={relatedIndex} />)}</div>
        </section>
        <nav className="article-nav">
          <div>{previous && <><span>Previous</span><a href={getArticleHref(previous)}>{previous.title}</a></>}</div>
          <div>{next && <><span>Next</span><a href={getArticleHref(next)}>{next.title}</a></>}</div>
        </nav>
        <Newsletter />
        <footer className="article-footer">Published by Tech Updates under our editorial and fact-checking standards.</footer>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
