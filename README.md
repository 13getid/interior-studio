# Interior Studio — Luxury Interior Design Website

A production-style luxury interior design studio website built with React, TypeScript, Vite, and Tailwind CSS. Built step-by-step as a learning project, with real routing, animations, form validation, and client-uploadable media (no backend required).

## Tech Stack

- **React 19** + **TypeScript** — component logic and type safety
- **Vite** — build tool and dev server
- **Tailwind CSS v4** — styling via design tokens (`src/index.css`)
- **React Router DOM** — client-side routing across pages
- **Framer Motion** — scroll/entrance animations throughout
- **React Hook Form** — Contact and Consultation form validation
- **Lucide React** + **React Icons** (`react-icons/fa`) — icons (Lucide for UI icons, React Icons for brand/social logos)
- **Cloudinary** — image/video hosting, uploaded and swapped by the client without touching code

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

### Environment Variables

Create a `.env` file in the project root (never committed — see `.gitignore`):

VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name_here


## Project Structure

src/
components/
common/ → AboutPreview, DesignProcess, ProcessStepItem, CTABanner
contact/ → ContactForm
footer/ → Footer
gallery/ → InstagramGrid
hero/ → HeroMedia, HeroContent, HeroStats, StatCounter
navigation/ → Navbar
portfolio/ → ProjectCard, FeaturedProjects
services/ → ServiceCard, ServicesPreview, ServiceListCard
testimonials/ → TestimonialsSlider, StarRating
blog/ → BlogCard
pages/ → Home, About, Services, Projects, ProjectDetail,
Blog, BlogDetail, Contact, Consultation, NotFound
data/ → services.ts, projects.ts, blog.ts, testimonials.ts,
footer.ts, instagram.ts, process.ts
hooks/ → useTheme, useScrolled, useInView, useCountUp
lib/ → cloudinary.ts (URL builder helper)


## Design System

Defined in `src/index.css` under `@theme`:

| Token | Value | Use |
|---|---|---|
| `--color-charcoal` | `#1F2937` | Primary dark / ink |
| `--color-warmwhite` | `#FAFAFA` | Primary light background |
| `--color-gold` | `#C8A951` | Accent — used sparingly |
| `--color-stone` | `#A8A29E` | Secondary text on dark backgrounds |
| `--color-stone-dark` | `#6B6560` | Secondary text on light backgrounds (contrast fix) |
| `--color-beige` | `#EDE6DB` | Alternate section background |

Fonts: **Fraunces** (`font-display`, headings) + **Jost** (`font-body`, everything else), loaded via Google Fonts in `index.html`.

Dark mode: toggled via the `useTheme` hook, which adds/removes a `dark` class on `<html>`. Tailwind's `dark:` variants respond to it automatically (`@custom-variant dark` in `index.css`).

## Client-Editable Media (Cloudinary)

Photos and video are never hardcoded as files in the repo — they're pulled live from Cloudinary by Public ID, using `src/lib/cloudinary.ts`. The client can log into Cloudinary and upload/replace images (matching the existing Public ID) with **no code changes or redeploys needed**.

Current folder convention:

interior-studio/
hero/ → hero-image, hero-video (optional — falls back to image if absent)
about/ → about-preview
services/ → residential-design, commercial-design, kitchen-design, ...
projects/
<slug>/cover
blog/
<slug>/cover
testimonials/ → client-1, client-2, client-3
instagram/ → photo-1 through photo-6


**Important:** always use Cloudinary's **Upload** button and manually set the Public ID at upload time — renaming after upload has been unreliable in this project's testing.

## Routing

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About (story, process, Instagram grid) |
| `/services` | All 13 services |
| `/projects` | Filterable/searchable project list |
| `/projects/:slug` | Individual project detail |
| `/blog` | Blog listing |
| `/blog/:slug` | Individual blog post |
| `/contact` | Contact form |
| `/consultation` | Full consultation booking form |
| `*` | 404 Not Found |

## Known Placeholders / Not Yet Wired Up

- **Contact & Consultation forms**: currently log to console and show a success state, no email is actually sent. To go live, sign up for Formspree (or similar), and uncomment/complete the `fetch` call in `ContactForm.tsx` and `Consultation.tsx` (see `TODO` comments).
- **Social links** (`src/data/footer.ts`, `src/data/instagram.ts`): placeholder URLs. Update `SOCIAL_LINKS`, `INSTAGRAM_URL`, and `INSTAGRAM_HANDLE` with the client's real accounts.
- **Consultation image upload**: UI only — selected file is not actually uploaded anywhere yet.
- **Contact page map**: placeholder box, not a real embedded map yet.
- **Mobile navigation menu**: hamburger icon toggles but has no dropdown menu built yet.

## Not Yet Built

- Gallery page (masonry grid + lightbox)
- FAQ page (accordion)
- SEO meta tags per route
- Real email delivery (Formspree wiring)

## Deployment

Not yet deployed. When ready, this is a standard Vite app — compatible with Vercel, Netlify, or similar static hosts. Remember to set `VITE_CLOUDINARY_CLOUD_NAME` as an environment variable on whichever host is used.