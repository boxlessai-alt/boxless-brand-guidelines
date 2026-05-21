# Brand Guidelines Renderer

A printable 8-page A4 Brand Guidelines document generator built with React 18 and Vite. The app reads brand data from URL query parameters and renders a professional, print-ready document.

## What It Does

Renders a complete Brand Guidelines PDF-style document directly in the browser. Pass all brand data (colors, fonts, copy) as URL query parameters, and the app produces a polished 8-page document including:

1. **Cover Page** — Full-bleed brand color cover with client name and date
2. **Brand Positioning** — Positioning statement, banner one-liner, and brand feel words
3. **LinkedIn Profile** — Headline options (A/B/C) and full About section
4. **LinkedIn Profile (Continued)** — Featured section, profile CTA button, content rules
5. **Your Ideal Client** — Target audience, proof point, and differentiation prompt
6. **Content Guidelines** — What to post (4 types), what not to post, posting frequency
7. **Outreach Guidelines** — 3 outreach rules and phrases to avoid
8. **Back Cover** — Clean closing page with website link

## Tech Stack

- React 18 + Vite
- WebFontLoader for dynamic Google Fonts loading
- Pure CSS (no Tailwind, no UI frameworks)
- Print-optimized with `page-break-after` and `@media print` styles

## URL Parameter Reference

| Parameter | Description | Example |
|-----------|-------------|---------|
| `name` | Client name | `Grace+Kimani` |
| `primary` | Primary brand color (hex) | `#802662` |
| `secondary` | Secondary brand color (hex) | `#4D1F4D` |
| `accent` | Accent color (hex) | `#FFB266` |
| `font_heading` | Heading font family | `DM+Sans` |
| `font_body` | Body font family | `DM+Sans` |
| `positioning` | Positioning statement text | `I+help...` |
| `oneliner` | Banner one-liner | `I+help...` |
| `headline_1` | LinkedIn headline option A | `Headline+A` |
| `headline_2` | LinkedIn headline option B | `Headline+B` |
| `headline_3` | LinkedIn headline option C | `Headline+C` |
| `about_section` | Full About section text | `Paragraph...` |
| `featured_suggestion` | What to pin in Featured | `Pin+this...` |
| `cta_recommendation` | CTA button text | `Book+a+call` |
| `feel_words` | 3 brand feel words (comma-separated) | `Strategic,credible,proven` |
| `ideal_clients` | Target audience description | `SME+owners...` |
| `top_result` | Best result / proof point | `$2M+in...` |
| `report_date` | Date shown on cover | `June+2024` |

## Example URL

```
http://localhost:5173/?name=Grace+Kimani&primary=%23802662&secondary=%234D1F4D&accent=%23FFB266&font_heading=DM+Sans&font_body=DM+Sans&positioning=I+help+B2B+companies+increase+revenue+through+strategic+LinkedIn+marketing&oneliner=LinkedIn+growth+for+B2B+leaders&headline_1=LinkedIn+Strategist+%7C+B2B+Growth&headline_2=I+help+B2B+companies+win+on+LinkedIn&headline_3=Marketing+Director+%7C+B2B+%7C+LinkedIn&about_section=I+am+a+LinkedIn+strategist+specializing+in+B2B+growth...&featured_suggestion=Pin+your+best+case+study+or+media+appearance&cta_recommendation=Book+a+call&feel_words=Strategic,credible,proven&ideal_clients=B2B+SaaS+companies+with+50-500+employees&top_result=Grew+client+pipeline+by+340%25+in+90+days&report_date=June+2024
```

## Deployment (Render)

1. Push this project to a GitHub repository
2. Create a new **Static Site** on Render
3. Connect your GitHub repository
4. Set the build command: `npm run build`
5. Set the publish directory: `dist`
6. Deploy

The `vercel.json` in this project handles SPA routing by redirecting all paths to `index.html`.

## Local Development

```bash
npm install
npm run dev
```

Open your browser to the Vite dev server URL (typically `http://localhost:5173/`) and append your query parameters.

## Printing

Open the app with your parameters loaded, then use the browser's print function (Ctrl+P / Cmd+P) to save as PDF. The styles are optimized for A4 output with proper page breaks.
