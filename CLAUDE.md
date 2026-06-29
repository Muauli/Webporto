# CLAUDE.md - Portfolio Muhammad Reza Aulia

## Project Overview

This is a personal portfolio website for Muhammad Reza Aulia, an IT graduate
from Telkom University. The goal is a premium, award-winning-quality single-page
portfolio inspired by lusion.co and lenis.dev: immersive, scroll-driven, and
highly interactive. The site targets recruiters and freelance clients, showcasing
internship experience, technical projects, and certifications.

**Live URL:** Deployed on Vercel with custom domain
**Target audience:** Tech recruiters, freelance clients, developers

---

## Tech Stack

### Framework & Language

- **Next.js 14** (App Router)
- **TypeScript** (strict mode enforced, no `any` types ever)
- **React 18**

### Styling

- **Tailwind CSS v4:** utility classes only, `@import "tailwindcss"` syntax
- **Inline styles** for animated/dynamic values that Tailwind cannot handle
- **CSS Variables** defined in `globals.css` for all design tokens

### Animation & Interaction

- **Framer Motion:** component-level animations, `useScroll`, `useTransform`,
  `AnimatePresence`, spring physics
- **GSAP + ScrollTrigger:** scroll-scrubbing, staggered reveals, timeline
  animations tied to scroll position; always `scrub: 1` for organic feel
- **Lenis:** smooth scroll; integrated with GSAP ticker in `SmoothScroll.tsx`
- **Three.js:** 3D wave background in `HeroScene.tsx` (position: fixed, z-index: -1)

### Fonts (via next/font/google)

- **Syne** (`--font-syne`): weights 400, 700, 800 for UI, labels, nav, body
- **DM Serif Display** (`--font-dm-serif`): weight 400, normal + italic for display
  headings, large typographic moments

### Libraries

- `react-icons/si`: tech stack icons
- `@emailjs/browser`: contact form email delivery
- `lucide-react`: UI icons (ArrowRight, ArrowDown)
- `framer-motion`
- `gsap` + `gsap/ScrollTrigger`
- `lenis`
- `three`

---

## Design Reference Summary

The goal is NOT to copy Lusion or Lenis colors or visual identity.
The goal is to implement the same ANIMATION TECHNIQUES they use to make
backgrounds and scroll interactions feel alive. Reza's own color palette
and typography stay as defined in the Design System section above.

---

### Animation Techniques to Implement (by priority)

**1. Core Rendering Engine (already partially done)**

- WebGL via Three.js for the wave background in HeroScene.tsx
- GLSL custom fragment shaders for pixel-level effects
  (currently used in the WebGL shader version of HeroScene)
- Target: GPU-rendered backgrounds that never lag, even on mid-range devices

**2. Scroll-Driven Mechanics**

- GSAP ScrollTrigger with `scrub: 1` to tie animation timelines directly
  to scroll position, so animations play forward on scroll down and
  reverse on scroll up (not just triggered once)
- Lerp / momentum easing via Lenis to intercept native browser scroll
  and apply deceleration physics, already set up in SmoothScroll.tsx
- Parallax at multiple speeds: background elements move slower than
  foreground content to create depth illusion
- Scale and translate background elements precisely in sync with
  scroll percentage, not just on enter/exit viewport

**3. Pixel Manipulation and Post-Processing**

- Noise and film grain: subtle static texture overlay on dark sections
  to prevent flat black from looking empty, implemented as a GLSL
  fragment shader or CSS SVG filter
- Chromatic aberration: RGB channel separation at edges of fast-scrolled
  elements, applied via GLSL shader uniform tied to scroll velocity
- Liquid distortion: background reacts to cursor movement like displaced
  fluid, implemented via GLSL displacement map on the WebGL canvas

**4. Cursor Physics and Interactivity**

- Raycasting from mouse 2D coordinates into 3D space to detect
  intersection with WebGL objects (already partially in HeroScene.tsx)
- Particle system with physics: particles in background respond to
  cursor with repulsion or attraction forces
- Spring physics on all cursor-following elements (not linear lerp):
  stiffness and damping values tuned so movement feels weighted
  and organic, not mechanical

**5. Advanced CSS for Non-WebGL Sections**

- Only animate `transform` and `opacity` properties for background
  elements to trigger GPU compositing layer, never animate `top`,
  `left`, `width`, `height`, or `background-color` directly
- `mix-blend-mode` on overlaid elements so they interact with whatever
  is behind them (invert, multiply, screen) rather than just covering it
- Hardware-accelerated geometric shapes as background elements in
  non-WebGL sections (About, Experience) using `translate3d` and `scale`

---

### Implementation Priority Per Section

| Section        | Background Technique                                               |
| -------------- | ------------------------------------------------------------------ |
| Hero           | Three.js wave + GLSL shader + mouse raycasting (done, upgradeable) |
| About          | CSS hardware-accelerated parallax + film grain overlay             |
| Experience     | CSS geometric shapes animating on scroll via GSAP scrub            |
| Projects       | Cursor image reveal with spring physics on canvas 2D               |
| Certifications | CSS mix-blend-mode + spotlight effect on cursor                    |
| Footer/Contact | Subtle particle system or static noise texture                     |

---

### Best Practices That Must Be Enforced

Every animation implementation must follow these rules without exception:

**Performance**

- Never animate layout-triggering CSS properties (top, left, width, height,
  margin, padding). Only use transform and opacity.
- Always use `will-change: transform` on elements that will animate,
  but remove it after animation completes to free GPU memory.
- Throttle mousemove handlers with `requestAnimationFrame`, never attach
  heavy computation directly to the mousemove event callback.
- WebGL render loops must use a single `requestAnimationFrame` loop,
  never multiple competing loops in the same canvas.
- Always check `window.matchMedia('(prefers-reduced-motion: reduce)')`
  and disable non-essential animations for users who opt out.

**Code Quality**

- No `any` type in TypeScript, ever.
- All GSAP ScrollTrigger instances must be created inside
  `gsap.context(() => {...}, ref)` and cleaned up with `ctx.revert()`
  in the useEffect return.
- All Three.js geometries, materials, and renderers must be disposed
  in the useEffect cleanup return.
- All canvas animation loops must store the `requestAnimationFrame` ID
  and call `cancelAnimationFrame(id)` on unmount.
- All mousemove and scroll event listeners must be removed in cleanup.
- No inline anonymous functions on event listeners if they need to be
  removed (store reference, then removeEventListener with same reference).

**Accessibility**

- All interactive elements must have visible focus states.
- Minimum touch target size 44px by 44px.
- Text contrast must remain readable regardless of what the animated
  background is doing underneath. Use overlay gradients if needed.
- Never rely solely on color to convey information.

**Mobile**

- Detect mobile with `window.innerWidth < 768` OR
  `navigator.maxTouchPoints > 0` for more reliable touch detection.
- Disable WebGL effects, cursor physics, and particle systems on mobile.
- Keep scroll-driven text animations on mobile but reduce intensity by 50%.
- Three.js segment counts must be halved on mobile for performance.

### Typography Rules

- **Display headings:** `var(--font-dm-serif)`, `clamp(56px, 10vw, 140px)`,
  `letterSpacing: -4px`, `lineHeight: 0.92`
- **Section headings:** `var(--font-dm-serif)`, `clamp(32px, 5vw, 60px)`,
  `letterSpacing: -2px`
- **Body text:** `var(--font-syne)`, `clamp(14px, 1.5vw, 17px)`,
  `lineHeight: 1.75`, color `#555` on light or `#aaa` on dark
- **Labels/eyebrows:** `11px`, `letterSpacing: 3px`, `textTransform: uppercase`,
  color `var(--mid)`
- **No font mixing within a heading:** pick one and commit

### Spacing (adapted from Lusion/Lenis scale)

- Section padding: `clamp(80px, 12vh, 120px)` vertical,
  `clamp(24px, 5vw, 64px)` horizontal
- Card padding: `clamp(24px, 3vw, 40px)`
- Gap between elements: `24px` standard, `8px` for tight groups
- Major section breaks: minimum `92px`

### Section Background Strategy

All sections use **gradient transitions** to connect seamlessly without hard color
boundaries. The Three.js wave (`HeroScene.tsx`) is `position: fixed; z-index: -1`
and visible through sections that have transparent or semi-transparent backgrounds.

| Section        | Background                                                      |
| -------------- | --------------------------------------------------------------- |
| Hero           | Transparent over HeroScene                                      |
| About          | `linear-gradient(180deg, #ffffff 0%, #f5f4ef 8%, #f5f4ef 100%)` |
| Experience     | `linear-gradient(180deg, #f0efe8 0%, var(--white) 6%, ...)`     |
| Projects       | Dark `#0d0d0d` fading in via scroll-driven `bgOpacity`          |
| Certifications | Transparent, HeroScene shows through                            |
| Footer+Contact | Two-part: Contact area uses var(--white) with HeroScene         |
|                | showing through. Footer bar at very bottom uses var(--black)    |
|                | as a clean closing strip, no HeroScene needed there.            |

### Animation Principles (Lusion/Lenis inspired)

- **Scroll scrubbing:** GSAP `scrub: 1` ties animations to scroll position,
  reversing on scroll up. Use `toggleActions: 'play none none reverse'`
- **Spring physics:** Use `useSpring` from Framer Motion or custom Spring class
  for mouse-follow interactions, never linear
- **Clip-path reveals:** `clipPath: 'inset(6% 0% 0% 0%)'` to `inset(0%)` for
  cinematic entry
- **Parallax text:** Opposing `x` transforms on scroll via `useTransform`
- **Stagger:** `stagger: 0.08` to `0.15` for list items
- **Duration:** `0.8s` to `1.2s` for major reveals, `0.2s` to `0.35s` for
  micro-interactions
- **Easing:** Always `ease: [0.16, 1, 0.3, 1]` (custom expo-out) for reveals;
  `ease: 'power3.out'` for GSAP

### Interactive States

- Hover scale: `1.02` to `1.05` maximum, never aggressive
- Card lift: `translateY(-4px)` on hover
- Arrow reveal: `opacity: 0` to `1`, `x: -10` to `0` on hover
- Tech badge hover: `scale(1.08)`, background tint with accent color
- All transitions: `200ms` to `300ms ease-out`

### Mobile Rules

- **Always add mobile fallback** for heavy animations (Three.js effects,
  cursor-follow, WebGL): `const isMobile = window.innerWidth < 768`
- Disable cursor image reveal, slot machine text, and WebGL displacement on mobile
- Keep scroll animations but reduce intensity
- Touch targets minimum `44px`

---

## Folder Structure

PORTOFOLIO/
├── public/
│ ├── FormalPhoto_NoBG.png <- Profile photo (transparent background)
│ ├── Muhammad_Reza_Aulia-Resume.pdf <- Downloadable CV
│ ├── projects/ <- Project thumbnail images (to be added)
│ │ ├── phishing.png
│ │ ├── faq-chatbot.png
│ │ ├── peertalk.png
│ │ ├── jaka-nocode.png
│ │ ├── portfolio.png
│ │ └── quiz.png
│ └── certs/ <- Certificate images (to be added)
│ ├── cert-excel.pdf
│ ├── cert-eprt.pdf
│ ├── cert-agile.pdf
│ └── cert-remind.pdf
├── src/
│ ├── app/
│ │ ├── globals.css <- All CSS variables + global styles + keyframes
│ │ ├── layout.tsx <- Root layout: fonts, metadata, SmoothScroll
│ │ └── page.tsx <- Main page: imports and orders all sections
│ ├── components/ <- One file per section or reusable component
│ │ ├── Loader.tsx <- DONE: Full-screen loading animation
│ │ ├── PageTransition.tsx <- DONE: Delays content until loader finishes
│ │ ├── SmoothScroll.tsx <- DONE: Lenis + GSAP ticker integration
│ │ ├── Navbar.tsx <- DONE: Fixed nav, scroll-aware, active section
│ │ ├── HeroScene.tsx <- DONE: Three.js wave, DO NOT MODIFY unless asked
│ │ ├── Hero.tsx <- DONE: Name, typewriter, CTA, photo
│ │ ├── photo.jsx <- DONE: Profile photo component
│ │ ├── TypewriterText.tsx <- DONE: Cycling role titles with cursor blink
│ │ ├── About.tsx <- DONE: Sliding title, bio, facts, skill marquee
│ │ ├── Experience.tsx <- DONE: 3 internship cards, lusion-style
│ │ ├── TechIcon.tsx <- DONE: All tech icons + TechBadge component
│ │ ├── Projects.tsx <- IN PROGRESS
│ │ ├── Contact.tsx <- DONE: EmailJS form
│ │ └── Footer.tsx <- NEEDS UPDATE
│ └── hooks/
│ └── useScrollReveal.ts <- IntersectionObserver for .reveal class
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── install.cmd
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json

### File responsibilities

- **`globals.css`**: CSS variables, keyframes (`blink-cursor`, `pulse`),
  `.reveal`/`.visible` classes, `@import "tailwindcss"`. No component styles here.
- **`layout.tsx`**: Fonts, metadata, `<SmoothScroll/>`. Never add section components here.
- **`page.tsx`**: Imports and orders all section components. Uses
  `useScrollReveal()` hook. Wraps in `<Loader/>` and `<PageTransition/>`.
- **`TechIcon.tsx`**: Single source of truth for all tech icons and the
  `TechBadge` component. Import from here everywhere.

---

## Coding Standards

### TypeScript

- Strict mode, **never use `any`**
- Always type component props with `interface` or `type`
- Always type refs: `useRef<HTMLDivElement>(null)`
- Always type event handlers: `React.MouseEvent<HTMLDivElement>`
- No unused imports, no unused variables (ESLint enforced)

### React / Next.js

- All interactive components must have `'use client'` at the top
- Heavy Three.js or WebGL components must use `dynamic import` with `ssr: false`
- **Never use `useEffect` without a cleanup `return`** if it adds event listeners
  or starts animations
- Always cleanup GSAP ScrollTrigger contexts: `gsap.context(() => {...}, ref)` and
  `return () => ctx.revert()`
- Always cleanup Three.js: dispose geometry, material, renderer on unmount
- Always cleanup Framer Motion animations if manually triggered

### Component structure (order within file)

1. `'use client'` directive
2. Imports (React, then libraries, then local)
3. Types/interfaces
4. Constants (data arrays, config, defined outside component)
5. Sub-components (if any)
6. Main exported component
7. `export default`

### Styling

- Use CSS variables (`var(--accent)`) never hardcoded hex in JSX except for
  values not in the design token set
- Use `clamp()` for all font sizes and spacing that should be responsive
- Mix Tailwind utility classes and inline styles: Tailwind for layout/spacing,
  inline styles for animated/dynamic values

## Current Build Status

> All sections listed here can still be improved and rechecked
> to match the Lusion and Lenis references. The "built" status does not mean
> final; there will be a review pass after all sections are completed.

| Section           | Status           | Notes                                                               |
| ----------------- | ---------------- | ------------------------------------------------------------------- |
| Loader            | Built, needs fix | Components (text, bar) are still visible during the exit transition |
| HeroScene         | Built            | Three.js wave, spring camera, mouse ripple                          |
| Hero              | Built            | Typewriter, name parallax, photo, CTA                               |
| About             | Built            | Sliding titles, bio, facts grid, skill marquee                      |
| Experience        | Built            | 3 cards lusion-style, arrow hover, TechBadge                        |
| Projects          | In progress      | Next priority                                                       |
| Certifications    | Pending          | Spotlight hover, 4 cards, 2 categories                              |
| Footer + Contact  | Pending          | Contact form merged into Footer                                     |
| Loader fix        | Pending          | After Footer done                                                   |
| Global review     | Pending          | After all sections, Lusion/Lenis alignment pass                     |
| HeroScene upgrade | Pending          | Last, after global review only                                      |

## What's Next (Priority Order)

1. **Projects.tsx**: cursor image reveal, scroll scrubbing, slot machine text
2. **Certifications.tsx**: spotlight/flashlight hover effect on cert images
3. **Footer.tsx**: redesign to feel like natural end of the page
4. **Full review**: Hero, About, Navbar, Experience consistency pass
5. **HeroScene upgrade**: lenis.dev/lusion.co style 3D background continuity
6. **Mobile responsive**: global pass across all sections

---

## Projects Data

### Architecture: Two Layer System

### Layer 1: Main Projects Section (src/components/Projects.tsx)

**Layout: Horizontal Scroll via Vertical Scroll (Scroll Pinning)**
The section is pinned vertically using GSAP ScrollTrigger pin while
the project list moves horizontally on the X axis. User scrolls down,
cards move left. After all cards pass, vertical scroll continues.
This is the same technique used by Lenis.dev showcase section.

Implementation:

- Wrap all cards in a horizontal flex container
- Use GSAP ScrollTrigger with `pin: true` and `scrub: 1`
- Animate the container `x` from `0` to `-(totalWidth - viewportWidth)`
- Section height must be tall enough to accommodate full horizontal travel:
  set section `height` to `(number of projects * cardWidth)px` in CSS

**Background**
Background must be TRANSPARENT or use `var(--white)` with very low opacity.
The Three.js wave from HeroScene.tsx (position fixed, z-index -1) must
remain visible through this section. Do NOT use dark background here.
Use a gradient that matches the bottom of Experience section above.

**Each Project Card shows:**

- Full bleed image (fills card, object-fit cover)
- Project number (top left, DM Serif, large, very low opacity watermark)
- Project name (bottom left, DM Serif, large)
- Tech tags using TechBadge from TechIcon.tsx (bottom left, below name)
- Arrow icon (bottom right, hidden by default)

**Hover Interactions (all must be implemented):**

1. Cursor image reveal: a circular thumbnail (200px diameter) follows
   the mouse with spring physics. The image appears only inside this
   circle, clipped with `border-radius: 50%`. Uses canvas 2D or
   a positioned div with `clip-path: circle()` that follows cursor.
   Spring physics: `stiffness: 150, damping: 20` via Framer Motion useSpring.
2. Card scale: `scale(1.03)` on the hovered card, others `scale(0.97)`
3. Arrow reveal: arrow icon fades in and translates from bottom-left
   to its resting position at bottom-right on hover
4. Image darkens slightly (overlay `rgba(0,0,0,0.2)`) on hover so
   name and tags remain readable
5. Project name slot machine effect: on hover, letters cycle fast
   (random characters) then settle into the real title over 400ms.
   Use GSAP stagger on individual letter spans.

**Click interaction:**
Clicking a card navigates to `/projects/[slug]` with a shared element
layout transition. Use Framer Motion `layoutId` matching between the
card image and the hero image on the detail page so the image expands
seamlessly from card to full page header.

**MANDATORY: Import TechBadge from src/components/TechIcon.tsx**
Never create new icon or badge components. Always use the existing
TechBadge component for tech tags.

**Mobile fallback (below 768px):**
Disable horizontal scroll pinning. Show cards in vertical stack instead.
Disable cursor image reveal. Keep slot machine text effect on tap.

### Layer 2: Project Detail Page (src/app/projects/[slug]/page.tsx)

**Routing**
Dynamic route using Next.js App Router. Slug comes from each project
entry in the projects data array. Use `generateStaticParams` to
pre-render all 6 project pages at build time so there is no loading
delay when navigating to a project.

Slugs:

- phishing-detection
- faq-chatbot
- peertalk
- jaka-nocode
- portfolio
- quiz-app

**Page Transition from Card to Detail**
Use Framer Motion `layoutId` on the project image. The card in
Projects.tsx and the hero image on this page must share the exact
same `layoutId` value (example: `project-image-${slug}`). When user
clicks a card, the image expands seamlessly from card size and position
to full page hero without a white flash or hard cut.

Wrap the detail page in `<AnimatePresence mode="wait">` in layout.tsx
or in a wrapper component so the transition plays correctly.

Back navigation must also trigger the reverse shared element transition,
shrinking the hero image back to card size as user returns to main page.

**Page Structure (top to bottom)**

1. Hero image
   - Full viewport width
   - Height: `60vh` on desktop, `40vh` on mobile
   - `object-fit: cover`, `object-position: center`
   - Framer Motion `layoutId` matching the card image
   - Gradient overlay at bottom: `linear-gradient(to bottom, transparent 50%, var(--white) 100%)`
     so content below blends in without a hard edge

2. Back button
   - Position: top left, fixed while scrolling
   - Content: left arrow and text "Back"
   - On click: navigate back to main portfolio page, shared element
     transition plays in reverse
   - Style: pill shape, border `0.5px solid rgba(0,0,0,0.15)`, transparent
     background, color `var(--black)`. Same pill style as CTA buttons
     in Hero section.

3. Content section (below hero image, padding `clamp(48px, 8vh, 80px)`
   horizontal `clamp(24px, 5vw, 64px)`)

   a. Category label
   - Font: `var(--font-syne)`, `11px`, `letterSpacing: 3px`,
     `textTransform: uppercase`, color `var(--mid)`
   - Animate: fade in from left on page load

   b. Project title
   - Font: `var(--font-dm-serif)`, `clamp(36px, 6vw, 80px)`,
     `letterSpacing: -2px`, color `var(--black)`
   - Animate: slide up from 40px below, fade in, delay 0.1s

   c. Tagline
   - Font: `var(--font-syne)`, `clamp(16px, 1.8vw, 20px)`,
     color `var(--mid)`, `lineHeight: 1.7`
   - Animate: fade in, delay 0.2s

   d. Divider line
   - `1px solid rgba(0,0,0,0.08)`, full width, margin `32px 0`

   e. Two column grid (desktop: 60% left, 40% right. Mobile: stacked)

   Left column: About
   - Label: `11px uppercase`, `var(--mid)`, `letterSpacing: 3px`,
     margin bottom `16px`
   - STAR paragraph: `clamp(14px, 1.5vw, 17px)`, color `#555`,
     `lineHeight: 1.8`
   - Animate: slide up with GSAP ScrollTrigger on enter,
     reverse on scroll up

   Right column: Details
   - Tech stack label: `11px uppercase`, `var(--mid)`
   - Tech tags: TechBadge components from TechIcon.tsx, same
     component used in Projects.tsx main section. Wrap in flex wrap.
   - Links section below tech tags:
     GitHub button (always shown if available) and Live Website
     button (only shown if live URL exists in project data).
     Style: same pill buttons as Hero CTA. GitHub pill uses
     FaGithub icon from react-icons/fa. Live link uses
     ArrowUpRight icon from lucide-react.

4. Related or back prompt at bottom of page
   - Simple line: "Back to all projects" with left arrow
   - Same shared element transition back to main portfolio

**Background**
`var(--white)` matching light sections. HeroScene wave is position fixed
so it shows through here as well. Do not add any dark overlay to the
page background.

**Data source**
All project content (title, slug, tagline, category, description, tech,
github, live) comes from a single shared data file:

Create `src/data/projects.ts` as the single source of truth.
Both `Projects.tsx` and `src/app/projects/[slug]/page.tsx` import
from this file. Never duplicate project data between files.

**Mobile**

- Hero image height `40vh`
- Two column grid becomes single column stack
- Back button stays top left but not fixed, scrolls with page
- All font sizes use `clamp()` values already defined above
- TechBadge and link buttons wrap naturally on smaller screens

### Project Entries

```text
1. Phishing Email Detection
   Slug: phishing-detection
   Image: /projects/phishing.jpg
   Tagline: A dual-branch neural network that detects phishing emails
            by fusing text analysis with emotion recognition.
   Tech: Python, PyTorch, DistilBERT, LSTM, HuggingFace
   GitHub: [https://github.com/Muauli](https://github.com/Muauli)
   About (STAR flowing paragraph):
     Phishing detection models of the time relied solely on text features,
     which caused false positives that flagged legitimate emails as threats
     and eroded user trust. The goal was to build a more accurate classifier
     by introducing emotion signals as a complementary input alongside
     textual analysis. DistilBERT was fine-tuned on 40,000 email samples
     to extract six distinct emotion labels, then combined with a text-based
     LSTM branch in a dual-branch architecture that fuses both representations
     before final classification. Evaluated on 5,800 emails, the model
     achieved 98% accuracy and improved precision by 0.03 over the
     text-only baseline, with the fine-tuned model published publicly
     on HuggingFace Hub.

2. FAQ Recruitment Chatbot
   Slug: faq-chatbot
   Image: /projects/faq-chatbot.jpg
   Tagline: An automated chatbot that handles repetitive recruitment
            questions without any human intervention.
   Tech: n8n, Webhook, JSON, Automation
   GitHub: [https://github.com/Muauli](https://github.com/Muauli)
   About (STAR flowing paragraph):
     The recruitment team at Telkom Indonesia was spending significant
     time answering the same FAQ queries from candidates repeatedly,
     consuming HR bandwidth that could be redirected to higher-value work.
     The task was to fully automate these responses end-to-end using a
     no-code workflow engine with zero manual touchpoints. A webhook-triggered
     pipeline was built in n8n that routes incoming questions through
     structured response logic and returns instant, consistent answers
     to candidates in real time. The result was a fully automated FAQ
     handler that eliminated manual response time for common recruitment
     queries, backed by a curated knowledge base of 40 QA pairs to
     ensure accuracy.

3. PeerTalk Chat
   Slug: peertalk
   Image: /projects/peertalk.jpg
   Tagline: A full-stack chat platform connecting users with counselors
            through anonymous and registered conversation channels.
   Tech: Next.js, TypeScript, Prisma, NextAuth.js, Supabase, Tailwind CSS,
         shadcn/ui, Radix UI, Bcryptjs
   GitHub: [https://github.com/Muauli](https://github.com/Muauli)
   About (STAR flowing paragraph):
     Many individuals seeking mental health support hesitate to seek help
     due to fear of being identified, creating a barrier between those
     in need and qualified counselors. The task was to design and build a
     platform that supports both anonymous and registered chat, while
     maintaining clear role separation between regular users and counselors.
     A full-stack application was built using Next.js and TypeScript with
     a hybrid authentication system combining NextAuth.js for session and
     JWT-based role management and Supabase middleware for dynamic route
     protection. Prisma ORM handled the database schema with support for
     both identified and anonymous message threads, and the UI was built
     with shadcn/ui and Radix UI for accessible, responsive components.
     The result is a dual-channel chat platform where user identity is
     protected by default, counselor and user dashboards adapt dynamically
     based on role, and all authentication flows are secured end-to-end.

4. Jaka No Code
   Slug: jaka-nocode
   Image: /projects/jaka-nocode.jpg
   Tagline: The backend engine powering a no-code website builder that
            lets users assemble full pages without writing any code.
   Tech: Python, Django REST Framework, PostgreSQL, JWT
   GitHub: [https://github.com/Muauli](https://github.com/Muauli)
   Note: Backend only. Frontend was handled by a separate team at Nevmock.
   About (STAR flowing paragraph):
     Building a no-code website builder requires a backend capable of
     handling highly dynamic, nested page structures that change based
     on real-time drag-and-drop actions from the frontend. The task was
     to design the entire data model and REST API layer that would power
     component assembly, template loading, and user-specific page storage.
     A PostgreSQL schema was designed to represent the hierarchical
     relationship between users, pages, sections, and individual elements,
     with Django REST Framework providing the API endpoints for create,
     read, update, and delete operations on each layer. JWT-based
     authentication protected all modification endpoints so that only
     the authenticated owner of a page could alter its structure.
     The result was a robust backend foundation that enabled the frontend
     team to build a fully functional drag-and-drop interface on top of
     a well-structured, secure, and scalable API.

5. Portfolio Website
   Slug: portfolio
   Image: /projects/portfolio.jpg
   Tagline: A scroll-driven interactive portfolio built with WebGL,
            spring physics, and layered motion design.
   Tech: Next.js, TypeScript, Three.js, Framer Motion, GSAP, Lenis,
         Tailwind CSS
   GitHub: [https://github.com/Muauli](https://github.com/Muauli)
   About (STAR flowing paragraph):
     Standing out among hundreds of developer portfolios requires more
     than clean design; it requires an experience that feels alive and
     responds to the person viewing it. The goal was to build a portfolio
     that demonstrates both engineering depth and design sensibility
     through immersive, scroll-driven interactions without sacrificing
     performance or readability. A Three.js wave background with spring
     physics and mouse-reactive ripple effects was built as a persistent
     3D layer behind all content, while GSAP ScrollTrigger tied section
     reveals and parallax movements directly to scroll position for
     organic, reversible animations. Lenis smooth scroll was integrated
     with the GSAP ticker to ensure consistent frame pacing across all
     devices, and Framer Motion handled component-level hover states
     and entrance transitions throughout. The result is a production-deployed
     portfolio that loads fast, animates at 60fps, and creates a first
     impression strong enough to be remembered.

6. Quiz App
   Slug: quiz-app
   Image: /projects/quiz.jpg
   Tagline: An interactive quiz application powered by generative AI
            that produces unique questions dynamically every session.
   Tech: React, TypeScript, Gemini API
   GitHub: [https://github.com/Muauli](https://github.com/Muauli)
   About (STAR flowing paragraph):
     Static quiz apps repeat the same questions across sessions, making
     them ineffective for genuine learning and engagement over time.
     The task was to build a quiz platform where questions are generated
     fresh for every session based on the topic and difficulty level
     chosen by the user. A React and TypeScript frontend was built with
     a clean, focused UI connected to a generative AI API that constructs
     unique, contextually accurate questions on demand without any
     pre-written question bank. The result is a quiz experience that
     never repeats itself, adapts to any subject the user selects,
     and scales to any topic area without requiring manual content creation.
```

## Restrictions

- Ask for clarification before coding if any instruction or prompt is ambiguous
- Never use `any` type in TypeScript, strict mode is enforced
- Never modify `HeroScene.tsx` unless explicitly asked
- Never modify completed sections (Hero, About, Experience) unless explicitly
  asked, always ask first
- Never add a new section without updating `page.tsx` to include it
- Always add mobile fallback for animations heavier than CSS transitions,
  check `window.innerWidth < 768` and reduce or disable WebGL/canvas effects
- Always cleanup event listeners, GSAP contexts, Three.js instances, and
  canvas animation loops in the `useEffect` return function
- Never hardcode colors outside of `globals.css` CSS variables, always use
  `var(--black)`, `var(--accent)`, etc.
- Never use `position: absolute` for full-screen overlays that should be
  `position: fixed`
- Always use `clamp()` for font sizes and section padding to ensure
  responsiveness without media query overrides
- Prefer GSAP ScrollTrigger over Framer Motion `useScroll` for scroll-tied
  animations that need scrubbing/reverse behavior
- Prefer Framer Motion for hover animations and component-level
  entrance/exit transitions
- Do not install new packages without asking first, check if existing
  libraries (Framer Motion, GSAP, Three.js) can handle the requirement
- NEVER use em dash or en dash anywhere in code, comments, or content strings. Use a comma, colon, or rewrite the sentence instead.
- All section statuses in CLAUDE.md are not final. Every built section
  will go through a review pass to align with Lusion and Lenis reference
  before the project is considered complete.

## Certifications Data

The section layout is divided into two visual categories within a SINGLE section:

- **Professional Certifications:** certificates of expertise/competence from official institutions
- **Awards & Achievements:** awards from competitions or institutions

Both are displayed in a single section with sub-labels to distinguish them.
The card design remains the same; there is only a small uppercase label reading "CERTIFICATION" or
"ACHIEVEMENT" in the corner of the card to distinguish between the two.

### Professional Certifications

Microsoft Office Specialist: Excel 2019

Category: CERTIFICATION

Issuer: Microsoft, Certiport

Year: 2024

Image: /certs/cert-excel.jpg

Description: Validates proficiency in Microsoft Excel 2019 including
advanced formulas, data analysis, and spreadsheet management.

EPRT: English Proficiency

Category: CERTIFICATION

Issuer: Telkom University

Year: 2024

Image: /certs/cert-eprt.jpg

Description: English Proficiency Rating Test issued by Telkom University,
measuring academic and professional English language competency.

Agile & Scrum Fundamentals

Category: CERTIFICATION

Issuer: MindMagine

Year: 2024

Image: /certs/cert-agile.jpg

Description: Demonstrates foundational understanding of Agile methodology
and Scrum framework including roles, events, artifacts, and iterative
delivery principles.

### Awards & Achievements

REMIND Competition: 2nd Place Silver Medal

Category: ACHIEVEMENT

Issuer: Epicentrum, Universitas Padjadjaran

Year: 2025

Image: /certs/cert-remind.jpg

Description: Silver medal at Epicentrum Unpad 2025 Research Mindedness
Competition for developing Remind Chat, a web-based anonymous mental
health consultation platform as a research-based strategic solution.

### Display Order

Show Professional Certifications first (3 cards), then Awards & Achievements
(1 card). Use a subtle divider or sub-labels between the two groups.
Total: 4 cards in one section.

Certification cards use a **spotlight/flashlight hover effect**: cursor acts as
a flashlight, revealing the certificate image only in a circular radius around
the cursor. Area outside the radius stays dark.

### Card Default State (before hover)

- Background: rgba(255,255,255,0.6)
- Certificate image visible at opacity 0.15 as background,
  object-fit cover, filling the entire card
- Text always visible at full opacity
- Border: 0.5px solid rgba(0,0,0,0.08)
- backdrop-filter: blur(8px)

### Professional Certifications (4 cards)

1. Microsoft Office Specialist: Excel 2019
   Category: CERTIFICATION
   Issuer: Microsoft, Certiport
   Year: July 24, 2024
   Image: /certs/cert-excel.pdf
   Link: https://drive.google.com/drive/folders/103k7M7omJ6h8AuTENN_UrVlseR43HE45

2. EPRT: English Proficiency
   Category: CERTIFICATION
   Issuer: Telkom University
   Year: October 20, 2025
   Image: /certs/cert-eprt.pdf
   Link: https://drive.google.com/drive/folders/1X47f5csK5aBmOGmIEc22nU39In1HAI3n?usp=sharing

3. Agile & Scrum Fundamentals
   Category: CERTIFICATION
   Issuer: MindMagine
   Date : June 23, 2026
   Image: /certs/cert-agile.pdf
   Link: https://drive.google.com/drive/folders/14VtQzKv0_f0ZC4_tcZj_l2jyt49sFbFM

4. AI Azure Fundamentals
   Category: CERTIFICATION
   Issuer: Microsoft, Azure
   Date : 29 March 2026
   Image: /certs/cert-azure.pdf
   Link: https://drive.google.com/drive/folders/1CgeF3Rk_gEmJcWSBv6nRfXPOCqKafZtI

### Awards & Achievements (1 card)

5. REMIND Competition: 2nd Place Silver Medal
   Category: ACHIEVEMENT
   Issuer: Epicentrum, Universitas Padjadjaran
   Year: May 5, 2025
   Image: /certs/cert-remind.jpg
   Link: https://drive.google.com/drive/folders/15ea7E_1jZu9O5zAmy8DMRniihz9Dwf3G

### Card Hover Behavior

Default state: dark card background, text (title, issuer, year) fully visible,
certificate image hidden (opacity 0, position absolute inset 0 object-fit cover).
Hover state: certificate image fades in (opacity 0 to 1, transition 0.4s),
text fades out (opacity 1 to 0, transition 0.3s), View Certificate button
stays visible at all times. Card border gets glow: box-shadow
0 0 0 1px var(--accent), 0 0 24px rgba(200,240,79,0.2).

No circular cursor spotlight. No white dots. Pure CSS layering only.

### Grid Layout

5 cards total. Use CSS grid auto-fill minmax(280px, 1fr).
The empty spot after 5 cards on desktop (if 3 column grid leaves 1 empty)
must be filled with a decorative stat card showing:

- Large number: "5" in DM Serif
- Label: "Credentials earned"
- Subtle border matching other cards, no image, dark background
