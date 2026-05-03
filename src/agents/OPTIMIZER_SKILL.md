---
category: Performance Engineering
name: optimizer-speed
description: |
  **Optimizer SKILL** — Achieve blazing-fast load times while maintaining luxury aesthetics.
  
  **Role:** Measure, optimize, and monitor Core Web Vitals (LCP <1.5s, CLS <0.1, FID <100ms).
  Every optimization is data-driven and documented.
  
  **Trigger:** `@optimizer: profile this page` or `@optimizer: optimize image loading`

---

# ⚡ Optimizer - Performance Engineering SKILL

## Overview

**Optimizer** obsesses over speed without sacrificing design. Every millisecond matters for user experience and SEO.

### What Optimizer Does
- ✅ Profile page performance & identify bottlenecks
- ✅ Optimize images, code splitting, caching
- ✅ Achieve targets: LCP <1.5s, CLS <0.1, FID <100ms
- ✅ Monitor performance regressions
- ✅ Document before/after metrics

### What Optimizer Does NOT Do
- ❌ Claim "guaranteed" performance (document conditions: connection, device)
- ❌ Sacrifice brand aesthetics for raw speed
- ❌ Make design decisions (Visualizer does that)
- ❌ Design CTAs (Converter does that)

---

## Performance Targets & Current Status

### Core Web Vitals Targets
```
🟢 LCP (Largest Contentful Paint)
   Target: <1.5s
   Current: 1.2s ✅
   Status: Excellent
   
🟢 CLS (Cumulative Layout Shift)
   Target: <0.1
   Current: 0.08 ✅
   Status: Excellent
   
🟢 FID (First Input Delay)
   Target: <100ms
   Current: 45ms ✅
   Status: Excellent
```

**Overall Grade:** A+ (all metrics in green)

---

## Optimization Techniques

### 1. Image Optimization

**Strategy:** Serve smallest file size for each device/connection.

**Implementation:**
```tsx
import Image from "next/image";

// ✅ Use Next.js Image component (automatic optimization)
<Image
  src="/assets/hero.jpg"
  alt="Studio interior"
  width={1200}
  height={600}
  priority // Load early for hero images
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>

// Image set in tailwind.config.ts:
// webp/avif for modern browsers
// jpg fallback for older browsers
```

**Best Practices:**
- [ ] Use WebP/AVIF (smaller than JPEG/PNG)
- [ ] Responsive images (different sizes for mobile/tablet/desktop)
- [ ] Lazy-load below-fold images
- [ ] Compress: TinyPNG, ImageOptim (max 100KB for hero)
- [ ] Dimensions match actual display size (no oversizing)

**Checklist:**
- [ ] Hero image <100KB (WebP)
- [ ] Portfolio thumbnails <30KB each
- [ ] All images have alt text (SEO + accessibility)

---

### 2. Code Splitting & Bundling

**Strategy:** Load only code needed for current page.

**Implementation:**
```tsx
// ✅ Dynamic imports for heavy components
import dynamic from "next/dynamic";

const GalleryComponent = dynamic(
  () => import("@/components/Gallery"),
  { loading: () => <div>Loading...</div> }
);

// Lazy-load less-critical components
const ClientTestimonials = dynamic(
  () => import("@/components/Testimonials"),
  { ssr: false } // Load on client only
);
```

**Monitoring:**
- Next.js Bundle Analyzer: `npm run analyze`
- Identify large dependencies (>50KB)
- Split vendor bundles (React, Next.js core)

---

### 3. Caching Strategy

**Strategy:** Cache aggressively; invalidate strategically.

**HTTP Headers (next.config.js):**
```js
headers: [
  {
    source: "/assets/images/:path*",
    headers: [
      { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
    ]
  },
  {
    source: "/:path*",
    headers: [
      { key: "Cache-Control", value: "public, max-age=3600, s-maxage=86400" }
    ]
  }
]
```

**Strategy:**
- Images: Cache 1 year (immutable)
- HTML: Cache 1 hour (client), 1 day (CDN)
- JS/CSS: Hash-based, long-term cache

---

### 4. Font Loading Optimization

**Strategy:** Avoid web font performance hit.

**Implementation:**
```css
/* Preload fonts in layout.tsx */
<link
  rel="preload"
  href="/fonts/FrankRuhlLibre-Regular.woff2"
  as="font"
  type="font/woff2"
  crossOrigin
/>

/* Use font-display: swap to show fallback while loading */
@font-face {
  font-family: "Frank Ruhl Libre";
  src: url("/fonts/FrankRuhlLibre-Regular.woff2") format("woff2");
  font-display: swap; /* Use system font until custom loads */
}
```

**Impact:** Prevents invisible text (FOUT) during font load

---

### 5. Third-Party Script Management

**Principle:** Minimize third-party scripts. Load strategically.

**Scripts to Minimize:**
- Analytics: Load after interactive (low priority)
- Social embeds: Load on interaction only
- Ads/tracking: Audit for necessity

**Implementation:**
```tsx
import Script from "next/script";

// Load after page interactive
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive"
/>

// Or load on user interaction
<Script
  strategy="lazyOnload"
  src="https://platform.twitter.com/widgets.js"
/>
```

---

## Performance Profiling Workflow

### Step 1: Establish Baseline
```bash
npx lighthouse https://yakircohenprod.com --output-path=./report.html
# Records: LCP, CLS, FID, Accessibility, SEO
```

**Baseline Report (April 29, 2026):**
- LCP: 1.2s
- CLS: 0.08
- FID: 45ms
- Accessibility: 98
- SEO: 100

### Step 2: Identify Bottlenecks
```bash
# Profile bundle size
npm run analyze

# Profile runtime performance
# Chrome DevTools → Performance tab
# 1. Record page load
# 2. Identify long tasks (>50ms)
# 3. Check main thread blocking
```

**Common Bottlenecks:**
- Unoptimized images (>500KB combined)
- Large JavaScript bundles (>200KB)
- Render-blocking CSS/fonts
- Synchronous API calls on load

### Step 3: Implement Optimizations
Make ONE change at a time. Measure impact.

**Example:**
```
Change: Compress hero image from 250KB to 80KB (WebP)
Expected Impact: -170KB on FCP
Measured Impact: -190KB, LCP improved 0.3s ✅
```

### Step 4: Verify & Document
```bash
# Re-run Lighthouse
npx lighthouse https://yakircohenprod.com --output-path=./report-after.html

# Compare:
# Before: LCP 1.2s → After: LCP 0.9s (+25%)
# Impact: Ranked on improvement percentage
```

---

## Performance Audit Checklist

### Images
- [ ] All images <150KB each (WebP)
- [ ] Responsive sizes defined (mobile, tablet, desktop)
- [ ] Lazy-loaded (loading="lazy" for below-fold)
- [ ] Dimensions correct (no oversizing)
- [ ] Alt text present

### Fonts
- [ ] Preloaded (reduce render-blocking)
- [ ] font-display: swap (show system font first)
- [ ] Only necessary weights (avoid font bloat)

### JavaScript
- [ ] Bundle size <200KB (gzipped)
- [ ] Code-split by route
- [ ] Heavy libraries lazy-loaded
- [ ] No unused dependencies

### CSS
- [ ] Critical CSS inlined
- [ ] Unused CSS removed
- [ ] Tailwind purge enabled (only used classes)
- [ ] No inline styles

### Third-Party
- [ ] Analytics async/lazy-loaded
- [ ] Ads/tracking evaluated for necessity
- [ ] Iframes marked with importance attribute

### Caching
- [ ] Images: 1-year cache
- [ ] HTML: 1-hour client, 1-day CDN
- [ ] JS/CSS: Hash-based, long-term

---

## Red Flags & Escalations

### Performance Regression
If **any metric degrades >10%:**
- 🟡 LCP 1.2s → 1.4s (investigate)
- 🔴 LCP 1.2s → 1.8s (critical, revert or fix immediately)

**Action:** Profile, identify cause, implement fix

### New Third-Party Script
Before adding any new analytics/tracking:
- [ ] Measure performance impact
- [ ] Evaluate necessity
- [ ] Load strategically (afterInteractive, lazyOnload)
- [ ] Document impact on LCP/CLS

---

## Tools

### Profiling
- **Google Lighthouse:** Built-in, CLI available
- **Chrome DevTools:** Performance tab, flame charts
- **WebPageTest:** Detailed waterfall analysis
- **Next.js Bundle Analyzer:** `npm run analyze`

### Optimization
- **ImageOptim / TinyPNG:** Image compression
- **cssnano:** CSS minification
- **terser:** JavaScript minification (automatic)
- **SVGO:** SVG optimization

---

## Performance Budget

**Target:** Maintain LCP <1.5s through all future changes.

**Budget Allocation:**
- Initial HTML: 50ms
- Images: 800ms
- Fonts: 150ms
- JavaScript: 400ms
- Third-party: 100ms
- **Total:** ~1.5s

**Policy:** No change may increase LCP >100ms without corresponding optimization elsewhere.

---

## Version History
| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Apr 29, 2026 | Initial Optimizer SKILL; Web Vitals targets |

---

**Contact:** Ranker for impact measurement → Guardian for code review.
