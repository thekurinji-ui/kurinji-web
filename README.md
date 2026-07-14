# The Kurinji — Website

Ecosystem hub for **The Kurinji** (PT Kurinji Virtual Nusantara) — `kurinji.asia`.

## Stack

Next.js 15 (App Router) · TypeScript (strict) · Tailwind CSS · Framer Motion ·
Lucide React · Vercel Analytics & Speed Insights.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. This scaffold was generated without network access,
so `npm install` has **not** been run yet — do that first.

## Folder structure

```
src/
  app/                  Routes (App Router). One folder per page.
    layout.tsx          Root layout: fonts, metadata, header/footer, analytics.
    page.tsx             Homepage.
    sitemap.ts           Dynamic sitemap.xml.
    robots.ts            Dynamic robots.txt.
    about/ ecosystem/ blog/ contact/
    privacy-policy/ terms-and-conditions/
  components/
    layout/              Header, footer.
    sections/             Homepage sections (hero, ecosystem grid, ...).
    ui/                   Small reusable primitives (button, etc.) — shadcn/ui style.
  config/
    site.ts              Org info, nav links, socials, footer legal links.
    products.ts          ⭐ Single source of truth for every ecosystem product.
  lib/
    utils.ts             cn() class-merging helper.
    metadata.ts           Page metadata + Organization JSON-LD builders.
  types/
    product.ts            Product shape used by config/products.ts.
```

## Adding a new product

Per the blueprint's scalability requirement, product data lives in one place:

```ts
// src/config/products.ts
{
  slug: "new-product",
  name: "New Product",
  tagline: "One-line description.",
  url: "https://newproduct.kurinji.asia",
  status: "coming-soon",
}
```

The homepage ecosystem grid, the ecosystem page, and the footer all render
from this array automatically — no component changes needed.

## Design tokens

Colors and type live in `tailwind.config.ts`, named after the Neela Kurinji
flower (blue-violet, blooms once every 12 years across the Nilgiri hills):
`ink` (text), `paper` (background), `bloom` / `bloom-deep` (accent), `mist`
(hairlines & tints), `muted` (secondary text). Headings use Fraunces, body
text uses Inter, loaded via `next/font` in `app/layout.tsx`.

## Not yet built

This pass covers the scaffold, config, layout shell, and homepage. Still
open, per the blueprint: Vision/Roadmap/Latest Articles homepage sections,
full About/Philosophy copy, blog data source, and the contact form. Each
has a `TODO` comment marking where it plugs in.
