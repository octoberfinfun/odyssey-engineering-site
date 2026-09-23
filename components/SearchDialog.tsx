'use client';

import Link from 'next/link';
import { type ChangeEvent, type MouseEvent, useEffect, useMemo, useRef, useState } from 'react';
import { leaders, news, projects, services } from '@/lib/siteData';

type Props = { open:boolean; onClose:()=>void };

const staticPages = [
  ['About Odyssey Engineering Group','/about'],
  ['Management Team','/about/management-team'],
  ['Recent Projects','/about/recent-projects'],
  ['News','/news'],
  ['Outreach','/outreach'],
  ['Resources','/resources'],
  ['Join Our Team','/join-our-team'],
  ['Contact','/contact'],
];

export default function SearchDialog({open,onClose}:Props) {
  const [q,setQ] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 20);
    const esc = (e:KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [open,onClose]);
  const items = useMemo(() => {
    const all = [
      ...staticPages.map(([title,href])=>({title,href,type:'Page'})),
      ...services.map(s=>({title:s.title,href:`/our-services/${s.slug}`,type:'Service'})),
      ...projects.map(p=>({title:p.title,href:`/projects/${p.slug}`,type:'Project'})),
      ...leaders.map(p=>({title:p.name,href:`/about/management-team/${p.slug}`,type:'Team'})),
      ...news.map(n=>({title:n.title,href:`/news/${n.slug}`,type:'News'})),
    ];
    const query = q.trim().toLowerCase();
    return query ? all.filter(x=>x.title.toLowerCase().includes(query)).slice(0,10) : all.slice(0,8);
  },[q]);
  if (!open) return null;
  return <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Site search" onMouseDown={(e:MouseEvent<HTMLDivElement>)=>{if(e.currentTarget===e.target)onClose()}}>
    <div className="search-panel">
      <div className="search-head">
        <strong>Search Odyssey</strong>
        <button onClick={onClose} aria-label="Close search">×</button>
      </div>
      <input ref={inputRef} value={q} onChange={(e:ChangeEvent<HTMLInputElement>)=>setQ(e.target.value)} placeholder="Search services, projects, people, news…" aria-label="Search query" />
      <div className="search-results">
        {items.map(item => <Link key={item.href} href={item.href} onClick={onClose}><span>{item.title}</span><small>{item.type}</small></Link>)}
        {!items.length && <p>No matching pages found.</p>}
      </div>
    </div>
  </div>
}
