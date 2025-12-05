# Product Roadmap: Professional Portfolio Website

This document outlines the strategic vision and future development plans for the personal professional website. The goal is to evolve the site from a high-quality portfolio into a more dynamic and engaging professional hub.

---

### **Phase 1: Foundational Enhancements (Current State)**

*   [x] **Core Functionality:** Single-page application with sections for About, Experience, Skills, and Projects.
*   [x] **Modern Tech Stack:** Built with Next.js, React, and Tailwind CSS.
*   [x] **Animations & UX:** Rich user experience with animations via Framer Motion.
*   [x] **Contact Form:** Functional contact form integrated with Formspree.
*   [x] **Version Control & Deployment:** Git repository on GitHub with CI/CD via Vercel.
*   [x] **Accessibility:** Basic accessibility improvements (ARIA labels).
*   [x] **Security:** Addressed and patched known dependency vulnerabilities.

---

### **Phase 2: Content & Codebase Refinement (Q1 2026)**

*   **Goal:** Improve maintainability and make content updates easier and safer.
*   **Key Initiatives:**
    *   **Componentization:**
        *   **Objective:** Break down the monolithic `Portfolio.tsx` into smaller, reusable components (e.g., `Hero.tsx`, `Skills.tsx`, `ProjectCard.tsx`).
        *   **Benefit:** Simplifies debugging, testing, and future development.
    *   **Data Separation:**
        *   **Objective:** Move all hardcoded data (experience, skills, projects) into a separate, structured file (e.g., `src/data/portfolioData.ts`).
        *   **Benefit:** Allows for easy content updates without touching the application's presentation logic.
    *   **Image Integration:**
        *   **Objective:** Add a professional headshot to the "About" section and add thumbnails for each project, using the `next/image` component for optimization.
        *   **Benefit:** Enhances visual appeal and provides a better user experience.

---

### **Phase 3: Dynamic Content & Professional Branding (Q2 2026)**

*   **Goal:** Transform the portfolio into a more dynamic and engaging platform that showcases expertise.
*   **Key Initiatives:**
    *   **Blog Integration:**
        *   **Objective:** Add a `/blog` section to the website to host articles. This could be implemented with a Headless CMS (like Sanity or Contentful) or by using local Markdown files with `next-mdx-remote`.
        *   **Benefit:** Demonstrates expertise, improves SEO, and provides a reason for visitors to return.
    *   **Individual Project Pages:**
        *   **Objective:** Create dynamic routes for each project (e.g., `/projects/[slug]`) to provide detailed case studies.
        *   **Benefit:** Allows for in-depth explanations of project challenges, solutions, and technologies used.
    *   **Custom Domain:**
        *   **Objective:** Purchase and configure a custom domain (e.g., `artasheskocharyan.com`) in Vercel.
        *   **Benefit:** Enhances professional branding and memorability.

---

### **Phase 4: Advanced Features & Analytics (Q3 2026)**

*   **Goal:** Add advanced features to improve user engagement and gather insights.
*   **Key Initiatives:**
    *   **Website Analytics:**
        *   **Objective:** Integrate a privacy-focused analytics service like Vercel Analytics or Plausible to track visitor data.
        *   **Benefit:** Provides insights into which projects and content are most popular, helping to guide future updates.
    *   **Testimonials Section:**
        *   **Objective:** Add a section to display testimonials or recommendations from colleagues and clients.
        *   **Benefit:** Adds social proof and credibility.
    *   **Interactive Resume:**
        *   **Objective:** Add a feature to download a PDF version of the resume, potentially generated from the site's data.
        *   **Benefit:** Provides a convenient way for recruiters and potential clients to get a traditional resume.
