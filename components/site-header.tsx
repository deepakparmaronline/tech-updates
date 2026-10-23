import { Search } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { getCategoryHref } from '@/lib/articles';
const categories = ['AI News','ChatGPT','Claude','Gemini','Perplexity','Alternatives'];
export function SiteHeader(){return <header className="site-header"><a className="brand" href="/"><span>TU</span>Tech Updates</a><nav><a href="/">Home</a>{categories.map(c=><a key={c} href={getCategoryHref(c)}>{c}</a>)}</nav><a className="icon-button" aria-label="Search" href="/search/"><Search/></a><ThemeToggle/></header>}
