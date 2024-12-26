# Portfolio Website Project

## Tech Stack
- React
- React Router (for navigation)
- Framer Motion (for animations)
- CSS Modules (for styling)
- Vite (for build tool)

## Project Overview
A single-page portfolio website with smooth section transitions and a two-row navigation bar.

## Detailed Explanations
1. Set up React project using Vite
2. Create component structure
   - Layout components (Navbar, Section containers)
   - Section components (About, Projects, Blog, Contact)
3. Implement two-row navbar with logo and navigation items
   - Centered logo (#658BB7)
   - Centered nav items separated by '::'
   - Collapse to logo on scroll, expand on hover
4. Add smooth scrolling and section transitions
   - Homepage to About: fade transition
   - Subsequent sections: alternating slide transitions (right, left, right, left)
5. Style each section and add content
   - Light mode: #F2FDFF background, #343434 text
   - Dark mode: #343434 background, #F2FDFF text
6. Implement responsive design (100vw x 100vh sections)

## Folder Structure
src/
├── components/
│   ├── layout/
│   │   └── Navbar.jsx
│   └── sections/
│       ├── About.jsx
│       ├── Blog.jsx
│       ├── Contact.jsx
│       ├── Home.jsx
│       └── Projects.jsx
├── styles/
│   ├── modules/
│   │   ├── Navbar.module.css
│   │   └── Section.module.css
│   └── global.css
├── App.jsx
├── App.css
└── main.jsx

## Milestones
- [03/19/24] Initial project setup and component structure completed with navbar, sections, and basic animations
- [03/20/24] Project reinitialized with correct folder structure and dependencies installed
- [03/20/24] Implemented working navbar with proper collapse/expand behavior
- [03/20/24] Started section implementations with Home section and transition components
- [03/20/24] Mobile responsiveness improvements:
  - Fixed navbar layout and spacing
  - Adjusted section sizing and overflow issues
  - Improved image placeholder responsiveness
  - Removed Home from nav menu and made logo clickable

## Next Steps
1. Implement remaining section components:
   - About (two-column layout with image and text)
   - Projects (three-row grid layout)
   - Blog (latest Substack article with "read more" link)
   - Contact (form and social media links)
2. Add Framer Motion animations:
   - Fade transition for Home to About
   - Alternating slide transitions for subsequent sections
3. Add content and replace placeholder blocks 