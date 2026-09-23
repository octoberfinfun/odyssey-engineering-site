import PageHero from '@/components/PageHero';
import { resources } from '@/lib/siteData';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('Resources','Useful county, city and agency links for Greater Houston development and infrastructure work.','/resources');
export default function ResourcesPage(){return <><PageHero title="Resources" path="/resources" description="Public agencies, county resources, city portals and professional organizations frequently used in development and infrastructure work."/><section className="section"><div className="shell resource-groups">{Object.entries(resources).map(([group,links])=><section key={group}><h2>{group}</h2><div className="resource-links">{links.map(([label,href])=><a href={href} target="_blank" rel="noreferrer" key={label}><span>{label}</span><span>↗</span></a>)}</div></section>)}</div></section></>}
