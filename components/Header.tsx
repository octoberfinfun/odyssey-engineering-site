'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { services, site } from '@/lib/siteData';
import SearchDialog from './SearchDialog';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="topbar">
        <div className="shell topbar-inner">
          <div className="topbar-contact">
            <span>Call Us Today!</span>
            <a href={site.phoneHref}>281-306-0240</a>
            <span className="sep">|</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="topbar-socials"><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a><a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a></div>
        </div>
      </div>
      <header className="header">
        <div className="shell header-inner">
          <Link className="logo" href="/" aria-label="Odyssey Engineering Group home">
            <Image src="https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_logo_2x.png" alt="Odyssey Engineering Group" width={600} height={160} priority sizes="265px" />
          </Link>

          <button className="menu-toggle" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="primary-nav" aria-label="Toggle navigation">
            <span/><span/><span/>
          </button>

          <nav id="primary-nav" className={`nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <div className={`nav-parent ${aboutOpen ? 'expanded' : ''}`}>
              <button className="nav-parent-button" onClick={() => setAboutOpen(v => !v)} aria-expanded={aboutOpen} aria-haspopup="true">About <span>⌄</span></button>
              <div className="dropdown">
                <Link href="/about" onClick={() => setOpen(false)}>About Odyssey Engineering Group</Link>
                <Link href="/about/management-team" onClick={() => setOpen(false)}>Management Team</Link>
                <Link href="/about/recent-projects" onClick={() => setOpen(false)}>Recent Projects</Link>
              </div>
            </div>
            <div className={`nav-parent ${servicesOpen ? 'expanded' : ''}`}>
              <button className="nav-parent-button" onClick={() => setServicesOpen(v => !v)} aria-expanded={servicesOpen} aria-haspopup="true">Services <span>⌄</span></button>
              <div className="dropdown service-dropdown">
                {services.map(s => <Link key={s.slug} href={`/our-services/${s.slug}`} onClick={() => setOpen(false)}>{s.title}</Link>)}
              </div>
            </div>
            <Link href="/news" onClick={() => setOpen(false)}>News</Link>
            <Link href="/outreach" onClick={() => setOpen(false)}>Outreach</Link>
            <Link href="/resources" onClick={() => setOpen(false)}>Resources</Link>
            <Link href="/join-our-team" onClick={() => setOpen(false)}>Join Our Team</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <button className="search-button" onClick={() => setSearchOpen(true)} aria-label="Search site">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
            </button>
          </nav>
        </div>
      </header>
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
