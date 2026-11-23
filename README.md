# ORTIX DIGITAL

Next.js App Router website for a digital marketing agency serving Bengaluru and Karnataka.

## Local development

Run `npm run dev` and open [localhost:3000](http://localhost:3000/). In PowerShell environments that block npm scripts, run `npm.cmd run dev`.

## Enquiries

The contact forms call a Next.js Server Action. It validates the submitted values and writes each accepted enquiry as a separate JSON record with a generated ID and timestamp. The confirmation appears after the file is saved. The workflow requires no external credentials and sends no email.

Local development defaults to the Git-ignored `.private/enquiries` directory. Production requires `ENQUIRY_STORAGE_DIR` to be an absolute path on a durable, private, writable volume outside all web-served directories. Set permissions for the application account and authorized staff. Configure backups, retention and access using the approved privacy policy. This implementation expects a Node.js deployment with persistent storage. Use a shared durable datastore or a delivery provider before deploying to infrastructure with ephemeral filesystems.

## Production setup

- Set `SITE_URL` to the confirmed HTTPS origin before building. It enables absolute canonicals, share URLs, breadcrumb schema and sitemap entries. An unset value keeps the development site out of search.
- Set `SITE_INDEXABLE=false` for a preview that needs the production canonical URLs. The preview emits noindex and an empty sitemap. Use access controls for private staging.
- Set `BUSINESS_PHONE` in international format (a plus sign and digits) and `BUSINESS_EMAIL` only after confirming the public contact details. These are displayed on the site and in Organization structured data.
- Confirm whether clients visit a staffed ORTIX location, ORTIX visits clients, or services are delivered online only. Follow Google's Business Profile eligibility rules before creating or editing a listing. Confirm any public address and profile URL before adding them to the site or structured data.
- After deployment, crawl the canonical HTTPS site and check final redirect destinations, indexability and sitemap entries. Verify the property in Google Search Console, submit `/sitemap.xml`, and inspect the homepage and priority service URLs.
- Approve and finalize the privacy policy and terms, then update their indexing and sitemap configuration.
- Replace illustrative portfolio concepts with approved client work when available.
- Configure storage and submit a test enquiry through the deployed site. Confirm that authorized staff can retrieve it.

## Checks

```sh
npm run lint
npx tsc --noEmit
npm run build
```
