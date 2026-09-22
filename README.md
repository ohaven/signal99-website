# Signal 99 — Band Website

Zero-backend band site. Hosted free on Vercel. Edits happen right here on GitHub and go live in about a minute.

## Editing the site (no coding required)

| What you want to change | File to edit |
|---|---|
| Add / remove shows | `data/tour-dates.js` |
| Links (Spotify, Instagram, merch...), bio text, MailChimp | `data/site.js` |
| Band photo | upload to `public/images/band.jpg` |

**How to edit a file on GitHub:** click the file → click the pencil icon (top right) → make your change → green **Commit changes** button. Vercel rebuilds automatically.

### Adding a show
Open `data/tour-dates.js`, copy one block between `{` and `},`, paste it into the list, and change the details. Dates must be `YYYY-MM-DD`. Past shows drop off the site by themselves.

### Connecting MailChimp
1. In MailChimp: **Audience → Signup forms → Embedded forms**
2. In the code MailChimp shows you, find the line beginning `<form action="https://...list-manage.com/subscribe/post?u=...&id=..."`
3. Copy only the address inside the quotes
4. Paste it into `mailchimpFormAction` in `data/site.js`

## Running locally (optional, for developers)
```
npm install
npm run dev
```
