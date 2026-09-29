import { Search } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
const categories = ['AI','ChatGPT','Google','SEO','Coding','Automation'];
export function SiteHeader(){return <header className="site-header"><a className="brand" href="/"><span>TU</span>Tech Updates</a><nav><a href="/">Home</a>{categories.map(c=><a key={c} href={`/category/${c.toLowerCase()}/`}>{c}</a>)}</nav><a className="icon-button" aria-label="Search" href="/search/"><Search/></a><ThemeToggle/></header>}
