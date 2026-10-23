import type { Metadata } from 'next';
import { ArticleCard } from '@/components/article-card';
import { getAllArticles } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'AI News',
  description: 'Major AI model, product, research, safety, and industry news with clear context and practical analysis.',
  alternates: { canonical: '/ai-news/' },
};

export default function AINewsPage() {
  const articles = getAllArticles().filter((article) => article.category === 'AI News');

  return <main className="archive shell">
    <p className="eyebrow">Category</p>
    <h1>AI News</h1>
    <p>Major AI model, product, research, safety, and industry developments explained clearly.</p>
    {articles.length
      ? <div className="story-grid">{articles.map((article, index) => <ArticleCard key={article.slug} article={article} index={index}/>)}</div>
      : <div className="empty-state"><h2>Coverage is on the way.</h2><p>New AI News articles will appear here automatically.</p><a className="primary-button" href="/">Browse latest articles</a></div>}
  </main>;
}
