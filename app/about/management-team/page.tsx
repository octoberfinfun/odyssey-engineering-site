import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import { leaders } from '@/lib/siteData';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('Management Team','Meet the management team of Odyssey Engineering Group.','/about/management-team');
export default function TeamPage(){return <><PageHero title="Management Team" path="/about/management-team" parent={{label:'About',href:'/about'}}/><section className="section"><div className="shell team-grid">{leaders.map((p)=><article className="team-card" key={p.slug}><Link className="team-photo" href={`/about/management-team/${p.slug}`}><Image src={p.image || '/images/person-placeholder.svg'} alt={p.image ? p.name : ''} fill sizes="(max-width: 430px) calc(100vw - 24px), (max-width: 700px) 48vw, (max-width: 1130px) 31vw, 285px" /></Link><div><h2><Link href={`/about/management-team/${p.slug}`}>{p.name}</Link></h2><p>{p.role}</p><Link className="text-link" href={`/about/management-team/${p.slug}`}>Learn More <span>→</span></Link></div></article>)}</div></section></>}
