export const site = {
  name: 'Odyssey Engineering Group, LLC',
  shortName: 'Odyssey Engineering Group',
  phone: '(281) 306-0240',
  phoneHref: 'tel:+12813060240',
  email: 'justin@odysseyengineeringgrp.com',
  careersEmail: 'justin@odysseyengineeringgrp.com',
  address: '2500 Tanglewilde St., Suite 300, Houston, TX 77063',
  mapQuery: '2500 Tanglewilde St Suite 300 Houston TX 77063',
  license: 'TBPE No. F-17637 & 10195040',
  source: 'https://www.odysseyeg.com/',
  linkedin: 'https://www.linkedin.com/company/odyssey-engineering-group-llc/',
  facebook: 'https://www.facebook.com/people/Odyssey-Engineering-Group/100092729791904/',
  instagram: 'https://www.instagram.com/odysseyengineeringgroup/',
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  image: string;
  intro: string;
  paragraphs: string[];
  bullets: string[];
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: 'single-family',
    title: 'Single Family',
    short: 'Residential land development from feasibility through construction.',
    image: 'https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_services_singlefamily_2.jpg',
    intro: 'Odyssey supports single-family development projects throughout the Greater Houston region, combining early feasibility work, civil design, agency coordination and construction-phase services.',
    paragraphs: [
      'The team works with clients from the beginning of a development, helping evaluate a tract, identify constraints, estimate lot yield and understand utility, schedule and infrastructure considerations before major commitments are made.',
      'Planning and design are carried through bidding and construction with coordination among contractors, vendors, public agencies and district representatives. The intent is to keep design decisions aligned with the client’s development vision and the requirements of the surrounding community.'
    ],
    bullets: ['Feasibility studies', 'Land planning', 'Construction management', 'Infrastructure design', 'Low-impact design', 'Agency coordination', 'Public bidding process', 'Owner site representation'],
    highlights: ['Indigo Development', 'Mandola Farms', 'Still Creek Ranch'],
  },
  {
    slug: 'municipal',
    title: 'Municipal',
    short: 'Engineering for municipalities, utility districts and public infrastructure.',
    image: 'https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_services_municipal_2.jpg',
    intro: 'Odyssey serves municipal utility districts, special utility districts and municipalities as an extension of their staff, supporting public infrastructure, regulatory coordination and long-term capital needs.',
    paragraphs: [
      'The municipal team works with boards, operators and public staff on water, wastewater and infrastructure needs, keeping each client’s service goals and regulatory obligations at the center of the work.',
      'Assignments range from technical support and rehabilitation planning to facility design, permitting, grant coordination and TCEQ approvals.'
    ],
    bullets: ['Permitting services', 'TCEQ approvals', 'Hydraulic water modeling', 'Grant coordination', 'Facility design', 'Rehabilitation'],
    highlights: ['Pecan Grove MUD Installation of Emergency Generators', 'Fort Bend County MUD No. 162 WWTP No. 1', 'Fort Bend County WCID No. 3 Lake 5'],
  },
  {
    slug: 'stormwater',
    title: 'Stormwater',
    short: 'Hydrology, hydraulics, drainage and floodplain management.',
    image: 'https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_services_stormwater_2.jpg',
    intro: 'Stormwater planning in the Houston region demands careful coordination of function, cost, flood risk, aesthetics and long-term performance. Odyssey’s stormwater group focuses on analysis, design and floodplain management for public and private projects.',
    paragraphs: [
      'The group evaluates existing drainage systems and plans improvements intended to reduce structural flooding and street ponding during extreme rainfall.',
      'Project work includes hydrologic and hydraulic modeling, drainage impact analysis, floodplain mapping and the design of ponds, channels, storm sewers and transportation drainage improvements.'
    ],
    bullets: ['FEMA LOMR applications', 'Drainage impact analysis', 'Floodplain mapping and mitigation', 'Road and bridge drainage', 'Detention and channel design', 'Hydrologic and hydraulic modeling'],
    highlights: ['Jones Creek Slope Rehabilitation', 'Runneburg Estates Subdivision Drainage Improvements', 'Arabella on the Prairie Detention'],
  },
  {
    slug: 'site',
    title: 'Site',
    short: 'Commercial and institutional site development.',
    image: 'https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_services_site_2.jpg',
    intro: 'The Site Services team supports commercial, retail, worship, education, athletic and multifamily projects throughout the Greater Houston area.',
    paragraphs: [
      'Odyssey coordinates civil site design with owners, architects, planners, traffic consultants and governing agencies so the project can move from due diligence through permitting and construction.',
      'The team’s work emphasizes grading, drainage, utilities, access, permitting and practical coordination with surrounding infrastructure.'
    ],
    bullets: ['Due diligence studies', 'Site plan layout', 'Permit coordination', 'Grading, drainage and utility design', 'Stormwater pollution prevention design', 'Low-impact design'],
    highlights: ['Gosling Oaks Commercial Town Center', 'Creekside Park South Business Park', 'Downtown Richmond Starbucks & Retail'],
  },
  {
    slug: 'gis',
    title: 'GIS',
    short: 'Spatial data, mapping and asset management for infrastructure.',
    image: 'https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_services_gis_2.jpg',
    intro: 'Odyssey integrates geospatial information into infrastructure and development work, helping clients organize field data, map assets and use location-based information for operations and decision-making.',
    paragraphs: [
      'GIS services support utility districts and engineering teams with mapping, field locating, asset records and network information that can be used throughout planning, operations and maintenance.',
      'The work is coordinated with broader engineering services so spatial data remains useful to the people who design, permit, build and operate the infrastructure.'
    ],
    bullets: ['Infrastructure mapping', 'Asset management', 'Feasibility studies', 'Utility network management', 'Web GIS', 'Field data coordination'],
    highlights: ['Northwest Harris County No. 24', 'Harris County MUD No. 33', 'Pecan Grove MUD'],
  },
  {
    slug: 'survey',
    title: 'Survey',
    short: 'Field and survey services integrated with engineering workflows.',
    image: 'https://www.odysseyeg.com/wp-content/uploads/2026/06/Survey-Picture.jpg',
    intro: 'Odyssey’s survey team provides field information and deliverables that support engineering and construction from early planning through project closeout.',
    paragraphs: [
      'Survey work is coordinated with engineering needs so boundary, utility, design and staking information can move directly into project execution.',
      'The team emphasizes accuracy, clear deliverables and dependable turnaround across the development and infrastructure process.'
    ],
    bullets: ['Boundary and design surveys', 'Easement preparation', 'Construction staking', 'Underground utility location', 'Subdivision platting and submittals'],
    highlights: [],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: 'Single Family' | 'Municipal' | 'Stormwater' | 'Site' | 'GIS';
  image: string;
  location: string;
  summary: string;
};

export const projects: Project[] = [
  { slug:'indigo-development', title:'Indigo Development', category:'Single Family', image:'https://www.odysseyeg.com/wp-content/uploads/2024/02/oeg_portfolio_indigocommunity_1.jpg', location:'Richmond, Texas', summary:'A 235-acre mixed-use residential development in the Richmond area planned around a people-focused community concept.' },
  { slug:'mandola-farms', title:'Mandola Farms', category:'Single Family', image:'https://www.odysseyeg.com/wp-content/uploads/2024/02/oeg_portfolio_mandolafarms_1.jpg', location:'Richmond, Texas', summary:'An 88-acre single-family development with 263 lots inside the City of Richmond.' },
  { slug:'sweetgrass-village', title:'Sweetgrass Village', category:'Single Family', image:'https://www.odysseyeg.com/wp-content/uploads/2024/02/oeg_portfolio_sweetgrassvillage_2.jpg', location:'Northeast Harris County, Texas', summary:'A large residential community sharing regional facilities with Barrett Crossing, including amenities, green space and a central lake.' },
  { slug:'still-creek-ranch', title:'Still Creek Ranch', category:'Single Family', image:'https://www.odysseyeg.com/wp-content/uploads/2024/02/oeg_portfolio_stillcreekranch_1.jpg', location:'Rosenberg ETJ, Texas', summary:'A 142-acre community with nearly 500 residential lots and more than twenty acres of commercial development.' },
  { slug:'arabella-on-the-prairie', title:'Arabella on the Prairie', category:'Single Family', image:'https://www.odysseyeg.com/wp-content/uploads/2024/02/oeg_portfolio_arabella_2.jpg', location:'Rosenberg ETJ, Texas', summary:'A roughly 390-acre single-family development planned for nearly 1,100 lots.' },
  { slug:'camellia', title:'Camellia', category:'Single Family', image:'https://www.odysseyeg.com/wp-content/uploads/2024/02/oeg_portfolio_camellia_1.jpg', location:'Fort Bend County, Texas', summary:'A 179-acre single- and multifamily development notable for its use of bioretention as a low-impact development strategy.' },
  { slug:'pecan-grove-mud-emergency-generators', title:'Pecan Grove MUD Installation of Emergency Generators', category:'Municipal', image:'https://www.odysseyeg.com/wp-content/uploads/2024/02/oeg_portfolio_pecangrove_1.jpg', location:'Fort Bend County, Texas', summary:'Emergency power improvements at Water Plant No. 1 and Water Well No. 5, including generator, electrical, concrete and utility coordination work.' },
  { slug:'fort-bend-county-mud-162-wwtp-1', title:'Fort Bend County MUD No. 162 WWTP No. 1', category:'Municipal', image:'https://www.odysseyeg.com/wp-content/uploads/2024/01/oeg_portfolio_fbcmud162_1.jpg', location:'Fort Bend County, Texas', summary:'Wastewater planning and facility support for a rapidly growing district serving multiple active developments.' },
  { slug:'old-south-drive-pavement-replacement', title:'Pecan Grove MUD Old South Drive Pavement Replacement', category:'Municipal', image:'https://www.odysseyeg.com/wp-content/uploads/2024/01/oeg_portfolio_pecangrove_3.jpg', location:'Pecan Grove, Texas', summary:'Concrete pavement replacement over a drainage culvert requiring coordination with Fort Bend County and the City of Richmond.' },
  { slug:'fbc-wcid-3-lake-5', title:'Fort Bend County WCID No. 3 Lake 5', category:'Municipal', image:'https://www.odysseyeg.com/wp-content/uploads/2024/01/oeg_portfolio_fbcwcid3_1.jpg', location:'Fort Bend County, Texas', summary:'Rehabilitation of an amenity lake using excavation and a clay liner to reduce seepage and improve water-level performance.' },
  { slug:'jones-creek-slope-rehabilitation', title:'Jones Creek Slope Rehabilitation', category:'Stormwater', image:'https://www.odysseyeg.com/wp-content/uploads/2024/02/oeg_portfolio_jonescreek_1.jpg', location:'Pecan Grove, Texas', summary:'Rehabilitation of more than 3,300 linear feet of creek side slope adjacent to the Pecan Grove levee system.' },
  { slug:'runneburg-estates-drainage', title:'Runneburg Estates Subdivision Drainage Improvements', category:'Stormwater', image:'https://www.odysseyeg.com/wp-content/uploads/2024/02/oeg_portfolio_runneburgestates.jpg', location:'Harris County, Texas', summary:'Drainage impact analysis and improvement planning for an area with a documented history of repetitive structural flooding.' },
  { slug:'sweetgrass-village-detention', title:'Sweetgrass Village Detention', category:'Stormwater', image:'https://www.odysseyeg.com/wp-content/uploads/2024/02/oeg_portfolio_sweetgrassvillage.jpg', location:'Harris County, Texas', summary:'Regional detention and outfall work involving major excavation and a long outfall channel supporting future phases of development.' },
  { slug:'windstone-on-the-prairie-detention', title:'Windstone on the Prairie Detention', category:'Stormwater', image:'https://www.odysseyeg.com/wp-content/uploads/2024/02/oeg_portfolio_windstoneontheprairie.jpg', location:'Fort Bend County, Texas', summary:'A large detention facility with storm sewer, pump station and TxDOT outfall coordination serving multiple residential sections.' },
  { slug:'still-creek-ranch-phase-1-detention', title:'Still Creek Ranch Phase 1 Detention', category:'Stormwater', image:'https://www.odysseyeg.com/wp-content/uploads/2024/02/oeg_portfolio_stillcreekranch.jpg', location:'Central Fort Bend County, Texas', summary:'Hydrologic and hydraulic study supporting development within a FEMA Special Flood Hazard Area.' },
  { slug:'arabella-on-the-prairie-detention', title:'Arabella on the Prairie Detention', category:'Stormwater', image:'https://www.odysseyeg.com/wp-content/uploads/2024/02/oeg_portfolio_arabella_1.jpg', location:'Central Fort Bend County, Texas', summary:'Hydrologic and hydraulic modeling using HEC-HMS and HEC-RAS to evaluate flood impacts for a large residential development.' },
  { slug:'gosling-oaks-commercial-town-center', title:'Gosling Oaks Commercial Town Center', category:'Site', image:'https://www.odysseyeg.com/wp-content/uploads/2024/02/oeg_portfolio_goslingoaks_2.jpg', location:'Greater Houston, Texas', summary:'A multi-phase site development combining public and private improvements, retail outparcels and a large multifamily component on a constrained floodplain site.' },
  { slug:'creekside-park-south-business-park', title:'Creekside Park South Business Park', category:'Site', image:'https://www.odysseyeg.com/wp-content/uploads/2024/02/oeg_portfolio_creeksideparksouth_1.jpg', location:'Harris County, Texas', summary:'Light-industrial business park work involving regional detention, earthwork balancing, site planning and TxDOT access coordination.' },
  { slug:'downtown-richmond-starbucks-retail', title:'Downtown Richmond Starbucks & Retail', category:'Site', image:'https://www.odysseyeg.com/wp-content/uploads/2024/02/oeg_portfolio_downtownrichmond_1.jpg', location:'Richmond, Texas', summary:'A collaborative downtown project for Starbucks, retail and restaurant uses overlooking the Brazos River in Richmond’s historic district.' },
  { slug:'northwest-harris-county-mud-24', title:'Northwest Harris County No. 24', category:'GIS', image:'https://www.odysseyeg.com/wp-content/uploads/2024/02/oeg_portfolio_nwhcmud24_1.jpg', location:'Harris County, Texas', summary:'Web GIS and field asset-locating work for a utility district seeking a location-based operational system of record.' },
  { slug:'harris-county-mud-33', title:'Harris County MUD No. 33', category:'GIS', image:'https://www.odysseyeg.com/wp-content/uploads/2024/02/oeg_portfolio_hcmud33_1.jpg', location:'Harris County, Texas', summary:'GIS implementation and field asset locating for a roughly 500-acre district serving more than 1,700 connections.' },
  { slug:'pecan-grove-mud-gis', title:'Pecan Grove MUD', category:'GIS', image:'https://www.odysseyeg.com/wp-content/uploads/2024/02/oeg_portfolio_pecangrove_2.jpg', location:'Fort Bend County, Texas', summary:'A managed GIS system and field-locating effort supporting utility operations across a large district with thousands of connections.' },
];

export type Leader = {
  slug: string;
  name: string;
  role: string;
  email?: string;
  education?: string[];
  credentials?: string[];
  image?: string;
  bio?: string[];
};

export const leaders: Leader[] = [
  { slug:'megan-crutcher', name:'Megan L. Crutcher, P.E., CFM', role:'Founding Principal', email:'mcrutcher@odysseyengineeringgrp.com', education:['Texas Tech University', 'B.S. Civil Engineering – 2007'], credentials:['Texas P.E. #109803'], image:'https://www.odysseyeg.com/wp-content/uploads/2026/01/M.-Crutcher-Headshot.jpg', bio:['Co-founder Megan Crutcher brings a broad background spanning hydrology and hydraulics, land development and special districts. Her work has included projects from infill development to very large master-planned communities across the Houston region.', 'Her leadership centers on technical quality, team development and resilient community infrastructure. She has also been active in professional and civic organizations in Fort Bend County.'] },
  { slug:'justin-ring', name:'Justin R. Ring, P.E.', role:'Founding Principal', email:'jring@odysseyengineeringgrp.com', education:['Texas A&M University', 'B.S. Civil Engineering – 2000'], credentials:['Texas P.E. #95863'], image:'https://www.odysseyeg.com/wp-content/uploads/2026/01/J.-Ring-Headshot.jpg', bio:['Co-founder Justin Ring has more than two decades of experience in land development and special-district engineering throughout the Greater Houston area.', 'His work includes residential communities and municipal utility districts across several counties, with a strong emphasis on direct communication with clients, boards and residents.'] },
  { slug:'sergio-handal', name:'Sergio D. Handal, P.E.', role:'Principal', email:'shandal@odysseyengineeringgrp.com', education:['Texas A&M University', 'B.S. Civil Engineering – 2000'], credentials:['Texas P.E. #93909'], image:'https://www.odysseyeg.com/wp-content/uploads/2026/01/S.-Handal-Headshot.jpg', bio:['Sergio Handal has more than 25 years of civil engineering experience in design, project management and construction administration for land-development and municipal clients.', 'His background includes district engineering, water-distribution work and local drainage projects, as well as community and professional service.'] },
  { slug:'angela-peters', name:'Angela L. Peters, P.E.', role:'Principal · Group Manager Municipal Services', email:'apeters@odysseyengineeringgrp.com', education:['Texas A&M University', 'B.S. Civil Engineering – 1996'], credentials:['Texas P.E. #88510'], image:'https://www.odysseyeg.com/wp-content/uploads/2026/01/A.-Peters-Headshot.jpg', bio:['Angela Peters became a Principal in 2026 after years with Odyssey. Her career has included public-sector engineering and private land development, with extensive municipal utility district experience.', 'At Odyssey, her focus is public agencies and MUD clients, where she brings both technical and governance perspective.'] },
  { slug:'charlie-tang', name:'Charlie T. Tang, P.E., LEED AP', role:'Principal · Group Manager Site Development', email:'ctang@odysseyengineeringgrp.com', education:['The University of Texas', 'B.S. Civil Engineering – 2006'], credentials:['Texas P.E. #120351'], image:'https://www.odysseyeg.com/wp-content/uploads/2026/01/C.-Tang-Headshot.jpg', bio:['Charlie Tang leads Site Development and brings more than 20 years of infrastructure-design and project-management experience.', 'His project background includes commercial, retail, institutional, industrial, multifamily and complex corporate-campus work, with strong familiarity with local and federal review criteria.'] },
  { slug:'mark-hodges', name:'Mark C. Hodges, P.E.', role:'Group Manager Design & Plan Production', email:'mhodges@odysseyengineeringgrp.com', education:['Georgia Institute of Technology', 'B.S. Civil Engineering – 2012'], credentials:['Texas P.E. #133425'], image:'https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_about_managementteam_mhodges.jpg', bio:['Mark Hodges has worked across planning, design, permitting, bidding and construction management for residential land development in multiple Houston-area counties.', 'His role combines technical leadership, design coordination and mentoring for engineering and production staff.'] },
  { slug:'jerry-preston', name:'Jerry P. Preston, P.E., CFM', role:'Group Manager Stormwater Services', email:'jpreston@odysseyengineeringgrp.com', education:['The University of Houston', 'B.S. Civil Engineering – 1996'], credentials:['Texas P.E. #90264'], image:'https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_about_managementteam_jpreston.jpg', bio:['Jerry Preston is a Texas professional engineer whose career has focused on hydrology and hydraulics, with additional experience in construction administration, land development and district engineering.', 'His work includes floodplain modeling, FEMA map changes, transportation drainage, detention design, bridge and culvert analysis, and flood-reduction projects.'] },
  { slug:'brian-wilson', name:'Brian E. Wilson, R.P.L.S.', role:'Group Manager Survey Services', email:'bwilson@odysseyengineeringgrp.com', education:['Blinn College', 'Houston Community College'], credentials:['Registered Professional Land Surveyor No. 5745'], image:'https://www.odysseyeg.com/wp-content/uploads/2026/05/B.-Wilson-Headshot.jpg', bio:['Brian Wilson is an experienced land surveyor whose work spans boundary, route, topographic and construction surveying, subdivision platting and public/private development projects.', 'Before joining Odyssey, he spent many years leading a Houston-area surveying practice and multidisciplinary survey teams.'] },
  { slug:'javier-casas', name:'Javier M. Casas, P.E.', role:'Senior Project Manager' },
  { slug:'jennifer-elms', name:'Jennifer L. Elms, P.E.', role:'Senior Project Manager' },
  { slug:'philip-huseman', name:'Philip W. Huseman, P.E.', role:'Senior Project Manager' },
  { slug:'shannon-mack', name:'Shannon L. Mack, P.E., CFM', role:'Senior Project Manager' },
  { slug:'seth-samuelson', name:'Seth L. Samuelson, P.E.', role:'Senior Project Manager' },
  { slug:'stephanie-tabor', name:'Stephanie E. Tabor, P.E., ENV SP', role:'Senior Project Manager', email:'stabor@odysseyengineeringgrp.com', education:['University of Texas at Austin', 'B.S. Civil Engineering – 2008'], credentials:['Texas P.E. #121935'], image:'https://www.odysseyeg.com/wp-content/uploads/2025/11/S.-Tabor-Headshot-V2.jpg', bio:['Stephanie Tabor’s career began in environmental engineering before she moved into Houston-area land development. She has since managed single-family projects across multiple Texas counties.', 'She is also an Envision Sustainability Professional and participates in community work through Canstruction Houston.'] },
  { slug:'jorge-garcia', name:'Jorge J. Garcia, P.E.', role:'Project Manager', email:'jgarcia@odysseyengineeringgrp.com', education:['Southern Polytechnic State University', 'B.S. Civil Engineering Technology – 2002'], credentials:['Texas P.E. #145185'], image:'https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_about_managementteam_jgarcia.jpg', bio:['Jorge Garcia’s background includes construction estimating, project management and procurement before moving more deeply into engineering design and land development.', 'At Odyssey, he works primarily on residential development in Fort Bend and Harris Counties, bringing construction experience into design and closeout decisions.'] },
  { slug:'afton-hlavaty', name:'Afton A. Hlavaty, P.E.', role:'Project Manager', email:'ahlavaty@odysseyengineeringgrp.com', education:['Texas A&M University', 'B.S. Civil Engineering – 2011'], credentials:['Texas P.E. #126714'], image:'https://www.odysseyeg.com/wp-content/uploads/2025/06/A.-Hlavaty-Headshot.jpg', bio:['Afton Hlavaty has more than a decade of experience in single-family land development across Waller, Fort Bend and Harris Counties.', 'Her work includes planning, site design, permitting and construction management, with a focus on clear coordination among clients, engineers and public agencies.'] },
  { slug:'mckenzie-lutton', name:'McKenzie G. Lutton, P.E.', role:'Project Manager', email:'mlutton@odysseyengineeringgrp.com', education:['Texas A&M University', 'B.S. Ocean Engineering – 2016'], credentials:['Texas P.E. #148186', 'Washington P.E. #21036423'], image:'https://www.odysseyeg.com/wp-content/uploads/2025/06/M.-Lutton-Headshot-1.jpg', bio:['McKenzie Lutton combines civil and construction engineering experience developed in Texas and Washington State.', 'Her work emphasizes practical coordination between engineering design and field execution.'] },
  { slug:'jason-bosquez', name:'Jason Bosquez', role:'Information Systems Manager' },
  { slug:'jennifer-grimm', name:'Jennifer Grimm', role:'Design Manager', email:'jgrimm@odysseyengineeringgrp.com', education:['ITT Tech', 'Associate of Applied Science – 2008'], image:'https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_about_managementteam_jgrimm.jpg', bio:['Jennifer Grimm began in CAD design and progressed through technical production roles into design management.', 'She coordinates engineers and CAD staff, detailed design, client schedules and agency reviews across development projects.'] },
  { slug:'sandy-laria', name:'Sandy O. Laria, P.E.', role:'Design Manager', email:'slaria@odysseyengineeringgrp.com', education:['California State University, Northridge', 'B.S. Civil Engineering – 2013'], credentials:['Texas P.E. #143434', 'California P.E. C 85781'], image:'https://www.odysseyeg.com/wp-content/uploads/2025/08/Headshot-2.jpg', bio:['Sandy Laria is a licensed civil engineer with extensive construction-industry experience in residential and commercial work.', 'His technical background includes wet utilities, grading, erosion control, hydrology, low-impact development and project permitting.'] },
  { slug:'larry-nguyen', name:'Larry Nguyen, P.E.', role:'Design Manager' },
  { slug:'alby-thomas', name:'Alby A. Thomas, P.E.', role:'Design Manager', email:'athomas@odysseyengineeringgrp.com', education:['Kannur University', 'B. Tech. Civil Engineering – 2012'], credentials:['Texas P.E. #150122'], image:'https://www.odysseyeg.com/wp-content/uploads/2025/10/A.-Thomas-Headshot.jpg', bio:['Alby Thomas has a decade of civil engineering experience focused on residential land development and detailed infrastructure design.', 'As a Design Manager, she coordinates engineering and CAD teams, permitting and plan production for projects throughout the Greater Houston area.'] },
  { slug:'daniel-wolterman', name:'Daniel T. Wolterman, P.E.', role:'Design Manager' },
  { slug:'ellen-hughes', name:'Ellen Hughes', role:'Office Manager', email:'ehughes@odysseyengineeringgrp.com', education:['Texas A&M University', 'B.A. Speech Communication – 1989', 'M.S. Public Administration – 1991'], image:'https://www.odysseyeg.com/wp-content/uploads/2024/05/oeg_about_managementteam_ehughes.jpg', bio:['Ellen Hughes brings long-term public-service and municipal utility district experience to Odyssey’s operations.', 'As Office Manager, she supports the firm’s administrative systems and growth so technical staff can remain focused on engineering work.'] },
  { slug:'ruston-hughes', name:'Ruston Hughes', role:'Communications Manager' },
  { slug:'brian-tumey', name:'Brian Tumey', role:'Controller' },
];

export type NewsPost = { slug:string; title:string; date:string; image:string; excerpt:string; body:string[] };
const nimg = [
  'https://www.odysseyeg.com/wp-content/uploads/2026/06/AWBD-Summer-Conference-2026-scaled.jpg',
  'https://www.odysseyeg.com/wp-content/uploads/2026/06/LinkedIn-2026-scaled.jpg',
  'https://www.odysseyeg.com/wp-content/uploads/2026/06/Linkedin-Empty-Bowls-Gala-2026-scaled.jpg',
  'https://www.odysseyeg.com/wp-content/uploads/2026/06/Patrick-5-Year-LinkedIn-scaled.jpg',
  'https://www.odysseyeg.com/wp-content/uploads/2026/06/Friends-of-Scouting-LinkedIn-scaled.jpg',
  'https://www.odysseyeg.com/wp-content/uploads/2026/06/Linkedin-and-Facebook-Slideshow-scaled.jpg',
  'https://www.odysseyeg.com/wp-content/uploads/2026/06/B.-Wilson-LinkedIn-scaled.jpg',
  'https://www.odysseyeg.com/wp-content/uploads/2026/06/Fort-Bend-2050-LinkedIn-scaled.jpg',
  'https://www.odysseyeg.com/wp-content/uploads/2026/06/Patrick-R.-P.E.-LinkedIn-scaled.jpg',
  'https://www.odysseyeg.com/wp-content/uploads/2026/06/Nolan-P.E.-LinkedIn-scaled.jpg',
];
export const news: NewsPost[] = [
  {slug:'sergio-handal-ellen-hughes', title:'Congratulations to Sergio Handal, P.E. and Ellen Hughes!', date:'June 30, 2026', image:nimg[0], excerpt:'Odyssey recognizes two members of the team and their professional contributions.', body:['Odyssey shared a congratulations update recognizing Sergio Handal, P.E. and Ellen Hughes. The post reflects the firm’s ongoing focus on its people and professional milestones.']},
  {slug:'international-women-in-engineering-day', title:'Happy International Women in Engineering Day!', date:'June 30, 2026', image:nimg[1], excerpt:'A company update celebrating women in engineering and their impact on communities.', body:['Odyssey marked International Women in Engineering Day with a message recognizing the women whose technical work, leadership and mentorship contribute to the profession and the communities the firm serves.']},
  {slug:'empty-bowls-gala', title:'East Fort Bend Human Needs Ministry Empty Bowls Gala!', date:'June 30, 2026', image:nimg[2], excerpt:'The team supported the East Fort Bend Human Needs Ministry Empty Bowls Gala.', body:['Members of the Odyssey team participated in the East Fort Bend Human Needs Ministry Empty Bowls Gala, continuing the company’s Pay It Forward emphasis on community support.']},
  {slug:'patrick-radecker-five-year', title:'Congratulations Patrick Radecker!', date:'June 30, 2026', image:nimg[3], excerpt:'A five-year anniversary recognition for Patrick Radecker, P.E.', body:['Odyssey recognized Patrick Radecker, P.E. for five years with the firm and highlighted the value of long-term team contributions.']},
  {slug:'friends-of-scouting', title:'Friends of Scouting!', date:'June 30, 2026', image:nimg[4], excerpt:'A community-focused update connected with local scouting support.', body:['Odyssey shared an update around Friends of Scouting as part of its community involvement and giving efforts.']},
  {slug:'wear-blue-wednesday', title:'Wear Blue Wednesday!', date:'June 30, 2026', image:nimg[5], excerpt:'Texas Flood Awareness Week was marked with a company awareness post.', body:['Odyssey participated in Wear Blue Wednesday during Texas Flood Awareness Week, drawing attention to flood awareness and the stormwater work that is central to the region.']},
  {slug:'welcome-brian-wilson', title:'Welcome Brian Wilson!', date:'June 30, 2026', image:nimg[6], excerpt:'Odyssey welcomed Brian Wilson to the team.', body:['Odyssey announced Brian Wilson, R.P.L.S. as part of the company’s growing survey capability.']},
  {slug:'fort-bend-2050', title:'Fort Bend 2050!', date:'June 30, 2026', image:nimg[7], excerpt:'The team participated in a Fort Bend Regional Partnership event focused on the county’s future.', body:['Odyssey thanked the Fort Bend Regional Partnership for bringing regional stakeholders together for a discussion about long-term growth and planning.']},
  {slug:'patrick-radecker-pe', title:'Congratulations Patrick Radecker, P.E.!', date:'June 30, 2026', image:nimg[8], excerpt:'Recognition of a Professional Engineer milestone.', body:['Odyssey congratulated Patrick Radecker on earning his Professional Engineer license.']},
  {slug:'nolan-maciejeski-pe', title:'Congratulations Nolan Maciejeski, P.E.!', date:'June 30, 2026', image:nimg[9], excerpt:'Recognition of a Professional Engineer milestone.', body:['Odyssey congratulated Nolan Maciejeski on earning his Professional Engineer license.']},
  {slug:'seth-samuelson-promotion', title:'Congratulations Seth Samuelson!', date:'February 20, 2026', image:projects[16].image, excerpt:'Seth Samuelson, P.E. was promoted to Senior Project Manager in Site Services.', body:['Odyssey announced Seth Samuelson’s promotion to Senior Project Manager within the Site Services Group.']},
  {slug:'new-principals-2026', title:'Congratulations Angela Peters, Charlie Tang, and Sergio Handal!', date:'January 12, 2026', image:projects[17].image, excerpt:'Angela Peters, Charlie Tang and Sergio Handal joined Odyssey’s ownership team as Principals.', body:['Odyssey announced the addition of Angela Peters, Charlie Tang and Sergio Handal to the ownership team, strengthening the leadership group established by the firm’s founding principals.']},
  {slug:'welcome-stephanie-tabor', title:'Welcome Stephanie Tabor!', date:'November 17, 2025', image:leaders.find(x=>x.slug==='stephanie-tabor')?.image || projects[0].image, excerpt:'Odyssey welcomed Stephanie Tabor, P.E., ENV SP to the firm.', body:['Odyssey shared a welcome update for Stephanie Tabor, P.E., ENV SP.']},
  {slug:'she-leads-she-develops-fall', title:'She Leads, She Develops Fall Event!', date:'November 17, 2025', image:projects[0].image, excerpt:'A professional-development and leadership event update.', body:['Odyssey highlighted participation in the She Leads, She Develops fall event.']},
  {slug:'tml-conference-2025', title:'TML Conference 2025!', date:'November 17, 2025', image:projects[6].image, excerpt:'Odyssey shared a company update from the 2025 TML Conference.', body:['The firm shared an update connected with the Texas Municipal League conference and its municipal-services community.']},
  {slug:'awbd-fall-seminar', title:'AWBD Fall Seminar', date:'November 17, 2025', image:projects[7].image, excerpt:'A professional association event update.', body:['Odyssey shared an update from the Association of Water Board Directors fall seminar.']},
  {slug:'maitri-patel-pe', title:'Congratulations to Maitri Patel!', date:'May 23, 2025', image:projects[2].image, excerpt:'Maitri Patel earned her Professional Engineer license.', body:['Odyssey congratulated Maitri Patel, P.E. on earning her Professional Engineer license.']},
  {slug:'lamar-cisd-career-fair', title:'Lamar Consolidated ISD Career Fair', date:'March 7, 2025', image:projects[3].image, excerpt:'Odyssey participated in a local education and career event.', body:['The company highlighted its participation in a Lamar Consolidated ISD career fair and its interest in introducing students to engineering careers.']},
  {slug:'awbd-midwinter-conference-2025', title:'AWBD Midwinter Conference!', date:'March 7, 2025', image:projects[8].image, excerpt:'A municipal and special-district industry event update.', body:['Odyssey shared an update from the Association of Water Board Directors midwinter conference.']},
  {slug:'odyssey-is-nine', title:'Odyssey Engineering Group is 9!', date:'January 29, 2025', image:projects[5].image, excerpt:'The company marked its ninth anniversary.', body:['Odyssey celebrated nine years since its founding, recognizing the people, clients and communities that contributed to the firm’s growth.']},
];

export const outreachOrganizations = [
  'AWWA Water Equation','Attack Poverty','Camp Kasem','Child Advocates of Fort Bend','Citizens for Animal Protection','City of Hempstead Turkey Drive','Community Foundation of the Texas Hill Country','Cy Fair HS Band','Family Literacy Network','Fort Bend Hope','East Fort Bend Human Needs Ministry','Family Promise – Humble','Fort Bend Paws','Fort Bend Seniors Meals on Wheels','Girls Inc of Greater Houston','Houston Healthcare for the Homeless','Houston Humane Society','Houston Zoo','Kids Meals on Wheels','Lamar Education Awards Foundation','Living Water','Love 146','Lunches of Love','MD Anderson Foundation','Red Chair Robotics Club of Cy Springs HS','Sleep in Heavenly Peace','St. Jude','Star of Hope','The Brookwood Community','Triumph Over Kids Cancer Foundation','United Methodist Church Love on the Spectrum Event','Westchase Back Pack School Supply Drive'
];

export const resources = {
  Counties: [
    ['Brazoria County','https://www.brazoriacountytx.gov/'],['Fort Bend County','https://www.fortbendcountytx.gov/'],['Fort Bend County Appraisal District','https://www.fbcad.org/'],['Fort Bend County Clerk Search','https://ccweb.co.fort-bend.tx.us/'],['Fort Bend County GIS','https://fbcgis.maps.arcgis.com/'],['Harris County','https://www.harriscountytx.gov/'],['Harris County Appraisal District','https://www.hcad.org/'],['Harris County Public Infrastructure','https://hcpid.org/'],['Harris County Flood Control District','https://www.hcfcd.org/'],['HCFCD Flood Mapping Tool','https://www.harriscountyfemt.org/'],['HCFCD Floodplain Reference Marks','https://www.harriscountyfrm.org/'],['HCFCD Model & Map Management','https://www.m3models.org/'],['Harris County Clerk Web Search','https://www.cclerk.hctx.net/'],['Montgomery County','https://www.mctx.org/']
  ],
  Cities: [
    ['City of Houston','https://www.houstontx.gov/'],['City of Houston GIS','https://opendata-cohpwe.hub.arcgis.com/'],['Chapter 42 – City of Houston','https://library.municode.com/tx/houston/codes/code_of_ordinances'],['Appointment Portal – Houston','https://cohcal.cxmflow.com/'],['City of Conroe','https://www.cityofconroe.org/'],['City of Dayton','https://www.cityofdaytontx.com/'],['City of Katy','https://www.cityofkaty.com/'],['City of Richmond','https://www.richmondtx.gov/'],['City of Rosenberg','https://www.rosenbergtx.gov/'],['City of Sugar Land','https://www.sugarlandtx.gov/'],['City of Tomball','https://tomballtx.gov/']
  ],
  'Agencies & Associations': [
    ['Texas Commission on Environmental Quality','https://www.tceq.texas.gov/'],['TCEQ Current Rules','https://www.tceq.texas.gov/rules'],['Water Utility Database','https://www14.tceq.texas.gov/iwud/'],['Water District Map Viewer','https://www.tceq.texas.gov/gis/iwudview.html'],['Texas Board of Professional Engineers','https://pels.texas.gov/'],['Association of Water Board Directors','https://awbd.org/'],['Brazos River Level – Richmond Gauge','https://water.noaa.gov/']
  ]
};

export const jobs = [
  {title:'Design Engineer', description:'Draft construction plans, perform detailed development design, support feasibility work, construction services and sub-consultant coordination. Odyssey describes this role as suited to candidates with roughly zero to four years of engineering-industry experience.', requirement:'Civil engineering or related degree from an accredited university.'},
  {title:'Project Engineer – Single Family', description:'Coordinate detailed residential design, project sequencing, construction-phase services, bid cycles and agency closeout.', requirement:'At least four years of residential land-development engineering experience; P.E. certification is strongly preferred.'},
  {title:'Project Manager – Single Family, Municipal or Site', description:'Lead client communication, project teams, budgets, schedules, design coordination and delivery within one of Odyssey’s core service groups.', requirement:'Relevant civil engineering and project-management experience; professional licensure is strongly preferred for engineering leadership roles.'},
];

export function bySlug<T extends {slug:string}>(items:T[], slug:string) {
  return items.find(item => item.slug === slug);
}
