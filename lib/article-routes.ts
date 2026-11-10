export type ArticleRoute = { slug: string; category: string };

export const isAlternativeArticle = (article: Pick<ArticleRoute, 'category'>) =>
  article.category === 'Alternatives';

export const getArticleHref = (article: ArticleRoute) =>
  isAlternativeArticle(article) ? `/${article.slug}/` : `/articles/${article.slug}/`;
