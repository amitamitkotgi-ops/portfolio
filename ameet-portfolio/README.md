# Amit — ECE Engineering Portfolio

A dark-first, recruiter-ready portfolio site for an Electronics & Communication
Engineering student. Built with plain HTML, CSS and JavaScript — no build
step, no framework.

## 1. Overview

The site introduces Amit, an ECE student at KLE Technological University,
and showcases his embedded systems, IoT and electronics projects. It's
built so every piece of personal information — name, links, skills,
projects, achievements — lives in one file (`js/data.js`) and nothing
else needs to be touched to update it.

## 2. Features

- Sticky, blurring navigation with active-section highlighting and a mobile menu
- Hero section with an animated SVG circuit/signal visual
- About, quick stats, and a grouped technical skills grid
- Filterable project grid (All / Embedded / IoT / Electronics / FPGA / Web / Energy)
- Project detail modal (problem, solution, features, architecture, future work)
- Vertical engineering-journey timeline
- Achievements, "Currently Exploring", and GitHub sections
- Resume and contact CTAs, with a validated contact form (mailto fallback — no backend)
- Dark/light theme toggle saved to `localStorage`
- Scroll progress bar, back-to-top button, scroll-reveal animations
- Respects `prefers-reduced-motion`, keyboard-focus visible everywhere
- Fully responsive (360px through large desktop), no horizontal scroll

## 3. Technologies

HTML5, CSS3 (custom properties, no framework), JavaScript ES6+, Google Fonts
(Space Grotesk, Inter, JetBrains Mono), inline SVG icons.

**Note on Tailwind:** the original brief suggested Tailwind CSS. This build
uses hand-written CSS instead, because the Tailwind CDN build (`cdn.tailwindcss.com`)
is explicitly marked by Tailwind as unsuitable for production — it prints a
console warning and ships the whole framework at runtime. Hand-written CSS
keeps the "no console errors" and "fast loading" goals in the brief, with the
same visual result. If you later add a Node build step, you can swap this for
compiled Tailwind without changing the HTML structure much.

## 4. Folder structure

```
portfolio/
├── index.html
├── assets/
│   ├── images/            (empty — add project screenshots here)
│   ├── icons/
│   │   └── favicon.svg
│   └── Amit_Resume.pdf    (PLACEHOLDER — add your real resume PDF here)
├── css/
│   └── style.css
├── js/
│   ├── data.js             ← edit this file to update the site
│   ├── projects.js         (renders data.js into the page)
│   ├── animations.js       (scroll-reveal)
│   └── main.js             (nav, theme, form, scroll behaviour)
└── README.md
```

## 5. Run it locally

No build tools needed. Any static server works:

```bash
cd portfolio
python3 -m http.server 5500
```

Then open `http://localhost:5500` in a browser. Opening `index.html`
directly by double-clicking also works in most browsers.

## 6. How to update personal information

Open `js/data.js` and edit the `profile` object:

- `email`, `linkedin`, `github` — currently placeholders (`YOUR_EMAIL`,
  `YOUR_LINKEDIN`) except GitHub, which is set to
  `https://github.com/amitamitkotgi-ops`. Replace the placeholders before publishing.
- `resumePath` — points to `assets/Amit_Resume.pdf`. Add the real file at
  that path, or change the path to match your file name.
- `heroSubtext`, `aboutStatement`, `aboutParagraphs` — the text shown in the
  hero and about sections.

## 7. How to add or edit a project

Add an object to the `projects` array in `js/data.js`:

```js
{
  id: "unique-id",
  title: "Project Name",
  subtitle: "One-line subtitle",
  categories: ["Embedded", "IoT"],   // must match entries in `filters`
  description: "Short card description.",
  technologies: ["ESP32", "Firebase"],
  github: "https://github.com/your-username/repo",
  demo: "",                          // leave empty if there's no live demo
  status: "Project Experience",
  problem: "...",
  solution: "...",
  features: ["...", "..."],
  architecture: "...",
  futureImprovements: ["...", "..."]
}
```

The project grid, filters, and detail modal all read from this array
automatically — no other file needs to change.

## 8. How to add your resume

Place your resume PDF at `assets/Amit_Resume.pdf` (or update
`profile.resumePath` in `js/data.js` to point to wherever you put it).
Every "Download Resume" button on the site reads from that one value.

## 9. Deployment

**GitHub Pages**
1. Push this folder to a GitHub repository.
2. In the repo, go to Settings → Pages → set the source branch to `main` and root folder.
3. The site publishes at `https://<username>.github.io/<repo>/`.

**Vercel / Netlify**
1. Import the GitHub repository.
2. Framework preset: "Other" / static site. No build command needed —
   the output directory is the project root.
3. Deploy.

Before publishing anywhere, double-check `js/data.js` for placeholder
values (`YOUR_EMAIL`, `YOUR_LINKEDIN`) and add the resume PDF.

## 10. Future improvements

- Connect the GridGuardian AI dashboard to real ESP32 + Firebase data (Stage 2)
- Add a real backend (or a form service) so the contact form sends email
  directly instead of opening a mail client
- Add real project screenshots to `assets/images/` and reference them from
  `js/data.js` / `projects.js` in place of the current icon-based project cards
- Add certifications as they're completed (see the placeholder entry in
  `achievements` in `js/data.js`)
