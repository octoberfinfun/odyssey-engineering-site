import Link from 'next/link';
import { news, projects, services } from '@/lib/siteData';

export default function HomePage() {
  return <>
    <section className="home-hero">
      <div className="home-hero-bg" aria-hidden="true"/>
      <div className="shell home-hero-copy">
        <h1>Creating and Serving Communities</h1>
        <p>Civil engineering, planning and infrastructure services for communities throughout the Greater Houston region.</p>
        <div className="hero-service-links">{services.map(s=><Link key={s.slug} href={`/our-services/${s.slug}`}>{s.title}<span>Services</span></Link>)}</div>
      </div>
    </section>

    <section className="section intro-section">
      <div className="shell intro-layout">
        <div className="intro-image" style={{backgroundImage:'url("https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_home_about_1.jpg")'}} role="img" aria-label="Odyssey Engineering Group project work"/>
        <div className="intro-copy">
          <h2>Engineering with a community focus.</h2>
          <p>Odyssey Engineering Group takes a hands-on approach to land development and public infrastructure, with teamwork, integrity and communication at the center of its work.</p>
          <p>The firm brings together integrated service groups so clients can move from early planning and analysis through design, approvals, construction and long-term operations.</p>
          <Link className="text-link" href="/about">About Odyssey <span>→</span></Link>
        </div>
      </div>
    </section>

    <section className="section services-section">
      <div className="shell">
        <div className="section-title-line"><h2>Our Services</h2><Link href="/our-services">View all services</Link></div>
        <div className="service-editorial-grid">
          {services.map((s,i)=><article className={`service-editorial service-${i+1}`} key={s.slug}>
            <Link className="service-photo" href={`/our-services/${s.slug}`} style={{backgroundImage:`url("${s.image}")`}} aria-label={s.title}/>
            <div><h3><Link href={`/our-services/${s.slug}`}>{s.title}</Link></h3><p>{s.short}</p><Link className="text-link" href={`/our-services/${s.slug}`}>Learn more <span>→</span></Link></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section project-preview-section">
      <div className="shell">
        <div className="section-title-line light"><h2>Recent Projects</h2><Link href="/about/recent-projects">Explore projects</Link></div>
        <div className="home-projects">
          {projects.slice(0,5).map((p,i)=><Link href={`/projects/${p.slug}`} className={`home-project p${i+1}`} key={p.slug} style={{backgroundImage:`linear-gradient(180deg,transparent 35%,rgba(7,26,32,.88)),url("${p.image}")`}}><span>{p.category}</span><h3>{p.title}</h3><small>{p.location}</small></Link>)}
        </div>
      </div>
    </section>

    <section className="section values-section">
      <div className="shell values-layout">
        <div><h2>Our Core Values</h2><p>Four principles guide how Odyssey works with clients, employees and the communities it serves.</p></div>
        <dl className="values-list">
          <div><dt>Integrity Driven</dt><dd>Direct, honest decisions that build client trust.</dd></div>
          <div><dt>Team Centered</dt><dd>Open communication, collaboration and follow-through.</dd></div>
          <div><dt>Communication Focused</dt><dd>Frequent, responsive communication that keeps projects moving.</dd></div>
          <div><dt>Pay It Forward</dt><dd>Community involvement, mentorship and meaningful volunteer work.</dd></div>
        </dl>
      </div>
    </section>

    <section className="section latest-section"><div className="shell">
      <div className="section-title-line"><h2>Latest News</h2><Link href="/news">View news archive</Link></div>
      <div className="latest-grid">{news.slice(0,3).map(n=><article key={n.slug}><Link className="latest-image" href={`/news/${n.slug}`} style={{backgroundImage:`url("${n.image}")`}} aria-label={n.title}/><time>{n.date}</time><h3><Link href={`/news/${n.slug}`}>{n.title}</Link></h3></article>)}</div>
    </div></section>
  </>
}
