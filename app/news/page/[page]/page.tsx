import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import { news } from '@/lib/siteData';
import { pageMetadata } from '@/lib/seo';

const PAGE_SIZE = 5;
const totalPages = Math.ceil(news.length / PAGE_SIZE);
export function generateStaticParams(){ return Array.from({length: Math.max(0,totalPages-1)},(_,i)=>({page:String(i+2)})); }
export async function generateMetadata({params}:{params:Promise<{page:string}>}){
  const {page} = await params; const n = Number(page);
  return Number.isInteger(n) && n >= 2 && n <= totalPages ? pageMetadata(`Latest News – Page ${n}`, `Odyssey Engineering Group news archive, page ${n}.`, `/news/page/${n}`) : {};
}
export default async function NewsArchivePage({params}:{params:Promise<{page:string}>}){
  const {page} = await params; const n = Number(page);
  if (!Number.isInteger(n) || n < 2 || n > totalPages) notFound();
  const items = news.slice((n-1)*PAGE_SIZE,n*PAGE_SIZE);
  return <><PageHero title="Latest News" path={`/news/page/${n}`} description={`News archive — page ${n} of ${totalPages}.`} parent={{label:'News',href:'/news'}}/><section className="section"><div className="shell news-archive">{items.map((item,i)=><article className={`news-item ${i===0?'featured':''}`} key={item.slug}><Link className="news-image" href={`/news/${item.slug}`} style={{backgroundImage:`url("${item.image}")`}} aria-label={item.title}/><div><time>{item.date}</time><h2><Link href={`/news/${item.slug}`}>{item.title}</Link></h2><p>{item.excerpt}</p><Link className="text-link" href={`/news/${item.slug}`}>Read More <span>→</span></Link></div></article>)}</div><nav className="archive-pagination" aria-label="News archive pages">{Array.from({length:totalPages},(_,i)=>i+1).map(x=><Link key={x} className={x===n?'active':''} href={x===1?'/news':`/news/page/${x}`}>{x}</Link>)}</nav></section></>;
}
