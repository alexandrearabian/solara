# Solara

Agency landing page. Next.js 16 + Tailwind v4, static, Spanish at `/es` (default) and English at `/en`.

```bash
npm run dev     # http://localhost:3000
npm run build
```

## Before launch

All copy lives in `app/[lang]/content.ts`. Search for `PLACEHOLDER`:

- `BOOKING_URL`: your Cal.com / Calendly link
- `EMAIL`
- FAQ timelines

Deploy: push to GitHub and import in Vercel (zero config).
