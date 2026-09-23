# Odyssey Engineering Group — Next.js Site

A clean-room Next.js reconstruction of the public Odyssey Engineering Group website. The visitor-facing structure, service taxonomy, project categories, public team roster, news/outreach/resources structure, contact information and confirmed social links are modeled from the public `odysseyeg.com` website. The React/Next.js implementation was written from scratch; long-form source copy was paraphrased rather than copied wholesale.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript (strict mode)
- Custom responsive CSS (no UI framework dependency)
- Next/Image for content images
- Route handlers for optional contact-form delivery

## Content included

- Home
- About
- Management Team + 26 profile routes
- Recent Projects + filtering/search + 22 project detail routes
- Six service routes: Single Family, Municipal, Stormwater, Site, GIS and Survey
- Five portfolio-category archive routes
- News archive + pagination + 20 article routes
- Outreach
- Resources
- Join Our Team / Careers
- Contact + map/directions + contact form
- Search dialog across pages, services, projects, team and news
- Mobile/desktop navigation and dropdowns
- LinkedIn, Facebook and Instagram links confirmed from the public Odyssey site
- SEO metadata, canonicals, Open Graph/Twitter metadata, robots, sitemap and JSON-LD
- Accessible labels, focus states, skip navigation and responsive breakpoints

The data/content layer lives primarily in `lib/siteData.ts` so names, project information, links and media references can be updated without restructuring the page components.

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

Production check:

```bash
npm run typecheck
npm run build
npm start
```

## Contact form

The contact form uses Nodemailer with a standard SMTP mailbox. No Resend API is used.

Configure these variables locally in `.env.local` and in Vercel Environment Variables:

```env
SMTP_HOST=
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=justin@odysseyengineeringgrp.com
SMTP_PASS=
SMTP_FROM=Odyssey Engineering Group <justin@odysseyengineeringgrp.com>
CONTACT_TO_EMAIL=justin@odysseyengineeringgrp.com
```

Use the SMTP host, port, username, and password supplied by the mailbox provider for `odysseyengineeringgrp.com`. Port 465 normally uses `SMTP_SECURE=true`; port 587 normally uses `SMTP_SECURE=false`.

Form submissions are sent to `justin@odysseyengineeringgrp.com`. The visitor's email is assigned to `replyTo`, so replying to the notification replies directly to the person who submitted the form.

## Media

No screenshots are used as project or team imagery. The implementation references public Odyssey media URLs discovered on the live site and permits only `www.odysseyeg.com/wp-content/uploads/**` through `next.config.ts`. A local placeholder SVG is used when a confirmed headshot was not available.

The execution environment used to assemble this package could not download those image binaries (`odysseyeg.com` asset download failed), so the original public assets are **referenced remotely rather than redistributed inside this archive**. Before a production launch, confirm that you have permission to redistribute any third-party/original media you want to copy locally. See `MEDIA_SOURCES.md` for the complete media URL inventory.

## QA performed in the build environment

- 30 TS/TSX source files parsed/transpiled: 0 syntax errors.
- TypeScript QA pass with local framework type stubs: passed.
- `app/globals.css` parsed successfully with PostCSS.
- Duplicate slugs checked across services/projects/team/news: none found.
- Placeholder/debug scan: no Lorem Ipsum, TODO/FIXME, `href="#"`, `console.log`, `console.error`, or `example.com` placeholders.
- 62 unique public Odyssey media references audited.
- Dynamic static-parameter routes are defined for services, projects, team profiles, news articles, project category archives and news pagination.

### Environment limitation affecting npm/build

The requested `npm install` was started in the assembly environment, but the environment cannot resolve `registry.npmjs.org` (`EAI_AGAIN getaddrinfo`). Because dependencies cannot be downloaded there, `npm run build` terminates with `next: not found`. This is an environment/network limitation rather than a reported Next.js compiler result.

A bootstrap `package-lock.json` is included so the expected root dependency specification travels with the project; the first successful `npm install` on an internet-connected machine will resolve the full dependency graph and update the lockfile. For reproducible production use, commit that fully hydrated lockfile after the successful install/build.

## Notes

- The default canonical/site URL is `https://www.odysseyeg.com`. Change `metadataBase`, page metadata helper and sitemap base if deploying this implementation on another domain.
- The public source changes over time. Recheck personnel, news, careers, resource URLs and social links before production publication.
- This package is an independent implementation. It does not include WordPress, source WordPress plugins, the original CMS database, or private/backend material from Odyssey.
