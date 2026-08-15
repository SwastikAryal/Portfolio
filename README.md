# Portfolio — Swastik Aryal

A clean, single-page personal portfolio built with React and Vite to showcase projects, skills, and contact information.

Live demo: https://portfolio-pi-henna-93kogb360p.vercel.app

Table of contents

- About
- Demo
- Repository layout
- Features
- Tech stack
- Environment variables
- Install & run
- Project structure
- Deployment
- Contributing
- Credits & acknowledgements
- License & contact

About

This repository contains the source code for my personal portfolio website. The site is intentionally simple, mobile-first, and easy to customize — replace images, copy, and project entries to reflect your work.

Demo

Live demo: https://portfolio-pi-henna-93kogb360p.vercel.app

Repository layout

- public/            — static assets (favicon, images)
- src/               — source files
  - assets/          — images, avatar, project screenshots
  - components/      — Header, Footer, ProjectCard, Contact, etc.
  - sections/        — Home, About, Projects, Skills, Contact
  - App.jsx, main.jsx
- index.html
- package.json
- README.md

Features

- Clean single-page layout with anchor navigation
- Mobile-first, responsive design
- Sections for About, Projects, Skills, and Contact
- Easy to extend (add pages, projects, or integrations)

Tech stack

- JavaScript (React)
- Vite (build tool)
- HTML & CSS (plain CSS by default; can be swapped for Tailwind/SCSS)

Environment variables

This is a static portfolio and does not require secrets by default. If you add analytics, form backends, or other third-party services, store secrets in a `.env` file and never commit them. Example (only if needed):

- VITE_ANALYTICS_ID=your_analytics_id
- CONTACT_API_URL=https://api.example.com/contact

Install & run

Prerequisites

- Node.js v16+ (recommended)
- npm (or yarn)

Local development

```bash
# install dependencies
npm install

# run development server
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

Project structure (brief)

- index.html — HTML template and root element
- src/main.jsx — React entry point, renders the App
- src/App.jsx — app layout and section wiring
- src/components — reusable components (Header, Footer, ProjectCard, etc.)
- src/sections — content sections (Home, About, Projects, Skills, Contact)
- public/ — static files (images, favicon)

Deployment

This site is optimized for static hosting. Recommended providers:

- Vercel — seamless for Vite + React (recommended)
- Netlify — Git-based deployments
- GitHub Pages — use `gh-pages` or a GitHub Actions workflow

Typical Vercel steps

1. Connect the repository to Vercel
2. Set the build command: `npm run build`
3. Set the output directory to `dist` (Vite default)
4. Add any environment variables in the Vercel dashboard

Contributing

This repository is primarily my personal site. If you want to suggest changes:

1. Open an issue describing the change
2. Fork the repo and create a feature branch: `git checkout -b feat/your-change`
3. Make changes, run locally, and open a pull request with a clear description

Credits & acknowledgements

- Built by Swastik Aryal.
- Uses third-party tools and libraries (React, Vite). See package.json for dependency details.

License & contact

- License: Add a LICENSE file if you want to publish under an open-source license (MIT recommended).
- Contact / source: https://github.com/SwastikAryal
- Live portfolio: https://portfolio-pi-henna-93kogb360p.vercel.app

Notes

- I removed other featured-project listings from this README as requested. If you want a concise "Featured projects" section, provide the titles, one-line descriptions, and demo/repo links and I will add them.
- If you'd like, I can create the project file structure with example components and placeholder assets — reply "create structure" and confirm JS/TS, CSS approach, and package manager.