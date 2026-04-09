# Masha M. Stephen — Portfolio Maintenance Guide

## Quick Start (New Laptop)

```bash
# Prerequisites: Install Node.js v18+ from https://nodejs.org
git clone https://github.com/mashamstephen/my-portfolio.git
cd my-portfolio
npm install
npm run dev
# Open http://localhost:3000
```

---

## Content Updates

All content lives in **two places** — no code changes needed.

### 1. Text Content → `src/data/portfolio.ts`

| Section | What to edit |
|---|---|
| Your info | `personalInfo` — name, title, bio, tagline, profileImage |
| Social links | `socials` — github, linkedin, email, twitter |
| Nav links | `navLinks` — add/remove/rename sections |
| Tech icons | `techs` — add `{ name, icon }` entries |
| Portfolio | `portfolioItems` — title, category (Apps/Analytics/Websites), description, image, link |
| Services | `services` — title, description, icon |
| Blog posts | `blogPosts` — title, slug, category, excerpt, date, image, content |
| Hobbies | `hobbies` — title, image, description |

### 2. Images → `public/images/`

Drop files here and reference as `/images/filename.png` in the data file.

---

## Common Tasks

### Add a portfolio project
```ts
// In portfolioItems array:
{
  title: "My App",
  category: "Apps",              // "Apps" | "Analytics" | "Websites"
  description: "Short description",
  image: "/images/my-app.png",   // screenshot in public/images/
  link: "https://my-app.com",    // opens in new tab
},
```

### Add a blog post
```ts
// In blogPosts array:
{
  title: "My Article Title",
  slug: "my-article-title",      // becomes /blog/my-article-title
  category: "Data Science",      // "Data Science" | "Marketing" | "Supply Chain"
  excerpt: "Short summary...",
  date: "2026-04-08",
  image: "/images/article.png",
  content: `
## Section Heading
Your markdown content here...
- Bullet points work
- Like this

*Italic text*
  `,
},
```

### Add a tech icon
```ts
// In techs array:
{ name: "Streamlit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
```
Browse all icons at: https://devicon.dev/
For icons not on Devicon: https://img.icons8.com/color/48/ICON-NAME.png

### Update profile photo
Replace `public/images/profile-placeholder.svg` with your photo (jpg/png).
Update `personalInfo.profileImage` path in `portfolio.ts`.

### Add a social link
Edit the `socials` object in `portfolio.ts`, then add the icon in `Footer.tsx` and `Hero.tsx`.

---

## Hosting

### Recommended: Vercel (Free)

1. Push code to GitHub: `https://github.com/mashamstephen/my-portfolio`
2. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
3. Click **Import Project** → Select your repo
4. Click **Deploy** — done
5. URL: `https://my-portfolio-xxxx.vercel.app`

Auto-deploys on every `git push`. Free HTTPS. Free custom domain support.

### Alternative: Netlify (Free)

1. Go to [netlify.com](https://netlify.com) → Sign up with GitHub
2. Click **New site from Git** → Select repo
3. Build command: `npm run build`, Publish directory: `.next`
4. Deploy — done

### Alternative: GitHub Pages (Free, static export)

Requires adding `output: 'export'` to `next.config.ts`.
URL: `https://mashamstephen.github.io`

### Alternative: Azure Static Web Apps / AWS Amplify

Both have free tiers and auto-deploy from GitHub.

### Custom Domain

Buy a domain (~$10/year) from Namecheap, Cloudflare, or GoDaddy.
Point it to your hosting provider (Vercel/Netlify give step-by-step instructions).
HTTPS is automatic and free.

---

## Project Structure

```
my-portfolio/
├── public/images/          ← Your images (profile, projects, hobbies)
├── src/
│   ├── app/
│   │   ├── layout.tsx      ← Root layout (fonts, metadata)
│   │   ├── page.tsx        ← Main page (assembles all sections)
│   │   ├── globals.css     ← Theme, animations
│   │   └── blog/[slug]/    ← Individual blog post pages
│   ├── components/         ← All UI components
│   └── data/
│       └── portfolio.ts    ← ALL YOUR CONTENT (edit this)
├── package.json            ← Dependencies (run npm install)
└── MAINTENANCE.md          ← This file
```

---

## Useful Commands

```bash
npm run dev       # Start dev server (http://localhost:3000)
npm run build     # Build for production (checks for errors)
npm start         # Run production build locally
```
