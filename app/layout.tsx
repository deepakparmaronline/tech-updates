import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import './globals.css';
const inter=Inter({variable:'--font-body',subsets:['latin'],display:'swap'});const space=Space_Grotesk({variable:'--font-heading',subsets:['latin'],display:'swap'});
const adsensePublisherId='ca-pub-1566330144032908';
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'https://techupates.blog'),title:{default:'Tech Updates — Real Tech Problems. Real Solutions.',template:'%s | Tech Updates'},description:'Independent, practical reporting on AI, search, coding, and automation.',openGraph:{type:'website',siteName:'Tech Updates',images:['/og.png']},twitter:{card:'summary_large_image',images:['/og.png']}};
const themeScript=`(()=>{try{const t=localStorage.getItem('theme')||'system';document.documentElement.classList.toggle('dark',t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme:dark)').matches))}catch(e){}})()`;
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><head><meta name="google-adsense-account" content={adsensePublisherId}/><script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsensePublisherId}`} crossOrigin="anonymous"/><script dangerouslySetInnerHTML={{__html:themeScript}}/></head><body className={`${inter.variable} ${space.variable}`}><SiteHeader/>{children}<SiteFooter/></body></html>}
