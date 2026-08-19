
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