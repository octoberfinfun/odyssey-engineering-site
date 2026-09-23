import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/lib/siteData';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.odysseyeg.com'),
  title: { default:'Odyssey Engineering Group, LLC', template:'%s | Odyssey Engineering Group' },
  description:'Houston-based civil engineering services for land development, municipal infrastructure, stormwater, site development, GIS and survey.',
  alternates:{canonical:'https://www.odysseyeg.com/'},
  openGraph:{title:'Odyssey Engineering Group, LLC',description:'Houston-based civil engineering services for land development, municipal infrastructure, stormwater, site development, GIS and survey.',url:'https://www.odysseyeg.com/',siteName:'Odyssey Engineering Group',type:'website',images:[{url:'https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_logo_2x.png'}]},
  twitter:{card:'summary_large_image',title:'Odyssey Engineering Group, LLC',description:'Houston-based civil engineering services for land development, municipal infrastructure, stormwater, site development, GIS and survey.',images:['https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_logo_2x.png']},
  icons:{icon:'/icons/mark.svg'},
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  const org = { '@context':'https://schema.org','@type':'ProfessionalService',name:site.name,url:'https://www.odysseyeg.com',telephone:'+1-281-306-0240',email:site.email,address:{'@type':'PostalAddress',streetAddress:'2500 Tanglewilde St., Suite 300',addressLocality:'Houston',addressRegion:'TX',postalCode:'77063',addressCountry:'US'},sameAs:[site.linkedin,site.facebook,site.instagram] };
  return <html lang="en"><body><Header/><main id="main">{children}</main><Footer/><Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(org)}}/></body></html>
}
