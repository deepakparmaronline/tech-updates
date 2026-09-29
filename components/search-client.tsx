'use client';
import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
type Item={slug:string;title:string;description:string;category:string;tags:string[]};
export function SearchClient({items}:{items:Item[]}){const[q,setQ]=useState('');const results=useMemo(()=>{const needle=q.trim().toLowerCase();return needle?items.filter(i=>[i.title,i.category,...i.tags].join(' ').toLowerCase().includes(needle)):items},[q,items]);return <><div className="search-box"><Search/><input value={q} onChange={e=>setQ(e.target.value)} autoFocus placeholder="Search titles, categories, or tags…"/>{q&&<button onClick={()=>setQ('')} aria-label="Clear"><X/></button>}</div><p className="result-count">{results.length} {results.length===1?'result':'results'}</p><div className="search-results">{results.map(item=><a key={item.slug} href={`/articles/${item.slug}/`}><span className="tag">{item.category}</span><h2>{item.title}</h2><p>{item.description}</p></a>)}</div></>}
