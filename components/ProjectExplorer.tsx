'use client';

import Link from 'next/link';
import { type ChangeEvent, useMemo, useState } from 'react';
import { projects } from '@/lib/siteData';

const categories = ['All','Single Family','Municipal','Stormwater','Site','GIS'];

export default function ProjectExplorer() {
  const [category,setCategory] = useState('All');
  const [q,setQ] = useState('');
  const filtered = useMemo(() => projects.filter(p => (category==='All' || p.category===category) && (`${p.title} ${p.location} ${p.summary}`).toLowerCase().includes(q.toLowerCase())), [category,q]);
  return <>
    <div className="project-tools">
      <div className="project-tabs" role="tablist" aria-label="Project categories">
        {categories.map(c=><button key={c} role="tab" aria-selected={category===c} className={category===c?'active':''} onClick={()=>setCategory(c)}>{c}</button>)}
      </div>
      <label className="project-search"><span>Search projects</span><input value={q} onChange={(e:ChangeEvent<HTMLInputElement>)=>setQ(e.target.value)} placeholder="Project or location"/></label>
    </div>
    <div className="project-list">
      {filtered.map((p,i)=><article className="project-row" key={p.slug}>
        <Link className="project-row-image" href={`/projects/${p.slug}`} style={{backgroundImage:`url("${p.image}")`}} aria-label={p.title}/>
        <div className="project-row-copy">
          <div className="project-meta">{p.category}<span>•</span>{p.location}</div>
          <h2><Link href={`/projects/${p.slug}`}>{p.title}</Link></h2>
          <p>{p.summary}</p>
          <div className="project-actions"><Link href={`/projects/${p.slug}`}>View project</Link><a target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.title+' '+p.location)}`}>Directions ↗</a></div>
        </div>
      </article>)}
      {!filtered.length && <p className="empty-state">No projects match this search.</p>}
    </div>
  </>
}
