# Hosting

The site is hosted on Cloudflare Pages (free plan), built from the `main` branch of this repository.

- Build command: `npm run build:static`
- Output directory: `dist/public`
- Secrets (Cloudflare, Settings > Variables and Secrets): `MAILJET_API_KEY`, `MAILJET_API_SECRET`
- Optional build variable: `VITE_CLARITY_PROJECT_ID` (Microsoft Clarity). Google Analytics is set in `client/index.html`.

`functions/api/contact.ts` receives the contact form and emails each enquiry to Gemma Fowler and Ryan Kerstein via Mailjet. Enquiries are not stored anywhere and are not written to logs. If Mailjet fails, the patient is shown an error so the enquiry is never silently lost.
