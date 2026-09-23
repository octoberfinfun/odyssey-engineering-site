import { notFound } from 'next/navigation';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import { leaders } from '@/lib/siteData';
import { pageMetadata } from '@/lib/seo';

export function generateStaticParams(){return leaders.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params; const p=leaders.find(x=>x.slug===slug); return p?pageMetadata(p.name,`${p.role} at Odyssey Engineering Group.`,`/about/management-team/${p.slug}`):{};}
export default async function LeaderPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params; const p=leaders.find(x=>x.slug===slug); if(!p)notFound(); return <><PageHero title={p.name} description={p.role} path={`/about/management-team/${p.slug}`} parent={{label:'Management Team',href:'/about/management-team'}}/><section className="section"><div className="shell profile-layout"><div className="profile-photo"><Image src={p.image || '/images/person-placeholder.svg'} alt={p.image?p.name:''} width={680} height={850} sizes="(max-width: 940px) 330px, 340px" /></div><div className="profile-copy"><h2>{p.role}</h2>{p.email&&<p><a className="text-link" href={`mailto:${p.email}`}>{p.email}</a></p>}{p.education&&<div className="profile-facts"><h3>Education</h3>{p.education.map(x=><p key={x}>{x}</p>)}</div>}{p.credentials&&<div className="profile-facts"><h3>Credentials</h3>{p.credentials.map(x=><p key={x}>{x}</p>)}</div>}{p.bio?.map((x,i)=><p key={i}>{x}</p>)}{!p.bio&&<p>Odyssey Engineering Group lists {p.name} as {p.role}.</p>}</div></div></section></>}
