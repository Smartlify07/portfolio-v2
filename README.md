# Obinna Anosike — portfolio

A minimal frontend engineer's portfolio: one scrolling home page, a case study
per project, and micro-interactions kept to 200–300 ms.

Stack: Vite · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui (radix-nova) ·
Motion · React Router.

## Run

```bash
pnpm install
pnpm dev        # http://localhost:5173
```

## Edit content

Everything visible lives in **`src/content/site.ts`** — name, hero copy, about,
stack, socials and the project list. Types are in `src/content/site.types.ts`.
Adding a project is one object in `projects`; its route, poster, case study and
"next project" link are generated from it.

Project copy comes from the live sites plus the build notes in each project
object. Replace the email and social handles before publishing.

## Screenshots

Two sets, both under **`public/work/`**:

- **Posters** — `<slug>.jpg` at 1440×900 (16:10). Used by the home hover preview
  and the top of each case study. A missing poster falls back to a gradient.
- **Galleries** — `public/work/<slug>/01-…jpg`, one folder per project. Each shot
  is a 1440px-wide desktop capture or a 390px mobile capture.

Add a gallery shot by dropping the file in the folder and appending an entry to
that project's `gallery` array:

```ts
{
  src: '/work/antara/06-footer.jpg',
  width: 1440,
  height: 520,
  alt: 'Footer and closing call to action',
  caption: 'Closing call to action, before the footer.',
  size: 'wide', // 'wide' | 'inset' | 'phone'
}
```

`width` and `height` reserve space so nothing shifts while the image loads.
`inset` shots alternate sides; `phone` caps the width. Posters are lazy on the
case study and quietly preloaded on the home page once the browser is idle, so
the hover preview is instant.

## Structure

```
src/
  content/      site copy + types (the only file you need to edit)
  components/
    ui/         shadcn registry primitives — do not hand-edit
    common/     shared headings, copy button, live clock, 404 block
    motion/     Reveal, Magnetic
    layout/     header, footer, nav link, scroll handling
    home/       hero, work list + cursor preview, about, contact
    work/       poster, gallery, meta grid, case study body, next project
  hooks/        copy, clock, scroll, magnetic, follow-cursor, image preload
  lib/          clipboard, time, url, seo, cn
  pages/        home, work detail, 404
```

Rules this repo follows: no component over 100 lines, no business logic in JSX,
logic extracted into `hooks/` and `lib/`.

## Theme

Light is the default, independent of the operating system. The `.dark` token set
is still in `src/index.css`; add `class="dark"` to `<html>` to switch themes.

## Motion

`LazyMotion` + `m` keeps the animation bundle small. Every entrance animation
respects `prefers-reduced-motion`. Hover previews are cursor-only, so touch
devices never get a ghost card.

## Checks

```bash
pnpm exec tsc -b     # typecheck
pnpm lint            # oxlint
pnpm build           # production build
```

## Deploy

Static build in `dist/`. `vercel.json` includes the SPA rewrite so deep links
like `/work/antara` resolve on a hard refresh.
