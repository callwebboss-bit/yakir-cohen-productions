---
category: Design & UX
name: visualizer-design
description: |
  **Visualizer SKILL** — Create visually stunning, accessible, and RTL-compliant interfaces.
  
  **Role:** Design direction, component specifications, responsive layouts aligned with
  Acoustic Soul × Spotify luxury aesthetic. Every pixel serves the brand.
  
  **Trigger:** `@visualizer: design layout for [page]` or `@visualizer: spec this component`

---

# 🎨 Visualizer - Design Direction SKILL

## Overview

**Visualizer** brings Yakir Cohen's boutique luxury aesthetic to life through meticulous design. Every interface must balance beauty with accessibility and performance.

### What Visualizer Does
- ✅ Design system specification (colors, typography, spacing)
- ✅ Component layouts (responsive, RTL-compliant)
- ✅ Visual hierarchy & information architecture
- ✅ Glassmorphism & luxury effects
- ✅ Accessibility compliance (WCAG AA colors, contrast)
- ✅ Motion/animation specs (for motion library)

### What Visualizer Does NOT Do
- ❌ Write HTML/CSS (developers implement from specs)
- ❌ Make copy decisions (Storyteller decides)
- ❌ Optimize performance (Optimizer does that)
- ❌ Audit accessibility after design (Guardian verifies implementation)

---

## Design System

### Brand Colors
```css
--brand-red: #D42B2B (primary accent)
--background: #FAFAF8 (warm white, RTL-friendly)
--text-primary: #1A1A1A (dark gray, high contrast)
--text-secondary: #666666 (medium gray)
--border: #E8E8E6 (subtle divider)
--overlay: rgba(255, 255, 255, 0.1) (for glassmorphism)
```

### Typography
```
Headings (H1–H6):
  Font: Frank Ruhl Libre (serif, elegant, Hebrew-optimized)
  Weight: 700 (bold) for H1–H3; 400 (regular) for H4–H6
  Line Height: 1.2 (tight, luxury feel)
  Letter Spacing: -0.5px (refined)

Body Text:
  Font: Heebo (sans-serif, clean, Hebrew-optimized)
  Weight: 400 (regular)
  Size: 16px (base), 18px (large text areas)
  Line Height: 1.6 (readable, not cramped)

Metadata/Small:
  Font: Heebo 12px
  Weight: 300 (light)
  Color: text-secondary
```

### Spacing (8px Grid)
```
8px, 16px, 24px, 32px, 48px, 64px
```

Example:
- Button padding: 16px (horizontal), 12px (vertical)
- Section padding: 48px (desktop), 32px (tablet), 24px (mobile)
- Component gaps: 24px

### Border Radius
```
Subtle: 4px (inputs, small components)
Standard: 12px (cards, moderate containers)
Large: 20px (hero sections, feature cards)
Pill: 999px (badges, small buttons)
```

---

## Glassmorphism Pattern

**Yakir Cohen's signature visual effect** — frosted glass + light blur + subtle shadow.

### Component Specification
```tsx
className="
  bg-white/10              /* 10% white overlay */
  backdrop-blur-md         /* Medium blur (12px) */
  border border-white/20   /* Subtle border */
  rounded-3xl              /* Large radius */
  shadow-xl                /* Elevation shadow */
  hover:bg-white/15        /* Slight intensify on hover */
  transition-all           /* Smooth animation */
  duration-300
"
```

### Visual Example
```
[Glassmorphic Card Layout]

Background: Semi-transparent white overlay
Backdrop: Blurred content behind
Border: Very subtle white line
Shadow: Drop shadow (not too harsh)
Text: Dark text readable over glass
Interaction: Hover state adds slight opacity increase
```

---

## Responsive Breakpoints

### Breakpoints (Mobile-First)
```css
mobile:    320px  (primary: Israeli phone users)
tablet:    768px
desktop:   1024px (desktop computer)
wide:      1280px (ultrawide monitors)
```

### Component Sizing
**Navigation:**
- Mobile: 56px height (touch-friendly)
- Desktop: 64px height

**Touch Targets:**
- Minimum 44px × 44px (accessibility requirement)
- Buttons/links never smaller than 40px
- Mobile buttons: 48px × 48px preferred

**Images:**
- Hero: 1200px × 600px (desktop), 375px × 600px (mobile)
- Portfolio: 400px × 300px (grid), 100% (detail page)
- Thumbnail: 200px × 200px

---

## RTL Compliance

**All designs must work in Arabic/Hebrew (right-to-left).**

### CSS Logical Properties (NOT left/right)
❌ **Avoid:**
```css
padding-left: 20px;
padding-right: 10px;
margin-left: 0;
text-align: right;
```

✅ **Use:**
```css
padding-inline: 20px;   /* Adapts to LTR/RTL */
padding-inline-end: 10px; /* Right in LTR, left in RTL */
margin-inline-start: 0;  /* Left in LTR, right in RTL */
text-align: start;       /* Right in RTL, left in LTR */
```

### Flex Direction
```css
/* ✅ Correct */
flex-direction: row;        /* Works both LTR and RTL */

/* ❌ Avoid */
flex-direction: row-reverse; /* Hardcoded direction */
```

### Form Inputs
- [ ] Labels positioned logically (start/end, not left/right)
- [ ] Icons aligned to logical side (input icon on trailing side)
- [ ] Placeholder text inherits direction
- [ ] Error messages aligned correctly

---

## Component Specifications

### Hero Section
```
Layout: Full-width, centered text over background
Background: Brand red gradient or image with overlay
Text: H1 + subheading (Hebrew-optimized)
CTA Button: Below text, hover state defined
Aspect Ratio: 16:9 (desktop), 4:3 (mobile)
Height: 600px (desktop), 500px (mobile)
```

### Navigation Bar
```
Container: Sticky or fixed (designer choice)
Height: 64px (desktop), 56px (mobile)
Logo: 40px × 40px, left/start-aligned
Menu: Horizontal desktop, hamburger mobile
Colors: White background, dark text, red hover
Accessibility: Keyboard nav, focus indicators
```

### Card Components
```
Base Styling: Glassmorphism pattern (see above)
Padding: 24px
Content: Image (top), title (h3), description (body), CTA (link)
Interactions: Hover state (slight shadow increase), no scale
Responsive: 3-column desktop, 2-column tablet, 1-column mobile
```

### Forms
```
Input Fields:
  - Border: 1px solid #E8E8E6
  - Radius: 8px
  - Padding: 12px (vertical), 16px (horizontal)
  - Font: Heebo 16px
  - Focus state: Border color → brand red, outline-2 offset-2
  - Placeholder: text-secondary (visible but subtle)
  
Labels:
  - Position: Above input (not inside)
  - Font: Heebo 14px, weight 500
  - Color: text-primary
  - Required indicator: * (red)

Buttons:
  - Primary: Brand red background, white text
  - Secondary: White background, red border/text
  - Disabled: Opacity 50%
  - Hover: Slight scale (1.02) + shadow
```

### Typography Hierarchy
```
H1: 42px (desktop), 32px (mobile) — Page title
H2: 32px (desktop), 24px (mobile) — Section heading
H3: 24px (desktop), 20px (mobile) — Card title
H4: 20px (desktop), 18px (mobile) — Subsection
Body: 16px (desktop), 16px (mobile) — Default
Small: 14px — Metadata, captions
```

---

## Animation Specs

**Tool:** motion library (Framer Motion)

### Micro-interactions
```tsx
// Button hover
initial={{ scale: 1 }}
whileHover={{ scale: 1.02 }}
transition={{ duration: 0.2, ease: "easeOut" }}

// Page entrance
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.4, ease: "easeOut" }}

// Modal
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 0.95 }}
transition={{ duration: 0.2 }}
```

### Animation Principles
- Duration: 200–400ms (feel responsive, not sluggish)
- Easing: easeOut for entrances, easeInOut for interactions
- GPU acceleration: Use transform/opacity (not width/height)
- Accessibility: Respect prefers-reduced-motion

---

## Accessibility Visual Checklist

### Color Contrast
- [ ] Text vs background: ≥4.5:1 (normal), ≥3:1 (large >18px)
- [ ] Check with WebAIM contrast checker
- [ ] Test with Color Blindness Simulator (red/green colorblind)

### Focus Indicators
- [ ] Focus outline visible (2px, contrasting color)
- [ ] Outline offset: 2px (not overlapping element)
- [ ] Focus order logical (top-to-bottom, left-to-right)

### Icon Usage
- [ ] Icons paired with text labels (for ambiguous icons)
- [ ] Decorative icons: aria-hidden="true"
- [ ] Interactive icons: aria-label or title text

### Mobile Accessibility
- [ ] Touch targets: ≥44px × 44px
- [ ] No tap-and-hold required for essential functions
- [ ] Readable at 200% zoom

---

## Design Handoff to Developers

### What Visualizer Provides
1. **Visual Specification Document** (this SKILL)
2. **Component Mockups** (Figma, sketches, or hi-fi screenshots)
3. **Color Palette** (hex codes, CSS variables)
4. **Typography Specs** (fonts, sizes, weights, line heights)
5. **Spacing/Grid** (margin, padding, gaps)
6. **State Variations** (hover, active, disabled, focus)
7. **Breakpoint Specs** (how components change at each breakpoint)
8. **Animation Specs** (if complex motion required)

### Checklist Before Handoff
- [ ] All colors have hex codes
- [ ] All fonts specified (family, weight, size)
- [ ] Spacing defined in multiples of 8px
- [ ] RTL layout tested (not just mirrored)
- [ ] Accessibility: Contrast ratios verified, focus states shown
- [ ] Responsive: Shown at 375px, 768px, 1280px
- [ ] Interactions: Hover, active, disabled states shown

---

## Common Patterns

### Hero with Text Overlay
```
Image: Full-width background (16:9 aspect)
Overlay: Semi-transparent dark (rgba(0,0,0,0.3))
Text: Centered, white, large (H1 + subheading)
CTA: Below text, branded button
```

### Portfolio Grid
```
Layout: CSS Grid, 3 columns (desktop), 2 (tablet), 1 (mobile)
Cards: Glassmorphism pattern, image top, title below
Hover: Slight shadow increase, image subtle zoom (1.02)
Links: Card clickable, also "View" link on hover
```

### Sticky Navigation
```
Position: Fixed top, z-index 100
Height: 64px
Background: White, shadow on scroll
Logo: Left-aligned, clickable (home link)
Menu: Right-aligned, icon buttons (mobile), links (desktop)
```

---

## Red Flags (Design Issues)

🚨 **Do Not Design:**
- [ ] Color contrast <4.5:1 on text
- [ ] Touch targets <44px
- [ ] Hardcoded left/right (use logical properties)
- [ ] Text unreadable at 200% zoom
- [ ] Animation >500ms (feels sluggish)
- [ ] Missing focus indicators

---

## Tools

- **Figma:** Design mockups
- **Adobe Color:** Contrast checker
- **motion library:** Animation specs
- **Chrome DevTools:** Responsive testing, accessibility audit
- **NVDA:** Screen reader testing

---

## Version History
| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Apr 29, 2026 | Initial Visualizer SKILL; Glassmorphism specs |

---

**Contact:** Visualizer → Developers for implementation → Guardian for accessibility verification.
