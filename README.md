# ORTIX DIGITAL

Next.js App Router website for a digital marketing agency serving Bengaluru and Karnataka.

## Local development

Run `npm run dev` and open [localhost:3000](http://localhost:3000/). In PowerShell environments that block npm scripts, run `npm.cmd run dev`.

## Enquiries

The contact forms validate the request and prepare a message addressed to +91 78921 82255. Visitors review and send it in WhatsApp. The website does not store the message or confirm delivery.

## Production setup

- Set `SITE_URL` to the confirmed HTTPS origin before building. It enables absolute canonicals, share URLs, breadcrumb schema and sitemap entries. An unset value keeps the development site out of search.
- Set `SITE_INDEXABLE=false` for a preview that needs the production canonical URLs. The preview emits noindex and an empty sitemap. Use access controls for private staging.
- Set `BUSINESS_PHONE` in international format (a plus sign and digits) and `BUSINESS_EMAIL` only after confirming the public contact details. These are displayed on the site and in Organization structured data.
- Confirm whether clients visit a staffed ORTIX location, ORTIX visits clients, or services are delivered online only. Follow Google's Business Profile eligibility rules before creating or editing a listing. Confirm any public address and profile URL before adding them to the site or structured data.
- After deployment, crawl the canonical HTTPS site and check final redirect destinations, indexability and sitemap entries. Verify the property in Google Search Console, submit `/sitemap.xml`, and inspect the homepage and priority service URLs.
- Approve and finalize the privacy policy and terms, then update their indexing and sitemap configuration.
- Replace illustrative portfolio concepts with approved client work when available.
- Send a test enquiry through the site and confirm receipt in the business WhatsApp account.

## Checks

```sh
npm run lint
npx tsc --noEmit
npm run build
```
