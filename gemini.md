# Gemini Project Documentation

## Project Overview

This project is a professional portfolio website for Artashes Kocharyan, a Software Quality Assurance Engineer. The website showcases his skills, experience, and projects in a modern, animated, and responsive interface.

## Technologies Used

*   **Framework**: [Next.js](https://nextjs.org/) (v16)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)

## File Structure

The main application logic is contained within the `src/app` directory, following the Next.js App Router conventions.

```
/
├── src/
│   ├── app/
│   │   ├── Portfolio.tsx   # The main portfolio component
│   │   ├── globals.css     # Global styles and Tailwind CSS imports
│   │   ├── layout.tsx      # The root layout for the application
│   │   └── page.tsx        # The entry point for the home page
│   └── ...
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.mjs      # PostCSS configuration
└── ...
```

## Getting Started

To run the development server, use the following command:

```bash
npm run dev
```

This will start the development server on `http://localhost:3000`.
