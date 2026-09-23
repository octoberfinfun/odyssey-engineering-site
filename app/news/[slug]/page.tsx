import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import { news } from '@/lib/siteData';
import { pageMetadata } from '@/lib/seo';
export function generateStaticParams(){return news.map(n=>({slug:n.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const n=news.find(x=>x.slug===slug);return n?pageMetadata(n.title,n.excerpt,`/news/${n.slug}`):{};}
export default async function NewsPost({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const n=news.find(x=>x.slug===slug);if(!n)notFound();const schema={'@context':'https://schema.org','@type':'Article',headline:n.title,datePublished:n.date,image:n.image,publisher:{'@type':'Organization',name:'Odyssey Engineering Group, LLC'}};return <><PageHero title={n.title} eyebrow={n.date} path={`/news/${n.slug}`} image={n.image} parent={{label:'News',href:'/news'}}/><section className="section"><article className="shell article-layout"><div className="article-main"><Image src={n.image} alt={n.title} width={1400} height={900} sizes="(max-width: 930px) 100vw, 930px"/><div className="article-copy">{n.body.map((p,i)=><p key={i}>{p}</p>)}<p><Link className="text-link" href="/news">← Back to News</Link></p></div></div></article></section><Script id={`article-schema-${n.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></>}
