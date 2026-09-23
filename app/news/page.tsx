import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { news } from '@/lib/siteData';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Latest News','News and updates from Odyssey Engineering Group.','/news');
const PAGE_SIZE = 5;

export default function NewsPage(){
  const totalPages = Math.ceil(news.length / PAGE_SIZE);
  const items = news.slice(0,PAGE_SIZE);
  return <>
    <PageHero title="Latest News" path="/news" description="Company milestones, community involvement, industry events and team updates."/>
    <section className="section">
      <div className="shell news-archive">{items.map((n,i)=><article className={`news-item ${i===0?'featured':''}`} key={n.slug}>
        <Link className="news-image" href={`/news/${n.slug}`} style={{backgroundImage:`url("${n.image}")`}} aria-label={n.title}/>
        <div><time>{n.date}</time><h2><Link href={`/news/${n.slug}`}>{n.title}</Link></h2><p>{n.excerpt}</p><Link className="text-link" href={`/news/${n.slug}`}>Read More <span>→</span></Link></div>
      </article>)}</div>
      <nav className="archive-pagination" aria-label="News archive pages">{Array.from({length:totalPages},(_,i)=>i+1).map(page=><Link key={page} className={page===1?'active':''} href={page===1?'/news':`/news/page/${page}`}>{page}</Link>)}</nav>
    </section>
  </>;
}
