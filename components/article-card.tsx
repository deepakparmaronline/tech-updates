import { ArrowUpRight, Clock3 } from 'lucide-react';
import type { Article } from '@/lib/articles';
import { formatDate } from '@/lib/articles';
export function ArticleCard({article,index=0}:{article:Article,index?:number}){return <article className="story-card"><a href={`/articles/${article.slug}/`}><div className={`story-art art-${index%5+1}`} style={{backgroundImage:`linear-gradient(135deg,rgba(15,23,42,.08),rgba(37,99,235,.2)),url(${article.featuredImage})`}}><span>{article.category}</span></div><div className="story-copy"><span className="tag">{article.category}</span><h3>{article.title}</h3><p><Clock3/>{article.readingTime} · {formatDate(article.date)}</p><span className="read-link">Read story <ArrowUpRight/></span></div></a></article>}
