import PageHero from '@/components/PageHero';
import ProjectExplorer from '@/components/ProjectExplorer';
import { pageMetadata } from '@/lib/seo';
const categoryImages = [
  ['Single Family','https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_recentprojects_singlefamily_1.png'],
  ['Municipal','https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_recentprojects_municipal_1.png'],
  ['Stormwater','https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_recentprojects_stormwater_1.png'],
  ['Site','https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_recentprojects_site_1.png'],
  ['GIS','https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_recentprojects_gis_1.png'],
] as const;
export const metadata = pageMetadata('Recent Projects','Explore Odyssey Engineering Group projects across single family, municipal, stormwater, site and GIS services.','/about/recent-projects');
export default function ProjectsPage(){return <><PageHero title="Recent Projects" path="/about/recent-projects" parent={{label:'About',href:'/about'}} description="Selected work across Odyssey’s core engineering service groups."/><section className="project-category-strip"><div className="shell categories-visual">{categoryImages.map(([label,image])=><div key={label} className="project-category-banner" style={{backgroundImage:`url("${image}")`}}><h3>{label}</h3></div>)}</div></section><section className="section"><div className="shell"><ProjectExplorer/></div></section></>}
