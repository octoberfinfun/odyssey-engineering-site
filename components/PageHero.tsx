import Link from 'next/link';
import Script from 'next/script';

type Props = {
  title:string;
  eyebrow?:string;
  image?:string;
  description?:string;
  path?:string;
  parent?:{label:string;href:string};
};

export default function PageHero({title,eyebrow,image,description,parent,path}:Props) {
  const items = [
    { '@type':'ListItem', position:1, name:'Home', item:'https://www.odysseyeg.com/' },
    ...(parent ? [{ '@type':'ListItem', position:2, name:parent.label, item:`https://www.odysseyeg.com${parent.href}` }] : []),
    ...(path ? [{ '@type':'ListItem', position:parent ? 3 : 2, name:title, item:`https://www.odysseyeg.com${path}` }] : []),
  ];
  const schema = { '@context':'https://schema.org', '@type':'BreadcrumbList', itemListElement:items };
  return <>
    <section className={`page-hero ${image ? 'has-image' : ''}`} style={image ? {backgroundImage:`url("${image}")`} : undefined}>
      <div className="shell page-hero-inner">
        <div className="crumbs"><Link href="/">Home</Link>{parent && <><span>/</span><Link href={parent.href}>{parent.label}</Link></>}<span>/</span><span>{title}</span></div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
    {path && <Script id={`breadcrumbs-${path.replace(/[^a-z0-9]+/gi,'-') || 'home'}`} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>}
  </>;
}
