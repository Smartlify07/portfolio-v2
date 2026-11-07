import type { SiteContent } from './site.types.ts'

/**
 * ─────────────────────────────────────────────────────────────
 *  Everything visible on the site comes from this file.
 *
 *  Projects point at real, live sites. Each case study carries a
 *  `gallery` of screenshots in /public/work/<slug>/ with a caption
 *  and width variant per shot — add files there, then add entries.
 * ─────────────────────────────────────────────────────────────
 */
export const site: SiteContent = {
  name: 'Obinna Anosike',
  role: 'Frontend Engineer',
  email: 'obinna.anosike.dev@gmail.com',
  location: 'Lagos, Nigeria',
  timeZone: 'Africa/Lagos',

  hero: {
    eyebrow: 'Frontend Engineer — Lagos, NG',
    lead: 'I build thoughtful, intuitive interfaces that turn ideas into functional digital products.',
    display: [
      [
        { kind: 'text', text: 'I’m' },
        { kind: 'text', text: 'Obinna,', italic: true },
        {
          kind: 'chip',
          src: '/images/obinna.jpg',
          thumb: '/images/obinna-thumb.jpg',
          alt: 'Obinna Anosike, frontend engineer based in Lagos',
          caption: 'Obinna Anosike',
          aspect: [3, 4],
        },
      ],
      [
        { kind: 'text', text: 'a Frontend' },
        {
          kind: 'chip',
          src: '/work/antara/01-features.jpg',
          alt: 'Antara feature section with a shared asset library and approvals',
          caption: 'Antara — projects, deliverables and approvals in one workspace',
          focus: '14% 66%',
          zoom: 2.2,
          aspect: [1440, 1000],
        },
        { kind: 'text', text: 'Engineer', italic: true },
      ],
      [
        { kind: 'text', text: 'based in' },
        { kind: 'text', text: 'Lagos', italic: true },
        {
          kind: 'chip',
          src: '/images/lagos-danfo.jpg',
          thumb: '/images/lagos-danfo-thumb.jpg',
          alt: 'A yellow danfo bus parked on a Lagos street under a footbridge',
          caption: 'Danfo buses on the street of Lagos',
          focus: '46% 56%',
          aspect: [3, 2],
          credit: 'Kaizenify / Wikimedia Commons, CC BY-SA 4.0',
          creditHref:
            'https://commons.wikimedia.org/wiki/File:Danfo_buses_on_the_street_of_Lagos_11_38_26_657000.jpeg',
        },
      ],
    ],
    visuals: ['sandra-benard', 'antara'],
  },

  about: {
    intro:
      'Most of my day is React, TypeScript and CSS. The rest is untangling a data flow until the interface stops guessing.',
    detail:
      'I build interfaces that are honest about what they’re doing: loading states that mean it, errors a person can act on, components that hold once a team starts depending on them. Speed, clarity and never losing your work are the parts people actually feel. Off the clock I play football badly, support Chelsea, and build side projects nobody asked for. Batman: The Animated Series is on in the background. I stopped following City when Pep left. The game’s gone.',
    focus: [
      'Product engineering',
      'Interface states',
      'Data fetching & state',
      'Design systems',
      'Performance budgets',
      'Accessibility',
    ],
  },

  stack: [
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'TanStack Query',
    'Motion',
    'Vite',
    'Node.js',
    'PostgreSQL',
    'Playwright',
    'Git',
    'Figma',
  ],

  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ],

  socials: [
    { label: 'GitHub', href: 'https://github.com/Smartlify07/', handle: '@Smartlify07' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/obinna-anosike-3326aa318/',
      handle: 'in/obinna-anosike',
    },
    { label: 'X', href: 'https://x.com/Smartlify01', handle: '@Smartlify01' },
    { label: 'Email', href: 'mailto:obinna.anosike.dev@gmail.com', handle: 'obinna.anosike.dev@gmail.com' },
  ],

  projects: [
    {
      slug: 'sandra-benard',
      title: 'Sandra Benard',
      kicker: 'Portfolio for a product designer',
      label: 'CLIENT',
      type: 'Designer portfolio',
      year: '2024',
      role: 'Frontend build',
      summary:
        'A personal site for a product designer, project manager and writer — case studies, work history, reviews and a quote request in one place.',
      overview:
        'Sandra works across three disciplines at once: product design, project management and writing. The site has to say that in one screen, then prove it. She brought the design; I built it alongside her design team and matched those layouts pixel for pixel across breakpoints, then wired the quote form straight through to her inbox. Case studies, work history and reviews are hardcoded content, so the site stays cheap to host and editable in one file.',
      scope: [
        'Hero and services marquee that establish all three disciplines above the fold.',
        'Project cards with starting prices, each opening into a full case study.',
        'Work-history timeline with role, industry and skills per engagement.',
        'Testimonial carousel and an FAQ written to answer buying questions.',
        'Quote form that delivers to Sandra’s inbox, plus contact and social links.',
      ],
      stack: ['Next.js', 'React'],
      url: 'https://www.sandrabenard.com',
      image: '/work/sandra-benard.jpg',
      gallery: [
        {
          src: '/work/sandra-benard/01-projects.jpg',
          width: 1440,
          height: 1250,
          alt: 'Selected projects section with project cards and starting prices',
          caption:
            'Selected projects, each with a starting price and a route into the full case study.',
          size: 'wide',
        },
        {
          src: '/work/sandra-benard/02-case-cards.jpg',
          width: 1440,
          height: 970,
          alt: 'Case-study preview cards showing the delivered screens for each project',
          caption: 'Case-study previews showing the screens delivered for each project.',
          size: 'inset',
        },
        {
          src: '/work/sandra-benard/03-work-history.jpg',
          width: 1440,
          height: 1200,
          alt: 'Work-history timeline with role, industry and skills per engagement',
          caption:
            'Work history told as a timeline — role, industry and skills for every engagement.',
          size: 'wide',
        },
        {
          src: '/work/sandra-benard/04-contact.jpg',
          width: 1440,
          height: 930,
          alt: 'Contact section with social links, email and phone actions',
          caption:
            'Closing block: socials, email and phone, with the quote form one section above.',
          size: 'inset',
        },
        {
          src: '/work/sandra-benard/05-mobile.jpg',
          width: 390,
          height: 1400,
          alt: 'Sandra Benard homepage at mobile width',
          caption: 'The same page at 390px — single column, same hierarchy.',
          size: 'phone',
        },
      ],
      accent: ['#1F3D32', '#7C9B88'],
    },
    {
      slug: 'prince-ugboga',
      title: 'Prince Ugboga',
      kicker: 'Product designer, booking-first',
      label: 'CLIENT',
      type: 'Designer portfolio',
      year: '2024',
      role: 'Frontend build',
      summary:
        'A booking-first site for a product designer: availability, services and social proof all land in the first screen.',
      overview:
        'Prince sells design work directly, so the site is built to convert rather than to browse. The opening screen carries availability, a price anchor, a client quote and two calls to action — one of them opens Calendly. Everything below it is proof: selected work, services, background and more testimonials. He supplied the design; I built it alongside his design team, pixel for pixel, against the live booking flow.',
      scope: [
        'Split hero with availability badge, price anchor and direct Calendly booking.',
        'Client testimonial and credibility block beside the intro.',
        'Selected-work grid with eight project previews.',
        'Services, about and further testimonial sections.',
        'Resume download and direct contact paths.',
      ],
      stack: ['React', 'Vite'],
      url: 'https://princeugboga.ng',
      image: '/work/prince-ugboga.jpg',
      gallery: [
        {
          src: '/work/prince-ugboga/01-selected-work.jpg',
          width: 960,
          height: 700,
          alt: 'Selected work grid with project cards for Aora, Invysion, Laxmii and QuantCore',
          caption: 'Selected work — eight projects, tagged by platform and discipline.',
          size: 'wide',
        },
        {
          src: '/work/prince-ugboga/02-selected-work-2.jpg',
          width: 960,
          height: 680,
          alt: 'Second half of the selected work grid with Tabbio and Pump DB',
          caption: 'The grid continues past the fold; every card opens the full case study.',
          size: 'inset',
        },
        {
          src: '/work/prince-ugboga/03-contact.jpg',
          width: 960,
          height: 465,
          alt: 'Closing call to action and contact details in the footer',
          caption:
            'Closing call to action with LinkedIn and Upwork, then direct contact details.',
          size: 'wide',
        },
        {
          src: '/work/prince-ugboga/04-mobile.jpg',
          width: 390,
          height: 1450,
          alt: 'Prince Ugboga homepage at mobile width',
          caption: 'At 390px the hero stacks below the intro, booking buttons still first.',
          size: 'phone',
        },
      ],
      accent: ['#2B1B4A', '#8B5CF6'],
    },
    {
      slug: 'modern-advocates',
      title: 'Modern Advocates',
      kicker: 'Advocacy platform with a learning app',
      label: 'NONPROFIT',
      type: 'Nonprofit platform',
      year: '2026',
      role: 'Full-stack build',
      summary:
        'A nonprofit platform with a real learning product behind the marketing site — OTP sign-in, course enrolment, Stripe checkout, a lesson player and an admin console.',
      overview:
        'Modern Advocates needed more than a brochure. The public site is the front door, but the product sits behind it: email-OTP sign-in, roles and RBAC, course enrolment, a Stripe checkout, a lesson player with progress, and an admin console for members, courses, teams and support. The client supplied the design; I built the platform end to end on Next.js, Better Auth and Neon Postgres — including the role boundaries that keep a member out of the admin console and an admin out of the checkout.',
      scope: [
        'Email-OTP sign-in with role-based routing for members and admins.',
        'Course catalogue and detail pages, with Stripe checkout and a live total.',
        'Member dashboard, My Learning and a player with module progress and completion state.',
        'Admin dashboard with member and course counts, searchable users and enrolment data.',
        'Course builder covering basic info, advanced settings, curriculum and publishing.',
        'Team, support tickets, plus the public programmes, donations and consultation flows.',
      ],
      stack: ['Next.js', 'React', 'Better Auth', 'Stripe', 'Neon Postgres', 'Vercel'],
      url: 'https://www.modernadvocatesinc.org',
      image: '/work/modern-advocates.jpg',
      gallery: [
        {
          src: '/work/modern-advocates/01-admin-dashboard.jpg',
          width: 1440,
          height: 1000,
          alt: 'Admin dashboard with member and course counts and a user list',
          caption:
            'Admin dashboard: member and course counts, with the user list and enrolment status.',
          size: 'wide',
        },
        {
          src: '/work/modern-advocates/02-admin-users.jpg',
          width: 1440,
          height: 1000,
          alt: 'Admin user management table with search, enrolment counts and status',
          caption:
            'User management — search, enrolment counts, status and last login, exportable.',
          size: 'inset',
        },
        {
          src: '/work/modern-advocates/03-course-editor.jpg',
          width: 1440,
          height: 1000,
          alt: 'Course builder with basic information, advanced settings, curriculum and publishing steps',
          caption:
            'Course builder: basic information, advanced settings, curriculum and publishing.',
          size: 'wide',
        },
        {
          src: '/work/modern-advocates/04-member-dashboard.jpg',
          width: 1440,
          height: 1000,
          alt: 'Member dashboard with the courses they own and a continue-learning button',
          caption:
            'Member dashboard: the courses they own, with a continue-learning entry point.',
          size: 'inset',
        },
        {
          src: '/work/modern-advocates/05-course-player.jpg',
          width: 1440,
          height: 1000,
          alt: 'Course player with video, module progress and a lesson list',
          caption: 'Course player: module progress, lesson list and per-lesson completion.',
          size: 'wide',
        },
      ],
      accent: ['#5B4BE8', '#A78BFA'],
    },
    {
      slug: 'antara',
      title: 'Antara',
      kicker: 'Collaboration app for creative teams',
      label: 'PRODUCT',
      type: 'Collaboration product',
      year: '2026',
      role: 'Design & build',
      summary:
        'A collaboration product for creative teams — projects, deliverables, versions and approvals — with the marketing site that sells it.',
      overview:
        'Antara keeps a creative project’s briefs, deliverables, versions and approvals in one workspace instead of scattered across chat and drives. I designed and built both halves: the marketing site and the workspace app behind it. The app runs multi-tenant workspaces with projects, deliverables, owners, deadlines, version history, comments, tasks, a shared library and a review queue. The product surfaces on the marketing page are rendered in React rather than dropped in as screenshots, so they stay sharp at every width.',
      scope: [
        'Marketing site with a rendered product frame, feature sections, pricing and FAQ.',
        'Multi-tenant workspaces with projects, status, members, tags and dates.',
        'Deliverables with owners, deadlines, production state and version history.',
        'Comments, tasks and a workspace-wide asset library.',
        'Review queue for client approvals, plus workspace onboarding and team management.',
        'Responsive app shell and marketing layout with their own small design system.',
      ],
      stack: ['React', 'Vite'],
      url: 'https://antara-lyart.vercel.app',
      image: '/work/antara.jpg',
      gallery: [
        {
          src: '/work/antara/01-projects.jpg',
          width: 1440,
          height: 1000,
          alt: 'Workspace projects board with three projects, status, members and task counts',
          caption: 'Workspace projects with status, members, task counts and comments.',
          size: 'wide',
        },
        {
          src: '/work/antara/02-work.jpg',
          width: 1440,
          height: 1000,
          alt: 'Project work panel listing deliverables with production state and a version panel',
          caption:
            'Project work: deliverables, ownership and version history in one panel.',
          size: 'inset',
        },
        {
          src: '/work/antara/03-library.jpg',
          width: 1440,
          height: 1000,
          alt: 'Workspace library with a folder per project and asset counts',
          caption:
            'Workspace library: every project folder with its asset count and last activity.',
          size: 'wide',
        },
        {
          src: '/work/antara/04-library-assets.jpg',
          width: 1440,
          height: 1000,
          alt: 'A project folder opened to show its files as an asset grid',
          caption:
            'Opening a folder: every file the project can account for, with its type and approval state.',
          size: 'inset',
        },
        {
          src: '/work/antara/05-asset.jpg',
          width: 1440,
          height: 1000,
          alt: 'Asset detail with owner, creation date, deliverable, external link and version history',
          caption:
            'Asset record: where the file came from, which deliverable owns it, and its versions.',
          size: 'wide',
        },
      ],
      accent: ['#1C1C1C', '#525252'],
    },
  ],

  seo: {
    url: 'https://smartlify.xyz',
    image: '/images/og.png',
    locale: 'en_NG',
    keywords: [
      'Obinna Anosike',
      'frontend engineer Lagos',
      'React developer Nigeria',
      'TypeScript developer',
      'frontend portfolio',
      'product interface engineering',
      'design systems',
      'web performance',
      'accessibility',
      'Next.js developer',
    ],
    title: 'Obinna Anosike — Frontend Engineer',
    description:
      'Frontend engineer building product interfaces in React and TypeScript — fast, accessible, and shipped.',
  },
}
