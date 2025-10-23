# Mercuryo.io Clone - Developer Tickets

**Project:** Mercuryo.io Website Clone with Webflow-like Animations
**Created:** 2025-10-23
**Total Tickets:** 15

---

## TICKET #1: Project Setup & Base Configuration

**Priority:** Critical
**Estimated Effort:** 4 hours
**Dependencies:** None

### Description
Set up the foundational project structure with modern tooling for a high-performance animated website.

### Tasks
- Initialize Next.js 14+ project with TypeScript
- Configure Tailwind CSS for styling
- Set up GSAP (GreenSock) for animations
- Install Lenis for smooth scrolling
- Configure ESLint and Prettier
- Set up project folder structure
- Install additional dependencies (Swiper, Framer Motion as backup)

### Acceptance Criteria
- [ ] Next.js project runs successfully on localhost
- [ ] Tailwind CSS is configured and working
- [ ] GSAP is installed and can be imported
- [ ] Lenis smooth scroll is functional
- [ ] TypeScript strict mode enabled
- [ ] No console errors on fresh install
- [ ] README.md updated with setup instructions
- [ ] Git repository initialized with proper .gitignore

### Technical Notes
```bash
# Key dependencies
- next@14+
- react@18+
- gsap@3.12+
- @studio-freight/lenis
- swiper
- tailwindcss
```

---

## TICKET #2: Responsive Layout & Grid System

**Priority:** High
**Estimated Effort:** 6 hours
**Dependencies:** #1

### Description
Create responsive layout components and establish the grid system matching Mercuryo's design.

### Tasks
- Create layout wrapper components
- Implement responsive container system
- Set up CSS Grid for section layouts
- Configure Tailwind breakpoints to match design
- Create reusable spacing utilities
- Implement mobile-first responsive approach

### Acceptance Criteria
- [ ] Container component limits max-width appropriately
- [ ] Responsive breakpoints: mobile (0px), tablet (768px), desktop (1024px), wide (1440px)
- [ ] Grid system works across all breakpoints
- [ ] Spacing is consistent with design system
- [ ] Layout shifts smoothly between breakpoints
- [ ] No horizontal scroll on any device size
- [ ] Components stack properly on mobile

### Technical Notes
- Use CSS Grid for complex layouts
- Flexbox for simpler component arrangements
- Mobile breakpoint: max-width 767px
- Tablet breakpoint: 768px - 1023px
- Desktop breakpoint: 1024px+

---

## TICKET #3: Header/Navigation Component

**Priority:** High
**Estimated Effort:** 8 hours
**Dependencies:** #1, #2

### Description
Build the sticky header with navigation menu, including mobile hamburger menu and smooth scroll to sections.

### Tasks
- Create Header component with logo
- Implement desktop navigation menu
- Build mobile hamburger menu
- Add dropdown menus for Products/Company
- Implement CTA buttons (Launch App, Dashboard)
- Add scroll-based header background change
- Create smooth scroll-to-section functionality

### Acceptance Criteria
- [ ] Header is sticky and stays at top on scroll
- [ ] Header background becomes solid after scrolling 50px
- [ ] Desktop menu shows all navigation items
- [ ] Mobile menu (< 768px) shows hamburger icon
- [ ] Hamburger menu animates smoothly (slide-in from right)
- [ ] Dropdown menus work on hover (desktop) and click (mobile)
- [ ] CTA buttons are styled correctly with hover effects
- [ ] Logo links to homepage
- [ ] Clicking navigation items smoothly scrolls to sections
- [ ] Active section is highlighted in navigation
- [ ] Header is accessible (keyboard navigation, ARIA labels)

### Technical Notes
- Use `position: sticky` for header
- GSAP for hamburger menu animation
- IntersectionObserver for active section detection
- Smooth scroll using Lenis

---

## TICKET #4: Hero Carousel Component

**Priority:** High
**Estimated Effort:** 10 hours
**Dependencies:** #1, #2

### Description
Create the hero section carousel with 3 slides, tab navigation, and automatic rotation with smooth transitions.

### Tasks
- Build carousel component structure
- Implement 3 slides with content (text, images, CTAs)
- Create tab navigation (3 tabs)
- Add auto-rotation functionality (5-second interval)
- Implement smooth slide transitions
- Add pause-on-hover functionality
- Create swipe gestures for mobile

### Acceptance Criteria
- [ ] Carousel displays all 3 slides correctly
- [ ] Slides auto-rotate every 5 seconds
- [ ] Tab indicators show active slide
- [ ] Clicking tab changes slide immediately
- [ ] Slide transitions are smooth (fade + slide effect)
- [ ] Auto-rotation pauses when user hovers over carousel
- [ ] Swipe gestures work on touch devices
- [ ] Content inside slides (heading, text, CTA) animates in on slide change
- [ ] Carousel is responsive (adapts to mobile/tablet/desktop)
- [ ] Previous/Next slide transitions work correctly
- [ ] Accessibility: keyboard navigation (arrow keys), proper ARIA labels

### Technical Notes
- Use Swiper.js or custom implementation
- GSAP for content animations
- CSS transforms for slide transitions
- Consider preloading next slide images

---

## TICKET #5: Smooth Scroll Implementation

**Priority:** High
**Estimated Effort:** 4 hours
**Dependencies:** #1

### Description
Implement Lenis smooth scrolling throughout the entire website for enhanced UX.

### Tasks
- Initialize Lenis in main layout
- Configure smooth scroll parameters (lerp, duration)
- Integrate with GSAP ScrollTrigger
- Handle anchor link scrolling
- Add smooth scroll to navigation clicks
- Test performance on various devices

### Acceptance Criteria
- [ ] Page scrolls with smooth momentum effect
- [ ] Scroll easing feels natural (not too fast or slow)
- [ ] GSAP ScrollTrigger works correctly with Lenis
- [ ] Clicking navigation links triggers smooth scroll to section
- [ ] Anchor links (#section) work with smooth scroll
- [ ] Performance is good (60fps) on desktop
- [ ] Performance is acceptable (30fps+) on mobile
- [ ] Browser back/forward buttons work correctly
- [ ] Scroll position is restored on page reload

### Technical Notes
```javascript
// Lenis configuration example
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true
});
```

---

## TICKET #6: Scroll-Triggered Fade-In Animations

**Priority:** High
**Estimated Effort:** 8 hours
**Dependencies:** #1, #5

### Description
Implement fade-in and slide-up animations for sections as they enter the viewport.

### Tasks
- Create animation utility functions
- Set up IntersectionObserver or GSAP ScrollTrigger
- Apply fade-in animations to all major sections
- Implement stagger animations for grouped elements
- Add slide-up + fade-in combination
- Configure animation timing and easing
- Optimize for performance

### Acceptance Criteria
- [ ] Sections fade in when 20% of element is in viewport
- [ ] Elements slide up 30-50px while fading in
- [ ] Animation duration is 0.6-0.8 seconds
- [ ] Easing feels smooth (use ease-out)
- [ ] Grouped elements (cards, list items) stagger by 0.1s
- [ ] Animations trigger only once (not on scroll up)
- [ ] No layout shift during animations
- [ ] Animations are disabled for users with `prefers-reduced-motion`
- [ ] Performance: animations don't cause jank (maintain 60fps)
- [ ] Animations work correctly with Lenis smooth scroll

### Technical Notes
```javascript
// GSAP ScrollTrigger example
ScrollTrigger.batch('.animate-in', {
  start: 'top 80%',
  onEnter: (elements) => gsap.to(elements, {
    opacity: 1,
    y: 0,
    stagger: 0.1
  })
});
```

---

## TICKET #7: Split-Text Heading Animations

**Priority:** Medium
**Estimated Effort:** 6 hours
**Dependencies:** #1, #6

### Description
Implement split-text animations where headings split into words/characters and animate in sequentially on scroll.

### Tasks
- Create split-text utility function
- Split headings into individual words or characters
- Wrap each segment in span elements
- Animate segments on scroll trigger
- Implement various split-text effects (words, chars, lines)
- Apply to key headings throughout site

### Acceptance Criteria
- [ ] Heading text is split into individual words/characters
- [ ] Each segment is wrapped in a `<span>` element
- [ ] Segments animate in sequentially with 0.05s stagger
- [ ] Animation includes opacity + slight slide/scale effect
- [ ] Split-text works with multi-line headings
- [ ] Original text content remains in DOM for SEO/accessibility
- [ ] Animations trigger when heading is 30% in viewport
- [ ] Performance: splitting doesn't cause layout shift
- [ ] Works correctly with different font sizes
- [ ] Accessible: screen readers still read full text

### Technical Notes
- Use GSAP SplitText plugin (paid) or custom solution
- Alternative: SplitType library (free)
- Example headings to apply: "Trusted by 200+ leading web3 companies"

---

## TICKET #8: Marquee Scrolling Components

**Priority:** Medium
**Estimated Effort:** 6 hours
**Dependencies:** #1, #2

### Description
Create infinite horizontal scrolling marquee components for partner logos and cryptocurrency icons.

### Tasks
- Build reusable Marquee component
- Implement infinite scroll animation
- Add support for different scroll speeds
- Create reverse scroll direction option
- Implement pause-on-hover functionality
- Duplicate content for seamless loop
- Optimize for performance

### Acceptance Criteria
- [ ] Marquee scrolls smoothly and infinitely
- [ ] No visible gap/jump when loop resets
- [ ] Content is duplicated sufficiently for seamless effect
- [ ] Scroll speed is configurable via props
- [ ] Reverse direction option works correctly
- [ ] Marquee pauses on hover
- [ ] Performance: uses CSS transforms (GPU-accelerated)
- [ ] Works on all screen sizes
- [ ] Accessible: users can pause animation
- [ ] Multiple marquees can scroll at different speeds
- [ ] Partner logos marquee scrolls at ~30px/second
- [ ] Cryptocurrency icons: top row scrolls right, bottom row scrolls left

### Technical Notes
```javascript
// Component props
<Marquee speed={30} direction="left" pauseOnHover={true}>
  {/* Content */}
</Marquee>
```

---

## TICKET #9: Stats Carousel Component

**Priority:** Medium
**Estimated Effort:** 5 hours
**Dependencies:** #1, #4

### Description
Build the auto-scrolling stats carousel showing company metrics in the "Strong foundation" section.

### Tasks
- Create stats carousel component
- Implement auto-scroll functionality
- Display stats in card format
- Add infinite loop
- Duplicate stats for seamless scrolling
- Make responsive (stack on mobile)

### Acceptance Criteria
- [ ] Stats auto-scroll horizontally
- [ ] 4 unique stats displayed (volume, days, revenue, users)
- [ ] Stats are duplicated 2x for infinite loop
- [ ] Scroll speed: ~40px/second
- [ ] No visible jump when loop resets
- [ ] On mobile (< 768px): stats stack vertically or become swipeable
- [ ] Animation is smooth (60fps)
- [ ] Cards have proper spacing and styling
- [ ] Numbers are formatted correctly (billions, millions)
- [ ] Accessible: keyboard users can tab through stats

### Technical Notes
- Similar technique to marquee but with larger content blocks
- Consider using requestAnimationFrame for smooth animation

---

## TICKET #10: Interactive Product Cards

**Priority:** Medium
**Estimated Effort:** 7 hours
**Dependencies:** #1, #2, #6

### Description
Create hover-animated product cards for "On Ramp" and "Spend" sections with scaling, glow, and transform effects.

### Tasks
- Build ProductCard component
- Implement hover scale effect
- Add border glow animation on hover
- Create background gradient animation
- Add icon/stat elements inside cards
- Make cards clickable/linkable
- Implement smooth transitions

### Acceptance Criteria
- [ ] Card scales to 1.02-1.05x on hover
- [ ] Border glow appears on hover (gradient animation)
- [ ] Background subtly changes on hover
- [ ] Hover transition is smooth (0.3s duration)
- [ ] Card contains: heading, description, CTA link, stats
- [ ] Stats display correctly with icons
- [ ] Cards are clickable and link to correct pages
- [ ] Cursor changes to pointer on hover
- [ ] Card layout is responsive (stacks on mobile)
- [ ] Touch devices: hover effect triggers on tap
- [ ] Accessibility: focus states match hover states
- [ ] Cards fade in on scroll (integration with #6)

### Technical Notes
```css
/* Transform example */
transform: scale(1.03) translateY(-4px);
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
```

---

## TICKET #11: Blockchain Logo Grid with Animations

**Priority:** Medium
**Estimated Effort:** 5 hours
**Dependencies:** #1, #2, #6

### Description
Create animated grid of blockchain logos that appear on scroll with stagger effect and hover interactions.

### Tasks
- Build grid layout for blockchain logos (14 logos)
- Implement scroll-triggered appear animation
- Add stagger effect to logo animations
- Create hover effect for individual logos
- Make grid responsive
- Optimize logo images

### Acceptance Criteria
- [ ] Grid displays all 14 blockchain logos (BNB, ETH, Polygon, etc.)
- [ ] Grid is responsive: 7 cols desktop, 4 cols tablet, 3 cols mobile
- [ ] Logos animate in on scroll with stagger (0.05s delay between each)
- [ ] Animation: fade in + scale from 0.8 to 1
- [ ] Individual logo scales to 1.1x on hover
- [ ] Hover includes subtle glow effect
- [ ] Logo images are optimized (WebP format, lazy loaded)
- [ ] Grid maintains aspect ratio on all devices
- [ ] Logos are clickable (could link to blockchain pages)
- [ ] Accessible: logos have alt text

### Technical Notes
- Use CSS Grid: `grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))`
- GSAP for stagger animation
- Image optimization: Next.js Image component

---

## TICKET #12: Use Case Tabs & Carousel

**Priority:** Medium
**Estimated Effort:** 8 hours
**Dependencies:** #1, #2, #4

### Description
Build interactive tabs for use cases (Wallets, DEXs, NFT, etc.) with content carousel and smooth transitions.

### Tasks
- Create tab navigation component
- Build 5 use case content panels (Wallets, DEXs, NFT, Yield, Extensions)
- Implement tab switching with smooth transitions
- Add carousel functionality for content
- Create active tab indicator
- Add like/dislike buttons (disabled state)
- Make responsive

### Acceptance Criteria
- [ ] 5 tabs displayed: Wallets, DEXs, NFT & GameFi, Yield Platforms, Browser Extensions
- [ ] Clicking tab switches content with smooth fade transition
- [ ] Active tab has visual indicator (underline or background)
- [ ] Content includes: heading, description
- [ ] Transition duration: 0.4s with fade effect
- [ ] Content slides in from side when tab changes
- [ ] Like/Dislike buttons displayed but disabled
- [ ] On mobile: tabs become scrollable horizontally
- [ ] Tab selection is keyboard accessible (arrow keys)
- [ ] Active tab is announced to screen readers
- [ ] URL hash updates when tab changes (#wallets, #dexs, etc.)

### Technical Notes
- Consider headless UI library for accessible tabs
- GSAP for content transitions
- Manage state with React useState

---

## TICKET #13: Office Locations Carousel

**Priority:** Low
**Estimated Effort:** 6 hours
**Dependencies:** #1, #2, #4

### Description
Create horizontal scrollable carousel showing office locations with images and location details.

### Tasks
- Build location card component
- Create horizontal scrollable carousel
- Add 5 office locations (Valencia, Zagreb, Limassol, London, Denver)
- Include images, city name, address, country flag
- Implement drag-to-scroll functionality
- Add scroll indicators/arrows
- Make responsive

### Acceptance Criteria
- [ ] Carousel displays all 5 office location cards
- [ ] Cards are horizontally scrollable
- [ ] Drag-to-scroll works on desktop
- [ ] Swipe-to-scroll works on mobile/tablet
- [ ] Each card includes: image, city name, full address, country flag
- [ ] Cards have equal size and spacing
- [ ] Scroll indicators (dots or arrows) show current position
- [ ] Smooth scroll snapping to cards
- [ ] On mobile: one card visible at a time
- [ ] On desktop: 2-3 cards visible
- [ ] Images are lazy loaded
- [ ] Accessible: keyboard navigation works

### Technical Notes
- Use Swiper.js for carousel functionality
- CSS Scroll Snap as alternative
- Image aspect ratio: 16:9 or 4:3

---

## TICKET #14: Footer Component

**Priority:** Low
**Estimated Effort:** 4 hours
**Dependencies:** #1, #2

### Description
Build comprehensive footer with navigation links, social media, legal information, and expandable legal text.

### Tasks
- Create footer layout structure
- Add navigation sections (Products, Company, Social)
- Include legal text (collapsible section)
- Add payment method icons (Visa, Mastercard)
- Implement expandable "Show legal information" button
- Make responsive

### Acceptance Criteria
- [ ] Footer contains all navigation sections
- [ ] Products links: On Ramp, Spend, Mercuryo Pay
- [ ] Company links: About, Explore, Career, Help
- [ ] Social links: LinkedIn, X.com (Twitter)
- [ ] Press contact: email link
- [ ] Legal text is collapsed by default
- [ ] "Show legal information" button expands/collapses legal text
- [ ] Smooth expand/collapse animation (max-height transition)
- [ ] Payment icons (Visa, Mastercard) displayed
- [ ] Footer links: Cookies policy, Terms of Service, Privacy Notice
- [ ] All links open in correct target (new tab for external)
- [ ] Footer is responsive (stacks sections on mobile)
- [ ] Accessible: focusable links, proper link labels

### Technical Notes
- Use CSS Grid for footer layout
- GSAP or CSS transition for expand/collapse
- Consider dark background to match design

---

## TICKET #15: Final Polish & Performance Optimization

**Priority:** High
**Estimated Effort:** 8 hours
**Dependencies:** #1-#14

### Description
Final optimization pass including performance tuning, accessibility improvements, and browser testing.

### Tasks
- Optimize all images (WebP, lazy loading)
- Implement code splitting
- Add loading states/skeletons
- Test and fix all animations on various devices
- Run Lighthouse audit and fix issues
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Accessibility audit (WCAG 2.1 AA)
- Add meta tags for SEO
- Implement error boundaries
- Final responsive testing

### Acceptance Criteria
- [ ] Lighthouse Performance score: 90+
- [ ] Lighthouse Accessibility score: 95+
- [ ] Lighthouse Best Practices score: 95+
- [ ] Lighthouse SEO score: 95+
- [ ] All images use WebP format with fallbacks
- [ ] Images are lazy loaded below the fold
- [ ] Code is split by route (Next.js automatic)
- [ ] Animations work smoothly on Chrome, Firefox, Safari, Edge
- [ ] Website works on iOS Safari and Chrome for Android
- [ ] All interactive elements are keyboard accessible
- [ ] Screen reader testing completed (VoiceOver, NVDA)
- [ ] Proper heading hierarchy (h1 -> h6)
- [ ] Meta tags include: title, description, og:image, twitter:card
- [ ] No console errors or warnings
- [ ] Mobile performance is acceptable (50+ score)
- [ ] GDPR cookie notice implemented (if needed)

### Technical Notes
- Use Next.js Image component for optimization
- Implement dynamic imports for heavy components
- Consider using Skeleton UI for loading states
- Test with Chrome DevTools Lighthouse
- Use axe DevTools for accessibility

---

## Implementation Order

**Phase 1 - Foundation (Tickets #1-#2):** 10 hours
- Setup project and responsive system

**Phase 2 - Core Structure (Tickets #3-#5):** 22 hours
- Navigation, Hero, Smooth scroll

**Phase 3 - Animation System (Tickets #6-#7):** 14 hours
- Scroll animations and text effects

**Phase 4 - Interactive Components (Tickets #8-#12):** 37 hours
- Marquees, carousels, cards, tabs

**Phase 5 - Final Sections (Tickets #13-#14):** 10 hours
- Offices, Footer

**Phase 6 - Polish (Ticket #15):** 8 hours
- Optimization and testing

**Total Estimated Effort:** ~101 hours (~2.5 weeks for 1 developer)

---

## Technology Stack Summary

### Core
- **Framework:** Next.js 14+ (React 18+)
- **Language:** TypeScript
- **Styling:** Tailwind CSS

### Animation Libraries
- **GSAP:** Main animation engine
- **Lenis:** Smooth scrolling
- **Swiper.js:** Carousels

### Additional
- **Framer Motion:** Backup for React-specific animations
- **SplitType:** Text splitting (or GSAP SplitText)
- **Next.js Image:** Image optimization

---

**Last Updated:** 2025-10-23
**Created By:** Claude Code
**Project Repository:** https://github.com/Fedutin22/claude-dev-1
