# Lumin

World‑class AI agents for real‑world work. This is the Lumin company website, featuring a landing page, blog system with MDX support, and demo booking flow.

## Features

- 🎨 Modern landing page with hero, features, and metrics
- 📝 MDX-powered blog with math (KaTeX) and chart support
- 📧 Demo request form with email notifications
- 🎯 TypeScript + Next.js 16 (App Router)
- 💅 Tailwind CSS v4 + Typography plugin

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables (for demo email functionality):

Create a `.env.local` file:

```bash
DEMO_TO_EMAIL=your-email@example.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Writing Blog Posts

Create MDX files in `content/blog/`:

```mdx
---
title: Your Post Title
date: 2025-10-23
excerpt: A short summary.
---

Your content here. Use **markdown**, math \(\alpha\), and components like:

<Chart labels={["A","B","C"]} values={[1,2,3]} title="My data" />
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
