import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { services } from '@/lib/siteData';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('Our Services','Civil engineering services from Odyssey Engineering Group.','/our-services');
export default function ServicesPage(){return <><PageHero title="Our Services" path="/our-services" description="Integrated civil engineering services for development, public infrastructure and communities."/><section className="section"><div className="shell services-list">{services.map((s)=><article key={s.slug} className="service-list-row"><div className="service-list-image" style={{backgroundImage:`url("${s.image}")`}}/><div><h2>{s.title}</h2><p>{s.intro}</p><Link className="button outline" href={`/our-services/${s.slug}`}>Learn More</Link></div></article>)}</div></section></>}
