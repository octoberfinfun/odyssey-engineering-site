import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import { projects } from '@/lib/siteData';
import { pageMetadata } from '@/lib/seo';

const categories = [
  { slug: 'single-family', label: 'Single Family' },
  { slug: 'municipal', label: 'Municipal' },
  { slug: 'stormwater', label: 'Stormwater' },
  { slug: 'site', label: 'Site' },
  { slug: 'gis', label: 'GIS' },
] as const;

export function generateStaticParams() { return categories.map(({slug}) => ({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}) {
  const {slug} = await params;
  const category = categories.find(x => x.slug === slug);
  return category ? pageMetadata(`${category.label} Projects`, `Odyssey Engineering Group ${category.label.toLowerCase()} project portfolio.`, `/portfolio_category/${slug}`) : {};
}

export default async function PortfolioCategoryPage({params}:{params:Promise<{slug:string}>}) {
  const {slug} = await params;
  const category = categories.find(x => x.slug === slug);
  if (!category) notFound();
  const items = projects.filter(p => p.category === category.label);
  return <>
    <PageHero title={`${category.label} Projects`} path={`/portfolio_category/${slug}`} parent={{label:'Recent Projects',href:'/about/recent-projects'}} />
    <section className="section">
      <div className="shell project-list">
        {items.map(p => <article className="project-row" key={p.slug}>
          <Link className="project-row-image" href={`/projects/${p.slug}`} style={{backgroundImage:`url("${p.image}")`}} aria-label={p.title}/>
          <div className="project-row-copy">
            <div className="project-meta">{p.category}<span>•</span>{p.location}</div>
            <h2><Link href={`/projects/${p.slug}`}>{p.title}</Link></h2>
            <p>{p.summary}</p>
            <div className="project-actions"><Link href={`/projects/${p.slug}`}>View project</Link><a target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.title+' '+p.location)}`}>Directions ↗</a></div>
          </div>
        </article>)}
      </div>
    </section>
  </>;
}
