import { buildUrlSitemap, getSitemapKeys } from '@/lib/sitemaps';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return getSitemapKeys().map((sitemap) => ({ sitemap }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ sitemap: string }> },
) {
  const { sitemap } = await params;
  const xml = buildUrlSitemap(sitemap);

  if (!xml) return new Response('Not found', { status: 404 });

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
