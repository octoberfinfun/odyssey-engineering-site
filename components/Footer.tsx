import Link from 'next/link';
import Image from 'next/image';
import { services, site } from '@/lib/siteData';

export default function Footer() {
  return <footer className="footer">
    <div className="shell footer-grid">
      <div className="footer-brand">
        <Image src="https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_logo_2x.png" alt="Odyssey Engineering Group" width={600} height={160} sizes="255px" />
        <p>{site.address}</p>
        <p><a href={site.phoneHref}>{site.phone}</a><br/><a href={`mailto:${site.email}`}>{site.email}</a></p>
        <div className="footer-socials"><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={site.facebook} target="_blank" rel="noreferrer">Facebook ↗</a><a href={site.instagram} target="_blank" rel="noreferrer">Instagram ↗</a></div>
      </div>
      <div>
        <h3>About</h3>
        <Link href="/about">Our Firm</Link>
        <Link href="/about/management-team">Management Team</Link>
        <Link href="/about/recent-projects">Recent Projects</Link>
        <Link href="/outreach">Outreach</Link>
      </div>
      <div>
        <h3>Services</h3>
        {services.map(s => <Link key={s.slug} href={`/our-services/${s.slug}`}>{s.title}</Link>)}
      </div>
      <div>
        <h3>Company</h3>
        <Link href="/news">News</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/join-our-team">Join Our Team</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
    <div className="shell footer-bottom">
      <span>© {new Date().getFullYear()} Odyssey Engineering Group, LLC</span>
      <span>{site.license}</span>
    </div>
  </footer>
}
