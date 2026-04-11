# 🛠️ Portfolio Website — Full Maintenance Guide

## 📁 Project Structure Overview

```
my-portfolio/
├── public/                        ← Static files (images, favicon)
│   ├── favicon.ico
│   └── images/
│       ├── blog/                  ← Blog post images
│       ├── profile-placeholder.jpeg
│       ├── project-placeholder.svg
│       └── hobby-placeholder.svg
├── src/
│   ├── app/                       ← Pages (Next.js App Router)
│   │   ├── layout.tsx             ← Site-wide layout, metadata, fonts
│   │   ├── page.tsx               ← Homepage (assembles all sections)
│   │   ├── globals.css            ← Global styles
│   │   └── blog/[slug]/page.tsx   ← Individual blog post page
│   ├── components/                ← UI components (one per section)
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TechWaveMarquee.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Services.tsx
│   │   ├── Blog.tsx
│   │   ├── Hobbies.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   ├── content/blog/              ← Blog posts (Markdown files)
│   ├── data/portfolio.ts          ← ALL editable content (except blogs)
│   └── lib/blog.ts                ← Blog loading logic (don't edit)
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

**Key principle:** Almost everything you'd want to change lives in **one file**: `src/data/portfolio.ts`. Blogs live in `src/content/blog/`.

---

## 1. 👤 Personal Info & Hero Section

**File:** `src/data/portfolio.ts` → `personalInfo`

```ts
export const personalInfo = {
  name: "Masha M. Stephen",
  title: "Data Scientist",
  bio: "As a Data Science and AI professional...",
  tagline: "I solve business' tough questions with AI and Data Science solutions.",
  profileImage: "/images/profile-placeholder.jpeg",
};
```

| To change...              | Edit this field   |
|---------------------------|-------------------|
| Your name                 | `name`            |
| Your job title            | `title`           |
| Short bio                 | `bio`             |
| One-liner on hero         | `tagline`         |
| Profile photo             | `profileImage`    |

**To change your profile photo:**
1. Put your new photo in `public/images/` (e.g., `my-photo.jpg`)
2. Change `profileImage` to `"/images/my-photo.jpg"`

---

## 2. 🔗 Social Links

**File:** `src/data/portfolio.ts` → `socials`

```ts
export const socials = {
  github: "https://github.com/Masha-M-Stephen",
  linkedin: "https://www.linkedin.com/in/masha-m-stephen1/",
  email: "stephenmasha@rocketmail.com",
  instagram: "https://www.instagram.com/masha.m.armani/",
};
```

Just replace the URLs. These appear in the Hero section and Footer.

---

## 3. 🧭 Navigation Links

**File:** `src/data/portfolio.ts` → `navLinks`

```ts
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Hobbies", href: "#hobbies" },
];
```

- `label` = what shows in the nav bar
- `href` = must match the `id` of the section (e.g., `#portfolio` → `<section id="portfolio">`)

---

## 4. 💻 Technologies Marquee

**File:** `src/data/portfolio.ts` → `techs`

```ts
export const techs = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ...
];
```

**To add a new tech:** Add a new `{ name, icon }` object. Find icons at:
- [Devicon](https://devicon.dev/) → `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/TECHNAME/TECHNAME-original.svg`
- [Icons8](https://icons8.com/) → `https://img.icons8.com/color/48/TECHNAME.png`

**To remove a tech:** Delete its object from the array.

---

## 5. 💼 Portfolio Section (Apps, Analytics, Websites)

**File:** `src/data/portfolio.ts` → `portfolioItems`

```ts
export const portfolioItems = [
  {
    title: "Supply Chain Optimizer",
    category: "Apps" as const,
    description: "A predictive analytics app for supply chain optimization.",
    image: "/images/project-placeholder.svg",
    link: "#",
  },
  ...
];
```

| Field         | What it does                                                      |
|---------------|-------------------------------------------------------------------|
| `title`       | Project name on the card                                          |
| `category`    | Filter tab — must be: `"Apps"`, `"Analytics"`, or `"Websites"`    |
| `description` | Short description shown on the card                               |
| `image`       | Tile image — put image in `public/images/` and use the path       |
| `link`        | **URL opened when tile is clicked (opens in a new tab)**          |
```ts
link: "https://my-dashboard.vercel.app",
```

The tiles **already open in a new tab** automatically.

### Adding a new project

Add a new object to the array:
```ts
{
  title: "Sales Prediction Model",
  category: "Apps" as const,
  description: "An ML model that predicts monthly sales.",
  image: "/images/sales-prediction.png",
  link: "https://github.com/Masha-M-Stephen/sales-prediction",
},
```

### Adding a new portfolio category

1. Add it to `portfolioCategories`:
   ```ts
   export const portfolioCategories = ["All", "Apps", "Analytics", "Websites", "Machine Learning"] as const;
   ```
2. Use `"Machine Learning" as const` in your item's `category`

### Adding a custom project image

1. Put the image in `public/images/` (e.g., `public/images/my-project.png`)
2. Set `image: "/images/my-project.png"`

---

## 6. 🛎️ Services Section

**File:** `src/data/portfolio.ts` → `services`

```ts
export const services = [
  {
    title: "Data Science Consulting",
    description: "Transforming raw data into actionable insights...",
    icon: "📊",
  },
  ...
];
```

- `icon` is an emoji — just paste any emoji you want
- Add, remove, or edit objects in the array

---

## 7. 📝 Blog Section

**Location:** `src/content/blog/` (Markdown files)

### Adding a New Blog Post

1. **Create the file:** `src/content/blog/my-new-post.md`

2. **Add frontmatter** at the very top of the file:

```markdown
---
title: "My New Blog Post"
slug: "my-new-post"
date: "2024-07-15"
excerpt: "A short summary shown on the blog card."
category: "Data Science"
image: "/images/blog/my-new-post/image-1.jpg"
---

Your article content goes here in Markdown...

## Section Heading

Regular paragraph text. **Bold** and *italic*.

- Bullet point
- Another bullet

![Image description](/images/blog/my-new-post/diagram.png)
```

| Field      | Required | What it does                                              |
|------------|----------|-----------------------------------------------------------|
| `title`    | ✅ Yes   | Displayed on card and post page                           |
| `slug`     | ✅ Yes   | **Must match filename** (without `.md`)                   |
| `date`     | ✅ Yes   | Format: `"YYYY-MM-DD"` — posts sorted newest first       |
| `excerpt`  | ✅ Yes   | Short description on blog card                            |
| `category` | ✅ Yes   | Filter tab — new categories auto-appear                   |
| `image`    | Optional | Tile image path — falls back to placeholder if omitted    |

3. **Add images** (if any):
   - Create folder: `public/images/blog/my-new-post/`
   - Put images there
   - Reference in markdown: `![alt text](/images/blog/my-new-post/image-1.png)`
   - Use the first image as the tile by setting it in frontmatter `image` field

4. **That's it** — no code changes needed. The system auto-detects new `.md` files.

### Editing an Existing Blog Post

Open the `.md` file in `src/content/blog/`, edit frontmatter or body content, and save.

### Removing a Blog Post

1. Delete the `.md` file from `src/content/blog/`
2. Optionally delete its image folder from `public/images/blog/`

### Blog Categories

Categories are **auto-generated** from your posts' frontmatter. Use any category name — a new filter tab appears automatically. Current categories: **Data Science**, **Marketing**.

### Markdown Formatting Cheat Sheet

```markdown
# Big Heading
## Section Heading
### Subsection

Regular paragraph. **Bold text** and *italic text*.

- Bullet point
- Another bullet

1. Numbered list
2. Second item

> Blockquote for callouts

[Link text](https://example.com)

![Image alt text](/images/blog/my-post/photo.png)

| Column 1 | Column 2 |
|-----------|----------|
| Data      | Data     |
```

---

## 8. 🎨 Hobbies Section

**File:** `src/data/portfolio.ts` → `hobbies`

```ts
export const hobbies = [
  {
    title: "Photography",
    image: "/images/hobby-placeholder.svg",
    description: "Capturing moments and perspectives through the lens.",
  },
  ...
];
```

Same pattern — add/remove/edit objects. To use a real photo, put it in `public/images/` and update the `image` path.

---

## 9. 📧 Contact Form

**File:** `src/components/ContactForm.tsx`

⚠️ **The contact form currently does NOT send emails.** It shows a "Thanks!" message but doesn't actually deliver anything. Look for this comment in the code:

```ts
// TODO: Replace with Formspree/Web3Forms endpoint
```

**To make it actually send emails:**
1. Sign up at [Formspree](https://formspree.io/) or [Web3Forms](https://web3forms.com/)
2. Follow their instructions to add a form action/endpoint
3. Update the `handleSubmit` function in `ContactForm.tsx`

---

## 10. 🌐 Site Metadata (Title, Description, Favicon)

**File:** `src/app/layout.tsx`

```ts
export const metadata: Metadata = {
  title: "Masha M. Stephen | Data Scientist",
  description: "Data Science and AI professional enabling teams to make better data-driven decisions.",
  icons: { icon: "/favicon.ico" },
};
```

- Change the browser tab title and SEO description here
- To change the favicon: replace `public/favicon.ico`

---

## 11. 🚀 Moving the Project to a New Laptop

1. Copy the **entire project folder** EXCEPT:
   - `node_modules/` (will be recreated)
   - `.next/` (will be recreated)
2. On the new machine, open a terminal in the project folder
3. Run:
   ```
   npm install
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser

---

## 12. 🌍 Deploying / Redeploying

**If hosted on Vercel:**
- Push your changes to GitHub → Vercel auto-deploys
- Or run `npx vercel --prod` from the project folder

**If hosted on Netlify:**
- Push to GitHub → Netlify auto-deploys
- Build command: `next build --turbopack`
- Publish directory: `.next`

> The EISDIR build error you may see locally on Windows is a flash drive filesystem issue. It does **NOT** happen on deployment platforms (they run Linux).

---

## ⚠️ Common Mistakes to Avoid

| Mistake                                          | Why it breaks                                            |
|--------------------------------------------------|----------------------------------------------------------|
| Blog slug doesn't match filename                 | Post won't load — `my-post.md` needs `slug: "my-post"`  |
| Missing `---` in blog frontmatter                | Page crashes — both opening and closing `---` required   |
| Image path doesn't start with `/`                | Image won't show — always use `/images/...`              |
| Portfolio `category` not in `portfolioCategories` | Item won't appear under any filter tab                   |
| Editing files in `node_modules/`                 | Changes wiped on `npm install` — never edit here         |
| Copying `node_modules/` to new machine           | Causes errors — always run `npm install` fresh           |
| Quotes in blog title                             | Escape them: `title: "The \"Real\" Story"`               |
| Blog date without quotes                         | Always wrap in quotes: `date: "2024-07-15"`              |

---

## 📋 Quick Reference: Where to Edit What

| I want to change...            | Edit this                                      |
|--------------------------------|------------------------------------------------|
| My name, title, tagline        | `src/data/portfolio.ts` → `personalInfo`       |
| Social links                   | `src/data/portfolio.ts` → `socials`            |
| Nav bar links                  | `src/data/portfolio.ts` → `navLinks`           |
| Tech icons marquee             | `src/data/portfolio.ts` → `techs`              |
| Portfolio projects             | `src/data/portfolio.ts` → `portfolioItems`     |
| Portfolio categories           | `src/data/portfolio.ts` → `portfolioCategories`|
| Services offered               | `src/data/portfolio.ts` → `services`           |
| Blog posts                     | `src/content/blog/*.md` files                  |
| Blog images                    | `public/images/blog/<slug>/`                   |
| Hobbies                        | `src/data/portfolio.ts` → `hobbies`            |
| Site title & SEO               | `src/app/layout.tsx` → `metadata`              |
| Favicon                        | Replace `public/favicon.ico`                   |
| Contact form behavior          | `src/components/ContactForm.tsx`               |
