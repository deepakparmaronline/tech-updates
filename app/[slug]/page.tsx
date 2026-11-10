import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleDetail } from '@/components/article-detail';
import { getAllArticles, getArticle } from '@/lib/articles';
import { getArticleHref, isAlternativeArticle } from '@/lib/article-routes';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllArticles().filter(isAlternativeArticle).map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article || !isAlternativeArticle(article)) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: getArticleHref(article) },
    openGraph: { type: 'article', title: article.title, description: article.description, publishedTime: article.date, images: [article.featuredImage] },
    twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [article.featuredImage] },
  };
}

export default async function AlternativeArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article || !isAlternativeArticle(article)) notFound();
  return <ArticleDetail article={article} />;
}
