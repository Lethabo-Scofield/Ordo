# Ordo - Marketing Site

Marketing site for **Ordo**, an AI-powered execution system that interprets instructions, executes workflows across your tools, verifies every output, and keeps a full audit trail.

Built with **React + Vite + Tailwind CSS**, deployed on **Vercel**.

---

## Project structure

```
artifacts/duna-clone/
├── api/
│   └── schedule-demo.ts          Vercel serverless function (Resend email)
├── public/
│   ├── favicon.png
│   ├── opengraph.jpg
│   └── images/                   Site imagery (hero, products, news, etc.)
├── src/
│   ├── main.tsx                  App entry
│   ├── App.tsx                   Router (wouter)
│   ├── index.css                 Tailwind + design tokens
│   ├── pages/
│   │   ├── Home.tsx              Landing page composition
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── layout/               Site chrome
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/             Marketing page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── LogoStrip.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Testimonial.tsx
│   │   │   ├── AISection.tsx
│   │   │   ├── ProductSection.tsx
│   │   │   ├── products.data.ts  Tab content for ProductSection
│   │   │   ├── Security.tsx
│   │   │   └── News.tsx
│   │   ├── demo/                 Schedule-a-demo feature
│   │   │   └── ScheduleDemoDialog.tsx
│   │   └── ui/                   shadcn/ui primitives
│   ├── hooks/
│   └── lib/
├── index.html
├── vite.config.ts
├── vercel.json                   Vercel build + routing config
└── package.json
```

### Conventions

- **Pages** orchestrate sections; they don't contain layout details.
- **Sections** are full-width landing-page blocks. Heavy data lives in a co-located `*.data.ts` file.
- **`components/demo/`** is a feature folder. Add similar folders (`auth/`, `pricing/`, etc.) for new product-level features.
- **`components/ui/`** is reserved for design-system primitives (shadcn). Don't put product code here.
- Headings are sentence-case and never use em dashes - use ` - ` (hyphen with spaces).

---

## Local development

```bash
pnpm install                                 # from monorepo root
pnpm --filter @workspace/duna-clone dev      # http://localhost:5173
```

Set `BASE_PATH` (defaults to `/`) and `PORT` (defaults to `5173`) only if you need to override.

### Schedule-demo form

The demo form posts to `/api/schedule-demo`, a Vercel serverless function that emails the request via Resend. Requires:

| env var            | purpose                                        |
| ------------------ | ---------------------------------------------- |
| `RESEND_API_KEY`   | Resend API key                                 |
| `CAREERS_TO_EMAIL` | Inbox that receives demo requests              |

In local dev (Vite only), the `/api` endpoint isn't served - the form will show a network error on submit. This works on Vercel.

---

## Deploying to Vercel

Two supported setups:

### 1. Vercel project root = `artifacts/duna-clone` (recommended)

Already configured via `vercel.json`:

- `buildCommand` traverses to the monorepo root, installs all workspaces, then runs `pnpm --filter @workspace/duna-clone build`.
- `outputDirectory` is `dist/public` (Vite output).
- SPA rewrites send everything except `/api/*` to `index.html` so client-side routing (wouter) works.
- Long-cache headers are set for `/assets/*` and `/images/*`.

In Vercel project settings, set the env vars `RESEND_API_KEY` and `CAREERS_TO_EMAIL`.

### 2. Vercel project root = monorepo root

Override the build command in Vercel UI:

```
pnpm install --no-frozen-lockfile && pnpm --filter @workspace/duna-clone build
```

Set output directory to `artifacts/duna-clone/dist/public`.

---

## Scripts

| Script            | What it does                          |
| ----------------- | ------------------------------------- |
| `pnpm dev`        | Vite dev server                       |
| `pnpm build`      | Production build to `dist/public`     |
| `pnpm serve`      | Preview the production build locally  |
| `pnpm typecheck`  | Run TypeScript without emitting       |
