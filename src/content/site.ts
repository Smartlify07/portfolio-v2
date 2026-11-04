import type { SiteContent } from './site.types'

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
    headline: 'I build the front\u00A0end of products.',
    lead: 'Frontend-heavy product engineer. I take a feature from a rough idea or a design file to something shipped — fast, accessible, and easy for the next person to change.',
  },

  about: {
    intro:
      'Most of my day is React, TypeScript and CSS. The rest is untangling a data flow so the interface stops guessing.',
    detail:
      'I like the work that sits between product and implementation: turning a rough spec into something testable, making the loading state honest, keeping the bundle from creeping. I care about the parts people feel — speed, clarity, and never losing their work.',
    focus: [
      'Product delivery',
      'React & TypeScript',
      'Performance',
      'Accessibility',
      'Data fetching & state',
      'Design systems',
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
    { label: 'GitHub', href: 'https://github.com/', handle: '@obinna' },
    { label: 'LinkedIn', href: 'https://linkedin.com/', handle: 'in/obinna' },
    { label: 'X', href: 'https://x.com/', handle: '@obinna' },
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
      kicker: 'Advocacy, training and donations',
      label: 'NONPROFIT',
      type: 'Nonprofit platform',
      year: '2026',
      role: 'Full-stack build',
      summary:
        'A nonprofit platform for people facing chronic illness, disability and financial hardship — programmes, consultations and donations.',
      overview:
        'Modern Advocates needed more than a brochure. The site runs the organisation’s front door: it explains the mission, books free consultations, enrols people into AI and workforce training, and takes donations with the fee breakdown shown up front. The client supplied the design and I built it with their design team — but the interesting half sits behind the login: Better Auth sessions, roles and RBAC, course enrolment and progress, a Stripe donation flow, and separate member and admin views on Neon Postgres.',
      scope: [
        'Consultation booking and member login entry points.',
        'Auth with Better Auth, roles and role-based access across member and admin views.',
        'Training programmes with enrolment, lesson progress and session detail.',
        'Stripe donation flow with preset amounts, frequency, fee breakdown and live total.',
        'Admin-side course and member management on Neon Postgres.',
        'Community stories, FAQ, newsletter signup and full contact details.',
      ],
      stack: ['Next.js', 'React', 'Better Auth', 'Stripe', 'Neon Postgres', 'Vercel'],
      url: 'https://www.modernadvocatesinc.org',
      image: '/work/modern-advocates.jpg',
      gallery: [
        {
          src: '/work/modern-advocates/01-pathways.jpg',
          width: 1440,
          height: 1000,
          alt: 'Three pathway cards: Restore Hope, Build Independence and Never Navigate Alone',
          caption:
            'Three pathways — restore hope, build independence, never navigate alone.',
          size: 'inset',
        },
        {
          src: '/work/modern-advocates/02-values.jpg',
          width: 1440,
          height: 1000,
          alt: 'Pinned values section showing Empowering Independence',
          caption: 'Values told as a pinned scroll sequence, one promise at a time.',
          size: 'wide',
        },
        {
          src: '/work/modern-advocates/03-donation.jpg',
          width: 1440,
          height: 1000,
          alt: 'Donation form with preset amounts, frequency and a live total',
          caption:
            'Donation flow: preset amounts, frequency, fee breakdown and a live total before Stripe checkout.',
          size: 'inset',
        },
        {
          src: '/work/modern-advocates/04-faq.jpg',
          width: 1440,
          height: 1000,
          alt: 'Frequently asked questions section',
          caption: 'FAQ built from the questions people ask before booking a consultation.',
          size: 'wide',
        },
        {
          src: '/work/modern-advocates/05-mobile.jpg',
          width: 390,
          height: 1400,
          alt: 'Modern Advocates homepage at mobile width',
          caption:
            'Mobile hero with the menu collapsed and the consultation CTA one tap away.',
          size: 'phone',
        },
      ],
      accent: ['#5B4BE8', '#A78BFA'],
    },
    {
      slug: 'antara',
      title: 'Antara',
      kicker: 'Collaboration tool for creative teams',
      label: 'PRODUCT',
      type: 'Product marketing',
      year: '2026',
      role: 'Design & build',
      summary:
        'A product site for a creative-project platform — positioning, feature walkthroughs, pricing and sign-up.',
      overview:
        'Antara keeps projects, assets, versions and approvals in one place. I designed and built the site end to end: the layout system, the product frame that anchors the hero, and every feature block. Instead of dropping in flat screenshots, the product surfaces are rebuilt in React so they stay crisp at any width — a decision that costs more up front and pays off every time the page resizes.',
      scope: [
        'Hero with a rendered product frame instead of a flat screenshot.',
        'Feature sections covering assets, versions, approvals and assignments.',
        'Three-tier pricing with a free entry point.',
        'FAQ, login and sign-up entry points.',
        'Responsive marketing layout with its own small design system.',
      ],
      stack: ['React', 'Vite'],
      url: 'https://antara-lyart.vercel.app',
      image: '/work/antara.jpg',
      gallery: [
        {
          src: '/work/antara/01-features.jpg',
          width: 1440,
          height: 1000,
          alt: 'Feature cards for library, version tracking and approvals',
          caption: 'Feature blocks: shared library, version tracking and in-app approvals.',
          size: 'wide',
        },
        {
          src: '/work/antara/02-collaboration.jpg',
          width: 1440,
          height: 900,
          alt: 'Assignments and reminders feature section',
          caption:
            'Assignments and reminders, shown with the product surfaces that carry them.',
          size: 'inset',
        },
        {
          src: '/work/antara/03-pricing.jpg',
          width: 1440,
          height: 1000,
          alt: 'Three-tier pricing table',
          caption: 'Three pricing tiers with a free entry point and a highlighted middle plan.',
          size: 'wide',
        },
        {
          src: '/work/antara/04-faq.jpg',
          width: 1440,
          height: 880,
          alt: 'FAQ section and closing call to action',
          caption: 'FAQ and the closing call to action, before the footer.',
          size: 'inset',
        },
        {
          src: '/work/antara/05-mobile.jpg',
          width: 390,
          height: 1400,
          alt: 'Antara marketing page at mobile width',
          caption: 'The marketing page at 390px — the product frame scales instead of cropping.',
          size: 'phone',
        },
      ],
      accent: ['#1C1C1C', '#525252'],
    },
  ],

  seo: {
    title: 'Obinna Anosike — Frontend Engineer',
    description:
      'Frontend engineer building product interfaces in React and TypeScript — fast, accessible, and shipped.',
  },
}
