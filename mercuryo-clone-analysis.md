# Mercuryo.io Website Clone - Analysis & Animation Documentation

**Project:** Mercuryo.io Website Clone with Webflow-like Animations
**Analyzed:** 2025-10-23
**Target URL:** https://mercuryo.io/

---

## Executive Summary

The Mercuryo.io website is a modern, animation-heavy marketing site for a crypto payment platform. It features:
- Smooth scroll-triggered animations
- Carousel/slider components
- Marquee scrolling elements
- Interactive card hover effects
- Animated text reveals
- Parallax effects
- Responsive grid layouts

---

## Key Animations & Interactive Elements Identified

### 1. Hero Carousel (Top Section)
- **Type:** Multi-slide carousel with tabs
- **Features:**
  - 3 slides with auto-rotation
  - Tab-based navigation
  - Smooth slide transitions
  - Background image animations
  - Text fade-in effects

### 2. Heading Text Animations
- **Type:** Split-text reveal animations
- **Location:** Multiple headings throughout page
- **Effect:** Words/characters split into spans and animate in on scroll
- **Example:** "Trusted by 200+ leading web3 companies" splits into animated segments

### 3. Marquee Elements
- **Type:** Infinite horizontal scrolling
- **Locations:**
  - Partner logos section (top)
  - Cryptocurrency icons (2 rows - opposite directions)
- **Features:**
  - Continuous smooth scrolling
  - Duplicated content for seamless loop
  - Different scroll speeds for visual interest

### 4. Stats Carousel
- **Type:** Horizontal auto-scrolling stats
- **Location:** "Strong foundation" section
- **Features:**
  - Auto-scrolling numbers
  - Infinite loop
  - Smooth transitions

### 5. Product Cards
- **Type:** Interactive hover cards
- **Locations:** On Ramp, Spend cards
- **Effects:**
  - Hover scale/transform
  - Background animations
  - Border glow effects

### 6. Blockchain Logo Grid
- **Type:** Animated grid layout
- **Features:**
  - Logos appear on scroll
  - Stagger animation
  - Hover effects on individual logos

### 7. Use Case Selector
- **Type:** Interactive tabs with carousel
- **Features:**
  - Tab switching (Wallets, DEXs, NFT, etc.)
  - Smooth content transitions
  - Like/Dislike buttons (disabled state)
  - Visual indicators for active tab

### 8. Office Locations Slider
- **Type:** Horizontal scrollable cards
- **Features:**
  - Image cards with location info
  - Smooth horizontal scroll
  - Country flag icons

### 9. Scroll-Triggered Fade-Ins
- **Type:** Intersection Observer animations
- **Locations:** Throughout entire page
- **Effects:**
  - Fade in + slide up
  - Stagger delays for grouped elements
  - Opacity transitions

### 10. Smooth Scrolling
- **Type:** Lenis or similar smooth scroll library
- **Features:**
  - Smooth momentum scrolling
  - Custom easing
  - Enhanced user experience

---

## Technical Stack Observations

### Animation Likely Using:
- **CSS Transitions/Animations:** For basic hover effects
- **JavaScript Animation Library:** Possibly GSAP (GreenSock) or Framer Motion
- **Scroll Animations:** IntersectionObserver API or scroll-based animation library
- **Smooth Scroll:** Lenis, Locomotive Scroll, or custom implementation
- **Carousel:** Custom or Swiper.js

### Key CSS Techniques:
- Transform properties (translate, scale, rotate)
- Opacity transitions
- CSS Grid and Flexbox for layouts
- Custom CSS animations with keyframes
- Clip-path for reveals
- Filter effects (blur, brightness)

---

## Page Structure

```
├── Header/Navigation
│   ├── Logo
│   ├── Navigation Menu (Products, Company, For Builders)
│   └── CTA Buttons (Launch App, Dashboard)
├── Hero Carousel Section
│   ├── Slide 1: Main CTA
│   ├── Slide 2: B2B Focus
│   └── Slide 3: Spend Product
├── Partners/Stats Section
│   ├── Heading with split-text animation
│   ├── Partner logos marquee
│   └── Stats grid (4 cards)
├── Products Section
│   ├── Product cards (On Ramp, Spend)
│   └── Other products link
├── Blockchain Support Section
│   ├── Blockchain logos grid
│   └── Use case selector with tabs
├── Team Section
│   ├── Team image
│   └── Careers CTA
├── Offices Section
│   └── Location cards carousel
├── Developer Section
│   ├── API/SDK cards
│   └── Final CTA
└── Footer
    ├── Navigation links
    ├── Social links
    └── Legal information
```

---

## Responsive Behavior

- Mobile-first approach
- Breakpoints for tablet and desktop
- Carousels become scrollable on mobile
- Grid layouts adjust columns
- Navigation becomes hamburger menu (likely)
- Touch-friendly interactions

---

## Performance Considerations

- Lazy loading for images
- Optimized animations (GPU-accelerated transforms)
- Debounced scroll listeners
- Intersection Observer for viewport detection
- Preloading critical assets

---

**Last Updated:** 2025-10-23
