import type { Metadata } from 'next';

const BASE = 'https://www.odysseyeg.com';
const DEFAULT_OG = 'https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_logo_2x.png';
export function pageMetadata(title:string, description:string, path:string, image:string = DEFAULT_OG):Metadata {
  const url = `${BASE}${path}`;
  const fullTitle = `${title} | Odyssey Engineering Group`;
  return {
    title,
    description,
    alternates:{canonical:url},
    openGraph:{title:fullTitle,description,url,siteName:'Odyssey Engineering Group',type:'website',images:[{url:image}]},
    twitter:{card:'summary_large_image',title:fullTitle,description,images:[image]},
  };
}
