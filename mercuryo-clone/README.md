# Mercuryo Clone

A pixel-perfect clone of Mercuryo.io with advanced Webflow-like animations built with Next.js 14, TypeScript, GSAP, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14.2+
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3.4+
- **Animations:** GSAP 3.12+ (GreenSock)
- **Smooth Scroll:** Lenis 1.0+
- **Carousels:** Swiper 11.1+
- **Linting:** ESLint
- **Formatting:** Prettier

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code
npm run format
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
mercuryo-clone/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   ├── sections/     # Page sections
│   │   ├── ui/           # Reusable UI components
│   │   └── animations/   # Animation components
│   ├── lib/              # Utility functions and hooks
│   │   ├── animations/   # GSAP animation utilities
│   │   ├── hooks/        # Custom React hooks
│   │   └── utils/        # Helper functions
│   └── styles/           # Additional styles
├── public/               # Static assets
│   ├── images/           # Images
│   └── icons/            # Icons and logos
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.ts        # Next.js configuration
```

## Development Guidelines

### Code Style

- Use TypeScript strict mode
- Follow ESLint rules
- Format code with Prettier before committing
- Use Tailwind utility classes for styling
- Keep components small and focused

### Animation Guidelines

- Use GSAP for complex animations
- Leverage Lenis for smooth scrolling
- Ensure animations don't cause jank (maintain 60fps)
- Respect `prefers-reduced-motion` user preference
- Use GPU-accelerated properties (transform, opacity)

### Component Guidelines

- Use TypeScript interfaces for props
- Export components with named exports
- Keep components in appropriate directories
- Document complex components with JSDoc comments

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript strict mode
- ✅ Tailwind CSS for styling
- ✅ GSAP for animations
- ✅ Lenis smooth scrolling
- ✅ ESLint + Prettier configured
- ⏳ Hero carousel with tabs
- ⏳ Scroll-triggered animations
- ⏳ Marquee scrolling components
- ⏳ Interactive product cards
- ⏳ Responsive design

## License

This project is for educational purposes only.

---

**Created:** 2025-10-23
**Last Updated:** 2025-10-23
