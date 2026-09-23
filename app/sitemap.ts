import type { MetadataRoute } from 'next';
import { leaders, news, projects, services } from '@/lib/siteData';

export default function sitemap():MetadataRoute.Sitemap {
  const base='https://www.odysseyeg.com';
  const now = new Date();
  const staticPaths=['','/about','/about/management-team','/about/recent-projects','/our-services','/news','/category/news','/outreach','/resources','/join-our-team','/contact'];
  const portfolioCategories=['single-family','municipal','stormwater','site','gis'];
  const newsPages=Array.from({length:Math.max(0,Math.ceil(news.length/5)-1)},(_,i)=>`/news/page/${i+2}`);
  return [
    ...staticPaths.map(url=>({url:base+url,lastModified:now})),
    ...services.map(x=>({url:`${base}/our-services/${x.slug}`,lastModified:now})),
    ...projects.map(x=>({url:`${base}/projects/${x.slug}`,lastModified:now})),
    ...portfolioCategories.map(slug=>({url:`${base}/portfolio_category/${slug}`,lastModified:now})),
    ...leaders.map(x=>({url:`${base}/about/management-team/${x.slug}`,lastModified:now})),
    ...news.map(x=>({url:`${base}/news/${x.slug}`,lastModified:now})),
    ...newsPages.map(url=>({url:base+url,lastModified:now})),
  ];
}
