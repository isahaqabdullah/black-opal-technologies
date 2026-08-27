# Black Opal Technologies

Standalone Next.js website for Black Opal Technologies.

## Run locally

```bash
npm install
npm run dev
```

## Contact form

Copy `.env.example` to `.env.local` and configure `RESEND_API_KEY`,
`CONTACT_FORM_FROM_EMAIL`, and `TECHNOLOGY_CONTACT_FORM_TO_EMAIL` to enable
enquiry delivery. Without those values, the form safely returns a configuration
message and does not send email.

Set `NEXT_PUBLIC_SITE_URL` to the production URL before deployment so metadata
and social previews resolve to the live domain.
