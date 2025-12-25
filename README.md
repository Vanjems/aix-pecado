# Aix Pecado

A modern Next.js application built with the latest technologies.

## Tech Stack

This project strictly adheres to the following technology stack:

- **Next.js 15** - React framework for production (App Router)
- **React 19** - Latest React version
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework (CSS-first configuration)
- **Lucide Icons** - Beautiful icon library for React

### Stack Requirements

- All styling MUST use Tailwind CSS utility classes
- No inline styles (`style` prop) - use Tailwind classes instead
- All components must be TypeScript
- Use Next.js App Router conventions
- Icons from Lucide React only

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                  # Next.js App Router directory
│   ├── globals.css       # Global styles with Tailwind CSS v4
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page
├── components/           # React components
│   └── Header.tsx        # Header component
├── public/               # Static assets
│   └── images/           # Image assets
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── postcss.config.mjs    # PostCSS configuration for Tailwind CSS v4
└── tailwind.config.ts    # Tailwind CSS configuration (v4 uses CSS-first approach)
```

## Development Guidelines

### Styling Rules

- **Always use Tailwind CSS utility classes** - No inline styles (`style` prop)
- Use arbitrary values when needed: `bg-[#1E1E1E]`, `w-[773px]`, etc.
- Follow Tailwind v4 CSS-first configuration approach
- Use modern Tailwind syntax (e.g., `shrink-0` instead of `flex-shrink-0`)

### Component Guidelines

- All components must be TypeScript
- Use Next.js App Router conventions
- Use Server Components by default, add `"use client"` only when needed
- Icons from `lucide-react` only

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)